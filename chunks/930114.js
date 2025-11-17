n.d(t, { V: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(594174),
    o = n(78839),
    s = n(585483),
    l = n(74538),
    c = n(138464),
    u = n(474936),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { processedCode: t, channelContext: f, customGiftMessage: p, giftInfo: h } = e,
        m = !1,
        g = null,
        E = a.default.getCurrentUser(),
        b = (0, l.yd)(null == E ? void 0 : E.premiumType, u.PremiumTypes.TIER_0);
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e("38029").then(n.bind(n, 409858));
            return (n) => {
                var i, a;
                return (0, r.jsx)(
                    e,
                    _(
                        {
                            code: t,
                            channelContext: f,
                            customGiftMessage: p,
                            emojiName: null == h || null == (i = h.emoji) ? void 0 : i.name,
                            soundId: null == h || null == (a = h.sound) ? void 0 : a.id,
                            onComplete: (e, t) => {
                                (g = e),
                                    t &&
                                        ((m = t),
                                        e.isSubscription && null == o.Z.getPremiumSubscription(!1) && (0, c.H)(!0));
                            },
                        },
                        n,
                    ),
                );
            };
        },
        {
            onCloseCallback: () => {
                var e;
                m &&
                    null != g &&
                    !b &&
                    g.isSubscription &&
                    (null == g || null == (e = g.subscriptionPlan) ? void 0 : e.premiumSubscriptionType) ===
                        u.PremiumTypes.TIER_2 &&
                    s.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
