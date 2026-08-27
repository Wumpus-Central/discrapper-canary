n.d(t, { A: () => O });
var l = n(17928),
    r = n(228366),
    i = n(913122);
let o = "",
    u = null,
    s = "",
    a = !1,
    c = null,
    d = "",
    C = "",
    E = "",
    h = "",
    _ = "",
    A = "",
    p = "",
    f = "",
    S = !1,
    I = null,
    g = null,
    N = null,
    T = null;
function m() {
    (o = ""),
        (u = null),
        (s = ""),
        (a = !1),
        (c = null),
        (d = "US"),
        (C = ""),
        (E = ""),
        (h = ""),
        (_ = ""),
        (A = ""),
        (p = ""),
        (f = ""),
        (S = !1),
        (I = null),
        (g = null),
        (N = null),
        (T = null);
}
function R() {
    I = null;
}
function y(e) {
    let { error: t } = e;
    I = t;
}
function P(e) {
    let { message: t } = e;
    I = new i.Ey(t);
}
class L extends l.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get popupCallbackCalled() {
        return N;
    }
    get braintreeEmail() {
        return o;
    }
    get braintreeNonce() {
        return u;
    }
    get venmoUsername() {
        return s;
    }
    get redirectedPaymentId() {
        return g;
    }
    get adyenPaymentData() {
        return c;
    }
    get redirectedPaymentSourceId() {
        return T;
    }
    clearRedirectedPaymentSourceId() {
        T = null;
    }
    getCreditCardInfo() {
        return { name: C };
    }
    get isCardInfoValid() {
        return a;
    }
    getBillingAddressInfo() {
        return { name: C, email: E, country: d, line1: h, line2: _, city: A, postalCode: p, state: f };
    }
    get isBillingAddressInfoValid() {
        return S;
    }
    get error() {
        return I;
    }
}
let O = new L(r.h, {
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (C = t.name), (a = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (C = t.name),
            (d = t.country),
            (C = t.name),
            (h = t.line1),
            (_ = t.line2),
            (A = t.city),
            (p = t.postalCode),
            (f = t.state),
            (E = t.email),
            (S = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (o = ""), (u = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: l } = e;
        (o = t),
            (u = n),
            (C = l.name),
            (d = l.country),
            (h = l.line1),
            (_ = l.line2),
            (A = l.city),
            (p = l.postalCode),
            (f = l.state),
            (E = l.email),
            (S = d.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (s = ""), (u = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (s = t), (u = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: P,
    BRAINTREE_TOKENIZE_VENMO_FAIL: P,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        c = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: R,
    MODAL_POP: R,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: R,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: y,
    STRIPE_TOKEN_FAILURE: y,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: m,
    LOGOUT: m,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((N = !0), (g = t.payment_id))
            : t?.payment_source_id != null && ((N = !0), (T = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (N = !1), (g = null);
    },
});
