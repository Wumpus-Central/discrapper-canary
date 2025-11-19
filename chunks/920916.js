t.d(n, { default: () => W }), t(457542), t(388685);
var a = t(54381),
    o = t(473749),
    r = t(120356),
    i = t.n(r),
    s = t(921254),
    l = t(979554),
    d = t(442837),
    c = t(481060),
    u = t(809206),
    m = t(607070),
    _ = t(235400),
    p = t(204418),
    g = t(975298),
    f = t(583434),
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
    P = t(960048),
    R = t(22095),
    S = t(509212),
    y = t(113434),
    B = t(497505),
    A = t(475595),
    E = t(968435),
    M = t(114732),
    L = t(46140),
    O = t(981631),
    k = t(675654),
    Z = t(474936),
    D = t(388032),
    F = t(824210);
function z() {
    let e = I.Z.getAllPending(),
        n = (0, j.ED)(e);
    return (0, u.Mn)(n).finally(u.si);
}
function U(e) {
    var n;
    let {
            transitionState: t,
            onClose: r,
            quest: l,
            location: u,
            reward: _,
            decoration: p,
            onUseNow: g,
            preview: f,
        } = e,
        h = o.useRef(null),
        [C, v] = o.useState(null),
        j = o.useRef(new s.qA()),
        w = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        N = (0, d.e7)([T.default], () => T.default.getCurrentUser()),
        b = (null == (n = l.userStatus) ? void 0 : n.claimedAt) != null,
        [I, P] = o.useState(!0 === f || b ? "claimed" : "loading");
    o.useEffect(() => {
        b ||
            !0 === f ||
            (0, R.QB)(l.id, B.y$.CROSS_PLATFORM, u)
                .then(() => P("claimed"))
                .catch(() => P("error"));
    }, [l, u, b, f]);
    let S = !0 === f && null === p && (null == _ ? void 0 : _.skuId) !== "",
        y = null == N || (null == p && !0 !== f) || S || "loading" === I;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.O_, {
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
                    className: i()(F.rootContainer, { [F.rootContainerLoading]: y }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardCollectibleModal",
                    children:
                        "error" === I
                            ? (0, a.jsx)(M.Z, { onClose: r })
                            : y
                              ? (0, a.jsx)("div", {
                                    className: F.loadingIndicatorWrapper,
                                    children: (0, a.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
                                })
                              : (0, a.jsx)(H, {
                                    quest: l,
                                    user: N,
                                    decoration: p,
                                    isSaving: "applying" === I,
                                    onClose: r,
                                    onConfirm: () => {
                                        P("applying"), g().finally(r);
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
                    sprites: k.CA,
                    colors: k.Br,
                }),
        ],
    });
}
function q(e) {
    let { quest: n } = e,
        t = o.useMemo(() => (0, A.fh)(n, A.eC.LOGO_TYPE, "dark"), [n]),
        r = (0, S.M1)(n.config).messages.redemptionInstructionsByPlatform[B.y$.CROSS_PLATFORM];
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
    let { quest: n, user: t, decoration: o, isSaving: r, onClose: i, onConfirm: s } = e,
        l = (0, A.fh)(n, A.eC.REWARD).url,
        d = (0, S.f$)(n.config),
        { fractionalState: u } = (0, g.Z)(),
        m = u === Z.a$.FP_ONLY,
        _ = (0, y.Qy)(n.config);
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
                                questPreviewRewardAssetUrl: l,
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
                            onClick: s,
                        }),
                        (0, S.zK)(n, L.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(q, { quest: n }),
                        d &&
                            !m &&
                            (0, a.jsx)(C.p, {
                                className: F.upsell,
                                upsellText: D.intl.format(D.t.VHXn7C, {
                                    onNitroClick: () => {
                                        (0, b.openUserSettings)(N.n.NITRO_PANEL, { section: O.oAB.PREMIUM }), i();
                                    },
                                }),
                                buttonAnalyticsObject: { section: O.jXE.PERMADECOS_MARKETING_UPSELL },
                            }),
                    ],
                }),
            }),
        ],
    });
}
function W(e) {
    var n, t;
    let { quest: r, location: i, onClose: s, transitionState: d, preview: c } = e,
        u = o.useMemo(() => (0, S.xn)(r.config), [r]),
        [m, p] = (function (e) {
            let { product: n, isFetching: t } = (0, f.T)(e),
                {} = (0, w.Z)({}),
                a = o.useMemo(() => {
                    if (null == n || t) return null;
                    let e = n.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
                    return null == e ? null : e;
                }, [n, t]);
            return [
                a,
                () =>
                    null == a
                        ? (P.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }),
                          Promise.reject())
                        : ((0, v.PO)(a), z()),
            ];
        })(null != (t = null == u ? void 0 : u.skuId) ? t : null);
    return null == u
        ? null
        : (null == (n = r.userStatus) ? void 0 : n.claimedAt) != null
          ? (0, a.jsx)(_.default, {
                transitionState: d,
                onCloseModal: z,
                onClose: s,
                analyticsLocations: [],
                initialSelectedDecoration: m,
            })
          : (0, a.jsx)(U, {
                onClose: s,
                transitionState: d,
                quest: r,
                location: i,
                reward: u,
                decoration: m,
                onUseNow: p,
                preview: c,
            });
}
