n.d(t, {
    A: () => h,
    k: () => o,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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
var o = (function (e) {
    return (e[(e.UNKNOWN = 0)] = "UNKNOWN"), (e[(e.PENDING = 1)] = "PENDING"), (e[(e.DONE = 2)] = "DONE"), e;
})({});
let l = 0,
    c = null,
    u = null,
    d = null;

function f(e) {
    (l = 1), (c = e.loadId);
}

function p(e) {
    var t, n;
    c === e.loadId &&
        ((u = null != (t = e.skuId) ? t : null), (d = null != (n = e.skuSubscriptionPlanId) ? n : null), (l = 2));
}
class _ extends (r = i.Ay.Store) {
    get browserCheckoutState() {
        return l;
    }
    get loadId() {
        return c;
    }
    get skuId() {
        return u;
    }
    get planId() {
        return d;
    }
}
s(_, "displayName", "BrowserCheckoutStateStore");
let h = new _(a.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: f,
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: p,
});
