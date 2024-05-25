import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function Middleware(req: NextRequest) {

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
