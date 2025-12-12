import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
        >
          {/* Simplified shiba ears and face for small icon */}
          <path
            d="M14 18L18 10L22 18"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M34 18L30 10L26 18"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M14 18C14 18 12 26 16 32C18 35 22 38 24 38C26 38 30 35 32 32C36 26 34 18 34 18"
            stroke="white"
            strokeWidth="3"
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

