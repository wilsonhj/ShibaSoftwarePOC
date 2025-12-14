import { NextResponse, type NextRequest } from 'next/server'

/**
 * Redirect www -> apex.
 *
 * We do this in middleware (rather than next.config.ts redirects) because
 * some deployments (notably Workers/OpenNext) can emit the destination
 * string literally (e.g. "/:path*") instead of substituting the path.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''

  // Handle both "www.shibasoftwareconsulting.com" and "www...:443"
  if (host === 'www.shibasoftwareconsulting.com' || host.startsWith('www.shibasoftwareconsulting.com:')) {
    const url = request.nextUrl.clone()
    url.hostname = 'shibasoftwareconsulting.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}


