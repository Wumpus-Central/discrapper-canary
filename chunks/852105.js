n.d(t, { V: () => eF, Z: () => eU });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(132500),
    o = n(494012),
    u = n(17928),
    c = n(113325),
    d = n(689175),
    m = n(331322),
    p = n(834730),
    g = n(297264),
    f = n(821609),
    x = n(509434);
if (/^(221552|391875)$/.test(n.j)) var h = n(141628);
if (/^(221552|391875)$/.test(n.j)) var A = n(815021);
var v = n(289873),
    E = n(793574),
    C = n(688810),
    j = n(206828),
    I = n(294323),
    S = n(409626),
    _ = n(613902),
    N = n(692969),
    b = n(980822),
    y = n(201718),
    T = n(47675),
    L = n(633075),
    D = n(321191),
    R = n(735321),
    k = n(402860),
    w = n(384377),
    M = n(58216),
    O = n(246356),
    G = n(561794),
    V = n(862772),
    P = n(310209),
    H = n(280450),
    F = n(287809),
    U = n(174459),
    z = n(427262),
    W = n(871123),
    $ = n(453774),
    B = n(831024),
    Z = n(44724),
    Y = n(310784),
    Q = n.n(Y),
    K = n(778712),
    X = n(318254),
    q = n(366010),
    J = n(890856),
    ee = n(43990),
    et = n(775602),
    en = n(587895),
    ei = n(713517),
    el = n(993046),
    es = n(363195),
    er = n(627001),
    ea = n(532423),
    eo = n(317560),
    eu = n(99161),
    ec = n(366523),
    ed = n(652215),
    em = n(202541),
    ep = n(105292),
    eg = n(902344);
let ef = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: K._3.SIZE_24,
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
            source: c,
            showIcons: d,
            guildId: m,
            channelId: g,
            analyticsLocations: x,
            onCardClick: h,
            onButtonClick: A,
        } = e,
        v = l.useRef(null),
        E = (0, u.bG)([es.A], () => (0, q.M)(es.A.theme)),
        C = (0, u.bG)([et.Ay], () => et.Ay.useReducedMotion),
        { isHoveringOrFocusing: j } = (0, ei.A)(v),
        { guildId: I } = (0, W.nG)(s.applicationId),
        S = (0, u.bG)([en.A], () => en.A.getApplication(s.applicationId)),
        { primaryIconAsset: _, primaryIconLabel: N } = l.useMemo(() => (0, W.Cv)(s, s.applicationId), [s]),
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
                } = (0, el.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                u = l.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, i.jsx)("div", {
                                  className: eg.pt,
                                  children: (0, i.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ep.intl.format(ep.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, i.jsx)(X.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
                        priceComponent: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: eg.p6,
                                    children: [
                                        null != s &&
                                            (0, i.jsx)(p.E, {
                                                className: eg.of,
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: s,
                                            }),
                                        (0, i.jsx)(p.E, {
                                            variant: "text-md/bold",
                                            color: "text-overlay-light",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                        (0, i.jsxs)(p.E, {
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
                        priceComponent: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.E, {
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
        L = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    h?.(),
                    (0, eo.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: a,
                        giftingOrigin: em.vQ.GUILD_CHANNEL,
                        analyticsLocations: x,
                    }));
            },
            [s.id, s.applicationId, a, x, h],
        ),
        D = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    A?.(),
                    (0, eu.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: x, guildId: I },
                    ));
            },
            [s, a, o, x, I, A],
        );
    return (0, i.jsxs)(J.s, {
        onClick: L,
        className: r()(eg.Nr, { [eg.Zl]: !C, [eg.BN]: E, [eg.YF]: j }),
        ref: v,
        "aria-label": s.name,
        children: [
            (0, i.jsx)(er.P, { spec: ef, application: S }),
            d && !o && c === G.uS.WISHLIST
                ? (0, i.jsx)(ea.n, { spec: ef, user: a, guildId: m ?? void 0, channelId: g ?? void 0 })
                : null,
            (0, i.jsx)(ec.e, {
                shape: "custom",
                sku: s,
                containerClassName: eg.Vl,
                foregroundImageClassName: eg.wP,
                backgroundImageClassName: eg.GC,
                cssPosition: "absolute",
            }),
            (0, i.jsx)("div", { className: eg.iZ, style: { background: eA } }),
            (0, i.jsx)(ee.N, {
                theme: ed.NJ8.DARK,
                children: (e) =>
                    (0, i.jsxs)("div", {
                        className: r()(eg.zH, e),
                        children: [
                            (0, i.jsxs)("div", {
                                className: r()(eg.gn, { [eg.ov]: null == b, [eg.w4]: y }),
                                children: [
                                    null != _ && (0, i.jsx)("img", { src: _.toString(), alt: N, className: eg.ye }),
                                    (0, i.jsx)(p.E, {
                                        color: "text-overlay-light",
                                        variant: "text-md/medium",
                                        lineClamp: 1,
                                        children: s.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: eg.iQ, children: b }),
                        ],
                    }),
            }),
            (0, i.jsx)("div", {
                className: eg.li,
                children: (0, i.jsx)(f.$, {
                    variant: "primary",
                    onClick: D,
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
        [p, g] = l.useState(!1),
        { guildId: f } = (0, W.nG)(t.applicationId),
        x = l.useCallback(() => {
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
        h = l.useCallback(() => {
            (m?.(),
                (0, eu.a)(
                    t,
                    { isGift: !s, giftRecipient: n, giftingOrigin: em.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: f },
                ));
        }, [t, n, s, c, f, m]),
        { label: A, icon: v } = (0, ej.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, i.jsxs)(eC.A, {
        sku: t,
        user: n,
        spec: eI,
        onClick: x,
        "aria-label": ep.intl.formatToPlainString(ep.t.ZBB4Ty, { productName: (0, eE.T)(t) }),
        onHoverOrFocusChange: g,
        children: [
            (0, i.jsx)(ej.A, { spec: eI, onClick: h, isHoveringOrFocusing: p, label: A, icon: v }),
            a && !s && r === G.uS.WISHLIST
                ? (0, i.jsx)(ea.n, { spec: eI, user: n, guildId: o ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var e_ = n(910200),
    eN = n(818023),
    eb = n(518477),
    ey = n(774240);
let eT = `vc-gifting-${(0, a.A)()}`,
    eL = Object.freeze([]);
function eD(e) {
    let { className: t, "aria-label": n, "aria-labelledby": l, children: s } = e,
        { ref: a, height: u = 1 / 0 } = (0, o.Ay)(),
        { ref: m, height: p = 1 / 0 } = (0, o.Ay)(),
        g = p > u ? d.Ch : "div";
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(O.A, {
            children: (0, i.jsx)(c.lG, {
                "aria-label": n,
                "aria-labelledby": l,
                modal: !1,
                children: (0, i.jsx)("div", {
                    ref: a,
                    className: r()(t, ey.kL),
                    children: (0, i.jsx)(g, { className: ey.U, children: (0, i.jsx)("div", { ref: m, children: s }) }),
                }),
            }),
        }),
    });
}
function eR(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(eN.iu.SMALL);
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: ey.In, src: n, alt: t.name }),
            (0, i.jsx)(p.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function ek(e) {
    let { user: t, isGift: n } = e,
        l = ep.intl.string(ep.t.kv4lSp),
        s = ep.intl.string(ep.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? ep.intl.format(ep.t.YwV901, { username: z.Ay.getName(t) }) : ep.intl.string(ep.t.qCmNFr)),
            (s = ep.intl.string(ep.t.SSgrne))),
        (0, i.jsxs)(m.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(g.D, { id: eT, variant: "text-md/normal", children: l }),
                (0, i.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
            ],
        })
    );
}
function ew(e) {
    let { application: t, onClose: n } = e,
        s = t?.id,
        r = l.useCallback(() => {
            null != s && (0, Z.G)({ applicationId: s });
        }, [s]),
        a = l.useCallback(() => {
            null != s && (n(), (0, Z.default)({ applicationId: s }));
        }, [s, n]);
    return null == t
        ? null
        : (0, i.jsx)(f.$, {
              variant: "secondary",
              icon: x.I,
              iconPosition: "end",
              text: ep.intl.format(ep.t["HDT/rg"], { applicationName: t.name }),
              onClick: a,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function eM(e) {
    let { applicationId: t, onClose: n } = e,
        { gameId: l } = (0, b.A)({ applicationId: t }),
        s = (0, N.A)({ gameId: l ?? void 0, source: S.GameProfileSources.VcHeaderActivity });
    return null == s
        ? null
        : (0, i.jsx)(f.$, {
              variant: "primary",
              text: ep.intl.string(ep.t.ajHoOr),
              onClick: (e) => {
                  (n(), s(e));
              },
              fullWidth: !0,
          });
}
function eO(e) {
    let { userId: t, applicationId: n, channel: i, numItems: s } = e,
        r = l.useMemo(() => [t], [t]),
        a = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: u,
            skusToUserAndReason: c,
        } = (0, V.XQ)({ userIds: r, applicationIds: a, numItems: s }),
        d = (function (e, t) {
            let [n, i] = l.useState(() => ({ items: e, orderedItems: e }));
            return (
                n.items !== e &&
                    i((n) => {
                        let i = [
                            ...n.orderedItems.map((n) => e.find((e) => t(n, e))).filter((e) => null != e),
                            ...e.filter((e) => !n.orderedItems.some((n) => t(n, e))),
                        ];
                        return { items: e, orderedItems: i };
                    }),
                n.orderedItems
            );
        })("loading" === o ? eL : u, eG),
        m = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, W.wH)(u, c, new Set(r));
            return e && t;
        }, [u, c, r]);
    return (
        l.useEffect(() => {
            0 !== u.length &&
                U.default.track(ed.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: u.map((e) => e.id),
                });
        }, [i.id, i.guild_id, u]),
        { status: o, recommendations: d, skusToUserAndReason: c, hasBothSources: m }
    );
}
function eG(e, t) {
    return e.id === t.id;
}
function eV(e) {
    let { className: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(ey.RQ, t),
        children: [
            (0, i.jsx)("img", {
                className: ey.Vt,
                src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                alt: "",
            }),
            (0, i.jsx)(p.E, {
                variant: "text-lg/normal",
                color: "text-subtle",
                children: ep.intl.string(ep.t["rTU7/z"]),
            }),
        ],
    });
}
function eP(e) {
    let { text: t, onDismiss: n } = e;
    return (0, i.jsxs)("div", {
        className: ey.OQ,
        children: [
            (0, i.jsx)("div", { className: ey.bC }),
            (0, i.jsxs)(m.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(h.A, { className: ey.Ku, size: "xs" }),
                    (0, i.jsx)(p.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, i.jsx)(A.J, { size: "xs", onClick: n }),
        ],
    });
}
function eH(e) {
    let { applicationId: t, surface: n } = e,
        l = (0, B.u)({ surface: n, applicationId: t });
    return null == l ? null : (0, i.jsx)(e_.O0, { Icon: l.Icon, text: l.text, endDatetime: l.endsAt });
}
function eF(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: o, canShowCTA: c, onDismissCTA: d } = e;
    (0, y.P)(n);
    let { analyticsLocations: p } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        g = (0, u.bG)([F.default], () => F.default.getUser(n)),
        f = l.useMemo(() => new L.R({ applicationId: s }), [s]),
        x = (0, u.bG)([D.A], () => D.A.getWidgets(n)?.find((e) => e instanceof L.R && e.applicationId === s)),
        h = (0, u.bG)([H.default], () => H.default.getId()),
        A = n === h,
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
                A = l.useCallback(() => {
                    f && x({ analyticsLocations: h });
                }, [h, f, x]),
                v = l.useCallback(() => {
                    (s(), (0, k.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: h }));
                    let e = new L.R({ applicationId: n });
                    ((0, R.Y5)(e),
                        (0, T.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, w.XA)(eb.jM.WIDGET_ADDED), 700));
                }, [h, n, t, s]);
            return r && !u && p && null != d
                ? !g && f
                    ? (0, i.jsx)(eP, {
                          text: ep.intl.format(o ? ep.t.YWa8L2 : ep.t.xxPgmT, { onClick: A }),
                          onDismiss: a,
                      })
                    : g && null == m && null != c
                      ? (0, i.jsx)(eP, {
                            text: ep.intl.format(ep.t.QuIwht, { applicationName: c.name, onClick: v }),
                            onDismiss: a,
                        })
                      : null
                : null;
        })({
            currentUserId: h,
            applicationId: s,
            onClose: o,
            canShowCTA: c,
            onDismissCTA: d,
            isTargetingCurrentUser: A,
        }),
        N = (0, $.A)(s),
        {
            status: b,
            recommendations: O,
            skusToUserAndReason: V,
            hasBothSources: U,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        z = "loading" === b || null == g,
        W = l.useMemo(
            () =>
                null == g || 0 === O.length
                    ? []
                    : (O.length > 8 ? O.slice(0, 8) : O).map((e) => {
                          let t = (V[e.id] ?? {})[n] === P.j.WISHLIST;
                          return (0, i.jsx)(
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
            [g, O, a.guild_id, a.id, V, n, A, U, p, o],
        ),
        B = !(0, _.E)({ location: "SocialLayerGiftingVoicePanelWithApplicationWidget" }) || null != N,
        Z = l.useMemo(() => {
            if (!B) return null;
            let e = A ? "vc_purchase_recommendations" : "vc_gift_recommendations";
            return z
                ? (0, i.jsxs)(m.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          (0, i.jsx)(eH, { applicationId: s, surface: e }),
                          (0, i.jsx)(v.y, { className: ey.Zp }),
                      ],
                  })
                : W.length > 0
                  ? (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, i.jsx)(eH, { applicationId: s, surface: e }),
                            (0, i.jsx)("div", { className: ey.HV, children: W }),
                        ],
                    })
                  : (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, i.jsx)(eH, { applicationId: s, surface: e }),
                            (0, i.jsx)(eV, { className: ey.Zp }),
                        ],
                    });
        }, [s, B, z, A, W]),
        Y = l.useMemo(
            () =>
                B ? (0, i.jsx)(ew, { application: N, onClose: o }) : (0, i.jsx)(eM, { applicationId: s, onClose: o }),
            [N, s, B, o],
        );
    return (0, i.jsxs)(eD, {
        className: r()(t, { [ey.gi]: !B }),
        "aria-label": B ? void 0 : ep.intl.string(ep.t.EKR8Ps),
        "aria-labelledby": B ? eT : void 0,
        children: [
            (0, i.jsxs)(m.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != g
                        ? (0, i.jsxs)("div", {
                              className: ey.p,
                              children: [
                                  (0, i.jsx)(M.A, {
                                      user: g,
                                      widget: x ?? f,
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
                        : (0, i.jsx)(eR, { application: N }),
                    B && (0, i.jsx)(ek, { user: g, isGift: !A }),
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
        c = (0, u.bG)([F.default], () => F.default.getUser(n)),
        d = n === (0, u.bG)([H.default], () => H.default.getId()),
        p = (0, $.A)(s),
        {
            status: g,
            recommendations: f,
            skusToUserAndReason: x,
            hasBothSources: h,
        } = eO({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        A = "loading" === g || null == c,
        [j, I] = l.useMemo(() => {
            if (null == c || 0 === f.length) return [null, []];
            let e = f.length > 7 ? f.slice(0, 7) : f,
                t = (x[e[0].id] ?? {})[n] === P.j.WISHLIST;
            return [
                (0, i.jsx)(ev, {
                    sku: e[0],
                    targetUser: c,
                    isTargetingCurrentUser: d,
                    source: t ? G.uS.WISHLIST : G.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: h,
                    analyticsLocations: o,
                    onCardClick: a,
                    onButtonClick: a,
                }),
                e.slice(1).map((e) => {
                    let t = (x[e.id] ?? {})[n] === P.j.WISHLIST;
                    return (0, i.jsx)(
                        eS,
                        {
                            sku: e,
                            targetUser: c,
                            isTargetingCurrentUser: d,
                            source: t ? G.uS.WISHLIST : G.uS.POPULAR,
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
        }, [c, f, x, n, d, r.guild_id, r.id, h, o, a]),
        S = l.useMemo(
            () =>
                A
                    ? (0, i.jsx)(v.y, { className: ey.kc })
                    : null != j || I.length > 0
                      ? (0, i.jsxs)(m.B, {
                            direction: "vertical",
                            gap: 12,
                            children: [
                                (0, i.jsx)(eH, {
                                    applicationId: s,
                                    surface: d ? "vc_purchase_recommendations" : "vc_gift_recommendations",
                                }),
                                j,
                                (0, i.jsx)("div", { className: ey.aS, children: I }),
                            ],
                        })
                      : (0, i.jsx)(eV, { className: ey.kc }),
            [s, A, d, j, I],
        );
    return (0, i.jsxs)(eD, {
        className: t,
        "aria-labelledby": eT,
        children: [
            (0, i.jsxs)(m.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(eR, { application: p }), (0, i.jsx)(ek, { user: c, isGift: !d })],
            }),
            S,
            (0, i.jsx)(ew, { application: p, onClose: a }),
        ],
    });
}
