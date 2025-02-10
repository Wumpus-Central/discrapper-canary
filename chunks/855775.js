let i, r;
n.d(t, {
    Z: () => F,
    c: () => c
}),
    n(47120);
var a,
    s = n(442837),
    o = n(570140),
    l = n(981631);
function u(e, t, n) {
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
let c = 'no_payment_source',
    d = null,
    f = null,
    _ = null,
    p = null,
    h = null,
    m = {},
    g = null,
    E = !1,
    v = null,
    y = !1,
    I = !1,
    T = !1,
    b = !1,
    S = null,
    A = new Set();
function N(e) {
    null != i && null != g ? i(g) : null != r && r(e), (i = null), (r = null);
}
function C(e) {
    N(), (d = e.skuId), (_ = e.applicationId), (I = e.isIAP), (p = e.analyticsLocation), (S = e.context), (b = e.isGift), (T = !0), (y = !1), (i = e.resolve), (r = e.reject), (v = null), (g = null), (h = e.promotionId);
}
function R(e) {
    let { error: t } = e;
    (T = !1), (S = null), N(t);
}
function O(e) {
    let { skuId: t } = e;
    A.add(t);
}
function D(e) {
    let { skuId: t, paymentSourceId: n, price: i } = e;
    (m = {
        ...m,
        [t]: {
            ...m[t],
            [null != n ? n : c]: i
        }
    }),
        A.delete(t);
}
function L(e) {
    let { skuId: t } = e;
    A.delete(t);
}
function x() {
    E = !0;
}
function P(e) {
    let { entitlements: t, giftCode: n } = e;
    (E = !1), (g = t), (f = n);
}
function w(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== d) return !1;
    f = t.code;
}
function M(e) {
    let { error: t } = e;
    (E = !1), (v = t);
}
function k() {
    y = !0;
}
function U() {
    v = null;
}
function G(e) {
    b = e.isGift;
}
function B(e) {
    let { locked: t } = e;
    if (!t || null == S) return !1;
    (T = !1), (S = null), N();
}
class Z extends (a = s.ZP.Store) {
    getPricesForSku(e) {
        return m[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? l.IlC.OVERLAY : l.IlC.APP;
        return S === e && T;
    }
    get isPurchasingSKU() {
        return E;
    }
    get forceConfirmationStepOnMount() {
        return y;
    }
    get error() {
        return v;
    }
    get skuId() {
        return d;
    }
    get applicationId() {
        return _;
    }
    get analyticsLocation() {
        return p;
    }
    get promotionId() {
        return h;
    }
    get isIAP() {
        return I;
    }
    get giftCode() {
        return f;
    }
    get isGift() {
        return b;
    }
    isFetchingSKU(e) {
        return A.has(e);
    }
}
u(Z, 'displayName', 'SKUPaymentModalStore');
let F = new Z(o.Z, {
    SKU_PURCHASE_MODAL_OPEN: C,
    SKU_PURCHASE_MODAL_CLOSE: R,
    SKU_PURCHASE_PREVIEW_FETCH: O,
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: D,
    SKU_PURCHASE_PREVIEW_FETCH_FAILURE: L,
    SKU_PURCHASE_START: x,
    SKU_PURCHASE_SUCCESS: P,
    SKU_PURCHASE_FAIL: M,
    SKU_PURCHASE_SHOW_CONFIRMATION_STEP: k,
    SKU_PURCHASE_CLEAR_ERROR: U,
    SKU_PURCHASE_UPDATE_IS_GIFT: G,
    OVERLAY_SET_INPUT_LOCKED: B,
    GIFT_CODE_CREATE: w
});
