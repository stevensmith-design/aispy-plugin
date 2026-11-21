# base.css

The source of `templates/base.css` (script commands in its comments point to `plugin-mode.md`). Write the fenced block's contents, unchanged, to `07-deliverables/src/base.css`.

```css
/* COMPONENT LAYER — shared by every deliverable. Do not edit per client: change theme.css.
   Built from the baseline review package's component system. Uses only theme variables. */
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{margin:0;background:var(--canvas);color:var(--text);font-family:var(--font-body);
  font-size:16px;line-height:1.8;letter-spacing:var(--tracking)}
:lang(ja),.ja{letter-spacing:var(--tracking-ja);word-break:auto-phrase}
html[lang=ja] body{letter-spacing:var(--tracking-ja)}
html[lang=ja] p,html[lang=ja] li,html[lang=ja] td,html[lang=ja] h1,html[lang=ja] h2,html[lang=ja] h3{word-break:auto-phrase;line-break:strict}
h1,h2,h3,h4{font-family:var(--font-head);word-break:auto-phrase;letter-spacing:.01em}
a{color:var(--deep);text-underline-offset:3px}
img{max-width:100%}
p{max-width:780px}
code{font-family:ui-monospace,Menlo,monospace;font-size:.86em;background:var(--tint);padding:1px 6px;border-radius:4px;letter-spacing:0}
.wrap{max-width:1120px;margin:0 auto;padding:0 32px}
@media(max-width:700px){.wrap{padding:0 20px}}
#app{display:block}

/* ---------- Package navigation ---------- */
.backbar{background:var(--deep);color:#fff;font-size:13px}
.backbar .wrap{display:flex;justify-content:space-between;align-items:center;min-height:40px;gap:16px;padding-right:150px}
.backbar a{color:#fff;text-decoration:none;opacity:.92}
.backbar a:hover{opacity:1;text-decoration:underline}
.backbar span{opacity:.75;letter-spacing:.06em;font-size:12px}
@media(max-width:700px){.backbar span{display:none}}

/* ---------- Cover ---------- */
.cover{background:var(--brand);color:#fff;padding:var(--s8) 0 var(--s7)}
.cover .kicker{font-size:13px;letter-spacing:.12em;opacity:.85}
.cover h1{font-size:40px;line-height:1.35;font-weight:600;margin:var(--s4) 0;max-width:860px}
.cover p{max-width:780px;margin:0;opacity:.92}
.cover dl{display:grid;grid-template-columns:repeat(4,auto);gap:var(--s2) var(--s6);margin:var(--s6) 0 0;font-size:14px;justify-content:start}
.cover dt{opacity:.7;font-size:12px;letter-spacing:.06em}
.cover dd{margin:0}
.cover .counts{display:flex;gap:var(--s6);margin-top:var(--s5)}
.cover .counts b{display:block;font-size:30px;line-height:1.2;font-weight:600}
.cover .counts span{font-size:12px;opacity:.8;letter-spacing:.06em}
.status{display:inline-block;margin-top:var(--s5);font-size:12px;letter-spacing:.08em;border:1px solid rgba(255,255,255,.55);border-radius:var(--pill);padding:3px 12px}
@media(max-width:860px){.cover h1{font-size:30px}.cover dl{grid-template-columns:1fr 1fr}}

/* ---------- Section nav and sections ---------- */
nav.toc{position:sticky;top:0;z-index:5;background:color-mix(in srgb,var(--canvas) 96%,transparent);border-bottom:1px solid var(--border)}
nav.toc .wrap{display:flex;gap:var(--s2) var(--s5);flex-wrap:wrap;padding-top:10px;padding-bottom:10px;font-size:14px}
nav.toc a{color:var(--text-2);text-decoration:none}
nav.toc a:hover{color:var(--text)}
@media(max-width:700px){nav.toc{background:var(--canvas)}nav.toc .wrap{flex-wrap:nowrap;overflow-x:auto;white-space:nowrap;scrollbar-width:none}nav.toc .wrap::-webkit-scrollbar{display:none}}
section{padding:var(--s8) 0 0;scroll-margin-top:56px}
.sec-head{margin-bottom:var(--s5)}
.sec-head .no{font-size:13px;color:var(--text-2);letter-spacing:.1em;margin-bottom:4px}
h2{font-size:30px;line-height:1.4;margin:0;font-weight:600}
.lead{font-size:18px;color:var(--text-2);max-width:860px;margin:var(--s3) 0 0}
h3{font-size:20px;line-height:1.5;margin:var(--s6) 0 var(--s3);font-weight:600}
h4{font-size:13px;letter-spacing:.08em;color:var(--text-2);font-weight:600;margin:var(--s5) 0 var(--s2)}
.small{font-size:13px;color:var(--text-2)}
.howto{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:var(--s4) var(--s5);margin:var(--s5) 0 0;font-size:14px;max-width:none}

/* ---------- Tags and priority ---------- */
.tag{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;line-height:1;padding:6px 12px;border-radius:var(--pill);background:var(--tint);color:var(--deep);border:1px solid var(--border);white-space:nowrap}
.tag small{font-weight:400;color:var(--text-2);font-size:12px}
.prio{background:transparent;border:1.5px dotted currentColor}
.prio.high{color:var(--issue)} .prio.mid{color:var(--warn)} .prio.low{color:var(--text-2)}
.dot{display:inline-block;white-space:nowrap;flex:none;font-size:12px;font-weight:600;border:1.5px dotted;border-radius:var(--pill);padding:1px 8px;margin-left:6px;line-height:1.5}
.dot.high{color:var(--issue)} .dot.mid{color:var(--warn)} .dot.low{color:var(--text-2)}
.pill{display:inline-block;min-width:24px;padding:0 7px;border-radius:6px;color:#fff;font:700 12px/22px var(--font-body);text-align:center;letter-spacing:0}
.pill.r{background:var(--issue)} .pill.g{background:var(--good)} .pill.d{background:var(--deep)}
.ph,.tbd{color:var(--issue);font-weight:600}

/* ---------- Tables ---------- */
.tbl{width:100%;border-collapse:collapse;background:var(--surface);font-size:14px;line-height:1.7}
.tbl th,.tbl td{padding:12px 14px;border-bottom:1px solid var(--border);text-align:left;vertical-align:top}
.tbl th{background:var(--sand);font-weight:600;font-size:13px}
.tbl tr:last-child td{border-bottom:0}
.tbl td.bad{color:var(--issue)} .tbl td.ok{color:var(--good)}
.tbl .grp td{background:var(--tint);font-weight:600}
.tbl.kv th:first-child,.tbl.kv td:first-child{white-space:nowrap;font-weight:600}
.scroll{overflow-x:auto;border:1px solid var(--border);border-radius:var(--r-sm);margin:var(--s4) 0}
.persp td:first-child{font-weight:600}
.persp td:first-child small{display:block;font-weight:400;color:var(--text-2)}
.flist{list-style:none;margin:0;padding:0}
.flist li{display:flex;gap:10px;align-items:baseline;justify-content:space-between;margin:4px 0}
.flist .n{font-weight:700;min-width:22px;color:var(--issue)}
.flist a{flex:1;color:var(--text);text-decoration:none}
.flist a:hover{text-decoration:underline}
.verdict{font-weight:600;white-space:nowrap}
.verdict.holds{color:var(--good)} .verdict.mostly{color:var(--warn)} .verdict.adjusted{color:var(--issue)}
@media(max-width:700px){.tbl{font-size:13px}.tbl th,.tbl td{padding:10px}}

/* ---------- Screens reviewed and counts (top of the report) ---------- */
.screens{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:14px;margin:var(--s5) 0 0}
.screens figure img{width:100%;aspect-ratio:390/600;object-fit:cover;object-position:top;border-radius:var(--r-md)}
.screens figcaption{font-size:13px;color:var(--text);margin-top:6px}
.screens figcaption small{display:block;color:var(--text-2);font-size:12px}
.tally{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));max-width:640px;margin:var(--s5) 0 0;border:1px solid var(--border);border-radius:var(--r-md);background:var(--surface);overflow:hidden}
.tally div{padding:16px 20px;border-right:1px solid var(--border)}
.tally div:last-child{border-right:0}
.tally b{display:block;font-size:34px;line-height:1.1;font-weight:600}
.tally span{font-size:13px;color:var(--text-2)}
.tally .high b{color:var(--issue)} .tally .mid b{color:var(--warn)}
@media(max-width:560px){.tally{grid-template-columns:1fr 1fr}.tally div:nth-child(2){border-right:0}.tally div:nth-child(-n+2){border-bottom:1px solid var(--border)}}

/* ---------- Facts (market data) ---------- */
.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:var(--r-sm);overflow:hidden;margin:var(--s5) 0}
.facts div{background:var(--surface);padding:var(--s5)}
.facts b{display:block;font-size:30px;line-height:1.2;font-weight:600;color:var(--deep)}
.facts span{display:block;font-size:14px;margin-top:6px}
.facts em{display:block;font-style:normal;font-size:12px;color:var(--text-2);margin-top:6px}
.facts .so{display:block;font-size:13px;margin-top:8px;color:var(--text)}
@media(max-width:860px){.facts{grid-template-columns:1fr}}

/* ---------- Findings ---------- */
.finding{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);margin:var(--s6) 0;overflow:hidden;scroll-margin-top:56px}
.f-head{display:grid;grid-template-columns:64px 1fr;gap:var(--s4);padding:var(--s5) var(--s5) var(--s4)}
.f-no{width:48px;height:48px;border-radius:var(--r-sm);background:var(--issue);color:#fff;font-size:22px;font-weight:700;display:flex;align-items:center;justify-content:center;letter-spacing:0}
.f-head h3{margin:0 0 var(--s3);font-size:22px;line-height:1.5}
.f-tags{display:flex;flex-wrap:wrap;gap:8px}
.f-body{padding:0 var(--s5) var(--s5)}
.f-body>p{margin:0 0 var(--s4)}
@media(max-width:860px){.f-head{grid-template-columns:1fr}}
.where{font-size:13px;color:var(--text-2);margin:-4px 0 var(--s4)}
.why b:first-child{color:var(--text)}
.shots{display:grid;gap:var(--s4);grid-template-columns:repeat(auto-fit,minmax(240px,1fr));align-items:start;margin:var(--s4) 0}
.shots.one{grid-template-columns:1fr}
.shots.wide{grid-template-columns:1.6fr 1fr}
@media(max-width:860px){.shots.wide{grid-template-columns:1fr}}
figure{margin:0}
figure img{display:block;width:auto;max-width:100%;height:auto;border:1px solid var(--border);border-radius:var(--r-sm);background:#fff;cursor:zoom-in}
/* Evidence is a crop of the element (annotate.mjs), shown at its own CSS size (assemble.mjs
   sets the width), two or three to a row, as in the reference review. */
.shots figure img{height:auto}
@media(max-width:700px){.shots,.shots.wide{grid-template-columns:1fr}.shots figure img{width:100%!important}}
figcaption{font-size:13px;color:var(--text-2);margin-top:8px;line-height:1.6}
.ph-img{display:grid;place-items:center;min-height:180px;border:1px dashed var(--border-strong);border-radius:var(--r-sm);background:var(--tint);color:var(--text-2);font-size:12px;text-align:center;padding:12px}
.ref{background:var(--good-bg);border-radius:var(--r-sm);padding:var(--s5);margin:var(--s5) 0 0}
.ref h4{margin-top:0;color:var(--good)}
.ref .shots{grid-template-columns:repeat(auto-fit,minmax(200px,260px))}
.ref p,.ref li{font-size:14px}
.ref ul{margin:var(--s2) 0 0;padding-left:20px}
.ref .not{color:var(--text-2)}
.prop{border-top:1px solid var(--border);margin-top:var(--s5);padding-top:var(--s4)}
.prop h4{margin-top:0;color:var(--deep)}
.prop ul{margin:0;padding-left:20px}
.prop li{margin:6px 0}
.prop .because,.prop .measure{font-size:14px;margin:var(--s3) 0 0}
.ask{font-size:14px;color:var(--text-2);margin:var(--s4) 0 0;padding-left:var(--s4);border-left:2px solid var(--border-strong)}
.ask b{color:var(--text)}
ul.covers{margin:0 0 var(--s4);padding-left:20px;font-size:15px}
ul.covers li{margin:4px 0}
.tbl.more td:first-child{font-weight:700;color:var(--issue)}
.tbl.more img.thumb{display:block;max-width:240px;margin-top:8px;border:1px solid var(--border);border-radius:var(--r-sm)}
.mk{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;border-radius:5px;background:var(--issue);color:#fff;font-size:12px;font-weight:700;vertical-align:1px;letter-spacing:0;font-family:var(--font-body)}
.mk.g{background:var(--good)} .mk.d{background:var(--deep)}

/* ---------- Page length diagram (report) ---------- */
.len{margin:var(--s4) 0}
.len .row{display:grid;grid-template-columns:120px 1fr;gap:var(--s3);align-items:center;margin:10px 0;font-size:13px}
.len .bar{position:relative;height:30px;background:var(--tint);border-radius:6px}
.len .seg{position:absolute;top:0;bottom:0;border-radius:6px;font-size:12px;color:#fff;display:flex;align-items:center;padding:0 8px;white-space:nowrap;overflow:hidden}
.len .tick{position:absolute;top:-4px;bottom:-4px;width:2px;background:var(--text)}
.len .lab{position:absolute;top:34px;font-size:12px;color:var(--text-2);white-space:nowrap;transform:translateX(-50%)}
.len .scale{display:flex;justify-content:space-between;font-size:12px;color:var(--text-2);margin-left:132px}

/* ---------- By-page layout: a sticky column of annotated screens beside the findings ---------- */
.area{display:grid;grid-template-columns:300px minmax(0,1fr);gap:40px;margin-top:var(--s5)}
.area .figs{position:sticky;top:64px;align-self:start;display:flex;flex-direction:column;gap:20px;max-height:calc(100vh - 80px);overflow:auto;padding-right:6px}
.area .figs img{width:100%;max-height:none;border-radius:var(--r-md)}
.area .finding:first-child{margin-top:0}
@media(max-width:1000px){.area{grid-template-columns:240px minmax(0,1fr);gap:24px}}
@media(max-width:760px){.area{grid-template-columns:1fr}.area .figs{position:static;max-height:none;flex-direction:row;overflow-x:auto;scroll-snap-type:x mandatory}.area .figs figure{flex:0 0 72%;scroll-snap-align:start}}

.page-sec{margin-top:var(--s7);scroll-margin-top:56px}
.page-sec h3.page-h{font-size:24px;margin:0 0 4px}

/* ---------- Panels, lists, order ---------- */
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:var(--s4)}
.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s4)}
@media(max-width:860px){.grid2,.grid3{grid-template-columns:1fr}}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:var(--s5)}
.panel h4{margin-top:0}
.panel ul,.panel ol{margin:0;padding-left:20px;font-size:14px}
.panel li{margin:6px 0}
.panel.lead-panel{background:var(--deep);color:#fff;border-color:var(--deep)}
.panel.lead-panel h4{color:rgba(255,255,255,.78)}
.panel.good{border-color:var(--good)} .panel.good h4{color:var(--good)}
ol.order{list-style:none;counter-reset:o;padding:0;margin:var(--s3) 0;max-width:820px}
ol.order li{counter-increment:o;display:grid;grid-template-columns:28px 200px 1fr;gap:var(--s3);padding:10px 0;border-bottom:1px solid var(--border);font-size:14px}
ol.order li:before{content:counter(o);font-weight:700;color:var(--primary)}
@media(max-width:700px){ol.order li{grid-template-columns:28px 1fr}ol.order li span{grid-column:2}}
.sources{font-size:14px;padding-left:24px}
.sources li{margin:6px 0}
footer.doc{margin-top:var(--s8);border-top:1px solid var(--border);padding:var(--s5) 0 var(--s8);font-size:13px;color:var(--text-2)}

/* ---------- IA: trees ---------- */
.trees{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s4);margin:var(--s4) 0}
@media(max-width:960px){.trees{grid-template-columns:1fr}}
.tree{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-sm);padding:var(--s4) var(--s5);font-size:13px;line-height:1.7}
.tree h4{margin:0 0 var(--s2)}
.tree ul{list-style:none;margin:0;padding:0}
.tree ul ul{padding-left:16px;border-left:1px solid var(--border);margin:2px 0 6px 4px}
.tree li{margin:1px 0}
.tree .g{font-weight:600}
.tree .d{color:var(--text-2);font-size:12px}
.tree .bad{color:var(--issue)} .tree .ok{color:var(--good)}
.tree .new{color:var(--good);font-weight:600}

/* ---------- IA: page layout (roles, bars, section lists) ---------- */
.legend-row{display:flex;flex-wrap:wrap;gap:8px 18px;font-size:12px;color:var(--text-2);margin:var(--s3) 0}
.legend-row span{display:inline-flex;align-items:center;gap:6px}
.legend-row i{width:14px;height:14px;border-radius:3px;display:inline-block}
.r-decide{background:var(--role-decide)} .r-reassure{background:var(--role-reassure);color:var(--text)!important} .r-persuade{background:var(--role-persuade);color:var(--text)!important}
.r-sell{background:var(--role-sell);color:var(--text)!important} .r-navigate{background:var(--role-navigate);color:var(--text)!important}
.pmap{margin:var(--s4) 0 var(--s5)}
.pmap .r{display:grid;grid-template-columns:160px 1fr;gap:var(--s3);align-items:center;margin:8px 0}
.pmap .r>b{font-size:13px;font-weight:600;line-height:1.3}
.pmap .r>b small{display:block;font-weight:400;color:var(--text-2);font-size:12px}
.pmap .r.prop>b{color:var(--good)}
.pmap .bar{position:relative;height:38px;background:var(--canvas);border:1px solid var(--border);border-radius:6px;overflow:hidden}
.pmap .s{position:absolute;top:0;bottom:0;border-right:1px solid rgba(255,255,255,.7);font-size:12px;line-height:1.2;padding:3px 4px;overflow:hidden;color:#fff;letter-spacing:0}
.pmap .axis{display:grid;grid-template-columns:160px 1fr;gap:var(--s3);font-size:12px;color:var(--text-2)}
.pmap .axis div{display:flex;justify-content:space-between}
.shares{width:100%;border-collapse:collapse;font-size:13px;margin:var(--s3) 0}
.shares th,.shares td{padding:6px 10px;border-bottom:1px solid var(--border);text-align:right}
.shares th:first-child,.shares td:first-child{text-align:left}
.shares td.bad{color:var(--issue);font-weight:600} .shares td.ok{color:var(--good);font-weight:600}
.lrow{display:grid;grid-template-columns:minmax(0,1.4fr) 110px minmax(0,2fr) 48px;gap:10px;align-items:center;padding:6px 0;border-bottom:1px solid var(--border);font-size:13px}
.lrow.lhead{font-size:12px;color:var(--text-2);letter-spacing:.06em;font-weight:600}
.lrow .lrole{display:inline-flex;align-items:center;gap:6px;font-size:12px}
.lrow .lrole i{width:10px;height:10px;border-radius:3px}
.lrow .track{position:relative;height:12px;background:var(--canvas);border-radius:3px}
.lrow .track b{position:absolute;top:0;bottom:0;border-radius:3px}
.lrow .lscr{text-align:right;color:var(--text-2);font-variant-numeric:tabular-nums}
@media(max-width:700px){.lrow{grid-template-columns:1fr 90px 40px}.lrow .track{display:none}}
.layoutcard{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:var(--s5);margin:var(--s4) 0}
.layoutcard h3{margin-top:0}
.reads{font-size:14px;margin:var(--s3) 0 0;max-width:none}
.reads b{color:var(--deep)}

/* ---------- IA: heading hierarchy ---------- */
.hrow{display:grid;grid-template-columns:64px minmax(0,2fr) 76px minmax(0,1.4fr);gap:10px;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px;align-items:baseline}
.hrow .lv{font-weight:700;color:var(--deep);font-variant-numeric:tabular-nums}
.hrow .hid{color:var(--issue);font-weight:600;font-size:12px}
.hrow .vis{color:var(--good);font-weight:600;font-size:12px}
@media(max-width:700px){.hrow{grid-template-columns:56px 1fr 64px}.hrow .small{grid-column:2/-1}}

/* ---------- IA: task paths ---------- */
.task{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:var(--s5);margin:var(--s4) 0}
.task h3{margin:0 0 var(--s2);font-size:18px}
.task .lbl{font-size:12px;font-weight:600;letter-spacing:.06em;color:var(--text-2);margin-top:var(--s3)}
.task .note{font-size:14px;margin:var(--s3) 0 0;max-width:none}
.task-ev{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;margin-top:10px}
.task-ev figure{flex:0 1 320px}
.task-ev .note{margin:0;flex:1 1 280px}
.flow{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:6px 0 2px}
.flow .st{background:var(--surface);border:1px solid var(--border-strong);border-radius:var(--r-sm);padding:5px 10px;font-size:12.5px;line-height:1.4}
.flow .st.x{border-color:var(--issue);color:var(--issue);background:var(--issue-bg)}
.flow .st.g{border-color:var(--good);color:var(--good);background:var(--good-bg)}
.flow .ar{color:var(--text-2);font-size:13px}
.metric{display:inline-block;font-size:12px;font-weight:600;border-radius:var(--pill);padding:3px 10px;background:var(--tint);color:var(--deep);margin-left:6px}
.metric.bad{background:var(--issue-bg);color:var(--issue)} .metric.ok{background:var(--good-bg);color:var(--good)}
.sev{font-size:12px;font-weight:600;white-space:nowrap}
.sev.maj,.sev.high{color:var(--issue)} .sev.min,.sev.mid{color:var(--warn)} .sev.low{color:var(--text-2)}
.cand td:first-child{font-weight:700;color:var(--issue);white-space:nowrap}
.prop-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s4);margin-top:var(--s4)}
.prop-grid>div{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:18px}
.prop-grid h3{font-size:16px;margin:0 0 8px}
.prop-grid ol{margin:0;padding-left:20px;font-size:14px}
.prop-grid li .why{display:block;font-size:12px;color:var(--text-2)}
.prop-grid li.moved{color:var(--good);font-weight:600}
@media(max-width:860px){.prop-grid{grid-template-columns:1fr}}

/* ---------- Index ---------- */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:960px){.cards{grid-template-columns:1fr}}
.card{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);overflow:hidden;text-decoration:none;color:inherit;transition:border-color .15s,transform .15s}
.card:hover{border-color:var(--primary);transform:translateY(-2px)}
.card:focus-visible{outline:3px solid var(--deep);outline-offset:2px}
.card img,.card .ph-img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top;border:0;border-bottom:1px solid var(--border);border-radius:0;min-height:0}
.card .body{padding:20px 22px 22px;display:flex;flex-direction:column;flex:1}
.card .step{font-size:12px;letter-spacing:.1em;color:var(--text-2);font-weight:600}
.card h3{margin:6px 0 8px;font-size:20px}
.card p{font-size:14px;margin:0 0 12px}
.card ul{margin:0 0 16px;padding-left:18px;font-size:14px;color:var(--text-2)}
.card .meta{margin-top:auto;display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--text-2);border-top:1px solid var(--border);padding-top:12px}
.card .open{font-weight:600;color:var(--deep)}
.keys{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
@media(max-width:860px){.keys{grid-template-columns:1fr}}
.key{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:18px 20px;font-size:15px}
.key b{display:block;font-size:16px;margin-bottom:4px;font-weight:600}
.key .src{display:block;font-size:12px;color:var(--text-2);margin-top:8px}
.process{list-style:none;margin:8px 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;counter-reset:s}
@media(max-width:1000px){.process{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.process{grid-template-columns:1fr}}
.process li{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:14px 14px 16px;font-size:13px;line-height:1.6;counter-increment:s;display:flex;flex-direction:column}
.process li::before{content:counter(s,decimal-leading-zero);font-size:12px;color:var(--text-2);letter-spacing:.08em}
.process b{display:block;font-size:14px;margin:2px 0 6px;font-weight:600;line-height:1.45}
.process .who{margin-top:auto;padding-top:10px;font-size:12px;font-weight:600;letter-spacing:.04em}
.who.h{color:var(--deep)} .who.t{color:var(--text-2)}
.who.h::before{content:"● "} .who.t::before{content:"○ "}
.legend{font-size:13px;color:var(--text-2);margin:12px 0 0}
.commit{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px}
@media(max-width:960px){.commit{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.commit{grid-template-columns:1fr}}
.commit div{border-top:2px solid var(--deep);padding-top:12px;font-size:14px}
.person{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start;margin-top:28px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:22px}
.person .av{width:52px;height:52px;border-radius:50%;background:var(--tint);color:var(--deep);display:grid;place-items:center;font-weight:600;font-size:18px;border:1px solid var(--border)}
.person p{font-size:15px;margin:0}
.person .nm{font-weight:600;font-size:16px}
.commit b{display:block;font-weight:600;margin-bottom:4px}

/* ---------- Mock shell (the proposed page itself is styled per run, scoped to .proposed) ---------- */
.shell{max-width:1320px;margin:0 auto;padding:40px 32px 64px}
.shell>header h1{font-size:26px;line-height:1.4;font-weight:600;margin:6px 0 0}
.shell>header p{color:var(--text-2);max-width:820px;margin-top:8px}
.shell>header .meta{font-size:12px;color:var(--text-2);letter-spacing:.06em}
.stage{display:grid;grid-template-columns:406px 406px minmax(280px,1fr);gap:32px;margin-top:32px;align-items:start}
@media(max-width:1180px){.stage{grid-template-columns:1fr;justify-items:center}.stage .notes{max-width:620px}}
.stage>*{max-width:100%;min-width:0}
@media(max-width:700px){.shell{padding:24px 12px 48px}.device{width:100%;height:760px;border-width:6px;border-radius:32px}}
.col-label{font-size:12px;letter-spacing:.1em;color:var(--text-2);margin-bottom:10px;font-weight:600}
.cap{font-size:12px;color:var(--text-2);margin-top:10px;max-width:406px;line-height:1.6}
.device{width:406px;max-width:100%;height:860px;border:8px solid #1f1f1f;border-radius:44px;overflow:hidden;background:var(--canvas);box-shadow:0 24px 48px rgba(0,0,0,.16);position:relative}
.device .screen{height:100%;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;position:relative}
.device .screen::-webkit-scrollbar{display:none}
.current .screen img{width:100%;display:block;border:0;border-radius:0;cursor:default}
.fixed{position:absolute;inset:0;pointer-events:none;z-index:8}
.fixed img{position:absolute;display:block;border:0;border-radius:0}
.fixed .lbl{position:absolute;left:12px;bottom:88px;font:600 10px/1 var(--font-body);letter-spacing:.06em;color:#fff;background:rgba(0,0,0,.7);padding:4px 6px;border-radius:4px}
.device .mk{position:absolute;z-index:7;box-shadow:0 0 0 2px #fff}
.rel{position:relative}
.markers-off .device .mk{display:none}
.notes ol{list-style:none;margin:0;padding:0}
.notes li{display:grid;grid-template-columns:34px 1fr;gap:10px;padding:12px 0;border-top:1px solid var(--border)}
.notes li:first-child{border-top:0}
.notes .k{min-width:24px;height:24px;padding:0 4px;border-radius:6px;background:var(--issue);color:#fff;font:700 12px/24px var(--font-body);text-align:center;letter-spacing:0;justify-self:start}
.notes .k.d{background:var(--deep)}
.notes b{font-size:14px;font-weight:600;display:block;line-height:1.5}
.notes p{font-size:13px;color:var(--text-2);line-height:1.65;margin:2px 0 0}
.notes .trade{font-size:12px}
.notes p.now b,.notes p.then b{display:inline;font-size:13px;color:var(--text)}
.notes .f{display:inline-block;font-size:12px;font-weight:600;color:var(--deep);background:var(--tint);border-radius:var(--pill);padding:0 8px;margin-top:4px;letter-spacing:.04em}
.notes .pri{display:inline-block;font-size:12px;font-weight:600;color:var(--text-2);border:1px solid var(--border-strong);border-radius:var(--pill);padding:0 8px;margin:4px 0 0 6px}
.toggle{font:inherit;font-size:12px;border:1px solid var(--border-strong);border-radius:var(--pill);padding:4px 12px;background:var(--surface);margin-bottom:14px;cursor:pointer;color:var(--text)}
.notes .legend{font-size:12px;margin-top:18px;padding-top:12px;border-top:1px solid var(--border);line-height:1.7}
.notes .legend b{display:inline}

/* ---------- Language switch and lightbox ---------- */
.lang-switch{position:fixed;top:6px;right:12px;z-index:1000;display:flex;background:rgba(255,255,255,.96);border:1px solid var(--border-strong);border-radius:var(--pill);padding:3px;box-shadow:0 2px 8px rgba(0,0,0,.12);font-family:"Helvetica Neue",Arial,"Hiragino Sans","Noto Sans JP",sans-serif}
.lang-switch[hidden]{display:none}
.lang-switch button{font:600 12px/1 inherit;font-family:inherit;letter-spacing:.04em;border:0;background:none;color:var(--deep);padding:6px 12px;border-radius:var(--pill);cursor:pointer;min-height:28px}
.lang-switch button[aria-pressed=true]{background:var(--deep);color:#fff}
.lang-switch button:focus-visible{outline:2px solid var(--deep);outline-offset:2px}
#lb{position:fixed;inset:0;background:rgba(0,0,0,.86);display:none;align-items:center;justify-content:center;z-index:50;padding:24px;cursor:zoom-out}
#lb img{max-width:100%;max-height:100%;border-radius:var(--r-sm);background:#fff}
@media print{nav.toc,.lang-switch,.backbar{display:none}.finding,.task{break-inside:avoid-page}}
```
