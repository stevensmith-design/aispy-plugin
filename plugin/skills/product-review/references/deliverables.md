# Deliverable outlines

The default structure of the two phase-1 documents, taken from a review that worked well, plus the
best additions from later runs. **Every section below is required** unless it's marked as
conditional (*localisation*, or "when someone must be convinced") and the condition doesn't apply.
If required content can't be produced, keep the section and say in it what's missing and why.
You may add sections, merge two or change the order when the product calls for it; note each
change and the reason in the run log.

**What this file fixes, and what the templates fix.** This file says what each section must
contain and what each analysis must lead to. `templates/` fixes the form: the HTML structure,
the components and the layout of every document, with a slot comment per section. The client's
brand comes in only through `templates/theme.css` (their tokens mapped to the theme variables).
Research, analysis and judgement are free: go beyond the minimums whenever the product calls
for it, but present the result in the templates' components.

**The argument is the spine.** Every document follows one chain, and every claim in it is
justified: *what we did* (scope, method) → *what the research shows* (data, benchmarks) → *where
the opportunity is and why it matters* (findings with evidence) → *what we propose and why it
will work* (recommendations backed by research, local examples or established principles) → *the
design that goes with the proposal* (the mock, each change traced to a finding). A reader should
be able to follow any proposal back to its evidence.

Write for a reader who is new to the material: scannable, visual where a comparison is involved
(side-by-side tables, trees, bars), and with evidence where the reader needs it, not in an
appendix. Section names below are in English; use the client's language where the deliverable is
written in it (for Japan: 概要, 観点別サマリー, 指摘, グローバルブランドとの比較, 付録 and so on).

## Applies to which reviews
Sections and lines marked *(localisation)* apply when the review covers a market other than the
company's home market. For a general review, keep the benchmarks and the cross-check against
strong brands outside the category, and leave the localisation items out.

## Using each analysis component
Every chart, table and count must lead somewhere. For each one: what it measures → how to read it
→ the finding it supports → how the proposal changes it. A component with no finding attached
is decoration; cut it or connect it.

| Component | Read it as | Leads to |
|---|---|---|
| Page layout by type | The share of the page and the screen position for each job (decide, reassure, persuade, sell more, navigate), against the page's role and the benchmark ("the footer takes 18% while comparison gets 4% and starts at screen 9") | A finding on misallocated space; the proposed structure shows the new shares and positions, with the reason for each move |
| Task paths | Step, tap or place counts, against the benchmark's | A friction finding; the proposal states the new count |
| Navigation trees | Where the client's structure differs from the benchmark and from the user's goals | IA findings; the proposed tree |
| Benchmark table | Each cell where the client falls short | A finding number, linked from the cell |
| Market data | What each statistic means for this product | The finding it backs, cited inside that finding |
| Heading hierarchy | Whether the outline describes the page and the decision | A structure or accessibility finding |
| Label audit | One concept with several names | An IA finding and the single proposed label |
| Cross-check | Which claims held, which didn't | Which findings were adjusted, and why |

## Shared layout (every document)
One self-contained HTML file each, assembled from the template (`scripts/build/assemble.mjs`),
styled through `theme.css` in the client's tokens, named `<client>-<market>-<type>-draft.html`.
A top bar with "← All deliverables" and "Deliverable N of M · name"; a header with an eyebrow
(type · scope · DRAFT), a one-sentence headline stating the main conclusion, a short standfirst
and a meta row (client, scope, focus, date); numbered sections (01, 02…) with a sticky section
nav; a DRAFT label until the client has seen it. Rendered and checked at 1440 and 390.

## Index page
1. The opportunity in one sentence.
2. The deliverables: one card per document with a thumbnail, what it answers and reading time.
3. The main conclusions in plain language (about four).
4. How to read the numbers and colours: priority labels, red finding markers, green "works"
   labels, "D" design proposals.
5. How it was made: human-led and the lead's role; where software helped and what people
   decided; commitments (no client data used elsewhere, no invented numbers, checked live). Name
   the reviewer or organisation only as the person specified at intake; otherwise "the reviewer".
6. What it doesn't cover, and suggested next steps.

## Layout choice (ask at intake; default: by issue)
- **By issue (default).** Findings are grouped by issue, and each one shows evidence from every
  component and page where it occurs. Best for template-driven sites, where most problems are
  site-wide.
- **By page** (`templates/report-by-page.html`). Findings are grouped under each page or flow,
  beside a sticky column of that page's whole screens, annotated with every finding on it. Best
  when the pages are genuinely different (an app's distinct flows) and few issues repeat. If you
  find yourself adding a "site-wide" catch-all section, switch to by issue.

## Review report
1. **Title: the verdict in one sentence** (what is wrong and what it costs), not "UX review".
2. **About this review:** a strip of the screens reviewed (first screen of each page in scope,
   with its name) and the tally of findings by priority; then what it covers (scope, devices,
   pages), how it was made, and how to read it: priority levels, the perspectives, and what the
   markers mean.
3. **Summary by perspective** (for Japan: 情報設計 / 機能・コンテンツ / ビジュアル), a **top
   priorities** list, and **what already works and should be kept**, with evidence.
4. **What the market's users expect** *(localisation)*: the statistics behind every market convention the findings
   rely on (for shopping, at least payment-method shares and smartphone share), each with what it
   means for this product, and used again in the findings it supports; plus one
   **side-by-side comparison table** across the client, its home-market site and the 4–6
   benchmarks from research; for a market with its own script, always the typography table
   (typeface, size, line height, letter spacing, line breaks).
5. **Findings** (grouped by the layout choice), **ordered by where users meet them in the key
   task** (for shopping: how the text reads → the buy button → choosing → overall feel).
   **12–15 main findings**, each grouping related problems that share a cause or a fix (see the
   skill's synthesis step); a reader should get the review from these alone. Then **further
   findings**: a compact table of the standalone Medium items (number, finding in one line,
   where, priority, the main finding it relates to, and a small crop where it helps). Each main
   finding:
   - a title that states the problem plainly, with number, perspective tag, priority, where it
     occurs (pages, breakpoints), and its goal relevance where that's credible
   - when it groups several problems, a short list of what it covers, **one sentence each**, each
     with its evidence crop (all marked with this finding's number)
   - **write only what adds something.** "Why it matters" is a short paragraph (about 60 words);
     the proposal is the 3–4 changes that matter, each one line; exact values, CSS and edge cases
     go in one line of the proposal or in appendix A2, not in long lists. If a sentence repeats
     the title, the caption or the evidence, cut it
   - evidence: measured facts, and **evidence crops**: each place the problem shows, cropped to
     the element plus enough context to recognise it (about 320–700 px wide, no taller than
     ~400 px; split a taller area) and marked with `scripts/capture/annotate.mjs` (red outline and the finding number;
     the caption under it says what it shows). 1–4 crops side by side, each captioned with page,
     device and date. A whole phone screen never goes in a finding (it belongs in the by-page
     screen column and the mock). Use the market data here where it applies
   - **why it matters:** the effect on the user and the business, backed by the evidence
   - **how it's done well in this market**, inside the finding, **required on every High and
     Medium finding**: 1–3 local examples, each with a screenshot, a callout and why it works
     (and what not to copy). Text-only if no screenshot can be taken; never left out.
   - the proposal: **concrete changes** (CSS, copy, component, structure), not pixel designs, and
     **why it will work** (the research, local example or principle behind it), and a **metric to
     check** (which client data would size it)
   - **"If HQ asks …"** *(when someone must be convinced)*: when the work has to convince someone (a headquarters, a home-market
     team, a sceptical stakeholder), the objection they're most likely to raise and the
     evidence-based answer
   - every finding keeps its evidence: if a figure can't be used, replace it with a new capture
     (in the real browser, with third-party scripts loaded) rather than dropping it
6. **Improvement directions:** 3–5 directions, each mapped to finding numbers. A bridge to a
   proposal.
7. **Cross-check against strong brands:** a table of the load-bearing claims tested against **3
   strong brands outside the category** with mature sites in the target market (for Japan, say, a
   tech, an appliance and a sportswear brand), with a verdict per claim (holds / mostly holds /
   adjusted) and which findings changed. *(localisation)* Add the client's home-market site, to
   show whether a problem comes from the shared template or the local version. If a brand can't
   be reached, replace it rather than continuing with fewer.
8. **Next steps** and **questions for the client.** Next steps as a phased table: phase, the
   findings it covers, the type of change (copy, content, UI, structure) and the **A/B test
   hypothesis** with its metric ("if the price shows 税込 and every payment method, mobile
   add-to-cart rises").
9. **Appendix:**
   - A1 accessibility, in one place (WCAG 2.2 AA, plus the local standard where one exists, e.g.
     JIS X 8341-3)
   - A2 structure and polish (the Low items)
   - A3 scope limits: what wasn't assessed and why
   - A4 method: how it was made, which agents and checks ran
   - A5 sources, with dates

## IA analysis
Make this the easiest document to read: mostly visual comparisons, little prose.
1. **Title: the structural verdict in one sentence.**
2. **Summary table:** each main issue, what we measured, and the best local reference for it.
3. **Navigation:** three trees side by side: the client as shipped, one strong local benchmark, and
   the proposed structure. Then **what the comparison shows**.
4. **Page layout and information hierarchy**, for every key page type in scope (home, category,
   product) plus one local reference page, with each section tagged by its job (decide, reassure,
   persuade, sell more, navigate):
   why the page exists (its role), then per page type the bars for client, benchmark and
   proposed on one scale, the share of the page per role, a "what it shows" line tying the bars
   to findings ("comparison at screen 9 of 21 → #5; proposed from screen 3"), and the client's
   section list with role tags. Generate bars, shares and list with
   `scripts/build/layout-bars.mjs` from measured positions; never estimate percentages. Then the **heading hierarchy** of the key product
   page, including visually hidden headings.
5. **Main paths by task:** one card per task, 6–8 tasks. A short intro line explains the colours.
   Each card has:
   - a header: the task number, the user's question in their words, and a verdict tag with a step
     or tap count where it applies ("3 taps to cart", "answer in 5 places", "no route from the
     menu")
   - the client's path as a chain of step chips joined by arrows, wrapping across lines; each
     alternative route is its own row; friction steps are red chips, ordinary steps are plain
   - below it, "local site examples": green chips, one per benchmark, each a short phrase
     ("Brand: how they handle this step")
   - optionally one or two sentences of interpretation, and the finding numbers it supports;
     when one screen explains the friction, an annotated crop beside the note (`.task-ev`)
   Keep it scannable: no tables of steps, no long prose. Say so when a path works well. Walk the
   task as stated: same starting point, same search or menu. A different route doesn't stand in
   for it; if the stated route can't be walked, say so.
6. **Label audit:** one concept with many names, and inconsistent labels across navigation,
   headings and buttons.
7. **IA findings:** a table of numbered findings with priority and a link to the matching report
   finding.
8. **Proposed structure:** the recommended section order for each key page type ("home · about 8
   sections").
9. **Additional findings** (N1, N2…): things seen while mapping the structure that the report
   doesn't carry yet, with where they were seen, for the client to confirm.
10. **Further notes for the client:** findings to confirm with client data, context to keep in
   mind (why a benchmark pattern may not transfer), and the method.

## Mock
The shell in `templates/mock.html`. A header (eyebrow, headline, one paragraph on what changed and how
to read the markers) and a back link to the index. Three columns: current (live, with floating
elements where they really sit), proposed (same frame, client's tokens), and "what changed and
why". A "show / hide markers" toggle. Markers: red numbers for report findings, red "IA-n" for IA
findings, green "D" for design proposals. Each note: marker, short title, **Now:** the problem as it
is (one line), **Proposed:** what the proposal does and why (one line; for something removed,
"removed, because …"), the trade-off when there is one, and the source finding. Keep each note
short: a reader sees the before and after, and the reason, without opening the report.
