"use strict";
n.d(t, { A: () => f, k: () => a });
var r = n(311907),
    i = n(73153),
    a = (function (e) {
        return (e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.PENDING = 1)] = "PENDING"), (e[(e.DONE = 2)] = "DONE"), e;
    })({});
let s = 0,
    o = null,
    l = null,
    u = null;
function c(e) {
    (s = 1), (o = e.loadId);
}
function d(e) {
    o === e.loadId && ((l = e.skuId ?? null), (u = e.skuSubscriptionPlanId ?? null), (s = 2));
}
class _ extends r.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return s;
    }
    get loadId() {
        return o;
    }
    get skuId() {
        return l;
    }
    get planId() {
        return u;
    }
}
let f = new _(i.h, { USER_PAYMENT_BROWSER_CHECKOUT_STARTED: c, USER_PAYMENT_BROWSER_CHECKOUT_DONE: d });
