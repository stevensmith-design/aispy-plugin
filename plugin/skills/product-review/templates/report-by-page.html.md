# report-by-page.html

The source of `templates/report-by-page.html` (script commands in its comments point to `plugin-mode.md`). Write the fenced block's contents, unchanged, to `07-deliverables/src/report-by-page.html`.

```html
<!DOCTYPE html>
<html lang="en" data-doc="report">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tidewell JP — UX/UI review, by page (draft)</title>
<!-- TEMPLATE: review report, BY-PAGE layout (report.html is the default by-issue layout). Copy to 07-deliverables/src/, fill every slot, then
     the full kit's `assemble` step (see `plugin-mode.md`).
     Slot comments say what goes there, the data it needs and what it must lead to.
     All sample content is made up (the brand "Tidewell" does not exist); replace all of it.
     check-deliverable.mjs fails while any sample text, {{field}} or .ph-img is left. -->
<link rel="stylesheet" href="theme.css">
<link rel="stylesheet" href="base.css">
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language"><button data-l="en" aria-pressed="true">EN</button><button data-l="ja" aria-pressed="false">日本語</button></div>
<div id="app"></div>
<div id="lb" aria-hidden="true"><img alt=""></div>

<template id="t-en" data-title="Tidewell JP — UX/UI review (draft)" data-sample>
<div class="backbar"><div class="wrap"><a href="index.html">← All deliverables</a><span>DELIVERABLE 1 OF 3 · REVIEW REPORT</span></div></div>

<!-- SLOT cover | REQUIRED
     h1: the verdict in one sentence (what is wrong + what it costs). Never "UX review".
     p: standfirst, 1–2 sentences: what was reviewed and the main way to fix it.
     dl: client, scope (pages, devices), reviewed (dates, live site), prepared by.
     PREPARED BY: only the name supplied at intake; otherwise "the reviewer". -->
<header class="cover"><div class="wrap">
<div class="kicker">UX/UI REVIEW · JP.TIDEWELL.EXAMPLE · DRAFT</div>
<h1>Tidewell's Japanese site hides the answers shoppers need before they buy, so mobile visitors leave at the product page</h1>
<p>A review of the top page, two category pages and three product pages on phone and desktop. Most problems come from the shared template and can be fixed once for every product.</p>
<dl>
<div><dt>CLIENT</dt><dd>Tidewell Japan</dd></div>
<div><dt>SCOPE</dt><dd>6 pages · 390 and 1440 px</dd></div>
<div><dt>REVIEWED</dt><dd>3–4 March 2026, live site</dd></div>
<div><dt>PREPARED BY</dt><dd>The reviewer</dd></div>
</dl>
<div class="status">DRAFT · FOR DISCUSSION</div>
</div></header>

<nav class="toc" aria-label="Sections"><div class="wrap">
<a href="#about">About</a><a href="#summary">Summary</a><a href="#market">Market</a><a href="#findings">Findings</a><a href="#directions">Directions</a><a href="#crosscheck">Cross-check</a><a href="#next">Next steps</a><a href="#appendix">Appendix</a>
</div></nav>

<main class="wrap">

<!-- SLOT about | REQUIRED
     DATA: scope from 01-frame, method from the run log, first-screen captures, finding counts.
     .screens: one thumbnail per page in scope (first screen on the priority device, from the
       capture, not annotated) with its name; the reader sees what was reviewed at a glance.
     .tally: total findings and the count per priority, matching the findings section.
     What it covers, how it was made (one paragraph), how to read it: priorities, perspectives,
     marker colours. A reader new to the material must understand the rest from this section. -->
<section id="about">
<div class="sec-head"><div class="no">01</div><h2>About this review</h2>
<p class="lead">What was reviewed, how, and how to read the rest of the document.</p></div>
<div class="screens">
<figure><div class="ph-img" style="aspect-ratio:390/600;min-height:0">First screen</div><figcaption>Top<small>/</small></figcaption></figure>
<figure><div class="ph-img" style="aspect-ratio:390/600;min-height:0">First screen</div><figcaption>Daypack 20<small>product page</small></figcaption></figure>
<figure><div class="ph-img" style="aspect-ratio:390/600;min-height:0">First screen</div><figcaption>Commuter 26<small>product page</small></figcaption></figure>
<figure><div class="ph-img" style="aspect-ratio:390/600;min-height:0">First screen</div><figcaption>Backpacks<small>category</small></figcaption></figure>
</div>
<div class="tally"><div><b>14</b><span>findings</span></div><div class="high"><b>6</b><span>High</span></div><div class="mid"><b>6</b><span>Medium</span></div><div><b>2</b><span>Low</span></div></div>
<div class="scroll"><table class="tbl kv">
<tr><th style="width:180px">Covers</th><td>Top page, backpacks and travel-bag category pages, three product pages (Daypack 20, Commuter 26, Carry-on 40). Phone at 390 px and desktop at 1440 px.</td></tr>
<tr><th>Method</th><td>Live capture, three review lenses (structure, content and function, visual), market research and four Japanese benchmarks, a cross-check of the main claims against three brands outside the category, and independent fact and design checks.</td></tr>
<tr><th>Priority</th><td><span class="dot high">High</span> affects the purchase decision or trust directly · <span class="dot mid">Medium</span> slows the shopper or weakens the brand · <span class="dot low">Low</span> polish, listed in A2</td></tr>
<tr><th>Markers</th><td><span class="mk">3</span> on a screenshot points to finding 3 · <span class="mk g">✓</span> marks something done well</td></tr>
</table></div>
</section>

<!-- SLOT summary | REQUIRED
     persp table: one row per perspective (for Japan: 情報設計 / 機能・コンテンツ / ビジュアル), a
     one-line summary and the findings under it, each linked, with priority dots.
     top priorities: 3–5 findings to do first, each with the reason in one line.
     what works: 3–6 strengths with evidence, so they are kept. -->
<section id="summary">
<div class="sec-head"><div class="no">02</div><h2>Summary by perspective</h2>
<p class="lead">Three perspectives, 14 findings. Six are high priority; four of those sit on the product page.</p></div>
<div class="scroll"><table class="tbl persp">
<tr><th style="width:24%">Perspective</th><th>Findings</th></tr>
<tr><td>Structure<small>情報設計</small><p class="small">Decision information is far from the buy button.</p></td><td><ul class="flist">
<li><span class="n">1</span><a href="#f1">Delivery and returns are only in the footer</a><span class="dot high">High</span></li>
<li><span class="n">4</span><a href="#f4">Comparison starts at screen 9 of 14</a><span class="dot high">High</span></li></ul></td></tr>
<tr><td>Content and function<small>機能・コンテンツ</small><p class="small">Conventions shoppers look for are missing.</p></td><td><ul class="flist">
<li><span class="n">2</span><a href="#f2">Prices don't say 税込</a><span class="dot mid">Medium</span></li></ul></td></tr>
<tr><td>Visual<small>ビジュアル</small><p class="small">Japanese text is set with Latin rules.</p></td><td><ul class="flist">
<li><span class="n">6</span><a href="#f6">Line breaks split words in headings</a><span class="dot mid">Medium</span></li></ul></td></tr>
</table></div>
<h3>Top priorities</h3>
<ol class="order">
<li><b>Delivery and returns at the buy button</b><span>Finding 1. The most-asked pre-purchase questions, answered nowhere on the product page.</span></li>
<li><b>Comparison before the brand story</b><span>Finding 4. Shoppers choosing between two packs scroll past nine screens of story.</span></li>
</ol>
<h3>What already works and should be kept</h3>
<div class="grid2">
<div class="panel good"><h4>PHOTOGRAPHY</h4><p class="small">Every pack is shown worn, packed and empty, at the same angle. The benchmarks show one or two.</p></div>
<div class="panel good"><h4>REVIEWS</h4><p class="small">1,240 reviews at 4.5, with photos. Keep them; move them up (finding 4).</p></div>
</div>
</section>

<!-- SLOT market | CONDITIONAL (localisation: the review covers a market other than the home market)
     facts: the statistics behind every market convention the findings use (for shopping: payment
     shares, smartphone share at least). Newest edition; source and year under each; "so" line =
     what it means for this product, and the finding numbers that use it.
     compare table (#compare): client, home-market site and the 4–6 benchmarks, side by side, one
     row per decision element. Every cell where the client falls short links its finding.
     typography table: for a market with its own script. -->
<section id="market">
<div class="sec-head"><div class="no">03</div><h2>What Japanese shoppers expect</h2>
<p class="lead">The data behind the conventions the findings rely on, and how the site compares with the sites shoppers use.</p></div>
<div class="facts">
<div><b>78%</b><span>of online purchases in this category are made on a phone</span><em>Source name, survey year</em><span class="so">So: the phone layout is the one to fix first. Findings 1, 4.</span></div>
<div><b>31%</b><span>pay by convenience store or deferred payment</span><em>Source name, survey year</em><span class="so">So: payment options belong on the product page. Finding 3.</span></div>
<div><b>2 of 3</b><span>check delivery date before adding to cart</span><em>Source name, survey year</em><span class="so">So: the arrival date belongs at the button. Finding 1.</span></div>
</div>
<h3 id="compare">Side by side: the buy area</h3>
<div class="scroll"><table class="tbl">
<tr><th>Element</th><th>Tidewell JP</th><th>Tidewell AU (home)</th><th>Kumo Gear</th><th>Sanroku</th></tr>
<tr><td>Price label</td><td class="bad"><a href="#f2">No 税込</a></td><td>"incl. GST"</td><td class="ok">「13,200円（税込）」</td><td class="ok">「税込」 + 送料</td></tr>
<tr><td>Delivery date at button</td><td class="bad"><a href="#f1">Footer only</a></td><td>Under button</td><td class="ok">「最短翌日お届け」</td><td class="ok">Date by postcode</td></tr>
</table></div>
<h3>Typography</h3>
<div class="scroll"><table class="tbl">
<tr><th>Site</th><th>Typeface</th><th>Body size</th><th>Line height</th><th>Letter spacing</th><th>Line breaks</th></tr>
<tr><td>Tidewell JP</td><td>Latin face, system fallback</td><td>14px</td><td class="bad">1.4</td><td class="bad">0</td><td class="bad">Splits words</td></tr>
<tr><td>Kumo Gear</td><td>Noto Sans JP</td><td>15px</td><td>1.8</td><td>.04em</td><td>auto-phrase</td></tr>
</table></div>
</section>

<!-- SLOT findings | REQUIRED · BY-PAGE LAYOUT (chosen at intake; default is by issue)
     For products whose pages or flows are genuinely different (an app's distinct flows), when
     few issues repeat across pages. If you find yourself adding a "site-wide" group, use the
     by-issue template instead.
     One .page-sec per page or flow, in the order of the key task. Each has:
       h3.page-h: the page; p.small: which findings, capture date and device.
       .area: on the left .figs, the page's screens on the priority device (first screen, buy
         area…), each a whole screen marked with annotate.mjs: every finding on this page has
         its outline and number there; on the right, the findings for this page.
     Finding anatomy is the same as the by-issue layout, except that the evidence screens are
     in the column: .shots crops inside a finding are optional (use them for a detail the
     screen can't show). A finding that appears on several pages sits on the first page where
     the shopper meets it; the others say "see finding n". -->
<section id="findings">
<div class="sec-head"><div class="no">04</div><h2>Findings, page by page</h2>
<p class="lead">In the order a shopper moves through the site. The screens on the left carry the finding numbers.</p></div>

<div class="page-sec" id="p-pdp">
<h3 class="page-h">Product page · buy area</h3>
<p class="small">Findings 1–2. Live site, 3 Mar 2026, 390 × 844. Red numbers match the findings.</p>
<div class="area">
<div class="figs" aria-label="Annotated screens">
<figure><div class="ph-img" style="aspect-ratio:390/844;min-height:0">Whole screen, annotated: outlines and numbers for findings 1 and 2</div><figcaption>Daypack 20 · first screen as loaded</figcaption></figure>
<figure><div class="ph-img" style="aspect-ratio:390/844;min-height:0">Whole screen, annotated</div><figcaption>Daypack 20 · buy area</figcaption></figure>
</div>
<div>
<article class="finding" id="f1" data-key="delivery-returns-at-button">
<div class="f-head"><div class="f-no">1</div><div>
<h3>Delivery dates and returns are only in the footer, so shoppers can't check them before adding to cart</h3>
<div class="f-tags"><span class="tag">Structure <small>情報設計</small></span><span class="tag prio high">High</span></div>
</div></div>
<div class="f-body">
<p class="where">All three product pages · phone and desktop</p>
<p class="why"><b>Why it matters.</b> Two in three Japanese shoppers check the delivery date before adding to cart; on the phone the nearest answer is 11 screens below the button, on another domain.</p>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><ul><li><b>Kumo Gear</b> answers both questions in two lines under the button. <span class="not">Not to copy: the countdown timer.</span></li></ul></div>
<div class="prop"><h4>PROPOSAL</h4><ul><li>Two lines under the button: arrival estimate by postcode and 「30日間返品可能」.</li></ul>
<p class="because"><b>Why it will work:</b> it answers the question where it's asked.</p>
<p class="measure"><b>Measure:</b> add-to-cart rate; delivery-date support contacts.</p></div>
</div>
</article>
<article class="finding" id="f2" data-key="tax-inclusive-label">
<div class="f-head"><div class="f-no">2</div><div>
<h3>Prices don't say 税込, so shoppers can't tell whether tax is included</h3>
<div class="f-tags"><span class="tag">Content <small>機能・コンテンツ</small></span><span class="tag prio mid">Medium</span></div>
</div></div>
<div class="f-body">
<p class="where">All pages with a price</p>
<p class="why"><b>Why it matters.</b> Japanese law requires the tax-inclusive total, and shoppers expect the label.</p>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><ul><li><b>Sanroku</b> shows 「16,500円（税込）」. <span class="not">Not to copy: the low-contrast label.</span></li></ul></div>
<div class="prop"><h4>PROPOSAL</h4><ul><li>Add 「（税込）」 in the price component.</li></ul>
<p class="because"><b>Why it will work:</b> one component change covers every page.</p>
<p class="measure"><b>Measure:</b> price-related support questions.</p></div>
</div>
</article>
</div>
</div>
</div>
<!-- Repeat .page-sec for each page or flow. -->
</section>

<!-- SLOT directions | REQUIRED
     3–5 directions, each mapped to finding numbers: the bridge from findings to a proposal. -->
<section id="directions">
<div class="sec-head"><div class="no">05</div><h2>Improvement directions</h2>
<p class="lead">The findings group into three directions. Each could be one piece of work.</p></div>
<ol class="order">
<li><b>Answer before asking</b><span>Delivery, returns, tax and payment at the buy button. Findings 1, 2, 3.</span></li>
<li><b>Help the shopper choose</b><span>Comparison and reviews before the story. Findings 4, 5.</span></li>
<li><b>Set Japanese as Japanese</b><span>Type, line breaks and spacing. Findings 6, 7.</span></li>
</ol>
</section>

<!-- SLOT crosscheck | REQUIRED
     Load-bearing claims tested against 3 strong brands OUTSIDE the category with mature sites in
     the market (+ the client's home-market site for localisation). Verdict per claim: holds /
     mostly holds / adjusted, and which findings changed. A brand that can't be reached is
     replaced, never dropped. -->
<section id="crosscheck">
<div class="sec-head"><div class="no">06</div><h2>Cross-check against strong brands</h2>
<p class="lead">Do the conventions behind the findings hold beyond this category? Tested on three brands with mature Japanese sites.</p></div>
<div class="scroll"><table class="tbl">
<tr><th>Claim</th><th>Hikari Electronics</th><th>Mizuho Appliances</th><th>Kaze Sportswear</th><th>Tidewell AU</th><th>Verdict</th></tr>
<tr><td>Delivery date at the button (1)</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td><span class="verdict holds">Holds</span></td></tr>
<tr><td>税込 on every price (2)</td><td>Yes</td><td>Yes</td><td>Yes</td><td>n/a</td><td><span class="verdict holds">Holds</span></td></tr>
<tr><td>Comparison above the story (4)</td><td>Yes</td><td>No: story first, comparison in a tab</td><td>Yes</td><td>No</td><td><span class="verdict mostly">Mostly holds</span> · finding 4 softened to "within the first five screens"</td></tr>
</table></div>
</section>

<!-- SLOT next | REQUIRED
     Phased table: phase, findings, type of change (copy, content, UI, structure), A/B hypothesis
     with its metric. Then questions for the client (#questions): data only they have. -->
<section id="next">
<div class="sec-head"><div class="no">07</div><h2>Next steps</h2>
<p class="lead">Ordered by effect and effort. Phase 1 is copy and one component.</p></div>
<div class="scroll"><table class="tbl">
<tr><th>Phase</th><th>Findings</th><th>Change</th><th>Test hypothesis and metric</th></tr>
<tr><td>1 · weeks 1–2</td><td>1, 2</td><td>Copy, one component</td><td>If the arrival date and returns show under the button, mobile add-to-cart rises. Metric: add-to-cart rate.</td></tr>
<tr><td>2 · month 2</td><td>4, 5</td><td>Structure</td><td>If comparison moves above the story, fewer shoppers bounce between two product pages. Metric: product-page loops per session.</td></tr>
</table></div>
<h3 id="questions">Questions for the client</h3>
<ul><li>What share of product-page sessions visit the help centre? (sizes finding 1)</li><li>Which payment methods do Japanese orders use today? (sizes finding 3)</li></ul>
</section>

<!-- SLOT appendix | REQUIRED: A1 accessibility (WCAG 2.2 AA + local standard), A2 structure and
     polish (Low items), A3 scope limits (not covered / to confirm), A4 method (agents and checks
     run), A5 sources with dates. -->
<section id="appendix">
<div class="sec-head"><div class="no">08</div><h2>Appendix</h2></div>
<h3 id="a1">A1 · Accessibility</h3>
<div class="scroll"><table class="tbl"><tr><th>Issue</th><th>Criterion</th><th>Where</th></tr>
<tr><td>Price label contrast 3.1:1</td><td>WCAG 2.2 1.4.3 · JIS X 8341-3</td><td>All product pages</td></tr></table></div>
<h3 id="a2">A2 · Structure and polish</h3>
<ul><li>Breadcrumb wraps to three lines at 390 px.</li></ul>
<h3 id="a3">A3 · Scope limits</h3>
<div class="grid2"><div class="panel"><h4>NOT COVERED</h4><ul><li>Checkout after the cart.</li></ul></div><div class="panel"><h4>TO CONFIRM</h4><ul><li>Delivery-date logic by region.</li></ul></div></div>
<h3 id="a4">A4 · Method</h3>
<p>Captured live in a full browser at 390 and 1440 px; three independent review lenses; research and benchmarks; cross-check; independent fact and design checks before delivery.</p>
<h3 id="a5">A5 · Sources</h3>
<ol class="sources"><li>Source name, report title, year. Accessed 3 Mar 2026.</li></ol>
</section>

<footer class="doc">Draft for discussion. Screenshots of other sites are shown for comparison only.</footer>
</main>
</template>
<script src="lang.js"></script>
</body>
</html>
```
