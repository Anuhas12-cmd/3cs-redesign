# 3CS — Creativity, engineered.

A responsive digital agency landing page built with Next.js, React and TypeScript. The experience combines editorial typography, an animated 3D hero, interactive service cards and a scroll-driven portfolio.

This is an **independent academic redesign**, not the official 3CS website. Portfolio artwork and taglines are original concept studies, not delivered client websites or client-approved designs.

## Features

- Responsive layouts for desktop, tablet and mobile.
- Fixed navigation that hides on downward scroll and returns on upward scroll.
- Animated mobile menu with keyboard focus management and a dedicated contact button.
- Metallic three-ring hero sculpture with a server-rendered CSS fallback.
- Count-up animations for the About section's headline statistics.
- Six-service coverflow carousel with touch, pagination and arrow controls.
- Four-column portfolio parallax on desktop and a swipeable project showcase on mobile.
- Performance, Security and Reliability accordion on smaller screens.
- Recognition cards with links to supporting award reports.
- Shared specular button styling with animated WebGL highlights.
- Reduced-motion alternatives, visible focus styles and a skip-to-content link.

## Technology stack

| Technology | Role |
| --- | --- |
| Next.js 16 | App Router, metadata, font loading and static export |
| React 19 | Component rendering and interactive state |
| TypeScript 5 | Typed components and content structures |
| Tailwind CSS 4 and custom CSS | Responsive utilities, design tokens and visual styling |
| Framer Motion | Entrance effects, count-up animations, gestures and scroll transforms |
| Three.js and React Three Fiber | Interactive 3D hero rendering |
| React Three Drei | Environment lighting and scene helpers |
| Swiper | Service carousel, coverflow and touch navigation |
| Radix UI | Accessible dialog and accordion primitives |
| Lucide React | Interface icons |
| clsx and tailwind-merge | Conditional class composition |

The interface uses Bricolage Grotesque, Geist and Geist Mono through `next/font/google`.

## Installation

### Requirements

- Node.js **20.9 or later**; development has been tested with Node.js 24.
- npm, included with Node.js.
- Git, if cloning the repository.
- Internet access during installation and builds to download dependencies and Google Fonts. Built fonts are served locally with the exported site.

### Local development

Clone your repository, replacing the example URL with its actual GitHub address:

```bash
git clone https://github.com/YOUR_USERNAME/3cs-redesign.git
cd 3cs-redesign
```

Install the versions recorded in the lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). Changes to source files update the development preview automatically.

On Windows, use `npm.cmd` in place of `npm` if PowerShell blocks the npm script.

### Environment variables

**No environment variables are required to run or deploy the current site.** There is no backend, database or contact-form submission service.

The optional `REACTBITS_LICENSE_KEY` entry in `.env.example` is only for installing licensed React Bits Starter components in future development. It is not used by the running site. Keep any actual key in `.env.local`; never expose it through a `NEXT_PUBLIC_` variable or commit it to Git.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from `package-lock.json` |
| `npm run dev` | Start the local Next.js development server |
| `npm run typecheck` | Check TypeScript without emitting JavaScript |
| `npm run build` | Build the site and generate its static export in `out/` |
| `npm run start` | Serve the existing `out/` directory for a local production preview |

To preview a production build:

```bash
npm run build
npm run start
```

The preview runs at [http://127.0.0.1:3000](http://127.0.0.1:3000). Stop the development server first if it is already using that port. The production preview uses the local server in `scripts/serve.mjs`, rather than `next start`.

## Project structure

```text
src/
├── app/                     # Page composition, metadata, fonts and global styles
├── components/
│   ├── layout/              # Header, mobile navigation and footer
│   ├── sections/            # Homepage sections
│   ├── mobile/              # Mobile 3CS Difference accordion
│   ├── three/               # Hero sculpture and renderer lifecycle
│   ├── ui/                  # Shared buttons, reveals, counters and showcases
│   └── SpecularButton.*     # Shader button implementation, styles and types
├── data/                    # Navigation, services, projects, awards and edge copy
└── lib/                     # Shared class-name utility
public/projects/             # Eight local SVG concept studies
scripts/                     # Static production-preview server
vendor/                      # Component reference sources and licence notices
docs/                        # Source references and verification notes
```

## Main components

| Component | Responsibility |
| --- | --- |
| `Header` | Scroll-aware navigation, active section tracking and mobile dialog |
| `Hero` / `HeroScene` | Headline, project navigation, animated sculpture and persistent fallback |
| `ClientLogos` / `LogoLoop` | Scrolling featured-client names |
| `About` / `CountUp` | Agency introduction and statistics that animate once on entering view |
| `Services` | Swiper coverflow with six service cards and contact links |
| `SelectedWork` / `Skiper30` | Desktop portfolio with staggered column offsets and independent scroll speeds |
| `ProjectShowcase` | Mobile project selection using swipe, thumbnails, arrows and keyboard input |
| `Why3CS` / `EdgeMobile` | Desktop engineering benefits and mobile accordion presentation |
| `Testimonials` | Award recognition and source links; despite the filename, it renders no client testimonials |
| `ContactCTA` | Closing project invitation; its button intentionally has no navigation or email action |
| `ProjectButton` / `SpecularButton` | Shared button appearance, shader highlights and optional activation behavior |
| `Reveal` | Reusable viewport entrance animation with reduced-motion support |
| `Footer` | Section links, public contact details and animated wordmark |

## Content and customization

- **Company and project content:** edit `src/data/site.ts`.
- **Mobile engineering descriptions:** edit `src/data/edge.ts`. The desktop copy is currently defined separately in `Why3CS.tsx`; update both when changing shared wording.
- **Colors, typography and responsive layouts:** edit `src/app/globals.css`.
- **Page title, description and indexing:** edit `src/app/layout.tsx`.
- **Project illustrations:** add or replace files in `public/projects/` and update their data entries.

The portfolio contains four studies based on brands listed by 3CS—JAT Holdings, Heritance Kandalama, Vogue Jewellers and Hirdaramani—and four explicitly fictional studies: Orbit Audio, Fieldnotes, Forma Studio and Serein. The visible concept disclosure must remain accurate when changing this content. Supporting references are recorded in [Sources](docs/SOURCES.md) and [Changes](CHANGES.md).

Hero and navigation buttons scroll to Contact. Service links also lead to Contact. The final Contact CTA is deliberately a plain button; public email and telephone links remain in the footer.

## Animation and accessibility

The hero's CSS orbit is included in the initial HTML. The 3D layer replaces it only after a rendered frame is ready; loading failures and graphics-context loss retain the fallback. Mobile uses a lower rendering resolution, and the scene pauses when offscreen.

Portfolio scrolling uses Framer Motion transforms with native page scrolling. It does not install a second scrolling engine. Each desktop column owns a separate project pair, with repeated artwork separated by more than one viewport.

Reduced-motion preferences disable or simplify animated effects. Radix handles dialog focus and dismissal, recognition pauses on hover or focus, and mobile project controls support keyboard navigation. These features do not constitute a formal accessibility certification.

## Deployment

### Vercel

1. Push the project to a GitHub repository.
2. Import that repository into Vercel.
3. Use the **Next.js** framework preset and the repository root directory.
4. Use `npm run build`, leaving install and output settings at their framework defaults.
5. Deploy without adding environment variables.

The project is configured with `output: 'export'` and unoptimized local images in `next.config.ts`. A separate `vercel.json` file is not required for this setup.

### Other static hosts

Run `npm run build` and publish the generated `out/` directory. The exported site does not require a Node.js server in production.

Page metadata currently sets `index: false` and `follow: false` for the academic concept. This requests exclusion from search engines; it does not restrict access to a published URL.

## Verification

Run these checks after changes:

```bash
npm run typecheck
npm run build
```

Check the mobile menu, hero rendering after reloads, service navigation, desktop parallax, mobile project controls and reduced-motion behavior in a browser. There is currently no automated unit or end-to-end test suite.

See [Changes](CHANGES.md) for subsequent implementation and verification records, [QA](docs/QA.md) for the initial report, and [Assets log](ASSETS_LOG.md) for asset provenance. Historical reports describe the version tested at the time, not necessarily the current interface. No Lighthouse score, complete device matrix or production deployment is claimed here.

## Credits and licensing

- **Skiper UI / Gurvinder Singh:** service coverflow and desktop parallax adaptations. Original registry references are retained in `vendor/`, with attribution in the component sources. [Skiper UI](https://skiper-ui.com).
- **React Bits / David Haz:** LogoLoop and SpecularButton adaptations. Preserve the [MIT + Commons Clause notice](vendor/REACT-BITS-LICENSE.md). [React Bits](https://reactbits.dev).
- **Vengeance UI:** spotlight navigation adaptation. Preserve the [licence notice](vendor/VENGEANCE-LICENSE).
- **Ali Imam / designali-in:** Accordion 05 reference adapted using Radix primitives. Its supplied reference did not state a licence; attribution and provenance are recorded in [Assets log](ASSETS_LOG.md).
- **Project artwork:** original SVG studies created for this redesign; they are not official 3CS deliverables.

The project does not declare a blanket open-source licence. Included third-party components retain their respective terms, and referenced company names and brands belong to their respective owners.
