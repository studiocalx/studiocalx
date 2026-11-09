# studioCALX — Complete Concept Site

A multi-page responsive concept website authored as a standalone HTML/CSS/JavaScript project.

## Pages
- index.html — Home
- about.html — About / philosophy
- services.html — Services
- process.html — Process
- works.html — Works / experiments
- contact.html — Contact demo

## Run locally
Open `index.html` in a browser. No build step is required.

## Important demo notes
- The contact form is UI-only and does not submit or store data.
- The Note links point to the studioCALX profile: https://note.com/studiocalx.
- Works items are labeled as concept samples / in progress, not real client results.
- Google Fonts are loaded externally; system fallbacks are provided.
- The visuals are authored as CSS shapes and typography, so no external image assets are required.
- Before production: test the Note profile URL, add a real contact endpoint, test in target browsers, and review accessibility.

## Refinement notes (2026-10-22)
- Preserved the existing homepage copy, typography, orbital graphic, square/card motif, colors, and section order.
- Standardized the visible wordmark to `studioCALX`.
- Added small keyboard-focus and mobile tap-target refinements without changing the art direction.
- This remains a concept build: the contact form is not connected to a submission service, and the Note link points to the studioCALX profile URL.


## Refinement notes (2026-10-23)
- Added Generator as a prototype, describing its role as interview/requirements-to-Stitch prompt bridge, not an automatic finished-design engine.
- Added A4 flyer/property-sheet tool as a concept with verification explicitly pending.
- Added Stitch local-business prototype studies and clearly labeled them as prototypes, not client deliveries.
- Updated Process Step 03 to describe the current flow: structured brief → Stitch prompt → prototype → optional code refinement.
- Browser-based functional, mobile, accessibility, and form-submission testing is still pending; do not describe this concept site as production-ready.

- Accessibility polish: mobile-menu button label now reflects open/closed state; Process accordion supports Enter and Space keyboard activation.
- Removed repeated copy on the Contact page while retaining the official studioCALX Note link.


## 旧Geminiサイトの保存版
`works/archive/gemini-first-site.html` は、初期AI生成サイトのHTMLスナップショットです。Worksページから別タブで開けます。外部フォントとTailwind CSS CDNを利用するため、オフラインでは当時の見た目が完全再現されない場合があります。これは保存用コピーであり、公開中の旧サイトを上書き・変更するものではありません。


## Refinement notes (2026-10-23, batch review)
- Removed the unapproved numbered labels “01 / Web & Design” and “02 / Tools & Workflow”; Works now uses descriptive, unnumbered section labels.
- Kept Back Issues out of the initial Works listing and retained the archived Gemini HTML snapshot as a separate historical artifact.
- The Note links in the main site point to https://note.com/studiocalx.
- No live deployment was performed. Static link and source checks were performed on this local package; browser/device visual testing and real form submission remain unverified.


## Works / CALX LAB restructuring (2026-11-09)
- Reorganized Works into Web Studies, CALX LAB, and FIELD NOTES.
- Existing industry pages are labeled as demos/concept samples, not client delivery records.
- Added links to the local demo pages, Generator, A4 editor, archived first AI site, and WordPress editorial archive.
- Added a narrowly scoped CSS safety rule for `#price` / `.price-section` / `[data-section="price"]`.
- The current homepage source contains no `#price` section or Price navigation item; the rule is a safeguard for a future/reintroduced section. It does not hide prices inside business demo pages.
- CALX LAB uses Obsidian Black `#0F0F10` and Flat Yellow `#FFCC00` as a distinct experimental-area treatment. The main site's existing paper/acid visual identity is retained.
- The uploaded source did not contain an identifiable separate “ひだまり幼稚園” mobile-revision file. `nursery.html` is titled “SUNSHINE KIDS ACADEMY” and is labeled accordingly; it is not renamed as a Hidamari delivery.
- Static source/link checks only. No Cloudflare deployment, live-site validation, or physical smartphone testing has been performed.
