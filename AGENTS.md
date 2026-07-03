# AGENTS.md
# jrricardoroberts.com — Agent Instructions

## What this repo is

The personal founder site of Ricardo Roberts. Not a resume. Not a portfolio.
A founder-story bridge that earns the click to lcsengine.com.

Primary audiences: pre-seed investors, AI company hiring teams, startup advisors and connectors.
Primary CTA: get visitors to lcsengine.com.

## Site structure

- `app/page.tsx` — assembles all components in order
- `app/layout.tsx` — metadata, OG tags, root layout
- `app/globals.css` — design tokens, keyframe animations, base styles
- `components/Nav.tsx` — sticky nav, green hover on name, underline draw on links
- `components/Hero.tsx` — cursor glow, animated headline, calibration widget teaser, proof stats
- `components/Ticker.tsx` — scrolling calibration feed (CSS animation, no JS)
- `components/Persona.tsx` — three-column founder identity cards
- `components/Story.tsx` — two-column founder narrative + career timeline
- `components/Calibration.tsx` — interactive calibration widget (React state, no external deps)
- `components/Raise.tsx` — pre-seed raise section (dark background)
- `components/Footer.tsx` — links, copyright
- `hooks/useReveal.ts` — IntersectionObserver scroll reveal hook

## Design system

All layout-critical styles use inline styles, not Tailwind classes.
Tailwind is used only for utility classes that don't affect grid or flex layout.

CSS custom properties (defined in globals.css):
- `--ink`: #1a1917 (primary text)
- `--paper`: #f7f4ef (background)
- `--paper-dark`: #ece8e0 (section backgrounds)
- `--accent`: #2d6a4f (green — CTAs, highlights)
- `--accent-light`: #e8f4ef (green tint)
- `--faint`: rgba(26,25,23,0.18) (borders)
- `--soft`: rgba(26,25,23,0.45) (secondary text)

Typography: DM Serif Display (headings) + Inter (body) via Google Fonts in globals.css.

## Key decisions

- No component libraries. No animation libraries. No external state management.
- The calibration widget is a DEMO of the LCS Engine mechanic — it does not resolve live market outcomes.
- Hero uses mousemove cursor glow via useRef + addEventListener.
- Scroll reveal uses IntersectionObserver via useReveal hook — disconnects after first trigger.
- Ticker uses CSS animation only (tickerScroll keyframe on doubled array).

## Deployment

- Vercel, auto-deploys from main branch
- Repo: github.com/OhTarnishedOne/JrRicardoRoberts_Site
- Domain: jrricardoroberts.com (GoDaddy DNS → Vercel CNAME)

## What not to touch

- Do not add component libraries or animation frameworks.
- Do not convert inline styles to Tailwind grid/flex classes — they won't compile reliably.
- Do not change the calibration widget to claim live market resolution.
- Do not remove the pre-seed raise section — it is intentional and current.
