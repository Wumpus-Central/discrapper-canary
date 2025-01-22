r.d(n, {
    I: function () {
        return i;
    }
});
var i,
    a,
    o = r(442837),
    s = r(570140),
    l = r(128069),
    u = r(38618);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.SUCCESS = 2)] = 'SUCCESS'), (e[(e.ERROR = 3)] = 'ERROR');
})(i || (i = {}));
let d = 0,
    f = null,
    p = null;
function h(e) {
    let { error: n } = e,
        r = n instanceof l.ZP ? n : new l.ZP(n);
    u.Z.isConnected() && r.code === l.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (d = 1);
}
function _(e) {
    (d = 2), (f = e.purchaseTokenHash), (p = e.expiresAt);
}
function m() {
    (d = 0), (f = null), (p = null);
}
class g extends (a = o.ZP.Store) {
    get purchaseTokenAuthState() {
        return d;
    }
    get purchaseTokenHash() {
        return f;
    }
    get expiresAt() {
        return p;
    }
}
c(g, 'displayName', 'PurchaseTokenAuthStore'),
    (n.Z = new g(s.Z, {
        SKU_PURCHASE_FAIL: h,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: h,
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
        SKU_PURCHASE_SUCCESS: m
    }));
