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

## Environment variables (frontend)

Copy the example env file before running the web app locally:

```bash
cp apps/web/.env.example apps/web/.env
```

## Deployments

- **Studio:** https://solar-system-explorer-rhhpqw8l.sanity.studio/
- **Frontend:** https://sanity-testing-beta.vercel.app

The repo root `vercel.json` tells Vercel to build `apps/web` (required for this monorepo layout). Vercel also needs these environment variables:

| Variable | Value |
|----------|-------|
| `PUBLIC_SANITY_PROJECT_ID` | `rhhpqw8l` |
| `PUBLIC_SANITY_DATASET` | `production` |
