import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const cookieStore = await cookies();
  cookieStore.delete("dejeri_admin");
  return NextResponse.redirect(new URL("/atelier/login", request.url), 303);
}

