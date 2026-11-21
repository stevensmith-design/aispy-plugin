# Deliverable templates

Every review package uses the same four documents with the same structure and components, built
from a review that worked well. What changes per run is the content (yours to research and
judge) and the brand (the client's tokens in `theme.css`).

| File | What it is |
|---|---|
| `theme.css` | The only per-client file: the client's tokens mapped to the theme variables |
| `base.css` | All components (cover, findings, tables, trees, bars, task cards, mock shell). Never edited per client |
| `lang.js` | Language switch, embedded images, lightbox, marker toggle |
| `report.html` | Review report, by-issue layout (default), every section as a slot |
| `report-by-page.html` | Review report, by-page layout: each page's annotated screens in a sticky column beside its findings |
| `ia.html` | IA analysis |
| `mock.html` | Mock shell: current, proposed and notes columns |
| `index.html` | Package index, written last |

All sample content is made up (a brand called Tidewell and two benchmarks that don't exist). It
shows the form and the level of detail; none of it is a fact to reuse.

## Workflow
1. Copy this folder to `07-deliverables/src/`, with the captures in `src/img/`.
2. **Apply the client's brand:** map their tokens into `theme.css` (below).
3. **Fill each document slot by slot.** Each `<!-- SLOT … -->` comment says whether the section is
   required or conditional, the data it needs and what it must lead to. Replace every piece of
   sample content; delete `data-sample` from the `<template>` once you have.
4. **Evidence images:** for each finding, write an `annotate.mjs` spec (crop + marks) and
   generate the crops into `src/img/` (`…-a@2x.png`; assemble shows them at their crop size).
   The check fails a finding whose evidence isn't an annotated crop or is taller than 700 px.
5. **Page layout:** write `layout.json` from the measured section positions (the capture's sweep
   gives top and bottom of each section), then
   the full kit's `layout-bars` step (see `plugin-mode.md`) and paste each card into
   `#layout`. Write the "what it shows" line from the numbers in the comment above it.
6. **Assemble:** the full kit's `assemble` step (see `plugin-mode.md`).
7. **Check:** the full kit's `check-deliverable` step (see `plugin-mode.md`)
   until it passes. Then render at 390 and 1440 and look.

## Applying the client's brand
Generate it: the full kit's `theme-from-tokens` step (see `plugin-mode.md`).
The script matches each variable to a token by name, writes the source token beside each value,
darkens a brand colour that white text can't read on (marked "derived"), and lists what it
couldn't match. Review that list and correct any role it got wrong for this brand; keep the
comments true, because `check-deliverable.mjs --tokens` confirms every colour exists in the
extraction. The table below is what each variable is for.

| Variable | Use | Take from the client |
|---|---|---|
| `--canvas`, `--surface` | page and card backgrounds | background and surface colours |
| `--sand`, `--tint`, `--border*` | table heads, soft fills, hairlines | neutral scale |
| `--text`, `--text-2` | body and secondary text | text colours (secondary must reach 4.5:1) |
| `--brand` | cover background, white text on it | the main brand colour, darkened if white fails 4.5:1 |
| `--deep` | links, back bar, buttons in the mock shell | the darkest brand or primary shade |
| `--primary` | counters, accents | primary |
| `--issue`, `--good`, `--warn` | problem, works, medium priority | keep the meaning; pick brand-compatible shades that pass 4.5:1 |
| `--role-*` | page-layout roles | the brand palette where it fits; roles must stay distinguishable |
| `--font-body`, `--font-head` | type | the client's families, then the market's system fonts |
| `--r-*` | radii | the client's radius scale |

If the client has no token for something, keep the default and say so in the comment. The
documents are in the client's brand; they are not a copy of the client's site, so the layout
stays the template's.

## Rules for filling
- Keep every required section. If content can't be produced, keep the section and say what's
  missing and why.
- Add sections, or components inside a section, when the product calls for it; use the existing
  components (`.panel`, `.tbl`, `.facts`, `.flow`…) rather than new styles. Note additions in the
  run log.
- Names: only those supplied at intake. Otherwise "the reviewer".
- Images: captures go in `src/img/` and are referenced by relative path; `assemble.mjs` embeds
  them once, shared by both languages.
- A second language is a second `<template id="t-ja">` with the same ids and findings.
