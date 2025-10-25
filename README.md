# Shiba Software Consulting Website

A modern, responsive website built with the latest web technologies for a California-based software consulting company.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom components with Radix UI primitives
- **Animation:** Motion (Framer Motion v12)
- **Forms:** React Hook Form v7 + Zod v4 validation
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode)

## 📋 Features

- ✅ Server-side rendering (SSR) and Static Site Generation (SSG)
- ✅ Fully responsive design
- ✅ Dark/light mode support
- ✅ Accessible components (ARIA compliant)
- ✅ SEO optimized with metadata API
- ✅ Contact form with validation
- ✅ TypeScript end-to-end
- ✅ Performance optimized
- ✅ **Production-ready security** (see below)

## 🔒 Security Features

This project implements enterprise-grade security best practices:

### API Security
- ✅ **Rate Limiting**: 5 requests per minute per IP on contact form
- ✅ **Input Validation**: Zod schema validation on all form inputs
- ✅ **CORS Protection**: Whitelist of allowed origins
- ✅ **Request Size Limits**: 2MB maximum payload size
- ✅ **Error Sanitization**: No internal error details exposed to clients
- ✅ **No PII Logging**: Sensitive user data never logged to console

### HTTP Security Headers
- ✅ **X-Frame-Options**: DENY (prevents clickjacking)
- ✅ **X-Content-Type-Options**: nosniff (prevents MIME sniffing)
- ✅ **Content-Security-Policy**: Strict CSP to prevent XSS attacks
- ✅ **Referrer-Policy**: strict-origin-when-cross-origin
- ✅ **Permissions-Policy**: Disables dangerous browser features
- ✅ **X-XSS-Protection**: Enabled for legacy browsers

### Code Security
- ✅ **TypeScript**: Type safety prevents runtime errors
- ✅ **No XSS Vulnerabilities**: React escapes all user input
- ✅ **No eval()**: No dynamic code execution
- ✅ **No Secrets in Code**: All sensitive data in environment variables
- ✅ **Dependencies**: All packages up-to-date with no known CVEs

### Privacy & Compliance
- ✅ **GDPR Compliant**: No unnecessary data collection
- ✅ **Privacy by Design**: Minimal data logging
- ✅ **Secure Communications**: HTTPS enforced in production

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   └── globals.css        # Global styles (Tailwind v4)
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   └── layout/            # Layout components (Header, Footer)
├── lib/
│   ├── utils.ts           # Utility functions
│   └── schemas.ts         # Zod validation schemas
└── public/                # Static assets
```

## 🛠️ Getting Started

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

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Email Service (optional - for contact form)
# SENDGRID_API_KEY=your_key_here
# RESEND_API_KEY=your_key_here
```

## 🎨 Customization

### Colors

Edit `app/globals.css` to customize the color palette:

```css
@theme {
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-accent: #10b981;
}
```

### Content

- **Homepage:** `app/page.tsx`
- **Services:** `app/services/page.tsx`
- **About:** `app/about/page.tsx`
- **Contact:** `app/contact/page.tsx`

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### AWS

See deployment guide in `/docs/aws-deployment.md` (TODO)

## 📚 Documentation

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Zod v4 Docs](https://zod.dev)
- [Motion Docs](https://motion.dev)

## 🤝 Contributing

This is a private project for Shiba Software Consulting.

## 📄 License

Copyright © 2025 Shiba Software Consulting. All rights reserved.
