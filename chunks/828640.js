t.r(a), t.d(a, { slayerStorefrontPlaygroundConfig: () => H, storefrontCollection: () => j });
var l = t(34188),
    n = t(627968),
    r = t(64700),
    o = t(50777),
    i = t(467884),
    s = t(989349),
    d = t.n(s),
    u = t(122817),
    c = t(17928),
    p = t(228366),
    m = t(288106),
    g = t(95701),
    b = t(280450),
    y = t(652215),
    S = t(818348);
let f = "000000000000000100",
    h = "000000000000000200",
    E = "000000000000000300",
    I = "000000000000000400";
function x(e, a, t) {
    let {
            name: l,
            price: n,
            salePrice: r,
            salePercentage: o,
            exclusive: i,
            orbsReward: s,
            daysUntilExpiry: c,
            isEligible: g,
        } = a,
        b = `playground-pricing-result-${e}`,
        f = `playground-reward-result-${e}`,
        E = null != c ? d()().add(c, "days").toISOString() : void 0,
        I = {
            id: e,
            type: y.Puh.DURABLE_PRIMARY,
            application_id: h,
            product_line: y.EZt.SOCIAL_LAYER_GAME_ITEM,
            name: l,
            summary: "",
            description: "A playground preview item for testing storefront component states.",
            features: [],
            genres: [],
            dependent_sku_id: null,
            manifests: [],
            available_regions: [],
            access_type: null,
            legal_notice: "",
            price: { amount: n, currency: S.Yr.USD, sale_amount: r ?? void 0, sale_percentage: o ?? void 0 },
            price_tier: 0,
            premium: !1,
            show_age_gate: !1,
            restricted: !1,
            slug: "playground-item",
            exclusive: i,
            locales: ["en-US"],
            flags: u.d.AVAILABLE,
            deleted: !1,
            bundled_sku_ids: [],
            orbs_reward: s ?? 0,
            eligible_offers: [],
            tenant_metadata: { social_layer: { carousel_items: [], expires_at: E } },
        };
    if ((p.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: I }), null != r && null != o)) {
        let a = {
            skuPriceMap: { [e]: { pricingResultId: b, rewardResultIds: [f] } },
            pricingResultIdMap: {
                [b]: {
                    [m.QK.SELF_PURCHASE]: {
                        userPrice: [
                            { currency: S.Yr.USD, amount: r },
                            { currency: S.Yr.DISCORD_ORB, amount: r },
                        ],
                        prices: {
                            [y.FBC.BASE]: {
                                [m.v8.NORMAL]: [
                                    { currency: S.Yr.USD, amount: n },
                                    { currency: S.Yr.DISCORD_ORB, amount: n },
                                ],
                                [m.v8.DISCOUNTED]: [{ currency: S.Yr.USD, amount: r }],
                            },
                        },
                    },
                    [m.QK.GIFT]: {
                        userPrice: [{ currency: S.Yr.USD, amount: r }],
                        prices: {
                            [y.FBC.BASE]: {
                                [m.v8.NORMAL]: [{ currency: S.Yr.USD, amount: n }],
                                [m.v8.DISCOUNTED]: [{ currency: S.Yr.USD, amount: r }],
                            },
                        },
                    },
                },
            },
            rewardResultIdMap: {
                [f]: {
                    [m.QK.SELF_PURCHASE]: { type: m.Ns.DISCOUNT, amount: Number(o) },
                    [m.QK.GIFT]: { type: m.Ns.DISCOUNT, amount: Number(o) },
                },
            },
        };
        p.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: { type: "skus", skuIds: [e] }, data: a });
    } else
        p.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: [e] },
            data: {
                skuPriceMap: { [e]: { pricingResultId: b, rewardResultIds: [] } },
                pricingResultIdMap: {
                    [b]: {
                        [m.QK.SELF_PURCHASE]: {
                            userPrice: [
                                { currency: S.Yr.USD, amount: n },
                                { currency: S.Yr.DISCORD_ORB, amount: n },
                            ],
                            prices: {
                                [y.FBC.BASE]: {
                                    [m.v8.NORMAL]: [
                                        { currency: S.Yr.USD, amount: n },
                                        { currency: S.Yr.DISCORD_ORB, amount: n },
                                    ],
                                    [m.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                        [m.QK.GIFT]: {
                            userPrice: [{ currency: S.Yr.USD, amount: n }],
                            prices: {
                                [y.FBC.BASE]: {
                                    [m.v8.NORMAL]: [{ currency: S.Yr.USD, amount: n }],
                                    [m.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                    },
                },
                rewardResultIdMap: {},
            },
        });
    p.h.dispatch({
        type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
        interactionId: "playground-interaction",
        applicationId: h,
        skuId: e,
        recipientId: t,
        eligible: g,
    });
}
function C(e) {
    let a = (0, c.bG)([b.default], () => b.default.getId()),
        {
            name: t,
            price: l,
            salePrice: n,
            salePercentage: o,
            exclusive: i,
            orbsReward: s,
            daysUntilExpiry: d,
            isEligible: u,
        } = e;
    r.useEffect(() => {
        x(f, e, a);
    }, [t, l, n, o, i, s, d, u, a]);
}
let v = [
        {
            id: "000000000000000101",
            params: {
                name: "Legendary Dragon Armor",
                price: 1999,
                salePrice: null,
                salePercentage: null,
                exclusive: !0,
                orbsReward: 15e3,
                daysUntilExpiry: null,
                isEligible: !0,
            },
        },
        {
            id: "000000000000000102",
            params: {
                name: "Shadow Blade Skin",
                price: 999,
                salePrice: 749,
                salePercentage: "25",
                exclusive: !1,
                orbsReward: 15e3,
                daysUntilExpiry: null,
                isEligible: !0,
            },
        },
        {
            id: "000000000000000103",
            params: {
                name: "Galactic Wings",
                price: 1499,
                salePrice: null,
                salePercentage: null,
                exclusive: !1,
                orbsReward: 15e3,
                daysUntilExpiry: 2,
                isEligible: !0,
            },
        },
        {
            id: "000000000000000104",
            params: {
                name: "Phoenix Emote Bundle",
                price: 499,
                salePrice: null,
                salePercentage: null,
                exclusive: !1,
                orbsReward: 15e3,
                daysUntilExpiry: null,
                isEligible: !0,
            },
        },
    ],
    _ = (0, g.createChannelRecord)({
        id: "000000000000000500",
        type: y.rbe.GUILD_TEXT,
        guild_id: E,
        name: "playground-channel",
    }),
    A = {
        name: "Shop Card",
        id: "storefront-card",
        docs: 'Preview the SocialLayerStorefrontCard in various states. The card uses a fallback icon since no real asset images are loaded. The "Embedded" variant renders the full in-chat product details embed.',
        component: function (e) {
            let {
                    variant: a,
                    name: t,
                    price: l,
                    hasDiscount: s,
                    discountPercent: d,
                    isExclusive: u,
                    hasOrbsReward: c,
                    orbsRewardAmount: m,
                    hasExpiry: g,
                    daysUntilExpiry: b,
                    isEligible: S,
                } = e,
                I = s ? String(d) : null,
                x = s ? Math.round(l * (1 - d / 100)) : null;
            C({
                name: t,
                price: l,
                salePrice: x,
                salePercentage: I,
                exclusive: u,
                orbsReward: c ? m : null,
                daysUntilExpiry: g ? b : null,
                isEligible: S,
            }),
                r.useEffect(() => {
                    let e = {
                        id: h,
                        name: "Playground Game",
                        description: "A playground preview application for testing storefront component states.",
                        is_monetized: !0,
                        is_verified: !0,
                        is_discoverable: !0,
                        flags_new: y.gfo.SOCIAL_LAYER_INTEGRATION.toString(),
                    };
                    p.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: e });
                }, []);
            let v = r.useCallback((e) => {
                e.preventDefault();
            }, []);
            return a === i.s.EMBEDDED
                ? (0, n.jsx)("div", {
                      style: { padding: 16 },
                      children: (0, n.jsx)(o.A, { applicationId: h, guildId: E, skuId: f, channel: _ }),
                  })
                : (0, n.jsx)("div", {
                      style: { maxWidth: a === i.s.SMALL ? 220 : 300, padding: 16 },
                      children: (0, n.jsx)(i.A, { skuId: f, variant: a, onClick: v }),
                  });
        },
        controls: {
            variant: {
                label: "Card Variant",
                type: "select",
                defaultValue: i.s.SMALL,
                options: [
                    { label: "Small", value: i.s.SMALL },
                    { label: "Medium", value: i.s.MEDIUM },
                    { label: "Embedded", value: i.s.EMBEDDED },
                ],
            },
            name: { label: "Product Name", type: "text", defaultValue: "Legendary Dragon Armor" },
            price: { label: "Price (cents)", type: "number", defaultValue: 999, minValue: 0 },
            hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !1 },
            discountPercent: { label: "Discount %", type: "slider", defaultValue: 25, minValue: 1, maxValue: 90 },
            isExclusive: { label: "Exclusive Badge", type: "boolean", defaultValue: !1 },
            hasOrbsReward: { label: "Has Orbs Reward", type: "boolean", defaultValue: !1 },
            orbsRewardAmount: { label: "Orbs Reward Amount", type: "number", defaultValue: 50, minValue: 1 },
            hasExpiry: { label: "Has Expiry Badge", type: "boolean", defaultValue: !1 },
            daysUntilExpiry: { label: "Days Until Expiry", type: "slider", defaultValue: 2, minValue: 1, maxValue: 3 },
            isEligible: { label: "Purchase Eligible", type: "boolean", defaultValue: !0 },
        },
    };
var D = t(331322),
    R = t(834730),
    P = t(821609),
    O = t(231723),
    T = t(439325);
t(323874), t(14289), t(35956);
var w = t(366523);
let L = new URL("https://cdn.discordapp.com/embed/avatars/0.png"),
    U = new URL("https://cdn.discordapp.com/embed/avatars/1.png");
var V = t(263911),
    N = t(403581),
    k = t(873297),
    B = t(758836),
    M = t(375708);
function G() {}
let Y = {
    storefront: "linear-gradient(90deg, rgba(88, 101, 242, 0.4) 0%, rgba(157, 60, 178, 0.4) 100%)",
    nitro: "linear-gradient(90deg, rgba(179, 38, 156, 0.4) 0%, rgba(20, 20, 203, 0.4) 100%)",
    none: void 0,
};
var F = t(971146);
let j = {
        id: "slayer-storefront",
        name: "Slayer Storefront",
        groups: [
            { title: "Shop Card", stories: [A] },
            {
                title: "Product Details",
                stories: [
                    {
                        name: "PDP Modal",
                        id: "pdp-modal",
                        docs: "Preview the Product Details Page modal. Opens the real RedesignedProductDetailsModal with mock store data. Media carousel will be empty since no real assets are loaded.",
                        component: function (e) {
                            let {
                                    name: a,
                                    price: t,
                                    hasDiscount: l,
                                    discountPercent: o,
                                    isExclusive: i,
                                    hasOrbsReward: s,
                                    orbsRewardAmount: d,
                                    hasExpiry: u,
                                    daysUntilExpiry: c,
                                    isEligible: m,
                                } = e,
                                g = l ? String(o) : null,
                                b = l ? Math.round(t * (1 - o / 100)) : null,
                                [y, S] = r.useState(!1),
                                x = r.useRef(null);
                            return (C({
                                name: a,
                                price: t,
                                salePrice: b,
                                salePercentage: g,
                                exclusive: i,
                                orbsReward: s ? d : null,
                                daysUntilExpiry: u ? c : null,
                                isEligible: m,
                            }),
                            r.useEffect(() => {
                                p.h.dispatch({
                                    type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                    config: {
                                        promotionalSkuIds: [],
                                        promotionEndDatetime: null,
                                        storefronts: [
                                            {
                                                guildId: E,
                                                applicationId: h,
                                                gameId: I,
                                                collectiblesShopNavigationEnabled: !1,
                                                excludedPlatforms: [],
                                                disableMobileAccountLinking: !1,
                                                allowOrbsSpending: !1,
                                                promotionEndDatetime: null,
                                            },
                                        ],
                                        announcementModalConfig: null,
                                    },
                                }),
                                    p.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                        guildOrApplicationId: { type: "guild", guildId: E },
                                        storefront: {
                                            id: h,
                                            publishedAt: null,
                                            applicationId: h,
                                            title: "Playground Game",
                                            logoAssetId: null,
                                            lightThemeLogoAssetId: null,
                                            pages: [{ title: "Shop", skuIds: [f], sections: [], leaderboard: null }],
                                            assets: {},
                                            promotions: {},
                                        },
                                    });
                            }, []),
                            y)
                                ? (0, n.jsx)(T.default, {
                                      transitionState: O.ip.ENTERED,
                                      returnRef: x,
                                      skuId: f,
                                      applicationId: h,
                                      isStorefront: !0,
                                      onClose: () => Promise.resolve(S(!1)),
                                  })
                                : (0, n.jsxs)(D.B, {
                                      gap: 12,
                                      style: { padding: 16 },
                                      children: [
                                          (0, n.jsx)(R.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children:
                                                  "Opens the redesigned PDP modal with the configured mock data. Close with the X button or Escape.",
                                          }),
                                          (0, n.jsx)("div", {
                                              children: (0, n.jsx)(P.$, {
                                                  variant: "primary",
                                                  onClick: () => S(!0),
                                                  text: "Open PDP Modal",
                                              }),
                                          }),
                                      ],
                                  });
                        },
                        controls: {
                            name: { label: "Product Name", type: "text", defaultValue: "Legendary Dragon Armor" },
                            price: { label: "Price (cents)", type: "number", defaultValue: 999, minValue: 0 },
                            hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !1 },
                            discountPercent: {
                                label: "Discount %",
                                type: "slider",
                                defaultValue: 25,
                                minValue: 1,
                                maxValue: 90,
                            },
                            isExclusive: { label: "Exclusive Badge", type: "boolean", defaultValue: !1 },
                            hasOrbsReward: { label: "Has Orbs Reward", type: "boolean", defaultValue: !1 },
                            orbsRewardAmount: {
                                label: "Orbs Reward Amount",
                                type: "number",
                                defaultValue: 50,
                                minValue: 1,
                            },
                            hasExpiry: { label: "Has Expiry Badge", type: "boolean", defaultValue: !1 },
                            daysUntilExpiry: {
                                label: "Days Until Expiry",
                                type: "slider",
                                defaultValue: 2,
                                minValue: 1,
                                maxValue: 3,
                            },
                            isEligible: { label: "Purchase Eligible", type: "boolean", defaultValue: !0 },
                        },
                    },
                ],
            },
            {
                title: "Components",
                stories: [
                    {
                        name: "ExclusiveBadge",
                        id: "exclusive-badge",
                        component: function () {
                            return (0, n.jsxs)(D.B, {
                                gap: 16,
                                children: [
                                    (0, n.jsx)(R.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The exclusive badge shown on storefront cards and the PDP modal for exclusive items.",
                                    }),
                                    (0, n.jsx)(V.I, {}),
                                ],
                            });
                        },
                    },
                    {
                        name: "InGameItemTag",
                        id: "in-game-item-tag",
                        component: function (e) {
                            let { textColor: a } = e;
                            return (0, n.jsxs)(D.B, {
                                gap: 16,
                                children: [
                                    (0, n.jsx)(R.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The in-game item indicator tag shown on storefront cards and the PDP modal.",
                                    }),
                                    (0, n.jsx)(F.V, { textColor: a }),
                                ],
                            });
                        },
                        controls: {
                            textColor: {
                                label: "Text Color",
                                type: "select",
                                defaultValue: "text-muted",
                                options: [
                                    { label: "Muted", value: "text-muted" },
                                    { label: "Always White", value: "always-white" },
                                ],
                            },
                        },
                    },
                    {
                        name: "CardImage",
                        id: "card-image",
                        docs: "The card image component with gradient background extraction. Uses placeholder avatar images for demo.",
                        component: function (e) {
                            let { shape: a, useBackgroundImage: t } = e;
                            return (0, n.jsx)("div", {
                                style: { width: 220, height: 220 },
                                children: (0, n.jsx)(w.A, {
                                    cardImage: L,
                                    cardBackgroundImage: t ? U : null,
                                    altText: "Playground preview",
                                    shape: a,
                                }),
                            });
                        },
                        controls: {
                            shape: {
                                label: "Shape",
                                type: "select",
                                defaultValue: "custom",
                                options: [
                                    { label: "Custom", value: "custom" },
                                    { label: "Square", value: "square" },
                                ],
                            },
                            useBackgroundImage: { label: "Use Background Image", type: "boolean", defaultValue: !1 },
                        },
                    },
                    {
                        name: "Game Promotion Banner",
                        id: "game-promotion-banner",
                        docs: 'The social-layer storefront promotional banner. Switch the CTA preset to preview the storefront ("Shop All") vs. the Nitro reuse (the canonical "Get Nitro" subscribe button), and toggle the optional time-left badge and logo.',
                        component: function (e) {
                            let a,
                                t,
                                {
                                    headerText: l,
                                    ctaPreset: o,
                                    showLogo: i,
                                    showTimeLeft: s,
                                    timeLeftText: d,
                                    showOrbsOnly: u,
                                    cardCount: m,
                                    gradientPreset: g,
                                } = e,
                                y =
                                    ((a = (0, c.bG)([b.default], () => b.default.getId())),
                                    (t = r.useMemo(
                                        () =>
                                            v.slice(0, m).map((e) => {
                                                let { id: a } = e;
                                                return a;
                                            }),
                                        [m],
                                    )),
                                    r.useEffect(() => {
                                        for (let { id: e, params: t } of v.slice(0, m)) x(e, t, a);
                                        p.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                            config: {
                                                promotionalSkuIds: t,
                                                promotionEndDatetime: null,
                                                storefronts: [
                                                    {
                                                        guildId: E,
                                                        applicationId: h,
                                                        gameId: I,
                                                        collectiblesShopNavigationEnabled: !1,
                                                        excludedPlatforms: [],
                                                        disableMobileAccountLinking: !1,
                                                        allowOrbsSpending: u ?? !1,
                                                        promotionEndDatetime: new Date("2030-06-30T00:00:00Z"),
                                                    },
                                                ],
                                                announcementModalConfig: null,
                                            },
                                        }),
                                            p.h.dispatch({
                                                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                                guildOrApplicationId: { type: "guild", guildId: E },
                                                storefront: {
                                                    id: h,
                                                    publishedAt: null,
                                                    applicationId: h,
                                                    title: "Playground Game",
                                                    logoAssetId: null,
                                                    lightThemeLogoAssetId: null,
                                                    pages: [
                                                        { title: "Shop", skuIds: t, sections: [], leaderboard: null },
                                                    ],
                                                    assets: {},
                                                    promotions: {},
                                                },
                                            });
                                    }, [m, a, t, u]),
                                    t),
                                S = r.useMemo(
                                    () =>
                                        "nitro" === o
                                            ? {
                                                  kind: "custom",
                                                  node: (0, n.jsx)(P.$, {
                                                      variant: "expressive",
                                                      size: "sm",
                                                      icon: N.t,
                                                      text: M.intl.string(M.t.pj0XBN),
                                                      onClick: G,
                                                  }),
                                              }
                                            : { kind: "button", text: "Shop All", onClick: G },
                                    [o],
                                );
                            return (0, n.jsx)(k.A, {
                                onDismiss: G,
                                skuIds: y,
                                tab: B.G2.GAME_SHOPS,
                                applicationId: h,
                                headerText: l,
                                logoUrl: i
                                    ? "https://cdn.discordapp.com/app-assets/1346069614634864772/store/1461676971728572478.webp?size=128"
                                    : void 0,
                                cta: S,
                                timeLeftText: s && null != d && "" !== d ? d : void 0,
                                analyticsSection: "playground",
                                analyticsTileType: "PLAYGROUND_BANNER",
                                analyticsImpressionType: "playground_banner",
                                backgroundGradient: Y[g],
                            });
                        },
                        controls: {
                            headerText: {
                                label: "Header Text",
                                type: "text",
                                defaultValue: "Get Orbs on every in-game item purchase",
                            },
                            ctaPreset: {
                                label: "CTA",
                                type: "select",
                                defaultValue: "storefront",
                                options: [
                                    { label: "Storefront \u2014 Shop All", value: "storefront" },
                                    { label: "Nitro \u2014 Get Nitro", value: "nitro" },
                                ],
                            },
                            showLogo: { label: "Show Logo", type: "boolean", defaultValue: !0 },
                            showTimeLeft: { label: "Show Time Left", type: "boolean", defaultValue: !0 },
                            timeLeftText: { label: "Time Left Text", type: "text", defaultValue: "33d left" },
                            showOrbsOnly: { label: "Show Orbs Only", type: "boolean", defaultValue: !1 },
                            cardCount: {
                                label: "Card Count",
                                type: "slider",
                                defaultValue: 4,
                                minValue: 1,
                                maxValue: 4,
                            },
                            gradientPreset: {
                                label: "Background Gradient",
                                type: "select",
                                defaultValue: "storefront",
                                options: [
                                    { label: "Storefront", value: "storefront" },
                                    { label: "Nitro", value: "nitro" },
                                    { label: "None", value: "none" },
                                ],
                            },
                        },
                    },
                ],
            },
        ],
        tags: ["Slayer Storefront", "Social Layer", "Shop", "Storefront Playground"],
        IconComponent: l.U,
    },
    H = { playgroundBaseUrl: "slayer-storefront", collections: [j] };
