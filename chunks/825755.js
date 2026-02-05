"use strict";
n.d(t, { A: () => j });
var r = n(311907),
    i = n(73153),
    a = n(198982),
    s = n(71532);
let o = "",
    l = null,
    u = "",
    c = null,
    d = !1,
    _ = null,
    f = "",
    p = "",
    h = "",
    m = "",
    g = "",
    E = "",
    A = "",
    I = "",
    T = !1,
    y = null,
    S = null,
    v = null,
    C = null;
function b() {
    (c = null),
        (o = ""),
        (l = null),
        (u = ""),
        (d = !1),
        (_ = null),
        (f = "US"),
        (p = ""),
        (h = ""),
        (m = ""),
        (g = ""),
        (E = ""),
        (A = ""),
        (I = ""),
        (T = !1),
        (y = null),
        (S = null),
        (v = null),
        (C = null);
}
function N(e) {
    (p = e.name),
        (f = e.country),
        (m = e.line1),
        (g = e.line2),
        (E = e.city),
        (A = e.postalCode),
        (I = e.state),
        (h = e.email);
}
function R(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) return void b();
    c = t;
    let { billingAddressInfo: n } = s.uK(c);
    N(n);
}
function O() {
    (o = ""), (l = null);
}
function D(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    (o = t), (l = n), N(r), (T = f.length > 0);
}
function L() {
    (u = ""), (l = null);
}
function w(e) {
    let { username: t, nonce: n } = e;
    (u = t), (l = n);
}
function x(e) {
    let { info: t, isValid: n } = e;
    (p = t.name), (d = n);
}
function P(e) {
    let { info: t, isValid: n } = e;
    null != t.name && "" !== t.name && (p = t.name),
        (f = t.country),
        (p = t.name),
        (m = t.line1),
        (g = t.line2),
        (E = t.city),
        (A = t.postalCode),
        (I = t.state),
        (h = t.email),
        (T = n);
}
function M(e) {
    let { data: t } = e;
    _ = t;
}
function k() {
    y = null;
}
function U(e) {
    let { error: t } = e;
    y = t;
}
function G(e) {
    let { message: t } = e;
    y = new a.Ey(t);
}
function V(e) {
    let { query: t } = e;
    t?.payment_id != null
        ? ((v = !0), (S = t.payment_id))
        : t?.payment_source_id != null && ((v = !0), (C = t.payment_source_id));
}
function F() {
    (v = !1), (S = null);
}
class B extends r.Ay.Store {
    static displayName = "NewPaymentSourceStore";
    get stripePaymentMethod() {
        return c;
    }
    get popupCallbackCalled() {
        return v;
    }
    get braintreeEmail() {
        return o;
    }
    get braintreeNonce() {
        return l;
    }
    get venmoUsername() {
        return u;
    }
    get redirectedPaymentId() {
        return S;
    }
    get adyenPaymentData() {
        return _;
    }
    get redirectedPaymentSourceId() {
        return C;
    }
    clearRedirectedPaymentSourceId() {
        C = null;
    }
    getCreditCardInfo() {
        return { name: p };
    }
    get isCardInfoValid() {
        return d;
    }
    getBillingAddressInfo() {
        return { name: p, email: h, country: f, line1: m, line2: g, city: E, postalCode: A, state: I };
    }
    get isBillingAddressInfoValid() {
        return T;
    }
    get error() {
        return y;
    }
}
let j = new B(i.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: R,
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: x,
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: P,
    BRAINTREE_TOKENIZE_PAYPAL_START: O,
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: D,
    BRAINTREE_TOKENIZE_VENMO_START: L,
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: w,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: G,
    BRAINTREE_TOKENIZE_VENMO_FAIL: G,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: M,
    BILLING_PAYMENT_SOURCE_CREATE_START: k,
    MODAL_POP: k,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: k,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: U,
    STRIPE_TOKEN_FAILURE: U,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: b,
    LOGOUT: b,
    BILLING_POPUP_BRIDGE_CALLBACK: V,
    RESET_PAYMENT_ID: F,
});
