# ADR 0001: Project Direction

Status: accepted

## Context

SafetyMap Intelligence is a rebuild of the original SafetyMap idea. The project needs a clear first target so contributors do not build the full platform before the product workflow is proven.

## Decision

Build a map-first country intelligence dashboard in phases. The first product milestone is a frontend-only visual prototype using mock country intelligence data.

The MVP includes:

- Web dashboard.
- Interactive map prototype.
- Mock country intelligence data.
- Country search.
- Country side panel.
- Recent incidents/timeline UI.

The MVP excludes auth, real ingestion, AI, database work, and backend API work.

## Consequences

- Early work should focus on documentation, project skeleton, and dashboard UX.
- Backend, ingestion, AI, and infrastructure decisions remain documented but deferred.
- Contributors must not skip ahead of the roadmap phase.
