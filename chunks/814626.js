n.d(t, { A: () => p, k: () => r });
var l,
    i = n(311907),
    a = n(73153),
    r = (((l = {})[(l.UNKNOWN = 0)] = "UNKNOWN"), (l[(l.PENDING = 1)] = "PENDING"), (l[(l.DONE = 2)] = "DONE"), l);
let s = 0,
    o = null,
    u = null,
    c = null;
class d extends i.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return s;
    }
    get loadId() {
        return o;
    }
    get skuId() {
        return u;
    }
    get planId() {
        return c;
    }
}
let p = new d(a.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (s = 1), (o = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        o === e.loadId && ((u = e.skuId ?? null), (c = e.skuSubscriptionPlanId ?? null), (s = 2));
    },
});
