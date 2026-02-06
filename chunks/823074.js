"use strict";
n.d(t, { t: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(206845),
    s = n(604238),
    o = n(261225),
    l = n(135340),
    u = n(985018);
let c = {
    name: "SkuList",
    id: "skulist",
    component: (e) => {
        let { skuIds: t } = e,
            n = (0, s.e)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/bold",
                    children: "The SkuList component takes a list of skus and maps them into a block",
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children:
                        "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    children:
                        "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                }),
                (0, r.jsx)("br", {}),
                (0, r.jsx)(o.A, {
                    columns: 3,
                    children: (0, r.jsx)(l.A, { skuIds: t.split(","), skuBlock: "ShopProductCard", componentMap: n }),
                }),
                (0, r.jsx)("hr", {}),
                (0, r.jsx)(i.Text, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, r.jsx)(a.A, {
                            text: u.intl.string(u.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, r.jsx)(i.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, r.jsx)(a.A, {
                            text: u.intl.string(u.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, r.jsx)(i.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, r.jsx)(a.A, {
                            text: u.intl.string(u.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, r.jsx)(i.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458472704524156959",
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    },
    controls: {
        skuIds: {
            label: "SKU Ids",
            type: "text",
            defaultValue: "1458472704192811088,1458479739110166560,1458472704524156959",
        },
    },
};
