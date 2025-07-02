(n.d(e, {
    H: () => S,
    r: () => O
}),
    n(997841),
    n(388685));
var i = n(255367),
    r = n(481060),
    l = n(724870),
    o = n(87484),
    a = n(509545),
    s = n(78839),
    u = n(55563),
    c = n(270144),
    d = n(171246),
    p = n(689011),
    f = n(981631);
async function S(t) {
    let { subscriptionPlanId: e, sku: o, subscriptionGroupPlanIds: S, initialSubscribeForGuild: O, analyticsLocations: I, analyticsLocation: b, disableGuildSelector: g = !1 } = t,
        { promise: _, resolve: P } = Promise.withResolvers();
    if ((0, d.KK)(o.flags) && !1 === g) {
        let { promise: t, resolve: e } = Promise.withResolvers();
        ((0, r.ZDy)(async () => {
            let { GuildSubscriptionSelectionModal: t } = await n.e('43889').then(n.bind(n, 279875));
            return (n) =>
                (0, i.jsx)(t, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    sku: o,
                    onSelect: e,
                    currentGuildId: O
                });
        }),
            (O = await t));
    }
    let y = u.Z.getParentSKU(o.id),
        m = null;
    return (
        null != y &&
            ([m] = (0, c.E8)({
                groupSku: y,
                SubscriptionStore: s.Z,
                SubscriptionPlanStore: a.Z,
                mapSubscriptionItems: c.ec,
                guildId: O
            })),
        (0, l.h)({
            initialPlanId: e,
            skuId: o.id,
            activeSubscription: m,
            applicationId: o.applicationId,
            planGroup: S,
            guildId: O,
            renderHeader: (t, e, n) =>
                (0, i.jsx)(p.t, {
                    step: n,
                    onClose: () => e(!1)
                }),
            analyticsSubscriptionType: f.NYc.APPLICATION,
            analyticsLocations: I,
            analyticsLocation: b,
            onComplete: P,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        _
    );
}
function O(t) {
    let { appId: e, skuId: n, analyticsLocations: i } = t;
    (0, o.Z)({
        applicationId: e,
        skuId: n,
        analyticsLocations: i
    });
}
