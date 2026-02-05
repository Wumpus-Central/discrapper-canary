"use strict";
n.d(t, { C: () => u, p5: () => l });
var r = n(723702),
    i = n(728458),
    a = n(837921);
let s = r.isPlatformEmbedded && null != a.Ay.copy,
    o = "function" == typeof window.navigator?.clipboard?.writeText,
    l = s || o;
async function u(e, t, n) {
    if (!l) return void n?.(Error("Clipboard API not supported."));
    try {
        s ? a.Ay.copy(e) : await window.navigator.clipboard.writeText(e), t?.();
    } catch (e) {
        n?.(e), i.A.captureException(e);
    }
}
