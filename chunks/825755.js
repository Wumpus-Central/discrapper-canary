n.d(t, { A: () => x });
var r = n(17928),
    a = n(228366),
    i = n(845584),
    o = n(71532);
let l = "",
    s = null,
    d = "",
    u = null,
    c = !1,
    _ = null,
    p = "",
    C = "",
    h = "",
    E = "",
    m = "",
    A = "",
    I = "",
    T = "",
    y = !1,
    g = null,
    S = null,
    N = null,
    f = null;
function R() {
    (u = null),
        (l = ""),
        (s = null),
        (d = ""),
        (c = !1),
        (_ = null),
        (p = "US"),
        (C = ""),
        (h = ""),
        (E = ""),
        (m = ""),
        (A = ""),
        (I = ""),
        (T = ""),
        (y = !1),
        (g = null),
        (S = null),
        (N = null),
        (f = null);
}
function L(e) {
    (C = e.name),
        (p = e.country),
        (E = e.line1),
        (m = e.line2),
        (A = e.city),
        (I = e.postalCode),
        (T = e.state),
        (h = e.email);
}
function O() {
    g = null;
}
function P(e) {
    let { error: t } = e;
    g = t;
}
function b(e) {
    let { message: t } = e;
    g = new i.Ey(t);
}
class M extends r.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get stripePaymentMethod() {
        return u;
    }
    get popupCallbackCalled() {
        return N;
    }
    get braintreeEmail() {
        return l;
    }
    get braintreeNonce() {
        return s;
    }
    get venmoUsername() {
        return d;
    }
    get redirectedPaymentId() {
        return S;
    }
    get adyenPaymentData() {
        return _;
    }
    get redirectedPaymentSourceId() {
        return f;
    }
    clearRedirectedPaymentSourceId() {
        f = null;
    }
    getCreditCardInfo() {
        return { name: C };
    }
    get isCardInfoValid() {
        return c;
    }
    getBillingAddressInfo() {
        return { name: C, email: h, country: p, line1: E, line2: m, city: A, postalCode: I, state: T };
    }
    get isBillingAddressInfoValid() {
        return y;
    }
    get error() {
        return g;
    }
}
let x = new M(a.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let { stripePaymentMethod: t } = e;
        if (null == t) return void R();
        u = t;
        let { billingAddressInfo: n } = o.uK(u);
        L(n);
    },
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (C = t.name), (c = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (C = t.name),
            (p = t.country),
            (C = t.name),
            (E = t.line1),
            (m = t.line2),
            (A = t.city),
            (I = t.postalCode),
            (T = t.state),
            (h = t.email),
            (y = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (l = ""), (s = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: r } = e;
        (l = t), (s = n), L(r), (y = p.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (d = ""), (s = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (d = t), (s = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: b,
    BRAINTREE_TOKENIZE_VENMO_FAIL: b,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        _ = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: O,
    MODAL_POP: O,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: O,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: P,
    STRIPE_TOKEN_FAILURE: P,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    LOGOUT: R,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((N = !0), (S = t.payment_id))
            : t?.payment_source_id != null && ((N = !0), (f = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (N = !1), (S = null);
    },
});
