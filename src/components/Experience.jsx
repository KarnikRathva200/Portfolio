import { MapPin } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-surface-border/70 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <span className="font-mono text-xs text-accent-soft">04 — Experience</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Career timeline
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
          Developing modern web applications with React, Node.js, and MongoDB, with a focus on practical and scalable solutions.
        </p>

        <div className="relative mt-14 space-y-12">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-border sm:left-[7px]"
          />

          {experience.map((role) => (
            <div key={`${role.company}-${role.period}`} className="relative pl-8">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-surface-950 bg-surface" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-zinc-100">
                  {role.role} <span className="text-zinc-500">· {role.company}</span>
                </h3>
                <span className="font-mono text-xs text-zinc-500">{role.period}</span>
              </div>

              <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                <MapPin className="h-3 w-3" />
                {role.location}
              </div>

              <ul className="mt-4 space-y-2.5">
                {role.achievements.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
