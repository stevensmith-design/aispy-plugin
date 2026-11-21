# Review checklist

One page, for every step and every agent. Add a line here when a real run misses something; don't
add steps to the workflow.

## Capture
- First load as a new visitor: clear the site's cookies and storage, wait about 15 s, then scroll.
  Note modals, chat, coupons and banners, and keep one "as seen" first screen with them visible.
- Open every pop-up, ⓘ, accordion, filter, tab, option selector, the menu and the footer once.
  Write one sweep line for each.
- Capture phone and desktop; the priority device first.
- Ask for the official logo and assets. Until they arrive, use the site's own SVG and label it.
- Check the live site in the real browser with third-party scripts loaded (reviews, chat, pop-ups,
  quizzes). If something can't be reproduced, treat supplied capture notes as evidence; "didn't
  load here" never outweighs a supplied observation.
- Captures go stale. Re-capture before you write notes about dynamic elements, and watch their
  behaviour over time (on load, while scrolling, after the main button scrolls away).

## Review
- No "X is missing" or "not shown" until everything has been opened. Check visually hidden
  (screen-reader) text, image text alternatives and the footer too.
- Strengths need evidence just like findings do. Check the DOM before praising structure.
- Friction you can see in the product is enough evidence to rate a finding. It doesn't need an
  observed failed purchase or a user study; state your confidence instead of lowering the rating.
- Priority: High = weakens the key task on the priority device; Medium = friction, doubt or brand
  harm; Low = polish. A market-convention issue inside the decision area (price, options, the buy
  button) is usually High, because it weakens the key task where the user decides; state that
  impact. Split issues whose severity differs by device or page.
- At synthesis, go through the sweep note once: each item becomes a finding, a strength, or is
  deliberately left out.
- For each benchmark pattern, ask why that brand does it before recommending it.
- Use the newest edition of any official statistic, and cite it with its date. If a figure isn't
  in the newest edition, check the previous year's report before falling back any further.
- Never present an invented number as a fact; name the client metric that would size a finding.
- Compare each new version with the previous one; superseded versions go to `_archive/`.
  Nothing is dropped between versions without a stated reason, and no finding loses its
  evidence: replace a figure that can't be used, don't remove it.
- Promises and claims need their conditions next to them (delivery areas and times, "free"
  conditions, No.1 and award claims). Check that different pages don't contradict each other.
- Name brands and payment methods exactly as they appear; check logos you identify from images.

## Product types
- **Shopping:** total cost before the cart (fees, delivery, services), option selectors, reviews,
  payment methods at the decision point, returns.
- **SaaS and apps:** sign-up and onboarding, empty states, settings and permissions, error and
  recovery paths, pricing and plan comparison.
- **Booking:** search and filters, availability, total price with fees, cancellation terms.
- **Content:** findability, search, reading on the priority device, navigation between related
  items.

## Market notes: Japan
- Tax-inclusive price display (総額表示; 税込 shown where expected).
- The 特定商取引法に基づく表記 page, findable from every purchase page.
- 注釈 on claims, such as ※ conditions on delivery promises and "free" offers.
- Payment methods shown as a recognisable set at the buy area, including convenience-store payment,
  QR codes (PayPay and the like), points the shopper earns or can use, and 代金引換 where offered.
- Typography: a Japanese typeface, tracking, mid-word line breaks and 禁則. For line breaks, look
  first where they're most visible: the product name and headings at 390 px (「…マットレ／ス」),
  then buttons and option pills; show those instances as the evidence.
- Untranslated-string tells: "Translation missing", English filter labels or review counts,
  English text read out to screen readers.
- Number formats (万 for large amounts), half- or full-width input, Japanese date and period
  wording; lists in a meaningful order (e.g. アイウエオ順), not at random.
- Red signals danger or error more strongly than in many Western UIs; avoid it on positive actions.
- Hype reads as untrustworthy (overusing 無料); state conditions and who replies, and when.
- Users prefer to self-serve on the web and in FAQs, but the contact route must be clear.
- Older users are often in scope: larger text and tap targets.
- Standard labels and verbs users look for (特定商取引法に基づく表記, カートに入れる).
- Regulatory labels required for the category. Check which labels are mandatory before
  recommending a label change; keep the statutory label and add to it.

For another market, add a short section like this one.

## Mock
- Design the proposed area as one coherent screen around the user's decision, not a patch.
- Every change from live has a marker and a reason; otherwise don't make it.
- Live values first; realistic simulated values (based on the site's own patterns) for anything
  else, noted once in the legend as illustrative. A visible placeholder only where a guess could
  mislead on money, legal terms or commitments, and no more than one or two.
- Hidden states: show them opened, or mark the trigger ("opens ___").
- Building blocks for a shopping decision screen (use what the findings call for): the price (and
  key size or spec) inside each option; a scale for the main buying criterion with its real
  values; the delivery, returns, warranty, service, payment and contact list with icons and short
  explanations; a review breakdown with filters for people like the shopper; a compact comparison
  of the models.
- Anything moved off the first screen keeps a visible entry point.
- Each side is one continuous page in a 390 × 844 frame that scrolls, not separate screenshots;
  both frames use the same capture method.
- Markers sit on the element they refer to, inside the scrolling page, not beside the phone.
- `ui-design-principles` loaded before building; the facts check and the design and structure
  check run as separate agents on the render, with their files saved next to the mock.

## Deliverables
- Style everything in the client's tokens, with a person-made feel: no gradients, emoji or generic
  AI card grids.
- No person, company or client name appears unless the person supplied it for this review: never
  from account details, memory or email, and never carried over from reference examples.
- Status text matches reality ("draft"; never "signed off" unless it was).
- Nothing reaches the person unchecked. Reports and the mock each get two separate checks: facts
  (numbers, claims, values, marker links, contradictions) and design and structure
  (`ui-design-review`, `ia-review`, `distinctiveness-review` on the renders), saved as files.
  After fixes, re-check only what was flagged.
- The index explains what the package is, how to read it and how it was made.
- The translated version only after the first language is stable, then one independent translation
  review.
