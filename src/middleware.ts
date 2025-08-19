import { NextResponse } from 'next/server';
import { auth } from '@/server/auth'; // edge-compatible import

export const config = {
  matcher: ['/dashboard/:path*', '/vendors/:path*'], // protect these
};

export default auth((req) => {
  // If not signed in, redirect to home
  if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) {
    const url = new URL('/', req.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
});
