# Portfolio — Elite Dark Theme

A production-grade single page portfolio built with **React 18**, **Vite**, and **Tailwind CSS**. Styled after Stripe / Vercel / Linear: dark zinc-950 background, zinc-800 hairline borders, and a restrained emerald accent.

## Getting started

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build → /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    Navbar.jsx       Fixed glassmorphism nav with anchor links + mobile menu
    Hero.jsx          Tagline, availability badge, dual CTAs, tech marquee
    About.jsx         Engineering philosophy + core superpowers
    Skills.jsx        Skills matrix grouped by category (tag chips)
    Projects.jsx      Featured project cards (image, metrics, stack, links)
    Experience.jsx     Vertical career timeline
    Education.jsx      Academic background cards
    Contact.jsx         Contact form, email copy button, social links, footer
  data/
    portfolioData.js  All dummy content lives here — edit this file first
  App.jsx
  main.jsx
  index.css
```

## Customizing content

Everything you'll want to change lives in **`src/data/portfolioData.js`**:
`profile`, `techMarquee`, `philosophy`, `superpowers`, `skillCategories`,
`projects`, `experience`, and `education`. Swap in your own copy, links, and
metrics — no component code needs to change.

## Replacing placeholder images

Drop your own images into `public/assets/` using these exact filenames (or
update the paths in `portfolioData.js`):

- `public/assets/hero-avatar.jpg`
- `public/assets/project-placeholder.jpg` (or per-project images —
  `project-1.jpg`, `project-2.jpg`, etc.)

If an image is missing or fails to load, project cards fall back to a clean
"preview unavailable" placeholder instead of a broken image icon.

## Theme tokens

Color and font tokens are defined in `tailwind.config.js` under
`theme.extend.colors.surface` and `theme.extend.colors.accent` — change the
accent hex in one place to re-theme every button, badge, and highlight.
