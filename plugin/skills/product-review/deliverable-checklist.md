# Deliverable checklist (plugin mode)

The full kit checks each document with `check-deliverable.mjs` and `check-mock.mjs`. In plugin mode
a separate agent, one that didn't write the document, applies this list. For every item it writes
pass or fail, and for a fail, where and what. Structure only: the fact and design checks still
decide whether the content is right.

Each document carries one `<template id="t-xx">` per language. Check every language on its own,
then compare them.

## Every document

- [ ] No `data-sample` attribute left anywhere (outside comments).
- [ ] No sample names in the text: Tidewell, tidewell.example, Kumo Gear, Sanroku.
- [ ] No image placeholders (`class="… ph-img …"`): a real capture, or a caption saying why there is none.
- [ ] No unfilled `{{fields}}`.
- [ ] No name that wasn't supplied at intake (the account owner's name or organisation, another client).
- [ ] Every in-page link `href="#x"` points to an id that exists in the same language template.
- [ ] Theme contrast, from the `:root` hex values, at least 4.5:1 for each pair present:
      text/canvas, text-2/canvas, text-2/surface, white/brand, white/deep, white/issue,
      deep/surface, issue/surface, good/good-bg, white/role-decide, text/role-reassure,
      text/role-persuade, text/role-sell, text/role-navigate. Write the ratios down.
- [ ] Every theme colour's comment names a token that exists in `03-system/tokens.json` with that
      value, or says default, derived or lightened.
- [ ] With two languages: the same section ids and the same findings, in the same order and number.

## Report (`data-doc="report"`)

- [ ] Sections present: about, summary, findings, directions, crosscheck, next, questions,
      appendix, a1, a2, a3, a4, a5. Localisation review: market and compare as well.
- [ ] About has the strip of screens reviewed (`.screens` with figures) and the findings tally
      (`.tally`). The tally's High and Medium counts equal the High and Medium findings (cards plus
      the further-findings table).
- [ ] Main findings: 12–15 in the by-issue layout. More means grouping by shared cause or fix,
      and moving standalone Medium items to the further-findings table.
- [ ] Each finding (`article.finding`) has: `data-key`, a number (`.f-no`), a title (`h3`), a
      priority tag (`tag prio high|mid|low`), where (`.where`), why it matters (`.why`), a
      screenshot (`figure`, except in the by-page layout), the proposal (`.prop`), why it will
      work (`.because`) and a metric to check (`.measure`).
- [ ] High and Medium findings have a local example (`.ref`).
- [ ] Evidence images are annotated crops (`…-a@2x.png` or `…-a.png`) no taller than 520 px as shown.
- [ ] Every marker (`span.mk`) in a finding's screenshots carries that finding's number.
- [ ] By-page layout: every page section has its annotated screens in the column.

## IA analysis (`data-doc="ia"`)

- [ ] Sections present: summary, nav, layout, headings, paths, labels, ia-findings, proposal,
      candidates, notes.
- [ ] 6–8 task cards. Each has a verdict with a count (`.metric`), a route (`.flow` with steps)
      and local site examples (`.st.g`).
- [ ] Three navigation trees: the client's, a benchmark's, the proposed one.
- [ ] Each page-layout card (`.layoutcard id="layout-…"`) has the bars (`.pmap`), the role shares
      (`.shares`), a proposed bar (`.r.prop`) and a "what it shows" line (`.reads`) that links to
      a finding (`#f3`, `#3` or `IA-3`).

## Index (`data-doc="index"`)

- [ ] Sections present: docs, keys, read, how, limits.
- [ ] At least two deliverable cards, and 3–5 key messages (`.key`).

## Mock (`data-doc="mock"`)

- [ ] The device section (`#device`) is present.
- [ ] At most 18 notes (aim for 10–15 changes, one marker per change; list the rest as not shown).
- [ ] No sub-markers such as `3a`: a change that answers two findings uses one number and names both in its note.
- [ ] Every marker on the proposed side (`#proposed .mk`) has a note (`.notes li > .k`), and every note has a marker.
- [ ] The current side carries markers too, with the same numbers, on each problem as it is now (design proposals and pure additions may have none).
- [ ] Numeric markers exist as findings in the report; prefixed markers (`N1`, `IA-3`) exist in the IA analysis or the report.
- [ ] D markers are design proposals, and their notes say so.
- [ ] Every other note cites the finding it implements, and is Now / Proposed (`p.now` + `p.then`), or a title, a paragraph and a source line.
- [ ] Client-data placeholders are explained in the legend (`.legend`).
- [ ] The logo declares where it came from with `data-asset="official"`, `"site"` or `"stand-in"`; a stand-in is noted in the legend.
- [ ] The current side has its fixed-element layer (`.current .fixed`), or says the page has none (`class="fixed none"`).
- [ ] No unfilled `{{fields}}`.
- [ ] Every row of the mock spec that moves, removes or hides something names, in an "Entry point" column, the entry point that keeps it findable on the first screen.

## Then look

Render each document at 390 px and 1440 px and compare it with the example screens in
`examples/mareo/screens/`. A checklist pass is not a visual sign-off.
