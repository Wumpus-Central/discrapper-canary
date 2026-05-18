n.d(t, { V: () => eM, Z: () => eL });
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
    j = n(294323),
    _ = n(201718),
    S = n(47675),
    N = n(633075),
    b = n(841595),
    y = n(735321),
    w = n(975732),
    R = n(606758),
    T = n(605694),
    D = n(246356),
    k = n(561794),
    O = n(862772),
    M = n(310209),
    L = n(495544),
    F = n(287809),
    V = n(174459),
    P = n(427262),
    G = n(871123),
    H = n(832163),
    U = n(453774),
    z = n(44724),
    W = n(84511),
    $ = n(310784),
    B = n.n($),
    Y = n(318254),
    Z = n(366010),
    K = n(187322),
    Q = n(43990),
    X = n(778712),
    q = n(890856),
    J = n(775602),
    ee = n(587895),
    et = n(713517),
    en = n(723090),
    el = n(363195),
    ei = n(627001),
    es = n(754804),
    ea = n(317560),
    er = n(533406),
    eo = n(366523),
    eu = n(652215),
    ec = n(788868),
    ed = n(375708),
    em = n(789901);
let ep = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: X._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    eg = B()("#000000").darken(1.5).alpha(0.9).hex(),
    ef = B()("#000000").alpha(0).hex(),
    eh = `linear-gradient(to top, ${eg} 30%, ${ef} 80%)`;
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
            onButtonClick: A,
        } = e,
        E = i.useRef(null),
        v = (0, x.bG)([el.A], () => (0, Z.M)(el.A.theme)),
        C = (0, x.bG)([J.A], () => J.A.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, et.A)(E),
        { guildId: j } = (0, G.nG)(s.applicationId),
        _ = (0, x.bG)([ee.A], () => ee.A.getApplication(s.applicationId)),
        { primaryIconAsset: S, primaryIconLabel: N } = i.useMemo(() => (0, G.Cv)(s, s.applicationId), [s]),
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
                u = i.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, l.jsx)("div", {
                                  className: em.pt,
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ed.intl.format(ed.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, l.jsx)(Y.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
                                    className: em.p6,
                                    children: [
                                        null != s &&
                                            (0, l.jsx)(d.E, {
                                                className: em.of,
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
        })({ sku: s, priceSetAssignmentPurchaseType: o ? eu.lid.DEFAULT : eu.lid.GIFT }),
        R = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    h?.(),
                    (0, ea.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: r,
                        giftingOrigin: ec.vQ.GUILD_CHANNEL,
                        analyticsLocations: f,
                    });
            },
            [s.id, s.applicationId, r, f, h],
        ),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    A?.(),
                    (0, er.a)(
                        s,
                        { isGift: !o, giftRecipient: r, giftingOrigin: ec.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: j },
                    );
            },
            [s, r, o, f, j, A],
        );
    return (0, l.jsx)(K.vN, {
        children: (0, l.jsxs)(q.s, {
            onClick: R,
            className: a()(em.Nr, { [em.Zl]: !C, [em.BN]: v, [em.YF]: I }),
            ref: E,
            "aria-label": s.name,
            children: [
                (0, l.jsx)(ei.P, { spec: ep, application: _ }),
                c && !o && u === k.uS.WISHLIST
                    ? (0, l.jsx)(es.n, { spec: ep, user: r, guildId: m ?? void 0, channelId: g ?? void 0 })
                    : null,
                (0, l.jsx)(eo.e, {
                    shape: "custom",
                    sku: s,
                    containerClassName: em.Vl,
                    foregroundImageClassName: em.wP,
                    backgroundImageClassName: em.GC,
                    cssPosition: "absolute",
                }),
                (0, l.jsx)("div", { className: em.iZ, style: { background: eh } }),
                (0, l.jsx)(Q.N, {
                    theme: eu.NJ8.DARKER,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: a()(em.zH, e),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: a()(em.gn, { [em.ov]: null == b, [em.w4]: y }),
                                    children: [
                                        null != S && (0, l.jsx)("img", { src: S.toString(), alt: N, className: em.ye }),
                                        (0, l.jsx)(d.E, {
                                            color: "always-white",
                                            variant: "text-md/medium",
                                            lineClamp: 1,
                                            children: s.name,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: em.iQ, children: b }),
                            ],
                        }),
                }),
                (0, l.jsx)("div", {
                    className: em.li,
                    children: (0, l.jsx)(p.$, {
                        variant: "primary",
                        onClick: T,
                        text:
                            ((t = w),
                            (n = o),
                            null != t
                                ? n
                                    ? ed.intl.format(ed.t.Xp5WTn, { price: t })
                                    : ed.intl.format(ed.t.o2WeeD, { price: t })
                                : n
                                  ? ed.intl.string(ed.t.boqtTA)
                                  : ed.intl.string(ed.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
var ex = n(661492),
    eE = n(212387),
    ev = n(662349);
let eC = n(699976).Z.SIZE_90;
function eI(e) {
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
        { guildId: f } = (0, G.nG)(t.applicationId),
        h = i.useCallback(() => {
            d?.(),
                (0, ea.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: ec.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                });
        }, [t.id, t.applicationId, n, c, d]),
        A = i.useCallback(() => {
            m?.(),
                (0, er.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: ec.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                );
        }, [t, n, s, c, f, m]),
        { label: x, icon: E } = (0, ev.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eE.A, {
        sku: t,
        user: n,
        spec: eC,
        onClick: h,
        "aria-label": ed.intl.formatToPlainString(ed.t.ZBB4Ty, { productName: (0, ex.TC)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(ev.A, { spec: eC, onClick: A, isHoveringOrFocusing: p, label: x, icon: E }),
            r && !s && a === k.uS.WISHLIST
                ? (0, l.jsx)(es.n, { spec: eC, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var ej = n(360469),
    e_ = n(518477),
    eS = n(932231);
let eN = `vc-gifting-${(0, r.A)()}`,
    eb = Object.freeze([]);
function ey(e) {
    let { className: t, "aria-labelledby": n, children: i } = e,
        { ref: s, height: r = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: d = 1 / 0 } = (0, o.Ay)(),
        m = d > r ? E.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(D.A, {
            children: (0, l.jsx)(u.l, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, l.jsx)("div", {
                    ref: s,
                    className: a()(t, eS.kL),
                    children: (0, l.jsx)(m, { className: eS.U, children: (0, l.jsx)("div", { ref: c, children: i }) }),
                }),
            }),
        }),
    });
}
function ew(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(ej.iu.SMALL);
    return (0, l.jsxs)(c.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, l.jsx)("img", { className: eS.In, src: n, alt: t.name }),
            (0, l.jsx)(d.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function eR(e) {
    let { user: t, isGift: n } = e,
        i = ed.intl.string(ed.t.kv4lSp),
        s = ed.intl.string(ed.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? ed.intl.format(ed.t.YwV901, { username: P.Ay.getName(t) }) : ed.intl.string(ed.t.qCmNFr)),
            (s = ed.intl.string(ed.t.SSgrne))),
        (0, l.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(m.D, { id: eN, variant: "text-md/normal", children: i }),
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eT(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        a = i.useCallback(() => {
            if (null != s) {
                let e = H.A.getGuildIdFromApplicationId(s);
                null != e && (0, z.X)({ guildId: e });
            }
        }, [s]),
        r = i.useCallback(() => {
            if (null != s) {
                let e = H.A.getGuildIdFromApplicationId(s);
                null != e && (n(), (0, z.default)({ guildId: e }));
            }
        }, [s, n]);
    return null == t
        ? null
        : (0, l.jsx)(p.$, {
              variant: "secondary",
              icon: g.I,
              iconPosition: "end",
              text: ed.intl.format(ed.t["HDT/rg"], { applicationName: t.name }),
              onClick: r,
              onMouseDown: a,
              fullWidth: !0,
          });
}
function eD(e) {
    let { userId: t, applicationId: n, channel: l, numItems: s } = e,
        a = i.useMemo(() => [t], [t]),
        r = i.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, O.XQ)({ userIds: a, applicationIds: r, numItems: s }),
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
        })("loading" === o || 0 === u.length ? eb : u, ek),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, G.wH)(u, c, new Set(a));
            return e && t;
        }, [u, c, a]);
    return (
        i.useEffect(() => {
            0 !== u.length &&
                V.default.track(eu.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [l.id, l.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function ek(e, t) {
    return e.id === t.id;
}
function eO(e) {
    let { text: t, onDismiss: n } = e;
    return (0, l.jsxs)("div", {
        className: eS.OQ,
        children: [
            (0, l.jsx)("div", { className: eS.bC }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(f.A, { className: eS.Ku, size: "xs" }),
                    (0, l.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(h.J, { size: "xs", onClick: n }),
        ],
    });
}
function eM(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r, canShowCTA: o, onDismissCTA: u } = e;
    (0, _.P)(n);
    let { analyticsLocations: d } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        m = (0, x.bG)([F.default], () => F.default.getUser(n)),
        p = i.useMemo(() => new N.R({ applicationId: s }), [s]),
        g = (0, x.bG)([b.A], () => b.A.getWidgets(n)?.find((e) => e instanceof N.R && e.applicationId === s)),
        f = (0, x.bG)([L.default], () => L.default.getId()),
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
                } = (0, j.A)(r ? t : void 0, r ? n : void 0, s),
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
                _ = i.useCallback(() => {
                    a(), (0, w.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x });
                    let e = new N.R({ applicationId: n });
                    (0, y.Y5)(e),
                        (0, S.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, R.XA)(e_.jM.WIDGET_ADDED), 700);
                }, [x, n, t, a]);
            return r && !c && g && null != m
                ? !f && h
                    ? (0, l.jsx)(eO, {
                          text: ed.intl.format(u ? ed.t.YWa8L2 : ed.t.xxPgmT, { onClick: E }),
                          onDismiss: o,
                      })
                    : f && null == p && null != d
                      ? (0, l.jsx)(eO, {
                            text: ed.intl.format(ed.t.QuIwht, { applicationName: d.name, onClick: _ }),
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
        D = (0, U.A)(s),
        {
            status: O,
            recommendations: V,
            skusToUserAndReason: P,
            hasBothSources: G,
        } = eD({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        H = "loading" === O || 0 === V.length || null == m,
        z = i.useMemo(
            () =>
                null == m || 0 === V.length
                    ? []
                    : (V.length > 8 ? V.slice(0, 8) : V).map((e) => {
                          let t = (P[e.id] ?? {})[n] === M.j.WISHLIST;
                          return (0, l.jsx)(
                              eI,
                              {
                                  sku: e,
                                  targetUser: m,
                                  isTargetingCurrentUser: h,
                                  source: t ? k.uS.WISHLIST : k.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: G,
                                  analyticsLocations: d,
                                  onCardClick: r,
                                  onButtonClick: r,
                              },
                              e.id,
                          );
                      }),
            [m, V, a.guild_id, a.id, P, n, h, G, d, r],
        );
    return (0, l.jsxs)(ey, {
        className: t,
        "aria-labelledby": eN,
        children: [
            (0, l.jsxs)(c.B, {
                className: eS.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != m
                        ? (0, l.jsxs)("div", {
                              className: eS.p,
                              children: [
                                  (0, l.jsx)(T.A, {
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
                        : (0, l.jsx)(ew, { application: D }),
                    (0, l.jsx)(eR, { user: m, isGift: !h }),
                ],
            }),
            H ? (0, l.jsx)(A.y, { className: eS.Zp }) : (0, l.jsx)("div", { className: eS.HV, children: z }),
            (0, l.jsx)(eT, { application: D, onClose: r }),
            (0, l.jsx)(W.A, { location: "social_layer_vc_gifting_panel", className: eS.Ij }),
        ],
    });
}
function eL(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: r } = e,
        { analyticsLocations: o } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, x.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, x.bG)([L.default], () => L.default.getId()),
        m = (0, U.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: f,
            hasBothSources: h,
        } = eD({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        E = "loading" === p || 0 === g.length || null == u,
        [I, j] = i.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (f[e[0].id] ?? {})[n] === M.j.WISHLIST;
            return [
                (0, l.jsx)(eA, {
                    sku: e[0],
                    targetUser: u,
                    isTargetingCurrentUser: d,
                    source: t ? k.uS.WISHLIST : k.uS.POPULAR,
                    guildId: a.guild_id,
                    channelId: a.id,
                    showIcons: h,
                    analyticsLocations: o,
                    onCardClick: r,
                    onButtonClick: r,
                }),
                e.slice(1).map((e) => {
                    let t = (f[e.id] ?? {})[n] === M.j.WISHLIST;
                    return (0, l.jsx)(
                        eI,
                        {
                            sku: e,
                            targetUser: u,
                            isTargetingCurrentUser: d,
                            source: t ? k.uS.WISHLIST : k.uS.POPULAR,
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
    return (0, l.jsxs)(ey, {
        className: t,
        "aria-labelledby": eN,
        children: [
            (0, l.jsxs)(c.B, {
                className: eS.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(ew, { application: m }), (0, l.jsx)(eR, { user: u, isGift: !d })],
            }),
            E
                ? (0, l.jsx)(A.y, { className: eS.kc })
                : (0, l.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [I, (0, l.jsx)("div", { className: eS.aS, children: j })],
                  }),
            (0, l.jsx)(eT, { application: m, onClose: r }),
            (0, l.jsx)(W.A, { location: "social_layer_vc_gifting_panel", className: eS.Ij }),
        ],
    });
}
