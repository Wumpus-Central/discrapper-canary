n.d(t, { V: () => m });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(594174),
    r = n(78839),
    s = n(585483),
    o = n(74538),
    c = n(138464),
    d = n(474936),
    u = n(981631);
function m(e) {
    let { processedCode: t, channelContext: m, customGiftMessage: _, giftInfo: h } = e,
        p = !1,
        g = null,
        f = a.default.getCurrentUser(),
        x = (0, o.yd)(null == f ? void 0 : f.premiumType, d.p9.TIER_0);
    (0, l.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('92446'), n.e('46391')]).then(n.bind(n, 409858));
            return (n) => {
                var l, a;
                return (0, i.jsx)(e, {
                    code: t,
                    channelContext: m,
                    customGiftMessage: _,
                    emojiName: null == h ? void 0 : null === (l = h.emoji) || void 0 === l ? void 0 : l.name,
                    soundId: null == h ? void 0 : null === (a = h.sound) || void 0 === a ? void 0 : a.id,
                    onComplete: (e, t) => {
                        (g = e), t && ((p = t), e.isSubscription && null == r.ZP.getPremiumSubscription(!1) && (0, c.H)(!0));
                    },
                    ...n
                });
            };
        },
        {
            onCloseCallback: () => {
                var e;
                p && null != g && !x && g.isSubscription && (null == g ? void 0 : null === (e = g.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === d.p9.TIER_2 && s.S.dispatch(u.CkL.PREMIUM_SUBSCRIPTION_CREATED);
            }
        }
    );
}
