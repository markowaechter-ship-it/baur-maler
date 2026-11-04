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

## Interaktiver Maler-Hero

Eine auf den Hero begrenzte Canvas-Ebene nimmt Farbstreifen auf. Auf Desktop verwandelt sich der Mauszeiger über der freien Malfläche mit einer kurzen Skalierungsanimation in eine SVG-Malerrolle. Die Rolle folgt geglättet und zeichnet ausschliesslich hinter dem Inhalt. Fünf helle Farbtöne stehen rechts zur Auswahl; „Neu streichen“ leert die Fläche. Links und Bedienelemente behalten ihren normalen Zeiger. Beim Verlassen des Heros, Scrollen oder Fensterwechsel endet die Malinteraktion. Touch-Geräte behalten normales Scrollen; die Farbauswahl sitzt unten. Bei reduzierter Bewegung entfällt die verzögerte Zeigerbewegung. Es werden keine Malbewegungen gespeichert oder übertragen.

## Vollständige interaktive Timeline im Erfahrungsbereich

Der Erfahrungsbereich enthält nun alle elf Originalstationen: 1937, 1946, 1973, 1976, 1986, 1997, 2004, 2007, 2012, 2014 und 2016, jeweils mit dem vollständigen Originaltext. Die Porträts stehen über den Punkten. Ernst Baur sen. ist 1937/1946 zugeordnet, Ernst Baur jun. 1973/1986 und zusammen mit Therese dem Wechsel 1976; Andi und Mathias stehen für 1997, Mathias für 2004/2012, Andi für 2007 und Mathias/Britta für 2014/2016. Die Bilder zeigen die Personen und werden nicht als historische Aufnahmen aus dem jeweiligen Ereignisjahr ausgegeben.

Die horizontale Zeitleiste funktioniert mit Pfeilbuttons, Scrollen, Tastatur und Wischen. Beim Eintritt einer Station in den Sichtbereich erscheinen die Porträts sanft. Die Verbindungslinie wächst mit dem Durchblättern und behält bereits erreichten Fortschritt. Bei reduzierter Bewegung erscheinen Bilder ohne Übergang.

## Porträtauswahl nach Kundenkorrektur

Aus der interaktiven Timeline entfernt: Ernst Baur sen. bei 1946, Ernst Baur jun. bei 1976 und 1986, Mathias Baur bei 2004 und 2012 sowie beide Porträts bei 2014. Therese bleibt bei 1976. Alle übrigen acht Porträtverwendungen werden kreisrund dargestellt. Die Jahresstationen, vollständigen Texte und ihre Ausrichtung auf der Linie bleiben erhalten.

## Grösserer Hero mit überlagerter Teamaufnahme

Die Hauptüberschrift ist deutlich grösser und fett gesetzt. Die transparente Teamaufnahme wächst auf bis zu 940 Pixel Breite und ragt bewusst leicht vor die untere Textzeile, wie ausdrücklich gewünscht. Beim Scrollen bewegt sich die Aufnahme nach oben und vergrössert sich moderat, während die Überschrift leicht in Gegenrichtung wandert. Die Begleittexte und Aktionen folgen mit kompakterem Abstand mittig unter dem Bild. Die vorhandene Malfläche bleibt hinter dem gesamten Inhalt. Bei reduzierter Bewegung bleiben die Ebenen statisch.

## Hero: Bild am unteren Rand, weisse Texte darüber

Das Teamfoto ist nun absolut am unteren Rand des Heros verankert und nochmals vergrössert. Die Personen ragen sichtbar in die grosse Überschrift hinein. Eine eigene Vordergrundebene enthält Bildunterschrift, Begleittext und Aktionen über dem unteren Fotobereich, mit weissen Texten und einem zurückhaltenden dunklen Verlauf für die Lesbarkeit. Beim Scrollen vergrössert sich die Teamaufnahme von ihrer unteren Kante aus, sodass diese bündig bleibt. Mobil steht die Farbpalette oberhalb der Komposition, um keine Gesichter oder Aktionen zu verdecken.

## Richtungsgesteuerter Cursor-Pinsel

Die Malerrolle wurde durch einen Pinsel mit Holzgriff, Metallzwinge, Borsten und farbiger Spitze ersetzt. Die Borstenspitze bleibt am Malpunkt; die Orientierung folgt der Bewegungsrichtung auf dem kürzesten Winkelweg. Eine gedämpfte Federbewegung sorgt für leichtes Nachschwingen. Die Bildspur wird aus gedrehten Borstenstempeln aufgebaut. Bewegungsgeschwindigkeit steuert Dichte und Stärke kleiner Farbspritzer. Diese fliegen auf einer separaten Canvas-Ebene und hinterlassen beim Landen Punkte auf der Hintergrundfläche. Maximal 65 Tropfen werden gleichzeitig animiert; im Stillstand endet der Renderloop. Farbauswahl, Löschen und Begrenzung auf den Hero bleiben erhalten. Bei reduzierter Bewegung gibt es direkte Orientierung und statische Farbpunkte statt fliegender Tropfen.

## Fliessende Farbspur statt sichtbarem Pinsel

Der Werkzeug-Cursor wurde durch einen kleinen Farbtropfen ersetzt. Die Hintergrundspur besteht aus geglätteten Kurven mit geschwindigkeitsabhängiger Breite: langsame Bewegung ergibt feine Linien, schnelle Schwünge breite Bänder. Die Farbe erhält zurückhaltende Borstenlinien und Lichtkanten; frische Abschnitte glänzen kurz und werden anschliessend matter. Wenige Tropfen akzentuieren schnellere Gesten. Maximal 32 fliegende Tropfen und 48 kurze Glanzsegmente werden gleichzeitig verarbeitet; im Stillstand endet die Animation nach dem Abklingen. Die Farbauswahl, das vollständige Leeren, die Begrenzung auf den Hero und die Vordergrundebene für Inhalt und Personen bleiben erhalten.

## Geschichte ausschliesslich auf der Startseite

Auf Kundenwunsch wurde die eigenständige Geschichtsseite entfernt, einschliesslich ihrer identischen Kopie unter `/ueber-uns/`, des Menülinks und des zusätzlichen Verweises unter der Timeline. Die vollständige interaktive Chronik samt Bildern bleibt auf der Startseite erhalten. Beide entfernten Routen wurden aus Build, Seitenprüfung und Sitemap gestrichen.

## Zwei gestapelte Ansichten nach Video-Referenz

Die Startseite beginnt nun auf grossen Bildschirmen mit einer am Viewport gehaltenen Bühne und zwei Karten. Die erste Karte enthält den bestehenden Hero mit Teamfoto, Malfläche, Farbwahl und Aktionen. Beim nativen Scrollen hebt und kippt sie sich nach oben; die zweite Karte mit animierten Erfahrungszahlen und vollständiger Timeline wird sichtbar und vergrössert sich auf ihre Endposition. Seitensteuerung links und Fortschrittsanzeige rechts orientieren sich am Aufbau der gelieferten Aufnahme, mit Baur-Farben und Baur-Inhalten.

Es entstehen keine neuen separaten HTML-Seiten: Beide Ansichten gehören weiterhin zur Startseite. Längere Geschichtsinhalte sind innerhalb der zweiten Karte vertikal scrollbar; die bestehende Timeline bleibt horizontal mit Pfeilen, Tastatur und Wischen bedienbar. Die Zahlanimation startet erst bei aktivierter zweiter Ansicht, die Porträts blenden bei Sichtbarkeit ein. Die übrigen Leistungen und Abschnitte folgen unterhalb der Bühne. Mobil, bei geringer Fensterhöhe, ohne JavaScript und mit reduzierter Bewegung werden die beiden Bereiche vollständig im normalen Dokumentfluss dargestellt. Das Mausrad wird nicht abgefangen; kein Scroll-Lock und keine zusätzlichen Bibliotheken oder CDN-Abhängigkeiten.

## Feste Kartenpräsentation ohne vertikales Seitenscrollen

Die bisherige lange Scroll-Seite wurde auf ausdrücklichen Kundenwunsch durch eine feste Präsentation ersetzt. Die Startseite enthält neun Karten: Start, Geschichte, Leistungen, Ablauf, Nachhaltigkeit, Stimmen, Fragen, Kontakt und Info. Das Dokument bleibt genau eine Viewport-Höhe hoch. Mausrad und vertikale Wischgeste lösen jeweils einen Kartenwechsel aus; ein einzelner Trackpad-Impuls kann durch sein Nachlaufen keine Karten überspringen. Pfeilnavigation, direkte Sektionswahl und Tastatur (Auf/Ab, Bild auf/ab, Leertaste, Pos1/Ende) ergänzen die Bedienung. Die horizontale Timeline und mobile Inhaltsreihen bleiben unabhängig seitlich bedienbar.

Das Kontaktformular ist jetzt direkt auf der Kontaktkarte der Startseite vorhanden. Längere Inhalte und vollständige Timeline-Texte können in einem Lesefenster in horizontalen Textseiten gelesen werden. FAQ-Antworten öffnen dieses Fenster, falls sie die Karte überfüllen würden. Es wird dabei kein vertikales Seitenscrollen eingeführt. Die Detailseiten werden ebenfalls aus ihren bestehenden Abschnitten in feste Karten umgewandelt; lokale Sprunglinks wechseln zur passenden Karte. Ohne JavaScript bleiben die ursprünglichen Inhalte im normalen Dokumentfluss zugänglich. Bei reduzierter Bewegung erfolgt der Kartenwechsel sofort ohne Kippanimation.
