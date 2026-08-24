n.d(t, { A: () => L });
var r = n(17928),
    l = n(228366),
    i = n(913122);
let o = "",
    u = null,
    s = "",
    a = !1,
    c = null,
    d = "",
    E = "",
    C = "",
    _ = "",
    h = "",
    A = "",
    p = "",
    I = "",
    S = !1,
    f = null,
    N = null,
    T = null,
    g = null;
function m() {
    (o = ""),
        (u = null),
        (s = ""),
        (a = !1),
        (c = null),
        (d = "US"),
        (E = ""),
        (C = ""),
        (_ = ""),
        (h = ""),
        (A = ""),
        (p = ""),
        (I = ""),
        (S = !1),
        (f = null),
        (N = null),
        (T = null),
        (g = null);
}
function R() {
    f = null;
}
function P(e) {
    let { error: t } = e;
    f = t;
}
function y(e) {
    let { message: t } = e;
    f = new i.Ey(t);
}
class O extends r.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get popupCallbackCalled() {
        return T;
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
        return N;
    }
    get adyenPaymentData() {
        return c;
    }
    get redirectedPaymentSourceId() {
        return g;
    }
    clearRedirectedPaymentSourceId() {
        g = null;
    }
    getCreditCardInfo() {
        return { name: E };
    }
    get isCardInfoValid() {
        return a;
    }
    getBillingAddressInfo() {
        return { name: E, email: C, country: d, line1: _, line2: h, city: A, postalCode: p, state: I };
    }
    get isBillingAddressInfoValid() {
        return S;
    }
    get error() {
        return f;
    }
}
let L = new O(l.h, {
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (E = t.name), (a = n);
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        null != t.name && "" !== t.name && (E = t.name),
            (d = t.country),
            (E = t.name),
            (_ = t.line1),
            (h = t.line2),
            (A = t.city),
            (p = t.postalCode),
            (I = t.state),
            (C = t.email),
            (S = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        (o = ""), (u = null);
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: r } = e;
        (o = t),
            (u = n),
            (E = r.name),
            (d = r.country),
            (_ = r.line1),
            (h = r.line2),
            (A = r.city),
            (p = r.postalCode),
            (I = r.state),
            (C = r.email),
            (S = d.length > 0);
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        (s = ""), (u = null);
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        (s = t), (u = n);
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: y,
    BRAINTREE_TOKENIZE_VENMO_FAIL: y,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        c = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: R,
    MODAL_POP: R,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: R,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: P,
    STRIPE_TOKEN_FAILURE: P,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: m,
    LOGOUT: m,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((T = !0), (N = t.payment_id))
            : t?.payment_source_id != null && ((T = !0), (g = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        (T = !1), (N = null);
    },
});
