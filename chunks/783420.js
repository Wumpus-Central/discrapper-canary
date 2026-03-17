"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(688810),
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
function E(e) {
    let {
            onClick: t,
            subscriptionTier: E,
            postSuccessGuild: g,
            onSubscribeModalClose: A,
            premiumModalAnalyticsLocation: I,
            applicationId: T,
            giftMessage: S,
            confirmationFooter: y,
            isGift: v,
            initialPlanId: N = null,
            children: C,
        } = e,
        R = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        O = (0, i.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        { analyticsLocations: b } = (0, a.Ay)(),
        D = (0, p.V)(),
        L = !v && null != D && null != E && h.TP[D.trial_id].skus.includes(E);
    return C({
        onClick: (e) => {
            if ((e.preventDefault(), null == R))
                return void (0, u.pX)(m.BVt.LOGIN, { source: "premium_subscribe_button" });
            if ((t?.(e), O?.status === m.Dmq.ACCOUNT_HOLD)) {
                (0, o.xf)(), (0, d.openUserSettings)(c.X.NITRO_PANEL), A?.(!1);
                return;
            }
            if (!R.isClaimed())
                return void (0, s.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("24806"), n.e("80388")]).then(
                        n.bind(n, 195759),
                    );
                    return (t) => {
                        let { onClose: n, ...i } = t;
                        return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                });
            if (!R.verified)
                return void (0, s.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                    return (t) => {
                        let { onClose: n, ...i } = t;
                        return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                });
            let i = L ? D.subscription_trial?.id : null,
                a = m.AnalyticsObjectTypes.BUY;
            null != i ? (a = m.AnalyticsObjectTypes.TRIAL) : v && (a = m.AnalyticsObjectTypes.GIFT),
                (0, l.A)({
                    isGift: v,
                    initialPlanId: N,
                    subscriptionTier: E,
                    analyticsLocations: b,
                    analyticsObject: { object: m.ZSU.BUTTON_CTA, objectType: a, ...I },
                    trialId: i,
                    postSuccessGuild: g,
                    onClose: A,
                    applicationId: T,
                    giftMessage: S,
                    confirmationFooter: y,
                });
        },
    });
}
