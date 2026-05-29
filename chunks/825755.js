n.d(t, { A: () => L });
var l = n(17928),
    r = n(228366),
    i = n(913122),
    a = n(71532);
let s = "",
    o = null,
    u = "",
    c = null,
    d = !1,
    p = null,
    m = "",
    h = "",
    A = "",
    C = "",
    E = "",
    y = "",
    P = "",
    S = "",
    _ = !1,
    I = null,
    f = null,
    T = null,
    N = null;
function v() {
    (c = null),
        (s = ""),
        (o = null),
        (u = ""),
        (d = !1),
        (p = null),
        (m = "US"),
        (h = ""),
        (A = ""),
        (C = ""),
        (E = ""),
        (y = ""),
        (P = ""),
        (S = ""),
        (_ = !1),
        (I = null),
        (f = null),
        (T = null),
        (N = null);
}
function g(e) {
    (h = e.name),
        (m = e.country),
        (C = e.line1),
        (E = e.line2),
        (y = e.city),
        (P = e.postalCode),
        (S = e.state),
        (A = e.email);
}
function x() {
    I = null;
}
function R(e) {
    let { error: t } = e;
    I = t;
}
function M(e) {
    let { message: t } = e;
    I = new i.Ey(t);
}
class b extends l.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get stripePaymentMethod() {
        return c;
    }
    get popupCallbackCalled() {
        return T;
    }
    get braintreeEmail() {
        return s;
    }
    get braintreeNonce() {
        return o;
    }
    get venmoUsername() {
        return u;
    }
    get redirectedPaymentId() {
        return f;
    }
    get adyenPaymentData() {
        return p;
    }
    get redirectedPaymentSourceId() {
        return N;
    }
    clearRedirectedPaymentSourceId() {
        N = null;
    }
    getCreditCardInfo() {
        return { name: h };
    }
    get isCardInfoValid() {
        return d;
    }
    getBillingAddressInfo() {
        return { name: h, email: A, country: m, line1: C, line2: E, city: y, postalCode: P, state: S };
    }
    get isBillingAddressInfoValid() {
        return _;
    }
    get error() {
        return I;
    }
}
let L = new b(r.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let { stripePaymentMethod: t } = e;
        if (null == t) return void v();
        c = t;
        let { billingAddressInfo: n } = a.uK(c);
        g(n);
    },
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (h = t.name), (d = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (h = t.name),
            (m = t.country),
            (h = t.name),
            (C = t.line1),
            (E = t.line2),
            (y = t.city),
            (P = t.postalCode),
            (S = t.state),
            (A = t.email),
            (_ = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (s = ""), (o = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: l } = e;
        (s = t), (o = n), g(l), (_ = m.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (u = ""), (o = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (u = t), (o = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: M,
    BRAINTREE_TOKENIZE_VENMO_FAIL: M,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        p = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: x,
    MODAL_POP: x,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: x,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: R,
    STRIPE_TOKEN_FAILURE: R,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: v,
    LOGOUT: v,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((T = !0), (f = t.payment_id))
            : t?.payment_source_id != null && ((T = !0), (N = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (T = !1), (f = null);
    },
});
