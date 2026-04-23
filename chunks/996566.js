"use strict";
n.d(t, { IE: () => u, km: () => c, rM: () => l });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(999886);
let o = {};
function l() {
    let e = (0, a.k)();
    return e.favoriteGifs?.gifs ?? o;
}
function u(e) {
    let t = l();
    return r.useMemo(
        () =>
            s()(t)
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
