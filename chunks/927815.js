n.d(t, { A: () => _ });
var i = n(228366),
    r = n(256311),
    a = n(439372),
    s = n(773669),
    l = n(935208),
    o = n(883600),
    d = n(38405),
    c = n(212031);
class u extends a.A {
    actions = { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) };
    handleConnectionOpen = async (e) => {
        try {
            let e,
                t = await r.A.fetchChangelogConfig(),
                n = t.body,
                a =
                    ((e = parseInt("607753")),
                    Number.isNaN(e) &&
                        (d.A.captureMessage("Trying to open a changelog for an invalid build number 607753"), (e = 0)),
                    e),
                u = (function (e, t) {
                    let n = 0,
                        i = null;
                    for (var [r, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (i = r));
                    return i;
                })(n, a);
            if (
                (i.h.dispatch({ type: "CHANGE_LOG_SET_CONFIG", config: t.body, latestChangelogId: u }),
                null == u || !0 !== n[u].show_on_startup)
            )
                return;
            let _ = o.A.lastSeenChangelogId(),
                E = o.A.lastSeenChangelogDate();
            if (null != _ && 0 >= l.default.compare(u, _)) return;
            let A = await r.A.fetchChangelog(u, s.default.locale);
            if (null == A) return;
            if (null == E || null == o.A.lastSeenChangelogDate()) return void r.A.markChangelogAsSeen(u, A.date);
            if (o.A.isLocked()) return;
            new Date(A.date) > new Date(E) && (0, c.j)();
        } finally {
            i.h.dispatch({ type: "CHANGE_LOG_RESOLVED" });
        }
    };
}
let _ = new u();
