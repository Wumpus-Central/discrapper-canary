r.d(t, { IE: () => u, km: () => c, rM: () => o });
var n = r(582128),
    s = r(435558),
    l = r.n(s),
    i = r(683973);
let a = {};
function o() {
    let e = (0, i.k)();
    return e.favoriteGifs?.gifs ?? a;
}
function u(e) {
    let t = o();
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
    return null != o()[e];
}
