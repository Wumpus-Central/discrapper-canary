n.d(t, { V: () => eL, Z: () => eM });
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
if (/^(14256|21552)$/.test(n.j)) var h = n(141628);
if (/^(14256|21552)$/.test(n.j)) var f = n(815021);
var x = n(289873),
    A = n(17928),
    E = n(689175),
    v = n(793574),
    C = n(688810),
    I = n(206828),
    j = n(294323),
    S = n(201718),
    _ = n(47675),
    N = n(633075),
    b = n(321191),
    y = n(735321),
    T = n(975732),
    D = n(384377),
    R = n(605694),
    k = n(246356),
    w = n(561794),
    O = n(862772),
    L = n(310209),
    M = n(280450),
    F = n(287809),
    V = n(174459),
    G = n(427262),
    P = n(871123),
    H = n(453774),
    U = n(31969),
    z = n(44724),
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
    et = n(117218),
    en = n(363195),
    el = n(627001),
    ei = n(532423),
    es = n(317560),
    er = n(533406),
    ea = n(366523),
    eo = n(652215),
    eu = n(202541),
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
    eh = `linear-gradient(to top, ${ep} 30%, ${eg} 80%)`;
function ef(e) {
    var t, n;
    let {
            sku: s,
            targetUser: a,
            isTargetingCurrentUser: o,
            source: u,
            showIcons: c,
            guildId: m,
            channelId: g,
            analyticsLocations: h,
            onCardClick: f,
            onButtonClick: x,
        } = e,
        E = i.useRef(null),
        v = (0, A.bG)([en.A], () => (0, Y.M)(en.A.theme)),
        C = (0, A.bG)([q.Ay], () => q.Ay.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, ee.A)(E),
        { guildId: j } = (0, P.nG)(s.applicationId),
        S = (0, A.bG)([J.A], () => J.A.getApplication(s.applicationId)),
        { primaryIconAsset: _, primaryIconLabel: N } = i.useMemo(() => (0, P.Cv)(s, s.applicationId), [s]),
        {
            priceComponent: b,
            extendedHeight: y,
            displayPrice: T,
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
                                            color: "text-overlay-light",
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
                                    color: "text-overlay-light",
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
        D = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    f?.(),
                    (0, es.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: eu.vQ.GUILD_CHANNEL,
                        analyticsLocations: h,
                    });
            },
            [s.id, s.applicationId, a, h, f],
        ),
        R = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    x?.(),
                    (0, er.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: eu.vQ.GUILD_CHANNEL },
                        { analyticsLocations: h, guildId: j },
                    );
            },
            [s, a, o, h, j, x],
        );
    return (0, l.jsx)(Z.vN, {
        children: (0, l.jsxs)(X.s, {
            onClick: D,
            className: r()(ed.Nr, { [ed.Zl]: !C, [ed.BN]: v, [ed.YF]: I }),
            ref: E,
            "aria-label": s.name,
            children: [
                (0, l.jsx)(el.P, { spec: em, application: S }),
                c && !o && u === w.uS.WISHLIST
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
                (0, l.jsx)("div", { className: ed.iZ, style: { background: eh } }),
                (0, l.jsx)(K.N, {
                    theme: eo.NJ8.DARKER,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: r()(ed.zH, e),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: r()(ed.gn, { [ed.ov]: null == b, [ed.w4]: y }),
                                    children: [
                                        null != _ && (0, l.jsx)("img", { src: _.toString(), alt: N, className: ed.ye }),
                                        (0, l.jsx)(d.E, {
                                            color: "text-overlay-light",
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
                        onClick: R,
                        text:
                            ((t = T),
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
var ex = n(661492),
    eA = n(212387),
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
        { guildId: h } = (0, P.nG)(t.applicationId),
        f = i.useCallback(() => {
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
        x = i.useCallback(() => {
            m?.(),
                (0, er.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: eu.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: h },
                );
        }, [t, n, s, c, h, m]),
        { label: A, icon: E } = (0, eE.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eA.A, {
        sku: t,
        user: n,
        spec: ev,
        onClick: f,
        "aria-label": ec.intl.formatToPlainString(ec.t.ZBB4Ty, { productName: (0, ex.TC)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(eE.A, { spec: ev, onClick: x, isHoveringOrFocusing: p, label: A, icon: E }),
            a && !s && r === w.uS.WISHLIST
                ? (0, l.jsx)(ei.n, { spec: ev, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var eI = n(910200),
    ej = n(360469),
    eS = n(518477),
    e_ = n(932231);
let eN = `vc-gifting-${(0, a.A)()}`,
    eb = Object.freeze([]);
function ey(e) {
    let { className: t, "aria-labelledby": n, children: i } = e,
        { ref: s, height: a = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: d = 1 / 0 } = (0, o.Ay)(),
        m = d > a ? E.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(k.A, {
            children: (0, l.jsx)(u.lG, {
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
function eT(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(ej.iu.SMALL);
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
function eD(e) {
    let { user: t, isGift: n } = e,
        i = ec.intl.string(ec.t.kv4lSp),
        s = ec.intl.string(ec.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? ec.intl.format(ec.t.YwV901, { username: G.Ay.getName(t) }) : ec.intl.string(ec.t.qCmNFr)),
            (s = ec.intl.string(ec.t.SSgrne))),
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
function eR(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        r = i.useCallback(() => {
            null != s && (0, z.G)({ applicationId: s });
        }, [s]),
        a = i.useCallback(() => {
            null != s && (n(), (0, z.default)({ applicationId: s }));
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
function ek(e) {
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
        })("loading" === o || 0 === u.length ? eb : u, ew),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, P.wH)(u, c, new Set(r));
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
function ew(e, t) {
    return e.id === t.id;
}
function eO(e) {
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
                    (0, l.jsx)(h.A, { className: e_.Ku, size: "xs" }),
                    (0, l.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(f.J, { size: "xs", onClick: n }),
        ],
    });
}
function eL(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a, canShowCTA: o, onDismissCTA: u } = e;
    (0, S.P)(n);
    let { analyticsLocations: d } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        m = (0, A.bG)([F.default], () => F.default.getUser(n)),
        p = i.useMemo(() => new N.R({ applicationId: s }), [s]),
        g = (0, A.bG)([b.A], () => b.A.getWidgets(n)?.find((e) => e instanceof N.R && e.applicationId === s)),
        h = (0, A.bG)([M.default], () => M.default.getId()),
        f = n === h,
        E = (function (e) {
            let {
                    currentUserId: t,
                    applicationId: n,
                    onClose: s,
                    canShowCTA: r,
                    onDismissCTA: a,
                    isTargetingCurrentUser: o,
                } = e,
                {
                    isLoading: u,
                    application: c,
                    applicationWidgetConfig: d,
                    profileApplicationWidget: m,
                } = (0, j.A)(r ? t : void 0, r ? n : void 0),
                {
                    fetched: p,
                    hasAlreadyLinked: g,
                    canStartAuthorization: h,
                    startAuthorization: f,
                } = (0, I.RD)(r ? c : void 0),
                { analyticsLocations: x } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                A = i.useCallback(() => {
                    h && f({ analyticsLocations: x });
                }, [x, h, f]),
                E = i.useCallback(() => {
                    s(), (0, T.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x });
                    let e = new N.R({ applicationId: n });
                    (0, y.Y5)(e),
                        (0, _.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, D.XA)(eS.jM.WIDGET_ADDED), 700);
                }, [x, n, t, s]);
            return r && !u && p && null != d
                ? !g && h
                    ? (0, l.jsx)(eO, {
                          text: ec.intl.format(o ? ec.t.YWa8L2 : ec.t.xxPgmT, { onClick: A }),
                          onDismiss: a,
                      })
                    : g && null == m && null != c
                      ? (0, l.jsx)(eO, {
                            text: ec.intl.format(ec.t.QuIwht, { applicationName: c.name, onClick: E }),
                            onDismiss: a,
                        })
                      : null
                : null;
        })({
            currentUserId: h,
            applicationId: s,
            onClose: a,
            canShowCTA: o,
            onDismissCTA: u,
            isTargetingCurrentUser: f,
        }),
        k = (0, H.A)(s),
        {
            status: O,
            recommendations: V,
            skusToUserAndReason: G,
            hasBothSources: P,
        } = ek({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        z = "loading" === O || 0 === V.length || null == m,
        W = i.useMemo(
            () =>
                null == m || 0 === V.length
                    ? []
                    : (V.length > 8 ? V.slice(0, 8) : V).map((e) => {
                          let t = (G[e.id] ?? {})[n] === L.j.WISHLIST;
                          return (0, l.jsx)(
                              eC,
                              {
                                  sku: e,
                                  targetUser: m,
                                  isTargetingCurrentUser: f,
                                  source: t ? w.uS.WISHLIST : w.uS.POPULAR,
                                  guildId: r.guild_id,
                                  channelId: r.id,
                                  showIcons: P,
                                  analyticsLocations: d,
                                  onCardClick: a,
                                  onButtonClick: a,
                              },
                              e.id,
                          );
                      }),
            [m, V, r.guild_id, r.id, G, n, f, P, d, a],
        ),
        $ = (0, U.F)(f ? "vc_purchase_recommendations" : "vc_gift_recommendations", { applicationId: s });
    return (0, l.jsxs)(ey, {
        className: t,
        "aria-labelledby": eN,
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
                                  (0, l.jsx)(R.A, {
                                      user: m,
                                      widget: g ?? p,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                      disableCTA: null != E,
                                      embedded: !0,
                                  }),
                                  E,
                              ],
                          })
                        : (0, l.jsx)(eT, { application: k }),
                    (0, l.jsx)(eD, { user: m, isGift: !f }),
                ],
            }),
            (0, l.jsxs)(c.B, {
                direction: "vertical",
                gap: 12,
                children: [
                    null != $ && (0, l.jsx)(eI.O0, { Icon: $.Icon, text: $.text, endDatetime: $.endsAt }),
                    z ? (0, l.jsx)(x.y, { className: e_.Zp }) : (0, l.jsx)("div", { className: e_.HV, children: W }),
                ],
            }),
            (0, l.jsx)(eR, { application: k, onClose: a }),
        ],
    });
}
function eM(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, A.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, A.bG)([M.default], () => M.default.getId()),
        m = (0, H.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: h,
            hasBothSources: f,
        } = ek({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        E = "loading" === p || 0 === g.length || null == u,
        [I, j] = i.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (h[e[0].id] ?? {})[n] === L.j.WISHLIST;
            return [
                (0, l.jsx)(ef, {
                    sku: e[0],
                    targetUser: u,
                    isTargetingCurrentUser: d,
                    source: t ? w.uS.WISHLIST : w.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: f,
                    analyticsLocations: o,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                e.slice(1).map((e) => {
                    let t = (h[e.id] ?? {})[n] === L.j.WISHLIST;
                    return (0, l.jsx)(
                        eC,
                        {
                            sku: e,
                            targetUser: u,
                            isTargetingCurrentUser: d,
                            source: t ? w.uS.WISHLIST : w.uS.POPULAR,
                            guildId: r.guild_id,
                            channelId: r.id,
                            showIcons: f,
                            analyticsLocations: o,
                            onCardClick: a,
                            onButtonClick: a,
                        },
                        e.id,
                    );
                }),
            ];
        }, [u, g, h, n, d, r.guild_id, r.id, f, o, a]),
        S = (0, U.F)(d ? "vc_purchase_recommendations" : "vc_gift_recommendations", { applicationId: s });
    return (0, l.jsxs)(ey, {
        className: t,
        "aria-labelledby": eN,
        children: [
            (0, l.jsxs)(c.B, {
                className: e_.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(eT, { application: m }), (0, l.jsx)(eD, { user: u, isGift: !d })],
            }),
            E
                ? (0, l.jsx)(x.y, { className: e_.kc })
                : (0, l.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          null != S && (0, l.jsx)(eI.O0, { Icon: S.Icon, text: S.text, endDatetime: S.endsAt }),
                          I,
                          (0, l.jsx)("div", { className: e_.aS, children: j }),
                      ],
                  }),
            (0, l.jsx)(eR, { application: m, onClose: a }),
        ],
    });
}
