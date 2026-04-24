n.d(t, { V: () => eO, Z: () => eV });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(132500),
    o = n(494012),
    d = n(113325),
    c = n(331322),
    u = n(834730),
    _ = n(534514),
    f = n(821609),
    m = n(509434);
if (/^(14256|21552)$/.test(n.j)) var p = n(141628);
if (/^(14256|21552)$/.test(n.j)) var g = n(815021);
var h = n(289873),
    x = n(17928),
    v = n(689175),
    A = n(793574),
    I = n(688810),
    C = n(46225),
    E = n(294323),
    j = n(201718),
    b = n(47675),
    N = n(633075),
    S = n(841595),
    y = n(735321),
    w = n(975732),
    T = n(606758),
    R = n(605694),
    k = n(246356),
    M = n(332772),
    D = n(594832),
    L = n(862772),
    O = n(310209),
    V = n(495544),
    P = n(287809),
    G = n(954571),
    F = n(427262),
    H = n(871123),
    U = n(832163),
    W = n(453774),
    B = n(44724),
    z = n(84511),
    Z = n(310784),
    $ = n.n(Z),
    Y = n(318254),
    Q = n(366010),
    K = n(187322),
    X = n(778712),
    q = n(890856),
    J = n(775602),
    ee = n(587895),
    et = n(713517),
    en = n(723090),
    ei = n(363195),
    el = n(121700),
    ea = n(627001),
    er = n(754804),
    es = n(317560),
    eo = n(99161),
    ed = n(366523),
    ec = n(652215),
    eu = n(788868),
    e_ = n(985018),
    ef = n(789901);
let em = Object.freeze({
        size: 0,
        iconSize: 20,
        iconInset: 12,
        buttonInset: 8,
        avatarSize: X._3.SIZE_24,
        wishlistButtonSize: "md",
    }),
    ep = $()("#000000").darken(1.5).alpha(0.9).hex(),
    eg = $()("#000000").alpha(0).hex(),
    eh = `linear-gradient(to top, ${ep} 30%, ${eg} 80%)`;
function ex(e) {
    var t, n;
    let {
            sku: a,
            targetUser: s,
            isTargetingCurrentUser: o,
            source: d,
            showIcons: c,
            guildId: _,
            channelId: m,
            analyticsLocations: p,
            onCardClick: g,
            onButtonClick: h,
        } = e,
        v = l.useRef(null),
        A = (0, x.bG)([ei.A], () => (0, Q.M)(ei.A.theme)),
        I = (0, x.bG)([J.A], () => J.A.useReducedMotion),
        { isHoveringOrFocusing: C } = (0, et.A)(v),
        { guildId: E } = (0, H.nG)(a.applicationId),
        j = (0, x.bG)([ee.A], () => ee.A.getApplication(a.applicationId)),
        { primaryIconAsset: b, primaryIconLabel: N } = l.useMemo(() => (0, H.Cv)(a, a.applicationId), [a]),
        {
            priceComponent: S,
            extendedHeight: y,
            displayPrice: w,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n } = e,
                {
                    normalPrice: a,
                    discountedPrice: r,
                    discountPercent: s,
                } = (0, en.CD)({ sku: t, priceSetAssignmentPurchaseType: n }),
                o = r ?? a,
                d = l.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, i.jsx)("div", {
                                  className: ef.pt,
                                  children: (0, i.jsx)(u.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: e_.intl.format(e_.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, i.jsx)(Y.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [t],
                );
            return null == t || null == o
                ? { priceComponent: null, extendedHeight: !1, displayPrice: o }
                : null != s && null != r
                  ? {
                        priceComponent: (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ef.p6,
                                    children: [
                                        null != a &&
                                            (0, i.jsx)(u.E, {
                                                className: ef.of,
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: a,
                                            }),
                                        (0, i.jsx)(u.E, {
                                            variant: "text-md/bold",
                                            color: "always-white",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                        (0, i.jsxs)(u.E, {
                                            variant: "text-md/bold",
                                            color: "text-feedback-positive",
                                            lineClamp: 1,
                                            children: ["(", s, ")"],
                                        }),
                                    ],
                                }),
                                d,
                            ],
                        }),
                        extendedHeight: null != d,
                        displayPrice: o,
                    }
                  : {
                        priceComponent: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/bold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                d,
                            ],
                        }),
                        extendedHeight: !1,
                        displayPrice: o,
                    };
        })({ sku: a, priceSetAssignmentPurchaseType: o ? ec.lid.DEFAULT : ec.lid.GIFT }),
        T = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    g?.(),
                    (0, es.R)({
                        skuId: a.id,
                        applicationId: a.applicationId,
                        isStorefront: !1,
                        giftRecipient: s,
                        giftingOrigin: eu.vQ.GUILD_CHANNEL,
                        analyticsLocations: p,
                    });
            },
            [a.id, a.applicationId, s, p, g],
        ),
        R = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    h?.(),
                    (0, eo.a)(
                        a,
                        { isGift: !o, giftRecipient: s, giftingOrigin: eu.vQ.GUILD_CHANNEL },
                        { analyticsLocations: p, guildId: E },
                    );
            },
            [a, s, o, p, E, h],
        );
    return (0, i.jsx)(K.vN, {
        children: (0, i.jsxs)(q.s, {
            onClick: T,
            className: r()(ef.Nr, { [ef.Zl]: !I, [ef.BN]: A, [ef.YF]: C }),
            ref: v,
            "aria-label": a.name,
            children: [
                (0, i.jsx)(ea.P, { spec: em, application: j }),
                (0, i.jsx)(el.A, {
                    spec: em,
                    sku: a,
                    isCardHovered: C,
                    location: "SocialLayerGiftingVoicePanelFeaturedSkuItemCard",
                    replacedElement:
                        c && !o && d === D.uS.WISHLIST
                            ? (0, i.jsx)(er.n, { spec: em, user: s, guildId: _ ?? void 0, channelId: m ?? void 0 })
                            : null,
                }),
                (0, i.jsx)(ed.e, {
                    shape: "custom",
                    sku: a,
                    containerClassName: ef.Vl,
                    foregroundImageClassName: ef.wP,
                    backgroundImageClassName: ef.GC,
                }),
                (0, i.jsx)("div", { className: ef.iZ, style: { background: eh } }),
                (0, i.jsxs)("div", {
                    className: ef.zH,
                    children: [
                        (0, i.jsxs)("div", {
                            className: r()(ef.gn, { [ef.ov]: null == S, [ef.w4]: y }),
                            children: [
                                null != b && (0, i.jsx)("img", { src: b.toString(), alt: N, className: ef.ye }),
                                (0, i.jsx)(u.E, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: a.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: ef.iQ, children: S }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ef.li,
                    children: (0, i.jsx)(f.$, {
                        variant: "primary",
                        onClick: R,
                        text:
                            ((t = w),
                            (n = o),
                            null != t
                                ? n
                                    ? e_.intl.format(e_.t.Xp5WTn, { price: t })
                                    : e_.intl.format(e_.t.o2WeeD, { price: t })
                                : n
                                  ? e_.intl.string(e_.t.boqtTA)
                                  : e_.intl.string(e_.t.QAZA5f)),
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
    });
}
var ev = n(661492),
    eA = n(212387),
    eI = n(662349);
let eC = n(699976).Z.SIZE_90;
function eE(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: a,
            source: r,
            showIcons: s,
            guildId: o,
            channelId: d,
            analyticsLocations: c,
            onCardClick: u,
            onButtonClick: _,
        } = e,
        [f, m] = l.useState(!1),
        { guildId: p } = (0, H.nG)(t.applicationId),
        g = l.useCallback(() => {
            u?.(),
                (0, es.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: eu.vQ.GUILD_CHANNEL,
                    analyticsLocations: c,
                });
        }, [t.id, t.applicationId, n, c, u]),
        h = l.useCallback(() => {
            _?.(),
                (0, eo.a)(
                    t,
                    { isGift: !a, giftRecipient: n, giftingOrigin: eu.vQ.GUILD_CHANNEL },
                    { analyticsLocations: c, guildId: p },
                );
        }, [t, n, a, c, p, _]),
        { label: x, icon: v } = (0, eI.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, i.jsxs)(eA.A, {
        sku: t,
        user: n,
        spec: eC,
        onClick: g,
        "aria-label": e_.intl.formatToPlainString(e_.t.ZBB4Ty, { productName: (0, ev.TC)(t) }),
        onHoverOrFocusChange: m,
        children: [
            (0, i.jsx)(eI.A, { spec: eC, onClick: h, isHoveringOrFocusing: f, label: x, icon: v }),
            (0, i.jsx)(el.A, {
                spec: eC,
                sku: t,
                isCardHovered: f,
                location: "SocialLayerGiftingVoicePanelSkuItemCard",
                replacedElement:
                    s && !a && r === D.uS.WISHLIST
                        ? (0, i.jsx)(er.n, { spec: eC, user: n, guildId: o ?? void 0, channelId: d ?? void 0 })
                        : null,
            }),
        ],
    });
}
var ej = n(360469),
    eb = n(518477),
    eN = n(932231);
let eS = `vc-gifting-${(0, s.A)()}`,
    ey = Object.freeze([]);
function ew(e) {
    let { className: t, "aria-labelledby": n, children: l } = e,
        { ref: a, height: s = 1 / 0 } = (0, o.Ay)(),
        { ref: c, height: u = 1 / 0 } = (0, o.Ay)(),
        _ = u > s ? v.Ch : "div";
    return (0, i.jsx)("div", {
        onClick: (e) => e.stopPropagation(),
        children: (0, i.jsx)(k.A, {
            children: (0, i.jsx)(d.l, {
                "aria-labelledby": n,
                modal: !1,
                children: (0, i.jsx)("div", {
                    ref: a,
                    className: r()(t, eN.kL),
                    children: (0, i.jsx)(_, { className: eN.U, children: (0, i.jsx)("div", { ref: c, children: l }) }),
                }),
            }),
        }),
    });
}
function eT(e) {
    let { application: t } = e;
    if (null == t) return null;
    let n = t.getIconURL(ej.iu.SMALL);
    return (0, i.jsxs)(c.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        children: [
            null != n && (0, i.jsx)("img", { className: eN.In, src: n, alt: t.name }),
            (0, i.jsx)(u.E, { variant: "text-sm/normal", children: t.name }),
        ],
    });
}
function eR(e) {
    let { user: t, isGift: n } = e,
        l = e_.intl.string(e_.t.kv4lSp),
        a = e_.intl.string(e_.t.vzZoSF);
    return (
        n &&
            ((l = null != t ? e_.intl.format(e_.t.YwV901, { username: F.Ay.getName(t) }) : e_.intl.string(e_.t.qCmNFr)),
            (a = e_.intl.string(e_.t.SSgrne))),
        (0, i.jsxs)(c.B, {
            direction: "vertical",
            gap: 4,
            children: [
                (0, i.jsx)(_.D, { id: eS, variant: "text-md/normal", children: l }),
                (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            ],
        })
    );
}
function ek(e) {
    let { application: t, onClose: n } = e,
        a = t?.id,
        r = l.useCallback(() => {
            if (null != a) {
                let e = U.A.getGuildIdFromApplicationId(a);
                null != e && (0, B.X)({ guildId: e });
            }
        }, [a]),
        s = l.useCallback(() => {
            if (null != a) {
                let e = U.A.getGuildIdFromApplicationId(a);
                null != e && (n(), (0, B.default)({ guildId: e }));
            }
        }, [a, n]);
    return null == t
        ? null
        : (0, i.jsx)(f.$, {
              variant: "secondary",
              icon: m.I,
              iconPosition: "end",
              text: e_.intl.format(e_.t["HDT/rg"], { applicationName: t.name }),
              onClick: s,
              onMouseDown: r,
              fullWidth: !0,
          });
}
function eM(e) {
    let { userId: t, applicationId: n, channel: i, numItems: a } = e,
        r = l.useMemo(() => [t], [t]),
        s = l.useMemo(() => (null != n ? [n] : []), [n]),
        {
            status: o,
            recommendations: d,
            skusToUserAndReason: c,
        } = (0, L.XQ)({ userIds: r, applicationIds: s, numItems: a }),
        u = (function (e, t) {
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
        })("loading" === o || 0 === d.length ? ey : d, eD),
        _ = l.useMemo(() => {
            let { hasWishlist: e, hasPopular: t } = (0, H.wH)(d, c, new Set(r));
            return e && t;
        }, [d, c, r]);
    return (
        l.useEffect(() => {
            0 !== d.length &&
                G.default.track(ec.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    sku_ids: d.map((e) => e.id),
                });
        }, [i.id, i.guild_id, d]),
        { status: o, recommendations: u, skusToUserAndReason: c, hasBothSources: _ }
    );
}
function eD(e, t) {
    return e.id === t.id;
}
function eL(e) {
    let { text: t, onDismiss: n } = e;
    return (0, i.jsxs)("div", {
        className: eN.OQ,
        children: [
            (0, i.jsx)("div", { className: eN.bC }),
            (0, i.jsxs)(c.B, {
                direction: "horizontal",
                gap: "xs",
                fullWidth: !1,
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(p.A, { className: eN.Ku, size: "xs" }),
                    (0, i.jsx)(u.E, { variant: "text-xs/normal", children: t }),
                ],
            }),
            (0, i.jsx)(g.J, { size: "xs", onClick: n }),
        ],
    });
}
function eO(e) {
    let { className: t, userId: n, applicationId: a, channel: r, onClose: s, canShowCTA: o, onDismissCTA: d } = e;
    (0, M.T)({ location: "social_layer_gifting_voice_panel" }), (0, j.P)(n);
    let { analyticsLocations: u } = (0, I.Ay)(A.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        _ = (0, x.bG)([P.default], () => P.default.getUser(n)),
        f = l.useMemo(() => new N.R({ applicationId: a }), [a]),
        m = (0, x.bG)([S.A], () => S.A.getWidgets(n)?.find((e) => e instanceof N.R && e.applicationId === a)),
        p = (0, x.bG)([V.default], () => V.default.getId()),
        g = n === p,
        v = (function (e) {
            let {
                    currentUserId: t,
                    applicationId: n,
                    location: a,
                    onClose: r,
                    canShowCTA: s,
                    onDismissCTA: o,
                    isTargetingCurrentUser: d,
                } = e,
                {
                    isLoading: c,
                    application: u,
                    applicationWidgetConfig: _,
                    profileApplicationWidget: f,
                } = (0, E.A)(s ? t : void 0, s ? n : void 0, a),
                {
                    fetched: m,
                    hasAlreadyLinked: p,
                    canStartAuthorization: g,
                    startAuthorization: h,
                } = (0, C.RD)(s ? u : void 0),
                { analyticsLocations: x } = (0, I.Ay)(A.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
                v = l.useCallback(() => {
                    g && h({ analyticsLocations: x });
                }, [x, g, h]),
                j = l.useCallback(() => {
                    r(), (0, w.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: x });
                    let e = new N.R({ applicationId: n });
                    (0, y.Y5)(e),
                        (0, b.un)({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                        setTimeout(() => (0, T.XA)(eb.jM.WIDGET_ADDED), 700);
                }, [x, n, t, r]);
            return s && !c && m && null != _
                ? !p && g
                    ? (0, i.jsx)(eL, {
                          text: e_.intl.format(d ? e_.t.YWa8L2 : e_.t.xxPgmT, { onClick: v }),
                          onDismiss: o,
                      })
                    : p && null == f && null != u
                      ? (0, i.jsx)(eL, {
                            text: e_.intl.format(e_.t.QuIwht, { applicationName: u.name, onClick: j }),
                            onDismiss: o,
                        })
                      : null
                : null;
        })({
            currentUserId: p,
            applicationId: a,
            location: "social_layer_gifting_voice_panel",
            onClose: s,
            canShowCTA: o,
            onDismissCTA: d,
            isTargetingCurrentUser: g,
        }),
        k = (0, W.A)(a),
        {
            status: L,
            recommendations: G,
            skusToUserAndReason: F,
            hasBothSources: H,
        } = eM({ userId: n, applicationId: a, channel: r, numItems: 8 }),
        U = "loading" === L || 0 === G.length || null == _,
        B = l.useMemo(
            () =>
                null == _ || 0 === G.length
                    ? []
                    : (G.length > 8 ? G.slice(0, 8) : G).map((e) => {
                          let t = (F[e.id] ?? {})[n] === O.j.WISHLIST;
                          return (0, i.jsx)(
                              eE,
                              {
                                  sku: e,
                                  targetUser: _,
                                  isTargetingCurrentUser: g,
                                  source: t ? D.uS.WISHLIST : D.uS.POPULAR,
                                  guildId: r.guild_id,
                                  channelId: r.id,
                                  showIcons: H,
                                  analyticsLocations: u,
                                  onCardClick: s,
                                  onButtonClick: s,
                              },
                              e.id,
                          );
                      }),
            [_, G, r.guild_id, r.id, F, n, g, H, u, s],
        );
    return (0, i.jsxs)(ew, {
        className: t,
        "aria-labelledby": eS,
        children: [
            (0, i.jsxs)(c.B, {
                className: eN.wx,
                direction: "vertical",
                gap: 12,
                children: [
                    null != _
                        ? (0, i.jsxs)("div", {
                              className: eN.p,
                              children: [
                                  (0, i.jsx)(R.A, {
                                      user: _,
                                      widget: m ?? f,
                                      guildId: r.guild_id,
                                      channelId: r.id,
                                      disableInteraction: !0,
                                      disableCTA: null != v,
                                      embedded: !0,
                                  }),
                                  v,
                              ],
                          })
                        : (0, i.jsx)(eT, { application: k }),
                    (0, i.jsx)(eR, { user: _, isGift: !g }),
                ],
            }),
            U ? (0, i.jsx)(h.y, { className: eN.Zp }) : (0, i.jsx)("div", { className: eN.HV, children: B }),
            (0, i.jsx)(ek, { application: k, onClose: s }),
            (0, i.jsx)(z.A, { location: "social_layer_vc_gifting_panel", className: eN.Ij }),
        ],
    });
}
function eV(e) {
    let { className: t, userId: n, applicationId: a, channel: r, onClose: s } = e;
    (0, M.T)({ location: "social_layer_gifting_voice_panel" });
    let { analyticsLocations: o } = (0, I.Ay)(A.A.SLAYER_STOREFRONT_VC_GIFTING_PANEL),
        d = (0, x.bG)([P.default], () => P.default.getUser(n)),
        u = n === (0, x.bG)([V.default], () => V.default.getId()),
        _ = (0, W.A)(a),
        {
            status: f,
            recommendations: m,
            skusToUserAndReason: p,
            hasBothSources: g,
        } = eM({ userId: n, applicationId: a, channel: r, numItems: 8 }),
        v = "loading" === f || 0 === m.length || null == d,
        [C, E] = l.useMemo(() => {
            if (null == d || 0 === m.length) return [null, []];
            let e = m.length > 7 ? m.slice(0, 7) : m,
                t = (p[e[0].id] ?? {})[n] === O.j.WISHLIST;
            return [
                (0, i.jsx)(ex, {
                    sku: e[0],
                    targetUser: d,
                    isTargetingCurrentUser: u,
                    source: t ? D.uS.WISHLIST : D.uS.POPULAR,
                    guildId: r.guild_id,
                    channelId: r.id,
                    showIcons: g,
                    analyticsLocations: o,
                    onCardClick: s,
                    onButtonClick: s,
                }),
                e.slice(1).map((e) => {
                    let t = (p[e.id] ?? {})[n] === O.j.WISHLIST;
                    return (0, i.jsx)(
                        eE,
                        {
                            sku: e,
                            targetUser: d,
                            isTargetingCurrentUser: u,
                            source: t ? D.uS.WISHLIST : D.uS.POPULAR,
                            guildId: r.guild_id,
                            channelId: r.id,
                            showIcons: g,
                            analyticsLocations: o,
                            onCardClick: s,
                            onButtonClick: s,
                        },
                        e.id,
                    );
                }),
            ];
        }, [d, m, p, n, u, r.guild_id, r.id, g, o, s]);
    return (0, i.jsxs)(ew, {
        className: t,
        "aria-labelledby": eS,
        children: [
            (0, i.jsxs)(c.B, {
                className: eN.wx,
                direction: "vertical",
                gap: 12,
                children: [(0, i.jsx)(eT, { application: _ }), (0, i.jsx)(eR, { user: d, isGift: !u })],
            }),
            v
                ? (0, i.jsx)(h.y, { className: eN.kc })
                : (0, i.jsxs)(c.B, {
                      direction: "vertical",
                      gap: 12,
                      children: [C, (0, i.jsx)("div", { className: eN.aS, children: E })],
                  }),
            (0, i.jsx)(ek, { application: _, onClose: s }),
            (0, i.jsx)(z.A, { location: "social_layer_vc_gifting_panel", className: eN.Ij }),
        ],
    });
}
