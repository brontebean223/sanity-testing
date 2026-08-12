// @ts-check

import tailwindcss from '@tailwindcss/vite'
import {defineConfig} from 'astro/config'
import {loadEnv} from 'vite'
import sanity from '@sanity/astro'

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '')

// Prefer process.env — Vercel injects vars at build time; loadEnv only reads .env files
const PUBLIC_SANITY_PROJECT_ID =
  process.env.PUBLIC_SANITY_PROJECT_ID ?? env.PUBLIC_SANITY_PROJECT_ID ?? 'rhhpqw8l'
const PUBLIC_SANITY_DATASET =
  process.env.PUBLIC_SANITY_DATASET ?? env.PUBLIC_SANITY_DATASET ?? 'production'
const PUBLIC_SITE_SLUG =
  process.env.PUBLIC_SITE_SLUG ?? env.PUBLIC_SITE_SLUG ?? 'grand-harbor-hotel'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    envPrefix: 'PUBLIC_',
    define: {
      'import.meta.env.PUBLIC_SANITY_PROJECT_ID': JSON.stringify(PUBLIC_SANITY_PROJECT_ID),
      'import.meta.env.PUBLIC_SANITY_DATASET': JSON.stringify(PUBLIC_SANITY_DATASET),
      'import.meta.env.PUBLIC_SITE_SLUG': JSON.stringify(PUBLIC_SITE_SLUG),
    },
  },

  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
    }),
  ],
})
