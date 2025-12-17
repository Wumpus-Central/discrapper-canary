n.d(t, {
    ZP: () => ei,
    Zp: () => et,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(793030),
    f = n(442837),
    p = n(622535),
    _ = n(481060),
    m = n(607070),
    h = n(100527),
    g = n(906732),
    E = n(220082),
    b = n(143941),
    y = n(104505),
    O = n(245216),
    v = n(210887),
    S = n(55563),
    I = n(626135),
    T = n(937615),
    C = n(164670),
    A = n(590961),
    N = n(210218),
    P = n(980728),
    R = n(805355),
    w = n(705338),
    D = n(882508),
    x = n(813687),
    L = n(594914),
    j = n(848118),
    M = n(433386),
    k = n(926294),
    U = n(655409),
    G = n(785873),
    Z = n(181268),
    F = n(981631),
    B = n(231338),
    V = n(388032),
    H = n(171532);
function Y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let X = 80,
    J = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    $ = 30,
    ee = 3;
var et = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function en(e) {
    let {
            guildId: t,
            sku: n,
            isCardHovered: a,
            trackCardClick: o,
            variant: s,
            analyticsLocations: c,
            analyticsContext: u,
        } = e,
        f = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != n &&
                        null != t &&
                        (o(Z.rZ.FORWARD_BUTTON),
                        (0, x.b)({
                            sku: n,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: c,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, t, o, u, c],
        ),
        p = i.useCallback(() => {
            o(Z.rZ.WISHLIST_BUTTON);
        }, [o]),
        _ = i.useMemo(() => l()(H.cardButtonContainer, { [H.cardButtonContainerHovered]: a }), [a]);
    return (0, r.jsxs)("div", {
        className: H.cardButtonsContainer,
        children: [
            2 === s &&
                (0, r.jsx)(d.P3F, {
                    className: l()(_, H.forwardButton),
                    onClick: f,
                    children: (0, r.jsx)(O.Z, {
                        size: "refresh_sm",
                        color: "currentColor",
                    }),
                }),
            (0, r.jsx)(b.s, {
                skuId: n.id,
                isCardHovered: a,
                nuxGraphic: (0, D.c)(n),
                onClick: p,
                className: l()(_, H.wishlistButton),
            }),
        ],
    });
}
function er(e) {
    var t, n, a, s, c, p, b, O, R, D;
    let {
            isVisible: x,
            positionInSection: k,
            applicationId: Y,
            skuId: W,
            variant: K = 0,
            guildId: z,
            onClick: q,
            className: Q,
            analyticsLocations: et,
        } = e,
        er = i.useRef(null),
        ei = (0, f.e7)([S.Z], () => S.Z.get(W)),
        ea = (0, f.e7)([v.Z], () => (0, d.wjy)(v.Z.theme)),
        eo = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: es } = (0, y.Z)(er),
        el = (0, A.oR)(),
        { analyticsLocations: ec } = (0, g.ZP)(null != et ? et : []),
        eu = i.useRef({
            positionInSection: k,
            analyticsLocations: ec,
        }),
        { handleCardHover: ed, handleCardUnhover: ef } = (0, U.A)(W, el, k, ec),
        { handleCardVisibilityChange: ep } = (0, G.X)(W, el, k, ec);
    i.useEffect(() => {
        ep(x);
    }, [x]);
    let e_ = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = eu.current,
                    {
                        sessionId: r,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: o,
                        pageSection: s,
                        pageSectionTitle: l,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = el;
                I.default.track(F.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: W,
                    guild_id: i,
                    page_index: a,
                    page_title: o,
                    page_section: s,
                    page_section_title: l,
                    position_in_section: n,
                    is_user_guild_member: c,
                    page_has_leaderboard: u,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [W, el],
        ),
        { primaryIconAsset: em, primaryIconLabel: eh } = i.useMemo(() => (0, C.FE)(ei, Y), [ei, Y]),
        eg = (0, f.e7)([N.Z], () => {
            var e, t;
            return null != z && null != (t = null == (e = N.Z.getStorefrontState(z)) ? void 0 : e.activePage) ? t : 0;
        }),
        eE = i.useMemo(() => {
            var e, t;
            if (
                (null == ei || null == (t = ei.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = Math.max(u()(ei.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
            return r <= ee ? V.intl.format(V.t.PWw4Vp, { days: r }) : null;
        }, [null == ei || null == (n = ei.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eb = (0, C.a7)(ei),
        [ey, eO] = (0, E.Cf)(null == eb ? void 0 : eb.toString(), "#000000"),
        ev = i.useMemo(() => {
            let e = o()(ey).darken(1.5).alpha(0.9).hex(),
                t = o()(ey).alpha(0).hex(),
                [n, r] = J[K];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat($ + n, "%, ")
                      .concat(t, " ")
                      .concat($ + r, "%)");
        }, [ey, K]),
        eS = i.useCallback(() => {
            (0, w.eagerNavigateToSocialLayerStorefront)({ guildId: z });
        }, [z]),
        eI = i.useCallback(
            (e) => {
                if ((e_(Z.rZ.CARD), null != q)) return void q(e);
                null != z &&
                    (0, P.Z)({
                        guildId: z,
                        pageIndex: eg,
                        skuId: W,
                        slug: null == ei ? void 0 : ei.slug,
                    });
            },
            [e_, z, W, q, eg, null == ei ? void 0 : ei.slug],
        );
    if (null == ei) return null;
    let eT = (0, C.Do)(ei);
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(_.kL8, {
            onClick: eI,
            onMouseDown: eS,
            onMouseEnter: ed,
            onMouseLeave: ef,
            className: l()(
                {
                    [H.cardAnimation]: !eo && 2 !== K,
                    [H.cardDark]: ea,
                    [ea ? H.cardDarkHighlighted : H.cardHighlighted]: es,
                },
                Q,
            ),
            ref: er,
            "aria-label": ei.name,
            children: [
                null != eE &&
                    (0, r.jsx)(_.IGR, {
                        text: eE,
                        disableColor: !0,
                        className: H.badge,
                    }),
                (0, r.jsx)(en, {
                    guildId: z,
                    sku: ei,
                    isCardHovered: es,
                    variant: K,
                    trackCardClick: e_,
                    analyticsLocations: ec,
                    analyticsContext: el,
                }),
                null != eT
                    ? (0, r.jsx)(j.p, {
                          containerClassName: H.cardImageContainer,
                          foregroundImageClassName: H.cardImage,
                          cardImage: eT,
                          altText: ei.name,
                          shape: "custom",
                          backgroundImageClassName: H.cardBackgroundImage,
                          cardBackgroundImage: eb,
                      })
                    : (0, r.jsx)("div", {
                          className: H.ticketIconContainer,
                          children: (0, r.jsx)(d.Prq, {
                              color: "white",
                              size: "custom",
                              height: X,
                              width: X,
                              className: H.ticketIcon,
                          }),
                      }),
                2 !== K
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: H.bottomGradient,
                                  style: { background: ev },
                              }),
                              (0, r.jsxs)("div", {
                                  className: H.details,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: H.titleContainer,
                                          children: (0, r.jsx)(_.Text, {
                                              color: "always-white",
                                              variant: "text-md/medium",
                                              lineClamp: 1,
                                              children: ei.name,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: H.descriptionContainer,
                                          children: [
                                              null != em &&
                                                  (0, r.jsx)("img", {
                                                      src: em.toString(),
                                                      alt: eh,
                                                      className: H.iconAsset,
                                                  }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-md/bold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: (0, T.T4)(
                                                      null != (b = null == (a = ei.price) ? void 0 : a.amount) ? b : 0,
                                                      null != (O = null == (s = ei.price) ? void 0 : s.currency)
                                                          ? O
                                                          : B.pK.USD,
                                                  ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: H.buttonHover,
                                  children: (0, r.jsxs)(d.hE2, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, r.jsx)(d.zxk, {
                                              variant: "primary",
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      e_(Z.rZ.BUY_BUTTON),
                                                      (0, L.P)(
                                                          ei,
                                                          { isGift: !1 },
                                                          {
                                                              analyticsLocations: [
                                                                  h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                              ],
                                                          },
                                                      );
                                              },
                                              text: V.intl.format(V.t.Xp5WTn, {
                                                  price: (0, T.T4)(
                                                      null != (R = null == (c = ei.price) ? void 0 : c.amount) ? R : 0,
                                                      null != (D = null == (p = ei.price) ? void 0 : p.currency)
                                                          ? D
                                                          : B.pK.USD,
                                                  ),
                                              }),
                                              fullWidth: !0,
                                          }),
                                          (0, r.jsx)(M.Z, {
                                              onGift: (e) => {
                                                  e.stopPropagation(),
                                                      e_(Z.rZ.GIFT_BUTTON),
                                                      (0, L.P)(
                                                          ei,
                                                          { isGift: !0 },
                                                          {
                                                              analyticsLocations: [
                                                                  h.Z.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                              ],
                                                          },
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function ei(e) {
    var { variant: t = 0 } = e,
        n = q(e, ["variant"]);
    let [a, o] = i.useState(!1),
        s = (0, R.Z)(n.skuId, a),
        c = i.useRef(null),
        u = i.useCallback((e) => {
            o(e);
        }, []),
        d = i.useMemo(
            () =>
                l()(
                    H.card,
                    {
                        [H.cardSmall]: 0 === t,
                        [H.cardMedium]: 1 === t,
                        [H.cardEmbedded]: 2 === t,
                    },
                    n.className,
                ),
            [t, n.className],
        );
    return (0, r.jsx)(p.$, {
        innerRef: c,
        onChange: u,
        threshold: 0,
        children: (0, r.jsx)("div", {
            ref: c,
            className: l()({ [H.cardContainer]: 2 === t }),
            children: s
                ? (0, r.jsx)(
                      er,
                      z(W({}, n), {
                          variant: t,
                          className: d,
                          isVisible: a,
                      }),
                  )
                : (0, r.jsx)(k.Z, { className: d }),
        }),
    });
}
