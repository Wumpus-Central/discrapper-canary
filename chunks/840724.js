n.d(t, {
    C: () => G,
    Z: () => k,
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
    A = n(882508),
    C = n(594914),
    N = n(848118),
    R = n(433386),
    P = n(981631),
    w = n(231338),
    D = n(388032),
    x = n(450433);
let L = 80,
    M = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    j = 30;
var k = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function U(e) {
    let { sku: t, isCardHovered: n } = e;
    return (0, r.jsx)("div", {
        className: x.wishlistButtonContainer,
        children: (0, r.jsx)(m.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, A.c)(t),
        }),
    });
}
function G(e) {
    var t, n, a, s, c, m, A, k, G, B, Z, F, V, H, Y, W;
    let { applicationId: K, skuId: z, variant: q = 0, guildId: X, onClick: Q } = e,
        J = i.useRef(null),
        $ = (0, f.e7)([y.Z], () => y.Z.get(z)),
        ee = (0, f.e7)([b.Z], () => (0, d.wjy)(b.Z.theme)),
        et = (0, f.e7)([p.Z], () => p.Z.useReducedMotion),
        { isHoveringOrFocusing: en } = (0, g.Z)(J),
        { primaryIconAsset: er, primaryIconLabel: ei } = i.useMemo(() => (0, T.FE)($, K), [$, K]),
        ea = (0, f.e7)([S.Z], () => {
            var e, t;
            return null != X && null != (t = null == (e = S.Z.getStorefrontState(X)) ? void 0 : e.activePage) ? t : 0;
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
                (Z = I.Z.toURLSafe(
                    (0, v._W)(
                        K,
                        null == $ ? void 0 : $.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? Z
                : void 0,
        [el, ec] = (0, h.Cf)(null == es ? void 0 : es.toString(), "#000000"),
        eu = i.useMemo(() => {
            let e = o()(el).darken(1.5).alpha(0.9).hex(),
                t = o()(el).alpha(0).hex(),
                [n, r] = M[q];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(j + n, "%, ")
                      .concat(t, " ")
                      .concat(j + r, "%)");
        }, [el, q]);
    if (null == $) return null;
    let ed =
        (null == (m = $.tenantMetadata) || null == (c = m.socialLayer) ? void 0 : c.cardImageAssetId) != null &&
        null != (F = I.Z.toURLSafe((0, v._W)(K, $.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? F
            : void 0;
    return (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(_.kL8, {
            onClick:
                null != Q
                    ? Q
                    : () => {
                          null != X && (0, E.uL)(P.Z5c.CHANNELS_GAME_SHOP(X, ea, z, $.slug));
                      },
            className: l()(x.card, {
                [x.cardAnimation]: !et && 2 !== q,
                [x.cardDark]: ee,
                [ee ? x.cardDarkHighlighted : x.cardHighlighted]: en,
                [x.cardSmall]: 0 === q,
                [x.cardMedium]: 1 === q,
                [x.cardEmbedded]: 2 === q,
            }),
            ref: J,
            "aria-label": $.name,
            children: [
                null != eo &&
                    (0, r.jsx)(_.IGR, {
                        text: eo,
                        disableColor: !0,
                        className: x.badge,
                    }),
                (0, r.jsx)(U, {
                    sku: $,
                    isCardHovered: en,
                }),
                null != ed
                    ? (0, r.jsx)(N.p, {
                          containerClassName: x.cardImageContainer,
                          foregroundImageClassName: x.cardImage,
                          cardImage: ed,
                          altText: $.name,
                          shape: "custom",
                          backgroundImageClassName: x.cardBackgroundImage,
                          cardBackgroundImage: es,
                      })
                    : (0, r.jsx)("div", {
                          className: x.ticketIconContainer,
                          children: (0, r.jsx)(d.Prq, {
                              color: "white",
                              size: "custom",
                              height: L,
                              width: L,
                              className: x.ticketIcon,
                          }),
                      }),
                2 !== q
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: x.bottomGradient,
                                  style: { background: eu },
                              }),
                              (0, r.jsxs)("div", {
                                  className: x.details,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: x.titleContainer,
                                          children: (0, r.jsx)(_.Text, {
                                              color: "always-white",
                                              variant: "text-md/bold",
                                              lineClamp: 1,
                                              children: $.name,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: x.descriptionContainer,
                                          children: [
                                              null != er &&
                                                  (0, r.jsx)("img", {
                                                      src: er.toString(),
                                                      alt: ei,
                                                      className: x.iconAsset,
                                                  }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: (0, O.T4)(
                                                      null != (V = null == (A = $.price) ? void 0 : A.amount) ? V : 0,
                                                      null != (H = null == (k = $.price) ? void 0 : k.currency)
                                                          ? H
                                                          : w.pK.USD,
                                                  ),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: x.buttonHover,
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
                                                  price: (0, O.T4)(
                                                      null != (Y = null == (G = $.price) ? void 0 : G.amount) ? Y : 0,
                                                      null != (W = null == (B = $.price) ? void 0 : B.currency)
                                                          ? W
                                                          : w.pK.USD,
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
