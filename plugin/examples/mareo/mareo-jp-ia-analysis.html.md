# mareo-jp-ia-analysis.html

The markup and text of `examples/mareo/mareo-jp-ia-analysis.html`, with its embedded images removed. How it renders: the images in the `screens` folder whose names start with this document's name.

```html
<!DOCTYPE html>
<html lang="en" data-doc="ia">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Mareo JP — Information architecture analysis (draft)</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
/* Document theme: Mareo design tokens (system/tokens.json) mapped onto the review documents'
   variables, with the Japanese typography layer this review recommends. */


:root{
  /* Mareo tokens (system/tokens.json) */
  --canvas:#FCF7EE; --surface:#FFFDFA; --tint:#EDEFF4; --border:#E5E0D7;
  --text:#272115; --text-2:#777165; --deep:#26304F; --accent:#A65F43; --on-primary:#FFFFFF;
  --marker:#C0362D; --proposal:#2E6E48;
  --e1:0 1px 2px rgba(17,24,22,0.06); --e2:0 4px 12px rgba(17,24,22,0.08); --e3:0 12px 32px rgba(17,24,22,0.12);
  /* document aliases, all pointing at tokens */
  --sand:var(--border); --border-strong:var(--border); --brand:var(--deep);
  --issue:var(--marker); --good:var(--proposal);
  --issue-bg:color-mix(in srgb,var(--marker) 8%,var(--surface)); --good-bg:color-mix(in srgb,var(--proposal) 8%,var(--surface));
  --r-sm:6px; --r-md:9px; --r-lg:12px; --pill:999px;
  --s2:8px; --s3:12px; --s4:16px; --s5:24px; --s6:32px; --s7:48px; --s8:64px;
  --primary:#6177A1;
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{margin:0;background:var(--canvas);color:var(--text);
  font-family:"Jost","Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Yu Gothic UI",Meiryo,sans-serif;
  font-size:16px;line-height:1.8;letter-spacing:.02em;font-feature-settings:"palt" 0}
:lang(ja),.ja{letter-spacing:.04em;word-break:auto-phrase}
h1,h2,h3,h4{word-break:auto-phrase;letter-spacing:.01em}
a{color:var(--deep);text-underline-offset:3px}
img{max-width:100%}
.wrap{max-width:1120px;margin:0 auto;padding:0 32px}
@media(max-width:700px){.wrap{padding:0 20px}}

/* Cover */
.cover{background:var(--brand);color:var(--on-primary);padding:var(--s8) 0 var(--s7)}
.cover .kicker{font-size:13px;letter-spacing:.12em;opacity:.85}
.cover h1{font-size:40px;line-height:1.35;font-weight:600;margin:var(--s4) 0 var(--s4);max-width:820px}
.cover p{max-width:760px;margin:0;opacity:.92}
.cover dl{display:grid;grid-template-columns:repeat(4,auto);gap:var(--s2) var(--s6);margin:var(--s6) 0 0;font-size:14px;justify-content:start}
.cover dt{opacity:.7;font-size:12px;letter-spacing:.06em}
.cover dd{margin:0}
.status{display:inline-block;margin-top:var(--s5);font-size:12px;letter-spacing:.08em;border:1px solid color-mix(in srgb,var(--surface) 55%,transparent);border-radius:var(--pill);padding:3px 12px}
@media(max-width:860px){.cover h1{font-size:30px}.cover dl{grid-template-columns:1fr 1fr}}

nav.toc{position:sticky;top:0;z-index:5;background:color-mix(in srgb,var(--canvas) 96%,transparent);border-bottom:1px solid var(--border)}
nav.toc .wrap{display:flex;gap:var(--s2) var(--s5);flex-wrap:wrap;padding-top:10px;padding-bottom:10px;font-size:14px}
nav.toc a{color:var(--text-2);text-decoration:none}
nav.toc a:hover{color:var(--text)}

section{padding:var(--s8) 0 0}
.sec-head{display:block;margin-bottom:var(--s5)}
.sec-head .no{font-size:13px;color:var(--text-2);letter-spacing:.1em;margin-bottom:4px}
h2{font-size:30px;line-height:1.4;margin:0;font-weight:600}
.sec-body{margin-left:0}
@media(max-width:860px){.sec-head{grid-template-columns:1fr;gap:0}.sec-body{margin-left:0}}
.lead{font-size:18px;color:var(--text-2);max-width:860px;margin:var(--s3) 0 0}
p{max-width:780px}
h3{font-size:20px;line-height:1.5;margin:var(--s6) 0 var(--s3);font-weight:600}
.h4{line-height:inherit;font-size:13px;letter-spacing:.08em;color:var(--text-2);font-weight:600;margin:var(--s5) 0 var(--s2)}


.tag{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;line-height:1;padding:6px 12px;border-radius:var(--pill);background:var(--tint);color:var(--deep);border:1px solid var(--border);white-space:nowrap}
.tag small{font-weight:400;color:var(--text-2);font-size:11px}
.prio{background:transparent;border:1.5px dotted currentColor}
.prio.high{color:var(--issue)} .prio.mid{color:var(--accent)} .prio.low{color:var(--text-2)}

/* Tables */
.tbl{width:100%;border-collapse:collapse;background:var(--surface);border-radius:var(--r-sm);overflow:hidden;font-size:14px;line-height:1.7}
.tbl th,.tbl td{padding:12px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}
.tbl th{background:var(--sand);font-weight:600;font-size:13px}
.tbl tr:last-child td{border-bottom:0}
.tbl td.bad{color:var(--issue)} .tbl td.ok{color:var(--good)}
.scroll{overflow-x:auto;border:1px solid var(--border);border-radius:var(--r-sm);margin:var(--s4) 0}
.scroll .tbl{border-radius:0}
.persp td:first-child{font-weight:600}
.persp .short{font-weight:400;font-size:13px;color:var(--text-2);margin:8px 0 0;line-height:1.7}
.flist li{justify-content:space-between}.flist a{flex:1}
.persp td:first-child small{display:block;font-weight:400;color:var(--text-2)}
.flist{list-style:none;margin:0;padding:0}
.flist li{display:flex;gap:10px;align-items:baseline;margin:4px 0}
.flist .n{font-weight:700;min-width:22px;color:var(--issue)}
.flist a{color:var(--text);text-decoration:none}
.flist a:hover{text-decoration:underline}
.dot{display:inline-block;white-space:nowrap;flex:none;font-size:11px;font-weight:600;border:1.5px dotted;border-radius:var(--pill);padding:1px 8px;margin-left:6px;line-height:1.5}
.dot.high{color:var(--issue)} .dot.mid{color:var(--accent)}

.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:var(--r-sm);overflow:hidden;margin:var(--s5) 0}
.facts div{background:var(--surface);padding:var(--s5)}
.facts b{display:block;font-size:30px;line-height:1.2;font-weight:600;color:var(--deep)}
.facts span{display:block;font-size:14px;margin-top:6px}
.facts em{display:block;font-style:normal;font-size:12px;color:var(--text-2);margin-top:6px}
@media(max-width:860px){.facts{grid-template-columns:1fr}}

/* Findings */
.finding{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);margin:var(--s6) 0;overflow:hidden}
.f-head{display:grid;grid-template-columns:64px 1fr;gap:var(--s4);padding:var(--s5) var(--s5) var(--s4)}
.f-no{width:48px;height:48px;border-radius:var(--r-sm);background:var(--issue);color:var(--on-primary);font-size:22px;font-weight:700;display:flex;align-items:center;justify-content:center;letter-spacing:0}
.f-head h3{margin:0 0 var(--s3);font-size:22px;line-height:1.5}
.f-tags{display:flex;flex-wrap:wrap;gap:8px}
.f-body{padding:0 var(--s5) var(--s5)}
@media(max-width:860px){.f-head{grid-template-columns:1fr}.f-body{padding:0 var(--s5) var(--s5)}}
.f-body>p{margin:0 0 var(--s4)}
.where{font-size:13px;color:var(--text-2);margin:-4px 0 var(--s4)}
.shots{display:grid;gap:var(--s4);grid-template-columns:repeat(auto-fit,minmax(240px,1fr));align-items:start;margin:var(--s4) 0}
.shots.one{grid-template-columns:1fr}
.shots.wide{grid-template-columns:1.6fr 1fr}
@media(max-width:860px){.shots.wide{grid-template-columns:1fr}}
figure{margin:0}
figure img{display:block;width:auto;max-width:100%;height:auto;border:1px solid var(--border);border-radius:var(--r-sm);background:var(--surface);cursor:zoom-in}
figcaption{font-size:13px;color:var(--text-2);margin-top:8px;line-height:1.6}
.ref{background:var(--good-bg);border-radius:var(--r-sm);padding:var(--s5);margin:var(--s5) 0 0}
.ref .h4{margin-top:0;color:var(--good)}
.ref .shots{grid-template-columns:repeat(auto-fit,minmax(200px,260px))}
.ref p,.ref li{font-size:14px}
.ref ul{margin:var(--s2) 0 0;padding-left:20px}
.prop{border-top:1px solid var(--border);margin-top:var(--s5);padding-top:var(--s4)}
.prop .h4{margin-top:0;color:var(--deep)}
.prop ul{margin:0;padding-left:20px}
.prop li{margin:6px 0}
.ask{font-size:14px;color:var(--text-2);margin:var(--s4) 0 0;padding-left:var(--s4);border-left:2px solid var(--border-strong)}
.ask b{color:var(--text)}
.mk{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;border-radius:var(--r-sm);background:var(--issue);color:var(--on-primary);font-size:12px;font-weight:700;vertical-align:1px;letter-spacing:0}
.mk.g{background:var(--good)}
code{font-family:ui-monospace,Menlo,monospace;font-size:.86em;background:var(--tint);padding:1px 6px;border-radius:var(--r-sm);letter-spacing:0}

/* PDP length diagram */
.len{margin:var(--s4) 0}
.len .row{display:grid;grid-template-columns:120px 1fr;gap:var(--s3);align-items:center;margin:10px 0;font-size:13px}
.len .bar{position:relative;height:30px;background:var(--tint);border-radius:var(--r-sm)}
.len .seg{position:absolute;top:0;bottom:0;border-radius:var(--r-sm);font-size:11px;color:var(--on-primary);display:flex;align-items:center;padding:0 8px;white-space:nowrap;overflow:hidden}
.len .tick{position:absolute;top:-4px;bottom:-4px;width:2px;background:var(--text)}
.len .lab{position:absolute;top:34px;font-size:11px;color:var(--text-2);white-space:nowrap;transform:translateX(-50%)}
.len .scale{display:flex;justify-content:space-between;font-size:11px;color:var(--text-2);margin-left:132px}
ol.order{list-style:none;counter-reset:o;padding:0;margin:var(--s3) 0;max-width:780px}
ol.order li{counter-increment:o;display:grid;grid-template-columns:28px 190px 1fr;gap:var(--s3);padding:10px 0;border-bottom:1px solid var(--border);font-size:14px}
ol.order li:before{content:counter(o);font-weight:700;color:var(--primary)}
@media(max-width:700px){ol.order li{grid-template-columns:28px 1fr}ol.order li span{grid-column:2}}

.grid2{display:grid;grid-template-columns:1fr 1fr;gap:var(--s4)}
@media(max-width:860px){.grid2{grid-template-columns:1fr}}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-sm);padding:var(--s5)}
.panel .h4{margin-top:0}
.panel ul{margin:0;padding-left:20px;font-size:14px}
.panel li{margin:6px 0}
.sources{font-size:14px;padding-left:24px}
.sources li{margin:6px 0}
footer{margin-top:var(--s8);border-top:1px solid var(--border);padding:var(--s5) 0 var(--s8);font-size:13px;color:var(--text-2)}
#lb{position:fixed;inset:0;background:color-mix(in srgb,var(--text) 88%,transparent);display:none;align-items:center;justify-content:center;z-index:50;padding:24px;cursor:zoom-out}
#lb img{max-width:100%;max-height:100%;border-radius:var(--r-sm);background:var(--surface)}
@media print{nav.toc{display:none}.finding{break-inside:avoid-page}}

/* Package navigation */
.backbar{background:var(--deep);color:var(--on-primary);font-size:13px}
.backbar .wrap{display:flex;justify-content:space-between;align-items:center;min-height:40px;gap:16px}
.backbar a{color:var(--on-primary);text-decoration:none;opacity:.92}
.backbar a:hover{opacity:1;text-decoration:underline}
.backbar span{opacity:.7;letter-spacing:.06em;font-size:12px}
.howto{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:var(--s4) var(--s5);margin:var(--s5) 0 0;font-size:14px;max-width:none}
.howto b{font-weight:600}

/* IA-specific */
.legend-row{display:flex;flex-wrap:wrap;gap:8px 18px;font-size:12px;color:var(--text-2);margin:var(--s3) 0}
.legend-row span{display:inline-flex;align-items:center;gap:6px}
.legend-row i{width:14px;height:14px;border-radius:var(--r-sm);display:inline-block}
.pmap{margin:var(--s4) 0 var(--s5)}
.pmap .r{display:grid;grid-template-columns:150px 1fr;gap:var(--s3);align-items:center;margin:8px 0}
.pmap .r>b{font-size:13px;font-weight:600;line-height:1.3}
.pmap .r>b small{display:block;font-weight:400;color:var(--text-2);font-size:11px}
.pmap .bar{position:relative;height:38px;background:var(--canvas);border:1px solid var(--border);border-radius:var(--r-sm);overflow:hidden}
.pmap .s{position:absolute;top:0;bottom:0;border-right:1px solid color-mix(in srgb,var(--surface) 70%,transparent);font-size:10px;line-height:1.2;padding:3px 4px;overflow:hidden;color:var(--on-primary);letter-spacing:0}
.pmap .axis{display:grid;grid-template-columns:150px 1fr;gap:var(--s3);font-size:11px;color:var(--text-2)}
.pmap .axis div{display:flex;justify-content:space-between}
.k-decide{background:var(--deep)}.k-trust{background:var(--proposal)}.k-brand{background:var(--border);color:var(--text)!important}
.k-promo{background:var(--marker)}.k-cat{background:var(--accent)}.k-detail{background:var(--text-2)}.k-help{background:var(--primary)}.k-foot{background:var(--surface);color:var(--text)!important;box-shadow:inset 0 0 0 1px var(--border)}
.trees{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s4);margin:var(--s4) 0}
@media(max-width:960px){.trees{grid-template-columns:1fr}}
.tree{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-sm);padding:var(--s4) var(--s5);font-size:13px;line-height:1.7}
.tree .h4{margin:0 0 var(--s2)}
.tree ul{list-style:none;margin:0;padding:0}
.tree ul ul{padding-left:16px;border-left:1px solid var(--border);margin:2px 0 6px 4px}
.tree li{margin:1px 0}
.tree .g{font-weight:600}
.tree .d{color:var(--text-2);font-size:11.5px}
.tree .bad{color:var(--issue)} .tree .ok{color:var(--good)}
.tree .new{color:var(--good);font-weight:600}
.flow{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:6px 0 2px}
.flow .st{background:var(--surface);border:1px solid var(--border-strong);border-radius:var(--r-sm);padding:5px 10px;font-size:12.5px;line-height:1.4}
.flow .st.x{border-color:var(--issue);color:var(--issue);background:var(--issue-bg)}
.flow .st.g{border-color:var(--good);color:var(--good);background:var(--good-bg)}
.flow .ar{color:var(--text-2);font-size:13px}
.task{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:var(--s5);margin:var(--s4) 0}
.task h3{margin:0 0 var(--s2);font-size:18px}
.task .lbl{font-size:12px;font-weight:600;letter-spacing:.06em;color:var(--text-2);margin-top:var(--s3)}
.task .note{font-size:14px;margin:var(--s3) 0 0;max-width:none}
.metric{display:inline-block;font-size:12px;font-weight:600;border-radius:var(--pill);padding:3px 10px;background:var(--tint);color:var(--deep);margin-left:6px}
.sev{font-size:12px;font-weight:600;white-space:nowrap}
.sev.maj{color:var(--issue)} .sev.min{color:var(--accent)}
.idtbl td:first-child{white-space:nowrap}
.panel ol.order li{grid-template-columns:24px 130px 1fr}
.cand td:first-child{font-weight:700;color:var(--issue);white-space:nowrap}

/* Language switch */
.lang-switch{position:fixed;top:6px;right:12px;z-index:1000;display:flex;background:color-mix(in srgb,var(--surface) 96%,transparent);border:1px solid var(--border);border-radius:var(--pill);padding:3px;box-shadow:0 2px 8px color-mix(in srgb,var(--text) 12%,transparent);font-family:"Helvetica Neue",Arial,"Hiragino Sans","Noto Sans JP",sans-serif}
.lang-switch button{font:600 12px/1 inherit;font-family:inherit;letter-spacing:.04em;border:0;background:none;color:var(--deep);padding:6px 12px;border-radius:var(--pill);cursor:pointer;min-height:28px}
.lang-switch button[aria-pressed=true]{background:var(--deep);color:var(--on-primary)}
.lang-switch button:focus-visible{outline:2px solid var(--deep);outline-offset:2px}
.backbar .wrap,.backbar .in{padding-right:150px!important}
html[lang=ja] body{letter-spacing:.04em}
html[lang=ja] p,html[lang=ja] li,html[lang=ja] td,html[lang=ja] h1,html[lang=ja] h2,html[lang=ja] h3{word-break:auto-phrase;line-break:strict}


@media(max-width:700px){nav.toc .wrap{padding-right:132px}}
@media(max-width:600px){.pmap .s{color:transparent}}

</style>
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language / 言語"><button type="button" data-l="en" aria-pressed="true">EN</button><button type="button" data-l="ja" aria-pressed="false" lang="ja">日本語</button></div>
<div id="app"></div>

<template id="t-en" data-title="Mareo JP — Information architecture analysis (draft)">
<div class="backbar"><div class="wrap"><a href="index.html">← All deliverables</a><span>DELIVERABLE 2 OF 3 · INFORMATION ARCHITECTURE</span></div></div>
<header class="cover">
<div class="wrap">
<div class="kicker">INFORMATION ARCHITECTURE ANALYSIS · JP.MAREO.EXAMPLE</div>
<h1>Mareo's structure is built around the brand story, not around how a Japanese shopper decides</h1>
<p>An analysis of navigation, page layout and hierarchy, and the page-to-page journey (遷移) on mobile, benchmarked against LOWYA, Re:CENO, unico, ACTUS and IKEA Japan. It also lists additional localisation findings for review.</p>
<dl>
<div><dt>FOR</dt><dd>Mareo Japan</dd></div>
<div><dt>SCOPE</dt><dd>Navigation, search, Sumi product page</dd></div>
<div><dt>VIEWPORT</dt><dd>Mobile 390 × 844</dd></div>
<div><dt>CAPTURED</dt><dd>18 November 2026 · current and benchmark sites</dd></div>
</dl>
<div class="status">DRAFT · SAMPLE DELIVERABLE</div>
</div>
</header>
<nav class="toc"><div class="wrap">
<a href="#summary">Summary</a><a href="#nav">Navigation</a><a href="#pages">Page hierarchy</a><a href="#journeys">Journeys</a><a href="#ia-findings">IA findings</a><a href="#proposal">Proposed structure</a><a href="#candidates">Additional findings</a>
</div></nav>
<main class="wrap">
<section id="summary">
<div class="sec-head"><div class="no">01</div><div><h2>Summary</h2>
<p class="lead">The page's frame is sound: clear product categories, breadcrumbs, a purchase button just below the first screen with the size preselected, and a sticky purchase bar. The problems sit around that path. The information a Japanese shopper needs before committing is spread across the page, behind icons or off the site, and the structure gives it no fixed place.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:34%">Structural issue</th><th>What we measured</th><th style="width:22%">Best Japanese reference</th></tr>
<tr><td><b>1. “Which sofa is right for me?” has no home.</b> Comparison sits at the end of the product page, not in the navigation.</td><td>0 menu entries for 比較 or 選び方. The three sofas appear in the menu by name only. The comparison starts at screen 10.1 of 12.1.</td><td>ACTUS: a sofa buying guide linked from the homepage</td></tr>
<tr><td><b>2. Trust content arrives late.</b> Delivery, returns and reviews are far from the decision point.</td><td>Product page: reviews at screen 10.5 (LOWYA: review summary at 4.1). No arrival date anywhere; return conditions on an external help centre.</td><td>LOWYA: delivery date, guarantee tags and store check above the cart button, within 2.4 screens</td></tr>
<tr><td><b>3. The product page tells the story before the facts.</b> Seven brand-story sections come before comparison and reviews.</td><td>8.3 screens of story (1.8–10.1), with <span lang="ja">「究極の座り心地」</span> twice and <span lang="ja">「ふんわりやわらか」</span> three times.</td><td>LOWYA: description after the purchase area, reviews next</td></tr>
<tr><td><b>4. Ways to try before buying are split up.</b> Showroom and fabric samples sit in two places.</td><td>The showroom is a utility link in the drawer. Fabric samples are an ⓘ pill under the button. Neither is linked from the product page body.</td><td>LOWYA, Re:CENO, unico: <span lang="ja">「店舗の展示・在庫を確認する」</span> next to the cart button</td></tr>
</table></div>
<p>A long page is not the problem in itself: LOWYA's product page is longer than Mareo's (14.0 vs 12.1 screens). What differs is <b>what comes first</b>. LOWYA puts the decision and trust content in the first 2.4 screens and its reviews at 4.1. Mareo does the reverse.</p>
</div>
</section>
<section id="nav">
<div class="sec-head"><div class="no">02</div><div><h2>Navigation</h2>
<p class="lead">Mobile drawer as shipped, compared with LOWYA, an online-first Japanese furniture retailer, and a proposed structure.</p></div></div>
<div class="sec-body">
<div class="trees">
<div class="tree"><h3 class="h4">MAREO JP (AS SHIPPED)</h3><ul>
<li class="g">Search field <span lang="ja">「何をお探しですか？」</span></li>
<li class="g">ソファ <span class="d">(NEW)</span></li><ul><li>すべてのソファ</li><li>ソファ Sumi / Ren / Mio <span class="d">(names only; tags NEW / SALE)</span></li><li>カバー・パーツ</li><li class="bad">✕ no 比較 or 選び方</li></ul>
<li class="g">ソファベッド (SALE) · チェア · テーブル · ラグ・クッション · アクセサリー</li>
<li class="g">Utility area</li><ul><li>MAREOについて</li><li>ショールーム</li><li>法人のお客様</li><li class="bad">よくある質問 ↗ (leaves the site)</li></ul>
<li class="d">6 categories + 4 utility links</li>
</ul></div>
<div class="tree"><h3 class="h4">LOWYA</h3><ul>
<li class="g">Member area</li><ul><li>ログイン / 新規会員登録 · クーポン一覧 · 最近チェックした商品 · お気に入り商品</li></ul>
<li class="g">商品</li><ul><li>カテゴリーから探す · テイストから探す · 新着商品 · 商品ランキング · オススメ商品 · 詳細検索 · ブランドから探す</li></ul>
<li class="g">イマコレ！</li><ul><li>コーディネート · 特集一覧 · みんなの投稿写真 · まとめ記事</li></ul>
<li class="g">店舗情報</li><ul><li class="ok">ショップリスト</li></ul>
<li class="g">ご利用ガイド</li><ul><li class="ok">はじめての方へ · ご購入方法 · 配送について · お支払い方法 · 返品・交換 · LOWYAポイント · よくあるご質問 (on-domain)</li></ul>
<li class="ok">お問い合わせ · 特定商取引法に基づく表記 · LINE</li>
<li class="d">Groups organised by what the visitor wants to do: find, get ideas, visit, get help</li>
</ul></div>
<div class="tree"><h3 class="h4">PROPOSED FOR MAREO</h3><ul>
<li class="g">ソファ</li><ul><li class="new">ソファを比べる・選び方</li><li>Sumi <span class="d">かため · ポケットコイル · 98,000円〜</span></li><li>Ren <span class="d">やわらかめ · フェザー · 118,000円〜</span></li><li>Mio <span class="d">ふつう · ウレタン · 86,000円〜</span></li><li>カバー・パーツ</li></ul>
<li class="g">ソファベッド · チェア · テーブル</li>
<li class="g">ラグ・クッション・アクセサリー <span class="d">(merged)</span></li>
<li class="g new">試す・見る</li><ul><li>ショールーム</li><li>生地サンプル（無料）</li></ul>
<li class="g new">サポート</li><ul><li>配送・搬入</li><li>返品・保証</li><li>よくある質問 (on-domain)</li><li>お問い合わせ (電話 · チャット · LINE)</li></ul>
<li class="g">MAREOについて · 法人のお客様</li>
</ul></div>
</div>
<h3>What the comparison shows</h3>
<div class="scroll"><table class="tbl">
<tr><th style="width:28%">Question</th><th>Mareo JP</th><th>LOWYA</th></tr>
<tr><td>How is the menu organised?</td><td class="bad">By product type (6 categories), with the rest in a utility area mixing brand, showroom, B2B and help</td><td class="ok">By intent: find products, get ideas, visit a store, get help</td></tr>
<tr><td>Can I tell the products apart from the menu?</td><td class="bad">No. Sumi, Ren and Mio are names only; tags describe newness and sales (NEW, SALE)</td><td>Partly: ranking and recommendation lists; filters by taste and detailed search</td></tr>
<tr><td>Where do I compare or get a recommendation?</td><td class="bad">Not in the menu; only at screen 10.1 of a product page</td><td><span lang="ja">「商品ランキング」</span> and <span lang="ja">「オススメ商品」</span> in the menu; <span lang="ja">「こちらもよく比較されています」</span> on product pages</td></tr>
<tr><td>Where can I try it?</td><td class="bad">Showroom in the utility area; fabric samples behind an ⓘ pill; neither linked from the product page</td><td class="ok">店舗情報 in the menu, and a store check next to the cart button</td></tr>
<tr><td>Where do I get help?</td><td class="bad">FAQ leaves the site; phone number only in the footer; LINE only as a social icon</td><td class="ok">ご利用ガイド on-domain, grouped; LINE in the menu</td></tr>
</table></div>
</div>
</section>
<section id="pages">
<div class="sec-head"><div class="no">03</div><div><h2>Page layout and hierarchy</h2>
<p class="lead">Each bar is one page at mobile width, measured section by section. Colours show what each section is for. The question is not how long the page is but where the decision and trust content sit.</p></div></div>
<div class="sec-body">
<div class="legend-row"><span><i class="k-decide"></i>Decide (products, choice, compare, buy)</span><span><i class="k-trust"></i>Trust (delivery, returns, reviews, support)</span><span><i class="k-detail"></i>Product details</span><span><i class="k-brand"></i>Brand / features story</span><span><i class="k-cat"></i>Catalogue rows</span><span><i class="k-promo"></i>Promotion</span><span><i class="k-help"></i>Help / FAQ</span><span><i class="k-foot"></i>Footer</span></div>
<h3>Why each page exists</h3>
<p style="font-size:14px">The job each page should do, based on how visitors arrive and what they need at that point. The maps below are judged against it.</p>
<div class="scroll"><table class="tbl">
<tr><th style="width:18%">Page</th><th style="width:30%">How visitors arrive</th><th>What they need to do here</th></tr>
<tr><td><b>Top page</b></td><td>Brand search, ads, social, returning visitors</td><td>Understand what Mareo is, see that it's trustworthy, and get to the right sofa quickly. <i>Out of scope in this example: no homepage was reviewed.</i></td></tr>
<tr><td><b>ソファ category</b></td><td>Menu</td><td>Compare the three sofas and pick one. <i>Out of scope in this example.</i></td></tr>
<tr><td><b>Sofa product page</b></td><td>Product-name search, ads, the menu</td><td>Choose size and colour, confirm the seat feel, check that it fits the room and the doorway, check delivery and returns, read reviews, buy</td></tr>
<tr><td><b>Search</b></td><td>Menu drawer (mobile)</td><td>Find a product, or an answer to a service question (returns, delivery, payment)</td></tr>
</table></div>
<h3>Top page</h3>
<p class="note" style="font-size:14px;color:var(--text-2)">Out of scope in this example. The review covered the product page, header, menu and search; a homepage map would compare Mareo's top page with LOWYA's in the same way.</p>
<h3>Product page</h3>
<div class="pmap"><div class="r"><b>Mareo JP<small>Sumi · 12.1 screens</small></b><div class="bar"><div class="s k-decide" style="left:0.00%;width:10.20%" title="Buy box (0–1.43)">Buy box</div><div class="s k-detail" style="left:10.41%;width:2.35%" title="5 accordions (1.46–1.79)"></div><div class="s k-brand" style="left:12.77%;width:8.42%" title="Story (1.79–2.97)">Story</div><div class="s k-brand" style="left:21.18%;width:4.78%" title="Detail tiles (2.97–3.64)"></div><div class="s k-brand" style="left:25.96%;width:9.13%" title="Seat story (3.64–4.92)">Seat story</div><div class="s k-brand" style="left:35.09%;width:7.28%" title="Why Mareo (claims) (4.92–5.94)"></div><div class="s k-brand" style="left:42.37%;width:9.20%" title="Everyday (5.94–7.23)">Everyday</div><div class="s k-brand" style="left:51.57%;width:11.48%" title="Craft (7.23–8.84)">Craft</div><div class="s k-brand" style="left:63.05%;width:9.13%" title="Durability (8.84–10.12)"></div><div class="s k-decide" style="left:72.18%;width:2.57%" title="Compare (10.12–10.48)"></div><div class="s k-trust" style="left:74.75%;width:5.92%" title="Reviews (10.48–11.31)"></div><div class="s k-help" style="left:80.67%;width:1.78%" title="FAQ (11.31–11.56)"></div><div class="s k-foot" style="left:82.45%;width:3.71%" title="Footer (11.56–12.08)"></div></div></div><div class="r"><b>LOWYA<small>ベルファ 3人掛けカウチソファ · 14.0 screens</small></b><div class="bar"><div class="s k-decide" style="left:0.00%;width:10.27%" title="Buy box (0–1.44)">Buy box</div><div class="s k-trust" style="left:10.27%;width:3.21%" title="Delivery date, store (1.44–1.89)"></div><div class="s k-decide" style="left:13.48%;width:4.14%" title="Cart (1.89–2.47)"></div><div class="s k-detail" style="left:17.62%;width:5.92%" title="Description (2.47–3.3)"></div><div class="s k-brand" style="left:23.54%;width:4.99%" title="Room fit (3.3–4.0)"></div><div class="s k-detail" style="left:28.53%;width:0.50%" title="Specs (4.0–4.07)"></div><div class="s k-trust" style="left:29.03%;width:18.76%" title="Reviews (4.07–6.7)">Reviews</div><div class="s k-brand" style="left:47.79%;width:2.35%" title="Snaps (6.7–7.03)"></div><div class="s k-cat" style="left:50.14%;width:9.56%" title="Series, related (7.03–8.37)">Series, related</div><div class="s k-cat" style="left:59.70%;width:4.49%" title="Compared items (8.37–9.0)"></div><div class="s k-foot" style="left:64.19%;width:35.81%" title="More items, footer (9.0–14.02)">More items, footer</div></div></div><div class="axis"><span></span><div><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span><span>12</span><span>14</span></div></div><div class="axis"><span></span><span style="text-align:right">screens at 390 × 844</span></div></div>
<ul style="font-size:14px">
<li>Mareo: buy box, then five accordions, then seven brand-story sections (1.8–10.1). The same claims appear more than once. Comparison starts at 10.1, reviews at 10.5.</li>
<li>LOWYA: rating, gallery, options, price (税込), guarantee and delivery tags, delivery date by postcode, store check and cart, all within 2.4 screens. Description follows, with reviews from 4.1. LOWYA positions below screen 3 shift by a few hundred pixels between loads because of lazy loading.</li>
</ul>
<h3>Category page (ソファ)</h3>
<p class="note" style="font-size:14px;color:var(--text-2)">Out of scope in this example.</p>
<h3>Heading hierarchy (Sumi product page)</h3>
<ul style="font-size:14px">
<li>The product name is the page's H1, as it should be.</li>
<li>The seven story headings are H2s at the same level as <span lang="ja">「モデルを比較」</span>, <span lang="ja">「カスタマーレビュー」</span> and “FAQs”, so the decision content has no more weight than the story. The four tiles add H3s, one of them in English (“Height Adjustable”).</li>
<li>The accordions have no headings at all, so the specs, delivery and warranty sections are invisible to an outline or a screen-reader heading list.</li>
</ul>
</div>
</section>
<section id="journeys">
<div class="sec-head"><div class="no">04</div><div><h2>Key journeys (遷移)</h2>
<p class="lead">Eight tasks a Japanese sofa shopper typically performs, walked on mobile. Red steps mark friction. Green steps show how a Japanese site handles the same step.</p></div></div>
<div class="sec-body">
<div class="task"><h3>T1 · “Which of the three sofas suits me?” <span class="metric">no menu route</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Menu</span><span class="ar">→</span><span class="st">ソファ</span><span class="ar">→</span><span class="st x">Sumi / Ren / Mio: names only</span><span class="ar">→</span><span class="st">Product page</span></div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st x">Scroll past 8.3 screens of story</span><span class="ar">→</span><span class="st x"><span lang="ja">「モデルを比較」</span>: firmness as 4/5, 2/5, 3/5</span></div>
<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;margin-top:10px"><figure style="flex:0 1 300px"><img data-img="0" src="" alt=""/></figure>
<p class="note" style="margin:0;flex:1 1 280px">The three sofas differ mainly in seat feel and construction (pocket coils, feather, foam), which is exactly what a shopper needs to choose. None of it appears in the menu, and the only place the three meet is the comparison at the end of the product page, where firmness is a number out of five rather than a word.</p></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">ACTUS: <span lang="ja">「ソファの選び方」</span> guide</span><span class="st g">IKEA Japan: <span lang="ja">「硬さ」</span> in words on sofa cards</span><span class="st g">LOWYA: <span lang="ja">「こちらもよく比較されています」</span></span></div>
</div>
<div class="task"><h3>T2 · “When will it arrive, and what if I don't like it?” <span class="metric">4 places to check</span></h3>
<div class="lbl">MAREO (FROM THE PRODUCT PAGE)</div>
<div class="flow"><span class="st">Pills under the CTA</span><span class="ar">→</span><span class="st">ⓘ for 返品保証</span><span class="ar">→</span><span class="st">Accordion <span lang="ja">「お届け・返品」</span></span><span class="ar">→</span><span class="st x">Arrival date: “by email after ordering”</span><span class="ar">→</span><span class="st x">Return conditions: external help centre</span><span class="ar">→</span><span class="st x">Return shipping cost: nowhere</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">LOWYA: delivery date for your postcode above the cart button</span><span class="st g">IKEA Japan: 365-day returns under the button</span><span class="st g">unico: <span lang="ja">「お届け日の目安」</span> under the button</span></div>
</div>
<div class="task"><h3>T3 · Buy Sumi, 3-seat, grey <span class="metric">2 taps to cart</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st g">Size (3人掛け preselected)</span><span class="ar">→</span><span class="st x">Colour: unnamed swatches</span><span class="ar">→</span><span class="st g"><span lang="ja">「カートに入れる」</span> at 1.3 screens</span><span class="ar">→</span><span class="st">Cart</span></div>
<p class="note">The shortest path works well, and the sticky purchase bar keeps the button in reach. The issue is what the shopper is unsure about at the button (T1, T2, T6), not the number of taps. Cart and checkout weren't entered in this review.</p>
</div>
<div class="task"><h3>T4 · “Can I sit on it somewhere first?” <span class="metric">utility area only</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Menu</span><span class="ar">→</span><span class="st x"><span lang="ja">「ショールーム」</span> (utility area)</span></div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st x">no link to the showroom</span><span class="ar">→</span><span class="st"><span lang="ja">「生地サンプル無料」</span> ⓘ pill (fabric only)</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">LOWYA: <span lang="ja">「店舗の展示・在庫を確認する」</span> by the cart button</span><span class="st g">Re:CENO: <span lang="ja">「店舗の展示を確認する」</span> under the cart button</span><span class="st g">unico: <span lang="ja">「店舗の在庫を確認する」</span></span></div>
</div>
<div class="task"><h3>T5 · “I have a question before buying” <span class="metric">leaves the site</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Footer <span lang="ja">「よくある質問 ↗」</span></span><span class="ar">→</span><span class="st x">external help centre</span></div>
<div class="flow"><span class="st">Product FAQ (screen 11.3)</span><span class="ar">→</span><span class="st x"><span lang="ja">「詳しくはヘルプセンターをご覧ください」</span></span></div>
<div class="flow"><span class="st">Phone 0120-000-000</span><span class="ar">→</span><span class="st x">only in the footer (screen 11.6)</span></div>
<div class="flow"><span class="st">Floating chat button</span><span class="ar">→</span><span class="st x">no hours stated</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">LOWYA: ご利用ガイド (配送, 支払い, 返品・交換, FAQ) on-domain, in the menu; LINE in the menu</span></div>
</div>
<div class="task"><h3>T6 · “Will the sofa fit through my door?” <span class="metric">no answer on the page</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Size <span lang="ja">「3人掛け」</span></span><span class="ar">→</span><span class="st">Accordion <span lang="ja">「サイズ」</span> for assembled size</span><span class="ar">→</span><span class="st x">no packed size or box count</span><span class="ar">→</span><span class="st x">FAQ <span lang="ja">「玄関から搬入できますか？」</span> → <span lang="ja">「サイズ表をご確認ください」</span></span></div>
<p class="note">The FAQ sends the shopper back to a table that doesn't contain the answer. Nothing says whether delivery includes carrying the sofa into the room.</p>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">Re:CENO: <span lang="ja">「搬入経路を確認する」</span> under the cart button + 梱包サイズ</span><span class="st g">LOWYA: <span lang="ja">「複数梱包商品」</span> tag + 梱包サイズ and 搬入経路 note</span></div>
</div>
<div class="task"><h3>T7 · From the homepage hero to a sofa <span class="metric">out of scope</span></h3>
<p class="note">Out of scope in this example: no homepage was reviewed. In a full review this journey checks whether the hero names its destination and lands on the right option.</p>
</div>
<div class="task"><h3>T8 · “What's the returns policy?” via search <span class="metric">no answer on site</span></h3>
<div class="lbl">MAREO (MOBILE)</div>
<div class="flow"><span class="st">Menu (search is only in the drawer)</span><span class="ar">→</span><span class="st">Search <span lang="ja">「返品」</span></span><span class="ar">→</span><span class="st x">3 products, no policy page</span><span class="ar">→</span><span class="st x">FAQ is on an external help centre that search can't reach</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">IKEA Japan: <span lang="ja">「返品」</span> → customer-service content first (114 results)</span></div>
</div>
</div>
</section>
<section id="ia-findings">
<div class="sec-head"><div class="no">05</div><div><h2>IA findings</h2>
<p class="lead">Structural findings by layer (structure, labels, disclosure). The right-hand column links each one to the localisation review where it overlaps.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl idtbl">
<tr><th style="width:52px">#</th><th>Finding</th><th style="width:90px">Severity</th><th style="width:110px">Review link</th></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">Structure</td></tr>
<tr><td>IA-1</td><td><b>The choosing task has no home.</b> Comparison and buying advice aren't in the menu; the only comparison sits at screen 10.1 of the product page.</td><td><span class="sev maj">Major</span></td><td>Finding 10</td></tr>
<tr><td>IA-2</td><td><b>Try-before-you-buy routes are split.</b> Showroom (utility link) and fabric samples (ⓘ pill), and neither is linked from the product page body.</td><td><span class="sev maj">Major</span></td><td>New</td></tr>
<tr><td>IA-3</td><td><b>Homepage sections.</b> <i>Out of scope in this example: no homepage was reviewed.</i></td><td>—</td><td>—</td></tr>
<tr><td>IA-4</td><td><b>Category page.</b> <i>Out of scope in this example: no category page was reviewed.</i></td><td>—</td><td>—</td></tr>
<tr><td>IA-5</td><td><b>Product-page order follows the brand story, not the decision.</b> Seven story sections (8.3 screens, repeated claims) come before comparison and reviews.</td><td><span class="sev maj">Major</span></td><td>Finding 12</td></tr>
<tr><td>IA-13</td><td><b>Search is product-only and hidden on mobile.</b> Service questions (返品, 配送, ペイペイ) return products; the FAQ lives on an external help centre; on mobile search is only inside the menu drawer.</td><td><span class="sev maj">Major</span></td><td>Finding 13</td></tr>
<tr><td>IA-14</td><td><b>One product split across several URLs.</b> <i>Not observed on the reviewed page: sizes and colours are in-page options. Other product pages were out of scope.</i></td><td>—</td><td>—</td></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">Labels</td></tr>
<tr><td>IA-6</td><td><b>Menu items carry no reason to choose.</b> Sumi, Ren and Mio are names only; tags describe newness and sales (NEW, SALE).</td><td><span class="sev maj">Major</span></td><td>Finding 10</td></tr>
<tr><td>IA-7</td><td><b>The utility area mixes four kinds of link</b> (brand, showroom, B2B, help); FAQ leaves the domain with only an icon as warning.</td><td><span class="sev min">Minor</span></td><td>New</td></tr>
<tr><td>IA-8</td><td><b>Naming drift</b> across the page: “Free Shipping” / 送料無料, <span lang="ja">「口コミ」</span> / <span lang="ja">「カスタマーレビュー」</span> / “reviews”, <span lang="ja">「Q&amp;A」</span> / <span lang="ja">「よくある質問」</span> / “FAQs”, and two different newsletter offers (10% and 3,000円).</td><td><span class="sev min">Minor</span></td><td>Finding 6</td></tr>
<tr><td>IA-15</td><td><b>Hero button destination.</b> <i>Out of scope in this example: no homepage was reviewed.</i></td><td>—</td><td>—</td></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">Disclosure</td></tr>
<tr><td>IA-9</td><td><b>Purchase-risk information is in four places</b> (ⓘ pills, accordion, product FAQ, external help centre); the arrival date and return shipping cost are in none. One product page has 10 ⓘ triggers, so key facts need a tap each.</td><td><span class="sev maj">Major</span></td><td>Finding 3</td></tr>
<tr><td>IA-10</td><td><b>Five flat accordions</b>, starting with <span lang="ja">「よくある質問」</span>; firmness sits inside the English-titled <span lang="ja">「Specifications」</span>, and <span lang="ja">「保証」</span> holds one line.</td><td><span class="sev maj">Major</span></td><td>Finding 4, App. A2</td></tr>
<tr><td>IA-11</td><td><b>Heading outline is flat</b>: story headings at the same level as comparison and reviews; accordions without headings; an English H3.</td><td><span class="sev min">Minor</span></td><td>New (App.)</td></tr>
<tr><td>IA-12</td><td><b>Sticky in-page anchors run in reverse</b> (Q&amp;A / 口コミ / 詳細) and skip the comparison.</td><td><span class="sev min">Minor</span></td><td>App. A2</td></tr>
</table></div>
</div>
</section>
<section id="proposal">
<div class="sec-head"><div class="no">06</div><div><h2>Proposed structure</h2>
<p class="lead">Each page gets one job, and the decision and trust content moves forward. These are structural directions for the mock-up, within the current template and brand system.</p></div></div>
<div class="sec-body">
<div class="grid2">
<div class="panel"><h3 class="h4">TOP PAGE</h3><p style="font-size:14px;color:var(--text-2);margin:0">Out of scope in this example: no homepage was reviewed.</p></div>
<div class="panel"><h3 class="h4">ソファ CATEGORY PAGE</h3><p style="font-size:14px;color:var(--text-2);margin:0">Out of scope in this example. The menu proposal in section 02 gives each sofa the fixed descriptors (座り心地 · 座面 · price) a category page would reuse.</p></div>
</div>
<div class="panel" style="margin-top:16px"><h3 class="h4">PRODUCT PAGE</h3><ol class="order" style="margin:0">
<li><b>Buy box</b><span>Rating, name, one-line “who it's for”, price (税込), firmness scale, sizes with width and price, named colours, carry-in size, CTA with returns sub-line</span></li>
<li><b>Trust block</b><span>Arrival estimate, returns, warranty, fabric samples, payment, chat, “see it in the showroom”</span></li>
<li><b>Review summary</b><span>Histogram, attribute filters in Japanese, picked reviews</span></li>
<li><b>Compare (short)</b><span>Key rows vs Ren and Mio, link to the full table</span></li>
<li><b>One brand story</b><span>Each claim once</span></li>
<li><b>Details (5 groups) and FAQ</b><span>Size and carry-in, materials and care, delivery and returns, warranty; buying questions first</span></li>
<li><b>Second purchase point, cross-sell</b><span>After the story</span></li></ol></div>
</div>
</section>
<section id="candidates">
<div class="sec-head"><div class="no">07</div><div><h2>Additional findings to confirm</h2>
<p class="lead">Further localisation and UI items found during this analysis. Some may have business reasons we can't see from outside the company, so we would like to confirm them with you before adding them to the localisation review.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl cand idtbl">
<tr><th style="width:52px">#</th><th>Finding</th><th style="width:30%">Japanese context / reference</th><th style="width:80px">Suggested priority</th></tr>
<tr><td>N1</td><td><b>Prices never say 税込.</b> The product page shows <span lang="ja">「124,000円」</span> only, in the buy box, the sticky bar and the comparison.</td><td>Total-price display (総額表示) has been mandatory since April 2021, so the amounts are presumably tax-inclusive already. The label is still the Japanese convention that lets shoppers compare confidently: LOWYA shows <span lang="ja">「（税込）」</span> next to the price, and IKEA Japan <span lang="ja">「消費税込み」</span> under it; Apple Japan does not, so it is a common convention rather than a rule.</td><td>中</td></tr>
<tr><td>N2</td><td><b>Claims have no 注釈 (basis, date).</b> <span lang="ja">「人気No.1」</span> on the main photo and <span lang="ja">「購入者満足度98%」</span> in the story carry no footnote.</td><td>The Consumer Affairs Agency published a report on No.1 claims in 2024 setting out what a fair basis requires, after a series of enforcement orders. Apple Japan footnotes claims throughout and Dyson Japan uses ※ notes. Worth a legal check.</td><td>高い</td></tr>
<tr><td>N3</td><td><b>No route to see the sofa in person from the product page</b> (IA-2).</td><td>Mareo has a showroom, but a shopper deciding on the product page never learns about it. LOWYA, Re:CENO and unico all link a store check next to the cart button.</td><td>中</td></tr>
<tr><td>N4</td><td><b>Support channels are hard to find.</b> Phone appears only in the footer; LINE only as a social icon; FAQ is external. The floating chat button states no hours.</td><td>For a 100,000–150,000円 purchase, a visible contact route reduces hesitation. LINE is a primary customer-service channel in Japan; LOWYA puts it in the menu and its call-centre hours in the footer.</td><td>中</td></tr>
<tr><td>N5</td><td><b>The legal notice is labelled <span lang="ja">「ご利用ガイド・規約」</span></b> instead of the standard <span lang="ja">「特定商取引法に基づく表記」</span>.</td><td>Japanese shoppers and reviewers look for the standard label (LOWYA uses it in its menu and footer). Content is probably compliant; it's a findability issue.</td><td>低い</td></tr>
<tr><td>N6</td><td><b>No express checkout on the product page</b> (Apple Pay, Amazon Pay, 楽天ペイ).</td><td>Checkout not inspected, so unconfirmed. Re:CENO shows R Pay and Amazon Pay under its cart button. Relates to finding 7 (payment visibility).</td><td>Verify</td></tr>
<tr><td>N7</td><td><b>Screen-reader labels.</b> <i>Not assessed beyond the appendix: seven of eight product images lack <code>alt</code> text and the ⓘ icons have no names.</i></td><td>General accessibility; appendix.</td><td>低い</td></tr>
</table></div>
<h3>Context we should keep in mind</h3>
<p style="font-size:14px">Some benchmark patterns exist for reasons that don't apply to Mareo. LOWYA's dense buy box serves a large catalogue, and its postcode delivery date relies on its own logistics data, which Mareo would need before showing a date. Re:CENO's in-room delivery is part of its service, not a display choice. We cite these sites for the specific pattern, not as a whole model. Where the reason does transfer (a sofa has to fit through a Japanese doorway whatever the delivery terms), we say so in the finding.</p>
<h3>Method</h3>
<p style="font-size:14px">Navigation trees were extracted from the DOM. Section maps were measured at 390 × 844 using each section's position and height on the pages (Mareo, LOWYA) on 18 November 2026. Journeys were walked on the page; cart and checkout were not entered. The analysis follows a three-layer IA review (structure, labels, disclosure).</p>
</div>
</section>
</main>
<footer><div class="wrap">Draft prepared by the reviewer for Mareo Japan, 18 November 2026. Third-party sites are referenced for comparison only.</div></footer>
<div id="lb"><img alt=""/></div>
</template>
<template id="t-ja" data-title="Mareo JP — 情報設計（IA）分析（ドラフト）">
<div class="backbar"><div class="wrap"><a href="index.html">← 成果物一覧へ</a><span>成果物 2 / 3 · 情報設計（IA）分析</span></div></div>
<header class="cover">
<div class="wrap">
<div class="kicker">情報設計（IA）分析 · JP.MAREO.EXAMPLE</div>
<h1>マレオのサイト構造はブランドストーリーを軸に作られており、日本の購入者の意思決定の流れに沿っていません</h1>
<p>モバイルでのナビゲーション、ページのレイアウトと情報の階層、ページ間の遷移を分析し、LOWYA、Re:CENO、unico、ACTUS、IKEA Japanと比較しました。あわせて、ローカライズに関する追加の指摘もまとめています。</p>
<dl>
<div><dt>提出先</dt><dd>Mareo Japan</dd></div>
<div><dt>対象範囲</dt><dd>ナビゲーション、検索、Sumiの商品ページ</dd></div>
<div><dt>画面サイズ</dt><dd>モバイル 390 × 844</dd></div>
<div><dt>取得日</dt><dd>2026年11月18日 · 現行サイトと比較対象のサイト</dd></div>
</dl>
<div class="status">ドラフト · サンプル成果物</div>
</div>
</header>
<nav class="toc"><div class="wrap">
<a href="#summary">サマリー</a><a href="#nav">ナビゲーション</a><a href="#pages">ページの階層</a><a href="#journeys">遷移</a><a href="#ia-findings">IAの指摘</a><a href="#proposal">構成案</a><a href="#candidates">追加の指摘</a>
</div></nav>
<main class="wrap">
<section id="summary">
<div class="sec-head"><div class="no">01</div><div><h2>サマリー</h2>
<p class="lead">ページの骨組みはしっかりしています：分かりやすい商品カテゴリ、パンくずリスト、サイズが選択済みの状態で最初の画面のすぐ下にある購入ボタン、追従表示される購入バー。課題はその道のりの周辺にあります。日本の購入者が購入を決める前に必要な情報がページ内に散らばっていたり、アイコンの奥やサイトの外にあったりして、構造の中に決まった置き場所がありません。</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:34%">構造上の課題</th><th>計測した内容</th><th style="width:22%">参考になる日本のサイト</th></tr>
<tr><td><b>1.「自分に合うソファはどれ？」に応える決まった場所がない。</b>比較は商品ページの最後にあり、ナビゲーションにはない。</td><td>「比較」や「選び方」のメニュー項目は0件。3つのソファはメニューに名前だけで並んでいる。比較は12.1画面中の10.1画面目から始まる。</td><td>ACTUS：トップページからリンクされたソファの選び方ガイド</td></tr>
<tr><td><b>2. 安心につながる情報が出てくるのが遅い。</b>配送、返品、レビューが判断の場所から遠い。</td><td>商品ページ：レビューは10.5画面目（LOWYAはレビューのサマリーが4.1画面目）。お届け日はどこにもなく、返品条件は外部のヘルプセンターにある。</td><td>LOWYA：お届け日、保証のタグ、店舗の確認がカートボタンの上にあり、2.4画面以内に収まる</td></tr>
<tr><td><b>3. 商品ページが、事実より先にストーリーを語っている。</b>比較とレビューの前に、ブランドストーリーのセクションが7つある。</td><td>ストーリーが8.3画面分（1.8〜10.1）あり、「究極の座り心地」が2回、「ふんわりやわらか」が3回出てくる。</td><td>LOWYA：購入エリアの後に商品説明、その次にレビュー</td></tr>
<tr><td><b>4. 購入前に試す方法がばらばらになっている。</b>ショールームと生地サンプルが2か所に分かれている。</td><td>ショールームはドロワーのユーティリティのリンク。生地サンプルはボタンの下のⓘ付きのピル。どちらも商品ページの本文からリンクされていない。</td><td>LOWYA、Re:CENO、unico：カートボタンの横に「店舗の展示・在庫を確認する」</td></tr>
</table></div>
<p>ページが長いこと自体は問題ではありません。実際、LOWYAの商品ページはマレオより長くなっています（14.0画面と12.1画面）。違うのは<b>何が先に来るか</b>です。LOWYAは判断と安心のための情報を最初の2.4画面に置き、レビューは4.1画面目から始まります。マレオはその逆になっています。</p>
</div>
</section>
<section id="nav">
<div class="sec-head"><div class="no">02</div><div><h2>ナビゲーション</h2>
<p class="lead">現在公開中のモバイルのドロワーを、ネット販売を主軸とする日本の家具ブランドLOWYAと比較し、構成案を示しました。</p></div></div>
<div class="sec-body">
<div class="trees">
<div class="tree"><h3 class="h4">MAREO JP（現行）</h3><ul>
<li class="g">検索欄「何をお探しですか？」</li>
<li class="g">ソファ <span class="d">(NEW)</span></li><ul><li>すべてのソファ</li><li>ソファ Sumi / Ren / Mio <span class="d">（名前のみ。タグは NEW / SALE）</span></li><li>カバー・パーツ</li><li class="bad">✕ 比較・選び方がない</li></ul>
<li class="g">ソファベッド (SALE) · チェア · テーブル · ラグ・クッション · アクセサリー</li>
<li class="g">ユーティリティのエリア</li><ul><li>MAREOについて</li><li>ショールーム</li><li>法人のお客様</li><li class="bad">よくある質問 ↗（サイトの外へ移動）</li></ul>
<li class="d">6カテゴリ＋ユーティリティのリンク4つ</li>
</ul></div>
<div class="tree"><h3 class="h4">LOWYA</h3><ul>
<li class="g">会員エリア</li><ul><li>ログイン / 新規会員登録 · クーポン一覧 · 最近チェックした商品 · お気に入り商品</li></ul>
<li class="g">商品</li><ul><li>カテゴリーから探す · テイストから探す · 新着商品 · 商品ランキング · オススメ商品 · 詳細検索 · ブランドから探す</li></ul>
<li class="g">イマコレ！</li><ul><li>コーディネート · 特集一覧 · みんなの投稿写真 · まとめ記事</li></ul>
<li class="g">店舗情報</li><ul><li class="ok">ショップリスト</li></ul>
<li class="g">ご利用ガイド</li><ul><li class="ok">はじめての方へ · ご購入方法 · 配送について · お支払い方法 · 返品・交換 · LOWYAポイント · よくあるご質問（自社ドメイン内）</li></ul>
<li class="ok">お問い合わせ · 特定商取引法に基づく表記 · LINE</li>
<li class="d">訪問者がしたいこと（探す、アイデアを得る、店舗に行く、サポートを受ける）でグループ分け</li>
</ul></div>
<div class="tree"><h3 class="h4">マレオへの構成案</h3><ul>
<li class="g">ソファ</li><ul><li class="new">ソファを比べる・選び方</li><li>Sumi <span class="d">かため · ポケットコイル · 98,000円〜</span></li><li>Ren <span class="d">やわらかめ · フェザー · 118,000円〜</span></li><li>Mio <span class="d">ふつう · ウレタン · 86,000円〜</span></li><li>カバー・パーツ</li></ul>
<li class="g">ソファベッド · チェア · テーブル</li>
<li class="g">ラグ・クッション・アクセサリー <span class="d">（統合）</span></li>
<li class="g new">試す・見る</li><ul><li>ショールーム</li><li>生地サンプル（無料）</li></ul>
<li class="g new">サポート</li><ul><li>配送・搬入</li><li>返品・保証</li><li>よくある質問（自社ドメイン内）</li><li>お問い合わせ（電話 · チャット · LINE）</li></ul>
<li class="g">MAREOについて · 法人のお客様</li>
</ul></div>
</div>
<h3>比較から分かること</h3>
<div class="scroll"><table class="tbl">
<tr><th style="width:28%">問い</th><th>Mareo JP</th><th>LOWYA</th></tr>
<tr><td>メニューはどう分かれているか</td><td class="bad">商品の種類別（6カテゴリ）。それ以外はブランド、ショールーム、法人向け、ヘルプが混在するユーティリティのエリア</td><td class="ok">目的別：商品を探す、アイデアを得る、店舗に行く、サポートを受ける</td></tr>
<tr><td>メニューから商品の違いが分かるか</td><td class="bad">分からない。Sumi、Ren、Mioは名前だけで、タグは新しさとセールを示すだけ（NEW、SALE）</td><td>一部は分かる：ランキングやおすすめの一覧、テイスト別の絞り込みと詳細検索</td></tr>
<tr><td>どこで比較やおすすめを得られるか</td><td class="bad">メニューにはない。商品ページの10.1画面目だけ</td><td>メニューに「商品ランキング」と「オススメ商品」、商品ページに「こちらもよく比較されています」</td></tr>
<tr><td>どこで試せるか</td><td class="bad">ショールームはユーティリティのエリア、生地サンプルはⓘ付きのピルの奥。どちらも商品ページからリンクされていない</td><td class="ok">メニューに店舗情報、カートボタンの横に店舗の確認</td></tr>
<tr><td>どこでヘルプを得られるか</td><td class="bad">FAQはサイトの外。電話番号はフッターだけ、LINEはSNSのアイコンだけ</td><td class="ok">ご利用ガイドが自社ドメイン内でグループ分けされている。LINEはメニューにある</td></tr>
</table></div>
</div>
</section>
<section id="pages">
<div class="sec-head"><div class="no">03</div><div><h2>ページのレイアウトと階層</h2>
<p class="lead">各バーはモバイル幅での1ページで、セクションごとに計測しています。色は各セクションの役割を示します。問題はページの長さではなく、判断と安心のための情報がどこにあるかです。</p></div></div>
<div class="sec-body">
<div class="legend-row"><span><i class="k-decide"></i>判断（商品、選択、比較、購入）</span><span><i class="k-trust"></i>安心（配送、返品、レビュー、サポート）</span><span><i class="k-detail"></i>商品の詳細</span><span><i class="k-brand"></i>ブランド／特長紹介</span><span><i class="k-cat"></i>カタログの列</span><span><i class="k-promo"></i>プロモーション</span><span><i class="k-help"></i>ヘルプ／FAQ</span><span><i class="k-foot"></i>フッター</span></div>
<h3>各ページの役割</h3>
<p style="font-size:14px">訪問者がどのように来て、その時点で何を必要としているかに基づいた、各ページが果たすべき役割です。以下のマップはこれを基準に評価しています。</p>
<div class="scroll"><table class="tbl">
<tr><th style="width:18%">ページ</th><th style="width:30%">訪問者の流入元</th><th>ここでしたいこと</th></tr>
<tr><td><b>トップページ</b></td><td>ブランド名での検索、広告、SNS、再訪問</td><td>マレオが何かを理解し、信頼できると分かり、合うソファにすばやくたどり着く。<i>この事例では対象外：トップページはレビューしていません。</i></td></tr>
<tr><td><b>ソファのカテゴリ</b></td><td>メニュー</td><td>3つのソファを比較して1つ選ぶ。<i>この事例では対象外です。</i></td></tr>
<tr><td><b>ソファの商品ページ</b></td><td>商品名での検索、広告、メニュー</td><td>サイズとカラーを選び、座り心地を確かめ、部屋と玄関に入るかを確認し、配送と返品を確認し、レビューを読んで購入する</td></tr>
<tr><td><b>検索</b></td><td>メニューのドロワー（モバイル）</td><td>商品、またはサービスに関する疑問（返品、配送、支払い）の答えを見つける</td></tr>
</table></div>
<h3>トップページ</h3>
<p class="note" style="font-size:14px;color:var(--text-2)">この事例では対象外です。レビューの対象は商品ページ、ヘッダー、メニュー、検索で、トップページのマップを作る場合は、同じ方法でマレオとLOWYAのトップページを比較します。</p>
<h3>商品ページ</h3>
<div class="pmap"><div class="r"><b>Mareo JP<small>Sumi · 12.1画面</small></b><div class="bar"><div class="s k-decide" style="left:0.00%;width:10.20%" title="購入エリア（0〜1.43）">購入エリア</div><div class="s k-detail" style="left:10.41%;width:2.35%" title="アコーディオン5つ（1.46〜1.79）"></div><div class="s k-brand" style="left:12.77%;width:8.42%" title="ストーリー（1.79〜2.97）">ストーリー</div><div class="s k-brand" style="left:21.18%;width:4.78%" title="詳細のタイル（2.97〜3.64）"></div><div class="s k-brand" style="left:25.96%;width:9.13%" title="座面のストーリー（3.64〜4.92）">座り心地</div><div class="s k-brand" style="left:35.09%;width:7.28%" title="選ばれる理由（訴求）（4.92〜5.94）"></div><div class="s k-brand" style="left:42.37%;width:9.20%" title="毎日の使い方（5.94〜7.23）">日常使い</div><div class="s k-brand" style="left:51.57%;width:11.48%" title="つくり（7.23〜8.84）">つくり</div><div class="s k-brand" style="left:63.05%;width:9.13%" title="耐久性（8.84〜10.12）"></div><div class="s k-decide" style="left:72.18%;width:2.57%" title="比較（10.12〜10.48）"></div><div class="s k-trust" style="left:74.75%;width:5.92%" title="レビュー（10.48〜11.31）"></div><div class="s k-help" style="left:80.67%;width:1.78%" title="FAQ（11.31〜11.56）"></div><div class="s k-foot" style="left:82.45%;width:3.71%" title="フッター（11.56〜12.08）"></div></div></div><div class="r"><b>LOWYA<small>ベルファ 3人掛けカウチソファ · 14.0画面</small></b><div class="bar"><div class="s k-decide" style="left:0.00%;width:10.27%" title="購入エリア（0〜1.44）">購入エリア</div><div class="s k-trust" style="left:10.27%;width:3.21%" title="お届け日、店舗（1.44〜1.89）"></div><div class="s k-decide" style="left:13.48%;width:4.14%" title="カート（1.89〜2.47）"></div><div class="s k-detail" style="left:17.62%;width:5.92%" title="商品説明（2.47〜3.3）"></div><div class="s k-brand" style="left:23.54%;width:4.99%" title="部屋への置き方（3.3〜4.0）"></div><div class="s k-detail" style="left:28.53%;width:0.50%" title="仕様（4.0〜4.07）"></div><div class="s k-trust" style="left:29.03%;width:18.76%" title="レビュー（4.07〜6.7）">レビュー</div><div class="s k-brand" style="left:47.79%;width:2.35%" title="投稿写真（6.7〜7.03）"></div><div class="s k-cat" style="left:50.14%;width:9.56%" title="シリーズ、関連商品（7.03〜8.37）">シリーズ、関連商品</div><div class="s k-cat" style="left:59.70%;width:4.49%" title="比較されている商品（8.37〜9.0）"></div><div class="s k-foot" style="left:64.19%;width:35.81%" title="その他の商品、フッター（9.0〜14.02）">その他の商品、フッター</div></div></div><div class="axis"><span></span><div><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span><span>12</span><span>14</span></div></div><div class="axis"><span></span><span style="text-align:right">390 × 844での画面数</span></div></div>
<ul style="font-size:14px">
<li>マレオ：購入エリア、アコーディオン5つ、ブランドストーリーの7セクション（1.8〜10.1）の順。同じ訴求が何度も出てきます。比較は10.1画面目、レビューは10.5画面目から始まります。</li>
<li>LOWYA：評価、ギャラリー、選択肢、価格（税込）、保証と配送のタグ、郵便番号によるお届け日、店舗の確認とカートが、すべて2.4画面以内にあります。その後に商品説明が続き、レビューは4.1画面目からです。LOWYAの3画面目以降の位置は、遅延読み込みのため読み込むたびに数百ピクセルずれます。</li>
</ul>
<h3>カテゴリページ（ソファ）</h3>
<p class="note" style="font-size:14px;color:var(--text-2)">この事例では対象外です。</p>
<h3>見出しの階層（Sumiの商品ページ）</h3>
<ul style="font-size:14px">
<li>商品名はページのH1になっており、これは適切です。</li>
<li>ストーリーの7つの見出しは、「モデルを比較」「カスタマーレビュー」「FAQs」と同じH2の階層にあり、判断のための情報がストーリーと同じ重みしか持っていません。4つのタイルにはH3があり、そのうち1つは英語（“Height Adjustable”）です。</li>
<li>アコーディオンには見出しがまったくないため、仕様、配送、保証のセクションは、アウトラインやスクリーンリーダーの見出し一覧に出てきません。</li>
</ul>
</div>
</section>
<section id="journeys">
<div class="sec-head"><div class="no">04</div><div><h2>主な遷移（タスク別）</h2>
<p class="lead">日本のソファ購入者がよく行う8つのタスクを、モバイルで実際にたどりました。赤いステップは使いにくさのある箇所、緑のステップは日本のサイトが同じステップをどう扱っているかを示します。</p></div></div>
<div class="sec-body">
<div class="task"><h3>T1 ·「3つのソファのうち、どれが自分に合う？」 <span class="metric">メニューからの導線なし</span></h3>
<div class="lbl">マレオ</div>
<div class="flow"><span class="st">メニュー</span><span class="ar">→</span><span class="st">ソファ</span><span class="ar">→</span><span class="st x">Sumi / Ren / Mio：名前のみ</span><span class="ar">→</span><span class="st">商品ページ</span></div>
<div class="flow"><span class="st">商品ページ</span><span class="ar">→</span><span class="st x">8.3画面分のストーリーをスクロール</span><span class="ar">→</span><span class="st x">「モデルを比較」：硬さは4/5、2/5、3/5</span></div>
<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;margin-top:10px"><figure style="flex:0 1 300px"><img data-img="0" src="" alt=""/></figure>
<p class="note" style="margin:0;flex:1 1 280px">3つのソファの主な違いは座り心地と構造（ポケットコイル、フェザー、ウレタン）で、これはまさに購入者が選ぶために必要な情報です。しかし、どれもメニューには出てきません。3つが並ぶのは商品ページの最後にある比較だけで、そこでも硬さは言葉ではなく5段階の数字で示されています。</p></div>
<div class="lbl">日本のサイトの例</div>
<div class="flow"><span class="st g">ACTUS：「ソファの選び方」ガイド</span><span class="st g">IKEA Japan：ソファのカードに「硬さ」を言葉で表示</span><span class="st g">LOWYA：「こちらもよく比較されています」</span></div>
</div>
<div class="task"><h3>T2 ·「いつ届く？気に入らなかったら？」 <span class="metric">確認する場所が4か所</span></h3>
<div class="lbl">マレオ（商品ページから）</div>
<div class="flow"><span class="st">ボタンの下のピル</span><span class="ar">→</span><span class="st">返品保証のⓘ</span><span class="ar">→</span><span class="st">アコーディオン「お届け・返品」</span><span class="ar">→</span><span class="st x">お届け日：「ご注文確認メールにてお知らせ」</span><span class="ar">→</span><span class="st x">返品条件：外部のヘルプセンター</span><span class="ar">→</span><span class="st x">返送料：どこにもない</span></div>
<div class="lbl">日本のサイトの例</div>
<div class="flow"><span class="st g">LOWYA：カートボタンの上に郵便番号ごとのお届け日</span><span class="st g">IKEA Japan：ボタンの下に365日間の返品</span><span class="st g">unico：ボタンの下に「お届け日の目安」</span></div>
</div>
<div class="task"><h3>T3 · Sumiの3人掛け、グレーを購入する <span class="metric">カートまで2タップ</span></h3>
<div class="lbl">マレオ</div>
<div class="flow"><span class="st">商品ページ</span><span class="ar">→</span><span class="st g">サイズ（3人掛けが選択済み）</span><span class="ar">→</span><span class="st x">カラー：名前のないスウォッチ</span><span class="ar">→</span><span class="st g">「カートに入れる」は1.3画面目</span><span class="ar">→</span><span class="st">カート</span></div>
<p class="note">最短の道のりはうまく機能しており、追従する購入バーでボタンにいつでも手が届きます。課題はタップ数ではなく、購入者がボタンの前で迷っていること（T1、T2、T6）です。カートと購入手続きには、このレビューでは進んでいません。</p>
</div>
<div class="task"><h3>T4 ·「どこかで先に座ってみられる？」 <span class="metric">ユーティリティのエリアのみ</span></h3>
<div class="lbl">マレオ</div>
<div class="flow"><span class="st">メニュー</span><span class="ar">→</span><span class="st x">「ショールーム」（ユーティリティのエリア）</span></div>
<div class="flow"><span class="st">商品ページ</span><span class="ar">→</span><span class="st x">ショールームへのリンクなし</span><span class="ar">→</span><span class="st">「生地サンプル無料」のⓘ付きピル（生地のみ）</span></div>
<div class="lbl">日本のサイトの例</div>
<div class="flow"><span class="st g">LOWYA：カートボタンの横に「店舗の展示・在庫を確認する」</span><span class="st g">Re:CENO：カートボタンの下に「店舗の展示を確認する」</span><span class="st g">unico：「店舗の在庫を確認する」</span></div>
</div>
<div class="task"><h3>T5 ·「買う前に聞きたいことがある」 <span class="metric">サイトの外へ移動</span></h3>
<div class="lbl">マレオ</div>
<div class="flow"><span class="st">フッターの「よくある質問 ↗」</span><span class="ar">→</span><span class="st x">外部のヘルプセンター</span></div>
<div class="flow"><span class="st">商品のFAQ（11.3画面目）</span><span class="ar">→</span><span class="st x">「詳しくはヘルプセンターをご覧ください」</span></div>
<div class="flow"><span class="st">電話 0120-000-000</span><span class="ar">→</span><span class="st x">フッターにしかない（11.6画面目）</span></div>
<div class="flow"><span class="st">フローティングのチャットボタン</span><span class="ar">→</span><span class="st x">対応時間の記載なし</span></div>
<div class="lbl">日本のサイトの例</div>
<div class="flow"><span class="st g">LOWYA：ご利用ガイド（配送、支払い、返品・交換、FAQ）が自社ドメイン内でメニューにあり、LINEもメニューにある</span></div>
</div>
<div class="task"><h3>T6 ·「玄関から搬入できる？」 <span class="metric">ページに答えがない</span></h3>
<div class="lbl">マレオ</div>
<div class="flow"><span class="st">サイズ「3人掛け」</span><span class="ar">→</span><span class="st">アコーディオン「サイズ」で組み立て後のサイズ</span><span class="ar">→</span><span class="st x">梱包サイズも箱の数もない</span><span class="ar">→</span><span class="st x">FAQ「玄関から搬入できますか？」→「サイズ表をご確認ください」</span></div>
<p class="note">FAQは、答えの載っていない表へ購入者を戻しています。配送に部屋までの搬入が含まれるかどうかも、どこにも書かれていません。</p>
<div class="lbl">日本のサイトの例</div>
<div class="flow"><span class="st g">Re:CENO：カートボタンの下に「搬入経路を確認する」＋梱包サイズ</span><span class="st g">LOWYA：「複数梱包商品」のタグ＋梱包サイズと搬入経路の注意書き</span></div>
</div>
<div class="task"><h3>T7 · トップページのヒーローからソファへ <span class="metric">対象外</span></h3>
<p class="note">この事例では対象外：トップページはレビューしていません。フルのレビューでは、この遷移で、ヒーローが行き先を示しているか、正しい選択肢にたどり着くかを確認します。</p>
</div>
<div class="task"><h3>T8 · 検索で「返品の条件は？」 <span class="metric">サイト内に答えがない</span></h3>
<div class="lbl">マレオ（モバイル）</div>
<div class="flow"><span class="st">メニュー（検索はドロワーの中だけ）</span><span class="ar">→</span><span class="st">「返品」で検索</span><span class="ar">→</span><span class="st x">商品3件、規約のページなし</span><span class="ar">→</span><span class="st x">FAQは検索の届かない外部のヘルプセンター</span></div>
<div class="lbl">日本のサイトの例</div>
<div class="flow"><span class="st g">IKEA Japan：「返品」→ カスタマーサービスの情報が先頭に（114件）</span></div>
</div>
</div>
</section>
<section id="ia-findings">
<div class="sec-head"><div class="no">05</div><div><h2>IAの指摘</h2>
<p class="lead">レイヤー（構造、ラベル、情報の出し方）ごとの構造上の指摘です。右端の列は、ローカライズ・デザインレビューと重なる指摘を示しています。</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl idtbl">
<tr><th style="width:52px">#</th><th>指摘</th><th style="width:90px">重要度</th><th style="width:110px">レビューとの対応</th></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">構造</td></tr>
<tr><td>IA-1</td><td><b>「選ぶ」というタスクの決まった置き場所がない。</b>比較と選び方のアドバイスがメニューになく、唯一の比較は商品ページの10.1画面目にある。</td><td><span class="sev maj">重大</span></td><td>指摘10</td></tr>
<tr><td>IA-2</td><td><b>購入前に試す導線が分かれている。</b>ショールーム（ユーティリティのリンク）と生地サンプル（ⓘ付きのピル）。どちらも商品ページの本文からリンクされていない。</td><td><span class="sev maj">重大</span></td><td>新規</td></tr>
<tr><td>IA-3</td><td><b>トップページのセクション。</b><i>この事例では対象外：トップページはレビューしていません。</i></td><td>—</td><td>—</td></tr>
<tr><td>IA-4</td><td><b>カテゴリページ。</b><i>この事例では対象外：カテゴリページはレビューしていません。</i></td><td>—</td><td>—</td></tr>
<tr><td>IA-5</td><td><b>商品ページの順序が、判断ではなくブランドストーリーに沿っている。</b>ストーリーの7セクション（8.3画面分、訴求の繰り返しあり）が比較とレビューの前にある。</td><td><span class="sev maj">重大</span></td><td>指摘12</td></tr>
<tr><td>IA-13</td><td><b>検索が商品にしか応えず、モバイルでは隠れている。</b>サービスに関する質問（返品、配送、ペイペイ）には商品が返ってくる。FAQは外部のヘルプセンターにあり、モバイルでは検索がメニューのドロワーの中にしかない。</td><td><span class="sev maj">重大</span></td><td>指摘13</td></tr>
<tr><td>IA-14</td><td><b>1つの商品が複数のURLに分かれている。</b><i>レビューしたページでは見られない：サイズとカラーはページ内の選択肢。ほかの商品ページは対象外。</i></td><td>—</td><td>—</td></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">ラベル</td></tr>
<tr><td>IA-6</td><td><b>メニューの項目に、選ぶ理由が書かれていない。</b>Sumi、Ren、Mioは名前だけで、タグは新しさとセールを示すだけ（NEW、SALE）。</td><td><span class="sev maj">重大</span></td><td>指摘10</td></tr>
<tr><td>IA-7</td><td><b>ユーティリティのエリアに4種類のリンクが混在</b>（ブランド、ショールーム、法人向け、ヘルプ）。FAQはアイコンだけを目印に自社ドメインの外へ移動する。</td><td><span class="sev min">軽微</span></td><td>新規</td></tr>
<tr><td>IA-8</td><td><b>名称の表記ゆれ</b>がページ内にある：“Free Shipping”／送料無料、「口コミ」／「カスタマーレビュー」／“reviews”、「Q&amp;A」／「よくある質問」／“FAQs”、そして2種類のメルマガ特典（10%と3,000円）。</td><td><span class="sev min">軽微</span></td><td>指摘6</td></tr>
<tr><td>IA-15</td><td><b>ヒーローのボタンの行き先。</b><i>この事例では対象外：トップページはレビューしていません。</i></td><td>—</td><td>—</td></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">情報の出し方</td></tr>
<tr><td>IA-9</td><td><b>購入のリスクに関する情報が4か所にある</b>（ⓘ付きのピル、アコーディオン、商品のFAQ、外部のヘルプセンター）。お届け日と返送料はどこにもない。1つの商品ページにⓘが10個あり、重要な事実を見るたびにタップが必要。</td><td><span class="sev maj">重大</span></td><td>指摘3</td></tr>
<tr><td>IA-10</td><td><b>フラットなアコーディオンが5つ</b>あり、先頭は「よくある質問」。硬さは英語タイトルの「Specifications」の中にあり、「保証」の中身は1行だけ。</td><td><span class="sev maj">重大</span></td><td>指摘4、付録A2</td></tr>
<tr><td>IA-11</td><td><b>見出しのアウトラインがフラット</b>：ストーリーの見出しが比較やレビューと同じ階層にあり、アコーディオンには見出しがなく、英語のH3がある。</td><td><span class="sev min">軽微</span></td><td>新規（付録）</td></tr>
<tr><td>IA-12</td><td><b>追従するページ内リンクの順序が逆</b>（Q&amp;A / 口コミ / 詳細）で、比較が抜けている。</td><td><span class="sev min">軽微</span></td><td>付録A2</td></tr>
</table></div>
</div>
</section>
<section id="proposal">
<div class="sec-head"><div class="no">06</div><div><h2>構成案</h2>
<p class="lead">各ページに役割を1つずつ持たせ、判断と安心のための情報を前に出します。現在のテンプレートとブランドシステムの範囲内での、モックに向けた構造の方向性です。</p></div></div>
<div class="sec-body">
<div class="grid2">
<div class="panel"><h3 class="h4">トップページ</h3><p style="font-size:14px;color:var(--text-2);margin:0">この事例では対象外：トップページはレビューしていません。</p></div>
<div class="panel"><h3 class="h4">ソファのカテゴリページ</h3><p style="font-size:14px;color:var(--text-2);margin:0">この事例では対象外です。セクション02のメニューの構成案で各ソファに付けた決まった形式の説明（座り心地 · 座面 · 価格）は、カテゴリページでもそのまま使えます。</p></div>
</div>
<div class="panel" style="margin-top:16px"><h3 class="h4">商品ページ</h3><ol class="order" style="margin:0">
<li><b>購入エリア</b><span>評価、商品名、どんな人に向いているかの1行、価格（税込）、硬さの尺度、幅と価格付きのサイズ、名前付きのカラー、搬入サイズ、返品保証の補足付きの購入ボタン</span></li>
<li><b>安心ブロック</b><span>お届け目安、返品、保証、生地サンプル、支払い、チャット、「ショールームで見る」</span></li>
<li><b>レビューのサマリー</b><span>評価分布、日本語の属性での絞り込み、厳選したレビュー</span></li>
<li><b>比較（簡易）</b><span>RenとMioとの主な項目、比較表全体へのリンク</span></li>
<li><b>ブランドストーリーは1つ</b><span>各訴求は1回ずつ</span></li>
<li><b>詳細（5グループ）とFAQ</b><span>サイズと搬入、素材とお手入れ、配送と返品、保証。購入に関する質問を先に</span></li>
<li><b>2つ目の購入ポイント、関連商品</b><span>ストーリーの後</span></li></ol></div>
</div>
</section>
<section id="candidates">
<div class="sec-head"><div class="no">07</div><div><h2>ご確認いただきたい追加の指摘</h2>
<p class="lead">この分析の中で見つかった、ローカライズとUIに関する追加の項目です。社外からは見えない事業上の理由がある可能性もあるため、ローカライズ・デザインレビューに加える前に、御社にご確認いただきたいと考えています。</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl cand idtbl">
<tr><th style="width:52px">#</th><th>指摘</th><th style="width:30%">日本での背景／参考</th><th style="width:80px">推奨する優先度</th></tr>
<tr><td>N1</td><td><b>価格に「税込」の表記がない。</b>商品ページでは、購入エリア、追従する購入バー、比較のどこでも「124,000円」とだけ表示されている。</td><td>2021年4月から総額表示が義務化されているため、金額はすでに税込と考えられます。それでもこの表記は、購入者が安心して比較できるようにする日本の慣習です。LOWYAは価格の横に「（税込）」、IKEA Japanは価格の下に「消費税込み」と表示しています。Apple Japanは表示していないため、ルールではなく一般的な慣習です。</td><td>中</td></tr>
<tr><td>N2</td><td><b>訴求に注釈（根拠、時期）がない。</b>メイン写真の「人気No.1」と、ストーリーの「購入者満足度98%」に注釈がない。</td><td>一連の措置命令を受けて、消費者庁は2024年にNo.1表示に関する報告書を公表し、適正な根拠に必要な条件を示しています。Apple Japanは全体を通して訴求に注釈を付け、Dyson Japanは※の注記を使っています。法務での確認をおすすめします。</td><td>高い</td></tr>
<tr><td>N3</td><td><b>商品ページから、ソファを実際に見に行く導線がない</b>（IA-2）。</td><td>マレオにはショールームがありますが、商品ページで検討している購入者はそれを知る機会がありません。LOWYA、Re:CENO、unicoはいずれも、カートボタンの横に店舗の確認へのリンクを置いています。</td><td>中</td></tr>
<tr><td>N4</td><td><b>サポートの窓口が見つけにくい。</b>電話はフッターだけ、LINEはSNSのアイコンだけ、FAQは外部。フローティングのチャットボタンには対応時間の記載がない。</td><td>100,000〜150,000円の買い物では、問い合わせ先が見えることでためらいが減ります。LINEは日本の主要なカスタマーサービスの窓口の1つで、LOWYAはメニューにLINEを、フッターにコールセンターの受付時間を載せています。</td><td>中</td></tr>
<tr><td>N5</td><td><b>法定表記のラベルが「ご利用ガイド・規約」</b>になっており、標準の「特定商取引法に基づく表記」になっていない。</td><td>日本の購入者やレビュアーは、標準のラベルを探します（LOWYAはメニューとフッターで使用）。内容はおそらく要件を満たしており、見つけやすさの問題です。</td><td>低い</td></tr>
<tr><td>N6</td><td><b>商品ページにエクスプレスチェックアウトがない</b>（Apple Pay、Amazon Pay、楽天ペイ）。</td><td>購入手続きは確認していないため、未確認です。Re:CENOはカートボタンの下にR PayとAmazon Payを表示しています。指摘7（支払い方法の見せ方）に関連します。</td><td>要確認</td></tr>
<tr><td>N7</td><td><b>スクリーンリーダー用のラベル。</b><i>付録以上の評価はしていません：商品画像8枚のうち7枚に<code>alt</code>テキストがなく、ⓘのアイコンには名前がありません。</i></td><td>一般的なアクセシビリティ。付録へ。</td><td>低い</td></tr>
</table></div>
<h3>念頭に置くべき背景</h3>
<p style="font-size:14px">ベンチマークのパターンの中には、マレオには当てはまらない理由で存在するものもあります。LOWYAの情報量の多い購入エリアは大規模なカタログのためのもので、郵便番号ごとのお届け日は自社の物流データに基づいています。マレオがお届け日を表示するには、まずそのデータが必要です。Re:CENOの部屋までの搬入はサービスの一部で、表示上の工夫ではありません。これらのサイトは、全体のモデルとしてではなく、特定のパターンの例として挙げています。理由がマレオにも当てはまる場合（配送の条件がどうであれ、ソファは日本の玄関を通らなければならない）は、指摘の中でそのように述べています。</p>
<h3>進め方</h3>
<p style="font-size:14px">ナビゲーションの構造はDOMから抽出しました。セクションのマップは、2026年11月18日にページ（マレオ、LOWYA）で、390 × 844での各セクションの位置と高さを計測して作成しています。遷移はページで実際にたどり、カートと購入手続きには進んでいません。分析は3つのレイヤー（構造、ラベル、情報の出し方）に分けたIAレビューの手法に沿っています。</p>
</div>
</section>
</main>
<footer><div class="wrap">レビュー担当者作成、Mareo Japan向けドラフト、2026年11月18日。他社のサイトは比較のためにのみ参照しています。</div></footer>
<div id="lb"><img alt=""/></div>
</template>

<noscript><style>#app{display:none}</style>

<div class="backbar"><div class="wrap"><a href="index.html">← All deliverables</a><span>DELIVERABLE 2 OF 3 · INFORMATION ARCHITECTURE</span></div></div>
<header class="cover">
<div class="wrap">
<div class="kicker">INFORMATION ARCHITECTURE ANALYSIS · JP.MAREO.EXAMPLE</div>
<h1>Mareo's structure is built around the brand story, not around how a Japanese shopper decides</h1>
<p>An analysis of navigation, page layout and hierarchy, and the page-to-page journey (遷移) on mobile, benchmarked against LOWYA, Re:CENO, unico, ACTUS and IKEA Japan. It also lists additional localisation findings for review.</p>
<dl>
<div><dt>FOR</dt><dd>Mareo Japan</dd></div>
<div><dt>SCOPE</dt><dd>Navigation, search, Sumi product page</dd></div>
<div><dt>VIEWPORT</dt><dd>Mobile 390 × 844</dd></div>
<div><dt>CAPTURED</dt><dd>18 November 2026 · current and benchmark sites</dd></div>
</dl>
<div class="status">DRAFT · SAMPLE DELIVERABLE</div>
</div>
</header>
<nav class="toc"><div class="wrap">
<a href="#summary">Summary</a><a href="#nav">Navigation</a><a href="#pages">Page hierarchy</a><a href="#journeys">Journeys</a><a href="#ia-findings">IA findings</a><a href="#proposal">Proposed structure</a><a href="#candidates">Additional findings</a>
</div></nav>
<main class="wrap">
<section id="summary">
<div class="sec-head"><div class="no">01</div><div><h2>Summary</h2>
<p class="lead">The page's frame is sound: clear product categories, breadcrumbs, a purchase button just below the first screen with the size preselected, and a sticky purchase bar. The problems sit around that path. The information a Japanese shopper needs before committing is spread across the page, behind icons or off the site, and the structure gives it no fixed place.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:34%">Structural issue</th><th>What we measured</th><th style="width:22%">Best Japanese reference</th></tr>
<tr><td><b>1. “Which sofa is right for me?” has no home.</b> Comparison sits at the end of the product page, not in the navigation.</td><td>0 menu entries for 比較 or 選び方. The three sofas appear in the menu by name only. The comparison starts at screen 10.1 of 12.1.</td><td>ACTUS: a sofa buying guide linked from the homepage</td></tr>
<tr><td><b>2. Trust content arrives late.</b> Delivery, returns and reviews are far from the decision point.</td><td>Product page: reviews at screen 10.5 (LOWYA: review summary at 4.1). No arrival date anywhere; return conditions on an external help centre.</td><td>LOWYA: delivery date, guarantee tags and store check above the cart button, within 2.4 screens</td></tr>
<tr><td><b>3. The product page tells the story before the facts.</b> Seven brand-story sections come before comparison and reviews.</td><td>8.3 screens of story (1.8–10.1), with <span lang="ja">「究極の座り心地」</span> twice and <span lang="ja">「ふんわりやわらか」</span> three times.</td><td>LOWYA: description after the purchase area, reviews next</td></tr>
<tr><td><b>4. Ways to try before buying are split up.</b> Showroom and fabric samples sit in two places.</td><td>The showroom is a utility link in the drawer. Fabric samples are an ⓘ pill under the button. Neither is linked from the product page body.</td><td>LOWYA, Re:CENO, unico: <span lang="ja">「店舗の展示・在庫を確認する」</span> next to the cart button</td></tr>
</table></div>
<p>A long page is not the problem in itself: LOWYA's product page is longer than Mareo's (14.0 vs 12.1 screens). What differs is <b>what comes first</b>. LOWYA puts the decision and trust content in the first 2.4 screens and its reviews at 4.1. Mareo does the reverse.</p>
</div>
</section>
<section id="nav">
<div class="sec-head"><div class="no">02</div><div><h2>Navigation</h2>
<p class="lead">Mobile drawer as shipped, compared with LOWYA, an online-first Japanese furniture retailer, and a proposed structure.</p></div></div>
<div class="sec-body">
<div class="trees">
<div class="tree"><h3 class="h4">MAREO JP (AS SHIPPED)</h3><ul>
<li class="g">Search field <span lang="ja">「何をお探しですか？」</span></li>
<li class="g">ソファ <span class="d">(NEW)</span></li><ul><li>すべてのソファ</li><li>ソファ Sumi / Ren / Mio <span class="d">(names only; tags NEW / SALE)</span></li><li>カバー・パーツ</li><li class="bad">✕ no 比較 or 選び方</li></ul>
<li class="g">ソファベッド (SALE) · チェア · テーブル · ラグ・クッション · アクセサリー</li>
<li class="g">Utility area</li><ul><li>MAREOについて</li><li>ショールーム</li><li>法人のお客様</li><li class="bad">よくある質問 ↗ (leaves the site)</li></ul>
<li class="d">6 categories + 4 utility links</li>
</ul></div>
<div class="tree"><h3 class="h4">LOWYA</h3><ul>
<li class="g">Member area</li><ul><li>ログイン / 新規会員登録 · クーポン一覧 · 最近チェックした商品 · お気に入り商品</li></ul>
<li class="g">商品</li><ul><li>カテゴリーから探す · テイストから探す · 新着商品 · 商品ランキング · オススメ商品 · 詳細検索 · ブランドから探す</li></ul>
<li class="g">イマコレ！</li><ul><li>コーディネート · 特集一覧 · みんなの投稿写真 · まとめ記事</li></ul>
<li class="g">店舗情報</li><ul><li class="ok">ショップリスト</li></ul>
<li class="g">ご利用ガイド</li><ul><li class="ok">はじめての方へ · ご購入方法 · 配送について · お支払い方法 · 返品・交換 · LOWYAポイント · よくあるご質問 (on-domain)</li></ul>
<li class="ok">お問い合わせ · 特定商取引法に基づく表記 · LINE</li>
<li class="d">Groups organised by what the visitor wants to do: find, get ideas, visit, get help</li>
</ul></div>
<div class="tree"><h3 class="h4">PROPOSED FOR MAREO</h3><ul>
<li class="g">ソファ</li><ul><li class="new">ソファを比べる・選び方</li><li>Sumi <span class="d">かため · ポケットコイル · 98,000円〜</span></li><li>Ren <span class="d">やわらかめ · フェザー · 118,000円〜</span></li><li>Mio <span class="d">ふつう · ウレタン · 86,000円〜</span></li><li>カバー・パーツ</li></ul>
<li class="g">ソファベッド · チェア · テーブル</li>
<li class="g">ラグ・クッション・アクセサリー <span class="d">(merged)</span></li>
<li class="g new">試す・見る</li><ul><li>ショールーム</li><li>生地サンプル（無料）</li></ul>
<li class="g new">サポート</li><ul><li>配送・搬入</li><li>返品・保証</li><li>よくある質問 (on-domain)</li><li>お問い合わせ (電話 · チャット · LINE)</li></ul>
<li class="g">MAREOについて · 法人のお客様</li>
</ul></div>
</div>
<h3>What the comparison shows</h3>
<div class="scroll"><table class="tbl">
<tr><th style="width:28%">Question</th><th>Mareo JP</th><th>LOWYA</th></tr>
<tr><td>How is the menu organised?</td><td class="bad">By product type (6 categories), with the rest in a utility area mixing brand, showroom, B2B and help</td><td class="ok">By intent: find products, get ideas, visit a store, get help</td></tr>
<tr><td>Can I tell the products apart from the menu?</td><td class="bad">No. Sumi, Ren and Mio are names only; tags describe newness and sales (NEW, SALE)</td><td>Partly: ranking and recommendation lists; filters by taste and detailed search</td></tr>
<tr><td>Where do I compare or get a recommendation?</td><td class="bad">Not in the menu; only at screen 10.1 of a product page</td><td><span lang="ja">「商品ランキング」</span> and <span lang="ja">「オススメ商品」</span> in the menu; <span lang="ja">「こちらもよく比較されています」</span> on product pages</td></tr>
<tr><td>Where can I try it?</td><td class="bad">Showroom in the utility area; fabric samples behind an ⓘ pill; neither linked from the product page</td><td class="ok">店舗情報 in the menu, and a store check next to the cart button</td></tr>
<tr><td>Where do I get help?</td><td class="bad">FAQ leaves the site; phone number only in the footer; LINE only as a social icon</td><td class="ok">ご利用ガイド on-domain, grouped; LINE in the menu</td></tr>
</table></div>
</div>
</section>
<section id="pages">
<div class="sec-head"><div class="no">03</div><div><h2>Page layout and hierarchy</h2>
<p class="lead">Each bar is one page at mobile width, measured section by section. Colours show what each section is for. The question is not how long the page is but where the decision and trust content sit.</p></div></div>
<div class="sec-body">
<div class="legend-row"><span><i class="k-decide"></i>Decide (products, choice, compare, buy)</span><span><i class="k-trust"></i>Trust (delivery, returns, reviews, support)</span><span><i class="k-detail"></i>Product details</span><span><i class="k-brand"></i>Brand / features story</span><span><i class="k-cat"></i>Catalogue rows</span><span><i class="k-promo"></i>Promotion</span><span><i class="k-help"></i>Help / FAQ</span><span><i class="k-foot"></i>Footer</span></div>
<h3>Why each page exists</h3>
<p style="font-size:14px">The job each page should do, based on how visitors arrive and what they need at that point. The maps below are judged against it.</p>
<div class="scroll"><table class="tbl">
<tr><th style="width:18%">Page</th><th style="width:30%">How visitors arrive</th><th>What they need to do here</th></tr>
<tr><td><b>Top page</b></td><td>Brand search, ads, social, returning visitors</td><td>Understand what Mareo is, see that it's trustworthy, and get to the right sofa quickly. <i>Out of scope in this example: no homepage was reviewed.</i></td></tr>
<tr><td><b>ソファ category</b></td><td>Menu</td><td>Compare the three sofas and pick one. <i>Out of scope in this example.</i></td></tr>
<tr><td><b>Sofa product page</b></td><td>Product-name search, ads, the menu</td><td>Choose size and colour, confirm the seat feel, check that it fits the room and the doorway, check delivery and returns, read reviews, buy</td></tr>
<tr><td><b>Search</b></td><td>Menu drawer (mobile)</td><td>Find a product, or an answer to a service question (returns, delivery, payment)</td></tr>
</table></div>
<h3>Top page</h3>
<p class="note" style="font-size:14px;color:var(--text-2)">Out of scope in this example. The review covered the product page, header, menu and search; a homepage map would compare Mareo's top page with LOWYA's in the same way.</p>
<h3>Product page</h3>
<div class="pmap"><div class="r"><b>Mareo JP<small>Sumi · 12.1 screens</small></b><div class="bar"><div class="s k-decide" style="left:0.00%;width:10.20%" title="Buy box (0–1.43)">Buy box</div><div class="s k-detail" style="left:10.41%;width:2.35%" title="5 accordions (1.46–1.79)"></div><div class="s k-brand" style="left:12.77%;width:8.42%" title="Story (1.79–2.97)">Story</div><div class="s k-brand" style="left:21.18%;width:4.78%" title="Detail tiles (2.97–3.64)"></div><div class="s k-brand" style="left:25.96%;width:9.13%" title="Seat story (3.64–4.92)">Seat story</div><div class="s k-brand" style="left:35.09%;width:7.28%" title="Why Mareo (claims) (4.92–5.94)"></div><div class="s k-brand" style="left:42.37%;width:9.20%" title="Everyday (5.94–7.23)">Everyday</div><div class="s k-brand" style="left:51.57%;width:11.48%" title="Craft (7.23–8.84)">Craft</div><div class="s k-brand" style="left:63.05%;width:9.13%" title="Durability (8.84–10.12)"></div><div class="s k-decide" style="left:72.18%;width:2.57%" title="Compare (10.12–10.48)"></div><div class="s k-trust" style="left:74.75%;width:5.92%" title="Reviews (10.48–11.31)"></div><div class="s k-help" style="left:80.67%;width:1.78%" title="FAQ (11.31–11.56)"></div><div class="s k-foot" style="left:82.45%;width:3.71%" title="Footer (11.56–12.08)"></div></div></div><div class="r"><b>LOWYA<small>ベルファ 3人掛けカウチソファ · 14.0 screens</small></b><div class="bar"><div class="s k-decide" style="left:0.00%;width:10.27%" title="Buy box (0–1.44)">Buy box</div><div class="s k-trust" style="left:10.27%;width:3.21%" title="Delivery date, store (1.44–1.89)"></div><div class="s k-decide" style="left:13.48%;width:4.14%" title="Cart (1.89–2.47)"></div><div class="s k-detail" style="left:17.62%;width:5.92%" title="Description (2.47–3.3)"></div><div class="s k-brand" style="left:23.54%;width:4.99%" title="Room fit (3.3–4.0)"></div><div class="s k-detail" style="left:28.53%;width:0.50%" title="Specs (4.0–4.07)"></div><div class="s k-trust" style="left:29.03%;width:18.76%" title="Reviews (4.07–6.7)">Reviews</div><div class="s k-brand" style="left:47.79%;width:2.35%" title="Snaps (6.7–7.03)"></div><div class="s k-cat" style="left:50.14%;width:9.56%" title="Series, related (7.03–8.37)">Series, related</div><div class="s k-cat" style="left:59.70%;width:4.49%" title="Compared items (8.37–9.0)"></div><div class="s k-foot" style="left:64.19%;width:35.81%" title="More items, footer (9.0–14.02)">More items, footer</div></div></div><div class="axis"><span></span><div><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span><span>12</span><span>14</span></div></div><div class="axis"><span></span><span style="text-align:right">screens at 390 × 844</span></div></div>
<ul style="font-size:14px">
<li>Mareo: buy box, then five accordions, then seven brand-story sections (1.8–10.1). The same claims appear more than once. Comparison starts at 10.1, reviews at 10.5.</li>
<li>LOWYA: rating, gallery, options, price (税込), guarantee and delivery tags, delivery date by postcode, store check and cart, all within 2.4 screens. Description follows, with reviews from 4.1. LOWYA positions below screen 3 shift by a few hundred pixels between loads because of lazy loading.</li>
</ul>
<h3>Category page (ソファ)</h3>
<p class="note" style="font-size:14px;color:var(--text-2)">Out of scope in this example.</p>
<h3>Heading hierarchy (Sumi product page)</h3>
<ul style="font-size:14px">
<li>The product name is the page's H1, as it should be.</li>
<li>The seven story headings are H2s at the same level as <span lang="ja">「モデルを比較」</span>, <span lang="ja">「カスタマーレビュー」</span> and “FAQs”, so the decision content has no more weight than the story. The four tiles add H3s, one of them in English (“Height Adjustable”).</li>
<li>The accordions have no headings at all, so the specs, delivery and warranty sections are invisible to an outline or a screen-reader heading list.</li>
</ul>
</div>
</section>
<section id="journeys">
<div class="sec-head"><div class="no">04</div><div><h2>Key journeys (遷移)</h2>
<p class="lead">Eight tasks a Japanese sofa shopper typically performs, walked on mobile. Red steps mark friction. Green steps show how a Japanese site handles the same step.</p></div></div>
<div class="sec-body">
<div class="task"><h3>T1 · “Which of the three sofas suits me?” <span class="metric">no menu route</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Menu</span><span class="ar">→</span><span class="st">ソファ</span><span class="ar">→</span><span class="st x">Sumi / Ren / Mio: names only</span><span class="ar">→</span><span class="st">Product page</span></div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st x">Scroll past 8.3 screens of story</span><span class="ar">→</span><span class="st x"><span lang="ja">「モデルを比較」</span>: firmness as 4/5, 2/5, 3/5</span></div>
<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;margin-top:10px"><figure style="flex:0 1 300px"><img src="data:," alt=""/></figure>
<p class="note" style="margin:0;flex:1 1 280px">The three sofas differ mainly in seat feel and construction (pocket coils, feather, foam), which is exactly what a shopper needs to choose. None of it appears in the menu, and the only place the three meet is the comparison at the end of the product page, where firmness is a number out of five rather than a word.</p></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">ACTUS: <span lang="ja">「ソファの選び方」</span> guide</span><span class="st g">IKEA Japan: <span lang="ja">「硬さ」</span> in words on sofa cards</span><span class="st g">LOWYA: <span lang="ja">「こちらもよく比較されています」</span></span></div>
</div>
<div class="task"><h3>T2 · “When will it arrive, and what if I don't like it?” <span class="metric">4 places to check</span></h3>
<div class="lbl">MAREO (FROM THE PRODUCT PAGE)</div>
<div class="flow"><span class="st">Pills under the CTA</span><span class="ar">→</span><span class="st">ⓘ for 返品保証</span><span class="ar">→</span><span class="st">Accordion <span lang="ja">「お届け・返品」</span></span><span class="ar">→</span><span class="st x">Arrival date: “by email after ordering”</span><span class="ar">→</span><span class="st x">Return conditions: external help centre</span><span class="ar">→</span><span class="st x">Return shipping cost: nowhere</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">LOWYA: delivery date for your postcode above the cart button</span><span class="st g">IKEA Japan: 365-day returns under the button</span><span class="st g">unico: <span lang="ja">「お届け日の目安」</span> under the button</span></div>
</div>
<div class="task"><h3>T3 · Buy Sumi, 3-seat, grey <span class="metric">2 taps to cart</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st g">Size (3人掛け preselected)</span><span class="ar">→</span><span class="st x">Colour: unnamed swatches</span><span class="ar">→</span><span class="st g"><span lang="ja">「カートに入れる」</span> at 1.3 screens</span><span class="ar">→</span><span class="st">Cart</span></div>
<p class="note">The shortest path works well, and the sticky purchase bar keeps the button in reach. The issue is what the shopper is unsure about at the button (T1, T2, T6), not the number of taps. Cart and checkout weren't entered in this review.</p>
</div>
<div class="task"><h3>T4 · “Can I sit on it somewhere first?” <span class="metric">utility area only</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Menu</span><span class="ar">→</span><span class="st x"><span lang="ja">「ショールーム」</span> (utility area)</span></div>
<div class="flow"><span class="st">Product page</span><span class="ar">→</span><span class="st x">no link to the showroom</span><span class="ar">→</span><span class="st"><span lang="ja">「生地サンプル無料」</span> ⓘ pill (fabric only)</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">LOWYA: <span lang="ja">「店舗の展示・在庫を確認する」</span> by the cart button</span><span class="st g">Re:CENO: <span lang="ja">「店舗の展示を確認する」</span> under the cart button</span><span class="st g">unico: <span lang="ja">「店舗の在庫を確認する」</span></span></div>
</div>
<div class="task"><h3>T5 · “I have a question before buying” <span class="metric">leaves the site</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Footer <span lang="ja">「よくある質問 ↗」</span></span><span class="ar">→</span><span class="st x">external help centre</span></div>
<div class="flow"><span class="st">Product FAQ (screen 11.3)</span><span class="ar">→</span><span class="st x"><span lang="ja">「詳しくはヘルプセンターをご覧ください」</span></span></div>
<div class="flow"><span class="st">Phone 0120-000-000</span><span class="ar">→</span><span class="st x">only in the footer (screen 11.6)</span></div>
<div class="flow"><span class="st">Floating chat button</span><span class="ar">→</span><span class="st x">no hours stated</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">LOWYA: ご利用ガイド (配送, 支払い, 返品・交換, FAQ) on-domain, in the menu; LINE in the menu</span></div>
</div>
<div class="task"><h3>T6 · “Will the sofa fit through my door?” <span class="metric">no answer on the page</span></h3>
<div class="lbl">MAREO</div>
<div class="flow"><span class="st">Size <span lang="ja">「3人掛け」</span></span><span class="ar">→</span><span class="st">Accordion <span lang="ja">「サイズ」</span> for assembled size</span><span class="ar">→</span><span class="st x">no packed size or box count</span><span class="ar">→</span><span class="st x">FAQ <span lang="ja">「玄関から搬入できますか？」</span> → <span lang="ja">「サイズ表をご確認ください」</span></span></div>
<p class="note">The FAQ sends the shopper back to a table that doesn't contain the answer. Nothing says whether delivery includes carrying the sofa into the room.</p>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">Re:CENO: <span lang="ja">「搬入経路を確認する」</span> under the cart button + 梱包サイズ</span><span class="st g">LOWYA: <span lang="ja">「複数梱包商品」</span> tag + 梱包サイズ and 搬入経路 note</span></div>
</div>
<div class="task"><h3>T7 · From the homepage hero to a sofa <span class="metric">out of scope</span></h3>
<p class="note">Out of scope in this example: no homepage was reviewed. In a full review this journey checks whether the hero names its destination and lands on the right option.</p>
</div>
<div class="task"><h3>T8 · “What's the returns policy?” via search <span class="metric">no answer on site</span></h3>
<div class="lbl">MAREO (MOBILE)</div>
<div class="flow"><span class="st">Menu (search is only in the drawer)</span><span class="ar">→</span><span class="st">Search <span lang="ja">「返品」</span></span><span class="ar">→</span><span class="st x">3 products, no policy page</span><span class="ar">→</span><span class="st x">FAQ is on an external help centre that search can't reach</span></div>
<div class="lbl">JAPANESE REFERENCE</div>
<div class="flow"><span class="st g">IKEA Japan: <span lang="ja">「返品」</span> → customer-service content first (114 results)</span></div>
</div>
</div>
</section>
<section id="ia-findings">
<div class="sec-head"><div class="no">05</div><div><h2>IA findings</h2>
<p class="lead">Structural findings by layer (structure, labels, disclosure). The right-hand column links each one to the localisation review where it overlaps.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl idtbl">
<tr><th style="width:52px">#</th><th>Finding</th><th style="width:90px">Severity</th><th style="width:110px">Review link</th></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">Structure</td></tr>
<tr><td>IA-1</td><td><b>The choosing task has no home.</b> Comparison and buying advice aren't in the menu; the only comparison sits at screen 10.1 of the product page.</td><td><span class="sev maj">Major</span></td><td>Finding 10</td></tr>
<tr><td>IA-2</td><td><b>Try-before-you-buy routes are split.</b> Showroom (utility link) and fabric samples (ⓘ pill), and neither is linked from the product page body.</td><td><span class="sev maj">Major</span></td><td>New</td></tr>
<tr><td>IA-3</td><td><b>Homepage sections.</b> <i>Out of scope in this example: no homepage was reviewed.</i></td><td>—</td><td>—</td></tr>
<tr><td>IA-4</td><td><b>Category page.</b> <i>Out of scope in this example: no category page was reviewed.</i></td><td>—</td><td>—</td></tr>
<tr><td>IA-5</td><td><b>Product-page order follows the brand story, not the decision.</b> Seven story sections (8.3 screens, repeated claims) come before comparison and reviews.</td><td><span class="sev maj">Major</span></td><td>Finding 12</td></tr>
<tr><td>IA-13</td><td><b>Search is product-only and hidden on mobile.</b> Service questions (返品, 配送, ペイペイ) return products; the FAQ lives on an external help centre; on mobile search is only inside the menu drawer.</td><td><span class="sev maj">Major</span></td><td>Finding 13</td></tr>
<tr><td>IA-14</td><td><b>One product split across several URLs.</b> <i>Not observed on the reviewed page: sizes and colours are in-page options. Other product pages were out of scope.</i></td><td>—</td><td>—</td></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">Labels</td></tr>
<tr><td>IA-6</td><td><b>Menu items carry no reason to choose.</b> Sumi, Ren and Mio are names only; tags describe newness and sales (NEW, SALE).</td><td><span class="sev maj">Major</span></td><td>Finding 10</td></tr>
<tr><td>IA-7</td><td><b>The utility area mixes four kinds of link</b> (brand, showroom, B2B, help); FAQ leaves the domain with only an icon as warning.</td><td><span class="sev min">Minor</span></td><td>New</td></tr>
<tr><td>IA-8</td><td><b>Naming drift</b> across the page: “Free Shipping” / 送料無料, <span lang="ja">「口コミ」</span> / <span lang="ja">「カスタマーレビュー」</span> / “reviews”, <span lang="ja">「Q&amp;A」</span> / <span lang="ja">「よくある質問」</span> / “FAQs”, and two different newsletter offers (10% and 3,000円).</td><td><span class="sev min">Minor</span></td><td>Finding 6</td></tr>
<tr><td>IA-15</td><td><b>Hero button destination.</b> <i>Out of scope in this example: no homepage was reviewed.</i></td><td>—</td><td>—</td></tr>
<tr><td colspan="4" style="background:var(--tint);font-weight:600">Disclosure</td></tr>
<tr><td>IA-9</td><td><b>Purchase-risk information is in four places</b> (ⓘ pills, accordion, product FAQ, external help centre); the arrival date and return shipping cost are in none. One product page has 10 ⓘ triggers, so key facts need a tap each.</td><td><span class="sev maj">Major</span></td><td>Finding 3</td></tr>
<tr><td>IA-10</td><td><b>Five flat accordions</b>, starting with <span lang="ja">「よくある質問」</span>; firmness sits inside the English-titled <span lang="ja">「Specifications」</span>, and <span lang="ja">「保証」</span> holds one line.</td><td><span class="sev maj">Major</span></td><td>Finding 4, App. A2</td></tr>
<tr><td>IA-11</td><td><b>Heading outline is flat</b>: story headings at the same level as comparison and reviews; accordions without headings; an English H3.</td><td><span class="sev min">Minor</span></td><td>New (App.)</td></tr>
<tr><td>IA-12</td><td><b>Sticky in-page anchors run in reverse</b> (Q&amp;A / 口コミ / 詳細) and skip the comparison.</td><td><span class="sev min">Minor</span></td><td>App. A2</td></tr>
</table></div>
</div>
</section>
<section id="proposal">
<div class="sec-head"><div class="no">06</div><div><h2>Proposed structure</h2>
<p class="lead">Each page gets one job, and the decision and trust content moves forward. These are structural directions for the mock-up, within the current template and brand system.</p></div></div>
<div class="sec-body">
<div class="grid2">
<div class="panel"><h3 class="h4">TOP PAGE</h3><p style="font-size:14px;color:var(--text-2);margin:0">Out of scope in this example: no homepage was reviewed.</p></div>
<div class="panel"><h3 class="h4">ソファ CATEGORY PAGE</h3><p style="font-size:14px;color:var(--text-2);margin:0">Out of scope in this example. The menu proposal in section 02 gives each sofa the fixed descriptors (座り心地 · 座面 · price) a category page would reuse.</p></div>
</div>
<div class="panel" style="margin-top:16px"><h3 class="h4">PRODUCT PAGE</h3><ol class="order" style="margin:0">
<li><b>Buy box</b><span>Rating, name, one-line “who it's for”, price (税込), firmness scale, sizes with width and price, named colours, carry-in size, CTA with returns sub-line</span></li>
<li><b>Trust block</b><span>Arrival estimate, returns, warranty, fabric samples, payment, chat, “see it in the showroom”</span></li>
<li><b>Review summary</b><span>Histogram, attribute filters in Japanese, picked reviews</span></li>
<li><b>Compare (short)</b><span>Key rows vs Ren and Mio, link to the full table</span></li>
<li><b>One brand story</b><span>Each claim once</span></li>
<li><b>Details (5 groups) and FAQ</b><span>Size and carry-in, materials and care, delivery and returns, warranty; buying questions first</span></li>
<li><b>Second purchase point, cross-sell</b><span>After the story</span></li></ol></div>
</div>
</section>
<section id="candidates">
<div class="sec-head"><div class="no">07</div><div><h2>Additional findings to confirm</h2>
<p class="lead">Further localisation and UI items found during this analysis. Some may have business reasons we can't see from outside the company, so we would like to confirm them with you before adding them to the localisation review.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl cand idtbl">
<tr><th style="width:52px">#</th><th>Finding</th><th style="width:30%">Japanese context / reference</th><th style="width:80px">Suggested priority</th></tr>
<tr><td>N1</td><td><b>Prices never say 税込.</b> The product page shows <span lang="ja">「124,000円」</span> only, in the buy box, the sticky bar and the comparison.</td><td>Total-price display (総額表示) has been mandatory since April 2021, so the amounts are presumably tax-inclusive already. The label is still the Japanese convention that lets shoppers compare confidently: LOWYA shows <span lang="ja">「（税込）」</span> next to the price, and IKEA Japan <span lang="ja">「消費税込み」</span> under it; Apple Japan does not, so it is a common convention rather than a rule.</td><td>中</td></tr>
<tr><td>N2</td><td><b>Claims have no 注釈 (basis, date).</b> <span lang="ja">「人気No.1」</span> on the main photo and <span lang="ja">「購入者満足度98%」</span> in the story carry no footnote.</td><td>The Consumer Affairs Agency published a report on No.1 claims in 2024 setting out what a fair basis requires, after a series of enforcement orders. Apple Japan footnotes claims throughout and Dyson Japan uses ※ notes. Worth a legal check.</td><td>高い</td></tr>
<tr><td>N3</td><td><b>No route to see the sofa in person from the product page</b> (IA-2).</td><td>Mareo has a showroom, but a shopper deciding on the product page never learns about it. LOWYA, Re:CENO and unico all link a store check next to the cart button.</td><td>中</td></tr>
<tr><td>N4</td><td><b>Support channels are hard to find.</b> Phone appears only in the footer; LINE only as a social icon; FAQ is external. The floating chat button states no hours.</td><td>For a 100,000–150,000円 purchase, a visible contact route reduces hesitation. LINE is a primary customer-service channel in Japan; LOWYA puts it in the menu and its call-centre hours in the footer.</td><td>中</td></tr>
<tr><td>N5</td><td><b>The legal notice is labelled <span lang="ja">「ご利用ガイド・規約」</span></b> instead of the standard <span lang="ja">「特定商取引法に基づく表記」</span>.</td><td>Japanese shoppers and reviewers look for the standard label (LOWYA uses it in its menu and footer). Content is probably compliant; it's a findability issue.</td><td>低い</td></tr>
<tr><td>N6</td><td><b>No express checkout on the product page</b> (Apple Pay, Amazon Pay, 楽天ペイ).</td><td>Checkout not inspected, so unconfirmed. Re:CENO shows R Pay and Amazon Pay under its cart button. Relates to finding 7 (payment visibility).</td><td>Verify</td></tr>
<tr><td>N7</td><td><b>Screen-reader labels.</b> <i>Not assessed beyond the appendix: seven of eight product images lack <code>alt</code> text and the ⓘ icons have no names.</i></td><td>General accessibility; appendix.</td><td>低い</td></tr>
</table></div>
<h3>Context we should keep in mind</h3>
<p style="font-size:14px">Some benchmark patterns exist for reasons that don't apply to Mareo. LOWYA's dense buy box serves a large catalogue, and its postcode delivery date relies on its own logistics data, which Mareo would need before showing a date. Re:CENO's in-room delivery is part of its service, not a display choice. We cite these sites for the specific pattern, not as a whole model. Where the reason does transfer (a sofa has to fit through a Japanese doorway whatever the delivery terms), we say so in the finding.</p>
<h3>Method</h3>
<p style="font-size:14px">Navigation trees were extracted from the DOM. Section maps were measured at 390 × 844 using each section's position and height on the pages (Mareo, LOWYA) on 18 November 2026. Journeys were walked on the page; cart and checkout were not entered. The analysis follows a three-layer IA review (structure, labels, disclosure).</p>
</div>
</section>
</main>
<footer><div class="wrap">Draft prepared by the reviewer for Mareo Japan, 18 November 2026. Third-party sites are referenced for comparison only.</div></footer>
<div id="lb"><img alt=""/></div>

</noscript>
<script></script>
<script>
(function(){
var IMG={"0": "data:,"}, TITLES={"en": "Mareo JP — Information architecture analysis (draft)", "ja": "Mareo JP — 情報設計（IA）分析（ドラフト）"}, LANGS=["en", "ja"];
function pick(){try{var u=new URLSearchParams(location.search).get('lang');if(LANGS.indexOf(u)>=0)return u;}catch(e){}
 try{var s=localStorage.getItem('mareo-review-lang');if(LANGS.indexOf(s)>=0)return s;}catch(e){}
 return (LANGS.indexOf('ja')>=0&&(navigator.language||'').toLowerCase().indexOf('ja')===0)?'ja':'en';}
function init(){
(function(){var lb=document.getElementById('lb');if(!lb)return;var im=lb.querySelector('img');
document.querySelectorAll('figure img').forEach(function(i){i.addEventListener('click',function(){im.src=i.src;lb.style.display='flex';});});
lb.addEventListener('click',function(){lb.style.display='none';});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.style.display='none';});})();
if(window.reviewInit)window.reviewInit();
}
function render(l){
 var app=document.getElementById('app'),t=document.getElementById('t-'+l);
 var y=window.scrollY;
 app.innerHTML=t.innerHTML;
 app.querySelectorAll('[data-img]').forEach(function(i){i.src=IMG[i.getAttribute('data-img')];});
 document.documentElement.lang=l; document.title=TITLES[l];
 document.querySelectorAll('.lang-switch button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l?'true':'false');});
 try{localStorage.setItem('mareo-review-lang',l);}catch(e){}
 try{var u=new URL(location.href);u.searchParams.set('lang',l);history.replaceState(null,'',u.toString());}catch(e){}
 try{init();}catch(e){console.error(e);}
 return y;}
document.addEventListener('click',function(e){
 var b=e.target.closest('.lang-switch button');
 if(b){var y=render(b.dataset.l);window.scrollTo(0,y);return;}
 var a=e.target.closest('a[href]');
 if(a){var h=a.getAttribute('href');if(/^[^:#?]+\.html(#.*)?$/.test(h)){e.preventDefault();var p=h.split('#');location.href=p[0]+'?lang='+document.documentElement.lang+(p[1]?'#'+p[1]:'');}}
});
render(pick());
if(location.hash){var el=document.getElementById(location.hash.slice(1));if(el)el.scrollIntoView();}
})();
</script>
</body>
</html>
```
