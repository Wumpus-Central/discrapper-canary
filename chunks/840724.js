n.d(t, {
    C: () => G,
    Z: () => j,
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
    m = n(220082),
    g = n(143941),
    E = n(104505),
    b = n(210887),
    y = n(55563),
    O = n(937615),
    v = n(73346),
    I = n(591759),
    T = n(164670),
    S = n(210218),
    A = n(705338),
    C = n(882508),
    N = n(594914),
    R = n(848118),
    P = n(433386),
    D = n(231338),
    w = n(388032),
    L = n(402920);
let x = 80,
    M = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    k = 30;
var j = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function U(e) {
    let { sku: t, isCardHovered: n } = e;
    return (0, r.jsx)("div", {
        className: L.wishlistButtonContainer,
        children: (0, r.jsx)(g.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, C.c)(t),
        }),
    });
}
function G(e) {
    var t, n, a, s, c, g, C, j, G, B, Z, F, V, H, Y, W;
    let { applicationId: K, skuId: z, variant: q = 0, guildId: X, onClick: Q, className: J } = e,
        $ = i.useRef(null),
        ee = (0, f.e7)([y.Z], () => y.Z.get(z)),
        et = (0, f.e7)([b.Z], () => (0, d.wjy)(b.Z.theme)),
        en = (0, f.e7)([p.Z], () => p.Z.useReducedMotion),
        { isHoveringOrFocusing: er } = (0, E.Z)($),
        { primaryIconAsset: ei, primaryIconLabel: ea } = i.useMemo(() => (0, T.FE)(ee, K), [ee, K]),
        eo = (0, f.e7)([S.Z], () => {
            var e, t;
            return null != X && null != (t = null == (e = S.Z.getStorefrontState(X)) ? void 0 : e.activePage) ? t : 0;
        }),
        es = i.useMemo(() => {
            var e, t;
            if (
                (null == ee || null == (t = ee.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = u()(ee.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return r <= 1 ? w.intl.string(w.t.Bc13HF) : w.intl.format(w.t.Io7ozn, { days: r });
        }, [null == ee || null == (n = ee.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        el =
            (null == ee || null == (s = ee.tenantMetadata) || null == (a = s.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (Z = I.Z.toURLSafe(
                    (0, v._W)(
                        K,
                        null == ee ? void 0 : ee.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? Z
                : void 0,
        [ec, eu] = (0, m.Cf)(null == el ? void 0 : el.toString(), "#000000"),
        ed = i.useMemo(() => {
            let e = o()(ec).darken(1.5).alpha(0.9).hex(),
                t = o()(ec).alpha(0).hex(),
                [n, r] = M[q];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(k + n, "%, ")
                      .concat(t, " ")
                      .concat(k + r, "%)");
        }, [ec, q]);
    if (null == ee) return null;
    let ef =
        (null == (g = ee.tenantMetadata) || null == (c = g.socialLayer) ? void 0 : c.cardImageAssetId) != null &&
        null != (F = I.Z.toURLSafe((0, v._W)(K, ee.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? F
            : void 0;
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(_.kL8, {
            onClick:
                null != Q
                    ? Q
                    : () => {
                          null != X &&
                              (0, A.Z)({
                                  guildId: X,
                                  pageIndex: eo,
                                  skuId: z,
                                  slug: ee.slug,
                              });
                      },
            className: l()(
                L.card,
                {
                    [L.cardAnimation]: !en && 2 !== q,
                    [L.cardDark]: et,
                    [et ? L.cardDarkHighlighted : L.cardHighlighted]: er,
                    [L.cardSmall]: 0 === q,
                    [L.cardMedium]: 1 === q,
                    [L.cardEmbedded]: 2 === q,
                },
                J,
            ),
            ref: $,
            "aria-label": ee.name,
            children: [
                null != es &&
                    (0, r.jsx)(_.IGR, {
                        text: es,
                        disableColor: !0,
                        className: L.badge,
                    }),
                (0, r.jsx)(U, {
                    sku: ee,
                    isCardHovered: er,
                }),
                null != ef
                    ? (0, r.jsx)(R.p, {
                          containerClassName: L.cardImageContainer,
                          foregroundImageClassName: L.cardImage,
                          cardImage: ef,
                          altText: ee.name,
                          shape: "custom",
                          backgroundImageClassName: L.cardBackgroundImage,
                          cardBackgroundImage: el,
                      })
                    : (0, r.jsx)("div", {
                          className: L.ticketIconContainer,
                          children: (0, r.jsx)(d.Prq, {
                              color: "white",
                              size: "custom",
                              height: x,
                              width: x,
                              className: L.ticketIcon,
                          }),
                      }),
                2 !== q
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: L.bottomGradient,
                                  style: { background: ed },
                              }),
                              (0, r.jsxs)("div", {
                                  className: L.details,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: L.titleContainer,
                                          children: (0, r.jsx)(_.Text, {
                                              color: "always-white",
                                              variant: "text-md/bold",
                                              lineClamp: 1,
                                              children: ee.name,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: L.descriptionContainer,
                                          children: [
                                              null != ei &&
                                                  (0, r.jsx)("img", {
                                                      src: ei.toString(),
                                                      alt: ea,
                                                      className: L.iconAsset,
                                                  }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: (0, O.T4)(
                                                      null != (V = null == (C = ee.price) ? void 0 : C.amount) ? V : 0,
                                                      null != (H = null == (j = ee.price) ? void 0 : j.currency)
                                                          ? H
                                                          : D.pK.USD,
                                                  ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: L.buttonHover,
                                  children: (0, r.jsxs)(d.hE2, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, r.jsx)(d.zxk, {
                                              variant: "primary",
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, N.P)(
                                                          ee,
                                                          { isGift: !1 },
                                                          {
                                                              analyticsLocations: [
                                                                  h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                              ],
                                                          },
                                                      );
                                              },
                                              text: w.intl.format(w.t.Xp5WTn, {
                                                  price: (0, O.T4)(
                                                      null != (Y = null == (G = ee.price) ? void 0 : G.amount) ? Y : 0,
                                                      null != (W = null == (B = ee.price) ? void 0 : B.currency)
                                                          ? W
                                                          : D.pK.USD,
                                                  ),
                                              }),
                                              fullWidth: !0,
                                          }),
                                          (0, r.jsx)(P.Z, {
                                              onGift: (e) => {
                                                  e.stopPropagation(),
                                                      (0, N.P)(
                                                          ee,
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
