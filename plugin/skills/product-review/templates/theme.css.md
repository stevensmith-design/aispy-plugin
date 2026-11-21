# theme.css

The source of `templates/theme.css` (script commands in its comments point to `plugin-mode.md`). Write the fenced block's contents, unchanged, to `07-deliverables/src/theme.css`.

```css
/* THEME LAYER — the only file that changes per client.
   Every deliverable (index, report, IA analysis, mock shell) reads these variables and nothing
   else, so mapping the client's tokens here restyles the whole package.

   How to fill it (see templates/README.md, "Applying the client's brand"):
   - Take each value from the client's DESIGN.md / tokens.json, extracted in step 3 of the skill.
     Write the token name in the comment at the end of the line, so the mapping can be checked.
   - Where the client has no matching token, keep the default below and say so in the comment.
   - --issue and --good keep their meaning (problem / works) even if the brand has no red or
     green: pick the closest brand-compatible shade that passes 4.5:1 on --surface.
   - check-deliverable.mjs verifies the contrast pairs listed at the bottom.

   The values below are the made-up sample brand used in the templates (Tidewell). */
:root{
  /* Surfaces */
  --canvas:#F5F4F0;        /* page background            · tokens: color.background */
  --surface:#FFFFFF;       /* cards, tables, findings    · tokens: color.surface */
  --sand:#E5E2D9;          /* table headers              · tokens: color.neutral.200 */
  --tint:#ECEFF1;          /* tags, chips, soft fills    · tokens: color.neutral.100 */
  --border:#DDDAD2;        /* hairlines                  · tokens: color.border */
  --border-strong:#C6C2B6; /* inputs, chips              · tokens: color.border.strong */

  /* Text */
  --text:#1D2024;          /* body text                  · tokens: color.text */
  --text-2:#5A5F66;        /* secondary text, captions   · tokens: color.text.muted */

  /* Brand */
  --brand:#2F4A5E;         /* cover background (white text on it) · tokens: color.brand */
  --deep:#243A4B;          /* links, back bar, active    · tokens: color.brand.dark */
  --primary:#46667D;       /* accents, counters          · tokens: color.primary */

  /* Meaning — keep the meaning, adapt the shade */
  --issue:#B9352C;  --issue-bg:#FBEDEB;   /* problems, finding numbers, markers */
  --warn:#8A5A00;                          /* medium priority */
  --good:#2C6B47;   --good-bg:#E9F2EC;    /* works, local examples, proposed additions */

  /* Page-layout roles (IA analysis). Five jobs a section can do for the visitor. */
  --role-decide:#243A4B;   /* choose, compare, price, buy */
  --role-reassure:#8BB39C; /* delivery, returns, reviews, support, guarantees */
  --role-persuade:#CBA55C; /* brand and feature story, lifestyle */
  --role-sell:#D9805F;     /* promotions, cross-sell, banners */
  --role-navigate:#D3D0C6; /* categories, menus, footer, links elsewhere */

  /* Type */
  --font-body:"Inter","Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Yu Gothic UI",Meiryo,sans-serif; /* tokens: font.family.body */
  --font-head:var(--font-body);  /* tokens: font.family.heading */
  --tracking:.02em;              /* Latin text */
  --tracking-ja:.04em;           /* Japanese text */

  /* Shape and space */
  --r-sm:8px; --r-md:12px; --r-lg:16px; --pill:100px;   /* tokens: radius.* */
  --s2:8px; --s3:12px; --s4:16px; --s5:24px; --s6:32px; --s7:48px; --s8:64px;
}
/* Contrast pairs checked: text/canvas, text-2/canvas, text-2/surface, white/brand, white/deep,
   white/issue, deep/surface, issue/surface, good/good-bg, white/role-decide. */
```
