n.d(e, { M: () => M });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(952265),
    r = n(159691),
    a = n(511857),
    o = n(594421),
    S = n(410030),
    T = n(100527),
    c = n(906732),
    E = n(740594),
    d = n(612659),
    g = n(5900),
    _ = n(37279),
    I = n(969521),
    N = n(773275),
    A = n(584197),
    O = n(703656),
    C = n(589072),
    f = n(626135),
    R = n(518596),
    P = n(116282),
    L = n(614074),
    p = n(233751),
    m = n(868087),
    b = n(981631),
    D = n(474936),
    y = n(388032),
    v = n(472057),
    V = n(74186),
    Z = n(93109),
    G = n(446818),
    h = n(932889);
let M = () => {
        let t = (0, a.a)((0, S.ZP)()),
            { analyticsLocations: e } = (0, c.ZP)(T.Z.CF_WARP_SETTINGS);
        return (
            (0, l.useEffect)(() => {
                f.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: D.cd.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, i.jsxs)("div", {
                className: V.settingsContainer,
                children: [
                    (0, i.jsxs)(s.$1m, {
                        color: "pink",
                        children: [
                            (0, i.jsx)("div", {
                                className: V.headerContainer,
                                children: (0, i.jsxs)("div", {
                                    className: V.header,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: V.headerLogos,
                                            children: [
                                                (0, i.jsx)(C.Z, { color: t ? "black" : "white" }),
                                                (0, i.jsx)("div", { className: V.headerDivider }),
                                                (0, i.jsx)("img", {
                                                    src: t ? G : Z,
                                                    alt: "Cloudflare",
                                                    width: 103,
                                                    height: 15,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(_.v, {}),
                                    ],
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: V.contentContainer,
                                children: [
                                    (0, i.jsx)("img", {
                                        src: h,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: V.content,
                                        children: [(0, i.jsx)(L.C, {}), (0, i.jsx)(P.R, {})],
                                    }),
                                    (0, i.jsx)("div", { className: V.contentSpacer }),
                                    (0, i.jsx)("div", {
                                        className: V.ctaContainer,
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
                className: V.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(E.Z, {
                        buttonTextOverride: y.intl.string(y.t["8x0jKT"]),
                        subscriptionTier: D.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                        premiumModalAnalyticsLocation: { page: T.Z.CF_WARP_SETTINGS },
                    }),
                    (0, i.jsx)(r.zxk, {
                        variant: "secondary",
                        text: y.intl.string(y.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, u.closeModal)(R.USER_SETTINGS_MODAL_KEY), (0, O.uL)(b.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (t) {
            case g._n.ERROR:
            case g._n.NOT_INSTALLED:
                return (0, i.jsx)(p.R, {});
            case g._n.INSTALLED:
                return (0, i.jsx)(A.n, {});
            case g._n.ZERO_TRUST:
                break;
            case g._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(r.zxk, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.j)(b.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }), n(g._n.READY_FOR_LICENSE);
                    },
                    text: y.intl.string(v.default.J09UWz),
                });
            case g._n.INSTALLING:
            case g._n.READY_FOR_LICENSE:
            case g._n.WAITING_FOR_TERMS:
            case g._n.INSTALLING_TIMEOUT:
                return (0, i.jsx)("div", {
                    className: V.spinner,
                    children: (0, i.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
