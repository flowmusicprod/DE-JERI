import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const form = await request.formData();
  const passphrase = form.get("passphrase");
  const expected = process.env.DEJERI_ADMIN_PASSPHRASE || "dejeri-admin";

  if (passphrase !== expected) {
    return NextResponse.redirect(new URL("/atelier/login", request.url), 303);
  }

  const cookieStore = await cookies();
  cookieStore.set("dejeri_admin", "authorized", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return NextResponse.redirect(new URL("/atelier", request.url), 303);
}

