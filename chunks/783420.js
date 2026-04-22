"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(192308),
    a = n(688810),
    o = n(822123),
    l = n(532794),
    u = n(976860),
    d = n(780964),
    c = n(858897),
    _ = n(287809),
    f = n(166403),
    E = n(234419),
    h = n(788868),
    p = n(652215);
function m(e) {
    let {
            onClick: t,
            subscriptionTier: m,
            postSuccessGuild: g,
            onSubscribeModalClose: A,
            premiumModalAnalyticsLocation: I,
            applicationId: T,
            giftMessage: S,
            confirmationFooter: y,
            isGift: N,
            initialPlanId: O = null,
            children: R,
        } = e,
        v = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        C = (0, i.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        { analyticsLocations: b } = (0, a.Ay)(),
        D = (0, E.V)(),
        L = !N && null != D && null != m && h.TP[D.trial_id].skus.includes(m);
    return R({
        onClick: (e) => {
            if ((e.preventDefault(), null == v))
                return void (0, u.pX)(p.BVt.LOGIN, { source: "premium_subscribe_button" });
            if ((t?.(e), C?.status === p.Dmq.ACCOUNT_HOLD)) {
                (0, o.xf)(), (0, c.openUserSettings)(d.X.NITRO_PANEL), A?.(!1);
                return;
            }
            if (!v.isClaimed())
                return void (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("24806"), n.e("80388")]).then(
                        n.bind(n, 195759),
                    );
                    return (t) => {
                        let { onClose: n, ...i } = t;
                        return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                });
            if (!v.verified)
                return void (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                    return (t) => {
                        let { onClose: n, ...i } = t;
                        return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                });
            let i = L ? D.subscription_trial?.id : null,
                a = p.AnalyticsObjectTypes.BUY;
            null != i ? (a = p.AnalyticsObjectTypes.TRIAL) : N && (a = p.AnalyticsObjectTypes.GIFT),
                (0, l.A)({
                    isGift: N,
                    initialPlanId: O,
                    subscriptionTier: m,
                    analyticsLocations: b,
                    analyticsObject: { object: p.ZSU.BUTTON_CTA, objectType: a, ...I },
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
