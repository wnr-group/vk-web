# VK web

Same stack and folder layout as `lesparo-web`: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Prisma 7 on Postgres, Zod, Vitest.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000 and http://localhost:3000/api/health.

## APIs

| Method | Path |
| --- | --- |
| GET | `/api/health` |

## Layout

```
app/layout.tsx              root HTML shell
app/(site)/                 public pages (shared header and footer)
app/admin/(panel)/          admin pages (shared sidebar)
app/api/<name>/route.ts     HTTP APIs
components/site/            public UI
components/admin/           admin UI
components/ui/              shared buttons and primitives
lib/services/               business logic
lib/validation/             Zod schemas
lib/db.ts                   Prisma client
lib/env.ts                  validated server env
lib/http.ts                 API response helpers
prisma/                     schema.prisma and migrations
scripts/                    CLI scripts
tests/unit/                 Vitest tests
```

## Adding something new

| To add | Create |
| --- | --- |
| An API | `app/api/<name>/route.ts` exporting `GET`, `POST`, ... |
| A public page | `app/(site)/<name>/page.tsx` |
| An admin page | `app/admin/(panel)/<name>/page.tsx` and a link in `components/admin/admin-nav.tsx` |
| A form handler | `actions.ts` with `"use server"` next to the page |
| A component | `components/site/`, `components/admin/` or `components/ui/` |
| Logic / validation | `lib/services/<name>.ts`, `lib/validation/<name>.ts` |
| A table | a `model` in `prisma/schema.prisma`, then `npm run db:migrate` |
| A test | `tests/unit/<name>.test.ts` |

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` / `build` / `start` | Dev server / production build / production server |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript |
| `npm test` | Unit tests |
| `npm run db:migrate` | Create and apply Prisma migrations |
| `npm run db:studio` | Browse the database |
