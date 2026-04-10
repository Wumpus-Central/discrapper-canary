"use strict";
n.d(t, { A: () => _ });
var i = n(989349),
    r = n.n(i),
    s = n(311907),
    l = n(73153),
    a = n(272207),
    c = n(287809),
    o = n(927578);
let u = !1;
class d extends s.Ay.Store {
    initialize() {
        this.waitFor(c.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = c.default.getCurrentUser();
        return !(0, o.TW)(e) && u;
    }
}
let _ = new d(l.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = a.A.createFromServer(t);
            if (null == (0, o.EL)(e) || e.metadata?.ended_at == null) return;
            let n = r()(e.metadata.ended_at);
            r()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (u = !0);
        }
    },
});
