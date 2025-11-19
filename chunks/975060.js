n.d(t, { Z: () => H });
var r,
    i = n(442837),
    a = n(570140),
    o = n(881052),
    s = n(622999);
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
    _ = !1,
    p = null,
    h = "",
    m = "",
    g = "",
    E = "",
    b = "",
    y = "",
    O = "",
    v = "",
    I = !1,
    T = null,
    S = null,
    A = null,
    C = null;
function N() {
    (f = null),
        (c = ""),
        (u = null),
        (d = ""),
        (_ = !1),
        (p = null),
        (h = "US"),
        (m = ""),
        (g = ""),
        (E = ""),
        (b = ""),
        (y = ""),
        (O = ""),
        (v = ""),
        (I = !1),
        (T = null),
        (S = null),
        (A = null),
        (C = null);
}
function R(e) {
    (m = e.name),
        (h = e.country),
        (E = e.line1),
        (b = e.line2),
        (y = e.city),
        (O = e.postalCode),
        (v = e.state),
        (g = e.email);
}
function P(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) return void N();
    f = t;
    let { billingAddressInfo: n } = s.az(f);
    R(n);
}
function D() {
    (c = ""), (u = null);
}
function w(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    (c = t), (u = n), R(r), (I = h.length > 0);
}
function L() {
    (d = ""), (u = null);
}
function x(e) {
    let { username: t, nonce: n } = e;
    (d = t), (u = n);
}
function M(e) {
    let { info: t, isValid: n } = e;
    (m = t.name), (_ = n);
}
function k(e) {
    let { info: t, isValid: n } = e;
    null != t.name && "" !== t.name && (m = t.name),
        (h = t.country),
        (m = t.name),
        (E = t.line1),
        (b = t.line2),
        (y = t.city),
        (O = t.postalCode),
        (v = t.state),
        (g = t.email),
        (I = n);
}
function j(e) {
    let { data: t } = e;
    p = t;
}
function U() {
    T = null;
}
function G(e) {
    let { error: t } = e;
    T = t;
}
function B(e) {
    let { message: t } = e;
    T = new o.HF(t);
}
function Z(e) {
    let { query: t } = e;
    (null == t ? void 0 : t.payment_id) != null
        ? ((A = !0), (S = t.payment_id))
        : (null == t ? void 0 : t.payment_source_id) != null && ((A = !0), (C = t.payment_source_id));
}
function F() {
    (A = !1), (S = null);
}
class V extends (r = i.ZP.Store) {
    get stripePaymentMethod() {
        return f;
    }
    get popupCallbackCalled() {
        return A;
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
        return S;
    }
    get adyenPaymentData() {
        return p;
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
        return _;
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
            state: v,
        };
    }
    get isBillingAddressInfoValid() {
        return I;
    }
    get error() {
        return T;
    }
}
l(V, "displayName", "NewPaymentSourceStore");
let H = new V(a.Z, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: P,
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: M,
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: k,
    BRAINTREE_TOKENIZE_PAYPAL_START: D,
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: w,
    BRAINTREE_TOKENIZE_VENMO_START: L,
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: x,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: B,
    BRAINTREE_TOKENIZE_VENMO_FAIL: B,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: j,
    BILLING_PAYMENT_SOURCE_CREATE_START: U,
    MODAL_POP: U,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: U,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: G,
    STRIPE_TOKEN_FAILURE: G,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
    LOGOUT: N,
    BILLING_POPUP_BRIDGE_CALLBACK: Z,
    RESET_PAYMENT_ID: F,
});
