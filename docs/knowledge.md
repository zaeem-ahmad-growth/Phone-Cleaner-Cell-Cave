# Knowledge base - Phone Cleaner: Cell Cave

Loaded automatically in every Claude Code session started inside this folder. Short, factual
lines only; every line is paid for in every session.

## What this repository is

- Public evidence site for **Phone Cleaner** by **Cell Cave**, package
  `com.clearner.mobilecleaner.filemanager.cloud.savevideo.file.photo`.
- Created **8 Oct 2026** so the Google Play review team, and our own management, can read the
  suspension response in one place.
- Live on **GitHub Pages**: https://zaeem-ahmad-growth.github.io/Phone-Cleaner-Cell-Cave/
  Public, no Cloudflare Pages, no Cloudflare Access, no sign-in. Anyone with the link can read it.
- Content is re-presented from `zaeem-ahmad-growth/Phone-Cleaner-App` (tabs 01 and 06).
  **That repository is never edited from here.**

## Voice

- Every page addresses reviewers and management, in the first person plural: *we offer these
  features in our app*, *we made these changes after the suspension*.
- The source repository is written as analysis addressed to the app owner. All of that was
  rewritten: no "you should", no "the owner", no recommendations, no advice column.

## Tabs

| # | Slug | Label | Holds |
| --- | --- | --- | --- |
| 01 | `01-app-suspension` | App Suspension | Home page, h1 "Phone Cleaner Changes". Six blocks: 1 our request (reinstate this package + the two questions), 2 what changed field by field, 3 the corrected listing, 4 every claim beside its app screen, 5 store graphics before/after, 6 reference (notice, appeal, Google reply) |
| 02 | `02-app-details` | App Details | Spec, Versions & APK, Screenshots, Graphics, QA history |

- The site root redirects to tab 01, so **App Suspension** opens by default.
- Site `<title>` on every page is **Phone Cleaner: Cell Cave** - the repository's own name,
  not the first tab's label. Deliberate: this site is named after the app and the developer,
  not after a tab.

## Facts the pages rest on

- Suspended **7 Oct 2026** under **Deceptive Behavior**; the notice names one area, the
  en-US title "Phone Cleaner: Free Up Space". One appeal is allowed.
- New title **Phone Cleaner: Junk & Photos**; short description
  "Junk cleaner for duplicate photos, large files, app cache & storage space."
- Nine corrections made after the suspension: title, "Social Media Folder Cleanup" block
  removed, duplicate-audio claim removed, two self-compliance lines removed, ad support
  disclosed, wording narrowed, full screenshot set replaced, feature graphic renamed.
- 23 listing claims audited: 15 proved by a screenshot, 6 reworded, 2 removed.
- QA round of **17 Sep 2026** on LD Player (Android 9, 720x1280, 320 dpi): 24 bugs, 23 fixed,
  QA score 84/100. All app screenshots come from that round.
- The submitted APK is **later** than the 17 Sep QA build (`QUERY_ALL_PACKAGES` was removed
  between the two), so anything sent to Google as evidence is recaptured from it first.
- Store art in `tabs/01-app-suspension/listing/` is the **suspended** set, kept because the
  audit is about it. The **corrected** set is in `tabs/02-app-details/store/`.
- Privacy policy, linked from the tab bar and both pages:
  https://cellcave.github.io/apps/phone-cleaner/privacy/

## Open points

- Google declined the appeal and quoted the **Misleading Claims** sub-clause back, without
  naming the failing element. Tab 01 opens with the **Humble Request to
  Google Review Team** section at the top of the page, asking the review team to pinpoint
  the exact field or claim.
- The **appeal-response screenshot is still missing**: the right column has the suspension
  notice thumbnail only. Drop the image at `tabs/01-app-suspension/notice/appeal-response.png`
  and add a second `.thumb-link` beside the first.
- R13 (renaming the in-app tools Phone Boost, CPU Cooler, Battery Saver) needs a new build and
  is queued for the first release after reinstatement.

## Request letter, revised 9 Oct 2026

Three changes to the 8 Oct letter, and nothing else. **The opening, the stakes and the closing
thanks are the 8 Oct wording, verbatim** - see the rule at the end of this section.

- An explicit **call to action** closes the letter: "Please do take a quick look at what we have
  put right before this case closes." Play support has a poor record of opening evidence links,
  so the ask to *read the page* is the last thing the reviewer sees before the thanks.
- The question names the clause: **"And if any feature we describe is held to be functionally
  impossible, we would very much like to know which one."** "Functionally impossible" is the
  operative phrase in the policy text Google quoted at us, and the one way to ask about the
  **app** rather than the listing in Google's own words. It replaces the vaguer "if the concern
  lies in the app itself". The third bullet of "What we are hoping for" uses the same phrase.
  A question, never a confession - still never name a feature of our own as suspect.
- **Never claim anything about this page's length.** A draft closed "it is one page, and a few
  minutes"; the page prints to **17 pages**, so the claim was false. A letter answering a
  Misleading Claims finding cannot carry an unverifiable claim of its own.

**Length is not where this letter economises.** Body **1,198 characters**, within ten of the
8 Oct letter (1,188). On 9 Oct it was cut to 985 by trimming "Thank you for reviewing our
appeal", "this app is many months of our work", "our whole portfolio and every other app on this
account" and "Thank you for your time and support" - and the plea went flat. Reverted the same
day. The courtesy and the human stake **are** the argument to a reviewer with discretion; if
room is ever needed, trim the asks in the middle, never the opening or the thanks.

## Restructure, 8 Oct 2026 (second pass)

Rewritten for a reviewer's attention budget: **8,892 words down to 4,389**, and what remains is
mostly verbatim metadata and correspondence rather than commentary.

- **Order is the argument:** ask first, then the fix, then the corrected listing, then the proof,
  then the art, then the correspondence last. Never put history before the ask.
- **Deleted outright:** the Deceptive Behavior clause-by-clause table (reciting Google's own
  policy back to them), "The case that the title is compliant" (arguing a decision we accepted),
  the risk register as a separate section (merged into "what changed"), "What the notice does not
  say" as a standalone block (folded into the two questions), the "How to read this page" callout.
- **Over-confession cut:** "impossible" 16 occurrences down to 2, "deceptive" 19 to 6,
  "387.7" 8 to 5. Admitting a fault once is credibility; eight times is the reviewer's main
  impression of the listing.
- **Evidence rows:** no paragraphs at all in `.ev-body` - bullets only (`.ev-list`), vertically
  centred against the screenshots, thumbnails halved to 138px (`.strip` to 112px) so the section
  scrolls in a fraction of the length.
- **New argument the page had been missing:** why reinstatement of this package rather than a new
  one. Stated as our own position, not as a claim about Play policy - do not assert what Play's
  rules say about republishing without checking the live enforcement page first.
- **Tone, 8 Oct 2026:** the request block leads with the letter, and the two summary panels sit
  *after* it. Putting a list of asks above the letter reads as instructing the reviewer. Every
  ask is phrased as a hope, never an imperative: "that this package may be reinstated", not
  "reinstate this package". Play support is known to be unhelpful on suspensions - the page must
  never sound like it is issuing orders.
- **Never volunteer app changes Google has not raised.** The note about renaming Phone Boost,
  CPU Cooler and Battery Saver was removed: no message from Google has mentioned the app, and
  offering a problem they had not found only widens the finding. Asking whether the app is
  involved is fine; naming our own suspicions is not.
- **Evidence layout:** text column fluid, screens column sized to content (`max-width:486px`,
  or `.ev-shots.quad` 312px for four screens so they stack 2x2), screens 150px. Comparison
  frames in section 5 render at 60% (`.three-up .asset,.three-up .phone{width:60%}`).
