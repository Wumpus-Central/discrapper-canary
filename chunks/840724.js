n.d(t, {
    C: () => K,
    Z: () => Y,
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
    _ = n(622535),
    p = n(481060),
    h = n(607070),
    m = n(100527),
    g = n(906732),
    E = n(220082),
    b = n(143941),
    y = n(104505),
    O = n(210887),
    v = n(55563),
    I = n(626135),
    T = n(937615),
    S = n(73346),
    A = n(591759),
    C = n(164670),
    N = n(590961),
    R = n(210218),
    P = n(705338),
    D = n(882508),
    w = n(594914),
    L = n(848118),
    x = n(433386),
    M = n(655409),
    k = n(785873),
    j = n(181268),
    U = n(981631),
    G = n(231338),
    B = n(388032),
    Z = n(450433);
let F = 80,
    V = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    H = 30;
var Y = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function W(e) {
    let { sku: t, isCardHovered: n, onClick: i } = e;
    return (0, r.jsx)("div", {
        className: Z.wishlistButtonContainer,
        children: (0, r.jsx)(b.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, D.c)(t),
            onClick: i,
        }),
    });
}
function K(e) {
    var t, n, a, s, c, b, D, Y, K, z, q, X, Q, J, $, ee;
    let {
            positionInSection: et,
            applicationId: en,
            skuId: er,
            variant: ei = 0,
            guildId: ea,
            onClick: eo,
            className: es,
            analyticsLocations: el,
        } = e,
        ec = i.useRef(null),
        eu = (0, f.e7)([v.Z], () => v.Z.get(er)),
        ed = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)),
        ef = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
        { isHoveringOrFocusing: e_ } = (0, y.Z)(ec),
        ep = (0, N.oR)(),
        { analyticsLocations: eh } = (0, g.ZP)(null != el ? el : []),
        em = i.useRef({
            positionInSection: et,
            analyticsLocations: eh,
        }),
        { handleCardHover: eg, handleCardUnhover: eE } = (0, M.A)(er, ep, et, eh),
        { handleCardVisibilityChange: eb } = (0, k.X)(er, ep, et, eh),
        ey = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = em.current,
                    { sessionId: r, guildId: i, pageIndex: a, pageTitle: o, section: s, sectionTitle: l } = ep;
                I.default.track(U.rMx.SLAYER_SHOP_CARD_ELEMENT_CLICKED, {
                    slayer_shop_session_id: r,
                    sku_id: er,
                    guild_id: i,
                    page_index: a,
                    page_title: o,
                    section: s,
                    section_title: l,
                    position_in_section: n,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [er, ep],
        ),
        { primaryIconAsset: eO, primaryIconLabel: ev } = i.useMemo(() => (0, C.FE)(eu, en), [eu, en]),
        eI = (0, f.e7)([R.Z], () => {
            var e, t;
            return null != ea && null != (t = null == (e = R.Z.getStorefrontState(ea)) ? void 0 : e.activePage) ? t : 0;
        }),
        eT = i.useMemo(() => {
            var e, t;
            if (
                (null == eu || null == (t = eu.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = u()(eu.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return r <= 1 ? B.intl.string(B.t.Bc13HF) : B.intl.format(B.t.Io7ozn, { days: r });
        }, [null == eu || null == (n = eu.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eS =
            (null == eu || null == (s = eu.tenantMetadata) || null == (a = s.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (q = A.Z.toURLSafe(
                    (0, S._W)(
                        en,
                        null == eu ? void 0 : eu.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? q
                : void 0,
        [eA, eC] = (0, E.Cf)(null == eS ? void 0 : eS.toString(), "#000000"),
        eN = i.useMemo(() => {
            let e = o()(eA).darken(1.5).alpha(0.9).hex(),
                t = o()(eA).alpha(0).hex(),
                [n, r] = V[ei];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(H + n, "%, ")
                      .concat(t, " ")
                      .concat(H + r, "%)");
        }, [eA, ei]),
        eR = i.useCallback(() => {
            ey(j.r.WISHLIST_BUTTON);
        }, [ey]),
        eP = i.useCallback(
            (e) => {
                if ((ey(j.r.CARD), null != eo)) return void eo(e);
                null != ea &&
                    (0, P.Z)({
                        guildId: ea,
                        pageIndex: eI,
                        skuId: er,
                        slug: null == eu ? void 0 : eu.slug,
                    });
            },
            [ey, ea, eI, er, null == eu ? void 0 : eu.slug, eo],
        );
    if (null == eu) return null;
    let eD =
        (null == (b = eu.tenantMetadata) || null == (c = b.socialLayer) ? void 0 : c.cardImageAssetId) != null &&
        null != (X = A.Z.toURLSafe((0, S._W)(en, eu.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? X
            : void 0;
    return (0, r.jsx)(_.$, {
        innerRef: ec,
        onChange: eb,
        threshold: 0,
        children: (0, r.jsx)(d.tEY, {
            children: (0, r.jsxs)(p.kL8, {
                onClick: eP,
                onMouseEnter: eg,
                onMouseLeave: eE,
                className: l()(
                    Z.card,
                    {
                        [Z.cardAnimation]: !ef && 2 !== ei,
                        [Z.cardDark]: ed,
                        [ed ? Z.cardDarkHighlighted : Z.cardHighlighted]: e_,
                        [Z.cardSmall]: 0 === ei,
                        [Z.cardMedium]: 1 === ei,
                        [Z.cardEmbedded]: 2 === ei,
                    },
                    es,
                ),
                ref: ec,
                "aria-label": eu.name,
                children: [
                    null != eT &&
                        (0, r.jsx)(p.IGR, {
                            text: eT,
                            disableColor: !0,
                            className: Z.badge,
                        }),
                    (0, r.jsx)(W, {
                        sku: eu,
                        isCardHovered: e_,
                        onClick: eR,
                    }),
                    null != eD
                        ? (0, r.jsx)(L.p, {
                              containerClassName: Z.cardImageContainer,
                              foregroundImageClassName: Z.cardImage,
                              cardImage: eD,
                              altText: eu.name,
                              shape: "custom",
                              backgroundImageClassName: Z.cardBackgroundImage,
                              cardBackgroundImage: eS,
                          })
                        : (0, r.jsx)("div", {
                              className: Z.ticketIconContainer,
                              children: (0, r.jsx)(d.Prq, {
                                  color: "white",
                                  size: "custom",
                                  height: F,
                                  width: F,
                                  className: Z.ticketIcon,
                              }),
                          }),
                    2 !== ei
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: Z.bottomGradient,
                                      style: { background: eN },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: Z.details,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: Z.titleContainer,
                                              children: (0, r.jsx)(p.Text, {
                                                  color: "always-white",
                                                  variant: "text-md/medium",
                                                  lineClamp: 1,
                                                  children: eu.name,
                                              }),
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: Z.descriptionContainer,
                                              children: [
                                                  null != eO &&
                                                      (0, r.jsx)("img", {
                                                          src: eO.toString(),
                                                          alt: ev,
                                                          className: Z.iconAsset,
                                                      }),
                                                  (0, r.jsx)(p.Text, {
                                                      variant: "text-md/bold",
                                                      color: "always-white",
                                                      lineClamp: 1,
                                                      children: (0, T.T4)(
                                                          null != (Q = null == (D = eu.price) ? void 0 : D.amount)
                                                              ? Q
                                                              : 0,
                                                          null != (J = null == (Y = eu.price) ? void 0 : Y.currency)
                                                              ? J
                                                              : G.pK.USD,
                                                      ),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      className: Z.buttonHover,
                                      children: (0, r.jsxs)(d.hE2, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(d.zxk, {
                                                  variant: "primary",
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          ey(j.r.BUY_BUTTON),
                                                          (0, w.P)(
                                                              eu,
                                                              { isGift: !1 },
                                                              {
                                                                  analyticsLocations: [
                                                                      m.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                              },
                                                          );
                                                  },
                                                  text: B.intl.format(B.t.Xp5WTn, {
                                                      price: (0, T.T4)(
                                                          null != ($ = null == (K = eu.price) ? void 0 : K.amount)
                                                              ? $
                                                              : 0,
                                                          null != (ee = null == (z = eu.price) ? void 0 : z.currency)
                                                              ? ee
                                                              : G.pK.USD,
                                                      ),
                                                  }),
                                                  fullWidth: !0,
                                              }),
                                              (0, r.jsx)(x.Z, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          ey(j.r.GIFT_BUTTON),
                                                          (0, w.P)(
                                                              eu,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      m.Z.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
