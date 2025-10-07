n.d(t, {
    C: () => R,
    Z: () => E,
}),
    n(388685);
var a,
    r = n(951288),
    l = n(647438),
    i = n(688619),
    o = n.n(i),
    d = n(120356),
    c = n.n(d),
    s = n(913527),
    u = n.n(s),
    g = n(793030),
    f = n(442837),
    p = n(481060),
    m = n(607070),
    b = n(277941),
    v = n(220082),
    _ = n(104505),
    I = n(210887),
    h = n(55563),
    x = n(937615),
    O = n(73346),
    j = n(591759),
    S = n(164670),
    C = n(436585),
    y = n(231338),
    L = n(388032),
    k = n(450433);
let A = [
    [0, 40],
    [0, 40],
    [0, 20],
];
var E = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.LARGE = 2)] = "LARGE"), a);
function R(e) {
    var t, n, a, i, d, s, E, R, T, N, Z, P, M, w, D, G;
    let { applicationId: F, skuId: U, variant: Y = 0, guildId: H } = e,
        K = l.useRef(null),
        W = (0, f.e7)([h.Z], () => h.Z.get(U)),
        B = (0, f.e7)([I.Z], () => (0, g.wjy)(I.Z.theme)),
        q = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: z } = (0, _.Z)(K),
        { primaryIconAsset: X, primaryIconLabel: $ } = l.useMemo(() => (0, S.FE)(W, F), [W, F]),
        J = l.useMemo(() => {
            var e, t;
            if (
                (null == W || null == (t = W.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                a = u()(W.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return a <= 1 ? L.intl.string(L.t.Bc13HB) : L.intl.format(L.t.Io7ozs, { days: a });
        }, [null == W || null == (n = W.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        Q =
            (null == W || null == (i = W.tenantMetadata) || null == (a = i.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (Z = j.Z.toURLSafe(
                    (0, O._W)(
                        F,
                        null == W ? void 0 : W.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? Z
                : void 0,
        [V, ee] = (0, v.Cf)(null == Q ? void 0 : Q.toString(), "#000000"),
        et = l.useMemo(() => {
            let e = o()(V).darken(1.5).alpha(0.9).hex(),
                t = o()(V).alpha(0).hex(),
                [n, a] = A[Y];
            return "linear-gradient(to top, "
                .concat(e, " ")
                .concat(30 + n, "%, ")
                .concat(t, " ")
                .concat(30 + a, "%)");
        }, [V, Y]);
    if (null == W) return null;
    let en =
        (null == (s = W.tenantMetadata) || null == (d = s.socialLayer) ? void 0 : d.cardImageAssetId) != null &&
        null != (P = j.Z.toURLSafe((0, O._W)(F, W.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? P
            : void 0;
    return (0, r.jsx)(g.tEY, {
        children: (0, r.jsxs)(p.kL8, {
            onClick: () => {
                null != H &&
                    (0, C.g)({
                        skuId: U,
                        applicationId: F,
                        guildId: H,
                    });
            },
            className: c()(k.card, {
                [k.cardAnimation]: !q,
                [k.cardDark]: B,
                [B ? k.cardDarkHighlighted : k.cardHighlighted]: z,
                [k.cardLarge]: 2 === Y,
                [k.cardMedium]: 1 === Y,
            }),
            ref: K,
            "aria-label": W.name,
            children: [
                null != J &&
                    (0, r.jsx)(p.IGR, {
                        text: J,
                        disableColor: !0,
                        className: k.badge,
                    }),
                null != en || null != Q
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: k.cardBackgroundImage,
                                  style: { backgroundImage: null != Q ? "url(".concat(Q.toString(), ")") : void 0 },
                              }),
                              null != en &&
                                  (0, r.jsx)("img", {
                                      draggable: "false",
                                      src: en.toString(),
                                      alt: W.name,
                                      className: k.cardImage,
                                  }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: k.ticketIconContainer,
                          children: (0, r.jsx)(g.Prq, {
                              color: "white",
                              size: "custom",
                              height: 80,
                              width: 80,
                              className: k.ticketIcon,
                          }),
                      }),
                (0, r.jsx)("div", {
                    className: c()(k.bottomGradient, { [k.bottomGradientLarge]: 2 === Y }),
                    style: { background: et },
                }),
                (0, r.jsxs)("div", {
                    className: k.details,
                    children: [
                        (0, r.jsx)("div", {
                            className: k.titleContainer,
                            children: (0, r.jsx)(p.Text, {
                                color: "always-white",
                                variant: "text-lg/bold",
                                lineClamp: 1,
                                children: W.name,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: k.descriptionContainer,
                            children: [
                                null != X &&
                                    (0, r.jsx)("img", {
                                        src: X.toString(),
                                        alt: $,
                                        className: k.iconAsset,
                                    }),
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/semibold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, x.T4)(
                                        null != (M = null == (E = W.price) ? void 0 : E.amount) ? M : 0,
                                        null != (w = null == (R = W.price) ? void 0 : R.currency) ? w : y.pK.USD,
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: k.buttonHover,
                    children: (0, r.jsxs)(g.hE2, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(g.zxk, {
                                variant: "primary",
                                onClick: () => {},
                                text: L.intl.format(L.t.Xp5WTk, {
                                    price: (0, x.T4)(
                                        null != (D = null == (T = W.price) ? void 0 : T.amount) ? D : 0,
                                        null != (G = null == (N = W.price) ? void 0 : N.currency) ? G : y.pK.USD,
                                    ),
                                }),
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(b.Z, {
                                onGift: () => {},
                                tooltipDelay: 250,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
