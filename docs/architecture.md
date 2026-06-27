# Architecture

SafetyMap Intelligence will be built in phases. The first coding phase should create only the pnpm monorepo skeleton, Next.js + TypeScript web app, Tailwind CSS, and basic formatting/linting configuration.

## Initial Stack

- Package management: pnpm monorepo.
- First app: Next.js + TypeScript web app.
- Styling: Tailwind CSS.
- UI components: shadcn/ui later.
- Map: MapLibre GL JS later.
- API: NestJS later.
- Database: PostgreSQL + PostGIS later.
- Workers: Python ingestion and AI workers later.
- Cache/queue: Redis later.
- Local orchestration: Docker Compose first.
- Cluster orchestration: Kubernetes much later.

## Planned Shape

```text
apps/
  web/        Next.js dashboard
  api/        NestJS API, later

packages/
  ui/         shared UI, later if needed
  config/     shared TypeScript/lint config, later if useful

workers/
  ingestion/  Python ingestion workers, later
  ai/         Python AI workers, later
```

This structure is directional. Do not create all folders before the relevant roadmap phase.

## Data Flow Target

1. Future ingestion workers collect and normalize public source data.
2. The API stores and serves country intelligence from PostgreSQL/PostGIS.
3. The web dashboard queries the API and renders map, country, and incident views.
4. Future AI workers enrich summaries and signals after real data exists.

For the first visual milestone, the web app should use static mock country data only.
