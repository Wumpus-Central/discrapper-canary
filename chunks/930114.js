n.d(t, { V: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(594174),
    l = n(78839),
    o = n(585483),
    s = n(74538),
    c = n(138464),
    u = n(474936),
    d = n(981631);
function p(e) {
    let { processedCode: t, channelContext: p, customGiftMessage: m, giftInfo: f } = e,
        h = !1,
        g = null,
        _ = a.default.getCurrentUser(),
        b = (0, s.yd)(null == _ ? void 0 : _.premiumType, u.p9.TIER_0);
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('92446'), n.e('20267')]).then(n.bind(n, 409858));
            return (n) => {
                var i, a;
                return (0, r.jsx)(
                    e,
                    (function (e) {
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
                    })(
                        {
                            code: t,
                            channelContext: p,
                            customGiftMessage: m,
                            emojiName: null == f || null == (i = f.emoji) ? void 0 : i.name,
                            soundId: null == f || null == (a = f.sound) ? void 0 : a.id,
                            onComplete: (e, t) => {
                                (g = e), t && ((h = t), e.isSubscription && null == l.ZP.getPremiumSubscription(!1) && (0, c.H)(!0));
                            }
                        },
                        n
                    )
                );
            };
        },
        {
            onCloseCallback: () => {
                var e;
                h && null != g && !b && g.isSubscription && (null == g || null == (e = g.subscriptionPlan) ? void 0 : e.premiumSubscriptionType) === u.p9.TIER_2 && o.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED);
            }
        }
    );
}
