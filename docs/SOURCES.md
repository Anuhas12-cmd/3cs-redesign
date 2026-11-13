# Content and component evidence

Reviewed 12 November 2026. Content is paraphrased conservatively; numerical animated counters returning zero were not reused.

## Company sources

| Displayed information | Owning source |
| --- | --- |
| Web, AI, digital marketing positioning; email and telephone | https://www.3cs.lk/ |
| Founded in 1997; web/e-commerce/AI capabilities | https://www.3cs.lk/about-us |
| 80+ travel and leisure projects | https://www.3cs.lk/web-design-portfolio |
| Services: responsive design, payment gateways, SEO, social marketing, security, cloud hosting | https://www.3cs.lk/services |
| Performance, security and reliability descriptions | https://www.3cs.lk/our-edge |
| Client names including John Keells, Standard Chartered, Nestlé, KIA, JAT, Maliban, Hirdaramani, Heritance Kandalama and Vogue Jewellers | https://www.3cs.lk/featured-clients |
| JAT Holdings latest work | https://www.3cs.lk/web-design-portfolio |
| BestWeb, Manthan, e-Swabhimani, SLT Zero One recognition | https://www.3cs.lk/awards |
| Best Web Developer 2010–2019 | https://www.3cs.lk/about-us |

Recognition is attributed to the company’s published record, not an independent awards audit. Client typographic treatments use the page’s fonts rather than copied logos. Project external links visit the client websites; client relationships do not imply endorsement of these concept illustrations. Service descriptions combine verified capabilities without inventing performance outcomes. Creative headlines are original editorial copy, not quoted company claims.

## Component audit

| Component | Source and integration |
| --- | --- |
| Skiper49 / Carousel_003 | https://skiper-ui.com/registry/skiper49.json — saved in vendor. Adapted Swiper structure, 40° reference rotation adjusted to 30°, depth 150, structured service cards, scoped CSS, A11y/Keyboard, controls and state. No autoplay or demo assets. |
| Skiper30 | https://skiper-ui.com/registry/skiper30.json — saved in vendor. Motion useScroll/useTransform columns adapted to a responsive two-column composition; no Lenis or unmanaged RAF. Native scroll needs no lifecycle teardown. |
| Spotlight Navbar | https://raw.githubusercontent.com/Ashutoshx7/VengeanceUI/main/public/r/spotlight-navbar.json — saved in vendor. Spring-positioned active ambience and CSS pointer spotlight retained. Default anchor behavior restored; observer and animation cleaned up. |
| LogoLoop | https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/ts-default/Animations/LogoLoop/LogoLoop.tsx — actual public TypeScript/CSS used. Typographic verified clients, restrained linear mode, slow speed. |
| SpecularButton | https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/ts-default/Components/SpecularButton/SpecularButton.tsx — actual public TypeScript/CSS used, WebGL2 shader retained. Two instances only, real actions and reduced motion. |
| 21st.dev footer | The specified community preview and registry endpoint were unavailable; independent CSS beam footer with pointer response and interactive wordmark, no proprietary source copied. |
| 21st.dev testimonials | The specified community preview/registry source was unavailable; independent accessible recognition marquee replaces unverified testimonials. |
| Vapor Type | No licensed source supplied. Independent atmospheric CSS treatment; no private registry access attempted. |

Dependencies are locked by package-lock.json. Tailwind 4 is loaded through PostCSS. Foundational mobile dialog follows the Radix/shadcn composition; `components.json` and `cn` are supplied. Global Swiper styles are imported once, and local overrides are scoped to `.services-coverflow`. Browser scroll is the single scroll controller. No external runtime image dependencies.
