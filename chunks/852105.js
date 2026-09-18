n.d(t, { V: () => eH, Z: () => eU });
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
if (/^(221552|614256)$/.test(n.j)) var x = n(815021);
var h = n(289873),
    A = n(17928),
    v = n(689175),
    E = n(793574),
    C = n(688810),
    j = n(206828),
    I = n(294323),
    S = n(409626),
    _ = n(613902),
    N = n(692969),
    b = n(738250),
    y = n(201718),
    k = n(47675),
    D = n(633075),
    R = n(321191),
    T = n(735321),
    w = n(402860),
    L = n(384377),
    M = n(520082),
    O = n(246356),
    V = n(594832),
    G = n(862772),
    P = n(310209),
    F = n(280450),
    H = n(287809),
    U = n(174459),
    z = n(427262),
    W = n(871123),
    $ = n(453774),
    B = n(831024),
    Y = n(44724),
    Z = n(310784),
    Q = n.n(Z),
    K = n(318254),
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
    ex = Q()("#000000").darken(1.5).alpha(0.9).hex(),
    eh = Q()("#000000").alpha(0).hex(),
    eA = `linear-gradient(to top, ${ex} 30%, ${eh} 80%)`;
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
            onCardClick: x,
            onButtonClick: h,
        } = e,
        v = i.useRef(null),
        E = (0, A.bG)([es.A], () => (0, X.M)(es.A.theme)),
        C = (0, A.bG)([et.Ay], () => et.Ay.useReducedMotion),
        { isHoveringOrFocusing: j } = (0, el.A)(v),
        { guildId: I } = (0, W.nG)(s.applicationId),
        S = (0, A.bG)([en.A], () => en.A.getApplication(s.applicationId)),
        { primaryIconAsset: _, primaryIconLabel: N } = i.useMemo(() => (0, W.Cv)(s, s.applicationId), [s]),
        {
            priceComponent: b,
            extendedHeight: y,
            displayPrice: k,
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
                                              (0, l.jsx)(K.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
        D = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    x?.(),
                    (0, eo.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: em.vQ.GUILD_CHANNEL,
                        analyticsLocations: f,
                    }));
            },
            [s.id, s.applicationId, a, f, x],
        ),
        R = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    h?.(),
                    (0, eu.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: f, guildId: I },
                    ));
            },
            [s, a, o, f, I, h],
        );
    return (0, l.jsxs)(ee.s, {
        onClick: D,
        className: r()(eg.Nr, { [eg.Zl]: !C, [eg.BN]: E, [eg.YF]: j }),
        ref: v,
        "aria-label": s.name,
        children: [
            (0, l.jsx)(er.P, { spec: ef, application: S }),
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
            (0, l.jsx)("div", { className: eg.iZ, style: { background: eA } }),
            (0, l.jsx)(q.N, {
                theme: ed.NJ8.DARK,
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
                        ((t = k),
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
    ej = n(662349);
let eI = n(699976).Z.SIZE_90;
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
        { guildId: f } = (0, W.nG)(t.applicationId),
        x = i.useCallback(() => {
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
        h = i.useCallback(() => {
            (m?.(),
                (0, eu.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                ));
        }, [t, n, s, c, f, m]),
        { label: A, icon: v } = (0, ej.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, l.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: eI,
        onClick: x,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, eE.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, l.jsx)(ej.A, { spec: eI, onClick: h, isHoveringOrFocusing: p, label: A, icon: v }),
            a && !s && r === V.uS.WISHLIST
                ? (0, l.jsx)(ea.n, { spec: eI, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var e_ = n(910200),
    eN = n(360469),
    eb = n(518477),
    ey = n(774240);
let ek = `vc-gifting-${(0, a.A)()}`,
    eD = Object.freeze([]);
function eR(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, children: s } = e,
        { ref: a, height: c = 1 / 0 } = (0, o.Ay)(),
        { ref: d, height: m = 1 / 0 } = (0, o.Ay)(),
        p = m > c ? v.Ch : "div";
    return (0, l.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, l.jsx)(O.A, {
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
function eT(e) {
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
            ((i = null != t ? ep.intl.format(ep.t.YwV901, { username: z.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (s = ep.intl.string(ep.t.SSgrne))),
        (0, l.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, l.jsx)(m.D, { id: ek, variant: "text-md/normal", children: i }),
                (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function eL(e) {
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
function eM(e) {
    let { applicationId: t, onClose: n } = e,
        { gameId: i } = (0, b.A)({ applicationId: t }),
        s = (0, N.A)({ gameId: i ?? void 0, source: S.GameProfileSources.VcHeaderActivity });
    return null == s
        ? null
        : (0, l.jsx)(p.$, {
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
        })("loading" === o ? eD : u, eV),
        m = i.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, W.wH)(u, c, new Set(r));
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
function eG(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        className: r()(ey.RQ, t),
        children: [
            (0, l.jsx)("img", {
                className: ey.Vt,
                src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                alt: "",
            }),
            (0, l.jsx)(d.E, {
                variant: "text-lg/normal",
                color: "text-subtle",
                children: ep.intl.string(ep.t["rTU7/z"]),
            }),
        ],
    });
}
function eP(e) {
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
            (0, l.jsx)(x.J, { size: "xs", onClick: n }),
        ],
    });
}
function eF(e) {
    let { applicationId: t, surface: n } = e,
        i = (0, B.u)({ surface: n, applicationId: t });
    return null == i ? null : (0, l.jsx)(e_.O0, { Icon: i.Icon, text: i.text, endDatetime: i.endsAt });
}
function eH(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: o, canShowCTA: u, onDismissCTA: d } = e;
    (0, y.P)(n);
    let { analyticsLocations: m } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        p = (0, A.bG)([H.default], () => H.default.getUser(n)),
        g = i.useMemo(() => new D.R({ applicationId: s }), [s]),
        f = (0, A.bG)([R.A], () => R.A.getWidgets(n)?.find((e) => e instanceof D.R && e.applicationId === s)),
        x = (0, A.bG)([F.default], () => F.default.getId()),
        v = n === x,
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
                } = (0, I.A)(r ? t : void 0, r ? n : void 0),
                {
                    fetched: p,
                    hasAlreadyLinked: g,
                    canStartAuthorization: f,
                    startAuthorization: x,
                } = (0, j.RD)(r ? c : void 0),
                { analyticsLocations: h } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                A = i.useCallback(() => {
                    f && x({ analyticsLocations: h });
                }, [h, f, x]),
                v = i.useCallback(() => {
                    (s(), (0, w.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: h }));
                    let e = new D.R({ applicationId: n });
                    ((0, T.Y5)(e),
                        (0, k.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, L.XA)(eb.jM.WIDGET_ADDED), 700));
                }, [h, n, t, s]);
            return r && !u && p && null != d
                ? !g && f
                    ? (0, l.jsx)(eP, {
                          text: ep.intl.format(o ? ep.t.YWa8L2 : ep.t.xxPgmT, { onClick: A }),
                          onDismiss: a,
                      })
                    : g && null == m && null != c
                      ? (0, l.jsx)(eP, {
                            text: ep.intl.format(ep.t.QuIwht, { applicationName: c.name, onClick: v }),
                            onDismiss: a,
                        })
                      : null
                : null;
        })({
            currentUserId: x,
            applicationId: s,
            onClose: o,
            canShowCTA: u,
            onDismissCTA: d,
            isTargetingCurrentUser: v,
        }),
        N = (0, $.A)(s),
        {
            status: b,
            recommendations: O,
            skusToUserAndReason: G,
            hasBothSources: U,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        z = "loading" === b || null == p,
        W = i.useMemo(
            () =>
                null == p || 0 === O.length
                    ? []
                    : (O.length > 8 ? O.slice(0, 8) : O).map((e) => {
                          let t = (G[e.id] ?? {})[n] === P.j.WISHLIST;
                          return (0, l.jsx)(
                              eS,
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
            [p, O, a.guild_id, a.id, G, n, v, U, m, o],
        ),
        B = !(0, _.E)({ location: "SocialLayerGiftingVoicePanelWithApplicationWidget" }) || null != N,
        Y = i.useMemo(() => {
            if (!B) return null;
            let e = v ? "vc_purchase_recommendations" : "vc_gift_recommendations";
            return z
                ? (0, l.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          (0, l.jsx)(eF, { applicationId: s, surface: e }),
                          (0, l.jsx)(h.y, { className: ey.Zp }),
                      ],
                  })
                : W.length > 0
                  ? (0, l.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eF, { applicationId: s, surface: e }),
                            (0, l.jsx)("div", { className: ey.HV, children: W }),
                        ],
                    })
                  : (0, l.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, l.jsx)(eF, { applicationId: s, surface: e }),
                            (0, l.jsx)(eG, { className: ey.Zp }),
                        ],
                    });
        }, [s, B, z, v, W]),
        Z = i.useMemo(
            () =>
                B ? (0, l.jsx)(eL, { application: N, onClose: o }) : (0, l.jsx)(eM, { applicationId: s, onClose: o }),
            [N, s, B, o],
        );
    return (0, l.jsxs)(eR, {
        className: r()(t, { [ey.gi]: !B }),
        "aria-label": B ? void 0 : ep.intl.string(ep.t.EKR8Ps),
        "aria-labelledby": B ? ek : void 0,
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
                                  (0, l.jsx)(M.A, {
                                      user: p,
                                      widget: f ?? g,
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
                        : (0, l.jsx)(eT, { application: N }),
                    B && (0, l.jsx)(ew, { user: p, isGift: !v }),
                ],
            }),
            Y,
            Z,
        ],
    });
}
function eU(e) {
    let { className: t, userId: n, applicationId: s, channel: r, onClose: a } = e,
        { analyticsLocations: o } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        u = (0, A.bG)([H.default], () => H.default.getUser(n)),
        d = n === (0, A.bG)([F.default], () => F.default.getId()),
        m = (0, $.A)(s),
        {
            status: p,
            recommendations: g,
            skusToUserAndReason: f,
            hasBothSources: x,
        } = eO({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        v = "loading" === p || null == u,
        [j, I] = i.useMemo(() => {
            if (null == u || 0 === g.length) return [null, []];
            let e = g.length > 7 ? g.slice(0, 7) : g,
                t = (f[e[0].id] ?? {})[n] === P.j.WISHLIST;
            return [
                (0, l.jsx)(ev, {
                    sku: e[0],
                    targetUser: u,
                    isTargetingCurrentUser: d,
                    source: t ? V.uS.WISHLIST : V.uS.POPULAR,
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
                            targetUser: u,
                            isTargetingCurrentUser: d,
                            source: t ? V.uS.WISHLIST : V.uS.POPULAR,
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
        }, [u, g, f, n, d, r.guild_id, r.id, x, o, a]),
        S = i.useMemo(
            () =>
                v
                    ? (0, l.jsx)(h.y, { className: ey.kc })
                    : null != j || I.length > 0
                      ? (0, l.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 12,
                            children: [
                                (0, l.jsx)(eF, {
                                    applicationId: s,
                                    surface: d ? "vc_purchase_recommendations" : "vc_gift_recommendations",
                                }),
                                j,
                                (0, l.jsx)("div", { className: ey.aS, children: I }),
                            ],
                        })
                      : (0, l.jsx)(eG, { className: ey.kc }),
            [s, v, d, j, I],
        );
    return (0, l.jsxs)(eR, {
        className: t,
        "aria-labelledby": ek,
        children: [
            (0, l.jsxs)(c.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, l.jsx)(eT, { application: m }), (0, l.jsx)(ew, { user: u, isGift: !d })],
            }),
            S,
            (0, l.jsx)(eL, { application: m, onClose: a }),
        ],
    });
}
