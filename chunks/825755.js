n.d(t, { A: () => v });
var l = n(17928),
    r = n(228366),
    i = n(913122),
    a = n(71532);
let o = "",
    s = null,
    u = "",
    c = null,
    d = !1,
    m = null,
    E = "",
    p = "",
    C = "",
    _ = "",
    h = "",
    A = "",
    N = "",
    T = "",
    I = !1,
    f = null,
    S = null,
    y = null,
    g = null;
function R() {
    (c = null),
        (o = ""),
        (s = null),
        (u = ""),
        (d = !1),
        (m = null),
        (E = "US"),
        (p = ""),
        (C = ""),
        (_ = ""),
        (h = ""),
        (A = ""),
        (N = ""),
        (T = ""),
        (I = !1),
        (f = null),
        (S = null),
        (y = null),
        (g = null);
}
function P(e) {
    (p = e.name),
        (E = e.country),
        (_ = e.line1),
        (h = e.line2),
        (A = e.city),
        (N = e.postalCode),
        (T = e.state),
        (C = e.email);
}
function O() {
    f = null;
}
function x(e) {
    let { error: t } = e;
    f = t;
}
function M(e) {
    let { message: t } = e;
    f = new i.Ey(t);
}
class j extends l.Ay.Store {
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
        return s;
    }
    get venmoUsername() {
        return u;
    }
    get redirectedPaymentId() {
        return S;
    }
    get adyenPaymentData() {
        return m;
    }
    get redirectedPaymentSourceId() {
        return g;
    }
    clearRedirectedPaymentSourceId() {
        g = null;
    }
    getCreditCardInfo() {
        return { name: p };
    }
    get isCardInfoValid() {
        return d;
    }
    getBillingAddressInfo() {
        return { name: p, email: C, country: E, line1: _, line2: h, city: A, postalCode: N, state: T };
    }
    get isBillingAddressInfoValid() {
        return I;
    }
    get error() {
        return f;
    }
}
let v = new j(r.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let { stripePaymentMethod: t } = e;
        if (null == t) return void R();
        c = t;
        let { billingAddressInfo: n } = a.uK(c);
        P(n);
    },
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (p = t.name), (d = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (p = t.name),
            (E = t.country),
            (p = t.name),
            (_ = t.line1),
            (h = t.line2),
            (A = t.city),
            (N = t.postalCode),
            (T = t.state),
            (C = t.email),
            (I = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (o = ""), (s = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: l } = e;
        (o = t), (s = n), P(l), (I = E.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (u = ""), (s = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (u = t), (s = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: M,
    BRAINTREE_TOKENIZE_VENMO_FAIL: M,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        m = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: O,
    MODAL_POP: O,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: O,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: x,
    STRIPE_TOKEN_FAILURE: x,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    LOGOUT: R,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((y = !0), (S = t.payment_id))
            : t?.payment_source_id != null && ((y = !0), (g = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (y = !1), (S = null);
    },
});
