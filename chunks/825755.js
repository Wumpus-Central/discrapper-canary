"use strict";
n.d(t, { A: () => w });
var r = n(311907),
    i = n(73153),
    s = n(198982),
    a = n(71532);
let o = "",
    l = null,
    u = "",
    d = null,
    c = !1,
    _ = null,
    f = "",
    E = "",
    h = "",
    p = "",
    m = "",
    g = "",
    A = "",
    I = "",
    T = !1,
    S = null,
    y = null,
    N = null,
    O = null;
function R() {
    (d = null),
        (o = ""),
        (l = null),
        (u = ""),
        (c = !1),
        (_ = null),
        (f = "US"),
        (E = ""),
        (h = ""),
        (p = ""),
        (m = ""),
        (g = ""),
        (A = ""),
        (I = ""),
        (T = !1),
        (S = null),
        (y = null),
        (N = null),
        (O = null);
}
function v(e) {
    (E = e.name),
        (f = e.country),
        (p = e.line1),
        (m = e.line2),
        (g = e.city),
        (A = e.postalCode),
        (I = e.state),
        (h = e.email);
}
function C() {
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
class L extends r.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get stripePaymentMethod() {
        return d;
    }
    get popupCallbackCalled() {
        return N;
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
        return y;
    }
    get adyenPaymentData() {
        return _;
    }
    get redirectedPaymentSourceId() {
        return O;
    }
    clearRedirectedPaymentSourceId() {
        O = null;
    }
    getCreditCardInfo() {
        return { name: E };
    }
    get isCardInfoValid() {
        return c;
    }
    getBillingAddressInfo() {
        return { name: E, email: h, country: f, line1: p, line2: m, city: g, postalCode: A, state: I };
    }
    get isBillingAddressInfoValid() {
        return T;
    }
    get error() {
        return S;
    }
}
let w = new L(i.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let { stripePaymentMethod: t } = e;
        if (null == t) return void R();
        d = t;
        let { billingAddressInfo: n } = a.uK(d);
        v(n);
    },
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (E = t.name), (c = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (E = t.name),
            (f = t.country),
            (E = t.name),
            (p = t.line1),
            (m = t.line2),
            (g = t.city),
            (A = t.postalCode),
            (I = t.state),
            (h = t.email),
            (T = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (o = ""), (l = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: r } = e;
        (o = t), (l = n), v(r), (T = f.length > 0);
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
    BILLING_PAYMENT_SOURCE_CREATE_START: C,
    MODAL_POP: C,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: C,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: b,
    STRIPE_TOKEN_FAILURE: b,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    LOGOUT: R,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((N = !0), (y = t.payment_id))
            : t?.payment_source_id != null && ((N = !0), (O = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (N = !1), (y = null);
    },
});
