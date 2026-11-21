---
name: product-review
description: >
  Professional UX/UI/IA review of an existing website or app: capture the product,
  extract its design system, run three independent review lenses, research the market and
  benchmarks, and deliver a review report, an IA analysis and a current-vs-proposed mock of a key
  screen, all styled in the product's own design system. Handles general reviews and market
  localisation reviews. Use when someone asks for a UX review, UI review, UX audit, expert review,
  IA review, localisation review, "review our site / app", "review <url> and propose
  improvements", or pastes a request asking for one. Starts from a bare URL: it asks for what it needs in one batch, with
  defaults. Not for reviewing a screen Claude just built or a single PR (use ui-design-review).
metadata:
  version: 0.8.8
---

> **Plugin edition.** This is AIspy's plugin-directory edition. Before anything else, read
> `plugin-mode.md` beside this file: it says where the templates and examples are in this edition
> and what replaces each script step. Where it and this file differ, it wins.

# Product review

A senior UX/UI/IA review of someone else's product, directed by a person. This skill replicates a
review workflow that was tested against a senior designer's reference review: keep to its shape, and add a step only when
a real run shows it beats the baseline on quality or cost. New lessons become checklist lines
(`references/checklist.md`), not new steps.

**Budget.** The baseline's timings are the reference: the same task shouldn't take longer or cost
more just to reach the same result. Extra time or cost is fine when it buys real value (an extra
check that catches errors, say); the run log says what it bought. Agent time for six pages,
scaled by scope:

| Step | Baseline | Per unit |
|---|---|---|
| Capture | ~30 min | ~5 min per page, both widths |
| Design system | ~7 min | once per product |
| Research and benchmarks | ~15 min | once per product and market |
| Three lenses (parallel) and synthesis | ~15–20 min | |
| Report | ~50 min | |
| IA analysis | ~55 min | |
| Each check (separate agent) | a few minutes | |
| Mock | ~20 min per iteration | per screen |
| Translated version | ~20 min plus review | |

Log the clock time of each step. If a step runs well past its reference, say why in the run log;
if it bought nothing, simplify. Record token use at the end when it's available.
Don't polish before the person has seen it.

## Before you start
- **Setup check (two minutes, before anything else).** Confirm, and note in the run log:
  1. you have the person's go-ahead to start separate agents, and you can. Many sessions only
     start agents when the person asks for them, so if the request doesn't already say so, ask
     once at intake: "This review runs its three lenses and two checks as separate agents, so
     they're independent. OK to start them?" Then start a trivial one and see it return;
  2. a browser reaches the site in scope;
  3. a scripted browser can take screenshots (for `annotate.mjs` and captures);
  4. the kit's skills are readable.
  Exception: if the person supplies only screens (no URL or build), skip check 2 and record in
  `01-frame.md` that the sweep is done from the supplied screens.
  If any fails, **stop and tell the person** what failed and what it would cost the review. Don't
  continue in a reduced mode: lenses run in your own context are not independent, take a
  fraction of the time and find far less, and the result can't be compared with the reference
  review. Carry on only if the person explicitly says to, and then label every affected step
  "not independent" in the run log and the report's method section.
- **Agents.** The three lenses and every independent review run as separate agents. Never call a
  check independent if it ran in your own context.
- **Kit skills** (bundled in `skills/design-kit/`): `ui-design-system`, `ui-design-review`,
  `ia-review`, `design-refine`, `ui-design-principles`, `distinctiveness-review`. If the kit's
  install or lock check fails, note it once and carry on.
- **Pack paths.** `scripts/…` paths are relative to the pack root, two folders above this file
  (`../../` from `skills/product-review/`); `references/` and `templates/` sit beside this file.
- **Files.** Work in one folder, `review/<product>-<date>/`, inside the folder the person
  connected. Keep a short `run-log.md`: what ran, what didn't, which agents were started (with
  what input), the start and end time of each phase (read from the clock when it happens, never
  estimated afterwards), and anything dropped between drafts, with the reason. **Before every stop, the
  deliverables must be in that folder**, not only in your own workspace.
- **Don't** add to cart, enter personal or payment data, sign in for the person, or publish
  anything. For logged-in areas, the person signs in in the browser themselves. Never use
  another client's name, screenshots or content in any output.
- **Versions.** Before each stop, compare the new version of every document with the previous
  one; nothing is dropped without a stated reason. Superseded versions go to `_archive/`, never
  deleted.

## Phase 1: review, report and IA analysis

### 1 · Intake (one batch of questions, then go)
The one must-have is the product: a URL, a store link, or screens or saved HTML. Without it, ask
for it and nothing else. Then read the request (a pasted client request is the brief; the
person's own direction wins where they conflict) and take a 10-minute look at the home page and
the key-task page. From that, propose a default for each question and ask them together:
- purpose (sample for a pitch, improvement work, pre-launch check)
- scope: 4–6 pages or flows you propose (or run `review-scoping` for a big site)
- **priority device** (mobile for consumer products, desktop for B2B tools)
- review type: general, localisation or both (localisation if the audience's market differs from
  the company's home market)
- official logo and fonts, analytics or A/B results, research, constraints and deadlines
- output language, whether a second-language version is needed (and when), and who gives
  feedback and how quickly
- **how the deliverables should name the reviewer:** a person, an organisation, both, or neither.
  Use only what the person tells you here; never take names, employers or email domains from
  account details, memory or anything else in your context. Default: no names ("the reviewer").
- report layout: by issue (default) or by page (`references/deliverables.md`)

No answer: use the defaults, list them at the top of `01-frame.md` and carry on. `01-frame.md` is
one page: goal, key task, users, scope, priority device, review type, **the use case of each page
in scope** (how users arrive, what they want to know or do there, and the goal it serves), what
we won't do, deliverables.

**Reference examples.** If the person supplies example deliverables from an earlier review, they
are the standard for depth, tone and what a good section contains. If they supply none, the
pack's examples are the standard. `templates/` sets which sections a document has and its layout,
so the package matches every other run. `examples/mareo/` sets the standard for what each section
contains, how it is argued and how evidence is marked, and for the mock (it recreates the review
the kit was tested against). Open its `index.html`, `mareo-jp-localisation-review.html`,
`mareo-jp-ia-analysis.html`, `mareo-jp-mock-pdp-mobile.html` and `mock-spec.md`. Open
`examples/brolga/index.html` for what a full run's package looks like. The findings count follows
the 12–15 rule (Mareo has 13); Brolga is a run's output, not the standard. Mareo covers one
product page, and the parts of the reference it leaves out are labelled "out of scope in this
example"; a run must not copy those labels or that scope, which comes from the run's own intake.
Take every finding, fact and screenshot from the product being reviewed, never from the examples.

**Supplied review.** If research, lens outputs and a synthesis are supplied too, start at step 7:
use them as they are, and only check live what a document needs.

**Review only.** If the request is for the findings without documents, stop after step 6: give
the synthesis (every finding with its number, priority, perspective, where it occurs and the
evidence, plus the IA findings and task-path verdicts) in the reply, and save it as
`05-synthesis.md`.

**Supplied extraction.** If captures and a design system are supplied (from an earlier session or
another person), use them as they are and skip steps 2–3. Only do the parts that are missing,
such as the sweep note or a fresh first-load capture, and only when a finding needs them.

### 2 · Capture
Use the browser (or `scripts/capture/capture.mjs` when the shell can reach the site). For a native
app, use supplied screens or a simulator or emulator, captured flow by flow, with the sweep done
by hand. For each
page, priority device first, at 390×844 and 1440×900:
- **First load as a new visitor:** clear the site's cookies and storage first, load, wait about
  15 s, then scroll. Keep one "as seen" first screen with any modal, chat, coupon or banner
  visible.
- Screenshots down the whole page (zoom where detail matters). Save images as files; don't pull
  image data through the conversation.
- DOM facts with small in-page scripts: headings (including visually hidden ones), computed type
  and colour, hidden text, link and button destinations (`scripts/capture/extract-in-page.js` and
  `sweep-in-page.js` help).
- **Sweep:** open every pop-up, ⓘ, accordion, filter, tab, option selector, the menu and the
  footer once. Write `02-capture/sweep.md`, one line each with what's inside.
- **Live values:** while the selectors are open, record `02-capture/live-values.md`: price per
  model and size (or plan and option), review counts and ratings, spec values the decision
  depends on (width, dimensions, weights), fees and delivery terms, with page and date. The
  report and the mock use these instead of estimates.
- Remove anything you stored on the site, look at the images, and redo broken ones.

### 3 · Design system
Kit `ui-design-system`, Extract mode, with its validator: `03-system/DESIGN.md` and `tokens.json`
(marked "extracted, not approved") from the live site's CSS. Each token is the value as
rendered (computed styles on the pages in scope); where near-identical values compete, take the
one used most and list the others as drift. Theme or custom-property names help name a token
but don't decide its value. It is the visual language of every deliverable. Logo: the official file if supplied; otherwise the site's own SVG, labelled "taken
from the site". If the request is only for extraction, stop here.

### 4 · Research
Market context and official statistics (the **newest edition**, cited with its date); the
regulation and conventions that apply to the category and market (not legal advice); and **4–6
benchmarks read live**: the closest local competitor, the category leader, 1–2 premium or
design-led brands, and one global brand with a well-localised site (for a general review: the
closest competitors and the category leader). Measure the same things on each (type values, where
delivery, price and payment information sits, review placement, menu structure, page length in
screens) and screenshot them on the priority device. For each pattern you'd recommend copying,
note why that brand does it and whether it transfers. Write it up as `04-research.md`: market
evidence, standards (e.g. typography), the measured benchmark tables, implications, sources.

### 5 · Review: three lenses in parallel
Three separate agents, each given the frame, captures, sweep note, `03-system/`,
`references/checklist.md` and `references/review-questions.md` (what experienced human reviewers
look for, with each lens's own categories):
1. `ui-design-review`: UI craft, interaction, visual consistency and accessibility
2. `ia-review`: structure, navigation, journeys, labels and task paths
3. `design-refine`: whole-product critique: purpose and value, decision support, trust and brand feel

Each lens investigates everything in scope and reports all its findings, strongest first; the
ranking is for the summary, not a limit on what gets looked at. For a localisation review, each
lens also applies the checklist's market notes. If the person supplies their own review
guideline, give it to every lens as well.

Then a short synthesis that accounts for **every lens finding** (kept as #n, merged into #n, or
dropped with a reason), so nothing disappears unnoticed, and records each of the nine review
categories as covered, partly covered or not covered, and why. One numbered backlog, mixed severities
split, prioritised by this rule:
- **High:** weakens the key task on the priority device, or directly undermines a goal the
  client stated (for example a premium brand feel), as seen by the target users
- **Medium:** friction, doubt or brand harm
- **Low:** polish

**Group before you number.** The report's findings are problems a client acts on, not lens
items. Merge findings that share a cause and a fix (no Japanese typeface, negative tracking and
tight leading are one typography finding; five places that disagree about delivery are one), the
way the reference review turned 60-odd observations into 13 findings. Keep apart what the
reference kept apart: mid-word line breaks were its own High finding (#2, 言葉や商品名が単語の途中で
改行される), separate from the typeface finding, because a client sees it instantly in its product
names and fixes it differently (phrase-aware breaking, not a font). Aim for **12–15 main
findings**; each keeps every piece of evidence from what it merged. Medium items that stand
alone and don't merge go to **further findings**, a compact table in the findings section.
Low items go to appendix A2. The synthesis records which lens findings went into which.
Grouping must never make a problem harder to see:
- the title names every problem the finding covers, in plain words (a reader scanning titles
  should find "mid-word line breaks" or "only Paidy at the button" without opening the card);
- a problem that would be High on its own makes the whole finding High;
- each problem keeps its most visible instance as evidence (the product name split mid-word,
  not only a size pill);
- merge only what a client would fix together; two decisions the shopper makes separately
  (is the price final? can I pay my way?) stay two findings.

### 6 · Cross-check and verify
Test the load-bearing claims against **3 strong brands outside the category** with mature sites in
the target market (is it really a market convention?), and for a localisation review against the
client's home-market site (template or local copy?). Soften what doesn't hold. Re-check every
finding on the live site before the report goes to the person, and again after their feedback.
No "missing" or "not shown" claim goes in until the sweep note and the live page confirm it.

### 7 · Report and IA analysis
Build both documents from the templates (`templates/README.md`): the form is fixed, the content
and judgement are yours. `references/deliverables.md` says what each section must contain and
what each analysis component must lead to.
1. Copy `templates/` to `07-deliverables/src/`. Generate `theme.css` from the extracted tokens
   (the full kit's `theme-from-tokens` step (see `plugin-mode.md`)), read its
   mapping notes and correct any role it got wrong, keeping each source comment true. Same
   layout for every client; only the theme changes. Don't edit `base.css`.
2. **Make the evidence images first.** For every finding, crop the captures to the element and
   mark them with `scripts/capture/annotate.mjs` (outline and finding number; the caption explains), the
   way the reference review did: small, legible crops, never whole screens in a finding. For the
   by-page layout, also annotate each page's whole screens for the column.
3. Fill `report.html` (or `report-by-page.html` if that layout was chosen) and `ia.html` slot by
   slot, replacing all the made-up sample content.
   Measure section positions for every key page type (and one benchmark page) and generate the
   page-layout bars and shares with `scripts/build/layout-bars.mjs`; write the "what it shows"
   line under each from its numbers.
4. Assemble each with `scripts/build/assemble.mjs` (one self-contained file, images embedded)
   and run `scripts/checks/check-deliverable.mjs` on it, with `--tokens 03-system/tokens.json`,
   `--localisation` for a
   localisation review and `--forbid` listing every person or organisation name you can see in
   your context that wasn't supplied at intake. Fix until it passes.
You may add a section or change the order when the product calls for it; note each change and
the reason in the run log. Never drop a required section: keep it and say what's missing.
- **Report:** the verdict title, about this review, summary by perspective with top priorities and
  what works, what the market's users expect (data used in the argument, a side-by-side
  benchmark table), findings with annotated screenshots, "how it's done well in this market"
  inside each finding and a metric to check, improvement directions, the global-brand comparison
  table, next steps and client questions, and the appendix. Where a finding would be sized with client data (conversion,
  analytics), name the metric to check; never present an invented number as a fact.
- **IA analysis:** the easiest document to read, mostly visual: a summary table, navigation trees
  side by side (client, benchmark, proposed), page layout with screen-position bars and the
  heading hierarchy, a label audit, IA findings and the proposed structure, plus **main paths by
  task**:
  - Pick 6–8 tasks real users of this product do, phrased as their own questions ("Which model
    suits me?", "When will it arrive, and what if it doesn't work out?"). Include one service
    question asked through search.
  - Walk each one live on the priority device, and write the path step by step: taps, screens
    scrolled, and where the answer actually sits (pop-up, accordion, another site, nowhere).
  - Show each as a card: the question, a verdict tag, the path as step chips with arrows (friction
    steps red, one row per alternative route), and local site examples as green chips below
    (`references/deliverables.md`). Say so when a path works well.
  - Link each path to the IA and report findings it supports.
- Render each at 390 and 1440 and look at it. Status: "draft".

### 8 · Independent checks, then stop
Two separate agents, given the rendered documents (and the sources), not your reasoning:
- **Numbers and claims:** numbers against sources, claims against the sweep note and live page,
  contradictions between findings, and status wording.
- **Design and structure:** kit `ui-design-review`, `ia-review` and `distinctiveness-review` on the
  report and IA analysis at 390 and 1440 (layout, type, consistency with the client's tokens, how
  easily a reader finds things, AI tells).

Save the outputs as `08-check-facts.md` and `08-check-design.md`. Fix what they flag; the same
checking agent re-checks only those items. **If either file is missing, the documents aren't
ready for review.**

Put the files in the folder, then give the person the report, the IA analysis, the open client
questions and a proposed mock area with the reason. **Stop for their review.** Always stop here,
even if the request also asks for the mock and even if nobody is there to answer: the mock area
is the person's decision, and building it on an unreviewed report wastes the work if the report
changes.

## Phase 2: mock of the agreed screen

The mock shows the redesign the review argues for: current and proposed side by side, with a
notes column. It is the last link in the report's argument: each note says what changed, which
finding it answers, and why this design should work better.

1. **Load `ui-design-principles` before building**, and note it in the run log.
2. **Write the mock spec, then stop for approval.** Go back to the evidence (captures, sweep
   note, benchmark screenshots), not only the findings, and write `09-mock-spec.md`
   (`templates/mock-spec.md`): one row per change, with the finding, the local reference
   pattern it builds on where one exists (site and screenshot; a proven pattern is the minimum
   the design must match, not a limit: improve on it where you can, and where no pattern exists
   say why the design is new), the exact content (live values and real copy), where it sits on
   the screen, and the design-system component it uses. D proposals are rows too, marked as design judgement. Show
   the person the table and wait: correcting a table is cheap, correcting a built mock is slow.
   If the person isn't there to answer, build from the spec and say so. Red numbered markers are
   findings from the report; dark "D" markers are design proposals (lower priority).
   If a finished reference mock was supplied, it is the minimum bar: match or beat its quality
   and layout; never copy its content.
   **Keep it focused:** about 10–15 changes for one screen area, one marker per change using the
   finding's own number (no 2a/2b sub-markers; a change that answers two findings names both in
   its note). If more findings apply, pick the ones that matter most on this screen and list the
   rest in the legend as "not shown in this mock". The header paragraph is 2–3 sentences.
3. **Design the proposed area as one coherent screen,** built in the client's tokens and
   organised around the decision the user makes there, not a patch of the live page. Every change
   has a marker and a reason; if you can't give a reason, don't make the change.
4. **Layout** (the shell in `templates/mock.html`; only the proposed page inside the frame is
   designed per run, in the client's components): current and proposed side by side, each
   **one continuous page inside a frame for the priority device that scrolls** (a 390 × 844 phone,
   or a 1440-wide desktop frame for desktop-first products), never a row of separate
   screenshots, plus a notes column. The current side is a fresh live capture of the whole page,
   in the same frame and scroll behaviour as the proposed side, with floating elements (sticky
   bars, chat, coupons) as they really behave over time.
   **Markers sit on the element they refer to, inside the scrolling page,** so they move with it;
   never in a margin beside the phone. **Both sides carry them:** on the current side the same
   number marks the problem as it is now, on the proposed side the change, so each reads as a
   before/after pair (something removed is marked on the current side only). The notes column
   explains each marker.
5. **Make it look real.** Use live values first (from the capture and the sweep). Where the design
   needs data the site doesn't show, simulate realistic values based on the site's own patterns,
   and say once in the legend that they are illustrative. Use a visible placeholder only where a
   guess could mislead the client on money, legal terms or commitments (an unknown fee, say), and
   keep that to one or two per mock. Take prices, counts and spec values from
   `02-capture/live-values.md`, never from memory.
   - **Keep the client's own assets** (pictograms, icons, photography, customer photos) unless a
     marker and note justify removing one; dropping them is what makes a mock look generic.
   - **States in the client's tokens:** selected, hover, focus and disabled use the design
     system; any new token is labelled "proposed" in the notes.
   - **No text under 12 px** on the decision path (price, options, button, conditions).
   - **Fonts:** if the brand font can't be loaded, say so in the legend; never claim it shows.
6. **Hidden states:** a marker on something hidden (pop-up, drawer, accordion, ⓘ) either shows the
   opened state in an inset, or sits on the thing that opens it with "opens ___" in the note.
   Anything moved off the first screen keeps a visible entry point.
7. **Assemble and run `check-deliverable.mjs` on the mock** (with `--report`): every marker has
   a note and a finding, the current side has its fixed layer, no sample content is left.
   Then **independent checks on the rendered mock,** as separate agents given only the render
   and the report:
   - **spec:** does the mock implement every row of `09-mock-spec.md`, and nothing outside it?
   - **design and structure:** `ui-design-review`, `ia-review` (is the proposed screen organised
     around the decision?) and `distinctiveness-review`
   - **facts:** every live value matches the capture or the live site, simulated values are
     labelled, and every marker links to the right finding
   Save the outputs next to the mock, fix, and have the same agents re-check only what
   they flagged. **If either file
   is missing, the mock isn't ready.**
8. Put the files in the folder and **stop for the person's visual review.** Expect one round of
   feedback (about 20 min per iteration). Give them four points to check:
   - every marker links to a finding
   - no unexplained changes
   - no AI tells
   - the current side matches the live site

## Phase 3: packaging (when it goes to a client)
Only after the person's review of the mock, and **stop for their review before it goes out**.
- **Index page** (`templates/index.html`, `references/deliverables.md`): the opportunity in one sentence, a card per
  document, the main conclusions, how to read the numbers and colours, how it was made in plain
  language (human-led, who led it; don't overclaim or hide the AI's part), and what it doesn't
  cover.
- **Other language,** when asked, only after the first language is stable: translate (with a
  translation skill if one is available, e.g. `japanese-audience-translator` for Japanese), then
  one independent translation review agent, then apply its corrections and check the pages at
  390. The translation goes in a second `<template id="t-ja">` in the same source file; the
  language switch appears and persists between pages on its own.
- Assemble every document again, run `check-deliverable.mjs` on each (it compares the two
  languages), and check the links and both widths.
