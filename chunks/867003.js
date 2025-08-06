n.d(t, {
    I: () => O,
    L0: () => m,
    Rr: () => E,
    nH: () => y,
    tp: () => g,
    wT: () => b,
});
var r = n(704215),
    i = n(605236),
    o = n(699516),
    a = n(626135),
    s = n(70956),
    l = n(869031),
    c = n(711758),
    u = n(982863),
    d = n(987562),
    f = n(981631);
let _ = 3 * s.Z.Millis.DAY,
    p = s.Z.Millis.WEEK,
    h = s.Z.Millis.DAYS_30,
    m = () => {
        if (!(0, l.nZ)("block_user_feedback_utils")) return !1;
        let e = o.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = t,
                r = Date.now() - Date.parse(e[n]);
            return o.Z.isBlocked(n) && r > p && r < h;
        });
    },
    g = (e, t, n, r) => {
        a.default.track(f.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
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
        let a = t ? _ : p,
            s = c.Z.getIgnoreTimestamps();
        return Object.keys(s).some((e) => {
            let t = e,
                n = Date.now() - Number(s[t]);
            return o.Z.isIgnored(t) && n > a && n < h;
        });
    },
    b = (e, t, n, r) => {
        a.default.track(f.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    y = (e) => (e === r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.L$.KID_STARTED : d.L$.GET_STARTED),
    O = (e, t, n, r, i) => {
        a.default.track(f.rMx.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
            entrypoint: i,
        });
    };
