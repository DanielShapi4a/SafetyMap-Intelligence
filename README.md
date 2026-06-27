# SafetyMap Intelligence

SafetyMap Intelligence is a rebuild of the original SafetyMap concept: a practical country intelligence dashboard for exploring safety, stability, and incident context on a map.

The repository is currently in the documentation foundation phase. The app has not been initialized yet.

## Initial Direction

- Start with a pnpm monorepo.
- Build the first app as a Next.js + TypeScript web dashboard.
- Use styled-components for styling.
- Add Radix UI primitives later for accessible UI behavior.
- Add MapLibre GL JS after the dashboard shell exists.
- Add NestJS, PostgreSQL/PostGIS, Python workers, Redis, and real ingestion in later phases.
- Use Docker Compose before any Kubernetes work.
- Do not use Tailwind CSS, shadcn/ui, or vanilla-extract unless a future ADR changes this.

## First Visual Milestone

The MVP is a web dashboard prototype with:

- Interactive map prototype.
- Mock country intelligence data.
- Country search.
- Country side panel.
- Recent incidents/timeline UI.

The first visual milestone intentionally excludes auth, real ingestion, AI, a database, and a backend API.

## Documentation

Start with:

- [Product brief](./docs/product-brief.md)
- [MVP scope](./docs/mvp-scope.md)
- [Architecture](./docs/architecture.md)
- [Roadmap](./docs/roadmap.md)
- [Data sources](./docs/data-sources.md)
- [Risk scoring](./docs/risk-scoring.md)
- [Project origin](./docs/project-origin.md)
- [Initial tech stack decision](./docs/decisions/0002-initial-tech-stack.md)
