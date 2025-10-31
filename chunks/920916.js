t.d(n, { default: () => W }), t(457542), t(388685);
var a = t(951288),
    o = t(647438),
    r = t(120356),
    i = t.n(r),
    l = t(238651),
    s = t(979554),
    d = t(442837),
    c = t(481060),
    u = t(809206),
    m = t(607070),
    _ = t(235400),
    p = t(204418),
    f = t(975298),
    g = t(583434),
    x = t(530618),
    h = t(454585),
    C = t(732389),
    v = t(164946),
    j = t(369111),
    w = t(313789),
    N = t(518596),
    b = t(25990),
    I = t(594174),
    T = t(960048),
    R = t(22095),
    P = t(509212),
    S = t(113434),
    y = t(497505),
    B = t(475595),
    A = t(566078),
    E = t(968435),
    L = t(114732),
    M = t(46140),
    k = t(981631),
    O = t(675654),
    Z = t(474936),
    D = t(388032),
    F = t(824210);
function z() {
    let e = b.Z.getAllPending(),
        n = (0, v.ED)(e);
    return (0, u.Mn)(n).finally(u.si);
}
function U(e) {
    var n;
    let {
            transitionState: t,
            onClose: r,
            quest: s,
            location: u,
            reward: _,
            decoration: p,
            onUseNow: f,
            preview: g,
        } = e,
        h = o.useRef(null),
        [C, v] = o.useState(null),
        j = o.useRef(new l.qA()),
        w = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        N = (0, d.e7)([I.default], () => I.default.getCurrentUser()),
        b = (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        [T, P] = o.useState(!0 === g || b ? "claimed" : "loading");
    o.useEffect(() => {
        b ||
            !0 === g ||
            (0, R.QB)(s.id, y.y$.CROSS_PLATFORM, u)
                .then(() => P("claimed"))
                .catch(() => P("error"));
    }, [s, u, b, g]);
    let S = !0 === g && null === p && (null == _ ? void 0 : _.skuId) !== "",
        B = null == N || (null == p && !0 !== g) || S || "loading" === T;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.O_, {
                ref: v,
                className: F.confettiCanvas,
                environment: j.current,
            }),
            (0, a.jsx)("div", {
                ref: h,
                children: (0, a.jsx)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: t,
                    size: c.CgR.DYNAMIC,
                    className: i()(F.rootContainer, { [F.rootContainerLoading]: B }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardCollectibleModal",
                    children:
                        "error" === T
                            ? (0, a.jsx)(L.Z, { onClose: r })
                            : B
                              ? (0, a.jsx)("div", {
                                    className: F.loadingIndicatorWrapper,
                                    children: (0, a.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
                                })
                              : (0, a.jsx)(H, {
                                    quest: s,
                                    user: N,
                                    decoration: p,
                                    isSaving: "applying" === T,
                                    onClose: r,
                                    onConfirm: () => {
                                        P("applying"), f().finally(r);
                                    },
                                }),
                }),
            }),
            !w &&
                !b &&
                "claimed" === T &&
                (0, a.jsx)(x.Z, {
                    confettiTarget: h.current,
                    confettiCanvas: C,
                    sprites: O.CA,
                    colors: O.Br,
                }),
        ],
    });
}
function q(e) {
    let { quest: n } = e,
        t = o.useMemo(() => (0, B.fh)(n, B.eC.LOGO_TYPE, "dark"), [n]),
        r = A.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[y.y$.CROSS_PLATFORM];
    return (0, a.jsxs)("div", {
        className: F.additionalRedemptionInstructions,
        children: [
            (0, a.jsx)("img", {
                src: t.url,
                alt: "",
                className: F.sponsorLogo,
            }),
            (0, a.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: h.Z.parse(r, !1, { allowLinks: !0 }),
            }),
        ],
    });
}
function H(e) {
    let { quest: n, user: t, decoration: o, isSaving: r, onClose: i, onConfirm: l } = e,
        s = (0, B.fh)(n, B.eC.REWARD).url,
        d = (0, P.f$)(n.config),
        { fractionalState: u } = (0, f.Z)(),
        m = u === Z.a$.FP_ONLY,
        _ = (0, S.Qy)(n.config);
    return (0, a.jsxs)("div", {
        className: F.claimedRootContainer,
        children: [
            (0, a.jsxs)("div", {
                className: F.headerContainer,
                children: [
                    (0, a.jsx)(E.Z, {
                        quest: n,
                        dimensions: {
                            width: 528,
                            height: 148,
                        },
                        className: F.headerBackground,
                    }),
                    (0, a.jsx)("div", {
                        className: F.headerForeground,
                        children: (0, a.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: F.close,
                            withCircleBackground: !0,
                            onClick: i,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(c.mzw, {
                "data-migration-pending": !0,
                separator: !1,
                children: (0, a.jsxs)("div", {
                    className: F.footerBody,
                    children: [
                        (0, a.jsx)("div", {
                            className: F.previewContainer,
                            children: (0, a.jsx)(p.Z, {
                                user: t,
                                guildId: null,
                                avatarDecorationOverride: o,
                                avatarSize: c.EFr.SIZE_152,
                                questPreviewRewardAssetUrl: s,
                            }),
                        }),
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-lg/bold",
                            color: "header-primary",
                            className: F.heading,
                            children: D.intl.string(D.t["0/Yz+Y"]),
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: F.text,
                            children: _,
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: D.intl.string(D.t.MAS7uK),
                            loading: r,
                            onClick: l,
                        }),
                        (0, P.zK)(n, M.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(q, { quest: n }),
                        d &&
                            !m &&
                            (0, a.jsx)(C.p, {
                                className: F.upsell,
                                upsellText: D.intl.format(D.t.VHXn7C, {
                                    onNitroClick: () => {
                                        (0, N.openUserSettings)(w.n.NITRO_PANEL, { section: k.oAB.PREMIUM }), i();
                                    },
                                }),
                                buttonAnalyticsObject: { section: k.jXE.PERMADECOS_MARKETING_UPSELL },
                            }),
                    ],
                }),
            }),
        ],
    });
}
function W(e) {
    var n, t;
    let { quest: r, location: i, onClose: l, transitionState: d, preview: c } = e,
        m = o.useMemo(() => (0, P.xn)(r.config), [r]),
        [p, f] = (function (e) {
            let { product: n, isFetching: t } = (0, g.T)(e),
                {} = (0, j.Z)({}),
                a = o.useMemo(() => {
                    if (null == n || t) return null;
                    let e = n.items.find((e) => e.type === s.Z.AVATAR_DECORATION);
                    return null == e ? null : e;
                }, [n, t]);
            return [
                a,
                () =>
                    null == a
                        ? (T.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }),
                          Promise.reject())
                        : ((0, u.cV)(a), z()),
            ];
        })(null != (t = null == m ? void 0 : m.skuId) ? t : null);
    return null == m
        ? null
        : (null == (n = r.userStatus) ? void 0 : n.claimedAt) != null
          ? (0, a.jsx)(_.default, {
                transitionState: d,
                onCloseModal: z,
                onClose: l,
                analyticsLocations: [],
                initialSelectedDecoration: p,
            })
          : (0, a.jsx)(U, {
                onClose: l,
                transitionState: d,
                quest: r,
                location: i,
                reward: m,
                decoration: p,
                onUseNow: f,
                preview: c,
            });
}
