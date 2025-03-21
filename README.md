# Introduction

We built the landing-page of burnedByHer through [Precedent](https://precedent.dev) - a great NextJS starter that can helped us quickly launch from the ground. 

## One-click Deploy

You can  clone & create this repo locally with the following command:

```bash
git clone "https://github.com/justice-rest/landing-page" && cd landing-page
```

Then, install the dependencies with your package manager of choice:

```bash
npm i
yarn
pnpm i
```

Once your done, run it!

```bash
npm run dev
```

## Tech Stack + Features

https://github.com/user-attachments/assets/aef3c099-e371-43bf-b426-f5ba73185a7c

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Clerk](https://go.clerk.com) - A comprehensive user management platform with beautifully designed, drop-in React components

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge

### Hooks and Utilities

- `useIntersectionObserver` –  React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/justice-rest/landing-page/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way

## Credits

- Steven Tey ([@steventey](https://twitter.com/steventey))
