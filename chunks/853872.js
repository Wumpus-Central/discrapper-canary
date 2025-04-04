n.d(t, { Z: () => b }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(46141);
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {},
    f = null,
    _ = !1;
function p(e) {
    let { paymentSources: t } = e;
    for (let e of ((d = {}), (f = null), t)) (d[e.id] = a.ZP.createFromServer(e)), e.default && (f = e.id);
    null == f && t.length > 0 && (f = t[0].id), (_ = !0);
}
function h(e) {
    let { paymentSource: t } = e;
    (d = u(l({}, d), { [t.id]: t })), (t.isDefault || 1 === Object.keys(d).length) && (f = t.id);
}
function m(e) {
    let { id: t } = e;
    if (((d = l({}, d)), delete d[t], f === t)) {
        let e = Object.keys(d);
        f = 0 === e.length ? null : e[0];
    }
}
function g() {
    (d = {}), (f = null), (_ = !1);
}
class E extends (r = i.ZP.Store) {
    get paymentSources() {
        return d;
    }
    get paymentSourceIds() {
        return Object.keys(d);
    }
    get defaultPaymentSourceId() {
        return f;
    }
    get defaultPaymentSource() {
        return null != f ? d[f] : null;
    }
    get hasFetchedPaymentSources() {
        return _;
    }
    getDefaultBillingCountryCode() {
        let e = this.defaultPaymentSource;
        return null == e ? null : e.paymentMethodCountry;
    }
    getPaymentSource(e) {
        return d[e];
    }
}
s(E, 'displayName', 'PaymentSourceStore');
let b = new E(o.Z, {
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: h,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: h,
    BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: h,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: p,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: m,
    LOGOUT: g
});
