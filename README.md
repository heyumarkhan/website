# HeyUmar

Independent AI content agency website. Static HTML, CSS, and JavaScript; no build or third-party JavaScript dependencies.

## Local preview

Run `python -m http.server 4173` in this directory, then visit `http://localhost:4173`.

## Homepage

- Responsive agency homepage with a real-time WebGL chrome sculpture and CSS fallback.
- Bakery and café portfolio directly below the hero (`#bakeries-cafes`): three original eight-second vertical motion ads, with local poster images, native video controls and no autoplay or video preloading.
- The bakery and café inquiry link selects the corresponding service without overwriting the visitor’s brief. The form remains usable without JavaScript.
- Self-initiated fictional campaign concepts, clearly labeled; buttons open accessible detail dialogs.
- Service accordions, keyboard-accessible campaign blueprint tabs, founder portrait, FAQ, and an inline project inquiry form.
- The sculpture and its color control are hidden on screens up to 760px; WebGL initialization is skipped on mobile.
- Honors reduced-motion preferences and provides a motion pause control. The sculpture pauses offscreen and while the page is hidden.
- Local font and portrait assets, semantic landmarks, social sharing metadata, and SVG favicon.

Contact links use the agency mailbox, `studio@heyumar.com`. Campaign blueprints are illustrative, not an AI generation service. No analytics or tracking is introduced.

## Bakery and café samples

`assets/food/` contains three silent, 720×1280 H.264 videos and JPEG posters. They use original OpenAI-generated imagery, typography, and camera animation rendered locally with HyperFrames. They are labeled as studio concepts for imagined businesses on the page and within the films. They do not represent client campaigns or performance results. No Higgsfield outputs are used.

Videos play on request; starting one pauses the others. Playback pauses when the video leaves the viewport or the page is hidden. The navigation link and `/#bakeries-cafes` support direct traffic to the section. The general campaign portfolio follows it.

## Project inquiries

Netlify Forms processes the static `project-inquiry` form. Visitors provide their name, email, service, budget, and project brief, with optional creative direction. A honeypot filters simple spam. JavaScript submits inline, preserves answers on failure, and confirms success; native HTML submission falls back to `/thank-you.html`.

Form detection must stay enabled in Netlify. Email notifications are configured in the Netlify dashboard for `studio@heyumar.com`; the visitor's `email` field becomes Reply-To so replying reaches them. Submissions are also available in the dashboard. Monitor the account's Forms usage allowance; this setup does not require a paid form service or a plan upgrade.

The existing `projects/` pages and portfolio assets remain in place. Only the homepage has been redesigned.

## Deployment

Publish the repository root using the existing static host. No build command is required. The canonical domain is `heyumar.com`.

## Typography

Space Grotesk by Florian Karsten, licensed under the SIL Open Font License. See `assets/OFL.txt`.
