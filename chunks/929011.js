e.d(t, {
    H: () => v,
    r: () => m
}),
    e(789020),
    e(47120);
var l = e(200651),
    i = e(481060),
    a = e(724870),
    r = e(87484),
    s = e(509545),
    u = e(78839),
    o = e(55563),
    d = e(270144),
    c = e(171246),
    p = e(689011),
    f = e(981631);
async function v(n) {
    let { subscriptionPlanId: t, sku: r, subscriptionGroupPlanIds: v, initialSubscribeForGuild: m, analyticsLocations: I, analyticsLocation: h, disableGuildSelector: S = !1 } = n,
        { promise: Z, resolve: g } = Promise.withResolvers();
    if ((0, c.KK)(r.flags) && !1 === S) {
        let { promise: n, resolve: t } = Promise.withResolvers();
        (0, i.ZDy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await e.e('43889').then(e.bind(e, 279875));
            return (e) =>
                (0, l.jsx)(n, {
                    transitionState: e.transitionState,
                    onClose: e.onClose,
                    sku: r,
                    onSelect: t,
                    currentGuildId: m
                });
        }),
            (m = await n);
    }
    let E = o.Z.getParentSKU(r.id),
        A = null;
    return (
        null != E &&
            ([A] = (0, d.E8)({
                groupSku: E,
                SubscriptionStore: u.ZP,
                SubscriptionPlanStore: s.Z,
                mapSubscriptionItems: d.ec,
                guildId: m
            })),
        (0, a.h)({
            initialPlanId: t,
            skuId: r.id,
            activeSubscription: A,
            applicationId: r.applicationId,
            planGroup: v,
            guildId: m,
            renderHeader: (n, t, e) =>
                (0, l.jsx)(p.t, {
                    step: e,
                    onClose: () => t(!1)
                }),
            analyticsSubscriptionType: f.NYc.APPLICATION,
            analyticsLocations: I,
            analyticsLocation: h,
            onComplete: g,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        Z
    );
}
function m(n) {
    let { appId: t, skuId: e, analyticsLocations: l } = n;
    (0, r.Z)({
        applicationId: t,
        skuId: e,
        analyticsLocations: l
    });
}
