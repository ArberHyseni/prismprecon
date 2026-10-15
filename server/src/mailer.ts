import nodemailer from "nodemailer";
import { config, mailConfigured } from "./config";

const transport = mailConfigured
  ? nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.port === 465,
      auth: { user: config.smtp.user, pass: config.smtp.pass },
    })
  : null;

export interface Mail {
  subject: string;
  text: string;
  replyTo?: string;
}

/** Sends to the Prism inbox. Without SMTP settings it logs instead (local dev). */
export async function sendToPrism(mail: Mail): Promise<void> {
  if (!transport) {
    console.log("[mail:not-configured]", mail.subject, "\n" + mail.text);
    return;
  }
  await transport.sendMail({
    from: `"Prism website" <${config.smtp.user}>`,
    to: config.contactTo,
    ...mail,
  });
}
