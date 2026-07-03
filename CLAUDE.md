# CLAUDE.md
# jrricardoroberts.com — Claude Code Instructions

## Project identity

Personal founder site for Ricardo Roberts. The job of this site is to tell
the founder story clearly and send visitors to lcsengine.com. Every design
and copy decision should serve that one job.

## Technical stack

- Next.js 16, App Router, TypeScript
- Tailwind CSS (utility classes only — NOT for grid/flex layout)
- Inline styles for all layout-critical properties
- Google Fonts: DM Serif Display + Inter (loaded in globals.css)
- No external component libraries, animation libraries, or state managers

## File locations

| File | Purpose |
|------|---------|
| `app/globals.css` | Design tokens, keyframes, base styles |
| `app/layout.tsx` | Root layout, metadata, OG tags |
| `app/page.tsx` | Page assembly — imports and orders all components |
| `components/*.tsx` | One component per section |
| `hooks/useReveal.ts` | Scroll reveal via IntersectionObserver |

## Design tokens

Always use CSS custom properties, never hardcode hex values:

```css
--ink: #1a1917
--paper: #f7f4ef
--paper-dark: #ece8e0
--accent: #2d6a4f
--accent-light: #e8f4ef
--faint: rgba(26,25,23,0.18)
--soft: rgba(26,25,23,0.45)
```

## Critical rules

1. **Inline styles for layout.** Grid and flex layouts must use inline `style={{}}` props,
   not Tailwind classes. Tailwind grid classes (`grid-cols-3`, etc.) do not compile
   reliably in this environment.

2. **useReveal hook.** Attach to section containers for scroll-triggered opacity/transform
   reveals. The hook uses IntersectionObserver and disconnects after first trigger.
   Returns a `RefObject<HTMLDivElement>`.

3. **Calibration widget is a demo.** The widget in `Calibration.tsx` demonstrates the
   LCS Engine scoring mechanic. It does NOT claim to resolve live market outcomes.
   Do not add language suggesting real-time data validation.

4. **No new dependencies.** If a feature requires an npm package, flag it first.
   The site's zero-dependency stance is intentional.

5. **Copy tone.** Specific, confident, founder-voice. Never generic. Never hedged.
   "Grade the thinking, not the bet" is the product philosophy. Copy should reflect it.

## Animations

All animations are pure CSS keyframes defined in globals.css:
- `slideIn` — fade up entrance for hero elements
- `wordUp` — headline word reveal (translateY from 100%)
- `pulseDot` — breathing green dot in eyebrow
- `tickerScroll` — infinite horizontal scroll for Ticker component
- `fadeIn` — dot grid background fade

Scroll reveal is handled by `.reveal` / `.reveal.visible` CSS classes
toggled by the `useReveal` hook.

## Deployment checklist

Before pushing to main:
- [ ] `npm run build` passes locally with zero TypeScript errors
- [ ] All components render correctly at localhost:3000
- [ ] No Tailwind grid/flex classes on layout-critical elements
- [ ] Calibration widget copy does not claim live market resolution
- [ ] Pre-seed raise section is present and accurate
