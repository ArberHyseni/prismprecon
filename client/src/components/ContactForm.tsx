import { useState, type FormEvent } from "react";
import { company, contact } from "../content";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ kind: "error", message });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="contact-card" role="status">
        <h3>Thanks, we got it.</h3>
        <p>We'll get back to you the same business day. Need it faster? Call or text {company.phone}.</p>
      </div>
    );
  }

  return (
    <form className="contact-card form" onSubmit={onSubmit}>
      <div className="field-row">
        <label>
          Name
          <input name="name" required maxLength={100} autoComplete="name" />
        </label>
        <label>
          Company
          <input name="company" maxLength={120} autoComplete="organization" />
        </label>
      </div>
      <div className="field-row">
        <label>
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" maxLength={40} autoComplete="tel" />
        </label>
      </div>
      <label>
        Trade
        <select name="trade" defaultValue="">
          <option value="" disabled>Select one</option>
          {contact.trades.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        What are you bidding?
        <textarea name="message" required rows={4} maxLength={4000} placeholder="Project, due date, link to plans…" />
      </label>
      {/* Honeypot for bots; hidden from people and screen readers. */}
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Request my free takeoff"}
      </button>
      {status.kind === "error" && (
        <p className="form-error" role="alert">{status.message}</p>
      )}
    </form>
  );
}
