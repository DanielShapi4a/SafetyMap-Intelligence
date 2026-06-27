# SafetyMap Intelligence Agent Instructions

This folder contains the working rules for AI agents and human contributors making changes in this repository.

## Required reading

Before making changes, every agent must read:

1. [`CODE_STYLE.md`](./CODE_STYLE.md)
2. `/README.md`
3. `/docs/product-brief.md`
4. `/docs/mvp-scope.md`
5. `/docs/architecture.md`
6. `/docs/decisions/**`
7. `/docs/project-origin.md`

## Rule priority

When instructions conflict, follow this order:

1. Human instructions in the current task
2. Existing architecture decisions in `/docs/decisions/**`
3. `.github/agents/CODE_STYLE.md`
4. Existing code patterns in the repository

## Important

Do not generate the full application at once.

SafetyMap Intelligence should be built in small, reviewable steps:

1. Documentation foundation
2. Monorepo skeleton
3. Web dashboard shell
4. Mock data map prototype
5. API and database
6. Ingestion pipeline
7. AI intelligence layer
8. Mobile companion app
9. Scale improvements / Kubernetes much later

If a task requires changing the roadmap or project architecture, update the relevant documentation before changing code.

The current repository phase is documentation foundation. Do not initialize the app, install dependencies, or add runtime code until the roadmap explicitly moves to the monorepo skeleton phase.
