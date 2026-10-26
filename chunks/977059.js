n.d(t, { A: () => e2 });
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
    p = n.n(g),
    E = n(612324),
    h = n(70283),
    x = n(834730),
    b = n(559106),
    A = n(307301),
    _ = n(192308),
    N = n(28863),
    R = n(866665),
    v = n(140735),
    j = n(22231),
    I = n(265872),
    T = n(983555),
    y = n(507395),
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
    Y = n(315629),
    W = n(403581),
    q = n(87719),
    Z = n(105292),
    Q = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(Y.h, {
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
                icon: W.t,
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
        className: p()(en.fw, d && en.HV),
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
                        className: p()(en.pC, f && en.jx),
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
    let { fixedBadges: g, reorderableBadges: E, hiddenBadges: h } = (0, et.A)(),
        b = (0, K.A)(),
        A = (0, G.VU)(),
        _ =
            (0, B.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === el;
            }) && !A,
        N = l.useMemo(() => E.map((e) => e.badge_id), [E]),
        R = l.useRef(new Map());
    function v(e) {
        return (t) => {
            null == t ? R.current.delete(e) : R.current.set(e, t);
        };
    }
    function j(e) {
        requestAnimationFrame(() => R.current.get(e)?.focus());
    }
    let I = g.length + E.length + h.length,
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
        if (_)
            return (
                M(document.body),
                () => {
                    M(null);
                }
            );
    }, [M, _]);
    let O = I > 0,
        P = T && !O,
        U = !b && !P,
        w = b ? Z.t.VHaYM7 : Z.t["7Qs/YX"];
    function k() {
        (null != r && (r.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: p()(en.SW, P && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, a.jsxs)("div", {
                className: p()(en.Qs, U && en.bY),
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
                            className: p()(en.yq, _ && en.T0),
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
                                        { badge: e, index: t, onClose: k, onAction: j, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    b
                                        ? (0, a.jsx)(
                                              er,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: k,
                                                  onAction: j,
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
                                                  onAction: j,
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
                                            index: g.length + E.length + t,
                                            onClose: k,
                                            onAction: j,
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
            badgeData: p,
            currentTier: E,
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
        A = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, M.RS)(c);
        }, [c]),
        _ = p?.badge_id === h.$.PREMIUM_TENURE,
        N = g === h.$.LEGACY_USERNAME,
        R = E?.name,
        v = _ ? Z.intl.string(Z.t.Ipxkog) : (p?.name ?? u);
    _ ? (r = n = null != R ? `${v} ${R}` : v) : null != R ? ((t = v), (n = R), (r = `${v} ${R}`)) : ((n = v), (r = v));
    let j = b ? void 0 : p?.complex_icon_animated_url,
        I = j ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        T = null != j && I === j;
    if (N) return (0, a.jsx)(eg, { userId: c, title: n, badgeImage: I, shouldShow: m, children: o });
    let y = p?.info_label ?? (null != x ? Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(x) }) : void 0);
    return (0, a.jsx)(ec.A, {
        title: n,
        eyebrow: t,
        body: y,
        badgeImage: I,
        badgeName: r,
        variant: _ ? "nitro" : "default",
        isAnimated: T,
        shouldShow: m,
        onShow: A,
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
var ep = n(815996),
    eE = n(683063);
function eh(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(eE.u, {
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
    eA = n(425713),
    e_ = n(642481),
    eN = n(720879),
    eR = n(202541),
    ev = n(49999),
    ej = n(518477);
let eI = function (e) {
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
        p = (0, eA.I)(t).standard;
    (0, l.useEffect)(() => {
        (ex.m[ex.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
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
            badgeImage: p,
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
            props: { src: p, alt: f, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eN.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: ej.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(e_.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: E,
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
        l = (0, eA.I)(n.id).standard;
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
    eP = n(976860),
    eU = n(780964),
    eB = n(766075),
    eG = n(305003),
    ew = n(273875),
    ek = n(798618),
    eL = n(752079),
    eH = n(370277);
function eV(e) {
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
            (0, a.jsxs)(ew.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(e$, { showSubtext: s }), (0, a.jsx)(ek.F, {})],
            }),
        ],
    });
}
function e$(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)(eL.A, { className: eH.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(H.D, {
            variant: "heading-md/extrabold",
            className: eH.RK,
            children: Z.intl.string(Z.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(H.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eH.Qn,
                children: Z.intl.string(Z.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(x.E, { variant: "text-xs/normal", className: eH.lV, children: Z.intl.string(Z.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eF = n(174459),
    ez = n(474090),
    eX = n(439174),
    eK = n(47675),
    eY = n(999291),
    eW = n(874402),
    eq = n(652215),
    eZ = n(758836),
    eQ = n(854232),
    eJ = n(816645);
function e0(e) {
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
        $ = (0, E.A)(V, k),
        F = l.useRef(null),
        X = l.useRef(null),
        K = l.useRef(null),
        Y = l.useRef(null),
        W = l.useRef(!1),
        { analyticsLocations: q } = (0, D.Ay)(S.A.BADGE),
        { context: Q, trackUserProfileAction: J } = (0, z.NJ)(),
        et = f.default.getCurrentUser(),
        en = (0, ez.CC)(et?.premiumType, eR.PremiumTypes.TIER_2),
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
        eE = ed && H;
    function ex(e) {
        if ((U.A.setState({ isOpen: e }), !e)) {
            if (W.current) {
                W.current = !1;
                return;
            }
            requestAnimationFrame(() => Y.current?.focus());
        }
    }
    let eb = (0, eY.AP)(et?.id ?? null),
        eA = (0, m.A)(eb).some((e) => e.id === eG.A.ORB_PROFILE_BADGE),
        e_ = ed && !eu && 0 === r,
        eN = null;
    r > 0 &&
        ((eN = (0, a.jsx)(x.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: eJ.AX,
            "aria-hidden": !0,
            children: Z.intl.format(Z.t.n7CiSK, { count: r }),
        })),
        (t = Z.intl.formatToPlainString(Z.t.eIHfGZ, { overflow_count: r })));
    let ev = (0, a.jsxs)("div", {
        ref: $,
        className: p()(eJ.kL, ea && !0 !== L && eJ.Yq, ed && eJ.Tx, e_ && eJ.gK, d),
        ...(eu ? null : { "aria-label": Z.intl.string(Z.t.VWV0y5), role: "group" }),
        ...(ed && !eu ? { onClick: () => ex(!eE) } : null),
        children: [
            eu &&
                (0, a.jsx)(b.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: Y,
                        type: "button",
                        className: eJ.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eE,
                        onClick: (e) => {
                            (e.stopPropagation(), ex(!eE));
                        },
                        children: [
                            (0, a.jsx)(A.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
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
                let n = e.id === eG.A.ORB_PROFILE_BADGE,
                    l = (0, eX.e0)(e.id),
                    r = null != l || e.id === eQ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== eQ.K,
                    o = es?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, ej.L7)(e.icon),
                        className: p()(eJ.qS, null != o && eJ.Do, c),
                    }),
                    E = null != B && B(e.id),
                    x = {
                        onClick: (a) => {
                            if (
                                (J({ action: "PRESS_BADGE" }),
                                (0, eK.vP)({
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
                                    (0, eB.openUserSettings)(eU.X.GIFT_PANEL, { analyticsLocations: q }));
                                return;
                            }
                            if (n) {
                                ((0, ep.Cz)({
                                    tab: eZ.G2.ORBS,
                                    analyticsLocations: q,
                                    analyticsSource: S.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    g?.(),
                                    (0, _.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eF.default.track(eq.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: en,
                                        viewed_user_id: u?.userId,
                                    }),
                                    en)
                                ) {
                                    (ei
                                        ? ((0, eP.pX)(eq.BVt.NITRO_HOME), (0, _.closeAllModals)())
                                        : (0, eM.D)({ analyticsLocations: q, displayProfile: u }),
                                        g?.());
                                    return;
                                }
                                if (ei) {
                                    let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: q }) : null;
                                    if (null == t) return;
                                    return (g?.(), (0, _.closeAllModals)(), t(a));
                                }
                                return ((0, eM.D)({ analyticsLocations: q, displayProfile: u }), void g?.());
                            }
                            let s = null != e.link ? (0, T.default)(e.link, { analyticsLocations: q }) : null;
                            if (null != s) return (g?.(), (0, _.closeAllModals)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === m.h &&
                                (0, y.r)({
                                    type: C.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: eO.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                J({ action: "HOVER_BADGE" }),
                                (0, eK.vP)({
                                    badgeId: (0, O.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...Q,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ed ? { "aria-haspopup": "dialog", "aria-expanded": eE } : null),
                        style: { filter: G && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (ea)
                    return (0, a.jsx)(
                        em,
                        {
                            shouldShow: !eE,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ej.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...x, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...x, ref: F, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eI, {
                                badgeId: e.id,
                                targetElementRef: F,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eF.default.track(eq.HAw.TOOLTIP_VIEWED, {
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
                        eV,
                        {
                            targetElementRef: X,
                            delay: ej.In,
                            showSubtext: !eA && !e.isPreviewMode,
                            forceOpen: E,
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
                            delay: ej.In,
                            forceOpen: E,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, a.jsx)(N.Anchor, { ...x, children: d }),
                    A = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eQ.K
                            ? (0, a.jsx)(eD, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== eQ.K ? l : void 0 });
                return (0, a.jsx)(
                    R.m,
                    { __unsupportedReactNodeAsText: A, forceOpen: E, delay: ej.In, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (ec
                    ? (0, a.jsx)(b.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(eJ.$O, eJ.lv),
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
                    : (0, a.jsxs)("span", { className: eJ.$O, children: [(0, a.jsx)(v.A, { children: t }), eN] })),
            ed &&
                !eu &&
                (0, a.jsx)(R.m, {
                    text: Z.intl.string(Z.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: Y,
                    children: (0, a.jsx)(b.vN, {
                        children: (0, a.jsx)("button", {
                            ref: Y,
                            type: "button",
                            className: p()(eJ.r9, r > 0 ? eJ.v_ : eJ.Y5),
                            "aria-label": Z.intl.string(Z.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eE,
                            onClick: (e) => {
                                (e.stopPropagation(), ex(!eE));
                            },
                            children: (0, a.jsx)(j.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: eJ.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ed
        ? (0, a.jsx)(I.Y, {
              targetElementRef: eu && !eg ? V : w,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: eE,
              onRequestClose: (e) => {
                  let t = e?.target;
                  V.current?.contains(t) === !0 || (t?.closest(`[${eW.m}]`) == null && ex(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eo, { onClose: t, returnFocusRef: Y, skipReturnFocusRef: W });
              },
              children: () => ev,
          })
        : ev;
}
var e1 = n(996988);
let e8 = {
    [e1.d.POPOUT]: 12,
    [e1.d.MODAL]: 26,
    [e1.d.SIDEBAR]: 13,
    [e1.d.VIDEO_TILE_BACKGROUND]: 12,
    [e1.d.EMBED]: 12,
};
function e2(e) {
    let t,
        {
            displayProfile: n,
            themeType: g,
            isRedesignEnabled: p,
            pendingLegacyUsernameDisabled: E,
            pendingBadges: h,
            showPendingBadgeEdits: x = !1,
            onClose: b,
            shouldOpenBadgeTooltip: A,
            shouldGlowTenureBadge: _,
            popoutAnchorRef: N,
            containerRef: R,
        } = e,
        v = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        j = n?.userId,
        I = (0, s.bG)([f.default], () => null != j && f.default.getUser(j)?.bot === !0, [j]),
        T = (0, m.A)(n, E),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        S = (0, s.yK)([i.Ay], () => (x && null != j && i.Ay.hasCatalogFor(j) ? i.Ay.getBadges(j) : []), [x, j]),
        D = l.useMemo(() => {
            let e = T;
            if (null != h) {
                let t = new Set(T.map((e) => e.id));
                e = [...T, ...h.filter((e) => !t.has(e.id))];
            }
            return x ? (0, c.Rr)(e, S, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [T, h, x, S, y, C]);
    if (0 === D.length && !x) return null;
    let M = v && !I,
        O = M ? Math.max(D.length - d.k9, 0) : 0;
    return (
        (t = M
            ? [D.slice(0, d.k9)]
            : g === e1.d.MODAL_V2
              ? [D]
              : (0, r.chunk)(D, !0 === p && g === e1.d.SIDEBAR ? e8[e1.d.POPOUT] : e8[g])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e0,
                    {
                        badges: e,
                        overflowCount: O,
                        displayProfile: n,
                        onClose: b,
                        shouldOpenBadgeTooltip: A,
                        shouldGlowTenureBadge: _,
                        isTargetUserBot: I,
                        popoutAnchorRef: N,
                        containerRef: 0 === t ? R : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
