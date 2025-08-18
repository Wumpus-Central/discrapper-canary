n.d(t, {
    I: () => O,
    L0: () => _,
    Rr: () => b,
    nH: () => C,
    tp: () => h,
    wT: () => E,
});
var r = n(704215),
    i = n(605236),
    l = n(699516),
    o = n(626135),
    a = n(70956),
    s = n(869031),
    c = n(711758),
    u = n(982863),
    d = n(987562),
    p = n(981631);
let m = 3 * a.Z.Millis.DAY,
    f = a.Z.Millis.WEEK,
    g = a.Z.Millis.DAYS_30,
    _ = () => {
        if (!(0, s.nZ)("block_user_feedback_utils")) return !1;
        let e = l.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return l.Z.isBlocked(t) && n > f && n < g;
        });
    },
    h = (e, t, n, r) => {
        o.default.track(p.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    b = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = (0, u.C$)("ignore_user_feedback_utils");
        if (!e) return !1;
        let { isDismissed: n } = (0, i.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: d.pv });
        if (n) return !1;
        let o = t ? m : f,
            a = c.Z.getIgnoreTimestamps();
        return Object.keys(a).some((e) => {
            let t = Date.now() - Number(a[e]);
            return l.Z.isIgnored(e) && t > o && t < g;
        });
    },
    E = (e, t, n, r) => {
        o.default.track(p.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    C = (e) => (e === r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.L$.KID_STARTED : d.L$.GET_STARTED),
    O = (e, t, n, r, i) => {
        o.default.track(p.rMx.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
            entrypoint: i,
        });
    };
