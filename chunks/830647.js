n.d(t, { V: () => eM, Z: () => eV });
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
    F = n(287809),
    P = n(954571),
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
    X = n(778712),
    q = n(890856),
    J = n(775602),
    ee = n(587895),
    et = n(713517),
    en = n(723090),
    ei = n(363195),
    el = n(121700),
    es = n(627001),
    ea = n(754804),
    er = n(317560),
    eo = n(533406),
    eu = n(366523),
    ec = n(652215),
    ed = n(788868),
    em = n(985018),
    ep = n(789901);
let eg = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: X._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    ef = Y()("#000000").darken(1.5).alpha(0.9).hex(),
    eh = Y()("#000000").alpha(0).hex(),
    ex = `linear-gradient(to top, ${ef} 30%, ${eh} 80%)`;
function eA(e) {
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
        E = (0, A.bG)([ei.A], () => (0, Q.M)(ei.A.theme)),
        C = (0, A.bG)([J.A], () => J.A.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, et.A)(v),
        { guildId: j } = (0, H.nG)(s.applicationId),
        _ = (0, A.bG)([ee.A], () => ee.A.getApplication(s.applicationId)),
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
                } = (0, en.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                o = a ?? s,
                u = l.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, i.jsx)("div", {
                                  className: ep.pt,
                                  children: (0, i.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: em.intl.format(em.t.GiVd2Q, {
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
                                    className: ep.p6,
                                    children: [
                                        null != s &&
                                            (0, i.jsx)(d.E, {
                                                className: ep.of,
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
        })({ sku: s, priceSetAssignmentPurchaseType: o ? ec.lid.DEFAULT : ec.lid.GIFT }),
        R = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    h?.(),
                    (0, er.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: r,
                        giftingOrigin: ed.vQ.GUILD_CHANNEL,
                        analyticsLocations: f,
                    });
            },
            [s.id, s.applicationId, r, f, h],
        ),
        k = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    x?.(),
                    (0, eo.a)(
                        s,
                        { isGift: !o, giftRecipient: r, giftingOrigin: ed.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: j },
                    );
            },
            [s, r, o, f, j, x],
        );
    return (0, i.jsx)(K.vN, {
        children: (0, i.jsxs)(q.s, {
            onClick: R,
            className: a()(ep.Nr, { [ep.Zl]: !C, [ep.BN]: E, [ep.YF]: I }),
            ref: v,
            "aria-label": s.name,
            children: [
                (0, i.jsx)(es.P, { spec: eg, application: _ }),
                (0, i.jsx)(el.A, {
                    spec: eg,
                    sku: s,
                    isCardHovered: I,
                    location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                    replacedElement:
                        c && !o && u === O.uS.WISHLIST
                            ? (0, i.jsx)(ea.n, { spec: eg, user: r, guildId: m ?? void 0, channelId: g ?? void 0 })
                            : null,
                }),
                (0, i.jsx)(eu.e, {
                    shape: "custom",
                    sku: s,
                    containerClassName: ep.Vl,
                    foregroundImageClassName: ep.wP,
                    backgroundImageClassName: ep.GC,
                }),
                (0, i.jsx)("div", { className: ep.iZ, style: { background: ex } }),
                (0, i.jsxs)("div", {
                    className: ep.zH,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(ep.gn, { [ep.ov]: null == b, [ep.w4]: y }),
                            children: [
                                null != S && (0, i.jsx)("img", { src: S.toString(), alt: N, className: ep.ye }),
                                (0, i.jsx)(d.E, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: s.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: ep.iQ, children: b }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ep.li,
                    children: (0, i.jsx)(p.$, {
                        variant: "primary",
                        onClick: k,
                        text:
                            ((t = w),
                            (n = o),
                            null != t
                                ? n
                                    ? em.intl.format(em.t.Xp5WTn, { price: t })
                                    : em.intl.format(em.t.o2WeeD, { price: t })
                                : n
                                  ? em.intl.string(em.t.boqtTA)
                                  : em.intl.string(em.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
var ev = n(661492),
    eE = n(212387),
    eC = n(662349);
let eI = n(699976).Z.SIZE_90;
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
        [p, g] = l.useState(!1),
        { guildId: f } = (0, H.nG)(t.applicationId),
        h = l.useCallback(() => {
            d?.(),
                (0, er.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: ed.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                });
        }, [t.id, t.applicationId, n, c, d]),
        x = l.useCallback(() => {
            m?.(),
                (0, eo.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: ed.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                );
        }, [t, n, s, c, f, m]),
        { label: A, icon: v } = (0, eC.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, i.jsxs)(eE.A, {
        sku: t,
        user: n,
        spec: eI,
        onClick: h,
        "aria-label": em.intl.formatToPlainString(em.t.ZBB4Ty, { productName: (0, ev.TC)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, i.jsx)(eC.A, { spec: eI, onClick: x, isHoveringOrFocusing: p, label: A, icon: v }),
            (0, i.jsx)(el.A, {
                spec: eI,
                sku: t,
                isCardHovered: p,
                location: "SocialLayerGiftingVoicePanelSkuItemCard",
                replacedElement:
                    r && !s && a === O.uS.WISHLIST
                        ? (0, i.jsx)(ea.n, { spec: eI, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                        : null,
            }),
        ],
    });
}
var e_ = n(360469),
    eS = n(518477),
    eN = n(932231);
let eb = `vc-gifting-${(0, r.A)()}`,
    ey = Object.freeze([]);
function ew(e) {
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
                    className: a()(t, eN.kL),
                    children: (0, i.jsx)(m, { className: eN.U, children: (0, i.jsx)("div", { ref: c, children: l }) }),
                }),
            }),
        }),
    });
}
function eR(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(e_.iu.SMALL);
    return (0, i.jsxs)(c.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: eN.In, src: n, alt: t.name }),
            (0, i.jsx)(d.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function ek(e) {
    let { user: t, isGift: n } = e,
        l = em.intl.string(em.t.kv4lSp),
        s = em.intl.string(em.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? em.intl.format(em.t.YwV901, { username: G.Ay.getName(t) }) : em.intl.string(em.t.qCmNFr)),
            (s = em.intl.string(em.t.SSgrne))),
        (0, i.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(m.D, { id: eb, variant: "text-md/normal", children: l }),
                (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eT(e) {
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
              text: em.intl.format(em.t["HDT/rg"], { applicationName: t.name }),
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          });
}
function eD(e) {
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
        })("loading" === o || 0 === u.length ? ey : u, eO),
        m = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, H.wH)(u, c, new Set(a));
            return e && t;
        }, [u, c, a]);
    return (
        l.useEffect(() => {
            0 !== u.length &&
                P.default.track(ec.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [i.id, i.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function eO(e, t) {
    return e.id === t.id;
}
function eL(e) {
    let { text: t, onDismiss: n } = e;
    return (0, i.jsxs)("div", {
        className: eN.OQ,
        children: [
            (0, i.jsx)("div", { className: eN.bC }),
            (0, i.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(f.A, { className: eN.Ku, size: "xs" }),
                    (0, i.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, i.jsx)(h.J, { size: "xs", onClick: n }),
        ],
    });
}
function eM(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r, canShowCTA: o, onDismissCTA: u } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" }), (0, _.P)(n);
    let { analyticsLocations: d } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        m = (0, A.bG)([F.default], () => F.default.getUser(n)),
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
                        setTimeout(() => (0, R.XA)(eS.jM.WIDGET_ADDED), 700);
                }, [A, n, t, a]);
            return r && !c && g && null != m
                ? !f && h
                    ? (0, i.jsx)(eL, {
                          text: em.intl.format(u ? em.t.YWa8L2 : em.t.xxPgmT, { onClick: v }),
                          onDismiss: o,
                      })
                    : f && null == p && null != d
                      ? (0, i.jsx)(eL, {
                            text: em.intl.format(em.t.QuIwht, { applicationName: d.name, onClick: _ }),
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
            recommendations: P,
            skusToUserAndReason: G,
            hasBothSources: H,
        } = eD({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        U = "loading" === L || 0 === P.length || null == m,
        W = l.useMemo(
            () =>
                null == m || 0 === P.length
                    ? []
                    : (P.length > 8 ? P.slice(0, 8) : P).map((e) => {
                          let t = (G[e.id] ?? {})[n] === M.j.WISHLIST;
                          return (0, i.jsx)(
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
    return (0, i.jsxs)(ew, {
        className: t,
        "aria-labelledby": eb,
        children: [
            (0, i.jsxs)(c.B, {
                className: eN.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != m
                        ? (0, i.jsxs)("div", {
                              className: eN.p,
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
                        : (0, i.jsx)(eR, { application: T }),
                    (0, i.jsx)(ek, { user: m, isGift: !h }),
                ],
            }),
            U ? (0, i.jsx)(x.y, { className: eN.Zp }) : (0, i.jsx)("div", { className: eN.HV, children: W }),
            (0, i.jsx)(eT, { application: T, onClose: r }),
            (0, i.jsx)($.A, { location: "social_layer_vc_gifting_panel", className: eN.Ij }),
        ],
    });
}
function eV(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r } = e;
    (0, D.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: o } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, A.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, A.bG)([V.default], () => V.default.getId()),
        m = (0, z.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: f,
            hasBothSources: h,
        } = eD({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        v = "loading" === p || 0 === g.length || null == u,
        [I, j] = l.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (f[e[0].id] ?? {})[n] === M.j.WISHLIST;
            return [
                (0, i.jsx)(eA, {
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
    return (0, i.jsxs)(ew, {
        className: t,
        "aria-labelledby": eb,
        children: [
            (0, i.jsxs)(c.B, {
                className: eN.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(eR, { application: m }), (0, i.jsx)(ek, { user: u, isGift: !d })],
            }),
            v
                ? (0, i.jsx)(x.y, { className: eN.kc })
                : (0, i.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [I, (0, i.jsx)("div", { className: eN.aS, children: j })],
                  }),
            (0, i.jsx)(eT, { application: m, onClose: r }),
            (0, i.jsx)($.A, { location: "social_layer_vc_gifting_panel", className: eN.Ij }),
        ],
    });
}
