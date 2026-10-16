n.d(t, { A: () => e5 });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(17928),
    i = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    f = n(287809),
    m = n(262),
    g = n(503698),
    E = n.n(g),
    p = n(612324),
    h = n(70283),
    x = n(834730),
    b = n(559106),
    _ = n(307301),
    A = n(192308),
    N = n(28863),
    R = n(866665),
    v = n(140735),
    I = n(22231),
    j = n(922016),
    T = n(983555),
    y = n(274670),
    C = n(144779),
    S = n(793574),
    D = n(688810),
    M = n(682618),
    O = n(609782);
let P = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var U = n(248284),
    B = n(675816),
    G = n(425763),
    w = n(952270),
    k = n(365199),
    L = n(315710),
    H = n(297264),
    V = n(821609),
    $ = n(442433),
    F = n(450232),
    z = n(183555),
    X = n(451395),
    K = n(327791),
    W = n(315629),
    Y = n(403581),
    q = n(87719),
    Z = n(105292),
    Q = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(W.h, {
        color: "nitro-pink",
        className: Q.U,
        children: [
            (0, a.jsx)(x.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: Q.t,
                children: Z.intl.string(Z.t.cKIIzk),
            }),
            (0, a.jsx)(V.$, {
                variant: "expressive",
                size: "sm",
                icon: Y.t,
                text: Z.intl.string(Z.t.pj0XBN),
                onClick: function () {
                    (t(), (0, q.e)());
                },
            }),
        ],
    });
}
var ee = n(470739),
    et = n(577931),
    en = n(494881);
let ea = "PROFILE_BADGES",
    el = "BADGE";
function er(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, G.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(X.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: ea,
        itemType: el,
        "aria-label": Z.intl.formatToPlainString(Z.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: en.oE,
        draggingClassName: en.Id,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        children: [
            (0, a.jsx)(es, { ...r }),
            (0, a.jsx)(X.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": Z.intl.formatToPlainString(Z.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function es(e) {
    let { badge: t, index: r, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = l.useState(!1);
    function u(e) {
        (c(!0),
            (0, $.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("434691"), n.e("918024"), n.e("787847")]).then(
                        n.bind(n, 842810),
                    );
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => c(!1) },
            ));
    }
    let f = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: E()(en.fw, d && en.HV),
        onContextMenu: u,
        children: [
            (0, a.jsx)("div", {
                className: en.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: E()(en.pC, f && en.jx),
                    }),
            }),
            f &&
                (0, a.jsx)("div", {
                    className: en.Gf,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(b.vN, {
                children: (0, a.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: en.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": Z.intl.formatToPlainString(f ? Z.t["3Uwmdt"] : Z.t.Ci7gvp, {
                        badgeName: t.name,
                        position: r + 1,
                    }),
                    onClick: u,
                    children: (0, a.jsx)(k.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function ei() {
    let e = (0, G.VU)(),
        { badge: t, sourceClientOffset: n } = (0, B.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === el ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: en.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: en.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: en.pC,
                }),
        }),
    });
}
function eo(e) {
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: r } = e,
        o = l.useRef(null),
        d = l.useId();
    (l.useLayoutEffect(() => {
        o.current?.focus();
    }, []),
        (0, L.tj)(o, { returnRef: n }));
    let { analyticsLocations: u } = (0, D.Ay)(S.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: m } = (0, z.NJ)();
    l.useEffect(() => {
        m({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: u });
    }, []);
    let { fixedBadges: g, reorderableBadges: p, hiddenBadges: h } = (0, et.A)(),
        b = (0, K.A)(),
        _ = (0, G.VU)(),
        A =
            (0, B.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === el;
            }) && !_,
        N = l.useMemo(() => p.map((e) => e.badge_id), [p]),
        R = l.useRef(new Map());
    function v(e) {
        return (t) => {
            null == t ? R.current.delete(e) : R.current.set(e, t);
        };
    }
    function I(e) {
        requestAnimationFrame(() => R.current.get(e)?.focus());
    }
    let j = g.length + p.length + h.length,
        T = (0, s.bG)([i.Ay, f.default], () => {
            let e = f.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function y(e, t) {
        (0, c.hB)((0, c.i1)(N, e, t));
    }
    let C = (0, X.w9)({ listType: ea, itemType: el, onFallbackDrop: (e) => y(e.index, N.length - 1) }),
        M = (0, X.w9)({ listType: ea, itemType: el });
    l.useLayoutEffect(() => {
        if (A)
            return (
                M(document.body),
                () => {
                    M(null);
                }
            );
    }, [M, A]);
    let O = j > 0,
        P = T && !O,
        U = !b && !P,
        w = b ? Z.t.VHaYM7 : Z.t["7Qs/YX"];
    function k() {
        (null != r && (r.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: E()(en.SW, P && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, a.jsxs)("div", {
                className: E()(en.Qs, U && en.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.$,
                                children: [
                                    b && (0, a.jsx)(F.A, { size: "xs", className: en.oU }),
                                    (0, a.jsx)(H.D, {
                                        id: d,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !P &&
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: Z.intl.string(w),
                                }),
                        ],
                    }),
                    U && (0, a.jsx)(J, { onClose: t }),
                    P &&
                        (0, a.jsx)(x.E, {
                            className: en.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Z.t.VT02mI),
                        }),
                    O &&
                        (0, a.jsxs)("div", {
                            className: E()(en.yq, A && en.T0),
                            role: "group",
                            "aria-label": Z.intl.string(Z.t.VWV0y5),
                            children: [
                                b &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            C(e);
                                        },
                                        className: en.u$,
                                        "aria-hidden": !0,
                                    }),
                                g.map((e, t) =>
                                    (0, a.jsx)(
                                        es,
                                        { badge: e, index: t, onClose: k, onAction: I, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                p.map((e, t) =>
                                    b
                                        ? (0, a.jsx)(
                                              er,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: k,
                                                  onAction: I,
                                                  controlRef: v(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: y,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: k,
                                                  onAction: I,
                                                  controlRef: v(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                h.map((e, t) =>
                                    (0, a.jsx)(
                                        es,
                                        {
                                            badge: e,
                                            index: g.length + p.length + t,
                                            onClose: k,
                                            onAction: I,
                                            controlRef: v(e.badge_id),
                                        },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(ei, {}),
            (0, a.jsx)(V.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: Z.intl.string(Z.t.fN2how),
                onClick: function () {
                    (m({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
                        k(),
                        (0, ee.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ed = n(775602),
    ec = n(461536),
    eu = n(321191),
    ef = n(351906);
function em(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: f, shouldShow: m } = e,
        g = (0, O.w0)(d),
        {
            badgeData: E,
            currentTier: p,
            obtainedAt: x,
        } = (0, s.cf)(
            [i.Ay],
            () =>
                null == g || null == c
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: i.Ay.getBadgeById(g, c),
                          currentTier: i.Ay.getCurrentTier(g, c),
                          obtainedAt: i.Ay.getObtainedAt(g, c),
                      },
            [g, c],
        ),
        b = (0, s.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, M.RS)(c);
        }, [c]),
        A = E?.badge_id === h.$.PREMIUM_TENURE,
        N = g === h.$.LEGACY_USERNAME,
        R = p?.name,
        v = A ? Z.intl.string(Z.t.Ipxkog) : (E?.name ?? u);
    A ? (r = n = null != R ? `${v} ${R}` : v) : null != R ? ((t = v), (n = R), (r = `${v} ${R}`)) : ((n = v), (r = v));
    let I = b ? void 0 : E?.complex_icon_animated_url,
        j = I ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? f,
        T = null != I && j === I;
    if (N) return (0, a.jsx)(eg, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let y = E?.info_label ?? (null != x ? Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(x) }) : void 0);
    return (0, a.jsx)(ec.A, {
        title: n,
        eyebrow: t,
        body: y,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: T,
        shouldShow: m,
        onShow: _,
        children: o,
    });
}
function eg(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [eu.A, ef.A],
            () =>
                ef.A.hidePersonalInformation
                    ? Z.intl.string(Z.t.Br1ls3)
                    : null != n
                      ? (eu.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ec.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var eE = n(815996),
    ep = n(683063);
function eh(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(ep.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: l,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: r,
        children: s,
    });
}
var ex = n(116833),
    eb = n(704640),
    e_ = n(425713),
    eA = n(642481),
    eN = n(720879),
    eR = n(202541),
    ev = n(49999),
    eI = n(518477);
let ej = function (e) {
    let {
            badgeId: t = eR.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eR.VD[t].nameUnformattedNitro,
        f = Z.intl.string(u).toLocaleUpperCase(),
        m = eR.VD[t].rarity,
        g = (0, eb.A)(t),
        E = (0, e_.I)(t).standard;
    (0, l.useEffect)(() => {
        (ex.m[ex.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E));
    }, [E]);
    let p = (0, l.useCallback)(() => {
        n?.(ev.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(ec.A, {
            targetElementRef: s,
            onShow: c,
            title: f,
            body: e.body,
            variant: "nitro",
            rarity: m,
            badgeImage: E,
            badgeName: f,
            progressCircle: t,
            children: r,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ex.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: E, alt: f, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eN.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: eI.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(eA.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: p,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...h,
                  }),
              ],
          });
};
var eT = n(592265);
let ey = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eT.R,
        children: [t, (0, a.jsx)("div", { className: eT.A, children: n }), l],
    });
};
var eC = n(224016),
    eS = n(747278);
let eD = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, e_.I)(n.id).standard;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eC.A, { width: 56, className: eS.R }),
        children: [
            (0, a.jsx)(H.D, { variant: "heading-xl/extrabold", children: Z.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eS.K,
                children: t.description,
            }),
        ],
    });
};
var eM = n(30084),
    eO = n(738822),
    eP = n(104886),
    eU = n(590202),
    eB = n(976860),
    eG = n(780964),
    ew = n(766075),
    ek = n(305003),
    eL = n(273875),
    eH = n(798618),
    eV = n(752079),
    e$ = n(370277);
function eF(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let f = l.useCallback(() => {
        (u(),
            (c.current = window.setTimeout(() => {
                ((c.current = null), d(!0));
            }, r)));
    }, [r, u]);
    l.useEffect(() => {
        i && !o && f();
    }, [i, o, f]);
    let m = l.useCallback(() => {
            f();
        }, [f]),
        g = l.useCallback(() => {
            (u(), d(!1));
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eL.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(ez, { showSubtext: s }), (0, a.jsx)(eH.F, {})],
            }),
        ],
    });
}
function ez(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)(eV.A, { className: e$.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(H.D, {
            variant: "heading-md/extrabold",
            className: e$.RK,
            children: Z.intl.string(Z.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(H.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : e$.Qn,
                children: Z.intl.string(Z.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(x.E, { variant: "text-xs/normal", className: e$.lV, children: Z.intl.string(Z.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eX = n(174459),
    eK = n(474090),
    eW = n(439174),
    eY = n(47675),
    eq = n(999291),
    eZ = n(874402),
    eQ = n(652215),
    eJ = n(758836),
    e0 = n(854232),
    e1 = n(816645);
function e8(e) {
    let t,
        {
            badges: n,
            overflowCount: r,
            className: d,
            badgeClassName: c,
            displayProfile: u,
            onClose: g,
            shouldOpenBadgeTooltip: B,
            shouldGlowTenureBadge: G,
            popoutAnchorRef: w,
            containerRef: k,
            isTargetUserBot: L,
        } = e,
        H = (0, U.A)((e) => e.isOpen),
        V = l.useRef(null),
        $ = (0, p.A)(V, k),
        F = l.useRef(null),
        X = l.useRef(null),
        K = l.useRef(null),
        W = l.useRef(null),
        Y = l.useRef(!1),
        { analyticsLocations: q } = (0, D.Ay)(S.A.BADGE),
        { context: Q, trackUserProfileAction: J } = (0, z.NJ)(),
        et = f.default.getCurrentUser(),
        en = (0, eK.CC)(et?.premiumType, eR.PremiumTypes.TIER_2),
        ea = (0, o.d)({ location: "UserProfileBadgeList" }),
        el = (function (e) {
            let { location: t } = e;
            return P.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (ea || el) && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, M.RS)(u.userId);
    }, [ea, el, u?.userId]);
    let er = u?.userId,
        es = (0, s.bG)(
            [i.Ay],
            () => {
                if (!el || null == er) return null;
                let e = {};
                for (let t of n) {
                    let n = (0, O.w0)(t.id);
                    if (null == n) continue;
                    let a = i.Ay.getBadgeById(n, er)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [el, er, n],
        ),
        ei = u?.userId === et?.id,
        ed = ei && ea && null != w,
        ec = !ed && ea,
        eu = ed && 0 === n.length,
        ef = et?.id,
        eg = (0, s.bG)(
            [i.Ay],
            () => null != ef && (!i.Ay.hasCatalogFor(ef) || i.Ay.getBadges(ef).some((e) => e.owned)),
            [ef],
        ),
        ep = ed && H;
    function ex(e) {
        if ((U.A.setState({ isOpen: e }), !e)) {
            if (Y.current) {
                Y.current = !1;
                return;
            }
            requestAnimationFrame(() => W.current?.focus());
        }
    }
    let eb = (0, eq.AP)(et?.id ?? null),
        e_ = (0, m.A)(eb).some((e) => e.id === ek.A.ORB_PROFILE_BADGE),
        eA = ed && !eu && 0 === r,
        eN = null;
    r > 0 &&
        ((eN = (0, a.jsx)(x.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e1.AX,
            "aria-hidden": !0,
            children: Z.intl.format(Z.t.n7CiSK, { count: r }),
        })),
        (t = Z.intl.formatToPlainString(Z.t.eIHfGZ, { overflow_count: r })));
    let ev = (0, a.jsxs)("div", {
        ref: $,
        className: E()(e1.kL, ea && !0 !== L && e1.Yq, ed && e1.Tx, eA && e1.gK, d),
        ...(eu ? null : { "aria-label": Z.intl.string(Z.t.VWV0y5), role: "group" }),
        ...(ed && !eu ? { onClick: () => ex(!ep) } : null),
        children: [
            eu &&
                (0, a.jsx)(b.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: W,
                        type: "button",
                        className: e1.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": ep,
                        onClick: (e) => {
                            (e.stopPropagation(), ex(!ep));
                        },
                        children: [
                            (0, a.jsx)(_.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(x.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Z.intl.string(Z.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === ek.A.ORB_PROFILE_BADGE,
                    l = (0, eW.e0)(e.id),
                    r = null != l || e.id === e0.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== e0.K,
                    o = es?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eI.L7)(e.icon),
                        className: E()(e1.qS, null != o && e1.Do, c),
                    }),
                    p = null != B && B(e.id),
                    x = {
                        onClick: (a) => {
                            if (
                                (J({ action: "PRESS_BADGE" }),
                                (0, eY.vP)({
                                    badgeId: (0, O.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...Q,
                                }),
                                ed)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? f.default.getUser(u.userId) : null;
                            if (ea && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, ee.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, O.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, O.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    g?.(),
                                    (0, ew.openUserSettings)(eG.X.GIFT_PANEL, { analyticsLocations: q }));
                                return;
                            }
                            if (n) {
                                ((0, eE.Cz)({
                                    tab: eJ.G2.ORBS,
                                    analyticsLocations: q,
                                    analyticsSource: S.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    g?.(),
                                    (0, A.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eX.default.track(eQ.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: en,
                                        viewed_user_id: u?.userId,
                                    }),
                                    en)
                                ) {
                                    (ei
                                        ? ((0, eB.pX)(eQ.BVt.NITRO_HOME), (0, A.closeAllModals)())
                                        : (0, eM.D)({ analyticsLocations: q, displayProfile: u }),
                                        g?.());
                                    return;
                                }
                                if (ei) {
                                    let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: q }) : null;
                                    if (null == t) return;
                                    return (g?.(), (0, A.closeAllModals)(), t(a));
                                }
                                return ((0, eM.D)({ analyticsLocations: q, displayProfile: u }), void g?.());
                            }
                            let s = null != e.link ? (0, T.default)(e.link, { analyticsLocations: q }) : null;
                            if (null != s) return (g?.(), (0, A.closeAllModals)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === m.h &&
                                ((0, eP.E5)(eP.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, y.r)({
                                          type: C.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eO.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eX.default.track(eQ.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eU.fF)(eO.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                J({ action: "HOVER_BADGE" }),
                                (0, eY.vP)({
                                    badgeId: (0, O.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...Q,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ed ? { "aria-haspopup": "dialog", "aria-expanded": ep } : null),
                        style: { filter: G && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (ea)
                    return (0, a.jsx)(
                        em,
                        {
                            shouldShow: !ep,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eI.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...x, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...x, ref: F, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(ej, {
                                badgeId: e.id,
                                targetElementRef: F,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eX.default.track(eQ.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (ei ? "self" : "other"),
                                    });
                                },
                                estimatedTooltipHeight: 220,
                                children: n,
                            }),
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (n) {
                    let n = (0, a.jsx)(N.Anchor, { ...x, ref: X, children: d });
                    return (0, a.jsx)(
                        eF,
                        {
                            targetElementRef: X,
                            delay: eI.In,
                            showSubtext: !e_ && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...x, ref: K, children: d });
                    return (0, a.jsx)(
                        eh,
                        {
                            targetElementRef: K,
                            delay: eI.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, a.jsx)(N.Anchor, { ...x, children: d }),
                    _ = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e0.K
                            ? (0, a.jsx)(eD, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e0.K ? l : void 0 });
                return (0, a.jsx)(
                    R.m,
                    { __unsupportedReactNodeAsText: _, forceOpen: p, delay: eI.In, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (ec
                    ? (0, a.jsx)(b.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: E()(e1.$O, e1.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != er ? f.default.getUser(er) : null;
                                  (0, ee.openBadgeDirectoryModal)({
                                      targetUserId: er,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eN,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: e1.$O, children: [(0, a.jsx)(v.A, { children: t }), eN] })),
            ed &&
                !eu &&
                (0, a.jsx)(R.m, {
                    text: Z.intl.string(Z.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: W,
                    children: (0, a.jsx)(b.vN, {
                        children: (0, a.jsx)("button", {
                            ref: W,
                            type: "button",
                            className: E()(e1.r9, r > 0 ? e1.v_ : e1.Y5),
                            "aria-label": Z.intl.string(Z.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": ep,
                            onClick: (e) => {
                                (e.stopPropagation(), ex(!ep));
                            },
                            children: (0, a.jsx)(I.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e1.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ed
        ? (0, a.jsx)(j.Y, {
              targetElementRef: eu && !eg ? V : w,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: ep,
              onRequestClose: (e) => {
                  let t = e?.target;
                  V.current?.contains(t) === !0 || (t?.closest(`[${eZ.m}]`) == null && ex(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eo, { onClose: t, returnFocusRef: W, skipReturnFocusRef: Y });
              },
              children: () => ev,
          })
        : ev;
}
var e2 = n(996988);
let e7 = {
    [e2.d.POPOUT]: 12,
    [e2.d.MODAL]: 26,
    [e2.d.SIDEBAR]: 13,
    [e2.d.VIDEO_TILE_BACKGROUND]: 12,
    [e2.d.EMBED]: 12,
};
function e5(e) {
    let t,
        {
            displayProfile: n,
            themeType: g,
            isRedesignEnabled: E,
            pendingLegacyUsernameDisabled: p,
            pendingBadges: h,
            showPendingBadgeEdits: x = !1,
            onClose: b,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: N,
            containerRef: R,
        } = e,
        v = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        I = n?.userId,
        j = (0, s.bG)([f.default], () => null != I && f.default.getUser(I)?.bot === !0, [I]),
        T = (0, m.A)(n, p),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        S = (0, s.yK)([i.Ay], () => (x && null != I && i.Ay.hasCatalogFor(I) ? i.Ay.getBadges(I) : []), [x, I]),
        D = l.useMemo(() => {
            let e = T;
            if (null != h) {
                let t = new Set(T.map((e) => e.id));
                e = [...T, ...h.filter((e) => !t.has(e.id))];
            }
            return x ? (0, c.Rr)(e, S, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [T, h, x, S, y, C]);
    if (0 === D.length && !x) return null;
    let M = v && !j,
        O = M ? Math.max(D.length - d.k9, 0) : 0;
    return (
        (t = M
            ? [D.slice(0, d.k9)]
            : g === e2.d.MODAL_V2
              ? [D]
              : (0, r.chunk)(D, !0 === E && g === e2.d.SIDEBAR ? e7[e2.d.POPOUT] : e7[g])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e8,
                    {
                        badges: e,
                        overflowCount: O,
                        displayProfile: n,
                        onClose: b,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        isTargetUserBot: j,
                        popoutAnchorRef: N,
                        containerRef: 0 === t ? R : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
