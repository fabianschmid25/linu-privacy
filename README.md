# linu public website and legal documents

This folder is a static GitHub Pages site. It contains the public landing page
and multilingual legal-document drafts for linu (EN / DE / ES).

## Operator fields (`js/site.js`)

Closed-test operator block is filled for **Fabian Schmid** (natural person).
Register/VAT are stated as not applicable in the imprint until Gewerbe.
After registration, update name/address/register/VAT and redeploy
(see `PLAN.md` → Datenschutz / Store). Have counsel review before open launch.

The drafts already cover:

- GDPR-oriented privacy categories, purposes, children (16+), deletion rules
- No advertising / no sale of family media
- Terms: content licence, invites, acceptable use, Linu Plus / store billing
- Website local-storage note (language preference; no ad cookies yet)

## GitHub Pages deployment

1. Create a separate **public** GitHub repository, for example `linu-site`.
2. Copy the contents of this `website/` directory into the repository root.
3. Commit and push to the repository's `main` branch.
4. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for the Pages deployment and test all three language selectors.

The live URLs for linu are:

```text
https://littlelinu.com/index.html
https://littlelinu.com/privacy.html?lang=en
https://littlelinu.com/terms.html?lang=en
https://littlelinu.com/imprint.html?lang=en
```

Use the final privacy URL in Google Play Console and App Store Connect. Keep
the repository public so store reviewers can access the documents.

## App-store follow-up

After the final URL is known, wire these pages into the app's Settings screen
and update the production checklist. Then complete the store Data safety /
Privacy Nutrition Label forms from the actual production SDK configuration.
