import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Anti-spam field
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // 1. Anti-spam honeypot detection
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: false, message: 'Spam detected.' },
        { status: 400 }
      );
    }

    // 2. Required fields validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'All fields are required. Please check your submission.' },
        { status: 400 }
      );
    }

    // 3. Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Dispatch via Resend API if API key is provided
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['kevinjoshva.dev@gmail.com'],
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json(
            {
              success: true,
              delivered: true,
              message: 'Your message has been delivered to Kevin T. Thank you!',
            },
            { status: 200 }
          );
        }
      } catch (e) {
        console.error('Failed to send email via Resend:', e);
      }
    }

    // If external mail provider key is not yet set in environment:
    // Honest disclosure per master prompt: Do not show a fake success message if no email was delivered
    console.log('[Portfolio Contact Entry - Stored/Logged]:', {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        delivered: false,
        requiresMailClient: true,
        message:
          'Your message is validated. Since an SMTP/Resend API key is not configured in this environment, please click "Open in Email App" to dispatch directly to kevinjoshva.dev@gmail.com.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form processing error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing your request. Please email directly.' },
      { status: 500 }
    );
  }
}
