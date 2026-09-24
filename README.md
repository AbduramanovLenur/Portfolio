# Lenur Portfolio

Interactive portfolio built with **React 19**, **TypeScript**, **Vite 8** and **React Compiler** (automatic memoization), following the Feature-Sliced Design (FSD) architecture.

## Tech stack

- **React 19** with React Compiler enabled (no manual `useMemo`/`memo` needed)
- **TypeScript** strict mode
- **Vite** + `@vitejs/plugin-react` (Babel pipeline with `babel-plugin-react-compiler`)
- **react-router-dom** v7 (hash router for static hosting)
- **framer-motion** for animations
- **i18next** + **react-i18next** with ru / en / uz locales
- **Tailwind CSS** + **shadcn/ui** primitives
- **lucide-react** icons

## Architecture (Feature-Sliced Design)

```
src/
├── app/                  # App bootstrap: entry point, router, global styles
│   ├── main.tsx
│   ├── App.tsx
│   ├── routes/           # createHashRouter + route error boundary
│   └── styles/
├── pages/                # Route-level compositions
│   ├── home/
│   └── not-found/
├── widgets/              # Sections composing entities + features
│   ├── header/ hero/ about/ technologies/
│   ├── portfolio/ social/ contact/ footer/
├── features/             # User scenarios
│   ├── language-switcher/
│   └── contact-form/     # API layer for Telegram bot + form validation
├── entities/             # Business entities
│   ├── project/
│   ├── technology/
│   └── social-link/
└── shared/               # Reusable foundation
    ├── config/           # i18n, routes, languages, locales
    ├── lib/              # cn(), scroll helpers
    └── ui/               # Button, Input, ScrollReveal, ErrorBoundary, ...
```

Slices are isolated via path aliases (`@app`, `@pages`, `@widgets`, `@features`, `@entities`, `@shared`) so cross-layer imports stay explicit and layered.

## Commands

```bash
npm run dev          # start dev server
npm run build        # type-check (tsc -b) + production build
npm run lint         # ESLint
npm run preview      # preview production build
```

## Environment

Contact form sends messages to a Telegram bot via `fetch`. Required env vars:

```
VITE_TELEGRAM_BOT_TOKEN=<bot token>
VITE_TELEGRAM_CHAT_ID=<chat id>
```

## Deployment

Uses `base: './'` and a hash router, so the built `dist/` can be hosted on any static file server.