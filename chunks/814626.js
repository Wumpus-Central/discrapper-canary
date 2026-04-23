"use strict";
n.d(t, { A: () => _, k: () => a });
var r,
    i = n(311907),
    s = n(73153),
    a = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let o = 0,
    l = null,
    u = null,
    c = null;
class d extends i.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return o;
    }
    get loadId() {
        return l;
    }
    get skuId() {
        return u;
    }
    get planId() {
        return c;
    }
}
let _ = new d(s.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (o = 1), (l = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        l === e.loadId && ((u = e.skuId ?? null), (c = e.skuSubscriptionPlanId ?? null), (o = 2));
    },
});
