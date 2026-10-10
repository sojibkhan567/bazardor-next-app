import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  // Redirect logged-in users away from authentication pages
  if (sessionCookie && (pathname === "/sign-in" || pathname === "/sign-up")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Protect product pages
  if (pathname.startsWith("/product") && !sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Protect profile pages
  if (pathname.startsWith("/profile") && !sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/product/:path*", "/profile"],
};
