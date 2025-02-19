let r, i;
n.d(t, {
    Z: () => H,
    c: () => p
}),
    n(47120);
var o,
    a = n(442837),
    s = n(570140),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let p = 'no_payment_source',
    _ = null,
    h = null,
    m = null,
    g = null,
    E = null,
    v = {},
    b = null,
    y = !1,
    O = null,
    S = !1,
    I = !1,
    T = !1,
    N = !1,
    A = null,
    C = new Set();
function R(e) {
    null != r && null != b ? r(b) : null != i && i(e), (r = null), (i = null);
}
function P(e) {
    R(), (_ = e.skuId), (m = e.applicationId), (I = e.isIAP), (g = e.analyticsLocation), (A = e.context), (N = e.isGift), (T = !0), (S = !1), (r = e.resolve), (i = e.reject), (O = null), (b = null), (E = e.promotionId);
}
function w(e) {
    let { error: t } = e;
    (T = !1), (A = null), R(t);
}
function D(e) {
    let { skuId: t } = e;
    C.add(t);
}
function x(e) {
    let { skuId: t, paymentSourceId: n, price: r } = e;
    (v = f(u({}, v), { [t]: f(u({}, v[t]), { [null != n ? n : p]: r }) })), C.delete(t);
}
function L(e) {
    let { skuId: t } = e;
    C.delete(t);
}
function M() {
    y = !0;
}
function k(e) {
    let { entitlements: t, giftCode: n } = e;
    (y = !1), (b = t), (h = n);
}
function j(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== _) return !1;
    h = t.code;
}
function U(e) {
    let { error: t } = e;
    (y = !1), (O = t);
}
function G() {
    S = !0;
}
function B() {
    O = null;
}
function Z(e) {
    N = e.isGift;
}
function F(e) {
    let { locked: t } = e;
    if (!t || null == A) return !1;
    (T = !1), (A = null), R();
}
class V extends (o = a.ZP.Store) {
    getPricesForSku(e) {
        return v[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? l.IlC.OVERLAY : l.IlC.APP;
        return A === e && T;
    }
    get isPurchasingSKU() {
        return y;
    }
    get forceConfirmationStepOnMount() {
        return S;
    }
    get error() {
        return O;
    }
    get skuId() {
        return _;
    }
    get applicationId() {
        return m;
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
        return h;
    }
    get isGift() {
        return N;
    }
    isFetchingSKU(e) {
        return C.has(e);
    }
}
c(V, 'displayName', 'SKUPaymentModalStore');
let H = new V(s.Z, {
    SKU_PURCHASE_MODAL_OPEN: P,
    SKU_PURCHASE_MODAL_CLOSE: w,
    SKU_PURCHASE_PREVIEW_FETCH: D,
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: x,
    SKU_PURCHASE_PREVIEW_FETCH_FAILURE: L,
    SKU_PURCHASE_START: M,
    SKU_PURCHASE_SUCCESS: k,
    SKU_PURCHASE_FAIL: U,
    SKU_PURCHASE_SHOW_CONFIRMATION_STEP: G,
    SKU_PURCHASE_CLEAR_ERROR: B,
    SKU_PURCHASE_UPDATE_IS_GIFT: Z,
    OVERLAY_SET_INPUT_LOCKED: F,
    GIFT_CODE_CREATE: j
});
