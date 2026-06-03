"use strict";
n.d(t, { Db: () => d, sN: () => c });
var i = n(835245),
    r = n(228366),
    s = n(927813),
    a = n(38405),
    o = n(604594);
let l = 12 * s.A.Millis.HOUR,
    u = null;
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return (
        null == u ||
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
            let n = t - e.lastUsedTimestamp > o.jj,
                i = t - e.createdAtTimestamp > l;
            return n || i;
        })(u)
            ? ((u = { uuid: (0, i.A)(), createdAtTimestamp: t, lastUsedTimestamp: t, version: o.Ir }),
              r.h.dispatch({ type: "AD_SESSION_RESET" }))
            : e && (u.lastUsedTimestamp = t),
        u
    );
}
function d() {
    u = null;
}
