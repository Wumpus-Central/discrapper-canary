n.d(t, { A: () => b });
var l = n(17928),
    i = n(228366),
    r = n(913122);
let a = "",
    s = null,
    o = "",
    u = !1,
    c = null,
    d = "",
    p = "",
    m = "",
    h = "",
    C = "",
    f = "",
    E = "",
    S = "",
    y = !1,
    I = null,
    g = null,
    A = null,
    P = null;
function v() {
    ((a = ""),
        (s = null),
        (o = ""),
        (u = !1),
        (c = null),
        (d = "US"),
        (p = ""),
        (m = ""),
        (h = ""),
        (C = ""),
        (f = ""),
        (E = ""),
        (S = ""),
        (y = !1),
        (I = null),
        (g = null),
        (A = null),
        (P = null));
}
function _() {
    I = null;
}
function x(e) {
    let { error: t } = e;
    I = t;
}
function T(e) {
    let { message: t } = e;
    I = new r.Ey(t);
}
class N extends l.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get popupCallbackCalled() {
        return A;
    }
    get braintreeEmail() {
        return a;
    }
    get braintreeNonce() {
        return s;
    }
    get venmoUsername() {
        return o;
    }
    get redirectedPaymentId() {
        return g;
    }
    get adyenPaymentData() {
        return c;
    }
    get redirectedPaymentSourceId() {
        return P;
    }
    clearRedirectedPaymentSourceId() {
        P = null;
    }
    getCreditCardInfo() {
        return { name: p };
    }
    get isCardInfoValid() {
        return u;
    }
    getBillingAddressInfo() {
        return { name: p, email: m, country: d, line1: h, line2: C, city: f, postalCode: E, state: S };
    }
    get isBillingAddressInfoValid() {
        return y;
    }
    get error() {
        return I;
    }
}
let b = new N(i.h, {
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        ((p = t.name), (u = n));
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (null != t.name && "" !== t.name && (p = t.name),
            (d = t.country),
            (p = t.name),
            (h = t.line1),
            (C = t.line2),
            (f = t.city),
            (E = t.postalCode),
            (S = t.state),
            (m = t.email),
            (y = n));
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        ((a = ""), (s = null));
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: l } = e;
        ((a = t),
            (s = n),
            (p = l.name),
            (d = l.country),
            (h = l.line1),
            (C = l.line2),
            (f = l.city),
            (E = l.postalCode),
            (S = l.state),
            (m = l.email),
            (y = d.length > 0));
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        ((o = ""), (s = null));
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let { username: t, nonce: n } = e;
        ((o = t), (s = n));
    },
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: T,
    BRAINTREE_TOKENIZE_VENMO_FAIL: T,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let { data: t } = e;
        c = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: _,
    MODAL_POP: _,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: _,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: x,
    STRIPE_TOKEN_FAILURE: x,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: v,
    LOGOUT: v,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((A = !0), (g = t.payment_id))
            : t?.payment_source_id != null && ((A = !0), (P = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        ((A = !1), (g = null));
    },
});
