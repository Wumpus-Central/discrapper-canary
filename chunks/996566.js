r.d(t, { IE: () => c, km: () => u, rM: () => o });
var s = r(64700),
    n = r(735438),
    l = r.n(n),
    i = r(683973);
let a = {};
function o() {
    let e = (0, i.k)();
    return e.favoriteGifs?.gifs ?? a;
}
function c(e) {
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
function u(e) {
    return null != o()[e];
}
