# Product Requirements Document

## Solar System Explorer

**Status:** Early planning  
**Last updated:** August 11, 2026

---

## Overview

Build a content-driven web application that presents facts and images about our solar system. Content authors manage structured solar system data in Sanity; the public-facing site is an Astro application that fetches and renders that content.

This document covers requirements for the initial scope only: a single solar system (ours), with factual content and imagery rendered on the frontend.

---

## Goals

- Provide a structured, editor-friendly content model for describing a solar system and its celestial bodies
- Deliver a fast, content-driven frontend that renders solar system facts and images from Sanity
- Establish a foundation that can be extended to additional solar systems or richer content in later phases

---

## Scope

### In scope

- Sanity as the content backend
- Astro as the frontend framework
- Content model for **our solar system** and its constituent bodies
- Editorial management of facts and images for each body
- Public frontend that displays solar system content, including facts and images

### Out of scope (for now)

- Multiple solar systems beyond our own
- User accounts, authentication, or personalization
- Search, filtering, or advanced navigation
- Interactive features (3D models, animations, quizzes, etc.)
- Content migration from external sources
- Localization / multi-language support
- Visual editing or in-context preview (may be considered later)

---

## Content Requirements

### Solar system

The content model must describe a solar system as a structured entity. For the initial release, this is limited to **our solar system**.

At minimum, the model should support:

- A name or identifier for the solar system
- A collection of celestial bodies belonging to that system

### Celestial bodies

Each body in the solar system (e.g. the Sun, planets, and other notable objects) should be representable as structured content.

At minimum, each body should support:

- A **name**
- **Facts** — discrete pieces of factual information about the body (e.g. diameter, orbital period, composition)
- **Images** — one or more images associated with the body

The exact list of bodies included in the initial content set is a content decision, not a technical requirement at this stage.

### Content authoring

- Content editors must be able to create and update solar system and body content in Sanity Studio
- Facts and images must be manageable without code changes

---

## Backend Requirements (Sanity)

- Sanity serves as the single source of truth for all solar system content
- Content is structured according to the solar system content model described above
- Content is queryable by the frontend via Sanity's API (GROQ)
- Images are stored and served through Sanity's asset pipeline

---

## Frontend Requirements (Astro)

- Built on an Astro template
- Fetches content from Sanity at build time and/or request time (approach TBD)
- Renders solar system content for end users, including:
  - Facts about the solar system and its bodies
  - Images associated with each body
- Content changes in Sanity are reflected on the frontend after rebuild or revalidation (mechanism TBD)

---

## Success Criteria

- A content editor can define our solar system and its bodies, including facts and images, entirely within Sanity Studio
- The Astro frontend renders that content accurately — facts and images appear as authored
- The content model is structured around meaning (bodies, facts, images) rather than page layout

---

## Open Questions

These are deferred decisions for later planning phases:

1. **Body granularity** — Which celestial bodies are included initially? Planets only, or also the Sun, dwarf planets, moons, and other objects?
2. **Fact structure** — Are facts free-form text, or structured key–value pairs (e.g. label + value)?
3. **Page structure** — Is there a single overview page, individual pages per body, or both?
4. **Rendering strategy** — Static generation at build time, server-rendered on demand, or a hybrid?
5. **Image requirements** — Minimum image fields (alt text, caption, credit)? Any size or format constraints?
6. **Astro template** — Use an existing Sanity + Astro starter, or scaffold from scratch?

---

## References

- Content backend: [Sanity](https://www.sanity.io/)
- Frontend: [Astro](https://astro.build/)
