"use strict";
a.d(t, { t: () => _ });
var r = a(627968),
    l = a(64700),
    n = a(834730),
    i = a(561769),
    s = a(41770),
    o = a(53566),
    d = a(148702),
    c = a(785330),
    u = a(652215),
    h = a(985018),
    p = a(692914);
let _ = {
    title: "Layout Builder",
    stories: [
        {
            name: "Layout Builder",
            id: "layout-builder",
            component: () => {
                let [e, t] = l.useState(JSON.stringify(s.uG, null, 2)),
                    [a, n] = l.useState(e);
                return (
                    l.useEffect(() => {
                        try {
                            (0, c.F2)(JSON.parse(e)) && n(e);
                        } catch {}
                    }, [e]),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(d.A, { value: e, onChange: (e) => t(e) }),
                            (0, r.jsx)("hr", {}),
                            (0, r.jsx)(c.Ay, { layout: JSON.parse(a) }),
                        ],
                    })
                );
            },
            controls: {},
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
                                                    eagerLoad: !0,
                                                    showSkeleton: !0,
                                                    sortPurchased: !0,
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
                                            block: "BackgroundImage",
                                            backgroundImage: {
                                                src: "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                                            },
                                            children: [
                                                {
                                                    block: "Grid",
                                                    columns: 2,
                                                    children: [
                                                        {
                                                            block: "Stack",
                                                            direction: "vertical",
                                                            children: [
                                                                {
                                                                    block: "Heading",
                                                                    variant: "heading-xxl/bold",
                                                                    content: "What can I get with orbs?",
                                                                },
                                                                {
                                                                    block: "Text",
                                                                    variant: "text-md/normal",
                                                                    content:
                                                                        "Spend Orbs on exclusives or grab your favorites from the shop",
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    block: "Section",
                                    children: [{ block: "SubTemplate", tenantId: u.FYj, templateId: "popular-picks" }],
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
                                children: (0, r.jsx)(c.Ay, { layout: e }),
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
                let { layoutId: t, tenantId: a } = e;
                return (0, r.jsx)(c.Qs, { layoutId: t, tenantId: a });
            },
            controls: {
                layoutId: { label: "Layout Id", type: "text", defaultValue: "1465939725649973269" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: u.FYj },
            },
        },
        {
            name: "Remote Templates",
            id: "remote-templates",
            component: (e) => {
                let { templateId: t, tenantId: a } = e;
                return (0, r.jsx)(c.Z_, { templateId: t, tenantId: a });
            },
            controls: {
                templateId: { label: "Template Id", type: "text", defaultValue: "popular-picks" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: u.FYj },
            },
        },
        {
            name: "Themed Images",
            id: "themed-images",
            component: (e) => {
                let { lightAsset: t, darkAsset: a } = e,
                    l = {
                        id: "themed-images",
                        children: [
                            {
                                block: "BackgroundImage",
                                backgroundImage: { src: { light: t, dark: a } },
                                children: [
                                    {
                                        block: "Stack",
                                        direction: "vertical",
                                        children: [
                                            {
                                                block: "Heading",
                                                variant: "heading-xl/bold",
                                                content: "Theme-aware images",
                                            },
                                            {
                                                block: "Text",
                                                variant: "text-md/normal",
                                                content: "Switch your app theme to see this change",
                                            },
                                            {
                                                block: "Text",
                                                variant: "text-sm/normal",
                                                content: "(Light shows multiple orbs, dark shows hands holding an orb)",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    };
                return (0, r.jsx)(c.Ay, { layout: l });
            },
            controls: {
                lightAsset: {
                    label: "Light Asset URL",
                    type: "text",
                    defaultValue:
                        "https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d",
                },
                darkAsset: {
                    label: "Dark Asset URL",
                    type: "text",
                    defaultValue:
                        "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                },
            },
        },
        {
            name: "CMS String",
            id: "cms-string",
            component: (e) => {
                let { text: t } = e;
                (0, h.useSyncMessages)(p.c);
                let a = (0, o.S)(t);
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(n.E, {
                            variant: "text-lg/bold",
                            children: [
                                "Any registered string key can be used to reference client-side international strings",
                                " ",
                            ],
                        }),
                        (0, r.jsx)(n.E, {
                            variant: "text-md/normal",
                            children: "Strings are registered in `useCmsString.tsx`",
                        }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)(n.E, { variant: "text-md/semibold", children: ["Received: ", t] }),
                        (0, r.jsxs)(n.E, { variant: "text-md/semibold", children: ["Resolved: ", a] }),
                    ],
                });
            },
            controls: { text: { label: "Text", type: "text", defaultValue: "COLLECTIBLES_SHOP_THE_COLLECTION" } },
        },
    ],
};
