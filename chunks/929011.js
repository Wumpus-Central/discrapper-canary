n.d(t, {
    H: () => p,
    r: () => h,
}),
    n(997841),
    n(388685);
var r = n(54381),
    i = n(481060),
    a = n(724870),
    o = n(87484),
    s = n(509545),
    l = n(78839),
    c = n(55563),
    u = n(270144),
    d = n(171246),
    f = n(689011),
    _ = n(981631);
async function p(e) {
    let {
            subscriptionPlanId: t,
            sku: o,
            subscriptionGroupPlanIds: p,
            initialSubscribeForGuild: h,
            analyticsLocations: m,
            analyticsLocation: g,
            disableGuildSelector: E = !1,
        } = e,
        { promise: b, resolve: y } = Promise.withResolvers();
    if ((0, d.KK)(o.flags) && !1 === E) {
        let { promise: e, resolve: t } = Promise.withResolvers();
        (0, i.ZDy)(
            async () => {
                let { GuildSubscriptionSelectionModal: e } = await n.e("43889").then(n.bind(n, 279875));
                return (n) =>
                    (0, r.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        sku: o,
                        onSelect: t,
                        currentGuildId: h,
                    });
            },
            { stackingBehavior: "stack" },
        ),
            (h = await e);
    }
    let O = c.Z.getParentSKU(o.id),
        v = null;
    return (
        null != O &&
            ([v] = (0, u.E8)({
                groupSku: O,
                SubscriptionStore: l.Z,
                SubscriptionPlanStore: s.Z,
                mapSubscriptionItems: u.ec,
                guildId: h,
            })),
        (0, a.h)({
            initialPlanId: t,
            skuId: o.id,
            activeSubscription: v,
            applicationId: o.applicationId,
            planGroup: p,
            guildId: h,
            renderHeader: (e, t, n) =>
                (0, r.jsx)(f.t, {
                    step: n,
                    onClose: () => t(!1),
                }),
            analyticsSubscriptionType: _.NYc.APPLICATION,
            analyticsLocations: m,
            analyticsLocation: g,
            onComplete: y,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
        }),
        b
    );
}
function h(e) {
    let { appId: t, skuId: n, analyticsLocations: r } = e;
    (0, o.Z)({
        applicationId: t,
        skuId: n,
        analyticsLocations: r,
    });
}
