n.d(t, {
    C: () => T,
    Z: () => R,
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
    I = n(104505),
    _ = n(210887),
    h = n(55563),
    x = n(937615),
    y = n(73346),
    O = n(591759),
    j = n(164670),
    S = n(436585),
    C = n(594914),
    L = n(231338),
    k = n(388032),
    A = n(450433);
let E = [
    [0, 40],
    [0, 40],
    [0, 20],
];
var R = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.LARGE = 2)] = "LARGE"), a);
function T(e) {
    var t, n, a, i, d, s, R, T, N, P, Z, w, D, M, G, F;
    let { applicationId: U, skuId: H, variant: Y = 0, guildId: K } = e,
        W = l.useRef(null),
        B = (0, f.e7)([h.Z], () => h.Z.get(H)),
        z = (0, f.e7)([_.Z], () => (0, g.wjy)(_.Z.theme)),
        $ = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: q } = (0, I.Z)(W),
        { primaryIconAsset: J, primaryIconLabel: X } = l.useMemo(() => (0, j.FE)(B, U), [B, U]),
        Q = l.useMemo(() => {
            var e, t;
            if (
                (null == B || null == (t = B.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                a = u()(B.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return a <= 1 ? k.intl.string(k.t.Bc13HB) : k.intl.format(k.t.Io7ozs, { days: a });
        }, [null == B || null == (n = B.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        V =
            (null == B || null == (i = B.tenantMetadata) || null == (a = i.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (Z = O.Z.toURLSafe(
                    (0, y._W)(
                        U,
                        null == B ? void 0 : B.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? Z
                : void 0,
        [ee, et] = (0, v.Cf)(null == V ? void 0 : V.toString(), "#000000"),
        en = l.useMemo(() => {
            let e = o()(ee).darken(1.5).alpha(0.9).hex(),
                t = o()(ee).alpha(0).hex(),
                [n, a] = E[Y];
            return "linear-gradient(to top, "
                .concat(e, " ")
                .concat(30 + n, "%, ")
                .concat(t, " ")
                .concat(30 + a, "%)");
        }, [ee, Y]);
    if (null == B) return null;
    let ea =
        (null == (s = B.tenantMetadata) || null == (d = s.socialLayer) ? void 0 : d.cardImageAssetId) != null &&
        null != (w = O.Z.toURLSafe((0, y._W)(U, B.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? w
            : void 0;
    return (0, r.jsx)(g.tEY, {
        children: (0, r.jsxs)(p.kL8, {
            onClick: () => {
                null != K &&
                    (0, S.g)({
                        skuId: H,
                        applicationId: U,
                        guildId: K,
                    });
            },
            className: c()(A.card, {
                [A.cardAnimation]: !$,
                [A.cardDark]: z,
                [z ? A.cardDarkHighlighted : A.cardHighlighted]: q,
                [A.cardLarge]: 2 === Y,
                [A.cardMedium]: 1 === Y,
            }),
            ref: W,
            "aria-label": B.name,
            children: [
                null != Q &&
                    (0, r.jsx)(p.IGR, {
                        text: Q,
                        disableColor: !0,
                        className: A.badge,
                    }),
                null != ea || null != V
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: A.cardBackgroundImage,
                                  style: { backgroundImage: null != V ? "url(".concat(V.toString(), ")") : void 0 },
                              }),
                              null != ea &&
                                  (0, r.jsx)("img", {
                                      draggable: "false",
                                      src: ea.toString(),
                                      alt: B.name,
                                      className: A.cardImage,
                                  }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: A.ticketIconContainer,
                          children: (0, r.jsx)(g.Prq, {
                              color: "white",
                              size: "custom",
                              height: 80,
                              width: 80,
                              className: A.ticketIcon,
                          }),
                      }),
                (0, r.jsx)("div", {
                    className: c()(A.bottomGradient, { [A.bottomGradientLarge]: 2 === Y }),
                    style: { background: en },
                }),
                (0, r.jsxs)("div", {
                    className: A.details,
                    children: [
                        (0, r.jsx)("div", {
                            className: A.titleContainer,
                            children: (0, r.jsx)(p.Text, {
                                color: "always-white",
                                variant: "text-lg/bold",
                                lineClamp: 1,
                                children: B.name,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: A.descriptionContainer,
                            children: [
                                null != J &&
                                    (0, r.jsx)("img", {
                                        src: J.toString(),
                                        alt: X,
                                        className: A.iconAsset,
                                    }),
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/semibold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, x.T4)(
                                        null != (D = null == (R = B.price) ? void 0 : R.amount) ? D : 0,
                                        null != (M = null == (T = B.price) ? void 0 : T.currency) ? M : L.pK.USD,
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: A.buttonHover,
                    children: (0, r.jsxs)(g.hE2, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(g.zxk, {
                                variant: "primary",
                                onClick: (e) => {
                                    e.stopPropagation(), (0, C.P)(B, { isGift: !1 });
                                },
                                text: k.intl.format(k.t.Xp5WTk, {
                                    price: (0, x.T4)(
                                        null != (G = null == (N = B.price) ? void 0 : N.amount) ? G : 0,
                                        null != (F = null == (P = B.price) ? void 0 : P.currency) ? F : L.pK.USD,
                                    ),
                                }),
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(b.Z, {
                                onGift: (e) => {
                                    e.stopPropagation(), (0, C.P)(B, { isGift: !0 });
                                },
                                tooltipDelay: 250,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
