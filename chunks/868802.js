n.d(e, { M: () => Y });
var i = n(54381),
    l = n(473749),
    s = n(547943),
    u = n(793030),
    r = n(952265),
    a = n(159691),
    o = n(511857),
    T = n(594421),
    S = n(410030),
    c = n(100527),
    E = n(906732),
    d = n(740594),
    _ = n(612659),
    g = n(5900),
    I = n(37279),
    A = n(969521),
    N = n(773275),
    O = n(584197),
    C = n(588529),
    f = n(703656),
    L = n(589072),
    P = n(626135),
    R = n(518596),
    p = n(116282),
    m = n(614074),
    b = n(233751),
    D = n(868087),
    v = n(981631),
    y = n(474936),
    V = n(388032),
    G = n(472057),
    Z = n(74186),
    h = n(93109),
    M = n(446818),
    U = n(932889);
let Y = () => {
        let t = (0, o.a)((0, S.ZP)()),
            { analyticsLocations: e } = (0, E.ZP)(c.Z.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                P.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: y.cd.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, i.jsxs)("div", {
                className: Z.settingsContainer,
                children: [
                    (0, i.jsxs)(u.$1m, {
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
                                                (0, i.jsx)(L.Z, { color: t ? "black" : "white" }),
                                                (0, i.jsx)("div", { className: Z.headerDivider }),
                                                (0, i.jsx)("img", {
                                                    src: t ? M : h,
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
                                        src: U,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: Z.content,
                                        children: [(0, i.jsx)(m.C, {}), (0, i.jsx)(p.R, {})],
                                    }),
                                    (0, i.jsx)("div", { className: Z.contentSpacer }),
                                    (0, i.jsx)("div", {
                                        className: Z.ctaContainer,
                                        children: (0, i.jsx)(k, {}),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(D.p, {}),
                ],
            })
        );
    },
    k = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: n } = (0, N.xf)(),
            o = (0, _.m)(),
            S = (0, l.useRef)(!1);
        if (
            ((0, l.useEffect)(
                () => () => {
                    S.current ||
                        C.ZP.fireSurveyAction(
                            o ? s.Y.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.Y.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO,
                        );
                },
                [S, o],
            ),
            e)
        )
            return (0, i.jsx)(A.U, {
                onClick: () => {
                    S.current = !0;
                },
            });
        if (!o)
            return (0, i.jsxs)("div", {
                className: Z.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(d.Z, {
                        buttonTextOverride: V.intl.string(V.t["8x0jKT"]),
                        subscriptionTier: y.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: { page: c.Z.CF_WARP_SETTINGS },
                        onClick: () => {
                            S.current = !0;
                        },
                    }),
                    (0, i.jsx)(a.zxk, {
                        variant: "secondary",
                        text: V.intl.string(V.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, r.closeModal)(R.USER_SETTINGS_MODAL_KEY),
                                (0, f.uL)(v.Z5c.APPLICATION_STORE),
                                (S.current = !0);
                        },
                    }),
                ],
            });
        switch (t) {
            case g._n.ERROR:
            case g._n.NOT_INSTALLED:
                return (0, i.jsx)(b.R, { onClick: () => (S.current = !0) });
            case g._n.INSTALLED:
                return (0, i.jsx)(O.n, {});
            case g._n.ZERO_TRUST:
                break;
            case g._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(a.zxk, {
                    variant: "primary",
                    onClick: () => {
                        (0, T.j)(v.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }),
                            n(g._n.READY_FOR_LICENSE),
                            (S.current = !0);
                    },
                    text: V.intl.string(G.default.J09UWz),
                });
            case g._n.INSTALLING:
            case g._n.READY_FOR_LICENSE:
            case g._n.WAITING_FOR_TERMS:
            case g._n.INSTALLING_TIMEOUT:
                return (0, i.jsx)("div", {
                    className: Z.spinner,
                    children: (0, i.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
