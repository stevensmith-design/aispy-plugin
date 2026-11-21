# Plugin edition: how this differs from the full kit

This is the plugin-directory edition of AIspy. It carries the same skills, references, templates and
reference examples as the full kit, but only as Markdown, JSON and images: the directory doesn't
accept scripts, HTML or CSS files from unverified publishers. Read this file once at intake; where
it and `SKILL.md` differ, this file wins.

## Two modes

- **Full mode.** If the folder the person connected holds a checkout of the full AIspy kit (a
  `scripts/` folder beside `skills/`, with `scripts/checks/check-deliverable.mjs`), use its scripts
  exactly as `SKILL.md` says. Record "full mode, kit at <path>, version <x>" in the run log.
- **Plugin mode** (otherwise). Follow `SKILL.md` with the substitutions below. Record "plugin mode"
  in the run log and in the report's method section. Never print install commands for the full
  kit; if the person asks, point them to the kit's README on GitHub
  (https://github.com/stevensmith-design/aispy).

## Where things are

| `SKILL.md` says | In this edition |
|---|---|
| `skills/design-kit/<skill>/` | `skills/<skill>/` (same six skills, same names) |
| `templates/<file>.html`, `.css`, `.js` | `templates/<file>.<ext>.md`: the file's exact source in one fenced block. Write the block's contents, unchanged, to `07-deliverables/src/<file>.<ext>` |
| `examples/mareo/<doc>.html` | `examples/mareo/<doc>.html.md` (the document's markup and text, images removed) plus `examples/mareo/screens/<doc>--*.jpg` (how it renders, one image per section) |
| `examples/brolga/<doc>.html` | the same pattern in `examples/brolga/` |
| A block saying "Full kit only" | A script step; use the substitution in the table below |

Read both halves of an example: the `.html.md` for what each section contains and how it is
argued and marked up, the screens for how it looks. The screens are the visual standard: compare
your rendered documents with them before each stop.

## Script steps in plugin mode

| Full kit | Plugin mode |
|---|---|
| Setup check 3 (scripted browser) | A browser tool that can set the viewport, run JavaScript in the page and save screenshots (for example Claude in Chrome or a Playwright MCP server). If none is available, stop and say so, as `SKILL.md` requires for any failed check |
| `capture.mjs` | With the browser tool, at 390 px and 1440 px: a full-page capture of each page in scope, then each state the review needs. Save them in `02-capture/<width>/` with the same names the full kit uses |
| `extract-in-page.js`, `sweep-in-page.js` | Run JavaScript in the page to record, per page: each top-level section's name, top and bottom in CSS px; computed font families, sizes, weights and line-heights; colours in use; radii; hidden text; every link and button with its destination. Save as `02-capture/<page>-structure.json` |
| `annotate.mjs` | Crop the evidence in the browser: draw a 3 px outline in the theme's `--issue` colour round the element, the finding number in a small badge on its top-left corner, nothing else, then screenshot that region (2× device pixel ratio where the tool allows it). Same crop rule: the element plus enough context to place it, 320–700 px wide, no taller than about 400 px. Name it `<finding>-<slug>-a@2x.png` (or `-a.png` at 1×, noted in the run log) |
| `theme-from-tokens.mjs` | Map the extracted tokens into `theme.css` by hand using the table in `templates/README.md`. Put the source token in a comment after every value (`/* color.navy-900 */`, or `/* default */`, or `/* derived: darkened for white text */`). Then check the contrast pairs listed in `deliverable-checklist.md` |
| `layout-bars.mjs` | Copy one `.layoutcard` from `examples/mareo/mareo-jp-ia-analysis.html.md` and fill it from the measured section positions: each bar's width is its share of the page's length on one shared scale; the shares table sums to 100%. Write the numbers you used in a comment above the "what it shows" line |
| `assemble.mjs` | Deliver each document as a folder: the HTML with `theme.css`, `base.css` and `lang.js` inlined in `<style>` and `<script>` blocks, and images in `img/` beside it, referenced by relative path. A single self-contained file (images as data URIs) is optional; only make it if the session can do so reliably, and check the result opens |
| `check-deliverable.mjs`, `check-mock.mjs` | `deliverable-checklist.md`, applied by a separate agent that didn't write the document. It reports each item as pass or fail with the evidence; fix and re-run until every required item passes |
| `ui-design-review` rendered checks (`measure-padding`, `measure-contrast`, detector) | The same measurements done in the browser with JavaScript: rendered padding on all four sides of containers with a bottom-anchored child, and composited contrast of text over coloured or image backgrounds. A check you couldn't run is UNVERIFIED, never a pass |
| `validate-tokens.py` | Check the declared contrast pairs and the type and spacing scale by reading `tokens.json`; record the pairs and their ratios |

## What plugin mode costs

The full kit's checks are deterministic; here the same rules are applied by an agent. Expect
the occasional missed structural slip (a tally that doesn't match, a marker number off by one).
That is why the checklist runs in a separate agent and why every item asks for evidence. Say in
the report's method section that the structural checks were done by review, not by script.

## Run rules

From the full kit's agent instructions, which a plugin doesn't load:

- Start each lens and each checker as a new agent with no conversation history (in Codex,
  `fork_turns: "none"`). Give checkers only the render and the report, not your notes, the spec's
  reasoning or other checks. Don't reuse an agent for a second role.
- After writing the mock spec, stop and show it to the person before building the mock. A general
  "go ahead" for the mock doesn't approve the spec.
- Read the reference examples `SKILL.md` names in full, not only their headings.
