---
name: safetymap-context
description: Load SafetyMap Intelligence repository context before planning or making changes. Use for orientation, roadmap/phase checks, architecture decisions, stack questions, or any task that may touch docs, app structure, product scope, or implementation order.
---

# SafetyMap Context

Use this skill to rebuild the project context quickly and avoid skipping ahead.

## Read First

Read these files before deciding what to change:

1. `AGENTS.md`
2. `.github/agents/README.md`
3. `.github/agents/CODE_STYLE.md`
4. `README.md`
5. `docs/roadmap.md`
6. `docs/architecture.md`
7. `docs/mvp-scope.md`
8. `docs/decisions/0001-project-direction.md`
9. `docs/decisions/0002-initial-tech-stack.md`

Read `docs/project-origin.md` before product or architecture decisions.

## Current Guardrails

- Keep work aligned with the current roadmap phase.
- Do not add backend, database, ingestion, AI, auth, MapLibre, Docker services, Kubernetes, or mobile code before the roadmap says so.
- Web stack is Next.js + TypeScript in a pnpm monorepo.
- Web styling is styled-components with colocated `<ComponentName>.styles.ts` files.
- User-facing UI copy should come from structured JSON content files, not hard-coded JSX strings.
- Radix UI is later for accessible unstyled primitives only.

## Workflow

1. Check `git status --short`.
2. Read the required docs above.
3. Identify the active roadmap phase and whether the requested task is allowed.
4. If the task conflicts with accepted ADRs or the roadmap, update docs or ask before coding.
5. Keep the final answer explicit about scope boundaries and validation.
