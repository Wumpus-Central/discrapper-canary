"use strict";
n.d(t, { A: () => r });
var r = {};
r = {
    deselectedItem: (e) =>
        `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C9C0} \u{C54A}\u{C558}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
    select: "선택",
    selectedAll: "모든 항목이 선택되었습니다.",
    selectedCount: (e, t) =>
        `${t.plural(e.count, { "=0": "선택된 항목이 없습니다", one: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`, other: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}` })}.`,
    selectedItem: (e) => `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
};
