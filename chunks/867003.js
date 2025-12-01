n.d(t, {
    I: () => O,
    L0: () => h,
    Rr: () => E,
    nH: () => y,
    tp: () => g,
    wT: () => b,
});
var r = n(704215),
    i = n(605236),
    a = n(699516),
    o = n(626135),
    s = n(70956),
    l = n(869031),
    c = n(711758),
    u = n(982863),
    d = n(987562),
    f = n(981631);
let p = 3 * s.Z.Millis.DAY,
    _ = s.Z.Millis.WEEK,
    m = s.Z.Millis.DAYS_30,
    h = () => {
        if (!(0, l.nZ)("block_user_feedback_utils")) return !1;
        let e = a.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = t,
                r = Date.now() - Date.parse(e[n]);
            return a.Z.isBlocked(n) && r > _ && r < m;
        });
    },
    g = (e, t, n, r) => {
        o.default.track(f.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    E = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = (0, u.C$)("ignore_user_feedback_utils");
        if (!e) return !1;
        let { isDismissed: n } = (0, i.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: d.pv });
        if (n) return !1;
        let o = t ? p : _,
            s = c.Z.getIgnoreTimestamps();
        return Object.keys(s).some((e) => {
            let t = e,
                n = Date.now() - Number(s[t]);
            return a.Z.isIgnored(t) && n > o && n < m;
        });
    },
    b = (e, t, n, r) => {
        o.default.track(f.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    y = (e) => (e === r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.L$.KID_STARTED : d.L$.GET_STARTED),
    O = (e, t, n, r, i) => {
        o.default.track(f.rMx.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
            entrypoint: i,
        });
    };
