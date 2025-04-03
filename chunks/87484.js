n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(772848),
    i = n(481060),
    o = n(159351),
    a = n(667),
    u = n(626135),
    s = n(981631);
function c(e) {
    let { applicationId: t, skuId: c, onClose: d, onComplete: p, analyticsLocations: f, analyticsLocationObject: b, contextKey: O } = e,
        m = !1,
        y = (0, l.Z)();
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e('61670').then(n.bind(n, 409600));
            return (n) => {
                var l,
                    i,
                    { onClose: o } = n,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                return l;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        }
                        return l;
                    })(n, ['onClose']);
                return (0, r.jsx)(
                    e,
                    ((l = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, a)),
                    (i = i =
                        {
                            loadId: y,
                            applicationId: t,
                            skuId: c,
                            analyticsLocations: f,
                            analyticsLocationObject: b,
                            onClose: (e) => {
                                o(), null == d || d(e);
                            },
                            onComplete: (e) => {
                                (m = !0), null == p || p(e);
                            }
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    l)
                );
            };
        },
        {
            contextKey: O,
            onCloseCallback: () => {
                m ||
                    u.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: y,
                        payment_type: s.Zuq[s.GZQ.ONE_TIME],
                        location: b,
                        is_gift: !1,
                        sku_id: c,
                        application_id: t,
                        location_stack: f
                    }),
                    (0, o.fw)(),
                    (0, a.p)(),
                    null == d || d(m);
            },
            onCloseRequest: s.dG4
        }
    );
}
