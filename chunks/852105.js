n.d(t, { V: () => eH, Z: () => eU });
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
    g = n(834730),
    p = n(297264),
    f = n(821609),
    h = n(509434);
if (/^(221552|614256)$/.test(n.j)) var x = n(141628);
if (/^(221552|614256)$/.test(n.j)) var A = n(815021);
var v = n(289873),
    E = n(793574),
    C = n(688810),
    j = n(206828),
    I = n(294323),
    S = n(409626),
    _ = n(613902),
    N = n(692969),
    b = n(738250),
    y = n(201718),
    R = n(47675),
    T = n(633075),
    L = n(321191),
    D = n(735321),
    k = n(402860),
    w = n(384377),
    M = n(58216),
    O = n(246356),
    G = n(594832),
    V = n(862772),
    P = n(310209),
    F = n(280450),
    H = n(287809),
    U = n(174459),
    z = n(427262),
    W = n(871123),
    B = n(453774),
    $ = n(831024),
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
    eg = n(105292),
    ep = n(902344);
let ef = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: K._3.SIZE_24,
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
            channelId: p,
            analyticsLocations: h,
            onCardClick: x,
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
            displayPrice: R,
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
                                  className: ep.pt,
                                  children: (0, i.jsx)(g.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: eg.intl.format(eg.t.GiVd2Q, {
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
                                    className: ep.p6,
                                    children: [
                                        null != s &&
                                            (0, i.jsx)(g.E, {
                                                className: ep.of,
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: s,
                                            }),
                                        (0, i.jsx)(g.E, {
                                            variant: "text-md/bold",
                                            color: "text-overlay-light",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                        (0, i.jsxs)(g.E, {
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
                                (0, i.jsx)(g.E, {
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
        T = l.useCallback(
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
        L = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    A?.(),
                    (0, eu.a)(
                        s,
                        { isGift: !o, giftRecipient: a, giftingOrigin: em.vQ.GUILD_CHANNEL },
                        { analyticsLocations: h, guildId: I },
                    ));
            },
            [s, a, o, h, I, A],
        );
    return (0, i.jsxs)(J.s, {
        onClick: T,
        className: r()(ep.Nr, { [ep.Zl]: !C, [ep.BN]: E, [ep.YF]: j }),
        ref: v,
        "aria-label": s.name,
        children: [
            (0, i.jsx)(er.P, { spec: ef, application: S }),
            d && !o && c === G.uS.WISHLIST
                ? (0, i.jsx)(ea.n, { spec: ef, user: a, guildId: m ?? void 0, channelId: p ?? void 0 })
                : null,
            (0, i.jsx)(ec.e, {
                shape: "custom",
                sku: s,
                containerClassName: ep.Vl,
                foregroundImageClassName: ep.wP,
                backgroundImageClassName: ep.GC,
                cssPosition: "absolute",
            }),
            (0, i.jsx)("div", { className: ep.iZ, style: { background: eA } }),
            (0, i.jsx)(ee.N, {
                theme: ed.NJ8.DARK,
                children: (e) =>
                    (0, i.jsxs)("div", {
                        className: r()(ep.zH, e),
                        children: [
                            (0, i.jsxs)("div", {
                                className: r()(ep.gn, { [ep.ov]: null == b, [ep.w4]: y }),
                                children: [
                                    null != _ && (0, i.jsx)("img", { src: _.toString(), alt: N, className: ep.ye }),
                                    (0, i.jsx)(g.E, {
                                        color: "text-overlay-light",
                                        variant: "text-md/medium",
                                        lineClamp: 1,
                                        children: s.name,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: ep.iQ, children: b }),
                        ],
                    }),
            }),
            (0, i.jsx)("div", {
                className: ep.li,
                children: (0, i.jsx)(f.$, {
                    variant: "primary",
                    onClick: L,
                    text:
                        ((t = R),
                        (n = o),
                        null != t
                            ? n
                                ? eg.intl.format(eg.t.Xp5WTn, { price: t })
                                : eg.intl.format(eg.t.o2WeeD, { price: t })
                            : n
                              ? eg.intl.string(eg.t.boqtTA)
                              : eg.intl.string(eg.t.QAZA5f)),
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
        [g, p] = l.useState(!1),
        { guildId: f } = (0, W.nG)(t.applicationId),
        h = l.useCallback(() => {
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
        x = l.useCallback(() => {
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
        onClick: h,
        "aria-label": eg.intl.formatToPlainString(eg.t.ZBB4Ty, { productName: (0, eE.T)(t) }),
        onHoverOrFocusChange: p,
        children: [
            (0, i.jsx)(ej.A, { spec: eI, onClick: x, isHoveringOrFocusing: g, label: A, icon: v }),
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
let eR = `vc-gifting-${(0, a.A)()}`,
    eT = Object.freeze([]);
function eL(e) {
    let { className: t, "aria-label": n, "aria-labelledby": l, children: s } = e,
        { ref: a, height: u = 1 / 0 } = (0, o.Ay)(),
        { ref: m, height: g = 1 / 0 } = (0, o.Ay)(),
        p = g > u ? d.Ch : "div";
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
                    children: (0, i.jsx)(p, { className: ey.U, children: (0, i.jsx)("div", { ref: m, children: s }) }),
                }),
            }),
        }),
    });
}
function eD(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(eN.iu.SMALL);
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: ey.In, src: n, alt: t.name }),
            (0, i.jsx)(g.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function ek(e) {
    let { user: t, isGift: n } = e,
        l = eg.intl.string(eg.t.kv4lSp),
        s = eg.intl.string(eg.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? eg.intl.format(eg.t.YwV901, { username: z.Ay.getName(t) }) : eg.intl.string(eg.t.qCmNFr)),
            (s = eg.intl.string(eg.t.SSgrne))),
        (0, i.jsxs)(m.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(p.D, { id: eR, variant: "text-md/normal", children: l }),
                (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
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
              icon: h.I,
              iconPosition: "end",
              text: eg.intl.format(eg.t["HDT/rg"], { applicationName: t.name }),
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
              text: eg.intl.string(eg.t.ajHoOr),
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
        })("loading" === o ? eT : u, eG),
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
            (0, i.jsx)(g.E, {
                variant: "text-lg/normal",
                color: "text-subtle",
                children: eg.intl.string(eg.t["rTU7/z"]),
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
                    (0, i.jsx)(x.A, { className: ey.Ku, size: "xs" }),
                    (0, i.jsx)(g.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, i.jsx)(A.J, { size: "xs", onClick: n }),
        ],
    });
}
function eF(e) {
    let { applicationId: t, surface: n } = e,
        l = (0, $.u)({ surface: n, applicationId: t });
    return null == l ? null : (0, i.jsx)(e_.O0, { Icon: l.Icon, text: l.text, endDatetime: l.endsAt });
}
function eH(e) {
    let { className: t, userId: n, applicationId: s, channel: a, onClose: o, canShowCTA: c, onDismissCTA: d } = e;
    (0, y.P)(n);
    let { analyticsLocations: g } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        p = (0, u.bG)([H.default], () => H.default.getUser(n)),
        f = l.useMemo(() => new T.R({ applicationId: s }), [s]),
        h = (0, u.bG)([L.A], () => L.A.getWidgets(n)?.find((e) => e instanceof T.R && e.applicationId === s)),
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
                } = (0, I.A)(r ? t : void 0, r ? n : void 0),
                {
                    fetched: g,
                    hasAlreadyLinked: p,
                    canStartAuthorization: f,
                    startAuthorization: h,
                } = (0, j.RD)(r ? c : void 0),
                { analyticsLocations: x } = (0, C.Ay)(E.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                A = l.useCallback(() => {
                    f && h({ analyticsLocations: x });
                }, [x, f, h]),
                v = l.useCallback(() => {
                    (s(), (0, k.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x }));
                    let e = new T.R({ applicationId: n });
                    ((0, D.Y5)(e),
                        (0, R.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, w.XA)(eb.jM.WIDGET_ADDED), 700));
                }, [x, n, t, s]);
            return r && !u && g && null != d
                ? !p && f
                    ? (0, i.jsx)(eP, {
                          text: eg.intl.format(o ? eg.t.YWa8L2 : eg.t.xxPgmT, { onClick: A }),
                          onDismiss: a,
                      })
                    : p && null == m && null != c
                      ? (0, i.jsx)(eP, {
                            text: eg.intl.format(eg.t.QuIwht, { applicationName: c.name, onClick: v }),
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
        N = (0, B.A)(s),
        {
            status: b,
            recommendations: O,
            skusToUserAndReason: V,
            hasBothSources: U,
        } = eO({ userId: n, applicationId: s, channel: a, numItems: 8 }),
        z = "loading" === b || null == p,
        W = l.useMemo(
            () =>
                null == p || 0 === O.length
                    ? []
                    : (O.length > 8 ? O.slice(0, 8) : O).map((e) => {
                          let t = (V[e.id] ?? {})[n] === P.j.WISHLIST;
                          return (0, i.jsx)(
                              eS,
                              {
                                  sku: e,
                                  targetUser: p,
                                  isTargetingCurrentUser: A,
                                  source: t ? G.uS.WISHLIST : G.uS.POPULAR,
                                  guildId: a.guild_id,
                                  channelId: a.id,
                                  showIcons: U,
                                  analyticsLocations: g,
                                  onCardClick: o,
                                  onButtonClick: o,
                              },
                              e.id,
                          );
                      }),
            [p, O, a.guild_id, a.id, V, n, A, U, g, o],
        ),
        $ = !(0, _.E)({ location: "SocialLayerGiftingVoicePanelWithApplicationWidget" }) || null != N,
        Z = l.useMemo(() => {
            if (!$) return null;
            let e = A ? "vc_purchase_recommendations" : "vc_gift_recommendations";
            return z
                ? (0, i.jsxs)(m.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [
                          (0, i.jsx)(eF, { applicationId: s, surface: e }),
                          (0, i.jsx)(v.y, { className: ey.Zp }),
                      ],
                  })
                : W.length > 0
                  ? (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, i.jsx)(eF, { applicationId: s, surface: e }),
                            (0, i.jsx)("div", { className: ey.HV, children: W }),
                        ],
                    })
                  : (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            (0, i.jsx)(eF, { applicationId: s, surface: e }),
                            (0, i.jsx)(eV, { className: ey.Zp }),
                        ],
                    });
        }, [s, $, z, A, W]),
        Y = l.useMemo(
            () =>
                $ ? (0, i.jsx)(ew, { application: N, onClose: o }) : (0, i.jsx)(eM, { applicationId: s, onClose: o }),
            [N, s, $, o],
        );
    return (0, i.jsxs)(eL, {
        className: r()(t, { [ey.gi]: !$ }),
        "aria-label": $ ? void 0 : eg.intl.string(eg.t.EKR8Ps),
        "aria-labelledby": $ ? eR : void 0,
        children: [
            (0, i.jsxs)(m.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != p
                        ? (0, i.jsxs)("div", {
                              className: ey.p,
                              children: [
                                  (0, i.jsx)(M.A, {
                                      user: p,
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
                        : (0, i.jsx)(eD, { application: N }),
                    $ && (0, i.jsx)(ek, { user: p, isGift: !A }),
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
        g = (0, B.A)(s),
        {
            status: p,
            recommendations: f,
            skusToUserAndReason: h,
            hasBothSources: x,
        } = eO({ userId: n, applicationId: s, channel: r, numItems: 8 }),
        A = "loading" === p || null == c,
        [j, I] = l.useMemo(() => {
            if (null == c || 0 === f.length) return [null, []];
            let e = f.length > 7 ? f.slice(0, 7) : f,
                t = (h[e[0].id] ?? {})[n] === P.j.WISHLIST;
            return [
                (0, i.jsx)(ev, {
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
                    let t = (h[e.id] ?? {})[n] === P.j.WISHLIST;
                    return (0, i.jsx)(
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
        S = l.useMemo(
            () =>
                A
                    ? (0, i.jsx)(v.y, { className: ey.kc })
                    : null != j || I.length > 0
                      ? (0, i.jsxs)(m.B, {
                            direction: "vertical",
                            gap: 12,
                            children: [
                                (0, i.jsx)(eF, {
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
    return (0, i.jsxs)(eL, {
        className: t,
        "aria-labelledby": eR,
        children: [
            (0, i.jsxs)(m.B, {
                className: ey.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(eD, { application: g }), (0, i.jsx)(ek, { user: c, isGift: !d })],
            }),
            S,
            (0, i.jsx)(ew, { application: g, onClose: a }),
        ],
    });
}
