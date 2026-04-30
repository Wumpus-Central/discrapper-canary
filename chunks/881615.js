"use strict";
n.d(t, { Db: () => c, sN: () => u });
var i = n(835245),
    r = n(927813),
    s = n(38405),
    a = n(604594);
let o = 12 * r.A.Millis.HOUR,
    l = null;
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == l ||
        (function (e) {
            let t = Date.now();
            if (t < e.createdAtTimestamp)
                return (
                    s.A.addBreadcrumb({
                        category: "ad",
                        message: `future facing timestamp Date.now(): ${t}, initialized timestamp: ${e.createdAtTimestamp}`,
                    }),
                    !0
                );
            let n = t - e.lastUsedTimestamp > a.jj,
                i = t - e.createdAtTimestamp > o;
            return n || i;
        })(l)
        ? (l = { uuid: (0, i.A)(), createdAtTimestamp: t, lastUsedTimestamp: t, version: a.Ir })
        : (e && (l.lastUsedTimestamp = t), l);
}
function c() {
    l = null;
}
