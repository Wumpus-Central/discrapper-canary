"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
    longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
    select: "Zaznacz",
    selectedAll: "Wszystkie zaznaczone elementy.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "Nie zaznaczono żadnych element\xf3w", one: () => `${t.number(e.count)} zaznaczony element`, other: () => `${t.number(e.count)} zaznaczonych element\xf3w` })}.`,
    selectedItem: (e) => `Zaznaczono ${e.item}.`,
};
