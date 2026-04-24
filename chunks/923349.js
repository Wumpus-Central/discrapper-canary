n.d(t, { A: () => E });
var i = n(989349),
    l = n.n(i),
    r = n(17928),
    a = n(228366),
    o = n(243217),
    s = n(287809),
    u = n(927578);
let d = !1;
class c extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = s.default.getCurrentUser();
        return !(0, u.TW)(e) && d;
    }
}
let E = new c(a.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = o.A.createFromServer(t);
            if (null == (0, u.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (d = !0);
        }
    },
});
