n.d(t, { A: () => eC });
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(702841),
    s = n(885386),
    o = n(351906),
    d = n(287809),
    u = n(375708);
let c = "legacy_username";
function m(e, t) {
    let n = s.m$.useSetting(),
        l = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        r = (0, a.bG)([o.A], () => o.A.hidePersonalInformation);
    if (null == e) return [];
    let i = e?.getBadges() ?? [];
    return (
        null != l && l.id === e.userId && (void 0 !== t ? t : n) && (i = i.filter((e) => e.id !== c)),
        r && (i = i.map((e) => ({ ...e, description: e.id === c ? u.intl.string(u.t.Br1ls3) : e.description }))),
        i
    );
}
var g = n(305003);
let f = (e) => e.sort((e, t) => (e.id === g.A.ORB_PROFILE_BADGE ? 1 : t.id === g.A.ORB_PROFILE_BADGE ? -1 : 0));
var p = n(503698),
    h = n.n(p),
    _ = n(17928),
    x = n(990078),
    v = n(349288),
    b = n(464792),
    E = n(793574),
    j = n(688810),
    y = n(682618),
    C = n(945810);
let A = (0, C.mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, C.mj)({
    name: "2026-05-badge-discovery-milestone-2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = n(982240);
let R = (0, C.mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(70283),
    k = n(775602),
    T = n(461536),
    S = n(841595),
    B = n(975858);
function D(e) {
    let t,
        n,
        r,
        { children: i, legacyBadgeId: a, userId: s, fallbackTitle: o, fallbackIconSrc: d } = e,
        c = (0, B.w0)(a),
        {
            badgeData: m,
            currentTier: g,
            obtainedAt: f,
        } = (0, _.cf)(
            [I.Ay],
            () =>
                null == c || null == s
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: I.Ay.getBadgeById(c, s),
                          currentTier: I.Ay.getCurrentTier(c, s),
                          obtainedAt: I.Ay.getObtainedAt(c, s),
                      },
            [c, s],
        ),
        p = (0, _.bG)([k.Ay], () => k.Ay.useReducedMotion),
        h = m?.badge_id === N.$.PREMIUM_TENURE,
        x = c === N.$.LEGACY_USERNAME,
        v = g?.name,
        b = h ? u.intl.string(u.t.Ipxkog) : (m?.name ?? o);
    h ? (r = n = null != v ? `${b} ${v}` : b) : null != v ? ((t = b), (n = v), (r = `${b} ${v}`)) : ((n = b), (r = b));
    let E = p ? void 0 : m?.complex_icon_animated_url,
        j = E ?? m?.complex_icon_static_url ?? m?.simple_icon_url ?? d,
        y = null != E && j === E;
    if (x) return (0, l.jsx)(O, { userId: s, title: n, badgeImage: j, rarity: m?.rarity, children: i });
    let C = m?.info_label ?? (null != f ? u.intl.formatToPlainString(u.t["0aEh2a"], { date: new Date(f) }) : void 0);
    return (0, l.jsx)(T.A, {
        title: n,
        eyebrow: t,
        body: C,
        badgeImage: j,
        badgeName: r,
        rarity: m?.rarity,
        variant: h ? "nitro" : "default",
        isAnimated: y,
        children: i,
    });
}
function O(e) {
    let { children: t, userId: n, title: r, badgeImage: i, rarity: a } = e,
        s = (0, _.bG)(
            [S.A, o.A],
            () =>
                o.A.hidePersonalInformation
                    ? u.intl.string(u.t.Br1ls3)
                    : null != n
                      ? (S.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, l.jsx)(T.A, { title: r, body: s, badgeImage: i, badgeName: r, rarity: a, children: t });
}
var w = n(470739),
    U = n(564064),
    M = n(459192);
function P(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: i, children: a } = e;
    return (0, l.jsx)(M.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: i,
        children: a,
    });
}
var L = n(116833),
    G = n(704640),
    H = n(425713),
    $ = n(642481),
    V = n(720879),
    F = n(788868),
    q = n(49999),
    z = n(518477);
let W = (e) => {
    let {
            badgeId: t = F.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            targetElementRef: a,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        m = F.VD[t].nameUnformattedNitro,
        g = u.intl.string(m).toLocaleUpperCase(),
        f = F.VD[t].rarity,
        p = (0, G.A)(t),
        h = (0, H.I)(t).standard;
    (0, r.useEffect)(() => {
        L.m[L.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = h);
    }, [h]);
    let _ = (0, r.useCallback)(() => {
        n?.(q.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, l.jsx)(T.A, {
            targetElementRef: a,
            onShow: c,
            title: g,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: h,
            badgeName: g,
            progressCircle: t,
            children: i,
        });
    }
    let x = {
        gradientColor: p,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: L.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: h, alt: g, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: g,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, l.jsx)(V.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: z.In,
              onShow: c,
              ...x,
              children: i,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  i,
                  (0, l.jsx)($.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: _,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...x,
                  }),
              ],
          });
};
var K = n(534514),
    Q = n(834730),
    Y = n(775549);
let X = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, l.jsxs)("div", { className: Y.R, children: [t, (0, l.jsx)("div", { className: Y.A, children: n }), r] });
};
var J = n(224016),
    Z = n(74824);
let ee = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, H.I)(n.id).standard;
    return (0, l.jsxs)(X, {
        assetComponent: (0, l.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(J.A, { width: 56, className: Z.R }),
        children: [
            (0, l.jsx)(K.D, { variant: "heading-xl/extrabold", children: u.intl.string(n.nameUnformatted) }),
            (0, l.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Z.K,
                children: t.description,
            }),
        ],
    });
};
var et = n(30084),
    en = n(507107),
    el = n(590202),
    er = n(976860),
    ei = n(312640),
    ea = n(798618),
    es = n(752079),
    eo = n(414690);
function ed(e) {
    let { children: t, targetElementRef: n, delay: i, showSubtext: a, forceOpen: s } = e,
        [o, d] = r.useState(!1),
        u = r.useRef(null),
        c = r.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }, []);
    r.useEffect(() => c, [c]);
    let m = r.useCallback(() => {
        c(),
            (u.current = window.setTimeout(() => {
                (u.current = null), d(!0);
            }, i));
    }, [i, c]);
    r.useEffect(() => {
        s && !o && m();
    }, [s, o, m]);
    let g = r.useCallback(() => {
            m();
        }, [m]),
        f = r.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, l.jsxs)("div", {
        onMouseEnter: g,
        onMouseLeave: f,
        children: [
            t,
            (0, l.jsxs)(ei.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(eu, { showSubtext: a }), (0, l.jsx)(ea.F, {})],
            }),
        ],
    });
}
function eu(e) {
    let { showSubtext: t = !1 } = e;
    return (0, l.jsxs)(X, {
        assetComponent: (0, l.jsx)(es.A, { className: eo.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(K.D, {
            variant: "heading-md/extrabold",
            className: eo.RK,
            children: u.intl.string(u.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(K.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eo.Qn,
                children: u.intl.string(u.t.lTHkqd),
            }),
            t
                ? (0, l.jsx)(Q.E, { variant: "text-xs/normal", className: eo.lV, children: u.intl.string(u.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ec = n(174459),
    em = n(474090),
    eg = n(439174),
    ef = n(183555),
    ep = n(47675),
    eh = n(999291),
    e_ = n(652215),
    ex = n(758836);
let ev = "premium";
var eb = n(992028);
function eE(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: i,
            displayProfile: a,
            onClose: s,
            shouldOpenBadgeTooltip: o,
            shouldGlowTenureBadge: c,
        } = e,
        f = r.useRef(null),
        p = r.useRef(null),
        C = r.useRef(null),
        { analyticsLocations: N } = (0, j.Ay)(E.A.BADGE),
        { context: k, trackUserProfileAction: T } = (0, ef.NJ)(),
        S = d.default.getCurrentUser(),
        O = (0, em.CC)(S?.premiumType, F.PremiumTypes.TIER_2),
        M = (function (e) {
            let { location: t } = e;
            return A.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        L = (function (e) {
            let { location: t } = e;
            return R.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (M || L) && a?.userId != null && !I.Ay.hasCatalogFor(a.userId) && (0, y.R)(a.userId);
    }, [M, L, a?.userId]);
    let G = a?.userId,
        H = (0, _.bG)([I.Ay], () => {
            if (!L || null == G) return null;
            let e = {};
            for (let n of t) {
                let t = (0, B.w0)(n.id);
                if (null == t) continue;
                let l = I.Ay.getBadgeById(t, G)?.simple_icon_url;
                null != l && (e[n.id] = l);
            }
            return e;
        }, [L, G, t]),
        $ = m((0, eh.AP)(S?.id ?? null)).some((e) => e.id === g.A.ORB_PROFILE_BADGE);
    return (0, l.jsx)("div", {
        className: h()(eb.kL, n),
        "aria-label": u.intl.string(u.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === g.A.ORB_PROFILE_BADGE,
                r = (0, eg.e0)(e.id),
                u = null != r || e.id === ev,
                m = a?.userId === S?.id,
                _ = "april_fools_2026" === e.id,
                j = void 0 !== r && e.id !== ev,
                y = H?.[e.id],
                A = (0, l.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? y ?? (0, z.L7)(e.icon),
                    className: h()(eb.qS, null != y && eb.Do, i),
                }),
                I = null != o && o(e.id),
                R = {
                    onClick: (l) => {
                        T({ action: "PRESS_BADGE" }),
                            (0, ep.vP)({
                                badgeId: (0, B.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: N,
                                ...k,
                            });
                        let r = e.id.startsWith("staff") && !m,
                            i = a?.userId != null ? d.default.getUser(a.userId) : null;
                        if (M && !r && i?.bot !== !0) {
                            l.preventDefault(),
                                (0, w._)({
                                    initialBadgeId: (0, B.w0)(e.id),
                                    targetUserId: a?.userId,
                                    targetUsername: i?.globalName ?? i?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, U.Cz)({
                                tab: ex.G2.ORBS,
                                analyticsLocations: N,
                                analyticsSource: E.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                s?.();
                            return;
                        }
                        if (u) {
                            if (
                                (l.preventDefault(),
                                ec.default.track(e_.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: O,
                                    viewed_user_id: a?.userId,
                                }),
                                O)
                            ) {
                                m
                                    ? (0, er.pX)(e_.BVt.NITRO_HOME)
                                    : (0, et.D)({ analyticsLocations: N, displayProfile: a }),
                                    s?.();
                                return;
                            }
                            if (m) {
                                let t = null != e.link ? (0, b.default)(e.link, { analyticsLocations: N }) : null;
                                if (null == t) return;
                                return s?.(), t(l);
                            }
                            return (0, et.D)({ analyticsLocations: N, displayProfile: a }), void s?.();
                        }
                        let o = null != e.link ? (0, b.default)(e.link, { analyticsLocations: N }) : null;
                        if (null != o) return s?.(), o(l);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ec.default.track(e_.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, el.fF)(en.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            T({ action: "HOVER_BADGE" }),
                            (0, ep.vP)({
                                badgeId: (0, B.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: N,
                                ...k,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: c && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (M)
                return (0, l.jsx)(
                    D,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, z.L7)(e.icon),
                        children: (0, l.jsx)(v.Anchor, { ...R, children: A }),
                    },
                    `${e.id}-${t}`,
                );
            if (j) {
                let n = (0, l.jsx)(v.Anchor, { ...R, ref: f, children: A });
                return (0, l.jsx)(
                    "div",
                    {
                        children: (0, l.jsx)(W, {
                            badgeId: e.id,
                            targetElementRef: f,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ec.default.track(e_.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (m ? "self" : "other"),
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
                let n = (0, l.jsx)(v.Anchor, { ...R, ref: p, children: A });
                return (0, l.jsx)(
                    ed,
                    {
                        targetElementRef: p,
                        delay: z.In,
                        showSubtext: !$ && !e.isPreviewMode,
                        forceOpen: I,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (_) {
                let n = (0, l.jsx)(v.Anchor, { ...R, ref: C, children: A });
                return (0, l.jsx)(
                    P,
                    { targetElementRef: C, delay: z.In, forceOpen: I, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let L = (0, l.jsx)(v.Anchor, { ...R, children: A }),
                G = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ev
                        ? (0, l.jsx)(ee, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: u && e.id !== ev ? r : void 0 });
            return (0, l.jsx)(
                x.m,
                { __unsupportedReactNodeAsText: G, forceOpen: I, delay: z.In, ariaHidden: !0, children: L },
                `${e.id}-${t}`,
            );
        }),
    });
}
var ej = n(996988);
let ey = {
    [ej.d.POPOUT]: 12,
    [ej.d.MODAL]: 26,
    [ej.d.MODAL_V2]: 16,
    [ej.d.SIDEBAR]: 13,
    [ej.d.VIDEO_TILE_BACKGROUND]: 12,
};
function eC(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: a,
            pendingBadges: s,
            onClose: o,
            shouldOpenBadgeTooltip: d,
            shouldGlowTenureBadge: u,
        } = e,
        c = m(t, a),
        g = r.useMemo(() => {
            if (null == s) return f(c);
            let e = new Set(c.map((e) => e.id));
            return f([...c, ...s.filter((t) => !e.has(t.id))]);
        }, [c, s]);
    return 0 === g.length
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, i.chunk)(g, ey[n]).map((e) =>
                  (0, l.jsx)(
                      eE,
                      { badges: e, displayProfile: t, onClose: o, shouldOpenBadgeTooltip: d, shouldGlowTenureBadge: u },
                      e[0].id,
                  ),
              ),
          });
}
