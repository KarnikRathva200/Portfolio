import { useState } from "react";
import { Github, Linkedin, Twitter, Copy, Check, Send } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submission handler — wire up to your form backend / API route.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { label: "GitHub", href: profile.socials.github, icon: Github },
    { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
    { label: "X", href: profile.socials.x, icon: Twitter },
  ];

  return (
    <section id="contact" className="border-t border-surface-border/70 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-xs text-accent-soft">06 — Contact</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Let's build something reliable
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Open to senior backend and platform engineering roles for Q3/Q4.
              The fastest way to reach me is email — I typically reply within
              24 hours.
            </p>

            <button
              onClick={handleCopy}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-raised/60 px-4 py-2.5 font-mono text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              {copied ? (
                <Check className="h-4 w-4 text-accent" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {profile.email}
            </button>

            <div className="mt-10 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-surface-border bg-surface-raised/50 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-surface-border bg-surface-raised/50 p-6 sm:p-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-lg border border-surface-border bg-black/30 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-accent/50"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-lg border border-surface-border bg-black/30 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-accent/50"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about the role or project…"
                value={form.message}
                onChange={handleChange}
                className="resize-none rounded-lg border border-surface-border bg-black/30 px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-accent/50"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-accent-soft sm:w-auto"
            >
              {submitted ? "Message sent" : "Send message"}
              <Send className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </form>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-surface-border/70 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
          <p className="font-mono">Designed for resilience, deployed with confidence.</p>
        </div>
      </div>
    </section>
  );
}
