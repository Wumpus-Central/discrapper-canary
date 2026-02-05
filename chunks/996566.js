"use strict";
n.d(t, { IE: () => u, km: () => c, rM: () => l });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(999886);
let o = {};
function l() {
    let e = (0, s.k)();
    return e.favoriteGifs?.gifs ?? o;
}
function u(e) {
    let t = l();
    return r.useMemo(
        () =>
            a()(t)
                .map((t, n) => ({ ...t, url: n, src: e?.(t.src, n) ?? t.src }))
                .sortBy("order")
                .reverse()
                .value(),
        [t, e],
    );
}
function c(e) {
    return null != l()[e];
}
