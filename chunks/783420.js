"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(192308),
    a = n(688810),
    o = n(822123),
    l = n(532794),
    _ = n(976860),
    d = n(780964),
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
            postSuccessGuild: I,
            onSubscribeModalClose: A,
            premiumModalAnalyticsLocation: p,
            applicationId: T,
            giftMessage: S,
            confirmationFooter: N,
            isGift: O,
            initialPlanId: R = null,
            children: C,
        } = e,
        y = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        D = (0, r.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        { analyticsLocations: L } = (0, a.Ay)(),
        v = (0, h.V)(),
        w = !O && null != v && null != g && m.TP[v.trial_id].skus.includes(g);
    return C({
        onClick: (e) => {
            if ((e.preventDefault(), null == y))
                return void (0, _.pX)(f.BVt.LOGIN, { source: "premium_subscribe_button" });
            if ((t?.(e), D?.status === f.Dmq.ACCOUNT_HOLD)) {
                (0, o.xf)(), (0, u.openUserSettings)(d.X.NITRO_PANEL), A?.(!1);
                return;
            }
            if (!y.isClaimed())
                return void (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("39868"),
                        n.e("12206"),
                        n.e("9998"),
                        n.e("80388"),
                    ]).then(n.bind(n, 195759));
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            if (!y.verified)
                return void (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("54681"),
                        n.e("14753"),
                        n.e("12206"),
                        n.e("90406"),
                    ]).then(n.bind(n, 661925));
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            let r = w ? v.subscription_trial?.id : null,
                a = f.AnalyticsObjectTypes.BUY;
            null != r ? (a = f.AnalyticsObjectTypes.TRIAL) : O && (a = f.AnalyticsObjectTypes.GIFT),
                (0, l.A)({
                    isGift: O,
                    initialPlanId: R,
                    subscriptionTier: g,
                    analyticsLocations: L,
                    analyticsObject: { object: f.ZSU.BUTTON_CTA, objectType: a, ...p },
                    trialId: r,
                    postSuccessGuild: I,
                    onClose: A,
                    applicationId: T,
                    giftMessage: S,
                    confirmationFooter: N,
                });
        },
    });
}
