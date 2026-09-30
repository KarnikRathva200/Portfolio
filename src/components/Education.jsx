import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="border-t border-surface-border/70 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <span className="font-mono text-xs text-accent-soft">05 — Education</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Academic background
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col rounded-2xl border border-surface-border bg-surface-raised/50 p-6 transition-colors hover:border-zinc-700"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-black/30 text-accent-soft">
                <GraduationCap className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-zinc-100">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{edu.institution}</p>
              <span className="mt-2 font-mono text-xs text-zinc-500">{edu.period}</span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
