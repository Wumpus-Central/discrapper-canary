"use strict";
l.d(t, { t: () => c });
var r = l(627968),
    a = l(64700),
    n = l(179262),
    s = l(41770),
    i = l(148702),
    o = l(785330),
    d = l(652215);
let c = {
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
                            (0, o.F2)(JSON.parse(e)) && n(e);
                        } catch {}
                    }, [e]),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(i.A, { value: e, onChange: (e) => t(e) }),
                            (0, r.jsx)("hr", {}),
                            (0, r.jsx)(o.Ay, { layout: JSON.parse(l) }),
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
                    { collection: l, isFetching: s } = (0, n.A)({ collectionId: t, includePricing: !0 }),
                    i = a.useMemo(() => {
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
                return s ? (0, r.jsx)("div", { children: "Loading..." }) : (0, r.jsx)(o.Ay, { layout: i });
            },
            controls: { collectionId: { label: "Collection Id", type: "text", defaultValue: "1458472704809111646" } },
        },
        {
            name: "Remote Layouts",
            id: "remote-layouts",
            component: (e) => {
                let { layoutId: t, tenantId: l } = e;
                return (0, r.jsx)(o.Qs, { layoutId: t, tenantId: l });
            },
            controls: {
                layoutId: { label: "Layout Id", type: "text", defaultValue: "1465939725649973269" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: d.FYj },
            },
        },
        {
            name: "Remote Templates",
            id: "remote-templates",
            component: (e) => {
                let { templateId: t, tenantId: l } = e;
                return (0, r.jsx)(o.Z_, { templateId: t, tenantId: l });
            },
            controls: {
                templateId: { label: "Template Id", type: "text", defaultValue: "popular-picks" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: d.FYj },
            },
        },
    ],
};
