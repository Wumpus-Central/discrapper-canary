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
    m = t(230711),
    p = t(607070),
    _ = t(235400),
    x = t(204418),
    f = t(975298),
    g = t(583434),
    h = t(530618),
    C = t(454585),
    v = t(732389),
    j = t(164946),
    w = t(369111),
    b = t(25990),
    N = t(594174),
    I = t(960048),
    R = t(509212),
    T = t(272008),
    P = t(113434),
    S = t(497505),
    y = t(475595),
    A = t(566078),
    B = t(968435),
    E = t(114732),
    k = t(46140),
    L = t(981631),
    M = t(675654),
    O = t(474936),
    Z = t(388032),
    D = t(824210);
function z() {
    let e = b.Z.getAllPending(),
        n = (0, j.ED)(e);
    return (0, u.Mn)(n).finally(u.si);
}
function F(e) {
    var n;
    let {
            transitionState: t,
            onClose: r,
            quest: s,
            location: u,
            reward: m,
            decoration: _,
            onUseNow: x,
            preview: f,
        } = e,
        g = o.useRef(null),
        [C, v] = o.useState(null),
        j = o.useRef(new l.qA()),
        w = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        b = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        I = (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        [R, P] = o.useState(!0 === f || I ? "claimed" : "loading");
    o.useEffect(() => {
        I ||
            !0 === f ||
            (0, T.QB)(s.id, S.y$.CROSS_PLATFORM, u)
                .then(() => P("claimed"))
                .catch(() => P("error"));
    }, [s, u, I, f]);
    let y = !0 === f && null === _ && (null == m ? void 0 : m.skuId) !== "",
        A = null == b || (null == _ && !0 !== f) || y || "loading" === R;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.O_, {
                ref: v,
                className: D.confettiCanvas,
                environment: j.current,
            }),
            (0, a.jsx)("div", {
                ref: g,
                children: (0, a.jsx)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: t,
                    size: c.CgR.DYNAMIC,
                    className: i()(D.rootContainer, { [D.rootContainerLoading]: A }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardCollectibleModal",
                    children:
                        "error" === R
                            ? (0, a.jsx)(E.Z, { onClose: r })
                            : A
                              ? (0, a.jsx)("div", {
                                    className: D.loadingIndicatorWrapper,
                                    children: (0, a.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
                                })
                              : (0, a.jsx)(q, {
                                    quest: s,
                                    user: b,
                                    decoration: _,
                                    isSaving: "applying" === R,
                                    onClose: r,
                                    onConfirm: () => {
                                        P("applying"), x().finally(r);
                                    },
                                }),
                }),
            }),
            !w &&
                !I &&
                "claimed" === R &&
                (0, a.jsx)(h.Z, {
                    confettiTarget: g.current,
                    confettiCanvas: C,
                    sprites: M.CA,
                    colors: M.Br,
                }),
        ],
    });
}
function U(e) {
    let { quest: n } = e,
        t = o.useMemo(() => (0, y.fh)(n, y.eC.LOGO_TYPE, "dark"), [n]),
        r = A.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[S.y$.CROSS_PLATFORM];
    return (0, a.jsxs)("div", {
        className: D.additionalRedemptionInstructions,
        children: [
            (0, a.jsx)("img", {
                src: t.url,
                alt: "",
                className: D.sponsorLogo,
            }),
            (0, a.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: C.Z.parse(r, !1, { allowLinks: !0 }),
            }),
        ],
    });
}
function q(e) {
    let { quest: n, user: t, decoration: o, isSaving: r, onClose: i, onConfirm: l } = e,
        s = (0, y.fh)(n, y.eC.REWARD).url,
        d = (0, R.f$)(n.config),
        { fractionalState: u } = (0, f.Z)(),
        p = u === O.a$.FP_ONLY,
        _ = (0, P.Qy)(n.config);
    return (0, a.jsxs)("div", {
        className: D.claimedRootContainer,
        children: [
            (0, a.jsxs)("div", {
                className: D.headerContainer,
                children: [
                    (0, a.jsx)(B.Z, {
                        quest: n,
                        dimensions: {
                            width: 528,
                            height: 148,
                        },
                        className: D.headerBackground,
                    }),
                    (0, a.jsx)("div", {
                        className: D.headerForeground,
                        children: (0, a.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: D.close,
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
                    className: D.footerBody,
                    children: [
                        (0, a.jsx)("div", {
                            className: D.previewContainer,
                            children: (0, a.jsx)(x.Z, {
                                user: t,
                                guildId: null,
                                avatarDecorationOverride: o,
                                avatarSize: c.EFr.SIZE_152,
                                questPreviewRewardAssetUrl: s,
                            }),
                        }),
                        (0, a.jsx)(c.X6q, {
                            variant: "heading-lg/bold",
                            color: "header-primary",
                            className: D.heading,
                            children: Z.intl.string(Z.t["0/Yz+f"]),
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: D.text,
                            children: _,
                        }),
                        (0, a.jsx)(c.zxk, {
                            variant: "primary",
                            text: Z.intl.string(Z.t.MAS7uL),
                            loading: r,
                            onClick: l,
                        }),
                        (0, R.zK)(n, k.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(U, { quest: n }),
                        d &&
                            !p &&
                            (0, a.jsx)(v.p, {
                                className: D.upsell,
                                upsellText: Z.intl.format(Z.t.VHXn7O, {
                                    onNitroClick: () => {
                                        m.Z.open(L.oAB.PREMIUM, null, {}), i();
                                    },
                                }),
                                buttonAnalyticsObject: { section: L.jXE.PERMADECOS_MARKETING_UPSELL },
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
        m = o.useMemo(() => (0, R.xn)(r.config), [r]),
        [p, x] = (function (e) {
            let { product: n, isFetching: t } = (0, g.T)(e),
                {} = (0, w.Z)({}),
                a = o.useMemo(() => {
                    if (null == n || t) return null;
                    let e = n.items.find((e) => e.type === s.Z.AVATAR_DECORATION);
                    return null == e ? null : e;
                }, [n, t]);
            return [
                a,
                () =>
                    null == a
                        ? (I.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }),
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
          : (0, a.jsx)(F, {
                onClose: l,
                transitionState: d,
                quest: r,
                location: i,
                reward: m,
                decoration: p,
                onUseNow: x,
                preview: c,
            });
}
