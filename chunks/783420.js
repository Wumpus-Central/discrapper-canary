"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(192308),
    s = n(688810),
    l = n(822123),
    o = n(532794),
    d = n(976860),
    c = n(780964),
    u = n(766075),
    _ = n(287809),
    E = n(166403),
    A = n(234419),
    h = n(202541),
    I = n(652215);
function f(e) {
    let {
            onClick: t,
            subscriptionTier: f,
            postSuccessGuild: p,
            onSubscribeModalClose: T,
            premiumModalAnalyticsLocation: m,
            applicationId: g,
            giftMessage: S,
            confirmationFooter: N,
            isGift: C,
            initialPlanId: R = null,
            children: O,
        } = e,
        L = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        y = (0, r.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        { analyticsLocations: D } = (0, s.Ay)(),
        v = (0, A.V)(),
        b = !C && null != v && null != f && h.TP[v.trial_id].skus.includes(f);
    return O({
        onClick: function (e) {
            if ((e.preventDefault(), null == L))
                return void (0, d.pX)(I.BVt.LOGIN, { source: "premium_subscribe_button" });
            if ((t?.(e), y?.status === I.Dmq.ACCOUNT_HOLD)) {
                (0, l.xf)(), (0, u.openUserSettings)(c.X.NITRO_PANEL), T?.(!1);
                return;
            }
            if (!L.isClaimed())
                return void (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("17487"),
                        n.e("12206"),
                        n.e("9998"),
                        n.e("80388"),
                    ]).then(n.bind(n, 195759));
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            if (!L.verified)
                return void (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("54681"),
                        n.e("74913"),
                        n.e("12206"),
                        n.e("90406"),
                    ]).then(n.bind(n, 661925));
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            let r = b ? v.subscription_trial?.id : null,
                s = I.AnalyticsObjectTypes.BUY;
            null != r ? (s = I.AnalyticsObjectTypes.TRIAL) : C && (s = I.AnalyticsObjectTypes.GIFT),
                (0, o.A)({
                    isGift: C,
                    initialPlanId: R,
                    subscriptionTier: f,
                    analyticsLocations: D,
                    analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: s, ...m },
                    trialId: r,
                    postSuccessGuild: p,
                    onClose: T,
                    applicationId: g,
                    giftMessage: S,
                    confirmationFooter: N,
                });
        },
    });
}
