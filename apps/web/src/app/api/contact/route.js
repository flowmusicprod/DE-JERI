import { NextResponse } from "next/server";

export async function POST(request) {
  const form = await request.formData();

  const payload = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    subject: String(form.get("subject") || ""),
    message: String(form.get("message") || ""),
    submittedAt: new Date().toISOString(),
  };

  console.log("Contact submission (stub):", payload);
  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}

