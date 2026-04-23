"use strict";
n.d(t, { C: () => u, p5: () => l });
var r = n(723702),
    i = n(728458),
    s = n(837921);
let a = r.isPlatformEmbedded && null != s.Ay.copy,
    o = "function" == typeof window.navigator?.clipboard?.writeText,
    l = a || o;
async function u(e, t, n) {
    if (!l) return void n?.(Error("Clipboard API not supported."));
    try {
        a ? s.Ay.copy(e) : await window.navigator.clipboard.writeText(e), t?.();
    } catch (e) {
        n?.(e), i.A.captureException(e);
    }
}
