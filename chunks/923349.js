n.d(t, {
    A: () => h,
});
var r,
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(272207),
    c = n(287809),
    u = n(927578);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = !1;

function p(e) {
    let { subscription: t } = e;
    if (null != t) {
        var n;
        let e = l.A.createFromServer(t);
        if (null == (0, u.EL)(e) || (null == (n = e.metadata) ? void 0 : n.ended_at) == null) return;
        let r = a()(e.metadata.ended_at);
        a()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (f = !0);
    }
}
class _ extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    shouldShowReactivateNotice() {
        let e = c.default.getCurrentUser();
        return !(0, u.TW)(e) && f;
    }
}
d(_, "displayName", "SubscriptionRemindersStore");
let h = new _(o.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: p,
});
