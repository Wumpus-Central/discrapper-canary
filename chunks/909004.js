n.d(t, { V: () => eF, Z: () => eH });
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
    h = n(821609),
    f = n(509434);
if (/^(221552|614256)$/.test(n.j)) var x = n(141628);
if (/^(221552|614256)$/.test(n.j)) var A = n(815021);
var v = n(289873),
    E = n(793574),
    C = n(688810),
    I = n(724302),
    j = n(294323),
    S = n(409626),
    _ = n(692969),
    b = n(980822),
    N = n(201718),
    y = n(741534),
    T = n(633075),
    L = n(851767),
    R = n(735321),
    D = n(702476),
    k = n(384377),
    M = n(591410),
    w = n(246356),
    O = n(634110),
    G = n(802494),
    P = n(310209),
    V = n(46653),
    F = n(287809),
    H = n(129230),
    U = n(427262),
    z = n(871123),
    W = n(453774),
    $ = n(831024),
    B = n(44724),
    Z = n(310784),
    Y = n.n(Z),
    Q = n(778712),
    X = n(318254),
    K = n(366010),
    q = n(890856),
    J = n(43990),
    ee = n(775602),
    et = n(587895),
    en = n(713517),
    el = n(993046),
    ei = n(413599),
    es = n(627001),
    er = n(532423),
    ea = n(317560),
    eo = n(306984),
    eu = n(366523),
    ec = n(652215),
    ed = n(682901),
    em = n(792996),
    ep = n(902344);
let eg = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: Q._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    eh = Y()("#000000").darken(1.5).alpha(0.9).hex(),
    ef = Y()("#000000").alpha(0).hex(),
    ex = `linear-gradient(to top, ${eh} 30%, ${ef} 80%)`;
function eA(e) {
    var t, n;
    let {
            sku: s,
            targetUser: a,
            isTargetingCurrentUser: o,
            source: c,
            showIcons: d,
            guildId: m,
            channelId: g,
            analyticsLocations: f,
            onCardClick: x,
            onButtonClick: A,
        } = e,
        v = i.useRef(null),
        E = (0, u.bG)([ei.A], () => (0, K.M)(ei.A.theme)),
        C = (0, u.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { isHoveringOrFocusing: I } = (0, en.A)(v),
        { guildId: j } = (0, z.nG)(s.applicationId),
        S = (0, u.bG)([et.A], () => et.A.getApplication(s.applicationId)),
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
                } = (0, el.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                u = i.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, l.jsx)("div", {
                                  className: ep.pt,
                                  children: (0, l.jsx)(p.E, {
                                      variant: "body-sm/semibold",
                                      color: "currentColor",
                                      children: em.intl.format(em.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, l.jsx)(
                                                  X.OrbsIcon,
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
                                    className: ep.p6,
                                    children: [
                                        null != s &&
                                            (0, l.jsx)(p.E, {
                                                className: ep.of,
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
        })({ sku: s, priceSetAssignmentPurchaseType: o ? ec.lid.DEFAULT : ec.lid.GIFT }),
        L = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    x?.(),
                    (0, ea.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: ed.vQ.GUILD_CHANNEL,
                        analyticsLocations: f,
                    }));
            },
            [s.id, s.applicationId, a, f, x],
        ),
        R = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    A?.(),
                    (0, eo.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: ed.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: j },
                    ));
            },
            [s, a, o, f, j, A],
        );
    return (0, l.jsxs)(q.s, {
        onClick: L,
        className: r()(ep.Nr, { [ep.Zl]: !C, [ep.BN]: E, [ep.YF]: I }),
        ref: v,
        "aria-label": s.name,
        children: [
            (0, l.jsx)(es.P, { spec: eg, application: S }),
            d && !o && c === O.uS.WISHLIST
                ? (0, l.jsx)(er.n, { spec: eg, user: a, guildId: m ?? void 0, channelId: g ?? void 0 })
                : null,
            (0, l.jsx)(eu.e, {
                shape: "custom",
                sku: s,
                containerClassName: ep.Vl,
                foregroundImageClassName: ep.wP,
                backgroundImageClassName: ep.GC,
                cssPosition: "absolute",
            }),
            (0, l.jsx)("div", { className: ep.iZ, style: { background: ex } }),
            (0, l.jsx)(J.N, {
                theme: ec.NJ8.DARK,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: r()(ep.zH, e),
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(ep.gn, { [ep.ov]: null == N, [ep.w4]: y }),
                                children: [
                                    null != _ && (0, l.jsx)("img", { src: _.toString(), alt: b, className: ep.ye }),
                                    (0, l.jsx)(p.E, {
                                        color: "text-overlay-light",
                                        variant: "body-md/medium",
                                        lineClamp: 1,
                                        children: s.name,
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", { className: ep.iQ, children: N }),
                        ],
                    }),
            }),
            (0, l.jsx)("div", {
                className: ep.li,
                children: (0, l.jsx)(h.$, {
                    variant: "primary",
                    onClick: R,
                    text:
                        ((t = T),
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
    });
}
var ev = n(661492),
    eE = n(146423),
    eC = n(662349);
let eI = n(699976).Z.SIZE_90;
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
        { guildId: h } = (0, z.nG)(t.applicationId),
        f = i.useCallback(() => {
            (d?.(),
                (0, ea.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: ed.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                }));
        }, [t.id, t.applicationId, n, c, d]),
        x = i.useCallback(() => {
            (m?.(),
                (0, eo.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: ed.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: h },
                ));
        }, [t, n, s, c, h, m]),
        { label: A, icon: v } = (0, eC.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eE.A, {
        sku: t,
        user: n,
        spec: eI,
        onClick: f,
        "aria-label": em.intl.formatToPlainString(em.t.ZBB4Ty, { productName: (0, ev.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(eC.A, { spec: eI, onClick: x, isHoveringOrFocusing: p, label: A, icon: v }),
            a && !s && r === O.uS.WISHLIST
                ? (0, l.jsx)(er.n, { spec: eI, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var eS = n(910200),
    e_ = n(487887),
    eb = n(518477),
    eN = n(774240);
let ey = `vc-gifting-${(0, a.A)()}`,
    eT = Object.freeze([]);
function eL(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, children: s } = e,
        { ref: a, height: u = 1 / 0 } = (0, o.Ay)(),
        { ref: m, height: p = 1 / 0 } = (0, o.Ay)(),
        g = p > u ? d.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(w.A, {
            children: (0, l.jsx)(c.lG, {
                "aria-label": n,
                "aria-labelledby": i,
                modal: !1,
                children: (0, l.jsx)("div", {
                    ref: a,
                    className: r()(t, eN.kL),
                    children: (0, l.jsx)(g, { className: eN.U, children: (0, l.jsx)("div", { ref: m, children: s }) }),
                }),
            }),
        }),
    });
}
function eR(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(e_.iu.SMALL);
    return (0, l.jsxs)(m.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, l.jsx)("img", { className: eN.In, src: n, alt: t.name }),
            (0, l.jsx)(p.E, { variant: "body-sm/normal", children: t.name }),
        ],
    });
}
function eD(e) {
    let { user: t, isGift: n } = e,
        i = em.intl.string(em.t.kv4lSp),
        s = em.intl.string(em.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? em.intl.format(em.t.YwV901, { username: U.Ay.getName(t) }) : em.intl.string(em.t.qCmNFr)),
            (s = em.intl.string(em.t.SSgrne))),
        (0, l.jsxs)(m.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(g.D, { id: ey, variant: "body-md/normal", children: i }),
                (0, l.jsx)(p.E, { variant: "body-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function ek(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        r = i.useCallback(() => {
            null != s && (0, B.G)({ applicationId: s });
        }, [s]),
        a = i.useCallback(() => {
            null != s && (n(), (0, B.default)({ applicationId: s }));
        }, [s, n]);
    return null == t
        ? null
        : (0, l.jsx)(h.$, {
              variant: "secondary",
              icon: f.LinkExternalSmallIcon,
              iconPosition: "end",
              text: em.intl.format(em.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function eM(e) {
    let { applicationId: t, onClose: n } = e,
        { gameId: i } = (0, b.A)({ applicationId: t }),
        s = (0, _.A)({ gameId: i ?? void 0, source: S.GameProfileSources.VcHeaderActivity });
    return null == s
        ? null
        : (0, l.jsx)(h.$, {
              variant: "primary",
              text: em.intl.string(em.t.ajHoOr),
              onClick: (e) => {
                  (n(), s(e));
              },
              fullWidth: !0,
          });
}
function ew(e) {
    let { userId: t, applicationId: n, channel: l, numItems: s } = e,
        r = i.useMemo(() => [t], [t]),
        a = i.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, G.XQ)({ userIds: r, applicationIds: a, numItems: s }),
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
        })("loading" === o ? eT : u, eO),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, z.wH)(u, c, new Set(r));
            return e && t;
        }, [u, c, r]);
    return (
        i.useEffect(() => {
            0 !== u.length &&
                H.default.track(ec.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [l.id, l.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function eO(e, t) {
    return e.id === t.id;
}
function eG(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: r()(eN.RQ, t),
        children: [
            (0, l.jsx)("img", {
                className: eN.Vt,
                src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                alt: "",
            }),
            (0, l.jsx)(p.E, {
                variant: "body-lg/normal",
                color: "text-subtle",
                children: em.intl.string(em.t["rTU7/z"]),
            }),
        ],
    });
}
function eP(e) {
    let { text: t, onDismiss: n } = e;
    return (0, l.jsxs)("div", {
        className: eN.OQ,
        children: [
            (0, l.jsx)("div", { className: eN.bC }),
            (0, l.jsxs)(m.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(x.ExperimentalGameControllerLinkIcon, { className: eN.Ku, size: "xs" }),
                    (0, l.jsx)(p.E, { variant: "body-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(A.J, { size: "xs", onClick: n }),
        ],
    });
}
function eV(e) {
    let { applicationId: t, surface: n } = e,
        i = (0, $.u)({ surface: n, applicationId: t });
    return null == i ? null : (0, l.jsx)(eS.O0, { Icon: i.Icon, text: i.text, endDatetime: i.endsAt });
}
function eF(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: o, canShowCTA: c, onDismissCTA: d } = e;
    (0, N.P)(n);
    let { analyticsLocations: p } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        g = (0, u.bG)([F.default], () => F.default.getUser(n)),
        h = i.useMemo(() => new T.R({ applicationId: s }), [s]),
        f = (0, u.bG)([L.A], () => L.A.getWidgets(n)?.find((e) => e instanceof T.R && e.applicationId === s)),
        x = (0, u.bG)([V.default], () => V.default.getId()),
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
                    canStartAuthorization: h,
                    startAuthorization: f,
                } = (0, I.RD)(r ? c : void 0),
                { analyticsLocations: x } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                A = i.useCallback(() => {
                    h && f({ analyticsLocations: x });
                }, [x, h, f]),
                v = i.useCallback(() => {
                    (s(), (0, D.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x }));
                    let e = new T.R({ applicationId: n });
                    ((0, R.Y5)(e),
                        (0, y.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, k.XA)(eb.jM.WIDGET_ADDED), 700));
                }, [x, n, t, s]);
            return r && !u && p && null != d
                ? !g && h
                    ? (0, l.jsx)(eP, {
                          text: em.intl.format(o ? em.t.YWa8L2 : em.t.xxPgmT, { onClick: A }),
                          onDismiss: a,
                      })
                    : g && null == m && null != c
                      ? (0, l.jsx)(eP, {
                            text: em.intl.format(em.t.QuIwht, { applicationName: c.name, onClick: v }),
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
        _ = (0, W.A)(s),
        {
            status: b,
            recommendations: w,
            skusToUserAndReason: G,
            hasBothSources: H,
        } = ew({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        U = "loading" === b || null == g,
        z = i.useMemo(
            () =>
                null == g || 0 === w.length
                    ? []
                    : (w.length > 8 ? w.slice(0, 8) : w).map((e) => {
                          let t = (G[e.id] ?? {})[n] === P.j.WISHLIST;
                          return (0, l.jsx)(
                              ej,
                              {
                                  sku: e,
                                  targetUser: g,
                                  isTargetingCurrentUser: A,
                                  source: t ? O.uS.WISHLIST : O.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: H,
                                  analyticsLocations: p,
                                  onCardClick: o,
                                  onButtonClick: o,
                              },
                              e.id,
                          );
                      }),
            [g, w, a.guild_id, a.id, G, n, A, H, p, o],
        ),
        $ = null != _,
        B = i.useMemo(() => {
            if (!$) return null;
            let e = A ? "vc_purchase_recommendations" : "vc_gift_recommendations";
            return U
                ? (0, l.jsxs)(m.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          (0, l.jsx)(eV, { applicationId: s, surface: e }),
                          (0, l.jsx)(v.y, { className: eN.Zp }),
                      ],
                  })
                : z.length > 0
                  ? (0, l.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eV, { applicationId: s, surface: e }),
                            (0, l.jsx)("div", { className: eN.HV, children: z }),
                        ],
                    })
                  : (0, l.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eV, { applicationId: s, surface: e }),
                            (0, l.jsx)(eG, { className: eN.Zp }),
                        ],
                    });
        }, [s, $, U, A, z]),
        Z = i.useMemo(
            () =>
                $ ? (0, l.jsx)(ek, { application: _, onClose: o }) : (0, l.jsx)(eM, { applicationId: s, onClose: o }),
            [_, s, $, o],
        );
    return (0, l.jsxs)(eL, {
        className: r()(t, { [eN.gi]: !$ }),
        "aria-label": $ ? void 0 : em.intl.string(em.t.EKR8Ps),
        "aria-labelledby": $ ? ey : void 0,
        children: [
            (0, l.jsxs)(m.B, {
                className: eN.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != g
                        ? (0, l.jsxs)("div", {
                              className: eN.p,
                              children: [
                                  (0, l.jsx)(M.A, {
                                      user: g,
                                      widget: f ?? h,
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
                        : (0, l.jsx)(eR, { application: _ }),
                    $ && (0, l.jsx)(eD, { user: g, isGift: !A }),
                ],
            }),
            B,
            Z,
        ],
    });
}
function eH(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        c = (0, u.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, u.bG)([V.default], () => V.default.getId()),
        p = (0, W.A)(s),
        {
            status: g,
            recommendations: h,
            skusToUserAndReason: f,
            hasBothSources: x,
        } = ew({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        A = "loading" === g || null == c,
        [I, j] = i.useMemo(() => {
            if (null == c || 0 === h.length) return [null, []];
            let e = h.length > 7 ? h.slice(0, 7) : h,
                t = (f[e[0].id] ?? {})[n] === P.j.WISHLIST;
            return [
                (0, l.jsx)(eA, {
                    sku: e[0],
                    targetUser: c,
                    isTargetingCurrentUser: d,
                    source: t ? O.uS.WISHLIST : O.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: x,
                    analyticsLocations: o,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                e.slice(1).map((e) => {
                    let t = (f[e.id] ?? {})[n] === P.j.WISHLIST;
                    return (0, l.jsx)(
                        ej,
                        {
                            sku: e,
                            targetUser: c,
                            isTargetingCurrentUser: d,
                            source: t ? O.uS.WISHLIST : O.uS.POPULAR,
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
        }, [c, h, f, n, d, r.guild_id, r.id, x, o, a]),
        S = i.useMemo(
            () =>
                A
                    ? (0, l.jsx)(v.y, { className: eN.kc })
                    : null != I || j.length > 0
                      ? (0, l.jsxs)(m.B, {
                            direction: "vertical",
                            gap: 12,
                            children: [
                                (0, l.jsx)(eV, {
                                    applicationId: s,
                                    surface: d ? "vc_purchase_recommendations" : "vc_gift_recommendations",
                                }),
                                I,
                                (0, l.jsx)("div", { className: eN.aS, children: j }),
                            ],
                        })
                      : (0, l.jsx)(eG, { className: eN.kc }),
            [s, A, d, I, j],
        );
    return (0, l.jsxs)(eL, {
        className: t,
        "aria-labelledby": ey,
        children: [
            (0, l.jsxs)(m.B, {
                className: eN.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(eR, { application: p }), (0, l.jsx)(eD, { user: c, isGift: !d })],
            }),
            S,
            (0, l.jsx)(ek, { application: p, onClose: a }),
        ],
    });
}
