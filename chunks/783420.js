"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(192308),
    a = n(688810),
    o = n(822123),
    l = n(532794),
    d = n(976860),
    _ = n(780964),
    u = n(858897),
    c = n(287809),
    E = n(166403),
    h = n(234419),
    m = n(788868),
    f = n(652215);
function g(e) {
    let {
            onClick: t,
            subscriptionTier: g,
            postSuccessGuild: p,
            onSubscribeModalClose: A,
            premiumModalAnalyticsLocation: I,
            applicationId: T,
            giftMessage: S,
            confirmationFooter: N,
            isGift: C,
            initialPlanId: R = null,
            children: O,
        } = e,
        y = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        v = (0, r.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        { analyticsLocations: D } = (0, a.Ay)(),
        L = (0, h.V)(),
        b = !C && null != L && null != g && m.TP[L.trial_id].skus.includes(g);
    return O({
        onClick: (e) => {
            if ((e.preventDefault(), null == y))
                return void (0, d.pX)(f.BVt.LOGIN, { source: "premium_subscribe_button" });
            if ((t?.(e), v?.status === f.Dmq.ACCOUNT_HOLD)) {
                (0, o.xf)(), (0, u.openUserSettings)(_.X.NITRO_PANEL), A?.(!1);
                return;
            }
            if (!y.isClaimed())
                return void (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("24806"), n.e("58007")]).then(
                        n.bind(n, 195759),
                    );
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            if (!y.verified)
                return void (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            let r = b ? L.subscription_trial?.id : null,
                a = f.AnalyticsObjectTypes.BUY;
            null != r ? (a = f.AnalyticsObjectTypes.TRIAL) : C && (a = f.AnalyticsObjectTypes.GIFT),
                (0, l.A)({
                    isGift: C,
                    initialPlanId: R,
                    subscriptionTier: g,
                    analyticsLocations: D,
                    analyticsObject: { object: f.ZSU.BUTTON_CTA, objectType: a, ...I },
                    trialId: r,
                    postSuccessGuild: p,
                    onClose: A,
                    applicationId: T,
                    giftMessage: S,
                    confirmationFooter: N,
                });
        },
    });
}
