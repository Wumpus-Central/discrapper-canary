n.d(t, {
    C: () => X,
    Z: () => q,
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
let Y = 80,
    W = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    K = 30,
    z = 3;
var q = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function Q(e) {
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
function X(e) {
    var t, n, a, s, c, b, O, D, x, q;
    let {
            positionInSection: X,
            applicationId: J,
            skuId: $,
            variant: ee = 0,
            guildId: et,
            onClick: en,
            className: er,
            analyticsLocations: ei,
        } = e,
        ea = i.useRef(null),
        eo = (0, f.e7)([S.Z], () => S.Z.get($)),
        es = (0, f.e7)([v.Z], () => (0, d.wjy)(v.Z.theme)),
        el = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: ec } = (0, y.Z)(ea),
        eu = (0, A.oR)(),
        { analyticsLocations: ed } = (0, g.ZP)(null != ei ? ei : []),
        ef = i.useRef({
            positionInSection: X,
            analyticsLocations: ed,
        }),
        [ep, e_] = i.useState(!1),
        em = (0, R.Z)($, ep),
        eh = i.useCallback((e) => {
            e_(e);
        }, []),
        eg = i.useMemo(
            () =>
                l()(H.card, {
                    [H.cardSmall]: 0 === ee,
                    [H.cardMedium]: 1 === ee,
                    [H.cardEmbedded]: 2 === ee,
                }),
            [ee],
        ),
        { handleCardHover: eE, handleCardUnhover: eb } = (0, U.A)($, eu, X, ed),
        { handleCardVisibilityChange: ey } = (0, G.X)($, eu, X, ed);
    i.useEffect(() => {
        ey(ep);
    }, [ep]);
    let eO = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = ef.current,
                    {
                        sessionId: r,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: o,
                        pageSection: s,
                        pageSectionTitle: l,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = eu;
                I.default.track(F.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: $,
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
            [$, eu],
        ),
        { primaryIconAsset: ev, primaryIconLabel: eS } = i.useMemo(() => (0, C.FE)(eo, J), [eo, J]),
        eI = (0, f.e7)([N.Z], () => {
            var e, t;
            return null != et && null != (t = null == (e = N.Z.getStorefrontState(et)) ? void 0 : e.activePage) ? t : 0;
        }),
        eT = i.useMemo(() => {
            var e, t;
            if (
                (null == eo || null == (t = eo.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = Math.max(u()(eo.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
            return r <= z ? V.intl.format(V.t.PWw4Vp, { days: r }) : null;
        }, [null == eo || null == (n = eo.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eC = (0, C.a7)(eo),
        [eA, eN] = (0, E.Cf)(null == eC ? void 0 : eC.toString(), "#000000"),
        eP = i.useMemo(() => {
            let e = o()(eA).darken(1.5).alpha(0.9).hex(),
                t = o()(eA).alpha(0).hex(),
                [n, r] = W[ee];
            return (0 !== n || 0 !== r) && em
                ? "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(K + n, "%, ")
                      .concat(t, " ")
                      .concat(K + r, "%)")
                : "none";
        }, [eA, ee, em]),
        eR = i.useCallback(() => {
            (0, w.eagerNavigateToSocialLayerStorefront)({ guildId: et });
        }, [et]),
        ew = i.useCallback(
            (e) => {
                if ((eO(Z.rZ.CARD), null != en)) return void en(e);
                null != et &&
                    (0, P.Z)({
                        guildId: et,
                        pageIndex: eI,
                        skuId: $,
                        slug: null == eo ? void 0 : eo.slug,
                    });
            },
            [eO, et, $, en, eI, null == eo ? void 0 : eo.slug],
        );
    if (null == eo) return null;
    let eD = (0, C.Do)(eo);
    return (0, r.jsx)(p.$, {
        innerRef: ea,
        onChange: eh,
        threshold: 0,
        children: (0, r.jsx)(d.tEY, {
            children: (0, r.jsxs)(_.kL8, {
                onClick: ew,
                onMouseDown: eR,
                onMouseEnter: eE,
                onMouseLeave: eb,
                className: l()(
                    eg,
                    {
                        [H.cardAnimation]: !el && 2 !== ee,
                        [H.cardDark]: es,
                        [es ? H.cardDarkHighlighted : H.cardHighlighted]: ec,
                        [H.cardNotLoaded]: !em,
                    },
                    er,
                ),
                ref: ea,
                "aria-label": eo.name,
                children: [
                    null != eT &&
                        (0, r.jsx)(_.IGR, {
                            text: eT,
                            disableColor: !0,
                            className: H.badge,
                        }),
                    (0, r.jsx)(Q, {
                        guildId: et,
                        sku: eo,
                        isCardHovered: ec,
                        variant: ee,
                        trackCardClick: eO,
                        analyticsLocations: ed,
                        analyticsContext: eu,
                    }),
                    null != eD
                        ? em
                            ? (0, r.jsx)(j.p, {
                                  containerClassName: H.cardImageContainer,
                                  foregroundImageClassName: H.cardImage,
                                  cardImage: eD,
                                  altText: eo.name,
                                  shape: "custom",
                                  backgroundImageClassName: H.cardBackgroundImage,
                                  cardBackgroundImage: eC,
                              })
                            : (0, r.jsx)(k.$, {})
                        : (0, r.jsx)("div", {
                              className: H.ticketIconContainer,
                              children: (0, r.jsx)(d.Prq, {
                                  color: "white",
                                  size: "custom",
                                  height: Y,
                                  width: Y,
                                  className: H.ticketIcon,
                              }),
                          }),
                    2 !== ee
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: H.bottomGradient,
                                      style: { background: eP },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: H.details,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: H.titleContainer,
                                              children: em
                                                  ? (0, r.jsx)(_.Text, {
                                                        color: "always-white",
                                                        variant: "text-md/medium",
                                                        lineClamp: 1,
                                                        children: eo.name,
                                                    })
                                                  : (0, r.jsx)(k.G, {}),
                                          }),
                                          (0, r.jsx)("div", {
                                              className: H.descriptionContainer,
                                              children: em
                                                  ? (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            null != ev &&
                                                                (0, r.jsx)("img", {
                                                                    src: ev.toString(),
                                                                    alt: eS,
                                                                    className: H.iconAsset,
                                                                }),
                                                            (0, r.jsx)(_.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, T.T4)(
                                                                    null !=
                                                                        (O = null == (a = eo.price) ? void 0 : a.amount)
                                                                        ? O
                                                                        : 0,
                                                                    null !=
                                                                        (D =
                                                                            null == (s = eo.price)
                                                                                ? void 0
                                                                                : s.currency)
                                                                        ? D
                                                                        : B.pK.USD,
                                                                ),
                                                            }),
                                                        ],
                                                    })
                                                  : (0, r.jsx)(k.G, {}),
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
                                                          eO(Z.rZ.BUY_BUTTON),
                                                          (0, L.P)(
                                                              eo,
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
                                                          null != (x = null == (c = eo.price) ? void 0 : c.amount)
                                                              ? x
                                                              : 0,
                                                          null != (q = null == (b = eo.price) ? void 0 : b.currency)
                                                              ? q
                                                              : B.pK.USD,
                                                      ),
                                                  }),
                                                  fullWidth: !0,
                                              }),
                                              (0, r.jsx)(M.Z, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eO(Z.rZ.GIFT_BUTTON),
                                                          (0, L.P)(
                                                              eo,
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
        }),
    });
}
