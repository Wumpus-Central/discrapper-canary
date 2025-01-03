e.d(t, {
    H: function () {
        return m;
    },
    r: function () {
        return v;
    }
}),
    e(789020),
    e(47120);
var i = e(200651),
    l = e(481060),
    r = e(724870),
    u = e(87484),
    a = e(509545),
    o = e(78839),
    s = e(55563),
    c = e(270144),
    d = e(171246),
    f = e(689011),
    p = e(981631);
async function m(n) {
    let { subscriptionPlanId: t, sku: u, subscriptionGroupPlanIds: m, initialSubscribeForGuild: v, analyticsLocations: I, analyticsLocation: S, disableGuildSelector: h = !1 } = n,
        { promise: g, resolve: Z } = Promise.withResolvers();
    if ((0, d.KK)(u.flags) && !1 === h) {
        let { promise: n, resolve: t } = Promise.withResolvers();
        (0, l.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await e.e('43889').then(e.bind(e, 279875));
            return (e) =>
                (0, i.jsx)(n, {
                    transitionState: e.transitionState,
                    onClose: e.onClose,
                    sku: u,
                    onSelect: t,
                    currentGuildId: v
                });
        }),
            (v = await n);
    }
    let A = s.Z.getParentSKU(u.id),
        N = null;
    return (
        null != A &&
            ([N] = (0, c.E8)({
                groupSku: A,
                SubscriptionStore: o.ZP,
                SubscriptionPlanStore: a.Z,
                mapSubscriptionItems: c.ec,
                guildId: v
            })),
        (0, r.h)({
            initialPlanId: t,
            skuId: u.id,
            activeSubscription: N,
            applicationId: u.applicationId,
            planGroup: m,
            guildId: v,
            renderHeader: (n, t, e) =>
                (0, i.jsx)(f.t, {
                    step: e,
                    onClose: () => t(!1)
                }),
            analyticsSubscriptionType: p.NYc.APPLICATION,
            analyticsLocations: I,
            analyticsLocation: S,
            onComplete: Z,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        g
    );
}
function v(n) {
    let { appId: t, skuId: e, analyticsLocations: i } = n;
    (0, u.Z)({
        applicationId: t,
        skuId: e,
        analyticsLocations: i
    });
}
