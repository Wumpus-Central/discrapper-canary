a.d(n, { default: () => W }), a(457542), a(388685);
var t = a(54381),
    o = a(473749),
    r = a(120356),
    i = a.n(r),
    s = a(921254),
    l = a(979554),
    d = a(442837),
    c = a(481060),
    u = a(809206),
    m = a(607070),
    _ = a(235400),
    p = a(204418),
    g = a(975298),
    f = a(583434),
    x = a(530618),
    h = a(454585),
    C = a(732389),
    v = a(150039),
    j = a(164946),
    w = a(369111),
    N = a(313789),
    I = a(518596),
    T = a(25990),
    P = a(594174),
    R = a(960048),
    S = a(22095),
    y = a(313481),
    B = a(49436),
    A = a(509212),
    E = a(475595),
    M = a(939729),
    L = a(968435),
    O = a(324805),
    k = a(981631),
    Z = a(675654),
    D = a(474936),
    b = a(388032),
    F = a(809349);
function z() {
    let e = T.Z.getAllPending(),
        n = (0, j.ED)(e);
    return (0, u.Mn)(n).finally(u.si);
}
function U(e) {
    var n;
    let {
            transitionState: a,
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
        N = (0, d.e7)([P.default], () => P.default.getCurrentUser()),
        I = (null == (n = l.userStatus) ? void 0 : n.claimedAt) != null,
        [T, R] = o.useState(!0 === f || I ? "claimed" : "loading");
    o.useEffect(() => {
        I ||
            !0 === f ||
            (0, S.QB)(l.id, B.y$.CROSS_PLATFORM, u)
                .then(() => R("claimed"))
                .catch(() => R("error"));
    }, [l, u, I, f]);
    let y = !0 === f && null === p && (null == _ ? void 0 : _.skuId) !== "",
        A = null == N || (null == p && !0 !== f) || y || "loading" === T;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(s.O_, {
                ref: v,
                className: F.confettiCanvas,
                environment: j.current,
            }),
            (0, t.jsx)("div", {
                ref: h,
                children: (0, t.jsx)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: a,
                    size: c.CgR.DYNAMIC,
                    className: i()(F.rootContainer, { [F.rootContainerLoading]: A }),
                    hideShadow: !0,
                    parentComponent: "QuestsRewardCollectibleModal",
                    children:
                        "error" === T
                            ? (0, t.jsx)(M.Z, { onClose: r })
                            : A
                              ? (0, t.jsx)("div", {
                                    className: F.loadingIndicatorWrapper,
                                    children: (0, t.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
                                })
                              : (0, t.jsx)(H, {
                                    quest: l,
                                    user: N,
                                    decoration: p,
                                    isSaving: "applying" === T,
                                    onClose: r,
                                    onConfirm: () => {
                                        R("applying"), g().finally(r);
                                    },
                                }),
                }),
            }),
            !w &&
                !I &&
                "claimed" === T &&
                (0, t.jsx)(x.Z, {
                    confettiTarget: h.current,
                    confettiCanvas: C,
                    sprites: Z.CA,
                    colors: Z.Br,
                }),
        ],
    });
}
function q(e) {
    let { quest: n } = e,
        a = o.useMemo(() => (0, E.fh)(n, E.eC.LOGO_TYPE, "dark"), [n]),
        r = (0, A.M1)(n.config).messages.redemptionInstructionsByPlatform[B.y$.CROSS_PLATFORM];
    return (0, t.jsxs)("div", {
        className: F.additionalRedemptionInstructions,
        children: [
            (0, t.jsx)("img", {
                src: a.url,
                alt: "",
                className: F.sponsorLogo,
            }),
            (0, t.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: h.Z.parse(r, !1, { allowLinks: !0 }),
            }),
        ],
    });
}
function H(e) {
    let { quest: n, user: a, decoration: o, isSaving: r, onClose: i, onConfirm: s } = e,
        l = (0, E.fh)(n, E.eC.REWARD).url,
        d = (0, A.f$)(n.config),
        { fractionalState: u } = (0, g.Z)(),
        m = u === D.a$.FP_ONLY,
        _ = (0, y.Qy)(n.config);
    return (0, t.jsxs)("div", {
        className: F.claimedRootContainer,
        children: [
            (0, t.jsxs)("div", {
                className: F.headerContainer,
                children: [
                    (0, t.jsx)(L.Z, {
                        quest: n,
                        dimensions: {
                            width: 528,
                            height: 148,
                        },
                        className: F.headerBackground,
                    }),
                    (0, t.jsx)("div", {
                        className: F.headerForeground,
                        children: (0, t.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: F.close,
                            withCircleBackground: !0,
                            onClick: i,
                        }),
                    }),
                ],
            }),
            (0, t.jsx)(c.mzw, {
                "data-migration-pending": !0,
                separator: !1,
                children: (0, t.jsxs)("div", {
                    className: F.footerBody,
                    children: [
                        (0, t.jsx)("div", {
                            className: F.previewContainer,
                            children: (0, t.jsx)(p.Z, {
                                user: a,
                                guildId: null,
                                avatarDecorationOverride: o,
                                avatarSize: c.EFr.SIZE_152,
                                questPreviewRewardAssetUrl: l,
                            }),
                        }),
                        (0, t.jsx)(c.Heading, {
                            variant: "heading-lg/bold",
                            color: "header-primary",
                            className: F.heading,
                            children: b.intl.string(b.t["0/Yz+Y"]),
                        }),
                        (0, t.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: F.text,
                            children: _,
                        }),
                        (0, t.jsx)(c.Button, {
                            variant: "primary",
                            text: b.intl.string(b.t.MAS7uK),
                            loading: r,
                            onClick: s,
                        }),
                        (0, A.zK)(n, O.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, t.jsx)(q, { quest: n }),
                        d &&
                            !m &&
                            (0, t.jsx)(C.p, {
                                className: F.upsell,
                                upsellText: b.intl.format(b.t.VHXn7C, {
                                    onNitroClick: () => {
                                        (0, I.openUserSettings)(N.n.NITRO_PANEL, { section: k.oAB.PREMIUM }), i();
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
    var n, a;
    let { quest: r, location: i, onClose: s, transitionState: d, preview: c } = e,
        u = o.useMemo(() => (0, A.xn)(r.config), [r]),
        [m, p] = (function (e) {
            let { product: n, isFetching: a } = (0, f.T)(e),
                {} = (0, w.Z)({}),
                t = o.useMemo(() => {
                    if (null == n || a) return null;
                    let e = n.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
                    return null == e ? null : e;
                }, [n, a]);
            return [
                t,
                () =>
                    null == t
                        ? (R.Z.addBreadcrumb({ message: "Error saving avatar decoration; it is null" }),
                          Promise.reject())
                        : ((0, v.PO)(t), z()),
            ];
        })(null != (a = null == u ? void 0 : u.skuId) ? a : null);
    return null == u
        ? null
        : (null == (n = r.userStatus) ? void 0 : n.claimedAt) != null
          ? (0, t.jsx)(_.default, {
                transitionState: d,
                onCloseModal: z,
                onClose: s,
                analyticsLocations: [],
                initialSelectedDecoration: m,
            })
          : (0, t.jsx)(U, {
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
