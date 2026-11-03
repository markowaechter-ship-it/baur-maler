# Baur – die Maler · Website-Relaunch

Lauffähiger, responsiver Website-Entwurf und vollständiges Konzept für Baur in Winterthur, auf Basis des übergebenen Briefings und der bestehenden Website. Der Quellcode ist bewusst ohne Framework und ohne Laufzeitabhängigkeiten gehalten.

## Lokal starten

Voraussetzungen: Node.js 22+ und Python 3.

```sh
npm run dev
```

Website: http://127.0.0.1:4321

```sh
npm run check
npm run build
```

`dist/` enthält die auslieferbare statische Website. Es kann auf einem statischen Webhost mit Verzeichnis-Indexdateien veröffentlicht werden. Keine Installation von npm-Paketen nötig. Der bestehende Auftritt auf baur-maler.ch wird durch dieses Repository nicht verändert.

## Enthalten

- Startseite mit Original-Teamfoto, interaktiver Farbstimmung, Leistungsübersicht, Ablauf, Umwelttechnik und belegter Kundenstimme.
- Eigene Seiten für Malen & Gipsen, Tapezieren, Spritzwerk, Nachhaltigkeit und Über uns.
- Kontaktformular mit Validierung und vorbereiteter E-Mail, Telefon- und E-Mail-Links.
- Mobile Navigation, Tastaturfokus, Skip-Link und reduzierte Bewegung.
- Individuelle Metadaten, Canonical-URLs, Open Graph, Sitemap, robots.txt und JSON-LD für LocalBusiness/PaintingContractor.
- Impressum und Datenschutz als ausdrücklich noch zu vervollständigende Entwurfsseiten.

## Dokumentation

- [Konzept, Copywriting und Layout](docs/KONZEPT.md)
- [Quellen und Bildrechte](docs/QUELLEN.md)
- [Prüfbericht und Freigabepunkte](docs/QA.md)

## Vor Veröffentlichung

Die rechtliche Firmenbezeichnung bestätigen (Briefing: AG; bisheriger Logo-Dateiname: GmbH). Hosting und Datenschutz vervollständigen, Bildnutzungsrechte bestätigen, alle Leistungen und Umweltclaims freigeben und Canonical-/Open-Graph-Domain an das tatsächliche Ziel anpassen. Die Anfrage ist ein transparenter Mailto-Workflow, kein serverseitiger Formularversand. Es werden keine Nachrichten im Browser oder auf einem Server gespeichert.

## Vollständige Originalinhalte integriert

Die Texte und Bilder aller drei öffentlich verlinkten Originalseiten sind inzwischen eingebaut, einschliesslich sämtlicher Leistungsbeschreibungen, vier vollständiger Kundenstimmen und der Firmengeschichte von 1937 bis 2016. Neue Seiten: `/leistungen/` und `/geschichte/`. Originaldateien und Quellenzuordnung: `assets/original/` und `docs/original-content.json`. Der helle Header mit schwarzem Logo und das transparente Teamfoto bleiben erhalten. Die bisherigen Hinweise auf fehlende Originalbilder und eine ungeklärte Firmierung sind durch diese Quellenübernahme aktualisiert; die Geschichte bestätigt „Baur die Maler GmbH“.

## Interaktiver Hero

`hero-paint.js` steuert eine ausschliesslich lokale Malfläche hinter dem Hero-Inhalt. Farbauswahl und Zurücksetzen sind per Tastatur erreichbar. Der SVG-Pinsel erscheint nur im Hero und blendet über Links und Bedienelementen aus. Die transparente Teamaufnahme bleibt darüber sichtbar. Beim Grössenwechsel wird die Zeichnung erhalten; im Build wird das Skript mitgeliefert.
