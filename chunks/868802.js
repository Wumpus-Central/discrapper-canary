n.d(e, { M: () => x });
var i = n(54381),
    r = n(473749),
    l = n(793030),
    s = n(952265),
    u = n(159691),
    a = n(511857),
    o = n(594421),
    c = n(410030),
    d = n(100527),
    E = n(906732),
    S = n(740594),
    T = n(612659),
    I = n(5900),
    g = n(37279),
    O = n(969521),
    _ = n(773275),
    N = n(584197),
    f = n(703656),
    A = n(589072),
    b = n(626135),
    C = n(518596),
    p = n(116282),
    L = n(614074),
    Z = n(233751),
    P = n(868087),
    y = n(981631),
    D = n(474936),
    R = n(388032),
    v = n(163646),
    m = n(498374),
    V = n(93109),
    h = n(446818),
    j = n(932889);
let x = () => {
        let t = (0, a.a)((0, c.ZP)()),
            { analyticsLocations: e } = (0, E.ZP)(d.Z.CF_WARP_SETTINGS);
        return (
            (0, r.useEffect)(() => {
                b.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: D.cd.PRIVACY_PERK_SETTINGS,
                    location_stack: e,
                });
            }, [e]),
            (0, i.jsxs)("div", {
                className: m.settingsContainer,
                children: [
                    (0, i.jsxs)(l.$1m, {
                        color: "pink",
                        children: [
                            (0, i.jsx)("div", {
                                className: m.headerContainer,
                                children: (0, i.jsxs)("div", {
                                    className: m.header,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: m.headerLogos,
                                            children: [
                                                (0, i.jsx)(A.Z, { color: t ? "black" : "white" }),
                                                (0, i.jsx)("div", { className: m.headerDivider }),
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
                                className: m.contentContainer,
                                children: [
                                    (0, i.jsx)("img", {
                                        src: j,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: m.content,
                                        children: [(0, i.jsx)(L.C, {}), (0, i.jsx)(p.R, {})],
                                    }),
                                    (0, i.jsx)("div", { className: m.contentSpacer }),
                                    (0, i.jsx)("div", {
                                        className: m.ctaContainer,
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
        let { installationStatus: t, isWeb: e, setInstallationStatus: n } = (0, _.xf)(),
            r = (0, T.m)();
        if (e) return (0, i.jsx)(O.U, {});
        if (!r)
            return (0, i.jsxs)("div", {
                className: m.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(S.Z, {
                        buttonTextOverride: R.intl.string(R.t["8x0jKT"]),
                        subscriptionTier: D.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                    }),
                    (0, i.jsx)(u.zxk, {
                        variant: "secondary",
                        text: R.intl.string(R.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, s.Mr)(C.USER_SETTINGS_MODAL_KEY), (0, f.uL)(y.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (t) {
            case I._n.ERROR:
            case I._n.NOT_INSTALLED:
                return (0, i.jsx)(Z.R, {});
            case I._n.INSTALLED:
                return (0, i.jsx)(N.n, {});
            case I._n.ZERO_TRUST:
                break;
            case I._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(u.zxk, {
                    variant: "primary",
                    onClick: () => {
                        (0, o.j)(y.rMx.NITRO_WARP_CTA_CLICKED, { is_enable_warp: !0 }), n(I._n.READY_FOR_LICENSE);
                    },
                    text: R.intl.string(v.default.J09UWz),
                });
            case I._n.INSTALLING:
            case I._n.READY_FOR_LICENSE:
                return (0, i.jsx)("div", {
                    className: m.spinner,
                    children: (0, i.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
