n.d(t, {
    ZP: () => en,
    Zp: () => $,
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
    O = n(210887),
    v = n(55563),
    S = n(626135),
    I = n(937615),
    T = n(164670),
    A = n(590961),
    C = n(210218),
    N = n(980728),
    P = n(805355),
    R = n(705338),
    w = n(882508),
    D = n(594914),
    x = n(848118),
    L = n(433386),
    j = n(926294),
    M = n(655409),
    k = n(785873),
    U = n(181268),
    G = n(981631),
    Z = n(231338),
    B = n(388032),
    F = n(450433);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let q = 80,
    Q = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    X = 30,
    J = 3;
var $ = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function ee(e) {
    let { sku: t, isCardHovered: n, onClick: i } = e;
    return (0, r.jsx)("div", {
        className: F.wishlistButtonContainer,
        children: (0, r.jsx)(b.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, w.c)(t),
            onClick: i,
        }),
    });
}
function et(e) {
    var t, n, a, s, c, p, b, P, w, j;
    let {
            isVisible: V,
            positionInSection: H,
            applicationId: Y,
            skuId: W,
            variant: K = 0,
            guildId: z,
            onClick: $,
            className: et,
            analyticsLocations: en,
        } = e,
        er = i.useRef(null),
        ei = (0, f.e7)([v.Z], () => v.Z.get(W)),
        ea = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)),
        eo = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: es } = (0, y.Z)(er),
        el = (0, A.oR)(),
        { analyticsLocations: ec } = (0, g.ZP)(null != en ? en : []),
        eu = i.useRef({
            positionInSection: H,
            analyticsLocations: ec,
        }),
        { handleCardHover: ed, handleCardUnhover: ef } = (0, M.A)(W, el, H, ec),
        { handleCardVisibilityChange: ep } = (0, k.X)(W, el, H, ec);
    i.useEffect(() => {
        ep(V);
    }, [V]);
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
                S.default.track(G.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
        { primaryIconAsset: em, primaryIconLabel: eh } = i.useMemo(() => (0, T.FE)(ei, Y), [ei, Y]),
        eg = (0, f.e7)([C.Z], () => {
            var e, t;
            return null != z && null != (t = null == (e = C.Z.getStorefrontState(z)) ? void 0 : e.activePage) ? t : 0;
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
            return r <= J ? B.intl.format(B.t.PWw4Vp, { days: r }) : null;
        }, [null == ei || null == (n = ei.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eb = (0, T.a7)(ei),
        [ey, eO] = (0, E.Cf)(null == eb ? void 0 : eb.toString(), "#000000"),
        ev = i.useMemo(() => {
            let e = o()(ey).darken(1.5).alpha(0.9).hex(),
                t = o()(ey).alpha(0).hex(),
                [n, r] = Q[K];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(X + n, "%, ")
                      .concat(t, " ")
                      .concat(X + r, "%)");
        }, [ey, K]),
        eS = i.useCallback(() => {
            e_(U.rZ.WISHLIST_BUTTON);
        }, [e_]),
        eI = i.useCallback(() => {
            (0, R.eagerNavigateToSocialLayerStorefront)({ guildId: z });
        }, [z]),
        eT = i.useCallback(
            (e) => {
                if ((e_(U.rZ.CARD), null != $)) return void $(e);
                null != z &&
                    (0, N.Z)({
                        guildId: z,
                        pageIndex: eg,
                        skuId: W,
                        slug: null == ei ? void 0 : ei.slug,
                    });
            },
            [e_, z, W, $, eg, null == ei ? void 0 : ei.slug],
        );
    if (null == ei) return null;
    let eA = (0, T.Do)(ei);
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(_.kL8, {
            onClick: eT,
            onMouseDown: eI,
            onMouseEnter: ed,
            onMouseLeave: ef,
            className: l()(
                {
                    [F.cardAnimation]: !eo && 2 !== K,
                    [F.cardDark]: ea,
                    [ea ? F.cardDarkHighlighted : F.cardHighlighted]: es,
                },
                et,
            ),
            ref: er,
            "aria-label": ei.name,
            children: [
                null != eE &&
                    (0, r.jsx)(_.IGR, {
                        text: eE,
                        disableColor: !0,
                        className: F.badge,
                    }),
                (0, r.jsx)(ee, {
                    sku: ei,
                    isCardHovered: es,
                    onClick: eS,
                }),
                null != eA
                    ? (0, r.jsx)(x.p, {
                          containerClassName: F.cardImageContainer,
                          foregroundImageClassName: F.cardImage,
                          cardImage: eA,
                          altText: ei.name,
                          shape: "custom",
                          backgroundImageClassName: F.cardBackgroundImage,
                          cardBackgroundImage: eb,
                      })
                    : (0, r.jsx)("div", {
                          className: F.ticketIconContainer,
                          children: (0, r.jsx)(d.Prq, {
                              color: "white",
                              size: "custom",
                              height: q,
                              width: q,
                              className: F.ticketIcon,
                          }),
                      }),
                2 !== K
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: F.bottomGradient,
                                  style: { background: ev },
                              }),
                              (0, r.jsxs)("div", {
                                  className: F.details,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: F.titleContainer,
                                          children: (0, r.jsx)(_.Text, {
                                              color: "always-white",
                                              variant: "text-md/medium",
                                              lineClamp: 1,
                                              children: ei.name,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: F.descriptionContainer,
                                          children: [
                                              null != em &&
                                                  (0, r.jsx)("img", {
                                                      src: em.toString(),
                                                      alt: eh,
                                                      className: F.iconAsset,
                                                  }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-md/bold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: (0, I.T4)(
                                                      null != (b = null == (a = ei.price) ? void 0 : a.amount) ? b : 0,
                                                      null != (P = null == (s = ei.price) ? void 0 : s.currency)
                                                          ? P
                                                          : Z.pK.USD,
                                                  ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: F.buttonHover,
                                  children: (0, r.jsxs)(d.hE2, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, r.jsx)(d.zxk, {
                                              variant: "primary",
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      e_(U.rZ.BUY_BUTTON),
                                                      (0, D.P)(
                                                          ei,
                                                          { isGift: !1 },
                                                          {
                                                              analyticsLocations: [
                                                                  h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                              ],
                                                          },
                                                      );
                                              },
                                              text: B.intl.format(B.t.Xp5WTn, {
                                                  price: (0, I.T4)(
                                                      null != (w = null == (c = ei.price) ? void 0 : c.amount) ? w : 0,
                                                      null != (j = null == (p = ei.price) ? void 0 : p.currency)
                                                          ? j
                                                          : Z.pK.USD,
                                                  ),
                                              }),
                                              fullWidth: !0,
                                          }),
                                          (0, r.jsx)(L.Z, {
                                              onGift: (e) => {
                                                  e.stopPropagation(),
                                                      e_(U.rZ.GIFT_BUTTON),
                                                      (0, D.P)(
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
function en(e) {
    var { variant: t = 0 } = e,
        n = K(e, ["variant"]);
    let [a, o] = i.useState(!1),
        s = (0, P.Z)(n.skuId, a),
        c = i.useRef(null),
        u = i.useCallback((e) => {
            o(e);
        }, []),
        d = i.useMemo(
            () =>
                l()(
                    F.card,
                    {
                        [F.cardSmall]: 0 === t,
                        [F.cardMedium]: 1 === t,
                        [F.cardEmbedded]: 2 === t,
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
            children: s
                ? (0, r.jsx)(
                      et,
                      W(H({}, n), {
                          variant: t,
                          className: d,
                          isVisible: a,
                      }),
                  )
                : (0, r.jsx)(j.Z, { className: d }),
        }),
    });
}
