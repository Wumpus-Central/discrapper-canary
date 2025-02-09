n.d(t, {
    S: () => d,
    t: () => u
});
var i = n(699516),
    l = n(626135),
    a = n(70956),
    r = n(869031),
    s = n(981631);
let o = a.Z.Millis.WEEK,
    c = a.Z.Millis.DAYS_30,
    d = () => {
        if (!(0, r.nZ)('block_user_feedback_utils')) return !1;
        let e = i.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return i.Z.isBlocked(t) && n > o && n < c;
        });
    },
    u = (e, t, n, i) => {
        l.default.track(s.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i
        });
    };
