# ADR 0002: Initial Tech Stack

Status: accepted

## Context

SafetyMap Intelligence needs a stack that supports a fast dashboard prototype while leaving room for geospatial data, ingestion, and AI workflows later.

## Decision

Use the following phased stack:

- pnpm monorepo.
- Next.js + TypeScript web app first.
- styled-components for styling.
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
- Do not use vanilla-extract unless a future ADR explicitly changes this decision.

## Styling Decision

Use `styled-components` for web styling.

The project owner prefers readable semantic JSX. The desired component style is:

```tsx
<Phase>Phase 1: Visual Prototype</Phase>
<DashboardPanel>
  <PanelTitle>Country Intelligence</PanelTitle>
</DashboardPanel>
```

styled-components matches that preference better than Tailwind CSS or vanilla-extract. Tailwind CSS is powerful, but it would make JSX class-heavy. vanilla-extract is type-safe and static, but it normally uses `className={styles.name}`.

The project accepts the small Next.js setup cost for improved readability and maintainability. Responsive design is fully supported through normal CSS media queries and shared breakpoint tokens.

Use colocated style files:

```text
CountryPanel/
  CountryPanel.tsx
  CountryPanel.styles.ts
  index.ts
```

Radix UI can be added later for accessible, unstyled primitives. Those primitives should be styled with styled-components.
