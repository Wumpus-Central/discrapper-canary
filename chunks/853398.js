n.d(t, { A: () => f });
var r = n(311907),
    i = n(97352),
    a = n(83617),
    s = n(788868),
    o = n(818348);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    var t, n;
    let { activeSubscription: l, skuIDs: u, paymentSourceId: f, isGift: p, excludeSubscriptionPlansBySKU: _ } = e;
    u = u.filter((e) => e !== s.pe.NONE);
    let h = (0, r.bG)([i.A], () => {
            let e = i.A.getPlanIdsForSkus(u).filter((e) => !p || s.JM.has(e));
            return e.length > 0 ? i.A.get(e[0]) : null;
        }),
        m = null == h ? [] : (0, a._w)(h.id, f, p),
        g =
            null != (t = null != (n = m.find((e) => e === (null == l ? void 0 : l.currency))) ? n : m[0])
                ? t
                : o.Yr.USD;
    return d(
        c(
            {},
            (0, a.Yk)({
                initialCurrency: g,
                subscriptionPlanId: null == h ? void 0 : h.id,
                paymentSourceId: f,
                isGift: p,
                skuIDs: u,
                excludeSubscriptionPlansBySKU: _,
            }),
        ),
        { currencies: m },
    );
}
