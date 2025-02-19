n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(772848),
    r = n(481060),
    o = n(159351),
    a = n(667),
    u = n(626135),
    s = n(981631);
function c(e) {
    let { applicationId: t, skuId: c, onClose: d, onComplete: p, analyticsLocations: f, analyticsLocationObject: b, contextKey: v } = e,
        O = !1,
        m = (0, l.Z)();
    (0, r.ZDy)(
        async () => {
            let { default: e } = await n.e('61670').then(n.bind(n, 409600));
            return (n) => {
                var l,
                    r,
                    { onClose: o } = n,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    l = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                return l;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        }
                        return l;
                    })(n, ['onClose']);
                return (0, i.jsx)(
                    e,
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, a)),
                    (r = r =
                        {
                            loadId: m,
                            applicationId: t,
                            skuId: c,
                            analyticsLocations: f,
                            analyticsLocationObject: b,
                            onClose: (e) => {
                                o(), null == d || d(e);
                            },
                            onComplete: (e) => {
                                (O = !0), null == p || p(e);
                            }
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    l)
                );
            };
        },
        {
            contextKey: v,
            onCloseCallback: () => {
                O ||
                    u.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: m,
                        payment_type: s.Zuq[s.GZQ.ONE_TIME],
                        location: b,
                        is_gift: !1,
                        sku_id: c,
                        application_id: t,
                        location_stack: f
                    }),
                    (0, o.fw)(),
                    (0, a.p)(),
                    null == d || d(O);
            },
            onCloseRequest: s.dG4
        }
    );
}
