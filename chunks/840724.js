n.d(t, {
    C: () => U,
    Z: () => j,
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
    E = n(210887),
    b = n(55563),
    y = n(937615),
    O = n(73346),
    v = n(591759),
    I = n(164670),
    T = n(210218),
    S = n(705338),
    A = n(882508),
    C = n(594914),
    N = n(848118),
    R = n(433386),
    P = n(231338),
    D = n(388032),
    w = n(450433);
let x = 80,
    L = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    M = 30;
var j = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function k(e) {
    let { sku: t, isCardHovered: n } = e;
    return (0, r.jsx)("div", {
        className: w.wishlistButtonContainer,
        children: (0, r.jsx)(m.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, A.c)(t),
        }),
    });
}
function U(e) {
    var t, n, a, s, c, m, A, j, U, G, B, Z, F, V, H, Y;
    let { applicationId: W, skuId: K, variant: z = 0, guildId: q, onClick: X, className: Q } = e,
        J = i.useRef(null),
        $ = (0, f.e7)([b.Z], () => b.Z.get(K)),
        ee = (0, f.e7)([E.Z], () => (0, d.wjy)(E.Z.theme)),
        et = (0, f.e7)([p.Z], () => p.Z.useReducedMotion),
        { isHoveringOrFocusing: en } = (0, g.Z)(J),
        { primaryIconAsset: er, primaryIconLabel: ei } = i.useMemo(() => (0, I.FE)($, W), [$, W]),
        ea = (0, f.e7)([T.Z], () => {
            var e, t;
            return null != q && null != (t = null == (e = T.Z.getStorefrontState(q)) ? void 0 : e.activePage) ? t : 0;
        }),
        eo = i.useMemo(() => {
            var e, t;
            if (
                (null == $ || null == (t = $.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = u()($.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return r <= 1 ? D.intl.string(D.t.Bc13HF) : D.intl.format(D.t.Io7ozn, { days: r });
        }, [null == $ || null == (n = $.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        es =
            (null == $ || null == (s = $.tenantMetadata) || null == (a = s.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (B = v.Z.toURLSafe(
                    (0, O._W)(
                        W,
                        null == $ ? void 0 : $.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? B
                : void 0,
        [el, ec] = (0, h.Cf)(null == es ? void 0 : es.toString(), "#000000"),
        eu = i.useMemo(() => {
            let e = o()(el).darken(1.5).alpha(0.9).hex(),
                t = o()(el).alpha(0).hex(),
                [n, r] = L[z];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(M + n, "%, ")
                      .concat(t, " ")
                      .concat(M + r, "%)");
        }, [el, z]);
    if (null == $) return null;
    let ed =
        (null == (m = $.tenantMetadata) || null == (c = m.socialLayer) ? void 0 : c.cardImageAssetId) != null &&
        null != (Z = v.Z.toURLSafe((0, O._W)(W, $.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? Z
            : void 0;
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(_.kL8, {
            onClick:
                null != X
                    ? X
                    : () => {
                          null != q &&
                              (0, S.Z)({
                                  guildId: q,
                                  pageIndex: ea,
                                  skuId: K,
                                  slug: $.slug,
                              });
                      },
            className: l()(
                w.card,
                {
                    [w.cardAnimation]: !et && 2 !== z,
                    [w.cardDark]: ee,
                    [ee ? w.cardDarkHighlighted : w.cardHighlighted]: en,
                    [w.cardSmall]: 0 === z,
                    [w.cardMedium]: 1 === z,
                    [w.cardEmbedded]: 2 === z,
                },
                Q,
            ),
            ref: J,
            "aria-label": $.name,
            children: [
                null != eo &&
                    (0, r.jsx)(_.IGR, {
                        text: eo,
                        disableColor: !0,
                        className: w.badge,
                    }),
                (0, r.jsx)(k, {
                    sku: $,
                    isCardHovered: en,
                }),
                null != ed
                    ? (0, r.jsx)(N.p, {
                          containerClassName: w.cardImageContainer,
                          foregroundImageClassName: w.cardImage,
                          cardImage: ed,
                          altText: $.name,
                          shape: "custom",
                          backgroundImageClassName: w.cardBackgroundImage,
                          cardBackgroundImage: es,
                      })
                    : (0, r.jsx)("div", {
                          className: w.ticketIconContainer,
                          children: (0, r.jsx)(d.Prq, {
                              color: "white",
                              size: "custom",
                              height: x,
                              width: x,
                              className: w.ticketIcon,
                          }),
                      }),
                2 !== z
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: w.bottomGradient,
                                  style: { background: eu },
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
                                              children: $.name,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: w.descriptionContainer,
                                          children: [
                                              null != er &&
                                                  (0, r.jsx)("img", {
                                                      src: er.toString(),
                                                      alt: ei,
                                                      className: w.iconAsset,
                                                  }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: (0, y.T4)(
                                                      null != (F = null == (A = $.price) ? void 0 : A.amount) ? F : 0,
                                                      null != (V = null == (j = $.price) ? void 0 : j.currency)
                                                          ? V
                                                          : P.pK.USD,
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
                                                  e.stopPropagation(), (0, C.P)($, { isGift: !1 });
                                              },
                                              text: D.intl.format(D.t.Xp5WTn, {
                                                  price: (0, y.T4)(
                                                      null != (H = null == (U = $.price) ? void 0 : U.amount) ? H : 0,
                                                      null != (Y = null == (G = $.price) ? void 0 : G.currency)
                                                          ? Y
                                                          : P.pK.USD,
                                                  ),
                                              }),
                                              fullWidth: !0,
                                          }),
                                          (0, r.jsx)(R.Z, {
                                              onGift: (e) => {
                                                  e.stopPropagation(), (0, C.P)($, { isGift: !0 });
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
