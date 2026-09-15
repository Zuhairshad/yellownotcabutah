# Yellow Cab Utah — Next.js Clone

A pixel-close clone of [yellowcabutah.com](https://yellowcabutah.com/), rebuilt
with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Structure

- `src/app/page.tsx` — assembles the homepage from section components
- `src/components/sections/` — one component per page section (hero,
  airport services, rates, hiring, etc.)
- `src/components/` — shared UI: header/nav, footer, carousel, icons
- `public/images/` — optimized site imagery

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
