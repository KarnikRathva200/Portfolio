import { useState } from "react";
import { Github, ExternalLink, TrendingUp, ImageOff } from "lucide-react";
import { projects } from "../data/portfolioData";

function ProjectImage({ src, alt }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-black/40 text-zinc-600">
        <ImageOff className="h-6 w-6" strokeWidth={1.5} />
        <span className="font-mono text-[11px]">preview unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-surface-border/70 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <span className="font-mono text-xs text-accent-soft">03 — Projects</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Featured projects
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
          A selection of systems I've designed end-to-end, chosen for the
          measurable impact they had in production.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface-raised/50 transition-colors hover:border-zinc-700"
            >
              <div className="h-44 w-full overflow-hidden border-b border-surface-border bg-surface-raised sm:h-52">
                <ProjectImage src={project.image} alt={`${project.title} preview`} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex items-start gap-2 rounded-lg border border-surface-border/70 bg-black/20 px-3 py-2.5">
                  <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  <p className="font-mono text-[12px] leading-relaxed text-zinc-400">
                    {project.metrics}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-surface-border/70 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-accent-soft"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
