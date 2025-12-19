n.d(e, { M: () => M });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(952265),
    r = n(159691),
    a = n(511857),
    o = n(594421),
    T = n(410030),
    S = n(100527),
    c = n(906732),
    E = n(740594),
    d = n(612659),
    _ = n(5900),
    g = n(37279),
    I = n(969521),
    N = n(773275),
    A = n(584197),
    O = n(703656),
    C = n(589072),
    f = n(626135),
    P = n(518596),
    R = n(116282),
    L = n(614074),
    p = n(233751),
    m = n(868087),
    D = n(981631),
    b = n(474936),
    v = n(388032),
    y = n(472057),
    G = n(74186),
    V = n(93109),
    Z = n(446818),
    h = n(932889);
let M = () => {
        let t = (0, a.a)((0, T.ZP)()),
            { analyticsLocations: e } = (0, c.ZP)(S.Z.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                f.default.track(D.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: b.cd.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, i.jsxs)("div", {
                className: G.settingsContainer,
                children: [
                    (0, i.jsxs)(s.$1m, {
                        color: "pink",
                        children: [
                            (0, i.jsx)("div", {
                                className: G.headerContainer,
                                children: (0, i.jsxs)("div", {
                                    className: G.header,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: G.headerLogos,
                                            children: [
                                                (0, i.jsx)(C.Z, { color: t ? "black" : "white" }),
                                                (0, i.jsx)("div", { className: G.headerDivider }),
                                                (0, i.jsx)("img", {
                                                    src: t ? Z : V,
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
                                className: G.contentContainer,
                                children: [
                                    (0, i.jsx)("img", {
                                        src: h,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: G.content,
                                        children: [(0, i.jsx)(L.C, {}), (0, i.jsx)(R.R, {})],
                                    }),
                                    (0, i.jsx)("div", { className: G.contentSpacer }),
                                    (0, i.jsx)("div", {
                                        className: G.ctaContainer,
                                        children: (0, i.jsx)(U, {}),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(m.p, {}),
                ],
            })
        );
    },
    U = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: n } = (0, N.xf)(),
            l = (0, d.m)();
        if (e) return (0, i.jsx)(I.U, {});
        if (!l)
            return (0, i.jsxs)("div", {
                className: G.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(E.Z, {
                        buttonTextOverride: v.intl.string(v.t["8x0jKT"]),
                        subscriptionTier: b.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: { page: S.Z.CF_WARP_SETTINGS },
                    }),
                    (0, i.jsx)(r.zxk, {
                        variant: "secondary",
                        text: v.intl.string(v.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, u.closeModal)(P.USER_SETTINGS_MODAL_KEY), (0, O.uL)(D.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (t) {
            case _._n.ERROR:
            case _._n.NOT_INSTALLED:
                return (0, i.jsx)(p.R, {});
            case _._n.INSTALLED:
                return (0, i.jsx)(A.n, {});
            case _._n.ZERO_TRUST:
                break;
            case _._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(r.zxk, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.j)(D.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }), n(_._n.READY_FOR_LICENSE);
                    },
                    text: v.intl.string(y.default.J09UWz),
                });
            case _._n.INSTALLING:
            case _._n.READY_FOR_LICENSE:
            case _._n.WAITING_FOR_TERMS:
            case _._n.INSTALLING_TIMEOUT:
                return (0, i.jsx)("div", {
                    className: G.spinner,
                    children: (0, i.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
