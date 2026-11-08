# nicolascardenass.github.io

[![CI](https://github.com/NicolasCardenass/nicolascardenass.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/NicolasCardenass/nicolascardenass.github.io/actions/workflows/ci.yml)

> 🇧🇷 Resumo em português no [final deste arquivo](#resumo-em-português).

Personal portfolio of **Nicolas Cardenas**, built with Next.js, TypeScript and Tailwind CSS and
published as a static site on GitHub Pages.

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- TypeScript (strict mode)
- Tailwind CSS v4
- ESLint + Prettier
- Vitest + React Testing Library

## Getting started

Requirements: Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script                  | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Start the development server             |
| `npm run build`         | Build the static site into `out/`        |
| `npm run start`         | Serve the exported site locally          |
| `npm run lint`          | Run ESLint                               |
| `npm run typecheck`     | Type-check the project with `tsc`        |
| `npm test`              | Run unit tests with Vitest               |
| `npm run test:coverage` | Run tests with a coverage report         |
| `npm run format`        | Format all files with Prettier           |
| `npm run format:check`  | Check formatting without writing changes |

## Deployment

Every push to `main` triggers the [deploy workflow](./.github/workflows/deploy.yml), which runs the
tests, builds the static site into `out/` and publishes it to GitHub Pages at
<https://nicolascardenass.github.io>. In the repository settings, **Pages → Source** must be set to
**GitHub Actions**.

## Roadmap

Development progress is tracked in [ROADMAP.md](./ROADMAP.md).

## License

[MIT](./LICENSE) © Nicolas Cardenas

---

## Resumo em português

Portfólio pessoal de **Nicolas Cardenas**, feito com Next.js, TypeScript e Tailwind CSS e publicado
como site estático no GitHub Pages. Para rodar localmente: `npm install` e `npm run dev`.
