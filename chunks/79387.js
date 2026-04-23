"use strict";
let i, r;
n.d(t, { A: () => O, B: () => l });
var s = n(17928),
    a = n(228366),
    o = n(652215);
let l = "no_payment_source",
    d = null,
    _ = null,
    u = null,
    c = null,
    E = null,
    h = {},
    m = null,
    f = !1,
    g = null,
    p = !1,
    A = !1,
    I = !1,
    T = !1,
    S = null,
    N = new Set();
function C(e) {
    null != i && null != m ? i(m) : null != r && r(e), (i = null), (r = null);
}
class R extends s.Ay.Store {
    static displayName = "SKUPaymentModalStore";
    getPricesForSku(e) {
        return h[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? o.BRT.OVERLAY : o.BRT.APP;
        return S === e && I;
    }
    get isPurchasingSKU() {
        return f;
    }
    get forceConfirmationStepOnMount() {
        return p;
    }
    get error() {
        return g;
    }
    get skuId() {
        return d;
    }
    get applicationId() {
        return u;
    }
    get analyticsLocation() {
        return c;
    }
    get promotionId() {
        return E;
    }
    get isIAP() {
        return A;
    }
    get giftCode() {
        return _;
    }
    get isGift() {
        return T;
    }
    isFetchingSKU(e) {
        return N.has(e);
    }
}
let O = new R(a.h, {
    SKU_PURCHASE_MODAL_OPEN: function (e) {
        C(),
            (d = e.skuId),
            (u = e.applicationId),
            (A = e.isIAP),
            (c = e.analyticsLocation),
            (S = e.context),
            (T = e.isGift),
            (I = !0),
            (p = !1),
            (i = e.resolve),
            (r = e.reject),
            (g = null),
            (m = null),
            (E = e.promotionId);
    },
    SKU_PURCHASE_MODAL_CLOSE: function (e) {
        let { error: t } = e;
        (I = !1), (S = null), C(t);
    },
    SKU_PURCHASE_PREVIEW_FETCH: function (e) {
        let { skuId: t } = e;
        N.add(t);
    },
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function (e) {
        let { skuId: t, paymentSourceId: n, price: i } = e;
        (h = { ...h, [t]: { ...h[t], [null != n ? n : l]: i } }), N.delete(t);
    },
    SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function (e) {
        let { skuId: t } = e;
        N.delete(t);
    },
    SKU_PURCHASE_START: function () {
        f = !0;
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        let { entitlements: t, giftCode: n } = e;
        (f = !1), (m = t), (_ = n);
    },
    SKU_PURCHASE_FAIL: function (e) {
        let { error: t } = e;
        (f = !1), (g = t);
    },
    SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function () {
        p = !0;
    },
    SKU_PURCHASE_CLEAR_ERROR: function () {
        g = null;
    },
    SKU_PURCHASE_UPDATE_IS_GIFT: function (e) {
        T = e.isGift;
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (!t || null == S) return !1;
        (I = !1), (S = null), C();
    },
    GIFT_CODE_CREATE: function (e) {
        let { giftCode: t } = e;
        if (0 !== t.uses || t.sku_id !== d) return !1;
        _ = t.code;
    },
});
