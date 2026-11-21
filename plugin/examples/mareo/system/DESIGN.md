# Mareo — design system
<!-- DERIVED by brand-to-system from brand.json. Layer 4 is measured, not asserted. -->
## Layer 1 — Intent
**Aesthetic commitment:** Mareo furnishes small Japanese homes with plain, well-made sofas: navy actions on the warm cream of its own product photography, one terracotta accent taken from the fabric range, Japanese text set with room to breathe, and nothing on the page that does not help someone choose.
**Register:** brand_ui — design IS the product.
**Platform / audience:** mobile web storefront, Japan / Adults in Japan furnishing a one- or two-room home, choosing a sofa on a phone

## Layer 2 — System principles
**Colour strategy.** One anchor hue (262°, chroma 0.07). Every neutral is derived from a single brand-tinted ramp at hue 85° and chroma 0.014 — inside the 2–8% band, so the greys carry the brand without becoming colour.
**Permitted hues.** anchor/action (the primary and its text role); brand-derived neutrals; semantic state (error, success, warning). No support accent is declared, so none is permitted.
**Gradient policy.** none.
**Separation model.** Value step between canvas and card — not shadow, not glow. Measured in Layer 4.

## Layer 3 — Tokens
Mirrors `tokens.json` 1:1.

```json
{
  "color": {
    "primary": "#6177A1",
    "onPrimary": "#FFFFFF",
    "accentText": "#5C729C",
    "canvas": "#FCF7EE",
    "surface": "#FFFDFA",
    "border": "#E5E0D7",
    "textPrimary": "#272115",
    "textMuted": "#777165",
    "error": "#BE2323",
    "success": "#1C8742",
    "warning": "#DA950B"
  },
  "type": {
    "caption": "12px",
    "body": "15px",
    "h3": "19px",
    "h2": "23px",
    "h1": "29px",
    "display": "46px"
  },
  "radius": {
    "sm": "6px",
    "md": "9px",
    "lg": "12px",
    "pill": "999px"
  },
  "elevation": {
    "1": "0 1px 2px rgba(17,24,22,0.06)",
    "2": "0 4px 12px rgba(17,24,22,0.08)",
    "3": "0 12px 32px rgba(17,24,22,0.12)"
  }
}
```

## Layer 4 — Relationships & rationale
Every line below was computed by `derive-system.py` at generation time and re-checkable by `validate-tokens.py --strict`.

- **Background/card value step:** card #FFFDFA vs canvas #FCF7EE = 1.051 (band 1.05-1.12). Checked.
- **Body-on-canvas:** ink #272115 on canvas #FCF7EE = 14.97:1 (AAA). Checked.
- **Muted-on-canvas:** muted #777165 on canvas #FCF7EE = 4.54:1 (AA). Checked.
- **Body-on-card:** ink #272115 on card #FFFDFA = 15.73:1. Checked.
- **CTA-label-on-CTA:** label #FFFFFF on primary #6177A1 = 4.50:1 (AA normal). Checked.
- **Accent-as-small-text:** accent-text #5C729C on canvas #FCF7EE = 4.53:1 (AA). Checked.
- **Semantic separation:** state hues rotated to at least 40 deg from the anchor so they are tellable apart from the action colour. Checked.
- **Type scale:** ratio 1.25 from 15px base -> caption 12px, body 15px, h3 19px, h2 23px, h1 29px, display 46px. Checked.
- **Display tier:** register "brand_ui" on mobile web storefront, Japan ships a hero, so the scale carries a display step two rungs above h1 (46px). A product-only register gets none: an unused tier is a size someone will reach for without a reason.. Checked.

**Why the primary is what it is.** It was not chosen and then tested. Its lightness was *solved* for AA against its own label before any other token committed to it, which is the one ordering mode-create insists on and the check real systems most often fail.

## Added after derivation (sourced from Mareo's product photography)

| Token | Value | Source and role |
|---|---|---|
| `color.deep` | #26304F | Navy upholstery (photo sample #3F4556, darkened). Main button, links, wordmark. White on it 13:1. |
| `color.tint` | #EDEFF4 | Navy at low chroma. Selected cards, soft fills. |
| `color.accent` | #A65F43 | Terracotta upholstery (photo sample #B47C62, darkened to pass 4.5:1 on canvas). The single accent: small highlights, and medium-priority labels in the review documents. Never a button. |

**Review-document tokens.** Two colours have a role only in the review documents, never in a shipped storefront:

| Token | Value | Role |
|---|---|---|
| `color.marker` | #C0362D | Numbered finding markers, issue labels and placeholders. 5.2:1 on canvas. Distinct from `color.error`, which belongs to the store's own form errors. |
| `color.proposal` | #2E6E48 | Design-proposal markers (D1) and "done right" labels. 5.7:1 on canvas. |

Every other colour in the documents maps to a token above. Muted text (`textMuted`) is used only on canvas and surface: on `tint` it measures 4.21:1, so text on tinted fills uses `textPrimary`.

Neutrals follow the cream backdrop of the product photography (sample #E2DDD1), so the page and the photos share one ground. Photography: `site/images/` (grey, navy, terracotta, lifestyle, fabric detail), the same files on every page.
