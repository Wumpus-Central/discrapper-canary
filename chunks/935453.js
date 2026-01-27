n.d(t, {
    N: () => u,
});
var r = n(627968);
n(64700);
var i = n(835245),
    l = n(397927),
    a = n(391048),
    s = n(636099),
    o = n(954571),
    c = n(652215);

function u(e) {
    let { guildProductListing: t, guildId: u, sourceAnalyticsLocations: d } = e,
        p = !1,
        m = (0, i.A)(),
        f = t.id,
        g = () => {
            p = !0;
        };
    (0, l.mMO)(
        async () => {
            let { default: e } = await n.e("41469").then(n.bind(n, 35052));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    e,
                    ((i = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, n)),
                    (l = l =
                        {
                            applicationId: t.application_id,
                            skuId: f,
                            sourceAnalyticsLocations: d,
                            guildProductContext: {
                                guildProductListingId: t.id,
                                guildId: u,
                            },
                            loadId: m,
                            onComplete: g,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            };
        },
        {
            onCloseCallback: () => {
                p ||
                    o.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: m,
                        payment_type: c.frM[c.VVm.ONE_TIME],
                        is_gift: !1,
                        sku_id: f,
                        location_stack: Array.isArray(d) ? d : [d],
                    }),
                    (0, a.ET)(),
                    (0, s.z)();
            },
            onCloseRequest: c.tEg,
        },
    );
}
