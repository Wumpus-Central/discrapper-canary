n.d(t, {
    GG: () => u,
    Gy: () => c,
    S9: () => d
});
var r = n(772848),
    i = n(70956),
    o = n(960048),
    a = n(686325);
let s = 12 * i.Z.Millis.HOUR,
    l = null;
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == l || f(l)
        ? (l = {
              uuid: (0, r.Z)(),
              createdAtTimestamp: t,
              lastUsedTimestamp: t,
              version: a.EI
          })
        : (e && (l.lastUsedTimestamp = t), l);
}
function u() {
    l = null;
}
function d() {
    return l;
}
function f(e) {
    let t = Date.now();
    if (t < e.createdAtTimestamp)
        return (
            o.Z.addBreadcrumb({
                category: 'ad',
                message: 'future facing timestamp Date.now(): '.concat(t, ', initialized timestamp: ').concat(e.createdAtTimestamp)
            }),
            !0
        );
    let n = t - e.lastUsedTimestamp > a.XM,
        r = t - e.createdAtTimestamp > s;
    return n || r;
}
