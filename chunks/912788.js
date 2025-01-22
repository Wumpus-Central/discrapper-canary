var i,
    a = r(442837),
    o = r(570140),
    s = r(881052);
function l(e, n, r) {
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
let u = null,
    c = null,
    d = null;
function f(e) {
    let { error: n } = e;
    u = n;
}
function p() {
    m();
}
function h(e) {
    let { message: n, code: r } = e;
    u = new s.HF(n, r);
}
function _(e) {
    let { message: n, code: r } = e;
    u = new s.HF(n, r);
}
function m() {
    u = null;
}
function g(e) {
    (c = e.giftCode), (d = e.skuId);
}
function E(e) {
    let { giftCode: n } = e;
    if (0 !== n.uses || n.sku_id !== d) return !1;
    c = n.code;
}
function v(e) {
    u = e.error;
}
function y(e) {
    e.isGift && (d = e.skuId);
}
class b extends (i = a.ZP.Store) {
    get paymentError() {
        return u;
    }
    getGiftCode(e) {
        return e === d ? c : null;
    }
}
l(b, 'displayName', 'PremiumPaymentModalStore'),
    (n.Z = new b(o.Z, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: f,
        PREMIUM_PAYMENT_UPDATE_FAIL: f,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: p,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
        PREMIUM_PAYMENT_ERROR_CLEAR: m,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: h,
        BRAINTREE_TOKENIZE_VENMO_FAIL: _,
        SKU_PURCHASE_SUCCESS: g,
        SKU_PURCHASE_FAIL: v,
        SKU_PURCHASE_AWAIT_CONFIRMATION: y,
        GIFT_CODE_CREATE: E
    }));
