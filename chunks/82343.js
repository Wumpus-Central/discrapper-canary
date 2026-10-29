n.d(e, { a: () => C, openSocialLayerStorefrontAnnouncementModal: () => y, n: () => k });
var o = n(477900),
    i = n(192308),
    l = n(391048),
    a = n(589078),
    c = n(652165),
    d = n(174459),
    r = n(832163);
let s = "slayer-eligibility-check-modal";
var u = n(652215);
function p(t, e) {
    let { applicationId: l, skuId: a, isGift: c = !1, guildId: p, analyticsLocations: C, contextKey: k } = t,
        y = !1;
    !(function t() {
        let g = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (y) return;
        let I = r.A.getSKUEligibilityEntry(a),
            f = I?.state;
        if (!c && (null == f || "checking" === f || "ineligible" === f))
            return void (function (t) {
                let {
                    guildId: e,
                    applicationId: l,
                    skuId: a,
                    analyticsLocations: c,
                    contextKey: d,
                    onContinue: r,
                    onClose: u,
                } = t;
                (0, i.openModalLazy)(
                    async () => {
                        let { default: t } = await Promise.all([n.e("833192"), n.e("262754")]).then(n.bind(n, 424185));
                        return (n) =>
                            (0, o.jsx)(t, {
                                ...n,
                                skuId: a,
                                guildId: e,
                                applicationId: l,
                                analyticsLocations: c,
                                onContinue: r,
                            });
                    },
                    { modalKey: s, contextKey: d, onCloseCallback: u },
                );
            })({
                guildId: p,
                applicationId: l,
                skuId: a,
                analyticsLocations: C ?? [],
                contextKey: k,
                onContinue: () => t(!0),
            });
        if (!g) {
            let t = "none";
            (c ? (t = "gift") : "eligible" === f ? (t = "already_eligible") : "error" === f && (t = "prior_error"),
                d.default.track(u.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                    sku_id: a,
                    guild_id: p ?? null,
                    application_id: l,
                    is_gift: c,
                    eligibility_state: f ?? "none",
                    skip_reason: t,
                    error_http_status: I?.state === "error" ? (I.httpStatus ?? null) : null,
                    location_stack: C,
                }));
        }
        e({
            onClose: () => {
                ((0, i.closeModal)(s, k), (y = !0));
            },
            onComplete: () => {
                y = !0;
            },
        });
    })();
}
function C(t, e) {
    let { isGift: n, giftRecipient: o, giftingOrigin: c, additionalUserIds: d } = e,
        {
            discoverySessionId: r,
            analyticsLocations: s,
            guildId: u,
            contextKey: C,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        k = C ?? (0, i.getInteractingModalContext)();
    p(
        { guildId: u, applicationId: t.applicationId, skuId: t.id, isGift: n, analyticsLocations: s, contextKey: k },
        (e) => {
            let { onClose: i, onComplete: u } = e;
            !(function (t) {
                let {
                    contextKey: e,
                    discoverySessionId: n,
                    sku: o,
                    analyticsLocations: i,
                    isGift: l,
                    giftRecipient: c,
                    additionalUserIds: d,
                    giftingOrigin: r,
                    onCloseCallback: s,
                    onComplete: u,
                    modalKey: p,
                } = t;
                a.UnifiedCheckoutFlowManagerSingletons[a.CL.SLAYER_STOREFRONT_CHECKOUT]
                    .get()
                    .openCheckoutModal({
                        checkoutConfiguration: {
                            discoverySessionId: n,
                            applicationId: o.applicationId,
                            skuId: o.id,
                            skuProductLine: o.productLine,
                        },
                        unifiedCheckoutProviderProps: { analyticsLocations: i },
                        checkoutHandlers: { onComplete: u },
                        giftContextProps: { isGift: l, giftRecipient: c, giftingOrigin: r, additionalUserIds: d },
                        modalAPIOptions: { contextKey: e, modalKey: p, onCloseCallback: s },
                    });
            })({
                contextKey: k,
                discoverySessionId: r,
                sku: t,
                analyticsLocations: s ?? [],
                isGift: n,
                giftRecipient: o,
                giftingOrigin: c,
                additionalUserIds: d,
                onCloseCallback: () => {
                    ((0, l.ET)(), i());
                },
                onComplete: u,
                modalKey: "slayer-payment-modal",
            });
        },
    );
}
function k(t, e) {
    let { guildId: n, contextKey: o, analyticsLocations: a, onCloseCallback: d, onComplete: r, ...s } = e,
        u = o ?? (0, i.getInteractingModalContext)();
    p({ applicationId: t.applicationId, skuId: t.id, guildId: n, analyticsLocations: a, contextKey: u }, (e) => {
        let { onClose: n, onComplete: o } = e;
        (0, c.B4)({
            ...s,
            applicationId: t.applicationId,
            skuId: t.id,
            analyticsLocations: a,
            contextKey: u,
            onCloseCallback: () => {
                ((0, l.ET)(), n(), d?.());
            },
            onComplete: (t) => {
                (o(), r(t));
            },
        });
    });
}
function y() {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("450963"), n.e("847799"), n.e("701218")]).then(
                n.bind(n, 839225),
            );
            return (e) => (0, o.jsx)(t, { ...e });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
