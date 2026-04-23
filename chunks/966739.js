a.d(t, { V: () => o });
var l = a(627968);
a(64700);
var r = a(834730),
    n = a(261225),
    s = a(673277),
    i = a(219561),
    d = a(753825);
let o = {
    name: "FeaturedProduct",
    id: "featured-product",
    component: (e) => {
        let { backgroundImage: t, ...a } = e,
            o = { backgroundImage: { src: t }, ...a };
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "PLACEHOLDER" }),
                (0, l.jsx)(s.A, { children: (0, l.jsx)(d.A, { ...o }) }),
                (0, l.jsxs)(s.A, {
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                        (0, l.jsxs)(n.A, {
                            columns: 3,
                            children: [
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)(s.A, {
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Stack:" }),
                        (0, l.jsxs)(i.Kp, {
                            direction: "horizontal",
                            children: [
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                                (0, l.jsx)(d.A, { ...o }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    controls: {
        backgroundImage: {
            label: "Background Image",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
        },
        ctaText: { label: "Background Image", type: "text", defaultValue: "Browse" },
        href: { label: "href", type: "text", defaultValue: "/shop/things" },
        skuId: { label: "Sku Id", type: "text", defaultValue: "1458472704192811088" },
    },
};
