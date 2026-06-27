# ADR 0002: Initial Tech Stack

Status: accepted

## Context

SafetyMap Intelligence needs a stack that supports a fast dashboard prototype while leaving room for geospatial data, ingestion, and AI workflows later.

## Decision

Use the following phased stack:

- pnpm monorepo.
- Next.js + TypeScript web app first.
- vanilla-extract for styling.
- Radix UI primitives later for accessible UI behavior.
- MapLibre GL JS later for the interactive map.
- NestJS API later.
- PostgreSQL + PostGIS later.
- Python ingestion and AI workers later.
- Redis later when queues, caching, or coordination are needed.
- Docker Compose first for local multi-service development.
- Kubernetes much later, only after the system outgrows Compose-based workflows.

## Consequences

- Do not initialize backend, database, worker, AI, Redis, Docker, or Kubernetes code during the documentation foundation phase.
- The first coding task should initialize only the pnpm monorepo and web app foundation.
- The first visual milestone should remain frontend-only and mock-data driven.
- Do not use Tailwind CSS.
- Do not use shadcn/ui.
- Do not introduce styled-components unless a future ADR explicitly changes this decision.

## Styling Decision

Use `vanilla-extract` for application styling.

The project owner prefers readable colocated TypeScript style files. vanilla-extract matches the desired component structure:

```text
CountryPanel/
  CountryPanel.tsx
  CountryPanel.css.ts
  index.ts
```

This gives the project type-safe, zero-runtime CSS while avoiding Tailwind class-heavy markup. It also avoids the runtime styling registry complexity that styled-components introduces in Next.js App Router projects.

Radix UI can be added later for accessible, unstyled primitives. Those primitives should be styled with vanilla-extract.
