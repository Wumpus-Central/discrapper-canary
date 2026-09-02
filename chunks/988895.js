n.d(t, { A: () => eQ });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(17928),
    i = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    m = n(287809),
    f = n(702841),
    g = n(885386),
    E = n(351906),
    p = n(375708);
let b = "legacy_username";
function h(e, t) {
    let n = g.m$.useSetting(),
        a = (0, f.bG)([m.default], () => m.default.getCurrentUser()),
        l = (0, f.bG)([E.A], () => E.A.hidePersonalInformation);
    if (null == e) return [];
    let r = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (r = r.filter((e) => e.id !== b)),
        l && (r = r.map((e) => ({ ...e, description: e.id === b ? p.intl.string(p.t.Br1ls3) : e.description }))),
        r
    );
}
var x = n(503698),
    _ = n.n(x),
    A = n(834730),
    v = n(192308),
    N = n(28863),
    R = n(866665),
    I = n(259678),
    j = n(22231),
    T = n(922016),
    y = n(983555),
    C = n(274670),
    S = n(144779),
    D = n(793574),
    M = n(688810),
    P = n(682618),
    O = n(992526),
    U = n(609782);
let B = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var k = n(248284),
    G = n(686246),
    w = n(425763),
    L = n(952270),
    H = n(365199),
    V = n(315710),
    $ = n(297264),
    F = n(821609),
    z = n(442433),
    X = n(450232),
    K = n(451395),
    W = n(327791),
    Y = n(470739),
    q = n(577931),
    Z = n(494881);
let Q = "BADGE";
function J(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, w.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(K.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: "PROFILE_BADGES",
        itemType: Q,
        "aria-label": p.intl.formatToPlainString(p.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: Z.oE,
        draggingClassName: Z.Id,
        dropBeforeClassName: Z.A,
        dropAfterClassName: Z.Ze,
        children: [
            (0, a.jsx)(ee, { ...r }),
            (0, a.jsx)(K.jV, {
                buttonRef: d,
                className: Z.BU,
                "aria-label": p.intl.formatToPlainString(p.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function ee(e) {
    let { badge: t, index: r, onClose: s, onUnhide: i } = e,
        [o, d] = l.useState(!1);
    function c(e) {
        d(!0),
            (0, z.L3)(
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
        className: _()(Z.fw, o && Z.HV),
        onContextMenu: u ? void 0 : c,
        children: [
            (0, a.jsx)("div", {
                className: Z.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: _()(Z.pC, u && Z.jx),
                    }),
            }),
            u
                ? (0, a.jsx)(R.m, {
                      position: "top",
                      text: p.intl.string(p.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          type: "button",
                          className: Z.KJ,
                          "aria-label": p.intl.formatToPlainString(p.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => i?.(t),
                          children: (0, a.jsx)(L.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      type: "button",
                      className: Z.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": o,
                      "aria-label": p.intl.formatToPlainString(p.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: c,
                      children: (0, a.jsx)(H.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function et() {
    let e = (0, w.VU)(),
        { badge: t, sourceClientOffset: n } = (0, G.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === Q ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: Z.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: Z.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: Z.pC,
                }),
        }),
    });
}
function en(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, V.tj)(n);
    let { fixedBadges: s, reorderableBadges: i, hiddenBadges: o } = (0, q.A)(),
        d = (0, W.A)(),
        u = l.useMemo(() => i.map((e) => e.badge_id), [i]);
    function m(e) {
        (0, c.RC)({
            badgeId: e.badge_id,
            hidden: !1,
            reorderableBadgeIds: u,
            hiddenBadgeIds: o.map((e) => {
                let { badge_id: t } = e;
                return t;
            }),
            canReorder: d,
        });
    }
    let f = s.length + i.length + o.length;
    function g(e, t) {
        (0, c.hB)((0, c.i1)(u, e, t));
    }
    return (0, a.jsxs)("div", {
        ref: n,
        className: Z.SW,
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: Z.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: Z.$,
                        children: [
                            (0, a.jsx)(X.A, { size: "xs", className: Z.oU }),
                            (0, a.jsx)($.D, {
                                id: r,
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: p.intl.string(p.t.PXIyjF),
                            }),
                        ],
                    }),
                    (0, a.jsx)(A.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: p.intl.string(p.t.VHaYM7),
                    }),
                ],
            }),
            f > 0 &&
                (0, a.jsxs)("div", {
                    className: Z.yq,
                    role: "group",
                    "aria-label": p.intl.string(p.t.VWV0y5),
                    children: [
                        s.map((e, n) => (0, a.jsx)(ee, { badge: e, index: n, onClose: t, onUnhide: m }, e.badge_id)),
                        i.map((e, n) =>
                            d
                                ? (0, a.jsx)(
                                      J,
                                      { badge: e, index: s.length + n, onClose: t, reorderableIndex: n, onReorder: g },
                                      e.badge_id,
                                  )
                                : (0, a.jsx)(ee, { badge: e, index: s.length + n, onClose: t }, e.badge_id),
                        ),
                        o.map((e, n) =>
                            (0, a.jsx)(
                                ee,
                                { badge: e, index: s.length + i.length + n, onClose: t, onUnhide: m },
                                e.badge_id,
                            ),
                        ),
                    ],
                }),
            (0, a.jsx)(et, {}),
            (0, a.jsx)(F.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: p.intl.string(p.t.fN2how),
                onClick: function () {
                    t(), (0, Y._)({ viewingCurrentUserBadges: !0 });
                },
            }),
        ],
    });
}
var ea = n(70283),
    el = n(775602),
    er = n(461536),
    es = n(321191);
function ei(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, U.w0)(d),
        {
            badgeData: E,
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
        x = (0, s.bG)([el.Ay], () => el.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, P.RS)(c);
        }, [c]),
        A = E?.badge_id === ea.$.PREMIUM_TENURE,
        v = g === ea.$.LEGACY_USERNAME,
        N = b?.name,
        R = A ? p.intl.string(p.t.Ipxkog) : (E?.name ?? u);
    A ? (r = n = null != N ? `${R} ${N}` : R) : null != N ? ((t = R), (n = N), (r = `${R} ${N}`)) : ((n = R), (r = R));
    let I = x ? void 0 : E?.complex_icon_animated_url,
        j = I ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? m,
        T = null != I && j === I;
    if (v) return (0, a.jsx)(eo, { userId: c, title: n, badgeImage: j, shouldShow: f, children: o });
    let y = E?.info_label ?? (null != h ? p.intl.formatToPlainString(p.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(er.A, {
        title: n,
        eyebrow: t,
        body: y,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: T,
        shouldShow: f,
        onShow: _,
        children: o,
    });
}
function eo(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [es.A, E.A],
            () =>
                E.A.hidePersonalInformation
                    ? p.intl.string(p.t.Br1ls3)
                    : null != n
                      ? (es.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(er.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var ed = n(839534),
    ec = n(683063);
function eu(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(ec.u, {
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
var em = n(116833),
    ef = n(704640),
    eg = n(425713),
    eE = n(642481),
    ep = n(720879),
    eb = n(202541),
    eh = n(49999),
    ex = n(518477);
let e_ = function (e) {
    let {
            badgeId: t = eb.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eb.VD[t].nameUnformattedNitro,
        m = p.intl.string(u).toLocaleUpperCase(),
        f = eb.VD[t].rarity,
        g = (0, ef.A)(t),
        E = (0, eg.I)(t).standard;
    (0, l.useEffect)(() => {
        em.m[em.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E);
    }, [E]);
    let b = (0, l.useCallback)(() => {
        n?.(eh.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(er.A, {
            targetElementRef: s,
            onShow: c,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: E,
            badgeName: m,
            progressCircle: t,
            children: r,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: em.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: E, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(ep.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: ex.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(eE.A, {
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
var eA = n(592265);
let ev = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eA.R,
        children: [t, (0, a.jsx)("div", { className: eA.A, children: n }), l],
    });
};
var eN = n(224016),
    eR = n(747278);
let eI = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, eg.I)(n.id).standard;
    return (0, a.jsxs)(ev, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eN.A, { width: 56, className: eR.R }),
        children: [
            (0, a.jsx)($.D, { variant: "heading-xl/extrabold", children: p.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(A.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eR.K,
                children: t.description,
            }),
        ],
    });
};
var ej = n(30084),
    eT = n(738822),
    ey = n(104886),
    eC = n(590202),
    eS = n(976860),
    eD = n(305003),
    eM = n(273875),
    eP = n(798618),
    eO = n(752079),
    eU = n(370277);
function eB(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let m = l.useCallback(() => {
        u(),
            (c.current = window.setTimeout(() => {
                (c.current = null), d(!0);
            }, r));
    }, [r, u]);
    l.useEffect(() => {
        i && !o && m();
    }, [i, o, m]);
    let f = l.useCallback(() => {
            m();
        }, [m]),
        g = l.useCallback(() => {
            u(), d(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eM.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(ek, { showSubtext: s }), (0, a.jsx)(eP.F, {})],
            }),
        ],
    });
}
function ek(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ev, {
        assetComponent: (0, a.jsx)(eO.A, { className: eU.jc }),
        tooltipWordmarkComponent: (0, a.jsx)($.D, {
            variant: "heading-md/extrabold",
            className: eU.RK,
            children: p.intl.string(p.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)($.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eU.Qn,
                children: p.intl.string(p.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(A.E, { variant: "text-xs/normal", className: eU.lV, children: p.intl.string(p.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eG = n(174459),
    ew = n(474090),
    eL = n(439174),
    eH = n(183555),
    eV = n(47675),
    e$ = n(999291),
    eF = n(874402),
    ez = n(652215),
    eX = n(758836),
    eK = n(854232),
    eW = n(816645);
function eY(e) {
    let t,
        {
            badges: n,
            overflowCount: r,
            className: d,
            badgeClassName: c,
            displayProfile: u,
            onClose: f,
            shouldOpenBadgeTooltip: g,
            shouldGlowTenureBadge: E,
            popoutAnchorRef: b,
        } = e,
        x = (0, k.A)((e) => e.isOpen),
        G = l.useRef(null),
        w = l.useRef(null),
        L = l.useRef(null),
        H = l.useRef(null),
        { analyticsLocations: V } = (0, M.Ay)(D.A.BADGE),
        { context: $, trackUserProfileAction: F } = (0, eH.NJ)(),
        z = m.default.getCurrentUser(),
        X = (0, ew.CC)(z?.premiumType, eb.PremiumTypes.TIER_2),
        K = (0, O.J9)({ location: "UserProfileBadgeList" }),
        W = (0, o.d)({ location: "UserProfileBadgeList" }),
        q = (function (e) {
            let { location: t } = e;
            return B.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (K || q) && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, P.RS)(u.userId);
    }, [K, q, u?.userId]);
    let Z = u?.userId,
        Q = (0, s.bG)([i.Ay], () => {
            if (!q || null == Z) return null;
            let e = {};
            for (let t of n) {
                let n = (0, U.w0)(t.id);
                if (null == n) continue;
                let a = i.Ay.getBadgeById(n, Z)?.simple_icon_url;
                null != a && (e[t.id] = a);
            }
            return e;
        }, [q, Z, n]),
        J = u?.userId === z?.id,
        ee = J && K && W && null != b,
        et = !ee && K,
        ea = ee && x;
    function el(e) {
        k.A.setState({ isOpen: e });
    }
    let er = h((0, e$.AP)(z?.id ?? null)).some((e) => e.id === eD.A.ORB_PROFILE_BADGE),
        [es, eo] = l.useState(!1),
        ec = ee && es,
        em = ec && 0 === r ? n.slice(0, -1) : n,
        ef = null;
    r > 0 &&
        ((ef = (0, a.jsx)(A.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: ec ? eW.AX : void 0,
            children: p.intl.format(p.t.n7CiSK, { count: r }),
        })),
        (t = p.intl.formatToPlainString(p.t.eIHfGZ, { overflow_count: r })));
    let eg = (0, a.jsxs)("div", {
        ref: G,
        className: _()(eW.kL, W && eW.Yq, ee && eW.Tx, d),
        "aria-label": p.intl.string(p.t.VWV0y5),
        role: "group",
        ...(ee ? { onClick: () => el(!ea), onMouseEnter: () => eo(!0), onMouseLeave: () => eo(!1) } : null),
        children: [
            em.map((e, t) => {
                let n = e.id === eD.A.ORB_PROFILE_BADGE,
                    l = (0, eL.e0)(e.id),
                    r = null != l || e.id === eK.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== eK.K,
                    o = Q?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, ex.L7)(e.icon),
                        className: _()(eW.qS, null != o && eW.Do, c),
                    }),
                    p = null != g && g(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (F({ action: "PRESS_BADGE" }),
                                (0, eV.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: V,
                                    ...$,
                                }),
                                ee)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (K && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, Y._)({
                                        initialBadgeId: (0, U.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, ed.Cz)({
                                    tab: eX.G2.ORBS,
                                    analyticsLocations: V,
                                    analyticsSource: D.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    f?.(),
                                    (0, v.closeAllModals)();
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eG.default.track(ez.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: X,
                                        viewed_user_id: u?.userId,
                                    }),
                                    X)
                                ) {
                                    J
                                        ? ((0, eS.pX)(ez.BVt.NITRO_HOME), (0, v.closeAllModals)())
                                        : (0, ej.D)({ analyticsLocations: V, displayProfile: u }),
                                        f?.();
                                    return;
                                }
                                if (J) {
                                    let t = null != e.link ? (0, y.default)(e.link, { analyticsLocations: V }) : null;
                                    if (null == t) return;
                                    return f?.(), (0, v.closeAllModals)(), t(a);
                                }
                                return (0, ej.D)({ analyticsLocations: V, displayProfile: u }), void f?.();
                            }
                            let s = null != e.link ? (0, y.default)(e.link, { analyticsLocations: V }) : null;
                            if (null != s) return f?.(), (0, v.closeAllModals)(), s(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, ey.E5)(ey.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, C.r)({
                                          type: S.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eT.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eG.default.track(ez.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eC.fF)(eT.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                F({ action: "HOVER_BADGE" }),
                                (0, eV.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: V,
                                    ...$,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ee ? { "aria-haspopup": "dialog", "aria-expanded": ea } : null),
                        style: { filter: E && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (K)
                    return (0, a.jsx)(
                        ei,
                        {
                            shouldShow: !ea,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ex.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...b, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: w, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(e_, {
                                badgeId: e.id,
                                targetElementRef: w,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eG.default.track(ez.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (J ? "self" : "other"),
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
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: L, children: d });
                    return (0, a.jsx)(
                        eB,
                        {
                            targetElementRef: L,
                            delay: ex.In,
                            showSubtext: !er && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: H, children: d });
                    return (0, a.jsx)(
                        eu,
                        {
                            targetElementRef: H,
                            delay: ex.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let h = (0, a.jsx)(N.Anchor, { ...b, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eK.K
                            ? (0, a.jsx)(eI, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== eK.K ? l : void 0 });
                return (0, a.jsx)(
                    R.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: ex.In, ariaHidden: !0, children: h },
                    `${e.id}-${t}`,
                );
            }),
            (r > 0 || ec) &&
                (et
                    ? (0, a.jsx)(I.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: _()(eW.$O, eW.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != Z ? m.default.getUser(Z) : null;
                                  (0, Y._)({ targetUserId: Z, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: ef,
                          }),
                      })
                    : (0, a.jsxs)("span", {
                          className: eW.$O,
                          role: ec ? void 0 : "img",
                          "aria-label": ec ? void 0 : t,
                          children: [
                              ef,
                              ec &&
                                  (0, a.jsx)(j.PencilIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: eW.IZ,
                                      "aria-hidden": !0,
                                  }),
                          ],
                      })),
        ],
    });
    return ee
        ? (0, a.jsx)(T.Y, {
              targetElementRef: b,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: ea,
              onRequestClose: (e) => {
                  let t = e?.target;
                  G.current?.contains(t) === !0 || (t?.closest(`[${eF.m}]`) == null && el(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(en, { onClose: t });
              },
              children: () => eg,
          })
        : eg;
}
var eq = n(996988);
let eZ = {
    [eq.d.POPOUT]: 12,
    [eq.d.MODAL]: 26,
    [eq.d.SIDEBAR]: 13,
    [eq.d.VIDEO_TILE_BACKGROUND]: 12,
    [eq.d.EMBED]: 12,
};
function eQ(e) {
    let t,
        {
            displayProfile: n,
            themeType: f,
            isRedesignEnabled: g,
            pendingLegacyUsernameDisabled: E,
            pendingBadges: p,
            showPendingBadgeEdits: b = !1,
            onClose: x,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: v,
        } = e,
        N = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        R = n?.userId,
        I = (0, s.bG)([m.default], () => null != R && m.default.getUser(R)?.bot === !0, [R]),
        j = h(n, E),
        { pendingBadgeDisplayOrder: T, pendingBadgeHiddenBadges: y } = (0, u.A)(),
        C = (0, s.yK)([i.Ay], () => (b && null != R && i.Ay.hasCatalogFor(R) ? i.Ay.getBadges(R) : []), [b, R]),
        S = l.useMemo(() => {
            let e = j;
            if (null != p) {
                let t = new Set(j.map((e) => e.id));
                e = [...j, ...p.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, C, { pendingBadgeDisplayOrder: T, pendingBadgeHiddenBadges: y }) : e;
        }, [j, p, b, C, T, y]);
    if (0 === S.length && !b) return null;
    let D = N && !I,
        M = D ? Math.max(S.length - d.k9, 0) : 0;
    return (
        (t = D
            ? [S.slice(0, d.k9)]
            : f === eq.d.MODAL_V2
              ? [S]
              : (0, r.chunk)(S, !0 === g && f === eq.d.SIDEBAR ? eZ[eq.d.POPOUT] : eZ[f])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    eY,
                    {
                        badges: e,
                        overflowCount: M,
                        displayProfile: n,
                        onClose: x,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        popoutAnchorRef: v,
                    },
                    t,
                ),
            ),
        })
    );
}
