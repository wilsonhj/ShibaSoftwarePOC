import type { NextConfig } from 'next'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

// Ensures local `next dev` behaves closer to the Cloudflare Workers runtime.
initOpenNextCloudflareForDev()

const csp = [
  "default-src 'self'",
  // Note: 'unsafe-inline' is required for Next.js and Tailwind CSS
  // Consider using nonces in production for stricter CSP
  "script-src 'self' 'unsafe-inline'",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://api.resend.com https://*.upstash.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const baseSecurityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'credentialless',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'cross-origin',
  },
  {
    key: 'Origin-Agent-Cluster',
    value: '?1',
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
]

if (process.env.NODE_ENV === 'production') {
  baseSecurityHeaders.push({
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  })
}

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Enable static export for Cloudflare Pages
  // Note: This project deploys to Cloudflare Workers via OpenNext (not static export).
  // output: 'export',
  
  // Image optimization config for Cloudflare
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shibasoftwareconsulting.com',
      },
    ],
  },
  
  // Security headers for all routes
  async headers() {
    return [
      {
        source: '/:path*',
        headers: baseSecurityHeaders,
      },
    ]
  },
  
  // Redirects
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.shibasoftwareconsulting.com',
          },
        ],
        destination: 'https://shibasoftwareconsulting.com/:path*',
        permanent: true,
      },
    ]
  },
  
  // Body size limit for API routes
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

export default nextConfig
