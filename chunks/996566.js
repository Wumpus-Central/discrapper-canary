r.d(t, { IE: () => c, km: () => u, rM: () => a });
var s = r(64700),
    l = r(735438),
    n = r.n(l),
    i = r(999886);
let o = {};
function a() {
    let e = (0, i.k)();
    return e.favoriteGifs?.gifs ?? o;
}
function c(e) {
    let t = a();
    return s.useMemo(
        () =>
            n()(t)
                .map((t, r) => ({ ...t, url: r, src: e?.(t.src, r) ?? t.src }))
                .sortBy("order")
                .reverse()
                .value(),
        [t, e],
    );
}
function u(e) {
    return null != a()[e];
}
