# 0xRobiul — Cyber Security Portfolio (Home page)

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Dark hacker theme with a
canvas matrix rain background, a fixed header that zooms with cursor
movement and scroll, and a glowing dot that trails the cursor site-wide.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.tsx      -> mounts MatrixRain + CursorDot globally, page metadata
  page.tsx         -> assembles the home page sections
  globals.css       -> fonts, scrollbar, glow utilities, cursor hiding
components/
  MatrixRain.tsx    -> canvas-based cascading green code background
  CursorDot.tsx     -> glowing dot that trails the pointer everywhere
  Header.tsx        -> fixed nav; background zooms on cursor move + scroll
  Hero.tsx          -> name, tagline, CTA buttons, terminal mockup panel
  Stats.tsx         -> CVE / certs / HTB rank / CTF wins strip
  Certifications.tsx -> certification badge row
  WhatIDo.tsx       -> services (Pentesting / Red Team / Vuln Research)
  Footer.tsx        -> terminal-style social links
```

## Notes

- The header's zoom background and the cursor dot are disabled/adapted for
  touch devices (no persistent pointer), so mobile keeps the native cursor.
- `prefers-reduced-motion` is respected: the rain freezes on one frame and
  transitions shorten to near-instant.
- Swap the placeholder social links in `Footer.tsx` and the terminal lines
  in `Hero.tsx` with your real ones.
- The profile photo circle from the reference design isn't included yet —
  drop a photo into `public/` and reference it with `next/image` when you
  want it back in the hero panel.

## Next step

The About page is intentionally not built yet — we'll design and build it
next, section by section, once you're happy with this home page.
