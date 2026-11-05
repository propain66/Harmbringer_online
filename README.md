# Harmbringer

Browser-Prototyp eines rundenbasierten Taktikspiels: Mai 1371, ein Lich erwacht im Hügelgrab am Wilseder Berg und zieht über eine Hex-Karte Norddeutschlands (echte Höhendaten) bis zum Brocken.

**Online spielen:** https://frozenenenen.github.io/Harmbringer_online/

## UI-Redesign im Browser testen

Die neue mittelalterliche Oberfläche liegt auf dem Branch `ui-redesign`. Ohne Download lässt sie sich über einen externen GitHub-Datei-Proxy öffnen:

**[Testversion starten (raw.githack.com)](https://raw.githack.com/propain66/Harmbringer_online/ui-redesign/index.html)**

Der Proxy kann vor dem ersten Aufruf einen Bestätigungsbildschirm anzeigen und neue Commits verzögert übernehmen. Dieser Link dient der Vorschau; GitHub Pages kann alternativ in den Repository-Einstellungen unter **Pages → Deploy from a branch → ui-redesign → /(root)** direkt den Entwicklungszweig veröffentlichen. Der `main`-Zweig bleibt dabei unverändert.

Neu im UI: düsterer Holz-/Eisenstil, Gebäuderaster mit ausgewählten Details und Verbesserungsmedaillons, Truppenkategorien mit noch nicht freigeschalteten Einheiten, platzbasiertes Rekrutieren, Relikt-/Artefaktübersicht und kompakte Fraktionswarnstufen. Spielwerte und Save-Format sind unverändert.

## Orte

19 größere Orte (Städte, Klöster, mythische Stätten) und 48 Dörfer dazwischen. Dörfer haben ein kleines Kampffeld mit zwei Höfen, 2–3 Verteidiger, wenig Beute und erhöhen die Bedrohung ihrer Fraktion nur um 10 % statt 25 %. Nach einem Sieg heilen die Überlebenden um 25 % ihrer Lebenspunkte; voll geheilt wird weiterhin im Hügelgrab.

## Design, Werkzeuge und Prototypen

| Pfad | Inhalt |
| --- | --- |
| `design/design_notes.md` | Design-Dokument: Mechaniken, Einheiten, Visualisierung, Kampagne, Weltkarte |
| `design/data/` | Spielwerte als CSV (Einheiten, Fähigkeiten, Gebäude, Wissen, Begegnungen, Paletten, Schadensmatrix) |
| `tools/` | Python-Werkzeuge: `gen_data.py` erzeugt CSVs und Tabellen im Design-Dokument, `sim.py` / `encounter_check.py` rechnen Balancing und Kampfdauer, `build_webmap.py` baut die Weltkarten-Daten |
| `prototypes/worldmap/` | Weltkarte im Browser (WebGL2): Gelände nur im Sichtbereich, Auflösung nach Zoom, weiche Bodentexturen. Online: `/prototypes/worldmap/` |
| `prototypes/einheitenbuch/` | Alle Einheiten mit Lesbarkeits-Prüfung (Graustufen, Unschärfe, Nacht, Token). Online: `/prototypes/einheitenbuch/` |

Die Weltkarte lädt ihre Daten per `fetch` und läuft deshalb nur über einen Webserver oder GitHub Pages, nicht per Doppelklick.

## Lokal starten

Repo herunterladen, entpacken, `index.html` doppelklicken. Der Ordner `data/` und die Datei `ui.css` müssen direkt neben `index.html` liegen. Three.js r160 wird beim Start von jsDelivr geladen.

Alternativ im Projektordner `python -m http.server 8000` ausführen (unter Windows auch `py -m http.server 8000`) und `http://localhost:8000` öffnen. Änderungen an der Oberfläche stehen in `ui.css`; nach dem Bearbeiten die Seite neu laden. Bei zwischengespeicherten Styles hilft `Strg + F5`.

## Steuerung

- W/A/S/D oder Pfeiltasten: Kamera bewegen · Q/E oder rechte Maustaste: drehen · Mausrad: Zoom
- Linksklick: Ort, Einheit oder Feld auswählen · F3: Debug-Overlay
- Im Kampf: Leertaste Zug beenden · R Rückzug · T Kanten anzeigen

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Das komplette Spiel (eine Datei, kein Build-Schritt) |
| `ui.css` | Oberfläche: lesbare Ressourcen, Sidebar, Einheitenkarten und Dialoge; ergänzt die Grundstile in `index.html` |
| `data/world_data.js` | Alle Spielwerte: Einheiten, Fraktionen, Orte, Wirtschaft, Bodentypen |
| `data/heightmap.js` | Höhendaten im UTM-Kampagnenraster (2017 × 1583 Hex-Felder à ~247 m, 16 Bit in Metern, Base64; Harz über 450 m aus Gipfelhöhen genähert), erzeugt von `tools/build_game_map.py` |
| `data/ground_textures.js` | Bodentexturen als Data-URIs (`tools/build_game_textures.py`) |
| `design/source/heightmap_wgs84_15s.png` | Quelle: alte Höhenkarte im Grad-Raster (1704 × 920) |
| `reference/floor_preview.png` | Erwartete Bodentyp-Verteilung |
| `PROMPT.md` | Spezifikation, nach der das Spiel gebaut wurde |
| `PAKET.md` | Beschreibung des ursprünglichen One-Shot-Pakets |

Spielstand wird im Browser gespeichert (`localStorage`, Schlüssel `harmbringer_save_v1`).
