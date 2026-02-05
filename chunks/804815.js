"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
    longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
    select: "Odaberite",
    selectedAll: "Odabrane su sve stavke.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Nije odabrana nijedna stavka", one: () => `Odabrana je ${t.number(e.count)} stavka`, other: () => `Odabrano je ${t.number(e.count)} stavki` })}.`,
    selectedItem: (e) => `Stavka ${e.item} je odabrana.`,
};
