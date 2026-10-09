r.d(t, { IE: () => u, km: () => c, rM: () => s });
var n = r(582128),
    i = r(435558),
    l = r.n(i),
    o = r(683973);
let a = {};
function s() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, o.k)(e);
    return t.favoriteGifs?.gifs ?? a;
}
function u(e) {
    let t = s();
    return n.useMemo(
        () =>
            l()(t)
                .map((t, r) => ({ ...t, url: r, src: e?.(t.src, r) ?? t.src }))
                .sortBy("order")
                .reverse()
                .value(),
        [t, e],
    );
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return null != s(t)[e];
}
