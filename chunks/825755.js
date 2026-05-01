"use strict";
n.d(t, { A: () => w });
var i = n(17928),
    r = n(228366),
    s = n(845584),
    a = n(71532);
let o = "",
    l = null,
    u = "",
    c = null,
    d = !1,
    _ = null,
    f = "",
    h = "",
    p = "",
    E = "",
    m = "",
    g = "",
    A = "",
    I = "",
    T = !1,
    S = null,
    N = null,
    y = null,
    C = null;
function v() {
    (c = null),
        (o = ""),
        (l = null),
        (u = ""),
        (d = !1),
        (_ = null),
        (f = "US"),
        (h = ""),
        (p = ""),
        (E = ""),
        (m = ""),
        (g = ""),
        (A = ""),
        (I = ""),
        (T = !1),
        (S = null),
        (N = null),
        (y = null),
        (C = null);
}
function O(e) {
    (h = e.name),
        (f = e.country),
        (E = e.line1),
        (m = e.line2),
        (g = e.city),
        (A = e.postalCode),
        (I = e.state),
        (p = e.email);
}
function R() {
    S = null;
}
function b(e) {
    let { error: t } = e;
    S = t;
}
function D(e) {
    let { message: t } = e;
    S = new s.Ey(t);
}
class L extends i.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get stripePaymentMethod() {
        return c;
    }
    get popupCallbackCalled() {
        return y;
    }
    get braintreeEmail() {
        return o;
    }
    get braintreeNonce() {
        return l;
    }
    get venmoUsername() {
        return u;
    }
    get redirectedPaymentId() {
        return N;
    }
    get adyenPaymentData() {
        return _;
    }
    get redirectedPaymentSourceId() {
        return C;
    }
    clearRedirectedPaymentSourceId() {
        C = null;
    }
    getCreditCardInfo() {
        return { name: h };
    }
    get isCardInfoValid() {
        return d;
    }
    getBillingAddressInfo() {
        return { name: h, email: p, country: f, line1: E, line2: m, city: g, postalCode: A, state: I };
    }
    get isBillingAddressInfoValid() {
        return T;
    }
    get error() {
        return S;
    }
}
let w = new L(r.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let { stripePaymentMethod: t } = e;
        if (null == t) return void v();
        c = t;
        let { billingAddressInfo: n } = a.uK(c);
        O(n);
    },
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (h = t.name), (d = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (h = t.name),
            (f = t.country),
            (h = t.name),
            (E = t.line1),
            (m = t.line2),
            (g = t.city),
            (A = t.postalCode),
            (I = t.state),
            (p = t.email),
            (T = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (o = ""), (l = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: i } = e;
        (o = t), (l = n), O(i), (T = f.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (u = ""), (l = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (u = t), (l = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: D,
    BRAINTREE_TOKENIZE_VENMO_FAIL: D,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        _ = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: R,
    MODAL_POP: R,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: R,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: b,
    STRIPE_TOKEN_FAILURE: b,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: v,
    LOGOUT: v,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((y = !0), (N = t.payment_id))
            : t?.payment_source_id != null && ((y = !0), (C = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (y = !1), (N = null);
    },
});
