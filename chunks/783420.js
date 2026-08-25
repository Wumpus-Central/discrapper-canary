"use strict";
n.d(t, { A: () => f });
var i = n(477900);
n(582128);
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
    A = n(732280),
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
            shouldDisallowPlanSelection: O = !1,
            children: L,
        } = e,
        y = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        D = (0, r.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        { analyticsLocations: v } = (0, s.Ay)(),
        b = (0, A.V)(),
        M = !C && null != b && null != f && h.TP[b.trialId].skus.includes(f);
    return L({
        onClick: function (e) {
            if ((e.preventDefault(), null == y))
                return void (0, d.pX)(I.BVt.LOGIN, { source: "premium_subscribe_button" });
            if ((t?.(e), D?.status === I.Dmq.ACCOUNT_HOLD)) {
                (0, l.xf)(), (0, u.openUserSettings)(c.X.NITRO_PANEL), T?.(!1);
                return;
            }
            if (!y.isClaimed())
                return void (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("671464"),
                        n.e("112206"),
                        n.e("709998"),
                        n.e("480388"),
                    ]).then(n.bind(n, 195759));
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            if (!y.verified)
                return void (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("928873"),
                        n.e("874913"),
                        n.e("112206"),
                        n.e("590406"),
                    ]).then(n.bind(n, 661925));
                    return (t) => {
                        let { onClose: n, ...r } = t;
                        return (0, i.jsx)(e, { ...r, onClose: n });
                    };
                });
            let r = M ? b.subscriptionTrial?.id : null,
                s = I.AnalyticsObjectTypes.BUY;
            null != r ? (s = I.AnalyticsObjectTypes.TRIAL) : C && (s = I.AnalyticsObjectTypes.GIFT);
            let _ = {
                isGift: C,
                initialPlanId: R,
                subscriptionTier: f,
                analyticsLocations: v,
                analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: s, ...m },
                trialId: r,
                postSuccessGuild: p,
                onClose: T,
                applicationId: g,
                giftMessage: S,
                confirmationFooter: N,
            };
            O && null != R ? (0, o.A)({ ..._, initialPlanId: R, shouldDisallowPlanSelection: !0 }) : (0, o.A)(_);
        },
    });
}
