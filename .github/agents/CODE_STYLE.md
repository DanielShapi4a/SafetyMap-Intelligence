# Code Style

These rules apply to all contributors. While the repository is in the documentation
foundation phase, keep changes limited to documentation unless the roadmap is
explicitly advanced.

## Project Snapshot

| Key | Value |
| --- | --- |
| Product | SafetyMap Intelligence, a country intelligence dashboard for Israeli and Jewish traveler safety |
| Current phase | Documentation foundation |
| First visual milestone | Frontend-only web dashboard using mock country intelligence data |
| Out of scope now | Auth, real ingestion, AI, database, backend API, crawlers, mobile, Kubernetes |

## Initial Stack

- Package manager and workspace: pnpm monorepo.
- First app: Next.js + TypeScript web app.
- Styling: Tailwind CSS.
- UI library: shadcn/ui later, after the base shell exists.
- Map library: MapLibre GL JS later, when the interactive map prototype begins.
- API: NestJS later.
- Database: PostgreSQL + PostGIS later.
- Workers: Python ingestion and AI workers later.
- Cache/queue: Redis later, when there is a concrete need.
- Local orchestration: Docker Compose first.
- Cluster orchestration: Kubernetes much later.

## Rules Of Engagement

1. Read `/docs/**` and `/docs/decisions/**` before making changes.
2. Never override an accepted ADR without adding a new ADR.
3. Respect the current roadmap phase.
4. Keep each change small, cohesive, and reviewable.
5. If a task requires changing product scope or architecture, update the relevant
   documentation before changing code.

## MVP Guardrails

The first visual milestone includes:

- Web dashboard.
- Interactive map prototype.
- Mock country intelligence data.
- Country search.
- Country side panel.
- Recent incidents/timeline UI.

The first visual milestone excludes:

- Authentication and user accounts.
- Real ingestion, crawlers, or third-party integrations.
- AI summaries, classification, recommendations, or scoring automation.
- Database persistence.
- Backend API.
- Kubernetes.

## Directory And Naming

Apply these conventions once code exists:

| Item | Style | Example |
| --- | --- | --- |
| Folders | `camelCase` | `countryPanel` |
| React components | `PascalCase.tsx` | `CountryPanel.tsx` |
| Helpers and hooks | `camelCase.ts` | `useCountryRisk.ts` |
| Python files | `snake_case.py` | `risk_scoring.py` |
| Database tables | singular `snake_case` | `incident` |

## TypeScript And Frontend

- Use TypeScript with strict settings.
- Use Next.js App Router conventions when the web app is initialized.
- Prefer type-only imports where possible.
- Use Tailwind CSS for styling.
- Add shadcn/ui only after the base UI shell exists.
- Add MapLibre GL JS only when the map prototype phase begins.

## Backend And Workers

- Use NestJS when the API phase starts.
- Use PostgreSQL with PostGIS when persistence and geospatial querying are
  introduced.
- Use Python for ingestion and AI workers when those phases start.
- Use Redis later for queues, caching, or coordination when needed.

## Formatting

- Use the formatter and linter selected by the project once the monorepo exists.
- Keep Markdown concise, practical, and consistent across docs.
- Prefer ASCII punctuation in repository files unless a file already requires
  non-ASCII text.

## Ask First

Ask before:

- Adding a large dependency or asset.
- Changing lint, format, or test tooling decisions.
- Creating a new top-level directory outside the current roadmap phase.
- Disabling a linter rule inline.
