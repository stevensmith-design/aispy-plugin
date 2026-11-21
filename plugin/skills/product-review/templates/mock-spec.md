# Mock spec: <page>, <device>

Written before the mock is built, from the evidence (captures, sweep note, benchmark
screenshots), and approved by the person. One row per change; anything not in this table stays
as the live page. The mock checks compare the built mock against it.

| Marker | Finding | Local reference pattern (where one exists; the minimum to match) | Exact content (live values, real copy) | Where on the screen | Component (design system) |
|---|---|---|---|---|---|
| 1 | #2 Mid-word line breaks in the product name | Brand X: phrase breaks in its product names (bench/x-pdp.png) | 「スウェル3 ワイド（4E相当）」 kept on one line at 390 px | Product name, screen 1 | Heading/product-name, `word-break: auto-phrase` |
| 4 | #4 Width not in the Japanese convention | Brand Y: 標準–幅広 scale with E widths (bench/y-width.png) | 標準（2E相当）, ワイド（4E相当） | Under the name, before sizes | Scale (new, from tokens: tint, deep) |
| D1 | Design judgement: swipe gallery with counter | Brand Z gallery (bench/z-gallery.png) | 「1 / 8」 | Gallery | Gallery |

**Not changed, on purpose:** <what stays and why, e.g. the brand's trial wording in the button>.
**Placeholders:** <only money, legal terms or commitments the client must confirm>.
