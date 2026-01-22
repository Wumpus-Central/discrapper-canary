n.d(t, {
    Db: () => u,
    sN: () => c,
});
var r = n(835245),
    i = n(927813),
    a = n(728458),
    s = n(604594);
let o = 12 * i.A.Millis.HOUR,
    l = null;

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == l || d(l)
        ? (l = {
              uuid: (0, r.A)(),
              createdAtTimestamp: t,
              lastUsedTimestamp: t,
              version: s.Ir,
          })
        : (e && (l.lastUsedTimestamp = t), l);
}

function u() {
    l = null;
}

function d(e) {
    let t = Date.now();
    if (t < e.createdAtTimestamp)
        return (
            a.A.addBreadcrumb({
                category: "ad",
                message: "future facing timestamp Date.now(): "
                    .concat(t, ", initialized timestamp: ")
                    .concat(e.createdAtTimestamp),
            }),
            !0
        );
    let n = t - e.lastUsedTimestamp > s.jj,
        r = t - e.createdAtTimestamp > o;
    return n || r;
}
