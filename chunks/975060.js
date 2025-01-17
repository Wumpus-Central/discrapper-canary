var i,
    a = r(442837),
    s = r(570140),
    o = r(622999);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = '',
    c = null,
    d = '',
    f = null,
    _ = !1,
    h = null,
    p = '',
    m = '',
    g = '',
    E = '',
    v = '',
    I = '',
    T = '',
    b = '',
    y = !1,
    S = null,
    A = null,
    N = null,
    C = null;
function R() {
    (f = null), (u = ''), (c = null), (d = ''), (_ = !1), (h = null), (p = 'US'), (m = ''), (g = ''), (E = ''), (v = ''), (I = ''), (T = ''), (b = ''), (y = !1), (S = null), (A = null), (N = null), (C = null);
}
function O(e) {
    (m = e.name), (p = e.country), (E = e.line1), (v = e.line2), (I = e.city), (T = e.postalCode), (b = e.state), (g = e.email);
}
function D(e) {
    let { stripePaymentMethod: n } = e;
    if (null == n) {
        R();
        return;
    }
    f = n;
    let { billingAddressInfo: r } = o.az(f);
    O(r);
}
function L() {
    (u = ''), (c = null);
}
function x(e) {
    let { email: n, nonce: r, billingAddress: i } = e;
    (u = n), (c = r), O(i), (y = p.length > 0);
}
function w() {
    (d = ''), (c = null);
}
function P(e) {
    let { username: n, nonce: r } = e;
    (d = n), (c = r);
}
function M(e) {
    let { info: n, isValid: r } = e;
    (m = n.name), (_ = r);
}
function k(e) {
    let { info: n, isValid: r } = e;
    null != n.name && '' !== n.name && (m = n.name), (p = n.country), (m = n.name), (E = n.line1), (v = n.line2), (I = n.city), (T = n.postalCode), (b = n.state), (g = n.email), (y = r);
}
function U(e) {
    let { data: n } = e;
    h = n;
}
function B() {
    S = null;
}
function G(e) {
    let { error: n } = e;
    S = n;
}
function Z(e) {
    let { query: n } = e;
    (null == n ? void 0 : n.payment_id) != null ? ((N = !0), (A = n.payment_id)) : (null == n ? void 0 : n.payment_source_id) != null && ((N = !0), (C = n.payment_source_id));
}
function F() {
    (N = !1), (A = null);
}
class V extends (i = a.ZP.Store) {
    get stripePaymentMethod() {
        return f;
    }
    get popupCallbackCalled() {
        return N;
    }
    get braintreeEmail() {
        return u;
    }
    get braintreeNonce() {
        return c;
    }
    get venmoUsername() {
        return d;
    }
    get redirectedPaymentId() {
        return A;
    }
    get adyenPaymentData() {
        return h;
    }
    get redirectedPaymentSourceId() {
        return C;
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
            country: p,
            line1: E,
            line2: v,
            city: I,
            postalCode: T,
            state: b
        };
    }
    get isBillingAddressInfoValid() {
        return y;
    }
    get error() {
        return S;
    }
}
l(V, 'displayName', 'NewPaymentSourceStore'),
    (n.Z = new V(s.Z, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: D,
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: M,
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: k,
        BRAINTREE_TOKENIZE_PAYPAL_START: L,
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: x,
        BRAINTREE_TOKENIZE_VENMO_START: w,
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: P,
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: U,
        BILLING_PAYMENT_SOURCE_CREATE_START: B,
        MODAL_POP: B,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: B,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: G,
        STRIPE_TOKEN_FAILURE: G,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
        LOGOUT: R,
        BILLING_POPUP_BRIDGE_CALLBACK: Z,
        RESET_PAYMENT_ID: F
    }));
