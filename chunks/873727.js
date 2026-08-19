"use strict";
n.d(t, { Lq: () => o, _n: () => c, mB: () => d, x4: () => l });
var i = n(775602),
    r = n(363195),
    a = n(885386);
let s = ["custom-theme-background", "custom-client-theme"];
function l(e) {
    switch (e) {
        case "light":
        case "midnight":
        case "darker":
            return e;
        default:
            return "dark";
    }
}
function o() {
    if ("u" < typeof document || "u" < typeof window) return null;
    let e = document.documentElement,
        t = s.filter((t) => e.classList.contains(t));
    if (0 === t.length) return null;
    let n = window.getComputedStyle(e),
        i = {};
    for (let e = 0; e < n.length; e++) {
        let t = n.item(e);
        t.startsWith("--custom-") && (i[t] = n.getPropertyValue(t).trim());
    }
    return { classNames: t, variables: i };
}
function d(e) {
    return { baseTheme: l(r.A.theme), customTheme: o(), messageDisplayCompact: a.hH.getSetting(), reducedMotion: e };
}
function c() {
    return {
        theme: l(r.A.theme),
        message_display_compact: String(a.hH.getSetting()),
        reduced_motion: String(i.Ay.useReducedMotion),
    };
}
