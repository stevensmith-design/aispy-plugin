# index.html

The markup and text of `examples/mareo/index.html`, with its embedded images removed. How it renders: the images in the `screens` folder whose names start with this document's name.

```html
<!DOCTYPE html>
<html lang="en" data-doc="index">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Mareo JP — Japanese-market UX/UI review · Deliverables</title>
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
  font-size:16px;line-height:1.75;letter-spacing:.02em}
:lang(ja),.ja{letter-spacing:.04em;word-break:auto-phrase}
a{color:var(--deep);text-underline-offset:3px}
.wrap{max-width:1120px;margin:0 auto;padding:0 32px}
@media(max-width:700px){.wrap{padding:0 20px}}
p{max-width:760px;margin:0 0 12px}

.cover{background:var(--brand);color:var(--on-primary);padding:64px 0 48px}
.kicker{font-size:13px;letter-spacing:.12em;opacity:.85}
.cover h1{font-size:40px;line-height:1.35;font-weight:600;margin:16px 0;max-width:860px;letter-spacing:.01em}
.cover p{opacity:.92;max-width:780px}
.cover dl{display:grid;grid-template-columns:repeat(4,auto);gap:8px 40px;margin:32px 0 0;font-size:14px;justify-content:start}
.cover dt{opacity:.7;font-size:12px;letter-spacing:.06em}
.cover dd{margin:0}
.status{display:inline-block;margin-top:24px;font-size:12px;letter-spacing:.08em;border:1px solid color-mix(in srgb,var(--surface) 55%,transparent);border-radius:var(--pill);padding:3px 12px}
@media(max-width:860px){.cover h1{font-size:30px}.cover dl{grid-template-columns:1fr 1fr}}

section{padding:64px 0 0}
.no{font-size:13px;color:var(--text-2);letter-spacing:.1em;margin-bottom:4px}
h2{font-size:30px;line-height:1.4;margin:0 0 12px;font-weight:600;letter-spacing:.01em}
.lead{font-size:18px;color:var(--text-2);max-width:820px;margin:0 0 24px}
h3{font-size:18px;line-height:1.5;margin:0 0 8px;font-weight:600}
.h4{line-height:inherit;font-size:12px;letter-spacing:.1em;color:var(--text-2);font-weight:600;margin:0 0 10px}

/* Deliverable cards */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:960px){.cards{grid-template-columns:1fr}}
.card{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);overflow:hidden;text-decoration:none;color:inherit;transition:border-color .15s,transform .15s}
.card:hover{border-color:var(--primary);transform:translateY(-2px)}
.card:focus-visible{outline:3px solid var(--deep);outline-offset:2px}
.card img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top;border-bottom:1px solid var(--border)}
.card .body{padding:20px 22px 22px;display:flex;flex-direction:column;flex:1}
.card .step{font-size:12px;letter-spacing:.1em;color:var(--text-2);font-weight:600}
.card h3{margin:6px 0 8px;font-size:20px}
.card p{font-size:14px;color:var(--text);margin:0 0 12px}
.card ul{margin:0 0 16px;padding-left:18px;font-size:14px;color:var(--text-2)}
.card .meta{margin-top:auto;display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--text-2);border-top:1px solid var(--border);padding-top:12px}
.card .open{font-weight:600;color:var(--deep)}

/* Key messages */
.keys{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
@media(max-width:860px){.keys{grid-template-columns:1fr}}
.key{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:18px 20px;font-size:15px}
.key b{display:block;font-size:16px;margin-bottom:4px;font-weight:600}
.key .src{display:block;font-size:12px;color:var(--text-2);margin-top:8px}

/* Number guide */
table{width:100%;border-collapse:collapse;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden;font-size:14px}
th,td{text-align:left;padding:12px 16px;border-bottom:1px solid var(--border);vertical-align:top;line-height:1.6}
th{background:var(--tint);font-size:12px;letter-spacing:.06em;font-weight:600;color:var(--deep)}
tr:last-child td{border-bottom:0}
td:first-child{white-space:nowrap;font-weight:600}
@media(max-width:700px){th{width:auto!important}th,td{padding:10px 10px}table{font-size:13px}td:first-child{white-space:normal}}
.pill{display:inline-block;min-width:24px;padding:0 7px;border-radius:var(--r-sm);color:var(--on-primary);font:700 12px/22px "Helvetica Neue",Arial,sans-serif;text-align:center;letter-spacing:0}
.pill.r{background:var(--issue)}.pill.g{background:var(--deep)}
.pri{display:inline-block;font-size:12px;font-weight:600;padding:1px 10px;border-radius:var(--pill);background:var(--tint);color:var(--deep);border:1px solid var(--border)}
.ph{color:var(--issue);font-weight:600}

/* How it was made */
.process{list-style:none;margin:8px 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;counter-reset:s}
@media(max-width:1000px){.process{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.process{grid-template-columns:1fr}}
.process li{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:14px 14px 16px;font-size:13px;line-height:1.6;counter-increment:s;display:flex;flex-direction:column}
.process li::before{content:counter(s,decimal-leading-zero);font-size:12px;color:var(--text-2);letter-spacing:.08em}
.process b{display:block;font-size:14px;margin:2px 0 6px;font-weight:600;line-height:1.45}
.process .who{margin-top:auto;padding-top:10px;font-size:11px;font-weight:600;letter-spacing:.04em}
.who.h{color:var(--deep)}.who.t{color:var(--text-2)}
.who.h::before{content:"● "}.who.t::before{content:"○ "}
.legend{font-size:13px;color:var(--text-2);margin:12px 0 0}

.split{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:28px}
@media(max-width:860px){.split{grid-template-columns:1fr}}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:20px 22px}
.panel.lead-panel{background:var(--deep);color:var(--on-primary);border-color:var(--deep)}
.panel.lead-panel .h4{color:color-mix(in srgb,var(--surface) 75%,transparent)}
.panel ul{margin:0;padding-left:18px;font-size:14px;line-height:1.7}
.panel li{margin:4px 0}
.person{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start;margin-top:28px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:22px}
.person .av{width:52px;height:52px;border-radius:50%;background:var(--tint);color:var(--deep);display:grid;place-items:center;font-weight:600;font-size:18px;border:1px solid var(--border)}
.person p{font-size:15px;margin:0}
.person .nm{font-weight:600;font-size:16px}

.commit{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px}
@media(max-width:960px){.commit{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.commit{grid-template-columns:1fr}}
.commit div{border-top:2px solid var(--deep);padding-top:12px;font-size:14px}
.commit b{display:block;font-weight:600;margin-bottom:4px}

footer{margin:72px 0 0;padding:28px 0 48px;border-top:1px solid var(--border);font-size:13px;color:var(--text-2)}
footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}

/* Language switch */
.lang-switch{position:fixed;top:6px;right:12px;z-index:1000;display:flex;background:color-mix(in srgb,var(--surface) 96%,transparent);border:1px solid var(--border);border-radius:var(--pill);padding:3px;box-shadow:0 2px 8px color-mix(in srgb,var(--text) 12%,transparent);font-family:"Helvetica Neue",Arial,"Hiragino Sans","Noto Sans JP",sans-serif}
.lang-switch button{font:600 12px/1 inherit;font-family:inherit;letter-spacing:.04em;border:0;background:none;color:var(--deep);padding:6px 12px;border-radius:var(--pill);cursor:pointer;min-height:28px}
.lang-switch button[aria-pressed=true]{background:var(--deep);color:var(--on-primary)}
.lang-switch button:focus-visible{outline:2px solid var(--deep);outline-offset:2px}
.backbar .wrap,.backbar .in{padding-right:150px!important}
html[lang=ja] body{letter-spacing:.04em}
html[lang=ja] p,html[lang=ja] li,html[lang=ja] td,html[lang=ja] h1,html[lang=ja] h2,html[lang=ja] h3{word-break:auto-phrase;line-break:strict}


.pri{white-space:nowrap}
/* Phones: the legend table stacks, one row per block, so no word is split */
@media(max-width:480px){
#read table,#read tbody,#read tr,#read td{display:block;width:auto}
#read tr:first-child{display:none}
#read tr{border-bottom:1px solid var(--border);padding:10px 0}
#read tr:last-child{border-bottom:0}
#read td{border-bottom:0;padding:2px 14px}
#read td:last-child{color:var(--text-2);font-size:12px}
#read td:last-child::before{content:"Defined in: "}
html[lang=ja] #read td:last-child::before{content:"定義している資料："}
}

</style>
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language / 言語"><button type="button" data-l="en" aria-pressed="true">EN</button><button type="button" data-l="ja" aria-pressed="false" lang="ja">日本語</button></div>
<div id="app"></div>

<template id="t-en" data-title="Mareo JP — Japanese-market UX/UI review · Deliverables">
<header class="cover">
<div class="wrap">
<div class="kicker">JAPANESE-MARKET UX/UI REVIEW · JP.MAREO.EXAMPLE</div>
<h1>How Mareo's Japanese site could convert better on mobile and feel as premium as the brand</h1>
<p>Three documents from one review. Start with the localisation review, then the information architecture analysis, then the proposed mobile product page that puts both into practice. Each one can be read on its own.</p>
<dl>
<div><dt>FOR</dt><dd>Mareo Japan</dd></div>
<div><dt>SCOPE</dt><dd>Sumi sofa product page, header, menu and search</dd></div>
<div><dt>REVIEWED</dt><dd>18 November 2026</dd></div>
<div><dt>PREPARED BY</dt><dd>The reviewer</dd></div>
</dl>
<div class="status">DRAFT · SAMPLE DELIVERABLE</div>
</div>
</header>
<main class="wrap">
<section id="docs">
<div class="no">01</div>
<h2>The deliverables</h2>
<p class="lead">Suggested reading order. Together they take about 35 minutes; the first five minutes of each give you the main points.</p>
<div class="cards">
<a class="card" href="mareo-jp-localisation-review.html">
<img data-img="0" src="" alt="Cover of the localisation design review"/>
<div class="body">
<div class="step">1 · START HERE</div>
<h3>Localisation design review</h3>
<p>What makes the Japanese site still read like the Danish one, and what to change.</p>
<ul><li>13 findings, each with why it matters to Japanese shoppers and a Japanese site that does it well</li><li>A summary by perspective on the first screen</li><li>What already works and should be kept</li></ul>
<div class="meta"><span>About 20 min</span><span class="open">Open →</span></div>
</div>
</a>
<a class="card" href="mareo-jp-ia-analysis.html">
<img data-img="1" src="" alt="Cover of the information architecture analysis"/>
<div class="body">
<div class="step">2 · STRUCTURE</div>
<h3>Information architecture analysis</h3>
<p>How the site is organised, and whether that matches how a Japanese shopper decides.</p>
<ul><li>Navigation compared with LOWYA, plus a proposed structure</li><li>A page-order map of the product page</li><li>8 shopper journeys, 11 structural findings, 7 items to confirm with you</li></ul>
<div class="meta"><span>About 10 min</span><span class="open">Open →</span></div>
</div>
</a>
<a class="card" href="mareo-jp-mock-pdp-mobile.html">
<img data-img="2" src="" alt="Cover of the proposed mobile product page"/>
<div class="body">
<div class="step">3 · IN PRACTICE</div>
<h3>Proposed mobile product page</h3>
<p>The Sumi sofa page, current and proposed side by side, with every change explained.</p>
<ul><li>Applies the highest-priority findings to the screens where buying decisions happen</li><li>Built in Mareo's own colours, type and components</li><li>Best viewed on a desktop screen</li></ul>
<div class="meta"><span>About 5 min</span><span class="open">Open →</span></div>
</div>
</a>
</div>
</section>
<section id="keys">
<div class="no">02</div>
<h2>Four things to know first</h2>
<p class="lead">The points with the biggest effect on mobile purchases and premium feel. All were checked on the current page.</p>
<div class="keys">
<div class="key"><b>Decision information arrives late on mobile.</b>On the product page, reviews start around screen 10.5 of 12. LOWYA, an online-first Japanese furniture retailer, shows its delivery date by screen 2 and its reviews by screen 4. Delivery, returns and warranty details sit behind info icons rather than next to the button.<span class="src">Localisation review 3, 8, 12 · IA analysis, section 1</span></div>
<div class="key"><b>Japanese text is set as if it were English.</b>Line breaks split words (<span lang="ja">「スクエアアームソ／ファ」</span>) and spacing follows Latin-type defaults. Japanese readers notice this instantly, and it is most likely why the site feels translated.<span class="src">Localisation review 1, 2</span></div>
<div class="key"><b>Conventions Japanese shoppers look for are missing.</b>Prices are never labelled 税込, the seat is described as soft while the spec and reviews say firm, and card instalments are the only payment option mentioned before the cart.<span class="src">Localisation review 4, 7 · IA analysis N1</span></div>
<div class="key"><b>The foundations are strong.</b>Photography, the 60-day returns guarantee, 128 reviews at 4.8 and free fabric samples are real assets. Most fixes are content, typography and order changes within the current template, not a redesign.<span class="src">Localisation review, "What already works"</span></div>
</div>
</section>
<section id="read">
<div class="no">03</div>
<h2>How to read the numbers and colours</h2>
<p class="lead">The documents refer to each other. This is the key.</p>
<table>
<tr><th style="width:190px">YOU WILL SEE</th><th>WHAT IT MEANS</th><th style="width:220px">WHERE IT IS DEFINED</th></tr>
<tr><td>1–13</td><td>Localisation findings, numbered in order. On screenshots, a red marker shows where each finding appears.</td><td>Localisation review</td></tr>
<tr><td>IA-1 – IA-15</td><td>Structural findings about navigation, page order and labels. Four are out of scope in this example and are marked so.</td><td>IA analysis, section 5</td></tr>
<tr><td>N1 – N7</td><td>Further items found during the IA analysis that we'd like to confirm with you before adding them to the review.</td><td>IA analysis, section 7</td></tr>
<tr><td><span class="pill r">3</span> <span class="pill g">D1</span></td><td>In the mock: red markers apply a finding above; dark markers are design proposals. Those are our judgement with a stated reason, and lower priority than the findings.</td><td>Mock, notes column</td></tr>
<tr><td><span class="pri">高い</span> <span class="pri">中</span></td><td>Priority. 高い: directly affects the purchase decision or how the brand is perceived in Japan. 中: clear friction with a smaller reach.</td><td>Localisation review, section 1</td></tr>
<tr><td><span class="ph">Red text</span></td><td>A placeholder for information only Mareo has, such as the real delivery estimate or return shipping cost. We never fill these with invented figures.</td><td>Mock, notes column</td></tr>
</table>
</section>
<section id="how">
<div class="no">04</div>
<h2>How this review was made</h2>
<p class="lead">The review was led and judged by a person, using their own method, knowledge and tools. Software helped with the repetitive work: capturing pages, measuring, organising research and drafting. Every finding and recommendation was decided, checked and approved by the person responsible for the review.</p>
<ol class="process">
<li><b>Frame the review</b>Scope, Mareo's priorities (mobile purchases and premium feel) and the questions that matter for a Japanese storefront.<span class="who h">Reviewer judgement</span></li>
<li><b>Capture the site</b>The product page, menu, search and accordion states at phone size; page code saved; type, colour and spacing measured.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Learn Mareo's design language</b>Colours, type and components documented, so recommendations (and these documents) use Mareo's own visual language.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Research and benchmark</b>Japanese e-commerce research, plus live comparison with LOWYA, unico, Re:CENO, ACTUS, IKEA Japan and NOYES.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Review</b>Usability, UI and accessibility, and structure, each reviewed separately through a Japanese-market lens.<span class="who h">Reviewer judgement</span></li>
<li><b>Challenge our own findings</b>Claims tested against Apple, Dyson and Nike Japan; two were softened and one priority lowered.<span class="who h">Reviewer judgement</span></li>
<li><b>Propose and check</b>The mock built in Mareo's design system, checked independently for design quality, then reviewed and corrected line by line.<span class="who h">Reviewer judgement</span></li>
</ol>
<p class="legend">● Decisions made by the reviewer  ·  ○ Software used for speed and consistency; every output checked by the reviewer before use</p>
<div class="split">
<div class="panel">
<h3 class="h4">WHERE SOFTWARE HELPED</h3>
<ul>
<li>Capturing and measuring every state of the page the same way</li>
<li>Extracting Mareo's colours, type and components</li>
<li>Gathering and organising market research and competitor screenshots</li>
<li>First drafts of write-ups and the mock, so time went into judgement rather than layout</li>
<li>Automated checks for contrast, spacing and alignment</li>
</ul>
</div>
<div class="panel lead-panel">
<h3 class="h4">WHAT PEOPLE DECIDED</h3>
<ul>
<li>What to review, for which shoppers, and why</li>
<li>Which issues matter for Mareo's goals, and how to prioritise them</li>
<li>Whether each finding holds: every one re-checked on the page</li>
<li>What to soften, cut or flag as needing Mareo's input</li>
<li>The final wording and design of every recommendation</li>
</ul>
</div>
</div>
<h3 style="margin-top:40px">Our commitments in this work</h3>
<div class="commit">
<div><b>Evidence for every finding</b>Each one points to a screenshot, a measurement or a cited source you can check.</div>
<div><b>Nothing invented</b>Figures only Mareo knows are shown as red placeholders, not guesses.</div>
<div><b>Business reasons respected</b>Where something may be intentional, we ask rather than assume.</div>
<div><b>Limits stated</b>What we couldn't see is listed, so you know how far the findings reach.</div>
</div>
</section>
<section id="limits">
<div class="no">05</div>
<h2>What this review does not cover</h2>
<p class="lead">It is an expert review of the public pages. It shows where the problems are; your data would show how large each one is.</p>
<div class="split" style="margin-top:0">
<div class="panel"><h3 class="h4">NOT INCLUDED</h3><ul>
<li>Analytics or sales data, so impact is estimated rather than measured</li>
<li>Testing with real shoppers</li>
<li>Cart and checkout (we didn't place orders), so accepted payment methods are unconfirmed</li>
<li>The homepage, category pages and other product pages; desktop and tablet sizes; hover, error and pop-up states beyond those shown</li>
</ul></div>
<div class="panel"><h3 class="h4">SUGGESTED NEXT STEPS</h3><ul>
<li>A short session to walk through the findings and hear the business context behind them</li>
<li>Confirm the open questions and placeholder data</li>
<li>Size the top findings with analytics, then test the proposed product page with Japanese shoppers</li>
</ul></div>
</div>
</section>
</main>
<footer>
<div class="wrap">
<span>Prepared by the reviewer for Mareo Japan · Draft, 18 November 2026</span>
<span>Example built on a fictional store</span>
</div>
</footer>
</template>
<template id="t-ja" data-title="Mareo JP — 日本市場向けUX/UIレビュー｜成果物一覧">
<header class="cover">
<div class="wrap">
<div class="kicker">日本市場向けUX/UIレビュー · JP.MAREO.EXAMPLE</div>
<h1>マレオの日本語サイトを、モバイルでもっと購入につながり、ブランドにふさわしい上質さが伝わるサイトへ</h1>
<p>1つのレビューから生まれた3つの資料です。ローカライズ・デザインレビュー、情報設計（IA）分析、そして両方を反映したモバイル商品ページ改善案の順にお読みください。各資料は単独でもお読みいただけます。</p>
<dl>
<div><dt>提出先</dt><dd>Mareo Japan</dd></div>
<div><dt>対象範囲</dt><dd>ソファ「Sumi」の商品ページ、ヘッダー、メニュー、検索</dd></div>
<div><dt>調査日</dt><dd>2026年11月18日</dd></div>
<div><dt>作成</dt><dd>レビュー担当者</dd></div>
</dl>
<div class="status">ドラフト · サンプル成果物</div>
</div>
</header>
<main class="wrap">
<section id="docs">
<div class="no">01</div>
<h2>成果物</h2>
<p class="lead">おすすめの読む順番です。3つ合わせて約35分、各資料の冒頭5分で要点をつかめます。</p>
<div class="cards">
<a class="card" href="mareo-jp-localisation-review.html">
<img data-img="3" src="" alt="ローカライズ・デザインレビューの表紙"/>
<div class="body">
<div class="step">1 · まずはこちら</div>
<h3>ローカライズ・デザインレビュー</h3>
<p>日本語サイトが、いまだにデンマーク版のままに見える理由と、変えるべき点。</p>
<ul><li>13件の指摘。それぞれに、日本の購入者にとって重要な理由と、うまく対応している日本のサイト例を掲載</li><li>冒頭に観点別のサマリー</li><li>すでにうまくいっていて、今後も残すべき点</li></ul>
<div class="meta"><span>約20分</span><span class="open">開く →</span></div>
</div>
</a>
<a class="card" href="mareo-jp-ia-analysis.html">
<img data-img="4" src="" alt="情報設計（IA）分析の表紙"/>
<div class="body">
<div class="step">2 · 構造</div>
<h3>情報設計（IA）分析</h3>
<p>サイトの構成が、日本の購入者の意思決定の流れに合っているか。</p>
<ul><li>LOWYAとのナビゲーション比較と、構成案</li><li>商品ページのコンテンツ順序マップ</li><li>購入者の主な遷移8件、構造上の指摘11件、ご確認いただきたい項目7件</li></ul>
<div class="meta"><span>約10分</span><span class="open">開く →</span></div>
</div>
</a>
<a class="card" href="mareo-jp-mock-pdp-mobile.html">
<img data-img="5" src="" alt="モバイル商品ページ改善案の表紙"/>
<div class="body">
<div class="step">3 · 実践</div>
<h3>モバイル商品ページ改善案</h3>
<p>ソファ「Sumi」の商品ページを、現状と改善案で並べて比較。すべての変更に理由を記載しています。</p>
<ul><li>優先度の高い指摘を、購入を決める画面に反映</li><li>マレオの既存のカラー、書体、コンポーネントで制作</li><li>PCの画面での閲覧を推奨</li></ul>
<div class="meta"><span>約5分</span><span class="open">開く →</span></div>
</div>
</a>
</div>
</section>
<section id="keys">
<div class="no">02</div>
<h2>最初に押さえていただきたい4つのポイント</h2>
<p class="lead">モバイルでの購入と上質さの印象に最も影響する点です。いずれも現在のページで確認済みです。</p>
<div class="keys">
<div class="key"><b>モバイルでは、購入判断に必要な情報が出てくるのが遅い。</b>商品ページでは、全12画面のうちレビューが始まるのは10.5画面目あたりです。ネット販売を主軸とする日本の家具ブランドLOWYAは、2画面目までにお届け日を、4画面目までにレビューを表示しています。配送・返品・保証の情報も、ボタンの近くではなくⓘアイコンの奥にあります。<span class="src">ローカライズ・デザインレビュー 3、8、12 · IA分析 セクション1</span></div>
<div class="key"><b>日本語が、英語と同じ組み方で表示されている。</b>単語の途中で改行され（「スクエアアームソ／ファ」）、字間も欧文の初期設定のままです。日本の読み手はすぐに気づく点で、サイトが「翻訳されたもの」に感じられるのも、おそらくこれが原因です。<span class="src">ローカライズ・デザインレビュー 1、2</span></div>
<div class="key"><b>日本の購入者が探す定番の表記がない。</b>価格に「税込」の表記がなく、仕様とレビューは「かため」なのに座り心地は「やわらか」と説明され、カートの前に案内されている支払い方法はカード分割のみです。<span class="src">ローカライズ・デザインレビュー 4、7 · IA分析 N1</span></div>
<div class="key"><b>土台はしっかりしている。</b>写真、60日間返品保証、128件・評価4.8のレビュー、無料の生地サンプルは大きな強みです。改善の多くは現在のテンプレートの中でできるコンテンツ・タイポグラフィ・順序の変更で、リデザインは必要ありません。<span class="src">ローカライズ・デザインレビュー「すでにうまくいっている点」</span></div>
</div>
</section>
<section id="read">
<div class="no">03</div>
<h2>番号と色の見方</h2>
<p class="lead">資料同士は互いに参照し合っています。以下がその凡例です。</p>
<table>
<tr><th style="width:190px">表記</th><th>意味</th><th style="width:220px">定義している資料</th></tr>
<tr><td>1–13</td><td>ローカライズに関する指摘（通し番号）。スクリーンショット上では、赤いマーカーで該当箇所を示しています。</td><td>ローカライズ・<wbr>デザインレビュー</td></tr>
<tr><td>IA-1 – IA-15</td><td>ナビゲーション、ページ内の順序、ラベルに関する構造上の指摘。うち4件はこの例では対象外で、その旨を記載しています。</td><td>IA分析 セクション5</td></tr>
<tr><td>N1 – N7</td><td>IA分析の中で見つかった追加項目。レビューに加える前に、御社にご確認いただきたいものです。</td><td>IA分析 セクション7</td></tr>
<tr><td><span class="pill r">3</span> <span class="pill g">D1</span></td><td>モックの中では、赤いマーカーは上記の指摘を反映した箇所、濃い色のマーカーはデザイン提案です。デザイン提案は理由を添えた私たちの判断によるもので、指摘より優先度は低くなります。</td><td>モック（右側の解説欄）</td></tr>
<tr><td><span class="pri">高い</span> <span class="pri">中</span></td><td>優先度。高い：購入判断、または日本でのブランドの見え方に直接影響する。中：明確な使いにくさがあるが、影響範囲は小さい。</td><td>ローカライズ・<wbr>デザインレビュー セクション1</td></tr>
<tr><td><span class="ph">赤字</span></td><td>実際のお届け目安や返送料など、マレオだけがお持ちの情報の仮置きです。推測の数字で埋めることはしていません。</td><td>モック（右側の解説欄）</td></tr>
</table>
</section>
<section id="how">
<div class="no">04</div>
<h2>このレビューの進め方</h2>
<p class="lead">このレビューは、担当者自身の手法・知見・ツールを用い、人が主導し判断して進めました。ページの取得や計測、リサーチの整理、下書きといった繰り返し作業にはソフトウェアを活用しています。すべての指摘と提案は、レビュー責任者が判断・確認・承認しています。</p>
<ol class="process">
<li><b>レビューの枠組みを決める</b>対象範囲、マレオの優先事項（モバイルでの購入と上質さ）、日本向けストアとして重要な問いを設定。<span class="who h">レビュー担当者が判断</span></li>
<li><b>サイトを取得する</b>商品ページ、メニュー、検索、アコーディオンの状態をスマートフォンのサイズで取得。ページのコードを保存し、書体・色・余白を計測。<span class="who t">ツールで補助、確認済み</span></li>
<li><b>マレオのデザイン言語を把握する</b>カラー・書体・コンポーネントを整理し、提案（とこれらの資料）がマレオ自身のビジュアル言語で表現されるように。<span class="who t">ツールで補助、確認済み</span></li>
<li><b>リサーチとベンチマーク</b>日本のEC市場のリサーチに加え、LOWYA、unico、Re:CENO、ACTUS、IKEA Japan、NOYESの公開サイトと比較。<span class="who t">ツールで補助、確認済み</span></li>
<li><b>レビュー</b>ユーザビリティ、UIとアクセシビリティ、構造をそれぞれ個別に、日本市場の視点でレビュー。<span class="who h">レビュー担当者が判断</span></li>
<li><b>自分たちの指摘を検証する</b>Apple、Dyson、Nikeの日本サイトと照らし合わせて主張を検証し、2件の表現を弱め、1件の優先度を下げました。<span class="who h">レビュー担当者が判断</span></li>
<li><b>提案と確認</b>マレオのデザインシステムでモックを制作し、デザイン品質を別の立場から確認したうえで、1行ずつ見直して修正。<span class="who h">レビュー担当者が判断</span></li>
</ol>
<p class="legend">● レビュー担当者が判断した工程  ·  ○ スピードと一貫性のためにソフトウェアを活用した工程（すべての出力はレビュー担当者が確認してから使用）</p>
<div class="split">
<div class="panel">
<h3 class="h4">ソフトウェアを活用した作業</h3>
<ul>
<li>ページのすべての状態を、同じ条件で取得・計測</li>
<li>マレオのカラー・書体・コンポーネントの抽出</li>
<li>市場リサーチと競合スクリーンショットの収集・整理</li>
<li>レポートとモックの下書き作成（レイアウトではなく判断に時間を使うため）</li>
<li>コントラスト、余白、整列の自動チェック</li>
</ul>
</div>
<div class="panel lead-panel">
<h3 class="h4">人が判断したこと</h3>
<ul>
<li>何を、どの購入者を想定して、なぜレビューするか</li>
<li>どの課題がマレオの目標にとって重要か、その優先順位</li>
<li>各指摘が妥当か（すべて現在のページで再確認）</li>
<li>どこを弱め、どこを削り、どこをマレオにご確認いただく点として示すか</li>
<li>すべての提案の最終的な文言とデザイン</li>
</ul>
</div>
</div>
<h3 style="margin-top:40px">本レビューで大切にしたこと</h3>
<div class="commit">
<div><b>すべての指摘に根拠</b>スクリーンショット、計測値、または確認できる出典を示しています。</div>
<div><b>推測で埋めない</b>マレオだけがご存じの数字は、推測ではなく赤字の仮置きにしています。</div>
<div><b>事業上の理由を尊重</b>意図的な可能性があるものは、決めつけずにお尋ねしています。</div>
<div><b>限界を明示</b>確認できなかった範囲を記載し、指摘がどこまで当てはまるかを分かるようにしています。</div>
</div>
</section>
<section id="limits">
<div class="no">05</div>
<h2>本レビューの対象外</h2>
<p class="lead">公開ページを対象としたエキスパートレビューです。課題がどこにあるかは示せますが、それぞれの影響の大きさは御社のデータで明らかになります。</p>
<div class="split" style="margin-top:0">
<div class="panel"><h3 class="h4">対象外の項目</h3><ul>
<li>アクセス解析や売上データ（影響は計測ではなく推定です）</li>
<li>実際の購入者によるテスト</li>
<li>カートと購入手続き（注文はしていないため、利用可能な支払い方法は未確認）</li>
<li>トップページ、カテゴリページ、他の商品ページ、PCとタブレットのサイズ、掲載した以外のホバー・エラー・ポップアップの状態</li>
</ul></div>
<div class="panel"><h3 class="h4">次のステップ（ご提案）</h3><ul>
<li>指摘内容をご説明し、その背景にある事業上の事情を伺う短いセッション</li>
<li>未確認事項と仮置きデータのご確認</li>
<li>主要な指摘の影響をアクセス解析で把握し、改善案の商品ページを日本の購入者でテスト</li>
</ul></div>
</div>
</section>
</main>
<footer>
<div class="wrap">
<span>レビュー担当者 作成（Mareo Japan 向け）· ドラフト、2026年11月18日</span>
<span>架空のストアで作成した例</span>
</div>
</footer>
</template>

<noscript><style>#app{display:none}</style>

<header class="cover">
<div class="wrap">
<div class="kicker">JAPANESE-MARKET UX/UI REVIEW · JP.MAREO.EXAMPLE</div>
<h1>How Mareo's Japanese site could convert better on mobile and feel as premium as the brand</h1>
<p>Three documents from one review. Start with the localisation review, then the information architecture analysis, then the proposed mobile product page that puts both into practice. Each one can be read on its own.</p>
<dl>
<div><dt>FOR</dt><dd>Mareo Japan</dd></div>
<div><dt>SCOPE</dt><dd>Sumi sofa product page, header, menu and search</dd></div>
<div><dt>REVIEWED</dt><dd>18 November 2026</dd></div>
<div><dt>PREPARED BY</dt><dd>The reviewer</dd></div>
</dl>
<div class="status">DRAFT · SAMPLE DELIVERABLE</div>
</div>
</header>
<main class="wrap">
<section id="docs">
<div class="no">01</div>
<h2>The deliverables</h2>
<p class="lead">Suggested reading order. Together they take about 35 minutes; the first five minutes of each give you the main points.</p>
<div class="cards">
<a class="card" href="mareo-jp-localisation-review.html">
<img src="data:," alt="Cover of the localisation design review"/>
<div class="body">
<div class="step">1 · START HERE</div>
<h3>Localisation design review</h3>
<p>What makes the Japanese site still read like the Danish one, and what to change.</p>
<ul><li>13 findings, each with why it matters to Japanese shoppers and a Japanese site that does it well</li><li>A summary by perspective on the first screen</li><li>What already works and should be kept</li></ul>
<div class="meta"><span>About 20 min</span><span class="open">Open →</span></div>
</div>
</a>
<a class="card" href="mareo-jp-ia-analysis.html">
<img src="data:," alt="Cover of the information architecture analysis"/>
<div class="body">
<div class="step">2 · STRUCTURE</div>
<h3>Information architecture analysis</h3>
<p>How the site is organised, and whether that matches how a Japanese shopper decides.</p>
<ul><li>Navigation compared with LOWYA, plus a proposed structure</li><li>A page-order map of the product page</li><li>8 shopper journeys, 11 structural findings, 7 items to confirm with you</li></ul>
<div class="meta"><span>About 10 min</span><span class="open">Open →</span></div>
</div>
</a>
<a class="card" href="mareo-jp-mock-pdp-mobile.html">
<img src="data:," alt="Cover of the proposed mobile product page"/>
<div class="body">
<div class="step">3 · IN PRACTICE</div>
<h3>Proposed mobile product page</h3>
<p>The Sumi sofa page, current and proposed side by side, with every change explained.</p>
<ul><li>Applies the highest-priority findings to the screens where buying decisions happen</li><li>Built in Mareo's own colours, type and components</li><li>Best viewed on a desktop screen</li></ul>
<div class="meta"><span>About 5 min</span><span class="open">Open →</span></div>
</div>
</a>
</div>
</section>
<section id="keys">
<div class="no">02</div>
<h2>Four things to know first</h2>
<p class="lead">The points with the biggest effect on mobile purchases and premium feel. All were checked on the current page.</p>
<div class="keys">
<div class="key"><b>Decision information arrives late on mobile.</b>On the product page, reviews start around screen 10.5 of 12. LOWYA, an online-first Japanese furniture retailer, shows its delivery date by screen 2 and its reviews by screen 4. Delivery, returns and warranty details sit behind info icons rather than next to the button.<span class="src">Localisation review 3, 8, 12 · IA analysis, section 1</span></div>
<div class="key"><b>Japanese text is set as if it were English.</b>Line breaks split words (<span lang="ja">「スクエアアームソ／ファ」</span>) and spacing follows Latin-type defaults. Japanese readers notice this instantly, and it is most likely why the site feels translated.<span class="src">Localisation review 1, 2</span></div>
<div class="key"><b>Conventions Japanese shoppers look for are missing.</b>Prices are never labelled 税込, the seat is described as soft while the spec and reviews say firm, and card instalments are the only payment option mentioned before the cart.<span class="src">Localisation review 4, 7 · IA analysis N1</span></div>
<div class="key"><b>The foundations are strong.</b>Photography, the 60-day returns guarantee, 128 reviews at 4.8 and free fabric samples are real assets. Most fixes are content, typography and order changes within the current template, not a redesign.<span class="src">Localisation review, "What already works"</span></div>
</div>
</section>
<section id="read">
<div class="no">03</div>
<h2>How to read the numbers and colours</h2>
<p class="lead">The documents refer to each other. This is the key.</p>
<table>
<tr><th style="width:190px">YOU WILL SEE</th><th>WHAT IT MEANS</th><th style="width:220px">WHERE IT IS DEFINED</th></tr>
<tr><td>1–13</td><td>Localisation findings, numbered in order. On screenshots, a red marker shows where each finding appears.</td><td>Localisation review</td></tr>
<tr><td>IA-1 – IA-15</td><td>Structural findings about navigation, page order and labels. Four are out of scope in this example and are marked so.</td><td>IA analysis, section 5</td></tr>
<tr><td>N1 – N7</td><td>Further items found during the IA analysis that we'd like to confirm with you before adding them to the review.</td><td>IA analysis, section 7</td></tr>
<tr><td><span class="pill r">3</span> <span class="pill g">D1</span></td><td>In the mock: red markers apply a finding above; dark markers are design proposals. Those are our judgement with a stated reason, and lower priority than the findings.</td><td>Mock, notes column</td></tr>
<tr><td><span class="pri">高い</span> <span class="pri">中</span></td><td>Priority. 高い: directly affects the purchase decision or how the brand is perceived in Japan. 中: clear friction with a smaller reach.</td><td>Localisation review, section 1</td></tr>
<tr><td><span class="ph">Red text</span></td><td>A placeholder for information only Mareo has, such as the real delivery estimate or return shipping cost. We never fill these with invented figures.</td><td>Mock, notes column</td></tr>
</table>
</section>
<section id="how">
<div class="no">04</div>
<h2>How this review was made</h2>
<p class="lead">The review was led and judged by a person, using their own method, knowledge and tools. Software helped with the repetitive work: capturing pages, measuring, organising research and drafting. Every finding and recommendation was decided, checked and approved by the person responsible for the review.</p>
<ol class="process">
<li><b>Frame the review</b>Scope, Mareo's priorities (mobile purchases and premium feel) and the questions that matter for a Japanese storefront.<span class="who h">Reviewer judgement</span></li>
<li><b>Capture the site</b>The product page, menu, search and accordion states at phone size; page code saved; type, colour and spacing measured.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Learn Mareo's design language</b>Colours, type and components documented, so recommendations (and these documents) use Mareo's own visual language.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Research and benchmark</b>Japanese e-commerce research, plus live comparison with LOWYA, unico, Re:CENO, ACTUS, IKEA Japan and NOYES.<span class="who t">Tool-assisted, verified</span></li>
<li><b>Review</b>Usability, UI and accessibility, and structure, each reviewed separately through a Japanese-market lens.<span class="who h">Reviewer judgement</span></li>
<li><b>Challenge our own findings</b>Claims tested against Apple, Dyson and Nike Japan; two were softened and one priority lowered.<span class="who h">Reviewer judgement</span></li>
<li><b>Propose and check</b>The mock built in Mareo's design system, checked independently for design quality, then reviewed and corrected line by line.<span class="who h">Reviewer judgement</span></li>
</ol>
<p class="legend">● Decisions made by the reviewer  ·  ○ Software used for speed and consistency; every output checked by the reviewer before use</p>
<div class="split">
<div class="panel">
<h3 class="h4">WHERE SOFTWARE HELPED</h3>
<ul>
<li>Capturing and measuring every state of the page the same way</li>
<li>Extracting Mareo's colours, type and components</li>
<li>Gathering and organising market research and competitor screenshots</li>
<li>First drafts of write-ups and the mock, so time went into judgement rather than layout</li>
<li>Automated checks for contrast, spacing and alignment</li>
</ul>
</div>
<div class="panel lead-panel">
<h3 class="h4">WHAT PEOPLE DECIDED</h3>
<ul>
<li>What to review, for which shoppers, and why</li>
<li>Which issues matter for Mareo's goals, and how to prioritise them</li>
<li>Whether each finding holds: every one re-checked on the page</li>
<li>What to soften, cut or flag as needing Mareo's input</li>
<li>The final wording and design of every recommendation</li>
</ul>
</div>
</div>
<h3 style="margin-top:40px">Our commitments in this work</h3>
<div class="commit">
<div><b>Evidence for every finding</b>Each one points to a screenshot, a measurement or a cited source you can check.</div>
<div><b>Nothing invented</b>Figures only Mareo knows are shown as red placeholders, not guesses.</div>
<div><b>Business reasons respected</b>Where something may be intentional, we ask rather than assume.</div>
<div><b>Limits stated</b>What we couldn't see is listed, so you know how far the findings reach.</div>
</div>
</section>
<section id="limits">
<div class="no">05</div>
<h2>What this review does not cover</h2>
<p class="lead">It is an expert review of the public pages. It shows where the problems are; your data would show how large each one is.</p>
<div class="split" style="margin-top:0">
<div class="panel"><h3 class="h4">NOT INCLUDED</h3><ul>
<li>Analytics or sales data, so impact is estimated rather than measured</li>
<li>Testing with real shoppers</li>
<li>Cart and checkout (we didn't place orders), so accepted payment methods are unconfirmed</li>
<li>The homepage, category pages and other product pages; desktop and tablet sizes; hover, error and pop-up states beyond those shown</li>
</ul></div>
<div class="panel"><h3 class="h4">SUGGESTED NEXT STEPS</h3><ul>
<li>A short session to walk through the findings and hear the business context behind them</li>
<li>Confirm the open questions and placeholder data</li>
<li>Size the top findings with analytics, then test the proposed product page with Japanese shoppers</li>
</ul></div>
</div>
</section>
</main>
<footer>
<div class="wrap">
<span>Prepared by the reviewer for Mareo Japan · Draft, 18 November 2026</span>
<span>Example built on a fictional store</span>
</div>
</footer>

</noscript>
<script></script>
<script>
(function(){
var IMG={"0": "data:,", "1": "data:,", "2": "data:,", "3": "data:,", "4": "data:,", "5": "data:,"}, TITLES={"en": "Mareo JP — Japanese-market UX/UI review · Deliverables", "ja": "Mareo JP — 日本市場向けUX/UIレビュー｜成果物一覧"}, LANGS=["en", "ja"];
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
