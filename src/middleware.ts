import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './utils/session.utils';

export async function middleware(request : NextRequest) {

  const session = await getSession();
  console.log('middleware', session);

  if (!session.data) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/product/:path*',
}