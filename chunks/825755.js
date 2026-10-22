n.d(t, { A: () => b });
var l = n(17928),
    i = n(73153),
    r = n(913122);
let a = "",
    s = null,
    o = "",
    u = !1,
    c = null,
    d = "",
    m = "",
    p = "",
    h = "",
    C = "",
    f = "",
    E = "",
    S = "",
    g = !1,
    I = null,
    A = null,
    y = null,
    x = null;
function P() {
    ((a = ""),
        (s = null),
        (o = ""),
        (u = !1),
        (c = null),
        (d = "US"),
        (m = ""),
        (p = ""),
        (h = ""),
        (C = ""),
        (f = ""),
        (E = ""),
        (S = ""),
        (g = !1),
        (I = null),
        (A = null),
        (y = null),
        (x = null));
}
function v() {
    I = null;
}
function _(e) {
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
        return y;
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
        return A;
    }
    get adyenPaymentData() {
        return c;
    }
    get redirectedPaymentSourceId() {
        return x;
    }
    clearRedirectedPaymentSourceId() {
        x = null;
    }
    getCreditCardInfo() {
        return { name: m };
    }
    get isCardInfoValid() {
        return u;
    }
    getBillingAddressInfo() {
        return { name: m, email: p, country: d, line1: h, line2: C, city: f, postalCode: E, state: S };
    }
    get isBillingAddressInfoValid() {
        return g;
    }
    get error() {
        return I;
    }
}
let b = new N(i.h, {
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        ((m = t.name), (u = n));
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let { info: t, isValid: n } = e;
        (null != t.name && "" !== t.name && (m = t.name),
            (d = t.country),
            (m = t.name),
            (h = t.line1),
            (C = t.line2),
            (f = t.city),
            (E = t.postalCode),
            (S = t.state),
            (p = t.email),
            (g = n));
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        ((a = ""), (s = null));
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let { email: t, nonce: n, billingAddress: l } = e;
        ((a = t),
            (s = n),
            (m = l.name),
            (d = l.country),
            (h = l.line1),
            (C = l.line2),
            (f = l.city),
            (E = l.postalCode),
            (S = l.state),
            (p = l.email),
            (g = d.length > 0));
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
    BILLING_PAYMENT_SOURCE_CREATE_START: v,
    MODAL_POP: v,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: v,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: _,
    STRIPE_TOKEN_FAILURE: _,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: P,
    LOGOUT: P,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((y = !0), (A = t.payment_id))
            : t?.payment_source_id != null && ((y = !0), (x = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        ((y = !1), (A = null));
    },
});
