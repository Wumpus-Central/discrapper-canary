(n.d(t, { Z: () => b }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(46141);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    _ = null,
    f = !1;
function p(e) {
    let { paymentSources: t } = e;
    for (let e of ((d = {}), (_ = null), t)) ((d[e.id] = o.ZP.createFromServer(e)), e.default && (_ = e.id));
    (null == _ && t.length > 0 && (_ = t[0].id), (f = !0));
}
function h(e) {
    let { paymentSource: t } = e;
    ((d = u(l({}, d), { [t.id]: t })), (t.isDefault || 1 === Object.keys(d).length) && (_ = t.id));
}
function m(e) {
    let { id: t } = e;
    if (((d = l({}, d)), delete d[t], _ === t)) {
        let e = Object.keys(d);
        _ = 0 === e.length ? null : e[0];
    }
}
function g() {
    ((d = {}), (_ = null), (f = !1));
}
class E extends (r = i.ZP.Store) {
    get paymentSources() {
        return d;
    }
    get paymentSourceIds() {
        return Object.keys(d);
    }
    get defaultPaymentSourceId() {
        return _;
    }
    get defaultPaymentSource() {
        return null != _ ? d[_] : null;
    }
    get hasFetchedPaymentSources() {
        return f;
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
let b = new E(a.Z, {
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: h,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: h,
    BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: h,
    BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: p,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: m,
    LOGOUT: g
});
