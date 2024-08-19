import { getSession } from "next-auth/react";

export async function middleware(req, ev) {
  const session = await getSession({ req });

  if (!session) {
    return Response.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
