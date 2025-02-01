n.d(t, { Z: () => m }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(46141);
function o(e, t, n) {
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
let l = {},
    u = null,
    c = !1;
function d(e) {
    let { paymentSources: t } = e;
    for (let e of ((l = {}), (u = null), t)) (l[e.id] = s.ZP.createFromServer(e)), e.default && (u = e.id);
    null == u && t.length > 0 && (u = t[0].id), (c = !0);
}
function f(e) {
    let { paymentSource: t } = e;
    (l = {
        ...l,
        [t.id]: t
    }),
        (t.isDefault || 1 === Object.keys(l).length) && (u = t.id);
}
function _(e) {
    let { id: t } = e;
    if (((l = { ...l }), delete l[t], u === t)) {
        let e = Object.keys(l);
        u = 0 === e.length ? null : e[0];
    }
}
function p() {
    (l = {}), (u = null), (c = !1);
}
class h extends (i = r.ZP.Store) {
    get paymentSources() {
        return l;
    }
    get paymentSourceIds() {
        return Object.keys(l);
    }
    get defaultPaymentSourceId() {
        return u;
    }
    get defaultPaymentSource() {
        return null != u ? l[u] : null;
    }
    get hasFetchedPaymentSources() {
        return c;
    }
    getDefaultBillingCountryCode() {
        let e = this.defaultPaymentSource;
        return null == e ? null : e.paymentMethodCountry;
    }
    getPaymentSource(e) {
        return l[e];
    }
}
o(h, 'displayName', 'PaymentSourceStore');
let m = new h(a.Z, {
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: f,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: f,
    BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: f,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: d,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: _,
    LOGOUT: p
});
