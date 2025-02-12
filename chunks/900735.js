n.d(t, {
    S: () => u,
    t: () => d
});
var l = n(699516),
    a = n(626135),
    i = n(70956),
    s = n(869031),
    r = n(981631);
let o = i.Z.Millis.WEEK,
    c = i.Z.Millis.DAYS_30,
    u = () => {
        if (!(0, s.nZ)('block_user_feedback_utils')) return !1;
        let e = l.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return l.Z.isBlocked(t) && n > o && n < c;
        });
    },
    d = (e, t, n, l) => {
        a.default.track(r.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: l
        });
    };
