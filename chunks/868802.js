n.d(e, { M: () => j });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    r = n(952265),
    u = n(159691),
    a = n(511857),
    o = n(594421),
    c = n(410030),
    d = n(100527),
    E = n(906732),
    S = n(740594),
    I = n(612659),
    T = n(5900),
    g = n(37279),
    _ = n(969521),
    O = n(773275),
    N = n(584197),
    A = n(703656),
    f = n(589072),
    Z = n(626135),
    C = n(518596),
    L = n(116282),
    b = n(614074),
    p = n(233751),
    P = n(868087),
    y = n(981631),
    R = n(474936),
    D = n(388032),
    m = n(163646),
    v = n(498374),
    V = n(93109),
    h = n(446818),
    x = n(932889);
let j = () => {
        let t = (0, a.a)((0, c.ZP)()),
            { analyticsLocations: e } = (0, E.ZP)(d.Z.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                Z.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: R.cd.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, i.jsxs)("div", {
                className: v.settingsContainer,
                children: [
                    (0, i.jsxs)(s.$1m, {
                        color: "pink",
                        children: [
                            (0, i.jsx)("div", {
                                className: v.headerContainer,
                                children: (0, i.jsxs)("div", {
                                    className: v.header,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: v.headerLogos,
                                            children: [
                                                (0, i.jsx)(f.Z, { color: t ? "black" : "white" }),
                                                (0, i.jsx)("div", { className: v.headerDivider }),
                                                (0, i.jsx)("img", {
                                                    src: t ? h : V,
                                                    alt: "Cloudflare",
                                                    width: 103,
                                                    height: 15,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(g.v, {}),
                                    ],
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: v.contentContainer,
                                children: [
                                    (0, i.jsx)("img", {
                                        src: x,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: v.content,
                                        children: [(0, i.jsx)(b.C, {}), (0, i.jsx)(L.R, {})],
                                    }),
                                    (0, i.jsx)("div", { className: v.contentSpacer }),
                                    (0, i.jsx)("div", {
                                        className: v.ctaContainer,
                                        children: (0, i.jsx)(M, {}),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(P.p, {}),
                ],
            })
        );
    },
    M = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: n } = (0, O.xf)(),
            l = (0, I.m)();
        if (e) return (0, i.jsx)(_.U, {});
        if (!l)
            return (0, i.jsxs)("div", {
                className: v.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(S.Z, {
                        buttonTextOverride: D.intl.string(D.t["8x0jKT"]),
                        subscriptionTier: R.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                    }),
                    (0, i.jsx)(u.zxk, {
                        variant: "secondary",
                        text: D.intl.string(D.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, r.Mr)(C.USER_SETTINGS_MODAL_KEY), (0, A.uL)(y.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (t) {
            case T._n.ERROR:
            case T._n.NOT_INSTALLED:
                return (0, i.jsx)(p.R, {});
            case T._n.INSTALLED:
                return (0, i.jsx)(N.n, {});
            case T._n.ZERO_TRUST:
                break;
            case T._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(u.zxk, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.j)(y.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }), n(T._n.READY_FOR_LICENSE);
                    },
                    text: D.intl.string(m.default.J09UWz),
                });
            case T._n.INSTALLING:
            case T._n.READY_FOR_LICENSE:
                return (0, i.jsx)("div", {
                    className: v.spinner,
                    children: (0, i.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
