n.d(e, { M: () => U });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(952265),
    r = n(159691),
    a = n(511857),
    o = n(594421),
    c = n(410030),
    S = n(100527),
    d = n(906732),
    T = n(740594),
    g = n(612659),
    E = n(5900),
    I = n(37279),
    _ = n(969521),
    O = n(773275),
    N = n(584197),
    A = n(703656),
    C = n(589072),
    f = n(626135),
    p = n(518596),
    P = n(116282),
    L = n(614074),
    b = n(233751),
    m = n(868087),
    R = n(981631),
    y = n(474936),
    D = n(388032),
    v = n(472057),
    Z = n(74186),
    V = n(93109),
    h = n(446818),
    M = n(932889);
let U = () => {
        let t = (0, a.a)((0, c.ZP)()),
            { analyticsLocations: e } = (0, d.ZP)(S.Z.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                f.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: y.cd.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, i.jsxs)("div", {
                className: Z.settingsContainer,
                children: [
                    (0, i.jsxs)(s.$1m, {
                        color: "pink",
                        children: [
                            (0, i.jsx)("div", {
                                className: Z.headerContainer,
                                children: (0, i.jsxs)("div", {
                                    className: Z.header,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: Z.headerLogos,
                                            children: [
                                                (0, i.jsx)(C.Z, { color: t ? "black" : "white" }),
                                                (0, i.jsx)("div", { className: Z.headerDivider }),
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
                                className: Z.contentContainer,
                                children: [
                                    (0, i.jsx)("img", {
                                        src: M,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: Z.content,
                                        children: [(0, i.jsx)(L.C, {}), (0, i.jsx)(P.R, {})],
                                    }),
                                    (0, i.jsx)("div", { className: Z.contentSpacer }),
                                    (0, i.jsx)("div", {
                                        className: Z.ctaContainer,
                                        children: (0, i.jsx)(G, {}),
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
    G = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: n } = (0, O.xf)(),
            l = (0, g.m)();
        if (e) return (0, i.jsx)(_.U, {});
        if (!l)
            return (0, i.jsxs)("div", {
                className: Z.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(T.Z, {
                        buttonTextOverride: D.intl.string(D.t["8x0jKT"]),
                        subscriptionTier: y.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: { page: S.Z.CF_WARP_SETTINGS },
                    }),
                    (0, i.jsx)(r.zxk, {
                        variant: "secondary",
                        text: D.intl.string(D.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, u.closeModal)(p.USER_SETTINGS_MODAL_KEY), (0, A.uL)(R.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (t) {
            case E._n.ERROR:
            case E._n.NOT_INSTALLED:
                return (0, i.jsx)(b.R, {});
            case E._n.INSTALLED:
                return (0, i.jsx)(N.n, {});
            case E._n.ZERO_TRUST:
                break;
            case E._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(r.zxk, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.j)(R.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }), n(E._n.READY_FOR_LICENSE);
                    },
                    text: D.intl.string(v.default.J09UWz),
                });
            case E._n.INSTALLING:
            case E._n.READY_FOR_LICENSE:
            case E._n.WAITING_FOR_TERMS:
            case E._n.INSTALLING_TIMEOUT:
                return (0, i.jsx)("div", {
                    className: Z.spinner,
                    children: (0, i.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
