n.d(t, { V: () => eO, Z: () => eM });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(835245),
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
    H = n(453774),
    U = n(44724),
    z = n(84511),
    W = n(310784),
    $ = n.n(W),
    B = n(318254),
    Y = n(366010),
    Z = n(187322),
    K = n(43990),
    Q = n(778712),
    X = n(890856),
    q = n(775602),
    J = n(587895),
    ee = n(713517),
    et = n(723090),
    en = n(363195),
    el = n(627001),
    ei = n(532423),
    es = n(317560),
    er = n(533406),
    ea = n(366523),
    eo = n(652215),
    eu = n(788868),
    ec = n(375708),
    ed = n(789901);
let em = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: Q._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    ep = $()("#000000").darken(1.5).alpha(0.9).hex(),
    eg = $()("#000000").alpha(0).hex(),
    ef = `linear-gradient(to top, ${ep} 30%, ${eg} 80%)`;
function eh(e) {
    var t, n;
    let {
            sku: s,
            targetUser: a,
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
        v = (0, x.bG)([en.A], () => (0, Y.M)(en.A.theme)),
        C = (0, x.bG)([q.A], () => q.A.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, ee.A)(E),
        { guildId: j } = (0, G.nG)(s.applicationId),
        _ = (0, x.bG)([J.A], () => J.A.getApplication(s.applicationId)),
        { primaryIconAsset: S, primaryIconLabel: N } = i.useMemo(() => (0, G.Cv)(s, s.applicationId), [s]),
        {
            priceComponent: b,
            extendedHeight: y,
            displayPrice: w,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n } = e,
                {
                    normalPrice: s,
                    discountedPrice: r,
                    discountPercent: a,
                    userPrice: o,
                } = (0, et.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                u = i.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, l.jsx)("div", {
                                  className: ed.pt,
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ec.intl.format(ec.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, l.jsx)(B.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [t],
                );
            return null == t || null == o
                ? { priceComponent: null, extendedHeight: !1, displayPrice: o }
                : null != a && null != r
                  ? {
                        priceComponent: (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ed.p6,
                                    children: [
                                        null != s &&
                                            (0, l.jsx)(d.E, {
                                                className: ed.of,
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: s,
                                            }),
                                        (0, l.jsx)(d.E, {
                                            variant: "text-md/bold",
                                            color: "always-white",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                        (0, l.jsxs)(d.E, {
                                            variant: "text-md/bold",
                                            color: "text-feedback-positive",
                                            lineClamp: 1,
                                            children: ["(", a, ")"],
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
        })({ sku: s, priceSetAssignmentPurchaseType: o ? eo.lid.DEFAULT : eo.lid.GIFT }),
        R = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    h?.(),
                    (0, es.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: eu.vQ.GUILD_CHANNEL,
                        analyticsLocations: f,
                    });
            },
            [s.id, s.applicationId, a, f, h],
        ),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    A?.(),
                    (0, er.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: eu.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: j },
                    );
            },
            [s, a, o, f, j, A],
        );
    return (0, l.jsx)(Z.vN, {
        children: (0, l.jsxs)(X.s, {
            onClick: R,
            className: r()(ed.Nr, { [ed.Zl]: !C, [ed.BN]: v, [ed.YF]: I }),
            ref: E,
            "aria-label": s.name,
            children: [
                (0, l.jsx)(el.P, { spec: em, application: _ }),
                c && !o && u === k.uS.WISHLIST
                    ? (0, l.jsx)(ei.n, { spec: em, user: a, guildId: m ?? void 0, channelId: g ?? void 0 })
                    : null,
                (0, l.jsx)(ea.e, {
                    shape: "custom",
                    sku: s,
                    containerClassName: ed.Vl,
                    foregroundImageClassName: ed.wP,
                    backgroundImageClassName: ed.GC,
                    cssPosition: "absolute",
                }),
                (0, l.jsx)("div", { className: ed.iZ, style: { background: ef } }),
                (0, l.jsx)(K.N, {
                    theme: eo.NJ8.DARKER,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: r()(ed.zH, e),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: r()(ed.gn, { [ed.ov]: null == b, [ed.w4]: y }),
                                    children: [
                                        null != S && (0, l.jsx)("img", { src: S.toString(), alt: N, className: ed.ye }),
                                        (0, l.jsx)(d.E, {
                                            color: "always-white",
                                            variant: "text-md/medium",
                                            lineClamp: 1,
                                            children: s.name,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: ed.iQ, children: b }),
                            ],
                        }),
                }),
                (0, l.jsx)("div", {
                    className: ed.li,
                    children: (0, l.jsx)(p.$, {
                        variant: "primary",
                        onClick: T,
                        text:
                            ((t = w),
                            (n = o),
                            null != t
                                ? n
                                    ? ec.intl.format(ec.t.Xp5WTn, { price: t })
                                    : ec.intl.format(ec.t.o2WeeD, { price: t })
                                : n
                                  ? ec.intl.string(ec.t.boqtTA)
                                  : ec.intl.string(ec.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
var eA = n(661492),
    ex = n(212387),
    eE = n(662349);
let ev = n(699976).Z.SIZE_90;
function eC(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: s,
            source: r,
            showIcons: a,
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
                (0, es.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: eu.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                });
        }, [t.id, t.applicationId, n, c, d]),
        A = i.useCallback(() => {
            m?.(),
                (0, er.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: eu.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                );
        }, [t, n, s, c, f, m]),
        { label: x, icon: E } = (0, eE.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(ex.A, {
        sku: t,
        user: n,
        spec: ev,
        onClick: h,
        "aria-label": ec.intl.formatToPlainString(ec.t.ZBB4Ty, { productName: (0, eA.TC)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(eE.A, { spec: ev, onClick: A, isHoveringOrFocusing: p, label: x, icon: E }),
            a && !s && r === k.uS.WISHLIST
                ? (0, l.jsx)(ei.n, { spec: ev, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var eI = n(360469),
    ej = n(518477),
    e_ = n(932231);
let eS = `vc-gifting-${(0, a.A)()}`,
    eN = Object.freeze([]);
function eb(e) {
    let { className: t, "aria-labelledby": n, children: i } = e,
        { ref: s, height: a = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: d = 1 / 0 } = (0, o.Ay)(),
        m = d > a ? E.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(D.A, {
            children: (0, l.jsx)(u.l, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, l.jsx)("div", {
                    ref: s,
                    className: r()(t, e_.kL),
                    children: (0, l.jsx)(m, { className: e_.U, children: (0, l.jsx)("div", { ref: c, children: i }) }),
                }),
            }),
        }),
    });
}
function ey(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(eI.iu.SMALL);
    return (0, l.jsxs)(c.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, l.jsx)("img", { className: e_.In, src: n, alt: t.name }),
            (0, l.jsx)(d.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function ew(e) {
    let { user: t, isGift: n } = e,
        i = ec.intl.string(ec.t.kv4lSp),
        s = ec.intl.string(ec.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? ec.intl.format(ec.t.YwV901, { username: P.Ay.getName(t) }) : ec.intl.string(ec.t.qCmNFr)),
            (s = ec.intl.string(ec.t.SSgrne))),
        (0, l.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(m.D, { id: eS, variant: "text-md/normal", children: i }),
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eR(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        r = i.useCallback(() => {
            null != s && (0, U.G)({ applicationId: s });
        }, [s]),
        a = i.useCallback(() => {
            null != s && (n(), (0, U.default)({ applicationId: s }));
        }, [s, n]);
    return null == t
        ? null
        : (0, l.jsx)(p.$, {
              variant: "secondary",
              icon: g.I,
              iconPosition: "end",
              text: ec.intl.format(ec.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function eT(e) {
    let { userId: t, applicationId: n, channel: l, numItems: s } = e,
        r = i.useMemo(() => [t], [t]),
        a = i.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, O.XQ)({ userIds: r, applicationIds: a, numItems: s }),
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
        })("loading" === o || 0 === u.length ? eN : u, eD),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, G.wH)(u, c, new Set(r));
            return e && t;
        }, [u, c, r]);
    return (
        i.useEffect(() => {
            0 !== u.length &&
                V.default.track(eo.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [l.id, l.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function eD(e, t) {
    return e.id === t.id;
}
function ek(e) {
    let { text: t, onDismiss: n } = e;
    return (0, l.jsxs)("div", {
        className: e_.OQ,
        children: [
            (0, l.jsx)("div", { className: e_.bC }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(f.A, { className: e_.Ku, size: "xs" }),
                    (0, l.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(h.J, { size: "xs", onClick: n }),
        ],
    });
}
function eO(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a, canShowCTA: o, onDismissCTA: u } = e;
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
                    onClose: r,
                    canShowCTA: a,
                    onDismissCTA: o,
                    isTargetingCurrentUser: u,
                } = e,
                {
                    isLoading: c,
                    application: d,
                    applicationWidgetConfig: m,
                    profileApplicationWidget: p,
                } = (0, j.A)(a ? t : void 0, a ? n : void 0, s),
                {
                    fetched: g,
                    hasAlreadyLinked: f,
                    canStartAuthorization: h,
                    startAuthorization: A,
                } = (0, I.RD)(a ? d : void 0),
                { analyticsLocations: x } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                E = i.useCallback(() => {
                    h && A({ analyticsLocations: x });
                }, [x, h, A]),
                _ = i.useCallback(() => {
                    r(), (0, w.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x });
                    let e = new N.R({ applicationId: n });
                    (0, y.Y5)(e),
                        (0, S.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, R.XA)(ej.jM.WIDGET_ADDED), 700);
                }, [x, n, t, r]);
            return a && !c && g && null != m
                ? !f && h
                    ? (0, l.jsx)(ek, {
                          text: ec.intl.format(u ? ec.t.YWa8L2 : ec.t.xxPgmT, { onClick: E }),
                          onDismiss: o,
                      })
                    : f && null == p && null != d
                      ? (0, l.jsx)(ek, {
                            text: ec.intl.format(ec.t.QuIwht, { applicationName: d.name, onClick: _ }),
                            onDismiss: o,
                        })
                      : null
                : null;
        })({
            currentUserId: f,
            applicationId: s,
            location: "social_layer_gifting_voice_panel",
            onClose: a,
            canShowCTA: o,
            onDismissCTA: u,
            isTargetingCurrentUser: h,
        }),
        D = (0, H.A)(s),
        {
            status: O,
            recommendations: V,
            skusToUserAndReason: P,
            hasBothSources: G,
        } = eT({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        U = "loading" === O || 0 === V.length || null == m,
        W = i.useMemo(
            () =>
                null == m || 0 === V.length
                    ? []
                    : (V.length > 8 ? V.slice(0, 8) : V).map((e) => {
                          let t = (P[e.id] ?? {})[n] === M.j.WISHLIST;
                          return (0, l.jsx)(
                              eC,
                              {
                                  sku: e,
                                  targetUser: m,
                                  isTargetingCurrentUser: h,
                                  source: t ? k.uS.WISHLIST : k.uS.POPULAR,
                                  guildId: r.guild_id,
                                  channelId: r.id,
                                  showIcons: G,
                                  analyticsLocations: d,
                                  onCardClick: a,
                                  onButtonClick: a,
                              },
                              e.id,
                          );
                      }),
            [m, V, r.guild_id, r.id, P, n, h, G, d, a],
        );
    return (0, l.jsxs)(eb, {
        className: t,
        "aria-labelledby": eS,
        children: [
            (0, l.jsxs)(c.B, {
                className: e_.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != m
                        ? (0, l.jsxs)("div", {
                              className: e_.p,
                              children: [
                                  (0, l.jsx)(T.A, {
                                      user: m,
                                      widget: g ?? p,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      disableInteraction: !0,
                                      disableCTA: null != E,
                                      embedded: !0,
                                  }),
                                  E,
                              ],
                          })
                        : (0, l.jsx)(ey, { application: D }),
                    (0, l.jsx)(ew, { user: m, isGift: !h }),
                ],
            }),
            U ? (0, l.jsx)(A.y, { className: e_.Zp }) : (0, l.jsx)("div", { className: e_.HV, children: W }),
            (0, l.jsx)(eR, { application: D, onClose: a }),
            (0, l.jsx)(z.A, { location: "social_layer_vc_gifting_panel", className: e_.Ij }),
        ],
    });
}
function eM(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, x.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, x.bG)([L.default], () => L.default.getId()),
        m = (0, H.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: f,
            hasBothSources: h,
        } = eT({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        E = "loading" === p || 0 === g.length || null == u,
        [I, j] = i.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (f[e[0].id] ?? {})[n] === M.j.WISHLIST;
            return [
                (0, l.jsx)(eh, {
                    sku: e[0],
                    targetUser: u,
                    isTargetingCurrentUser: d,
                    source: t ? k.uS.WISHLIST : k.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: h,
                    analyticsLocations: o,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                e.slice(1).map((e) => {
                    let t = (f[e.id] ?? {})[n] === M.j.WISHLIST;
                    return (0, l.jsx)(
                        eC,
                        {
                            sku: e,
                            targetUser: u,
                            isTargetingCurrentUser: d,
                            source: t ? k.uS.WISHLIST : k.uS.POPULAR,
                            guildId: r.guild_id,
                            channelId: r.id,
                            showIcons: h,
                            analyticsLocations: o,
                            onCardClick: a,
                            onButtonClick: a,
                        },
                        e.id,
                    );
                }),
            ];
        }, [u, g, f, n, d, r.guild_id, r.id, h, o, a]);
    return (0, l.jsxs)(eb, {
        className: t,
        "aria-labelledby": eS,
        children: [
            (0, l.jsxs)(c.B, {
                className: e_.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(ey, { application: m }), (0, l.jsx)(ew, { user: u, isGift: !d })],
            }),
            E
                ? (0, l.jsx)(A.y, { className: e_.kc })
                : (0, l.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [I, (0, l.jsx)("div", { className: e_.aS, children: j })],
                  }),
            (0, l.jsx)(eR, { application: m, onClose: a }),
            (0, l.jsx)(z.A, { location: "social_layer_vc_gifting_panel", className: e_.Ij }),
        ],
    });
}
