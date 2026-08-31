# linu public website and legal documents

This folder is a static GitHub Pages site. It contains the public landing page
and multilingual legal-document drafts for linu.

## Before publishing

Replace every `[[TODO: ...]]` value in `js/site.js`, especially:

- `legalName`: legal name of the operator
- `addressStreet`, `addressPostalCode`, `addressCity`, `addressCountry`
- `contactEmail`, `privacyEmail`, `supportEmail`
- `companyRegister`, `vatId` (remove a field if it does not apply)
- `supabaseRegion`, `sentryEnabled`, `subprocessorList`
- `lastUpdated`

Do not publish these documents with unresolved TODO markers. Have the final
texts checked for the operator's actual country, business structure, target
markets, payment provider, and subscription terms by qualified legal counsel.

## GitHub Pages deployment

1. Create a separate **public** GitHub repository, for example `linu-site`.
2. Copy the contents of this `website/` directory into the repository root.
3. Commit and push to the repository's `main` branch.
4. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for the Pages deployment and test all three language selectors.

The URLs will normally be:

```text
https://YOUR-ACCOUNT.github.io/linu-site/
https://YOUR-ACCOUNT.github.io/linu-site/privacy.html?lang=en
https://YOUR-ACCOUNT.github.io/linu-site/terms.html?lang=en
https://YOUR-ACCOUNT.github.io/linu-site/imprint.html?lang=en
```

Use the final privacy URL in Google Play Console and App Store Connect. Keep
the repository public so store reviewers can access the documents.

## App-store follow-up

After the final URL is known, wire these pages into the app's Settings screen
and update the production checklist. Then complete the store Data safety /
Privacy Nutrition Label forms from the actual production SDK configuration.
