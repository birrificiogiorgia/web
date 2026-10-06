/* =====================================================================
   DATI DEL BIRRIFICIO E DEL MENÙ
   Questo è l'unico file da modificare per cambiare birre, piatti e prezzi.
   Viene usato sia dalla home (index.html) sia dal menù (menu.html).
   ===================================================================== */

const CONTATTI = {
  telefono: "+393701012155",
  telefonoVisibile: "370 101 2155",
  whatsapp: "393701012155",
  instagram: "https://www.instagram.com/birrificio.giorgia/",
  tiktok: "https://tiktok.com/@birrificiogiorgia",
  facebook: "https://www.facebook.com/pizzeria.giorgia/",
  maps: "https://www.google.com/maps/search/?api=1&query=Birrificio+Giorgia+Ariano+Irpino"
};

/* BIRRE
   beer  = colore della birra nel bicchiere disegnato
   prices vuoto [] = mostra "chiedi al banco"
   pair  = pizze consigliate in abbinamento */
const BEERS = [
  { name:"Marilyn", style:"Helles, bassa fermentazione", abv:"4,8", beer:"#EDB935", a:[1],
    text:"Bionda di facile bevuta, gusto delicato con un amaro leggero. Quella che va bene con tutto.",
    short:"La bionda per ogni occasione.", pair:"Margherita, Capricciosa, fritti",
    prices:[["Piccola","3,00"],["Media","4,00"],["Grande","5,00"],["Boccale da litro","8,00"],["Caraffa","12,00"]] },
  { name:"Margot", style:"Blanche belga, alta fermentazione", abv:"4,5", beer:"#F1DA8C", a:[1],
    text:"Blanche in stile belga, speziata con coriandolo e buccia d'arancia amara. Il 30% di frumento e un sistema innovativo di utilizzo delle spezie la rendono fresca e dissetante.",
    short:"Speziata e dissetante.", pair:"Alici e limone, Valtellina, Mediterranea",
    prices:[["Piccola","4,00"],["Media","5,00"],["Grande","6,00"],["Boccale da litro","11,00"],["Caraffa","15,50"]] },
  { name:"Hirpus", style:"Weizenbock, alta fermentazione", abv:"6,8", beer:"#D9922E", a:[1],
    text:"Weizenbock con il 70% di frumento e una gradazione moderatamente elevata, prodotta seguendo l'antica ricetta. Profumata e gustosa, resta fresca e beverina; lasciata stemperare nel bicchiere sviluppa note speziate avvolgenti.",
    short:"Profumata, piena, beverina.", pair:"Patate lesse, Speck e noci, Gustosa",
    prices:[["Piccola","5,00"],["Media","6,00"],["Grande","7,00"],["Boccale da litro","12,00"],["Caraffa","18,00"]] },
  { name:"Jessica", style:"Bock Dunkel, alta fermentazione", abv:"6,5", beer:"#8A3B14", a:[1],
    text:"Ambrata, ricca e maltata, bilanciata da un tocco di luppolo. Perfetta con le pizze più saporite.",
    short:"Ambrata, rotonda, maltata.", pair:"Ai porcini, Montanara, Dolce e Salato",
    prices:[["Piccola","4,00"],["Media","5,00"],["Grande","6,00"],["Boccale da litro","11,00"],["Caraffa","15,50"]] },
  { name:"Genesis", style:"American IPA, alta fermentazione", abv:"6,5", beer:"#D98A1F", a:[1],
    text:"Carattere deciso e profilo aromatico intenso, grazie a una luppolatura abbondante.",
    short:"Aromatica, intensa e decisa.", pair:"Porchetta, Esplosiva, Messicana",
    prices:[["Piccola","5,00"],["Media","6,00"],["Grande","7,00"],["Boccale da litro","12,00"],["Caraffa","18,00"]] }
];

/* ==========================================================
   MENÙ: ogni voce è [nome, descrizione, prezzo, opzioni]
   opzioni:
     a:[1,7]        allergeni presenti (numeri della tabella ALLERGENI qui sotto)
     nuovo:1        mostra l'etichetta "Novità"
     surgelato:1    mostra l'etichetta "surgelato"
     codice:"S01"   codice del piatto
   ========================================================== */
const MENU = [
 { id:"bevande", title:"Bevande", items:[
  ["Acqua naturale o frizzante", "bottiglia grande", "2,00", {a:[]}],
  ["Acqua naturale o frizzante", "bottiglia piccola", "1,50", {a:[]}],
  ["Coca Cola", "bottiglia da litro", "4,00", {a:[]}],
  ["Coca Cola", "bottiglia 33 cl", "3,00", {a:[]}],
  ["Coca Cola Zero", "", "3,00", {a:[]}],
  ["Fanta", "in barattolo", "3,00", {a:[]}],
  ["Tè", "in barattolo, pesca o limone", "3,00", {a:[]}],
  ["Vino rosso", "bottiglia", "12,00 / 20,00", {a:[12]}],
  ["Vino bianco", "bottiglia", "12,00", {a:[12]}],
  ["Calice di vino", "", "4,00 / 7,00", {a:[12]}],
  ["Spumante", "bottiglia", "14,00", {a:[12]}],
  ["Flûte di spumante", "", "2,00", {a:[12]}],
  ["Amari", "", "3,00 / 5,00", {a:[]}],
  ["Grappe", "a partire da", "4,00", {a:[]}],
  ["Caffè o decaffeinato", "", "1,50", {a:[]}],
  ["Caffè corretto", "", "2,00", {a:[]}] ]},
 { id:"bruschettone", title:"Bruschettone", items:[
  ["Semplice", "pomodorini, olio, origano e mozzarella", "5,00", {a:[1,7]}],
  ["Sorrentina", "pomodorini, rucola, grana e mozzarella", "6,50", {a:[1,3,7]}],
  ["Piccante", "mozzarella e salame piccante", "7,00", {a:[1,7]}],
  ["Verdure", "mozzarella e verdure fritte o grigliate", "7,00", {a:[1,7]}],
  ["Cotto", "mozzarella e prosciutto cotto", "7,00", {a:[1,7]}],
  ["Porchetta", "mozzarella, porchetta e noci", "8,00", {a:[1,7,8]}] ]},
 { id:"fritti", title:"Fritti", items:[
  ["Patatine fritte", "", "5,00", {surgelato:1, a:[]}],
  ["Patatine fritte speziate", "", "6,00", {surgelato:1, a:[]}],
  ["Crocchè di patate", "5 pezzi", "5,00", {surgelato:1, a:[1,3,7]}],
  ["Fritto misto", "10 pezzi, per 2 persone: crocchè di patate, calzoncelli, olive ascolane, arancini, alette di pollo, crocchè di pollo", "12,00", {surgelato:1, a:[1,3,7,9]}],
  ["Vassoio di patatine medio", "", "7,50", {surgelato:1, a:[]}],
  ["Vassoio di patatine grande", "", "10,00", {surgelato:1, a:[]}],
  ["Vassoio di patatine misto", "", "12,00", {surgelato:1, a:[1,3,7]}],
  ["Hamburger e patatine", "", "6,50", {surgelato:1, a:[1]}],
  ["Cotoletta e patatine", "", "6,50", {surgelato:1, a:[1,3]}] ]},
 { id:"antipasti", title:"Antipasti", items:[
  ["Italiano", "prosciutto, capicollo e mozzarella", "8,00", {a:[7]}],
  ["Tradizionale", "prosciutto, capicollo, bresaola, salame dolce, speck e mozzarella", "15,00", {a:[7]}],
  ["Tagliere centrale", "misto di affettati, per 3 persone", "25,00", {a:[]}] ]},
 { id:"schiacciate", title:"Schiacciate", items:[
  ["Olio, sale e origano", "", "3,00", {codice:"S01", a:[1]}],
  ["Olio, sale e rosmarino", "", "3,00", {codice:"S02", a:[1]}],
  ["Margherita", "olio, pomodorini, mozzarella e origano", "4,50", {codice:"S03", a:[1,7]}],
  ["Crudo e rucola", "olio, pomodorini, mozzarella, rucola, crudo e grana", "7,00", {codice:"S04", a:[1,3,7]}],
  ["Bresaola e rucola", "olio, pomodorini, mozzarella, rucola, bresaola e grana", "8,00", {codice:"S05", a:[1,3,7]}],
  ["Verdure grigliate", "olio e verdure grigliate di stagione", "6,00", {codice:"S06", a:[1]}],
  ["Verdure fritte", "olio e verdure fritte di stagione", "6,00", {codice:"S07", a:[1]}],
  ["Insalatona", "olio, insalata, cotto, olive, mozzarella e mais", "8,50", {codice:"S08", a:[1,7]}] ]},
 { id:"fagotti", title:"Fagotti", note:"Calzone rettangolare.", items:[
  ["Cotto", "pomodoro, mozzarella e prosciutto cotto", "8,00", {codice:"F01", a:[1,7]}],
  ["Verdure", "pomodoro, mozzarella e verdure fritte di stagione", "8,00", {codice:"F02", a:[1,7]}],
  ["Broccoli e salsiccia", "mozzarella, broccoli e salsiccia", "9,00", {codice:"F03", a:[1,7]}],
  ["Baguette", "su letto di rucola, grana e crudo, ripiena di pomodoro, mozzarella e prosciutto cotto", "11,00", {codice:"F04", a:[1,3,7]}] ]},
 { id:"focacce", title:"Focacce ripiene", note:"A pallone.", items:[
  ["Cotto", "pomodoro, mozzarella e prosciutto cotto", "10,50", {codice:"FC01", a:[1,7]}],
  ["Broccoli e salsiccia", "mozzarella, broccoli e salsiccia", "11,50", {codice:"FC02", a:[1,7]}],
  ["Verdure", "pomodoro, mozzarella e verdure fritte", "10,50", {codice:"FC03", a:[1,7]}] ]},
 { id:"panuozzi", title:"Panuozzi", items:[
  ["Crudo", "bocconcino di mozzarella, crudo, pomodori, insalata", "12,00", {codice:"PZ1", a:[1,7]}],
  ["Salsiccia e friarielli", "mozzarella in forno, salsiccia e friarielli", "12,00", {codice:"PZ2", a:[1,7]}],
  ["Ricco", "mozzarella in forno, verdure fritte, salsiccia e friarielli", "13,00", {codice:"PZ3", a:[1,7]}],
  ["Wurstel e patatine", "mozzarella in forno, wurstel, patatine", "11,00", {codice:"PZ4", a:[1,7]}],
  ["Bresaola", "bocconcino di mozzarella, bresaola, rucola, pomodoro, grana", "14,00", {codice:"PZ5", a:[1,3,7]}] ]},
 { id:"autore", title:"La tua pizza d'autore", note:"Crea la tua pizza unica: scegli fino a 2 gusti e la forma che preferisci. 13,00 €", special:"autore", items:[
  ["Pomodoro, mozzarella e prosciutto cotto", "", "", {codice:"G1", a:[1,7]}],
  ["Pomodoro, mozzarella e verdure fritte", "", "", {codice:"G2", a:[1,7]}],
  ["Pomodoro, mozzarella e wurstel", "", "", {codice:"G3", a:[1,7]}],
  ["Pomodoro, mozzarella e salame piccante", "", "", {codice:"G4", a:[1,7]}],
  ["Pomodoro, mozzarella e salame dolce", "", "", {codice:"G5", a:[1,7]}],
  ["Mozzarella, panna, prosciutto cotto e mais", "", "", {codice:"G6", a:[1,7]}],
  ["Mozzarella, salsiccia e friarielli", "", "", {codice:"G7", a:[1,7]}],
  ["4 formaggi", "mozzarella, affumicata, gorgonzola e grana", "", {codice:"G8", a:[1,3,7]}],
  ["Mozzarella e verdure grigliate", "", "", {codice:"G9", a:[1,7]}],
  ["Mozzarella, rucola, grana, pomodorini, crudo o bresaola", "solo all'esterno", "", {codice:"G10", a:[1,3,7]}] ]},
 { id:"rosse", title:"Pizze rosse", items:[
  ["Marinara", "pomodoro, aglio, origano e olio", "4,00", {a:[1]}],
  ["Margherita", "pomodoro e mozzarella", "5,00", {a:[1,7]}],
  ["Margherita DOC", "pomodoro, mozzarella di bufala", "7,00", {a:[1,7]}],
  ["Bufalotta", "pomodoro, mozzarella di bufala e pomodorini", "7,50", {a:[1,7]}],
  ["La Golosa", "pomodoro, mozzarella, pancetta e pomodorini", "7,50", {a:[1,7]}],
  ["Napoli", "pomodoro, mozzarella e alici", "6,00", {a:[1,4,7]}],
  ["Romana", "pomodoro, mozzarella, olive, alici e capperi", "6,50", {a:[1,4,7]}],
  ["Mortadella", "pomodoro, mozzarella, mortadella e pistacchi", "8,00", {a:[1,7,8]}],
  ["Pomodorini", "pomodoro, mozzarella, pomodorini, prezzemolo e grana, tutto in forno", "7,00", {a:[1,3,7]}],
  ["Diavola", "pomodoro, mozzarella, salame piccante", "7,00", {a:[1,7]}],
  ["Salsiccia", "pomodoro, mozzarella e salsiccia", "7,50", {a:[1,7]}],
  ["Wurstel", "pomodoro, mozzarella e wurstel", "6,50", {a:[1,7]}],
  ["Prosciutto cotto", "pomodoro, mozzarella e prosciutto cotto", "7,00", {a:[1,7]}],
  ["Funghi", "pomodoro, mozzarella e funghi champignon", "6,00", {a:[1,7]}],
  ["Tirolese", "pomodoro, mozzarella e speck", "7,00", {a:[1,7]}],
  ["Crudona", "pomodoro, mozzarella e prosciutto crudo", "7,50", {a:[1,7]}],
  ["Cotto e funghi", "pomodoro, mozzarella, prosciutto cotto e funghi", "7,50", {a:[1,7]}],
  ["4 Stagioni", "pomodoro, mozzarella, prosciutto cotto, funghi, salsiccia fresca e carciofi", "8,00", {a:[1,7]}],
  ["Capricciosa", "pomodoro, mozzarella, prosciutto cotto, funghi, olive e carciofi", "7,50", {a:[1,7]}],
  ["Tedesca", "pomodoro, mozzarella, wurstel e patatine", "7,50", {a:[1,7]}],
  ["Viennese", "pomodoro, mozzarella, wurstel e salame piccante", "7,50", {a:[1,7]}],
  ["Bomba", "pomodoro, mozzarella, funghi, salame piccante, cotto, salsiccia fresca e olive", "10,00", {a:[1,7]}],
  ["Ortolana", "pomodoro, mozzarella e verdure fritte di stagione", "6,50", {a:[1,7]}],
  ["Tonno e cipolla", "pomodoro, mozzarella, tonno e cipolla", "6,50", {a:[1,4,7]}],
  ["Margherita con patatine", "pomodoro, mozzarella e patatine", "6,50", {a:[1,7]}],
  ["Porchetta", "pomodoro, mozzarella, porchetta e noci", "8,00", {a:[1,7,8]}],
  ["Porchetta e mais", "pomodoro, mozzarella, porchetta e mais", "8,00", {a:[1,7]}],
  ["Kebab", "pomodoro, mozzarella e kebab", "7,00", {a:[1,6,7]}],
  ["Messicana", "pomodoro, mozzarella, salsiccia, fagioli, aglio, prezzemolo e peperoncino", "9,00", {a:[1,7]}],
  ["Sorrentina con crudo", "pomodoro, mozzarella, crudo, rucola, grana e pomodorini", "8,50", {a:[1,3,7]}],
  ["Boscaiola", "pomodoro, mozzarella, salsiccia e funghi", "8,00", {a:[1,7]}],
  ["Alici e limone", "pomodoro, mozzarella, alici, pomodorini, olive e limone", "8,00", {a:[1,4,7]}],
  ["Profumata", "pomodoro, mozzarella, gorgonzola, funghi e cipolla", "9,00", {a:[1,7]}],
  ["Montanara", "pomodoro, mozzarella, speck, porcini e olio al tartufo", "11,00", {a:[1,7]}],
  ["Esplosiva", "pomodoro, mozzarella, gorgonzola, salame piccante, peperoni, cipolla e fagioli", "10,00", {a:[1,7]}],
  ["Carrettiera", "pomodoro, mozzarella, pancetta, tonno e porcini", "10,00", {a:[1,4,7]}],
  ["Mediterranea", "pomodoro, mozzarella, tonno, capperi, cipolla, acciughe e olive", "9,00", {a:[1,4,7]}],
  ["Italiana", "pomodoro, mozzarella, zucchine, pomodorini e porcini", "9,00", {a:[1,7]}],
  ["Roma piccante", "pomodoro, mozzarella, stracciatella, origano, olive taggiasche, capperi, acciughe, pomodorini, peperoncino", "13,00", {a:[1,4,7]}],
  ["Capicollo", "pomodoro, mozzarella, capicollo, stracciatella, pomodori secchi, pistacchi e basilico", "12,00", {a:[1,7,8,12]}] ]},
 { id:"bianche", title:"Pizze bianche", items:[
  ["Rucola e grana", "mozzarella, rucola e grana", "6,00", {a:[1,3,7]}],
  ["Sorrentina", "mozzarella, rucola, grana e pomodorini", "6,50", {a:[1,3,7]}],
  ["Giorgia", "mozzarella, rucola, grana, bresaola, pomodorini, al centro bufala", "10,00", {a:[1,3,7]}],
  ["Vegetariana", "mozzarella e verdure grigliate", "6,50", {a:[1,7]}],
  ["Fumé", "mozzarella, provola affumicata e speck", "7,50", {a:[1,7]}],
  ["Rosé", "mozzarella, gocce di pomodoro, panna e prosciutto cotto", "7,00", {a:[1,7]}],
  ["4 Formaggi", "mozzarella, emmenthal, gorgonzola, grana, affumicata", "7,80", {a:[1,3,7]}],
  ["Ai porcini", "mozzarella, funghi porcini e grana", "8,50", {a:[1,3,7]}],
  ["Prataiola", "mozzarella, funghi porcini, salsiccia fresca e grana", "9,50", {a:[1,3,7]}],
  ["Broccoli e salsiccia", "mozzarella, broccoli e salsiccia fresca", "8,00", {a:[1,7]}],
  ["Caprese", "mozzarella, pomodori, bocconcini di mozzarella", "6,50", {a:[1,7]}],
  ["Sorrentina con crudo", "mozzarella, crudo, rucola, grana e pomodorini", "8,00", {a:[1,3,7]}],
  ["Marilyn", "mozzarella, panna, prosciutto cotto e mais", "7,00", {a:[1,7]}],
  ["Patate lesse", "mozzarella, patate, salsiccia fresca e olive", "8,00", {a:[1,7]}],
  ["Pesto", "mozzarella, pesto, pancetta, funghi e pomodorini", "8,50", {a:[1,7,8]}],
  ["Radicchio", "mozzarella, radicchio, pomodorini, pancetta e aceto balsamico", "8,50", {a:[1,7,12]}],
  ["Provolone", "mozzarella, provolone e salsiccia", "8,00", {a:[1,7]}],
  ["Zucca", "mozzarella, zucca, pancetta, noci e pomodorini", "8,00", {a:[1,7,8]}],
  ["Patate lesse e limone", "mozzarella, patate lesse, cotto, salsiccia, grana e limone", "9,00", {a:[1,3,7]}],
  ["Asparagi", "mozzarella, asparagi, salsiccia e grana", "8,00", {a:[1,3,7]}],
  ["Speck e pistacchio", "mozzarella, panna, grana, speck e pistacchio", "9,00", {a:[1,3,7,8]}],
  ["Speck e noci", "mozzarella, gorgonzola, parmigiano, provola affumicata, speck e noci", "10,00", {a:[1,7,8]}],
  ["Sfiziosa", "mozzarella, carciofi, provola affumicata e provolone", "8,00", {a:[1,7]}],
  ["Raffinata", "mozzarella, zucca, parmigiano, pancetta e aceto balsamico", "8,50", {a:[1,7,12]}],
  ["Dolce e salato", "mozzarella, parmigiano, carciofi, pancetta, pistacchio e rucola", "8,50", {a:[1,7,8]}],
  ["Gustosa", "mozzarella, patate lesse, porchetta e provola affumicata", "9,00", {a:[1,7]}],
  ["Sublime", "mozzarella, provola affumicata, porcini e mortadella", "10,00", {a:[1,7]}],
  ["Pera", "mozzarella, gorgonzola, pera e noci", "12,00", {a:[1,7,8]}],
  ["Valtellina", "mozzarella, stracciatella, bresaola, rucola, parmigiano e limone", "12,00", {nuovo:1, a:[1,7]}],
  ["Cicoli e limone", "mozzarella, cicoli napoletani, pepe, limone, ricotta e/o stracciatella", "9,00", {nuovo:1, a:[1,7]}] ]},
 { id:"pinse", title:"Pinse romane", items:[
  ["Roma piccante", "pomodoro, mozzarella, stracciatella, origano, olive taggiasche, capperi, acciughe, pomodorini, peperoncino", "13,00", {a:[1,4,7]}],
  ["Delicata", "mozzarella, stracciatella, prosciutto crudo", "12,00", {a:[1,7]}],
  ["Rughetta e crudo", "pomodoro, mozzarella, grana, crudo e rucola", "10,50", {a:[1,3,7]}],
  ["Bufalina", "mozzarella di bufala, pomodorini e basilico", "8,00", {a:[1,7]}],
  ["Mediterranea", "pomodoro, mozzarella di bufala, acciughe, capperi e prezzemolo", "10,50", {a:[1,4,7]}],
  ["Mortadella", "mozzarella, mortadella, crema di pistacchi e pomodori secchi", "9,00", {a:[1,7,8,12]}],
  ["Contadina", "mozzarella, patate lesse, broccoli, peperoni, olive taggiasche e prezzemolo", "10,50", {a:[1,7]}] ]},
 { id:"calzoni", title:"Calzoni e mezzo metro", items:[
  ["Calzone classico", "pomodoro, prosciutto cotto e mozzarella", "8,00", {a:[1,7]}],
  ["Calzone cotto e funghi", "pomodoro, mozzarella, prosciutto cotto e funghi", "8,50", {a:[1,7]}],
  ["Calzone salsiccia e porcini", "pomodoro, mozzarella, salsiccia fresca e funghi porcini", "9,50", {a:[1,7]}],
  ["Calzone salame piccante", "pomodoro, mozzarella, salame piccante", "8,00", {a:[1,7]}],
  ["Mezzo metro margherita", "", "18,00", {a:[1,7]}],
  ["Mezzo metro misto", "", "25,00", {a:[1,7]}] ]},
 { id:"dolci", title:"Dolci e gelati", items:[
  ["Tartufo", "classico, bianco o nocciola", "5,00", {a:[3,6,7,8]}],
  ["Semifreddo al torroncino", "", "5,00", {a:[3,7,8]}],
  ["Coppa spagnola o coppa caffè", "", "6,00", {a:[3,7]}],
  ["Croccante all'amarena", "", "5,00", {a:[1,3,7,8]}],
  ["Flûte al limoncello", "", "6,00", {a:[3,7]}],
  ["Sorbetto al mandarino", "", "5,00", {a:[]}],
  ["Sorbetto al limone", "", "5,00", {a:[]}],
  ["Profiterol", "", "4,00", {a:[1,3,7]}],
  ["Tiramisù", "", "4,00", {a:[1,3,7]}],
  ["Tiramisù senza glutine e senza lattosio", "", "6,00", {a:[3,7]}],
  ["Pupazzetto", "", "4,00", {a:[3,6,7]}] ]}
];


/* ALLERGENI – Reg. UE 1169/2011, Allegato II (numerazione ufficiale) */
const ALLERGENI = {
  1:"Cereali contenenti glutine", 2:"Crostacei", 3:"Uova", 4:"Pesce", 5:"Arachidi",
  6:"Soia", 7:"Latte", 8:"Frutta a guscio", 9:"Sedano", 10:"Senape",
  11:"Semi di sesamo", 12:"Anidride solforosa e solfiti", 13:"Lupini", 14:"Molluschi"
};

/* Nomi brevi mostrati accanto ai piatti */
const ALLERGENI_BREVI = {
  1:"Glutine", 2:"Crostacei", 3:"Uova", 4:"Pesce", 5:"Arachidi", 6:"Soia", 7:"Latte",
  8:"Frutta a guscio", 9:"Sedano", 10:"Senape", 11:"Sesamo", 12:"Solfiti", 13:"Lupini", 14:"Molluschi"
};

const SHAPES = ["Cuoppo","Cannolo","Cornicione","Stella","Quadrata","Bucata","Girandola","Calzone verticale"];


/* ---------- funzioni di servizio, non serve modificarle ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// Bicchiere a tulipano disegnato in SVG, colorato con il colore della birra
function glassSVG(color, id, bubbles = true) {
  const b = bubbles ? Array.from({length: 7}, (_, i) => {
    const x = 70 + (i * 37) % 60, d = (2.4 + (i % 3) * 0.9).toFixed(1), del = (i * 0.55).toFixed(2), r = 1.6 + (i % 3) * 0.7;
    return `<circle class="bub" cx="${x}" cy="228" r="${r}" style="animation-duration:${d}s;animation-delay:-${del}s"/>`;
  }).join("") : "";
  return `<svg viewBox="0 0 200 300" class="glass-svg" aria-hidden="true">
  <defs>
    <linearGradient id="bg${id}" x1="0" x2="1"><stop offset="0" stop-color="${color}" stop-opacity=".78"/><stop offset=".45" stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity=".62"/></linearGradient>
    <linearGradient id="gl${id}" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".0"/><stop offset=".18" stop-color="#fff" stop-opacity=".35"/><stop offset=".3" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <clipPath id="cp${id}"><path d="M52 40 C46 95 40 140 62 190 C74 214 88 226 92 238 L108 238 C112 226 126 214 138 190 C160 140 154 95 148 40 Z"/></clipPath>
  </defs>
  <g clip-path="url(#cp${id})">
    <rect x="30" y="72" width="140" height="180" fill="url(#bg${id})"/>
    <g fill="#fff" opacity=".55">${b}</g>
    <path d="M40 40 H160 V78 C150 86 136 80 124 86 C110 92 96 82 82 88 C68 94 56 84 40 90 Z" fill="#FFF8EA"/>
    <path d="M40 76 C56 70 68 80 82 74 C96 68 110 78 124 72 C138 66 150 74 160 70 V92 C148 98 136 90 122 96 C108 102 94 92 80 98 C66 104 52 94 40 100 Z" fill="#F4E6CC" opacity=".9"/>
  </g>
  <path d="M52 40 C46 95 40 140 62 190 C74 214 88 226 92 238 L108 238 C112 226 126 214 138 190 C160 140 154 95 148 40" fill="url(#gl${id})" stroke="rgba(255,255,255,.55)" stroke-width="1.6"/>
  <path d="M100 238 V276 M70 282 C84 276 116 276 130 282" stroke="rgba(255,255,255,.55)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="46" cy="36" rx="0" ry="0"/>
</svg>`;
}
