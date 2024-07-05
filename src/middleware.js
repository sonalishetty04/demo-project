import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("running");

  const token = request.cookies.get("authToken");
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/cart"],
};
