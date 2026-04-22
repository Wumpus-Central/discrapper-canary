"use strict";
let r, i;
n.d(t, { A: () => R, B: () => l });
var s = n(311907),
    a = n(73153),
    o = n(652215);
let l = "no_payment_source",
    u = null,
    d = null,
    c = null,
    _ = null,
    f = null,
    E = {},
    h = null,
    p = !1,
    m = null,
    g = !1,
    A = !1,
    I = !1,
    T = !1,
    S = null,
    y = new Set();
function N(e) {
    null != r && null != h ? r(h) : null != i && i(e), (r = null), (i = null);
}
class O extends s.Ay.Store {
    static displayName = "SKUPaymentModalStore";
    getPricesForSku(e) {
        return E[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? o.BRT.OVERLAY : o.BRT.APP;
        return S === e && I;
    }
    get isPurchasingSKU() {
        return p;
    }
    get forceConfirmationStepOnMount() {
        return g;
    }
    get error() {
        return m;
    }
    get skuId() {
        return u;
    }
    get applicationId() {
        return c;
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
        return d;
    }
    get isGift() {
        return T;
    }
    isFetchingSKU(e) {
        return y.has(e);
    }
}
let R = new O(a.h, {
    SKU_PURCHASE_MODAL_OPEN: function (e) {
        N(),
            (u = e.skuId),
            (c = e.applicationId),
            (A = e.isIAP),
            (_ = e.analyticsLocation),
            (S = e.context),
            (T = e.isGift),
            (I = !0),
            (g = !1),
            (r = e.resolve),
            (i = e.reject),
            (m = null),
            (h = null),
            (f = e.promotionId);
    },
    SKU_PURCHASE_MODAL_CLOSE: function (e) {
        let { error: t } = e;
        (I = !1), (S = null), N(t);
    },
    SKU_PURCHASE_PREVIEW_FETCH: function (e) {
        let { skuId: t } = e;
        y.add(t);
    },
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function (e) {
        let { skuId: t, paymentSourceId: n, price: r } = e;
        (E = { ...E, [t]: { ...E[t], [null != n ? n : l]: r } }), y.delete(t);
    },
    SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function (e) {
        let { skuId: t } = e;
        y.delete(t);
    },
    SKU_PURCHASE_START: function () {
        p = !0;
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        let { entitlements: t, giftCode: n } = e;
        (p = !1), (h = t), (d = n);
    },
    SKU_PURCHASE_FAIL: function (e) {
        let { error: t } = e;
        (p = !1), (m = t);
    },
    SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function () {
        g = !0;
    },
    SKU_PURCHASE_CLEAR_ERROR: function () {
        m = null;
    },
    SKU_PURCHASE_UPDATE_IS_GIFT: function (e) {
        T = e.isGift;
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (!t || null == S) return !1;
        (I = !1), (S = null), N();
    },
    GIFT_CODE_CREATE: function (e) {
        let { giftCode: t } = e;
        if (0 !== t.uses || t.sku_id !== u) return !1;
        d = t.code;
    },
});
