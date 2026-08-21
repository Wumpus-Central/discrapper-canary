n.d(t, { V: () => eO, Z: () => eL });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(132500),
    o = n(494012),
    u = n(113325),
    c = n(331322),
    d = n(834730),
    m = n(297264),
    p = n(821609),
    g = n(509434);
if (/^(221552|614256)$/.test(n.j)) var h = n(141628);
if (/^(221552|614256)$/.test(n.j)) var f = n(815021);
var A = n(289873),
    x = n(17928),
    E = n(689175),
    v = n(793574),
    C = n(688810),
    I = n(206828),
    S = n(294323),
    j = n(201718),
    _ = n(47675),
    N = n(633075),
    b = n(321191),
    y = n(735321),
    D = n(975732),
    T = n(384377),
    R = n(605694),
    k = n(246356),
    w = n(594832),
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
    Z = n(43990),
    K = n(778712),
    Q = n(890856),
    X = n(775602),
    q = n(587895),
    J = n(713517),
    ee = n(993046),
    et = n(363195),
    en = n(627001),
    el = n(532423),
    ei = n(317560),
    es = n(99161),
    er = n(366523),
    ea = n(652215),
    eo = n(202541),
    eu = n(375708),
    ec = n(902344);
let ed = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: K._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    em = $()("#000000").darken(1.5).alpha(0.9).hex(),
    ep = $()("#000000").alpha(0).hex(),
    eg = `linear-gradient(to top, ${em} 30%, ${ep} 80%)`;
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
            analyticsLocations: h,
            onCardClick: f,
            onButtonClick: A,
        } = e,
        E = i.useRef(null),
        v = (0, x.bG)([et.A], () => (0, Y.M)(et.A.theme)),
        C = (0, x.bG)([X.Ay], () => X.Ay.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, J.A)(E),
        { guildId: S } = (0, P.nG)(s.applicationId),
        j = (0, x.bG)([q.A], () => q.A.getApplication(s.applicationId)),
        { primaryIconAsset: _, primaryIconLabel: N } = i.useMemo(() => (0, P.Cv)(s, s.applicationId), [s]),
        {
            priceComponent: b,
            extendedHeight: y,
            displayPrice: D,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n } = e,
                {
                    normalPrice: s,
                    discountedPrice: r,
                    discountPercent: a,
                    userPrice: o,
                } = (0, ee.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                u = i.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, l.jsx)("div", {
                                  className: ec.pt,
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: eu.intl.format(eu.t.GiVd2Q, {
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
                                    className: ec.p6,
                                    children: [
                                        null != s &&
                                            (0, l.jsx)(d.E, {
                                                className: ec.of,
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
        })({ sku: s, priceSetAssignmentPurchaseType: o ? ea.lid.DEFAULT : ea.lid.GIFT }),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    f?.(),
                    (0, ei.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: eo.vQ.GUILD_CHANNEL,
                        analyticsLocations: h,
                    });
            },
            [s.id, s.applicationId, a, h, f],
        ),
        R = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    A?.(),
                    (0, es.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: eo.vQ.GUILD_CHANNEL },
                        { analyticsLocations: h, guildId: S },
                    );
            },
            [s, a, o, h, S, A],
        );
    return (0, l.jsxs)(Q.s, {
        onClick: T,
        className: r()(ec.Nr, { [ec.Zl]: !C, [ec.BN]: v, [ec.YF]: I }),
        ref: E,
        "aria-label": s.name,
        children: [
            (0, l.jsx)(en.P, { spec: ed, application: j }),
            c && !o && u === w.uS.WISHLIST
                ? (0, l.jsx)(el.n, { spec: ed, user: a, guildId: m ?? void 0, channelId: g ?? void 0 })
                : null,
            (0, l.jsx)(er.e, {
                shape: "custom",
                sku: s,
                containerClassName: ec.Vl,
                foregroundImageClassName: ec.wP,
                backgroundImageClassName: ec.GC,
                cssPosition: "absolute",
            }),
            (0, l.jsx)("div", { className: ec.iZ, style: { background: eg } }),
            (0, l.jsx)(Z.N, {
                theme: ea.NJ8.DARKER,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: r()(ec.zH, e),
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(ec.gn, { [ec.ov]: null == b, [ec.w4]: y }),
                                children: [
                                    null != _ && (0, l.jsx)("img", { src: _.toString(), alt: N, className: ec.ye }),
                                    (0, l.jsx)(d.E, {
                                        color: "text-overlay-light",
                                        variant: "text-md/medium",
                                        lineClamp: 1,
                                        children: s.name,
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", { className: ec.iQ, children: b }),
                        ],
                    }),
            }),
            (0, l.jsx)("div", {
                className: ec.li,
                children: (0, l.jsx)(p.$, {
                    variant: "primary",
                    onClick: R,
                    text:
                        ((t = D),
                        (n = o),
                        null != t
                            ? n
                                ? eu.intl.format(eu.t.Xp5WTn, { price: t })
                                : eu.intl.format(eu.t.o2WeeD, { price: t })
                            : n
                              ? eu.intl.string(eu.t.boqtTA)
                              : eu.intl.string(eu.t.QAZA5f)),
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
var ef = n(661492),
    eA = n(212387),
    ex = n(662349);
let eE = n(699976).Z.SIZE_90;
function ev(e) {
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
                (0, ei.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: eo.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                });
        }, [t.id, t.applicationId, n, c, d]),
        A = i.useCallback(() => {
            m?.(),
                (0, es.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: eo.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: h },
                );
        }, [t, n, s, c, h, m]),
        { label: x, icon: E } = (0, ex.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eA.A, {
        sku: t,
        user: n,
        spec: eE,
        onClick: f,
        "aria-label": eu.intl.formatToPlainString(eu.t.ZBB4Ty, { productName: (0, ef.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(ex.A, { spec: eE, onClick: A, isHoveringOrFocusing: p, label: x, icon: E }),
            a && !s && r === w.uS.WISHLIST
                ? (0, l.jsx)(el.n, { spec: eE, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var eC = n(910200),
    eI = n(360469),
    eS = n(518477),
    ej = n(774240);
let e_ = `vc-gifting-${(0, a.A)()}`,
    eN = Object.freeze([]);
function eb(e) {
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
                    className: r()(t, ej.kL),
                    children: (0, l.jsx)(m, { className: ej.U, children: (0, l.jsx)("div", { ref: c, children: i }) }),
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
            null != n && (0, l.jsx)("img", { className: ej.In, src: n, alt: t.name }),
            (0, l.jsx)(d.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function eD(e) {
    let { user: t, isGift: n } = e,
        i = eu.intl.string(eu.t.kv4lSp),
        s = eu.intl.string(eu.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? eu.intl.format(eu.t.YwV901, { username: G.Ay.getName(t) }) : eu.intl.string(eu.t.qCmNFr)),
            (s = eu.intl.string(eu.t.SSgrne))),
        (0, l.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(m.D, { id: e_, variant: "text-md/normal", children: i }),
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eT(e) {
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
              text: eu.intl.format(eu.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function eR(e) {
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
        })("loading" === o || 0 === u.length ? eN : u, ek),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, P.wH)(u, c, new Set(r));
            return e && t;
        }, [u, c, r]);
    return (
        i.useEffect(() => {
            0 !== u.length &&
                V.default.track(ea.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
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
function ew(e) {
    let { text: t, onDismiss: n } = e;
    return (0, l.jsxs)("div", {
        className: ej.OQ,
        children: [
            (0, l.jsx)("div", { className: ej.bC }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(h.A, { className: ej.Ku, size: "xs" }),
                    (0, l.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(f.J, { size: "xs", onClick: n }),
        ],
    });
}
function eO(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a, canShowCTA: o, onDismissCTA: u } = e;
    (0, j.P)(n);
    let { analyticsLocations: d } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        m = (0, x.bG)([F.default], () => F.default.getUser(n)),
        p = i.useMemo(() => new N.R({ applicationId: s }), [s]),
        g = (0, x.bG)([b.A], () => b.A.getWidgets(n)?.find((e) => e instanceof N.R && e.applicationId === s)),
        h = (0, x.bG)([M.default], () => M.default.getId()),
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
                } = (0, S.A)(r ? t : void 0, r ? n : void 0),
                {
                    fetched: p,
                    hasAlreadyLinked: g,
                    canStartAuthorization: h,
                    startAuthorization: f,
                } = (0, I.RD)(r ? c : void 0),
                { analyticsLocations: A } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                x = i.useCallback(() => {
                    h && f({ analyticsLocations: A });
                }, [A, h, f]),
                E = i.useCallback(() => {
                    s(), (0, D.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: A });
                    let e = new N.R({ applicationId: n });
                    (0, y.Y5)(e),
                        (0, _.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, T.XA)(eS.jM.WIDGET_ADDED), 700);
                }, [A, n, t, s]);
            return r && !u && p && null != d
                ? !g && h
                    ? (0, l.jsx)(ew, {
                          text: eu.intl.format(o ? eu.t.YWa8L2 : eu.t.xxPgmT, { onClick: x }),
                          onDismiss: a,
                      })
                    : g && null == m && null != c
                      ? (0, l.jsx)(ew, {
                            text: eu.intl.format(eu.t.QuIwht, { applicationName: c.name, onClick: E }),
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
        } = eR({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        z = "loading" === O || 0 === V.length || null == m,
        W = i.useMemo(
            () =>
                null == m || 0 === V.length
                    ? []
                    : (V.length > 8 ? V.slice(0, 8) : V).map((e) => {
                          let t = (G[e.id] ?? {})[n] === L.j.WISHLIST;
                          return (0, l.jsx)(
                              ev,
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
    return (0, l.jsxs)(eb, {
        className: t,
        "aria-labelledby": e_,
        children: [
            (0, l.jsxs)(c.B, {
                className: ej.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != m
                        ? (0, l.jsxs)("div", {
                              className: ej.p,
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
                        : (0, l.jsx)(ey, { application: k }),
                    (0, l.jsx)(eD, { user: m, isGift: !f }),
                ],
            }),
            (0, l.jsxs)(c.B, {
                direction: "vertical",
                gap: 12,
                children: [
                    null != $ && (0, l.jsx)(eC.O0, { Icon: $.Icon, text: $.text, endDatetime: $.endsAt }),
                    z ? (0, l.jsx)(A.y, { className: ej.Zp }) : (0, l.jsx)("div", { className: ej.HV, children: W }),
                ],
            }),
            (0, l.jsx)(eT, { application: k, onClose: a }),
        ],
    });
}
function eL(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(v.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, x.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, x.bG)([M.default], () => M.default.getId()),
        m = (0, H.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: h,
            hasBothSources: f,
        } = eR({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        E = "loading" === p || 0 === g.length || null == u,
        [I, S] = i.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (h[e[0].id] ?? {})[n] === L.j.WISHLIST;
            return [
                (0, l.jsx)(eh, {
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
                        ev,
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
        j = (0, U.F)(d ? "vc_purchase_recommendations" : "vc_gift_recommendations", { applicationId: s });
    return (0, l.jsxs)(eb, {
        className: t,
        "aria-labelledby": e_,
        children: [
            (0, l.jsxs)(c.B, {
                className: ej.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(ey, { application: m }), (0, l.jsx)(eD, { user: u, isGift: !d })],
            }),
            E
                ? (0, l.jsx)(A.y, { className: ej.kc })
                : (0, l.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          null != j && (0, l.jsx)(eC.O0, { Icon: j.Icon, text: j.text, endDatetime: j.endsAt }),
                          I,
                          (0, l.jsx)("div", { className: ej.aS, children: S }),
                      ],
                  }),
            (0, l.jsx)(eT, { application: m, onClose: a }),
        ],
    });
}
