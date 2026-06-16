# ASU Homepage Replication

## Overview

Replication of the Arizona State University (ASU) homepage using a modern, responsive, and scalable Nuxt 3 and TypeScript setup. The project incorporates custom animations, premium typography, and the private EdPlus `@rds-vue-ui` Rocket Design System component library.

## Tech Stack

- Nuxt.js
- TypeScript
- RDS Vue UI
- Font Awesome Free Icons
- ESLint
- Prettier
- Husky
- lint-staged
- Vercel

## Setup Instructions

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start the Nuxt development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Check the project for code quality and lint issues
- `npm run format` - Auto-format the codebase using Prettier

## Deployment

Vercel deployment is pre-configured and optimized using standard Nuxt presets.

## Assumptions

- **Scoped Registries**: Scoped `@rds-vue-ui` and `@rds` packages reside on the private EdPlus Verdaccio registry (`https://npm.edpl.us`), as configured in `.npmrc`.
- **Transpilation**: Scoped TypeScript modules from `node_modules` must be transpiled by Vite/Nitro, configured in `build.transpile` within `nuxt.config.ts`.
- **Static Assets**: Image assets are placed in `public/images/` to be served statically and loaded by component props.

## Improvements

- **Live Search Integration**: Connect the degree search form to a live ASU catalog API (e.g. Algolia) to return matching undergraduate/graduate programs.
- **E2E Testing**: Add Cypress or Playwright end-to-end test suites to verify mobile navigation and interactive toggle states.
- **Animation Enhancements**: Integrate Page transitions and scroll-triggered animations (e.g. using GSAP or Motion One) for an even more dynamic user experience.
