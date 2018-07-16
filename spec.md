#Fejlesztői leírás

##Technológia
* Javascript
* HTML
* CSS

##Játéktér
* Egy div, ami magába foglalja a többi divet, amelyek display: inline beállításúak.
* Méretezés egy függvénnyel, ami lefut a megnyitáskor, és átméretezéskor.
* A négyzetek szélességét százalékosan adjuk meg.
* Egy legördülő menüből lehet kiválasztani a játéktér szélességét.
* A divek a tile osztályhoz tartozzanak.
* Az eledel: foodTile, a kígyó: snakeTile legyen, az üres csempe: emptyTile.

##A kígyó mozgása
* A new game gomb hatására a kígyó középen megjelenik.
* Azonnal jobbra indul a kígyó.
* Lépésenkénti ellenőrzés: a csempe osztályát vizsgáljuk. Ha snakeTile az osztály: game over. Ha food nő a kígyó.
Ha nincs olyan tile, ahova menne a fej: game over.
* Irányítás: keyDown eseményre változtatjuk az irányt.
* Óraütésre mindig elvégezzük az összes ellenőrzést egy metódusban.
* A kígyó testét egy tömbben tároljuk, és lépés esetén minden tömb elem az előző helyébe lép.

##Pontszám
* A points változóban tároljuk a megevett eledeleken alapuló, akutális pontszámot.
* Random jelenik meg egyszerre egy eledel.
* Ellenőrizni kell,hogy ne a kígyó testére generáljon.
* Ha a kígyó feje rálép az eledelre, akkor növeljük a pontokat, és átálítjuk az osztályokat.
* Az eledel elfogyasztása után, újat generálunk.