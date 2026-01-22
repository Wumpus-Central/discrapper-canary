n.d(t, { A: () => Y });
var r,
    i = n(311907),
    a = n(73153),
    s = n(198982),
    o = n(71532);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = "",
    u = null,
    d = "",
    f = null,
    p = !1,
    _ = null,
    h = "",
    m = "",
    g = "",
    E = "",
    b = "",
    y = "",
    O = "",
    A = "",
    v = !1,
    S = null,
    I = null,
    T = null,
    C = null;
function N() {
    (f = null),
        (c = ""),
        (u = null),
        (d = ""),
        (p = !1),
        (_ = null),
        (h = "US"),
        (m = ""),
        (g = ""),
        (E = ""),
        (b = ""),
        (y = ""),
        (O = ""),
        (A = ""),
        (v = !1),
        (S = null),
        (I = null),
        (T = null),
        (C = null);
}
function R(e) {
    (m = e.name),
        (h = e.country),
        (E = e.line1),
        (b = e.line2),
        (y = e.city),
        (O = e.postalCode),
        (A = e.state),
        (g = e.email);
}
function w(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) return void N();
    f = t;
    let { billingAddressInfo: n } = o.uK(f);
    R(n);
}
function P() {
    (c = ""), (u = null);
}
function D(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    (c = t), (u = n), R(r), (v = h.length > 0);
}
function x() {
    (d = ""), (u = null);
}
function L(e) {
    let { username: t, nonce: n } = e;
    (d = t), (u = n);
}
function j(e) {
    let { info: t, isValid: n } = e;
    (m = t.name), (p = n);
}
function M(e) {
    let { info: t, isValid: n } = e;
    null != t.name && "" !== t.name && (m = t.name),
        (h = t.country),
        (m = t.name),
        (E = t.line1),
        (b = t.line2),
        (y = t.city),
        (O = t.postalCode),
        (A = t.state),
        (g = t.email),
        (v = n);
}
function k(e) {
    let { data: t } = e;
    _ = t;
}
function U() {
    S = null;
}
function G(e) {
    let { error: t } = e;
    S = t;
}
function V(e) {
    let { message: t } = e;
    S = new s.Ey(t);
}
function F(e) {
    let { query: t } = e;
    (null == t ? void 0 : t.payment_id) != null
        ? ((T = !0), (I = t.payment_id))
        : (null == t ? void 0 : t.payment_source_id) != null && ((T = !0), (C = t.payment_source_id));
}
function B() {
    (T = !1), (I = null);
}
class H extends (r = i.Ay.Store) {
    get stripePaymentMethod() {
        return f;
    }
    get popupCallbackCalled() {
        return T;
    }
    get braintreeEmail() {
        return c;
    }
    get braintreeNonce() {
        return u;
    }
    get venmoUsername() {
        return d;
    }
    get redirectedPaymentId() {
        return I;
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
        return { name: m };
    }
    get isCardInfoValid() {
        return p;
    }
    getBillingAddressInfo() {
        return {
            name: m,
            email: g,
            country: h,
            line1: E,
            line2: b,
            city: y,
            postalCode: O,
            state: A,
        };
    }
    get isBillingAddressInfoValid() {
        return v;
    }
    get error() {
        return S;
    }
}
l(H, "displayName", "NewPaymentSourceStore");
let Y = new H(a.h, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: w,
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: j,
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: M,
    BRAINTREE_TOKENIZE_PAYPAL_START: P,
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: D,
    BRAINTREE_TOKENIZE_VENMO_START: x,
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: L,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: V,
    BRAINTREE_TOKENIZE_VENMO_FAIL: V,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: k,
    BILLING_PAYMENT_SOURCE_CREATE_START: U,
    MODAL_POP: U,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: U,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: G,
    STRIPE_TOKEN_FAILURE: G,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
    LOGOUT: N,
    BILLING_POPUP_BRIDGE_CALLBACK: F,
    RESET_PAYMENT_ID: B,
});
