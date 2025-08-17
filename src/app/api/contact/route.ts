import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, company } = await req.json();
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    
    // Honeypot spam protection
    if (company) {
      return NextResponse.json({ ok: true }); // Silently ignore spam
    }
    
    // Send email using Resend
    await resend.emails.send({
      from: "BikodaInfo <noreply@bikoda.dev>",
      to: "contact@bikoda.dev",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 });
  }
} 