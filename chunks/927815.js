"use strict";
n.d(t, { A: () => c });
var i = n(228366),
    r = n(256311),
    s = n(439372),
    a = n(773669),
    o = n(935208),
    l = n(883600),
    d = n(38405),
    _ = n(212031);
class u extends s.A {
    actions = { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) };
    handleConnectionOpen = async (e) => {
        try {
            let e,
                t = await r.A.fetchChangelogConfig(),
                n = t.body,
                s =
                    ((e = parseInt("534155")),
                    Number.isNaN(e) &&
                        (d.A.captureMessage("Trying to open a changelog for an invalid build number 534155"), (e = 0)),
                    e),
                u = (function (e, t) {
                    let n = 0,
                        i = null;
                    for (var [r, { min_version: s }] of Object.entries(e)) s <= t && s > n && ((n = s), (i = r));
                    return i;
                })(n, s);
            if (
                (i.h.dispatch({ type: "CHANGE_LOG_SET_CONFIG", config: t.body, latestChangelogId: u }),
                null == u || !0 !== n[u].show_on_startup)
            )
                return;
            let c = l.A.lastSeenChangelogId(),
                E = l.A.lastSeenChangelogDate();
            if (null != c && 0 >= o.default.compare(u, c)) return;
            let h = await r.A.fetchChangelog(u, a.default.locale);
            if (null == h) return;
            if (null == E || null == l.A.lastSeenChangelogDate()) return void r.A.markChangelogAsSeen(u, h.date);
            if (l.A.isLocked()) return;
            new Date(h.date) > new Date(E) && (0, _.j)();
        } finally {
            i.h.dispatch({ type: "CHANGE_LOG_RESOLVED" });
        }
    };
}
let c = new u();
