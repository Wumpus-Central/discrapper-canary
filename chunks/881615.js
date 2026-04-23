n.d(t, { Db: () => E, sN: () => o });
var i = n(132500),
    r = n(927813),
    a = n(38405),
    s = n(604594);
let _ = 12 * r.A.Millis.HOUR,
    l = null;
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == l ||
        (function (e) {
            let t = Date.now();
            if (t < e.createdAtTimestamp)
                return (
                    a.A.addBreadcrumb({
                        category: "ad",
                        message: `future facing timestamp Date.now(): ${t}, initialized timestamp: ${e.createdAtTimestamp}`,
                    }),
                    !0
                );
            let n = t - e.lastUsedTimestamp > s.jj,
                i = t - e.createdAtTimestamp > _;
            return n || i;
        })(l)
        ? (l = { uuid: (0, i.A)(), createdAtTimestamp: t, lastUsedTimestamp: t, version: s.Ir })
        : (e && (l.lastUsedTimestamp = t), l);
}
function E() {
    l = null;
}
