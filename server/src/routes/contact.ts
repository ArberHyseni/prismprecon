import { Router } from "express";
import { z } from "zod";
import { config, mailConfigured } from "../config";
import { sendToPrism } from "../mailer";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  trade: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(1).max(4000),
  website: z.string().optional(), // honeypot: real people leave this empty
});

// Small in-memory limiter: 5 submissions per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
  if (rateLimited(req.ip ?? "unknown")) {
    res.status(429).json({ ok: false, error: "Too many requests. Please call us instead." });
    return;
  }

  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Please fill in your name, a valid email and a message." });
    return;
  }

  const { website, ...form } = parsed.data;
  if (website) {
    res.json({ ok: true }); // bot: pretend success, send nothing
    return;
  }

  if (config.isProd && !mailConfigured) {
    console.error("[contact] SMTP is not configured; dropping submission from", form.email);
    res.status(503).json({ ok: false, error: "The form is offline right now. Please call or text 818-696-3043." });
    return;
  }

  try {
    await sendToPrism({
      subject: `Website inquiry: ${form.name}${form.company ? ` (${form.company})` : ""}`,
      replyTo: form.email,
      text: [
        `Name:    ${form.name}`,
        `Company: ${form.company || "-"}`,
        `Email:   ${form.email}`,
        `Phone:   ${form.phone || "-"}`,
        `Trade:   ${form.trade || "-"}`,
        "",
        form.message,
      ].join("\n"),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    res.status(502).json({ ok: false, error: "We couldn't send that. Please call or text 818-696-3043." });
  }
});
