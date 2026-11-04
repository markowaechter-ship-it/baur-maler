# Quellen und Bildrechte

Stand der Prüfung: 3. November 2026.

## Inhalt

- Nutzerbriefing: vollständiger Konzeptauftrag für den Relaunch, vom Nutzer als Textdatei übergeben.
- https://www.baur-maler.ch/ : bestehender Auftritt; geprüft für Kontakt, Öffnungszeiten, 80 Jahre / drei Generationen, Kernleistungen, Prozess, Umwelttechnik und Kundenstimme.
- Hanna Meier: kurzes Originalzitat aus dem bestehenden Auftritt; dort nicht unabhängig als aktuelle Google-Bewertung verifiziert. Kein Sterne-Score und kein Bewertungs-Markup.

## Bilder

Original-Teamfoto des bestehenden Betriebs:
https://images.squarespace-cdn.com/content/v1/65607e6444ab605beb0761c8/b3154f33-4dce-4f15-914f-08879c23fa7a/Baur-Mitarbeiter-Web.png

Lokal als `assets/team.jpg` komprimiert. Bildquelle: Baur, bestehende Website. Die öffentlich zugängliche Quelle ist kein eigenständiger Lizenznachweis; Weiterverwendung und Personenfreigaben sind vor öffentlicher Veröffentlichung durch den Auftraggeber zu bestätigen.

`assets/paint.jpg` und `assets/colour.jpg` wurden zur Sichtung der bestehenden grafischen Markenmotive geladen. Sie werden nicht auf der neuen Website verwendet.

Die Raumskizze besteht aus CSS-Flächen. Sie zeigt keine echte Referenz. Keine fremden Stockfotos, keine erfundenen Kundenporträts und keine KI-generierten Projektaufnahmen.

## Ungeklärte Angaben

Briefing nennt „Baur Maler AG“. Der Logo-Dateiname der bestehenden Website enthält „GmbH“. Deshalb verwendet der Entwurf die neutrale Markenbezeichnung „Baur – die Maler“. Die juristische Firma muss vor Veröffentlichung bestätigt werden. Gips- und Spachtelarbeiten stammen aus dem Briefing; Umfang und konkrete angebotene Verfahren sind vom Betrieb freizugeben.

## Vollständige Inhaltsmigration (3. November 2026)

Die öffentlich verlinkten Seiten https://www.baur-maler.ch/, https://www.baur-maler.ch/leistungen und https://www.baur-maler.ch/geschichte wurden anhand der Sitemap vollständig erfasst. Alle originalen Überschriften, Absätze, Kundenstimmen und Bilder sind im neuen Auftritt enthalten. Struktur und Reihenfolge wurden an das vom Auftraggeber vorgegebene Layout angepasst. Die neuen Routen `/leistungen/` und `/geschichte/` sind direkt in der Navigation verlinkt; `/ueber-uns/` enthält ebenfalls die vollständige Geschichte.

`docs/original-content.json` dokumentiert die Originaltexte sowie sämtliche Bild-URLs und ihre lokalen Dateinamen. 20 Bildverweise wurden lokal gespeichert (19 unterschiedliche Originalmotive, ein Pinselstrich ist auf zwei Quellseiten vorhanden). Die Dateien unter `assets/original/` behalten ihr Originalformat und bei PNGs den Alpha-Kanal. Alle Motive werden im neuen Auftritt sichtbar verwendet. Die Bewertungsbilder sind aus dem bestehenden Auftritt übernommen; es wurde keine neue Verifizierung ihrer Identität vorgenommen.

Die ursprüngliche Geschichte bestätigt zum 1. Juli 2016 die Firmierung **Baur die Maler GmbH**. Damit ist die zuvor dokumentierte Abweichung zur Bezeichnung „AG“ im ersten Briefing auf Quellenebene geklärt. Die Originaltexte über Leistungen und Umwelttechnik ersetzen die früheren Entwurfstexte an den jeweiligen Stellen; ihre fachlichen Aussagen wurden als bestehende Betriebsaussagen übernommen.

## Schrift

Outfit Variable, lokal eingebunden für die gesamte Website. Quelle: https://github.com/google/fonts/tree/main/ofl/outfit. SIL Open Font License 1.1; Lizenztext unter `assets/fonts/OFL-Outfit.txt`.

## Individuelle Leistungsmotive

Die zwölf Karussellbilder unter `assets/services/` wurden mit dem integrierten Imagegen-Werkzeug als eigenständige Illustrationen erzeugt. Keine doppelten Bilddateien, keine als Kundenreferenzen ausgegebenen KI-Motive. Vollständige Prompts und Dateizuordnung: `docs/service-images.json`; verlinkte Übersicht: `docs/service-images.md`. Transparenz ist in den optimierten WebP-Dateien erhalten.
