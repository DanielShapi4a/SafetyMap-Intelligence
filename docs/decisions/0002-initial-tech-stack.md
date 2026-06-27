# ADR 0002: Initial Tech Stack

Status: accepted

## Context

SafetyMap Intelligence needs a stack that supports a fast dashboard prototype while leaving room for geospatial data, ingestion, and AI workflows later.

## Decision

Use the following phased stack:

- pnpm monorepo.
- Next.js + TypeScript web app first.
- Tailwind CSS for styling.
- shadcn/ui later for reusable UI components.
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
