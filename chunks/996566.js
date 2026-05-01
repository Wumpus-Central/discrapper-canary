r.d(t, { IE: () => u, km: () => d, rM: () => o });
var s = r(64700),
    n = r(735438),
    l = r.n(n),
    i = r(999886);
let a = {};
function o() {
    let e = (0, i.k)();
    return e.favoriteGifs?.gifs ?? a;
}
function u(e) {
    let t = o();
    return s.useMemo(
        () =>
            l()(t)
                .map((t, r) => ({ ...t, url: r, src: e?.(t.src, r) ?? t.src }))
                .sortBy("order")
                .reverse()
                .value(),
        [t, e],
    );
}
function d(e) {
    return null != o()[e];
}
