n.d(t, { M: () => w });
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(952265),
    o = n(159691),
    s = n(511857),
    l = n(410030),
    c = n(740594),
    u = n(612659),
    d = n(5900),
    f = n(953865),
    _ = n(299886),
    p = n(37279),
    h = n(969521),
    m = n(584197),
    g = n(703656),
    E = n(589072),
    b = n(518596),
    y = n(116282),
    O = n(614074),
    v = n(233751),
    I = n(868087),
    T = n(981631),
    S = n(474936),
    A = n(388032),
    C = n(845259),
    N = n(498374),
    R = n(95213),
    P = n(882709),
    D = n(932889);
let w = () => {
        let e = (0, u.m)(),
            {
                isSupportedPrivateBrowsingPerkPlatform: t,
                isWeb: n,
                installationStatus: a,
                perkAvailableToUser: o,
            } = (0, f.xf)(),
            { enabled: c } = _.H.useConfig({ location: "private_browsing_perk_settings_page" }),
            h = (0, s.a)((0, l.ZP)()),
            m = !e || o;
        if ((!t && !n) || !c || !m) return null;
        let g = [d._n.EXISTING_INSTALLATION, d._n.ZERO_TRUST].includes(a) || !e;
        return (0, r.jsxs)("div", {
            className: N.settingsContainer,
            children: [
                (0, r.jsxs)(i.$1m, {
                    color: "pink",
                    children: [
                        (0, r.jsx)("div", {
                            className: N.headerContainer,
                            children: (0, r.jsxs)("div", {
                                className: N.header,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: N.headerLogos,
                                        children: [
                                            (0, r.jsx)(E.Z, { color: h ? "black" : "white" }),
                                            (0, r.jsx)("div", { className: N.headerDivider }),
                                            (0, r.jsx)("img", {
                                                src: h ? P : R,
                                                alt: "Cloudflare",
                                                width: 103,
                                                height: 15,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(p.v, {}),
                                ],
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: N.contentContainer,
                            children: [
                                g &&
                                    (0, r.jsx)("img", {
                                        src: D,
                                        width: "100",
                                        alt: "Private browsing perk logo",
                                    }),
                                (0, r.jsxs)("div", {
                                    className: N.content,
                                    children: [(0, r.jsx)(O.C, {}), (0, r.jsx)(y.R, {})],
                                }),
                                (0, r.jsx)("div", { className: N.contentSpacer }),
                                (0, r.jsx)("div", {
                                    className: N.ctaContainer,
                                    children: (0, r.jsx)(L, {}),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(I.p, {}),
            ],
        });
    },
    L = () => {
        let { installationStatus: e, isWeb: t, setInstallationStatus: n } = (0, f.xf)(),
            s = (0, u.m)();
        if (t) return (0, r.jsx)(h.U, {});
        if (!s)
            return (0, r.jsxs)("div", {
                className: N.subscribeBtnContainer,
                children: [
                    (0, r.jsx)(c.Z, {
                        buttonTextOverride: A.intl.string(A.t["8x0jKT"]),
                        subscriptionTier: S.Si.TIER_2,
                        fullWidth: !0,
                        size: "sm",
                    }),
                    (0, r.jsx)(o.zxk, {
                        variant: "secondary",
                        text: A.intl.string(A.t.ZnqyZ2),
                        size: "sm",
                        onClick: () => {
                            (0, a.Mr)(b.USER_SETTINGS_MODAL_KEY), (0, g.uL)(T.Z5c.APPLICATION_STORE);
                        },
                    }),
                ],
            });
        switch (e) {
            case d._n.ERROR:
            case d._n.NOT_INSTALLED:
                return (0, r.jsx)(v.R, {});
            case d._n.INSTALLED:
                return (0, r.jsx)(m.n, {});
            case d._n.ZERO_TRUST:
                break;
            case d._n.EXISTING_INSTALLATION:
                return (0, r.jsx)(o.zxk, {
                    variant: "primary",
                    onClick: () => {
                        n(d._n.READY_FOR_LICENSE);
                    },
                    text: A.intl.string(C.default.J09UWz),
                });
            case d._n.INSTALLING:
            case d._n.READY_FOR_LICENSE:
                return (0, r.jsx)("div", {
                    className: N.spinner,
                    children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE }),
                });
        }
        return null;
    };
