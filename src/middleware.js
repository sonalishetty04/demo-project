import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("running");

  const token = request.cookies.get("accessToken");
  console.log(token, 11);

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/cart"],
};
