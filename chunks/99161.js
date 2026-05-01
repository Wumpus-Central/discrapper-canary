e.d(t, {
    a: () =>
        function i(t, r) {
            let { isGift: k, giftRecipient: C, giftingOrigin: E, additionalUserIds: f } = r,
                {
                    discoverySessionId: g,
                    analyticsLocations: I,
                    guildId: S,
                    isEligibilityCheckContinuation: L,
                    checkoutState: m,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                b = _.A.getSKUEligibilityEntry(t.id),
                A = b?.state,
                T = !k && null != S && (null == A || "checking" === A || "ineligible" === A);
            if (!T && !L) {
                let i = "none";
                k
                    ? (i = "gift")
                    : null == S
                      ? (i = "no_guild")
                      : "eligible" === A
                        ? (i = "already_eligible")
                        : "error" === A && (i = "prior_error"),
                    u.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: S ?? null,
                        application_id: t.applicationId,
                        is_gift: k,
                        eligibility_state: A ?? "none",
                        skip_reason: i,
                        error_http_status: b?.state === "error" ? (b.httpStatus ?? null) : null,
                        location_stack: I,
                    });
            }
            let O = m ?? { hasFinished: !1 };
            if (T)
                return void (function (i) {
                    let { guildId: t, skuId: a, analyticsLocations: o, onContinue: d, onClose: s } = i;
                    (0, n.openModalLazy)(
                        async () => {
                            let { default: i } = await Promise.all([e.e("42211"), e.e("62754")]).then(
                                e.bind(e, 424185),
                            );
                            return (e) =>
                                (0, l.jsx)(i, { ...e, guildId: t, skuId: a, analyticsLocations: o, onContinue: d });
                        },
                        { modalKey: p, onCloseCallback: s },
                    );
                })({
                    guildId: S,
                    skuId: t.id,
                    analyticsLocations: I ?? [],
                    onContinue: () => {
                        if (!O.hasFinished)
                            return i(
                                t,
                                { isGift: k, giftRecipient: C, giftingOrigin: E, additionalUserIds: f },
                                {
                                    discoverySessionId: g,
                                    analyticsLocations: I,
                                    guildId: S,
                                    isEligibilityCheckContinuation: !0,
                                    checkoutState: O,
                                },
                            );
                    },
                });
            let F = !1,
                M = (0, a.A)();
            y({
                loadId: M,
                discoverySessionId: g,
                skuId: t.id,
                applicationId: t.applicationId,
                analyticsLocations: I ?? [],
                isGift: k,
                giftRecipient: C,
                giftingOrigin: E,
                additionalUserIds: f,
                onCloseCallback: () => {
                    if (!F) {
                        let i = (0, c.q1)({
                            location: "SocialLayerStorefrontPaymentModal",
                            unifiedCheckoutFlow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                        u.default.track(h.HAw.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            discovery_session_id: g,
                            payment_type: h.frM[h.VVm.ONE_TIME],
                            is_gift: k,
                            sku_id: t.id,
                            application_id: t.applicationId,
                            location_stack: I,
                            sku_product_line: t.productLine,
                            checkout_design: i ? c.rS.UNIFIED : c.rS.LEGACY,
                            checkout_flow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                    }
                    (0, o.ET)(), (0, d.z)(), (0, n.closeModal)(p), (O.hasFinished = !0);
                },
                onComplete: () => {
                    (F = !0), (O.hasFinished = !0);
                },
                modalKey: "slayer-payment-modal",
            });
        },
    openSocialLayerStorefrontAnnouncementModal: () => k,
});
var l = e(627968),
    a = e(835245),
    n = e(192308),
    o = e(391048),
    d = e(636099),
    s = e(120700),
    r = e(226991),
    c = e(742810),
    u = e(174459),
    _ = e(832163);
let p = "slayer-eligibility-check-modal";
var h = e(652215);
let y = (i) => {
    let {
        loadId: t,
        discoverySessionId: e,
        applicationId: l,
        skuId: a,
        analyticsLocations: n,
        isGift: o,
        giftRecipient: d,
        additionalUserIds: s,
        giftingOrigin: c,
        onCloseCallback: u,
        onComplete: _,
        modalKey: p,
    } = i;
    return (0, r.KY)().openCheckoutModal({
        loadId: t,
        discoverySessionId: e,
        applicationId: l,
        skuId: a,
        analyticsLocations: n,
        onComplete: _,
        giftContextProps: { isGift: o, giftRecipient: d, giftingOrigin: c, additionalUserIds: s },
        openModalOptions: { modalKey: p, onCloseCallback: u },
    });
};
function k() {
    (0, n.openModalLazy)(
        async () => {
            let { default: i } = await Promise.all([e.e("63292"), e.e("26388")]).then(e.bind(e, 297187));
            return (t) => (0, l.jsx)(i, { ...t });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
