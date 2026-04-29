n.d(t, { V: () => eV, Z: () => eP });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(132500),
    o = n(494012),
    u = n(113325),
    c = n(331322),
    d = n(834730),
    m = n(534514),
    p = n(821609),
    g = n(509434);
if (/^(14256|21552)$/.test(n.j)) var f = n(141628);
if (/^(14256|21552)$/.test(n.j)) var h = n(815021);
var x = n(289873),
    A = n(17928),
    v = n(689175),
    E = n(793574),
    C = n(688810),
    I = n(46225),
    j = n(294323),
    _ = n(201718),
    S = n(47675),
    N = n(633075),
    b = n(841595),
    y = n(735321),
    w = n(975732),
    R = n(606758),
    k = n(605694),
    T = n(246356),
    D = n(332772),
    O = n(594832),
    L = n(862772),
    M = n(310209),
    V = n(495544),
    P = n(287809),
    F = n(954571),
    G = n(427262),
    H = n(871123),
    U = n(832163),
    z = n(453774),
    W = n(44724),
    $ = n(84511),
    B = n(310784),
    Y = n.n(B),
    Z = n(318254),
    Q = n(366010),
    K = n(187322),
    X = n(43990),
    q = n(778712),
    J = n(890856),
    ee = n(775602),
    et = n(587895),
    en = n(713517),
    ei = n(723090),
    el = n(363195),
    es = n(121700),
    ea = n(627001),
    er = n(754804),
    eo = n(317560),
    eu = n(533406),
    ec = n(366523),
    ed = n(652215),
    em = n(788868),
    ep = n(985018),
    eg = n(789901);
let ef = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: q._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    eh = Y()("#000000").darken(1.5).alpha(0.9).hex(),
    ex = Y()("#000000").alpha(0).hex(),
    eA = `linear-gradient(to top, ${eh} 30%, ${ex} 80%)`;
function ev(e) {
    var t, n;
    let {
            sku: s,
            targetUser: r,
            isTargetingCurrentUser: o,
            source: u,
            showIcons: c,
            guildId: m,
            channelId: g,
            analyticsLocations: f,
            onCardClick: h,
            onButtonClick: x,
        } = e,
        v = l.useRef(null),
        E = (0, A.bG)([el.A], () => (0, Q.M)(el.A.theme)),
        C = (0, A.bG)([ee.A], () => ee.A.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, en.A)(v),
        { guildId: j } = (0, H.nG)(s.applicationId),
        _ = (0, A.bG)([et.A], () => et.A.getApplication(s.applicationId)),
        { primaryIconAsset: S, primaryIconLabel: N } = l.useMemo(() => (0, H.Cv)(s, s.applicationId), [s]),
        {
            priceComponent: b,
            extendedHeight: y,
            displayPrice: w,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n } = e,
                {
                    normalPrice: s,
                    discountedPrice: a,
                    discountPercent: r,
                } = (0, ei.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                o = a ?? s,
                u = l.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, i.jsx)("div", {
                                  className: eg.pt,
                                  children: (0, i.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ep.intl.format(ep.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, i.jsx)(Z.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [t],
                );
            return null == t || null == o
                ? { priceComponent: null, extendedHeight: !1, displayPrice: o }
                : null != r && null != a
                  ? {
                        priceComponent: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: eg.p6,
                                    children: [
                                        null != s &&
                                            (0, i.jsx)(d.E, {
                                                className: eg.of,
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: s,
                                            }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-md/bold",
                                            color: "always-white",
                                            lineClamp: 1,
                                            children: a,
                                        }),
                                        (0, i.jsxs)(d.E, {
                                            variant: "text-md/bold",
                                            color: "text-feedback-positive",
                                            lineClamp: 1,
                                            children: ["(", r, ")"],
                                        }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                        extendedHeight: null != u,
                        displayPrice: o,
                    }
                  : {
                        priceComponent: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(d.E, {
                                    variant: "text-md/bold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: s,
                                }),
                                u,
                            ],
                        }),
                        extendedHeight: !1,
                        displayPrice: o,
                    };
        })({ sku: s, priceSetAssignmentPurchaseType: o ? ed.lid.DEFAULT : ed.lid.GIFT }),
        R = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    h?.(),
                    (0, eo.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: r,
                        giftingOrigin: em.vQ.GUILD_CHANNEL,
                        analyticsLocations: f,
                    });
            },
            [s.id, s.applicationId, r, f, h],
        ),
        k = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    x?.(),
                    (0, eu.a)(
                        s,
                        { isGift: !o, giftRecipient: r, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: j },
                    );
            },
            [s, r, o, f, j, x],
        );
    return (0, i.jsx)(K.vN, {
        children: (0, i.jsxs)(J.s, {
            onClick: R,
            className: a()(eg.Nr, { [eg.Zl]: !C, [eg.BN]: E, [eg.YF]: I }),
            ref: v,
            "aria-label": s.name,
            children: [
                (0, i.jsx)(ea.P, { spec: ef, application: _ }),
                (0, i.jsx)(es.A, {
                    spec: ef,
                    sku: s,
                    isCardHovered: I,
                    location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                    replacedElement:
                        c && !o && u === O.uS.WISHLIST
                            ? (0, i.jsx)(er.n, { spec: ef, user: r, guildId: m ?? void 0, channelId: g ?? void 0 })
                            : null,
                }),
                (0, i.jsx)(ec.e, {
                    shape: "custom",
                    sku: s,
                    containerClassName: eg.Vl,
                    foregroundImageClassName: eg.wP,
                    backgroundImageClassName: eg.GC,
                    cssPosition: "absolute",
                }),
                (0, i.jsx)("div", { className: eg.iZ, style: { background: eA } }),
                (0, i.jsx)(X.N, {
                    theme: ed.NJ8.DARKER,
                    children: (e) =>
                        (0, i.jsxs)("div", {
                            className: a()(eg.zH, e),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: a()(eg.gn, { [eg.ov]: null == b, [eg.w4]: y }),
                                    children: [
                                        null != S && (0, i.jsx)("img", { src: S.toString(), alt: N, className: eg.ye }),
                                        (0, i.jsx)(d.E, {
                                            color: "always-white",
                                            variant: "text-md/medium",
                                            lineClamp: 1,
                                            children: s.name,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: eg.iQ, children: b }),
                            ],
                        }),
                }),
                (0, i.jsx)("div", {
                    className: eg.li,
                    children: (0, i.jsx)(p.$, {
                        variant: "primary",
                        onClick: k,
                        text:
                            ((t = w),
                            (n = o),
                            null != t
                                ? n
                                    ? ep.intl.format(ep.t.Xp5WTn, { price: t })
                                    : ep.intl.format(ep.t.o2WeeD, { price: t })
                                : n
                                  ? ep.intl.string(ep.t.boqtTA)
                                  : ep.intl.string(ep.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
var eE = n(661492),
    eC = n(212387),
    eI = n(662349);
let ej = n(699976).Z.SIZE_90;
function e_(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: s,
            source: a,
            showIcons: r,
            guildId: o,
            channelId: u,
            analyticsLocations: c,
            onCardClick: d,
            onButtonClick: m,
        } = e,
        [p, g] = l.useState(!1),
        { guildId: f } = (0, H.nG)(t.applicationId),
        h = l.useCallback(() => {
            d?.(),
                (0, eo.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: em.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                });
        }, [t.id, t.applicationId, n, c, d]),
        x = l.useCallback(() => {
            m?.(),
                (0, eu.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                );
        }, [t, n, s, c, f, m]),
        { label: A, icon: v } = (0, eI.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, i.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: ej,
        onClick: h,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, eE.TC)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, i.jsx)(eI.A, { spec: ej, onClick: x, isHoveringOrFocusing: p, label: A, icon: v }),
            (0, i.jsx)(es.A, {
                spec: ej,
                sku: t,
                isCardHovered: p,
                location: "SocialLayerGiftingVoicePanelSkuItemCard",
                replacedElement:
                    r && !s && a === O.uS.WISHLIST
                        ? (0, i.jsx)(er.n, { spec: ej, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                        : null,
            }),
        ],
    });
}
var eS = n(360469),
    eN = n(518477),
    eb = n(932231);
let ey = `vc-gifting-${(0, r.A)()}`,
    ew = Object.freeze([]);
function eR(e) {
    let { className: t, "aria-labelledby": n, children: l } = e,
        { ref: s, height: r = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: d = 1 / 0 } = (0, o.Ay)(),
        m = d > r ? v.Ch : "div";
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(T.A, {
            children: (0, i.jsx)(u.l, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, i.jsx)("div", {
                    ref: s,
                    className: a()(t, eb.kL),
                    children: (0, i.jsx)(m, { className: eb.U, children: (0, i.jsx)("div", { ref: c, children: l }) }),
                }),
            }),
        }),
    });
}
function ek(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(eS.iu.SMALL);
    return (0, i.jsxs)(c.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: eb.In, src: n, alt: t.name }),
            (0, i.jsx)(d.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function eT(e) {
    let { user: t, isGift: n } = e,
        l = ep.intl.string(ep.t.kv4lSp),
        s = ep.intl.string(ep.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? ep.intl.format(ep.t.YwV901, { username: G.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (s = ep.intl.string(ep.t.SSgrne))),
        (0, i.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(m.D, { id: ey, variant: "text-md/normal", children: l }),
                (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eD(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        a = l.useCallback(() => {
            if (null != s) {
                let e = U.A.getGuildIdFromApplicationId(s);
                null != e && (0, W.X)({ guildId: e });
            }
        }, [s]),
        r = l.useCallback(() => {
            if (null != s) {
                let e = U.A.getGuildIdFromApplicationId(s);
                null != e && (n(), (0, W.default)({ guildId: e }));
            }
        }, [s, n]);
    return null == t
        ? null
        : (0, i.jsx)(p.$, {
              variant: "secondary",
              icon: g.I,
              iconPosition: "end",
              text: ep.intl.format(ep.t["HDT/rg"], { applicationName: t.name }),
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          });
}
function eO(e) {
    let { userId: t, applicationId: n, channel: i, numItems: s } = e,
        a = l.useMemo(() => [t], [t]),
        r = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, L.XQ)({ userIds: a, applicationIds: r, numItems: s }),
        d = (function (e, t) {
            let [n, i] = l.useState(() => ({ items: e, orderedItems: e }));
            return (
                n.items !== e &&
                    i((n) => {
                        let i = [
                            ...n.orderedItems.map((n) => e.find((e) => t(n, e))).filter((e) => null != e),
                            ...e.filter((e) => !n.orderedItems.some((n) => t(n, e))),
                        ];
                        return { items: e, orderedItems: i };
                    }),
                n.orderedItems
            );
        })("loading" === o || 0 === u.length ? ew : u, eL),
        m = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, H.wH)(u, c, new Set(a));
            return e && t;
        }, [u, c, a]);
    return (
        l.useEffect(() => {
            0 !== u.length &&
                F.default.track(ed.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [i.id, i.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function eL(e, t) {
    return e.id === t.id;
}
function eM(e) {
    let { text: t, onDismiss: n } = e;
    return (0, i.jsxs)("div", {
        className: eb.OQ,
        children: [
            (0, i.jsx)("div", { className: eb.bC }),
            (0, i.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(f.A, { className: eb.Ku, size: "xs" }),
                    (0, i.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, i.jsx)(h.J, { size: "xs", onClick: n }),
        ],
    });
}
function eV(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r, canShowCTA: o, onDismissCTA: u } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" }), (0, _.P)(n);
    let { analyticsLocations: d } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        m = (0, A.bG)([P.default], () => P.default.getUser(n)),
        p = l.useMemo(() => new N.R({ applicationId: s }), [s]),
        g = (0, A.bG)([b.A], () => b.A.getWidgets(n)?.find((e) => e instanceof N.R && e.applicationId === s)),
        f = (0, A.bG)([V.default], () => V.default.getId()),
        h = n === f,
        v = (function (e) {
            let {
                    currentUserId: t,
                    applicationId: n,
                    location: s,
                    onClose: a,
                    canShowCTA: r,
                    onDismissCTA: o,
                    isTargetingCurrentUser: u,
                } = e,
                {
                    isLoading: c,
                    application: d,
                    applicationWidgetConfig: m,
                    profileApplicationWidget: p,
                } = (0, j.A)(r ? t : void 0, r ? n : void 0, s),
                {
                    fetched: g,
                    hasAlreadyLinked: f,
                    canStartAuthorization: h,
                    startAuthorization: x,
                } = (0, I.RD)(r ? d : void 0),
                { analyticsLocations: A } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                v = l.useCallback(() => {
                    h && x({ analyticsLocations: A });
                }, [A, h, x]),
                _ = l.useCallback(() => {
                    a(), (0, w.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: A });
                    let e = new N.R({ applicationId: n });
                    (0, y.Y5)(e),
                        (0, S.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, R.XA)(eN.jM.WIDGET_ADDED), 700);
                }, [A, n, t, a]);
            return r && !c && g && null != m
                ? !f && h
                    ? (0, i.jsx)(eM, {
                          text: ep.intl.format(u ? ep.t.YWa8L2 : ep.t.xxPgmT, { onClick: v }),
                          onDismiss: o,
                      })
                    : f && null == p && null != d
                      ? (0, i.jsx)(eM, {
                            text: ep.intl.format(ep.t.QuIwht, { applicationName: d.name, onClick: _ }),
                            onDismiss: o,
                        })
                      : null
                : null;
        })({
            currentUserId: f,
            applicationId: s,
            location: "social_layer_gifting_voice_panel",
            onClose: r,
            canShowCTA: o,
            onDismissCTA: u,
            isTargetingCurrentUser: h,
        }),
        T = (0, z.A)(s),
        {
            status: L,
            recommendations: F,
            skusToUserAndReason: G,
            hasBothSources: H,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        U = "loading" === L || 0 === F.length || null == m,
        W = l.useMemo(
            () =>
                null == m || 0 === F.length
                    ? []
                    : (F.length > 8 ? F.slice(0, 8) : F).map((e) => {
                          let t = (G[e.id] ?? {})[n] === M.j.WISHLIST;
                          return (0, i.jsx)(
                              e_,
                              {
                                  sku: e,
                                  targetUser: m,
                                  isTargetingCurrentUser: h,
                                  source: t ? O.uS.WISHLIST : O.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: H,
                                  analyticsLocations: d,
                                  onCardClick: r,
                                  onButtonClick: r,
                              },
                              e.id,
                          );
                      }),
            [m, F, a.guild_id, a.id, G, n, h, H, d, r],
        );
    return (0, i.jsxs)(eR, {
        className: t,
        "aria-labelledby": ey,
        children: [
            (0, i.jsxs)(c.B, {
                className: eb.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != m
                        ? (0, i.jsxs)("div", {
                              className: eb.p,
                              children: [
                                  (0, i.jsx)(k.A, {
                                      user: m,
                                      widget: g ?? p,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      disableInteraction: !0,
                                      disableCTA: null != v,
                                      embedded: !0,
                                  }),
                                  v,
                              ],
                          })
                        : (0, i.jsx)(ek, { application: T }),
                    (0, i.jsx)(eT, { user: m, isGift: !h }),
                ],
            }),
            U ? (0, i.jsx)(x.y, { className: eb.Zp }) : (0, i.jsx)("div", { className: eb.HV, children: W }),
            (0, i.jsx)(eD, { application: T, onClose: r }),
            (0, i.jsx)($.A, { location: "social_layer_vc_gifting_panel", className: eb.Ij }),
        ],
    });
}
function eP(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: o } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, A.bG)([P.default], () => P.default.getUser(n)),
        d = n === (0, A.bG)([V.default], () => V.default.getId()),
        m = (0, z.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: f,
            hasBothSources: h,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        v = "loading" === p || 0 === g.length || null == u,
        [I, j] = l.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (f[e[0].id] ?? {})[n] === M.j.WISHLIST;
            return [
                (0, i.jsx)(ev, {
                    sku: e[0],
                    targetUser: u,
                    isTargetingCurrentUser: d,
                    source: t ? O.uS.WISHLIST : O.uS.POPULAR,
                    guildId: a.guild_id,
                    channelId: a.id,
                    showIcons: h,
                    analyticsLocations: o,
                    onCardClick: r,
                    onButtonClick: r,
                }),
                e.slice(1).map((e) => {
                    let t = (f[e.id] ?? {})[n] === M.j.WISHLIST;
                    return (0, i.jsx)(
                        e_,
                        {
                            sku: e,
                            targetUser: u,
                            isTargetingCurrentUser: d,
                            source: t ? O.uS.WISHLIST : O.uS.POPULAR,
                            guildId: a.guild_id,
                            channelId: a.id,
                            showIcons: h,
                            analyticsLocations: o,
                            onCardClick: r,
                            onButtonClick: r,
                        },
                        e.id,
                    );
                }),
            ];
        }, [u, g, f, n, d, a.guild_id, a.id, h, o, r]);
    return (0, i.jsxs)(eR, {
        className: t,
        "aria-labelledby": ey,
        children: [
            (0, i.jsxs)(c.B, {
                className: eb.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(ek, { application: m }), (0, i.jsx)(eT, { user: u, isGift: !d })],
            }),
            v
                ? (0, i.jsx)(x.y, { className: eb.kc })
                : (0, i.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [I, (0, i.jsx)("div", { className: eb.aS, children: j })],
                  }),
            (0, i.jsx)(eD, { application: m, onClose: r }),
            (0, i.jsx)($.A, { location: "social_layer_vc_gifting_panel", className: eb.Ij }),
        ],
    });
}
