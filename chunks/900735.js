n.d(t, {
    S: () => u,
    t: () => d
});
var a = n(699516),
    l = n(626135),
    s = n(70956),
    r = n(869031),
    o = n(981631);
let i = s.Z.Millis.WEEK,
    c = s.Z.Millis.DAYS_30,
    u = () => {
        if (!(0, r.nZ)('block_user_feedback_utils')) return !1;
        let e = a.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return a.Z.isBlocked(t) && n > i && n < c;
        });
    },
    d = (e, t, n, a) => {
        l.default.track(o.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: a
        });
    };
