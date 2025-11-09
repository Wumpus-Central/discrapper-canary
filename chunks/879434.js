n.d(t, { Z: () => f }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(793030),
    o = n(442837),
    c = n(678717),
    d = n(715495),
    u = n(928518),
    m = n(538645),
    p = n(383036),
    h = n(981631),
    x = n(6051);
let g = (e) => {
        let { setTab: t } = e,
            n = (0, o.e7)([u.Z], () => u.Z.getWindowOpen(h.KJ3.DEVTOOLS_POPOUT));
        return (0, a.jsxs)("div", {
            className: x.content,
            children: [
                (0, a.jsx)(s.P3F, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(x.banner, x.pfxBanner),
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
                        className: l()(x.banner, x.nameplateBanner),
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
                        className: l()(x.banner, x.bundlesBanner),
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
    f = () => {
        let [e, t] = r.useState(0);
        return (0, a.jsxs)(s.zJl, {
            className: x.wrapper,
            children: [
                (0, a.jsxs)("div", {
                    className: x.nav,
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
                            return (0, a.jsx)(g, { setTab: t });
                    }
                })(),
            ],
        });
    };
