n.d(e, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(772848),
    l = n(481060),
    o = n(159351),
    a = n(667),
    u = n(626135),
    s = n(981631);
function c(t) {
    let { applicationId: e, skuId: c, onClose: d, onComplete: p, analyticsLocations: f, analyticsLocationObject: S, contextKey: O } = t,
        I = !1,
        b = (0, r.Z)();
    (0, l.ZDy)(
        async () => {
            let { default: t } = await n.e('61670').then(n.bind(n, 409600));
            return (n) => {
                var r,
                    l,
                    { onClose: o } = n,
                    a = (function (t, e) {
                        if (null == t) return {};
                        var n,
                            i,
                            r = (function (t, e) {
                                if (null == t) return {};
                                var n,
                                    i,
                                    r = {},
                                    l = Object.keys(t);
                                for (i = 0; i < l.length; i++) ((n = l[i]), e.indexOf(n) >= 0 || (r[n] = t[n]));
                                return r;
                            })(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(t);
                            for (i = 0; i < l.length; i++) ((n = l[i]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]));
                        }
                        return r;
                    })(n, ['onClose']);
                return (0, i.jsx)(
                    t,
                    ((r = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    })
                                )),
                                i.forEach(function (e) {
                                    var i;
                                    ((i = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (t[e] = i));
                                }));
                        }
                        return t;
                    })({}, a)),
                    (l = l =
                        {
                            loadId: b,
                            applicationId: e,
                            skuId: c,
                            analyticsLocations: f,
                            analyticsLocationObject: S,
                            onClose: (t) => {
                                (o(), null == d || d(t));
                            },
                            onComplete: (t) => {
                                ((I = !0), null == p || p(t));
                            }
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (t, e) {
                              var n = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(t);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(l)).forEach(function (t) {
                              Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t));
                          }),
                    r)
                );
            };
        },
        {
            contextKey: O,
            onCloseCallback: () => {
                (I ||
                    u.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: b,
                        payment_type: s.Zuq[s.GZQ.ONE_TIME],
                        location: S,
                        is_gift: !1,
                        sku_id: c,
                        application_id: e,
                        location_stack: f
                    }),
                    (0, o.fw)(),
                    (0, a.p)(),
                    null == d || d(I));
            },
            onCloseRequest: s.dG4
        }
    );
}
