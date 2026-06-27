---
name: safetymap-code-review
description: Review SafetyMap Intelligence code, docs, and repo changes for bugs, scope drift, roadmap violations, styling/content convention issues, and missing validation. Use when asked for review, pre-commit review, PR review, or risk assessment of local changes.
---

# SafetyMap Code Review

Use a code-review stance: findings first, ordered by severity, with file and line references.

## Review Checklist

1. Confirm scope against `docs/roadmap.md`, `docs/architecture.md`, and ADRs.
2. Flag forbidden early additions: backend API, database, Prisma/Drizzle, PostGIS, Redis, crawlers, AI, auth, MapLibre, Docker services, Kubernetes, or mobile code.
3. For frontend changes, verify:
   - Next.js App Router patterns.
   - TypeScript strictness.
   - styled-components in colocated `<ComponentName>.styles.ts` files.
   - No Tailwind CSS, shadcn/ui, or vanilla-extract.
   - No styled components declared inside render functions.
   - User-facing copy comes from structured JSON content files.
4. Check accessibility basics: headings, labels, semantic regions, keyboard-safe controls.
5. Check validation: `pnpm lint`, `pnpm typecheck`, and `pnpm build` when relevant.

## Output Format

- Start with findings.
- Use severity order: critical, high, medium, low.
- Include exact file paths and line numbers where possible.
- If no findings, say so clearly and note any residual test gaps.
- Keep summaries brief and secondary to the findings.
