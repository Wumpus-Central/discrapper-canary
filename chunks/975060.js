n.d(t, { Z: () => F });
var r,
    i = n(442837),
    a = n(570140),
    o = n(622999);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = '',
    c = null,
    u = '',
    d = null,
    _ = !1,
    f = null,
    p = '',
    h = '',
    m = '',
    g = '',
    E = '',
    b = '',
    y = '',
    O = '',
    v = !1,
    I = null,
    T = null,
    S = null,
    A = null;
function N() {
    ((d = null), (l = ''), (c = null), (u = ''), (_ = !1), (f = null), (p = 'US'), (h = ''), (m = ''), (g = ''), (E = ''), (b = ''), (y = ''), (O = ''), (v = !1), (I = null), (T = null), (S = null), (A = null));
}
function C(e) {
    ((h = e.name), (p = e.country), (g = e.line1), (E = e.line2), (b = e.city), (y = e.postalCode), (O = e.state), (m = e.email));
}
function R(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) return void N();
    d = t;
    let { billingAddressInfo: n } = o.az(d);
    C(n);
}
function P() {
    ((l = ''), (c = null));
}
function w(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    ((l = t), (c = n), C(r), (v = p.length > 0));
}
function D() {
    ((u = ''), (c = null));
}
function L(e) {
    let { username: t, nonce: n } = e;
    ((u = t), (c = n));
}
function x(e) {
    let { info: t, isValid: n } = e;
    ((h = t.name), (_ = n));
}
function k(e) {
    let { info: t, isValid: n } = e;
    (null != t.name && '' !== t.name && (h = t.name), (p = t.country), (h = t.name), (g = t.line1), (E = t.line2), (b = t.city), (y = t.postalCode), (O = t.state), (m = t.email), (v = n));
}
function M(e) {
    let { data: t } = e;
    f = t;
}
function j() {
    I = null;
}
function U(e) {
    let { error: t } = e;
    I = t;
}
function G(e) {
    let { query: t } = e;
    (null == t ? void 0 : t.payment_id) != null ? ((S = !0), (T = t.payment_id)) : (null == t ? void 0 : t.payment_source_id) != null && ((S = !0), (A = t.payment_source_id));
}
function B() {
    ((S = !1), (T = null));
}
class V extends (r = i.ZP.Store) {
    get stripePaymentMethod() {
        return d;
    }
    get popupCallbackCalled() {
        return S;
    }
    get braintreeEmail() {
        return l;
    }
    get braintreeNonce() {
        return c;
    }
    get venmoUsername() {
        return u;
    }
    get redirectedPaymentId() {
        return T;
    }
    get adyenPaymentData() {
        return f;
    }
    get redirectedPaymentSourceId() {
        return A;
    }
    getCreditCardInfo() {
        return { name: h };
    }
    get isCardInfoValid() {
        return _;
    }
    getBillingAddressInfo() {
        return {
            name: h,
            email: m,
            country: p,
            line1: g,
            line2: E,
            city: b,
            postalCode: y,
            state: O
        };
    }
    get isBillingAddressInfoValid() {
        return v;
    }
    get error() {
        return I;
    }
}
s(V, 'displayName', 'NewPaymentSourceStore');
let F = new V(a.Z, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: R,
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: x,
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: k,
    BRAINTREE_TOKENIZE_PAYPAL_START: P,
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: w,
    BRAINTREE_TOKENIZE_VENMO_START: D,
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: L,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: M,
    BILLING_PAYMENT_SOURCE_CREATE_START: j,
    MODAL_POP: j,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: j,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: U,
    STRIPE_TOKEN_FAILURE: U,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
    LOGOUT: N,
    BILLING_POPUP_BRIDGE_CALLBACK: G,
    RESET_PAYMENT_ID: B
});
