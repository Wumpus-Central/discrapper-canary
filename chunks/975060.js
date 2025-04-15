n.d(t, { Z: () => V });
var r,
    i = n(442837),
    o = n(570140),
    a = n(622999);
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
    f = !1,
    _ = null,
    p = '',
    h = '',
    m = '',
    g = '',
    E = '',
    b = '',
    y = '',
    v = '',
    O = !1,
    I = null,
    S = null,
    T = null,
    N = null;
function A() {
    (d = null), (l = ''), (c = null), (u = ''), (f = !1), (_ = null), (p = 'US'), (h = ''), (m = ''), (g = ''), (E = ''), (b = ''), (y = ''), (v = ''), (O = !1), (I = null), (S = null), (T = null), (N = null);
}
function C(e) {
    (h = e.name), (p = e.country), (g = e.line1), (E = e.line2), (b = e.city), (y = e.postalCode), (v = e.state), (m = e.email);
}
function R(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) return void A();
    d = t;
    let { billingAddressInfo: n } = a.az(d);
    C(n);
}
function P() {
    (l = ''), (c = null);
}
function w(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    (l = t), (c = n), C(r), (O = p.length > 0);
}
function D() {
    (u = ''), (c = null);
}
function L(e) {
    let { username: t, nonce: n } = e;
    (u = t), (c = n);
}
function x(e) {
    let { info: t, isValid: n } = e;
    (h = t.name), (f = n);
}
function M(e) {
    let { info: t, isValid: n } = e;
    null != t.name && '' !== t.name && (h = t.name), (p = t.country), (h = t.name), (g = t.line1), (E = t.line2), (b = t.city), (y = t.postalCode), (v = t.state), (m = t.email), (O = n);
}
function k(e) {
    let { data: t } = e;
    _ = t;
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
    (null == t ? void 0 : t.payment_id) != null ? ((T = !0), (S = t.payment_id)) : (null == t ? void 0 : t.payment_source_id) != null && ((T = !0), (N = t.payment_source_id));
}
function B() {
    (T = !1), (S = null);
}
class F extends (r = i.ZP.Store) {
    get stripePaymentMethod() {
        return d;
    }
    get popupCallbackCalled() {
        return T;
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
        return S;
    }
    get adyenPaymentData() {
        return _;
    }
    get redirectedPaymentSourceId() {
        return N;
    }
    getCreditCardInfo() {
        return { name: h };
    }
    get isCardInfoValid() {
        return f;
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
            state: v
        };
    }
    get isBillingAddressInfoValid() {
        return O;
    }
    get error() {
        return I;
    }
}
s(F, 'displayName', 'NewPaymentSourceStore');
let V = new F(o.Z, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: R,
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: x,
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: M,
    BRAINTREE_TOKENIZE_PAYPAL_START: P,
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: w,
    BRAINTREE_TOKENIZE_VENMO_START: D,
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: L,
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: k,
    BILLING_PAYMENT_SOURCE_CREATE_START: j,
    MODAL_POP: j,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: j,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: U,
    STRIPE_TOKEN_FAILURE: U,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: A,
    LOGOUT: A,
    BILLING_POPUP_BRIDGE_CALLBACK: G,
    RESET_PAYMENT_ID: B
});
