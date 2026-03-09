import { Resend } from "resend";

let resendClient = null;

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export async function sendContactEmail({ name, email, subject, message }) {
  const resend = getResendClient();
  const to = process.env.BRAND_CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resend || !to || !from) {
    return { delivered: false };
  }

  const result = await resend.emails.send({
    from,
    to,
    subject: `[DE'JERI] ${subject}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });

  return { delivered: true, result };
}

