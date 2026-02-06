"use strict";
n.d(t, { A: () => s });
var r = n(311907),
    i = n(775602);
function a(e, t, n, r) {
    if (null != e) return t || !1 === n || r ? e.staticImageUrl : (e.animatedImageUrl ?? e.staticImageUrl);
}
function s(e, t, n) {
    return a(
        e,
        (0, r.bG)([i.A], () => i.A.useReducedMotion),
        t,
        n,
    );
}
