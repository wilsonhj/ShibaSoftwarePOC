import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas'
import { ZodError } from 'zod'

// In-memory rate limiter (for production, use Redis/Upstash)
const rateLimits = new Map<string, number[]>()

/**
 * Rate limiting function
 * @param ip - Client IP address
 * @param limit - Maximum requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns true if request is allowed, false if rate limited
 */
function rateLimit(ip: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now()
  const timestamps = rateLimits.get(ip) || []
  
  // Remove timestamps outside the current window
  const validTimestamps = timestamps.filter(t => now - t < windowMs)
  
  if (validTimestamps.length >= limit) {
    return false // Rate limit exceeded
  }
  
  validTimestamps.push(now)
  rateLimits.set(ip, validTimestamps)
  
  // Clean up old entries periodically
  if (rateLimits.size > 1000) {
    const cutoff = now - windowMs
    for (const [key, times] of rateLimits.entries()) {
      if (times.every(t => t < cutoff)) {
        rateLimits.delete(key)
      }
    }
  }
  
  return true
}

/**
 * Get client IP address from request headers
 */
function getClientIp(request: Request): string {
  // Check common proxy headers
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  
  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }
  
  return 'unknown'
}

/**
 * Validate allowed origins for CORS
 */
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false
  
  const allowedOrigins = [
    'https://shibasoftware.com',
    'https://www.shibasoftware.com',
    ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
  ]
  
  return allowedOrigins.includes(origin)
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  
  try {
    // 1. CORS Check
    if (origin && !isAllowedOrigin(origin)) {
      return NextResponse.json(
        { success: false, error: 'Origin not allowed' },
        { status: 403 }
      )
    }
    
    // 2. Rate Limiting
    const clientIp = getClientIp(request)
    if (!rateLimit(clientIp, 5, 60000)) { // 5 requests per minute
      console.warn(`Rate limit exceeded for IP: ${clientIp}`)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again in a minute.' 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': '60'
          }
        }
      )
    }
    
    // 3. Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)
    
    // 4. Log only metadata (NO PII/sensitive data)
    console.log('Contact form submission received', {
      service: validatedData.service,
      timestamp: new Date().toISOString(),
      ip: clientIp,
      // Do NOT log: name, email, company, message, budget
    })
    
    // 5. TODO: Implement email sending
    // In production, send email using service like Resend, SendGrid, or AWS SES
    // Example:
    // if (process.env.RESEND_API_KEY) {
    //   await fetch('https://api.resend.com/emails', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       from: 'contact@shibasoftware.com',
    //       to: 'spurts-lovers-88@icloud.com',
    //       subject: `New Contact Form: ${validatedData.service}`,
    //       html: `
    //         <h2>New Contact Form Submission</h2>
    //         <p><strong>Name:</strong> ${validatedData.name}</p>
    //         <p><strong>Email:</strong> ${validatedData.email}</p>
    //         <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
    //         <p><strong>Service:</strong> ${validatedData.service}</p>
    //         <p><strong>Budget:</strong> ${validatedData.budget || 'Not specified'}</p>
    //         <p><strong>Message:</strong></p>
    //         <p>${validatedData.message}</p>
    //       `,
    //     }),
    //   })
    // }
    
    // 6. Return success response with CORS headers
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received successfully' 
      },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    )
    
  } catch (error) {
    // Log error without exposing details to client
    if (error instanceof ZodError) {
      console.error('Validation error:', {
        timestamp: new Date().toISOString(),
        ip: getClientIp(request),
        // Log validation errors for debugging, but don't send to client
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid form data. Please check your input and try again.'
          // Do NOT expose error.issues or detailed validation errors
        },
        { status: 400 }
      )
    }
    
    // Generic error logging
    console.error('Contact form error:', {
      timestamp: new Date().toISOString(),
      ip: getClientIp(request),
      error: error instanceof Error ? error.message : 'Unknown error'
    })
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process request. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS(request: Request) {
  const origin = request.headers.get('origin')
  
  if (origin && isAllowedOrigin(origin)) {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400', // 24 hours
      },
    })
  }
  
  return new NextResponse(null, { status: 403 })
}
