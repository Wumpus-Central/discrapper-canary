n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(481060),
    c = n(715495),
    u = n(538645),
    d = n(383036),
    f = n(646420);
let _ = (e) => {
        let { setTab: t } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.P3F, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: o()(f.banner, f.pfxBanner),
                        children: (0, r.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(l.P3F, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: o()(f.banner, f.nameplateBanner),
                        children: (0, r.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(l.P3F, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: o()(f.banner, f.bundlesBanner),
                        children: (0, r.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Product Preview Tool",
                        }),
                    }),
                }),
            ],
        });
    },
    p = () => {
        let [e, t] = i.useState(0),
            n = () => {
                switch (e) {
                    case 1:
                        return (0, r.jsx)(u.Z, {});
                    case 2:
                        return (0, r.jsx)(c.Z, {});
                    case 3:
                        return (0, r.jsx)(d.Z, {});
                    default:
                        return (0, r.jsx)(_, { setTab: t });
                }
            };
        return (0, r.jsxs)("div", {
            className: f.wrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: f.nav,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-xxl/medium",
                            children: "ShopKeeper",
                        }),
                        0 !== e &&
                            (0, r.jsx)(l.zxk, {
                                variant: "primary",
                                onClick: () => t(0),
                                text: "Back",
                            }),
                    ],
                }),
                n(),
            ],
        });
    };
