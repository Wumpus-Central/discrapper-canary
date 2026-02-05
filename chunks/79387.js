"use strict";
let r, i;
n.d(t, { A: () => V, B: () => l });
var a = n(311907),
    s = n(73153),
    o = n(652215);
let l = "no_payment_source",
    u = null,
    c = null,
    d = null,
    _ = null,
    f = null,
    p = {},
    h = null,
    m = !1,
    g = null,
    E = !1,
    A = !1,
    I = !1,
    T = !1,
    y = null,
    S = new Set();
function v(e) {
    null != r && null != h ? r(h) : null != i && i(e), (r = null), (i = null);
}
function C(e) {
    v(),
        (u = e.skuId),
        (d = e.applicationId),
        (A = e.isIAP),
        (_ = e.analyticsLocation),
        (y = e.context),
        (T = e.isGift),
        (I = !0),
        (E = !1),
        (r = e.resolve),
        (i = e.reject),
        (g = null),
        (h = null),
        (f = e.promotionId);
}
function b(e) {
    let { error: t } = e;
    (I = !1), (y = null), v(t);
}
function N(e) {
    let { skuId: t } = e;
    S.add(t);
}
function R(e) {
    let { skuId: t, paymentSourceId: n, price: r } = e;
    (p = { ...p, [t]: { ...p[t], [null != n ? n : l]: r } }), S.delete(t);
}
function O(e) {
    let { skuId: t } = e;
    S.delete(t);
}
function D() {
    m = !0;
}
function L(e) {
    let { entitlements: t, giftCode: n } = e;
    (m = !1), (h = t), (c = n);
}
function w(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== u) return !1;
    c = t.code;
}
function x(e) {
    let { error: t } = e;
    (m = !1), (g = t);
}
function P() {
    E = !0;
}
function M() {
    g = null;
}
function k(e) {
    T = e.isGift;
}
function U(e) {
    let { locked: t } = e;
    if (!t || null == y) return !1;
    (I = !1), (y = null), v();
}
class G extends a.Ay.Store {
    static displayName = "SKUPaymentModalStore";
    getPricesForSku(e) {
        return p[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? o.BRT.OVERLAY : o.BRT.APP;
        return y === e && I;
    }
    get isPurchasingSKU() {
        return m;
    }
    get forceConfirmationStepOnMount() {
        return E;
    }
    get error() {
        return g;
    }
    get skuId() {
        return u;
    }
    get applicationId() {
        return d;
    }
    get analyticsLocation() {
        return _;
    }
    get promotionId() {
        return f;
    }
    get isIAP() {
        return A;
    }
    get giftCode() {
        return c;
    }
    get isGift() {
        return T;
    }
    isFetchingSKU(e) {
        return S.has(e);
    }
}
let V = new G(s.h, {
    SKU_PURCHASE_MODAL_OPEN: C,
    SKU_PURCHASE_MODAL_CLOSE: b,
    SKU_PURCHASE_PREVIEW_FETCH: N,
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: R,
    SKU_PURCHASE_PREVIEW_FETCH_FAILURE: O,
    SKU_PURCHASE_START: D,
    SKU_PURCHASE_SUCCESS: L,
    SKU_PURCHASE_FAIL: x,
    SKU_PURCHASE_SHOW_CONFIRMATION_STEP: P,
    SKU_PURCHASE_CLEAR_ERROR: M,
    SKU_PURCHASE_UPDATE_IS_GIFT: k,
    OVERLAY_SET_INPUT_LOCKED: U,
    GIFT_CODE_CREATE: w,
});
