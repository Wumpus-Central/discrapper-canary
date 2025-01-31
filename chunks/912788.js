n.d(t, { Z: () => I });
var i,
    r = n(442837),
    a = n(570140),
    s = n(881052);
function o(e, t, n) {
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
let l = null,
    u = null,
    c = null;
function d(e) {
    let { error: t } = e;
    l = t;
}
function f() {
    h();
}
function _(e) {
    let { message: t, code: n } = e;
    l = new s.HF(t, n);
}
function p(e) {
    let { message: t, code: n } = e;
    l = new s.HF(t, n);
}
function h() {
    l = null;
}
function m(e) {
    (u = e.giftCode), (c = e.skuId);
}
function g(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== c) return !1;
    u = t.code;
}
function E(e) {
    l = e.error;
}
function v(e) {
    e.isGift && (c = e.skuId);
}
class y extends (i = r.ZP.Store) {
    get paymentError() {
        return l;
    }
    getGiftCode(e) {
        return e === c ? u : null;
    }
}
o(y, 'displayName', 'PremiumPaymentModalStore');
let I = new y(a.Z, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
    PREMIUM_PAYMENT_UPDATE_FAIL: d,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: f,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
    PREMIUM_PAYMENT_ERROR_CLEAR: h,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: _,
    BRAINTREE_TOKENIZE_VENMO_FAIL: p,
    SKU_PURCHASE_SUCCESS: m,
    SKU_PURCHASE_FAIL: E,
    SKU_PURCHASE_AWAIT_CONFIRMATION: v,
    GIFT_CODE_CREATE: g
});
