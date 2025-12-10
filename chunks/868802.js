n.d(e, { M: () => x });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(952265),
    r = n(159691),
    a = n(511857),
    o = n(594421),
    c = n(410030),
    d = n(100527),
    S = n(906732),
    T = n(740594),
    E = n(612659),
    g = n(5900),
    I = n(37279),
    _ = n(969521),
    O = n(773275),
    N = n(584197),
    A = n(703656),
    C = n(589072),
    f = n(626135),
    p = n(518596),
    L = n(116282),
    P = n(614074),
    b = n(233751),
    y = n(868087),
    R = n(981631),
    D = n(474936),
    m = n(388032),
    Z = n(237396),
    v = n(498374),
    V = n(93109),
    h = n(446818),
    M = n(932889);
let x = () => {
        let t = (0, a.a)((0, c.ZP)()),
            { analyticsLocations: e } = (0, S.ZP)(d.Z.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                f.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: D.cd.PRIVACY_PERK_SETTINGS,
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
                                                (0, i.jsx)(C.Z, { color: t ? "black" : "white" }),
                                                (0, i.jsx)("div", { className: v.headerDivider }),
                                                (0, i.jsx)("img", {
                                                    src: t ? h : V,
                                                    alt: "Cloudflare",
                                                    width: 103,
                                                    height: 15,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(I.v, {}),
                                    ],
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: v.contentContainer,
                                children: [
                                    (0, i.jsx)("img", {
                                        src: M,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: v.content,
                                        children: [(0, i.jsx)(P.C, {}), (0, i.jsx)(L.R, {})],
                                    }),
                                    (0, i.jsx)("div", { className: v.contentSpacer }),
                                    (0, i.jsx)("div", {
                                        className: v.ctaContainer,
                                        children: (0, i.jsx)(U, {}),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(y.p, {}),
                ],
            })
        );
    },
    U = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: n } = (0, O.xf)(),
            l = (0, E.m)();
        if (e) return (0, i.jsx)(_.U, {});
        if (!l)
            return (0, i.jsxs)("div", {
                className: v.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(T.Z, {
                        buttonTextOverride: m.intl.string(m.t["8x0jKT"]),
                        subscriptionTier: D.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: { page: d.Z.CF_WARP_SETTINGS },
                    }),
                    (0, i.jsx)(r.zxk, {
                        variant: "secondary",
                        text: m.intl.string(m.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, u.closeModal)(p.USER_SETTINGS_MODAL_KEY), (0, A.uL)(R.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (t) {
            case g._n.ERROR:
            case g._n.NOT_INSTALLED:
                return (0, i.jsx)(b.R, {});
            case g._n.INSTALLED:
                return (0, i.jsx)(N.n, {});
            case g._n.ZERO_TRUST:
                break;
            case g._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(r.zxk, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.j)(R.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }), n(g._n.READY_FOR_LICENSE);
                    },
                    text: m.intl.string(Z.default.J09UWz),
                });
            case g._n.INSTALLING:
            case g._n.READY_FOR_LICENSE:
            case g._n.WAITING_FOR_TERMS:
            case g._n.INSTALLING_TIMEOUT:
                return (0, i.jsx)("div", {
                    className: v.spinner,
                    children: (0, i.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
