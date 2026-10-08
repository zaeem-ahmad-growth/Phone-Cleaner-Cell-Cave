# Phone Cleaner: Cell Cave

Public evidence site for **Phone Cleaner** by **Cell Cave**
(package `com.clearner.mobilecleaner.filemanager.cloud.savevideo.file.photo`).

It is written for the **Google Play review team** and for our own management. It sets out
what the suspension notice said, how our store listing measured up against the Deceptive
Behavior policy when we audited it ourselves, **what we changed after the suspension**, and
the in-app screenshot that proves every feature we claim.

**Live site:** https://zaeem-ahmad-growth.github.io/Phone-Cleaner-Cell-Cave/
**Privacy policy:** https://cellcave.github.io/apps/phone-cleaner/privacy/

Anyone with the link can open the site. There is no sign-in and no access gate.

## Tabs

| # | Tab | What it holds |
| --- | --- | --- |
| 01 | **App Suspension** (home page) | Our appeal text beside the suspension notice; the Deceptive Behavior policy clause by clause; the line-by-line metadata audit and risk register; the case for and against "Free Up Space"; every metadata feature proved with an app screenshot; the listing-graphics audit and verification; our corrected, policy-compliant metadata |
| 02 | **App Details** | Specification, versions and APK, in-app screenshots, the store graphics, and the QA history behind the numbers |

Opening the site root redirects to tab 01, so **App Suspension** is the default page.

## Layout

```
index.html                     redirect to the first tab
assets/nav.js                  the tab bar; its TABS list sets the tabs and their order
assets/bar.css                 tab-bar styling for pages that bring their own design
assets/site.css                the shared site design
assets/favicon.png             the app icon at 64x64
tabs/01-app-suspension/        page + notice/, listing/ (the suspended store art) and shots/ (app captures)
tabs/02-app-details/           page + gfx/, shots/ (app captures) and store/ (the corrected store art)
docs/knowledge.md              key facts and decisions - hand-written
docs/                          everything else under docs/ is GENERATED after each push
research/                      the source text behind the listing copy
CONTRIBUTING.md                the house rules every change follows
```

Content comes from the Phone Cleaner research repository
(`zaeem-ahmad-growth/Phone-Cleaner-App`); that repository is the working analysis, this one
is the public, reviewer-facing presentation of it.
