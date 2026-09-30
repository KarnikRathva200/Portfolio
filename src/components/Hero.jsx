import { ArrowRight, Mail } from "lucide-react";
import { profile, techMarquee } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-radial-fade pt-40 pb-24 sm:pt-48 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-raised/60 px-3.5 py-1.5 text-xs text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
          {profile.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
          {profile.subtext}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-accent-soft"
          >
            View Projects
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-border bg-surface-raised/50 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-white/[0.04]"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>

      <div className="relative mt-20">
        <div className="mask-fade-x mx-auto max-w-5xl overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 py-2">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap font-mono text-sm tracking-tight text-zinc-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
