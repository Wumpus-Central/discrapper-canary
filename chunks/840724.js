n.d(t, {
    C: () => k,
    Z: () => M,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
    h = n(220082),
    m = n(143941),
    g = n(104505),
    E = n(703656),
    b = n(210887),
    y = n(55563),
    O = n(937615),
    v = n(73346),
    I = n(591759),
    T = n(164670),
    S = n(210218),
    A = n(594914),
    C = n(433386),
    N = n(981631),
    R = n(231338),
    P = n(388032),
    w = n(450433);
let D = 80,
    x = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    L = 30;
var M = (function (e) {
    return (
        (e[(e.SMALL = 0)] = "SMALL"),
        (e[(e.MEDIUM = 1)] = "MEDIUM"),
        (e[(e.LARGE = 2)] = "LARGE"),
        (e[(e.EMBEDDED = 3)] = "EMBEDDED"),
        e
    );
})({});
function j(e) {
    let { sku: t, isCardHovered: n } = e;
    return (0, r.jsx)("div", {
        className: w.wishlistButtonContainer,
        children: (0, r.jsx)(m.s, {
            skuId: t.id,
            isCardHovered: n,
        }),
    });
}
function k(e) {
    var t, n, a, s, c, m, M, k, U, G, B, Z, F, V, H, Y;
    let { applicationId: W, skuId: K, variant: z = 0, guildId: q, onClick: X } = e,
        Q = i.useRef(null),
        J = (0, f.e7)([y.Z], () => y.Z.get(K)),
        $ = (0, f.e7)([b.Z], () => (0, d.wjy)(b.Z.theme)),
        ee = (0, f.e7)([p.Z], () => p.Z.useReducedMotion),
        { isHoveringOrFocusing: et } = (0, g.Z)(Q),
        { primaryIconAsset: en, primaryIconLabel: er } = i.useMemo(() => (0, T.FE)(J, W), [J, W]),
        ei = (0, f.e7)([S.Z], () => {
            var e, t;
            return null != q && null != (t = null == (e = S.Z.getStorefrontState(q)) ? void 0 : e.activePage) ? t : 0;
        }),
        ea = i.useMemo(() => {
            var e, t;
            if (
                (null == J || null == (t = J.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = u()(J.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return r <= 1 ? P.intl.string(P.t.Bc13HF) : P.intl.format(P.t.Io7ozn, { days: r });
        }, [null == J || null == (n = J.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eo =
            (null == J || null == (s = J.tenantMetadata) || null == (a = s.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (B = I.Z.toURLSafe(
                    (0, v._W)(
                        W,
                        null == J ? void 0 : J.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? B
                : void 0,
        [es, el] = (0, h.Cf)(null == eo ? void 0 : eo.toString(), "#000000"),
        ec = i.useMemo(() => {
            let e = o()(es).darken(1.5).alpha(0.9).hex(),
                t = o()(es).alpha(0).hex(),
                [n, r] = x[z];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(L + n, "%, ")
                      .concat(t, " ")
                      .concat(L + r, "%)");
        }, [es, z]);
    if (null == J) return null;
    let eu =
        (null == (m = J.tenantMetadata) || null == (c = m.socialLayer) ? void 0 : c.cardImageAssetId) != null &&
        null != (Z = I.Z.toURLSafe((0, v._W)(W, J.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? Z
            : void 0;
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(_.kL8, {
            onClick:
                null != X
                    ? X
                    : () => {
                          null != q && (0, E.uL)(N.Z5c.CHANNELS_GAME_SHOP(q, ei, K, J.slug));
                      },
            className: l()(w.card, {
                [w.cardAnimation]: !ee && 3 !== z,
                [w.cardDark]: $,
                [$ ? w.cardDarkHighlighted : w.cardHighlighted]: et,
                [w.cardLarge]: 2 === z,
                [w.cardMedium]: 1 === z,
                [w.cardEmbedded]: 3 === z,
            }),
            ref: Q,
            "aria-label": J.name,
            children: [
                null != ea &&
                    (0, r.jsx)(_.IGR, {
                        text: ea,
                        disableColor: !0,
                        className: w.badge,
                    }),
                (0, r.jsx)(j, {
                    sku: J,
                    isCardHovered: et,
                }),
                null != eu || null != eo
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: w.cardBackgroundImage,
                                  style: { backgroundImage: null != eo ? "url(".concat(eo.toString(), ")") : void 0 },
                              }),
                              null != eu &&
                                  (0, r.jsx)("img", {
                                      draggable: "false",
                                      src: eu.toString(),
                                      alt: J.name,
                                      className: w.cardImage,
                                  }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: w.ticketIconContainer,
                          children: (0, r.jsx)(d.Prq, {
                              color: "white",
                              size: "custom",
                              height: D,
                              width: D,
                              className: w.ticketIcon,
                          }),
                      }),
                3 !== z
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: l()(w.bottomGradient, { [w.bottomGradientLarge]: 2 === z }),
                                  style: { background: ec },
                              }),
                              (0, r.jsxs)("div", {
                                  className: w.details,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: w.titleContainer,
                                          children: (0, r.jsx)(_.Text, {
                                              color: "always-white",
                                              variant: "text-md/bold",
                                              lineClamp: 1,
                                              children: J.name,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: w.descriptionContainer,
                                          children: [
                                              null != en &&
                                                  (0, r.jsx)("img", {
                                                      src: en.toString(),
                                                      alt: er,
                                                      className: w.iconAsset,
                                                  }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: (0, O.T4)(
                                                      null != (F = null == (M = J.price) ? void 0 : M.amount) ? F : 0,
                                                      null != (V = null == (k = J.price) ? void 0 : k.currency)
                                                          ? V
                                                          : R.pK.USD,
                                                  ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: w.buttonHover,
                                  children: (0, r.jsxs)(d.hE2, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, r.jsx)(d.zxk, {
                                              variant: "primary",
                                              onClick: (e) => {
                                                  e.stopPropagation(), (0, A.P)(J, { isGift: !1 });
                                              },
                                              text: P.intl.format(P.t.Xp5WTn, {
                                                  price: (0, O.T4)(
                                                      null != (H = null == (U = J.price) ? void 0 : U.amount) ? H : 0,
                                                      null != (Y = null == (G = J.price) ? void 0 : G.currency)
                                                          ? Y
                                                          : R.pK.USD,
                                                  ),
                                              }),
                                              fullWidth: !0,
                                          }),
                                          (0, r.jsx)(C.Z, {
                                              onGift: (e) => {
                                                  e.stopPropagation(), (0, A.P)(J, { isGift: !0 });
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
