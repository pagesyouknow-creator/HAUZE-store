# HAUZE – Shopify Theme

Clean, minimal, Apple-inspired. English by default, ready for any language.

## Phase 1: Drop / newsletter page
`sections/drop-landing.liquid` is used as the **password page**: while the store is password
protected, visitors only see the countdown + email signup. Signups appear in Shopify under
**Customers** (tags `newsletter`, `drop`, subscribed to email marketing).

### Setup
1. Shopify Admin → **Online Store → Themes → Add theme → Connect from GitHub** → repo `HAUZE-store`, pick the branch.
2. **Online Store → Preferences → Password protection**: enable and set a password.
3. Publish the theme. Customize under **Themes → Customize → Password page**
   (heading, text, drop date, logo under Theme settings).
4. Add privacy policy / legal notice under **Settings → Policies**.

### Languages
The theme ships in English (`locales/en.default.json`); German is included as an example (`locales/de.json`).
To add languages: **Settings → Languages → Add language**, then translate theme content in the
free **Translate & Adapt** app. A language switcher appears automatically as soon as there is
more than one published language. For a new language, copy `locales/en.default.json` to
`locales/<code>.json` (e.g. `fr.json`) and translate the values.

### Launch
Disable password protection to go live (later replace the home page with the real storefront).
