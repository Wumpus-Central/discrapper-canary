n.d(t, { L: () => o });
var i = n(54381),
    r = n(481060),
    l = n(626135),
    s = n(582113),
    a = n(981631);
let o = (e) => {
    let {
        sku: t,
        giftCode: o,
        channelContext: c,
        customGiftMessage: u,
        analyticsLocations: d,
        emojiName: f,
        soundId: p,
    } = e;
    (0, r.ZDy)(
        async () => {
            let { default: e } = await n.e("88742").then(n.bind(n, 535618));
            return (n) => {
                var r, l;
                return (0, i.jsx)(
                    e,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, n)),
                    (l = l =
                        {
                            sku: t,
                            giftCode: o,
                            channelContext: c,
                            customGiftMessage: u,
                            analyticsLocations: d,
                            emojiName: f,
                            soundId: p,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
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
                    sku_id: t.id,
                    application_id: t.applicationId,
                    location_stack: null != d ? d : [],
                });
            },
        },
    );
};
