n.d(t, {
    H: () => b,
    r: () => O
}),
    n(789020),
    n(47120);
var r = n(200651),
    l = n(481060),
    i = n(724870),
    o = n(87484),
    a = n(509545),
    u = n(78839),
    s = n(55563),
    c = n(270144),
    d = n(171246),
    p = n(689011),
    f = n(981631);
async function b(e) {
    let { subscriptionPlanId: t, sku: o, subscriptionGroupPlanIds: b, initialSubscribeForGuild: O, analyticsLocations: m, analyticsLocation: y, disableGuildSelector: v = !1 } = e,
        { promise: g, resolve: h } = Promise.withResolvers();
    if ((0, d.KK)(o.flags) && !1 === v) {
        let { promise: e, resolve: t } = Promise.withResolvers();
        (0, l.ZDy)(async () => {
            let { GuildSubscriptionSelectionModal: e } = await n.e('43889').then(n.bind(n, 279875));
            return (n) =>
                (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    sku: o,
                    onSelect: t,
                    currentGuildId: O
                });
        }),
            (O = await e);
    }
    let j = s.Z.getParentSKU(o.id),
        S = null;
    return (
        null != j &&
            ([S] = (0, c.E8)({
                groupSku: j,
                SubscriptionStore: u.ZP,
                SubscriptionPlanStore: a.Z,
                mapSubscriptionItems: c.ec,
                guildId: O
            })),
        (0, i.h)({
            initialPlanId: t,
            skuId: o.id,
            activeSubscription: S,
            applicationId: o.applicationId,
            planGroup: b,
            guildId: O,
            renderHeader: (e, t, n) =>
                (0, r.jsx)(p.t, {
                    step: n,
                    onClose: () => t(!1)
                }),
            analyticsSubscriptionType: f.NYc.APPLICATION,
            analyticsLocations: m,
            analyticsLocation: y,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        g
    );
}
function O(e) {
    let { appId: t, skuId: n, analyticsLocations: r } = e;
    (0, o.Z)({
        applicationId: t,
        skuId: n,
        analyticsLocations: r
    });
}
