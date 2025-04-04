n.d(t, { Z: () => v });
var r,
    i = n(442837),
    o = n(570140),
    a = n(881052);
function s(e, t, n) {
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
    c = null,
    u = null;
function d(e) {
    let { error: t } = e;
    l = t;
}
function f() {
    h();
}
function _(e) {
    let { message: t, code: n } = e;
    l = new a.HF(t, n);
}
function p(e) {
    let { message: t, code: n } = e;
    l = new a.HF(t, n);
}
function h() {
    l = null;
}
function m(e) {
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
s(y, 'displayName', 'PremiumPaymentModalStore');
let v = new y(o.Z, {
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
    PREMIUM_PAYMENT_UPDATE_FAIL: d,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: f,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
    PREMIUM_PAYMENT_ERROR_CLEAR: h,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: _,
    BRAINTREE_TOKENIZE_VENMO_FAIL: p,
    SKU_PURCHASE_SUCCESS: m,
    SKU_PURCHASE_FAIL: E,
    SKU_PURCHASE_AWAIT_CONFIRMATION: b,
    GIFT_CODE_CREATE: g
});
