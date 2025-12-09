# Shiba Software Consulting Website

A modern, responsive website for Shiba Software Consulting - a California-based software consulting company specializing in cloud-native development, microservices, and AI/RAG applications.

**Live Site:** [shibasoftwareconsulting.com](https://shibasoftwareconsulting.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom components with Radix UI primitives
- **Animation:** Motion (Framer Motion v12)
- **Forms:** React Hook Form v7 + Zod v4 validation
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode)
- **Email:** Resend API
- **Rate Limiting:** Upstash Redis
- **Hosting:** Cloudflare Pages

## Features

- Server-side rendering (SSR) and Static Site Generation (SSG)
- Fully responsive design with mobile-first approach
- Dark/light mode support (OLED-optimized dark theme)
- Accessible components (ARIA compliant)
- SEO optimized with metadata API and structured data (JSON-LD)
- Contact form with validation and email notifications
- TypeScript end-to-end
- Performance optimized
- Production-ready security

## Pages

- **Homepage** - Hero section, services overview, tech stack, CTA
- **Services** - Detailed service offerings with technology stacks
  - Cloud-Native Full-Stack Development
  - REST API Development
  - Microservices Architecture
  - Event-Driven Systems
  - AI & RAG Applications
  - MLOps & LLM Pipelines
- **About** - Company story, mission, values, founder bio
- **Contact** - Contact form with validation, FAQ
- **Privacy Policy** - GDPR-compliant privacy policy
- **Terms of Service** - Legal terms and conditions

## Security Features

### API Security
- Rate Limiting: 5 requests per minute per IP on contact form
- Input Validation: Zod schema validation on all form inputs
- CORS Protection: Whitelist of allowed origins
- Request Size Limits: 2MB maximum payload size
- Error Sanitization: No internal error details exposed to clients
- No PII Logging: Sensitive user data never logged to console

### HTTP Security Headers
- X-Frame-Options: DENY (prevents clickjacking)
- X-Content-Type-Options: nosniff (prevents MIME sniffing)
- Content-Security-Policy: Strict CSP to prevent XSS attacks
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: Disables dangerous browser features
- Strict-Transport-Security: HSTS enabled in production

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with structured data
│   ├── page.tsx             # Homepage with animations
│   ├── services/page.tsx    # Services page
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── privacy/page.tsx     # Privacy policy
│   ├── terms/page.tsx       # Terms of service
│   ├── api/contact/route.ts # Contact form API
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── structured-data.tsx  # JSON-LD structured data
│   └── globals.css          # Global styles (Tailwind v4)
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── sections/            # Page sections
│   └── layout/              # Header, Footer
├── lib/
│   ├── utils.ts             # Utility functions
│   └── schemas.ts           # Zod validation schemas
├── public/
│   ├── logos/               # Brand assets
│   └── robots.txt           # SEO robots file
├── wrangler.toml            # Cloudflare Pages config
└── DEPLOYMENT.md            # Deployment guide
```

## Getting Started

### Prerequisites

- Node.js 20.x or 22.x
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Cloudflare Pages Build

```bash
# Build for Cloudflare Pages
npm run build:cf

# Preview locally
npm run preview

# Deploy (requires wrangler auth)
npm run deploy
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
NOTIFICATION_EMAIL=contact@shibasoftwareconsulting.com

# Rate Limiting (Upstash Redis) - Optional
UPSTASH_REDIS_REST_URL=https://xxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxx

# Security
ALLOWED_ORIGINS=https://shibasoftwareconsulting.com,https://www.shibasoftwareconsulting.com

# Analytics (Optional)
GOOGLE_SITE_VERIFICATION=
```

## Deployment

This site is configured for deployment on **Cloudflare Pages** with the custom domain `shibasoftwareconsulting.com`.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions including:
- Cloudflare Pages setup
- DNS configuration
- Environment variables
- Email setup with Resend
- Rate limiting with Upstash

### Free Tier Services Used

| Service | Free Tier |
|---------|-----------|
| Cloudflare Pages | Unlimited sites, 500 builds/month |
| Cloudflare DNS | Free with domain |
| Cloudflare SSL | Free automatic SSL |
| Resend | 3,000 emails/month |
| Upstash Redis | 10,000 requests/day |

## Customization

### Colors

Edit `app/globals.css` to customize the color palette:

```css
@theme {
  --color-primary: #06b6d4;   /* Cyan */
  --color-secondary: #8b5cf6; /* Violet */
  --color-accent: #f59e0b;    /* Amber */
}
```

### Typography

The site uses:
- **Outfit** for headings
- **Inter** for body text
- **JetBrains Mono** for code

## Documentation

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Resend Docs](https://resend.com/docs)
- [Motion Docs](https://motion.dev)

## License

Copyright 2025 Shiba Software Consulting LLC. All rights reserved.
