# Layout Explorer

AI-powered layout designer — parses natural language prompts, scores 51 layout recipes, recommends themes, generates wireframe previews.


[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square)](https://www.typescriptlang.org)
[![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## Features

- **Prompt Studio** — type what you want to build, get the best layout recipe scored by goal match, content affinity, structure fit, and viewport awareness
- **Layout Explorer** — browse all 51 recipes in grid or list view with live preview and code export
- **Theme Engine** — 5 presets (3 dark, 2 light) with WCAG 2.1 AA contrast validation and dark/light toggle
- **AI Canvas** — AI-assisted layout generation via z-ai-web-dev-sdk
- **Wireframe Preview** — visual wireframe of each layout recipe
- **Code Drawer** — export layout CSS Grid code with syntax highlighting

## Architecture

```css
src/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Main page
│   ├── api/recipes/route.ts    # Recipes API
│   └── globals.css
├── components/layout/          # UI components (22 files)
│   ├── app-shell.tsx           # Application shell
│   ├── prompt-studio.tsx       # Prompt input + results
│   ├── layout-explorer.tsx     # Grid/list browser
│   ├── grid-preview.tsx        # Layout preview card
│   ├── wireframe-preview.tsx   # Wireframe renderer
│   ├── ai-canvas.tsx           # AI generation canvas
│   ├── theme-preset-selector.tsx
│   └── ...                     # Hooks, utilities, UI primitives
├── lib/layout/                 # Core engine (37 modules)
│   ├── scoring.ts              # Single-goal scoring
│   ├── score-layout.ts         # Layout scoring with weights
│   ├── score-layout-multi.ts   # Multi-goal scoring
│   ├── parse-prompt.ts         # Natural language parser
│   ├── recommend-theme.ts      # Theme recommendation engine
│   ├── theme-registry.ts       # Open preset registry (registerPreset())
│   ├── contrast.ts             # WCAG contrast calculation
│   ├── contrast-audit.ts       # Theme contrast audit
│   ├── color-harmony.ts        # Color palette generation
│   ├── tokens.ts               # Design tokens (spacing, typography, colors)
│   ├── theme.tsx               # StudioThemeProvider
│   ├── project-theme.tsx       # ProjectThemeProvider (dual theme)
│   └── presets/                # 6 preset files (registerPreset each)
└── data/
    ├── recipes.json            # 51 layout recipes
    └── dashboard-constants.ts
```

## Theme Presets

| Preset | Mode | Accent | Best For |
|--------|------|--------|----------|
| Champagne | Dark | `#C8A97E` gold | SaaS premium, fintech, portfolio |
| Cyan Night | Dark | `#00E5FF` cyan | Dashboard, analytics, developer tools |
| Zinc | Dark | `#10B981` emerald | Admin panels, CRM, enterprise |
| Champagne Light | Light | `#B08D57` gold | Blog, editorial, warm SaaS |
| Cyan Morning | Light | `#0891B2` teal | Documentation, clean dashboards |

Adding a new preset = 1 file + `registerPreset()` call. No union types to edit.

## Scoring System

Each layout recipe is scored (0–100) across multiple dimensions:

| Dimension | Weight | Description |
|-----------|--------|-------------|
| Goal match | +25 | Recipe is optimized for the requested goal |
| Goal conflict | -35 | Recipe conflicts with the goal |
| Content affinity | +15 | Structure suits the content type |
| Item count fit | +10 | Layout handles the right number of items |
| Structure match | ±15 | Has/missing sidebar, header, footer |

Multi-goal mode uses weighted combination with conflict mitigation, synergy bonus, and critical miss penalty.

## Getting Started

```bash
## Install
bun install

## Dev server
bun run dev

## Production build
bun run build && bun run start
```

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript 5 (strict)
- Tailwind CSS 4
- Lucide React (icons)
- z-ai-web-dev-sdk (AI features)

## Anti-Monolith Compliance

All files ≤ 150 lines. No god objects. No duplicate modules. useState ≤ 3 per component. Enforced by `eslint-plugin-3a`.

## License

[MIT](LICENSE)

---
Built with: Next.js + React + TypeScript + Tailwind CSS
