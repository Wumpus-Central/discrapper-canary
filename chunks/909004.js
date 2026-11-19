n.d(t, { V: () => eH, Z: () => eU });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
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
if (/^(221552|614256)$/.test(n.j)) var A = n(141628);
if (/^(221552|614256)$/.test(n.j)) var x = n(815021);
var v = n(289873),
    E = n(793574),
    C = n(688810),
    j = n(660298),
    S = n(294323),
    I = n(409626),
    b = n(692969),
    y = n(980822),
    _ = n(201718),
    N = n(741534),
    w = n(633075),
    k = n(851767),
    R = n(735321),
    L = n(100663),
    T = n(384377),
    D = n(591410),
    M = n(246356),
    O = n(634110),
    P = n(802494),
    G = n(310209),
    V = n(46653),
    F = n(287809),
    H = n(129230),
    U = n(427262),
    z = n(871123),
    W = n(453774),
    $ = n(831024),
    B = n(44724),
    K = n(310784),
    Y = n.n(K),
    X = n(778712),
    Z = n(318254),
    Q = n(366010),
    q = n(890856),
    J = n(43990),
    ee = n(775602),
    et = n(587895),
    en = n(713517),
    el = n(993046),
    ei = n(413599),
    er = n(627001),
    es = n(532423),
    ea = n(205177),
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
    eh = Y()("#000000").darken(1.5).alpha(0.9).hex(),
    eA = Y()("#000000").alpha(0).hex(),
    ex = `linear-gradient(to top, ${eh} 30%, ${eA} 80%)`;
function ev(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: r,
            source: a,
            showIcons: o,
            guildId: c,
            channelId: d,
            analyticsLocations: m,
            onCardClick: g,
            onButtonClick: h,
        } = e,
        A = i.useRef(null),
        x = (0, u.bG)([ei.A], () => (0, Q.M)(ei.A.theme)),
        v = (0, u.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { isHoveringOrFocusing: E } = (0, en.A)(A),
        { guildId: C } = (0, z.nG)(t.applicationId),
        j = (0, u.bG)([et.A], () => et.A.getApplication(t.applicationId)),
        { primaryIconAsset: S, primaryIconLabel: I } = i.useMemo(() => (0, z.Cv)(t, t.applicationId), [t]),
        {
            priceComponent: b,
            extendedHeight: y,
            displayPrice: _,
            purchaseButtonText: N,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n } = e,
                r = (0, el.ou)({ sku: t, priceSetAssignmentPurchaseType: n }),
                { normalPrice: s, discountedPrice: a, discountPercent: o, userPrice: u } = (0, el.j9)(r),
                c = (0, ea.$)(r, u),
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
                                                  Z.OrbsIcon,
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
                                      children: s,
                                  }),
                                  m,
                              ],
                          }),
                          extendedHeight: !1,
                          displayPrice: u,
                          purchaseButtonText: c,
                      }
                : { priceComponent: null, extendedHeight: !1, displayPrice: u, purchaseButtonText: c };
        })({ sku: t, priceSetAssignmentPurchaseType: r ? ed.lid.DEFAULT : ed.lid.GIFT }),
        w = i.useCallback(
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
        k = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    h?.(),
                    (0, eu.a)(
                        t,
                        { isGift: !r, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: m, guildId: C },
                    ));
            },
            [t, n, r, m, C, h],
        );
    return (0, l.jsxs)(q.s, {
        onClick: w,
        className: s()(eg.Nr, { [eg.Zl]: !v, [eg.BN]: x, [eg.YF]: E }),
        ref: A,
        "aria-label": t.name,
        children: [
            (0, l.jsx)(er.P, { spec: ef, application: j }),
            o && !r && a === O.uS.WISHLIST
                ? (0, l.jsx)(es.n, { spec: ef, user: n, guildId: c ?? void 0, channelId: d ?? void 0 })
                : null,
            (0, l.jsx)(ec.e, {
                shape: "custom",
                sku: t,
                containerClassName: eg.Vl,
                foregroundImageClassName: eg.wP,
                backgroundImageClassName: eg.GC,
                cssPosition: "absolute",
            }),
            (0, l.jsx)("div", { className: eg.iZ, style: { background: ex } }),
            (0, l.jsx)(J.N, {
                theme: ed.NJ8.DARK,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: s()(eg.zH, e),
                        children: [
                            (0, l.jsxs)("div", {
                                className: s()(eg.gn, { [eg.ov]: null == b, [eg.w4]: y }),
                                children: [
                                    null != S && (0, l.jsx)("img", { src: S.toString(), alt: I, className: eg.ye }),
                                    (0, l.jsx)(p.E, {
                                        color: "text-overlay-light",
                                        variant: "body-md/medium",
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", { className: eg.iQ, children: b }),
                        ],
                    }),
            }),
            (0, l.jsx)("div", {
                className: eg.li,
                children: (0, l.jsx)(f.$, {
                    variant: "primary",
                    onClick: k,
                    text: r ? N : null != _ ? ep.intl.format(ep.t.o2WeeD, { price: _ }) : ep.intl.string(ep.t.QAZA5f),
                    minWidth: 0,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
var eE = n(661492),
    eC = n(146423),
    ej = n(662349);
let eS = n(699976).Z.SIZE_90;
function eI(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: r,
            source: s,
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
        A = i.useCallback(() => {
            (m?.(),
                (0, eu.a)(
                    t,
                    { isGift: !r, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                ));
        }, [t, n, r, c, f, m]),
        { label: x, icon: v } = (0, ej.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: eS,
        onClick: h,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, eE.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(ej.A, { spec: eS, onClick: A, isHoveringOrFocusing: p, label: x, icon: v }),
            a && !r && s === O.uS.WISHLIST
                ? (0, l.jsx)(es.n, { spec: eS, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var eb = n(910200),
    ey = n(487887),
    e_ = n(518477),
    eN = n(774240);
let ew = `vc-gifting-${(0, a.A)()}`,
    ek = Object.freeze([]);
function eR(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, children: r } = e,
        { ref: a, height: u = 1 / 0 } = (0, o.Ay)(),
        { ref: m, height: p = 1 / 0 } = (0, o.Ay)(),
        g = p > u ? d.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(M.A, {
            children: (0, l.jsx)(c.lG, {
                "aria-label": n,
                "aria-labelledby": i,
                modal: !1,
                children: (0, l.jsx)("div", {
                    ref: a,
                    className: s()(t, eN.kL),
                    children: (0, l.jsx)(g, { className: eN.U, children: (0, l.jsx)("div", { ref: m, children: r }) }),
                }),
            }),
        }),
    });
}
function eL(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(ey.iu.SMALL);
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
function eT(e) {
    let { user: t, isGift: n } = e,
        i = ep.intl.string(ep.t.kv4lSp),
        r = ep.intl.string(ep.t.vzZoSF);
    return (
        n &&
            ((i = null != t ? ep.intl.format(ep.t.YwV901, { username: U.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (r = ep.intl.string(ep.t.SSgrne))),
        (0, l.jsxs)(m.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(g.D, { id: ew, variant: "body-md/normal", children: i }),
                (0, l.jsx)(p.E, { variant: "body-sm/medium", color: "text-subtle", children: r }),
            ],
        })
    );
}
function eD(e) {
    let { application: t, onClose: n } = e,
        r = t?.id,
        s = i.useCallback(() => {
            null != r && (0, B.G)({ applicationId: r });
        }, [r]),
        a = i.useCallback(() => {
            null != r && (n(), (0, B.default)({ applicationId: r }));
        }, [r, n]);
    return null == t
        ? null
        : (0, l.jsx)(f.$, {
              variant: "secondary",
              icon: h.LinkExternalSmallIcon,
              iconPosition: "end",
              text: ep.intl.format(ep.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: s,
              fullWidth: !0,
          });
}
function eM(e) {
    let { applicationId: t, onClose: n } = e,
        { gameId: i } = (0, y.A)({ applicationId: t }),
        r = (0, b.A)({ gameId: i ?? void 0, source: I.GameProfileSources.VcHeaderActivity });
    return null == r
        ? null
        : (0, l.jsx)(f.$, {
              variant: "primary",
              text: ep.intl.string(ep.t.ajHoOr),
              onClick: (e) => {
                  (n(), r(e));
              },
              fullWidth: !0,
          });
}
function eO(e) {
    let { userId: t, applicationId: n, channel: l, numItems: r } = e,
        s = i.useMemo(() => [t], [t]),
        a = i.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, P.XQ)({ userIds: s, applicationIds: a, numItems: r }),
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
        })("loading" === o ? ek : u, eP),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, z.wH)(u, c, new Set(s));
            return e && t;
        }, [u, c, s]);
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
function eP(e, t) {
    return e.id === t.id;
}
function eG(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: s()(eN.RQ, t),
        children: [
            (0, l.jsx)("img", {
                className: eN.Vt,
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
                    (0, l.jsx)(A.ExperimentalGameControllerLinkIcon, { className: eN.Ku, size: "xs" }),
                    (0, l.jsx)(p.E, { variant: "body-xs/normal", children: t }),
                ],
            }),
            (0, l.jsx)(x.J, { size: "xs", onClick: n }),
        ],
    });
}
function eF(e) {
    let { applicationId: t, surface: n } = e,
        i = (0, $.u)({ surface: n, applicationId: t });
    return null == i ? null : (0, l.jsx)(eb.O0, { Icon: i.Icon, text: i.text, endDatetime: i.endsAt });
}
function eH(e) {
    let { className: t, userId: n, applicationId: r, channel: a, onClose: o, canShowCTA: c, onDismissCTA: d } = e;
    (0, _.P)(n);
    let { analyticsLocations: p } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        g = (0, u.bG)([F.default], () => F.default.getUser(n)),
        f = i.useMemo(() => new w.R({ applicationId: r }), [r]),
        h = (0, u.bG)([k.A], () => k.A.getWidgets(n)?.find((e) => e instanceof w.R && e.applicationId === r)),
        A = (0, u.bG)([V.default], () => V.default.getId()),
        x = n === A,
        I = (function (e) {
            let {
                    currentUserId: t,
                    applicationId: n,
                    onClose: r,
                    canShowCTA: s,
                    onDismissCTA: a,
                    isTargetingCurrentUser: o,
                } = e,
                {
                    isLoading: u,
                    application: c,
                    applicationWidgetConfig: d,
                    profileApplicationWidget: m,
                } = (0, S.A)(s ? t : void 0, s ? n : void 0),
                {
                    fetched: p,
                    hasAlreadyLinked: g,
                    canStartAuthorization: f,
                    startAuthorization: h,
                } = (0, j.RD)(s ? c : void 0),
                { analyticsLocations: A } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                x = i.useCallback(() => {
                    f && h({ analyticsLocations: A });
                }, [A, f, h]),
                v = i.useCallback(() => {
                    (r(), (0, L.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: A }));
                    let e = new w.R({ applicationId: n });
                    ((0, R.Y5)(e),
                        (0, N.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, T.XA)(e_.jM.WIDGET_ADDED), 700));
                }, [A, n, t, r]);
            return s && !u && p && null != d
                ? !g && f
                    ? (0, l.jsx)(eV, {
                          text: ep.intl.format(o ? ep.t.YWa8L2 : ep.t.xxPgmT, { onClick: x }),
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
            currentUserId: A,
            applicationId: r,
            onClose: o,
            canShowCTA: c,
            onDismissCTA: d,
            isTargetingCurrentUser: x,
        }),
        b = (0, W.A)(r),
        {
            status: y,
            recommendations: M,
            skusToUserAndReason: P,
            hasBothSources: H,
        } = eO({ userId: n, applicationId: r, channel: a, numItems: 8 }),
        U = "loading" === y || null == g,
        z = i.useMemo(
            () =>
                null == g || 0 === M.length
                    ? []
                    : (M.length > 8 ? M.slice(0, 8) : M).map((e) => {
                          let t = (P[e.id] ?? {})[n] === G.j.WISHLIST;
                          return (0, l.jsx)(
                              eI,
                              {
                                  sku: e,
                                  targetUser: g,
                                  isTargetingCurrentUser: x,
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
            [g, M, a.guild_id, a.id, P, n, x, H, p, o],
        ),
        $ = null != b,
        B = i.useMemo(() => {
            if (!$) return null;
            let e = x ? "vc_purchase_recommendations" : "vc_gift_recommendations";
            return U
                ? (0, l.jsxs)(m.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          (0, l.jsx)(eF, { applicationId: r, surface: e }),
                          (0, l.jsx)(v.y, { className: eN.Zp }),
                      ],
                  })
                : z.length > 0
                  ? (0, l.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eF, { applicationId: r, surface: e }),
                            (0, l.jsx)("div", { className: eN.HV, children: z }),
                        ],
                    })
                  : (0, l.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eF, { applicationId: r, surface: e }),
                            (0, l.jsx)(eG, { className: eN.Zp }),
                        ],
                    });
        }, [r, $, U, x, z]),
        K = i.useMemo(
            () =>
                $ ? (0, l.jsx)(eD, { application: b, onClose: o }) : (0, l.jsx)(eM, { applicationId: r, onClose: o }),
            [b, r, $, o],
        );
    return (0, l.jsxs)(eR, {
        className: s()(t, { [eN.gi]: !$ }),
        "aria-label": $ ? void 0 : ep.intl.string(ep.t.EKR8Ps),
        "aria-labelledby": $ ? ew : void 0,
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
                                  (0, l.jsx)(D.A, {
                                      user: g,
                                      widget: h ?? f,
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                      disableCTA: null != I,
                                      embedded: !0,
                                  }),
                                  I,
                              ],
                          })
                        : (0, l.jsx)(eL, { application: b }),
                    $ && (0, l.jsx)(eT, { user: g, isGift: !x }),
                ],
            }),
            B,
            K,
        ],
    });
}
function eU(e) {
    let { className: t, userId: n, applicationId: r, channel: s, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        c = (0, u.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, u.bG)([V.default], () => V.default.getId()),
        p = (0, W.A)(r),
        {
            status: g,
            recommendations: f,
            skusToUserAndReason: h,
            hasBothSources: A,
        } = eO({ userId: n, applicationId: r, channel: s, numItems: 8 }),
        x = "loading" === g || null == c,
        [j, S] = i.useMemo(() => {
            if (null == c || 0 === f.length) return [null, []];
            let e = f.length > 7 ? f.slice(0, 7) : f,
                t = (h[e[0].id] ?? {})[n] === G.j.WISHLIST;
            return [
                (0, l.jsx)(ev, {
                    sku: e[0],
                    targetUser: c,
                    isTargetingCurrentUser: d,
                    source: t ? O.uS.WISHLIST : O.uS.POPULAR,
                    guildId: s.guild_id,
                    channelId: s.id,
                    showIcons: A,
                    analyticsLocations: o,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                e.slice(1).map((e) => {
                    let t = (h[e.id] ?? {})[n] === G.j.WISHLIST;
                    return (0, l.jsx)(
                        eI,
                        {
                            sku: e,
                            targetUser: c,
                            isTargetingCurrentUser: d,
                            source: t ? O.uS.WISHLIST : O.uS.POPULAR,
                            guildId: s.guild_id,
                            channelId: s.id,
                            showIcons: A,
                            analyticsLocations: o,
                            onCardClick: a,
                            onButtonClick: a,
                        },
                        e.id,
                    );
                }),
            ];
        }, [c, f, h, n, d, s.guild_id, s.id, A, o, a]),
        I = i.useMemo(
            () =>
                x
                    ? (0, l.jsx)(v.y, { className: eN.kc })
                    : null != j || S.length > 0
                      ? (0, l.jsxs)(m.B, {
                            direction: "vertical",
                            gap: 12,
                            children: [
                                (0, l.jsx)(eF, {
                                    applicationId: r,
                                    surface: d ? "vc_purchase_recommendations" : "vc_gift_recommendations",
                                }),
                                j,
                                (0, l.jsx)("div", { className: eN.aS, children: S }),
                            ],
                        })
                      : (0, l.jsx)(eG, { className: eN.kc }),
            [r, x, d, j, S],
        );
    return (0, l.jsxs)(eR, {
        className: t,
        "aria-labelledby": ew,
        children: [
            (0, l.jsxs)(m.B, {
                className: eN.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(eL, { application: p }), (0, l.jsx)(eT, { user: c, isGift: !d })],
            }),
            I,
            (0, l.jsx)(eD, { application: p, onClose: a }),
        ],
    });
}
