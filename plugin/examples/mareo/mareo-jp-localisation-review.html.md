# mareo-jp-localisation-review.html

The markup and text of `examples/mareo/mareo-jp-localisation-review.html`, with its embedded images removed. How it renders: the images in the `screens` folder whose names start with this document's name.

```html
<!DOCTYPE html>
<html lang="en" data-doc="report">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Mareo JP — Japanese-market localisation design review (draft)</title>
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
h4{font-size:13px;letter-spacing:.08em;color:var(--text-2);font-weight:600;margin:var(--s5) 0 var(--s2)}


.tag{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;line-height:1;padding:6px 12px;border-radius:var(--pill);background:var(--tint);color:var(--deep);border:1px solid var(--border);white-space:nowrap}
.tag small{font-weight:400;color:var(--text);font-size:11px}
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
.ref h4{margin-top:0;color:var(--good)}
.ref .shots{grid-template-columns:repeat(auto-fit,minmax(200px,260px))}
.ref p,.ref li{font-size:14px}
.ref figcaption{color:var(--text)}
.ref ul{margin:var(--s2) 0 0;padding-left:20px}
.prop{border-top:1px solid var(--border);margin-top:var(--s5);padding-top:var(--s4)}
.prop h4{margin-top:0;color:var(--deep)}
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
.panel h4{margin-top:0}
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

/* Language switch */
.lang-switch{position:fixed;top:6px;right:12px;z-index:1000;display:flex;background:color-mix(in srgb,var(--surface) 96%,transparent);border:1px solid var(--border);border-radius:var(--pill);padding:3px;box-shadow:0 2px 8px color-mix(in srgb,var(--text) 12%,transparent);font-family:"Helvetica Neue",Arial,"Hiragino Sans","Noto Sans JP",sans-serif}
.lang-switch button{font:600 12px/1 inherit;font-family:inherit;letter-spacing:.04em;border:0;background:none;color:var(--deep);padding:6px 12px;border-radius:var(--pill);cursor:pointer;min-height:28px}
.lang-switch button[aria-pressed=true]{background:var(--deep);color:var(--on-primary)}
.lang-switch button:focus-visible{outline:2px solid var(--deep);outline-offset:2px}
.backbar .wrap,.backbar .in{padding-right:150px!important}
html[lang=ja] body{letter-spacing:.04em}
html[lang=ja] p,html[lang=ja] li,html[lang=ja] td,html[lang=ja] h1,html[lang=ja] h2,html[lang=ja] h3{word-break:auto-phrase;line-break:strict}


/* Mobile captures: show at about the width the reference showed its desktop crops */
.shots figure img{max-width:min(340px,100%);margin:0 auto;display:block}
.shots.one figure img{max-width:min(360px,100%)}

@media(max-width:700px){nav.toc .wrap{padding-right:132px}}

</style>
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language / 言語"><button type="button" data-l="en" aria-pressed="true">EN</button><button type="button" data-l="ja" aria-pressed="false" lang="ja">日本語</button></div>
<div id="app"></div>

<template id="t-en" data-title="Mareo JP — Japanese-market localisation design review (draft)">
<div class="backbar"><div class="wrap"><a href="index.html">← All deliverables</a><span>DELIVERABLE 1 OF 3 · LOCALISATION REVIEW</span></div></div>
<header class="cover">
<div class="wrap">
<div class="kicker">JAPANESE-MARKET LOCALISATION DESIGN REVIEW · JP.MAREO.EXAMPLE</div>
<h1>The Japanese storefront still reads like the Danish site, and that is costing both conversions and premium feel</h1>
<p>Thirteen localisation findings across information architecture, functionality and content, and visual design. Each finding names the issue, explains why it matters to Japanese shoppers, and shows a Japanese site that already does it well.</p>
<dl>
<div><dt>FOR</dt><dd>Mareo Japan</dd></div>
<div><dt>SCOPE</dt><dd>Sumi sofa product page, header, menu and search</dd></div>
<div><dt>FOCUS</dt><dd>Mobile purchase and premium feel</dd></div>
<div><dt>REVIEWED</dt><dd>18 November 2026 · the reviewer</dd></div>
</dl>
<div class="status">DRAFT · SAMPLE DELIVERABLE</div>
</div>
</header>
<nav class="toc"><div class="wrap">
<a href="#overview">Overview</a><a href="#summary">Summary</a><a href="#context">Japanese market</a><a href="#findings">Findings 1–13</a><a href="#works">What works</a><a href="#crosscheck">Global cross-check</a><a href="#next">Next steps</a><a href="#appendix">Appendix</a>
</div></nav>
<main class="wrap">
<!-- OVERVIEW -->
<section id="overview">
<div class="sec-head"><div class="no">01</div><div><h2>Overview</h2>
<p class="lead">Mareo's design, photography and service offer (60-day returns guarantee, free delivery with a date choice, free fabric samples) are strong. The Japanese site, though, is the Danish Shopify template with translated text. The Japanese layer was never designed: how Japanese text is set, the information Japanese shoppers check before buying, and how choices and prices are presented.</p></div></div>
<div class="sec-body">
<p>This review deliberately looks at the site <b>through a Japanese-market lens</b>. It isn't a generic heuristic audit. We kept a finding in the main section only when the issue is specific to Japanese shoppers, Japanese language or Japanese e-commerce conventions, and when a Japanese site can be shown doing it better. General usability and accessibility issues are listed separately in the appendix.</p>
<div class="scroll"><table class="tbl">
<tr><th style="width:200px">Perspective</th><th>What we looked at</th></tr>
<tr><td><b>情報設計</b><br/><small>Information architecture</small></td><td>Navigation, page-to-page journey (遷移), page order, and where decision information sits relative to the purchase button</td></tr>
<tr><td><b>機能・コンテンツ</b><br/><small>Functionality and content</small></td><td>Delivery, payment, review and spec information Japanese shoppers expect; naturalness of the Japanese copy</td></tr>
<tr><td><b>ビジュアル</b><br/><small>Visual design</small></td><td>Japanese typography and line breaking; the visual cues that read as premium to a Japanese audience</td></tr>
</table></div>
<p class="small" style="font-size:13px;color:var(--text-2)">Priority: <span class="dot high">高い</span> directly affects the purchase decision or how the brand is perceived in Japan · <span class="dot mid">中</span> clear friction, lower reach. Red markers on screenshots carry the finding number. Green labels mark patterns that already work.</p>
</div>
</section>
<!-- SUMMARY -->
<section id="summary">
<div class="sec-head"><div class="no">02</div><div><h2>Summary by perspective</h2>
<p class="lead">Seven of the thirteen findings are high priority. Most are fixed with theme-level CSS, content or small components, so they can go to the Copenhagen design team as contained changes.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl persp">
<tr><th style="width:36%">Perspective</th><th>Findings</th></tr>
<tr><td>情報設計<small>Information architecture</small><p class="short">The information Japanese shoppers check before buying exists, but it sits behind info icons, in accordions or on an external help centre rather than next to the button.</p></td><td><ul class="flist">
<li><span class="n">3</span><a href="#f3">Delivery and trust information isn't visible at the moment of purchase</a><span class="dot high">高い</span></li>
<li><span class="n">5</span><a href="#f5">Size and colour options hide their width and price</a><span class="dot high">高い</span></li>
<li><span class="n">10</span><a href="#f10">“Which sofa is right for me?” has no place in the navigation</a><span class="dot mid">中</span></li>
<li><span class="n">12</span><a href="#f12">The mobile product page puts decision content far down</a><span class="dot mid">中</span></li></ul></td></tr>
<tr><td>機能・コンテンツ<small>Functionality and content</small><p class="short">Content was translated rather than localised: the way Japanese shoppers judge firmness, payment, reviews and carry-in logistics is missing.</p></td><td><ul class="flist">
<li><span class="n">4</span><a href="#f4">Seat firmness isn't described the way Japanese sofa shoppers expect, and contradicts itself</a><span class="dot high">高い</span></li>
<li><span class="n">6</span><a href="#f6">Machine-translated and English strings</a><span class="dot high">高い</span></li>
<li><span class="n">7</span><a href="#f7">Only card instalments are mentioned; PayPay and points are invisible</a><span class="dot mid">中</span></li>
<li><span class="n">8</span><a href="#f8">Review strengths are buried and partly untranslated</a><span class="dot mid">中</span></li>
<li><span class="n">11</span><a href="#f11">The sofa doesn't show its carry-in box size</a><span class="dot mid">中</span></li>
<li><span class="n">13</span><a href="#f13">Search answers product names, not shoppers' questions</a><span class="dot mid">中</span></li></ul></td></tr>
<tr><td>ビジュアル<small>Visual design</small><p class="short">These are the details a Japanese reader notices instantly. They are most likely why the site feels “translated” and less premium than the brand.</p></td><td><ul class="flist">
<li><span class="n">1</span><a href="#f1">Japanese text is set with Latin typography rules</a><span class="dot high">高い</span></li>
<li><span class="n">2</span><a href="#f2">Words and product names break mid-word</a><span class="dot high">高い</span></li>
<li><span class="n">9</span><a href="#f9">Visual noise dilutes the premium feel, especially on mobile</a><span class="dot high">高い</span></li></ul></td></tr>
</table></div>
<h3 id="works">What already works, and should be kept</h3>
<p style="font-size:14px">Recommendations shouldn't put these at risk. Several are already well suited to Japan.</p>
<div class="grid2">
<div class="panel"><h4>LOCALISED WELL</h4><ul>
<li>Lifestyle photography shows a Japanese apartment: wood-look flooring, sliding doors, sheer curtains, and a sofa sized for the room. Shoppers can picture it in their own home.</li>
<li>The service offer matches what Japanese buyers look for: a date choice for delivery (お届け日指定), a returns guarantee (返品保証) and free fabric samples (finding 3 is about placement, not substance).</li>
<li>Reviews already collect reviewer attributes (age, household, room), which is how Japanese shoppers judge whether a review applies to them (finding 8 is about labels and placement).</li>
<li>The footer gives a phone number with opening hours (10:00–17:00, closed weekends and holidays).</li>
<li>All three colours are photographed on the same sofa in the same light, so shoppers can compare colour honestly.</li>
<li>The size table includes seat height and weight, two figures Japanese buyers check for floor-level living and moving.</li></ul></div>
<div class="panel"><h4>SOUND UI FOUNDATIONS</h4><ul>
<li>A consistent button system: one navy primary colour, pill shape, clear primary vs secondary styles.</li>
<li>A short path to buy: the button sits at 1.3 screens on mobile, with size preselected, and a sticky purchase bar.</li>
<li>Breadcrumbs on the product page.</li>
<li>Service pills under the button on mobile (finding 3 is about extending them, not inventing them).</li>
<li>A model comparison table exists for Sumi, Ren and Mio (finding 12 is about where it sits).</li>
<li>Rich review content: 128 reviews at 4.8 with a star histogram (finding 8 is about placement).</li></ul></div>
</div>
</div>
</section>
<!-- CONTEXT -->
<section id="context">
<div class="sec-head"><div class="no">03</div><div><h2>What Japanese shoppers expect</h2>
<p class="lead">The findings rest on recent Japanese research (sources accessed 6 November 2026) and on measurements taken from Japanese furniture sites on 18 November 2026. Sources are listed in the appendix.</p></div></div>
<div class="sec-body">
<div class="facts">
<div><b>58.7%</b><span>of Japan's B2C goods e-commerce is bought on smartphones</span><em>METI, 2023 [1]</em></div>
<div><b>91.3%</b><span>check the expected arrival date before buying. Without it, 25% buy elsewhere and 12% give up</span><em>System Research, 2026 [2]</em></div>
<div><b>86%</b><span>use reviews when deciding what to buy; 48% hold off after negative reviews</span><em>Rakus, n=1,053 [5]</em></div>
<div><b>30.4%</b><span>use PayPay for online goods; about half choose a payment method to earn points</span><em>GMO-PG, 2025 [4]</em></div>
<div><b>55.2%</b><span>use date/time-specified delivery; over 60% of women in their 40s–60s</span><em>MyVoice, n=11,420 [3]</em></div>
<div><b>1.5–2.0</b><span>line height implied by the W3C Japanese text-layout standard (line gap ½–1em)</span><em>W3C JLReq §2.4.2 [7]</em></div>
</div>
<h3>Japanese typography: Mareo against Japanese benchmarks</h3>
<div class="scroll"><table class="tbl">
<tr><th>Site</th><th>Font stack (first entries)</th><th>Body text</th><th>Letter-spacing</th></tr>
<tr><td><b>Mareo JP</b></td><td class="bad">“Jost”, “Helvetica Neue”, Arial (Latin only)</td><td>line-height 1.3 (1.12 on the product name); 11.5–14px common on mobile</td><td class="bad">−0.42px body, −1.65px product name</td></tr>
<tr><td>Mareo DK</td><td>“Jost”, “Helvetica Neue”, Arial</td><td>same template</td><td>−0.03em</td></tr>
<tr><td><b>IKEA Japan</b> (global brand)</td><td class="ok">“Noto IKEA”, “Noto Sans JP”, …</td><td>14px, 1.5</td><td class="ok">normal</td></tr>
<tr><td><b>unico</b> (JP furniture)</td><td class="ok">“Noto Sans JP”, 游ゴシック Medium, …</td><td class="ok">14px, 1.5–1.8</td><td class="ok">+0.6px</td></tr>
<tr><td><b>Re:CENO</b> (JP furniture)</td><td class="ok">游ゴシック, “Yu Gothic”, …</td><td class="ok">12–13.6px, 1.6–1.8</td><td class="ok">normal</td></tr>
<tr><td><b>LOWYA</b></td><td class="ok">“Noto Sans JP”, メイリオ, Hiragino…</td><td>12px, 1.5 (dense retail)</td><td class="ok">normal</td></tr>
<tr><td><b>ACTUS</b></td><td class="ok">游ゴシック, “Yu Gothic Pr6N”, …</td><td>11.4–13.5px, 1.5–1.8</td><td class="ok">normal</td></tr>
</table></div>
</div>
</section>
<!-- FINDINGS -->
<section id="findings">
<div class="sec-head"><div class="no">04</div><div><h2>Findings</h2>
<p class="lead">Ordered by where shoppers meet them: how the text reads, what they need at the purchase button, how they choose, and how the site feels as a whole.</p></div></div>
<!-- 1 -->
<article class="finding" id="f1">
<div class="f-head"><div class="f-no">1</div><div>
<h3>Japanese text is set with Latin typography rules</h3>
<div class="f-tags"><span class="tag">ビジュアル <small>Visual</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Site-wide · mobile</p>
<p>The only declared fonts are Jost, Helvetica Neue and Arial, all Latin typefaces. Every kana and kanji falls back to whatever the device has: Hiragino on Apple devices, Yu Gothic or Meiryo on Windows (Yu Gothic Regular renders thin and faint there [8]), Noto on Android. On top of that, Japanese is tracked at −0.03em (−0.42px on body copy) and the product name at −0.05em (−1.65px), a Latin display technique that squeezes full-width characters together. Body copy runs at line-height 1.3, the product name at 1.12. Japanese readers perceive this as cramped and “translated” without knowing why. Every Japanese benchmark we measured declares a Japanese face, and none of them uses negative tracking on Japanese (section 03).</p>
<div class="shots one"><figure><img data-img="0" src="" alt=""/><figcaption><span class="mk">1</span> Negative tracking and line-height 1.3 on the brand story. Sumi product page, mobile.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<ul><li><b>IKEA Japan</b> keeps its global design system and adds Noto Sans JP after its brand font, with normal tracking. It's the clearest precedent that localising type doesn't break a global brand.</li>
<li><b>unico</b> sets body copy in Noto Sans JP at 14px with line-height up to 1.8 and +0.6px tracking.</li></ul></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>One <code>:lang(ja)</code> CSS layer: <code>"Jost", "Noto Sans JP", "Hiragino Sans", Meiryo, sans-serif</code>. Jost keeps rendering Latin letters and numerals, so the brand font stays.</li>
<li>Tracking 0 to +0.04em for Japanese. Keep body line-height at 1.5 or more and longer copy around 1.7; lift the product name from 1.12 to at least 1.4. Line height on its own is a secondary issue: Apple and Dyson use about 1.4.</li></ul>
<p class="ask"><b>If HQ asks “Jost is our global font”:</b> it stays. A Japanese face is added after it in the stack for kana and kanji, exactly as IKEA does.</p>
<p class="ask"><b>If HQ asks “LOWYA uses small 12px text too”:</b> it does, as a dense catalogue retailer. But LOWYA names Japanese fonts and never uses negative tracking. Size isn't the main issue here; the missing Japanese font, the tracking and the broken words are.</p></div>
</div>
</article>
<!-- 2 -->
<article class="finding" id="f2">
<div class="f-head"><div class="f-no">2</div><div>
<h3>Words and product names break mid-word</h3>
<div class="f-tags"><span class="tag">ビジュアル <small>Visual</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Product name and headings · mobile</p>
<p>Japanese has no spaces, so browsers break lines anywhere unless told otherwise, and the product name is explicitly set to <code>line-break: anywhere</code>. On a 390px phone the name reads <span lang="ja">「マレオ スクエアアームソ／ファ」</span>, leaving <span lang="ja">「ファ」</span> alone at the start of a line, and the first story heading splits a word as <span lang="ja">「もっと自／由に。」</span>. For a premium brand these are the most visible signs of a translated site.</p>
<div class="shots"><figure><img data-img="1" src="" alt=""/><figcaption><span class="mk">2</span> <span lang="ja">「スクエアアームソ／ファ」</span>, mobile.</figcaption></figure>
<figure><img data-img="2" src="" alt=""/><figcaption><span class="mk">2</span> <span lang="ja">「もっと自／由に。」</span> in the first story heading, mobile.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>unico</b> breaks its feature headings at phrase boundaries by hand (<span lang="ja">「自由に組み合わせて楽しめる／軽やかな印象のモジュールソファ」</span>). It isn't universal: LOWYA and Re:CENO set <code>word-break: break-all</code> on product text. Japanese typesetting has standard line-breaking rules (JLReq 禁則処理 [7]).</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li><code>word-break: auto-phrase</code> on headings, product names, pills and chips (Chrome/Edge), with BudouX or <code>&lt;wbr&gt;</code> as fallback for Safari; remove <code>line-break: anywhere</code> from the name.</li>
<li><code>white-space: nowrap</code> on short option labels such as size names.</li></ul></div>
</div>
</article>
<!-- 3 -->
<article class="finding" id="f3">
<div class="f-head"><div class="f-no">3</div><div>
<h3>Delivery and trust information isn't visible at the moment of purchase</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · mobile</p>
<p>Mareo offers exactly what Japanese shoppers look for: a returns guarantee, free delivery with a date choice, free fabric samples and an extended warranty. Under the button they appear as four pills, each needing a tap on an info icon, and the row runs off the edge of the screen, so the fourth pill is cut in half. <b>No arrival estimate appears anywhere</b>: the <span lang="ja">「お届け・返品」</span> accordion says <span lang="ja">「お届け日はご注文確認メールにてお知らせします」</span>, after the order. The return conditions are sent to an external help centre, the return shipping cost isn't stated, and the extended warranty says only <span lang="ja">「（有料）」</span>. 91.3% of Japanese shoppers check the arrival date before buying [2].</p>
<div class="shots"><figure><img data-img="3" src="" alt=""/><figcaption><span class="mk">3</span> Four ⓘ pills under the button; the fourth is cut off at the screen edge.</figcaption></figure>
<figure><img data-img="4" src="" alt=""/><figcaption><span class="mk">3</span> The delivery date comes by email after ordering; returns point to the help centre.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<div class="shots"><figure><img data-img="5" src="" alt=""/><figcaption><b>LOWYA</b>: <span lang="ja">「お届け予定日：11月25日(水)」</span> for the shopper's postcode, guarantee and delivery conditions as tags, and a store check, all above the cart button.</figcaption></figure>
<figure><img data-img="6" src="" alt=""/><figcaption><b>IKEA Japan</b>: <span lang="ja">「365日以内であれば、全額返金いたします」</span> directly under the cart button.</figcaption></figure></div></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>Quick fix: turn the four pills into a visible block of rows that fits the screen.</li>
<li>Extend it to five lines: <span class="ja">お届け目安・日時指定 / 60日間返品保証・返送料 / フレーム5年保証 / 生地サンプル無料 / お支払い方法</span>.</li>
<li>Show <span lang="ja">「最短○月○日お届け」</span> on the product page, by postcode if logistics data allows (unico shows <span lang="ja">「お届け日の目安」</span> directly under the button).</li></ul>
<p class="ask"><b>If HQ asks “the information is already on the site”:</b> it is, but not where the decision is made. LOWYA and IKEA put the same facts next to the button.</p></div>
</div>
</article>
<!-- 4 -->
<article class="finding" id="f4">
<div class="f-head"><div class="f-no">4</div><div>
<h3>Seat firmness isn't described the way Japanese sofa shoppers expect, and contradicts itself</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · model comparison</p>
<p>Japanese sofa retailers commonly describe seat firmness in words, often on a やわらかめ / ふつう / かため scale. Mareo shows a <span lang="ja">「硬さ 4 / 5」</span> bar above <span lang="ja">「体を包み込む、ふんわりやわらかな座り心地」</span>, while the <span lang="ja">「Specifications」</span> accordion gives 230N for the seat foam and reviewers write <span lang="ja">「思ったより硬め」</span>. The copy promises a soft seat that the spec and the reviews don't support. The model comparison repeats the problem in numbers only (Sumi 4/5, Ren 2/5, Mio 3/5), so a shopper can't tell from the words which sofa is soft and which is firm.</p>
<div class="shots"><figure><img data-img="7" src="" alt=""/><figcaption><span class="mk">4</span> <span lang="ja">「ふんわりやわらか」</span> above a 4/5 bar, and 230N in Specifications on the same screen.</figcaption></figure>
<figure><img data-img="8" src="" alt=""/><figcaption><span class="mk">4</span> The comparison gives firmness as numbers out of 5, with no words.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<div class="shots one"><figure><img data-img="9" src="" alt=""/><figcaption><b>unico</b>: <span lang="ja">「座り心地」</span> with separate 座面 and 背面 bars on a やわらかめ / 普通 / 硬め scale.</figcaption></figure></div>
<ul style="margin-top:12px"><li><b>IKEA Japan</b> shows a <span lang="ja">「硬さ」</span> quick fact in words on its sofa cards (values such as 1番やわらかめ and ふつう).</li>
<li><b>NOYES</b> labels its seats in words (<span lang="ja">「やや硬め」</span>) with a dot meter for seat and back.</li></ul></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A firmness scale per model in the buy box (やわらかめ ← → かため), with a one-line plain-language verdict.</li>
<li>Words, not numbers, in the comparison table, with seat firmness as an early row.</li>
<li>Align the tagline with the spec and the reviews, or explain why the seat feels <span lang="ja">「ふんわり」</span>.</li></ul>
<p class="ask"><b>If HQ asks “the hardness value is already on the page”:</b> it is, inside an English-titled accordion. No Japanese sofa site we checked shows a newton value for seats, so the number doesn't help anyone choose; the words do.</p></div>
</div>
</article>
<!-- 5 -->
<article class="finding" id="f5">
<div class="f-head"><div class="f-no">5</div><div>
<h3>Size and colour options hide their width and price</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · option area</p>
<p>Size pills show only the name: 2人掛け, 3人掛け, カウチ. Seat counts aren't standardised between makers, so shoppers need the width in cm to check the wall and the room. The price changes by size (98,000円 to 152,000円), but only after a tap, and the widths sit inside the <span lang="ja">「サイズ」</span> accordion further down. The three colour swatches have no names at all, so the selected colour is never stated in words. Japanese furniture sites show the consequence of each option before it is chosen.</p>
<div class="shots one"><figure><img data-img="10" src="" alt=""/><figcaption><span class="mk">5</span> Unnamed swatches and size pills with no width or price.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<p><b>ACTUS</b> opens <span lang="ja">「おすすめの仕様から選ぶ」</span> as cards, each showing size and price (<span lang="ja">「サイズ： 幅160cm・シートハイ38cm」</span> <span lang="ja">「¥184,800税込」</span>). <b>LOWYA</b> shows the price and stock on every colour tile.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>Size options with three lines: <span class="ja">「3人掛け／幅200cm／124,000円」</span>.</li>
<li>Colour names under the swatches, and the selected option named in the label (<span class="ja">カラー：グレー</span>).</li></ul></div>
</div>
</article>
<!-- 6 -->
<article class="finding" id="f6">
<div class="f-head"><div class="f-no">6</div><div>
<h3>Machine-translated and English strings</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Site-wide · announcement bar, product copy, accordions, review widget</p>
<p>Small strings show the site was translated rather than written in Japanese. The line above the name, <span lang="ja">「【Best Seller】あなたのリビングに究極の快適さをもたらし、最高のリラックス体験をさせます。」</span>, is a literal translation, and <span lang="ja">「させます」</span> reads as if the sofa is ordering the shopper to relax. English stays in the announcement bar (“Newsletter登録で10%OFF ｜ Free Shipping”), a feature label (“Height Adjustable”), the price pill (“Free Shipping”), an accordion (“Specifications”), the FAQ heading (“FAQs”), and the whole review widget: “128 reviews”, “Comfy / Looks / Price / Feels firm”, “Newest / Top rated / Photos”, “Customer” and the reviewer attributes (“Age: 30s · Household: 2 people”). The first review shown is in English. Japanese buyers read these as a sign of care, or of its absence, which affects trust in a 100,000円+ purchase.</p>
<div class="shots"><figure><img data-img="11" src="" alt=""/><figcaption><span class="mk">6</span> The translated tagline and “Height Adjustable”.</figcaption></figure>
<div style="display:grid;gap:16px"><figure><img data-img="12" src="" alt=""/><figcaption><span class="mk">6</span> The announcement bar mixes English and Japanese.</figcaption></figure>
<figure><img data-img="13" src="" alt=""/><figcaption><span class="mk">6</span> English labels, tabs and attributes in the review widget.</figcaption></figure></div></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A one-off native review of every UI string and the review widget's locale, with one glossary: 送料無料, 返品保証, よくある質問, 円, one wording for each offer.</li>
<li>Japanese labels for every accordion, tab and attribute (仕様, 新着順, 年代, 家族構成).</li></ul></div>
</div>
</article>
<!-- 7 -->
<article class="finding" id="f7">
<div class="f-head"><div class="f-no">7</div><div>
<h3>Only card instalments are mentioned; PayPay and points are invisible</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · buy box</p>
<p>The buy box mentions one payment option, card instalments (<span lang="ja">「クレジットカード分割払いなら 月々20,667円（6回）」</span>), above the price. In Japan, 30.4% of online shoppers use PayPay and about half choose a method to earn points [4], so shoppers want to know before checkout whether their method is accepted. Japanese furniture sites state payment options and point earning near the price.</p>
<div class="shots one"><figure><img data-img="14" src="" alt=""/><figcaption><span class="mk">7</span> Card instalments are the only method shown before the cart.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<div class="shots one"><figure><img data-img="15" src="" alt=""/><figcaption><b>LOWYA</b>: <span lang="ja">「（税込）送料無料」</span> on the price, then the points earned (<span lang="ja">「800 pt」</span>, doubled in its app) directly under it.</figcaption></figure></div>
<p style="margin-top:12px"><b>Re:CENO</b> shows the R Pay and Amazon Pay logos with <span lang="ja">「使えます」</span> directly under its cart button.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A row of payment methods in the trust block (finding 3), matching what checkout actually accepts.</li>
<li>If PayPay or konbini payment isn't available yet, that is a business decision worth raising with HQ.</li></ul></div>
</div>
</article>
<!-- 8 -->
<article class="finding" id="f8">
<div class="f-head"><div class="f-no">8</div><div>
<h3>Review strengths are buried and partly untranslated</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · mobile</p>
<p>Mareo has a real asset here: 128 reviews at 4.8, a star histogram, and reviewer attributes that suit Japan well (age, household, room). But on mobile the reviews start around screen 10.5 of 12, after the brand story and the comparison. Near the top, the only sign of them is a small grey <span lang="ja">「4.8（128）」</span> under the price, with no link, and on the first screen the coupon bubble sits on top of it. The attributes are in English and can't be used to find people like you. 86% of Japanese shoppers use reviews when deciding [5].</p>
<div class="shots"><figure><img data-img="16" src="" alt=""/><figcaption><span class="mk g">✓</span> A strong review summary, but about 10 screens down on mobile.</figcaption></figure>
<figure><img data-img="17" src="" alt=""/><figcaption><span class="mk">8</span> The only rating near the top: small, grey, no link.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>LOWYA</b> places <span lang="ja">「★4.3 101件のレビュー」</span> above the gallery and its histogram at about screen 3.7. <b>Re:CENO</b> shows 250 reviews at ★4.9 with a histogram at about screen 3.2, and each review names the reviewer's age and household (<span lang="ja">「30代　ご夫婦・子ども」</span>).</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A rating link at the top, and a compact rating summary right after the trust block, linking to the full reviews.</li>
<li>Filters for 家族構成, 部屋 and 座り心地 using the attributes already collected, labelled in Japanese.</li></ul></div>
</div>
</article>
<!-- 9 -->
<article class="finding" id="f9">
<div class="f-head"><div class="f-no">9</div><div>
<h3>Visual noise dilutes the premium feel, especially on mobile</h3>
<div class="f-tags"><span class="tag">ビジュアル <small>Visual</small></span><span class="tag">情報設計 <small>IA</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · mobile</p>
<p>The first screen carries four badges in four colours on the main photo (black NEW, red SALE, yellow 人気No.1, green ECO), and three pills around the price (an outlined “Free Shipping”, a red 期間限定, a blue newsletter pill). A floating <span lang="ja">「10% OFF」</span> bubble covers the price and the rating, and a chat button covers the end of the payment line. The sticky bar repeats the main button, so on the second screen the same <span lang="ja">「カートに入れる」</span> appears twice. Four seconds after load, a sign-up pop-up covers the page. Two newsletter offers compete: 10% OFF in the announcement bar, the bubble and the pop-up, and 3,000円 OFF in the buy box. Japanese premium brands read as premium through restraint: one message, one route to buy, generous space.</p>
<div class="shots"><figure><img data-img="18" src="" alt=""/><figcaption><span class="mk">9</span> First screen: four badges, three price pills, the coupon bubble and chat button, and the sticky bar.</figcaption></figure>
<figure><img data-img="19" src="" alt=""/><figcaption><span class="mk">9</span> The sign-up pop-up, four seconds after load.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>LOWYA</b> shows its guarantee and delivery conditions as tags in one neutral style under the price (see finding 3), and its sticky cart bar appears only after the shopper has scrolled past the main button.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>One badge on the photo at most; promotions as a text line, not a floating bubble or pop-up.</li>
<li>One offer at a time, in one place.</li>
<li>One accent colour for promotions, one neutral tag style, one primary button per screen.</li>
<li>The sticky bar only after the main button has scrolled away.</li></ul>
<p class="ask"><b>If HQ asks “the bubble lifts sign-ups”:</b> it may, but it covers the price on the screen where the decision is made. A text line under the button keeps the offer and gives the page back.</p></div>
</div>
</article>
<!-- 10 -->
<article class="finding" id="f10">
<div class="f-head"><div class="f-no">10</div><div>
<h3>“Which sofa is right for me?” has no place in the navigation</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Mobile menu · product page</p>
<p>The model comparison is the main help for choosing between three sofas, Sumi, Ren and Mio, but it isn't in the menu. The drawer lists the three by name only, with NEW and SALE tags, so nothing says how they differ. The comparison is reachable only at about screen 10 of the product page. Japanese shoppers who compare carefully expect a 比較 or 選び方 entry point up front.</p>
<div class="shots one"><figure><img data-img="20" src="" alt=""/><figcaption><span class="mk">10</span> The ソファ menu: names and tags only; no 比較 or 選び方 entry.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>ACTUS</b> publishes a sofa buying guide (<span lang="ja">「理想の暮らしをかなえるソファの選び方」</span>) linked from its homepage. <b>LOWYA</b> shows <span lang="ja">「こちらもよく比較されています」</span> on product pages, and <b>IKEA Japan</b> shows each sofa's <span lang="ja">「硬さ」</span> in words on its category cards.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li><span lang="ja">「ソファを比べる・選び方」</span> at the top of the ソファ menu.</li>
<li>One fixed line per model in the menu and on every card: 座り心地 · 座面 · こんな方に.</li></ul></div>
</div>
</article>
<!-- 11 -->
<article class="finding" id="f11">
<div class="f-head"><div class="f-no">11</div><div>
<h3>The sofa doesn't show its carry-in box size</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page</p>
<p>In Japanese apartments, checking the carry-in route (搬入経路: entrance, corridor, lift) is a routine step before buying large furniture. Mareo's size table gives the assembled dimensions only. There is no packed size, no number of boxes and no doorway width, and the product FAQ <span lang="ja">「玄関から搬入できますか？」</span> answers only <span lang="ja">「サイズ表をご確認ください。」</span>, pointing back to the table that doesn't have the answer. Nothing says whether delivery includes carrying the sofa into the room.</p>
<div class="shots one"><figure><img data-img="21" src="" alt=""/><figcaption><span class="mk">11</span> The size table: assembled dimensions only, no box size.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>Re:CENO</b> puts <span lang="ja">「搬入経路を確認する」</span> directly under the cart button, lists <span lang="ja">「梱包サイズ 幅 185cm × 奥行き 105cm × 高さ 48cm」</span>, and states that delivery includes <span lang="ja">「お部屋への運び入れ／梱包材持ち帰り」</span>. <b>LOWYA</b> tags multi-box deliveries (<span lang="ja">「複数梱包商品」</span>) under the price and gives the packed size with a 搬入経路 note.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li><span lang="ja">「梱包サイズ・箱数・搬入に必要な幅」</span> next to the size selector, with a link to a 搬入経路 check guide.</li>
<li>State what delivery includes (玄関先 or room), and a real answer to the carry-in FAQ.</li></ul></div>
</div>
</article>
<!-- 12 -->
<article class="finding" id="f12">
<div class="f-head"><div class="f-no">12</div><div>
<h3>The mobile product page puts decision content far down</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page, mobile (390px)</p>
<p>The mobile product page is about 12 screens long. The purchase button appears just below the first screen, but what a careful Japanese buyer checks next (delivery, comparison, reviews) sits at the very end, after 8.3 screens of brand story in seven sections. The same claims recur: <span lang="ja">「究極の座り心地」</span> twice and <span lang="ja">「ふんわりやわらか」</span> three times. A shopper who wants to compare firmness or read reviews has to scroll past the whole story.</p>
<div class="len">
<div class="row"><span><b>Today</b></span><div class="bar">
<div class="seg" style="left:0;width:12%;background:var(--primary)">Buy</div>
<div class="seg" style="left:12%;width:3%;background:var(--border-strong);color:var(--text)"></div>
<div class="seg" style="left:15%;width:69%;background:var(--border-strong);color:var(--text)">Brand story (7 sections, repeated claims)</div>
<div class="seg" style="left:84%;width:3%;background:var(--deep)"></div>
<div class="seg" style="left:87%;width:7%;background:var(--deep)">Reviews</div>
<div class="seg" style="left:94%;width:6%;background:var(--border-strong);color:var(--text)"></div></div></div>
<div class="row"><span><b>Proposed</b></span><div class="bar">
<div class="seg" style="left:0;width:14%;background:var(--primary)">Buy</div>
<div class="seg" style="left:14%;width:8%;background:var(--good)">Trust</div>
<div class="seg" style="left:22%;width:9%;background:var(--deep)">Reviews</div>
<div class="seg" style="left:31%;width:5%;background:var(--deep)"></div>
<div class="seg" style="left:36%;width:22%;background:var(--border-strong);color:var(--text)">One story</div>
<div class="seg" style="left:58%;width:10%;background:var(--border-strong);color:var(--text)">Details</div></div></div>
<div class="scale"><span>0</span><span>3</span><span>6</span><span>9</span><span>12 screens</span></div>
</div>
<p style="font-size:13px;color:var(--text-2)">Measured on the current page: button at 1.3 screens, comparison from screen 10.1, reviews from 10.5, page 12.1 screens. The proposed bar is indicative.</p>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>LOWYA</b> puts the price, options, delivery date, store check and cart button within 2.4 screens, with the review summary from about screen 3.7. <b>Re:CENO</b> reaches its review summary at about screen 3.2.</p></div>
<div class="prop"><h4>PROPOSAL: PRODUCT-PAGE ORDER</h4>
<ol class="order">
<li><b>Buy box</b><span>Rating, name, price (税込), firmness scale, sizes with width and price, carry-in size, CTA</span></li>
<li><b>Trust block</b><span>Arrival estimate, returns, warranty, fabric samples, payment, chat</span></li>
<li><b>Review summary</b><span>Histogram, attribute filters in Japanese</span></li>
<li><b>Compare sofas</b><span>座り心地 first, then seat construction, sizes, price</span></li>
<li><b>One brand story</b><span>Comfort → materials → care → durability, each claim once</span></li>
<li><b>Details and FAQ</b><span>Five fixed groups; buying questions first</span></li>
</ol></div>
</div>
</article>
<!-- 13 -->
<article class="finding" id="f13">
<div class="f-head"><div class="f-no">13</div><div>
<h3>Search answers product names, not shoppers' questions</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Site search · mobile · tested 18 Nov 2026</p>
<p>Japanese shoppers try to resolve questions themselves before contacting a shop. On Mareo the search box returns products for service questions. <span lang="ja">「返品」</span> (returns), <span lang="ja">「配送」</span> (delivery) and <span lang="ja">「ペイペイ」</span> each give the same three products and none of the policy or help content. The FAQ lives on an external help centre (the footer link carries an external-link icon), so search can't reach it. On mobile, search sits only inside the menu drawer.</p>
<div class="shots"><figure><img data-img="22" src="" alt=""/><figcaption><span class="mk">13</span> <span lang="ja">「返品」</span> returns a product grid, not the returns policy.</figcaption></figure>
<div><div class="scroll"><table class="tbl">
<tr><th>Query</th><th>What comes back</th></tr>
<tr><td>返品</td><td class="bad">3 products, no policy page</td></tr>
<tr><td>配送</td><td class="bad">3 products, no delivery information</td></tr>
<tr><td>ペイペイ</td><td class="bad">3 products, no answer on payment</td></tr>
</table></div></div></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>IKEA Japan</b>: searching <span lang="ja">「返品」</span> returns <span lang="ja">「0 製品と114 コンテンツの結果」</span>, with <span lang="ja">「返品 カスタマーサービス」</span> first, then <span lang="ja">「返品・交換・キャンセル」</span>. <b>LOWYA</b> keeps 配送について, お支払い方法, 返品・交換 and よくあるご質問 under ご利用ガイド in its own menu, so help content is part of the site rather than an external tool.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>Include FAQ and policy pages in search results, shown above products for service words (返品, 配送, 送料, 支払い, 保証, 搬入).</li>
<li>Add synonyms for common words (ペイペイ → payment page).</li>
<li>Show the search icon in the mobile header.</li></ul></div>
</div>
</article>
</section>
<!-- CROSS-CHECK -->
<section id="crosscheck">
<div class="sec-head"><div class="no">05</div><div><h2>Cross-check against global brands</h2>
<p class="lead">To test whether these findings are Japanese conventions or just furniture-retail habits, we checked the same points on three global brands with mature Japanese sites outside furniture: Apple, Dyson and Nike. Most claims hold. Two needed adjusting, and we've changed the findings accordingly.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:26%">Claim (finding)</th><th>Apple Japan</th><th>Dyson Japan</th><th>Nike Japan</th><th style="width:20%">Verdict</th></tr>
<tr><td>No negative tracking on Japanese (1)</td><td class="ok">normal to +0.23px</td><td class="ok">normal</td><td class="ok">normal</td><td><b>Holds.</b> No site uses it; Mareo uses −0.42 / −1.65px.</td></tr>
<tr><td>A Japanese typeface is declared (1)</td><td class="ok">SF Pro JP, a custom Japanese version of its brand font</td><td class="bad">No. DysonFutura only; Japanese falls back to the OS font, as on Mareo</td><td class="ok">Noto Sans JP, listed first</td><td><b>Mostly holds.</b> Common practice, not universal.</td></tr>
<tr><td>Line height of 1.7 or more (1)</td><td class="bad">1.36</td><td class="bad">1.33–1.43</td><td class="ok">1.5–2.0</td><td><b>Adjusted.</b> Now a secondary point; only the 1.12 product name is clearly too tight.</td></tr>
<tr><td>Line breaks are controlled (2)</td><td class="ok">Phrase-aware breaking in CSS, plus invisible joiners inside words</td><td class="ok">Manual breaks at phrase boundaries</td><td>Not checked</td><td><b>Holds.</b> Apple goes furthest to prevent mid-word breaks.</td></tr>
<tr><td>Delivery estimate near the button (3)</td><td class="ok"><span lang="ja">「最短で翌日に無料でお届け」</span> + store pickup</td><td class="ok"><span lang="ja">「送料無料／最短翌日お届け」</span></td><td>Free shipping and returns, no date</td><td><b>Holds</b> for considered purchases; Nike sells lower-ticket items.</td></tr>
<tr><td>Japanese payment methods visible (7)</td><td class="ok">あと払い, monthly amount</td><td class="ok">PayPay, points, 分割</td><td class="ok">コンビニ払い</td><td><b>Holds.</b> Each shows locally relevant methods on the product page.</td></tr>
<tr><td>Help choosing in the navigation (10)</td><td class="ok"><span lang="ja">「Macのモデルを比較する」</span> in the menu</td><td class="ok"><span lang="ja">「選び方ガイド」</span> in every category menu</td><td>—</td><td><b>Holds strongly.</b></td></tr>
<tr><td>Route to try or see in person (IA analysis)</td><td class="ok"><span lang="ja">「お近くのApple Store」</span> in the menu</td><td>—</td><td class="ok"><span lang="ja">「店舗検索」</span> on the product page</td><td><b>Holds.</b></td></tr>
<tr><td>Price labelled 税込 (IA analysis, N1)</td><td class="bad">No: <span lang="ja">「224,800円から」</span></td><td class="ok"><span lang="ja">「(税込)」</span></td><td class="ok"><span lang="ja">「（税込）」</span></td><td><b>Adjusted.</b> Common convention, not universal; priority lowered to 中.</td></tr>
<tr><td>Claims carry footnotes (IA analysis, N2)</td><td class="ok">Numbered footnotes throughout (46 on one page)</td><td class="ok">※ notes on offers and conditions</td><td>—</td><td><b>Holds.</b></td></tr>
<tr><td>Labels in Japanese, counts in Japanese format (6)</td><td class="ok">—</td><td class="ok">no “k”</td><td class="ok"><span lang="ja">「レビュー (0)」</span></td><td><b>Holds.</b> None leaves review labels in English.</td></tr>
</table></div>
<p style="font-size:13px;color:var(--text-2)">Measured on the live sites on 6 November 2026: MacBook Air product and buy pages, a Supersonic Travel product page, an Alphafly 4 product page, and each brand's homepage and menu. Whether a webfont contains Japanese glyphs was tested by rendering Japanese text in the browser and comparing it with the OS fallback font.</p>
</div>
</section>
<!-- NEXT -->
<section id="next">
<div class="sec-head"><div class="no">06</div><div><h2>Next steps</h2>
<p class="lead">Most changes are theme-level CSS, content or small components. We suggest three steps, each of which can be validated with Mareo's own A/B testing.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:190px">Step</th><th>Findings</th><th>Type of change</th><th>Test hypothesis</th></tr>
<tr><td><b>1 · Localisation layer</b></td><td>1, 2, 6, plus the visible trust block (3)</td><td>CSS, copy, locale keys</td><td>JP typography and visible trust block → lower PDP bounce, higher add-to-cart</td></tr>
<tr><td><b>2 · Decision support</b></td><td>3 (arrival estimate, payment), 4, 5, 7, 8, 11</td><td>Components, content, data</td><td>Firmness scale and visible option prices → higher PDP-to-cart, fewer returns for “too firm”</td></tr>
<tr><td><b>3 · Premium structure</b></td><td>9, 10, 12, 13</td><td>Template and IA</td><td>Calmer first screen and decision content first → higher add-to-cart rate on mobile</td></tr>
</table></div>
<p>Next, we will mock up the <b>Sumi product page on mobile</b>, applying steps 1–2 within the current Mareo design system, so HQ can see the change rather than read about it.</p>
</div>
</section>
<!-- APPENDIX -->
<section id="appendix">
<div class="sec-head"><div class="no">A</div><div><h2>Appendix</h2>
<p class="lead">General usability and accessibility issues found during the review. They are not Japan-specific, but they are worth fixing alongside the localisation work.</p></div></div>
<div class="sec-body">
<h3>A1 · Accessibility (WCAG 2.2 AA, aligned with JIS X 8341-3)</h3>
<div class="scroll"><table class="tbl">
<tr><th>Element</th><th>Measured</th><th>Required</th></tr>
<tr><td>Breadcrumb, rating and secondary text (grey #8A827A)</td><td class="bad">3.57 : 1 on canvas</td><td>4.5 : 1</td></tr>
<tr><td><span lang="ja">「人気No.1」</span> badge, white 11px on yellow</td><td class="bad">2.17 : 1</td><td>4.5 : 1</td></tr>
<tr><td>Review stars, yellow on white</td><td class="bad">2.17 : 1</td><td>3 : 1</td></tr>
<tr><td>Unselected size-pill border #CFC7BC</td><td class="bad">1.67 : 1</td><td>3 : 1</td></tr>
<tr><td>Coupon bubble and 期間限定 pill (white on red)</td><td class="ok">4.68 : 1</td><td>4.5 : 1</td></tr>
<tr><td>Primary button label (white on navy)</td><td class="ok">12.98 : 1</td><td>4.5 : 1</td></tr>
</table></div>
<p style="font-size:14px">Also: seven of eight product images have no <code>alt</code> text; the menu, account and cart icons are 23–24px SVGs, not buttons, so they can't be reached by keyboard and are below the 44 × 44px target; the ten ⓘ icons have no accessible names. Mareo's design system already defines a muted text colour (#777165) that passes at 4.54 : 1 and can replace the grey.</p>
<h3>A2 · Structure and polish</h3>
<div class="scroll"><table class="tbl">
<tr><th style="width:44%">Issue</th><th>Suggestion</th></tr>
<tr><td>Five flat accordions starting with <span lang="ja">「よくある質問」</span>; firmness sits in the English-titled <span lang="ja">「Specifications」</span>; <span lang="ja">「保証」</span> holds one line</td><td>Five fixed groups on every product page, buying questions first</td></tr>
<tr><td>The model comparison gives firmness as x/5 numbers and no recommendation</td><td>座り心地 in words → seat → sizes → price → こんな方に</td></tr>
<tr><td>Two newsletter offers (10% and 3,000円) in four placements: announcement bar, pop-up, floating bubble and a pill in the buy box</td><td>Keep one offer and one placement</td></tr>
<tr><td>The service pill row runs off the screen edge</td><td>Rows that fit the width (finding 3)</td></tr>
<tr><td>Sticky in-page anchors run in reverse (Q&amp;A / 口コミ / 詳細) and skip the comparison</td><td>Page order, comparison included</td></tr>
<tr><td>Product FAQ answers redirect (<span lang="ja">「詳しくはヘルプセンターをご覧ください」</span>, <span lang="ja">「サイズ表をご確認ください」</span>)</td><td>Answer on the page: return conditions, carry-in, delivery date</td></tr>
<tr><td>The chat button sits over the sticky bar and the payment line; the 10% OFF bubble covers the price</td><td>Chat in the trust block and sticky bar; no floating elements</td></tr>
<tr><td>The sticky bar shows at the same time as the main button</td><td>Show it only after the main button scrolls away</td></tr>
<tr><td>Brand story repeats the same claims (<span lang="ja">「究極の座り心地」</span>, <span lang="ja">「ふんわりやわらか」</span>)</td><td>One story, each claim once</td></tr>
<tr><td>Four tile placeholders in the story show no image</td><td>Verify the assets</td></tr>
<tr><td>Main button <span lang="ja">「カートに入れる」</span> says nothing about the returns guarantee</td><td>Add a sub-line (<span lang="ja">「60日間返品保証つき」</span>)</td></tr>
<tr><td>One product page has 10 ⓘ triggers (features, payment, firmness, service pills); key facts need a tap each</td><td>Show the key line inline; keep details for the tap. See IA analysis IA-9</td></tr>
</table></div>
<h3>A3 · Limits and open questions</h3>
<div class="grid2">
<div class="panel"><h4>NOT COVERED IN THIS DRAFT</h4><ul>
<li>Homepage, category pages, cart and checkout, so accepted payment methods are unconfirmed</li>
<li>Desktop layout; tablet and 320px widths</li>
<li>Hover, focus, error states and the info-icon modals</li>
<li>Windows and Android font rendering (inferred from CSS)</li>
<li>Analytics and funnel data; real performance (LCP / INP / CLS)</li></ul></div>
<div class="panel"><h4>TO CONFIRM WITH MAREO</h4><ul>
<li>Basis and date for <span lang="ja">「人気No.1」</span> and <span lang="ja">「購入者満足度98%」</span></li>
<li>Payment methods at checkout; arrival-estimate data</li>
<li>Return shipping cost</li>
<li>Packed sizes and box counts for each size</li>
<li>Any issues your team has already identified, so we can align with them</li>
<li>Analytics access to size the impact</li></ul></div>
</div>
<h3>A4 · Method</h3>
<p style="font-size:14px">Expert review led by the reviewer. Evidence comes from full-page captures of the product page at 390px, its menu, search and accordion states, saved page code, and styles measured in the browser. Design tokens were checked for contrast and consistency. The review looked at the page from three separate angles (usability, per-screen UI and accessibility, information architecture). It was combined with Japanese-market research and a live benchmark of LOWYA, unico, Re:CENO, ACTUS, IKEA Japan and NOYES, then sense-checked against Apple, Dyson and Nike Japan. All findings were re-checked on 18 November 2026. The <a href="index.html#how">package index</a> explains where tools were used and how the work was checked.</p>
<h3>A5 · Sources</h3>
<ol class="sources">
<li>METI 電子商取引に関する市場調査 (smartphone share 58.7%, 2023) — <a href="https://netshop.impress.co.jp/node/12929">Netshop Impress</a></li>
<li>System Research / あるるモール, 到着予定日 survey, Sept 2026 — <a href="https://ecnomikata.com/ecnews/marketing/51794/">ECのミカタ</a>; <a href="https://dxmagazine.jp/?p=223380">DXマガジン</a></li>
<li>MyVoice 宅配便サービスの利用 survey, Feb 2026 — <a href="https://ecnomikata.com/ecnews/49593/">ECのミカタ</a></li>
<li>GMO Payment Gateway, 決済手段利用意向調査 2025 — <a href="https://group.gmo/pdf/news/gmo_news_9798.pdf">press release (PDF)</a></li>
<li>Rakus, ネットショッピングにおける購買心理 survey, July 2025 — <a href="https://netshop.impress.co.jp/node/14386">Netshop Impress</a></li>
<li>System Research, 通販における信頼確認行動 survey, Mar 2026 — <a href="https://ecnomikata.com/ecnews/marketing/49993/">ECのミカタ</a></li>
<li>W3C, Requirements for Japanese Text Layout (JLReq) — <a href="https://www.w3.org/TR/jlreq/">w3.org/TR/jlreq</a></li>
<li>Yu Gothic rendering on Windows — <a href="https://neos21.github.io/poc-perfect-yu-gothic/">test bed</a>; <a href="https://cssnite.jp/lp/lp47/followup/CSSNiteLP47-s7-yamada.pdf">CSS Nite LP47 (PDF)</a></li>
<li>Benchmarked pages, 18 Nov 2026: <a href="https://www.low-ya.com/goods/PFMM4">LOWYA</a> · <a href="https://www.unico-fan.co.jp/products/u13080027426z0001">unico</a> · <a href="https://www.receno.com/three2/agra3.php">Re:CENO</a> · <a href="https://online.actus-interior.com/item/2305827/">ACTUS</a> · <a href="https://www.ikea.com/jp/ja/p/kivik-2-seat-sofa-tibbleby-beige-grey-s19440594/">IKEA Japan</a> · <a href="https://www.ny-k.co.jp/three_piece/decibel_c4_wide/">NOYES</a></li>
</ol>
</div>
</section>
</main>
<footer><div class="wrap">Draft prepared by the reviewer for Mareo Japan, 18 November 2026. Third-party screenshots are included for comparison only. Based on public pages; cart, checkout and analytics were not accessed.</div></footer>
<div id="lb"><img alt=""/></div>
</template>
<template id="t-ja" data-title="Mareo JP — 日本市場向けローカライズ・デザインレビュー（ドラフト）">
<div class="backbar"><div class="wrap"><a href="index.html">← 成果物一覧へ</a><span>成果物 1 / 3 · ローカライズ・デザインレビュー</span></div></div>
<header class="cover">
<div class="wrap">
<div class="kicker">日本市場向けローカライズ・デザインレビュー · JP.MAREO.EXAMPLE</div>
<h1>日本語サイトはいまだにデンマーク版のままに見え、購入率とブランドの上質さの両方を損なっています</h1>
<p>情報設計、機能・コンテンツ、ビジュアルの3つの観点から、ローカライズに関する13件の指摘をまとめました。各指摘では、課題、日本の購入者にとって重要な理由、そしてすでにうまく対応している日本のサイト例を示しています。</p>
<dl>
<div><dt>提出先</dt><dd>Mareo Japan</dd></div>
<div><dt>対象範囲</dt><dd>ソファ「Sumi」の商品ページ、ヘッダー、メニュー、検索</dd></div>
<div><dt>重点</dt><dd>モバイルでの購入と上質さ</dd></div>
<div><dt>調査日</dt><dd>2026年11月18日 · レビュー担当者</dd></div>
</dl>
<div class="status">ドラフト · サンプル成果物</div>
</div>
</header>
<nav class="toc"><div class="wrap">
<a href="#overview">概要</a><a href="#summary">サマリー</a><a href="#context">日本市場</a><a href="#findings">指摘 1–13</a><a href="#works">うまくいっている点</a><a href="#crosscheck">グローバルブランドとの比較</a><a href="#next">次のステップ</a><a href="#appendix">付録</a>
</div></nav>
<main class="wrap">
<!-- OVERVIEW -->
<section id="overview">
<div class="sec-head"><div class="no">01</div><div><h2>概要</h2>
<p class="lead">マレオのデザイン、写真、サービス内容（60日間返品保証、日時指定できる送料無料の配送、無料の生地サンプル）は大きな強みです。一方で日本語サイトは、デンマーク版のShopifyテンプレートにテキストを翻訳して載せたものです。日本語の組み方、日本の購入者が購入前に確認する情報、選択肢や価格の見せ方といった「日本向けの層」が設計されていません。</p></div></div>
<div class="sec-body">
<p>本レビューは、あえて<b>日本市場の視点</b>でサイトを見ています。一般的なヒューリスティック評価ではありません。本編に残したのは、日本の購入者・日本語・日本のEC慣習に固有の課題で、かつ、よりうまく対応している日本のサイトを示せるものに限っています。一般的なユーザビリティやアクセシビリティの課題は、付録にまとめています。</p>
<div class="scroll"><table class="tbl">
<tr><th style="width:200px">観点</th><th>主な確認ポイント</th></tr>
<tr><td><b>情報設計</b><br/><small>Information architecture</small></td><td>ナビゲーション、ページ間の遷移、ページ内の順序、購入判断に必要な情報と購入ボタンの位置関係</td></tr>
<tr><td><b>機能・コンテンツ</b><br/><small>Functionality and content</small></td><td>日本の購入者が期待する配送・支払い・レビュー・仕様の情報、日本語コピーの自然さ</td></tr>
<tr><td><b>ビジュアル</b><br/><small>Visual design</small></td><td>日本語のタイポグラフィと改行、日本の読み手に上質さを感じさせる視覚的な手がかり</td></tr>
</table></div>
<p class="small" style="font-size:13px;color:var(--text-2)">優先度：<span class="dot high">高い</span> 購入判断、または日本でのブランドの見え方に直接影響する · <span class="dot mid">中</span> 明確な使いにくさがあるが、影響範囲は小さい。スクリーンショット上の赤いマーカーは指摘番号、緑のラベルはすでにうまくいっている点を示します。</p>
</div>
</section>
<!-- SUMMARY -->
<section id="summary">
<div class="sec-head"><div class="no">02</div><div><h2>観点別サマリー</h2>
<p class="lead">13件のうち7件が優先度「高い」です。多くはテーマのCSS、コンテンツ、小さなコンポーネントの変更で対応できるため、コペンハーゲンのデザインチームに範囲を限定した変更として依頼できます。</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl persp">
<tr><th style="width:36%">観点</th><th>指摘</th></tr>
<tr><td>情報設計<small>Information architecture</small><p class="short">日本の購入者が購入前に確認する情報はサイト内にありますが、ボタンの近くではなく、情報アイコンの奥、アコーディオンの中、外部のヘルプセンターに置かれています。</p></td><td><ul class="flist">
<li><span class="n">3</span><a href="#f3">購入の瞬間に、配送や安心につながる情報が見えない</a><span class="dot high">高い</span></li>
<li><span class="n">5</span><a href="#f5">サイズやカラーの選択肢に、幅や価格が表示されていない</a><span class="dot high">高い</span></li>
<li><span class="n">10</span><a href="#f10">「自分に合うソファはどれ？」の入口がナビゲーションにない</a><span class="dot mid">中</span></li>
<li><span class="n">12</span><a href="#f12">モバイルの商品ページで、判断に必要なコンテンツが下の方にある</a><span class="dot mid">中</span></li></ul></td></tr>
<tr><td>機能・コンテンツ<small>Functionality and content</small><p class="short">コンテンツがローカライズではなく翻訳にとどまっており、座り心地、支払い、レビュー、搬入について日本の購入者が判断に使う情報が欠けています。</p></td><td><ul class="flist">
<li><span class="n">4</span><a href="#f4">座り心地の表記が日本のソファの慣習に沿っておらず、内容も矛盾している</a><span class="dot high">高い</span></li>
<li><span class="n">6</span><a href="#f6">機械翻訳のような日本語と、英語のままの表記</a><span class="dot high">高い</span></li>
<li><span class="n">7</span><a href="#f7">カードの分割払いしか案内されておらず、PayPayやポイントが見えない</a><span class="dot mid">中</span></li>
<li><span class="n">8</span><a href="#f8">レビューの強みが埋もれ、一部が翻訳されていない</a><span class="dot mid">中</span></li>
<li><span class="n">11</span><a href="#f11">ソファに、搬入時の梱包サイズが表示されていない</a><span class="dot mid">中</span></li>
<li><span class="n">13</span><a href="#f13">サイト内検索が商品名には応えるが、購入者の疑問には応えない</a><span class="dot mid">中</span></li></ul></td></tr>
<tr><td>ビジュアル<small>Visual design</small><p class="short">日本の読み手がすぐに気づく細部です。サイトが「翻訳されたもの」に見え、ブランドほどの上質さが感じられないのは、おそらくこれらが原因です。</p></td><td><ul class="flist">
<li><span class="n">1</span><a href="#f1">日本語が欧文のタイポグラフィのルールで組まれている</a><span class="dot high">高い</span></li>
<li><span class="n">2</span><a href="#f2">言葉や商品名が単語の途中で改行される</a><span class="dot high">高い</span></li>
<li><span class="n">9</span><a href="#f9">視覚的なノイズが、特にモバイルで上質さを薄めている</a><span class="dot high">高い</span></li></ul></td></tr>
</table></div>
<h3 id="works">すでにうまくいっていて、今後も残すべき点</h3>
<p style="font-size:14px">改善提案によって、これらを損なわないようにする必要があります。いくつかはすでに日本向けにうまくローカライズされています。</p>
<div class="grid2">
<div class="panel"><h4>うまくローカライズされている点</h4><ul>
<li>ライフスタイル写真が日本の住まいを映している：木目調の床、引き戸、レースのカーテン、部屋に合ったサイズのソファ。購入者が自分の部屋に置いた姿を想像できます。</li>
<li>サービス内容が日本の購入者の求めるものと合っている：お届け日指定、返品保証、無料の生地サンプル（指摘3は中身ではなく配置に関するものです）。</li>
<li>レビューですでに投稿者の属性（年代、家族構成、部屋）を集めている。日本の購入者が「自分に当てはまるか」を判断する観点と合っています（指摘8はラベルと配置に関するものです）。</li>
<li>フッターに電話番号と受付時間（10:00〜17:00、土日祝休み）が記載されている。</li>
<li>3色すべてを同じソファ、同じ光で撮影しており、色を正しく比べられる。</li>
<li>サイズ表に座面高と重量がある。床に近い暮らしや引っ越しの際に、日本の購入者が確認する2つの数値です。</li></ul></div>
<div class="panel"><h4>しっかりしたUIの土台</h4><ul>
<li>一貫したボタンの体系：メインカラーはネイビー1色、ピル型、プライマリとセカンダリの区別が明確。</li>
<li>購入までの道のりが短い：モバイルではボタンが1.3画面目にあり、サイズは選択済み、購入バーが追従表示される。</li>
<li>商品ページにパンくずリストがある。</li>
<li>モバイルではボタンの下にサービスのピルがある（指摘3は、これを新たに作るのではなく拡張する提案です）。</li>
<li>Sumi、Ren、Mioのモデル比較表がある（指摘12は配置に関するものです）。</li>
<li>レビューのコンテンツが充実している：128件・評価4.8、星の評価分布（指摘8は配置に関するものです）。</li></ul></div>
</div>
</div>
</section>
<!-- CONTEXT -->
<section id="context">
<div class="sec-head"><div class="no">03</div><div><h2>日本の購入者が期待すること</h2>
<p class="lead">指摘は、最近の日本の調査（出典の参照日は2026年11月6日）と、2026年11月18日に日本の家具サイトで行った計測に基づいています。出典は付録に記載しています。</p></div></div>
<div class="sec-body">
<div class="facts">
<div><b>58.7%</b><span>日本の物販系BtoC-ECのうち、スマートフォン経由の割合</span><em>経済産業省、2023年 [1]</em></div>
<div><b>91.3%</b><span>が購入前に到着予定日を確認。表示がないと25%が他店で購入し、12%が購入をやめる</span><em>システムリサーチ、2026年 [2]</em></div>
<div><b>86%</b><span>が購入の判断にレビューを参考にし、48%が否定的なレビューを見て購入を見送る</span><em>ラクス、n=1,053 [5]</em></div>
<div><b>30.4%</b><span>がネットでの物品購入にPayPayを利用。約半数がポイント獲得を目的に支払い方法を選ぶ</span><em>GMO-PG、2025年 [4]</em></div>
<div><b>55.2%</b><span>が日時指定配送を利用。40〜60代の女性では60%以上</span><em>マイボイスコム、n=11,420 [3]</em></div>
<div><b>1.5〜2.0</b><span>W3Cの日本語組版要件から導かれる行の高さ（行間は全角の½〜1）</span><em>W3C JLReq §2.4.2 [7]</em></div>
</div>
<h3>日本語タイポグラフィ：マレオと日本のベンチマークの比較</h3>
<div class="scroll"><table class="tbl">
<tr><th>サイト</th><th>フォント指定（先頭の数件）</th><th>本文</th><th>字間</th></tr>
<tr><td><b>Mareo JP</b></td><td class="bad">“Jost”, “Helvetica Neue”, Arial（欧文のみ）</td><td>行の高さ1.3（商品名は1.12）。モバイルでは11.5〜14pxが中心</td><td class="bad">本文−0.42px、商品名−1.65px</td></tr>
<tr><td>Mareo DK</td><td>“Jost”, “Helvetica Neue”, Arial</td><td>同じテンプレート</td><td>−0.03em</td></tr>
<tr><td><b>IKEA Japan</b>（グローバルブランド）</td><td class="ok">“Noto IKEA”, “Noto Sans JP”, …</td><td>14px、1.5</td><td class="ok">標準</td></tr>
<tr><td><b>unico</b>（日本の家具）</td><td class="ok">“Noto Sans JP”, 游ゴシック Medium, …</td><td class="ok">14px、1.5〜1.8</td><td class="ok">+0.6px</td></tr>
<tr><td><b>Re:CENO</b>（日本の家具）</td><td class="ok">游ゴシック, “Yu Gothic”, …</td><td class="ok">12〜13.6px、1.6〜1.8</td><td class="ok">標準</td></tr>
<tr><td><b>LOWYA</b></td><td class="ok">“Noto Sans JP”, メイリオ, Hiragino…</td><td>12px、1.5（情報量の多い小売）</td><td class="ok">標準</td></tr>
<tr><td><b>ACTUS</b></td><td class="ok">游ゴシック, “Yu Gothic Pr6N”, …</td><td>11.4〜13.5px、1.5〜1.8</td><td class="ok">標準</td></tr>
</table></div>
</div>
</section>
<!-- FINDINGS -->
<section id="findings">
<div class="sec-head"><div class="no">04</div><div><h2>指摘</h2>
<p class="lead">購入者が出会う順に並べています：文字がどう読めるか、購入ボタンの前で何が必要か、どう選ぶか、そしてサイト全体からどう感じるか。</p></div></div>
<!-- 1 -->
<article class="finding" id="f1">
<div class="f-head"><div class="f-no">1</div><div>
<h3>日本語が欧文のタイポグラフィのルールで組まれている</h3>
<div class="f-tags"><span class="tag">ビジュアル</span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">サイト全体 · モバイル</p>
<p>指定されているフォントはJost、Helvetica Neue、Arialのみで、すべて欧文書体です。かなと漢字はすべて端末に入っているフォントで表示されます。Apple製品ではヒラギノ、Windowsでは游ゴシックやメイリオ（游ゴシックのRegularはWindowsで細く薄く表示されます [8]）、AndroidではNotoです。さらに日本語にも−0.03em（本文では−0.42px）、商品名には−0.05em（−1.65px）の字間が適用されています。これは欧文の見出しで使われる手法で、全角文字同士を詰めてしまいます。本文の行の高さは1.3、商品名は1.12です。日本の読み手は、理由が分からなくても窮屈で「翻訳調」だと感じます。計測した日本のベンチマークはすべて和文フォントを指定しており、日本語にマイナスの字間を使っているサイトはありませんでした（セクション03を参照）。</p>
<div class="shots one"><figure><img data-img="0" src="" alt=""/><figcaption><span class="mk">1</span> ブランドストーリーのマイナスの字間と行の高さ1.3。Sumiの商品ページ、モバイル。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4>
<ul><li><b>IKEA Japan</b>はグローバルのデザインシステムを維持したまま、ブランドフォントの後にNoto Sans JPを追加し、字間は標準です。書体をローカライズしてもグローバルブランドが損なわれないことを示す、最も分かりやすい前例です。</li>
<li><b>unico</b>は本文をNoto Sans JPの14px、行の高さ最大1.8、字間+0.6pxで組んでいます。</li></ul></div>
<div class="prop"><h4>提案</h4><ul>
<li><code>:lang(ja)</code>のCSSを1層追加：<code>"Jost", "Noto Sans JP", "Hiragino Sans", Meiryo, sans-serif</code>。欧文と数字は引き続きJostで表示されるため、ブランドフォントは残ります。</li>
<li>日本語の字間は0〜+0.04em。本文の行の高さは1.5以上、長めの文章は1.7前後に。商品名は1.12から少なくとも1.4に。なお、行の高さ単体は副次的な課題です（AppleやDysonは約1.4）。</li></ul>
<p class="ask"><b>本社から「Jostはグローバル共通のフォントだ」と言われた場合：</b>Jostはそのまま残ります。かなと漢字用の和文書体をフォント指定の後ろに追加するだけで、IKEAと同じやり方です。</p>
<p class="ask"><b>本社から「LOWYAも12pxの小さな文字を使っている」と言われた場合：</b>確かにそうですが、LOWYAは情報量の多いカタログ型の小売です。それでも和文フォントを指定し、マイナスの字間は使っていません。ここでの主な課題は文字サイズではなく、和文フォントの未指定、字間、そして単語の途中での改行です。</p></div>
</div>
</article>
<!-- 2 -->
<article class="finding" id="f2">
<div class="f-head"><div class="f-no">2</div><div>
<h3>言葉や商品名が単語の途中で改行される</h3>
<div class="f-tags"><span class="tag">ビジュアル</span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">商品名と見出し · モバイル</p>
<p>日本語には単語間のスペースがないため、指定しなければブラウザはどこでも改行します。しかも商品名には<code>line-break: anywhere</code>が明示的に指定されています。390pxのスマートフォンでは商品名が「マレオ スクエアアームソ／ファ」となり、「ファ」だけが行頭に残ります。ストーリーの最初の見出しも「もっと自／由に。」と単語の途中で分かれています。上質なブランドにとって、翻訳サイトであることが最も目に見えてしまうサインです。</p>
<div class="shots"><figure><img data-img="1" src="" alt=""/><figcaption><span class="mk">2</span> 「スクエアアームソ／ファ」、モバイル。</figcaption></figure>
<figure><img data-img="2" src="" alt=""/><figcaption><span class="mk">2</span> ストーリーの最初の見出しの「もっと自／由に。」、モバイル。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4><p><b>unico</b>は特長の見出しを文節の区切りで手動で改行しています（「自由に組み合わせて楽しめる／軽やかな印象のモジュールソファ」）。ただし全サイト共通ではなく、LOWYAとRe:CENOは商品テキストに<code>word-break: break-all</code>を指定しています。日本語の組版には標準的な改行のルールがあります（JLReq 禁則処理 [7]）。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>見出し、商品名、ピル、チップに<code>word-break: auto-phrase</code>（Chrome/Edge）を適用し、SafariではBudouXまたは<code>&lt;wbr&gt;</code>で補う。商品名から<code>line-break: anywhere</code>を外す。</li>
<li>サイズ名のような短い選択肢のラベルには<code>white-space: nowrap</code>を適用。</li></ul></div>
</div>
</article>
<!-- 3 -->
<article class="finding" id="f3">
<div class="f-head"><div class="f-no">3</div><div>
<h3>購入の瞬間に、配送や安心につながる情報が見えない</h3>
<div class="f-tags"><span class="tag">情報設計</span><span class="tag">機能・コンテンツ</span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ · モバイル</p>
<p>マレオは、日本の購入者が求めるものをまさに提供しています。返品保証、日時指定できる送料無料の配送、無料の生地サンプル、延長保証です。ところがボタンの下では4つのピルとして並び、どれも情報アイコンをタップしないと内容が分かりません。しかもピルの列が画面の端からはみ出し、4つ目は半分で切れています。<b>到着予定日はどこにも表示されていません</b>。「お届け・返品」のアコーディオンには「お届け日はご注文確認メールにてお知らせします」とあり、分かるのは注文の後です。返品条件は外部のヘルプセンターへ誘導され、返送料の記載はなく、延長保証は「（有料）」としか書かれていません。日本の購入者の91.3%が購入前に到着予定日を確認しています [2]。</p>
<div class="shots"><figure><img data-img="3" src="" alt=""/><figcaption><span class="mk">3</span> ボタンの下にⓘ付きのピルが4つ。4つ目は画面の端で切れている。</figcaption></figure>
<figure><img data-img="4" src="" alt=""/><figcaption><span class="mk">3</span> お届け日は注文後にメールで通知。返品はヘルプセンターへ誘導。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4>
<div class="shots"><figure><img data-img="5" src="" alt=""/><figcaption><b>LOWYA</b>：購入者の郵便番号に応じた「お届け予定日：11月25日(水)」、保証と配送条件のタグ、店舗の在庫確認が、すべてカートボタンの上にある。</figcaption></figure>
<figure><img data-img="6" src="" alt=""/><figcaption><b>IKEA Japan</b>：カートボタンのすぐ下に「365日以内であれば、全額返金いたします」。</figcaption></figure></div></div>
<div class="prop"><h4>提案</h4><ul>
<li>すぐにできる対応：4つのピルを、画面に収まる行のブロックにして常に見えるようにする。</li>
<li>それを5行に広げる：<span class="ja">お届け目安・日時指定 / 60日間返品保証・返送料 / フレーム5年保証 / 生地サンプル無料 / お支払い方法</span>。</li>
<li>商品ページに「最短○月○日お届け」を表示する。物流データが許せば郵便番号ごとに（unicoはボタンのすぐ下に「お届け日の目安」を表示しています）。</li></ul>
<p class="ask"><b>本社から「情報はすでにサイトにある」と言われた場合：</b>確かにありますが、判断する場所にはありません。LOWYAやIKEAは同じ情報をボタンの隣に置いています。</p></div>
</div>
</article>
<!-- 4 -->
<article class="finding" id="f4">
<div class="f-head"><div class="f-no">4</div><div>
<h3>座り心地の表記が日本のソファの慣習に沿っておらず、内容も矛盾している</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ</span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ · モデル比較</p>
<p>日本のソファ販売店では、座り心地を言葉で表すのが一般的で、やわらかめ / ふつう / かための3段階で示すことがよくあります。マレオは「硬さ 4 / 5」のバーの上に「体を包み込む、ふんわりやわらかな座り心地」と書いていますが、「Specifications」のアコーディオンでは座面ウレタンが230N、レビューには「思ったより硬め」という声があります。コピーがうたう「やわらかい座面」を、仕様もレビューも裏付けていません。モデル比較も同じ問題を数字だけで繰り返しており（Sumi 4/5、Ren 2/5、Mio 3/5）、どのソファがやわらかく、どれがかためなのかを言葉から判断できません。</p>
<div class="shots"><figure><img data-img="7" src="" alt=""/><figcaption><span class="mk">4</span> 4/5のバーの上に「ふんわりやわらか」、同じ画面のSpecificationsには230N。</figcaption></figure>
<figure><img data-img="8" src="" alt=""/><figcaption><span class="mk">4</span> 比較表の硬さは5段階の数字だけで、言葉がない。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4>
<div class="shots one"><figure><img data-img="9" src="" alt=""/><figcaption><b>unico</b>：「座り心地」として、座面と背面を別々のバーで、やわらかめ / 普通 / 硬めの尺度で表示。</figcaption></figure></div>
<ul style="margin-top:12px"><li><b>IKEA Japan</b>はソファのカードに「硬さ」を言葉で表示しています（1番やわらかめ、ふつう など）。</li>
<li><b>NOYES</b>は座面を言葉（「やや硬め」）で表し、座面と背面をドットのメーターで示しています。</li></ul></div>
<div class="prop"><h4>提案</h4><ul>
<li>購入エリアに、モデルごとの座り心地の尺度（やわらかめ ← → かため）と、平易な言葉による1行の説明を置く。</li>
<li>比較表は数字ではなく言葉で示し、座り心地を上の方の行に置く。</li>
<li>キャッチコピーを仕様とレビューに合わせる。または、なぜ「ふんわり」と感じるのかを説明する。</li></ul>
<p class="ask"><b>本社から「硬さの数値はすでにページにある」と言われた場合：</b>確かにありますが、英語の見出しのアコーディオンの中です。確認した日本のソファサイトで、座面のニュートン値を表示しているところはありませんでした。数値は選ぶ助けにならず、助けになるのは言葉です。</p></div>
</div>
</article>
<!-- 5 -->
<article class="finding" id="f5">
<div class="f-head"><div class="f-no">5</div><div>
<h3>サイズやカラーの選択肢に、幅や価格が表示されていない</h3>
<div class="f-tags"><span class="tag">情報設計</span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ · 選択肢のエリア</p>
<p>サイズのピルには名前しかありません：2人掛け、3人掛け、カウチ。何人掛けかの基準はメーカーによって異なるため、壁や部屋に収まるかを確かめるには幅（cm）が必要です。価格はサイズによって変わります（98,000円〜152,000円）が、分かるのはタップした後で、幅はさらに下の「サイズ」アコーディオンの中にあります。3つのカラースウォッチには名前がまったくなく、選んだ色が言葉で示されることはありません。日本の家具サイトでは、選ぶとどうなるか（幅や価格）が、選ぶ前に分かるようになっています。</p>
<div class="shots one"><figure><img data-img="10" src="" alt=""/><figcaption><span class="mk">5</span> 名前のないスウォッチと、幅も価格もないサイズのピル。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4>
<p><b>ACTUS</b>は「おすすめの仕様から選ぶ」をカードで表示し、各カードにサイズと価格を示しています（「サイズ： 幅160cm・シートハイ38cm」「¥184,800税込」）。<b>LOWYA</b>はカラーのタイルごとに価格と在庫を表示しています。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>サイズの選択肢を3行で表示：<span class="ja">「3人掛け／幅200cm／124,000円」</span>。</li>
<li>スウォッチの下にカラー名を表示し、ラベルで選択中の項目を示す（<span class="ja">カラー：グレー</span>）。</li></ul></div>
</div>
</article>
<!-- 6 -->
<article class="finding" id="f6">
<div class="f-head"><div class="f-no">6</div><div>
<h3>機械翻訳のような日本語と、英語のままの表記</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ</span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">サイト全体 · お知らせバー、商品コピー、アコーディオン、レビューウィジェット</p>
<p>細かな文言から、サイトが日本語で書かれたのではなく翻訳されたものだと分かります。商品名の上の「【Best Seller】あなたのリビングに究極の快適さをもたらし、最高のリラックス体験をさせます。」は直訳で、「させます」はソファが購入者にくつろぐよう命じているように読めます。英語のまま残っているのは、お知らせバー（“Newsletter登録で10%OFF ｜ Free Shipping”）、特長のラベル（“Height Adjustable”）、価格のピル（“Free Shipping”）、アコーディオン（“Specifications”）、FAQの見出し（“FAQs”）、そしてレビューウィジェット全体です：“128 reviews”、“Comfy / Looks / Price / Feels firm”、“Newest / Top rated / Photos”、“Customer”、投稿者の属性（“Age: 30s · Household: 2 people”）。最初に表示されるレビューも英語です。日本の購入者はこうした点を、配慮があるか、あるいは欠けているかのサインとして読み取ります。10万円を超える買い物では、それが信頼に影響します。</p>
<div class="shots"><figure><img data-img="11" src="" alt=""/><figcaption><span class="mk">6</span> 翻訳調のキャッチコピーと“Height Adjustable”。</figcaption></figure>
<div style="display:grid;gap:16px"><figure><img data-img="12" src="" alt=""/><figcaption><span class="mk">6</span> お知らせバーで英語と日本語が混在。</figcaption></figure>
<figure><img data-img="13" src="" alt=""/><figcaption><span class="mk">6</span> レビューウィジェットの英語のラベル、タブ、属性。</figcaption></figure></div></div>
<div class="prop"><h4>提案</h4><ul>
<li>すべてのUI文言とレビューウィジェットのロケールを、ネイティブが一度まとめて見直す。用語集を1つ用意する：送料無料、返品保証、よくある質問、円、各オファーの表現は1つに統一。</li>
<li>アコーディオン、タブ、属性のラベルをすべて日本語に（仕様、新着順、年代、家族構成）。</li></ul></div>
</div>
</article>
<!-- 7 -->
<article class="finding" id="f7">
<div class="f-head"><div class="f-no">7</div><div>
<h3>カードの分割払いしか案内されておらず、PayPayやポイントが見えない</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ</span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ · 購入エリア</p>
<p>購入エリアで案内されている支払い方法は、価格の上にあるカードの分割払い（「クレジットカード分割払いなら 月々20,667円（6回）」）の1つだけです。日本ではネット購入者の30.4%がPayPayを使い、約半数がポイント獲得を目的に支払い方法を選んでいます [4]。そのため購入者は、自分の支払い方法が使えるかを購入手続きの前に知りたいと考えます。日本の家具サイトは、支払い方法とポイント還元を価格の近くに表示しています。</p>
<div class="shots one"><figure><img data-img="14" src="" alt=""/><figcaption><span class="mk">7</span> カートの前に表示される支払い方法はカードの分割払いだけ。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4>
<div class="shots one"><figure><img data-img="15" src="" alt=""/><figcaption><b>LOWYA</b>：価格に「（税込）送料無料」、そのすぐ下に獲得ポイント（「800 pt」、アプリでは2倍）。</figcaption></figure></div>
<p style="margin-top:12px"><b>Re:CENO</b>はカートボタンのすぐ下に、R PayとAmazon Payのロゴと「使えます」を表示しています。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>安心ブロック（指摘3）に支払い方法の行を設け、購入手続きで実際に使える方法と一致させる。</li>
<li>PayPayやコンビニ払いがまだ使えない場合は、本社と相談する価値のある事業上の判断です。</li></ul></div>
</div>
</article>
<!-- 8 -->
<article class="finding" id="f8">
<div class="f-head"><div class="f-no">8</div><div>
<h3>レビューの強みが埋もれ、一部が翻訳されていない</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ</span><span class="tag">情報設計</span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ · モバイル</p>
<p>ここはマレオの確かな強みです。128件のレビューで評価4.8、星の評価分布、そして日本に合った投稿者の属性（年代、家族構成、部屋）です。ところがモバイルでは、レビューが始まるのは全12画面のうち約10.5画面目で、ブランドストーリーと比較表の後です。上の方でレビューを示すのは、価格の下にある小さなグレーの「4.8（128）」だけで、リンクもなく、最初の画面ではクーポンのバブルがその上に重なっています。属性は英語で、自分に近い人を探すのにも使えません。日本の購入者の86%が、購入の判断にレビューを参考にしています [5]。</p>
<div class="shots"><figure><img data-img="16" src="" alt=""/><figcaption><span class="mk g">✓</span> 充実したレビューのまとめ。ただしモバイルでは約10画面下。</figcaption></figure>
<figure><img data-img="17" src="" alt=""/><figcaption><span class="mk">8</span> 上の方にある評価はこれだけ：小さく、グレーで、リンクもない。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4><p><b>LOWYA</b>はギャラリーの上に「★4.3 101件のレビュー」を置き、評価分布は約3.7画面目にあります。<b>Re:CENO</b>は250件・★4.9のレビューと評価分布を約3.2画面目に表示し、各レビューに投稿者の年代と家族構成（「30代　ご夫婦・子ども」）を示しています。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>上部に評価へのリンクを置き、安心ブロックのすぐ後にコンパクトな評価のまとめを置いて、すべてのレビューへリンクする。</li>
<li>すでに集めている属性を使った家族構成、部屋、座り心地の絞り込みを、日本語のラベルで設ける。</li></ul></div>
</div>
</article>
<!-- 9 -->
<article class="finding" id="f9">
<div class="f-head"><div class="f-no">9</div><div>
<h3>視覚的なノイズが、特にモバイルで上質さを薄めている</h3>
<div class="f-tags"><span class="tag">ビジュアル</span><span class="tag">情報設計</span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ · モバイル</p>
<p>最初の画面では、メイン写真に4色・4つのバッジ（黒のNEW、赤のSALE、黄色の人気No.1、緑のECO）、価格の周りに3つのピル（枠線の“Free Shipping”、赤の期間限定、青のメルマガのピル）があります。浮いている「10% OFF」のバブルが価格と評価を覆い、チャットボタンが支払いの行の末尾を覆っています。追従バーはメインボタンを繰り返すため、2画面目では同じ「カートに入れる」が2つ表示されます。表示から4秒後には、登録を促すポップアップがページを覆います。メルマガ登録の特典も2つが競合しています：お知らせバー、バブル、ポップアップの10% OFFと、購入エリアの3,000円OFFです。日本の上質なブランドは、要素を絞ることで上質さを伝えています。メッセージは1つ、購入までの導線も1つ、そして余白はたっぷりと取ります。</p>
<div class="shots"><figure><img data-img="18" src="" alt=""/><figcaption><span class="mk">9</span> 最初の画面：4つのバッジ、価格周りの3つのピル、クーポンのバブルとチャットボタン、追従バー。</figcaption></figure>
<figure><img data-img="19" src="" alt=""/><figcaption><span class="mk">9</span> 表示から4秒後の登録ポップアップ。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4><p><b>LOWYA</b>は保証と配送条件を、価格の下に1つの落ち着いたスタイルのタグで表示しています（指摘3を参照）。また追従するカートバーは、購入者がメインボタンより下にスクロールしてから表示されます。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>写真のバッジは多くても1つ。プロモーションは浮いたバブルやポップアップではなく、テキストの1行で。</li>
<li>オファーは一度に1つ、1か所で。</li>
<li>プロモーション用のアクセントカラーは1色、タグのスタイルは落ち着いたもの1種類、プライマリボタンは1画面に1つ。</li>
<li>追従バーは、メインボタンが画面外に出てから表示する。</li></ul>
<p class="ask"><b>本社から「バブルで登録が増える」と言われた場合：</b>その可能性はありますが、判断が行われる画面で価格を覆っています。ボタンの下のテキスト1行にすれば、オファーを残したまま、ページの見やすさを取り戻せます。</p></div>
</div>
</article>
<!-- 10 -->
<article class="finding" id="f10">
<div class="f-head"><div class="f-no">10</div><div>
<h3>「自分に合うソファはどれ？」の入口がナビゲーションにない</h3>
<div class="f-tags"><span class="tag">情報設計</span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">モバイルメニュー · 商品ページ</p>
<p>Sumi、Ren、Mioの3つのソファから選ぶ際の主な手助けはモデル比較ですが、メニューにはありません。ドロワーには3つが名前とNEW・SALEのタグだけで並び、違いを示すものがありません。比較表にたどり着けるのは、商品ページの約10画面目だけです。じっくり比べる日本の購入者は、比較や選び方の入口が最初の方にあることを期待します。</p>
<div class="shots one"><figure><img data-img="20" src="" alt=""/><figcaption><span class="mk">10</span> ソファのメニュー：名前とタグだけで、比較や選び方の入口がない。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4><p><b>ACTUS</b>はソファの選び方ガイド（「理想の暮らしをかなえるソファの選び方」）を公開し、トップページからリンクしています。<b>LOWYA</b>は商品ページに「こちらもよく比較されています」を表示し、<b>IKEA Japan</b>はカテゴリーのカードに各ソファの「硬さ」を言葉で示しています。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>ソファのメニューの一番上に「ソファを比べる・選び方」。</li>
<li>メニューとすべてのカードに、モデルごとに固定の1行：座り心地 · 座面 · こんな方に。</li></ul></div>
</div>
</article>
<!-- 11 -->
<article class="finding" id="f11">
<div class="f-head"><div class="f-no">11</div><div>
<h3>ソファに、搬入時の梱包サイズが表示されていない</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ</span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ</p>
<p>日本の集合住宅では、大型家具を買う前に搬入経路（玄関、廊下、エレベーター）を確認するのが当たり前の手順です。マレオのサイズ表には組み立て後の寸法しかありません。梱包サイズも箱数も、搬入に必要な幅もなく、商品FAQの「玄関から搬入できますか？」への回答は「サイズ表をご確認ください。」だけで、答えのない表に戻されてしまいます。配送にお部屋への運び入れが含まれるかどうかも書かれていません。</p>
<div class="shots one"><figure><img data-img="21" src="" alt=""/><figcaption><span class="mk">11</span> サイズ表：組み立て後の寸法のみで、梱包サイズがない。</figcaption></figure></div>
<div class="ref"><h4>日本でうまくいっている例</h4><p><b>Re:CENO</b>はカートボタンのすぐ下に「搬入経路を確認する」を置き、「梱包サイズ 幅 185cm × 奥行き 105cm × 高さ 48cm」を記載し、配送に「お部屋への運び入れ／梱包材持ち帰り」が含まれることを明記しています。<b>LOWYA</b>は複数の箱で届く商品に価格の下で「複数梱包商品」のタグを付け、梱包サイズと搬入経路の注意書きを示しています。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>サイズの選択肢の隣に「梱包サイズ・箱数・搬入に必要な幅」を置き、搬入経路の確認ガイドへリンクする。</li>
<li>配送に含まれる範囲（玄関先かお部屋まで）を明記し、搬入に関するFAQにきちんと答える。</li></ul></div>
</div>
</article>
<!-- 12 -->
<article class="finding" id="f12">
<div class="f-head"><div class="f-no">12</div><div>
<h3>モバイルの商品ページで、判断に必要なコンテンツが下の方にある</h3>
<div class="f-tags"><span class="tag">情報設計</span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumiの商品ページ、モバイル（390px）</p>
<p>モバイルの商品ページは約12画面分の長さです。購入ボタンは最初の画面のすぐ下にありますが、慎重な日本の購入者が次に確認するもの（配送、比較、レビュー）は一番最後にあり、その前に7セクション・8.3画面分のブランドストーリーが続きます。同じ訴求が繰り返され、「究極の座り心地」は2回、「ふんわりやわらか」は3回出てきます。座り心地を比べたい、レビューを読みたいという購入者は、ストーリー全体をスクロールして通り過ぎなければなりません。</p>
<div class="len">
<div class="row"><span><b>現在</b></span><div class="bar">
<div class="seg" style="left:0;width:12%;background:var(--primary)">購入</div>
<div class="seg" style="left:12%;width:3%;background:var(--border-strong);color:var(--text)"></div>
<div class="seg" style="left:15%;width:69%;background:var(--border-strong);color:var(--text)">ブランドストーリー（7セクション、訴求の繰り返し）</div>
<div class="seg" style="left:84%;width:3%;background:var(--deep)"></div>
<div class="seg" style="left:87%;width:7%;background:var(--deep)">レビュー</div>
<div class="seg" style="left:94%;width:6%;background:var(--border-strong);color:var(--text)"></div></div></div>
<div class="row"><span><b>提案</b></span><div class="bar">
<div class="seg" style="left:0;width:14%;background:var(--primary)">購入</div>
<div class="seg" style="left:14%;width:8%;background:var(--good)">安心</div>
<div class="seg" style="left:22%;width:9%;background:var(--deep)">レビュー</div>
<div class="seg" style="left:31%;width:5%;background:var(--deep)"></div>
<div class="seg" style="left:36%;width:22%;background:var(--border-strong);color:var(--text)">ストーリーは1つ</div>
<div class="seg" style="left:58%;width:10%;background:var(--border-strong);color:var(--text)">詳細</div></div></div>
<div class="scale"><span>0</span><span>3</span><span>6</span><span>9</span><span>12画面</span></div>
</div>
<p style="font-size:13px;color:var(--text-2)">現在のページでの計測値：ボタンは1.3画面目、比較表は10.1画面目から、レビューは10.5画面目から、ページ全体は12.1画面。提案のバーは目安です。</p>
<div class="ref"><h4>日本でうまくいっている例</h4><p><b>LOWYA</b>は価格、選択肢、お届け日、店舗の在庫確認、カートボタンを2.4画面以内に収め、レビューのまとめは約3.7画面目からです。<b>Re:CENO</b>は約3.2画面目でレビューのまとめに到達します。</p></div>
<div class="prop"><h4>提案：商品ページの順序</h4>
<ol class="order">
<li><b>購入エリア</b><span>評価、商品名、価格（税込）、座り心地の尺度、幅と価格つきのサイズ、搬入サイズ、購入ボタン</span></li>
<li><b>安心ブロック</b><span>お届け目安、返品、保証、生地サンプル、支払い方法、チャット</span></li>
<li><b>レビューのまとめ</b><span>評価分布、日本語の属性による絞り込み</span></li>
<li><b>ソファの比較</b><span>まず座り心地、次に座面の構造、サイズ、価格</span></li>
<li><b>ブランドストーリーは1つ</b><span>座り心地 → 素材 → お手入れ → 長く使える理由、各訴求は1回ずつ</span></li>
<li><b>詳細とよくある質問</b><span>固定の5グループ。購入に関する質問を先に</span></li>
</ol></div>
</div>
</article>
<!-- 13 -->
<article class="finding" id="f13">
<div class="f-head"><div class="f-no">13</div><div>
<h3>サイト内検索が商品名には応えるが、購入者の疑問には応えない</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ</span><span class="tag">情報設計</span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">サイト内検索 · モバイル · 2026年11月18日に検証</p>
<p>日本の購入者は、お店に問い合わせる前に自分で疑問を解決しようとします。マレオでは、サービスに関する質問を検索しても商品が返ってきます。「返品」「配送」「ペイペイ」のいずれも同じ3商品が表示され、規約やヘルプのコンテンツは出てきません。FAQは外部のヘルプセンターにあり（フッターのリンクには外部リンクのアイコンが付いています）、検索からはたどり着けません。モバイルでは、検索はメニューのドロワーの中にしかありません。</p>
<div class="shots"><figure><img data-img="22" src="" alt=""/><figcaption><span class="mk">13</span> 「返品」で表示されるのは商品一覧で、返品規約ではない。</figcaption></figure>
<div><div class="scroll"><table class="tbl">
<tr><th>検索語</th><th>表示される結果</th></tr>
<tr><td>返品</td><td class="bad">3商品、規約ページなし</td></tr>
<tr><td>配送</td><td class="bad">3商品、配送情報なし</td></tr>
<tr><td>ペイペイ</td><td class="bad">3商品、支払いについての回答なし</td></tr>
</table></div></div></div>
<div class="ref"><h4>日本でうまくいっている例</h4><p><b>IKEA Japan</b>：「返品」で検索すると「0 製品と114 コンテンツの結果」が表示され、最初に「返品 カスタマーサービス」、次に「返品・交換・キャンセル」が出てきます。<b>LOWYA</b>は自社のメニューのご利用ガイドに、配送について、お支払い方法、返品・交換、よくあるご質問をまとめており、ヘルプのコンテンツが外部ツールではなくサイトの一部になっています。</p></div>
<div class="prop"><h4>提案</h4><ul>
<li>FAQと規約のページを検索結果に含め、サービスに関する語（返品、配送、送料、支払い、保証、搬入）では商品より上に表示する。</li>
<li>よく使われる語の同義語を追加する（ペイペイ → 支払い方法のページ）。</li>
<li>モバイルのヘッダーに検索アイコンを表示する。</li></ul></div>
</div>
</article>
</section>
<!-- CROSS-CHECK -->
<section id="crosscheck">
<div class="sec-head"><div class="no">05</div><div><h2>グローバルブランドとの比較</h2>
<p class="lead">これらの指摘が日本の慣習なのか、単なる家具小売の習慣なのかを確かめるため、家具以外で成熟した日本語サイトを持つグローバルブランド3社（Apple、Dyson、Nike）で同じ点を確認しました。ほとんどの主張は当てはまります。2点は調整が必要だったため、指摘をそれに合わせて修正しています。</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:26%">主張（指摘）</th><th>Apple Japan</th><th>Dyson Japan</th><th>Nike Japan</th><th style="width:20%">判定</th></tr>
<tr><td>日本語にマイナスの字間を使わない（1）</td><td class="ok">標準〜+0.23px</td><td class="ok">標準</td><td class="ok">標準</td><td><b>当てはまる。</b>使っているサイトはなく、マレオは−0.42 / −1.65px。</td></tr>
<tr><td>和文書体を指定している（1）</td><td class="ok">SF Pro JP（ブランドフォントの日本語版を独自に用意）</td><td class="bad">指定なし。DysonFuturaのみで、日本語はマレオと同じくOSのフォントで表示</td><td class="ok">Noto Sans JPを先頭に指定</td><td><b>おおむね当てはまる。</b>一般的な慣行だが、全サイト共通ではない。</td></tr>
<tr><td>行の高さ1.7以上（1）</td><td class="bad">1.36</td><td class="bad">1.33〜1.43</td><td class="ok">1.5〜2.0</td><td><b>調整。</b>副次的な指摘に変更。明らかに詰まりすぎているのは商品名の1.12のみ。</td></tr>
<tr><td>改行が制御されている（2）</td><td class="ok">CSSで文節を考慮した改行、さらに単語内に見えない結合文字</td><td class="ok">文節の区切りで手動改行</td><td>未確認</td><td><b>当てはまる。</b>単語の途中での改行を最も徹底して防いでいるのはApple。</td></tr>
<tr><td>ボタンの近くにお届け目安（3）</td><td class="ok">「最短で翌日に無料でお届け」＋店舗受け取り</td><td class="ok">「送料無料／最短翌日お届け」</td><td>送料・返品無料、日付なし</td><td>検討して買う商品では<b>当てはまる</b>。Nikeは単価の低い商品が中心。</td></tr>
<tr><td>日本の支払い方法が見える（7）</td><td class="ok">あと払い、月々の金額</td><td class="ok">PayPay、ポイント、分割</td><td class="ok">コンビニ払い</td><td><b>当てはまる。</b>いずれも商品ページで日本に合った支払い方法を表示。</td></tr>
<tr><td>ナビゲーションに選び方の手助け（10）</td><td class="ok">メニューに「Macのモデルを比較する」</td><td class="ok">すべてのカテゴリーのメニューに「選び方ガイド」</td><td>—</td><td><b>強く当てはまる。</b></td></tr>
<tr><td>実物を試す・見る手段（IA分析）</td><td class="ok">メニューに「お近くのApple Store」</td><td>—</td><td class="ok">商品ページに「店舗検索」</td><td><b>当てはまる。</b></td></tr>
<tr><td>価格に税込と表示（IA分析、N1）</td><td class="bad">表示なし：「224,800円から」</td><td class="ok">「(税込)」</td><td class="ok">「（税込）」</td><td><b>調整。</b>一般的な慣習だが全サイト共通ではないため、優先度を中に下げた。</td></tr>
<tr><td>訴求に注記を付ける（IA分析、N2）</td><td class="ok">番号付きの注記が随所に（1ページに46件）</td><td class="ok">オファーや条件に※の注記</td><td>—</td><td><b>当てはまる。</b></td></tr>
<tr><td>ラベルは日本語、件数は日本の表記（6）</td><td class="ok">—</td><td class="ok">「k」表記なし</td><td class="ok">「レビュー (0)」</td><td><b>当てはまる。</b>レビューのラベルを英語のままにしているサイトはない。</td></tr>
</table></div>
<p style="font-size:13px;color:var(--text-2)">2026年11月6日に公開中のサイトで計測：MacBook Airの製品ページと購入ページ、Supersonic Travelの商品ページ、Alphafly 4の商品ページ、各ブランドのトップページとメニュー。Webフォントに日本語の字形が含まれているかは、ブラウザで日本語を表示し、OSの代替フォントと比べて確認しました。</p>
</div>
</section>
<!-- NEXT -->
<section id="next">
<div class="sec-head"><div class="no">06</div><div><h2>次のステップ</h2>
<p class="lead">ほとんどの変更は、テーマのCSS、コンテンツ、小さなコンポーネントで対応できます。3つのステップを提案します。いずれもマレオ自身のA/Bテストで検証できます。</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:190px">ステップ</th><th>指摘</th><th>変更の種類</th><th>検証する仮説</th></tr>
<tr><td><b>1 · ローカライズの層</b></td><td>1、2、6、および常に見える安心ブロック（3）</td><td>CSS、コピー、ロケールキー</td><td>日本語のタイポグラフィと常に見える安心ブロック → 商品ページの直帰率が下がり、カート追加が増える</td></tr>
<tr><td><b>2 · 判断の支援</b></td><td>3（お届け目安、支払い方法）、4、5、7、8、11</td><td>コンポーネント、コンテンツ、データ</td><td>座り心地の尺度と選択肢の価格表示 → 商品ページからカートへの移行率が上がり、「硬すぎた」による返品が減る</td></tr>
<tr><td><b>3 · 上質な構成</b></td><td>9、10、12、13</td><td>テンプレートと情報設計</td><td>落ち着いた最初の画面と、判断に必要なコンテンツを先に → モバイルのカート追加率が上がる</td></tr>
</table></div>
<p>次に、<b>モバイルのSumi商品ページ</b>のモックを作成し、現在のマレオのデザインシステムの範囲でステップ1〜2を適用します。本社が変化を文章ではなく画面で確認できるようにするためです。</p>
</div>
</section>
<!-- APPENDIX -->
<section id="appendix">
<div class="sec-head"><div class="no">A</div><div><h2>付録</h2>
<p class="lead">レビュー中に見つかった、一般的なユーザビリティとアクセシビリティの課題です。日本に固有のものではありませんが、ローカライズの作業とあわせて直す価値があります。</p></div></div>
<div class="sec-body">
<h3>A1 · アクセシビリティ（WCAG 2.2 AA。JIS X 8341-3とも整合）</h3>
<div class="scroll"><table class="tbl">
<tr><th>要素</th><th>計測値</th><th>基準</th></tr>
<tr><td>パンくずリスト、評価、補助テキスト（グレー #8A827A）</td><td class="bad">背景色に対して3.57 : 1</td><td>4.5 : 1</td></tr>
<tr><td>「人気No.1」バッジ、黄色地に白の11px</td><td class="bad">2.17 : 1</td><td>4.5 : 1</td></tr>
<tr><td>レビューの星、白地に黄色</td><td class="bad">2.17 : 1</td><td>3 : 1</td></tr>
<tr><td>未選択のサイズのピルの枠線 #CFC7BC</td><td class="bad">1.67 : 1</td><td>3 : 1</td></tr>
<tr><td>クーポンのバブルと期間限定のピル（赤地に白）</td><td class="ok">4.68 : 1</td><td>4.5 : 1</td></tr>
<tr><td>プライマリボタンのラベル（ネイビー地に白）</td><td class="ok">12.98 : 1</td><td>4.5 : 1</td></tr>
</table></div>
<p style="font-size:14px">そのほか：商品画像8枚のうち7枚に<code>alt</code>テキストがありません。メニュー、アカウント、カートのアイコンは23〜24pxのSVGでボタンではないため、キーボードで操作できず、44 × 44pxのターゲットサイズにも届きません。10個のⓘアイコンにはアクセシブルな名前がありません。マレオのデザインシステムにはすでに補助テキストの色（#777165、4.54 : 1で基準を満たす）が定義されており、このグレーと置き換えられます。</p>
<h3>A2 · 構造と仕上げ</h3>
<div class="scroll"><table class="tbl">
<tr><th style="width:44%">課題</th><th>提案</th></tr>
<tr><td>「よくある質問」から始まる、階層のない5つのアコーディオン。座り心地は英語の見出しの「Specifications」の中。「保証」は1行のみ</td><td>すべての商品ページで固定の5グループ、購入に関する質問を先に</td></tr>
<tr><td>モデル比較では硬さがx/5の数字だけで、おすすめがない</td><td>座り心地（言葉）→ 座面 → サイズ → 価格 → こんな方に</td></tr>
<tr><td>メルマガの特典が2つ（10%と3,000円）、4か所に表示：お知らせバー、ポップアップ、浮いたバブル、購入エリアのピル</td><td>特典は1つ、表示は1か所に</td></tr>
<tr><td>サービスのピルの列が画面の端からはみ出す</td><td>画面幅に収まる行に（指摘3）</td></tr>
<tr><td>追従するページ内リンクが逆順（Q&amp;A / 口コミ / 詳細）で、比較表がない</td><td>ページの順序どおりにし、比較表も含める</td></tr>
<tr><td>商品FAQの回答が別の場所へ誘導している（「詳しくはヘルプセンターをご覧ください」「サイズ表をご確認ください」）</td><td>ページ上で答える：返品条件、搬入、お届け日</td></tr>
<tr><td>チャットボタンが追従バーと支払いの行に重なり、10% OFFのバブルが価格を覆っている</td><td>チャットは安心ブロックと追従バーに。浮いた要素はなくす</td></tr>
<tr><td>追従バーがメインボタンと同時に表示される</td><td>メインボタンが画面外に出てから表示する</td></tr>
<tr><td>ブランドストーリーで同じ訴求を繰り返している（「究極の座り心地」「ふんわりやわらか」）</td><td>ストーリーは1つ、各訴求は1回ずつ</td></tr>
<tr><td>ストーリー内の4つのタイルで画像が表示されていない</td><td>素材を確認する</td></tr>
<tr><td>メインボタンの「カートに入れる」が返品保証に触れていない</td><td>補足の1行を追加（「60日間返品保証つき」）</td></tr>
<tr><td>1つの商品ページにⓘが10個（特長、支払い、硬さ、サービスのピル）。重要な情報もそれぞれタップが必要</td><td>重要な1行はそのまま表示し、詳細はタップで。IA分析のIA-9を参照</td></tr>
</table></div>
<h3>A3 · 範囲の限界と確認事項</h3>
<div class="grid2">
<div class="panel"><h4>本ドラフトの対象外</h4><ul>
<li>トップページ、カテゴリーページ、カートと購入手続き（そのため使える支払い方法は未確認）</li>
<li>PCのレイアウト、タブレットと320pxの画面幅</li>
<li>ホバー、フォーカス、エラーの状態と、情報アイコンのモーダル</li>
<li>WindowsとAndroidでのフォントの表示（CSSから推定）</li>
<li>アクセス解析と購入までの離脱データ、実際のパフォーマンス（LCP / INP / CLS）</li></ul></div>
<div class="panel"><h4>マレオにご確認いただきたいこと</h4><ul>
<li>「人気No.1」と「購入者満足度98%」の根拠と時点</li>
<li>購入手続きで使える支払い方法、お届け目安のデータ</li>
<li>返送料</li>
<li>各サイズの梱包サイズと箱数</li>
<li>御社チームですでに把握されている課題（方向性を合わせるため）</li>
<li>影響の大きさを見積もるためのアクセス解析の閲覧権限</li></ul></div>
</div>
<h3>A4 · 進め方</h3>
<p style="font-size:14px">レビュー担当者が主導したエキスパートレビューです。根拠は、390pxでの商品ページとそのメニュー、検索、アコーディオンの各状態のフルページキャプチャ、保存したページのコード、ブラウザで計測したスタイルです。デザイントークンはコントラストと一貫性を確認しました。ページは3つの別々の視点（ユーザビリティ、画面ごとのUIとアクセシビリティ、情報設計）から見ています。これに日本市場の調査と、LOWYA、unico、Re:CENO、ACTUS、IKEA Japan、NOYESの公開中のサイトでのベンチマークを組み合わせ、Apple、Dyson、Nike Japanで妥当性を確認しました。すべての指摘は2026年11月18日に再確認しています。ツールをどこで使い、作業をどう確認したかは<a href="index.html#how">成果物一覧</a>で説明しています。</p>
<h3>A5 · 出典</h3>
<ol class="sources">
<li>経済産業省 電子商取引に関する市場調査（スマートフォン比率58.7%、2023年） — <a href="https://netshop.impress.co.jp/node/12929">ネットショップ担当者フォーラム</a></li>
<li>システムリサーチ / あるるモール、到着予定日に関する調査、2026年9月 — <a href="https://ecnomikata.com/ecnews/marketing/51794/">ECのミカタ</a>; <a href="https://dxmagazine.jp/?p=223380">DXマガジン</a></li>
<li>マイボイスコム 宅配便サービスの利用に関する調査、2026年2月 — <a href="https://ecnomikata.com/ecnews/49593/">ECのミカタ</a></li>
<li>GMOペイメントゲートウェイ、決済手段利用意向調査 2025 — <a href="https://group.gmo/pdf/news/gmo_news_9798.pdf">プレスリリース（PDF）</a></li>
<li>ラクス、ネットショッピングにおける購買心理に関する調査、2025年7月 — <a href="https://netshop.impress.co.jp/node/14386">ネットショップ担当者フォーラム</a></li>
<li>システムリサーチ、通販における信頼確認行動に関する調査、2026年3月 — <a href="https://ecnomikata.com/ecnews/marketing/49993/">ECのミカタ</a></li>
<li>W3C、日本語組版処理の要件（JLReq） — <a href="https://www.w3.org/TR/jlreq/">w3.org/TR/jlreq</a></li>
<li>Windowsでの游ゴシックの表示 — <a href="https://neos21.github.io/poc-perfect-yu-gothic/">検証ページ</a>; <a href="https://cssnite.jp/lp/lp47/followup/CSSNiteLP47-s7-yamada.pdf">CSS Nite LP47（PDF）</a></li>
<li>ベンチマークしたページ、2026年11月18日：<a href="https://www.low-ya.com/goods/PFMM4">LOWYA</a> · <a href="https://www.unico-fan.co.jp/products/u13080027426z0001">unico</a> · <a href="https://www.receno.com/three2/agra3.php">Re:CENO</a> · <a href="https://online.actus-interior.com/item/2305827/">ACTUS</a> · <a href="https://www.ikea.com/jp/ja/p/kivik-2-seat-sofa-tibbleby-beige-grey-s19440594/">IKEA Japan</a> · <a href="https://www.ny-k.co.jp/three_piece/decibel_c4_wide/">NOYES</a></li>
</ol>
</div>
</section>
</main>
<footer><div class="wrap">レビュー担当者作成、Mareo Japan向けドラフト、2026年11月18日。他社のスクリーンショットは比較のためにのみ掲載しています。公開ページに基づくもので、カート、購入手続き、アクセス解析にはアクセスしていません。</div></footer>
<div id="lb"><img alt=""/></div>
</template>

<noscript><style>#app{display:none}</style>

<div class="backbar"><div class="wrap"><a href="index.html">← All deliverables</a><span>DELIVERABLE 1 OF 3 · LOCALISATION REVIEW</span></div></div>
<header class="cover">
<div class="wrap">
<div class="kicker">JAPANESE-MARKET LOCALISATION DESIGN REVIEW · JP.MAREO.EXAMPLE</div>
<h1>The Japanese storefront still reads like the Danish site, and that is costing both conversions and premium feel</h1>
<p>Thirteen localisation findings across information architecture, functionality and content, and visual design. Each finding names the issue, explains why it matters to Japanese shoppers, and shows a Japanese site that already does it well.</p>
<dl>
<div><dt>FOR</dt><dd>Mareo Japan</dd></div>
<div><dt>SCOPE</dt><dd>Sumi sofa product page, header, menu and search</dd></div>
<div><dt>FOCUS</dt><dd>Mobile purchase and premium feel</dd></div>
<div><dt>REVIEWED</dt><dd>18 November 2026 · the reviewer</dd></div>
</dl>
<div class="status">DRAFT · SAMPLE DELIVERABLE</div>
</div>
</header>
<nav class="toc"><div class="wrap">
<a href="#overview">Overview</a><a href="#summary">Summary</a><a href="#context">Japanese market</a><a href="#findings">Findings 1–13</a><a href="#works">What works</a><a href="#crosscheck">Global cross-check</a><a href="#next">Next steps</a><a href="#appendix">Appendix</a>
</div></nav>
<main class="wrap">
<!-- OVERVIEW -->
<section id="overview">
<div class="sec-head"><div class="no">01</div><div><h2>Overview</h2>
<p class="lead">Mareo's design, photography and service offer (60-day returns guarantee, free delivery with a date choice, free fabric samples) are strong. The Japanese site, though, is the Danish Shopify template with translated text. The Japanese layer was never designed: how Japanese text is set, the information Japanese shoppers check before buying, and how choices and prices are presented.</p></div></div>
<div class="sec-body">
<p>This review deliberately looks at the site <b>through a Japanese-market lens</b>. It isn't a generic heuristic audit. We kept a finding in the main section only when the issue is specific to Japanese shoppers, Japanese language or Japanese e-commerce conventions, and when a Japanese site can be shown doing it better. General usability and accessibility issues are listed separately in the appendix.</p>
<div class="scroll"><table class="tbl">
<tr><th style="width:200px">Perspective</th><th>What we looked at</th></tr>
<tr><td><b>情報設計</b><br/><small>Information architecture</small></td><td>Navigation, page-to-page journey (遷移), page order, and where decision information sits relative to the purchase button</td></tr>
<tr><td><b>機能・コンテンツ</b><br/><small>Functionality and content</small></td><td>Delivery, payment, review and spec information Japanese shoppers expect; naturalness of the Japanese copy</td></tr>
<tr><td><b>ビジュアル</b><br/><small>Visual design</small></td><td>Japanese typography and line breaking; the visual cues that read as premium to a Japanese audience</td></tr>
</table></div>
<p class="small" style="font-size:13px;color:var(--text-2)">Priority: <span class="dot high">高い</span> directly affects the purchase decision or how the brand is perceived in Japan · <span class="dot mid">中</span> clear friction, lower reach. Red markers on screenshots carry the finding number. Green labels mark patterns that already work.</p>
</div>
</section>
<!-- SUMMARY -->
<section id="summary">
<div class="sec-head"><div class="no">02</div><div><h2>Summary by perspective</h2>
<p class="lead">Seven of the thirteen findings are high priority. Most are fixed with theme-level CSS, content or small components, so they can go to the Copenhagen design team as contained changes.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl persp">
<tr><th style="width:36%">Perspective</th><th>Findings</th></tr>
<tr><td>情報設計<small>Information architecture</small><p class="short">The information Japanese shoppers check before buying exists, but it sits behind info icons, in accordions or on an external help centre rather than next to the button.</p></td><td><ul class="flist">
<li><span class="n">3</span><a href="#f3">Delivery and trust information isn't visible at the moment of purchase</a><span class="dot high">高い</span></li>
<li><span class="n">5</span><a href="#f5">Size and colour options hide their width and price</a><span class="dot high">高い</span></li>
<li><span class="n">10</span><a href="#f10">“Which sofa is right for me?” has no place in the navigation</a><span class="dot mid">中</span></li>
<li><span class="n">12</span><a href="#f12">The mobile product page puts decision content far down</a><span class="dot mid">中</span></li></ul></td></tr>
<tr><td>機能・コンテンツ<small>Functionality and content</small><p class="short">Content was translated rather than localised: the way Japanese shoppers judge firmness, payment, reviews and carry-in logistics is missing.</p></td><td><ul class="flist">
<li><span class="n">4</span><a href="#f4">Seat firmness isn't described the way Japanese sofa shoppers expect, and contradicts itself</a><span class="dot high">高い</span></li>
<li><span class="n">6</span><a href="#f6">Machine-translated and English strings</a><span class="dot high">高い</span></li>
<li><span class="n">7</span><a href="#f7">Only card instalments are mentioned; PayPay and points are invisible</a><span class="dot mid">中</span></li>
<li><span class="n">8</span><a href="#f8">Review strengths are buried and partly untranslated</a><span class="dot mid">中</span></li>
<li><span class="n">11</span><a href="#f11">The sofa doesn't show its carry-in box size</a><span class="dot mid">中</span></li>
<li><span class="n">13</span><a href="#f13">Search answers product names, not shoppers' questions</a><span class="dot mid">中</span></li></ul></td></tr>
<tr><td>ビジュアル<small>Visual design</small><p class="short">These are the details a Japanese reader notices instantly. They are most likely why the site feels “translated” and less premium than the brand.</p></td><td><ul class="flist">
<li><span class="n">1</span><a href="#f1">Japanese text is set with Latin typography rules</a><span class="dot high">高い</span></li>
<li><span class="n">2</span><a href="#f2">Words and product names break mid-word</a><span class="dot high">高い</span></li>
<li><span class="n">9</span><a href="#f9">Visual noise dilutes the premium feel, especially on mobile</a><span class="dot high">高い</span></li></ul></td></tr>
</table></div>
<h3 id="works">What already works, and should be kept</h3>
<p style="font-size:14px">Recommendations shouldn't put these at risk. Several are already well suited to Japan.</p>
<div class="grid2">
<div class="panel"><h4>LOCALISED WELL</h4><ul>
<li>Lifestyle photography shows a Japanese apartment: wood-look flooring, sliding doors, sheer curtains, and a sofa sized for the room. Shoppers can picture it in their own home.</li>
<li>The service offer matches what Japanese buyers look for: a date choice for delivery (お届け日指定), a returns guarantee (返品保証) and free fabric samples (finding 3 is about placement, not substance).</li>
<li>Reviews already collect reviewer attributes (age, household, room), which is how Japanese shoppers judge whether a review applies to them (finding 8 is about labels and placement).</li>
<li>The footer gives a phone number with opening hours (10:00–17:00, closed weekends and holidays).</li>
<li>All three colours are photographed on the same sofa in the same light, so shoppers can compare colour honestly.</li>
<li>The size table includes seat height and weight, two figures Japanese buyers check for floor-level living and moving.</li></ul></div>
<div class="panel"><h4>SOUND UI FOUNDATIONS</h4><ul>
<li>A consistent button system: one navy primary colour, pill shape, clear primary vs secondary styles.</li>
<li>A short path to buy: the button sits at 1.3 screens on mobile, with size preselected, and a sticky purchase bar.</li>
<li>Breadcrumbs on the product page.</li>
<li>Service pills under the button on mobile (finding 3 is about extending them, not inventing them).</li>
<li>A model comparison table exists for Sumi, Ren and Mio (finding 12 is about where it sits).</li>
<li>Rich review content: 128 reviews at 4.8 with a star histogram (finding 8 is about placement).</li></ul></div>
</div>
</div>
</section>
<!-- CONTEXT -->
<section id="context">
<div class="sec-head"><div class="no">03</div><div><h2>What Japanese shoppers expect</h2>
<p class="lead">The findings rest on recent Japanese research (sources accessed 6 November 2026) and on measurements taken from Japanese furniture sites on 18 November 2026. Sources are listed in the appendix.</p></div></div>
<div class="sec-body">
<div class="facts">
<div><b>58.7%</b><span>of Japan's B2C goods e-commerce is bought on smartphones</span><em>METI, 2023 [1]</em></div>
<div><b>91.3%</b><span>check the expected arrival date before buying. Without it, 25% buy elsewhere and 12% give up</span><em>System Research, 2026 [2]</em></div>
<div><b>86%</b><span>use reviews when deciding what to buy; 48% hold off after negative reviews</span><em>Rakus, n=1,053 [5]</em></div>
<div><b>30.4%</b><span>use PayPay for online goods; about half choose a payment method to earn points</span><em>GMO-PG, 2025 [4]</em></div>
<div><b>55.2%</b><span>use date/time-specified delivery; over 60% of women in their 40s–60s</span><em>MyVoice, n=11,420 [3]</em></div>
<div><b>1.5–2.0</b><span>line height implied by the W3C Japanese text-layout standard (line gap ½–1em)</span><em>W3C JLReq §2.4.2 [7]</em></div>
</div>
<h3>Japanese typography: Mareo against Japanese benchmarks</h3>
<div class="scroll"><table class="tbl">
<tr><th>Site</th><th>Font stack (first entries)</th><th>Body text</th><th>Letter-spacing</th></tr>
<tr><td><b>Mareo JP</b></td><td class="bad">“Jost”, “Helvetica Neue”, Arial (Latin only)</td><td>line-height 1.3 (1.12 on the product name); 11.5–14px common on mobile</td><td class="bad">−0.42px body, −1.65px product name</td></tr>
<tr><td>Mareo DK</td><td>“Jost”, “Helvetica Neue”, Arial</td><td>same template</td><td>−0.03em</td></tr>
<tr><td><b>IKEA Japan</b> (global brand)</td><td class="ok">“Noto IKEA”, “Noto Sans JP”, …</td><td>14px, 1.5</td><td class="ok">normal</td></tr>
<tr><td><b>unico</b> (JP furniture)</td><td class="ok">“Noto Sans JP”, 游ゴシック Medium, …</td><td class="ok">14px, 1.5–1.8</td><td class="ok">+0.6px</td></tr>
<tr><td><b>Re:CENO</b> (JP furniture)</td><td class="ok">游ゴシック, “Yu Gothic”, …</td><td class="ok">12–13.6px, 1.6–1.8</td><td class="ok">normal</td></tr>
<tr><td><b>LOWYA</b></td><td class="ok">“Noto Sans JP”, メイリオ, Hiragino…</td><td>12px, 1.5 (dense retail)</td><td class="ok">normal</td></tr>
<tr><td><b>ACTUS</b></td><td class="ok">游ゴシック, “Yu Gothic Pr6N”, …</td><td>11.4–13.5px, 1.5–1.8</td><td class="ok">normal</td></tr>
</table></div>
</div>
</section>
<!-- FINDINGS -->
<section id="findings">
<div class="sec-head"><div class="no">04</div><div><h2>Findings</h2>
<p class="lead">Ordered by where shoppers meet them: how the text reads, what they need at the purchase button, how they choose, and how the site feels as a whole.</p></div></div>
<!-- 1 -->
<article class="finding" id="f1">
<div class="f-head"><div class="f-no">1</div><div>
<h3>Japanese text is set with Latin typography rules</h3>
<div class="f-tags"><span class="tag">ビジュアル <small>Visual</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Site-wide · mobile</p>
<p>The only declared fonts are Jost, Helvetica Neue and Arial, all Latin typefaces. Every kana and kanji falls back to whatever the device has: Hiragino on Apple devices, Yu Gothic or Meiryo on Windows (Yu Gothic Regular renders thin and faint there [8]), Noto on Android. On top of that, Japanese is tracked at −0.03em (−0.42px on body copy) and the product name at −0.05em (−1.65px), a Latin display technique that squeezes full-width characters together. Body copy runs at line-height 1.3, the product name at 1.12. Japanese readers perceive this as cramped and “translated” without knowing why. Every Japanese benchmark we measured declares a Japanese face, and none of them uses negative tracking on Japanese (section 03).</p>
<div class="shots one"><figure><img src="data:," alt=""/><figcaption><span class="mk">1</span> Negative tracking and line-height 1.3 on the brand story. Sumi product page, mobile.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<ul><li><b>IKEA Japan</b> keeps its global design system and adds Noto Sans JP after its brand font, with normal tracking. It's the clearest precedent that localising type doesn't break a global brand.</li>
<li><b>unico</b> sets body copy in Noto Sans JP at 14px with line-height up to 1.8 and +0.6px tracking.</li></ul></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>One <code>:lang(ja)</code> CSS layer: <code>"Jost", "Noto Sans JP", "Hiragino Sans", Meiryo, sans-serif</code>. Jost keeps rendering Latin letters and numerals, so the brand font stays.</li>
<li>Tracking 0 to +0.04em for Japanese. Keep body line-height at 1.5 or more and longer copy around 1.7; lift the product name from 1.12 to at least 1.4. Line height on its own is a secondary issue: Apple and Dyson use about 1.4.</li></ul>
<p class="ask"><b>If HQ asks “Jost is our global font”:</b> it stays. A Japanese face is added after it in the stack for kana and kanji, exactly as IKEA does.</p>
<p class="ask"><b>If HQ asks “LOWYA uses small 12px text too”:</b> it does, as a dense catalogue retailer. But LOWYA names Japanese fonts and never uses negative tracking. Size isn't the main issue here; the missing Japanese font, the tracking and the broken words are.</p></div>
</div>
</article>
<!-- 2 -->
<article class="finding" id="f2">
<div class="f-head"><div class="f-no">2</div><div>
<h3>Words and product names break mid-word</h3>
<div class="f-tags"><span class="tag">ビジュアル <small>Visual</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Product name and headings · mobile</p>
<p>Japanese has no spaces, so browsers break lines anywhere unless told otherwise, and the product name is explicitly set to <code>line-break: anywhere</code>. On a 390px phone the name reads <span lang="ja">「マレオ スクエアアームソ／ファ」</span>, leaving <span lang="ja">「ファ」</span> alone at the start of a line, and the first story heading splits a word as <span lang="ja">「もっと自／由に。」</span>. For a premium brand these are the most visible signs of a translated site.</p>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><span class="mk">2</span> <span lang="ja">「スクエアアームソ／ファ」</span>, mobile.</figcaption></figure>
<figure><img src="data:," alt=""/><figcaption><span class="mk">2</span> <span lang="ja">「もっと自／由に。」</span> in the first story heading, mobile.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>unico</b> breaks its feature headings at phrase boundaries by hand (<span lang="ja">「自由に組み合わせて楽しめる／軽やかな印象のモジュールソファ」</span>). It isn't universal: LOWYA and Re:CENO set <code>word-break: break-all</code> on product text. Japanese typesetting has standard line-breaking rules (JLReq 禁則処理 [7]).</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li><code>word-break: auto-phrase</code> on headings, product names, pills and chips (Chrome/Edge), with BudouX or <code>&lt;wbr&gt;</code> as fallback for Safari; remove <code>line-break: anywhere</code> from the name.</li>
<li><code>white-space: nowrap</code> on short option labels such as size names.</li></ul></div>
</div>
</article>
<!-- 3 -->
<article class="finding" id="f3">
<div class="f-head"><div class="f-no">3</div><div>
<h3>Delivery and trust information isn't visible at the moment of purchase</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · mobile</p>
<p>Mareo offers exactly what Japanese shoppers look for: a returns guarantee, free delivery with a date choice, free fabric samples and an extended warranty. Under the button they appear as four pills, each needing a tap on an info icon, and the row runs off the edge of the screen, so the fourth pill is cut in half. <b>No arrival estimate appears anywhere</b>: the <span lang="ja">「お届け・返品」</span> accordion says <span lang="ja">「お届け日はご注文確認メールにてお知らせします」</span>, after the order. The return conditions are sent to an external help centre, the return shipping cost isn't stated, and the extended warranty says only <span lang="ja">「（有料）」</span>. 91.3% of Japanese shoppers check the arrival date before buying [2].</p>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><span class="mk">3</span> Four ⓘ pills under the button; the fourth is cut off at the screen edge.</figcaption></figure>
<figure><img src="data:," alt=""/><figcaption><span class="mk">3</span> The delivery date comes by email after ordering; returns point to the help centre.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><b>LOWYA</b>: <span lang="ja">「お届け予定日：11月25日(水)」</span> for the shopper's postcode, guarantee and delivery conditions as tags, and a store check, all above the cart button.</figcaption></figure>
<figure><img src="data:," alt=""/><figcaption><b>IKEA Japan</b>: <span lang="ja">「365日以内であれば、全額返金いたします」</span> directly under the cart button.</figcaption></figure></div></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>Quick fix: turn the four pills into a visible block of rows that fits the screen.</li>
<li>Extend it to five lines: <span class="ja">お届け目安・日時指定 / 60日間返品保証・返送料 / フレーム5年保証 / 生地サンプル無料 / お支払い方法</span>.</li>
<li>Show <span lang="ja">「最短○月○日お届け」</span> on the product page, by postcode if logistics data allows (unico shows <span lang="ja">「お届け日の目安」</span> directly under the button).</li></ul>
<p class="ask"><b>If HQ asks “the information is already on the site”:</b> it is, but not where the decision is made. LOWYA and IKEA put the same facts next to the button.</p></div>
</div>
</article>
<!-- 4 -->
<article class="finding" id="f4">
<div class="f-head"><div class="f-no">4</div><div>
<h3>Seat firmness isn't described the way Japanese sofa shoppers expect, and contradicts itself</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · model comparison</p>
<p>Japanese sofa retailers commonly describe seat firmness in words, often on a やわらかめ / ふつう / かため scale. Mareo shows a <span lang="ja">「硬さ 4 / 5」</span> bar above <span lang="ja">「体を包み込む、ふんわりやわらかな座り心地」</span>, while the <span lang="ja">「Specifications」</span> accordion gives 230N for the seat foam and reviewers write <span lang="ja">「思ったより硬め」</span>. The copy promises a soft seat that the spec and the reviews don't support. The model comparison repeats the problem in numbers only (Sumi 4/5, Ren 2/5, Mio 3/5), so a shopper can't tell from the words which sofa is soft and which is firm.</p>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><span class="mk">4</span> <span lang="ja">「ふんわりやわらか」</span> above a 4/5 bar, and 230N in Specifications on the same screen.</figcaption></figure>
<figure><img src="data:," alt=""/><figcaption><span class="mk">4</span> The comparison gives firmness as numbers out of 5, with no words.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<div class="shots one"><figure><img src="data:," alt=""/><figcaption><b>unico</b>: <span lang="ja">「座り心地」</span> with separate 座面 and 背面 bars on a やわらかめ / 普通 / 硬め scale.</figcaption></figure></div>
<ul style="margin-top:12px"><li><b>IKEA Japan</b> shows a <span lang="ja">「硬さ」</span> quick fact in words on its sofa cards (values such as 1番やわらかめ and ふつう).</li>
<li><b>NOYES</b> labels its seats in words (<span lang="ja">「やや硬め」</span>) with a dot meter for seat and back.</li></ul></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A firmness scale per model in the buy box (やわらかめ ← → かため), with a one-line plain-language verdict.</li>
<li>Words, not numbers, in the comparison table, with seat firmness as an early row.</li>
<li>Align the tagline with the spec and the reviews, or explain why the seat feels <span lang="ja">「ふんわり」</span>.</li></ul>
<p class="ask"><b>If HQ asks “the hardness value is already on the page”:</b> it is, inside an English-titled accordion. No Japanese sofa site we checked shows a newton value for seats, so the number doesn't help anyone choose; the words do.</p></div>
</div>
</article>
<!-- 5 -->
<article class="finding" id="f5">
<div class="f-head"><div class="f-no">5</div><div>
<h3>Size and colour options hide their width and price</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · option area</p>
<p>Size pills show only the name: 2人掛け, 3人掛け, カウチ. Seat counts aren't standardised between makers, so shoppers need the width in cm to check the wall and the room. The price changes by size (98,000円 to 152,000円), but only after a tap, and the widths sit inside the <span lang="ja">「サイズ」</span> accordion further down. The three colour swatches have no names at all, so the selected colour is never stated in words. Japanese furniture sites show the consequence of each option before it is chosen.</p>
<div class="shots one"><figure><img src="data:," alt=""/><figcaption><span class="mk">5</span> Unnamed swatches and size pills with no width or price.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<p><b>ACTUS</b> opens <span lang="ja">「おすすめの仕様から選ぶ」</span> as cards, each showing size and price (<span lang="ja">「サイズ： 幅160cm・シートハイ38cm」</span> <span lang="ja">「¥184,800税込」</span>). <b>LOWYA</b> shows the price and stock on every colour tile.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>Size options with three lines: <span class="ja">「3人掛け／幅200cm／124,000円」</span>.</li>
<li>Colour names under the swatches, and the selected option named in the label (<span class="ja">カラー：グレー</span>).</li></ul></div>
</div>
</article>
<!-- 6 -->
<article class="finding" id="f6">
<div class="f-head"><div class="f-no">6</div><div>
<h3>Machine-translated and English strings</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Site-wide · announcement bar, product copy, accordions, review widget</p>
<p>Small strings show the site was translated rather than written in Japanese. The line above the name, <span lang="ja">「【Best Seller】あなたのリビングに究極の快適さをもたらし、最高のリラックス体験をさせます。」</span>, is a literal translation, and <span lang="ja">「させます」</span> reads as if the sofa is ordering the shopper to relax. English stays in the announcement bar (“Newsletter登録で10%OFF ｜ Free Shipping”), a feature label (“Height Adjustable”), the price pill (“Free Shipping”), an accordion (“Specifications”), the FAQ heading (“FAQs”), and the whole review widget: “128 reviews”, “Comfy / Looks / Price / Feels firm”, “Newest / Top rated / Photos”, “Customer” and the reviewer attributes (“Age: 30s · Household: 2 people”). The first review shown is in English. Japanese buyers read these as a sign of care, or of its absence, which affects trust in a 100,000円+ purchase.</p>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><span class="mk">6</span> The translated tagline and “Height Adjustable”.</figcaption></figure>
<div style="display:grid;gap:16px"><figure><img src="data:," alt=""/><figcaption><span class="mk">6</span> The announcement bar mixes English and Japanese.</figcaption></figure>
<figure><img src="data:," alt=""/><figcaption><span class="mk">6</span> English labels, tabs and attributes in the review widget.</figcaption></figure></div></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A one-off native review of every UI string and the review widget's locale, with one glossary: 送料無料, 返品保証, よくある質問, 円, one wording for each offer.</li>
<li>Japanese labels for every accordion, tab and attribute (仕様, 新着順, 年代, 家族構成).</li></ul></div>
</div>
</article>
<!-- 7 -->
<article class="finding" id="f7">
<div class="f-head"><div class="f-no">7</div><div>
<h3>Only card instalments are mentioned; PayPay and points are invisible</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · buy box</p>
<p>The buy box mentions one payment option, card instalments (<span lang="ja">「クレジットカード分割払いなら 月々20,667円（6回）」</span>), above the price. In Japan, 30.4% of online shoppers use PayPay and about half choose a method to earn points [4], so shoppers want to know before checkout whether their method is accepted. Japanese furniture sites state payment options and point earning near the price.</p>
<div class="shots one"><figure><img src="data:," alt=""/><figcaption><span class="mk">7</span> Card instalments are the only method shown before the cart.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4>
<div class="shots one"><figure><img src="data:," alt=""/><figcaption><b>LOWYA</b>: <span lang="ja">「（税込）送料無料」</span> on the price, then the points earned (<span lang="ja">「800 pt」</span>, doubled in its app) directly under it.</figcaption></figure></div>
<p style="margin-top:12px"><b>Re:CENO</b> shows the R Pay and Amazon Pay logos with <span lang="ja">「使えます」</span> directly under its cart button.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A row of payment methods in the trust block (finding 3), matching what checkout actually accepts.</li>
<li>If PayPay or konbini payment isn't available yet, that is a business decision worth raising with HQ.</li></ul></div>
</div>
</article>
<!-- 8 -->
<article class="finding" id="f8">
<div class="f-head"><div class="f-no">8</div><div>
<h3>Review strengths are buried and partly untranslated</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · mobile</p>
<p>Mareo has a real asset here: 128 reviews at 4.8, a star histogram, and reviewer attributes that suit Japan well (age, household, room). But on mobile the reviews start around screen 10.5 of 12, after the brand story and the comparison. Near the top, the only sign of them is a small grey <span lang="ja">「4.8（128）」</span> under the price, with no link, and on the first screen the coupon bubble sits on top of it. The attributes are in English and can't be used to find people like you. 86% of Japanese shoppers use reviews when deciding [5].</p>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><span class="mk g">✓</span> A strong review summary, but about 10 screens down on mobile.</figcaption></figure>
<figure><img src="data:," alt=""/><figcaption><span class="mk">8</span> The only rating near the top: small, grey, no link.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>LOWYA</b> places <span lang="ja">「★4.3 101件のレビュー」</span> above the gallery and its histogram at about screen 3.7. <b>Re:CENO</b> shows 250 reviews at ★4.9 with a histogram at about screen 3.2, and each review names the reviewer's age and household (<span lang="ja">「30代　ご夫婦・子ども」</span>).</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>A rating link at the top, and a compact rating summary right after the trust block, linking to the full reviews.</li>
<li>Filters for 家族構成, 部屋 and 座り心地 using the attributes already collected, labelled in Japanese.</li></ul></div>
</div>
</article>
<!-- 9 -->
<article class="finding" id="f9">
<div class="f-head"><div class="f-no">9</div><div>
<h3>Visual noise dilutes the premium feel, especially on mobile</h3>
<div class="f-tags"><span class="tag">ビジュアル <small>Visual</small></span><span class="tag">情報設計 <small>IA</small></span><span class="tag prio high">優先度 高い</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page · mobile</p>
<p>The first screen carries four badges in four colours on the main photo (black NEW, red SALE, yellow 人気No.1, green ECO), and three pills around the price (an outlined “Free Shipping”, a red 期間限定, a blue newsletter pill). A floating <span lang="ja">「10% OFF」</span> bubble covers the price and the rating, and a chat button covers the end of the payment line. The sticky bar repeats the main button, so on the second screen the same <span lang="ja">「カートに入れる」</span> appears twice. Four seconds after load, a sign-up pop-up covers the page. Two newsletter offers compete: 10% OFF in the announcement bar, the bubble and the pop-up, and 3,000円 OFF in the buy box. Japanese premium brands read as premium through restraint: one message, one route to buy, generous space.</p>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><span class="mk">9</span> First screen: four badges, three price pills, the coupon bubble and chat button, and the sticky bar.</figcaption></figure>
<figure><img src="data:," alt=""/><figcaption><span class="mk">9</span> The sign-up pop-up, four seconds after load.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>LOWYA</b> shows its guarantee and delivery conditions as tags in one neutral style under the price (see finding 3), and its sticky cart bar appears only after the shopper has scrolled past the main button.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>One badge on the photo at most; promotions as a text line, not a floating bubble or pop-up.</li>
<li>One offer at a time, in one place.</li>
<li>One accent colour for promotions, one neutral tag style, one primary button per screen.</li>
<li>The sticky bar only after the main button has scrolled away.</li></ul>
<p class="ask"><b>If HQ asks “the bubble lifts sign-ups”:</b> it may, but it covers the price on the screen where the decision is made. A text line under the button keeps the offer and gives the page back.</p></div>
</div>
</article>
<!-- 10 -->
<article class="finding" id="f10">
<div class="f-head"><div class="f-no">10</div><div>
<h3>“Which sofa is right for me?” has no place in the navigation</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Mobile menu · product page</p>
<p>The model comparison is the main help for choosing between three sofas, Sumi, Ren and Mio, but it isn't in the menu. The drawer lists the three by name only, with NEW and SALE tags, so nothing says how they differ. The comparison is reachable only at about screen 10 of the product page. Japanese shoppers who compare carefully expect a 比較 or 選び方 entry point up front.</p>
<div class="shots one"><figure><img src="data:," alt=""/><figcaption><span class="mk">10</span> The ソファ menu: names and tags only; no 比較 or 選び方 entry.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>ACTUS</b> publishes a sofa buying guide (<span lang="ja">「理想の暮らしをかなえるソファの選び方」</span>) linked from its homepage. <b>LOWYA</b> shows <span lang="ja">「こちらもよく比較されています」</span> on product pages, and <b>IKEA Japan</b> shows each sofa's <span lang="ja">「硬さ」</span> in words on its category cards.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li><span lang="ja">「ソファを比べる・選び方」</span> at the top of the ソファ menu.</li>
<li>One fixed line per model in the menu and on every card: 座り心地 · 座面 · こんな方に.</li></ul></div>
</div>
</article>
<!-- 11 -->
<article class="finding" id="f11">
<div class="f-head"><div class="f-no">11</div><div>
<h3>The sofa doesn't show its carry-in box size</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page</p>
<p>In Japanese apartments, checking the carry-in route (搬入経路: entrance, corridor, lift) is a routine step before buying large furniture. Mareo's size table gives the assembled dimensions only. There is no packed size, no number of boxes and no doorway width, and the product FAQ <span lang="ja">「玄関から搬入できますか？」</span> answers only <span lang="ja">「サイズ表をご確認ください。」</span>, pointing back to the table that doesn't have the answer. Nothing says whether delivery includes carrying the sofa into the room.</p>
<div class="shots one"><figure><img src="data:," alt=""/><figcaption><span class="mk">11</span> The size table: assembled dimensions only, no box size.</figcaption></figure></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>Re:CENO</b> puts <span lang="ja">「搬入経路を確認する」</span> directly under the cart button, lists <span lang="ja">「梱包サイズ 幅 185cm × 奥行き 105cm × 高さ 48cm」</span>, and states that delivery includes <span lang="ja">「お部屋への運び入れ／梱包材持ち帰り」</span>. <b>LOWYA</b> tags multi-box deliveries (<span lang="ja">「複数梱包商品」</span>) under the price and gives the packed size with a 搬入経路 note.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li><span lang="ja">「梱包サイズ・箱数・搬入に必要な幅」</span> next to the size selector, with a link to a 搬入経路 check guide.</li>
<li>State what delivery includes (玄関先 or room), and a real answer to the carry-in FAQ.</li></ul></div>
</div>
</article>
<!-- 12 -->
<article class="finding" id="f12">
<div class="f-head"><div class="f-no">12</div><div>
<h3>The mobile product page puts decision content far down</h3>
<div class="f-tags"><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Sumi product page, mobile (390px)</p>
<p>The mobile product page is about 12 screens long. The purchase button appears just below the first screen, but what a careful Japanese buyer checks next (delivery, comparison, reviews) sits at the very end, after 8.3 screens of brand story in seven sections. The same claims recur: <span lang="ja">「究極の座り心地」</span> twice and <span lang="ja">「ふんわりやわらか」</span> three times. A shopper who wants to compare firmness or read reviews has to scroll past the whole story.</p>
<div class="len">
<div class="row"><span><b>Today</b></span><div class="bar">
<div class="seg" style="left:0;width:12%;background:var(--primary)">Buy</div>
<div class="seg" style="left:12%;width:3%;background:var(--border-strong);color:var(--text)"></div>
<div class="seg" style="left:15%;width:69%;background:var(--border-strong);color:var(--text)">Brand story (7 sections, repeated claims)</div>
<div class="seg" style="left:84%;width:3%;background:var(--deep)"></div>
<div class="seg" style="left:87%;width:7%;background:var(--deep)">Reviews</div>
<div class="seg" style="left:94%;width:6%;background:var(--border-strong);color:var(--text)"></div></div></div>
<div class="row"><span><b>Proposed</b></span><div class="bar">
<div class="seg" style="left:0;width:14%;background:var(--primary)">Buy</div>
<div class="seg" style="left:14%;width:8%;background:var(--good)">Trust</div>
<div class="seg" style="left:22%;width:9%;background:var(--deep)">Reviews</div>
<div class="seg" style="left:31%;width:5%;background:var(--deep)"></div>
<div class="seg" style="left:36%;width:22%;background:var(--border-strong);color:var(--text)">One story</div>
<div class="seg" style="left:58%;width:10%;background:var(--border-strong);color:var(--text)">Details</div></div></div>
<div class="scale"><span>0</span><span>3</span><span>6</span><span>9</span><span>12 screens</span></div>
</div>
<p style="font-size:13px;color:var(--text-2)">Measured on the current page: button at 1.3 screens, comparison from screen 10.1, reviews from 10.5, page 12.1 screens. The proposed bar is indicative.</p>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>LOWYA</b> puts the price, options, delivery date, store check and cart button within 2.4 screens, with the review summary from about screen 3.7. <b>Re:CENO</b> reaches its review summary at about screen 3.2.</p></div>
<div class="prop"><h4>PROPOSAL: PRODUCT-PAGE ORDER</h4>
<ol class="order">
<li><b>Buy box</b><span>Rating, name, price (税込), firmness scale, sizes with width and price, carry-in size, CTA</span></li>
<li><b>Trust block</b><span>Arrival estimate, returns, warranty, fabric samples, payment, chat</span></li>
<li><b>Review summary</b><span>Histogram, attribute filters in Japanese</span></li>
<li><b>Compare sofas</b><span>座り心地 first, then seat construction, sizes, price</span></li>
<li><b>One brand story</b><span>Comfort → materials → care → durability, each claim once</span></li>
<li><b>Details and FAQ</b><span>Five fixed groups; buying questions first</span></li>
</ol></div>
</div>
</article>
<!-- 13 -->
<article class="finding" id="f13">
<div class="f-head"><div class="f-no">13</div><div>
<h3>Search answers product names, not shoppers' questions</h3>
<div class="f-tags"><span class="tag">機能・コンテンツ <small>Content</small></span><span class="tag">情報設計 <small>IA</small></span><span class="tag prio mid">優先度 中</span></div></div></div>
<div class="f-body">
<p class="where">Site search · mobile · tested 18 Nov 2026</p>
<p>Japanese shoppers try to resolve questions themselves before contacting a shop. On Mareo the search box returns products for service questions. <span lang="ja">「返品」</span> (returns), <span lang="ja">「配送」</span> (delivery) and <span lang="ja">「ペイペイ」</span> each give the same three products and none of the policy or help content. The FAQ lives on an external help centre (the footer link carries an external-link icon), so search can't reach it. On mobile, search sits only inside the menu drawer.</p>
<div class="shots"><figure><img src="data:," alt=""/><figcaption><span class="mk">13</span> <span lang="ja">「返品」</span> returns a product grid, not the returns policy.</figcaption></figure>
<div><div class="scroll"><table class="tbl">
<tr><th>Query</th><th>What comes back</th></tr>
<tr><td>返品</td><td class="bad">3 products, no policy page</td></tr>
<tr><td>配送</td><td class="bad">3 products, no delivery information</td></tr>
<tr><td>ペイペイ</td><td class="bad">3 products, no answer on payment</td></tr>
</table></div></div></div>
<div class="ref"><h4>DONE RIGHT IN JAPAN</h4><p><b>IKEA Japan</b>: searching <span lang="ja">「返品」</span> returns <span lang="ja">「0 製品と114 コンテンツの結果」</span>, with <span lang="ja">「返品 カスタマーサービス」</span> first, then <span lang="ja">「返品・交換・キャンセル」</span>. <b>LOWYA</b> keeps 配送について, お支払い方法, 返品・交換 and よくあるご質問 under ご利用ガイド in its own menu, so help content is part of the site rather than an external tool.</p></div>
<div class="prop"><h4>PROPOSAL</h4><ul>
<li>Include FAQ and policy pages in search results, shown above products for service words (返品, 配送, 送料, 支払い, 保証, 搬入).</li>
<li>Add synonyms for common words (ペイペイ → payment page).</li>
<li>Show the search icon in the mobile header.</li></ul></div>
</div>
</article>
</section>
<!-- CROSS-CHECK -->
<section id="crosscheck">
<div class="sec-head"><div class="no">05</div><div><h2>Cross-check against global brands</h2>
<p class="lead">To test whether these findings are Japanese conventions or just furniture-retail habits, we checked the same points on three global brands with mature Japanese sites outside furniture: Apple, Dyson and Nike. Most claims hold. Two needed adjusting, and we've changed the findings accordingly.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:26%">Claim (finding)</th><th>Apple Japan</th><th>Dyson Japan</th><th>Nike Japan</th><th style="width:20%">Verdict</th></tr>
<tr><td>No negative tracking on Japanese (1)</td><td class="ok">normal to +0.23px</td><td class="ok">normal</td><td class="ok">normal</td><td><b>Holds.</b> No site uses it; Mareo uses −0.42 / −1.65px.</td></tr>
<tr><td>A Japanese typeface is declared (1)</td><td class="ok">SF Pro JP, a custom Japanese version of its brand font</td><td class="bad">No. DysonFutura only; Japanese falls back to the OS font, as on Mareo</td><td class="ok">Noto Sans JP, listed first</td><td><b>Mostly holds.</b> Common practice, not universal.</td></tr>
<tr><td>Line height of 1.7 or more (1)</td><td class="bad">1.36</td><td class="bad">1.33–1.43</td><td class="ok">1.5–2.0</td><td><b>Adjusted.</b> Now a secondary point; only the 1.12 product name is clearly too tight.</td></tr>
<tr><td>Line breaks are controlled (2)</td><td class="ok">Phrase-aware breaking in CSS, plus invisible joiners inside words</td><td class="ok">Manual breaks at phrase boundaries</td><td>Not checked</td><td><b>Holds.</b> Apple goes furthest to prevent mid-word breaks.</td></tr>
<tr><td>Delivery estimate near the button (3)</td><td class="ok"><span lang="ja">「最短で翌日に無料でお届け」</span> + store pickup</td><td class="ok"><span lang="ja">「送料無料／最短翌日お届け」</span></td><td>Free shipping and returns, no date</td><td><b>Holds</b> for considered purchases; Nike sells lower-ticket items.</td></tr>
<tr><td>Japanese payment methods visible (7)</td><td class="ok">あと払い, monthly amount</td><td class="ok">PayPay, points, 分割</td><td class="ok">コンビニ払い</td><td><b>Holds.</b> Each shows locally relevant methods on the product page.</td></tr>
<tr><td>Help choosing in the navigation (10)</td><td class="ok"><span lang="ja">「Macのモデルを比較する」</span> in the menu</td><td class="ok"><span lang="ja">「選び方ガイド」</span> in every category menu</td><td>—</td><td><b>Holds strongly.</b></td></tr>
<tr><td>Route to try or see in person (IA analysis)</td><td class="ok"><span lang="ja">「お近くのApple Store」</span> in the menu</td><td>—</td><td class="ok"><span lang="ja">「店舗検索」</span> on the product page</td><td><b>Holds.</b></td></tr>
<tr><td>Price labelled 税込 (IA analysis, N1)</td><td class="bad">No: <span lang="ja">「224,800円から」</span></td><td class="ok"><span lang="ja">「(税込)」</span></td><td class="ok"><span lang="ja">「（税込）」</span></td><td><b>Adjusted.</b> Common convention, not universal; priority lowered to 中.</td></tr>
<tr><td>Claims carry footnotes (IA analysis, N2)</td><td class="ok">Numbered footnotes throughout (46 on one page)</td><td class="ok">※ notes on offers and conditions</td><td>—</td><td><b>Holds.</b></td></tr>
<tr><td>Labels in Japanese, counts in Japanese format (6)</td><td class="ok">—</td><td class="ok">no “k”</td><td class="ok"><span lang="ja">「レビュー (0)」</span></td><td><b>Holds.</b> None leaves review labels in English.</td></tr>
</table></div>
<p style="font-size:13px;color:var(--text-2)">Measured on the live sites on 6 November 2026: MacBook Air product and buy pages, a Supersonic Travel product page, an Alphafly 4 product page, and each brand's homepage and menu. Whether a webfont contains Japanese glyphs was tested by rendering Japanese text in the browser and comparing it with the OS fallback font.</p>
</div>
</section>
<!-- NEXT -->
<section id="next">
<div class="sec-head"><div class="no">06</div><div><h2>Next steps</h2>
<p class="lead">Most changes are theme-level CSS, content or small components. We suggest three steps, each of which can be validated with Mareo's own A/B testing.</p></div></div>
<div class="sec-body">
<div class="scroll"><table class="tbl">
<tr><th style="width:190px">Step</th><th>Findings</th><th>Type of change</th><th>Test hypothesis</th></tr>
<tr><td><b>1 · Localisation layer</b></td><td>1, 2, 6, plus the visible trust block (3)</td><td>CSS, copy, locale keys</td><td>JP typography and visible trust block → lower PDP bounce, higher add-to-cart</td></tr>
<tr><td><b>2 · Decision support</b></td><td>3 (arrival estimate, payment), 4, 5, 7, 8, 11</td><td>Components, content, data</td><td>Firmness scale and visible option prices → higher PDP-to-cart, fewer returns for “too firm”</td></tr>
<tr><td><b>3 · Premium structure</b></td><td>9, 10, 12, 13</td><td>Template and IA</td><td>Calmer first screen and decision content first → higher add-to-cart rate on mobile</td></tr>
</table></div>
<p>Next, we will mock up the <b>Sumi product page on mobile</b>, applying steps 1–2 within the current Mareo design system, so HQ can see the change rather than read about it.</p>
</div>
</section>
<!-- APPENDIX -->
<section id="appendix">
<div class="sec-head"><div class="no">A</div><div><h2>Appendix</h2>
<p class="lead">General usability and accessibility issues found during the review. They are not Japan-specific, but they are worth fixing alongside the localisation work.</p></div></div>
<div class="sec-body">
<h3>A1 · Accessibility (WCAG 2.2 AA, aligned with JIS X 8341-3)</h3>
<div class="scroll"><table class="tbl">
<tr><th>Element</th><th>Measured</th><th>Required</th></tr>
<tr><td>Breadcrumb, rating and secondary text (grey #8A827A)</td><td class="bad">3.57 : 1 on canvas</td><td>4.5 : 1</td></tr>
<tr><td><span lang="ja">「人気No.1」</span> badge, white 11px on yellow</td><td class="bad">2.17 : 1</td><td>4.5 : 1</td></tr>
<tr><td>Review stars, yellow on white</td><td class="bad">2.17 : 1</td><td>3 : 1</td></tr>
<tr><td>Unselected size-pill border #CFC7BC</td><td class="bad">1.67 : 1</td><td>3 : 1</td></tr>
<tr><td>Coupon bubble and 期間限定 pill (white on red)</td><td class="ok">4.68 : 1</td><td>4.5 : 1</td></tr>
<tr><td>Primary button label (white on navy)</td><td class="ok">12.98 : 1</td><td>4.5 : 1</td></tr>
</table></div>
<p style="font-size:14px">Also: seven of eight product images have no <code>alt</code> text; the menu, account and cart icons are 23–24px SVGs, not buttons, so they can't be reached by keyboard and are below the 44 × 44px target; the ten ⓘ icons have no accessible names. Mareo's design system already defines a muted text colour (#777165) that passes at 4.54 : 1 and can replace the grey.</p>
<h3>A2 · Structure and polish</h3>
<div class="scroll"><table class="tbl">
<tr><th style="width:44%">Issue</th><th>Suggestion</th></tr>
<tr><td>Five flat accordions starting with <span lang="ja">「よくある質問」</span>; firmness sits in the English-titled <span lang="ja">「Specifications」</span>; <span lang="ja">「保証」</span> holds one line</td><td>Five fixed groups on every product page, buying questions first</td></tr>
<tr><td>The model comparison gives firmness as x/5 numbers and no recommendation</td><td>座り心地 in words → seat → sizes → price → こんな方に</td></tr>
<tr><td>Two newsletter offers (10% and 3,000円) in four placements: announcement bar, pop-up, floating bubble and a pill in the buy box</td><td>Keep one offer and one placement</td></tr>
<tr><td>The service pill row runs off the screen edge</td><td>Rows that fit the width (finding 3)</td></tr>
<tr><td>Sticky in-page anchors run in reverse (Q&amp;A / 口コミ / 詳細) and skip the comparison</td><td>Page order, comparison included</td></tr>
<tr><td>Product FAQ answers redirect (<span lang="ja">「詳しくはヘルプセンターをご覧ください」</span>, <span lang="ja">「サイズ表をご確認ください」</span>)</td><td>Answer on the page: return conditions, carry-in, delivery date</td></tr>
<tr><td>The chat button sits over the sticky bar and the payment line; the 10% OFF bubble covers the price</td><td>Chat in the trust block and sticky bar; no floating elements</td></tr>
<tr><td>The sticky bar shows at the same time as the main button</td><td>Show it only after the main button scrolls away</td></tr>
<tr><td>Brand story repeats the same claims (<span lang="ja">「究極の座り心地」</span>, <span lang="ja">「ふんわりやわらか」</span>)</td><td>One story, each claim once</td></tr>
<tr><td>Four tile placeholders in the story show no image</td><td>Verify the assets</td></tr>
<tr><td>Main button <span lang="ja">「カートに入れる」</span> says nothing about the returns guarantee</td><td>Add a sub-line (<span lang="ja">「60日間返品保証つき」</span>)</td></tr>
<tr><td>One product page has 10 ⓘ triggers (features, payment, firmness, service pills); key facts need a tap each</td><td>Show the key line inline; keep details for the tap. See IA analysis IA-9</td></tr>
</table></div>
<h3>A3 · Limits and open questions</h3>
<div class="grid2">
<div class="panel"><h4>NOT COVERED IN THIS DRAFT</h4><ul>
<li>Homepage, category pages, cart and checkout, so accepted payment methods are unconfirmed</li>
<li>Desktop layout; tablet and 320px widths</li>
<li>Hover, focus, error states and the info-icon modals</li>
<li>Windows and Android font rendering (inferred from CSS)</li>
<li>Analytics and funnel data; real performance (LCP / INP / CLS)</li></ul></div>
<div class="panel"><h4>TO CONFIRM WITH MAREO</h4><ul>
<li>Basis and date for <span lang="ja">「人気No.1」</span> and <span lang="ja">「購入者満足度98%」</span></li>
<li>Payment methods at checkout; arrival-estimate data</li>
<li>Return shipping cost</li>
<li>Packed sizes and box counts for each size</li>
<li>Any issues your team has already identified, so we can align with them</li>
<li>Analytics access to size the impact</li></ul></div>
</div>
<h3>A4 · Method</h3>
<p style="font-size:14px">Expert review led by the reviewer. Evidence comes from full-page captures of the product page at 390px, its menu, search and accordion states, saved page code, and styles measured in the browser. Design tokens were checked for contrast and consistency. The review looked at the page from three separate angles (usability, per-screen UI and accessibility, information architecture). It was combined with Japanese-market research and a live benchmark of LOWYA, unico, Re:CENO, ACTUS, IKEA Japan and NOYES, then sense-checked against Apple, Dyson and Nike Japan. All findings were re-checked on 18 November 2026. The <a href="index.html#how">package index</a> explains where tools were used and how the work was checked.</p>
<h3>A5 · Sources</h3>
<ol class="sources">
<li>METI 電子商取引に関する市場調査 (smartphone share 58.7%, 2023) — <a href="https://netshop.impress.co.jp/node/12929">Netshop Impress</a></li>
<li>System Research / あるるモール, 到着予定日 survey, Sept 2026 — <a href="https://ecnomikata.com/ecnews/marketing/51794/">ECのミカタ</a>; <a href="https://dxmagazine.jp/?p=223380">DXマガジン</a></li>
<li>MyVoice 宅配便サービスの利用 survey, Feb 2026 — <a href="https://ecnomikata.com/ecnews/49593/">ECのミカタ</a></li>
<li>GMO Payment Gateway, 決済手段利用意向調査 2025 — <a href="https://group.gmo/pdf/news/gmo_news_9798.pdf">press release (PDF)</a></li>
<li>Rakus, ネットショッピングにおける購買心理 survey, July 2025 — <a href="https://netshop.impress.co.jp/node/14386">Netshop Impress</a></li>
<li>System Research, 通販における信頼確認行動 survey, Mar 2026 — <a href="https://ecnomikata.com/ecnews/marketing/49993/">ECのミカタ</a></li>
<li>W3C, Requirements for Japanese Text Layout (JLReq) — <a href="https://www.w3.org/TR/jlreq/">w3.org/TR/jlreq</a></li>
<li>Yu Gothic rendering on Windows — <a href="https://neos21.github.io/poc-perfect-yu-gothic/">test bed</a>; <a href="https://cssnite.jp/lp/lp47/followup/CSSNiteLP47-s7-yamada.pdf">CSS Nite LP47 (PDF)</a></li>
<li>Benchmarked pages, 18 Nov 2026: <a href="https://www.low-ya.com/goods/PFMM4">LOWYA</a> · <a href="https://www.unico-fan.co.jp/products/u13080027426z0001">unico</a> · <a href="https://www.receno.com/three2/agra3.php">Re:CENO</a> · <a href="https://online.actus-interior.com/item/2305827/">ACTUS</a> · <a href="https://www.ikea.com/jp/ja/p/kivik-2-seat-sofa-tibbleby-beige-grey-s19440594/">IKEA Japan</a> · <a href="https://www.ny-k.co.jp/three_piece/decibel_c4_wide/">NOYES</a></li>
</ol>
</div>
</section>
</main>
<footer><div class="wrap">Draft prepared by the reviewer for Mareo Japan, 18 November 2026. Third-party screenshots are included for comparison only. Based on public pages; cart, checkout and analytics were not accessed.</div></footer>
<div id="lb"><img alt=""/></div>

</noscript>
<script></script>
<script>
(function(){
var IMG={"0": "data:,", "1": "data:,", "2": "data:,", "3": "data:,", "4": "data:,", "5": "data:,", "6": "data:,", "7": "data:,", "8": "data:,", "9": "data:,", "10": "data:,", "11": "data:,", "12": "data:,", "13": "data:,", "14": "data:,", "15": "data:,", "16": "data:,", "17": "data:,", "18": "data:,", "19": "data:,", "20": "data:,", "21": "data:,", "22": "data:,"}, TITLES={"en": "Mareo JP — Japanese-market localisation design review (draft)", "ja": "Mareo JP — 日本市場向けローカライズ・デザインレビュー（ドラフト）"}, LANGS=["en", "ja"];
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
