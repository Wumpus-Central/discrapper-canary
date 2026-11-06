n.d(t, { V: () => eH, Z: () => eU });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(115560),
    o = n(494012),
    u = n(855986),
    c = n(113325),
    d = n(516521),
    m = n(331322),
    p = n(834730),
    g = n(534514),
    f = n(821609),
    h = n(509434);
if (/^(221552|614256)$/.test(n.j)) var x = n(141628);
if (/^(221552|614256)$/.test(n.j)) var A = n(815021);
var v = n(289873),
    E = n(793574),
    C = n(688810),
    I = n(724302),
    j = n(294323),
    S = n(409626),
    _ = n(613902),
    b = n(692969),
    N = n(980822),
    y = n(201718),
    T = n(741534),
    L = n(633075),
    R = n(851767),
    D = n(735321),
    k = n(702476),
    M = n(384377),
    w = n(591410),
    O = n(246356),
    G = n(634110),
    P = n(802494),
    V = n(310209),
    F = n(46653),
    H = n(287809),
    U = n(129230),
    W = n(427262),
    z = n(871123),
    $ = n(453774),
    B = n(831024),
    Z = n(44724),
    Y = n(310784),
    Q = n.n(Y),
    X = n(778712),
    K = n(318254),
    q = n(366010),
    J = n(890856),
    ee = n(43990),
    et = n(775602),
    en = n(587895),
    el = n(713517),
    ei = n(993046),
    es = n(413599),
    er = n(627001),
    ea = n(532423),
    eo = n(317560),
    eu = n(306984),
    ec = n(366523),
    ed = n(652215),
    em = n(682901),
    ep = n(792996),
    eg = n(902344);
let ef = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: X._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    eh = Q()("#000000").darken(1.5).alpha(0.9).hex(),
    ex = Q()("#000000").alpha(0).hex(),
    eA = `linear-gradient(to top, ${eh} 30%, ${ex} 80%)`;
function ev(e) {
    var t, n;
    let {
            sku: s,
            targetUser: a,
            isTargetingCurrentUser: o,
            source: c,
            showIcons: d,
            guildId: m,
            channelId: g,
            analyticsLocations: h,
            onCardClick: x,
            onButtonClick: A,
        } = e,
        v = i.useRef(null),
        E = (0, u.bG)([es.A], () => (0, q.M)(es.A.theme)),
        C = (0, u.bG)([et.Ay], () => et.Ay.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, el.A)(v),
        { guildId: j } = (0, z.nG)(s.applicationId),
        S = (0, u.bG)([en.A], () => en.A.getApplication(s.applicationId)),
        { primaryIconAsset: _, primaryIconLabel: b } = i.useMemo(() => (0, z.Cv)(s, s.applicationId), [s]),
        {
            priceComponent: N,
            extendedHeight: y,
            displayPrice: T,
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
                                  children: (0, l.jsx)(p.E, {
                                      variant: "body-sm/semibold",
                                      color: "currentColor",
                                      children: ep.intl.format(ep.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, l.jsx)(
                                                  K.OrbsIcon,
                                                  { size: "xs", color: "currentColor" },
                                                  "orbs-icon",
                                              ),
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
                                            (0, l.jsx)(p.E, {
                                                className: eg.of,
                                                variant: "body-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: s,
                                            }),
                                        (0, l.jsx)(p.E, {
                                            variant: "body-md/semibold",
                                            color: "text-overlay-light",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                        (0, l.jsxs)(p.E, {
                                            variant: "body-md/semibold",
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
                                (0, l.jsx)(p.E, {
                                    variant: "body-md/semibold",
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
        L = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    x?.(),
                    (0, eo.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: em.vQ.GUILD_CHANNEL,
                        analyticsLocations: h,
                    }));
            },
            [s.id, s.applicationId, a, h, x],
        ),
        R = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    A?.(),
                    (0, eu.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: h, guildId: j },
                    ));
            },
            [s, a, o, h, j, A],
        );
    return (0, l.jsxs)(J.s, {
        onClick: L,
        className: r()(eg.Nr, { [eg.Zl]: !C, [eg.BN]: E, [eg.YF]: I }),
        ref: v,
        "aria-label": s.name,
        children: [
            (0, l.jsx)(er.P, { spec: ef, application: S }),
            d && !o && c === G.uS.WISHLIST
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
            (0, l.jsx)("div", { className: eg.iZ, style: { background: eA } }),
            (0, l.jsx)(ee.N, {
                theme: ed.NJ8.DARK,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: r()(eg.zH, e),
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(eg.gn, { [eg.ov]: null == N, [eg.w4]: y }),
                                children: [
                                    null != _ && (0, l.jsx)("img", { src: _.toString(), alt: b, className: eg.ye }),
                                    (0, l.jsx)(p.E, {
                                        color: "text-overlay-light",
                                        variant: "body-md/medium",
                                        lineClamp: 1,
                                        children: s.name,
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", { className: eg.iQ, children: N }),
                        ],
                    }),
            }),
            (0, l.jsx)("div", {
                className: eg.li,
                children: (0, l.jsx)(f.$, {
                    variant: "primary",
                    onClick: R,
                    text:
                        ((t = T),
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
    eC = n(146423),
    eI = n(662349);
let ej = n(699976).Z.SIZE_90;
function eS(e) {
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
            (d?.(),
                (0, eo.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: em.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                }));
        }, [t.id, t.applicationId, n, c, d]),
        x = i.useCallback(() => {
            (m?.(),
                (0, eu.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                ));
        }, [t, n, s, c, f, m]),
        { label: A, icon: v } = (0, eI.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: ej,
        onClick: h,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, eE.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(eI.A, { spec: ej, onClick: x, isHoveringOrFocusing: p, label: A, icon: v }),
            a && !s && r === G.uS.WISHLIST
                ? (0, l.jsx)(ea.n, { spec: ej, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var e_ = n(910200),
    eb = n(487887),
    eN = n(518477),
    ey = n(774240);
let eT = `vc-gifting-${(0, a.A)()}`,
    eL = Object.freeze([]);
function eR(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, children: s } = e,
        { ref: a, height: u = 1 / 0 } = (0, o.Ay)(),
        { ref: m, height: p = 1 / 0 } = (0, o.Ay)(),
        g = p > u ? d.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(O.A, {
            children: (0, l.jsx)(c.lG, {
                "aria-label": n,
                "aria-labelledby": i,
                modal: !1,
                children: (0, l.jsx)("div", {
                    ref: a,
                    className: r()(t, ey.kL),
                    children: (0, l.jsx)(g, { className: ey.U, children: (0, l.jsx)("div", { ref: m, children: s }) }),
                }),
            }),
        }),
    });
}
function eD(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(eb.iu.SMALL);
    return (0, l.jsxs)(m.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, l.jsx)("img", { className: ey.In, src: n, alt: t.name }),
            (0, l.jsx)(p.E, { variant: "body-sm/normal", children: t.name }),
        ],
    });
}
function ek(e) {
    let { user: t, isGift: n } = e,
        i = ep.intl.string(ep.t.kv4lSp),
        s = ep.intl.string(ep.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? ep.intl.format(ep.t.YwV901, { username: W.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (s = ep.intl.string(ep.t.SSgrne))),
        (0, l.jsxs)(m.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(g.D, { id: eT, variant: "body-md/normal", children: i }),
                (0, l.jsx)(p.E, { variant: "body-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eM(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        r = i.useCallback(() => {
            null != s && (0, Z.G)({ applicationId: s });
        }, [s]),
        a = i.useCallback(() => {
            null != s && (n(), (0, Z.default)({ applicationId: s }));
        }, [s, n]);
    return null == t
        ? null
        : (0, l.jsx)(f.$, {
              variant: "secondary",
              icon: h.LinkExternalSmallIcon,
              iconPosition: "end",
              text: ep.intl.format(ep.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function ew(e) {
    let { applicationId: t, onClose: n } = e,
        { gameId: i } = (0, N.A)({ applicationId: t }),
        s = (0, b.A)({ gameId: i ?? void 0, source: S.GameProfileSources.VcHeaderActivity });
    return null == s
        ? null
        : (0, l.jsx)(f.$, {
              variant: "primary",
              text: ep.intl.string(ep.t.ajHoOr),
              onClick: (e) => {
                  (n(), s(e));
              },
              fullWidth: !0,
          });
}
function eO(e) {
    let { userId: t, applicationId: n, channel: l, numItems: s } = e,
        r = i.useMemo(() => [t], [t]),
        a = i.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, P.XQ)({ userIds: r, applicationIds: a, numItems: s }),
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
        })("loading" === o ? eL : u, eG),
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
function eG(e, t) {
    return e.id === t.id;
}
function eP(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: r()(ey.RQ, t),
        children: [
            (0, l.jsx)("img", {
                className: ey.Vt,
                src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                alt: "",
            }),
            (0, l.jsx)(p.E, {
                variant: "body-lg/normal",
                color: "text-subtle",
                children: ep.intl.string(ep.t["rTU7/z"]),
            }),
        ],
    });
}
function eV(e) {
    let { text: t, onDismiss: n } = e;
    return (0, l.jsxs)("div", {
        className: ey.OQ,
        children: [
            (0, l.jsx)("div", { className: ey.bC }),
            (0, l.jsxs)(m.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(x.ExperimentalGameControllerLinkIcon, { className: ey.Ku, size: "xs" }),
                    (0, l.jsx)(p.E, { variant: "body-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(A.J, { size: "xs", onClick: n }),
        ],
    });
}
function eF(e) {
    let { applicationId: t, surface: n } = e,
        i = (0, B.u)({ surface: n, applicationId: t });
    return null == i ? null : (0, l.jsx)(e_.O0, { Icon: i.Icon, text: i.text, endDatetime: i.endsAt });
}
function eH(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: o, canShowCTA: c, onDismissCTA: d } = e;
    (0, y.P)(n);
    let { analyticsLocations: p } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        g = (0, u.bG)([H.default], () => H.default.getUser(n)),
        f = i.useMemo(() => new L.R({ applicationId: s }), [s]),
        h = (0, u.bG)([R.A], () => R.A.getWidgets(n)?.find((e) => e instanceof L.R && e.applicationId === s)),
        x = (0, u.bG)([F.default], () => F.default.getId()),
        A = n === x,
        S = (function (e) {
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
                    canStartAuthorization: f,
                    startAuthorization: h,
                } = (0, I.RD)(r ? c : void 0),
                { analyticsLocations: x } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                A = i.useCallback(() => {
                    f && h({ analyticsLocations: x });
                }, [x, f, h]),
                v = i.useCallback(() => {
                    (s(), (0, k.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x }));
                    let e = new L.R({ applicationId: n });
                    ((0, D.Y5)(e),
                        (0, T.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, M.XA)(eN.jM.WIDGET_ADDED), 700));
                }, [x, n, t, s]);
            return r && !u && p && null != d
                ? !g && f
                    ? (0, l.jsx)(eV, {
                          text: ep.intl.format(o ? ep.t.YWa8L2 : ep.t.xxPgmT, { onClick: A }),
                          onDismiss: a,
                      })
                    : g && null == m && null != c
                      ? (0, l.jsx)(eV, {
                            text: ep.intl.format(ep.t.QuIwht, { applicationName: c.name, onClick: v }),
                            onDismiss: a,
                        })
                      : null
                : null;
        })({
            currentUserId: x,
            applicationId: s,
            onClose: o,
            canShowCTA: c,
            onDismissCTA: d,
            isTargetingCurrentUser: A,
        }),
        b = (0, $.A)(s),
        {
            status: N,
            recommendations: O,
            skusToUserAndReason: P,
            hasBothSources: U,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        W = "loading" === N || null == g,
        z = i.useMemo(
            () =>
                null == g || 0 === O.length
                    ? []
                    : (O.length > 8 ? O.slice(0, 8) : O).map((e) => {
                          let t = (P[e.id] ?? {})[n] === V.j.WISHLIST;
                          return (0, l.jsx)(
                              eS,
                              {
                                  sku: e,
                                  targetUser: g,
                                  isTargetingCurrentUser: A,
                                  source: t ? G.uS.WISHLIST : G.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: U,
                                  analyticsLocations: p,
                                  onCardClick: o,
                                  onButtonClick: o,
                              },
                              e.id,
                          );
                      }),
            [g, O, a.guild_id, a.id, P, n, A, U, p, o],
        ),
        B = !(0, _.E)({ location: "SocialLayerGiftingVoicePanelWithApplicationWidget" }) || null != b,
        Z = i.useMemo(() => {
            if (!B) return null;
            let e = A ? "vc_purchase_recommendations" : "vc_gift_recommendations";
            return W
                ? (0, l.jsxs)(m.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          (0, l.jsx)(eF, { applicationId: s, surface: e }),
                          (0, l.jsx)(v.y, { className: ey.Zp }),
                      ],
                  })
                : z.length > 0
                  ? (0, l.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eF, { applicationId: s, surface: e }),
                            (0, l.jsx)("div", { className: ey.HV, children: z }),
                        ],
                    })
                  : (0, l.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eF, { applicationId: s, surface: e }),
                            (0, l.jsx)(eP, { className: ey.Zp }),
                        ],
                    });
        }, [s, B, W, A, z]),
        Y = i.useMemo(
            () =>
                B ? (0, l.jsx)(eM, { application: b, onClose: o }) : (0, l.jsx)(ew, { applicationId: s, onClose: o }),
            [b, s, B, o],
        );
    return (0, l.jsxs)(eR, {
        className: r()(t, { [ey.gi]: !B }),
        "aria-label": B ? void 0 : ep.intl.string(ep.t.EKR8Ps),
        "aria-labelledby": B ? eT : void 0,
        children: [
            (0, l.jsxs)(m.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != g
                        ? (0, l.jsxs)("div", {
                              className: ey.p,
                              children: [
                                  (0, l.jsx)(w.A, {
                                      user: g,
                                      widget: h ?? f,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                      disableCTA: null != S,
                                      embedded: !0,
                                  }),
                                  S,
                              ],
                          })
                        : (0, l.jsx)(eD, { application: b }),
                    B && (0, l.jsx)(ek, { user: g, isGift: !A }),
                ],
            }),
            Z,
            Y,
        ],
    });
}
function eU(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        c = (0, u.bG)([H.default], () => H.default.getUser(n)),
        d = n === (0, u.bG)([F.default], () => F.default.getId()),
        p = (0, $.A)(s),
        {
            status: g,
            recommendations: f,
            skusToUserAndReason: h,
            hasBothSources: x,
        } = eO({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        A = "loading" === g || null == c,
        [I, j] = i.useMemo(() => {
            if (null == c || 0 === f.length) return [null, []];
            let e = f.length > 7 ? f.slice(0, 7) : f,
                t = (h[e[0].id] ?? {})[n] === V.j.WISHLIST;
            return [
                (0, l.jsx)(ev, {
                    sku: e[0],
                    targetUser: c,
                    isTargetingCurrentUser: d,
                    source: t ? G.uS.WISHLIST : G.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: x,
                    analyticsLocations: o,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                e.slice(1).map((e) => {
                    let t = (h[e.id] ?? {})[n] === V.j.WISHLIST;
                    return (0, l.jsx)(
                        eS,
                        {
                            sku: e,
                            targetUser: c,
                            isTargetingCurrentUser: d,
                            source: t ? G.uS.WISHLIST : G.uS.POPULAR,
                            guildId: r.guild_id,
                            channelId: r.id,
                            showIcons: x,
                            analyticsLocations: o,
                            onCardClick: a,
                            onButtonClick: a,
                        },
                        e.id,
                    );
                }),
            ];
        }, [c, f, h, n, d, r.guild_id, r.id, x, o, a]),
        S = i.useMemo(
            () =>
                A
                    ? (0, l.jsx)(v.y, { className: ey.kc })
                    : null != I || j.length > 0
                      ? (0, l.jsxs)(m.B, {
                            direction: "vertical",
                            gap: 12,
                            children: [
                                (0, l.jsx)(eF, {
                                    applicationId: s,
                                    surface: d ? "vc_purchase_recommendations" : "vc_gift_recommendations",
                                }),
                                I,
                                (0, l.jsx)("div", { className: ey.aS, children: j }),
                            ],
                        })
                      : (0, l.jsx)(eP, { className: ey.kc }),
            [s, A, d, I, j],
        );
    return (0, l.jsxs)(eR, {
        className: t,
        "aria-labelledby": eT,
        children: [
            (0, l.jsxs)(m.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(eD, { application: p }), (0, l.jsx)(ek, { user: c, isGift: !d })],
            }),
            S,
            (0, l.jsx)(eM, { application: p, onClose: a }),
        ],
    });
}
