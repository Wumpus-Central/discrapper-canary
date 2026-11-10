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
    L = n(633075),
    T = n(851767),
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
    K = n(318254),
    X = n(366010),
    q = n(890856),
    J = n(43990),
    ee = n(775602),
    et = n(587895),
    en = n(713517),
    el = n(993046),
    ei = n(413599),
    es = n(627001),
    er = n(532423),
    ea = n(205177),
    eo = n(317560),
    eu = n(306984),
    ec = n(366523),
    ed = n(652215),
    em = n(682901),
    ep = n(792996),
    eg = n(902344);
let eh = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: Q._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    ef = Y()("#000000").darken(1.5).alpha(0.9).hex(),
    ex = Y()("#000000").alpha(0).hex(),
    eA = `linear-gradient(to top, ${ef} 30%, ${ex} 80%)`;
function ev(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: s,
            source: a,
            showIcons: o,
            guildId: c,
            channelId: d,
            analyticsLocations: m,
            onCardClick: g,
            onButtonClick: f,
        } = e,
        x = i.useRef(null),
        A = (0, u.bG)([ei.A], () => (0, X.M)(ei.A.theme)),
        v = (0, u.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { isHoveringOrFocusing: E } = (0, en.A)(x),
        { guildId: C } = (0, z.nG)(t.applicationId),
        I = (0, u.bG)([et.A], () => et.A.getApplication(t.applicationId)),
        { primaryIconAsset: j, primaryIconLabel: S } = i.useMemo(() => (0, z.Cv)(t, t.applicationId), [t]),
        {
            priceComponent: _,
            extendedHeight: b,
            displayPrice: N,
            purchaseButtonText: y,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n } = e,
                s = (0, el.ou)({ sku: t, priceSetAssignmentPurchaseType: n }),
                { normalPrice: r, discountedPrice: a, discountPercent: o, userPrice: u } = (0, el.j9)(s),
                c = (0, ea.$)(s, u),
                d = null != u,
                m = i.useMemo(
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
            return null != t && d
                ? null != o && null != a
                    ? {
                          priceComponent: (0, l.jsxs)("div", {
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: eg.p6,
                                      children: [
                                          null != r &&
                                              (0, l.jsx)(p.E, {
                                                  className: eg.of,
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: r,
                                              }),
                                          (0, l.jsx)(p.E, {
                                              variant: "body-md/semibold",
                                              color: "text-overlay-light",
                                              lineClamp: 1,
                                              children: a,
                                          }),
                                          (0, l.jsxs)(p.E, {
                                              variant: "body-md/semibold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", o, ")"],
                                          }),
                                      ],
                                  }),
                                  m,
                              ],
                          }),
                          extendedHeight: null != m,
                          displayPrice: u,
                          purchaseButtonText: c,
                      }
                    : {
                          priceComponent: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(p.E, {
                                      variant: "body-md/semibold",
                                      color: "text-overlay-light",
                                      lineClamp: 1,
                                      children: r,
                                  }),
                                  m,
                              ],
                          }),
                          extendedHeight: !1,
                          displayPrice: u,
                          purchaseButtonText: c,
                      }
                : { priceComponent: null, extendedHeight: !1, displayPrice: u, purchaseButtonText: c };
        })({ sku: t, priceSetAssignmentPurchaseType: s ? ed.lid.DEFAULT : ed.lid.GIFT }),
        L = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    g?.(),
                    (0, eo.R)({
                        skuId: t.id,
                        applicationId: t.applicationId,
                        isStorefront: !1,
                        giftRecipient: n,
                        giftingOrigin: em.vQ.GUILD_CHANNEL,
                        analyticsLocations: m,
                    }));
            },
            [t.id, t.applicationId, n, m, g],
        ),
        T = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    f?.(),
                    (0, eu.a)(
                        t,
                        { isGift: !s, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: m, guildId: C },
                    ));
            },
            [t, n, s, m, C, f],
        );
    return (0, l.jsxs)(q.s, {
        onClick: L,
        className: r()(eg.Nr, { [eg.Zl]: !v, [eg.BN]: A, [eg.YF]: E }),
        ref: x,
        "aria-label": t.name,
        children: [
            (0, l.jsx)(es.P, { spec: eh, application: I }),
            o && !s && a === O.uS.WISHLIST
                ? (0, l.jsx)(er.n, { spec: eh, user: n, guildId: c ?? void 0, channelId: d ?? void 0 })
                : null,
            (0, l.jsx)(ec.e, {
                shape: "custom",
                sku: t,
                containerClassName: eg.Vl,
                foregroundImageClassName: eg.wP,
                backgroundImageClassName: eg.GC,
                cssPosition: "absolute",
            }),
            (0, l.jsx)("div", { className: eg.iZ, style: { background: eA } }),
            (0, l.jsx)(J.N, {
                theme: ed.NJ8.DARK,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: r()(eg.zH, e),
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(eg.gn, { [eg.ov]: null == _, [eg.w4]: b }),
                                children: [
                                    null != j && (0, l.jsx)("img", { src: j.toString(), alt: S, className: eg.ye }),
                                    (0, l.jsx)(p.E, {
                                        color: "text-overlay-light",
                                        variant: "body-md/medium",
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", { className: eg.iQ, children: _ }),
                        ],
                    }),
            }),
            (0, l.jsx)("div", {
                className: eg.li,
                children: (0, l.jsx)(h.$, {
                    variant: "primary",
                    onClick: T,
                    text: s ? y : null != N ? ep.intl.format(ep.t.o2WeeD, { price: N }) : ep.intl.string(ep.t.QAZA5f),
                    minWidth: 0,
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
        { guildId: h } = (0, z.nG)(t.applicationId),
        f = i.useCallback(() => {
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
                    { analyticsLocations: c, guildId: h },
                ));
        }, [t, n, s, c, h, m]),
        { label: A, icon: v } = (0, eI.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: ej,
        onClick: f,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, eE.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(eI.A, { spec: ej, onClick: x, isHoveringOrFocusing: p, label: A, icon: v }),
            a && !s && r === O.uS.WISHLIST
                ? (0, l.jsx)(er.n, { spec: ej, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var e_ = n(910200),
    eb = n(487887),
    eN = n(518477),
    ey = n(774240);
let eL = `vc-gifting-${(0, a.A)()}`,
    eT = Object.freeze([]);
function eR(e) {
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
            ((i = null != t ? ep.intl.format(ep.t.YwV901, { username: U.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (s = ep.intl.string(ep.t.SSgrne))),
        (0, l.jsxs)(m.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(g.D, { id: eL, variant: "body-md/normal", children: i }),
                (0, l.jsx)(p.E, { variant: "body-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eM(e) {
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
              text: ep.intl.format(ep.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function ew(e) {
    let { applicationId: t, onClose: n } = e,
        { gameId: i } = (0, b.A)({ applicationId: t }),
        s = (0, _.A)({ gameId: i ?? void 0, source: S.GameProfileSources.VcHeaderActivity });
    return null == s
        ? null
        : (0, l.jsx)(h.$, {
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
        })("loading" === o ? eT : u, eG),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, z.wH)(u, c, new Set(r));
            return e && t;
        }, [u, c, r]);
    return (
        i.useEffect(() => {
            0 !== u.length &&
                H.default.track(ed.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
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
        i = (0, $.u)({ surface: n, applicationId: t });
    return null == i ? null : (0, l.jsx)(e_.O0, { Icon: i.Icon, text: i.text, endDatetime: i.endsAt });
}
function eH(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: o, canShowCTA: c, onDismissCTA: d } = e;
    (0, N.P)(n);
    let { analyticsLocations: p } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        g = (0, u.bG)([F.default], () => F.default.getUser(n)),
        h = i.useMemo(() => new L.R({ applicationId: s }), [s]),
        f = (0, u.bG)([T.A], () => T.A.getWidgets(n)?.find((e) => e instanceof L.R && e.applicationId === s)),
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
                    let e = new L.R({ applicationId: n });
                    ((0, R.Y5)(e),
                        (0, y.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, k.XA)(eN.jM.WIDGET_ADDED), 700));
                }, [x, n, t, s]);
            return r && !u && p && null != d
                ? !g && h
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
        _ = (0, W.A)(s),
        {
            status: b,
            recommendations: w,
            skusToUserAndReason: G,
            hasBothSources: H,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        U = "loading" === b || null == g,
        z = i.useMemo(
            () =>
                null == g || 0 === w.length
                    ? []
                    : (w.length > 8 ? w.slice(0, 8) : w).map((e) => {
                          let t = (G[e.id] ?? {})[n] === P.j.WISHLIST;
                          return (0, l.jsx)(
                              eS,
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
        }, [s, $, U, A, z]),
        Z = i.useMemo(
            () =>
                $ ? (0, l.jsx)(eM, { application: _, onClose: o }) : (0, l.jsx)(ew, { applicationId: s, onClose: o }),
            [_, s, $, o],
        );
    return (0, l.jsxs)(eR, {
        className: r()(t, { [ey.gi]: !$ }),
        "aria-label": $ ? void 0 : ep.intl.string(ep.t.EKR8Ps),
        "aria-labelledby": $ ? eL : void 0,
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
                        : (0, l.jsx)(eD, { application: _ }),
                    $ && (0, l.jsx)(ek, { user: g, isGift: !A }),
                ],
            }),
            B,
            Z,
        ],
    });
}
function eU(e) {
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
        } = eO({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        A = "loading" === g || null == c,
        [I, j] = i.useMemo(() => {
            if (null == c || 0 === h.length) return [null, []];
            let e = h.length > 7 ? h.slice(0, 7) : h,
                t = (f[e[0].id] ?? {})[n] === P.j.WISHLIST;
            return [
                (0, l.jsx)(ev, {
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
                        eS,
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
        "aria-labelledby": eL,
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
