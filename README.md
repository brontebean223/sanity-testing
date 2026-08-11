# Solar System Explorer

Monorepo for the Solar System Explorer project.

## Apps

| Directory | Description | Dev URL |
|-----------|-------------|---------|
| `apps/studio` | Sanity Studio (content editing) | http://localhost:3333 |
| `apps/web` | Astro frontend (public site) | http://localhost:4321 |

## Getting started

Install dependencies in each app (first time only):

```bash
npm install --prefix apps/studio
npm install --prefix apps/web
```

Run locally from the **project root**:

```bash
npm run dev          # Sanity Studio
npm run dev:web      # Astro frontend
```

Or from each app directory:

```bash
cd apps/studio && npm run dev
cd apps/web && npm run dev
```

## Deployments

- **Studio:** https://solar-system-explorer-rhhpqw8l.sanity.studio/
- **Frontend:** Vercel (see `apps/web/vercel.json`)
