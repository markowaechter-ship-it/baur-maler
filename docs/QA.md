# Prüfung und Übergabe

Geprüft am 3. November 2026.

## Erfolgreich geprüft

- JavaScript-Syntax mit `node --check app.js`.
- `npm run check`: zehn HTML-Seiten, 131 lokale Link-/Asset-Verweise, je ein H1, Titel, Description und valides JSON-LD.
- `npm run build`: statische Auslieferung in `dist/`.
- Echte Chrome-Renderings bei 1440, 768 und 390 Pixeln. Desktop, Tablet und mobile Screenshots visuell angesehen. Ursprünglich angeschnittenes Teamfoto korrigiert, lange Überschriften verkürzt und Zitat auf Textgrösse gesetzt.
- Browser-Funktionstest: mobiles Menü öffnen, Escape schliessen, Farbstimmung wechseln und aria-pressed aktualisieren.
- Kontaktformular: leere Pflichtfelder ungültig; ausgefüllte Felder gültig. Ein tatsächlicher E-Mail-Versand wurde nicht ausgelöst.
- Startseite, Kontakt und fünf Inhaltsseiten: kein horizontaler Überlauf bei 390 Pixeln.
- Design-Inspektor nach Korrekturen: null Fehler mit expliziten Ausnahmen, fünf gestalterische Hinweise.

## Bewusste Designabweichungen

Der Inspektor wurde mit `--allow eyebrow,few-pictures,still-page` ausgeführt. Betriebsort und Erfahrungsangaben bleiben im ersten Sichtbereich, wie im Briefing verlangt. Nur ein authentisches Original-Teamfoto ist verfügbar; keine fremden Bilder werden als Projekte ausgegeben. Zurückhaltende Bewegung und kein Video dienen dem ruhigen Handwerksauftritt und dem Performanceziel. Der Inspektor weist zusätzlich auf die warme Cremefarbe, mehrere Schriftgrössen, die abweichende Sans-Serif und Weissraum neben dem Zitat auf dem Tablet hin. Creme und Sans-Serif entsprechen ausdrücklich dem Briefing; die übrigen Punkte sind gestalterisch bewusste Entscheidungen und keine Funktionsfehler.

## Noch vor öffentlichem Livegang

1. Rechtliche Firmenbezeichnung und Impressumsangaben bestätigen: AG im Briefing, GmbH im bisherigen Logo-Dateinamen.
2. Hostinganbieter und vollständige Datenschutzhinweise ergänzen.
3. Bild- und Personenfreigaben für das Original-Teamfoto bestätigen.
4. Leistungsumfang (insbesondere Gipsen/Spachteln) und Umwelt-Copy durch den Betrieb freigeben.
5. Bei gewünschtem Direktversand einen echten Formularanbieter oder Backend samt Missbrauchsschutz und Datenschutzhinweisen ergänzen. Aktuell ausdrücklich E-Mail-Entwurf im lokalen E-Mail-Programm.
6. Vorher-Nachher-Fotos und weitere Referenzen erst nach Lieferung authentischer, freigegebener Bilder ergänzen.
7. Ladezeit und Core Web Vitals unter dem tatsächlichen Hosting messen. Unter 1,5 Sekunden wurde nicht nachgewiesen; es ist ein Ziel.

Kein öffentlicher Deploy und keine Änderung an baur-maler.ch im Rahmen dieser Übergabe. Der Auftrag wurde als Ablage von Website-Code und Konzept im angegebenen GitHub-Repository umgesetzt.

## Prüfung nach vollständiger Inhaltsmigration

Alle erfassten Originalüberschriften, Absätze und Kundenstimmen wurden nach HTML-Decodierung mit den sichtbaren neuen Seiteninhalten verglichen: keine fehlenden Textblöcke. Alle 20 erfassten Bildverweise sind in den öffentlichen Seiten referenziert. Es sind 19 unterschiedliche Motive, da ein Motiv auf zwei Quellseiten verwendet wird. PNG-Transparenz bleibt erhalten. `npm run check` prüft nun zwölf Seiten und 218 lokale Links/Assets. `npm run build` enthält die neuen Routen und Originaldateien.

Die Startseite wurde bei 1440 und 390 Pixeln gerendert und visuell geprüft. Die neuen Seiten Leistungen und Geschichte wurden ebenfalls bei 390 Pixeln geprüft: kein horizontaler Überlauf. Unterhalb des Sichtbereichs werden die Bilder bewusst verzögert geladen. Die Kachelanordnung folgt dem vom Auftraggeber ausdrücklich gewünschten Schema; die entsprechende stilistische Kartenwarnung des Design-Inspektors bleibt deshalb bestehen.

## Interaktive Malfläche

Im echten Browser mit Mausereignissen geprüft: Malbewegung erzeugt sichtbare Pixel im Canvas; Farbtasten wechseln den ausgewählten Farbton; ausserhalb des Heros endet der Rollen-Cursor; „Neu streichen“ leert sämtliche gezeichneten Pixel. Ein Screenshot wurde visuell geprüft. Canvas und Roller liegen unter der Ebene von Text, Teamfoto und Aktionen. Syntaxprüfung und statischer Build erfolgreich; das neue Skript ist im Auslieferungsverzeichnis enthalten.

## Vollständige Timeline

Elf Jahresstationen und 15 zugeordnete Porträtverwendungen geprüft. Browserprüfung: die Vorwärtssteuerung bewegt die Zeitleiste (1080 Pixel nach drei Schritten), weitere Porträts erscheinen beim Eintritt in den sichtbaren Bereich (vier zu Beginn, sieben nach dem Blättern). Kein horizontaler Seitenüberlauf bei 1440 oder 390 Pixeln. Desktopdarstellung visuell geprüft. Alle Originaltexte der elf Jahresstationen sind enthalten; Bilddateien stammen aus der bereits migrierten Geschichte.

## Überarbeiteter Hero (4. November 2026)

Desktop (1440 Pixel) und Mobilansicht (390 Pixel) gerendert und visuell geprüft: fette zweizeilige Hauptüberschrift, deutlich vergrössertes transparentes Teamfoto und kompakt zentrierte Begleittexte/Aktionen. Das Foto überlagert die untere Textzeile bewusst auf ausdrücklichen Kundenwunsch; die entsprechende stilistische Überlagerungswarnung ist deshalb akzeptiert. Die Malpalette bleibt seitlich bzw. mobil darunter. Syntaxprüfung, Seitenprüfung und Build erfolgreich.

## Am unteren Hero-Rand verankertes Bild

Nach der weiteren Vergrösserung wurden Desktop und Mobilansicht erneut visuell geprüft. Browsermessung: Unterkante des Fotos und Hero-Unterkante stimmen exakt überein (0 Pixel Differenz). Kein horizontaler Seitenüberlauf bei 1440 oder 390 Pixeln. Die Begleittexte sind weiss und liegen gemeinsam mit den Aktionen über dem Bild; ein dunkler Verlauf sichert ihre Lesbarkeit. Die Personen überdecken bewusst Teile der unteren Überschriftenzeile. Die mobile Farbpalette wurde oberhalb der Komposition platziert.

## Cursor-Pinsel statt Rolle

Browserprüfung mit echten Mausereignissen in vier Richtungen: Pinselwinkel rechts ≈ π/2, abwärts ≈ π, links ≈ −π/2, aufwärts ≈ 0; alle innerhalb der Toleranz nach dem Einfedern. In allen vier Bewegungen waren Farbtropfen auf der separaten Animationsebene sichtbar. Farbauswahl, Verlassen des Heros und vollständiges Löschen beider Canvas-Ebenen erfolgreich geprüft. Screenshot mit mehreren Pinselspuren und gedrehtem Pinsel visuell geprüft. Syntaxprüfung, Seitenprüfung und Build erfolgreich.
