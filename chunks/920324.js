"use strict";
l.d(t, { t: () => u });
var r = l(627968),
    a = l(64700),
    n = l(179262),
    i = l(561769),
    s = l(41770),
    o = l(148702),
    d = l(785330),
    c = l(652215);
let u = {
    title: "Layout Builder",
    stories: [
        {
            name: "Layout Builder",
            id: "layout-builder",
            component: () => {
                let [e, t] = a.useState(JSON.stringify(s.uG, null, 2)),
                    [l, n] = a.useState(e);
                return (
                    a.useEffect(() => {
                        try {
                            (0, d.F2)(JSON.parse(e)) && n(e);
                        } catch {}
                    }, [e]),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.A, { value: e, onChange: (e) => t(e) }),
                            (0, r.jsx)("hr", {}),
                            (0, r.jsx)(d.Ay, { layout: JSON.parse(l) }),
                        ],
                    })
                );
            },
            controls: {},
        },
        {
            name: "Shop Index Page (sample)",
            id: "shop-index-page",
            component: (e) => {
                let { collectionId: t } = e,
                    { collection: l, isFetching: i } = (0, n.A)({ collectionId: t, includePricing: !0 }),
                    s = a.useMemo(() => {
                        let e = l?.styles?.backgroundColors?.[0];
                        return {
                            id: "shop-index-page",
                            children: [
                                {
                                    block: "Section",
                                    children: [
                                        {
                                            block: "ContainedHero",
                                            bannerSrc: l?.catalogBannerUrl ?? "",
                                            backgroundColor: e?.toHexString() ?? "red",
                                        },
                                    ],
                                },
                                {
                                    block: "Section",
                                    children: [
                                        {
                                            block: "Grid",
                                            columns: 3,
                                            children:
                                                l?.products.map((e) => ({
                                                    block: "ShopProductCard",
                                                    skuId: e.skuIds[0],
                                                })) ?? [],
                                        },
                                    ],
                                },
                            ],
                        };
                    }, [l?.styles?.backgroundColors, l?.catalogBannerUrl, l?.products]);
                return i ? (0, r.jsx)("div", { children: "Loading..." }) : (0, r.jsx)(d.Ay, { layout: s });
            },
            controls: { collectionId: { label: "Collection Id", type: "text", defaultValue: "1458472704809111646" } },
        },
        {
            name: "Orb Home (sample)",
            id: "orb-home",
            component: () => {
                let e = {
                    id: "orb-home",
                    children: [
                        {
                            block: "Section",
                            children: [
                                { block: "Section", verticalMargin: 256, children: [] },
                                {
                                    block: "Stack",
                                    direction: "horizontal",
                                    justify: "space-between",
                                    children: [
                                        {
                                            block: "Stack",
                                            direction: "vertical",
                                            children: [
                                                {
                                                    block: "Heading",
                                                    variant: "heading-xxl/bold",
                                                    content: "Introducing Discord Orbs",
                                                },
                                                {
                                                    block: "Text",
                                                    variant: "text-lg/normal",
                                                    content: "Reward your play. Earn through Quests. Spend in the Shop",
                                                },
                                            ],
                                        },
                                        { block: "Button", href: "", ctaText: "Go to Quest Home" },
                                    ],
                                },
                                { block: "Section", verticalMargin: 64, children: [] },
                                {
                                    block: "Section",
                                    children: [
                                        {
                                            block: "Grid",
                                            columns: 4,
                                            children: [
                                                {
                                                    block: "SkuList",
                                                    skuBlock: "ShopProductCard",
                                                    skuIds: [
                                                        "1333912750274904064",
                                                        "1342211853484429445",
                                                        "1427463138634109025",
                                                        "1427463138634109026",
                                                        "1427463138634109027",
                                                        "1332505467980873728",
                                                        "1427463138634109028",
                                                        "1351351503339913256",
                                                        "1427463138646954035",
                                                        "1427463138646954036",
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    block: "Section",
                                    children: [
                                        {
                                            block: "ContainedHero",
                                            bannerSrc:
                                                "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                                            backgroundColor: "black",
                                        },
                                    ],
                                },
                                {
                                    block: "Section",
                                    children: [{ block: "SubTemplate", tenantId: c.FYj, templateId: "popular-picks" }],
                                },
                            ],
                        },
                    ],
                };
                return (0, r.jsxs)("div", {
                    style: { position: "relative" },
                    children: [
                        (0, r.jsx)("div", {
                            style: {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                opacity: 0.4,
                                top: -168,
                                left: 0,
                                right: 0,
                                backgroundImage:
                                    "url('https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d')",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            },
                        }),
                        (0, r.jsx)(i.v3.Provider, {
                            value: { prioritizedCurrency: i.Hi.ORBS },
                            children: (0, r.jsx)("div", {
                                style: { position: "relative" },
                                children: (0, r.jsx)(d.Ay, { layout: e }),
                            }),
                        }),
                    ],
                });
            },
            controls: {},
        },
        {
            name: "Remote Layouts",
            id: "remote-layouts",
            component: (e) => {
                let { layoutId: t, tenantId: l } = e;
                return (0, r.jsx)(d.Qs, { layoutId: t, tenantId: l });
            },
            controls: {
                layoutId: { label: "Layout Id", type: "text", defaultValue: "1465939725649973269" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: c.FYj },
            },
        },
        {
            name: "Remote Templates",
            id: "remote-templates",
            component: (e) => {
                let { templateId: t, tenantId: l } = e;
                return (0, r.jsx)(d.Z_, { templateId: t, tenantId: l });
            },
            controls: {
                templateId: { label: "Template Id", type: "text", defaultValue: "popular-picks" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: c.FYj },
            },
        },
    ],
};
