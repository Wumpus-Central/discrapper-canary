"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(688810),
    o = n(822123),
    l = n(532794),
    u = n(976860),
    c = n(780964),
    d = n(840065),
    _ = n(287809),
    f = n(166403),
    p = n(234419),
    h = n(788868),
    m = n(652215);
function g(e) {
    let {
            onClick: t,
            subscriptionTier: g,
            postSuccessGuild: E,
            onSubscribeModalClose: A,
            premiumModalAnalyticsLocation: I,
            applicationId: T,
            giftMessage: y,
            confirmationFooter: S,
            isGift: v,
            initialPlanId: C = null,
            children: b,
        } = e,
        N = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        R = (0, i.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        { analyticsLocations: O } = (0, s.Ay)(),
        D = (0, p.V)(),
        L = !v && null != D && null != g && h.TP[D.trial_id].skus.includes(g);
    return b({
        onClick: (e) => {
            if ((e.preventDefault(), null == N))
                return void (0, u.pX)(m.BVt.LOGIN, { source: "premium_subscribe_button" });
            if ((t?.(e), R?.status === m.Dmq.ACCOUNT_HOLD)) {
                (0, o.xf)(), (0, d.openUserSettings)(c.X.NITRO_PANEL, { section: m.nc_.PREMIUM }), A?.(!1);
                return;
            }
            if (!N.isClaimed())
                return void (0, a.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("24806"), n.e("80388")]).then(
                        n.bind(n, 195759),
                    );
                    return (t) => {
                        let { onClose: n, ...i } = t;
                        return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                });
            if (!N.verified)
                return void (0, a.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                    return (t) => {
                        let { onClose: n, ...i } = t;
                        return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                });
            let i = L ? D.subscription_trial?.id : null,
                s = m.AnalyticsObjectTypes.BUY;
            null != i ? (s = m.AnalyticsObjectTypes.TRIAL) : v && (s = m.AnalyticsObjectTypes.GIFT),
                (0, l.A)({
                    isGift: v,
                    initialPlanId: C,
                    subscriptionTier: g,
                    analyticsLocations: O,
                    analyticsObject: { object: m.ZSU.BUTTON_CTA, objectType: s, ...I },
                    trialId: i,
                    postSuccessGuild: E,
                    onClose: A,
                    applicationId: T,
                    giftMessage: y,
                    confirmationFooter: S,
                });
        },
    });
}
