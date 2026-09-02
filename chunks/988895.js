n.d(t, { A: () => eY });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(17928),
    i = n(982240),
    o = n(234e3),
    d = n(555149),
    c = n(702841),
    u = n(885386),
    f = n(351906),
    m = n(287809),
    g = n(375708);
let E = "legacy_username";
function p(e, t) {
    let n = u.m$.useSetting(),
        a = (0, c.bG)([m.default], () => m.default.getCurrentUser()),
        l = (0, c.bG)([f.A], () => f.A.hidePersonalInformation);
    if (null == e) return [];
    let r = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (r = r.filter((e) => e.id !== E)),
        l && (r = r.map((e) => ({ ...e, description: e.id === E ? g.intl.string(g.t.Br1ls3) : e.description }))),
        r
    );
}
var b = n(503698),
    h = n.n(b),
    x = n(192308),
    _ = n(28863),
    A = n(866665),
    v = n(922016),
    R = n(983555),
    N = n(274670),
    I = n(144779),
    j = n(793574),
    T = n(688810),
    y = n(682618),
    C = n(992526),
    S = n(609782),
    D = n(643056);
let M = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var P = n(248284),
    O = n(686246),
    U = n(425763),
    B = n(952270),
    G = n(365199),
    k = n(315710),
    w = n(297264),
    L = n(834730),
    H = n(821609),
    V = n(442433),
    $ = n(450232),
    F = n(451395),
    z = n(327791),
    X = n(470739),
    K = n(577931),
    W = n(494881);
let Y = "BADGE";
function q(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, U.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(F.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: "PROFILE_BADGES",
        itemType: Y,
        "aria-label": g.intl.formatToPlainString(g.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: W.oE,
        draggingClassName: W.Id,
        dropBeforeClassName: W.A,
        dropAfterClassName: W.Ze,
        children: [
            (0, a.jsx)(Q, { ...r }),
            (0, a.jsx)(F.jV, {
                buttonRef: d,
                className: W.BU,
                "aria-label": g.intl.formatToPlainString(g.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function Q(e) {
    let { badge: t, index: r, onClose: s, onUnhide: i } = e,
        [o, d] = l.useState(!1);
    function c(e) {
        d(!0),
            (0, V.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("918024"), n.e("787847")]).then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s });
                },
                { onClose: () => d(!1) },
            );
    }
    let u = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: h()(W.fw, o && W.HV),
        onContextMenu: u ? void 0 : c,
        children: [
            (0, a.jsx)("div", {
                className: W.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: h()(W.pC, u && W.jx),
                    }),
            }),
            u
                ? (0, a.jsx)(A.m, {
                      position: "top",
                      text: g.intl.string(g.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          type: "button",
                          className: W.KJ,
                          "aria-label": g.intl.formatToPlainString(g.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => i?.(t),
                          children: (0, a.jsx)(B.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      type: "button",
                      className: W.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": o,
                      "aria-label": g.intl.formatToPlainString(g.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: c,
                      children: (0, a.jsx)(G.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function Z() {
    let e = (0, U.VU)(),
        { badge: t, sourceClientOffset: n } = (0, O.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === Y ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: W.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: W.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: W.pC,
                }),
        }),
    });
}
function J(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, k.tj)(n);
    let { fixedBadges: s, reorderableBadges: i, hiddenBadges: d } = (0, K.A)(),
        c = (0, z.A)(),
        u = l.useMemo(() => i.map((e) => e.badge_id), [i]);
    function f(e) {
        (0, o.RC)({
            badgeId: e.badge_id,
            hidden: !1,
            reorderableBadgeIds: u,
            hiddenBadgeIds: d.map((e) => {
                let { badge_id: t } = e;
                return t;
            }),
            canReorder: c,
        });
    }
    let m = s.length + i.length + d.length;
    function E(e, t) {
        (0, o.hB)((0, o.i1)(u, e, t));
    }
    return (0, a.jsxs)("div", {
        ref: n,
        className: W.SW,
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: W.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: W.$,
                        children: [
                            (0, a.jsx)($.A, { size: "xs", className: W.oU }),
                            (0, a.jsx)(w.D, {
                                id: r,
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: g.intl.string(g.t.PXIyjF),
                            }),
                        ],
                    }),
                    (0, a.jsx)(L.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: g.intl.string(g.t.VHaYM7),
                    }),
                ],
            }),
            m > 0 &&
                (0, a.jsxs)("div", {
                    className: W.yq,
                    role: "group",
                    "aria-label": g.intl.string(g.t.VWV0y5),
                    children: [
                        s.map((e, n) => (0, a.jsx)(Q, { badge: e, index: n, onClose: t, onUnhide: f }, e.badge_id)),
                        i.map((e, n) =>
                            c
                                ? (0, a.jsx)(
                                      q,
                                      { badge: e, index: s.length + n, onClose: t, reorderableIndex: n, onReorder: E },
                                      e.badge_id,
                                  )
                                : (0, a.jsx)(Q, { badge: e, index: s.length + n, onClose: t }, e.badge_id),
                        ),
                        d.map((e, n) =>
                            (0, a.jsx)(
                                Q,
                                { badge: e, index: s.length + i.length + n, onClose: t, onUnhide: f },
                                e.badge_id,
                            ),
                        ),
                    ],
                }),
            (0, a.jsx)(Z, {}),
            (0, a.jsx)(H.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: g.intl.string(g.t.fN2how),
                onClick: function () {
                    t(), (0, X._)({ viewingCurrentUserBadges: !0 });
                },
            }),
        ],
    });
}
var ee = n(70283),
    et = n(775602),
    en = n(461536),
    ea = n(321191);
function el(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: f, shouldShow: m } = e,
        E = (0, S.w0)(d),
        {
            badgeData: p,
            currentTier: b,
            obtainedAt: h,
        } = (0, s.cf)(
            [i.Ay],
            () =>
                null == E || null == c
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: i.Ay.getBadgeById(E, c),
                          currentTier: i.Ay.getCurrentTier(E, c),
                          obtainedAt: i.Ay.getObtainedAt(E, c),
                      },
            [E, c],
        ),
        x = (0, s.bG)([et.Ay], () => et.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, y.RS)(c);
        }, [c]),
        A = p?.badge_id === ee.$.PREMIUM_TENURE,
        v = E === ee.$.LEGACY_USERNAME,
        R = b?.name,
        N = A ? g.intl.string(g.t.Ipxkog) : (p?.name ?? u);
    A ? (r = n = null != R ? `${N} ${R}` : N) : null != R ? ((t = N), (n = R), (r = `${N} ${R}`)) : ((n = N), (r = N));
    let I = x ? void 0 : p?.complex_icon_animated_url,
        j = I ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        T = null != I && j === I;
    if (v) return (0, a.jsx)(er, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let C = p?.info_label ?? (null != h ? g.intl.formatToPlainString(g.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(en.A, {
        title: n,
        eyebrow: t,
        body: C,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: T,
        shouldShow: m,
        onShow: _,
        children: o,
    });
}
function er(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [ea.A, f.A],
            () =>
                f.A.hidePersonalInformation
                    ? g.intl.string(g.t.Br1ls3)
                    : null != n
                      ? (ea.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(en.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var es = n(839534),
    ei = n(683063);
function eo(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(ei.u, {
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
var ed = n(116833),
    ec = n(704640),
    eu = n(425713),
    ef = n(642481),
    em = n(720879),
    eg = n(202541),
    eE = n(49999),
    ep = n(518477);
let eb = function (e) {
    let {
            badgeId: t = eg.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eg.VD[t].nameUnformattedNitro,
        f = g.intl.string(u).toLocaleUpperCase(),
        m = eg.VD[t].rarity,
        E = (0, ec.A)(t),
        p = (0, eu.I)(t).standard;
    (0, l.useEffect)(() => {
        ed.m[ed.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let b = (0, l.useCallback)(() => {
        n?.(eE.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(en.A, {
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
        gradientColor: E,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ed.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(em.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: ep.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(ef.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: b,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...h,
                  }),
              ],
          });
};
var eh = n(592265);
let ex = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eh.R,
        children: [t, (0, a.jsx)("div", { className: eh.A, children: n }), l],
    });
};
var e_ = n(224016),
    eA = n(747278);
let ev = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, eu.I)(n.id).standard;
    return (0, a.jsxs)(ex, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(e_.A, { width: 56, className: eA.R }),
        children: [
            (0, a.jsx)(w.D, { variant: "heading-xl/extrabold", children: g.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(L.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eA.K,
                children: t.description,
            }),
        ],
    });
};
var eR = n(30084),
    eN = n(738822),
    eI = n(104886),
    ej = n(590202),
    eT = n(976860),
    ey = n(305003),
    eC = n(273875),
    eS = n(798618),
    eD = n(752079),
    eM = n(370277);
function eP(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let f = l.useCallback(() => {
        u(),
            (c.current = window.setTimeout(() => {
                (c.current = null), d(!0);
            }, r));
    }, [r, u]);
    l.useEffect(() => {
        i && !o && f();
    }, [i, o, f]);
    let m = l.useCallback(() => {
            f();
        }, [f]),
        g = l.useCallback(() => {
            u(), d(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eC.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eO, { showSubtext: s }), (0, a.jsx)(eS.F, {})],
            }),
        ],
    });
}
function eO(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ex, {
        assetComponent: (0, a.jsx)(eD.A, { className: eM.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(w.D, {
            variant: "heading-md/extrabold",
            className: eM.RK,
            children: g.intl.string(g.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(w.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eM.Qn,
                children: g.intl.string(g.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(L.E, { variant: "text-xs/normal", className: eM.lV, children: g.intl.string(g.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eU = n(174459),
    eB = n(474090),
    eG = n(439174),
    ek = n(183555),
    ew = n(47675),
    eL = n(999291),
    eH = n(874402),
    eV = n(652215),
    e$ = n(758836),
    eF = n(854232),
    ez = n(816645);
function eX(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: r,
            displayProfile: o,
            onClose: d,
            shouldOpenBadgeTooltip: c,
            shouldGlowTenureBadge: u,
            popoutAnchorRef: f,
        } = e,
        E = (0, P.A)((e) => e.isOpen),
        b = l.useRef(null),
        O = l.useRef(null),
        U = l.useRef(null),
        B = l.useRef(null),
        { analyticsLocations: G } = (0, T.Ay)(j.A.BADGE),
        { context: k, trackUserProfileAction: w } = (0, ek.NJ)(),
        L = m.default.getCurrentUser(),
        H = (0, eB.CC)(L?.premiumType, eg.PremiumTypes.TIER_2),
        V = (0, C.J9)({ location: "UserProfileBadgeList" }),
        $ = (0, D.d)({ location: "UserProfileBadgeList" }),
        F = (function (e) {
            let { location: t } = e;
            return M.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (V || F) && o?.userId != null && !i.Ay.hasCatalogFor(o.userId) && (0, y.RS)(o.userId);
    }, [V, F, o?.userId]);
    let z = o?.userId,
        K = (0, s.bG)([i.Ay], () => {
            if (!F || null == z) return null;
            let e = {};
            for (let n of t) {
                let t = (0, S.w0)(n.id);
                if (null == t) continue;
                let a = i.Ay.getBadgeById(t, z)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [F, z, t]),
        W = o?.userId === L?.id,
        Y = W && V && $ && null != f,
        q = Y && E;
    function Q(e) {
        P.A.setState({ isOpen: e });
    }
    let Z = p((0, eL.AP)(L?.id ?? null)).some((e) => e.id === ey.A.ORB_PROFILE_BADGE),
        ee = (0, a.jsx)("div", {
            ref: b,
            className: h()(ez.kL, $ && ez.Yq, Y && ez.Tx, n),
            "aria-label": g.intl.string(g.t.VWV0y5),
            role: "group",
            ...(Y ? { onClick: () => Q(!q) } : null),
            children: t.map((e, t) => {
                let n = e.id === ey.A.ORB_PROFILE_BADGE,
                    l = (0, eG.e0)(e.id),
                    s = null != l || e.id === eF.K,
                    i = "april_fools_2026" === e.id,
                    f = void 0 !== l && e.id !== eF.K,
                    g = K?.[e.id],
                    E = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? g ?? (0, ep.L7)(e.icon),
                        className: h()(ez.qS, null != g && ez.Do, r),
                    }),
                    p = null != c && c(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (w({ action: "PRESS_BADGE" }),
                                (0, ew.vP)({
                                    badgeId: (0, S.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: G,
                                    ...k,
                                }),
                                Y)
                            )
                                return void a.preventDefault();
                            let l = o?.userId != null ? m.default.getUser(o.userId) : null;
                            if (V && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, X._)({
                                        initialBadgeId: (0, S.w0)(e.id),
                                        targetUserId: o?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, es.Cz)({
                                    tab: e$.G2.ORBS,
                                    analyticsLocations: G,
                                    analyticsSource: j.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    d?.(),
                                    (0, x.closeAllModals)();
                                return;
                            }
                            if (s) {
                                if (
                                    (a.preventDefault(),
                                    eU.default.track(eV.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: H,
                                        viewed_user_id: o?.userId,
                                    }),
                                    H)
                                ) {
                                    W
                                        ? ((0, eT.pX)(eV.BVt.NITRO_HOME), (0, x.closeAllModals)())
                                        : (0, eR.D)({ analyticsLocations: G, displayProfile: o }),
                                        d?.();
                                    return;
                                }
                                if (W) {
                                    let t = null != e.link ? (0, R.default)(e.link, { analyticsLocations: G }) : null;
                                    if (null == t) return;
                                    return d?.(), (0, x.closeAllModals)(), t(a);
                                }
                                return (0, eR.D)({ analyticsLocations: G, displayProfile: o }), void d?.();
                            }
                            let r = null != e.link ? (0, R.default)(e.link, { analyticsLocations: G }) : null;
                            if (null != r) return d?.(), (0, x.closeAllModals)(), r(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, eI.E5)(eI.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, N.r)({
                                          type: I.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eN.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eU.default.track(eV.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, ej.fF)(eN.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                w({ action: "HOVER_BADGE" }),
                                (0, ew.vP)({
                                    badgeId: (0, S.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: G,
                                    ...k,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(Y ? { "aria-haspopup": "dialog", "aria-expanded": q } : null),
                        style: { filter: u && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (V)
                    return (0, a.jsx)(
                        el,
                        {
                            shouldShow: !q,
                            legacyBadgeId: e.id,
                            userId: o?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ep.L7)(e.icon),
                            children: (0, a.jsx)(_.Anchor, { ...b, children: E }),
                        },
                        `${e.id}-${t}`,
                    );
                if (f) {
                    let n = (0, a.jsx)(_.Anchor, { ...b, ref: O, children: E });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eb, {
                                badgeId: e.id,
                                targetElementRef: O,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eU.default.track(eV.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (W ? "self" : "other"),
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
                    let n = (0, a.jsx)(_.Anchor, { ...b, ref: U, children: E });
                    return (0, a.jsx)(
                        eP,
                        {
                            targetElementRef: U,
                            delay: ep.In,
                            showSubtext: !Z && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (i) {
                    let n = (0, a.jsx)(_.Anchor, { ...b, ref: B, children: E });
                    return (0, a.jsx)(
                        eo,
                        {
                            targetElementRef: B,
                            delay: ep.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let v = (0, a.jsx)(_.Anchor, { ...b, children: E }),
                    T = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eF.K
                            ? (0, a.jsx)(ev, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: s && e.id !== eF.K ? l : void 0 });
                return (0, a.jsx)(
                    A.m,
                    { __unsupportedReactNodeAsText: T, forceOpen: p, delay: ep.In, ariaHidden: !0, children: v },
                    `${e.id}-${t}`,
                );
            }),
        });
    return Y
        ? (0, a.jsx)(v.Y, {
              targetElementRef: f,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${t.length}`,
              scrollBehavior: "close",
              shouldShow: q,
              onRequestClose: (e) => {
                  let t = e?.target;
                  b.current?.contains(t) === !0 || (t?.closest(`[${eH.m}]`) == null && Q(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(J, { onClose: t });
              },
              children: () => ee,
          })
        : ee;
}
var eK = n(996988);
let eW = {
    [eK.d.POPOUT]: 12,
    [eK.d.MODAL]: 26,
    [eK.d.SIDEBAR]: 13,
    [eK.d.VIDEO_TILE_BACKGROUND]: 12,
    [eK.d.EMBED]: 12,
};
function eY(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: c,
            pendingLegacyUsernameDisabled: u,
            pendingBadges: f,
            showPendingBadgeEdits: m = !1,
            onClose: g,
            shouldOpenBadgeTooltip: E,
            shouldGlowTenureBadge: b,
            popoutAnchorRef: h,
        } = e,
        x = p(t, u),
        _ = t?.userId,
        { pendingBadgeDisplayOrder: A, pendingBadgeHiddenBadges: v } = (0, d.A)(),
        R = (0, s.yK)([i.Ay], () => (m && null != _ && i.Ay.hasCatalogFor(_) ? i.Ay.getBadges(_) : []), [m, _]),
        N = l.useMemo(() => {
            let e = x;
            if (null != f) {
                let t = new Set(x.map((e) => e.id));
                e = [...x, ...f.filter((e) => !t.has(e.id))];
            }
            return m ? (0, o.Rr)(e, R, { pendingBadgeDisplayOrder: A, pendingBadgeHiddenBadges: v }) : e;
        }, [x, f, m, R, A, v]);
    if (0 === N.length && !m) return null;
    let I = n === eK.d.MODAL_V2 ? [N] : (0, r.chunk)(N, !0 === c && n === eK.d.SIDEBAR ? eW[eK.d.POPOUT] : eW[n]);
    return (0, a.jsx)(a.Fragment, {
        children: I.map((e, n) =>
            (0, a.jsx)(
                eX,
                {
                    badges: e,
                    displayProfile: t,
                    onClose: g,
                    shouldOpenBadgeTooltip: E,
                    shouldGlowTenureBadge: b,
                    popoutAnchorRef: h,
                },
                n,
            ),
        ),
    });
}
