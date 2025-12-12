# Deployment Guide for Shiba Software Consulting

This guide explains how to deploy the website to Cloudflare using **OpenNext** (Cloudflare Workers) with the `shibasoftwareconsulting.com` domain.

## Prerequisites

1. **Cloudflare Account** with the domain `shibasoftwareconsulting.com` configured
2. **GitHub Repository** with the project code
3. **Resend Account** for email functionality (optional but recommended)
4. **Upstash Account** for rate limiting (optional)

## Deployment Steps

### 1. Set up a Cloudflare Workers deployment (OpenNext)

You can deploy either:

- **From your local machine (recommended to start)** using `npm run deploy`
- **From CI** (GitHub Actions) running the same commands with a Cloudflare API token

### 2. Build & Deploy commands

From the repo root:

```bash
# Install dependencies
npm install

# Build OpenNext output into .open-next/
npm run build:cf

# Deploy to Cloudflare Workers
npm run deploy
```

### 3. Set Environment Variables

Add these as **Worker secrets** (recommended) or environment variables in your CI:

#### Production Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Set to `production` | Yes |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) | Yes (for email) |
| `NOTIFICATION_EMAIL` | Email to receive contact form submissions | Yes |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL | Optional |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token | Optional |
| `ALLOWED_ORIGINS` | `https://shibasoftwareconsulting.com,https://www.shibasoftwareconsulting.com` | Optional |

### 4. Configure Custom Domain

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Add `shibasoftwareconsulting.com`
3. Add `www.shibasoftwareconsulting.com`

Since you already own the domain on Cloudflare, DNS records will be configured automatically.

### 5. DNS Configuration (Automatic)

Cloudflare Pages automatically configures DNS when you add custom domains. Verify the following records exist:

```
Type: CNAME
Name: @
Target: <project-name>.pages.dev
Proxied: Yes

Type: CNAME
Name: www
Target: <project-name>.pages.dev
Proxied: Yes
```

### 6. SSL/TLS Configuration

1. Go to **SSL/TLS** in your domain settings
2. Set encryption mode to **Full (strict)**
3. Enable **Always Use HTTPS**
4. Enable **Automatic HTTPS Rewrites**

## Setting Up Email (Resend)

### 1. Create Resend Account

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain `shibasoftwareconsulting.com`
3. Add the required DNS records (SPF, DKIM, DMARC)

### 2. Get API Key

1. Go to **API Keys** in Resend dashboard
2. Create a new API key
3. Add it as a Worker secret named `RESEND_API_KEY`

### 3. DNS Records for Email

Add these records in Cloudflare DNS:

```
# SPF Record
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

# DKIM Record (provided by Resend)
Type: TXT
Name: resend._domainkey
Value: <provided by Resend>

# DMARC Record
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@shibasoftwareconsulting.com
```

## Setting Up Rate Limiting (Upstash)

### 1. Create Upstash Account

1. Sign up at [upstash.com](https://upstash.com)
2. Create a new Redis database
3. Copy the REST URL and Token

### 2. Add Environment Variables

Add as Worker secrets:
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

## Preview (local)

```bash
npm run preview
```

## Monitoring and Analytics

### Cloudflare Analytics

1. Go to your domain in Cloudflare Dashboard
2. View **Analytics & Logs** for traffic data

### Web Analytics (Optional)

Enable Cloudflare Web Analytics for free:
1. Go to **Analytics & Logs** > **Web Analytics**
2. Add the site
3. No code changes needed (automatic with Cloudflare Pages)

## Troubleshooting

### Build Failures

1. Check build logs in Cloudflare Pages dashboard
2. Ensure all environment variables are set
3. Verify Node.js version compatibility

### Email Not Sending

1. Verify `RESEND_API_KEY` is set correctly
2. Check Resend dashboard for delivery logs
3. Ensure domain is verified in Resend

### Rate Limiting Not Working

1. Falls back to in-memory rate limiting if Upstash not configured
2. Verify Upstash credentials are correct
3. Check Upstash dashboard for usage

## Cost Summary (Free Tier)

| Service | Free Tier |
|---------|-----------|
| **Cloudflare Pages** | Unlimited sites, 500 builds/month |
| **Cloudflare DNS** | Free with domain |
| **Cloudflare SSL** | Free automatic SSL |
| **Resend** | 3,000 emails/month |
| **Upstash Redis** | 10,000 requests/day |

## Support

For issues with this deployment:
- Create an issue in the GitHub repository
- Contact: contact@shibasoftwareconsulting.com

