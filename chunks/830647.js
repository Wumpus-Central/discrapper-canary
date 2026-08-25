n.d(t, { V: () => eG, Z: () => eP });
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
if (/^(221552|614256)$/.test(n.j)) var f = n(141628);
if (/^(221552|614256)$/.test(n.j)) var h = n(815021);
var A = n(289873),
    x = n(17928),
    v = n(689175),
    E = n(793574),
    C = n(688810),
    I = n(206828),
    S = n(294323),
    j = n(409626),
    _ = n(613902),
    N = n(692969),
    b = n(738250),
    y = n(201718),
    D = n(47675),
    T = n(633075),
    R = n(321191),
    k = n(735321),
    w = n(975732),
    O = n(384377),
    L = n(605694),
    M = n(246356),
    V = n(594832),
    F = n(862772),
    G = n(310209),
    P = n(280450),
    H = n(287809),
    U = n(174459),
    W = n(427262),
    z = n(871123),
    $ = n(453774),
    B = n(31969),
    Y = n(44724),
    Z = n(310784),
    K = n.n(Z),
    Q = n(318254),
    X = n(366010),
    q = n(43990),
    J = n(778712),
    ee = n(890856),
    et = n(775602),
    en = n(587895),
    el = n(713517),
    ei = n(993046),
    es = n(363195),
    er = n(627001),
    ea = n(532423),
    eo = n(317560),
    eu = n(99161),
    ec = n(366523),
    ed = n(652215),
    em = n(202541),
    ep = n(375708),
    eg = n(902344);
let ef = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: J._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    eh = K()("#000000").darken(1.5).alpha(0.9).hex(),
    eA = K()("#000000").alpha(0).hex(),
    ex = `linear-gradient(to top, ${eh} 30%, ${eA} 80%)`;
function ev(e) {
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
        v = i.useRef(null),
        E = (0, x.bG)([es.A], () => (0, X.M)(es.A.theme)),
        C = (0, x.bG)([et.Ay], () => et.Ay.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, el.A)(v),
        { guildId: S } = (0, z.nG)(s.applicationId),
        j = (0, x.bG)([en.A], () => en.A.getApplication(s.applicationId)),
        { primaryIconAsset: _, primaryIconLabel: N } = i.useMemo(() => (0, z.Cv)(s, s.applicationId), [s]),
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
                } = (0, ei.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
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
                                              (0, l.jsx)(Q.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
        })({ sku: s, priceSetAssignmentPurchaseType: o ? ed.lid.DEFAULT : ed.lid.GIFT }),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    h?.(),
                    (0, eo.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: em.vQ.GUILD_CHANNEL,
                        analyticsLocations: f,
                    });
            },
            [s.id, s.applicationId, a, f, h],
        ),
        R = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    A?.(),
                    (0, eu.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: S },
                    );
            },
            [s, a, o, f, S, A],
        );
    return (0, l.jsxs)(ee.s, {
        onClick: T,
        className: r()(eg.Nr, { [eg.Zl]: !C, [eg.BN]: E, [eg.YF]: I }),
        ref: v,
        "aria-label": s.name,
        children: [
            (0, l.jsx)(er.P, { spec: ef, application: j }),
            c && !o && u === V.uS.WISHLIST
                ? (0, l.jsx)(ea.n, { spec: ef, user: a, guildId: m ?? void 0, channelId: g ?? void 0 })
                : null,
            (0, l.jsx)(ec.e, {
                shape: "custom",
                sku: s,
                containerClassName: eg.Vl,
                foregroundImageClassName: eg.wP,
                backgroundImageClassName: eg.GC,
                cssPosition: "absolute",
            }),
            (0, l.jsx)("div", { className: eg.iZ, style: { background: ex } }),
            (0, l.jsx)(q.N, {
                theme: ed.NJ8.DARKER,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: r()(eg.zH, e),
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(eg.gn, { [eg.ov]: null == b, [eg.w4]: y }),
                                children: [
                                    null != _ && (0, l.jsx)("img", { src: _.toString(), alt: N, className: eg.ye }),
                                    (0, l.jsx)(d.E, {
                                        color: "text-overlay-light",
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
                        ((t = D),
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
    });
}
var eE = n(661492),
    eC = n(212387),
    eI = n(662349);
let eS = n(699976).Z.SIZE_90;
function ej(e) {
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
        { guildId: f } = (0, z.nG)(t.applicationId),
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
        { label: x, icon: v } = (0, eI.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: eS,
        onClick: h,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, eE.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(eI.A, { spec: eS, onClick: A, isHoveringOrFocusing: p, label: x, icon: v }),
            a && !s && r === V.uS.WISHLIST
                ? (0, l.jsx)(ea.n, { spec: eS, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var e_ = n(910200),
    eN = n(360469),
    eb = n(518477),
    ey = n(774240);
let eD = `vc-gifting-${(0, a.A)()}`,
    eT = Object.freeze([]);
function eR(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, children: s } = e,
        { ref: a, height: c = 1 / 0 } = (0, o.Ay)(),
        { ref: d, height: m = 1 / 0 } = (0, o.Ay)(),
        p = m > c ? v.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(M.A, {
            children: (0, l.jsx)(u.lG, {
                "aria-label": n,
                "aria-labelledby": i,
                modal: !1,
                children: (0, l.jsx)("div", {
                    ref: a,
                    className: r()(t, ey.kL),
                    children: (0, l.jsx)(p, { className: ey.U, children: (0, l.jsx)("div", { ref: d, children: s }) }),
                }),
            }),
        }),
    });
}
function ek(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(eN.iu.SMALL);
    return (0, l.jsxs)(c.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, l.jsx)("img", { className: ey.In, src: n, alt: t.name }),
            (0, l.jsx)(d.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function ew(e) {
    let { user: t, isGift: n } = e,
        i = ep.intl.string(ep.t.kv4lSp),
        s = ep.intl.string(ep.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? ep.intl.format(ep.t.YwV901, { username: W.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (s = ep.intl.string(ep.t.SSgrne))),
        (0, l.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(m.D, { id: eD, variant: "text-md/normal", children: i }),
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eO(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        r = i.useCallback(() => {
            null != s && (0, Y.G)({ applicationId: s });
        }, [s]),
        a = i.useCallback(() => {
            null != s && (n(), (0, Y.default)({ applicationId: s }));
        }, [s, n]);
    return null == t
        ? null
        : (0, l.jsx)(p.$, {
              variant: "secondary",
              icon: g.I,
              iconPosition: "end",
              text: ep.intl.format(ep.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function eL(e) {
    let { applicationId: t, onClose: n } = e,
        { gameId: i } = (0, b.A)({ applicationId: t }),
        s = (0, N.A)({ gameId: i ?? void 0, source: j.GameProfileSources.VcHeaderActivity });
    return null == s
        ? null
        : (0, l.jsx)(p.$, {
              variant: "primary",
              text: ep.intl.string(ep.t.ajHoOr),
              onClick: (e) => {
                  n(), s(e);
              },
              fullWidth: !0,
          });
}
function eM(e) {
    let { userId: t, applicationId: n, channel: l, numItems: s } = e,
        r = i.useMemo(() => [t], [t]),
        a = i.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, F.XQ)({ userIds: r, applicationIds: a, numItems: s }),
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
        })("loading" === o || 0 === u.length ? eT : u, eV),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, z.wH)(u, c, new Set(r));
            return e && t;
        }, [u, c, r]);
    return (
        i.useEffect(() => {
            0 !== u.length &&
                U.default.track(ed.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [l.id, l.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function eV(e, t) {
    return e.id === t.id;
}
function eF(e) {
    let { text: t, onDismiss: n } = e;
    return (0, l.jsxs)("div", {
        className: ey.OQ,
        children: [
            (0, l.jsx)("div", { className: ey.bC }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(f.A, { className: ey.Ku, size: "xs" }),
                    (0, l.jsx)(d.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(h.J, { size: "xs", onClick: n }),
        ],
    });
}
function eG(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: o, canShowCTA: u, onDismissCTA: d } = e;
    (0, y.P)(n);
    let { analyticsLocations: m } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        p = (0, x.bG)([H.default], () => H.default.getUser(n)),
        g = i.useMemo(() => new T.R({ applicationId: s }), [s]),
        f = (0, x.bG)([R.A], () => R.A.getWidgets(n)?.find((e) => e instanceof T.R && e.applicationId === s)),
        h = (0, x.bG)([P.default], () => P.default.getId()),
        v = n === h,
        j = (function (e) {
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
                    canStartAuthorization: f,
                    startAuthorization: h,
                } = (0, I.RD)(r ? c : void 0),
                { analyticsLocations: A } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                x = i.useCallback(() => {
                    f && h({ analyticsLocations: A });
                }, [A, f, h]),
                v = i.useCallback(() => {
                    s(), (0, w.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: A });
                    let e = new T.R({ applicationId: n });
                    (0, k.Y5)(e),
                        (0, D.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, O.XA)(eb.jM.WIDGET_ADDED), 700);
                }, [A, n, t, s]);
            return r && !u && p && null != d
                ? !g && f
                    ? (0, l.jsx)(eF, {
                          text: ep.intl.format(o ? ep.t.YWa8L2 : ep.t.xxPgmT, { onClick: x }),
                          onDismiss: a,
                      })
                    : g && null == m && null != c
                      ? (0, l.jsx)(eF, {
                            text: ep.intl.format(ep.t.QuIwht, { applicationName: c.name, onClick: v }),
                            onDismiss: a,
                        })
                      : null
                : null;
        })({
            currentUserId: h,
            applicationId: s,
            onClose: o,
            canShowCTA: u,
            onDismissCTA: d,
            isTargetingCurrentUser: v,
        }),
        N = (0, $.A)(s),
        {
            status: b,
            recommendations: M,
            skusToUserAndReason: F,
            hasBothSources: U,
        } = eM({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        W = "loading" === b || 0 === M.length || null == p,
        z = i.useMemo(
            () =>
                null == p || 0 === M.length
                    ? []
                    : (M.length > 8 ? M.slice(0, 8) : M).map((e) => {
                          let t = (F[e.id] ?? {})[n] === G.j.WISHLIST;
                          return (0, l.jsx)(
                              ej,
                              {
                                  sku: e,
                                  targetUser: p,
                                  isTargetingCurrentUser: v,
                                  source: t ? V.uS.WISHLIST : V.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: U,
                                  analyticsLocations: m,
                                  onCardClick: o,
                                  onButtonClick: o,
                              },
                              e.id,
                          );
                      }),
            [p, M, a.guild_id, a.id, F, n, v, U, m, o],
        ),
        Y = (0, B.F)(v ? "vc_purchase_recommendations" : "vc_gift_recommendations", { applicationId: s }),
        Z = (0, _.E)({ location: "SocialLayerGiftingVoicePanelWithApplicationWidget" }),
        K = !Z || null != N;
    return (0, l.jsxs)(eR, {
        className: r()(t, { [ey.gi]: !K }),
        "aria-label": K ? void 0 : ep.intl.string(ep.t.EKR8Ps),
        "aria-labelledby": K ? eD : void 0,
        children: [
            (0, l.jsxs)(c.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != p
                        ? (0, l.jsxs)("div", {
                              className: ey.p,
                              children: [
                                  (0, l.jsx)(L.A, {
                                      user: p,
                                      widget: f ?? g,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                      disableCTA: null != j,
                                      embedded: !0,
                                  }),
                                  j,
                              ],
                          })
                        : (0, l.jsx)(ek, { application: N }),
                    K && (0, l.jsx)(ew, { user: p, isGift: !v }),
                ],
            }),
            K &&
                (0, l.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 12,
                    children: [
                        null != Y && (0, l.jsx)(e_.O0, { Icon: Y.Icon, text: Y.text, endDatetime: Y.endsAt }),
                        W
                            ? (0, l.jsx)(A.y, { className: ey.Zp })
                            : (0, l.jsx)("div", { className: ey.HV, children: z }),
                    ],
                }),
            Z ? (0, l.jsx)(eL, { applicationId: s, onClose: o }) : (0, l.jsx)(eO, { application: N, onClose: o }),
        ],
    });
}
function eP(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, _.E)({ location: "SocialLayerGiftingVoicePanelWithFeatureCard" }),
        d = (0, x.bG)([H.default], () => H.default.getUser(n)),
        m = n === (0, x.bG)([P.default], () => P.default.getId()),
        p = (0, $.A)(s),
        {
            status: g,
            recommendations: f,
            skusToUserAndReason: h,
            hasBothSources: v,
        } = eM({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        I = "loading" === g || 0 === f.length || null == d,
        [S, j] = i.useMemo(() => {
            if (null == d || 0 === f.length) return [null, []];
            let e = f.length > 7 ? f.slice(0, 7) : f,
                t = (h[e[0].id] ?? {})[n] === G.j.WISHLIST;
            return [
                (0, l.jsx)(ev, {
                    sku: e[0],
                    targetUser: d,
                    isTargetingCurrentUser: m,
                    source: t ? V.uS.WISHLIST : V.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: v,
                    analyticsLocations: o,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                e.slice(1).map((e) => {
                    let t = (h[e.id] ?? {})[n] === G.j.WISHLIST;
                    return (0, l.jsx)(
                        ej,
                        {
                            sku: e,
                            targetUser: d,
                            isTargetingCurrentUser: m,
                            source: t ? V.uS.WISHLIST : V.uS.POPULAR,
                            guildId: r.guild_id,
                            channelId: r.id,
                            showIcons: v,
                            analyticsLocations: o,
                            onCardClick: a,
                            onButtonClick: a,
                        },
                        e.id,
                    );
                }),
            ];
        }, [d, f, h, n, m, r.guild_id, r.id, v, o, a]),
        N = (0, B.F)(m ? "vc_purchase_recommendations" : "vc_gift_recommendations", { applicationId: s });
    return (0, l.jsxs)(eR, {
        className: t,
        "aria-labelledby": eD,
        children: [
            (0, l.jsxs)(c.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(ek, { application: p }), (0, l.jsx)(ew, { user: d, isGift: !m })],
            }),
            I
                ? (0, l.jsx)(A.y, { className: ey.kc })
                : (0, l.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          null != N && (0, l.jsx)(e_.O0, { Icon: N.Icon, text: N.text, endDatetime: N.endsAt }),
                          S,
                          (0, l.jsx)("div", { className: ey.aS, children: j }),
                      ],
                  }),
            u ? (0, l.jsx)(eL, { applicationId: s, onClose: a }) : (0, l.jsx)(eO, { application: p, onClose: a }),
        ],
    });
}
