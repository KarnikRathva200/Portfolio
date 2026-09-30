import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-surface-border/70 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <span className="font-mono text-xs text-accent-soft">02 — Skills</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Skills &amp; expertise matrix
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
          A working toolkit built over eight years of shipping production systems
          — grouped by where each tool actually earns its place.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-surface-border bg-surface-raised/50 p-6"
            >
              <h3 className="text-sm font-semibold text-zinc-100">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-surface-border bg-black/30 px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-accent/40 hover:text-accent-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
