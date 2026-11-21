# Example: Brolga JP localisation review

A complete review package produced by AIspy, then reviewed once by a person. Open
[`index.html`](index.html) in a browser to start; each document is one self-contained HTML file
with its images embedded.

## What Brolga is

Brolga is a **fictional** Australian running-shoe brand selling in Japan, built as a test site for
this pack. Its products (Swell 3, Updraft Carbon, Escarp WP and others), prices, reviews and
reviewers are made up. Real Japanese sites appear only as benchmarks and cross-checks, read on
their public pages.

## What was reviewed

A Japanese-market localisation review of Brolga JP, phone first (390 px), with desktop (1440 px)
where a finding differs: the top page, all shoes, three product pages and the size guide. The
review ran on 13–17 November 2026, against a staging build of the test site served locally.

| File | What it is |
|---|---|
| `index.html` | The package index: the documents, four key points, how to read them |
| `brolga-jp-localisation-review.html` | Review report: 18 findings (5 High, 13 Medium; 11 Low in the appendix) |
| `brolga-jp-ia-analysis.html` | IA analysis: navigation, page layout by type, headings, 8 task paths, label audit, proposed structure |
| `brolga-jp-mock-pdp-mobile.html` | Current-vs-proposed mock of the Swell 3 product page on a phone |
| `09-mock-spec.md` | The mock spec approved before the mock was built (one row per change) |

The documents are drafts for discussion, as a real package would be at this stage. The mock spec
mentions working files from the run (capture notes, the run log) that aren't part of the example.

## Changes for publication

- File names without `-draft`, and the links between the documents updated to match.
- `index.html` was built for this example with the pack's index template, from the three documents'
  own content (the run stopped before packaging).
- The mock's notes were restructured into the Now / Proposed form that version 0.6.10 of the pack
  requires, using the notes' own wording and the report's finding titles.

## Licence

[CC BY 4.0](LICENSE.md). Third-party screenshots (benchmark sites) are not covered by CC BY 4.0.
They are shown for review commentary only, and their rights stay with their owners.
