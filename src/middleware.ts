import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/token';

export async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const token = req.cookies.get('request_token')?.value;

  if (url.pathname.includes('/admin')) {
    try {
      if (!token) {
        throw new Error('Token tidak ada');
      }

      const isVerified = await verifyToken(token);

      if (isVerified && isVerified.role !== 'admin') {
        throw new Error('Bukan admin');
      }
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(url.origin);
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|svg|image|icon).*)'],
};
