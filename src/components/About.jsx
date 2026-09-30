import { CheckCircle2 } from "lucide-react";
import { philosophy, superpowers, profile } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="border-t border-surface-border/70 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-mono text-xs text-accent-soft">01 — About</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Engineering philosophy
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              {profile.subtext} Based in {profile.location.split("·")[0].trim()}, I
              partner with product and platform teams to turn ambiguous problems
              into dependable infrastructure.
            </p>

            <div className="mt-8 space-y-2.5">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Core superpowers
              </p>
              <ul className="space-y-2.5">
                {superpowers.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {philosophy.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-surface-border bg-surface-raised/50 p-6 transition-colors hover:border-zinc-700 ${
                  i === philosophy.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
