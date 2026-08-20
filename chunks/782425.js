"use strict";
n.d(t, { EV: () => o, NM: () => a, ZE: () => l, gm: () => s });
let i = {},
    r = null;
function a(e) {
    let t = i[e] ?? 0;
    0 === t && r?.(e, !0), (i[e] = t + 1);
}
function s(e) {
    i[e]--, 0 === i[e] && r?.(e, !1);
}
function l(e) {
    return i[e] ?? 0;
}
function o(e) {
    r = e ?? null;
}
