n.d(t, { Db: () => c, sN: () => d });
var i = n(132500),
    a = n(927813),
    r = n(38405),
    s = n(604594);
let l = 12 * a.A.Millis.HOUR,
    o = null;
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == o ||
        (function (e) {
            let t = Date.now();
            if (t < e.createdAtTimestamp)
                return (
                    r.A.addBreadcrumb({
                        category: "ad",
                        message: `future facing timestamp Date.now(): ${t}, initialized timestamp: ${e.createdAtTimestamp}`,
                    }),
                    !0
                );
            let n = t - e.lastUsedTimestamp > s.jj,
                i = t - e.createdAtTimestamp > l;
            return n || i;
        })(o)
        ? (o = { uuid: (0, i.A)(), createdAtTimestamp: t, lastUsedTimestamp: t, version: s.Ir })
        : (e && (o.lastUsedTimestamp = t), o);
}
function c() {
    o = null;
}
