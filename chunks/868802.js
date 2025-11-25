n.d(e, { M: () => v });
var i = n(54381);
n(473749);
var l = n(793030),
    r = n(952265),
    u = n(159691),
    s = n(511857),
    a = n(410030),
    o = n(740594),
    c = n(612659),
    E = n(5900),
    d = n(37279),
    S = n(969521),
    T = n(773275),
    I = n(584197),
    O = n(703656),
    g = n(589072),
    _ = n(518596),
    N = n(116282),
    f = n(614074),
    A = n(233751),
    C = n(868087),
    b = n(981631),
    L = n(474936),
    p = n(388032),
    Z = n(163646),
    P = n(498374),
    y = n(93109),
    D = n(446818),
    R = n(932889);
let v = () => {
        let t = (0, s.a)((0, a.ZP)());
        return (0, i.jsxs)("div", {
            className: P.settingsContainer,
            children: [
                (0, i.jsxs)(l.$1m, {
                    color: "pink",
                    children: [
                        (0, i.jsx)("div", {
                            className: P.headerContainer,
                            children: (0, i.jsxs)("div", {
                                className: P.header,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: P.headerLogos,
                                        children: [
                                            (0, i.jsx)(g.Z, { color: t ? "black" : "white" }),
                                            (0, i.jsx)("div", { className: P.headerDivider }),
                                            (0, i.jsx)("img", {
                                                src: t ? D : y,
                                                alt: "Cloudflare",
                                                width: 103,
                                                height: 15,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(d.v, {}),
                                ],
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: P.contentContainer,
                            children: [
                                (0, i.jsx)("img", {
                                    src: R,
                                    width: "100",
                                    alt: "Private browsing perk logo",
                                }),
                                (0, i.jsxs)("div", {
                                    className: P.content,
                                    children: [(0, i.jsx)(f.C, {}), (0, i.jsx)(N.R, {})],
                                }),
                                (0, i.jsx)("div", { className: P.contentSpacer }),
                                (0, i.jsx)("div", {
                                    className: P.ctaContainer,
                                    children: (0, i.jsx)(m, {}),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(C.p, {}),
            ],
        });
    },
    m = () => {
        let { installationStatus: t, isWeb: e, setInstallationStatus: n } = (0, T.xf)(),
            s = (0, c.m)();
        if (e) return (0, i.jsx)(S.U, {});
        if (!s)
            return (0, i.jsxs)("div", {
                className: P.subscribeBtnContainer,
                children: [
                    (0, i.jsx)(o.Z, {
                        buttonTextOverride: p.intl.string(p.t["8x0jKT"]),
                        subscriptionTier: L.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                    }),
                    (0, i.jsx)(u.zxk, {
                        variant: "secondary",
                        text: p.intl.string(p.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, r.Mr)(_.USER_SETTINGS_MODAL_KEY), (0, O.uL)(b.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (t) {
            case E._n.ERROR:
            case E._n.NOT_INSTALLED:
                return (0, i.jsx)(A.R, {});
            case E._n.INSTALLED:
                return (0, i.jsx)(I.n, {});
            case E._n.ZERO_TRUST:
                break;
            case E._n.EXISTING_INSTALLATION:
                return (0, i.jsx)(u.zxk, {
                    variant: "primary",
                    onClick: () => {
                        n(E._n.READY_FOR_LICENSE);
                    },
                    text: p.intl.string(Z.default.J09UWz),
                });
            case E._n.INSTALLING:
            case E._n.READY_FOR_LICENSE:
                return (0, i.jsx)("div", {
                    className: P.spinner,
                    children: (0, i.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
