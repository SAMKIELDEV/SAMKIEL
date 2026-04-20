'use server';

import { resend } from '@/lib/resend';

export async function sendEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'SAMKIEL <contact@samkiel.tech>',
      to: [ 'hello@samkiel.tech', 'ceo@samkiel.dev'],
      subject: `New Inquiry: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; border: 1px solid #1f1f1f; border-radius: 12px;">
          <div style="margin-bottom: 30px;">
            <h2 style="color: #e8ff47; font-size: 24px; font-weight: 700; margin: 0;">New Contact Form Submission</h2>
            <p style="color: #888888; font-size: 14px; margin-top: 8px;">Received from your website's contact form.</p>
          </div>
          
          <div style="background-color: #111111; padding: 24px; border-radius: 8px; border-left: 4px solid #e8ff47;">
            <div style="margin-bottom: 20px;">
              <small style="color: #888888; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 0.1em;">Name</small>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <small style="color: #888888; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 0.1em;">Email</small>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 500;">${email}</p>
            </div>
            
            <div>
              <small style="color: #888888; text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 0.1em;">Message</small>
              <p style="margin: 4px 0 0 0; font-size: 16px; line-height: 1.6; color: #d4d4d4;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; border-top: 1px solid #1f1f1f; padding-top: 20px; text-align: center;">
            <p style="color: #444444; font-size: 12px;">
              &copy; ${new Date().getFullYear()} SAMKIEL. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: 'Failed to send message. Please try again later.' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Send Email Error:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
