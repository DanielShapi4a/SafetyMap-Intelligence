# Project Origin — SafetyMap Intelligence

## Background

SafetyMap Intelligence is a full rebuild of my original personal project, **SafetyMap**.

The original SafetyMap was created as a meaningful software project after October 7th, during a period of increased concern around antisemitism and safety risks for Israelis and Jewish communities around the world.

The first version of the project focused on visualizing country-level travel danger and warning levels, mainly by collecting and processing information from Israeli government sources such as Gov.il. The goal was to help Jewish and Israeli travelers understand where travel might be unsafe and make more informed decisions.

## Why This Project Exists

The goal of this project is not only to build another map application.

The goal is to create a useful, source-backed safety intelligence platform for Israeli and Jewish travelers, while also serving as a serious software engineering project that demonstrates modern full-stack, geospatial, data-ingestion, and AI-assisted system design skills.

This project is personal because it combines:

* A real-world safety problem
* A meaningful target audience
* My own background as an Israeli developer
* My original learning journey into software development
* My current goal of building a more mature, production-quality system

## Original SafetyMap

The original SafetyMap was my stepping stone into software development.

Through it, I learned and practiced:

* React
* JavaScript
* Python scripting
* Web crawling
* MongoDB
* Basic backend development
* Interactive map rendering
* Data cleaning and transformation
* Deploying a working web project

The first version proved the idea, but it was limited in architecture, visual polish, scalability, and data depth.

SafetyMap Intelligence is intended to be a true version 2.0, not a small refactor.

## New Direction

SafetyMap Intelligence should evolve from a simple country warning map into an interactive intelligence dashboard.

The product should eventually combine:

* Official travel warnings
* Country-level safety scores
* Recent antisemitic incidents
* News signals
* Civil unrest or conflict context
* Source-backed incident cards
* Country briefings
* Risk trend history
* AI-assisted summarization and classification
* Interactive search and map exploration

The primary focus should remain **Israeli and Jewish traveler safety**.

General danger, civil unrest, terrorism, protests, or conflict data may be included as supporting context, but the product should not become a generic travel risk website. Its unique value is the focused perspective on Israeli and Jewish safety.

## Product Inspiration

One visual inspiration for the project is the “God’s Eye” style of intelligence-map interfaces: cinematic, interactive, data-rich, and visually impressive.

The goal is not to copy another project, but to create a polished intelligence-map experience that feels modern, serious, and memorable.

The user should be able to open the platform, click a country, and immediately understand:

* What is the current risk level?
* Why is this country marked this way?
* What changed recently?
* Which sources support the assessment?
* Are there recent incidents relevant to Israelis or Jewish communities?
* How confident is the system in the current assessment?

## Engineering Goal

This project should intentionally push beyond my default comfort stack.

Instead of rebuilding the project with the same technologies used in the original version, SafetyMap Intelligence should use a more production-oriented architecture:

* pnpm monorepo for workspace management
* Next.js + TypeScript for the web application
* Tailwind CSS for styling
* shadcn/ui later, after the base dashboard shell exists
* MapLibre GL JS later, when the map prototype phase begins
* NestJS for a structured backend API
* PostgreSQL + PostGIS for geospatial and relational data
* Python workers for ingestion, crawling, and AI-assisted processing
* Redis for queues and caching
* Docker Compose for local infrastructure
* Kubernetes only later, when the system is mature enough to justify it

The project should be built gradually and intentionally.

## Important Scope Rule

Do not build everything at once.

The correct order is:

1. Documentation and architecture foundation
2. pnpm monorepo and Next.js + TypeScript web app skeleton
3. Web dashboard shell
4. Interactive map prototype with mock country intelligence data, country search, country side panel, and recent incidents/timeline UI
5. Backend API
6. PostgreSQL/PostGIS data model
7. Real data ingestion
8. AI-assisted intelligence layer
9. Alerts, watchlists, and mobile companion app
10. Deployment, monitoring, and scale improvements

The first visual milestone should prioritize a polished frontend prototype with mock data before introducing real backend complexity. It should not include authentication, real ingestion, AI, a database, or a backend API.

## What This Project Should Demonstrate

SafetyMap Intelligence should demonstrate:

* Product thinking
* Clean architecture
* Strong TypeScript usage
* Modern React/Next.js development
* Geospatial data modeling
* Backend API design
* Data pipeline design
* Responsible crawling and ingestion
* AI-assisted classification and summarization
* Source transparency
* Risk scoring logic
* Documentation discipline
* Professional Git workflow

## What This Project Should Avoid

The project should avoid:

* Becoming a generic danger map with no clear identity
* Using AI summaries without source grounding
* Letting AI invent risk scores
* Crawling websites irresponsibly
* Adding Kubernetes too early
* Adding mobile too early
* Overengineering before the MVP is visually clear
* Repeating the same architecture as the original SafetyMap project

## Core Mission Statement

SafetyMap Intelligence is a source-backed, interactive safety intelligence platform for Israeli and Jewish travelers.

It exists to help users understand country-level risk, recent relevant incidents, and official advisories through a polished map-based interface, while serving as a modern full-stack engineering project that demonstrates production-quality architecture and thoughtful use of AI.
