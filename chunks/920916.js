t.d(n, { default: () => G }), t(457542), t(388685);
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
    v = t(150039),
    j = t(164946),
    w = t(369111),
    N = t(313789),
    b = t(518596),
    I = t(25990),
    T = t(594174),
    R = t(960048),
    P = t(22095),
    S = t(509212),
    y = t(113434),
    B = t(497505),
    A = t(475595),
    E = t(566078),
    L = t(968435),
    M = t(114732),
    O = t(46140),
    k = t(981631),
    Z = t(675654),
    D = t(474936),
    F = t(388032),
    z = t(824210);
function U() {
    let e = I.Z.getAllPending(),
        n = (0, j.ED)(e);
    return (0, u.Mn)(n).finally(u.si);
}
function q(e) {
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
        N = (0, d.e7)([T.default], () => T.default.getCurrentUser()),
        b = (null == (n = s.userStatus) ? void 0 : n.claimedAt) != null,
        [I, R] = o.useState(!0 === g || b ? "claimed" : "loading");
    o.useEffect(() => {
        b ||
            !0 === g ||
            (0, P.QB)(s.id, B.y$.CROSS_PLATFORM, u)
                .then(() => R("claimed"))
                .catch(() => R("error"));
    }, [s, u, b, g]);
    let S = !0 === g && null === p && (null == _ ? void 0 : _.skuId) !== "",
        y = null == N || (null == p && !0 !== g) || S || "loading" === I;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.O_, {
                ref: v,
                className: z.confettiCanvas,
                environment: j.current,
            }),
            (0, a.jsx)("div", {
                ref: h,
                children: (0, a.jsx)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: t,
                    size: c.CgR.DYNAMIC,
                    className: i()(z.rootContainer, { [z.rootContainerLoading]: y }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardCollectibleModal",
                    children:
                        "error" === I
                            ? (0, a.jsx)(M.Z, { onClose: r })
                            : y
                              ? (0, a.jsx)("div", {
                                    className: z.loadingIndicatorWrapper,
                                    children: (0, a.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
                                })
                              : (0, a.jsx)(W, {
                                    quest: s,
                                    user: N,
                                    decoration: p,
                                    isSaving: "applying" === I,
                                    onClose: r,
                                    onConfirm: () => {
                                        R("applying"), f().finally(r);
                                    },
                                }),
                }),
            }),
            !w &&
                !b &&
                "claimed" === I &&
                (0, a.jsx)(x.Z, {
                    confettiTarget: h.current,
                    confettiCanvas: C,
                    sprites: Z.CA,
                    colors: Z.Br,
                }),
        ],
    });
}
function H(e) {
    let { quest: n } = e,
        t = o.useMemo(() => (0, A.fh)(n, A.eC.LOGO_TYPE, "dark"), [n]),
        r = E.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[B.y$.CROSS_PLATFORM];
    return (0, a.jsxs)("div", {
        className: z.additionalRedemptionInstructions,
        children: [
            (0, a.jsx)("img", {
                src: t.url,
                alt: "",
                className: z.sponsorLogo,
            }),
            (0, a.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: h.Z.parse(r, !1, { allowLinks: !0 }),
            }),
        ],
    });
}
function W(e) {
    let { quest: n, user: t, decoration: o, isSaving: r, onClose: i, onConfirm: l } = e,
        s = (0, A.fh)(n, A.eC.REWARD).url,
        d = (0, S.f$)(n.config),
        { fractionalState: u } = (0, f.Z)(),
        m = u === D.a$.FP_ONLY,
        _ = (0, y.Qy)(n.config);
    return (0, a.jsxs)("div", {
        className: z.claimedRootContainer,
        children: [
            (0, a.jsxs)("div", {
                className: z.headerContainer,
                children: [
                    (0, a.jsx)(L.Z, {
                        quest: n,
                        dimensions: {
                            width: 528,
                            height: 148,
                        },
                        className: z.headerBackground,
                    }),
                    (0, a.jsx)("div", {
                        className: z.headerForeground,
                        children: (0, a.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: z.close,
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
                    className: z.footerBody,
                    children: [
                        (0, a.jsx)("div", {
                            className: z.previewContainer,
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
                            className: z.heading,
                            children: F.intl.string(F.t["0/Yz+Y"]),
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: z.text,
                            children: _,
                        }),
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: F.intl.string(F.t.MAS7uK),
                            loading: r,
                            onClick: l,
                        }),
                        (0, S.zK)(n, O.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(H, { quest: n }),
                        d &&
                            !m &&
                            (0, a.jsx)(C.p, {
                                className: z.upsell,
                                upsellText: F.intl.format(F.t.VHXn7C, {
                                    onNitroClick: () => {
                                        (0, b.openUserSettings)(N.n.NITRO_PANEL, { section: k.oAB.PREMIUM }), i();
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
function G(e) {
    var n, t;
    let { quest: r, location: i, onClose: l, transitionState: d, preview: c } = e,
        u = o.useMemo(() => (0, S.xn)(r.config), [r]),
        [m, p] = (function (e) {
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
                        ? (R.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }),
                          Promise.reject())
                        : ((0, v.PO)(a), U()),
            ];
        })(null != (t = null == u ? void 0 : u.skuId) ? t : null);
    return null == u
        ? null
        : (null == (n = r.userStatus) ? void 0 : n.claimedAt) != null
          ? (0, a.jsx)(_.default, {
                transitionState: d,
                onCloseModal: U,
                onClose: l,
                analyticsLocations: [],
                initialSelectedDecoration: m,
            })
          : (0, a.jsx)(q, {
                onClose: l,
                transitionState: d,
                quest: r,
                location: i,
                reward: u,
                decoration: m,
                onUseNow: p,
                preview: c,
            });
}
