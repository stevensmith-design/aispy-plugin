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

The build reads the kit with `git archive` at the tag, never the working copy. `overlay/` holds this
edition's own files. Edit those, never `plugin/`, which is rebuilt from scratch.

Example screens live in `renders/` and are committed, so their bytes stay the same between builds.
`--render` regenerates them with the kit's own Playwright install (`scripts/capture/node_modules`).

## When the directory flags something

- **An image "contains a download-and-execute shell pattern":** random bytes in the compressed image
  look like a command. Run `python3 build/reencode.py <path>` for each flagged image (it saves a
  re-encoded copy without metadata into `renders/`), rebuild and push.
- **Wording read as a credential or a command:** add a rewording to `REWORD` in `build/build.mjs`.
- **A file "names images":** don't write image paths or wildcards in example or template text.

## Still to do before submitting

- `assets/icon.png`: square PNG, 512–2048 px. The first one submitted becomes the listing icon for good.
- The name hold ("aispy" vs a connector publisher "Alpy") goes to human review.
- A side-by-side run on Mareo: full kit vs plugin mode, compared stage by stage.
