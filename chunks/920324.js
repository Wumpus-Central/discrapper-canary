"use strict";
n.d(t, { t: () => u });
var r = n(627968),
    i = n(64700),
    a = n(295918),
    s = n(41770),
    o = n(148702),
    l = n(785330);
let u = {
    title: "Layout Builder",
    stories: [
        {
            name: "Layout Builder",
            id: "layout-builder",
            component: () => {
                let [e, t] = i.useState(JSON.stringify(s.u, null, 2)),
                    [n, a] = i.useState(e);
                return (
                    i.useEffect(() => {
                        try {
                            (0, l.F2)(JSON.parse(e)) && a(e);
                        } catch {}
                    }, [e]),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.A, { value: e, onChange: (e) => t(e) }),
                            (0, r.jsx)("hr", {}),
                            (0, r.jsx)(l.Ay, { layout: JSON.parse(n) }),
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
                    { isFetching: n, category: s } = (0, a.U)(t),
                    o = i.useMemo(() => {
                        let e = s?.styles?.backgroundColors?.[0];
                        return {
                            id: "shop-index-page",
                            children: [
                                {
                                    block: "Section",
                                    children: [
                                        {
                                            block: "ContainedHero",
                                            bannerSrc: s?.catalogBannerUrl ?? "",
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
                                                s?.products.map((e) => ({
                                                    block: "ShopProductCard",
                                                    skuId: e.skuId,
                                                })) ?? [],
                                        },
                                    ],
                                },
                            ],
                        };
                    }, [s]);
                return n ? (0, r.jsx)("div", { children: "Loading..." }) : (0, r.jsx)(l.Ay, { layout: o });
            },
            controls: { collectionId: { label: "Collection Id", type: "text", defaultValue: "1458472704079434020" } },
        },
        {
            name: "Remote Layouts",
            id: "remote-layouts",
            component: (e) => {
                let { layoutId: t, tenantId: n } = e;
                return (0, r.jsx)(l.Qs, { layoutId: t, tenantId: n });
            },
            controls: {
                layoutId: { label: "Layout Id", type: "text", defaultValue: "1465939725649973269" },
                tenantId: { label: "Tenant Id", type: "text", defaultValue: n(652215).FYj },
            },
        },
    ],
};
