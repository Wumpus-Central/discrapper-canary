n.d(e, { a: () => y, openSocialLayerStorefrontAnnouncementModal: () => C, n: () => k });
var i = n(477900),
    o = n(192308),
    a = n(391048),
    l = n(589078),
    d = n(652165),
    c = n(174459),
    r = n(832163);
n(582128);
let s = "slayer-eligibility-check-modal";
var p = n(652215);
function u(t, e) {
    let {
            applicationId: a,
            skuId: l,
            paymentKind: d,
            isGift: u = !1,
            guildId: y,
            analyticsLocations: k,
            contextKey: C,
        } = t,
        g = !1;
    !(function t() {
        let I = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (g) return;
        let f = r.A.getSKUEligibilityEntry(l),
            _ = f?.state;
        if (!u && (null == _ || "checking" === _ || "ineligible" === _))
            return void (function (t) {
                let {
                    guildId: e,
                    applicationId: a,
                    skuId: l,
                    paymentKind: d,
                    analyticsLocations: c,
                    contextKey: r,
                    onContinue: p,
                    onClose: u,
                } = t;
                (0, o.openModalLazy)(
                    async () => {
                        let { default: t } = await Promise.all([n.e("833192"), n.e("262754")]).then(n.bind(n, 424185));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                skuId: l,
                                paymentKind: d,
                                guildId: e,
                                applicationId: a,
                                analyticsLocations: c,
                                onContinue: p,
                            });
                    },
                    { modalKey: s, contextKey: r, onCloseCallback: u },
                );
            })({
                guildId: y,
                applicationId: a,
                skuId: l,
                paymentKind: d,
                analyticsLocations: k ?? [],
                contextKey: C,
                onContinue: () => t(!0),
            });
        if (!I) {
            let t = "none";
            (u ? (t = "gift") : "eligible" === _ ? (t = "already_eligible") : "error" === _ && (t = "prior_error"),
                c.default.track(p.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                    sku_id: l,
                    guild_id: y ?? null,
                    application_id: a,
                    payment_kind: d,
                    is_gift: u,
                    eligibility_state: _ ?? "none",
                    skip_reason: t,
                    error_http_status: f?.state === "error" ? (f.httpStatus ?? null) : null,
                    location_stack: k,
                }));
        }
        e({
            onClose: () => {
                ((0, o.closeModal)(s, C), (g = !0));
            },
            onComplete: () => {
                g = !0;
            },
        });
    })();
}
function y(t, e) {
    let { isGift: n, giftRecipient: i, giftingOrigin: d, additionalUserIds: c } = e,
        {
            discoverySessionId: r,
            analyticsLocations: s,
            guildId: p,
            contextKey: y,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        k = y ?? (0, o.getInteractingModalContext)();
    u(
        {
            guildId: p,
            applicationId: t.applicationId,
            skuId: t.id,
            paymentKind: "fiat",
            isGift: n,
            analyticsLocations: s,
            contextKey: k,
        },
        (e) => {
            let { onClose: o, onComplete: p } = e;
            !(function (t) {
                let {
                    contextKey: e,
                    discoverySessionId: n,
                    sku: i,
                    analyticsLocations: o,
                    isGift: a,
                    giftRecipient: d,
                    additionalUserIds: c,
                    giftingOrigin: r,
                    onCloseCallback: s,
                    onComplete: p,
                    modalKey: u,
                } = t;
                l.UnifiedCheckoutFlowManagerSingletons[l.CL.SLAYER_STOREFRONT_CHECKOUT]
                    .get()
                    .openCheckoutModal({
                        checkoutConfiguration: {
                            discoverySessionId: n,
                            applicationId: i.applicationId,
                            skuId: i.id,
                            skuProductLine: i.productLine,
                        },
                        unifiedCheckoutProviderProps: { analyticsLocations: o },
                        checkoutHandlers: { onComplete: p },
                        giftContextProps: { isGift: a, giftRecipient: d, giftingOrigin: r, additionalUserIds: c },
                        modalAPIOptions: { contextKey: e, modalKey: u, onCloseCallback: s },
                    });
            })({
                contextKey: k,
                discoverySessionId: r,
                sku: t,
                analyticsLocations: s ?? [],
                isGift: n,
                giftRecipient: i,
                giftingOrigin: d,
                additionalUserIds: c,
                onCloseCallback: () => {
                    ((0, a.ET)(), o());
                },
                onComplete: p,
                modalKey: "slayer-payment-modal",
            });
        },
    );
}
function k(t, e) {
    let { guildId: n, contextKey: i, analyticsLocations: l, onCloseCallback: c, onComplete: r, ...s } = e,
        p = i ?? (0, o.getInteractingModalContext)();
    u(
        {
            applicationId: t.applicationId,
            skuId: t.id,
            paymentKind: "orbs",
            guildId: n,
            analyticsLocations: l,
            contextKey: p,
        },
        (e) => {
            let { onClose: n, onComplete: i } = e;
            (0, d.B4)({
                ...s,
                applicationId: t.applicationId,
                skuId: t.id,
                analyticsLocations: l,
                contextKey: p,
                onCloseCallback: () => {
                    ((0, a.ET)(), n(), c?.());
                },
                onComplete: (t) => {
                    (i(), r(t));
                },
            });
        },
    );
}
function C() {
    (0, o.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("450963"), n.e("847799"), n.e("701218")]).then(
                n.bind(n, 839225),
            );
            return (e) => (0, i.jsx)(t, { ...e });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
