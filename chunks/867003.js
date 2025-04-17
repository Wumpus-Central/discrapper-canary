n.d(t, {
    L0: () => h,
    Rr: () => _,
    tp: () => g,
    wT: () => b
});
var r = n(704215),
    i = n(605236),
    a = n(699516),
    l = n(626135),
    o = n(70956),
    s = n(869031),
    c = n(711758),
    u = n(982863),
    d = n(987562),
    p = n(981631);
let m = o.Z.Millis.WEEK,
    f = o.Z.Millis.DAYS_30,
    h = () => {
        if (!(0, s.nZ)('block_user_feedback_utils')) return !1;
        let e = a.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return a.Z.isBlocked(t) && n > m && n < f;
        });
    },
    g = (e, t, n, r) => {
        l.default.track(p.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r
        });
    },
    _ = () => {
        if (!(0, u.C$)('ignore_user_feedback_utils')) return !1;
        let { isDismissed: e } = (0, i.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: d.pv });
        if (e) return !1;
        let t = c.Z.getIgnoreTimestamps();
        return Object.keys(t).some((e) => {
            let n = Date.now() - Number(t[e]);
            return a.Z.isIgnored(e) && n > m && n < f;
        });
    },
    b = (e, t, n, r) => {
        l.default.track(p.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r
        });
    };
