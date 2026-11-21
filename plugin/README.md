# AIspy (plugin edition)

**A full UX, UI and IA review from your AI crew.**

AIspy runs a professional UX/UI/IA review of a live website or app, with an optional
market-localisation layer. Give it a product; it captures the pages, extracts the design system,
researches the market and benchmarks, runs three independent review lenses, and delivers a review
report, an IA analysis, a current-vs-proposed mock of the key screen and an index page, all styled
in the reviewed product's own design system.

This is the plugin-directory edition. It holds the same skills, templates and reference examples as
the full kit, in Markdown and images only. It needs a browser tool that can set the viewport, run
JavaScript in the page and take screenshots.

The full kit, with its capture and checking scripts, is on GitHub:
https://github.com/stevensmith-design/aispy. If a checkout of it is in your workspace, this edition
uses its scripts.

## Use

Ask Claude for a review: "Run a UX review of https://example.com". It asks for what it needs in one
batch, with defaults, and stops for your review after the report, after the mock spec, after the
mock and before packaging.

## Examples

`examples/mareo/` is the reference review recreated on a fictional store: the standard every run is
held to. `examples/brolga/` is a full run's output on a fictional running-shoe brand. Each document
is included as its markup (`.html.md`) and as screenshots (`screens/`).

Made by Steven Smith. More at https://stevensmith.dev/aispy. MIT licence; the examples are CC BY 4.0
(see each example's `LICENSE.md`).
