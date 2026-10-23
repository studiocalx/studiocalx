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
