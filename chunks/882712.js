n.d(t, {
    I: () => c,
    Z: () => g,
});
var r,
    i = n(442837),
    a = n(570140),
    o = n(128069),
    s = n(38618);
function l(e, t, n) {
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
var c = (function (e) {
    return (
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.PENDING = 1)] = "PENDING"),
        (e[(e.SUCCESS = 2)] = "SUCCESS"),
        (e[(e.ERROR = 3)] = "ERROR"),
        e
    );
})({});
let u = 0,
    d = null,
    f = null;
function p(e) {
    let { error: t } = e,
        n = t instanceof o.ZP ? t : new o.ZP(t);
    s.Z.isConnected() && n.code === o.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1);
}
function _(e) {
    (u = 2), (d = e.purchaseTokenHash), (f = e.expiresAt);
}
function m() {
    (u = 0), (d = null), (f = null);
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    get purchaseTokenAuthState() {
        return u;
    }
    get purchaseTokenHash() {
        return d;
    }
    get expiresAt() {
        return f;
    }
}
l(h, "displayName", "PurchaseTokenAuthStore");
let g = new h(a.Z, {
    SKU_PURCHASE_FAIL: p,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: p,
    USER_PAYMENT_CLIENT_ADD: _,
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: m,
    BILLING_SUBSCRIPTION_UPDATE_START: m,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: m,
    PREMIUM_PAYMENT_ERROR_CLEAR: m,
    PREMIUM_PAYMENT_MODAL_CLOSE: m,
    PREMIUM_PAYMENT_MODAL_OPEN: m,
    PREMIUM_PAYMENT_SUBSCRIBE_START: m,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: m,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
    SKU_PURCHASE_MODAL_CLOSE: m,
    SKU_PURCHASE_MODAL_OPEN: m,
    SKU_PURCHASE_START: m,
    SKU_PURCHASE_SUCCESS: m,
});
