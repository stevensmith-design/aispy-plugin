# mock.html

The source of `templates/mock.html` (script commands in its comments point to `plugin-mode.md`). Write the fenced block's contents, unchanged, to `07-deliverables/src/mock.html`.

```html
<!DOCTYPE html>
<html lang="en" data-doc="mock">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tidewell JP — Proposed mobile product page (mock)</title>
<!-- TEMPLATE: mock shell. The shell (header, three columns, notes, markers, toggle) is fixed.
     The proposed page inside #device is designed per run in the CLIENT'S design system: write its
     CSS in <style id="proposed-css">, every selector scoped under .proposed, using the client's
     tokens (DESIGN.md / tokens.json), real copy in the market's language, and simulated values
     (placeholders .tbd only for money, legal terms or commitments only the client can confirm).
     One continuous scrollable frame for the priority device. Markers sit ON the changed element
     (wrap it in .rel and position the .mk inside). Red = report finding number, red "IA-n" = IA
     finding, dark "D1" = design proposal. Every marker has a note and every note a marker
     (check-mock.mjs). Anything without a marker is unchanged from the live page. -->
<link rel="stylesheet" href="theme.css">
<link rel="stylesheet" href="base.css">
<style id="proposed-css">
/* Sample only: replace with the client's components. Scope everything under .proposed. */
.proposed{font-family:var(--font-body);color:var(--text);background:var(--canvas);font-size:14px;line-height:1.7}
.proposed .hdr{position:sticky;top:0;z-index:5;background:var(--canvas);display:flex;justify-content:space-between;align-items:center;height:56px;padding:0 16px;border-bottom:1px solid var(--border);font-weight:700;letter-spacing:.08em}
.proposed .hero{aspect-ratio:4/3;background:var(--sand);display:grid;place-items:center;color:var(--text-2);font-size:12px}
.proposed .bb{padding:16px}
.proposed .name{font-size:22px;line-height:1.45;font-weight:600;margin:4px 0 0}
.proposed .price{font-size:22px;font-weight:600;margin-top:12px}
.proposed .price small{font-size:12px;color:var(--text-2);font-weight:400;margin-left:4px}
.proposed .cta{display:block;width:100%;margin-top:16px;min-height:52px;border:0;border-radius:var(--pill);background:var(--deep);color:#fff;font:600 15px/52px var(--font-body)}
.proposed .lines{margin:12px 0 0;padding:0;list-style:none;font-size:13px}
.proposed .lines li{padding:8px 0;border-top:1px solid var(--border)}
.proposed .sec{padding:24px 16px;border-top:8px solid var(--tint)}
.proposed .sec h3{font-size:17px;margin:0 0 8px}
</style>
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language"><button data-l="en" aria-pressed="true">EN</button><button data-l="ja" aria-pressed="false">日本語</button></div>
<div id="app"></div>

<template id="t-en" data-title="Tidewell JP — Proposed mobile product page (mock)" data-sample>
<div class="backbar"><div class="wrap"><a href="index.html">← All deliverables</a><span>DELIVERABLE 3 OF 3 · PROPOSED MOBILE PRODUCT PAGE</span></div></div>
<div class="shell">
<!-- SLOT header | REQUIRED. meta = PROPOSAL MOCK · page · device. h1 = what the proposal does,
     in one sentence. p = what changed, what stayed, and how to read the markers. -->
<header>
<div class="meta">PROPOSAL MOCK · DAYPACK 20 PRODUCT PAGE · 390 PX</div>
<h1>The first screens of the product page answer delivery, returns and choice before the brand story</h1>
<p>Same brand system and template; only the marked elements change. Red markers apply a finding in the review report, dark markers are design proposals. Use "Show / hide markers" to see the page clean.</p>
</header>
<div class="stage">

<!-- SLOT current | REQUIRED. Full-page capture at the priority device width, scrolling inside
     the frame. Fixed elements (chat button, sticky bar, banners) overlaid in .fixed where they
     really sit (capture set B), labelled; or class="fixed none" if the page has none.
     MARKERS ON THE CURRENT SIDE TOO: the same numbers, placed on the problem as it is now
     (positions in CSS px from the capture's structure.json), so each marker reads as a
     before/after pair. Something removed in the proposal is marked here only. The capture sits
     in a .rel wrapper and each .mk is positioned inside it, so markers scroll with the page and
     the toggle hides them. -->
<div class="current">
<div class="col-label">CURRENT · LIVE, 3 MAR 2026</div>
<div class="device"><div class="screen"><div class="rel"><div class="ph-img" style="height:2400px;border:0;border-radius:0">Full-page capture of the live page, 390 px</div>
<span class="mk" style="left:330px;top:520px">2</span><span class="mk" style="left:330px;top:640px">1</span><span class="mk" style="left:330px;top:1700px">4</span><span class="mk" style="left:330px;top:300px">5</span></div></div>
<div class="fixed" aria-hidden="true"><span class="lbl">FIXED ON SCREEN, LIVE 3 MAR</span></div></div>
<p class="cap">Capture of the live page at 390 px, with the elements that stay fixed on screen shown where they sit.</p>
</div>

<!-- SLOT proposed | REQUIRED. The page rebuilt in the client's design system. -->
<div>
<div class="col-label">PROPOSED</div>
<div class="device" id="device"><div class="screen proposed">
<div class="hdr"><span>☰</span><span data-asset="stand-in">TIDEWELL</span><span>⌕</span></div>
<div class="hero">Product photo</div>
<div class="bb">
<p class="name">Daypack 20 デイパック</p>
<div class="price rel">16,500円<small>（税込）</small><span class="mk" style="right:0;top:4px">2</span></div>
<button class="cta">カートに入れる</button>
<ul class="lines rel"><li>最短 <span class="tbd">3月6日</span> お届け（郵便番号で確認）</li><li>30日間返品・交換できます</li><span class="mk" style="right:0;top:6px">1</span></ul>
</div>
<div class="sec rel"><h3>ほかのモデルと比べる</h3><p>容量・重さ・価格を3モデルで比較</p><span class="mk" style="right:12px;top:24px">4</span></div>
<div class="sec rel"><h3>レビュー 4.5（1,240件）</h3><p>写真付きレビューを先頭に表示</p><span class="mk d" style="right:12px;top:24px">D1</span></div>
<div class="sec"><h3>Tidewellのこだわり</h3><p>Unchanged from the live page.</p></div>
</div></div>
</div>

<!-- SLOT notes | REQUIRED. In marker order down the page. Each note: marker (.k; .k.d for D),
     short title, p.now (the problem as it is now, one line), p.then (what the proposal does and
     why, one line; for a removal: "removed, because …", and the marker is on the current side
     only), the trade-off (.trade) when there is one, source (.f: "Report finding n",
     "IA analysis IA-n", or "Design judgement, not a review finding" + .pri for D markers).
     Legend: what red values (.tbd) are, what D markers are, that unmarked = unchanged, and the
     logo's provenance when a stand-in is used. -->
<div class="notes">
<div class="col-label">WHAT CHANGED AND WHY</div>
<button class="toggle" type="button" data-toggle-markers>Show / hide markers</button>
<ol>
<li><span class="k">2</span><div><b>Price labelled 税込</b><p class="now"><b>Now:</b> 「16,500円」 with no label, so the total is unclear.</p><p class="then"><b>Proposed:</b> 「（税込）」 in the price component, so every page gets it.</p><span class="f">Report finding 2</span></div></li>
<li><span class="k">1</span><div><b>Delivery and returns under the button</b><p class="now"><b>Now:</b> both answers sit in the footer, on another site.</p><p class="then"><b>Proposed:</b> two lines under the button, each opening the conditions.</p><p class="trade">Trade-off: the arrival date needs the postcode logic from the cart.</p><span class="f">Report finding 1</span></div></li>
<li><span class="k">5</span><div><b>Coupon sheet removed</b><p class="now"><b>Now:</b> a sign-up sheet covers the first product view.</p><p class="then"><b>Proposed:</b> removed, because it blocks the page the visit was for; the offer moves to one line under the price. Marked on the current side only.</p><span class="f">Report finding 5</span></div></li>
<li><span class="k">4</span><div><b>Comparison before the story</b><p class="now"><b>Now:</b> the comparison starts at screen 9.</p><p class="then"><b>Proposed:</b> a short three-model comparison right after the buy area.</p><span class="f">Report finding 4 · IA analysis IA-1</span></div></li>
<li><span class="k d">D1</span><div><b>Photo reviews first</b><span class="pri">Design proposal · low priority</span><p>Reviews with photos lead, since shoppers check how the pack looks worn.</p><span class="f">Design judgement, not a review finding</span></div></li>
</ol>
<p class="legend"><span class="tbd">Red values</span> are placeholders for information only the client has, such as the real delivery date.<br><b>D</b> markers are design proposals: judgement calls, not review findings.<br>Anything without a marker is unchanged from the live page. The wordmark is a stand-in.</p>
</div>
</div>
</div>
</template>
<script>
/* Per-run behaviour for the proposed page (sticky bars and so on) goes in reviewInit. */
window.reviewInit=function(app,lang){};
</script>
<script src="lang.js"></script>
</body>
</html>
```
