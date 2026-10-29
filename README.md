# linu public website and legal documents

Static GitHub Pages site: public landing page and multilingual legal documents
for linu (EN / DE / ES). **Go-live texts** (self-maintained; stand in
`js/site.js` → `OPERATOR.lastUpdated`).

## Operator fields (`js/site.js`)

Operator block: **LinuLab – Fabian Schmid** (Kleingewerbe), Augsburg address,
`linuteam@yahoo.com`. Imprint lists **USt-IdNr. DE465871191**; commercial register
not applicable. Do **not** publish Steuernummer or W-IdNr. Unterscheidungsmerkmal.
After edits, redeploy Pages (copy into `C:\website` / `fabianschmid25/linu-privacy`
and push `main`).

The published texts cover:

- GDPR-oriented privacy categories, purposes, children (16+), deletion rules
- No advertising / no sale of family media
- Terms: content licence, invites, acceptable use, Linu Plus / store billing
- Website local-storage note (language preference; no ad cookies)

## Live URLs

```text
https://littlelinu.com/index.html
https://littlelinu.com/privacy.html?lang=en
https://littlelinu.com/terms.html?lang=en
https://littlelinu.com/imprint.html?lang=en
https://littlelinu.com/delete-account.html
```

Use the privacy URL in Google Play Console and App Store Connect. Use
`https://littlelinu.com/delete-account.html` as the account-deletion web
resource in Play Console Data safety. Keep the repository public so store
reviewers can access the documents.

App Settings already link Privacy / Terms / Imprint via `constants/legal.ts`.
Complete Play Data safety / Age Rating from the production SDK configuration.

## Redeploy

1. Copy contents of this `website/` directory into the Pages repo root (`C:\website`).
2. Commit and push `main`.
3. Confirm Pages deploy and language selectors on the live URLs above.
