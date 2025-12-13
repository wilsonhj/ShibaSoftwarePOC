import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas'
import { ZodError } from 'zod'
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

// Initialize Redis client for rate limiting (optional - falls back to in-memory)
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 m'),
      analytics: true,
      prefix: 'contact-form',
    })
  : null

// Fallback in-memory rate limiting
const rateLimits = ratelimit ? null : new Map<string, number[]>()

type RateLimitResult = {
  allowed: boolean
  retryAfter?: number
}

async function rateLimit(ip: string, limit = 5, windowMs = 60000): Promise<RateLimitResult> {
  if (ratelimit && ip !== 'unknown') {
    const result = await ratelimit.limit(`contact:${ip}`)

    if (!result.success) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((result.reset * 1000 - Date.now()) / 1000)
      )

      return {
        allowed: false,
        retryAfter: retryAfterSeconds,
      }
    }

    return { allowed: true }
  }

  if (!rateLimits) {
    return { allowed: true }
  }

  const now = Date.now()
  const timestamps = rateLimits.get(ip) || []

  const validTimestamps = timestamps.filter((timestamp) => now - timestamp < windowMs)

  if (validTimestamps.length >= limit) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((windowMs - (now - validTimestamps[0])) / 1000)
    )

    return {
      allowed: false,
      retryAfter: retryAfterSeconds,
    }
  }

  validTimestamps.push(now)
  rateLimits.set(ip, validTimestamps)

  // Cleanup old entries
  if (rateLimits.size > 1000) {
    const cutoff = now - windowMs
    for (const [key, times] of rateLimits.entries()) {
      if (times.every((timestamp) => timestamp < cutoff)) {
        rateLimits.delete(key)
      }
    }
  }

  return { allowed: true }
}

/**
 * Get client IP address from request headers
 */
function getClientIp(request: Request): string {
  // Check common proxy headers (Cloudflare, Vercel, etc.)
  const cfConnectingIp = request.headers.get('cf-connecting-ip')
  if (cfConnectingIp) {
    return cfConnectingIp
  }

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
 * Build allowlist of origins from env with sensible defaults
 */
function getAllowedOrigins(): string[] {
  const envOrigins = process.env.ALLOWED_ORIGINS
    ?.split(',')
    .map((value) => value.trim())
    .filter(Boolean)

  const defaults = [
    'https://shibasoftwareconsulting.com', 
    'https://www.shibasoftwareconsulting.com'
  ]
  const devOrigins = process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : []

  const baseList = envOrigins && envOrigins.length > 0 ? envOrigins : defaults

  return Array.from(new Set([...baseList, ...devOrigins]))
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false

  return getAllowedOrigins().includes(origin)
}

function resolveAllowedOrigin(origin: string | null): string | null {
  if (origin && isAllowedOrigin(origin)) {
    return origin
  }

  const [fallback] = getAllowedOrigins()
  return fallback ?? null
}

function createCorsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    Vary: 'Origin',
  }

  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin
  }

  return headers
}

/**
 * Escape HTML special characters to prevent XSS in email templates
 */
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  }
  return text.replace(/[&<>"'`=/]/g, (char) => htmlEscapes[char])
}

/**
 * Send email using Resend API
 */
async function sendEmail(data: {
  name: string
  email: string
  company?: string
  service: string
  budget?: string
  message: string
}): Promise<{ success: boolean; error?: string }> {
  const resendApiKey = process.env.RESEND_API_KEY
  
  if (!resendApiKey) {
    console.warn('RESEND_API_KEY not configured - email not sent')
    return { success: true } // Return success to not block form submission
  }

  // Sanitize all user inputs to prevent XSS in email
  const sanitized = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    company: data.company ? escapeHtml(data.company) : undefined,
    message: escapeHtml(data.message),
  }

  const serviceLabels: Record<string, string> = {
    fullstack: 'Cloud-Native Full-Stack Development',
    microservices: 'Microservice Architecture',
    api: 'REST API Development',
    events: 'Event-Driven Systems',
    ai: 'AI & RAG Applications',
    mlops: 'MLOps & LLM Pipelines',
    consultation: 'General Consultation',
  }

  const budgetLabels: Record<string, string> = {
    'under-25k': 'Under $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    'over-100k': 'Over $100,000',
  }

  // Use safe label lookup (service and budget are already validated by Zod enum)
  const serviceLabel = serviceLabels[data.service] || 'General Inquiry'
  const budgetLabel = data.budget ? (budgetLabels[data.budget] || 'Not specified') : undefined

  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'mail@shibasoftwareconsulting.com'

  try {
    // Send notification email to business
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shiba Software <noreply@shibasoftwareconsulting.com>',
        to: notificationEmail,
        subject: `New Contact Form: ${serviceLabel}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${sanitized.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${sanitized.email}" style="color: #06b6d4;">${sanitized.email}</a></td>
                </tr>
                ${sanitized.company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Company:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${sanitized.company}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Service:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${serviceLabel}</td>
                </tr>
                ${budgetLabel ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Budget:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${budgetLabel}</td>
                </tr>
                ` : ''}
              </table>
              
              <div style="margin-top: 20px;">
                <h3 style="margin: 0 0 10px 0; color: #374151;">Project Details:</h3>
                <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${sanitized.message}</div>
              </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json()
      console.error('Resend API error:', errorData)
      return { success: false, error: 'Failed to send notification email' }
    }

    // Send auto-reply to the submitter
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shiba Software Consulting <noreply@shibasoftwareconsulting.com>',
        to: data.email, // Use original email for sending (already validated by Zod)
        subject: 'Thank you for contacting Shiba Software Consulting',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <p>Hi ${sanitized.name},</p>
              
              <p>Thank you for contacting Shiba Software Consulting. We've received your inquiry about <strong>${serviceLabel}</strong> and will review your project details shortly.</p>
              
              <p><strong>What happens next?</strong></p>
              <ol style="padding-left: 20px;">
                <li>We'll review your project requirements</li>
                <li>You'll receive a response within 24 hours</li>
                <li>If it's a good fit, we'll schedule a consultation call</li>
              </ol>
              
              <p>In the meantime, feel free to:</p>
              <ul style="padding-left: 20px;">
                <li>Check out our <a href="https://shibasoftwareconsulting.com/services" style="color: #06b6d4;">services</a></li>
                <li>Learn more <a href="https://shibasoftwareconsulting.com/about" style="color: #06b6d4;">about us</a></li>
              </ul>
              
              <p>If you have any urgent questions, you can reply directly to this email.</p>
              
              <p style="margin-top: 30px;">
                Best regards,<br>
                <strong>Shiba Software Consulting</strong><br>
                <a href="https://shibasoftwareconsulting.com" style="color: #06b6d4;">shibasoftwareconsulting.com</a>
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                <p>This is an automated response. Please do not reply to this email if you haven't contacted us.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: 'Failed to send email' }
  }
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

    const responseOrigin = resolveAllowedOrigin(origin)
    const corsHeaders = createCorsHeaders(responseOrigin)

    // 2. Rate Limiting
    const clientIp = getClientIp(request)
    const rateLimitResult = await rateLimit(clientIp, 5, 60000)

    if (!rateLimitResult.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`)

      if (rateLimitResult.retryAfter) {
        corsHeaders['Retry-After'] = rateLimitResult.retryAfter.toString()
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again in a minute.',
        },
        {
          status: 429,
          headers: corsHeaders,
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
    })
    
    // 5. Send email via Resend
    const emailResult = await sendEmail(validatedData)
    
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      // Still return success to user - we have the data logged
    }
    
    // 6. Return success response with CORS headers
    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
      },
      {
        status: 200,
        headers: corsHeaders,
      }
    )

  } catch (error) {
    // Log error without exposing details to client
    if (error instanceof ZodError) {
      console.error('Validation error:', {
        timestamp: new Date().toISOString(),
        ip: getClientIp(request),
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid form data. Please check your input and try again.'
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

  if (origin && !isAllowedOrigin(origin)) {
    return new NextResponse(null, { status: 403 })
  }

  const responseOrigin = resolveAllowedOrigin(origin)
  const headers = createCorsHeaders(responseOrigin)
  headers['Access-Control-Max-Age'] = '86400'

  return new NextResponse(null, {
    status: 204,
    headers,
  })
}
