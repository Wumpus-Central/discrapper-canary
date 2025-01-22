let i, a;
r.d(n, {
    c: function () {
        return f;
    }
});
var o,
    s = r(47120);
var l = r(442837),
    u = r(570140),
    c = r(981631);
function d(e, n, r) {
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
let f = 'no_payment_source',
    p = null,
    h = null,
    _ = null,
    m = null,
    g = null,
    E = {},
    v = null,
    y = !1,
    b = null,
    I = !1,
    T = !1,
    S = !1,
    A = !1,
    C = null,
    N = new Set();
function R(e) {
    null != i && null != v ? i(v) : null != a && a(e), (i = null), (a = null);
}
function O(e) {
    R(), (p = e.skuId), (_ = e.applicationId), (T = e.isIAP), (m = e.analyticsLocation), (C = e.context), (A = e.isGift), (S = !0), (I = !1), (i = e.resolve), (a = e.reject), (b = null), (v = null), (g = e.promotionId);
}
function D(e) {
    let { error: n } = e;
    (S = !1), (C = null), R(n);
}
function L(e) {
    let { skuId: n } = e;
    N.add(n);
}
function x(e) {
    let { skuId: n, paymentSourceId: r, price: i } = e;
    (E = {
        ...E,
        [n]: {
            ...E[n],
            [null != r ? r : f]: i
        }
    }),
        N.delete(n);
}
function w(e) {
    let { skuId: n } = e;
    N.delete(n);
}
function P() {
    y = !0;
}
function M(e) {
    let { entitlements: n, giftCode: r } = e;
    (y = !1), (v = n), (h = r);
}
function k(e) {
    let { giftCode: n } = e;
    if (0 !== n.uses || n.sku_id !== p) return !1;
    h = n.code;
}
function U(e) {
    let { error: n } = e;
    (y = !1), (b = n);
}
function B() {
    I = !0;
}
function G() {
    b = null;
}
function Z(e) {
    A = e.isGift;
}
function F(e) {
    let { locked: n } = e;
    if (!n || null == C) return !1;
    (S = !1), (C = null), R();
}
class V extends (o = l.ZP.Store) {
    getPricesForSku(e) {
        return E[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? c.IlC.OVERLAY : c.IlC.APP;
        return C === e && S;
    }
    get isPurchasingSKU() {
        return y;
    }
    get forceConfirmationStepOnMount() {
        return I;
    }
    get error() {
        return b;
    }
    get skuId() {
        return p;
    }
    get applicationId() {
        return _;
    }
    get analyticsLocation() {
        return m;
    }
    get promotionId() {
        return g;
    }
    get isIAP() {
        return T;
    }
    get giftCode() {
        return h;
    }
    get isGift() {
        return A;
    }
    isFetchingSKU(e) {
        return N.has(e);
    }
}
d(V, 'displayName', 'SKUPaymentModalStore'),
    (n.Z = new V(u.Z, {
        SKU_PURCHASE_MODAL_OPEN: O,
        SKU_PURCHASE_MODAL_CLOSE: D,
        SKU_PURCHASE_PREVIEW_FETCH: L,
        SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: x,
        SKU_PURCHASE_PREVIEW_FETCH_FAILURE: w,
        SKU_PURCHASE_START: P,
        SKU_PURCHASE_SUCCESS: M,
        SKU_PURCHASE_FAIL: U,
        SKU_PURCHASE_SHOW_CONFIRMATION_STEP: B,
        SKU_PURCHASE_CLEAR_ERROR: G,
        SKU_PURCHASE_UPDATE_IS_GIFT: Z,
        OVERLAY_SET_INPUT_LOCKED: F,
        GIFT_CODE_CREATE: k
    }));
