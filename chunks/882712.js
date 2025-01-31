n.d(t, {
    I: () => u,
    Z: () => g
});
var i,
    r = n(442837),
    a = n(570140),
    s = n(128069),
    o = n(38618);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var u = (function (e) {
    return (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.SUCCESS = 2)] = 'SUCCESS'), (e[(e.ERROR = 3)] = 'ERROR'), e;
})({});
let c = 0,
    d = null,
    f = null;
function _(e) {
    let { error: t } = e,
        n = t instanceof s.ZP ? t : new s.ZP(t);
    o.Z.isConnected() && n.code === s.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (c = 1);
}
function p(e) {
    (c = 2), (d = e.purchaseTokenHash), (f = e.expiresAt);
}
function h() {
    (c = 0), (d = null), (f = null);
}
class m extends (i = r.ZP.Store) {
    get purchaseTokenAuthState() {
        return c;
    }
    get purchaseTokenHash() {
        return d;
    }
    get expiresAt() {
        return f;
    }
}
l(m, 'displayName', 'PurchaseTokenAuthStore');
let g = new m(a.Z, {
    SKU_PURCHASE_FAIL: _,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
    USER_PAYMENT_CLIENT_ADD: p,
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: h,
    BILLING_SUBSCRIPTION_UPDATE_START: h,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: h,
    PREMIUM_PAYMENT_ERROR_CLEAR: h,
    PREMIUM_PAYMENT_MODAL_CLOSE: h,
    PREMIUM_PAYMENT_MODAL_OPEN: h,
    PREMIUM_PAYMENT_SUBSCRIBE_START: h,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: h,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
    SKU_PURCHASE_MODAL_CLOSE: h,
    SKU_PURCHASE_MODAL_OPEN: h,
    SKU_PURCHASE_START: h,
    SKU_PURCHASE_SUCCESS: h
});
