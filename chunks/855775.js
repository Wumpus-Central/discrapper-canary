let i, a;
r.d(n, {
    c: function () {
        return f;
    }
});
var s,
    o = r(47120);
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
    _ = null,
    h = null,
    p = null,
    m = null,
    g = null,
    E = {},
    v = null,
    I = !1,
    T = null,
    b = !1,
    y = !1,
    S = !1,
    A = !1,
    N = null,
    C = new Set();
function R(e) {
    null != i && null != v ? i(v) : null != a && a(e), (i = null), (a = null);
}
function O(e) {
    R(), (_ = e.skuId), (p = e.applicationId), (y = e.isIAP), (m = e.analyticsLocation), (N = e.context), (A = e.isGift), (S = !0), (b = !1), (i = e.resolve), (a = e.reject), (T = null), (v = null), (g = e.promotionId);
}
function D(e) {
    let { error: n } = e;
    (S = !1), (N = null), R(n);
}
function L(e) {
    let { skuId: n } = e;
    C.add(n);
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
        C.delete(n);
}
function w(e) {
    let { skuId: n } = e;
    C.delete(n);
}
function P() {
    I = !0;
}
function M(e) {
    let { entitlements: n, giftCode: r } = e;
    (I = !1), (v = n), (h = r);
}
function k(e) {
    let { giftCode: n } = e;
    if (0 !== n.uses || n.sku_id !== _) return !1;
    h = n.code;
}
function U(e) {
    let { error: n } = e;
    (I = !1), (T = n);
}
function B() {
    b = !0;
}
function G() {
    T = null;
}
function Z(e) {
    A = e.isGift;
}
function F(e) {
    let { locked: n } = e;
    if (!n || null == N) return !1;
    (S = !1), (N = null), R();
}
class V extends (s = l.ZP.Store) {
    getPricesForSku(e) {
        return E[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? c.IlC.OVERLAY : c.IlC.APP;
        return N === e && S;
    }
    get isPurchasingSKU() {
        return I;
    }
    get forceConfirmationStepOnMount() {
        return b;
    }
    get error() {
        return T;
    }
    get skuId() {
        return _;
    }
    get applicationId() {
        return p;
    }
    get analyticsLocation() {
        return m;
    }
    get promotionId() {
        return g;
    }
    get isIAP() {
        return y;
    }
    get giftCode() {
        return h;
    }
    get isGift() {
        return A;
    }
    isFetchingSKU(e) {
        return C.has(e);
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
