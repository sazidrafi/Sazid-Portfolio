"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import profile from "@/data/profile";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : "";

const field =
  "w-full rounded-md border bg-surface px-3.5 py-2.5 text-text placeholder:text-subtle transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-focus-ring/30";
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!emailOk(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Please write at least 10 characters.";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | mailto | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (values._gotcha) return setStatus("success"); // bot: pretend success

    if (!ENDPOINT) {
      // Fallback until a form service is configured: open the visitor's email app.
      const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
      const body = encodeURIComponent(`${values.message.trim()}\n\n${values.name.trim()} (${values.email.trim()})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return setStatus("mailto");
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: values.name.trim(), email: values.email.trim(), message: values.message.trim() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setValues({ name: "", email: "", message: "", _gotcha: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const err = (k) => (errors[k] ? "border-danger" : "border-border-strong");

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
          className={`${field} ${err("name")}`} placeholder="Your name" />
        {errors.name && <p id="name-error" className="mt-1.5 text-sm text-danger">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
          className={`${field} ${err("email")}`} placeholder="you@example.com" />
        {errors.email && <p id="email-error" className="mt-1.5 text-sm text-danger">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={6} value={values.message} onChange={onChange}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} ${err("message")} resize-y`} placeholder="How can I help?" />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-danger">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={onChange} />
      </div>

      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-on-accent transition-colors hover:bg-accent-hover active:bg-accent-active disabled:cursor-not-allowed disabled:opacity-60">
        <Send size={16} />
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p role="status" className="rounded-md bg-success-subtle px-4 py-3 text-sm text-success">
            Thank you. Your message was sent and I will reply soon.
          </p>
        )}
        {status === "mailto" && (
          <p role="status" className="rounded-md bg-info-subtle px-4 py-3 text-sm text-info">
            Your email app should open with the message ready to send. If it does not, write to {profile.email}.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-md bg-danger-subtle px-4 py-3 text-sm text-danger">
            Something went wrong. Please try again, or email me directly at {profile.email}.
          </p>
        )}
      </div>
    </form>
  );
}
