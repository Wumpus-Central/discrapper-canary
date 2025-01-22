var i,
    a = r(442837),
    o = r(570140),
    s = r(622999);
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
    p = !1,
    h = null,
    _ = '',
    m = '',
    g = '',
    E = '',
    v = '',
    y = '',
    b = '',
    I = '',
    T = !1,
    S = null,
    A = null,
    C = null,
    N = null;
function R() {
    (f = null), (u = ''), (c = null), (d = ''), (p = !1), (h = null), (_ = 'US'), (m = ''), (g = ''), (E = ''), (v = ''), (y = ''), (b = ''), (I = ''), (T = !1), (S = null), (A = null), (C = null), (N = null);
}
function O(e) {
    (m = e.name), (_ = e.country), (E = e.line1), (v = e.line2), (y = e.city), (b = e.postalCode), (I = e.state), (g = e.email);
}
function D(e) {
    let { stripePaymentMethod: n } = e;
    if (null == n) {
        R();
        return;
    }
    f = n;
    let { billingAddressInfo: r } = s.az(f);
    O(r);
}
function L() {
    (u = ''), (c = null);
}
function x(e) {
    let { email: n, nonce: r, billingAddress: i } = e;
    (u = n), (c = r), O(i), (T = _.length > 0);
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
    (m = n.name), (p = r);
}
function k(e) {
    let { info: n, isValid: r } = e;
    null != n.name && '' !== n.name && (m = n.name), (_ = n.country), (m = n.name), (E = n.line1), (v = n.line2), (y = n.city), (b = n.postalCode), (I = n.state), (g = n.email), (T = r);
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
    (null == n ? void 0 : n.payment_id) != null ? ((C = !0), (A = n.payment_id)) : (null == n ? void 0 : n.payment_source_id) != null && ((C = !0), (N = n.payment_source_id));
}
function F() {
    (C = !1), (A = null);
}
class V extends (i = a.ZP.Store) {
    get stripePaymentMethod() {
        return f;
    }
    get popupCallbackCalled() {
        return C;
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
        return N;
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
            country: _,
            line1: E,
            line2: v,
            city: y,
            postalCode: b,
            state: I
        };
    }
    get isBillingAddressInfoValid() {
        return T;
    }
    get error() {
        return S;
    }
}
l(V, 'displayName', 'NewPaymentSourceStore'),
    (n.Z = new V(o.Z, {
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
