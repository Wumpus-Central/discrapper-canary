n.d(t, { A: () => m });
var i = n(989349),
    l = n.n(i),
    a = n(311907),
    r = n(73153),
    s = n(272207),
    o = n(287809),
    d = n(927578);
let c = !1;
class u extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = o.default.getCurrentUser();
        return !(0, d.TW)(e) && c;
    }
}
let m = new u(r.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = s.A.createFromServer(t);
            if (null == (0, d.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (c = !0);
        }
    },
});
