n.d(t, {
    A: () => f,
});
var r,
    i,
    l = n(989349),
    a = n.n(l),
    s = n(311907),
    o = n(73153),
    c = n(272207),
    u = n(287809),
    d = n(927578);
let p = !1;
class m extends (i = s.Ay.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    shouldShowReactivateNotice() {
        let e = u.default.getCurrentUser();
        return !(0, d.TW)(e) && p;
    }
}
(r = "displayName") in m
    ? Object.defineProperty(m, r, {
          value: "SubscriptionRemindersStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[r] = "SubscriptionRemindersStore");
let f = new m(o.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            var n;
            let e = c.A.createFromServer(t);
            if (null == (0, d.EL)(e) || (null == (n = e.metadata) ? void 0 : n.ended_at) == null) return;
            let r = a()(e.metadata.ended_at);
            a()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (p = !0);
        }
    },
});
