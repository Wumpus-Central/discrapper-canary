n.d(t, { A: () => e$ });
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
    _ = n(192308),
    A = n(28863),
    x = n(866665),
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
var O = n(248284),
    P = n(952270),
    U = n(365199),
    B = n(315710),
    G = n(297264),
    k = n(834730),
    w = n(821609),
    L = n(442433),
    H = n(450232),
    V = n(327791),
    $ = n(470739),
    F = n(577931),
    z = n(494881);
function X(e) {
    let { badge: t, index: r, onClose: s, onUnhide: i } = e,
        [o, d] = l.useState(!1);
    function c(e) {
        d(!0),
            (0, L.L3)(
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
        className: h()(z.fw, o && z.HV),
        onContextMenu: u ? void 0 : c,
        children: [
            (0, a.jsx)("div", {
                className: z.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: h()(z.pC, u && z.jx),
                    }),
            }),
            u
                ? (0, a.jsx)(x.m, {
                      position: "top",
                      text: g.intl.string(g.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          type: "button",
                          className: z.KJ,
                          "aria-label": g.intl.formatToPlainString(g.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => i(t),
                          children: (0, a.jsx)(P.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      type: "button",
                      className: z.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": o,
                      "aria-label": g.intl.formatToPlainString(g.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: c,
                      children: (0, a.jsx)(U.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function K(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, B.tj)(n);
    let { fixedBadges: s, reorderableBadges: i, hiddenBadges: d } = (0, F.A)(),
        c = (0, V.A)();
    function u(e) {
        (0, o.RC)({
            badgeId: e.badge_id,
            hidden: !1,
            reorderableBadgeIds: i.map((e) => {
                let { badge_id: t } = e;
                return t;
            }),
            hiddenBadgeIds: d.map((e) => {
                let { badge_id: t } = e;
                return t;
            }),
            canReorder: c,
        });
    }
    let f = [...s, ...i, ...d];
    return (0, a.jsxs)("div", {
        ref: n,
        className: z.SW,
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: z.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: z.$,
                        children: [
                            (0, a.jsx)(H.A, { size: "xs", className: z.oU }),
                            (0, a.jsx)(G.D, {
                                id: r,
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: g.intl.string(g.t.PXIyjF),
                            }),
                        ],
                    }),
                    (0, a.jsx)(k.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: g.intl.string(g.t.VHaYM7),
                    }),
                ],
            }),
            f.length > 0 &&
                (0, a.jsx)("div", {
                    className: z.yq,
                    role: "group",
                    "aria-label": g.intl.string(g.t.VWV0y5),
                    children: f.map((e, n) =>
                        (0, a.jsx)(X, { badge: e, index: n, onClose: t, onUnhide: u }, e.badge_id),
                    ),
                }),
            (0, a.jsx)(w.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: g.intl.string(g.t.fN2how),
                onClick: function () {
                    t(), (0, $._)({ viewingCurrentUserBadges: !0 });
                },
            }),
        ],
    });
}
var W = n(70283),
    Y = n(775602),
    q = n(461536),
    Q = n(321191);
function Z(e) {
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
        _ = (0, s.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        A = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, y.RS)(c);
        }, [c]),
        x = p?.badge_id === W.$.PREMIUM_TENURE,
        v = E === W.$.LEGACY_USERNAME,
        R = b?.name,
        N = x ? g.intl.string(g.t.Ipxkog) : (p?.name ?? u);
    x ? (r = n = null != R ? `${N} ${R}` : N) : null != R ? ((t = N), (n = R), (r = `${N} ${R}`)) : ((n = N), (r = N));
    let I = _ ? void 0 : p?.complex_icon_animated_url,
        j = I ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        T = null != I && j === I;
    if (v) return (0, a.jsx)(J, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let C = p?.info_label ?? (null != h ? g.intl.formatToPlainString(g.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(q.A, {
        title: n,
        eyebrow: t,
        body: C,
        badgeImage: j,
        badgeName: r,
        variant: x ? "nitro" : "default",
        isAnimated: T,
        shouldShow: m,
        onShow: A,
        children: o,
    });
}
function J(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [Q.A, f.A],
            () =>
                f.A.hidePersonalInformation
                    ? g.intl.string(g.t.Br1ls3)
                    : null != n
                      ? (Q.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(q.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var ee = n(839534),
    et = n(683063);
function en(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(et.u, {
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
var ea = n(116833),
    el = n(704640),
    er = n(425713),
    es = n(642481),
    ei = n(720879),
    eo = n(202541),
    ed = n(49999),
    ec = n(518477);
let eu = function (e) {
    let {
            badgeId: t = eo.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eo.VD[t].nameUnformattedNitro,
        f = g.intl.string(u).toLocaleUpperCase(),
        m = eo.VD[t].rarity,
        E = (0, el.A)(t),
        p = (0, er.I)(t).standard;
    (0, l.useEffect)(() => {
        ea.m[ea.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let b = (0, l.useCallback)(() => {
        n?.(ed.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(q.A, {
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
            component: ea.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(ei.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: ec.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(es.A, {
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
var ef = n(592265);
let em = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: ef.R,
        children: [t, (0, a.jsx)("div", { className: ef.A, children: n }), l],
    });
};
var eg = n(224016),
    eE = n(747278);
let ep = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, er.I)(n.id).standard;
    return (0, a.jsxs)(em, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eg.A, { width: 56, className: eE.R }),
        children: [
            (0, a.jsx)(G.D, { variant: "heading-xl/extrabold", children: g.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(k.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eE.K,
                children: t.description,
            }),
        ],
    });
};
var eb = n(30084),
    eh = n(738822),
    e_ = n(104886),
    eA = n(590202),
    ex = n(976860),
    ev = n(305003),
    eR = n(273875),
    eN = n(798618),
    eI = n(752079),
    ej = n(370277);
function eT(e) {
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
            (0, a.jsxs)(eR.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(ey, { showSubtext: s }), (0, a.jsx)(eN.F, {})],
            }),
        ],
    });
}
function ey(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(em, {
        assetComponent: (0, a.jsx)(eI.A, { className: ej.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(G.D, {
            variant: "heading-md/extrabold",
            className: ej.RK,
            children: g.intl.string(g.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(G.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ej.Qn,
                children: g.intl.string(g.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(k.E, { variant: "text-xs/normal", className: ej.lV, children: g.intl.string(g.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eC = n(174459),
    eS = n(474090),
    eD = n(439174),
    eM = n(183555),
    eO = n(47675),
    eP = n(999291),
    eU = n(874402),
    eB = n(652215),
    eG = n(758836),
    ek = n(854232),
    ew = n(816645);
function eL(e) {
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
        E = (0, O.A)((e) => e.isOpen),
        b = l.useRef(null),
        P = l.useRef(null),
        U = l.useRef(null),
        B = l.useRef(null),
        { analyticsLocations: G } = (0, T.Ay)(j.A.BADGE),
        { context: k, trackUserProfileAction: w } = (0, eM.NJ)(),
        L = m.default.getCurrentUser(),
        H = (0, eS.CC)(L?.premiumType, eo.PremiumTypes.TIER_2),
        V = (0, C.J9)({ location: "UserProfileBadgeList" }),
        F = (0, D.d)({ location: "UserProfileBadgeList" }),
        z = (function (e) {
            let { location: t } = e;
            return M.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (V || z) && o?.userId != null && !i.Ay.hasCatalogFor(o.userId) && (0, y.RS)(o.userId);
    }, [V, z, o?.userId]);
    let X = o?.userId,
        W = (0, s.bG)([i.Ay], () => {
            if (!z || null == X) return null;
            let e = {};
            for (let n of t) {
                let t = (0, S.w0)(n.id);
                if (null == t) continue;
                let a = i.Ay.getBadgeById(t, X)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [z, X, t]),
        Y = o?.userId === L?.id,
        q = Y && V && F && null != f,
        Q = q && E;
    function J(e) {
        O.A.setState({ isOpen: e });
    }
    let et = p((0, eP.AP)(L?.id ?? null)).some((e) => e.id === ev.A.ORB_PROFILE_BADGE),
        ea = (0, a.jsx)("div", {
            ref: b,
            className: h()(ew.kL, F && ew.Yq, q && ew.Tx, n),
            "aria-label": g.intl.string(g.t.VWV0y5),
            role: "group",
            ...(q ? { onClick: () => J(!Q) } : null),
            children: t.map((e, t) => {
                let n = e.id === ev.A.ORB_PROFILE_BADGE,
                    l = (0, eD.e0)(e.id),
                    s = null != l || e.id === ek.K,
                    i = "april_fools_2026" === e.id,
                    f = void 0 !== l && e.id !== ek.K,
                    g = W?.[e.id],
                    E = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? g ?? (0, ec.L7)(e.icon),
                        className: h()(ew.qS, null != g && ew.Do, r),
                    }),
                    p = null != c && c(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (w({ action: "PRESS_BADGE" }),
                                (0, eO.vP)({
                                    badgeId: (0, S.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: G,
                                    ...k,
                                }),
                                q)
                            )
                                return void a.preventDefault();
                            let l = o?.userId != null ? m.default.getUser(o.userId) : null;
                            if (V && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, $._)({
                                        initialBadgeId: (0, S.w0)(e.id),
                                        targetUserId: o?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, ee.Cz)({
                                    tab: eG.G2.ORBS,
                                    analyticsLocations: G,
                                    analyticsSource: j.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    d?.(),
                                    (0, _.closeAllModals)();
                                return;
                            }
                            if (s) {
                                if (
                                    (a.preventDefault(),
                                    eC.default.track(eB.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: H,
                                        viewed_user_id: o?.userId,
                                    }),
                                    H)
                                ) {
                                    Y
                                        ? ((0, ex.pX)(eB.BVt.NITRO_HOME), (0, _.closeAllModals)())
                                        : (0, eb.D)({ analyticsLocations: G, displayProfile: o }),
                                        d?.();
                                    return;
                                }
                                if (Y) {
                                    let t = null != e.link ? (0, R.default)(e.link, { analyticsLocations: G }) : null;
                                    if (null == t) return;
                                    return d?.(), (0, _.closeAllModals)(), t(a);
                                }
                                return (0, eb.D)({ analyticsLocations: G, displayProfile: o }), void d?.();
                            }
                            let r = null != e.link ? (0, R.default)(e.link, { analyticsLocations: G }) : null;
                            if (null != r) return d?.(), (0, _.closeAllModals)(), r(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, e_.E5)(e_.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, N.r)({
                                          type: I.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eh.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eC.default.track(eB.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eA.fF)(eh.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                w({ action: "HOVER_BADGE" }),
                                (0, eO.vP)({
                                    badgeId: (0, S.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: G,
                                    ...k,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(q ? { "aria-haspopup": "dialog", "aria-expanded": Q } : null),
                        style: { filter: u && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (V)
                    return (0, a.jsx)(
                        Z,
                        {
                            shouldShow: !Q,
                            legacyBadgeId: e.id,
                            userId: o?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ec.L7)(e.icon),
                            children: (0, a.jsx)(A.Anchor, { ...b, children: E }),
                        },
                        `${e.id}-${t}`,
                    );
                if (f) {
                    let n = (0, a.jsx)(A.Anchor, { ...b, ref: P, children: E });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eu, {
                                badgeId: e.id,
                                targetElementRef: P,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eC.default.track(eB.HAw.TOOLTIP_VIEWED, {
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
                        eT,
                        {
                            targetElementRef: U,
                            delay: ec.In,
                            showSubtext: !et && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (i) {
                    let n = (0, a.jsx)(A.Anchor, { ...b, ref: B, children: E });
                    return (0, a.jsx)(
                        en,
                        {
                            targetElementRef: B,
                            delay: ec.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let v = (0, a.jsx)(A.Anchor, { ...b, children: E }),
                    T = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== ek.K
                            ? (0, a.jsx)(ep, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: s && e.id !== ek.K ? l : void 0 });
                return (0, a.jsx)(
                    x.m,
                    { __unsupportedReactNodeAsText: T, forceOpen: p, delay: ec.In, ariaHidden: !0, children: v },
                    `${e.id}-${t}`,
                );
            }),
        });
    return q
        ? (0, a.jsx)(v.Y, {
              targetElementRef: f,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${t.length}`,
              scrollBehavior: "close",
              shouldShow: Q,
              onRequestClose: (e) => {
                  let t = e?.target;
                  b.current?.contains(t) === !0 || (t?.closest(`[${eU.m}]`) == null && J(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(K, { onClose: t });
              },
              children: () => ea,
          })
        : ea;
}
var eH = n(996988);
let eV = {
    [eH.d.POPOUT]: 12,
    [eH.d.MODAL]: 26,
    [eH.d.SIDEBAR]: 13,
    [eH.d.VIDEO_TILE_BACKGROUND]: 12,
    [eH.d.EMBED]: 12,
};
function e$(e) {
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
        _ = p(t, u),
        A = t?.userId,
        { pendingBadgeDisplayOrder: x, pendingBadgeHiddenBadges: v } = (0, d.A)(),
        R = (0, s.yK)([i.Ay], () => (m && null != A && i.Ay.hasCatalogFor(A) ? i.Ay.getBadges(A) : []), [m, A]),
        N = l.useMemo(() => {
            let e = _;
            if (null != f) {
                let t = new Set(_.map((e) => e.id));
                e = [..._, ...f.filter((e) => !t.has(e.id))];
            }
            return m ? (0, o.Rr)(e, R, { pendingBadgeDisplayOrder: x, pendingBadgeHiddenBadges: v }) : e;
        }, [_, f, m, R, x, v]);
    if (0 === N.length && !m) return null;
    let I = n === eH.d.MODAL_V2 ? [N] : (0, r.chunk)(N, !0 === c && n === eH.d.SIDEBAR ? eV[eH.d.POPOUT] : eV[n]);
    return (0, a.jsx)(a.Fragment, {
        children: I.map((e, n) =>
            (0, a.jsx)(
                eL,
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
