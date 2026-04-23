"use strict";
n.d(t, { EV: () => o, NM: () => s, gm: () => a });
let r = {},
    i = null;
function s(e) {
    let t = r[e] ?? 0;
    0 === t && i?.(e, !0), (r[e] = t + 1);
}
function a(e) {
    r[e]--, 0 === r[e] && i?.(e, !1);
}
function o(e) {
    i = e ?? null;
}
