# aispy-plugin

The plugin-directory edition of [AIspy](https://github.com/stevensmith-design/aispy), generated from a
tagged release of the full kit. Submit the `plugin/` folder; nothing else in this repository is part
of the plugin.

The directory accepts only Markdown, text, JSON, YAML and images from unverified publishers, so this
edition carries:

| Full kit | Plugin edition |
|---|---|
| `skills/` and `skills/design-kit/` | Same skills, Markdown only, design-kit skills flattened into `skills/` |
| `templates/*.html`, `.css`, `.js` | `templates/<file>.md`: the source in one fenced block, written out unchanged at run time |
| `examples/*/…html` | `<doc>.html.md` (markup and text, embedded images removed) plus `screens/` (one JPEG per section, 1440 px) |
| `scripts/` (capture, annotate, assemble, checks) | `plugin-mode.md`: the same steps done with a browser tool; `deliverable-checklist.md` applied by a separate agent |
| Running rules in `AGENTS.md` | Appended to `plugin-mode.md` |

If a full kit checkout is in the workspace, the plugin uses its scripts (full mode).

## Build

```
node build/build.mjs --aispy ../aispy            # latest tag; or --tag vX.Y.Z
node build/preflight.mjs plugin                   # local pre-check of the directory's rules
```

The build reads the kit with `git archive` at the tag, never the working copy, and renders the
example screens with the kit's own Playwright install (`scripts/capture/node_modules`; `--no-render`
skips them). `overlay/` holds this edition's own files. Edit those, never `plugin/`, which is
rebuilt from scratch.

## Still to do before submitting

- `assets/icon.png`: square PNG, 512–2048 px. The first one submitted becomes the listing icon for good.
- The name hold ("aispy" vs a connector publisher "Alpy") goes to human review.
- A side-by-side run on Mareo: full kit vs plugin mode, compared stage by stage.
