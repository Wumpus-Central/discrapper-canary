"use strict";
n.d(t, { C: () => d, p5: () => l });
var i = n(723702),
    r = n(38405),
    s = n(19575);
let a = i.isPlatformEmbedded && null != s.Ay.copy,
    o = "function" == typeof window.navigator?.clipboard?.writeText,
    l = a || o;
async function d(e, t, n) {
    if (!l) return void n?.(Error("Clipboard API not supported."));
    try {
        a ? s.Ay.copy(e) : await window.navigator.clipboard.writeText(e), t?.();
    } catch (e) {
        n?.(e), r.A.captureException(e);
    }
}
