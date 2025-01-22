var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(46141);
function u(e, n, r) {
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
let c = {},
    d = null,
    f = !1;
function p(e) {
    let { paymentSources: n } = e;
    for (let e of ((c = {}), (d = null), n)) (c[e.id] = l.ZP.createFromServer(e)), e.default && (d = e.id);
    null == d && n.length > 0 && (d = n[0].id), (f = !0);
}
function h(e) {
    let { paymentSource: n } = e;
    (c = {
        ...c,
        [n.id]: n
    }),
        (n.isDefault || 1 === Object.keys(c).length) && (d = n.id);
}
function _(e) {
    let { id: n } = e;
    if (((c = { ...c }), delete c[n], d === n)) {
        let e = Object.keys(c);
        d = 0 === e.length ? null : e[0];
    }
}
function m() {
    (c = {}), (d = null), (f = !1);
}
class g extends (i = o.ZP.Store) {
    get paymentSources() {
        return c;
    }
    get paymentSourceIds() {
        return Object.keys(c);
    }
    get defaultPaymentSourceId() {
        return d;
    }
    get defaultPaymentSource() {
        return null != d ? c[d] : null;
    }
    get hasFetchedPaymentSources() {
        return f;
    }
    getDefaultBillingCountryCode() {
        let e = this.defaultPaymentSource;
        return null == e ? null : e.paymentMethodCountry;
    }
    getPaymentSource(e) {
        return c[e];
    }
}
u(g, 'displayName', 'PaymentSourceStore'),
    (n.Z = new g(s.Z, {
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: h,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: h,
        BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: h,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: p,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: _,
        LOGOUT: m
    }));
