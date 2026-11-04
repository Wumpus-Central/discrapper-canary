var i = n(115560),
    r = n(73153),
    a = n(927813),
    s = n(856383),
    l = n(604594);
let o = 12 * a.A.Millis.HOUR,
    d = null;
n.d(
    t,
    {},
    {
        Db: function () {
            d = null;
        },
        sN: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = Date.now();
            return (
                null == d ||
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
                    let n = t - e.lastUsedTimestamp > l.jj,
                        i = t - e.createdAtTimestamp > o;
                    return n || i;
                })(d)
                    ? ((d = { uuid: (0, i.A)(), createdAtTimestamp: t, lastUsedTimestamp: t, version: 1 }),
                      r.h.dispatch({ type: "AD_SESSION_RESET" }))
                    : e && (d.lastUsedTimestamp = t),
                d
            );
        },
    },
);
