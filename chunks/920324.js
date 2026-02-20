"use strict";
a.d(t, { t: () => c });
var l = a(627968),
    r = a(64700),
    n = a(179262),
    s = a(41770),
    i = a(148702),
    o = a(785330),
    d = a(652215);
let c = {
    title: "Layout Builder",
    stories: [
        {
            name: "Layout Builder",
            id: "layout-builder",
            component: () => {
                let [e, t] = r.useState(JSON.stringify(s.uG, null, 2)),
                    [a, n] = r.useState(e);
                return (
                    r.useEffect(() => {
                        try {
                            (0, o.F2)(JSON.parse(e)) && n(e);
                        } catch {}
                    }, [e]),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(i.A, { value: e, onChange: (e) => t(e) }),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)(o.Ay, { layout: JSON.parse(a) }),
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
                    { collection: a, isFetching: s } = (0, n.A)(t),
                    i = r.useMemo(() => {
                        let e = a?.styles?.backgroundColors?.[0];
                        return {
                            id: "shop-index-page",
                            children: [
                                {
                                    block: "Section",
                                    children: [
                                        {
                                            block: "ContainedHero",
                                            bannerSrc: a?.catalogBannerUrl ?? "",
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
                                                a?.products.map((e) => ({
                                                    block: "ShopProductCard",
                                                    skuId: e.skuIds[0],
                                                })) ?? [],
                                        },
                                    ],
                                },
                            ],
                        };
                    }, [a?.styles?.backgroundColors, a?.catalogBannerUrl, a?.products]);
                return s ? (0, l.jsx)("div", { children: "Loading..." }) : (0, l.jsx)(o.Ay, { layout: i });
            },
            controls: { collectionId: { label: "Collection Id", type: "text", defaultValue: "1458472704809111646" } },
        },
        {
            name: "Remote Layouts",
            id: "remote-layouts",
            component: (e) => {
                let { layoutId: t, tenantId: a } = e;
                return (0, l.jsx)(o.Qs, { layoutId: t, tenantId: a });
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
                let { templateId: t, tenantId: a } = e;
                return (0, l.jsx)(o.Z_, { templateId: t, tenantId: a });
            },
            controls: {
                templateId: { label: "Template Id", type: "text", defaultValue: "popular-picks" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: d.FYj },
            },
        },
    ],
};
