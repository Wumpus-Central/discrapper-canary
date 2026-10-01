r.d(e, { IE: () => u, km: () => c, rM: () => s });
var n = r(582128),
    i = r(435558),
    l = r.n(i),
    o = r(683973);
let a = {};
function s() {
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        e = (0, o.k)(t);
    return e.favoriteGifs?.gifs ?? a;
}
function u(t) {
    let e = s();
    return n.useMemo(
        () =>
            l()(e)
                .map((e, r) => ({ ...e, url: r, src: t?.(e.src, r) ?? e.src }))
                .sortBy("order")
                .reverse()
                .value(),
        [e, t],
    );
}
function c(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return null != s(e)[t];
}
