n.d(t, {
    GG: () => u,
    Gy: () => c,
    S9: () => d
});
var r = n(772848),
    i = n(70956),
    o = n(960048),
    a = n(686325);
let s = 12,
    l = null;
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == l || f(l)
        ? (l = {
              uuid: (0, r.Z)(),
              initialized: t,
              lastUsed: t
          })
        : (e && (l.lastUsed = t), l);
}
function u() {
    l = null;
}
function d() {
    return l;
}
function f(e) {
    let t = Date.now();
    if (t < e.initialized)
        return (
            o.Z.addBreadcrumb({
                category: 'ad',
                message: 'future facing timestamp Date.now(): '.concat(t, ', initialized timestamp: ').concat(e.initialized)
            }),
            !0
        );
    let n = t - e.lastUsed > a.iP * i.Z.Millis.MINUTE,
        r = t - e.initialized > s * i.Z.Millis.HOUR;
    return n || r;
}
