n.d(t, { V: () => eF, Z: () => eV });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(835245),
    o = n(494012),
    u = n(113325),
    c = n(331322),
    d = n(834730),
    m = n(534514),
    p = n(821609),
    g = n(509434);
if (/^(14256|21552)$/.test(n.j)) var f = n(141628);
if (/^(14256|21552)$/.test(n.j)) var h = n(815021);
var A = n(289873),
    x = n(17928),
    E = n(689175),
    v = n(793574),
    C = n(688810),
    I = n(46225),
    _ = n(294323),
    j = n(201718),
    S = n(47675),
    N = n(633075),
    b = n(841595),
    y = n(735321),
    w = n(975732),
    T = n(606758),
    R = n(605694),
    k = n(246356),
    D = n(332772),
    O = n(561794),
    M = n(862772),
    L = n(310209),
    F = n(495544),
    V = n(287809),
    P = n(174459),
    G = n(427262),
    H = n(871123),
    U = n(832163),
    z = n(453774),
    W = n(44724),
    $ = n(84511),
    B = n(310784),
    Y = n.n(B),
    Z = n(318254),
    K = n(366010),
    Q = n(187322),
    X = n(43990),
    q = n(778712),
    J = n(890856),
    ee = n(775602),
    et = n(587895),
    en = n(713517),
    el = n(723090),
    ei = n(363195),
    es = n(121700),
    ea = n(627001),
    er = n(754804),
    eo = n(317560),
    eu = n(533406),
    ec = n(366523),
    ed = n(652215),
    em = n(788868),
    ep = n(375708),
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
    eA = Y()("#000000").alpha(0).hex(),
    ex = `linear-gradient(to top, ${eh} 30%, ${eA} 80%)`;
function eE(e) {
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
            onButtonClick: A,
        } = e,
        E = i.useRef(null),
        v = (0, x.bG)([ei.A], () => (0, K.M)(ei.A.theme)),
        C = (0, x.bG)([ee.A], () => ee.A.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, en.A)(E),
        { guildId: _ } = (0, H.nG)(s.applicationId),
        j = (0, x.bG)([et.A], () => et.A.getApplication(s.applicationId)),
        { primaryIconAsset: S, primaryIconLabel: N } = i.useMemo(() => (0, H.Cv)(s, s.applicationId), [s]),
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
                } = (0, el.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                o = a ?? s,
                u = i.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, l.jsx)("div", {
                                  className: eg.pt,
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ep.intl.format(ep.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, l.jsx)(Z.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
                        priceComponent: (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eg.p6,
                                    children: [
                                        null != s &&
                                            (0, l.jsx)(d.E, {
                                                className: eg.of,
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: s,
                                            }),
                                        (0, l.jsx)(d.E, {
                                            variant: "text-md/bold",
                                            color: "always-white",
                                            lineClamp: 1,
                                            children: a,
                                        }),
                                        (0, l.jsxs)(d.E, {
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
                        priceComponent: (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.E, {
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
        T = i.useCallback(
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
        R = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    A?.(),
                    (0, eu.a)(
                        s,
                        { isGift: !o, giftRecipient: r, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: _ },
                    );
            },
            [s, r, o, f, _, A],
        );
    return (0, l.jsx)(Q.vN, {
        children: (0, l.jsxs)(J.s, {
            onClick: T,
            className: a()(eg.Nr, { [eg.Zl]: !C, [eg.BN]: v, [eg.YF]: I }),
            ref: E,
            "aria-label": s.name,
            children: [
                (0, l.jsx)(ea.P, { spec: ef, application: j }),
                (0, l.jsx)(es.A, {
                    spec: ef,
                    sku: s,
                    isCardHovered: I,
                    location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                    replacedElement:
                        c && !o && u === O.uS.WISHLIST
                            ? (0, l.jsx)(er.n, { spec: ef, user: r, guildId: m ?? void 0, channelId: g ?? void 0 })
                            : null,
                }),
                (0, l.jsx)(ec.e, {
                    shape: "custom",
                    sku: s,
                    containerClassName: eg.Vl,
                    foregroundImageClassName: eg.wP,
                    backgroundImageClassName: eg.GC,
                    cssPosition: "absolute",
                }),
                (0, l.jsx)("div", { className: eg.iZ, style: { background: ex } }),
                (0, l.jsx)(X.N, {
                    theme: ed.NJ8.DARKER,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: a()(eg.zH, e),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: a()(eg.gn, { [eg.ov]: null == b, [eg.w4]: y }),
                                    children: [
                                        null != S && (0, l.jsx)("img", { src: S.toString(), alt: N, className: eg.ye }),
                                        (0, l.jsx)(d.E, {
                                            color: "always-white",
                                            variant: "text-md/medium",
                                            lineClamp: 1,
                                            children: s.name,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: eg.iQ, children: b }),
                            ],
                        }),
                }),
                (0, l.jsx)("div", {
                    className: eg.li,
                    children: (0, l.jsx)(p.$, {
                        variant: "primary",
                        onClick: R,
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
var ev = n(661492),
    eC = n(212387),
    eI = n(662349);
let e_ = n(699976).Z.SIZE_90;
function ej(e) {
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
        [p, g] = i.useState(!1),
        { guildId: f } = (0, H.nG)(t.applicationId),
        h = i.useCallback(() => {
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
        A = i.useCallback(() => {
            m?.(),
                (0, eu.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                );
        }, [t, n, s, c, f, m]),
        { label: x, icon: E } = (0, eI.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: e_,
        onClick: h,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, ev.TC)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(eI.A, { spec: e_, onClick: A, isHoveringOrFocusing: p, label: x, icon: E }),
            (0, l.jsx)(es.A, {
                spec: e_,
                sku: t,
                isCardHovered: p,
                location: "SocialLayerGiftingVoicePanelSkuItemCard",
                replacedElement:
                    r && !s && a === O.uS.WISHLIST
                        ? (0, l.jsx)(er.n, { spec: e_, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
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
function eT(e) {
    let { className: t, "aria-labelledby": n, children: i } = e,
        { ref: s, height: r = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: d = 1 / 0 } = (0, o.Ay)(),
        m = d > r ? E.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(k.A, {
            children: (0, l.jsx)(u.l, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, l.jsx)("div", {
                    ref: s,
                    className: a()(t, eb.kL),
                    children: (0, l.jsx)(m, { className: eb.U, children: (0, l.jsx)("div", { ref: c, children: i }) }),
                }),
            }),
        }),
    });
}
function eR(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(eS.iu.SMALL);
    return (0, l.jsxs)(c.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, l.jsx)("img", { className: eb.In, src: n, alt: t.name }),
            (0, l.jsx)(d.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function ek(e) {
    let { user: t, isGift: n } = e,
        i = ep.intl.string(ep.t.kv4lSp),
        s = ep.intl.string(ep.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? ep.intl.format(ep.t.YwV901, { username: G.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (s = ep.intl.string(ep.t.SSgrne))),
        (0, l.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(m.D, { id: ey, variant: "text-md/normal", children: i }),
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eD(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        a = i.useCallback(() => {
            if (null != s) {
                let e = U.A.getGuildIdFromApplicationId(s);
                null != e && (0, W.X)({ guildId: e });
            }
        }, [s]),
        r = i.useCallback(() => {
            if (null != s) {
                let e = U.A.getGuildIdFromApplicationId(s);
                null != e && (n(), (0, W.default)({ guildId: e }));
            }
        }, [s, n]);
    return null == t
        ? null
        : (0, l.jsx)(p.$, {
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
    let { userId: t, applicationId: n, channel: l, numItems: s } = e,
        a = i.useMemo(() => [t], [t]),
        r = i.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, M.XQ)({ userIds: a, applicationIds: r, numItems: s }),
        d = (function (e, t) {
            let [n, l] = i.useState(() => ({ items: e, orderedItems: e }));
            return (
                n.items !== e &&
                    l((n) => {
                        let l = [
                            ...n.orderedItems.map((n) => e.find((e) => t(n, e))).filter((e) => null != e),
                            ...e.filter((e) => !n.orderedItems.some((n) => t(n, e))),
                        ];
                        return { items: e, orderedItems: l };
                    }),
                n.orderedItems
            );
        })("loading" === o || 0 === u.length ? ew : u, eM),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, H.wH)(u, c, new Set(a));
            return e && t;
        }, [u, c, a]);
    return (
        i.useEffect(() => {
            0 !== u.length &&
                P.default.track(ed.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [l.id, l.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function eM(e, t) {
    return e.id === t.id;
}
function eL(e) {
    let { text: t, onDismiss: n } = e;
    return (0, l.jsxs)("div", {
        className: eb.OQ,
        children: [
            (0, l.jsx)("div", { className: eb.bC }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(f.A, { className: eb.Ku, size: "xs" }),
                    (0, l.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(h.J, { size: "xs", onClick: n }),
        ],
    });
}
function eF(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r, canShowCTA: o, onDismissCTA: u } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" }), (0, j.P)(n);
    let { analyticsLocations: d } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        m = (0, x.bG)([V.default], () => V.default.getUser(n)),
        p = i.useMemo(() => new N.R({ applicationId: s }), [s]),
        g = (0, x.bG)([b.A], () => b.A.getWidgets(n)?.find((e) => e instanceof N.R && e.applicationId === s)),
        f = (0, x.bG)([F.default], () => F.default.getId()),
        h = n === f,
        E = (function (e) {
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
                } = (0, _.A)(r ? t : void 0, r ? n : void 0, s),
                {
                    fetched: g,
                    hasAlreadyLinked: f,
                    canStartAuthorization: h,
                    startAuthorization: A,
                } = (0, I.RD)(r ? d : void 0),
                { analyticsLocations: x } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                E = i.useCallback(() => {
                    h && A({ analyticsLocations: x });
                }, [x, h, A]),
                j = i.useCallback(() => {
                    a(), (0, w.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x });
                    let e = new N.R({ applicationId: n });
                    (0, y.Y5)(e),
                        (0, S.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, T.XA)(eN.jM.WIDGET_ADDED), 700);
                }, [x, n, t, a]);
            return r && !c && g && null != m
                ? !f && h
                    ? (0, l.jsx)(eL, {
                          text: ep.intl.format(u ? ep.t.YWa8L2 : ep.t.xxPgmT, { onClick: E }),
                          onDismiss: o,
                      })
                    : f && null == p && null != d
                      ? (0, l.jsx)(eL, {
                            text: ep.intl.format(ep.t.QuIwht, { applicationName: d.name, onClick: j }),
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
        k = (0, z.A)(s),
        {
            status: M,
            recommendations: P,
            skusToUserAndReason: G,
            hasBothSources: H,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        U = "loading" === M || 0 === P.length || null == m,
        W = i.useMemo(
            () =>
                null == m || 0 === P.length
                    ? []
                    : (P.length > 8 ? P.slice(0, 8) : P).map((e) => {
                          let t = (G[e.id] ?? {})[n] === L.j.WISHLIST;
                          return (0, l.jsx)(
                              ej,
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
            [m, P, a.guild_id, a.id, G, n, h, H, d, r],
        );
    return (0, l.jsxs)(eT, {
        className: t,
        "aria-labelledby": ey,
        children: [
            (0, l.jsxs)(c.B, {
                className: eb.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != m
                        ? (0, l.jsxs)("div", {
                              className: eb.p,
                              children: [
                                  (0, l.jsx)(R.A, {
                                      user: m,
                                      widget: g ?? p,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      disableInteraction: !0,
                                      disableCTA: null != E,
                                      embedded: !0,
                                  }),
                                  E,
                              ],
                          })
                        : (0, l.jsx)(eR, { application: k }),
                    (0, l.jsx)(ek, { user: m, isGift: !h }),
                ],
            }),
            U ? (0, l.jsx)(A.y, { className: eb.Zp }) : (0, l.jsx)("div", { className: eb.HV, children: W }),
            (0, l.jsx)(eD, { application: k, onClose: r }),
            (0, l.jsx)($.A, { location: "social_layer_vc_gifting_panel", className: eb.Ij }),
        ],
    });
}
function eV(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: o } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, x.bG)([V.default], () => V.default.getUser(n)),
        d = n === (0, x.bG)([F.default], () => F.default.getId()),
        m = (0, z.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: f,
            hasBothSources: h,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        E = "loading" === p || 0 === g.length || null == u,
        [I, _] = i.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (f[e[0].id] ?? {})[n] === L.j.WISHLIST;
            return [
                (0, l.jsx)(eE, {
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
                    let t = (f[e.id] ?? {})[n] === L.j.WISHLIST;
                    return (0, l.jsx)(
                        ej,
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
    return (0, l.jsxs)(eT, {
        className: t,
        "aria-labelledby": ey,
        children: [
            (0, l.jsxs)(c.B, {
                className: eb.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(eR, { application: m }), (0, l.jsx)(ek, { user: u, isGift: !d })],
            }),
            E
                ? (0, l.jsx)(A.y, { className: eb.kc })
                : (0, l.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [I, (0, l.jsx)("div", { className: eb.aS, children: _ })],
                  }),
            (0, l.jsx)(eD, { application: m, onClose: r }),
            (0, l.jsx)($.A, { location: "social_layer_vc_gifting_panel", className: eb.Ij }),
        ],
    });
}
