# Product Requirements Document

## Multi-hotel shared CMS (test instance)

**Status:** Prototype  
**Last updated:** August 11, 2026

---

## What we're proving

One Sanity project feeds **two separate hotel websites**. Each hotel has its **own pages and look**. **Events and listings** are stored once and can appear on **one or both** hotels.

---

## Studio shape (sidebar)

```
Hotels
├── Grand Harbor Hotel
│   └── Pages (only this hotel's pages)
├── Harbor Light Inn
│   └── Pages (only this hotel's pages)
├── Shared content
│   ├── Events
│   └── Business listings
└── Site settings
```

Pages are **not** mixed in one list. Shared content lives in its own section.

---

## Native (Sanity) vs we build

| Capability | Native | We build |
|---|---|---|
| One CMS, many frontends | ✅ Single project + dataset | Point each Vercel deploy at same project |
| Shared documents | ✅ One doc, referenced/filtered | `sites[]` field on events & listings |
| Site-specific pages | ✅ References + GROQ filter | `site` ref on pages; query by `PUBLIC_SITE_SLUG` |
| Separate Studio hubs per hotel | ✅ Structure tool | Custom `structure` resolver (desk) |
| Pre-fill site when adding a page | ✅ Initial value templates | `page-by-site` template |
| Different look per hotel | — | Astro themes + separate deployments |
| Which hotels see shared content | — | GROQ: `$siteSlug in sites[]->slug.current` |

---

## Test content (after `npm run seed:multi-site`)

**Shared on both hotels:** Harbor Arts Festival, Harbor Sunset Cruise, Seaside Bakery, Harbor Kayaks  

**Grand Harbor only:** Wine Tasting, The Anchor Room  

**Harbor Light only:** Inn Acoustic Sessions, Lighthouse Café  

---

## Local dev

```bash
npm run dev              # Studio — see hotel-separated sidebar
npm run dev:web          # Grand Harbor frontend
npm run dev:web:sister   # Harbor Light frontend
npm run seed:multi-site  # Refresh test content
```
