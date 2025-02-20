n.d(t, { Z: () => F });
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
    p = null,
    _ = '',
    h = '',
    m = '',
    g = '',
    E = '',
    v = '',
    b = '',
    y = '',
    O = !1,
    S = null,
    I = null,
    T = null,
    N = null;
function A() {
    (d = null), (l = ''), (c = null), (u = ''), (f = !1), (p = null), (_ = 'US'), (h = ''), (m = ''), (g = ''), (E = ''), (v = ''), (b = ''), (y = ''), (O = !1), (S = null), (I = null), (T = null), (N = null);
}
function C(e) {
    (h = e.name), (_ = e.country), (g = e.line1), (E = e.line2), (v = e.city), (b = e.postalCode), (y = e.state), (m = e.email);
}
function R(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) {
        A();
        return;
    }
    d = t;
    let { billingAddressInfo: n } = a.az(d);
    C(n);
}
function P() {
    (l = ''), (c = null);
}
function w(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    (l = t), (c = n), C(r), (O = _.length > 0);
}
function D() {
    (u = ''), (c = null);
}
function x(e) {
    let { username: t, nonce: n } = e;
    (u = t), (c = n);
}
function L(e) {
    let { info: t, isValid: n } = e;
    (h = t.name), (f = n);
}
function M(e) {
    let { info: t, isValid: n } = e;
    null != t.name && '' !== t.name && (h = t.name), (_ = t.country), (h = t.name), (g = t.line1), (E = t.line2), (v = t.city), (b = t.postalCode), (y = t.state), (m = t.email), (O = n);
}
function k(e) {
    let { data: t } = e;
    p = t;
}
function j() {
    S = null;
}
function U(e) {
    let { error: t } = e;
    S = t;
}
function G(e) {
    let { query: t } = e;
    (null == t ? void 0 : t.payment_id) != null ? ((T = !0), (I = t.payment_id)) : (null == t ? void 0 : t.payment_source_id) != null && ((T = !0), (N = t.payment_source_id));
}
function B() {
    (T = !1), (I = null);
}
class Z extends (r = i.ZP.Store) {
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
        return I;
    }
    get adyenPaymentData() {
        return p;
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
            country: _,
            line1: g,
            line2: E,
            city: v,
            postalCode: b,
            state: y
        };
    }
    get isBillingAddressInfoValid() {
        return O;
    }
    get error() {
        return S;
    }
}
s(Z, 'displayName', 'NewPaymentSourceStore');
let F = new Z(o.Z, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: R,
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: L,
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: M,
    BRAINTREE_TOKENIZE_PAYPAL_START: P,
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: w,
    BRAINTREE_TOKENIZE_VENMO_START: D,
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: x,
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
