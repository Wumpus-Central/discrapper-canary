n.d(t, {
    L0: () => g,
    Rr: () => b,
    tp: () => _,
    wT: () => x
});
var r = n(704215),
    i = n(605236),
    l = n(699516),
    a = n(626135),
    o = n(70956),
    s = n(869031),
    c = n(711758),
    u = n(982863),
    d = n(987562),
    p = n(981631);
let m = 3 * o.Z.Millis.DAY,
    f = o.Z.Millis.WEEK,
    h = o.Z.Millis.DAYS_30,
    g = () => {
        if (!(0, s.nZ)('block_user_feedback_utils')) return !1;
        let e = l.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return l.Z.isBlocked(t) && n > f && n < h;
        });
    },
    _ = (e, t, n, r) => {
        a.default.track(p.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r
        });
    },
    b = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = (0, u.C$)('ignore_user_feedback_utils');
        if (!e) return !1;
        let { isDismissed: n } = (0, i.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: d.pv });
        if (n) return !1;
        let a = t ? m : f,
            o = c.Z.getIgnoreTimestamps();
        return Object.keys(o).some((e) => {
            let t = Date.now() - Number(o[e]);
            return l.Z.isIgnored(e) && t > a && t < h;
        });
    },
    x = (e, t, n, r) => {
        a.default.track(p.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r
        });
    };
