"use strict";
n.d(t, { EV: () => o, NM: () => a, gm: () => s });
let r = {},
    i = null;
function a(e) {
    let t = r[e] ?? 0;
    0 === t && i?.(e, !0), (r[e] = t + 1);
}
function s(e) {
    r[e]--, 0 === r[e] && i?.(e, !1);
}
function o(e) {
    i = e ?? null;
}
