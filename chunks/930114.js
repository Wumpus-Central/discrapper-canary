n.d(t, {
    V: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(594174),
    a = n(78839),
    o = n(585483),
    s = n(74538),
    c = n(138464),
    d = n(474936),
    u = n(981631);
function m(e) {
    let { processedCode: t, channelContext: m, customGiftMessage: h, giftInfo: f } = e,
        p = !1,
        _ = null,
        g = l.default.getCurrentUser(),
        E = (0, s.yd)(null == g ? void 0 : g.premiumType, d.p9.TIER_0);
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('92446'), n.e('65624')]).then(n.bind(n, 409858));
            return (n) => {
                var r, l;
                return (0, i.jsx)(e, {
                    code: t,
                    channelContext: m,
                    customGiftMessage: h,
                    emojiName: null == f ? void 0 : null === (r = f.emoji) || void 0 === r ? void 0 : r.name,
                    soundId: null == f ? void 0 : null === (l = f.sound) || void 0 === l ? void 0 : l.id,
                    onComplete: (e, t) => {
                        (_ = e), t && ((p = t), e.isSubscription && null == a.ZP.getPremiumSubscription(!1) && (0, c.H)(!0));
                    },
                    ...n
                });
            };
        },
        {
            onCloseCallback: () => {
                var e;
                p && null != _ && !E && _.isSubscription && (null == _ ? void 0 : null === (e = _.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === d.p9.TIER_2 && o.S.dispatch(u.CkL.PREMIUM_SUBSCRIPTION_CREATED);
            }
        }
    );
}
