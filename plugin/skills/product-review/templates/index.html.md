# index.html

The source of `templates/index.html` (script commands in its comments point to `plugin-mode.md`). Write the fenced block's contents, unchanged, to `07-deliverables/src/index.html`.

```html
<!DOCTYPE html>
<html lang="en" data-doc="index">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tidewell JP — Review package</title>
<!-- TEMPLATE: index page. Written last, from the finished documents. All sample content is
     made up. Card thumbnails: a screenshot of each finished document's cover (390 or 1440). -->
<link rel="stylesheet" href="theme.css">
<link rel="stylesheet" href="base.css">
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language"><button data-l="en" aria-pressed="true">EN</button><button data-l="ja" aria-pressed="false">日本語</button></div>
<div id="app"></div>

<template id="t-en" data-title="Tidewell JP — Review package" data-sample>
<!-- SLOT cover | REQUIRED. h1 = the opportunity in one sentence. p = the documents and the
     reading order. PREPARED BY: only as supplied at intake, otherwise "The reviewer". -->
<header class="cover"><div class="wrap">
<div class="kicker">UX/UI REVIEW · JP.TIDEWELL.EXAMPLE</div>
<h1>How Tidewell's Japanese site could answer shoppers' questions where they decide, and sell more on mobile</h1>
<p>Three documents from one review. Start with the review report, then the IA analysis, then the proposed product page that puts both into practice.</p>
<dl>
<div><dt>CLIENT</dt><dd>Tidewell Japan</dd></div>
<div><dt>SCOPE</dt><dd>6 pages · phone and desktop</dd></div>
<div><dt>REVIEWED</dt><dd>3–4 March 2026, live site</dd></div>
<div><dt>PREPARED BY</dt><dd>The reviewer</dd></div>
</dl>
<div class="status">DRAFT · FOR DISCUSSION</div>
</div></header>
<main class="wrap">

<!-- SLOT docs | REQUIRED. One card per document: thumbnail, step, title, what it answers,
     2–3 bullets with real counts, reading time. -->
<section id="docs">
<div class="sec-head"><div class="no">01</div><h2>The deliverables</h2>
<p class="lead">Suggested reading order. About 35 minutes together; the first five minutes of each give the main points.</p></div>
<div class="cards">
<a class="card" href="report.html"><div class="ph-img">Cover of the report</div><div class="body"><div class="step">1 · START HERE</div><h3>Review report</h3><p>What stops Japanese shoppers buying on mobile, and what to change.</p><ul><li>14 findings, each with evidence and a Japanese site that does it well</li><li>Summary by perspective on the first screen</li></ul><div class="meta"><span>About 20 min</span><span class="open">Open →</span></div></div></a>
<a class="card" href="ia.html"><div class="ph-img">Cover of the IA analysis</div><div class="body"><div class="step">2 · STRUCTURE</div><h3>Information architecture</h3><p>Whether the structure matches how a shopper decides.</p><ul><li>Navigation compared with a Japanese benchmark</li><li>7 task paths, page layout by type</li></ul><div class="meta"><span>About 10 min</span><span class="open">Open →</span></div></div></a>
<a class="card" href="mock.html"><div class="ph-img">Cover of the mock</div><div class="body"><div class="step">3 · IN PRACTICE</div><h3>Proposed product page</h3><p>Current and proposed side by side, every change explained.</p><ul><li>The highest-priority findings applied</li><li>Built in Tidewell's own design system</li></ul><div class="meta"><span>About 5 min</span><span class="open">Open →</span></div></div></a>
</div>
</section>

<!-- SLOT keys | REQUIRED. About four conclusions in plain language, each with its sources. -->
<section id="keys">
<div class="sec-head"><div class="no">02</div><h2>Four things to know first</h2></div>
<div class="keys">
<div class="key"><b>Shoppers can't check delivery or returns before buying.</b>The answers are in the footer and on another domain.<span class="src">Report 1 · IA-2</span></div>
<div class="key"><b>Choosing is harder than it needs to be.</b>Comparison starts at screen 9 of 14.<span class="src">Report 4 · IA-1</span></div>
<div class="key"><b>Japanese conventions are missing.</b>No 税込, Latin line breaks.<span class="src">Report 2, 6</span></div>
<div class="key"><b>The foundations are strong.</b>Photography and 1,240 reviews at 4.5.<span class="src">Report, "What already works"</span></div>
</div>
</section>

<!-- SLOT read | REQUIRED. The key to numbers and colours used across the documents. -->
<section id="read">
<div class="sec-head"><div class="no">03</div><h2>How to read the numbers and colours</h2></div>
<div class="scroll"><table class="tbl kv">
<tr><th style="width:190px">YOU WILL SEE</th><th>WHAT IT MEANS</th><th style="width:200px">DEFINED IN</th></tr>
<tr><td><span class="pill r">1</span>–<span class="pill r">14</span></td><td>Review findings, in the order a shopper meets them.</td><td>Review report</td></tr>
<tr><td>IA-1 – IA-8</td><td>Structural findings.</td><td>IA analysis, section 7</td></tr>
<tr><td><span class="pill d">D1</span></td><td>In the mock: a design proposal, not a finding.</td><td>Mock, notes</td></tr>
<tr><td><span class="dot high">High</span> <span class="dot mid">Medium</span></td><td>Priority: High affects the purchase decision or trust directly.</td><td>Review report, section 1</td></tr>
<tr><td><span class="ph">Red text</span></td><td>A placeholder for information only the client has.</td><td>Mock, notes</td></tr>
</table></div>
</section>

<!-- SLOT how | REQUIRED. Human-led process; who did what (● judgement / ○ tool-assisted);
     where software helped vs what people decided; commitments. -->
<section id="how">
<div class="sec-head"><div class="no">04</div><h2>How this review was made</h2>
<p class="lead">Led and judged by people, with software used for speed and consistency.</p></div>
<ol class="process">
<li><b>Frame the review</b>Scope, goals and the shoppers it's for.<span class="who h">Human judgement</span></li>
<li><b>Capture the site</b>Every page at two sizes, measured the same way.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Research and benchmark</b>Market data and four Japanese sites.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Review</b>Three independent perspectives.<span class="who h">Human judgement</span></li>
<li><b>Challenge the findings</b>Claims tested on three brands outside the category.<span class="who h">Human judgement</span></li>
<li><b>Propose and check</b>The mock in the client's system, checked independently.<span class="who h">Human judgement</span></li>
</ol>
<p class="legend">● Decisions made by people · ○ Software used for speed, every result checked</p>
<div class="grid2" style="margin-top:28px">
<div class="panel"><h4>WHERE SOFTWARE HELPED</h4><ul><li>Capturing and measuring pages consistently</li><li>Extracting the design system</li><li>First drafts, so time went into judgement</li></ul></div>
<div class="panel lead-panel"><h4>WHAT PEOPLE DECIDED</h4><ul><li>What to review, for which shoppers</li><li>Which findings matter and their priority</li><li>Every proposal</li></ul></div>
</div>
<!-- Optional .person block: only when a person's name was supplied at intake (who led the
     review and their role). Never from account details. Without a name, leave it out. -->
<div class="commit"><div><b>No client data reused</b>Nothing from this review is used elsewhere.</div><div><b>No invented numbers</b>Every figure is measured or sourced.</div><div><b>Checked live</b>Every finding re-checked on the live site.</div><div><b>Draft</b>For discussion before anything is final.</div></div>
</section>

<!-- SLOT limits | REQUIRED. What isn't covered, and suggested next steps. -->
<section id="limits">
<div class="sec-head"><div class="no">05</div><h2>What this doesn't cover, and next steps</h2></div>
<div class="grid2"><div class="panel"><h4>NOT COVERED</h4><ul><li>Checkout after the cart</li><li>Account and order history</li></ul></div><div class="panel"><h4>SUGGESTED NEXT STEPS</h4><ul><li>A 60-minute walkthrough of the findings</li><li>Phase 1 changes and an A/B test</li></ul></div></div>
</section>
<footer class="doc">Draft for discussion.</footer>
</main>
</template>
<script src="lang.js"></script>
</body>
</html>
```
