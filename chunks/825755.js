n.d(t, { A: () => D });
var o = n(17928),
    r = n(228366),
    a = n(845584),
    i = n(71532);
let l = "",
    u = null,
    s = "",
    _ = null,
    d = !1,
    C = null,
    E = "",
    p = "",
    h = "",
    c = "",
    A = "",
    y = "",
    I = "",
    m = "",
    T = !1,
    S = null,
    R = null,
    N = null,
    g = null;
function O() {
    (_ = null),
        (l = ""),
        (u = null),
        (s = ""),
        (d = !1),
        (C = null),
        (E = "US"),
        (p = ""),
        (h = ""),
        (c = ""),
        (A = ""),
        (y = ""),
        (I = ""),
        (m = ""),
        (T = !1),
        (S = null),
        (R = null),
        (N = null),
        (g = null);
}
function P(e) {
    (p = e.name),
        (E = e.country),
        (c = e.line1),
        (A = e.line2),
        (y = e.city),
        (I = e.postalCode),
        (m = e.state),
        (h = e.email);
}
function M() {
    S = null;
}
function f(e) {
    let { error: t } = e;
    S = t;
}
function L(e) {
    let { message: t } = e;
    S = new a.Ey(t);
}
class U extends o.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get stripePaymentMethod() {
        return _;
    }
    get popupCallbackCalled() {
        return N;
    }
    get braintreeEmail() {
        return l;
    }
    get braintreeNonce() {
        return u;
    }
    get venmoUsername() {
        return s;
    }
    get redirectedPaymentId() {
        return R;
    }
    get adyenPaymentData() {
        return C;
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
        return { name: p, email: h, country: E, line1: c, line2: A, city: y, postalCode: I, state: m };
    }
    get isBillingAddressInfoValid() {
        return T;
    }
    get error() {
        return S;
    }
}
let D = new U(r.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let { stripePaymentMethod: t } = e;
        if (null == t) return void O();
        _ = t;
        let { billingAddressInfo: n } = i.uK(_);
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
            (c = t.line1),
            (A = t.line2),
            (y = t.city),
            (I = t.postalCode),
            (m = t.state),
            (h = t.email),
            (T = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (l = ""), (u = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: o } = e;
        (l = t), (u = n), P(o), (T = E.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (s = ""), (u = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (s = t), (u = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: L,
    BRAINTREE_TOKENIZE_VENMO_FAIL: L,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        C = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: M,
    MODAL_POP: M,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: M,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: f,
    STRIPE_TOKEN_FAILURE: f,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: O,
    LOGOUT: O,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((N = !0), (R = t.payment_id))
            : t?.payment_source_id != null && ((N = !0), (g = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (N = !1), (R = null);
    },
});
