# Roadmap

Build SafetyMap Intelligence in small phases. Do not skip ahead.

## Phase 1: Documentation Foundation

Status: current.

- Define product direction.
- Define MVP scope.
- Define initial architecture and stack.
- Record initial architecture decisions.

## Phase 2: Monorepo Skeleton

- Initialize pnpm workspace.
- Add Next.js + TypeScript web app.
- Add vanilla-extract styling setup.
- Add basic formatting/linting configuration.
- Do not add backend, database, worker, ingestion, AI, Redis, or Kubernetes code.
- Do not add Tailwind CSS, shadcn/ui, or styled-components.

## Phase 3: Web Dashboard Shell

- Create the dashboard layout.
- Add navigation and main content regions.
- Add static country intelligence surfaces using mock data.
- Use colocated `<ComponentName>.css.ts` style files.
- Keep the app frontend-only.

## Phase 4: Mock Data Map Prototype

- Add MapLibre GL JS.
- Render mock country data on an interactive map.
- Add country search, country side panel, and incident timeline UI.
- Continue to exclude auth, real ingestion, AI, a backend API, and a database.

## Phase 5: API And Database

- Add NestJS API.
- Add PostgreSQL + PostGIS through Docker Compose.
- Replace static mock data with API-backed mock or seeded data.

## Phase 6: Ingestion Pipeline

- Add Python ingestion workers.
- Normalize selected public data sources.
- Store source metadata and incident records.

## Phase 7: AI Intelligence Layer

- Add AI-assisted summarization and signal extraction.
- Keep generated intelligence explainable and source-linked.

## Phase 8: Mobile Companion App

- Consider a mobile experience after the core web workflow is useful.

## Phase 9: Scale Improvements

- Add Redis when queues or caching are needed.
- Consider Kubernetes much later, only after Docker Compose is no longer enough.
