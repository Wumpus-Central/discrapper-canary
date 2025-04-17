n.d(t, {
    L0: () => d,
    Rr: () => m,
    tp: () => p,
    wT: () => f
});
var r = n(699516),
    i = n(626135),
    l = n(70956),
    a = n(869031),
    o = n(982863),
    s = n(981631);
let c = l.Z.Millis.WEEK,
    u = l.Z.Millis.DAYS_30,
    d = () => {
        if (!(0, a.nZ)('block_user_feedback_utils')) return !1;
        let e = r.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return r.Z.isBlocked(t) && n > c && n < u;
        });
    },
    p = (e, t, n, r) => {
        i.default.track(s.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r
        });
    },
    m = () => {
        if (!(0, o.C$)('ignore_user_feedback_utils')) return !1;
        let e = r.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return r.Z.isIgnored(t) && n > c && n < u;
        });
    },
    f = (e, t, n, r) => {
        i.default.track(s.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r
        });
    };
