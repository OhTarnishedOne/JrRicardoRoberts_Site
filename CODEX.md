# CODEX.md
# jrricardoroberts.com — OpenAI Codex Instructions

## What this is

Personal founder site for Ricardo Roberts. Built to tell a founder story
and drive visitors to lcsengine.com. Not a resume, not a portfolio.

## Stack summary

Next.js 16 (App Router) · TypeScript · Tailwind CSS · Vercel

## Layout rule — read this first

**All grid and flexbox layouts use inline `style={{}}` props, not Tailwind classes.**
Tailwind grid/flex classes do not compile reliably in this environment.

Correct:
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
```

Incorrect (do not do this):
```tsx
<div className="grid grid-cols-3">
```

## Design tokens

Use CSS custom properties. Never hardcode colors.

```
--ink         #1a1917      Primary text
--paper       #f7f4ef      Background
--paper-dark  #ece8e0      Section backgrounds  
--accent      #2d6a4f      Green, CTAs
--accent-light #e8f4ef     Green tint
--faint       rgba(26,25,23,0.18)   Borders
--soft        rgba(26,25,23,0.45)   Secondary text
```

## Component map

```
Nav.tsx         Sticky header, smooth scroll, hover effects
Hero.tsx        Cursor glow, animated headline, stats row
Ticker.tsx      Scrolling calibration feed (CSS only)
Persona.tsx     3-column founder identity (inline grid)
Story.tsx       2-column narrative + timeline (inline grid)
Calibration.tsx Interactive demo widget (React useState)
Raise.tsx       Pre-seed raise section
Footer.tsx      Links and copyright
useReveal.ts    IntersectionObserver scroll reveal hook
```

## Constraints

- No npm packages without explicit approval
- No component libraries (shadcn, MUI, Radix, etc.)
- No animation libraries (Framer Motion, GSAP, etc.)
- TypeScript strict mode — all refs must be properly typed
  (`useReveal` returns `RefObject<HTMLDivElement>`, not `HTMLElement`)
- The calibration widget demonstrates the LCS Engine mechanic —
  it does not resolve or validate live market data

## Copy philosophy

Founder voice. Specific. Never generic. The site's thesis in one line:
"Grade the thinking, not the bet."

When editing copy, ask: does this earn the click to lcsengine.com?
If not, cut it.

## Repo and deployment

GitHub: github.com/OhTarnishedOne/JrRicardoRoberts_Site
Deploy: Vercel, auto-deploys from main
Domain: jrricardoroberts.com
