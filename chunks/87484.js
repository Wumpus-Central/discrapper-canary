n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(772848),
    o = n(481060),
    a = n(159351),
    s = n(667),
    l = n(626135),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let {
            applicationId: t,
            skuId: u,
            onClose: f,
            onComplete: h,
            analyticsLocations: m,
            analyticsLocationObject: g,
            contextKey: E,
        } = e,
        b = !1,
        y = (0, i.Z)();
    (0, o.ZDy)(
        async () => {
            let { default: e } = await n.e("61670").then(n.bind(n, 409600));
            return (n) => {
                var { onClose: i } = n,
                    o = p(n, ["onClose"]);
                return (0, r.jsx)(
                    e,
                    _(d({}, o), {
                        loadId: y,
                        applicationId: t,
                        skuId: u,
                        analyticsLocations: m,
                        analyticsLocationObject: g,
                        onClose: (e) => {
                            i(), null == f || f(e);
                        },
                        onComplete: (e) => {
                            (b = !0), null == h || h(e);
                        },
                    }),
                );
            };
        },
        {
            contextKey: E,
            onCloseCallback: () => {
                b ||
                    l.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: y,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        location: g,
                        is_gift: !1,
                        sku_id: u,
                        application_id: t,
                        location_stack: m,
                    }),
                    (0, a.fw)(),
                    (0, s.p)(),
                    null == f || f(b);
            },
            onCloseRequest: c.dG4,
        },
    );
}
