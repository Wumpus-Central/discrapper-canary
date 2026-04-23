"use strict";
n.d(t, { A: () => _ });
var i = n(989349),
    r = n.n(i),
    l = n(311907),
    s = n(73153),
    a = n(272207),
    o = n(287809),
    c = n(927578);
let u = !1;
class d extends l.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = o.default.getCurrentUser();
        return !(0, c.TW)(e) && u;
    }
}
let _ = new d(s.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = a.A.createFromServer(t);
            if (null == (0, c.EL)(e) || e.metadata?.ended_at == null) return;
            let n = r()(e.metadata.ended_at);
            r()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (u = !0);
        }
    },
});
