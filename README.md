# Spirit Divočiny Web

Vytvoř moderní, temný single-page web pro českou punk-rock / rock'n'roll kapelu "Spirit Divočiny". 

Design a vizuál:
- Tmavý režim (černé/antracitové pozadí, vysoký kontrast, bílý a světle šedý text, jemné růžovo-červené nebo neonové akcenty).
- Výrazná, agresivnější a moderní typografie. Velká čísla u jednotlivých sekcí (01, 02, 03...).
- Plně responzivní layout pro mobily i monitory.
- Hladké scrollování na sekce po kliknutí v menu.

Důležitá architektura dat:
- Všechna data o koncertech ulož do samostatného JSON souboru (např. `src/data/koncerty.json`).
- Všechny texty písní ulož do samostatného JSON souboru (např. `src/data/texty.json`).
- Zbytek aplikace nech tato data dynamicky načítat a vykreslovat.

Struktura stránek a sekcí:

1. Hlavička (Header):
   - Fixní/sticky navigace s logem "Spirit Divočiny" (vlevo) a odkazy: Kapela, Hudba, Koncerty, Texty, Kontakt.

2. Hero Sekce:
   - Hlavní nadpis "Spirit Divočiny", podnadpis "Pražskej rock’n’roll".
   - Slogan: "Rock’n’roll z nás dělá divočáky, a z Tebe taky, bráško!"
   - Tlačítko s plynulým posunem na "#koncerty".

3. Sekce 01 - O nás:
   - Nadpis "01 O nás" a bio kapely:
     "Rock’n’roll z nás dělá divočáky! Stejně jako patnáctka zpočátku nečeká, že ji nevinná ruka pod sukní může dostat až na porodní sál v Podolí, tak ani v tomhle případě nikdo netušil, jaká nádherná rocknrollová jízda se chystá po nenápadný konverzaci mezi Vojtou, ultimátním megasamcem vládnoucím super skills, jako třeba skládat hudbu a texty kadencí..., a druhak Matoušem, vlčákem hladovým upíchnout svoje šuplíkový nápady ve všehoschopným rockovým orchestru. Přizvali brášky Pavlíka, honosícím se tím neautentičtějším 'raz-dva-kurwa' zvoláním, cos' kdy heard, přičemž navíc umí aj líbezně začarovat basovou linkou, a (většinou oblečenýho) Adama, kterej do toho umí s fortelem a precizně třísknout!"

4. Sekce 02 - Hudba (Poslouchej):
   - Prezentace alba "Styl" (11 songů).
   - Tlačítka pro přehrání / odkazy na Spotify a YouTube.
   - Ukázkový přehrávač nebo seznam skladeb.

5. Sekce 03 - Koncerty:
   - Načítá data z `koncerty.json`.
   - Nadcházející koncerty zobrazené jako přehledné karty s datem, časem, místem, kapelami ("S kým") a tlačítkem na Facebook událost.
   - Pod nadcházejícími koncerty rozbalovací sekce (Accordion/Collapsible) pro "Proběhlé koncerty".

6. Sekce 04 - Texty písní:
   - Načítá data z `texty.json`.
   - Zobrazené jako elegantní rozbalovací harmonika (Accordion / details-summary).
   - Každá písnička má číslo, název a po rozkliknutí se zobrazí komplet text písně.
   - Písně: Styl, Svině, Lítat, Růže, Dezinformace, Sypej, Migranti...

7. Sekce 05 - Kontakt a sociální sítě:
   - Odkazy na sociální sítě (Facebook, Instagram, Spotify, YouTube).
   - Booking/kontakt e-mail a formulář.
   - Patička s copyrightem.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/46335c78-6971-5f7c-9759-47011815edf9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
