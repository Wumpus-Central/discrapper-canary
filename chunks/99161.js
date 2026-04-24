"use strict";
n.d(t, {
    a: () =>
        function e(t, c) {
            let { isGift: m, giftRecipient: g, giftingOrigin: b, additionalUserIds: A } = c,
                {
                    discoverySessionId: E,
                    analyticsLocations: v,
                    guildId: y,
                    isEligibilityCheckContinuation: I,
                    checkoutState: S,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                T = _.A.getSKUEligibilityEntry(t.id),
                C = T?.state,
                x = !m && null != y && (null == C || "checking" === C || "ineligible" === C);
            if (!x && !I) {
                let e = "none";
                m
                    ? (e = "gift")
                    : null == y
                      ? (e = "no_guild")
                      : "eligible" === C
                        ? (e = "already_eligible")
                        : "error" === C && (e = "prior_error"),
                    d.default.track(f.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: y ?? null,
                        application_id: t.applicationId,
                        is_gift: m,
                        eligibility_state: C ?? "none",
                        skip_reason: e,
                        error_http_status: T?.state === "error" ? (T.httpStatus ?? null) : null,
                        location_stack: v,
                    });
            }
            let R = S ?? { hasFinished: !1 };
            if (x)
                return void (function (e) {
                    let { guildId: t, skuId: i, analyticsLocations: l, onContinue: s, onClose: o } = e;
                    (0, a.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("62754").then(n.bind(n, 424185));
                            return (n) =>
                                (0, r.jsx)(e, { ...n, guildId: t, skuId: i, analyticsLocations: l, onContinue: s });
                        },
                        { modalKey: p, onCloseCallback: o },
                    );
                })({
                    guildId: y,
                    skuId: t.id,
                    analyticsLocations: v ?? [],
                    onContinue: () => {
                        if (!R.hasFinished)
                            return e(
                                t,
                                { isGift: m, giftRecipient: g, giftingOrigin: b, additionalUserIds: A },
                                {
                                    discoverySessionId: E,
                                    analyticsLocations: v,
                                    guildId: y,
                                    isEligibilityCheckContinuation: !0,
                                    checkoutState: R,
                                },
                            );
                    },
                });
            let N = !1,
                L = (0, i.A)();
            h({
                loadId: L,
                discoverySessionId: E,
                skuId: t.id,
                applicationId: t.applicationId,
                analyticsLocations: v ?? [],
                isGift: m,
                giftRecipient: g,
                giftingOrigin: b,
                additionalUserIds: A,
                onCloseCallback: () => {
                    if (!N) {
                        let e = (0, u.q1)({
                            location: "SocialLayerStorefrontPaymentModal",
                            unifiedCheckoutFlow: o.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                        d.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                            load_id: L,
                            discovery_session_id: E,
                            payment_type: f.frM[f.VVm.ONE_TIME],
                            is_gift: m,
                            sku_id: t.id,
                            application_id: t.applicationId,
                            location_stack: v,
                            sku_product_line: t.productLine,
                            checkout_design: e ? u.rS.UNIFIED : u.rS.LEGACY,
                            checkout_flow: o.C.SLAYER_STOREFRONT_CHECKOUT,
                        });
                    }
                    (0, l.ET)(), (0, s.z)(), (0, a.closeModal)(p), (R.hasFinished = !0);
                },
                onComplete: () => {
                    (N = !0), (R.hasFinished = !0);
                },
                modalKey: "slayer-payment-modal",
            });
        },
    openSocialLayerStorefrontAnnouncementModal: () => m,
});
var r = n(627968),
    i = n(132500),
    a = n(192308),
    l = n(391048),
    s = n(636099),
    o = n(120700),
    c = n(226991),
    u = n(742810),
    d = n(954571),
    _ = n(832163);
let p = "slayer-eligibility-check-modal";
var f = n(652215);
let h = (e) => {
    let {
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: a,
        isGift: l,
        giftRecipient: s,
        additionalUserIds: o,
        giftingOrigin: u,
        onCloseCallback: d,
        onComplete: _,
        modalKey: p,
    } = e;
    return (0, c.KY)().openCheckoutModal({
        loadId: t,
        discoverySessionId: n,
        applicationId: r,
        skuId: i,
        analyticsLocations: a,
        onComplete: _,
        giftContextProps: { isGift: l, giftRecipient: s, giftingOrigin: u, additionalUserIds: o },
        openModalOptions: { modalKey: p, onCloseCallback: d },
    });
};
function m() {
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await n.e("26388").then(n.bind(n, 297187));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
