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
    m = n(727637),
    b = n(607070),
    v = n(277941),
    _ = n(220082),
    I = n(466679),
    h = n(210887),
    x = n(55563),
    j = n(937615),
    O = n(73346),
    S = n(591759),
    C = n(164670),
    y = n(436585),
    L = n(231338),
    k = n(388032),
    A = n(450433);
let E = [
    [0, 25, 6.09, 29.57],
    [0, 18.48, 9.07, 40.9],
    [0, 35, 9.07, 40.9],
];
var R = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.LARGE = 2)] = "LARGE"), a);
function T(e) {
    var t, n, a, i, d, s, R, T, N, Z, P, M, w, D, G, F;
    let { applicationId: U, skuId: Y, variant: H = 0, guildId: K } = e,
        W = l.useRef(null),
        B = (0, f.e7)([x.Z], () => x.Z.get(Y)),
        q = (0, f.e7)([h.Z], () => (0, g.wjy)(h.Z.theme)),
        z = (0, f.e7)([b.Z], () => b.Z.useReducedMotion),
        X = (0, m.Z)(W),
        $ = (0, I.m)(W),
        { primaryIconAsset: J, primaryIconLabel: Q } = l.useMemo(() => (0, C.FE)(B, U), [B, U]),
        V = l.useMemo(() => {
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
        ee =
            (null == B || null == (i = B.tenantMetadata) || null == (a = i.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (P = S.Z.toURLSafe(
                    (0, O._W)(
                        U,
                        null == B ? void 0 : B.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? P
                : void 0,
        [et, en] = (0, _.Cf)(null == ee ? void 0 : ee.toString(), "#000000"),
        ea = l.useMemo(() => {
            let e = o()(et).darken(1).hex(),
                [t, n, a, r] = E[H];
            return "linear-gradient(to top, "
                .concat(e, " ")
                .concat(t + 25, "%, transparent ")
                .concat(n + 25, "%), linear-gradient(to top, ")
                .concat(e, " ")
                .concat(a + 25, "%, transparent ")
                .concat(r + 25, "%)");
        }, [et, H]);
    if (null == B) return null;
    let er =
        (null == (s = B.tenantMetadata) || null == (d = s.socialLayer) ? void 0 : d.cardImageAssetId) != null &&
        null != (M = S.Z.toURLSafe((0, O._W)(U, B.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? M
            : void 0;
    return (0, r.jsx)(g.tEY, {
        children: (0, r.jsxs)(p.kL8, {
            onClick: () => {
                (0, y.g)({
                    skuId: Y,
                    applicationId: U,
                    guildId: K,
                });
            },
            className: c()(A.card, {
                [A.cardAnimation]: !z,
                [A.cardDark]: q,
                [q ? A.cardDarkHighlighted : A.cardHighlighted]: X || $,
                [A.cardLarge]: 2 === H,
                [A.cardMedium]: 1 === H,
            }),
            ref: W,
            "aria-label": B.name,
            children: [
                null != V &&
                    (0, r.jsx)(p.IGR, {
                        text: V,
                        disableColor: !0,
                        className: A.badge,
                    }),
                null != er || null != ee
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: A.cardBackgroundImage,
                                  style: { backgroundImage: null != ee ? "url(".concat(ee.toString(), ")") : void 0 },
                              }),
                              null != er &&
                                  (0, r.jsx)("img", {
                                      draggable: "false",
                                      src: er.toString(),
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
                    className: c()(A.bottomGradient, { [A.bottomGradientLarge]: 2 === H }),
                    style: { background: ea },
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
                                        alt: Q,
                                        className: A.iconAsset,
                                    }),
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/semibold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, j.T4)(
                                        null != (w = null == (R = B.price) ? void 0 : R.amount) ? w : 0,
                                        null != (D = null == (T = B.price) ? void 0 : T.currency) ? D : L.pK.USD,
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
                                onClick: () => {},
                                text: k.intl.format(k.t.Xp5WTk, {
                                    price: (0, j.T4)(
                                        null != (G = null == (N = B.price) ? void 0 : N.amount) ? G : 0,
                                        null != (F = null == (Z = B.price) ? void 0 : Z.currency) ? F : L.pK.USD,
                                    ),
                                }),
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(v.Z, {
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
