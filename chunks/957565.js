"use strict";
n.d(t, { C: () => d, p5: () => o });
var i = n(723702),
    r = n(38405),
    a = n(19575);
let s = i.isPlatformEmbedded && null != a.Ay.copy,
    l = "function" == typeof window.navigator?.clipboard?.writeText,
    o = s || l;
async function d(e, t, n) {
    if (!o) return void n?.(Error("Clipboard API not supported."));
    try {
        s ? a.Ay.copy(e) : await window.navigator.clipboard.writeText(e), t?.();
    } catch (e) {
        n?.(e), r.A.captureException(e);
    }
}
