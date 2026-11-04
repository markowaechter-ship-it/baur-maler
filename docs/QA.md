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

## Flüssige Farbspur

Mit echten Mausereignissen im Browser geprüft: Die langsame horizontale Spur war am Messpunkt 16 Pixel breit, die schnelle 70 Pixel. Der sichtbare Werkzeug-Pinsel ist aus dem DOM entfernt; der kleine Farbpunkt ist vorhanden. Farbauswahl, normale Zeigeranzeige ausserhalb des Heros und vollständiges Leeren beider Canvas-Ebenen funktionieren. Screenshot mit schmaler Linie, breitem Band und gekrümmter Farbspur visuell geprüft. Syntaxprüfung, Seitenprüfung und Build erfolgreich.

## Kartenaufbau nach Video-Referenz (4. November 2026)

Die 11,26 Sekunden lange Nutzeraufnahme wurde in zehn Einzelbildern ausgewertet. Die daraus abgeleiteten zwei Desktop-Karten wurden am Start, während des Übergangs, bei aktivierter Geschichte und nach dem Lesen der Timeline im Browser fotografiert und visuell geprüft.

Browserprüfung: Malfläche in Karte 1 zeichnet weiterhin; die direkte Seitennavigation aktiviert Karte 2; inaktive Karten sind aus der Tastaturbedienung und dem Accessibility-Baum ausgeblendet. Die Zahlen enden korrekt bei 80 und 3. Die Timeline behält alle elf Stationen und bewegt sich mit dem Vorwärtspfeil um eine Station (315 Pixel). Kein horizontaler Seitenüberlauf am Desktop oder bei 390 Pixeln. Mobile Darstellung und reduzierte Bewegung: normale Dokumentreihenfolge, beide Karten vollständig zugänglich, keine ausgeblendeten Inhalte. Ein während der Prüfung entdeckter mobiler Überlauf durch die Vollbild-Dekoration wurde korrigiert.

## Fester Kartenstapel ohne Dokument-Scroll

Browserprüfung auf Desktop (1440 × 1000): neun Karten vorhanden, Dokumenthöhe exakt 1000 Pixel, scrollY bleibt 0 und kein horizontaler Überlauf. Zehn aufeinanderfolgende Wheel-Ereignisse lösen genau einen Wechsel auf Karte 2 aus. Direkte Navigation durch Leistungen, Ablauf, Nachhaltigkeit, Stimmen, Fragen, Kontakt, Info und zurück zum Hero erfolgreich. Malfläche zeichnet weiterhin. Timeline-Pfeil verschiebt weiterhin um 310 Pixel. Das vollständige Geschichts-Lesefenster verteilt den Text auf sechs Seiten; Weiterblättern verschiebt den Leser horizontal um 742 Pixel. Vollständige Stationstexte sind ebenfalls erreichbar.

Mobile Prüfung (390 × 844): Dokumenthöhe exakt 844 Pixel, scrollY 0, kein seitlicher Seitenüberlauf; vertikale Wischgeste wechselt genau eine Karte. Direkte Kontaktseite unter reduzierter Bewegung: drei feste Karten, Dokumenthöhe exakt 720 Pixel bei 720 Pixel Viewport. Start-, Geschichts-, Leistungs-, Kontakt- und Info-Karten visuell geprüft. Syntaxprüfung, statische Seitenprüfung und Build erfolgreich. Der anfänglich überlaufende Statushinweis wurde auf eine feste, unsichtbare Accessibility-Ebene korrigiert.

## Drehbare Leistungskarten

Die drei Leistungsfelder auf der Startseite öffnen ihre vollständigen Leistungs- und FAQ-Texte in einer vergrösserten Karte mit 3D-Drehung. Inhalte aus den bisherigen Detailseiten sind als lokale Templates eingebunden. Die URL bleibt `/`. Geprüft bei 1440×1000 und 390×720: alle drei Karten öffnen/schliessen, Textseiten blättern, Rückseite erneut anklicken, X und Escape, kein Wechsel der Hauptsektion durch Scrollen im geöffneten Detail. Reduzierte Bewegung zeigt die Rückseite ohne Drehung. Der Nachhaltigkeitsbalken in dieser Sektion wurde entfernt.

## Vollständiges Leistungskarussell

Zwölf Karten decken die vorhandenen Leistungsinhalte ab. Karussell bei 1440×1000 mit drei sichtbaren Karten, bei 390×720 mit einer Karte und Vorschau auf die nächste geprüft. Pfeile, Mausziehen und echte Touch-Wischgesten verschieben horizontal; Ziehen öffnet keine Detailkarte. Alle zwölf Rückseiten mit Inhalt und Schliessen geprüft, URL bleibt `/`, kein vertikales Seitenscrollen. Texte der zusätzlichen Karten stammen aus den bestehenden Abschnitten von `leistungen/index.html`.

## Kartenrückkehr und neutrale Navigation

Die Rückdrehung verwendet keine getrennte Skalierung der X- und Y-Achse mehr. Die Vorderseite behält die echten Abmessungen und das Layout der Ausgangskarte. Bei 1440×1000 und 390×720 stimmen im letzten Animationsbild die Bounding-Boxes von Karte, Bild und Überschrift mit dem Original überein (Abweichung jeweils 0 px). Nach dem Schliessen: Original sichtbar, Dialog geschlossen, kein Fokusrahmen bei Mausbedienung. Tastaturfokus bleibt als neutraler, nach innen gesetzter Rahmen verfügbar. Die Sektionsnavigation verwendet neutrale Grautöne.

## Individuelle Bilder

Alle zwölf Karten referenzieren unterschiedliche WebP-Dateien und unterschiedliche SHA-256-Inhalte. Bei 1440×1000 und 390×720 alle Bilder erfolgreich dekodiert, neun Hauptsektionen vorhanden, kein vertikaler Seitenüberlauf. Bei allen zwölf Dateien vollständig transparente Pixel nachgewiesen; die Freistellung bleibt erhalten. Export auf maximal 960 px und WebP-Qualität 0.88 reduziert 30.233.222 Byte PNG-Ausgangsdaten auf 3.158.182 Byte (rund 90 %). Native erzeugte Originale verbleiben im Imagegen-Ausgabeverzeichnis; die fertigen Web-Assets sind im Repository gespeichert.

## Begrenzte Unschärfe statt Abdunklung

Die Leistungskarten verwenden einen transparenten Dialog-Backdrop. Nur der Inhalt der grossen Sektionskarte wird auf 6 px weichgezeichnet; der Kartencontainer schneidet die Unschärfe an seinen runden Rändern ab. Öffnen und Schliessen blenden den Filter über 600 ms ein bzw. aus. Geprüft bei 1440×1000 und 390×720: Logo/Header, Sektionsmenü und Detailkarte bleiben ohne Filter; Backdrop vollständig transparent; nach Schliessen Blur 0 px und kein Maus-Fokusrahmen. Der X-Button hat keinen Rahmen, Tastaturfokus bleibt neutral sichtbar.

## Dynamische Detailbreite und weicher Schatten

Die geöffneten Karten wählen anhand des gerenderten Textüberlaufs eine Breite zwischen 560 und 1120 px, begrenzt durch den verfügbaren Bildschirm. Bei langen Texten bleiben die Textseiten erreichbar. Geprüft bei 1440×1000 und 1440×800: kurze Leistungen 560 px, umfangreiche Leistungen bis 1120 px; bei 390×720 alle innerhalb des Viewports (366 px). Der zusätzliche Schatten wird über eine separate transparente Ebene in 650 ms ein- und ausgeblendet; Zwischenwerte beim Öffnen und Schliessen sowie vollständiges Schliessen geprüft.

## Kompakte Detailkarten ohne feste Schattenfläche

Desktop-Breite auf höchstens 33 % der grossen Sektionskarte begrenzt; für lesbare Mobilansichten wird die verfügbare Breite genutzt. Alle zwölf Texte redaktionell verdichtet, ohne Leistungsumfang, Materialien, Vorteile oder Voraussetzungen zu ändern. Geprüft bei 1440×1000, 1440×800 und 390×720: sämtliche Texte passen jeweils auf eine Textseite. Die separate `.service-shadow`-Fläche ist entfernt; nur die tatsächlich drehende Rückseite trägt einen weich überblendeten Schatten. Dialoghülle und Backdrop sind transparent und ohne eigenen Schatten. Animations-Zwischenbild visuell ohne stehenbleibenden Rahmen geprüft.
