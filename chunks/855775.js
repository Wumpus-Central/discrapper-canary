let r, i;
n.d(t, {
    Z: () => H,
    c: () => p,
}),
    n(388685);
var a,
    o = n(442837),
    s = n(570140),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = "no_payment_source",
    _ = null,
    m = null,
    h = null,
    g = null,
    E = null,
    b = {},
    y = null,
    O = !1,
    v = null,
    S = !1,
    I = !1,
    T = !1,
    C = !1,
    A = null,
    N = new Set();
function P(e) {
    null != r && null != y ? r(y) : null != i && i(e), (r = null), (i = null);
}
function R(e) {
    P(),
        (_ = e.skuId),
        (h = e.applicationId),
        (I = e.isIAP),
        (g = e.analyticsLocation),
        (A = e.context),
        (C = e.isGift),
        (T = !0),
        (S = !1),
        (r = e.resolve),
        (i = e.reject),
        (v = null),
        (y = null),
        (E = e.promotionId);
}
function w(e) {
    let { error: t } = e;
    (T = !1), (A = null), P(t);
}
function D(e) {
    let { skuId: t } = e;
    N.add(t);
}
function x(e) {
    let { skuId: t, paymentSourceId: n, price: r } = e;
    (b = f(u({}, b), { [t]: f(u({}, b[t]), { [null != n ? n : p]: r }) })), N.delete(t);
}
function L(e) {
    let { skuId: t } = e;
    N.delete(t);
}
function j() {
    O = !0;
}
function M(e) {
    let { entitlements: t, giftCode: n } = e;
    (O = !1), (y = t), (m = n);
}
function k(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== _) return !1;
    m = t.code;
}
function U(e) {
    let { error: t } = e;
    (O = !1), (v = t);
}
function G() {
    S = !0;
}
function Z() {
    v = null;
}
function F(e) {
    C = e.isGift;
}
function B(e) {
    let { locked: t } = e;
    if (!t || null == A) return !1;
    (T = !1), (A = null), P();
}
class V extends (a = o.ZP.Store) {
    getPricesForSku(e) {
        return b[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? l.IlC.OVERLAY : l.IlC.APP;
        return A === e && T;
    }
    get isPurchasingSKU() {
        return O;
    }
    get forceConfirmationStepOnMount() {
        return S;
    }
    get error() {
        return v;
    }
    get skuId() {
        return _;
    }
    get applicationId() {
        return h;
    }
    get analyticsLocation() {
        return g;
    }
    get promotionId() {
        return E;
    }
    get isIAP() {
        return I;
    }
    get giftCode() {
        return m;
    }
    get isGift() {
        return C;
    }
    isFetchingSKU(e) {
        return N.has(e);
    }
}
c(V, "displayName", "SKUPaymentModalStore");
let H = new V(s.Z, {
    SKU_PURCHASE_MODAL_OPEN: R,
    SKU_PURCHASE_MODAL_CLOSE: w,
    SKU_PURCHASE_PREVIEW_FETCH: D,
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: x,
    SKU_PURCHASE_PREVIEW_FETCH_FAILURE: L,
    SKU_PURCHASE_START: j,
    SKU_PURCHASE_SUCCESS: M,
    SKU_PURCHASE_FAIL: U,
    SKU_PURCHASE_SHOW_CONFIRMATION_STEP: G,
    SKU_PURCHASE_CLEAR_ERROR: Z,
    SKU_PURCHASE_UPDATE_IS_GIFT: F,
    OVERLAY_SET_INPUT_LOCKED: B,
    GIFT_CODE_CREATE: k,
});
