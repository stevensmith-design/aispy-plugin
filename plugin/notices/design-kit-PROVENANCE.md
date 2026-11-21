# Design kit: provenance

The six skills in this folder are a copy of skills from the **Agentic Design Kit**, bundled so the
pack runs from a single install. `product-review` calls them by name.

| | |
|---|---|
| Source | Agentic Design Kit, `v2/skills/` |
| Version | 2.0.2 |
| Commit | `5e006d8` (6 November 2026) |
| Licence | MIT, see `LICENSE` and `NOTICE` in this folder |
| Copied | 17 November 2026, byte-for-byte via `git archive` at that commit |

## What was copied

| Skill | Used by the pack for |
|---|---|
| `ui-design-system` | Extracting the product's design system (Extract mode) |
| `ui-design-review` | Lens 1: UI craft, interaction, visual consistency, accessibility; checking the mock |
| `ia-review` | Lens 2: structure, navigation, journeys, labels, task paths |
| `design-refine` | Lens 3: whole-product critique (purpose, decision support, trust, brand feel) |
| `ui-design-principles` | Loaded before building the mock |
| `distinctiveness-review` | Independent review of the mock |

One extra file, `design-build/references/skill-invocation.md`, is included because
`distinctiveness-review` reads it by relative path. It is not a skill on its own here (there is
no `design-build/SKILL.md`).

## Changes

None. To update, copy the same paths from a newer kit commit, update this file, and run the
skill-resolution check in the main README.
