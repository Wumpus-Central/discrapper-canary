t.r(a), t.d(a, { slayerStorefrontPlaygroundConfig: () => F, storefrontCollection: () => G });
var l = t(34188),
    r = t(627968),
    n = t(64700),
    o = t(328100),
    i = t(989349),
    s = t.n(i),
    d = t(122817),
    u = t(17928),
    c = t(228366),
    p = t(288106),
    m = t(495544),
    g = t(652215),
    b = t(818348);
let y = "000000000000000100",
    S = "000000000000000200",
    f = "000000000000000300",
    h = "000000000000000400";
function E(e, a, t) {
    let {
            name: l,
            price: r,
            salePrice: n,
            salePercentage: o,
            exclusive: i,
            orbsReward: u,
            daysUntilExpiry: m,
            isEligible: y,
        } = a,
        f = `playground-pricing-result-${e}`,
        h = `playground-reward-result-${e}`,
        E = null != m ? s()().add(m, "days").toISOString() : void 0,
        x = {
            id: e,
            type: g.Puh.DURABLE_PRIMARY,
            application_id: S,
            product_line: g.EZt.SOCIAL_LAYER_GAME_ITEM,
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
            price: { amount: r, currency: b.Yr.USD, sale_amount: n ?? void 0, sale_percentage: o ?? void 0 },
            price_tier: 0,
            premium: !1,
            show_age_gate: !1,
            restricted: !1,
            slug: "playground-item",
            exclusive: i,
            locales: ["en-US"],
            flags: d.d.AVAILABLE,
            deleted: !1,
            bundled_sku_ids: [],
            orbs_reward: u ?? 0,
            eligible_offers: [],
            tenant_metadata: { social_layer: { carousel_items: [], expires_at: E } },
        };
    if ((c.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: x }), null != n && null != o)) {
        let a = {
            skuPriceMap: { [e]: { pricingResultId: f, rewardResultIds: [h] } },
            pricingResultIdMap: {
                [f]: {
                    [p.QK.SELF_PURCHASE]: {
                        userPrice: [{ currency: b.Yr.USD, amount: n }],
                        prices: {
                            [g.FBC.BASE]: {
                                [p.v8.NORMAL]: [{ currency: b.Yr.USD, amount: r }],
                                [p.v8.DISCOUNTED]: [{ currency: b.Yr.USD, amount: n }],
                            },
                        },
                    },
                    [p.QK.GIFT]: {
                        userPrice: [{ currency: b.Yr.USD, amount: n }],
                        prices: {
                            [g.FBC.BASE]: {
                                [p.v8.NORMAL]: [{ currency: b.Yr.USD, amount: r }],
                                [p.v8.DISCOUNTED]: [{ currency: b.Yr.USD, amount: n }],
                            },
                        },
                    },
                },
            },
            rewardResultIdMap: {
                [h]: {
                    [p.QK.SELF_PURCHASE]: { type: p.Ns.DISCOUNT, amount: Number(o) },
                    [p.QK.GIFT]: { type: p.Ns.DISCOUNT, amount: Number(o) },
                },
            },
        };
        c.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: { type: "skus", skuIds: [e] }, data: a });
    } else
        c.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: [e] },
            data: {
                skuPriceMap: { [e]: { pricingResultId: f, rewardResultIds: [] } },
                pricingResultIdMap: {
                    [f]: {
                        [p.QK.SELF_PURCHASE]: {
                            userPrice: [{ currency: b.Yr.USD, amount: r }],
                            prices: {
                                [g.FBC.BASE]: {
                                    [p.v8.NORMAL]: [{ currency: b.Yr.USD, amount: r }],
                                    [p.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                        [p.QK.GIFT]: {
                            userPrice: [{ currency: b.Yr.USD, amount: r }],
                            prices: {
                                [g.FBC.BASE]: {
                                    [p.v8.NORMAL]: [{ currency: b.Yr.USD, amount: r }],
                                    [p.v8.DISCOUNTED]: [],
                                },
                            },
                        },
                    },
                },
                rewardResultIdMap: {},
            },
        });
    c.h.dispatch({
        type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
        interactionId: "playground-interaction",
        applicationId: S,
        skuId: e,
        recipientId: t,
        eligible: y,
    });
}
function x(e) {
    let a = (0, u.bG)([m.default], () => m.default.getId()),
        {
            name: t,
            price: l,
            salePrice: r,
            salePercentage: o,
            exclusive: i,
            orbsReward: s,
            daysUntilExpiry: d,
            isEligible: c,
        } = e;
    n.useEffect(() => {
        E(y, e, a);
    }, [t, l, r, o, i, s, d, c, a]);
}
let I = [
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
    v = {
        name: "Shop Card",
        id: "storefront-card",
        docs: "Preview the SocialLayerStorefrontCard in various states. The card uses a fallback icon since no real asset images are loaded.",
        component: function (e) {
            let {
                    variant: a,
                    name: t,
                    price: l,
                    hasDiscount: i,
                    discountPercent: s,
                    isExclusive: d,
                    hasOrbsReward: u,
                    orbsRewardAmount: c,
                    hasExpiry: p,
                    daysUntilExpiry: m,
                    isEligible: g,
                } = e,
                b = i ? String(s) : null,
                S = i ? Math.round(l * (1 - s / 100)) : null;
            x({
                name: t,
                price: l,
                salePrice: S,
                salePercentage: b,
                exclusive: d,
                orbsReward: u ? c : null,
                daysUntilExpiry: p ? m : null,
                isEligible: g,
            });
            let f = n.useCallback((e) => {
                e.preventDefault();
            }, []);
            return (0, r.jsx)("div", {
                style: { maxWidth: a === o.s.SMALL ? 220 : 300, padding: 16 },
                children: (0, r.jsx)(o.A, { skuId: y, variant: a, onClick: f }),
            });
        },
        controls: {
            variant: {
                label: "Card Variant",
                type: "select",
                defaultValue: o.s.SMALL,
                options: [
                    { label: "Small", value: o.s.SMALL },
                    { label: "Medium", value: o.s.MEDIUM },
                    { label: "Embedded", value: o.s.EMBEDDED },
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
var C = t(331322),
    A = t(834730),
    _ = t(821609),
    P = t(231723),
    R = t(213113);
t(323874), t(14289), t(35956);
var D = t(366523);
let U = new URL("https://cdn.discordapp.com/embed/avatars/0.png"),
    L = new URL("https://cdn.discordapp.com/embed/avatars/1.png");
var T = t(263911),
    w = t(403581),
    V = t(873297),
    O = t(758836),
    N = t(375708);
let k = () => {},
    M = {
        storefront: "linear-gradient(90deg, rgba(88, 101, 242, 0.4) 0%, rgba(157, 60, 178, 0.4) 100%)",
        nitro: "linear-gradient(90deg, rgba(179, 38, 156, 0.4) 0%, rgba(20, 20, 203, 0.4) 100%)",
        none: void 0,
    };
var B = t(971146);
let G = {
        id: "slayer-storefront",
        name: "Slayer Storefront",
        groups: [
            { title: "Shop Card", stories: [v] },
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
                                    daysUntilExpiry: p,
                                    isEligible: m,
                                } = e,
                                g = l ? String(o) : null,
                                b = l ? Math.round(t * (1 - o / 100)) : null,
                                [E, I] = n.useState(!1),
                                v = n.useRef(null);
                            return (x({
                                name: a,
                                price: t,
                                salePrice: b,
                                salePercentage: g,
                                exclusive: i,
                                orbsReward: s ? d : null,
                                daysUntilExpiry: u ? p : null,
                                isEligible: m,
                            }),
                            n.useEffect(() => {
                                c.h.dispatch({
                                    type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                    config: {
                                        promotionalSkuIds: [],
                                        promotionEndDatetime: null,
                                        storefronts: [
                                            {
                                                guildId: f,
                                                applicationId: S,
                                                gameId: h,
                                                collectiblesShopNavigationEnabled: !1,
                                                excludedPlatforms: [],
                                                disableMobileAccountLinking: !1,
                                            },
                                        ],
                                        announcementModalConfig: null,
                                    },
                                }),
                                    c.h.dispatch({
                                        type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                        guildOrApplicationId: { type: "guild", guildId: f },
                                        storefront: {
                                            applicationId: S,
                                            title: "Playground Game",
                                            logoAssetId: null,
                                            lightThemeLogoAssetId: null,
                                            pages: [{ title: "Shop", skuIds: [y], sections: [], leaderboard: null }],
                                            assets: {},
                                        },
                                    });
                            }, []),
                            E)
                                ? (0, r.jsx)(R.default, {
                                      transitionState: P.ip.ENTERED,
                                      returnRef: v,
                                      skuId: y,
                                      applicationId: S,
                                      isStorefront: !0,
                                      onClose: () => Promise.resolve(I(!1)),
                                  })
                                : (0, r.jsxs)(C.B, {
                                      gap: 12,
                                      style: { padding: 16 },
                                      children: [
                                          (0, r.jsx)(A.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children:
                                                  "Opens the redesigned PDP modal with the configured mock data. Close with the X button or Escape.",
                                          }),
                                          (0, r.jsx)("div", {
                                              children: (0, r.jsx)(_.$, {
                                                  variant: "primary",
                                                  onClick: () => I(!0),
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
                            return (0, r.jsxs)(C.B, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The exclusive badge shown on storefront cards and the PDP modal for exclusive items.",
                                    }),
                                    (0, r.jsx)(T.I, {}),
                                ],
                            });
                        },
                    },
                    {
                        name: "InGameItemTag",
                        id: "in-game-item-tag",
                        component: function (e) {
                            let { textColor: a } = e;
                            return (0, r.jsxs)(C.B, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The in-game item indicator tag shown on storefront cards and the PDP modal.",
                                    }),
                                    (0, r.jsx)(B.V, { textColor: a }),
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
                            return (0, r.jsx)("div", {
                                style: { width: 220, height: 220 },
                                children: (0, r.jsx)(D.A, {
                                    cardImage: U,
                                    cardBackgroundImage: t ? L : null,
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
                                    cardCount: p,
                                    gradientPreset: g,
                                } = e,
                                b =
                                    ((a = (0, u.bG)([m.default], () => m.default.getId())),
                                    (t = n.useMemo(
                                        () =>
                                            I.slice(0, p).map((e) => {
                                                let { id: a } = e;
                                                return a;
                                            }),
                                        [p],
                                    )),
                                    n.useEffect(() => {
                                        for (let { id: e, params: t } of I.slice(0, p)) E(e, t, a);
                                        c.h.dispatch({
                                            type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS",
                                            config: {
                                                promotionalSkuIds: t,
                                                promotionEndDatetime: null,
                                                storefronts: [
                                                    {
                                                        guildId: f,
                                                        applicationId: S,
                                                        gameId: h,
                                                        collectiblesShopNavigationEnabled: !1,
                                                        excludedPlatforms: [],
                                                        disableMobileAccountLinking: !1,
                                                    },
                                                ],
                                                announcementModalConfig: null,
                                            },
                                        }),
                                            c.h.dispatch({
                                                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                                                guildOrApplicationId: { type: "guild", guildId: f },
                                                storefront: {
                                                    applicationId: S,
                                                    title: "Playground Game",
                                                    logoAssetId: null,
                                                    lightThemeLogoAssetId: null,
                                                    pages: [
                                                        { title: "Shop", skuIds: t, sections: [], leaderboard: null },
                                                    ],
                                                    assets: {},
                                                },
                                            });
                                    }, [p, a, t]),
                                    t),
                                y = n.useMemo(
                                    () =>
                                        "nitro" === o
                                            ? {
                                                  kind: "custom",
                                                  node: (0, r.jsx)(_.$, {
                                                      variant: "expressive",
                                                      size: "sm",
                                                      icon: w.t,
                                                      text: N.intl.string(N.t.pj0XBN),
                                                      onClick: k,
                                                  }),
                                              }
                                            : { kind: "button", text: "Shop All", onClick: k },
                                    [o],
                                );
                            return (0, r.jsx)(V.A, {
                                onDismiss: k,
                                skuIds: b,
                                tab: O.G2.GAME_SHOPS,
                                applicationId: S,
                                headerText: l,
                                logoUrl: i
                                    ? "https://cdn.discordapp.com/app-assets/1346069614634864772/store/1461676971728572478.webp?size=128"
                                    : void 0,
                                cta: y,
                                timeLeftText: s && null != d && "" !== d ? d : void 0,
                                analyticsSection: "playground",
                                analyticsTileType: "PLAYGROUND_BANNER",
                                analyticsImpressionType: "playground_banner",
                                backgroundGradient: M[g],
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
    F = { playgroundBaseUrl: "slayer-storefront", collections: [G] };
