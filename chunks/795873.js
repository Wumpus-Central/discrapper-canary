"use strict";
n.d(t, { A: () => ey });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(702841),
    o = n(885386),
    l = n(351906),
    u = n(287809),
    c = n(375708);
let d = "legacy_username";
function _(e, t) {
    let n = o.m$.useSetting(),
        i = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        r = (0, a.bG)([l.A], () => l.A.hidePersonalInformation);
    if (null == e) return [];
    let s = e?.getBadges() ?? [];
    return (
        null != i && i.id === e.userId && (void 0 !== t ? t : n) && (s = s.filter((e) => e.id !== d)),
        r && (s = s.map((e) => ({ ...e, description: e.id === d ? c.intl.string(c.t.Br1ls3) : e.description }))),
        s
    );
}
var h = n(503698),
    f = n.n(h),
    p = n(17928),
    E = n(990078),
    m = n(349288),
    g = n(464792),
    A = n(793574),
    I = n(688810),
    T = n(682618),
    S = n(945810);
let y = (0, S.mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, S.mj)({
    name: "2026-05-badge-discovery-milestone-2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = n(982240);
let N = (0, S.mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = n(70283),
    R = n(775602),
    O = n(461536),
    b = n(841595),
    D = n(975858);
function L(e) {
    let t,
        n,
        r,
        { children: s, legacyBadgeId: a, userId: o, fallbackTitle: l, fallbackIconSrc: u } = e,
        d = (0, D.w0)(a),
        {
            badgeData: _,
            currentTier: h,
            obtainedAt: f,
        } = (0, p.cf)(
            [C.Ay],
            () =>
                null == d || null == o
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: C.Ay.getBadgeById(d, o),
                          currentTier: C.Ay.getCurrentTier(d, o),
                          obtainedAt: C.Ay.getObtainedAt(d, o),
                      },
            [d, o],
        ),
        E = (0, p.bG)([R.Ay], () => R.Ay.useReducedMotion),
        m = _?.badge_id === v.$.PREMIUM_TENURE,
        g = d === v.$.LEGACY_USERNAME,
        A = h?.name,
        I = m ? c.intl.string(c.t.Ipxkog) : (_?.name ?? l);
    m ? (r = n = null != A ? `${I} ${A}` : I) : null != A ? ((t = I), (n = A), (r = `${I} ${A}`)) : ((n = I), (r = I));
    let T = E ? void 0 : _?.complex_icon_animated_url,
        S = T ?? _?.complex_icon_static_url ?? _?.simple_icon_url ?? u,
        y = null != T && S === T;
    if (g) return (0, i.jsx)(w, { userId: o, title: n, badgeImage: S, rarity: _?.rarity, children: s });
    let N = _?.info_label ?? (null != f ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(f) }) : void 0);
    return (0, i.jsx)(O.A, {
        title: n,
        eyebrow: t,
        body: N,
        badgeImage: S,
        badgeName: r,
        rarity: _?.rarity,
        variant: m ? "nitro" : "default",
        isAnimated: y,
        children: s,
    });
}
function w(e) {
    let { children: t, userId: n, title: r, badgeImage: s, rarity: a } = e,
        o = (0, p.bG)(
            [b.A, l.A],
            () =>
                l.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (b.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(O.A, { title: r, body: o, badgeImage: s, badgeName: r, rarity: a, children: t });
}
var M = n(470739),
    P = n(564064),
    x = n(459192);
function k(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(x.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: s,
        children: a,
    });
}
var U = n(116833),
    G = n(704640),
    F = n(425713),
    V = n(642481),
    B = n(720879),
    j = n(788868),
    H = n(49999),
    Y = n(518477);
let W = (e) => {
    let {
            badgeId: t = j.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: d,
        } = e,
        _ = j.VD[t].nameUnformattedNitro,
        h = c.intl.string(_).toLocaleUpperCase(),
        f = j.VD[t].rarity,
        p = (0, G.A)(t),
        E = (0, F.I)(t).standard;
    (0, r.useEffect)(() => {
        U.m[U.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E);
    }, [E]);
    let m = (0, r.useCallback)(() => {
        n?.(H.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(o, l, u);
        return (0, i.jsx)(O.A, {
            targetElementRef: a,
            onShow: d,
            title: h,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: E,
            badgeName: h,
            progressCircle: t,
            children: s,
        });
    }
    let g = {
        gradientColor: p,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: U.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: E, alt: h, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: h,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(B.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: Y.In,
              onShow: d,
              ...g,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(V.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: m,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...g,
                  }),
              ],
          });
};
var K = n(534514),
    $ = n(834730),
    z = n(775549);
let q = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: z.R, children: [t, (0, i.jsx)("div", { className: z.A, children: n }), r] });
};
var Z = n(224016),
    X = n(74824);
let Q = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, F.I)(n.id).standard;
    return (0, i.jsxs)(q, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(Z.A, { width: 56, className: X.R }),
        children: [
            (0, i.jsx)(K.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, i.jsx)($.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: X.K,
                children: t.description,
            }),
        ],
    });
};
var J = n(30084),
    ee = n(507107),
    et = n(590202),
    en = n(976860),
    ei = n(305003),
    er = n(312640),
    es = n(798618),
    ea = n(752079),
    eo = n(414690);
function el(e) {
    let { children: t, targetElementRef: n, delay: s, showSubtext: a, forceOpen: o } = e,
        [l, u] = r.useState(!1),
        c = r.useRef(null),
        d = r.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    r.useEffect(() => d, [d]);
    let _ = r.useCallback(() => {
        d(),
            (c.current = window.setTimeout(() => {
                (c.current = null), u(!0);
            }, s));
    }, [s, d]);
    r.useEffect(() => {
        o && !l && _();
    }, [o, l, _]);
    let h = r.useCallback(() => {
            _();
        }, [_]),
        f = r.useCallback(() => {
            d(), u(!1);
        }, [d]);
    return (0, i.jsxs)("div", {
        onMouseEnter: h,
        onMouseLeave: f,
        children: [
            t,
            (0, i.jsxs)(er.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(eu, { showSubtext: a }), (0, i.jsx)(es.F, {})],
            }),
        ],
    });
}
function eu(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(q, {
        assetComponent: (0, i.jsx)(ea.A, { className: eo.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(K.D, {
            variant: "heading-md/extrabold",
            className: eo.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(K.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eo.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)($.E, { variant: "text-xs/normal", className: eo.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ec = n(174459),
    ed = n(474090),
    e_ = n(439174),
    eh = n(183555),
    ef = n(47675),
    ep = n(999291),
    eE = n(652215),
    em = n(758836);
let eg = "premium";
var eA = n(992028);
function eI(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: a,
            onClose: o,
            shouldOpenBadgeTooltip: l,
            shouldGlowTenureBadge: d,
        } = e,
        h = r.useRef(null),
        S = r.useRef(null),
        v = r.useRef(null),
        { analyticsLocations: R } = (0, I.Ay)(A.A.BADGE),
        { context: O, trackUserProfileAction: b } = (0, eh.NJ)(),
        w = u.default.getCurrentUser(),
        x = (0, ed.CC)(w?.premiumType, j.PremiumTypes.TIER_2),
        U = (function (e) {
            let { location: t } = e;
            return y.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        G = (function (e) {
            let { location: t } = e;
            return N.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (U || G) && a?.userId != null && !C.Ay.hasCatalogFor(a.userId) && (0, T.R)(a.userId);
    }, [U, G, a?.userId]);
    let F = a?.userId,
        V = (0, p.bG)([C.Ay], () => {
            if (!G || null == F) return null;
            let e = {};
            for (let n of t) {
                let t = (0, D.w0)(n.id);
                if (null == t) continue;
                let i = C.Ay.getBadgeById(t, F)?.simple_icon_url;
                null != i && (e[n.id] = i);
            }
            return e;
        }, [G, F, t]),
        B = _((0, ep.AP)(w?.id ?? null)).some((e) => e.id === ei.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: f()(eA.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === ei.A.ORB_PROFILE_BADGE,
                r = (0, e_.e0)(e.id),
                c = null != r || e.id === eg,
                _ = a?.userId === w?.id,
                p = "april_fools_2026" === e.id,
                I = void 0 !== r && e.id !== eg,
                T = V?.[e.id],
                y = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? T ?? (0, Y.L7)(e.icon),
                    className: f()(eA.qS, null != T && eA.Do, s),
                }),
                C = null != l && l(e.id),
                N = {
                    onClick: (i) => {
                        b({ action: "PRESS_BADGE" }),
                            (0, ef.vP)({
                                badgeId: (0, D.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: R,
                                ...O,
                            });
                        let r = e.id.startsWith("staff") && !_,
                            s = a?.userId != null ? u.default.getUser(a.userId) : null;
                        if (U && !r && s?.bot !== !0) {
                            i.preventDefault(),
                                (0, M._)({
                                    initialBadgeId: (0, D.w0)(e.id),
                                    targetUserId: a?.userId,
                                    targetUsername: s?.globalName ?? s?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, P.Cz)({
                                tab: em.G2.ORBS,
                                analyticsLocations: R,
                                analyticsSource: A.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                o?.();
                            return;
                        }
                        if (c) {
                            if (
                                (i.preventDefault(),
                                ec.default.track(eE.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: x,
                                    viewed_user_id: a?.userId,
                                }),
                                x)
                            ) {
                                _
                                    ? (0, en.pX)(eE.BVt.NITRO_HOME)
                                    : (0, J.D)({ analyticsLocations: R, displayProfile: a }),
                                    o?.();
                                return;
                            }
                            if (_) {
                                let t = null != e.link ? (0, g.default)(e.link, { analyticsLocations: R }) : null;
                                if (null == t) return;
                                return o?.(), t(i);
                            }
                            return (0, J.D)({ analyticsLocations: R, displayProfile: a }), void o?.();
                        }
                        let l = null != e.link ? (0, g.default)(e.link, { analyticsLocations: R }) : null;
                        if (null != l) return o?.(), l(i);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ec.default.track(eE.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, et.fF)(ee.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            b({ action: "HOVER_BADGE" }),
                            (0, ef.vP)({
                                badgeId: (0, D.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: R,
                                ...O,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: d && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (U)
                return (0, i.jsx)(
                    L,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, Y.L7)(e.icon),
                        children: (0, i.jsx)(m.Anchor, { ...N, children: y }),
                    },
                    `${e.id}-${t}`,
                );
            if (I) {
                let n = (0, i.jsx)(m.Anchor, { ...N, ref: h, children: y });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(W, {
                            badgeId: e.id,
                            targetElementRef: h,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ec.default.track(eE.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other"),
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
                let n = (0, i.jsx)(m.Anchor, { ...N, ref: S, children: y });
                return (0, i.jsx)(
                    el,
                    {
                        targetElementRef: S,
                        delay: Y.In,
                        showSubtext: !B && !e.isPreviewMode,
                        forceOpen: C,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (p) {
                let n = (0, i.jsx)(m.Anchor, { ...N, ref: v, children: y });
                return (0, i.jsx)(
                    k,
                    { targetElementRef: v, delay: Y.In, forceOpen: C, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let G = (0, i.jsx)(m.Anchor, { ...N, children: y }),
                F = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eg
                        ? (0, i.jsx)(Q, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== eg ? r : void 0 });
            return (0, i.jsx)(
                E.m,
                { __unsupportedReactNodeAsText: F, forceOpen: C, delay: Y.In, ariaHidden: !0, children: G },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eT = n(996988);
let eS = {
    [eT.d.POPOUT]: 12,
    [eT.d.MODAL]: 26,
    [eT.d.MODAL_V2]: 16,
    [eT.d.SIDEBAR]: 13,
    [eT.d.VIDEO_TILE_BACKGROUND]: 12,
};
function ey(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: a,
            pendingBadges: o,
            onClose: l,
            shouldOpenBadgeTooltip: u,
            shouldGlowTenureBadge: c,
        } = e,
        d = _(t, a),
        h = r.useMemo(() => {
            if (null == o) return d;
            let e = new Set(d.map((e) => e.id));
            return [...d, ...o.filter((t) => !e.has(t.id))];
        }, [d, o]);
    return 0 === h.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, s.chunk)(h, eS[n]).map((e) =>
                  (0, i.jsx)(
                      eI,
                      { badges: e, displayProfile: t, onClose: l, shouldOpenBadgeTooltip: u, shouldGlowTenureBadge: c },
                      e[0].id,
                  ),
              ),
          });
}
