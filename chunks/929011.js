n.d(t, {
    H: () => b,
    r: () => v
}),
    n(789020),
    n(47120);
var i = n(200651),
    l = n(481060),
    r = n(724870),
    o = n(87484),
    a = n(509545),
    u = n(78839),
    s = n(55563),
    c = n(270144),
    d = n(171246),
    p = n(689011),
    f = n(981631);
async function b(e) {
    let { subscriptionPlanId: t, sku: o, subscriptionGroupPlanIds: b, initialSubscribeForGuild: v, analyticsLocations: O, analyticsLocation: m, disableGuildSelector: y = !1 } = e,
        { promise: g, resolve: h } = Promise.withResolvers();
    if ((0, d.KK)(o.flags) && !1 === y) {
        let { promise: e, resolve: t } = Promise.withResolvers();
        (0, l.ZDy)(async () => {
            let { GuildSubscriptionSelectionModal: e } = await n.e('43889').then(n.bind(n, 279875));
            return (n) =>
                (0, i.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    sku: o,
                    onSelect: t,
                    currentGuildId: v
                });
        }),
            (v = await e);
    }
    let S = s.Z.getParentSKU(o.id),
        I = null;
    return (
        null != S &&
            ([I] = (0, c.E8)({
                groupSku: S,
                SubscriptionStore: u.ZP,
                SubscriptionPlanStore: a.Z,
                mapSubscriptionItems: c.ec,
                guildId: v
            })),
        (0, r.h)({
            initialPlanId: t,
            skuId: o.id,
            activeSubscription: I,
            applicationId: o.applicationId,
            planGroup: b,
            guildId: v,
            renderHeader: (e, t, n) =>
                (0, i.jsx)(p.t, {
                    step: n,
                    onClose: () => t(!1)
                }),
            analyticsSubscriptionType: f.NYc.APPLICATION,
            analyticsLocations: O,
            analyticsLocation: m,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        g
    );
}
function v(e) {
    let { appId: t, skuId: n, analyticsLocations: i } = e;
    (0, o.Z)({
        applicationId: t,
        skuId: n,
        analyticsLocations: i
    });
}
