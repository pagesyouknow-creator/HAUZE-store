# HAUZE – Shopify Theme

Clean, minimalistisch, Apple-inspiriert.

## Phase 1: Drop-/Newsletter-Seite
Die Seite (`sections/drop-landing.liquid`) wird als **Passwortseite** genutzt: Solange der Shop
passwortgeschützt ist, sehen Besucher nur Countdown + Newsletter-Anmeldung. Anmeldungen landen
in Shopify unter **Kunden** (Tags `newsletter`, `drop`, E-Mail-Marketing angemeldet).

### Einrichtung
1. Shopify Admin → **Onlineshop → Themes → Theme hinzufügen → Von GitHub verbinden** → Repo `HAUZE-store`, Branch wählen.
2. **Onlineshop → Einstellungen → Passwortschutz** (bzw. Präferenzen): Passwortschutz aktivieren, eigenes Passwort setzen.
3. Theme veröffentlichen. Anpassen unter **Themes → Anpassen → Passwortseite**
   (Überschrift, Text, Drop-Datum, Logo unter Theme-Einstellungen).
4. Datenschutz/Impressum unter **Einstellungen → Richtlinien** hinterlegen und im Footer-Menü verlinken.

### Launch
Passwortschutz deaktivieren, dann ist die Startseite live (später durch die echte Shop-Startseite ersetzen).
