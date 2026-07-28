"use strict";
n.d(t, { IE: () => d, km: () => c, rM: () => o });
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(683973);
let l = {};
function o() {
    let e = (0, s.k)();
    return e.favoriteGifs?.gifs ?? l;
}
function d(e) {
    let t = o();
    return i.useMemo(
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
    return null != o()[e];
}
