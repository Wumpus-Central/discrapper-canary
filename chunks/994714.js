n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(481060),
    c = n(715495),
    u = n(538645),
    d = n(646420);
let f = (e) => {
        let { setTab: t } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.P3F, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: o()(d.banner, d.pfxBanner),
                        children: (0, r.jsx)(s.xv, {
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
                        className: o()(d.banner, d.nameplateBanner),
                        children: (0, r.jsx)(s.xv, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
            ],
        });
    },
    _ = () => {
        let [e, t] = i.useState(0),
            n = () => {
                switch (e) {
                    case 1:
                        return (0, r.jsx)(u.Z, {});
                    case 2:
                        return (0, r.jsx)(c.Z, {});
                    default:
                        return (0, r.jsx)(f, { setTab: t });
                }
            };
        return (0, r.jsxs)("div", {
            className: d.wrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: d.nav,
                    children: [
                        (0, r.jsx)(s.X6, {
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
