"use strict";
n.d(t, { A: () => _ });
var i = n(228366),
    r = n(256311),
    s = n(439372),
    a = n(773669),
    o = n(935208),
    l = n(883600),
    u = n(38405),
    c = n(212031);
class d extends s.A {
    actions = { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) };
    handleConnectionOpen = async (e) => {
        try {
            let e,
                t = await r.A.fetchChangelogConfig(),
                n = t.body,
                s =
                    ((e = parseInt("564083")),
                    Number.isNaN(e) &&
                        (u.A.captureMessage("Trying to open a changelog for an invalid build number 564083"), (e = 0)),
                    e),
                d = (function (e, t) {
                    let n = 0,
                        i = null;
                    for (var [r, { min_version: s }] of Object.entries(e)) s <= t && s > n && ((n = s), (i = r));
                    return i;
                })(n, s);
            if (
                (i.h.dispatch({ type: "CHANGE_LOG_SET_CONFIG", config: t.body, latestChangelogId: d }),
                null == d || !0 !== n[d].show_on_startup)
            )
                return;
            let _ = l.A.lastSeenChangelogId(),
                h = l.A.lastSeenChangelogDate();
            if (null != _ && 0 >= o.default.compare(d, _)) return;
            let f = await r.A.fetchChangelog(d, a.default.locale);
            if (null == f) return;
            if (null == h || null == l.A.lastSeenChangelogDate()) return void r.A.markChangelogAsSeen(d, f.date);
            if (l.A.isLocked()) return;
            new Date(f.date) > new Date(h) && (0, c.j)();
        } finally {
            i.h.dispatch({ type: "CHANGE_LOG_RESOLVED" });
        }
    };
}
let _ = new d();
