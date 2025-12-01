n.d(t, { Z: () => O });
var r,
    i = n(442837),
    a = n(570140),
    o = n(881052);
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
let l = null,
    c = null,
    u = null;
function d(e) {
    let { error: t } = e;
    l = t;
}
function f() {
    m();
}
function p(e) {
    let { message: t } = e;
    l = new o.HF(t);
}
function _(e) {
    let { message: t } = e;
    l = new o.HF(t);
}
function m() {
    l = null;
}
function h(e) {
    (c = e.giftCode), (u = e.skuId);
}
function g(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== u) return !1;
    c = t.code;
}
function E(e) {
    l = e.error;
}
function b(e) {
    e.isGift && (u = e.skuId);
}
class y extends (r = i.ZP.Store) {
    get paymentError() {
        return l;
    }
    getGiftCode(e) {
        return e === u ? c : null;
    }
}
s(y, "displayName", "PremiumPaymentModalStore");
let O = new y(a.Z, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
    PREMIUM_PAYMENT_UPDATE_FAIL: d,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: f,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
    PREMIUM_PAYMENT_ERROR_CLEAR: m,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: p,
    BRAINTREE_TOKENIZE_VENMO_FAIL: _,
    SKU_PURCHASE_SUCCESS: h,
    SKU_PURCHASE_FAIL: E,
    SKU_PURCHASE_AWAIT_CONFIRMATION: b,
    GIFT_CODE_CREATE: g,
});
