n.d(e, { L: () => o });
var i = n(54381),
    r = n(481060),
    l = n(626135),
    s = n(582113),
    a = n(981631);
let o = (t) => {
    let { sku: e, giftCode: o, channelContext: c, customGiftMessage: u, analyticsLocations: d } = t;
    (0, r.ZDy)(
        async () => {
            let { default: t } = await n.e("88742").then(n.bind(n, 535618));
            return (n) => {
                var r, l;
                return (0, i.jsx)(
                    t,
                    ((r = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    }),
                                )),
                                i.forEach(function (e) {
                                    var i;
                                    (i = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = i);
                                });
                        }
                        return t;
                    })({}, n)),
                    (l = l =
                        {
                            sku: e,
                            giftCode: o,
                            channelContext: c,
                            customGiftMessage: u,
                            analyticsLocations: d,
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
                    r),
                );
            };
        },
        {
            modalKey: "social-layer-storefront-gift-code-claim-modal",
            onCloseCallback: () => {
                l.default.track(a.rMx.SLAYER_STOREFRONT_MODAL_CLOSED, {
                    type: s.tb,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: null != d ? d : [],
                });
            },
        },
    );
};
