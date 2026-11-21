---
name: review-scoping
description: >
  Inventory a website and scope a UX/UI review by page type rather than URL count: read the
  sitemap, detect each URL's template, group templates into page types, tier them by purchase or
  goal relevance, measure page length in mobile screens, and flag broken URLs. Produces the scoping
  table that a review frame and an estimate are built on. Use before a product-review run, when
  preparing a proposal or estimate for a review, when a client says "review our site" without
  naming pages, or when asked "how many pages would this be?" or "what should we review first?".
metadata:
  version: 0.1.0
---

# Review scoping

A site with 150 URLs may have 17 layouts worth reviewing; 17 product templates may be 8 page
types. Scope and price by **page type and device**, never by URL count, and pick the pages that
matter for the client's goal.

## Steps

1. **Inventory.** Run `scripts/inventory/inventory.mjs --site https://example.com --out scoping/`.
   It reads `/sitemap.xml` (and nested sitemaps), fetches each URL politely, and records status,
   template fingerprint and page type. Shopify sites expose the template in section IDs
   (`template--<id>__…`) and the page type in their analytics data; other sites are grouped by a
   fingerprint of their section structure. If the network blocks the site, say so and fall back
   to the browser for a sample, or ask the reviewer to run it where the site is reachable.
2. **Group into page types.** Templates that share a layout but differ only in content are one
   type (three product templates with the same sections = one product-page type). Read
   one representative page per group to confirm; fingerprints are a starting point, not proof.
3. **Tier by goal relevance** (default for e-commerce; adapt for other goals):
   1. purchase-critical (product, cart, the pages that lead straight to them)
   2. other shopping (collections, comparison, size guides, campaign pages)
   3. content (about, blog, help)
4. **Measure length.** For one representative page per type, measure the page height at 390×844
   in screens (`--measure`, needs a browser). Long types cost more to review and to mock.
5. **Flag broken URLs** (404s, redirect loops, soft 404s) as a finding for the review's appendix.
6. **Write `scoping.md`**: the table below, then a recommended scope (which types, which devices,
   which representative URL for each) with a one-line reason per type.

| Type | Tier | Templates | URLs | Representative URL | Screens @390 | Devices | In scope? |
|---|---|---|---|---|---|---|---|

If the client named specific pages, map them to types: you may find two of their pages are the
same type (review one, spot-check the other) or that a purchase-critical type is missing.

## Hand-off

- `product-review` takes the in-scope rows into its frame.
- The table is also the basis for an estimate: breadth is cheap; mock depth isn't.
