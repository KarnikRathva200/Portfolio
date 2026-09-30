import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-surface-border/80 bg-surface-raised/70 px-4 py-3 backdrop-blur-xl transition-shadow duration-300 sm:px-5 ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "shadow-none"
        }`}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#top");
          }}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-50"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-black/40 font-mono text-[13px] text-accent-soft">
            KR
          </span>
          <span className="hidden sm:inline">Karnik Rathva</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-accent-soft sm:inline-flex"
          >
            Get in Touch
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border text-zinc-300 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-surface-border bg-surface-raised/95 p-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-medium text-zinc-950"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
