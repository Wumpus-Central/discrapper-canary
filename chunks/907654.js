n.d(t, { A: () => eV });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(17928),
    i = n(982240),
    o = n(234e3),
    d = n(836602);
function c() {
    return (0, s.cf)([d.A], () => {
        let e = d.A.getPendingChanges();
        return {
            pendingBadgeDisplayOrder: e.pendingBadgeDisplayOrder,
            pendingBadgeHiddenBadges: e.pendingBadgeHiddenBadges,
        };
    }, []);
}
var u = n(702841),
    f = n(885386),
    m = n(351906),
    g = n(287809),
    E = n(375708);
let p = "legacy_username";
function b(e, t) {
    let n = f.m$.useSetting(),
        a = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        l = (0, u.bG)([m.A], () => m.A.hidePersonalInformation);
    if (null == e) return [];
    let r = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (r = r.filter((e) => e.id !== p)),
        l && (r = r.map((e) => ({ ...e, description: e.id === p ? E.intl.string(E.t.Br1ls3) : e.description }))),
        r
    );
}
var h = n(503698),
    _ = n.n(h),
    x = n(192308),
    A = n(28863),
    v = n(866665),
    R = n(922016),
    N = n(983555),
    I = n(274670),
    j = n(144779),
    T = n(793574),
    y = n(688810),
    C = n(682618),
    S = n(992526),
    D = n(609782),
    M = n(643056);
let O = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var P = n(248284),
    U = n(365199),
    B = n(315710),
    k = n(297264),
    G = n(834730),
    w = n(821609),
    L = n(442433),
    H = n(450232),
    V = n(470739),
    $ = n(988341),
    F = n(494881);
function z(e) {
    let { badge: t, index: r, onClose: s } = e,
        [i, o] = l.useState(!1);
    function d(e) {
        o(!0),
            (0, L.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("787847").then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s });
                },
                { onClose: () => o(!1) },
            );
    }
    let c = E.intl.formatToPlainString(E.t.Ci7gvp, { badgeName: t.name, position: r + 1 });
    return (0, a.jsxs)("div", {
        className: _()(F.fw, i && F.HV),
        onContextMenu: d,
        children: [
            (0, a.jsx)("div", {
                className: F.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: F.pC,
                    }),
            }),
            (0, a.jsx)("button", {
                type: "button",
                className: F.lv,
                "aria-haspopup": "menu",
                "aria-expanded": i,
                "aria-label": c,
                onClick: d,
                children: (0, a.jsx)(U.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function X(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, B.tj)(n);
    let { fixedBadges: d, reorderableBadges: u } = (function () {
            let e = g.default.getCurrentUser()?.id,
                t = (0, s.yK)([i.Ay], () => (null == e ? [] : i.Ay.getBadges(e)), [e]),
                { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: a } = c();
            return l.useMemo(
                () => (0, $.Cw)((0, o.S0)(t, { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: a })),
                [t, n, a],
            );
        })(),
        f = [...d, ...u];
    return (0, a.jsxs)("div", {
        ref: n,
        className: F.SW,
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: F.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: F.$,
                        children: [
                            (0, a.jsx)(H.A, { size: "xs", className: F.oU }),
                            (0, a.jsx)(k.D, {
                                id: r,
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: E.intl.string(E.t.PXIyjF),
                            }),
                        ],
                    }),
                    (0, a.jsx)(G.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: E.intl.string(E.t.VHaYM7),
                    }),
                ],
            }),
            f.length > 0 &&
                (0, a.jsx)("div", {
                    className: F.yq,
                    role: "group",
                    "aria-label": E.intl.string(E.t.VWV0y5),
                    children: f.map((e, n) => (0, a.jsx)(z, { badge: e, index: n, onClose: t }, e.badge_id)),
                }),
            (0, a.jsx)(w.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: E.intl.string(E.t.fN2how),
                onClick: function () {
                    t(), (0, V._)({ viewingCurrentUserBadges: !0 });
                },
            }),
        ],
    });
}
var W = n(70283),
    K = n(775602),
    Y = n(461536),
    q = n(321191);
function Q(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: f, shouldShow: m } = e,
        g = (0, D.w0)(d),
        {
            badgeData: p,
            currentTier: b,
            obtainedAt: h,
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
        _ = (0, s.bG)([K.Ay], () => K.Ay.useReducedMotion),
        x = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, C.RS)(c);
        }, [c]),
        A = p?.badge_id === W.$.PREMIUM_TENURE,
        v = g === W.$.LEGACY_USERNAME,
        R = b?.name,
        N = A ? E.intl.string(E.t.Ipxkog) : (p?.name ?? u);
    A ? (r = n = null != R ? `${N} ${R}` : N) : null != R ? ((t = N), (n = R), (r = `${N} ${R}`)) : ((n = N), (r = N));
    let I = _ ? void 0 : p?.complex_icon_animated_url,
        j = I ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        T = null != I && j === I;
    if (v) return (0, a.jsx)(Z, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let y = p?.info_label ?? (null != h ? E.intl.formatToPlainString(E.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(Y.A, {
        title: n,
        eyebrow: t,
        body: y,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: T,
        shouldShow: m,
        onShow: x,
        children: o,
    });
}
function Z(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [q.A, m.A],
            () =>
                m.A.hidePersonalInformation
                    ? E.intl.string(E.t.Br1ls3)
                    : null != n
                      ? (q.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(Y.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var J = n(839534),
    ee = n(683063);
function et(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(ee.u, {
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
var en = n(116833),
    ea = n(704640),
    el = n(425713),
    er = n(642481),
    es = n(720879),
    ei = n(202541),
    eo = n(49999),
    ed = n(518477);
let ec = function (e) {
    let {
            badgeId: t = ei.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = ei.VD[t].nameUnformattedNitro,
        f = E.intl.string(u).toLocaleUpperCase(),
        m = ei.VD[t].rarity,
        g = (0, ea.A)(t),
        p = (0, el.I)(t).standard;
    (0, l.useEffect)(() => {
        en.m[en.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let b = (0, l.useCallback)(() => {
        n?.(eo.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(Y.A, {
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
            component: en.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(es.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: ed.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(er.A, {
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
var eu = n(592265);
let ef = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eu.R,
        children: [t, (0, a.jsx)("div", { className: eu.A, children: n }), l],
    });
};
var em = n(224016),
    eg = n(747278);
let eE = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, el.I)(n.id).standard;
    return (0, a.jsxs)(ef, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(em.A, { width: 56, className: eg.R }),
        children: [
            (0, a.jsx)(k.D, { variant: "heading-xl/extrabold", children: E.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(G.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eg.K,
                children: t.description,
            }),
        ],
    });
};
var ep = n(30084),
    eb = n(738822),
    eh = n(104886),
    e_ = n(590202),
    ex = n(976860),
    eA = n(305003),
    ev = n(273875),
    eR = n(798618),
    eN = n(752079),
    eI = n(370277);
function ej(e) {
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
            (0, a.jsxs)(ev.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eT, { showSubtext: s }), (0, a.jsx)(eR.F, {})],
            }),
        ],
    });
}
function eT(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ef, {
        assetComponent: (0, a.jsx)(eN.A, { className: eI.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(k.D, {
            variant: "heading-md/extrabold",
            className: eI.RK,
            children: E.intl.string(E.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(k.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eI.Qn,
                children: E.intl.string(E.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(G.E, { variant: "text-xs/normal", className: eI.lV, children: E.intl.string(E.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ey = n(174459),
    eC = n(474090),
    eS = n(439174),
    eD = n(183555),
    eM = n(47675),
    eO = n(999291),
    eP = n(874402),
    eU = n(652215),
    eB = n(758836),
    ek = n(854232),
    eG = n(816645);
function ew(e) {
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
        m = (0, P.A)((e) => e.isOpen),
        p = l.useRef(null),
        h = l.useRef(null),
        U = l.useRef(null),
        B = l.useRef(null),
        { analyticsLocations: k } = (0, y.Ay)(T.A.BADGE),
        { context: G, trackUserProfileAction: w } = (0, eD.NJ)(),
        L = g.default.getCurrentUser(),
        H = (0, eC.CC)(L?.premiumType, ei.PremiumTypes.TIER_2),
        $ = (0, S.J9)({ location: "UserProfileBadgeList" }),
        F = (0, M.d)({ location: "UserProfileBadgeList" }),
        z = (function (e) {
            let { location: t } = e;
            return O.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        ($ || z) && o?.userId != null && !i.Ay.hasCatalogFor(o.userId) && (0, C.RS)(o.userId);
    }, [$, z, o?.userId]);
    let W = o?.userId,
        K = (0, s.bG)([i.Ay], () => {
            if (!z || null == W) return null;
            let e = {};
            for (let n of t) {
                let t = (0, D.w0)(n.id);
                if (null == t) continue;
                let a = i.Ay.getBadgeById(t, W)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [z, W, t]),
        Y = o?.userId === L?.id,
        q = Y && $ && F && null != f,
        Z = q && m;
    function ee(e) {
        P.A.setState({ isOpen: e });
    }
    let en = b((0, eO.AP)(L?.id ?? null)).some((e) => e.id === eA.A.ORB_PROFILE_BADGE),
        ea = (0, a.jsx)("div", {
            ref: p,
            className: _()(eG.kL, F && eG.Yq, q && eG.Tx, n),
            "aria-label": E.intl.string(E.t.VWV0y5),
            role: "group",
            ...(q ? { onClick: () => ee(!Z) } : null),
            children: t.map((e, t) => {
                let n = e.id === eA.A.ORB_PROFILE_BADGE,
                    l = (0, eS.e0)(e.id),
                    s = null != l || e.id === ek.K,
                    i = "april_fools_2026" === e.id,
                    f = void 0 !== l && e.id !== ek.K,
                    m = K?.[e.id],
                    E = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? m ?? (0, ed.L7)(e.icon),
                        className: _()(eG.qS, null != m && eG.Do, r),
                    }),
                    p = null != c && c(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (w({ action: "PRESS_BADGE" }),
                                (0, eM.vP)({
                                    badgeId: (0, D.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: k,
                                    ...G,
                                }),
                                q)
                            )
                                return void a.preventDefault();
                            let l = o?.userId != null ? g.default.getUser(o.userId) : null;
                            if ($ && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, V._)({
                                        initialBadgeId: (0, D.w0)(e.id),
                                        targetUserId: o?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, J.Cz)({
                                    tab: eB.G2.ORBS,
                                    analyticsLocations: k,
                                    analyticsSource: T.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    d?.(),
                                    (0, x.closeAllModals)();
                                return;
                            }
                            if (s) {
                                if (
                                    (a.preventDefault(),
                                    ey.default.track(eU.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: H,
                                        viewed_user_id: o?.userId,
                                    }),
                                    H)
                                ) {
                                    Y
                                        ? ((0, ex.pX)(eU.BVt.NITRO_HOME), (0, x.closeAllModals)())
                                        : (0, ep.D)({ analyticsLocations: k, displayProfile: o }),
                                        d?.();
                                    return;
                                }
                                if (Y) {
                                    let t = null != e.link ? (0, N.default)(e.link, { analyticsLocations: k }) : null;
                                    if (null == t) return;
                                    return d?.(), (0, x.closeAllModals)(), t(a);
                                }
                                return (0, ep.D)({ analyticsLocations: k, displayProfile: o }), void d?.();
                            }
                            let r = null != e.link ? (0, N.default)(e.link, { analyticsLocations: k }) : null;
                            if (null != r) return d?.(), (0, x.closeAllModals)(), r(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, eh.E5)(eh.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, I.r)({
                                          type: j.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eb.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : ey.default.track(eU.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, e_.fF)(eb.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                w({ action: "HOVER_BADGE" }),
                                (0, eM.vP)({
                                    badgeId: (0, D.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: k,
                                    ...G,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(q ? { "aria-haspopup": "dialog", "aria-expanded": Z } : null),
                        style: { filter: u && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if ($)
                    return (0, a.jsx)(
                        Q,
                        {
                            shouldShow: !Z,
                            legacyBadgeId: e.id,
                            userId: o?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ed.L7)(e.icon),
                            children: (0, a.jsx)(A.Anchor, { ...b, children: E }),
                        },
                        `${e.id}-${t}`,
                    );
                if (f) {
                    let n = (0, a.jsx)(A.Anchor, { ...b, ref: h, children: E });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(ec, {
                                badgeId: e.id,
                                targetElementRef: h,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    ey.default.track(eU.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (Y ? "self" : "other"),
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
                    let n = (0, a.jsx)(A.Anchor, { ...b, ref: U, children: E });
                    return (0, a.jsx)(
                        ej,
                        {
                            targetElementRef: U,
                            delay: ed.In,
                            showSubtext: !en && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (i) {
                    let n = (0, a.jsx)(A.Anchor, { ...b, ref: B, children: E });
                    return (0, a.jsx)(
                        et,
                        {
                            targetElementRef: B,
                            delay: ed.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let R = (0, a.jsx)(A.Anchor, { ...b, children: E }),
                    y = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== ek.K
                            ? (0, a.jsx)(eE, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: s && e.id !== ek.K ? l : void 0 });
                return (0, a.jsx)(
                    v.m,
                    { __unsupportedReactNodeAsText: y, forceOpen: p, delay: ed.In, ariaHidden: !0, children: R },
                    `${e.id}-${t}`,
                );
            }),
        });
    return q
        ? (0, a.jsx)(R.Y, {
              targetElementRef: f,
              position: "bottom",
              align: "left",
              spacing: 4,
              scrollBehavior: "close",
              shouldShow: Z,
              onRequestClose: (e) => {
                  let t = e?.target;
                  p.current?.contains(t) === !0 || (t?.closest(`[${eP.m}]`) == null && ee(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(X, { onClose: t });
              },
              children: () => ea,
          })
        : ea;
}
var eL = n(996988);
let eH = {
    [eL.d.POPOUT]: 12,
    [eL.d.MODAL]: 26,
    [eL.d.SIDEBAR]: 13,
    [eL.d.VIDEO_TILE_BACKGROUND]: 12,
    [eL.d.EMBED]: 12,
};
function eV(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: d,
            pendingLegacyUsernameDisabled: u,
            pendingBadges: f,
            showPendingBadgeEdits: m = !1,
            onClose: g,
            shouldOpenBadgeTooltip: E,
            shouldGlowTenureBadge: p,
            popoutAnchorRef: h,
        } = e,
        _ = b(t, u),
        x = t?.userId,
        { pendingBadgeDisplayOrder: A, pendingBadgeHiddenBadges: v } = c(),
        R = (0, s.yK)([i.Ay], () => (m && null != x && i.Ay.hasCatalogFor(x) ? i.Ay.getBadges(x) : []), [m, x]),
        N = l.useMemo(() => {
            let e = _;
            if (null != f) {
                let t = new Set(_.map((e) => e.id));
                e = [..._, ...f.filter((e) => !t.has(e.id))];
            }
            return m ? (0, o.Rr)(e, R, { pendingBadgeDisplayOrder: A, pendingBadgeHiddenBadges: v }) : e;
        }, [_, f, m, R, A, v]);
    if (0 === N.length && !m) return null;
    let I = n === eL.d.MODAL_V2 ? [N] : (0, r.chunk)(N, !0 === d && n === eL.d.SIDEBAR ? eH[eL.d.POPOUT] : eH[n]);
    return (0, a.jsx)(a.Fragment, {
        children: I.map((e, n) =>
            (0, a.jsx)(
                ew,
                {
                    badges: e,
                    displayProfile: t,
                    onClose: g,
                    shouldOpenBadgeTooltip: E,
                    shouldGlowTenureBadge: p,
                    popoutAnchorRef: h,
                },
                n,
            ),
        ),
    });
}
