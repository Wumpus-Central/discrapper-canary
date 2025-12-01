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
    p = !1,
    _ = null,
    m = "",
    h = "",
    g = "",
    E = "",
    b = "",
    y = "",
    O = "",
    v = "",
    S = !1,
    I = null,
    T = null,
    A = null,
    C = null;
function N() {
    (f = null),
        (c = ""),
        (u = null),
        (d = ""),
        (p = !1),
        (_ = null),
        (m = "US"),
        (h = ""),
        (g = ""),
        (E = ""),
        (b = ""),
        (y = ""),
        (O = ""),
        (v = ""),
        (S = !1),
        (I = null),
        (T = null),
        (A = null),
        (C = null);
}
function P(e) {
    (h = e.name),
        (m = e.country),
        (E = e.line1),
        (b = e.line2),
        (y = e.city),
        (O = e.postalCode),
        (v = e.state),
        (g = e.email);
}
function R(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) return void N();
    f = t;
    let { billingAddressInfo: n } = s.az(f);
    P(n);
}
function w() {
    (c = ""), (u = null);
}
function D(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    (c = t), (u = n), P(r), (S = m.length > 0);
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
    (h = t.name), (p = n);
}
function M(e) {
    let { info: t, isValid: n } = e;
    null != t.name && "" !== t.name && (h = t.name),
        (m = t.country),
        (h = t.name),
        (E = t.line1),
        (b = t.line2),
        (y = t.city),
        (O = t.postalCode),
        (v = t.state),
        (g = t.email),
        (S = n);
}
function k(e) {
    let { data: t } = e;
    _ = t;
}
function U() {
    I = null;
}
function G(e) {
    let { error: t } = e;
    I = t;
}
function Z(e) {
    let { message: t } = e;
    I = new o.HF(t);
}
function B(e) {
    let { query: t } = e;
    (null == t ? void 0 : t.payment_id) != null
        ? ((A = !0), (T = t.payment_id))
        : (null == t ? void 0 : t.payment_source_id) != null && ((A = !0), (C = t.payment_source_id));
}
function F() {
    (A = !1), (T = null);
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
        return T;
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
        return { name: h };
    }
    get isCardInfoValid() {
        return p;
    }
    getBillingAddressInfo() {
        return {
            name: h,
            email: g,
            country: m,
            line1: E,
            line2: b,
            city: y,
            postalCode: O,
            state: v,
        };
    }
    get isBillingAddressInfoValid() {
        return S;
    }
    get error() {
        return I;
    }
}
l(V, "displayName", "NewPaymentSourceStore");
let H = new V(a.Z, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: R,
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: j,
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: M,
    BRAINTREE_TOKENIZE_PAYPAL_START: w,
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: D,
    BRAINTREE_TOKENIZE_VENMO_START: x,
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: L,
    BRAINTREE_TOKENIZE_PAYPAL_FAIL: Z,
    BRAINTREE_TOKENIZE_VENMO_FAIL: Z,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: k,
    BILLING_PAYMENT_SOURCE_CREATE_START: U,
    MODAL_POP: U,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: U,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: G,
    STRIPE_TOKEN_FAILURE: G,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
    LOGOUT: N,
    BILLING_POPUP_BRIDGE_CALLBACK: B,
    RESET_PAYMENT_ID: F,
});
