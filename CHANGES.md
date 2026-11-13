# Changes — 13 November 2026

## Mobile Edge section / Accordion 05

- Existing project: Next.js App Router + TypeScript, Tailwind 4 with PostCSS, configured shadcn aliases, existing `@/lib/utils` (`clsx` + `tailwind-merge`) and Lucide. Installed only the missing `@radix-ui/react-accordion` dependency.
- Added `src/components/mobile/EdgeMobile.tsx`, `src/components/mobile/edge-accordion.tsx`, and `src/data/edge.ts`, following the existing `src/` layout. No shared accordion was changed.
- The page adds one import and replaces only the original `<Why3CS/>` mount with the requested `md:hidden` mobile wrapper and `hidden md:block` desktop wrapper. The original desktop component is not edited.
- Heading, intro (including “No detail left to chance.”), link text, URL and JSX were extracted programmatically from `Why3CS.tsx`. The link’s existing arrow is retained as part of that copied markup. No icons are displayed in the accordion. Its primitive’s hidden chevron is retained so the original negative spacing continues to apply to the same child structure.
- Data was also extracted from the original source. **Copy decision:** the brief’s sample Security sentence omits “practices”; the actual source says “OWASP-aligned development practices”. The hard requirement to reuse existing copy word for word takes precedence, so “practices” is preserved.
- Accordion: single, collapsible; constant `DEFAULT_OPEN = '01'`; original `-space-y-6`, closed 20% foreground, open lime, uppercase 30px display titles, 12px mono indices and minimum 44px trigger height. Descriptions align with titles after the index/gap. No 28% opacity or `-space-y-5` deviation has been introduced.
- Scoped `.edge-acc` variables reuse ink `#1b1e19`, off-white `#f5f5ed`, lime `#dff45a`, body copy `#b9c4a7`, and a 14% light-text border. No global color token changed.
- New section retains the dark mobile treatment, existing page gutter, 40px vertical padding rhythm and source order (heading, intro/link, list). It applies below 768px, including 601–767px as explicitly requested. Desktop and adjacent section styles are retained.
- Tailwind 4 receives only the two required accordion animation tokens and height keyframes. All new styling is scoped to the mobile section/accordion, with reduced-motion overrides. No `tw-animate-css`, media, fonts or animation library added.
- A selected item scrolls into the nearest viewport position after the 200ms animation; timer and animation frame are canceled on rapid changes and unmount. Reduced motion uses an immediate, non-smooth scroll and near-zero animation.

## Verification

- `npm run build`: passed; homepage statically generated. `npm run typecheck`: passed.
- Exact source-copy assertions passed for the heading JSX, intro JSX, original link JSX/URL, and all three item titles/descriptions.
- SHA-256 before/after hashes match for `Why3CS.tsx`, Selected Work, its mobile showcase, Hero, Services, Recognition, CTA, Footer and Header. Removing only this task’s scoped CSS addition and restoring the original theme line reproduces the exact original `globals.css` SHA-256 (`BCE2634E904648E9BF4A300C9E5A76A058DF6AB0CB903AFB4900D2C64A3B187C`). Existing desktop styles are therefore preserved byte for byte.
- This workspace has no Git repository: `git diff` reports “not a git repository”. Hash comparison substitutes for that requested check; no Git history was initialized.
- Exported HTML contains both requested responsive wrappers. Its three mobile triggers have `aria-expanded` true/false/false and state open/closed/closed, respectively. Generated CSS contains the 48rem (`md`) boundary, 20% closed foreground, and the actual state-driven `animation: .2s ease-out accordion-down/up` rules plus height keyframes. Inline theme tokens are resolved directly into animation declarations by Tailwind 4.
- Computed sRGB contrast on `#1b1e19`: lime `#dff45a` = **13.82:1**; body text `#b9c4a7` = **9.24:1**, both exceeding 4.5:1. Closed text remains the requested decorative 20%; its legibility was not visually verified, so no undocumented opacity change was made.
- **Browser QA blocked:** Computer Use stopped because it could not determine the active Windows browser URL with enough confidence to enforce policy. No alternate browser-control route was used after that stop. Actual checks at 360, 390, 430, 767, 768, 1024 and 1440px, click/animation measurements, keyboard/screen-reader execution, reduced-motion toggles and Lighthouse were **not completed**. Trigger `min-height:44px`, fixed header scroll margin, Radix semantics, animation cleanup and reduced-motion rules were source-reviewed, not claimed as measured browser results.
- iOS Safari and Android Chrome/address-bar behavior were not tested; no physical mobile device sessions are connected. No new CLS, console-cleanliness or hydration-warning score is claimed. Browser/device acceptance testing remains before final visual sign-off.

## 2026-11-13 — sourced content, work uniqueness and motion

- Removed registered trademark symbols from the navigation and both footer wordmarks.
- Replaced vague recognition cards with four specific, linked first-party reports: Best Web Developer Gold (2026); 16 BestWeb awards (2025); 16th year receiving Best Web Developer as reported in 2025; JAT Holdings Overall Bronze (2026).
- Confirmed the existing telephone +94 759 100 662 against the live official contact page. Its CALL US grouping is +94 75 91 00 662; WhatsApp is a different number and was not substituted.
- Filled About's left column with linked statistics: a conservative 1,000+ clients across 57 countries (investor page prose reports over 1,200), and 16 BestWeb 2025 awards.
- Six unique original work studies: the existing four client concepts plus fictional Orbit Audio and Fieldnotes. Three staggered desktop columns contain each piece exactly once. The former duplicate link grid is hidden on desktop with motion enabled; tablet/reduced-motion uses the unique static grid and mobile uses the existing touch carousel. Six mobile index buttons use a balanced three-column grid.
- Visible work disclosure: Independent concept designs, not delivered client work. The two fictional studies are explicitly labelled and their enquiry arrows link to Contact.
- Added About stat reveals, footer wordmark entrance, artwork zoom and service-arrow/art hover motion. Existing native smooth scrolling, hero loading and shader button effects retained. Reduced-motion support retained, with no added dependency or scrolling engine.
- Existing direction-aware fixed header retained: hides after downward travel, returns after upward travel, reveals at page top or keyboard focus. Corrected dark-section detection through the mobile accordion's full <768px range.
- All six service links target the existing Contact section and now have service-specific accessible names.
- Hero subtext and About secondary paragraph now #4c5246 on #f5f5ed: calculated WCAG contrast 7.36:1.

Validation: production build and TypeScript pass. Browser checked at 1440x900, 714x667 and 390x844; no horizontal overflow. Confirmed six distinct desktop gallery links with the alternate list hidden; mobile selection of Fieldnotes and keyboard ArrowLeft to Orbit Audio; service-link URL #contact; header hidden after downward movement and revealed after upward wheel scrolling. No browser console errors observed. Temporary browser viewport override reset. No physical-device, screen-reader or Lighthouse audit claimed.

Sources checked 2026-11-13:
- https://www.3cs.lk/contact-us
- https://www.3cs.lk/investors
- https://www.3cs.lk/news/from-code-to-crown-3cs-designed-websites-win-big-at-bestweb-2025
- https://www.3cs.lk/news/3cs-sweeps-top-honours-at-bestWeb-2026
- https://www.3cs.lk/news/3cs-featured-on-ada-derana-business-news-and-daily-ft-for-bestWeb-lk-2026-triumph

The investor page's body prose reports 57 countries while other counters on that page show different values; this concept uses the explicit prose claim and links to the source. Awards are attributed to 3CS's own reports.

## 2026-11-13 — restore the recorded Selected Work animation

Reference reviewed: user video 1794492793028_20261112-1411-50_7006984.mp4, work sequence at approximately 28–32 seconds. Frames extracted locally for inspection; footage not copied into the project.

Restored the original Skiper30 four-column composition from the retained vendor registry: 175vh clipped gallery, 2vw gaps/padding, -45%/-95%/-45%/-75% column offsets, and 200vh/330vh/125vh/300vh scroll travel across start-end/end-start progress. Removed the later three-column approximation. No additional scrolling engine or animation loop installed.

Preserved all six current concepts and added two labelled fictional brand studies, Forma Studio and Serein, bringing the collection to eight. Each column owns a disjoint pair: A/B/A. Repeated A tiles are more than a viewport apart (each tile at least 50vh, with positive gaps), so the same project cannot appear simultaneously in two columns or twice within the viewport. Decorative repeat links are excluded from keyboard and accessibility navigation. Kept the disclosure, touch carousel, reduced-motion fallback and project link destinations. Mobile index fits eight studies in two rows of four.

Validation: Next production build and TypeScript pass. Source checks confirm original motion distances and geometry, eight valid assets and disjoint column pairs. Live browser visual comparison was attempted but the preview tool timed out; no pixel-exact or real-device verification claimed.

## 2026-11-13 — reliable mobile hero orbit

Moved the existing CSS orbit (all three rings) into Hero's server-rendered markup, outside the lazy-loaded Three.js module. This preserves the current mobile appearance while making it independent of that module's download, hydration and WebGL startup. An outer error boundary isolates lazy import failures.

Desktop WebGL now stays transparent until its first frame is rendered and exposes the permanent CSS orbit on context loss. Removed the unused WebGL capability-probe canvas, which allocated another graphics context. Media-query changes are observed so switching between mobile and desktop updates the renderer; reduced-motion behavior and off-screen rendering suspension remain intact. Renderer readiness callbacks are stable and pending frame callbacks/listeners clean up on unmount.

Validation: production build and TypeScript pass. An exported-HTML assertion verifies that the CSS orbit and all three rings exist before client JavaScript runs; source assertions verify the independent fallback and mobile WebGL hiding rule. No physical-device or throttled-network browser run claimed.

## 2026-11-13 — correct mobile 3D suppression

The preceding fallback fix did not restore animated 3D on mobile: HeroScene still disabled its Canvas at <=600px, and CSS hid the WebGL wrapper there. Removed both restrictions. Mobile now renders the original animated Three.js sculpture at DPR 1 with a 64px environment map; desktop settings remain unchanged. The CSS orbit is visible during loading or a render failure and is hidden only once the 3D layer reports a successful frame. Renderer-boundary errors also clear readiness, preventing an empty successful-looking layer from hiding the fallback.

Validation: production build and TypeScript pass. Live browser at 390x844 confirmed a Canvas, data-ready=true, visible WebGL wrapper, hidden fallback and the metallic 3D sculpture. Two further reloads each reached ready=true; no console errors captured. Screenshot: docs/screenshots/mobile-orbit-fixed.png. Temporary viewport override reset. Physical-device testing not claimed.
