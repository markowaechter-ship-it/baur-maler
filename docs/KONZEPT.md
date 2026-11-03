# Konzept & Design-Prompt: Baur, Winterthur

## Aufgabe und Ziel

Ein vollständiger Relaunch, der private Eigentümer, Renovierende und professionelle Liegenschaftsverantwortliche zu einer qualifizierten Anfrage führt. Primäre Handlung: Projekt beschreiben; sekundär: direkt anrufen. Die vorhandene Website liefert Betriebsfakten, keine gestalterische Vorlage.

## Leitidee

Drei Generationen stehen für persönlich weitergegebenes Handwerk. Das echte Team steht deshalb gross im ersten Sichtbereich. Eine digitale Farbskizze macht den nächsten Schritt erfahrbar: Besucher wählen eine Stimmung, die später im Beratungsgespräch konkretisiert wird. Die Skizze ist ausdrücklich keine Referenzarbeit.

## Argumentation und Belege

1. Persönliche Verlässlichkeit: Original-Teamfoto, 80 Jahre und drei Generationen.
2. Gestalterische Möglichkeiten: interaktive Farbskizze als kleiner, unverbindlicher Einstieg.
3. Passendes Leistungsspektrum: Malen, Tapezieren und Spritzwerk mit eigenen Zielseiten.
4. Planbarkeit: Beratung, Planung und Ausführung erklären den Weg zum Ergebnis.
5. Verantwortung: eigene Spalt- und Destillieranlagen als konkreter Betriebsfakt.
6. Entlastung: belegte Kundenstimme von Hanna Meier.
7. Kontakt: Projektanfrage oder Telefon, ohne Konto und ohne unnötige Pflichtangaben.

## Zielgruppen und Ansprache

Privatkunden brauchen eine verständliche Begleitung: Farbauswahl, abgestimmte Termine und sorgfältige Ausführung. Unternehmen und Verwaltungen brauchen einen geklärten Umfang und Koordination. Die Copy verspricht weder feste Reaktionszeiten noch unbelegte Preisvorteile. Offerten werden individuell abgeklärt.

## UI-Vorgaben

Galerieartige, ungleich grosse Bild- und Textflächen; grosszügiger Rahmen von 6vw. Das Teamfoto sitzt rechts neben einer kompakten Einleitung. Übergrosse, klare Sans-Serif-Typografie und ganze Farbflächen ersetzen dekorative Karten. Farbwelt: warmes Weiss #f4f3ed, Graphit #242e2a, tiefes Grün #344e40, Salbei #dce2d6 und Sand #e4dfd1. Flache, rechteckige Buttons. Keine extern geladenen Schriftarten.

Gewählte Skill-Richtung: `uneven-photographs`. Die ausgeloste Serifenschrift wurde wegen der ausdrücklich gewünschten Sans-Serif-Vorgabe ersetzt. Die Palette wurde an Naturtöne des Briefings angepasst. Da keine verifizierbaren Projektfotos existieren, wird das Original-Teamfoto verwendet; grafische Farbskizzen ersetzen keine Referenzfotos. Horizontale Drag-Reihen wurden für den einfachen dreistufigen Prozess in vollständig sichtbare Textspalten überführt. Der Kontakt erhält das ausdrücklich gewünschte kurze Formular.

Mobil: Navigation hinter beschriftetem Menü, Foto vor Einleitung, Farbauswahl mit grossen Zielen, Leistungen als Zeilen und Formulare einspaltig. Kein Text liegt über Bildern. Sticky Header enthält Telefon und Offerten-Link in der mobilen Navigation.

## Verbindliche Startseiten-Copy

H1: „Farbe, die bleibt. Handwerk, das zählt.“

Einleitung: „Wir machen aus Ihren Vorstellungen Räume zum Wohlfühlen. Persönlich beraten, präzise geplant und sauber umgesetzt.“

Primäre Aktion: „Ihr Projekt beginnt hier“. Leistungsüberschrift: „Für alles, was Farbe verdient.“ Ablauf: „Sie haben die Idee. Wir kümmern uns ums Handwerk.“ Umwelttechnik: „Verantwortung gehört zum Handwerk.“ Schluss: „Was möchten Sie verändern?“

Die vollständige, finale Copy steht direkt in den semantischen HTML-Dateien. Diese Dateien bilden zugleich die umsetzbaren Layout-Vorgaben.

## Seiten und SEO

| URL | Suchintention | Title |
| --- | --- | --- |
| / | Maler Winterthur | Maler Winterthur · 3 Generationen Handwerk – Baur |
| /malen-gipsen/ | Wohnung streichen, Malen und Gipsen Winterthur | Malen & Gipsen Winterthur · Baur – die Maler |
| /tapezieren/ | Tapezieren Winterthur | Tapezieren Winterthur · Baur – die Maler |
| /spritzwerk/ | Spritzwerk Winterthur | Spritzwerk Winterthur · Baur – die Maler |
| /nachhaltigkeit/ | Umwelttechnik, nachhaltiges Malerhandwerk | Nachhaltigkeit Winterthur · Baur – die Maler |
| /ueber-uns/ | Familienbetrieb, Team | Über uns Winterthur · Baur – die Maler |
| /kontakt/ | Kontakt, Offerte | Kontakt & Offerte · Baur Maler Winterthur |

Jede Seite enthält eine eigene Description, ein H1, lokale Kontaktdaten und eine direkte Anfrage. JSON-LD enthält verifizierte Kontaktdaten und Öffnungszeiten. Keine AggregateRating-Auszeichnung: Ein verifizierter aktueller Google-Score liegt nicht vor. Keine unbelegte „einmalig in Winterthur“-Superlative. Vorher-Nachher-Elemente erst nach Lieferung authentischer und freigegebener Bildpaare ergänzen.

## Performance und Erfolgsmessung

Keine Framework-Laufzeit, keine externen Fonts, keine Marketing-Skripte. Bilder lokal und komprimiert. Das Ladezeitziel von 1,5 Sekunden ist als Ziel zu prüfen, nicht als garantiertes Ergebnis. Core Web Vitals sind nach Veröffentlichung über Felddaten zu bewerten. Sinnvolle Geschäftsmessung: qualifizierte Anfragen, Anrufe und Anfragen pro Leistung. Tracking erst nach Festlegung eines passenden Datenschutzkonzepts ergänzen.

## Aktualisierte Seitenstruktur nach Kundenschema

Der freigegebene helle, zentrierte Header bleibt erhalten. Die Startseite folgt nun dem gelieferten Schema: Hero mit transparentem Team-PNG und Erfahrungsleiste; vier Leistungskacheln; vier Gründe für Baur; drei Kundenstimmen; zweispaltige FAQ mit aufklappbaren Antworten; abschliessendes Kontaktangebot; bestehender Footer. Die Erfahrungsleiste übernimmt die Vertrauensfunktion der im Schema vorgesehenen Partnerlogos, da keine belegten Partnerschaften vorliegen.

Die Leistungskacheln verwenden abstrakte Materialstudien aus CSS. Die Kundenstimme von Hanna Meier ist ein Originalzitat; die beiden weiteren Karten sind ausdrücklich als sinngemässe Zusammenfassungen gekennzeichnet. Die Inhaltsseiten bleiben über die Leistungskacheln erreichbar. Das Teamfoto wird mit natürlichem Seitenverhältnis und erhaltenem Alpha-Kanal geladen; der Scroll-Effekt verändert seine Proportionen nicht.

## Eigenständige Erfahrungssektion

„80 Jahre Erfahrung · 3 Generationen“ wurde aus dem Hero entfernt. Direkt danach folgt die dunkle Sektion „Von Hand zu Hand.“ mit grossen Zahlen, einmaliger Zählanimation und einem Zeitstrahl für 1937, 1976 und 2016. Der Zeitstrahl verlinkt die vollständige Geschichte. Ohne JavaScript oder bei reduzierter Bewegung bleiben die finalen Zahlen lesbar; die Animation wird nur beim ersten Eintritt in den sichtbaren Bereich gestartet.
