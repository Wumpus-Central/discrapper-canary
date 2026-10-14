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
    p = "",
    m = "",
    C = "",
    h = "",
    f = "",
    S = "",
    E = "",
    A = !1,
    y = null,
    I = null,
    g = null,
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
        (C = ""),
        (h = ""),
        (f = ""),
        (S = ""),
        (E = ""),
        (A = !1),
        (y = null),
        (I = null),
        (g = null),
        (P = null));
}
function x() {
    y = null;
}
function _(e) {
    let { error: t } = e;
    y = t;
}
function T(e) {
    let { message: t } = e;
    y = new r.Ey(t);
}
class N extends l.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get popupCallbackCalled() {
        return g;
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
        return I;
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
        return { name: p, email: m, country: d, line1: C, line2: h, city: f, postalCode: S, state: E };
    }
    get isBillingAddressInfoValid() {
        return A;
    }
    get error() {
        return y;
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
            (C = t.line1),
            (h = t.line2),
            (f = t.city),
            (S = t.postalCode),
            (E = t.state),
            (m = t.email),
            (A = n));
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
            (C = l.line1),
            (h = l.line2),
            (f = l.city),
            (S = l.postalCode),
            (E = l.state),
            (m = l.email),
            (A = d.length > 0));
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
    BILLING_PAYMENT_SOURCE_CREATE_START: x,
    MODAL_POP: x,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: x,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: _,
    STRIPE_TOKEN_FAILURE: _,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: v,
    LOGOUT: v,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { query: t } = e;
        t?.payment_id != null
            ? ((g = !0), (I = t.payment_id))
            : t?.payment_source_id != null && ((g = !0), (P = t.payment_source_id));
    },
    RESET_PAYMENT_ID: function () {
        ((g = !1), (I = null));
    },
});
