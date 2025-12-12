import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #f59e0b 100%)',
          borderRadius: '32px',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 48 48"
          fill="none"
        >
          {/* Shiba ears */}
          <path
            d="M14 18L18 10L22 18"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M34 18L30 10L26 18"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Face outline */}
          <path
            d="M14 18C14 18 12 26 16 32C18 35 22 38 24 38C26 38 30 35 32 32C36 26 34 18 34 18"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Eyes as code brackets */}
          <path d="M17 23L19 25L17 27" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M31 23L29 25L31 27" stroke="white" strokeWidth="2" strokeLinecap="round" />
          {/* Nose */}
          <path d="M24 30L22 33H26L24 30Z" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}

