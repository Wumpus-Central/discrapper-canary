n.d(t, {
    S: () => u,
    t: () => d
});
var r = n(699516),
    i = n(626135),
    a = n(70956),
    l = n(869031),
    o = n(981631);
let s = a.Z.Millis.WEEK,
    c = a.Z.Millis.DAYS_30,
    u = () => {
        if (!(0, l.nZ)('block_user_feedback_utils')) return !1;
        let e = r.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return r.Z.isBlocked(t) && n > s && n < c;
        });
    },
    d = (e, t, n, r) => {
        i.default.track(o.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r
        });
    };
