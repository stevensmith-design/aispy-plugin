# Review questions: what experienced human reviewers look for

The questions expert UX/UI reviewers ask of every page and flow, grouped into nine categories and
assigned to the three lenses. Every lens reads the whole file and owns its categories. Ask each
question that applies to the product in scope; don't manufacture a finding for every category.
At synthesis, record each category as covered, partly covered or not covered, and why.

| Lens | Owns |
|---|---|
| `ia-review` | B navigation and structure · C journeys and flow · G wording and labels |
| `ui-design-review` | E interaction and affordance · F visual hierarchy and consistency · I audience and accessibility |
| `design-refine` | A purpose and value · D content and decision support · H trust and reassurance |

## Framing (before any finding)
Every finding is judged against the frame: the business goal and the goal each page serves, the
target users (who, device, literacy, age), the scope, and **the use case per page** (how users
arrive there, e.g. from a search or an ad, and what they want to know or do).

**Habits worth copying**
- Tag a finding with its goal relevance where that's credible, and always with its device. Don't
  force a link to a goal for small visual fixes; the user-impact reason is enough.
- Walk a real need end to end and count the steps, taps, branches or places the answer sits. A
  number makes the issue concrete.
- For labels, predict where a label goes before clicking it. The gap between the prediction and
  the real page is the finding.
- Note what works, with evidence. It builds trust and protects good patterns in a redesign.
- Show a reference site with callouts of what it does well, and why.
- End with direction, not pixels: improvement themes, phases, and a recommended next step.

## A. Purpose and value
- Does the first view say what this is, who it's for and why it's better, rather than a logo,
  slogan, campaign or banners?
- Is eligibility stated up front ("business only", "not available in X")?
- Are claims specific, with reasons? Vague claims ("easy", "no worries") prompt "why?".
- Is the value shown before the ask (sign-up, registration, locked content)?
- Do visuals show the real product or its use, not generic metaphors or unrelated photos?
- Does the page express the brand's own value, beyond copying competitors?

## B. Navigation and structure
- Is navigation organised by user goals or objects, not internal names or org structure?
- Are items parallel in granularity (no category next to a single page, no "Other" next to "Other …")?
- Does each label predict its destination, and does the page title match the label?
- Is there one obvious route per goal, or several competing entry points?
- Are urgent or high-value items buried in flat lists or deep levels while minor ones get prime space?
- Is there an entry for each key segment (new vs existing, individual vs business)?
- Search: noticeable, searches what users expect (partial words, categories, service questions),
  and a zero-result page offers a next step?
- Sticky navigation or filters on long pages; in-page menus in the same order as the page?
- Do shortcuts in the menu hide the real hierarchy?
- Is the footer grouped by audience or purpose, not a list of product names?
- Will the structure scale as content grows (categories, tags, filters, sort)?
- Does each page type do its own job? A category page that has turned into a landing page
  (banners and repeated blocks between the products and the comparison), a home page whose
  sections overlap in purpose.
- Is every route to experience the product (in person, sample, trial, demo) linked from where the
  decision is made, not only from the menu's utility area?
- Heading outline from the DOM: one visible H1 that names the page, headings in order, none
  empty or hidden; does the outline describe the decision?

## C. Journeys and flow
- Gates: does a browsing intent hit sign-up or login first?
- Steps: redundant steps, a page for one field, a call to action that leads to another, loops back
  to a choice already made, chooser pages in between.
- Dead ends: pages that raise intent (price, process, cases) with no next action.
- Step indicators in multi-step flows; is the end point clear?
- Back, cancel and close say where they go and return to the right place.
- Exits: unannounced external links, jumps to another site or a desktop page; consistent styling.
- Landing match: does the page match the search result, ad or banner that sent the user?
- Step order follows the user's goal (choose the plan, then the options).

## D. Content and decision support
- Is everything needed to decide next to the action: price, total cost (base, extras, delivery),
  timing, conditions, payment method and timing?
- Are the differences between options obvious? Options that look identical, a meaningless option,
  a regular price too small next to "free".
- Comparison from the user's point of view: against the brand's own models and competitors.
- Reviews and case studies carry the attributes users need to judge relevance (use, size, age).
- Checkout options the market expects at the product page (express or wallet payments, deferred
  payment), and whether they're shown there or only later.
- Choice overload: too many recommendation axes or features listed flat.
- Duplicated or expired content; FAQs that answer pre-purchase questions, not only usage.
- A beginner path, with explanations near the top.
- Key facts only inside videos; text-heavy sections that need a visual or short points.

## E. Interaction and affordance
- Can users tell what's tappable? Hover and pressed states; links that look like plain text.
- Look ≠ behaviour: tags that look like buttons, tabs used as page navigation, the same look with
  different behaviour, decorative shapes that look interactive.
- Tap targets: size, and distance between opposing actions.
- Carousels: visible controls and indicators, user control, no arrows for a single image.
- Interruptions: pop-ups at launch, too many dialogs, explanations hidden in tooltips or modals,
  permission prompts without context.
- Defaults: hidden pre-checked opt-ins; settings users must switch on that could default on.
- Forms: grouping, the right keyboard, input-format ambiguity, inline errors, fields missing for a
  segment.
- Errors and loading: readable messages with a next action; no blocking full-screen loaders.
- Familiar patterns: don't reinvent standard controls.

## F. Visual hierarchy and consistency
- A clear type scale (headings, body and notes visibly different); small type suits the audience.
- Contrast meets WCAG (4.5:1 for text); no light grey on light grey or text on busy photos.
- Colour meaning: red kept for errors and urgency; colour applied by rule; few accents.
- The primary action stands out and is consistent; secondary actions recede.
- Component consistency: buttons, radii, icon style, shadows, illustration vs photo style.
- Tone across the flow: checkout or payment that looks like a different site causes anxiety.
- Layout: alignment, even card heights, separation and grouping, dead space, line length.
- Image quality and relevance; dated looks (gradients, heavy shadows).

## G. Wording and labels
- One concept, one word everywhere (navigation, page title, button, FAQ).
- Internal or coined words vs the words users know; jargon in the first view.
- Buttons name the action as a verb, and predict the next page.
- Section and category names use a consistent form and don't overlap.
- Number and date formats users read easily; relative periods where they help.
- Tone traps: overusing "free" reads like an ad; bureaucratic listing; fear-led headlines.

## H. Trust and reassurance
- Who is on the other end of chat or contact, when they reply, and how the channels differ.
- Unexpected security steps that look like phishing; explaining security changes.
- Notices styled by urgency: incidents prominent, routine news low.
- Social proof that means something: awards and logo walls need context.
- Calls to action that push behaviour against the goal (a phone icon when the goal is self-service).

## I. Audience and accessibility
- A minimum font size; OS text scaling respected.
- Older or less experienced audiences: larger text and tap areas, plain words.
- Screen-reader text and labels in the site's language; headings that describe the page.
