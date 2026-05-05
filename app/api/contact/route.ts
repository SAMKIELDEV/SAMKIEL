import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'SAMKIEL TECH <hello@samkiel.tech>',
      to: ['hello@samkiel.tech', 'ceo@samkiel.dev'],
      subject: `New project inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; border: 1px solid #27272a; border-radius: 12px;">
          <div style="margin-bottom: 30px;">
            <h2 style="color: #e8ff47; font-size: 24px; font-weight: 700; margin: 0;">New Contact Form Submission</h2>
            <p style="color: #a1a1aa; font-size: 14px; margin-top: 8px;">Received from SAMKIEL contact form.</p>
          </div>
          
          <div style="background-color: #111111; padding: 24px; border-radius: 8px; border-left: 4px solid #e8ff47;">
            <div style="margin-bottom: 20px;">
              <small style="color: #a1a1aa; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 0.1em;">Name</small>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <small style="color: #a1a1aa; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 0.1em;">Email</small>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500;">${email}</p>
            </div>
            
            <div>
              <small style="color: #a1a1aa; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 0.1em;">Message</small>
              <p style="margin: 4px 0 0 0; font-size: 16px; line-height: 1.6; color: #fafafa;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; border-top: 1px solid #27272a; padding-top: 20px; text-align: center;">
            <p style="color: #52525b; font-size: 12px;">
              &copy; ${new Date().getFullYear()} SAMKIEL. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend Error:', error)
      return NextResponse.json(
        { error: 'Failed to send message.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    )
  }
}
