import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/_next') || pathname.startsWith('/static')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
