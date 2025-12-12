import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Shiba Software Consulting - Cloud-Native Full-Stack Development'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
          position: 'relative',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo hexagon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            marginBottom: '40px',
            border: '3px solid transparent',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #f59e0b) border-box',
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 48 48"
            fill="none"
            style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))' }}
          >
            {/* Simplified shiba face */}
            <path
              d="M14 18L18 10L22 18"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M34 18L30 10L26 18"
              stroke="#8b5cf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M14 18C14 18 12 26 16 32C18 35 22 38 24 38C26 38 30 35 32 32C36 26 34 18 34 18"
              stroke="url(#ogGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M17 23L19 25L17 27" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            <path d="M31 23L29 25L31 27" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
            <path d="M24 30L22 33H26L24 30Z" fill="#f59e0b" />
            <defs>
              <linearGradient id="ogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Company name */}
        <div
          style={{
            display: 'flex',
            fontSize: '64px',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f59e0b)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          Shiba Software
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 500,
          }}
        >
          Cloud-Native Full-Stack Development
        </div>

        {/* Services pills */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '40px',
          }}
        >
          {['TypeScript', 'Next.js', 'AWS', 'AI/RAG'].map((tech) => (
            <div
              key={tech}
              style={{
                display: 'flex',
                padding: '8px 20px',
                borderRadius: '999px',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                background: 'rgba(6, 182, 212, 0.1)',
                color: '#06b6d4',
                fontSize: '20px',
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

