n.d(t, { A: () => M });
var r = n(17928),
    l = n(228366),
    i = n(913122),
    o = n(71532);
let u = "",
    s = null,
    a = "",
    c = null,
    d = !1,
    E = null,
    C = "",
    _ = "",
    h = "",
    A = "",
    p = "",
    I = "",
    S = "",
    f = "",
    N = !1,
    T = null,
    g = null,
    m = null,
    R = null;
function P() {
    (c = null),
        (u = ""),
        (s = null),
        (a = ""),
        (d = !1),
        (E = null),
        (C = "US"),
        (_ = ""),
        (h = ""),
        (A = ""),
        (p = ""),
        (I = ""),
        (S = ""),
        (f = ""),
        (N = !1),
        (T = null),
        (g = null),
        (m = null),
        (R = null);
}
function y(e) {
    (_ = e.name),
        (C = e.country),
        (A = e.line1),
        (p = e.line2),
        (I = e.city),
        (S = e.postalCode),
        (f = e.state),
        (h = e.email);
}
function O() {
    T = null;
}
function L(e) {
    let { error: t } = e;
    T = t;
}
function U(e) {
    let { message: t } = e;
    T = new i.Ey(t);
}
class F extends r.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get stripePaymentMethod() {
        return c;
    }
    get popupCallbackCalled() {
        return m;
    }
    get braintreeEmail() {
        return u;
    }
    get braintreeNonce() {
        return s;
    }
    get venmoUsername() {
        return a;
    }
    get redirectedPaymentId() {
        return g;
    }
    get adyenPaymentData() {
        return E;
    }
    get redirectedPaymentSourceId() {
        return R;
    }
    clearRedirectedPaymentSourceId() {
        R = null;
    }
    getCreditCardInfo() {
        return { name: _ };
    }
    get isCardInfoValid() {
        return d;
    }
    getBillingAddressInfo() {
        return { name: _, email: h, country: C, line1: A, line2: p, city: I, postalCode: S, state: f };
    }
    get isBillingAddressInfoValid() {
        return N;
    }
    get error() {
        return T;
    }
}
let M = new F(l.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let { stripePaymentMethod: t } = e;
        if (null == t) return void P();
        c = t;
        let { billingAddressInfo: n } = o.uK(c);
        y(n);
    },
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (_ = t.name), (d = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (_ = t.name),
            (C = t.country),
            (_ = t.name),
            (A = t.line1),
            (p = t.line2),
            (I = t.city),
            (S = t.postalCode),
            (f = t.state),
            (h = t.email),
            (N = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (u = ""), (s = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: r } = e;
        (u = t), (s = n), y(r), (N = C.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (a = ""), (s = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (a = t), (s = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: U,
    BRAINTREE_TOKENIZE_VENMO_FAIL: U,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        E = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: O,
    MODAL_POP: O,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: O,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: L,
    STRIPE_TOKEN_FAILURE: L,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: P,
    LOGOUT: P,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((m = !0), (g = t.payment_id))
            : t?.payment_source_id != null && ((m = !0), (R = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (m = !1), (g = null);
    },
});
