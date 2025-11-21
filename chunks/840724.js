n.d(t, {
    C: () => H,
    Z: () => F,
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
    _ = n(481060),
    p = n(607070),
    h = n(100527),
    m = n(906732),
    g = n(220082),
    E = n(143941),
    b = n(104505),
    y = n(210887),
    O = n(55563),
    v = n(626135),
    I = n(937615),
    T = n(73346),
    S = n(591759),
    A = n(164670),
    C = n(590961),
    N = n(210218),
    R = n(705338),
    P = n(882508),
    D = n(594914),
    w = n(848118),
    L = n(433386),
    x = n(181268),
    M = n(981631),
    k = n(231338),
    j = n(388032),
    U = n(450433);
let G = 80,
    B = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    Z = 30;
var F = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function V(e) {
    let { sku: t, isCardHovered: n, onClick: i } = e;
    return (0, r.jsx)("div", {
        className: U.wishlistButtonContainer,
        children: (0, r.jsx)(E.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, P.c)(t),
            onClick: i,
        }),
    });
}
function H(e) {
    var t, n, a, s, c, E, P, F, H, Y, W, K, z, q, X, Q;
    let {
            positionInSection: J,
            applicationId: $,
            skuId: ee,
            variant: et = 0,
            guildId: en,
            onClick: er,
            className: ei,
            analyticsLocations: ea,
        } = e,
        eo = i.useRef(null),
        es = (0, f.e7)([O.Z], () => O.Z.get(ee)),
        el = (0, f.e7)([y.Z], () => (0, d.wjy)(y.Z.theme)),
        ec = (0, f.e7)([p.Z], () => p.Z.useReducedMotion),
        { isHoveringOrFocusing: eu } = (0, b.Z)(eo),
        ed = (0, C.oR)(),
        { analyticsLocations: ef } = (0, m.ZP)(null != ea ? ea : []),
        e_ = i.useRef({
            positionInSection: J,
            analyticsLocations: ef,
        }),
        ep = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = e_.current,
                    { sessionId: r, guildId: i, pageIndex: a, pageTitle: o, section: s, sectionTitle: l } = ed;
                v.default.track(M.rMx.SLAYER_SHOP_CARD_ELEMENT_CLICKED, {
                    slayer_shop_session_id: r,
                    sku_id: ee,
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
            [ee, ed],
        ),
        { primaryIconAsset: eh, primaryIconLabel: em } = i.useMemo(() => (0, A.FE)(es, $), [es, $]),
        eg = (0, f.e7)([N.Z], () => {
            var e, t;
            return null != en && null != (t = null == (e = N.Z.getStorefrontState(en)) ? void 0 : e.activePage) ? t : 0;
        }),
        eE = i.useMemo(() => {
            var e, t;
            if (
                (null == es || null == (t = es.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = u()(es.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return r <= 1 ? j.intl.string(j.t.Bc13HF) : j.intl.format(j.t.Io7ozn, { days: r });
        }, [null == es || null == (n = es.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eb =
            (null == es || null == (s = es.tenantMetadata) || null == (a = s.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (W = S.Z.toURLSafe(
                    (0, T._W)(
                        $,
                        null == es ? void 0 : es.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? W
                : void 0,
        [ey, eO] = (0, g.Cf)(null == eb ? void 0 : eb.toString(), "#000000"),
        ev = i.useMemo(() => {
            let e = o()(ey).darken(1.5).alpha(0.9).hex(),
                t = o()(ey).alpha(0).hex(),
                [n, r] = B[et];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(Z + n, "%, ")
                      .concat(t, " ")
                      .concat(Z + r, "%)");
        }, [ey, et]),
        eI = i.useCallback(() => {
            ep(x.r.WISHLIST_BUTTON);
        }, [ep]),
        eT = i.useCallback(
            (e) => {
                if ((ep(x.r.CARD), null != er)) return void er(e);
                null != en &&
                    (0, R.Z)({
                        guildId: en,
                        pageIndex: eg,
                        skuId: ee,
                        slug: null == es ? void 0 : es.slug,
                    });
            },
            [ep, en, eg, ee, null == es ? void 0 : es.slug, er],
        );
    if (null == es) return null;
    let eS =
        (null == (E = es.tenantMetadata) || null == (c = E.socialLayer) ? void 0 : c.cardImageAssetId) != null &&
        null != (K = S.Z.toURLSafe((0, T._W)($, es.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? K
            : void 0;
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(_.kL8, {
            onClick: eT,
            className: l()(
                U.card,
                {
                    [U.cardAnimation]: !ec && 2 !== et,
                    [U.cardDark]: el,
                    [el ? U.cardDarkHighlighted : U.cardHighlighted]: eu,
                    [U.cardSmall]: 0 === et,
                    [U.cardMedium]: 1 === et,
                    [U.cardEmbedded]: 2 === et,
                },
                ei,
            ),
            ref: eo,
            "aria-label": es.name,
            children: [
                null != eE &&
                    (0, r.jsx)(_.IGR, {
                        text: eE,
                        disableColor: !0,
                        className: U.badge,
                    }),
                (0, r.jsx)(V, {
                    sku: es,
                    isCardHovered: eu,
                    onClick: eI,
                }),
                null != eS
                    ? (0, r.jsx)(w.p, {
                          containerClassName: U.cardImageContainer,
                          foregroundImageClassName: U.cardImage,
                          cardImage: eS,
                          altText: es.name,
                          shape: "custom",
                          backgroundImageClassName: U.cardBackgroundImage,
                          cardBackgroundImage: eb,
                      })
                    : (0, r.jsx)("div", {
                          className: U.ticketIconContainer,
                          children: (0, r.jsx)(d.Prq, {
                              color: "white",
                              size: "custom",
                              height: G,
                              width: G,
                              className: U.ticketIcon,
                          }),
                      }),
                2 !== et
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: U.bottomGradient,
                                  style: { background: ev },
                              }),
                              (0, r.jsxs)("div", {
                                  className: U.details,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: U.titleContainer,
                                          children: (0, r.jsx)(_.Text, {
                                              color: "always-white",
                                              variant: "text-md/medium",
                                              lineClamp: 1,
                                              children: es.name,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: U.descriptionContainer,
                                          children: [
                                              null != eh &&
                                                  (0, r.jsx)("img", {
                                                      src: eh.toString(),
                                                      alt: em,
                                                      className: U.iconAsset,
                                                  }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-md/bold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: (0, I.T4)(
                                                      null != (z = null == (P = es.price) ? void 0 : P.amount) ? z : 0,
                                                      null != (q = null == (F = es.price) ? void 0 : F.currency)
                                                          ? q
                                                          : k.pK.USD,
                                                  ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: U.buttonHover,
                                  children: (0, r.jsxs)(d.hE2, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, r.jsx)(d.zxk, {
                                              variant: "primary",
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      ep(x.r.BUY_BUTTON),
                                                      (0, D.P)(
                                                          es,
                                                          { isGift: !1 },
                                                          {
                                                              analyticsLocations: [
                                                                  h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                              ],
                                                          },
                                                      );
                                              },
                                              text: j.intl.format(j.t.Xp5WTn, {
                                                  price: (0, I.T4)(
                                                      null != (X = null == (H = es.price) ? void 0 : H.amount) ? X : 0,
                                                      null != (Q = null == (Y = es.price) ? void 0 : Y.currency)
                                                          ? Q
                                                          : k.pK.USD,
                                                  ),
                                              }),
                                              fullWidth: !0,
                                          }),
                                          (0, r.jsx)(L.Z, {
                                              onGift: (e) => {
                                                  e.stopPropagation(),
                                                      ep(x.r.GIFT_BUTTON),
                                                      (0, D.P)(
                                                          es,
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
