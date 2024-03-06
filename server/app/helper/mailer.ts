import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import { env } from "../utils/env";
const user = env('EMAIL_USER');
const pass = env('EMAIL_PASS');

interface MailProps {
  email: string,
  subject: string,
  html: string,
  type: string;
  cc?: string;
  text?: string;
}

export async function mail({ email, subject, html, text, type, cc }: MailProps) {
  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });
    const options: Mail.Options = {
      from: `CAHAN Pvt Ltd <no-reply ${user}>`,
      to: type == 'CONTACT' ? user : email,
      subject: subject,
      html: html,
      text: text,
      cc: cc || '',
    };
    await transport.sendMail(options);
  } catch (error) {
    console.log('error', error);
  }
}
