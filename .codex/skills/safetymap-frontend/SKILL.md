---
name: safetymap-frontend
description: Implement SafetyMap Intelligence frontend tasks in the Next.js web app. Use for React components, dashboard UI, styled-components files, typed theme usage, JSON-backed UI copy, layout polish, and frontend-only mock-data milestones.
---

# SafetyMap Frontend

Use this skill for `apps/web` implementation work.

## Project Rules

- Use Next.js App Router and TypeScript.
- Use styled-components for styling.
- Put styles next to components as `<ComponentName>.styles.ts`.
- Import named styled components into JSX.
- Do not use Tailwind CSS, shadcn/ui, vanilla-extract, or CSS modules for component styling.
- Do not declare styled components inside React render functions.
- Store shared theme tokens in `apps/web/src/styles/theme.ts`.
- Store shared breakpoints in `apps/web/src/styles/breakpoints.ts`.
- Store user-facing UI copy in structured JSON files near the feature or component.

## Component Pattern

```text
ComponentName/
  ComponentName.tsx
  ComponentName.styles.ts
  ComponentName.content.json
  index.ts
```

Use `ComponentName.content.json` when the component renders text. Keep JSX semantic:

```tsx
<PhaseLabel>{content.phaseLabel}</PhaseLabel>
<DashboardPanel>
  <PanelTitle>{content.panel.title}</PanelTitle>
</DashboardPanel>
```

## Workflow

1. Read the relevant component, style, content, and theme files.
2. Keep changes frontend-only unless the roadmap explicitly allows more.
3. Add or update JSON content before wiring text into JSX.
4. Use typed theme tokens and breakpoint helpers for layout.
5. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` for app changes.
