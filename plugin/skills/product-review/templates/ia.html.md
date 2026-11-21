# ia.html

The source of `templates/ia.html` (script commands in its comments point to `plugin-mode.md`). Write the fenced block's contents, unchanged, to `07-deliverables/src/ia.html`.

```html
<!DOCTYPE html>
<html lang="en" data-doc="ia">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tidewell JP — Information architecture analysis (draft)</title>
<!-- TEMPLATE: IA analysis. The easiest document to read: mostly visual comparisons, little prose.
     Copy to 07-deliverables/src/, fill every slot, assemble. All sample content is made up.
     Page-layout bars, section lists and role shares are generated from layout.json by
     the full kit's `layout-bars` step (see `plugin-mode.md`) — paste its output into the #layout and
     #proposal slots rather than writing percentages by hand. -->
<link rel="stylesheet" href="theme.css">
<link rel="stylesheet" href="base.css">
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language"><button data-l="en" aria-pressed="true">EN</button><button data-l="ja" aria-pressed="false">日本語</button></div>
<div id="app"></div>
<div id="lb" aria-hidden="true"><img alt=""></div>

<template id="t-en" data-title="Tidewell JP — Information architecture analysis (draft)" data-sample>
<div class="backbar"><div class="wrap"><a href="index.html">← All deliverables</a><span>DELIVERABLE 2 OF 3 · IA ANALYSIS</span></div></div>

<!-- SLOT cover | REQUIRED. h1 = the structural verdict in one sentence. counts = task paths
     walked and how many fail / partly / succeed. -->
<header class="cover"><div class="wrap">
<div class="kicker">INFORMATION ARCHITECTURE · JP.TIDEWELL.EXAMPLE · DRAFT</div>
<h1>The answers a shopper needs are on the site, but the structure gives them no fixed place near the decision</h1>
<p>How the navigation, page order and labels support, or get in the way of, the tasks a Japanese shopper comes to do. Read with the <a href="report.html" style="color:#fff">review report</a>.</p>
<div class="counts"><div><b>7</b><span>TASK PATHS</span></div><div><b>2</b><span>FAIL</span></div><div><b>4</b><span>PARTLY</span></div><div><b>1</b><span>SUCCEEDS</span></div></div>
<div class="status">DRAFT · FOR DISCUSSION</div>
</div></header>

<nav class="toc" aria-label="Sections"><div class="wrap">
<a href="#summary">Summary</a><a href="#nav">Navigation</a><a href="#layout">Page layout</a><a href="#headings">Headings</a><a href="#paths">Task paths</a><a href="#labels">Labels</a><a href="#ia-findings">IA findings</a><a href="#proposal">Proposed structure</a><a href="#candidates">Additional findings</a><a href="#notes">Notes</a>
</div></nav>

<main class="wrap">

<!-- SLOT summary | REQUIRED. One row per main structural issue: what we measured (numbers),
     the best local reference, and the finding links (report #n, IA-n). -->
<section id="summary">
<div class="sec-head"><div class="no">01</div><h2>Summary</h2>
<p class="lead">The frame is sound: clear categories and a three-tap path from home to cart. The problems sit around that path.</p></div>
<div class="scroll"><table class="tbl">
<tr><th style="width:30%">Issue</th><th>What we measured</th><th style="width:24%">Best local reference</th><th style="width:12%">Findings</th></tr>
<tr><td><b>Choosing has no home.</b></td><td>0 menu entries for comparison; comparison table at screen 9 of 14 on the product page.</td><td>Kumo Gear: "Compare packs" in the menu</td><td><a href="report.html#f4">#4</a> IA-1</td></tr>
<tr><td><b>Delivery and returns are off the page.</b></td><td>Answer in 3 places, 2 on another domain; 11 screens from the button.</td><td>Sanroku: two lines under the button</td><td><a href="report.html#f1">#1</a> IA-2</td></tr>
</table></div>
</section>

<!-- SLOT nav | REQUIRED. Three trees side by side: client as shipped, one strong local
     benchmark, proposed. .bad = problem, .ok = works, .new = proposed addition. Then 2–4
     sentences: what the comparison shows, each linked to an IA finding. -->
<section id="nav">
<div class="sec-head"><div class="no">02</div><h2>Navigation</h2>
<p class="lead">The menu is organised by product type; the benchmark adds groups for what a visitor wants to do.</p></div>
<div class="trees">
<div class="tree"><h4>TIDEWELL JP (AS SHIPPED)</h4><ul>
<li class="g">Backpacks</li><ul><li>Daypacks · Commuter · Travel</li><li class="bad">✕ no compare or size guide</li></ul>
<li class="g">Accessories</li>
<li class="g">Utility</li><ul><li class="bad">Help → external help centre</li></ul>
<li class="d">3 groups, 9 links</li></ul></div>
<div class="tree"><h4>KUMO GEAR</h4><ul>
<li class="g">Find a pack</li><ul><li class="ok">Compare packs</li><li class="ok">Size guide</li></ul>
<li class="g">Shop</li><ul><li>Packs · Bags · Accessories</li></ul>
<li class="g">Support</li><ul><li class="ok">Delivery · Returns · FAQ (on-site)</li></ul>
<li class="d">3 groups organised by task</li></ul></div>
<div class="tree"><h4>PROPOSED</h4><ul>
<li class="g">Backpacks</li><ul><li class="new">Compare packs</li><li class="new">Size guide</li><li>Daypacks · Commuter · Travel</li></ul>
<li class="g">Accessories</li>
<li class="g">Support</li><ul><li class="new">Delivery · Returns · FAQ (on-site)</li></ul></ul></div>
</div>
<p><b>What the comparison shows.</b> Every task Kumo Gear names in its menu exists on Tidewell's site, but only inside pages (IA-1, IA-2).</p>
</section>

<!-- SLOT layout | REQUIRED. For every key page type in scope plus one local reference page.
     1. Role legend (the five roles in theme.css).
     2. "Why each page exists": how visitors arrive and what they need to do there.
     3. Per page type, a .layoutcard with:
        - .pmap bars: client / benchmark / proposed, same scale (screens on the priority device);
        - .shares table: share of page per role for the same three, with .bad/.ok cells;
        - p.reads: what the bars show → the finding → what the proposal changes
          ("Decide takes 9% and starts at screen 9 → #4; proposed 28% from screen 2");
        - the client's section list (.lrow) with role tags and start screen.
     Generate bars, shares and lists with layout-bars.mjs from measured section positions. -->
<section id="layout">
<div class="sec-head"><div class="no">03</div><h2>Page layout by type</h2>
<p class="lead">Each section is tagged by the job it does for the shopper. The bars show where each job sits and how much of the page it takes, on a 390 px phone.</p></div>
<div class="legend-row"><span><i class="r-decide"></i>Decide</span><span><i class="r-reassure"></i>Reassure</span><span><i class="r-persuade"></i>Persuade</span><span><i class="r-sell"></i>Sell more</span><span><i class="r-navigate"></i>Navigate</span></div>
<h3>Why each page exists</h3>
<div class="scroll"><table class="tbl">
<tr><th style="width:20%">Page</th><th style="width:34%">How visitors arrive</th><th>What they need to do here</th></tr>
<tr><td><b>Product page</b></td><td>Search, ads, category page</td><td>Confirm size and capacity, check delivery and returns, read reviews, buy</td></tr>
</table></div>

<div class="layoutcard" id="layout-pdp">
<h3>Product page</h3>
<div class="pmap">
<div class="r"><b>Tidewell JP<small>14 screens · 9 sections</small></b><div class="bar"><div class="s r-persuade" style="left:0%;width:10%">Gallery</div><div class="s r-decide" style="left:10%;width:8%">Buy box</div><div class="s r-persuade" style="left:18%;width:40%">Feature story</div><div class="s r-decide" style="left:58%;width:9%">Compare</div><div class="s r-reassure" style="left:67%;width:13%">Reviews</div><div class="s r-sell" style="left:80%;width:8%">Related</div><div class="s r-navigate" style="left:88%;width:12%">Footer</div></div></div>
<div class="r"><b>Kumo Gear<small>11 screens · 8 sections</small></b><div class="bar"><div class="s r-persuade" style="left:0%;width:10%">Gallery</div><div class="s r-decide" style="left:10%;width:12%">Buy box</div><div class="s r-reassure" style="left:22%;width:8%">Delivery</div><div class="s r-decide" style="left:30%;width:12%">Compare</div><div class="s r-reassure" style="left:42%;width:18%">Reviews</div><div class="s r-persuade" style="left:60%;width:24%">Story</div><div class="s r-navigate" style="left:84%;width:16%">Footer</div></div></div>
<div class="r prop"><b>Proposed<small>12 screens · 9 sections</small></b><div class="bar"><div class="s r-persuade" style="left:0%;width:10%">Gallery</div><div class="s r-decide" style="left:10%;width:10%">Buy box</div><div class="s r-reassure" style="left:20%;width:6%">Delivery</div><div class="s r-decide" style="left:26%;width:10%">Compare</div><div class="s r-reassure" style="left:36%;width:14%">Reviews</div><div class="s r-persuade" style="left:50%;width:30%">Story</div><div class="s r-navigate" style="left:80%;width:20%">Footer</div></div></div>
<div class="axis"><span></span><div><span>screen 1</span><span>middle</span><span>end</span></div></div>
</div>
<div class="scroll"><table class="shares"><tr><th>Share of page</th><th>Decide</th><th>Reassure</th><th>Persuade</th><th>Sell more</th><th>Navigate</th></tr>
<tr><td>Tidewell JP</td><td class="bad">17%</td><td class="bad">13%</td><td>50%</td><td>8%</td><td>12%</td></tr>
<tr><td>Kumo Gear</td><td>24%</td><td>26%</td><td>34%</td><td>0%</td><td>16%</td></tr>
<tr><td>Proposed</td><td class="ok">20%</td><td class="ok">20%</td><td>40%</td><td>0%</td><td>20%</td></tr></table></div>
<p class="reads"><b>What it shows:</b> the feature story takes 40% of the page before comparison starts at screen 9 → <a href="report.html#f4">#4</a>, IA-1. Proposed: comparison and delivery move above the story, Decide and Reassure start by screen 4.</p>
<div class="lrow lhead"><span>Section</span><span>Role</span><span class="track"></span><span>Screen</span></div>
<div class="lrow"><span>Gallery</span><span class="lrole"><i class="r-persuade"></i>Persuade</span><span class="track"><b class="r-persuade" style="left:0%;width:10%"></b></span><span class="lscr">1.0</span></div>
<div class="lrow"><span>Buy box 「カートに入れる」</span><span class="lrole"><i class="r-decide"></i>Decide</span><span class="track"><b class="r-decide" style="left:10%;width:8%"></b></span><span class="lscr">2.4</span></div>
<div class="lrow"><span>Feature story</span><span class="lrole"><i class="r-persuade"></i>Persuade</span><span class="track"><b class="r-persuade" style="left:18%;width:40%"></b></span><span class="lscr">3.5</span></div>
</div>
<!-- Repeat .layoutcard for each key page type (home, category, product). -->
</section>

<!-- SLOT headings | REQUIRED. Heading outline of the key product page, including visually hidden
     headings (from the DOM, not the screenshot). Level, text, visible/hidden, comment. Ends with
     the finding it supports. -->
<section id="headings">
<div class="sec-head"><div class="no">04</div><h2>Heading hierarchy</h2>
<p class="lead">What a screen reader or search engine reads as the outline of the product page.</p></div>
<div class="layoutcard">
<div class="hrow"><span class="lv">H1</span><span>Site logo text 「Tidewell」</span><span><span class="hid">hidden</span></span><span class="small">The product name is not the H1.</span></div>
<div class="hrow"><span class="lv">H2</span><span>「Daypack 20」</span><span><span class="vis">visible</span></span><span class="small"></span></div>
<div class="hrow"><span class="lv">H2 ×6</span><span>Accordion labels (素材, サイズ…)</span><span><span class="vis">visible</span></span><span class="small">Spec labels outrank the decision content.</span></div>
</div>
<p class="small">Supports IA-4 and A1 in the report.</p>
</section>

<!-- SLOT paths | REQUIRED. 6–8 task cards. Intro line explains the colours. Each card:
     h3 = task number + the user's question in their words + .metric verdict with a count
     ("3 taps to cart", "answer in 5 places", "no route from the menu"; .metric.bad / .ok);
     .lbl + one .flow per route (plain .st steps, .st.x friction, .ar arrows), walked as stated:
     same start, same search or menu; .lbl LOCAL SITE EXAMPLES + one .flow of .st.g chips;
     optional .note with interpretation and finding numbers. No step tables, no long prose. -->
<section id="paths">
<div class="sec-head"><div class="no">05</div><h2>Main paths by task</h2>
<p class="lead">Each task walked on the phone from the same starting point a shopper would use. <span class="tbd">Red</span> steps are friction; green chips show how a Japanese site handles the same step.</p></div>
<div class="task"><h3>T1 · "Which pack is right for my commute?" <span class="metric bad">no route from the menu</span></h3>
<div class="lbl">TIDEWELL JP</div>
<div class="flow"><span class="st">Menu</span><span class="ar">→</span><span class="st">Backpacks</span><span class="ar">→</span><span class="st">Commuter</span><span class="ar">→</span><span class="st x">Two product pages open, no comparison</span></div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st x">Scroll 9 screens</span><span class="ar">→</span><span class="st">Comparison table</span></div>
<div class="lbl">LOCAL SITE EXAMPLES</div>
<div class="flow"><span class="st g">Kumo Gear: "Compare packs" in the menu</span><span class="st g">Sanroku: capacity in litres on every card</span></div>
<p class="note">Supports <a href="report.html#f4">#4</a> and IA-1.</p>
</div>
<div class="task"><h3>T2 · "When will it arrive?" <span class="metric bad">answer in 3 places</span></h3>
<div class="lbl">TIDEWELL JP</div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st x">Footer 「ヘルプ」</span><span class="ar">→</span><span class="st x">External help centre</span><span class="ar">→</span><span class="st">Delivery article</span></div>
<div class="lbl">LOCAL SITE EXAMPLES</div>
<div class="flow"><span class="st g">Kumo Gear: 「最短翌日お届け」 under the button</span></div>
<!-- Optional .task-ev: an annotated crop beside the note when one screen explains the friction. -->
<div class="task-ev"><figure><div class="ph-img">Annotated crop: the footer link, marked</div></figure><p class="note">The only route to delivery dates leaves the store for a help centre on another domain, with a different header and no way back to the product except the browser's back button. Supports <a href="report.html#f1">#1</a>, IA-2.</p></div>
</div>
<!-- 6–8 tasks. Say so when a path works well (.metric.ok). -->
</section>

<!-- SLOT labels | REQUIRED. One concept, many names: concept, labels found (with where),
     proposed single label. Ends with the related finding links. -->
<section id="labels">
<div class="sec-head"><div class="no">06</div><h2>Label audit: one concept, one name</h2></div>
<div class="scroll"><table class="tbl">
<tr><th style="width:20%">Concept</th><th>Labels found</th><th style="width:28%">Proposed</th></tr>
<tr><td>Returns</td><td>menu 「返品」 · footer 「返品・交換」 · help 「返品ポリシー」</td><td>「返品・交換」</td></tr>
</table></div>
<p class="small">Related: IA-6.</p>
</section>

<!-- SLOT ia-findings | REQUIRED. Numbered IA-n findings grouped (.grp rows), priority on the
     report's scale (High / Medium / Low, never a second scale), link to the matching report
     finding or "New". -->
<section id="ia-findings">
<div class="sec-head"><div class="no">07</div><h2>IA findings</h2></div>
<div class="scroll"><table class="tbl">
<tr><th style="width:60px">#</th><th>Finding</th><th style="width:90px">Priority</th><th style="width:110px">Report</th></tr>
<tr class="grp"><td colspan="4">Structure</td></tr>
<tr><td>IA-1</td><td><b>Choosing has no home.</b> Comparison exists only inside product pages.</td><td><span class="sev high">High</span></td><td><a href="report.html#f4">Finding 4</a></td></tr>
<tr><td>IA-2</td><td><b>Delivery and returns live off-site.</b></td><td><span class="sev high">High</span></td><td><a href="report.html#f1">Finding 1</a></td></tr>
</table></div>
</section>

<!-- SLOT proposal | REQUIRED. Recommended section order per key page type. Moved sections are
     .moved with a .why line (the reason, and the finding). Include the proposed bars and shares
     in the #layout cards (row "Proposed"), so the before/after reads on the same scale. -->
<section id="proposal">
<div class="sec-head"><div class="no">08</div><h2>Proposed structure</h2>
<p class="lead">A direction for the template, not a final layout. Moved sections are in green, with the reason.</p></div>
<div class="prop-grid">
<div><h3>Product page · 9 sections</h3><ol>
<li>Gallery</li><li>Name, rating, price （税込）</li><li>Size and colour · buy button</li>
<li class="moved">Delivery and returns lines<span class="why">From the footer: the question is asked here (#1)</span></li>
<li class="moved">Short comparison<span class="why">From screen 9: choosing comes before the story (#4)</span></li>
<li>Reviews</li><li>Feature story</li><li>Related packs</li><li>Footer</li></ol></div>
</div>
</section>

<!-- SLOT candidates | REQUIRED. Additional findings (N1, N2…) found during the IA work that the
     report doesn't carry yet: each with what was seen and where, for the client to confirm or
     for the next review. "None" is an answer; say so. -->
<section id="candidates">
<div class="sec-head"><div class="no">09</div><h2>Additional findings</h2>
<p class="lead">Found while mapping the structure; not yet in the report. Worth confirming.</p></div>
<div class="scroll"><table class="tbl cand">
<tr><th style="width:60px">#</th><th>What we saw</th><th style="width:28%">Where</th></tr>
<tr><td>N1</td><td>The sale price and the regular price use the same weight, so the saving isn't visible.</td><td>Category page cards, phone</td></tr>
</table></div>
</section>

<!-- SLOT notes | REQUIRED. Findings to confirm with client data; context to keep in mind (why a
     benchmark pattern may not transfer); method and measurement notes. -->
<section id="notes">
<div class="sec-head"><div class="no">10</div><h2>Further notes</h2></div>
<ul>
<li>To confirm: share of product-page sessions that open the help centre.</li>
<li>Positions measured in a full browser at 390 × 844; one screen = 844 px.</li>
</ul>
</section>
<footer class="doc">Draft for discussion.</footer>
</main>
</template>
<script src="lang.js"></script>
</body>
</html>
```
