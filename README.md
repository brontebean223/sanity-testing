# Harbor Hotels — Sanity multi-site test

A monorepo demonstrating one Sanity CMS feeding two separate hotel websites. Each hotel has its own pages and theme; events and listings are shared without duplicating content.

## Apps

| Directory | Purpose |
|-----------|---------|
| `apps/studio` | Sanity Studio — content editing |
| `apps/web` | Astro frontend — one codebase, two deployments |

## Setup

Install dependencies (first time only):

```bash
npm install --prefix apps/studio
npm install --prefix apps/web
```

Copy the frontend env file:

```bash
cp apps/web/.env.example apps/web/.env.local
```

Seed demo content:

```bash
npm run seed:multi-site
```

## Run locally

From the project root:

```bash
npm run dev              # Studio → http://localhost:3333
npm run dev:web:both     # Both hotel frontends (recommended)
```

Or run frontends separately in two terminals:

```bash
npm run dev:web          # Grand Harbor → http://localhost:4321
npm run dev:web:sister   # Harbor Light  → http://localhost:4322
```

> **Note:** Port 4322 only works while `dev:web:sister` or `dev:web:both` is running.

## Local URLs

After seeding, these pages are available:

### Grand Harbor Hotel (`npm run dev:web` · port 4321)

| Page | URL |
|------|-----|
| Home | http://localhost:4321/ |
| Dining | http://localhost:4321/pages/dining |

### Harbor Light Inn (`npm run dev:web:sister` · port 4322)

| Page | URL |
|------|-----|
| Home | http://localhost:4322/ |
| Your stay | http://localhost:4322/pages/your-stay |

Events and listings appear as sections on each page — they do not have separate routes. Shared items (e.g. Harbor Arts Festival) show on both sites; hotel-specific items only show on the matching site.

### Studio

| App | URL |
|-----|-----|
| Sanity Studio | http://localhost:3333 |
| Deployed Studio | https://solar-system-explorer-rhhpqw8l.sanity.studio/ |

Studio sidebar is organized by hotel — each property has its own **Pages** list. **Shared content** holds events and listings used across sites.

## Cloudinary (hero images)

Hero images use [sanity-plugin-cloudinary](https://www.sanity.io/plugins/cloudinary) — assets are stored in Cloudinary and referenced in Sanity as `cloudinary.asset`.

**First-time setup in Studio:**

1. Run `npm run dev` and open http://localhost:3333
2. Edit a page and open the **Hero image** field
3. When prompted, enter your Cloudinary **cloud name**, **API key**, and **API secret** (stored in the dataset for this project)
4. Pick or upload images in the Cloudinary media library; set **alt text** in Cloudinary’s context metadata

The frontend reads `secure_url` from the stored asset — no Cloudinary env vars are needed in `apps/web`.

Seeded demo pages have no hero images yet; heroes show a theme gradient until you add images in Studio.

## Themes & styles

Both hotels share the same block components (`Hero`, `TextSection`, `FeaturesSection`, etc.). Visual differences come from **separate theme files**:

```
apps/web/src/themes/
├── harbor.ts   ← Grand Harbor (warm, light, amber)
├── light.ts    ← Harbor Light (dark, teal, boutique)
├── types.ts    ← theme token shape
└── index.ts    ← getTheme() — picks theme from PUBLIC_SITE_SLUG
```

**To edit a hotel's look**, change only its theme file:

- Grand Harbor → `apps/web/src/themes/harbor.ts`
- Harbor Light → `apps/web/src/themes/light.ts`

Each theme defines tokens for layout, hero, text sections, features, CTAs, and shared content blocks (colors, borders, typography classes).

Global Tailwind setup:

```
apps/web/src/styles/global.css   ← Tailwind import only
apps/web/src/layouts/site.astro  ← applies theme.layout tokens to shell
apps/web/src/components/blocks/  ← shared components; read from getTheme()
```

Site identity (name + theme mapping) lives in `apps/web/src/lib/site.ts`.

After editing theme files, save — the dev server hot-reloads styles automatically. No separate build step needed for local development.

## Environment variables

Set in `apps/web/.env.local` for local dev, or in each Vercel project's dashboard for deploys:

| Variable | Description |
|----------|-------------|
| `PUBLIC_SANITY_PROJECT_ID` | `rhhpqw8l` |
| `PUBLIC_SANITY_DATASET` | `production` |
| `PUBLIC_SITE_SLUG` | `grand-harbor-hotel` or `harbor-light-inn` |

The sister dev script sets `PUBLIC_SITE_SLUG=harbor-light-inn` automatically — you do not need a second env file for local Harbor Light.

## Deploy to Vercel (pre-prod)

Create **two Vercel projects** from this repo. Both use the root `vercel.json` (builds `apps/web`).

| | Grand Harbor project | Harbor Light project |
|--|---------------------|----------------------|
| `PUBLIC_SITE_SLUG` | `grand-harbor-hotel` | `harbor-light-inn` |
| Pre-prod URL | `*.vercel.app` (project 1) | `*.vercel.app` (project 2) |
| Production domain (later) | e.g. `grandharbor.com` | e.g. `harborlightinn.com` |

Sanity vars are the same on both projects.

## Useful commands

```bash
npm run dev                 # Studio
npm run dev:web             # Grand Harbor frontend
npm run dev:web:sister      # Harbor Light frontend
npm run dev:web:both        # Both frontends
npm run seed:multi-site     # Reset demo content in Sanity
npm run build:web           # Build Grand Harbor
npm run build:web:sister    # Build Harbor Light
npm run deploy:studio       # Deploy Studio
```
