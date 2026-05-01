l.d(t, { A: () => E });
var n = l(989349),
    i = l.n(n),
    r = l(17928),
    s = l(228366),
    a = l(243217),
    u = l(287809),
    o = l(927578);
let c = !1;
class d extends r.Ay.Store {
    initialize() {
        this.waitFor(u.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = u.default.getCurrentUser();
        return !(0, o.TW)(e) && c;
    }
}
let E = new d(s.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = a.A.createFromServer(t);
            if (null == (0, o.EL)(e) || e.metadata?.ended_at == null) return;
            let l = i()(e.metadata.ended_at);
            i()().isBetween(l.clone().add(4, "days"), l.clone().add(11, "days")) && (c = !0);
        }
    },
});
