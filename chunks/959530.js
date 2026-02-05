"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) => `${e.item} \u{63A}\u{64A}\u{631} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
    longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
    select: "تحديد",
    selectedAll: "جميع العناصر المحددة.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "لم يتم تحديد عناصر", one: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`, other: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}` })}.`,
    selectedItem: (e) => `${e.item} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
};
