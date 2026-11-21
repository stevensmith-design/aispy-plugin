# mareo-jp-mock-pdp-mobile.html

The markup and text of `examples/mareo/mareo-jp-mock-pdp-mobile.html`, with its embedded images removed. How it renders: the images in the `screens` folder whose names start with this document's name.

```html
<!DOCTYPE html>
<html lang="en" data-doc="mock">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Mareo JP — Proposed mobile product page (mock)</title>
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
  --primary:var(--deep); --border-interactive:var(--text-2); --selected:var(--tint); --note:var(--marker);
}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--canvas);color:var(--text);
  font-family:"Jost","Noto Sans JP","Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic UI",Meiryo,sans-serif;
  font-size:15px;line-height:1.7;letter-spacing:.04em;-webkit-font-smoothing:antialiased}
.jp{word-break:auto-phrase}
button{font:inherit;letter-spacing:inherit;color:inherit;background:none;border:0;cursor:pointer}

/* Presentation shell (not part of the proposal) */
.shell{max-width:1320px;margin:0 auto;padding:40px 32px 64px}
.shell>header h1{font-size:29px;line-height:1.4;font-weight:600;letter-spacing:.02em}
.shell>header p{color:var(--text-2);max-width:820px;margin-top:8px}
.shell>header .meta{font-size:12px;color:var(--text-2);margin-top:12px;letter-spacing:.06em}
.stage{display:grid;grid-template-columns:406px 406px 1fr;gap:32px;margin-top:32px;align-items:start}
@media(max-width:1180px){.stage{grid-template-columns:1fr;justify-items:center}}
.col-label{font-size:12px;letter-spacing:.1em;color:var(--text-2);margin-bottom:10px;font-weight:600}
.current .screen img{width:100%;display:block}
.cap{font-size:12px;color:var(--text-2);margin-top:10px;max-width:406px;line-height:1.6}
.device{width:406px;height:860px;border:8px solid var(--text);border-radius:44px;overflow:hidden;background:var(--canvas);box-shadow:0 24px 48px color-mix(in srgb,var(--deep) 18%,transparent);position:relative}
.screen{height:100%;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;position:relative}
.screen::-webkit-scrollbar{display:none}

/* ===== Proposed page ===== */
.annc{background:var(--brand);color:var(--on-primary);font-size:12px;text-align:center;padding:6px 12px;letter-spacing:.06em}
.hdr{position:sticky;top:0;z-index:8;background:var(--canvas);display:grid;grid-template-columns:44px 44px 1fr 44px 44px;align-items:center;height:56px;padding:0 6px;border-bottom:1px solid var(--border)}
.hdr .logo{justify-self:center;color:var(--primary);display:flex}
.hdr .logo svg{height:24px;width:auto}
.thumbs{display:block;width:100%;height:auto}
.feat{display:flex;gap:16px;margin-top:10px;font-size:12px;font-weight:600}
.feat .ft{display:inline-flex;padding:0;align-items:center;gap:4px;min-height:44px;margin-block:-10px;font-weight:600}
.ftx{font-size:12px;margin-top:2px}
.feat i{font-style:normal;font-weight:400;color:var(--text-2);border:1px solid var(--text-2);border-radius:50%;width:14px;height:14px;font-size:12px;line-height:12px;text-align:center}
.acc{margin:20px 16px 0;list-style:none}
.acc li{display:flex;justify-content:space-between;align-items:center;min-height:52px;border-top:1px solid var(--border);font-size:15px;padding:0 4px}
.acc li:last-child{border-bottom:1px solid var(--border)}
.acc li span{color:var(--text-2);font-size:19px;font-weight:300}
.ic{width:44px;height:44px;display:grid;place-items:center}
.ic svg{width:22px;height:22px;stroke:var(--text);fill:none;stroke-width:1.6}
.crumb{font-size:12px;color:var(--text-2);padding:10px 16px 8px;letter-spacing:.04em}
.gallery{position:relative}
.gallery img{width:100%;display:block;aspect-ratio:4/3;object-fit:cover}
.gallery .count{position:absolute;right:12px;bottom:12px;background:color-mix(in srgb,var(--text) 62%,transparent);color:var(--on-primary);font-size:12px;padding:2px 10px;border-radius:var(--pill);letter-spacing:.06em}
.gallery .tag{position:absolute;left:12px;top:12px;background:var(--surface);color:var(--deep);font-size:12px;font-weight:600;padding:2px 10px;border-radius:var(--pill)}
.bb{padding:16px 16px 8px}
.rating{display:inline-flex;align-items:center;gap:6px;min-height:44px;font-size:12px;color:var(--text);text-decoration:none}
.stars{color:var(--deep);letter-spacing:1px}
.rating u{color:var(--text-2);text-underline-offset:3px}
.name{font-size:23px;line-height:1.45;font-weight:600;letter-spacing:.02em;margin-top:4px;word-break:auto-phrase}
.lede{font-size:15px;color:var(--text-2);margin-top:6px;line-height:1.75}
.firm{margin-top:16px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:12px 14px}
.firm .row{display:flex;justify-content:space-between;align-items:baseline}
.firm .lbl{font-size:12px;font-weight:600;color:var(--text);letter-spacing:.06em}
.firm a{font-size:12px;color:var(--deep);text-underline-offset:3px}
.scale{position:relative;margin:14px 0 4px;height:6px;display:grid;grid-template-columns:repeat(3,1fr);gap:3px}
.scale .seg{background:var(--border);border-radius:var(--r-sm)}
.scale .seg.on{background:var(--deep)}
.scale .pin{position:absolute;top:50%;width:18px;height:18px;border-radius:50%;background:var(--surface);border:4px solid var(--deep);transform:translate(-50%,-50%)}
.scale .ghost{position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background:var(--surface);border:2px solid var(--text-2);transform:translate(-50%,-50%)}
.scale .ghost::after{content:attr(data-l);position:absolute;top:12px;left:50%;transform:translateX(-50%);font-size:12px;line-height:1;color:var(--text-2);white-space:nowrap}
.firm .scale{margin-bottom:22px}
.scale-l{display:grid;grid-template-columns:repeat(3,1fr);text-align:center;font-size:12px;color:var(--text-2);margin-top:10px}
.scale-l .on{color:var(--text);font-weight:600}
.firm .val{font-size:12px;margin-top:8px;line-height:1.6}
.firm .val b{font-weight:600}
.price{margin-top:18px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.price .amt{font-size:23px;font-weight:600;letter-spacing:.01em}
.price .tax{margin-left:-6px;font-size:12px;color:var(--text-2)}
.price .ship{font-size:12px;font-weight:600;color:var(--deep);background:var(--tint);border-radius:var(--pill);padding:2px 10px}
.pay{font-size:12px;color:var(--text-2);margin-top:2px}
.opt-h{display:flex;justify-content:space-between;align-items:baseline;margin-top:18px}
.opt-h .lbl{font-size:12px;font-weight:600}
.opt-h a{font-size:12px;color:var(--deep);text-underline-offset:3px}
.sizes{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px}
.size{border:1px solid var(--border-interactive);background:var(--surface);border-radius:var(--r-md);padding:8px 4px;text-align:center;min-height:68px;display:flex;flex-direction:column;justify-content:center;line-height:1.35}
.size .n{font-size:12px;font-weight:600;white-space:nowrap;letter-spacing:.02em}
.size .w{font-size:12px;color:var(--text-2);white-space:nowrap}
.size .p{font-size:12px;white-space:nowrap;margin-top:2px}
.size[aria-pressed=true] .w{color:var(--text)}
.size[aria-pressed=true]{background:var(--selected);border:2px solid var(--deep);padding:7px 3px}
.fit{font-size:12px;color:var(--text-2);margin-top:8px}
.fit b{color:var(--text);font-weight:600}
.cta{display:block;width:100%;margin-top:16px;background:var(--primary);color:var(--on-primary);border-radius:var(--pill);min-height:56px;padding:6px 16px;text-align:center}
.cta .m{display:block;font-size:15px;font-weight:600;letter-spacing:.06em}
.cta .s{display:block;font-size:12px;opacity:.9;letter-spacing:.06em}
.promo{font-size:12px;text-align:center;margin-top:10px;color:var(--text-2)}
.promo a{color:var(--deep);text-underline-offset:3px}
.trust{margin:18px 16px 0;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md)}
.trust li{list-style:none;display:grid;grid-template-columns:28px 1fr 16px;gap:10px;align-items:center;padding:12px 14px;border-top:1px solid var(--border);min-height:56px}
.trust li:first-of-type{border-top:0}
.trust svg{justify-self:center;width:22px;height:22px;stroke:var(--deep);fill:none;stroke-width:1.5}
.trust .t{font-size:12px;font-weight:600;line-height:1.5}
.trust .d{word-break:auto-phrase;font-size:12px;color:var(--text-2);line-height:1.55}
.trust .chev{color:var(--text-2);font-size:15px}
.tbd{color:var(--note);font-weight:600}
.legend .tbd{color:var(--marker)}
.try{margin:10px 16px 0;font-size:12px;color:var(--text-2);display:flex;gap:6px;align-items:center}
.try a{color:var(--deep);text-underline-offset:3px}
.sec{padding:28px 16px 4px}
.sec h3{font-size:19px;font-weight:600;letter-spacing:.04em;line-height:1.5}
.revtop{display:flex;gap:16px;align-items:center;margin-top:12px}
.big{font-size:46px;font-weight:600;line-height:1;letter-spacing:0}
.revtop .sub{font-size:12px;color:var(--text-2);line-height:1.6}
.hist{margin-top:12px}
.hist .r{display:grid;grid-template-columns:22px 1fr 64px;gap:8px;align-items:center;font-size:12px;height:22px}
.hist .bar{height:6px;border-radius:var(--r-sm);background:var(--sand);overflow:hidden}
.hist .bar i{display:block;height:100%;background:var(--deep)}
.hist .c{text-align:right;color:var(--text-2)}
.reco{font-size:12px;margin-top:10px}
.chips{display:flex;flex-wrap:wrap;gap:12px 6px;margin-top:12px}
.chip{font-size:12px;border:1px solid var(--border-interactive);border-radius:var(--pill);padding:5px 12px;background:var(--surface);min-height:32px}
.chip{position:relative}.chip::after{content:"";position:absolute;inset:-6px 0}
.opt-h a,.promo a,.firm a,.try a,.fit a{padding-block:12px;margin-block:-12px}
.chip[aria-pressed=true]{background:var(--deep);border-color:var(--deep);color:var(--on-primary)}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:14px;margin-top:12px}
.card .h{display:flex;justify-content:space-between;font-size:12px;color:var(--text-2)}
.card .tt{font-size:15px;font-weight:600;margin-top:6px}
.card p{font-size:12px;margin-top:2px}
.attrs{display:flex;flex-wrap:wrap;gap:4px 12px;font-size:12px;color:var(--text-2);margin-top:8px}
.more{display:block;text-align:center;font-size:12px;margin-top:12px;padding:10px;min-height:44px;border:1px solid var(--border-interactive);border-radius:var(--pill);color:var(--text);text-decoration:none;background:var(--surface)}
table.cmp{width:100%;border-collapse:collapse;margin-top:12px;font-size:12px;background:var(--surface);border-radius:var(--r-md);overflow:hidden}
.cmp th,.cmp td{padding:8px 6px;border-bottom:1px solid var(--border);text-align:center;line-height:1.45}
.cmp th{font-weight:600;background:var(--tint);font-size:12px}
.cmp td:first-child,.cmp th:first-child{text-align:left;color:var(--text-2);font-weight:500;width:auto}
.cmp td,.cmp th{word-break:auto-phrase}
.cmp .me{background:var(--tint);font-weight:600}
.cmp th.me{background:var(--sand);color:var(--deep)}
.spacer{height:96px}
.sticky{position:sticky;bottom:0;z-index:6;background:color-mix(in srgb,var(--canvas) 97%,transparent);border-top:1px solid var(--border);display:grid;grid-template-columns:44px minmax(0,1fr) auto;gap:8px;align-items:center;padding:8px 12px 12px}
.sticky .sel{font-size:12px;line-height:1.35}
.sticky .sel b{font-size:15px}
.sticky .go{padding-inline:20px;white-space:nowrap;background:var(--primary);color:var(--on-primary);border-radius:var(--pill);height:56px;font-size:15px;font-weight:600;letter-spacing:.04em}
.sticky .chat{width:44px;height:44px;border-radius:50%;border:1px solid var(--border-interactive);display:grid;place-items:center;background:var(--surface)}
.sticky .chat svg{width:20px;height:20px;stroke:var(--deep);fill:none;stroke-width:1.6}
.sw{display:flex;gap:14px;margin-top:6px}
.swc{display:grid;justify-items:center;min-width:44px;gap:4px;font-size:12px;background:none;border:0;padding:0;min-height:44px;color:var(--text)}
.swc i{width:32px;height:32px;border-radius:50%;border:1px solid color-mix(in srgb,var(--text) 12%,transparent)}
.swc[aria-pressed=true]{font-weight:600}
.swc[aria-pressed=true] i{outline:2px solid var(--deep);outline-offset:3px}
.fit a{color:var(--deep);text-underline-offset:3px}
.device[lang=ja] p,.device[lang=ja] li,.device[lang=ja] td,.device[lang=ja] h1,.device[lang=ja] h2,.device[lang=ja] h3{word-break:auto-phrase;line-break:strict}
#device .screen{scroll-padding:56px 0 96px}

/* Markers */
.mk{position:absolute;z-index:7;min-width:22px;height:22px;padding:0 5px;border-radius:var(--r-sm);background:var(--note);color:var(--on-primary);font:700 12px/22px "Helvetica Neue",Arial,sans-serif;text-align:center;letter-spacing:0;box-shadow:0 0 0 2px var(--on-primary)}
.rel{position:relative}
.markers-off .mk{display:none}
.mk.d{background:var(--deep)}
.notes .k.d{background:var(--deep)}
.notes .pri{display:inline-block;font-size:12px;font-weight:600;color:var(--text-2);border:1px solid var(--border-strong);border-radius:var(--pill);padding:0 8px;margin:4px 0 0 6px}
.fixed{position:absolute;inset:0;pointer-events:none;z-index:8}
.fixed img{position:absolute;display:block}
.fixed .lbl{position:absolute;left:122px;bottom:88px;font:600 12px/1 "Helvetica Neue",Arial,sans-serif;letter-spacing:.06em;color:var(--on-primary);background:color-mix(in srgb,var(--text) 70%,transparent);padding:4px 6px;border-radius:var(--r-sm)}
.gallery .zoom{position:absolute;right:12px;top:12px;width:36px;height:36px;border-radius:50%;background:color-mix(in srgb,var(--surface) 85%,transparent);display:grid;place-items:center}
.gallery .zoom svg{width:18px;height:18px;stroke:var(--text);fill:none;stroke-width:1.8}
.hdr.rel,.sticky.rel{position:sticky}
.sticky{transition:transform .25s ease,opacity .25s ease,visibility 0s linear 0s}
.sticky.hide{transform:translateY(100%);opacity:0;pointer-events:none;visibility:hidden;transition:transform .25s ease,opacity .25s ease,visibility 0s linear .25s}
@media (prefers-reduced-motion:reduce){.sticky,.sticky.hide{transition:none}}
#device :focus-visible{outline:2px solid var(--deep);outline-offset:2px}

/* Notes */
.notes .toggle{font-size:12px;border:1px solid var(--border-strong);border-radius:var(--pill);padding:4px 12px;background:var(--surface);margin-bottom:14px}
.notes ol{list-style:none}
.notes li{display:grid;grid-template-columns:30px 1fr;gap:10px;padding:12px 0;border-top:1px solid var(--border)}
.notes li:first-child{border-top:0}
.notes .k{width:24px;height:24px;border-radius:var(--r-sm);background:var(--note);color:var(--on-primary);font:700 12px/24px "Helvetica Neue",Arial,sans-serif;text-align:center;letter-spacing:0}
.notes b{font-size:15px;font-weight:600;display:block;line-height:1.5}
.notes p{font-size:12px;color:var(--text-2);line-height:1.65;margin-top:2px;letter-spacing:.02em}
.notes .f{display:inline-block;font-size:12px;font-weight:600;color:var(--deep);background:var(--tint);border-radius:var(--pill);padding:0 8px;margin-top:4px;letter-spacing:.04em}
.legend{font-size:12px;color:var(--text-2);margin-top:18px;padding-top:12px;border-top:1px solid var(--border);line-height:1.7}
.backbar{background:var(--deep);color:var(--on-primary);font-size:12px}
.backbar .in{max-width:1320px;margin:0 auto;padding:0 32px;display:flex;justify-content:space-between;align-items:center;min-height:40px}
.backbar a{color:var(--on-primary);text-decoration:none}.backbar a:hover{text-decoration:underline}
.backbar span{opacity:.7;letter-spacing:.06em;font-size:12px}

/* Language switch */
.lang-switch{position:fixed;top:6px;right:12px;z-index:1000;display:flex;background:color-mix(in srgb,var(--surface) 96%,transparent);border:1px solid var(--border);border-radius:var(--pill);padding:3px;box-shadow:0 2px 8px color-mix(in srgb,var(--text) 12%,transparent);font-family:"Helvetica Neue",Arial,"Hiragino Sans","Noto Sans JP",sans-serif}
.lang-switch button{font:600 12px/1 inherit;font-family:inherit;letter-spacing:.04em;border:0;background:none;color:var(--deep);padding:6px 12px;border-radius:var(--pill);cursor:pointer;min-height:28px}
.lang-switch button[aria-pressed=true]{background:var(--deep);color:var(--on-primary)}
.lang-switch button:focus-visible{outline:2px solid var(--deep);outline-offset:2px}
.backbar .wrap,.backbar .in{padding-right:150px!important}
html[lang=ja] body{letter-spacing:.04em}
html[lang=ja] p,html[lang=ja] li,html[lang=ja] td,html[lang=ja] h1,html[lang=ja] h2,html[lang=ja] h3{word-break:auto-phrase;line-break:strict}


/* Engines without auto-phrase (Safari): keep short labels whole */
@supports not (word-break:auto-phrase){.name,.cmp td,.cmp th,.scale-l,.backbar a{word-break:keep-all}}
.backbar a{white-space:nowrap}
.notes [lang=ja],.shell>header [lang=ja]{word-break:auto-phrase}
@media(max-width:359px){.cmp th,.cmp td{padding:8px 3px}}
@supports not (word-break:auto-phrase){@media(max-width:359px){#cmp{overflow-x:auto}}}

</style>
</head>
<body>
<div class="lang-switch" role="group" aria-label="Language / 言語"><button type="button" data-l="en" aria-pressed="true">EN</button><button type="button" data-l="ja" aria-pressed="false" lang="ja">日本語</button></div>
<div id="app"></div>

<template id="t-en" data-title="Mareo JP — Proposed mobile product page (mock)">
<div class="backbar"><div class="in"><a href="index.html">← All deliverables</a><span>DELIVERABLE 3 OF 3 · PROPOSED MOBILE PRODUCT PAGE</span></div></div>
<div class="shell">
<header>
<div class="meta">PROPOSAL MOCK · SUMI SOFA PRODUCT PAGE · MOBILE 390PX · DRAFT</div>
<h1>The first three screens of the product page, rebuilt around the decision</h1>
<p>Same brand system and template; the changes are in typography, order and content. Scroll inside each phone to compare. Red markers are findings from the localisation review (1–13) and the IA analysis (N, IA); dark markers (D) are lower-priority design proposals. Each marker is explained in the notes on the right. Best viewed on a desktop screen.</p>
</header>
<div class="stage">
<div class="current">
<div class="col-label">CURRENT · CAPTURED 18 NOV 2026</div>
<div class="device" lang="ja"><div class="screen"><img alt="Current Sumi sofa product page on mobile" data-img="0" src=""/></div>
<div aria-hidden="true" class="fixed"><img data-img="1" src="" style="left:0;top:0;width:390px"/><span class="lbl">FIXED ON SCREEN, CAPTURED 18 NOV</span><span class="mk" style="right:6px;top:676px">9</span></div></div>
<p class="cap">Capture of the current page at the same 390px width. The coupon bubble, chat button and sticky bar stay fixed on screen, as on a real phone. Scroll to compare; the comparison and reviews sit far below this (reviews from about screen 10.5).</p>
</div>
<div>
<div class="col-label">PROPOSED</div>
<div class="device" id="device" lang="ja"><div class="screen">
<div class="annc rel">メルマガ登録で次回3,000円OFF<span class="mk" style="right:6px;top:2px">6</span></div>
<div class="hdr rel">
<button aria-label="メニュー" class="ic"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
<button aria-label="検索" class="ic rel"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L20 20"/></svg><span class="mk" style="right:-2px;top:2px">13</span></button>
<span aria-label="MAREO" class="logo" role="img" data-asset="site"><span style="font:500 23px/1 Jost,sans-serif;letter-spacing:.32em;margin-right:-.32em;color:var(--deep)">MAREO</span></span>
<button aria-label="アカウント" class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="4"/><path d="M4 20c1.5-4 4.5-5.5 8-5.5s6.5 1.5 8 5.5"/></svg></button>
<button aria-label="カート" class="ic"><svg viewBox="0 0 24 24"><path d="M3 4h2.5l2.2 11h11l2-8H7"/><circle cx="9" cy="19.5" r="1.2"/><circle cx="17" cy="19.5" r="1.2"/></svg></button>
</div>
<div class="crumb">ホーム / ソファ / スクエアアームソファ Sumi</div>
<div class="gallery rel"><img alt="スクエアアームソファ Sumi（1枚目／全5枚、スワイプで切り替え）" data-img="2" src=""/><span class="tag">NEW</span><span class="count">1 / 5</span><span class="mk d" style="left:8px;bottom:10px">D1</span><span class="mk" style="left:70px;top:10px">9</span></div>
<div class="bb">
<a class="rating rel" href="#rev"><span class="stars" aria-label="5点中4.8">★★★★★</span><b>4.8</b><u>128件のレビュー</u><span class="mk" style="right:-28px;top:4px">8</span></a>
<h2 class="name rel">マレオ スクエアアームソファ<wbr/>Sumi<span class="mk" style="right:-6px;top:-6px">1</span></h2>
<p class="lede jp rel">深く座っても沈みにくい、しっかりめの3人掛け。ワンルームから家族のリビングまで。<span class="mk" style="right:-6px;top:0">2</span></p>
<div class="feat"><button aria-expanded="false" aria-controls="ft1" class="ft">ポケットコイル座面<i aria-hidden="true">i</i></button><button aria-expanded="false" aria-controls="ft2" class="ft">撥水ファブリック<i aria-hidden="true">i</i></button></div>
<p class="ftx" id="ft1" hidden>点で支えて、へたりにくい。</p><p class="ftx" id="ft2" hidden>飲みこぼしもさっと拭けます。</p>
<div class="price rel"><span class="amt">124,000円</span><span class="tax">（税込）</span><span class="ship">送料無料</span><span class="mk" style="right:-6px;top:0">N1</span></div>
<p class="pay">カード分割なら月々20,667円（6回）</p>
<div class="firm rel"><span class="mk" style="right:-8px;top:-8px">4</span>
<div class="row"><span class="lbl">座り心地</span><a href="#cmp">3つのソファの座り心地を比べる</a></div>
<div class="scale"><span class="seg"></span><span class="seg"></span><span class="seg on"></span><span class="ghost" style="left:16.67%" data-l="Ren" aria-label="Ren：やわらかめ"></span><span class="ghost" style="left:50%" data-l="Mio" aria-label="Mio：ふつう"></span><span class="pin" style="left:83.33%" aria-label="Sumi：かため"></span></div>
<div class="scale-l"><span>やわらかめ</span><span>ふつう</span><span class="on">かため</span></div>
<p class="val"><b>かため</b>。座面が深く沈まず、長く座っても姿勢がくずれにくい座り心地です。レビューでも「思ったより硬め」という声が多く聞かれます。</p>
</div>
<div class="opt-h"><span class="lbl">カラー：グレー</span></div>
<div class="sw rel"><button aria-pressed="true" class="swc"><i style="background:#8f877d"></i>グレー</button><button aria-pressed="false" class="swc"><i style="background:#2f3750"></i>ネイビー</button><button aria-pressed="false" class="swc"><i style="background:#a8664a"></i>テラコッタ</button></div>
<div class="opt-h"><span class="lbl">サイズ：3人掛け</span><a href="#">サイズガイド</a></div>
<div class="sizes rel"><span class="mk" style="right:-8px;top:-10px">5</span>
<button aria-pressed="false" class="size"><span class="n">2人掛け</span><span class="w">幅160cm</span><span class="p">98,000円</span></button>
<button aria-pressed="true" class="size"><span class="n">3人掛け</span><span class="w">幅200cm</span><span class="p">124,000円</span></button>
<button aria-pressed="false" class="size"><span class="n">カウチ</span><span class="w">幅240cm</span><span class="p">152,000円</span></button>
</div>
<p class="fit jp rel">3人掛けの梱包は <b>205×92×48cm</b>、<span style="white-space:nowrap">搬入に必要な幅は64cm</span>。<a href="#">搬入経路を確認する</a><span class="mk" style="right:-6px;top:0">11</span></p>
<button class="cta rel"><span class="m">カートに入れる</span><span class="s">60日間返品保証つき</span><span class="mk" style="right:-6px;top:-8px">6</span></button>
</div>
<div class="rel"><span class="mk" style="right:8px;top:-10px">3</span></div><ul class="trust">
<li><svg viewBox="0 0 24 24"><path d="M2 7h12v9H2zM14 10h4.5l3 3.5V16H14z"/><circle cx="6" cy="17.5" r="1.6"/><circle cx="17.5" cy="17.5" r="1.6"/></svg><div><div class="t">最短 <span class="tbd">11月25日（水）</span> お届け</div><div class="d">日時指定できます</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4.5h4.5"/></svg><div><div class="t">返品について</div><div class="d">返送料 <span class="tbd">¥X,XXX</span>・返品の手順</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/></svg><div><div class="t">フレーム5年保証</div><div class="d">カバーやクッションは単品で買い替えられます</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M4 7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10"/></svg><div><div class="t">生地サンプル無料</div><div class="d">3色まで無料でお送りします</div></div><span class="chev">›</span></li>
<li class="rel"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg><div><div class="t">お支払い方法</div><div class="d">クレジットカード（分割可）・<span class="tbd" style="white-space:nowrap">他の方法</span></div></div><span class="chev">›</span><span class="mk" style="right:-8px;top:8px">7</span></li>
<li class="rel"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg><div><div class="t">チャットで相談する</div></div><span class="chev">›</span><span class="mk" style="right:-8px;top:8px">9</span></li>
</ul>
<p class="try rel">実際に座ってみたい方は <a href="#">ショールーム</a> へ<span class="mk" style="right:0;top:-2px">N3</span></p>
<section class="sec rel" id="rev"><span class="mk" style="right:8px;top:24px">8</span>
<h3>お客様の評価</h3>
<div class="revtop"><div class="big">4.8</div><div class="sub"><span class="stars">★★★★★</span><br/>128件のレビュー</div></div>
<div class="hist">
<div class="r"><span>★5</span><span class="bar"><i style="width:84%"></i></span><span class="c">108件</span></div>
<div class="r"><span>★4</span><span class="bar"><i style="width:12%"></i></span><span class="c">15件</span></div>
<div class="r"><span>★3</span><span class="bar"><i style="width:2.3%"></i></span><span class="c">3件</span></div>
<div class="r"><span>★2</span><span class="bar"><i style="width:.8%"></i></span><span class="c">1件</span></div>
<div class="r"><span>★1</span><span class="bar"><i style="width:.8%"></i></span><span class="c">1件</span></div>
</div>
<p class="reco" style="margin-top:14px;font-weight:600">あなたに近い人のレビュー</p>
<div class="chips">
<button aria-pressed="true" class="chip">ひとり暮らし</button><button class="chip">二人暮らし</button><button class="chip">家族</button><button class="chip">1K・1R</button><button class="chip">リビング</button><button class="chip">硬めが好き</button>
</div>
<div class="card">
<div class="h"><span>購入者・3人掛け グレー</span><span>2026/10/28</span></div>
<div class="tt"><span class="stars">★★★★★</span>　しっかりした座り心地</div>
<p>クッションを裏返せて、生地も拭きやすいです。思っていたより少し硬めです。</p>
<div class="attrs"><span>年代 30代</span><span>二人暮らし</span><span>リビング</span></div>
</div>
<a class="more" href="#">レビューをすべて見る（128件）</a>
</section>
<section class="sec rel" id="cmp"><span class="mk" style="right:8px;top:24px">12</span>
<h3>3つのソファを比べる</h3>
<table class="cmp">
<tr><th></th><th class="me">Sumi</th><th>Ren</th><th>Mio</th></tr>
<tr><td>価格</td><td class="me">98,000円〜</td><td>118,000円〜</td><td>86,000円〜</td></tr>
<tr><td>座り心地</td><td class="me">かため</td><td>やわらかめ</td><td>ふつう</td></tr>
<tr><td>座面</td><td class="me">ポケットコイル</td><td>フェザー</td><td>ウレタン</td></tr>
<tr><td>おすすめ</td><td class="me">姿勢よく座りたい方</td><td class="tbd">要確認</td><td class="tbd">要確認</td></tr>
</table>
<a class="more" href="#">すべての項目を比較する</a>
</section>
<ul class="acc"><li>サイズ・搬入<span>＋</span></li><li>素材・お手入れ<span>＋</span></li><li>お届け・返品<span>＋</span></li><li>保証<span>＋</span></li><li>よくある質問<span>＋</span></li></ul>
<section class="sec"><h3>マレオのこだわり</h3><p style="font-size:12px;color:var(--text-2);margin-top:6px">（ここから商品ストーリー：座り心地 → 素材 → お手入れ → 長く使える理由。各訴求は1回ずつ）</p></section>
<div class="spacer"></div>
<div class="sticky rel hide" id="bar"><span class="mk" style="left:2px;top:-12px">9</span>
<button aria-label="チャットで相談" class="chat"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg></button>
<div class="sel">3人掛け<br/><b>124,000円</b><span style="font-size:12px;color:var(--text-2)">（税込）</span></div>
<button class="go">カートに入れる</button>
</div>
</div></div>
</div>
<div class="notes">
<div class="col-label">WHAT CHANGED AND WHY</div>
<button class="toggle" onclick="document.querySelector('.stage').classList.toggle('markers-off')">Show / hide markers</button>
<ol>
<li><span class="k">1</span><div><b>Japanese typography layer</b><p>A Japanese font after Jost, +0.04em tracking, line-height 1.7. The product name breaks at the word boundary, not <span lang="ja">「スクエアアームソ／ファ」</span>.</p><span class="f">Localisation review 1, 2</span></div></li>
<li><span class="k">2</span><div><b>One line on who it's for</b><p>Replaces the 【Best Seller】 tagline, which promises <span lang="ja">「究極の快適さ」</span> and says nothing about the seat. Phrase-aware line breaks (<code>auto-phrase</code>).</p><span class="f">Localisation review 2, 4, 6</span></div></li>
<li><span class="k">N1</span><div><b>Price labelled 税込; neutral 送料無料 tag</b><p>The price moves onto the first screen, above the firmness block. Free shipping no longer uses the red “Free Shipping” pill, so red stays reserved for real discounts.</p><span class="f">IA analysis N1 · Localisation review 12</span></div></li>
<li><span class="k">4</span><div><b>Seat firmness on the familiar three-step scale</b><p>A やわらかめ / ふつう / かため scale in three flat steps, with Sumi’s step filled and the other two sofas as faint dots, a plain-language verdict that agrees with the spec and the reviews, and a link to compare. It replaces the 4/5 bar labelled <span lang="ja">「ふんわりやわらか」</span>.</p><span class="f">Localisation review 4</span></div></li>
<li><span class="k">5</span><div><b>Sizes with width and price; named colours</b><p>Every size shows the name, width in cm and price, and never breaks mid-word. Swatches carry their colour name, and the label names the selection (サイズ：3人掛け).</p><span class="f">Localisation review 5</span></div></li>
<li><span class="k">11</span><div><b>Carry-in size next to the size choice</b><p>The packed size and the doorway width needed, with a link to a carry-in check. Today neither appears anywhere on the page, and nothing says whether delivery includes carrying the sofa into the room.</p><span class="f">Localisation review 11</span></div></li>
<li><span class="k">6</span><div><b>CTA keeps the wording, adds what happens</b><p><span lang="ja">「カートに入れる」</span> stays; the sub-line states the returns guarantee. English strings become Japanese. The 3,000円 offer moves into the announcement bar as one quiet line, instead of a pill, a bubble and a pop-up. Free shipping is stated once, beside the price, and the 60-day guarantee once, under the button.</p><span class="f">Localisation review 6 · Appendix A2</span></div></li>
<li><span class="k">3</span><div><b>Trust block at the decision point</b><p>The four ⓘ pills become rows with the arrival estimate, returns, the 5-year frame warranty, fabric samples and payment, the same on every screen size. Each row opens details.</p><span class="f">Localisation review 3</span></div></li>
<li><span class="k">7</span><div><b>Payment methods before the cart</b><p>Listed in the trust block; the final list should match checkout.</p><span class="f">Localisation review 7</span></div></li>
<li><span class="k">N3</span><div><b>Where to try it</b><p>A link to the showroom, which today sits only in the menu's utility area.</p><span class="f">IA analysis N3, IA-2</span></div></li>
<li><span class="k">8</span><div><b>Reviews in the first screens</b><p>The rating links to a summary placed right after the trust block: histogram in Japanese counts, natural wording, and filters built from the attributes Mareo already collects (age, household, room), which today show in English. To make room, the detail sections keep their content and move below the comparison as five groups.</p><span class="f">Localisation review 6, 8, 12</span></div></li>
<li><span class="k">12</span><div><b>Short comparison before the story</b><p>Price, seat firmness and seat construction against Ren and Mio, linking to the full table. The feature story follows, each claim told once.</p><span class="f">Localisation review 4, 12 · IA analysis IA-5</span></div></li>
<li><span class="k">9</span><div><b>Nothing floats over the buy area</b><p>On the current page the 10% OFF bubble and the chat button float above the sticky bar, covering the price and the payment line. Four badges on the photo become one. Chat becomes the last row of the trust block, right under the main button. Once the button has scrolled away it is also in the sticky bar, so it is always one tap away. The coupon moves into the announcement bar as one line (6). The bar itself stays, now with 税込, but appears only once the main button has scrolled away, so the same button never shows twice.</p><span class="f">Localisation review 9 · Appendix A2</span><p style="margin-top:6px">To confirm with Mareo: the share of product-page sessions that open chat, and whether chatters convert better.</p></div></li>
<li><span class="k">13</span><div><b>Search in the mobile header</b><p>So service questions have a starting point.</p><span class="f">Localisation review 13 · IA analysis IA-13</span></div></li>
<li><span class="k d">D1</span><div><b>Swipe gallery with a counter</b><span class="pri">Design proposal · low priority</span><p>The thumbnail strip becomes a <span lang="ja">「1 / 5」</span> counter on the image. Swiping is the expected gesture on a phone, so the strip repeats it and takes about 60px of the first screen. Saving that space helps bring the price onto the first screen. Trade-off: no preview of what the other images show.</p><span class="f">Design judgement, not a review finding</span></div></li>
</ol>
<p class="legend"><span class="tbd">Red values</span> are placeholders that need Mareo data: the real arrival estimate, the return shipping cost, the full list of payment methods and the “who it's for” lines for Ren and Mio. All other values are from the current Mareo page, captured 18 November 2026.<br/><br/><b style="color:var(--deep)">D</b> markers are design proposals: judgement calls with a stated reason, lower priority than the review findings.<br/><br/>Anything without a marker is unchanged from the current page: logo, breadcrumb, photos, feature chips (now in Japanese, each ⓘ opening its line from the current page), the payment line, accordion content. In the mock only, header icons are close redraws.</p>
</div>
</div>
</div>
</template>
<template id="t-ja" data-title="Mareo JP — モバイル商品ページ改善案（モック）">
<div class="backbar"><div class="in"><a href="index.html">← 成果物一覧へ</a><span>成果物 3 / 3 · モバイル商品ページ改善案</span></div></div>
<div class="shell">
<header>
<div class="meta">改善案モック · ソファ「Sumi」商品ページ · モバイル 390PX · ドラフト</div>
<h1>商品ページの最初の3画面を、購入の判断を軸に組み直しました</h1>
<p>ブランドシステムとテンプレートはそのままに、タイポグラフィ、順序、コンテンツを変更しています。それぞれのスマートフォンの中をスクロールして比較できます。赤いマーカーはローカライズ・デザインレビュー（1–13）とIA分析（N、IA）の指摘、濃い色のマーカー（D）は優先度の低いデザイン提案です。各マーカーの説明は右側の解説欄にあります。PCの画面での閲覧を推奨します。</p>
</header>
<div class="stage">
<div class="current">
<div class="col-label">現状 · 2026年11月18日に取得</div>
<div class="device" lang="ja"><div class="screen"><img alt="Sumiソファの現在の商品ページ（モバイル）" data-img="0" src=""/></div>
<div aria-hidden="true" class="fixed"><img data-img="1" src="" style="left:0;top:0;width:390px"/><span class="lbl">画面に固定 · 11月18日に取得</span><span class="mk" style="right:6px;top:676px">9</span></div></div>
<p class="cap">現在のページを同じ390pxの幅でキャプチャしたものです。クーポンのバブル、チャットボタン、追従バーは、実際のスマートフォンと同じく画面に固定されています。スクロールして比較してください。比較表とレビューはこれよりずっと下にあります（レビューは約10.5画面目から）。</p>
</div>
<div>
<div class="col-label">改善案</div>
<div class="device" id="device" lang="ja"><div class="screen">
<div class="annc rel">メルマガ登録で次回3,000円OFF<span class="mk" style="right:6px;top:2px">6</span></div>
<div class="hdr rel">
<button aria-label="メニュー" class="ic"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
<button aria-label="検索" class="ic rel"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L20 20"/></svg><span class="mk" style="right:-2px;top:2px">13</span></button>
<span aria-label="MAREO" class="logo" role="img" data-asset="site"><span style="font:500 23px/1 Jost,sans-serif;letter-spacing:.32em;margin-right:-.32em;color:var(--deep)">MAREO</span></span>
<button aria-label="アカウント" class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="4"/><path d="M4 20c1.5-4 4.5-5.5 8-5.5s6.5 1.5 8 5.5"/></svg></button>
<button aria-label="カート" class="ic"><svg viewBox="0 0 24 24"><path d="M3 4h2.5l2.2 11h11l2-8H7"/><circle cx="9" cy="19.5" r="1.2"/><circle cx="17" cy="19.5" r="1.2"/></svg></button>
</div>
<div class="crumb">ホーム / ソファ / スクエアアームソファ Sumi</div>
<div class="gallery rel"><img alt="スクエアアームソファ Sumi（1枚目／全5枚、スワイプで切り替え）" data-img="2" src=""/><span class="tag">NEW</span><span class="count">1 / 5</span><span class="mk d" style="left:8px;bottom:10px">D1</span><span class="mk" style="left:70px;top:10px">9</span></div>
<div class="bb">
<a class="rating rel" href="#rev"><span class="stars" aria-label="5点中4.8">★★★★★</span><b>4.8</b><u>128件のレビュー</u><span class="mk" style="right:-28px;top:4px">8</span></a>
<h2 class="name rel">マレオ スクエアアームソファ<wbr/>Sumi<span class="mk" style="right:-6px;top:-6px">1</span></h2>
<p class="lede jp rel">深く座っても沈みにくい、しっかりめの3人掛け。ワンルームから家族のリビングまで。<span class="mk" style="right:-6px;top:0">2</span></p>
<div class="feat"><button aria-expanded="false" aria-controls="ft1" class="ft">ポケットコイル座面<i aria-hidden="true">i</i></button><button aria-expanded="false" aria-controls="ft2" class="ft">撥水ファブリック<i aria-hidden="true">i</i></button></div>
<p class="ftx" id="ft1" hidden>点で支えて、へたりにくい。</p><p class="ftx" id="ft2" hidden>飲みこぼしもさっと拭けます。</p>
<div class="price rel"><span class="amt">124,000円</span><span class="tax">（税込）</span><span class="ship">送料無料</span><span class="mk" style="right:-6px;top:0">N1</span></div>
<p class="pay">カード分割なら月々20,667円（6回）</p>
<div class="firm rel"><span class="mk" style="right:-8px;top:-8px">4</span>
<div class="row"><span class="lbl">座り心地</span><a href="#cmp">3つのソファの座り心地を比べる</a></div>
<div class="scale"><span class="seg"></span><span class="seg"></span><span class="seg on"></span><span class="ghost" style="left:16.67%" data-l="Ren" aria-label="Ren：やわらかめ"></span><span class="ghost" style="left:50%" data-l="Mio" aria-label="Mio：ふつう"></span><span class="pin" style="left:83.33%" aria-label="Sumi：かため"></span></div>
<div class="scale-l"><span>やわらかめ</span><span>ふつう</span><span class="on">かため</span></div>
<p class="val"><b>かため</b>。座面が深く沈まず、長く座っても姿勢がくずれにくい座り心地です。レビューでも「思ったより硬め」という声が多く聞かれます。</p>
</div>
<div class="opt-h"><span class="lbl">カラー：グレー</span></div>
<div class="sw rel"><button aria-pressed="true" class="swc"><i style="background:#8f877d"></i>グレー</button><button aria-pressed="false" class="swc"><i style="background:#2f3750"></i>ネイビー</button><button aria-pressed="false" class="swc"><i style="background:#a8664a"></i>テラコッタ</button></div>
<div class="opt-h"><span class="lbl">サイズ：3人掛け</span><a href="#">サイズガイド</a></div>
<div class="sizes rel"><span class="mk" style="right:-8px;top:-10px">5</span>
<button aria-pressed="false" class="size"><span class="n">2人掛け</span><span class="w">幅160cm</span><span class="p">98,000円</span></button>
<button aria-pressed="true" class="size"><span class="n">3人掛け</span><span class="w">幅200cm</span><span class="p">124,000円</span></button>
<button aria-pressed="false" class="size"><span class="n">カウチ</span><span class="w">幅240cm</span><span class="p">152,000円</span></button>
</div>
<p class="fit jp rel">3人掛けの梱包は <b>205×92×48cm</b>、<span style="white-space:nowrap">搬入に必要な幅は64cm</span>。<a href="#">搬入経路を確認する</a><span class="mk" style="right:-6px;top:0">11</span></p>
<button class="cta rel"><span class="m">カートに入れる</span><span class="s">60日間返品保証つき</span><span class="mk" style="right:-6px;top:-8px">6</span></button>
</div>
<div class="rel"><span class="mk" style="right:8px;top:-10px">3</span></div><ul class="trust">
<li><svg viewBox="0 0 24 24"><path d="M2 7h12v9H2zM14 10h4.5l3 3.5V16H14z"/><circle cx="6" cy="17.5" r="1.6"/><circle cx="17.5" cy="17.5" r="1.6"/></svg><div><div class="t">最短 <span class="tbd">11月25日（水）</span> お届け</div><div class="d">日時指定できます</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4.5h4.5"/></svg><div><div class="t">返品について</div><div class="d">返送料 <span class="tbd">¥X,XXX</span>・返品の手順</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/></svg><div><div class="t">フレーム5年保証</div><div class="d">カバーやクッションは単品で買い替えられます</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M4 7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10"/></svg><div><div class="t">生地サンプル無料</div><div class="d">3色まで無料でお送りします</div></div><span class="chev">›</span></li>
<li class="rel"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg><div><div class="t">お支払い方法</div><div class="d">クレジットカード（分割可）・<span class="tbd" style="white-space:nowrap">他の方法</span></div></div><span class="chev">›</span><span class="mk" style="right:-8px;top:8px">7</span></li>
<li class="rel"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg><div><div class="t">チャットで相談する</div></div><span class="chev">›</span><span class="mk" style="right:-8px;top:8px">9</span></li>
</ul>
<p class="try rel">実際に座ってみたい方は <a href="#">ショールーム</a> へ<span class="mk" style="right:0;top:-2px">N3</span></p>
<section class="sec rel" id="rev"><span class="mk" style="right:8px;top:24px">8</span>
<h3>お客様の評価</h3>
<div class="revtop"><div class="big">4.8</div><div class="sub"><span class="stars">★★★★★</span><br/>128件のレビュー</div></div>
<div class="hist">
<div class="r"><span>★5</span><span class="bar"><i style="width:84%"></i></span><span class="c">108件</span></div>
<div class="r"><span>★4</span><span class="bar"><i style="width:12%"></i></span><span class="c">15件</span></div>
<div class="r"><span>★3</span><span class="bar"><i style="width:2.3%"></i></span><span class="c">3件</span></div>
<div class="r"><span>★2</span><span class="bar"><i style="width:.8%"></i></span><span class="c">1件</span></div>
<div class="r"><span>★1</span><span class="bar"><i style="width:.8%"></i></span><span class="c">1件</span></div>
</div>
<p class="reco" style="margin-top:14px;font-weight:600">あなたに近い人のレビュー</p>
<div class="chips">
<button aria-pressed="true" class="chip">ひとり暮らし</button><button class="chip">二人暮らし</button><button class="chip">家族</button><button class="chip">1K・1R</button><button class="chip">リビング</button><button class="chip">硬めが好き</button>
</div>
<div class="card">
<div class="h"><span>購入者・3人掛け グレー</span><span>2026/10/28</span></div>
<div class="tt"><span class="stars">★★★★★</span>　しっかりした座り心地</div>
<p>クッションを裏返せて、生地も拭きやすいです。思っていたより少し硬めです。</p>
<div class="attrs"><span>年代 30代</span><span>二人暮らし</span><span>リビング</span></div>
</div>
<a class="more" href="#">レビューをすべて見る（128件）</a>
</section>
<section class="sec rel" id="cmp"><span class="mk" style="right:8px;top:24px">12</span>
<h3>3つのソファを比べる</h3>
<table class="cmp">
<tr><th></th><th class="me">Sumi</th><th>Ren</th><th>Mio</th></tr>
<tr><td>価格</td><td class="me">98,000円〜</td><td>118,000円〜</td><td>86,000円〜</td></tr>
<tr><td>座り心地</td><td class="me">かため</td><td>やわらかめ</td><td>ふつう</td></tr>
<tr><td>座面</td><td class="me">ポケットコイル</td><td>フェザー</td><td>ウレタン</td></tr>
<tr><td>おすすめ</td><td class="me">姿勢よく座りたい方</td><td class="tbd">要確認</td><td class="tbd">要確認</td></tr>
</table>
<a class="more" href="#">すべての項目を比較する</a>
</section>
<ul class="acc"><li>サイズ・搬入<span>＋</span></li><li>素材・お手入れ<span>＋</span></li><li>お届け・返品<span>＋</span></li><li>保証<span>＋</span></li><li>よくある質問<span>＋</span></li></ul>
<section class="sec"><h3>マレオのこだわり</h3><p style="font-size:12px;color:var(--text-2);margin-top:6px">（ここから商品ストーリー：座り心地 → 素材 → お手入れ → 長く使える理由。各訴求は1回ずつ）</p></section>
<div class="spacer"></div>
<div class="sticky rel hide" id="bar"><span class="mk" style="left:2px;top:-12px">9</span>
<button aria-label="チャットで相談" class="chat"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg></button>
<div class="sel">3人掛け<br/><b>124,000円</b><span style="font-size:12px;color:var(--text-2)">（税込）</span></div>
<button class="go">カートに入れる</button>
</div>
</div></div>
</div>
<div class="notes">
<div class="col-label">変更点とその理由</div>
<button class="toggle" onclick="document.querySelector('.stage').classList.toggle('markers-off')">マーカーの表示／非表示</button>
<ol>
<li><span class="k">1</span><div><b>日本語タイポグラフィの層</b><p>Jostの後に和文フォントを指定し、字間+0.04em、行の高さ1.7に。商品名は「スクエアアームソ／ファ」ではなく、単語の区切りで改行されます。</p><span class="f">ローカライズ・デザインレビュー 1、2</span></div></li>
<li><span class="k">2</span><div><b>「こんな方に」を1行で</b><p>「究極の快適さ」をうたうだけで座面について何も伝えていない【Best Seller】のキャッチコピーの代わりに。文節を考慮した改行（<code>auto-phrase</code>）。</p><span class="f">ローカライズ・デザインレビュー 2、4、6</span></div></li>
<li><span class="k">N1</span><div><b>価格に「税込」を表記、「送料無料」は落ち着いたタグに</b><p>価格を座り心地のブロックより上、最初の画面に移します。送料無料に赤い「Free Shipping」のピルを使わないことで、赤を実際の値引きのためだけに使えます。</p><span class="f">IA分析 N1 · ローカライズ・デザインレビュー 12</span></div></li>
<li><span class="k">4</span><div><b>見慣れた3段階で座り心地を表記</b><p>「やわらかめ／ふつう／かため」の3段階をフラットに並べ、Sumiの段を塗りつぶし、他の2モデルを薄い点で表示します。仕様ともレビューとも矛盾しない平易な説明と、比較へのリンクを添えています。「ふんわりやわらか」と書かれた4/5のバーの代わりです。</p><span class="f">ローカライズ・デザインレビュー 4</span></div></li>
<li><span class="k">5</span><div><b>幅と価格付きのサイズ、名前付きのカラー</b><p>すべてのサイズに名称、幅（cm）、価格を表示し、単語の途中で改行されません。スウォッチにはカラー名を添え、ラベルには選択中の項目を表示します（サイズ：3人掛け）。</p><span class="f">ローカライズ・デザインレビュー 5</span></div></li>
<li><span class="k">11</span><div><b>サイズ選択のそばに搬入サイズを</b><p>梱包サイズと搬入に必要な幅を、搬入経路の確認へのリンクと一緒に表示します。現在はどちらもページ内になく、お届け時に部屋の中まで運んでもらえるかどうかも書かれていません。</p><span class="f">ローカライズ・デザインレビュー 11</span></div></li>
<li><span class="k">6</span><div><b>CTAは文言を残し、押した後の安心を補足</b><p>「カートに入れる」はそのままに、補足の1行で返品保証を伝えます。英語の表記は日本語にします。3,000円の特典は、ピル・バブル・ポップアップではなく、お知らせバーの控えめな1行にまとめます。送料無料は価格の横に1回、60日間返品保証はボタンの下に1回だけ表示します。</p><span class="f">ローカライズ・デザインレビュー 6 · 付録A2</span></div></li>
<li><span class="k">3</span><div><b>判断する場所に安心ブロックを</b><p>4つのⓘ付きピルを行の形式にし、お届け目安、返品、フレーム5年保証、生地サンプル、支払い方法を、どの画面サイズでも同じように表示します。各行から詳細を開けます。</p><span class="f">ローカライズ・デザインレビュー 3</span></div></li>
<li><span class="k">7</span><div><b>カートの前に支払い方法を</b><p>安心ブロックの中に記載。最終的な一覧は購入手続きの内容と一致させる必要があります。</p><span class="f">ローカライズ・デザインレビュー 7</span></div></li>
<li><span class="k">N3</span><div><b>試せる場所</b><p>ショールームへのリンク。現在はメニューのユーティリティのエリアにしかありません。</p><span class="f">IA分析 N3、IA-2</span></div></li>
<li><span class="k">8</span><div><b>最初の数画面にレビューを</b><p>評価から、安心ブロックのすぐ後に置いたサマリーへリンクします。評価分布は日本の件数表記と自然な文言にし、マレオがすでに収集している属性（年代、家族構成、部屋）で絞り込めるようにします。これらの属性は現在、英語で表示されています。そのスペースを確保するため、詳細セクションは内容をそのままに、5つのグループとして比較の下へ移動しています。</p><span class="f">ローカライズ・デザインレビュー 6、8、12</span></div></li>
<li><span class="k">12</span><div><b>特長紹介の前に簡易な比較を</b><p>価格、座り心地、座面の構造をRen・Mioと比較し、比較表全体へリンクします。その後に特長紹介が続き、各訴求は1回ずつです。</p><span class="f">ローカライズ・デザインレビュー 4、12 · IA分析 IA-5</span></div></li>
<li><span class="k">9</span><div><b>購入エリアの上に何も浮かせない</b><p>現在のページでは、10% OFFのバブルとチャットボタンが追従バーの上にフローティング表示され、価格と支払いの行に重なっています。写真上の4つのバッジは1つにします。チャットは安心ブロックの最後の行として、メインボタンのすぐ下に置きます。ボタンがスクロールで見えなくなった後は追従バーにも表示されるため、いつでもワンタップで使えます。クーポンはお知らせバーの1行になります（6）。追従バー自体は残して「税込」を加えますが、メインボタンがスクロールで見えなくなってから表示されるため、同じボタンが2つ同時に表示されることはありません。</p><span class="f">ローカライズ・デザインレビュー 9 · 付録A2</span><p style="margin-top:6px">マレオにご確認いただきたいこと：商品ページのセッションのうちチャットを開く割合、チャットを使った人の購入率が高いかどうか。</p></div></li>
<li><span class="k">13</span><div><b>モバイルのヘッダーに検索を</b><p>サービスに関する疑問の出発点をつくります。</p><span class="f">ローカライズ・デザインレビュー 13 · IA分析 IA-13</span></div></li>
<li><span class="k d">D1</span><div><b>枚数表示付きのスワイプギャラリー</b><span class="pri">デザイン提案 · 優先度 低い</span><p>サムネイルの列を、画像上の「1 / 5」の枚数表示に置き換えます。スマートフォンではスワイプが当たり前の操作のため、サムネイルの列は機能が重複しているうえ、最初の画面の約60pxを占めています。そのスペースを空けることで、価格を最初の画面に収めやすくなります。トレードオフ：他の画像の内容を事前に見られなくなります。</p><span class="f">デザイン上の判断（レビューの指摘ではありません）</span></div></li>
</ol>
<p class="legend"><span class="tbd">赤字</span>はマレオのデータが必要な仮置きです：実際のお届け目安、返送料、支払い方法の一覧、RenとMioの「こんな方に」の文言。それ以外の値は、2026年11月18日に取得した現在のマレオのページのものです。<br/><br/><b style="color:var(--deep)">D</b>のマーカーはデザイン提案です。理由を添えた判断によるもので、レビューの指摘より優先度は低くなります。<br/><br/>マーカーのない部分は、現在のページから変更していません：ロゴ、パンくずリスト、写真、特長のチップ（日本語化し、各ⓘから現在のページにある説明文を開けます）、支払いの行、アコーディオンの内容。モックの都合上、ヘッダーのアイコンは近い形で描き直しています。</p>
</div>
</div>
</div>
</template>

<noscript><style>#app{display:none}</style>

<div class="backbar"><div class="in"><a href="index.html">← All deliverables</a><span>DELIVERABLE 3 OF 3 · PROPOSED MOBILE PRODUCT PAGE</span></div></div>
<div class="shell">
<header>
<div class="meta">PROPOSAL MOCK · SUMI SOFA PRODUCT PAGE · MOBILE 390PX · DRAFT</div>
<h1>The first three screens of the product page, rebuilt around the decision</h1>
<p>Same brand system and template; the changes are in typography, order and content. Scroll inside each phone to compare. Red markers are findings from the localisation review (1–13) and the IA analysis (N, IA); dark markers (D) are lower-priority design proposals. Each marker is explained in the notes on the right. Best viewed on a desktop screen.</p>
</header>
<div class="stage">
<div class="current">
<div class="col-label">CURRENT · CAPTURED 18 NOV 2026</div>
<div class="device" lang="ja"><div class="screen"><img alt="Current Sumi sofa product page on mobile" src="data:,"/></div>
<div aria-hidden="true" class="fixed"><img src="data:," style="left:0;top:0;width:390px"/><span class="lbl">FIXED ON SCREEN, CAPTURED 18 NOV</span><span class="mk" style="right:6px;top:676px">9</span></div></div>
<p class="cap">Capture of the current page at the same 390px width. The coupon bubble, chat button and sticky bar stay fixed on screen, as on a real phone. Scroll to compare; the comparison and reviews sit far below this (reviews from about screen 10.5).</p>
</div>
<div>
<div class="col-label">PROPOSED</div>
<div class="device" id="device" lang="ja"><div class="screen">
<div class="annc rel">メルマガ登録で次回3,000円OFF<span class="mk" style="right:6px;top:2px">6</span></div>
<div class="hdr rel">
<button aria-label="メニュー" class="ic"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
<button aria-label="検索" class="ic rel"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L20 20"/></svg><span class="mk" style="right:-2px;top:2px">13</span></button>
<span aria-label="MAREO" class="logo" role="img" data-asset="site"><span style="font:500 23px/1 Jost,sans-serif;letter-spacing:.32em;margin-right:-.32em;color:var(--deep)">MAREO</span></span>
<button aria-label="アカウント" class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="4"/><path d="M4 20c1.5-4 4.5-5.5 8-5.5s6.5 1.5 8 5.5"/></svg></button>
<button aria-label="カート" class="ic"><svg viewBox="0 0 24 24"><path d="M3 4h2.5l2.2 11h11l2-8H7"/><circle cx="9" cy="19.5" r="1.2"/><circle cx="17" cy="19.5" r="1.2"/></svg></button>
</div>
<div class="crumb">ホーム / ソファ / スクエアアームソファ Sumi</div>
<div class="gallery rel"><img alt="スクエアアームソファ Sumi（1枚目／全5枚、スワイプで切り替え）" src="data:,"/><span class="tag">NEW</span><span class="count">1 / 5</span><span class="mk d" style="left:8px;bottom:10px">D1</span><span class="mk" style="left:70px;top:10px">9</span></div>
<div class="bb">
<a class="rating rel" href="#rev"><span class="stars" aria-label="5点中4.8">★★★★★</span><b>4.8</b><u>128件のレビュー</u><span class="mk" style="right:-28px;top:4px">8</span></a>
<h2 class="name rel">マレオ スクエアアームソファ<wbr/>Sumi<span class="mk" style="right:-6px;top:-6px">1</span></h2>
<p class="lede jp rel">深く座っても沈みにくい、しっかりめの3人掛け。ワンルームから家族のリビングまで。<span class="mk" style="right:-6px;top:0">2</span></p>
<div class="feat"><button aria-expanded="false" aria-controls="ft1" class="ft">ポケットコイル座面<i aria-hidden="true">i</i></button><button aria-expanded="false" aria-controls="ft2" class="ft">撥水ファブリック<i aria-hidden="true">i</i></button></div>
<p class="ftx" id="ft1" hidden>点で支えて、へたりにくい。</p><p class="ftx" id="ft2" hidden>飲みこぼしもさっと拭けます。</p>
<div class="price rel"><span class="amt">124,000円</span><span class="tax">（税込）</span><span class="ship">送料無料</span><span class="mk" style="right:-6px;top:0">N1</span></div>
<p class="pay">カード分割なら月々20,667円（6回）</p>
<div class="firm rel"><span class="mk" style="right:-8px;top:-8px">4</span>
<div class="row"><span class="lbl">座り心地</span><a href="#cmp">3つのソファの座り心地を比べる</a></div>
<div class="scale"><span class="seg"></span><span class="seg"></span><span class="seg on"></span><span class="ghost" style="left:16.67%" data-l="Ren" aria-label="Ren：やわらかめ"></span><span class="ghost" style="left:50%" data-l="Mio" aria-label="Mio：ふつう"></span><span class="pin" style="left:83.33%" aria-label="Sumi：かため"></span></div>
<div class="scale-l"><span>やわらかめ</span><span>ふつう</span><span class="on">かため</span></div>
<p class="val"><b>かため</b>。座面が深く沈まず、長く座っても姿勢がくずれにくい座り心地です。レビューでも「思ったより硬め」という声が多く聞かれます。</p>
</div>
<div class="opt-h"><span class="lbl">カラー：グレー</span></div>
<div class="sw rel"><button aria-pressed="true" class="swc"><i style="background:#8f877d"></i>グレー</button><button aria-pressed="false" class="swc"><i style="background:#2f3750"></i>ネイビー</button><button aria-pressed="false" class="swc"><i style="background:#a8664a"></i>テラコッタ</button></div>
<div class="opt-h"><span class="lbl">サイズ：3人掛け</span><a href="#">サイズガイド</a></div>
<div class="sizes rel"><span class="mk" style="right:-8px;top:-10px">5</span>
<button aria-pressed="false" class="size"><span class="n">2人掛け</span><span class="w">幅160cm</span><span class="p">98,000円</span></button>
<button aria-pressed="true" class="size"><span class="n">3人掛け</span><span class="w">幅200cm</span><span class="p">124,000円</span></button>
<button aria-pressed="false" class="size"><span class="n">カウチ</span><span class="w">幅240cm</span><span class="p">152,000円</span></button>
</div>
<p class="fit jp rel">3人掛けの梱包は <b>205×92×48cm</b>、<span style="white-space:nowrap">搬入に必要な幅は64cm</span>。<a href="#">搬入経路を確認する</a><span class="mk" style="right:-6px;top:0">11</span></p>
<button class="cta rel"><span class="m">カートに入れる</span><span class="s">60日間返品保証つき</span><span class="mk" style="right:-6px;top:-8px">6</span></button>
</div>
<div class="rel"><span class="mk" style="right:8px;top:-10px">3</span></div><ul class="trust">
<li><svg viewBox="0 0 24 24"><path d="M2 7h12v9H2zM14 10h4.5l3 3.5V16H14z"/><circle cx="6" cy="17.5" r="1.6"/><circle cx="17.5" cy="17.5" r="1.6"/></svg><div><div class="t">最短 <span class="tbd">11月25日（水）</span> お届け</div><div class="d">日時指定できます</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4.5h4.5"/></svg><div><div class="t">返品について</div><div class="d">返送料 <span class="tbd">¥X,XXX</span>・返品の手順</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/></svg><div><div class="t">フレーム5年保証</div><div class="d">カバーやクッションは単品で買い替えられます</div></div><span class="chev">›</span></li>
<li><svg viewBox="0 0 24 24"><path d="M4 7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10"/></svg><div><div class="t">生地サンプル無料</div><div class="d">3色まで無料でお送りします</div></div><span class="chev">›</span></li>
<li class="rel"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg><div><div class="t">お支払い方法</div><div class="d">クレジットカード（分割可）・<span class="tbd" style="white-space:nowrap">他の方法</span></div></div><span class="chev">›</span><span class="mk" style="right:-8px;top:8px">7</span></li>
<li class="rel"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg><div><div class="t">チャットで相談する</div></div><span class="chev">›</span><span class="mk" style="right:-8px;top:8px">9</span></li>
</ul>
<p class="try rel">実際に座ってみたい方は <a href="#">ショールーム</a> へ<span class="mk" style="right:0;top:-2px">N3</span></p>
<section class="sec rel" id="rev"><span class="mk" style="right:8px;top:24px">8</span>
<h3>お客様の評価</h3>
<div class="revtop"><div class="big">4.8</div><div class="sub"><span class="stars">★★★★★</span><br/>128件のレビュー</div></div>
<div class="hist">
<div class="r"><span>★5</span><span class="bar"><i style="width:84%"></i></span><span class="c">108件</span></div>
<div class="r"><span>★4</span><span class="bar"><i style="width:12%"></i></span><span class="c">15件</span></div>
<div class="r"><span>★3</span><span class="bar"><i style="width:2.3%"></i></span><span class="c">3件</span></div>
<div class="r"><span>★2</span><span class="bar"><i style="width:.8%"></i></span><span class="c">1件</span></div>
<div class="r"><span>★1</span><span class="bar"><i style="width:.8%"></i></span><span class="c">1件</span></div>
</div>
<p class="reco" style="margin-top:14px;font-weight:600">あなたに近い人のレビュー</p>
<div class="chips">
<button aria-pressed="true" class="chip">ひとり暮らし</button><button class="chip">二人暮らし</button><button class="chip">家族</button><button class="chip">1K・1R</button><button class="chip">リビング</button><button class="chip">硬めが好き</button>
</div>
<div class="card">
<div class="h"><span>購入者・3人掛け グレー</span><span>2026/10/28</span></div>
<div class="tt"><span class="stars">★★★★★</span>　しっかりした座り心地</div>
<p>クッションを裏返せて、生地も拭きやすいです。思っていたより少し硬めです。</p>
<div class="attrs"><span>年代 30代</span><span>二人暮らし</span><span>リビング</span></div>
</div>
<a class="more" href="#">レビューをすべて見る（128件）</a>
</section>
<section class="sec rel" id="cmp"><span class="mk" style="right:8px;top:24px">12</span>
<h3>3つのソファを比べる</h3>
<table class="cmp">
<tr><th></th><th class="me">Sumi</th><th>Ren</th><th>Mio</th></tr>
<tr><td>価格</td><td class="me">98,000円〜</td><td>118,000円〜</td><td>86,000円〜</td></tr>
<tr><td>座り心地</td><td class="me">かため</td><td>やわらかめ</td><td>ふつう</td></tr>
<tr><td>座面</td><td class="me">ポケットコイル</td><td>フェザー</td><td>ウレタン</td></tr>
<tr><td>おすすめ</td><td class="me">姿勢よく座りたい方</td><td class="tbd">要確認</td><td class="tbd">要確認</td></tr>
</table>
<a class="more" href="#">すべての項目を比較する</a>
</section>
<ul class="acc"><li>サイズ・搬入<span>＋</span></li><li>素材・お手入れ<span>＋</span></li><li>お届け・返品<span>＋</span></li><li>保証<span>＋</span></li><li>よくある質問<span>＋</span></li></ul>
<section class="sec"><h3>マレオのこだわり</h3><p style="font-size:12px;color:var(--text-2);margin-top:6px">（ここから商品ストーリー：座り心地 → 素材 → お手入れ → 長く使える理由。各訴求は1回ずつ）</p></section>
<div class="spacer"></div>
<div class="sticky rel hide" id="bar"><span class="mk" style="left:2px;top:-12px">9</span>
<button aria-label="チャットで相談" class="chat"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg></button>
<div class="sel">3人掛け<br/><b>124,000円</b><span style="font-size:12px;color:var(--text-2)">（税込）</span></div>
<button class="go">カートに入れる</button>
</div>
</div></div>
</div>
<div class="notes">
<div class="col-label">WHAT CHANGED AND WHY</div>
<button class="toggle" onclick="document.querySelector('.stage').classList.toggle('markers-off')">Show / hide markers</button>
<ol>
<li><span class="k">1</span><div><b>Japanese typography layer</b><p>A Japanese font after Jost, +0.04em tracking, line-height 1.7. The product name breaks at the word boundary, not <span lang="ja">「スクエアアームソ／ファ」</span>.</p><span class="f">Localisation review 1, 2</span></div></li>
<li><span class="k">2</span><div><b>One line on who it's for</b><p>Replaces the 【Best Seller】 tagline, which promises <span lang="ja">「究極の快適さ」</span> and says nothing about the seat. Phrase-aware line breaks (<code>auto-phrase</code>).</p><span class="f">Localisation review 2, 4, 6</span></div></li>
<li><span class="k">N1</span><div><b>Price labelled 税込; neutral 送料無料 tag</b><p>The price moves onto the first screen, above the firmness block. Free shipping no longer uses the red “Free Shipping” pill, so red stays reserved for real discounts.</p><span class="f">IA analysis N1 · Localisation review 12</span></div></li>
<li><span class="k">4</span><div><b>Seat firmness on the familiar three-step scale</b><p>A やわらかめ / ふつう / かため scale in three flat steps, with Sumi’s step filled and the other two sofas as faint dots, a plain-language verdict that agrees with the spec and the reviews, and a link to compare. It replaces the 4/5 bar labelled <span lang="ja">「ふんわりやわらか」</span>.</p><span class="f">Localisation review 4</span></div></li>
<li><span class="k">5</span><div><b>Sizes with width and price; named colours</b><p>Every size shows the name, width in cm and price, and never breaks mid-word. Swatches carry their colour name, and the label names the selection (サイズ：3人掛け).</p><span class="f">Localisation review 5</span></div></li>
<li><span class="k">11</span><div><b>Carry-in size next to the size choice</b><p>The packed size and the doorway width needed, with a link to a carry-in check. Today neither appears anywhere on the page, and nothing says whether delivery includes carrying the sofa into the room.</p><span class="f">Localisation review 11</span></div></li>
<li><span class="k">6</span><div><b>CTA keeps the wording, adds what happens</b><p><span lang="ja">「カートに入れる」</span> stays; the sub-line states the returns guarantee. English strings become Japanese. The 3,000円 offer moves into the announcement bar as one quiet line, instead of a pill, a bubble and a pop-up. Free shipping is stated once, beside the price, and the 60-day guarantee once, under the button.</p><span class="f">Localisation review 6 · Appendix A2</span></div></li>
<li><span class="k">3</span><div><b>Trust block at the decision point</b><p>The four ⓘ pills become rows with the arrival estimate, returns, the 5-year frame warranty, fabric samples and payment, the same on every screen size. Each row opens details.</p><span class="f">Localisation review 3</span></div></li>
<li><span class="k">7</span><div><b>Payment methods before the cart</b><p>Listed in the trust block; the final list should match checkout.</p><span class="f">Localisation review 7</span></div></li>
<li><span class="k">N3</span><div><b>Where to try it</b><p>A link to the showroom, which today sits only in the menu's utility area.</p><span class="f">IA analysis N3, IA-2</span></div></li>
<li><span class="k">8</span><div><b>Reviews in the first screens</b><p>The rating links to a summary placed right after the trust block: histogram in Japanese counts, natural wording, and filters built from the attributes Mareo already collects (age, household, room), which today show in English. To make room, the detail sections keep their content and move below the comparison as five groups.</p><span class="f">Localisation review 6, 8, 12</span></div></li>
<li><span class="k">12</span><div><b>Short comparison before the story</b><p>Price, seat firmness and seat construction against Ren and Mio, linking to the full table. The feature story follows, each claim told once.</p><span class="f">Localisation review 4, 12 · IA analysis IA-5</span></div></li>
<li><span class="k">9</span><div><b>Nothing floats over the buy area</b><p>On the current page the 10% OFF bubble and the chat button float above the sticky bar, covering the price and the payment line. Four badges on the photo become one. Chat becomes the last row of the trust block, right under the main button. Once the button has scrolled away it is also in the sticky bar, so it is always one tap away. The coupon moves into the announcement bar as one line (6). The bar itself stays, now with 税込, but appears only once the main button has scrolled away, so the same button never shows twice.</p><span class="f">Localisation review 9 · Appendix A2</span><p style="margin-top:6px">To confirm with Mareo: the share of product-page sessions that open chat, and whether chatters convert better.</p></div></li>
<li><span class="k">13</span><div><b>Search in the mobile header</b><p>So service questions have a starting point.</p><span class="f">Localisation review 13 · IA analysis IA-13</span></div></li>
<li><span class="k d">D1</span><div><b>Swipe gallery with a counter</b><span class="pri">Design proposal · low priority</span><p>The thumbnail strip becomes a <span lang="ja">「1 / 5」</span> counter on the image. Swiping is the expected gesture on a phone, so the strip repeats it and takes about 60px of the first screen. Saving that space helps bring the price onto the first screen. Trade-off: no preview of what the other images show.</p><span class="f">Design judgement, not a review finding</span></div></li>
</ol>
<p class="legend"><span class="tbd">Red values</span> are placeholders that need Mareo data: the real arrival estimate, the return shipping cost, the full list of payment methods and the “who it's for” lines for Ren and Mio. All other values are from the current Mareo page, captured 18 November 2026.<br/><br/><b style="color:var(--deep)">D</b> markers are design proposals: judgement calls with a stated reason, lower priority than the review findings.<br/><br/>Anything without a marker is unchanged from the current page: logo, breadcrumb, photos, feature chips (now in Japanese, each ⓘ opening its line from the current page), the payment line, accordion content. In the mock only, header icons are close redraws.</p>
</div>
</div>
</div>

</noscript>
<script>
window.reviewInit=function(){var c=document.querySelector('#device .cta'),b=document.getElementById('bar'),r=document.querySelector('#device .screen');
if(!c||!b||!r)return;function u(){var rt=r.getBoundingClientRect(),ct=c.getBoundingClientRect();b.classList.toggle('hide',ct.bottom>rt.top+56);}
r.addEventListener('scroll',u,{passive:true});u();
document.querySelectorAll('#device .ft').forEach(function(t){t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')!=='true';t.setAttribute('aria-expanded',o);document.getElementById(t.getAttribute('aria-controls')).hidden=!o;});});};
</script>
<script>
(function(){
var IMG={"0": "data:,", "1": "data:,", "2": "data:,"}, TITLES={"en": "Mareo JP — Proposed mobile product page (mock)", "ja": "Mareo JP — モバイル商品ページ改善案（モック）"}, LANGS=["en", "ja"];
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
