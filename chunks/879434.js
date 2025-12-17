n.d(t, { Z: () => b }), n(388685);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(678717),
    d = n(715495),
    u = n(928518),
    m = n(538645),
    p = n(383036),
    h = n(981631),
    f = n(55915);
let x = (e) => {
        let { setTab: t } = e,
            n = (0, o.e7)([u.Z], () => u.Z.getWindowOpen(h.KJ3.DEVTOOLS_POPOUT));
        return (0, a.jsxs)("div", {
            className: f.content,
            children: [
                (0, a.jsx)(s.P3F, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, a.jsx)("div", {
                        className: i()(f.banner, f.pfxBanner),
                        children: (0, a.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, a.jsx)(s.P3F, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, a.jsx)("div", {
                        className: i()(f.banner, f.nameplateBanner),
                        children: (0, a.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, a.jsx)(s.P3F, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, a.jsx)("div", {
                        className: i()(f.banner, f.bundlesBanner),
                        children: (0, a.jsx)(s.xvT, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !n &&
                    (0, a.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, a.jsx)(s.M14, {
                            type: "warning",
                            children: (0, a.jsxs)(s.Kqy, {
                                gap: 8,
                                children: [
                                    (0, a.jsx)(s.xvT, {
                                        variant: "text-md/semibold",
                                        children: "Not enough space?",
                                    }),
                                    (0, a.jsx)(s.xvT, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, a.jsx)(s.zxk, {
                                        size: "sm",
                                        icon: s.rgF,
                                        variant: "secondary",
                                        onClick: c.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    b = () => {
        let [e, t] = r.useState(0);
        return (0, a.jsxs)(s.zJl, {
            className: f.wrapper,
            children: [
                (0, a.jsxs)("div", {
                    className: f.nav,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: "heading-xxl/medium",
                            children: "Collectibles DevTools",
                        }),
                        0 !== e &&
                            (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                onClick: () => t(0),
                                text: "Back",
                            }),
                    ],
                }),
                (() => {
                    switch (e) {
                        case 1:
                            return (0, a.jsx)(m.Z, {});
                        case 2:
                            return (0, a.jsx)(d.Z, {});
                        case 3:
                            return (0, a.jsx)(p.Z, {});
                        default:
                            return (0, a.jsx)(x, { setTab: t });
                    }
                })(),
            ],
        });
    };
