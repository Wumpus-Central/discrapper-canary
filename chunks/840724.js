n.d(t, {
    C: () => M,
    Z: () => P,
}),
    n(388685);
var a,
    l = n(951288),
    r = n(647438),
    i = n(688619),
    o = n.n(i),
    d = n(120356),
    c = n.n(d),
    s = n(913527),
    u = n.n(s),
    g = n(793030),
    p = n(442837),
    f = n(481060),
    m = n(607070),
    b = n(220082),
    v = n(104505),
    I = n(703656),
    h = n(210887),
    x = n(55563),
    _ = n(937615),
    j = n(73346),
    y = n(591759),
    C = n(164670),
    k = n(210218),
    O = n(594914),
    L = n(433386),
    S = n(981631),
    A = n(231338),
    N = n(388032),
    E = n(450433);
let Z = [
    [0, 30],
    [0, 30],
    [0, 20],
];
var P = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.LARGE = 2)] = "LARGE"), a);
function M(e) {
    var t, n, a, i, d, s, P, M, w, T, G, R, D, H, F, U;
    let { applicationId: W, skuId: Y, variant: B = 0, guildId: z } = e,
        K = r.useRef(null),
        J = (0, p.e7)([x.Z], () => x.Z.get(Y)),
        $ = (0, p.e7)([h.Z], () => (0, g.wjy)(h.Z.theme)),
        q = (0, p.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: X } = (0, v.Z)(K),
        { primaryIconAsset: Q, primaryIconLabel: V } = r.useMemo(() => (0, C.FE)(J, W), [J, W]),
        ee = (0, p.e7)([k.Z], () => {
            var e, t;
            return null != z && null != (t = null == (e = k.Z.getStorefrontState(z)) ? void 0 : e.activePage) ? t : 0;
        }),
        et = r.useMemo(() => {
            var e, t;
            if (
                (null == J || null == (t = J.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                a = u()(J.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return a <= 1 ? N.intl.string(N.t.Bc13HF) : N.intl.format(N.t.Io7ozn, { days: a });
        }, [null == J || null == (n = J.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        en =
            (null == J || null == (i = J.tenantMetadata) || null == (a = i.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (G = y.Z.toURLSafe(
                    (0, j._W)(
                        W,
                        null == J ? void 0 : J.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? G
                : void 0,
        [ea, el] = (0, b.Cf)(null == en ? void 0 : en.toString(), "#000000"),
        er = r.useMemo(() => {
            let e = o()(ea).darken(1.5).alpha(0.9).hex(),
                t = o()(ea).alpha(0).hex(),
                [n, a] = Z[B];
            return "linear-gradient(to top, "
                .concat(e, " ")
                .concat(30 + n, "%, ")
                .concat(t, " ")
                .concat(30 + a, "%)");
        }, [ea, B]);
    if (null == J) return null;
    let ei =
        (null == (s = J.tenantMetadata) || null == (d = s.socialLayer) ? void 0 : d.cardImageAssetId) != null &&
        null != (R = y.Z.toURLSafe((0, j._W)(W, J.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? R
            : void 0;
    return (0, l.jsx)(g.tEY, {
        children: (0, l.jsxs)(f.kL8, {
            onClick: () => {
                null != z && (0, I.uL)(S.Z5c.CHANNELS_GAME_SHOP(z, ee, Y, J.slug));
            },
            className: c()(E.card, {
                [E.cardAnimation]: !q,
                [E.cardDark]: $,
                [$ ? E.cardDarkHighlighted : E.cardHighlighted]: X,
                [E.cardLarge]: 2 === B,
                [E.cardMedium]: 1 === B,
            }),
            ref: K,
            "aria-label": J.name,
            children: [
                null != et &&
                    (0, l.jsx)(f.IGR, {
                        text: et,
                        disableColor: !0,
                        className: E.badge,
                    }),
                null != ei || null != en
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: E.cardBackgroundImage,
                                  style: { backgroundImage: null != en ? "url(".concat(en.toString(), ")") : void 0 },
                              }),
                              null != ei &&
                                  (0, l.jsx)("img", {
                                      draggable: "false",
                                      src: ei.toString(),
                                      alt: J.name,
                                      className: E.cardImage,
                                  }),
                          ],
                      })
                    : (0, l.jsx)("div", {
                          className: E.ticketIconContainer,
                          children: (0, l.jsx)(g.Prq, {
                              color: "white",
                              size: "custom",
                              height: 80,
                              width: 80,
                              className: E.ticketIcon,
                          }),
                      }),
                (0, l.jsx)("div", {
                    className: c()(E.bottomGradient, { [E.bottomGradientLarge]: 2 === B }),
                    style: { background: er },
                }),
                (0, l.jsxs)("div", {
                    className: E.details,
                    children: [
                        (0, l.jsx)("div", {
                            className: E.titleContainer,
                            children: (0, l.jsx)(f.Text, {
                                color: "always-white",
                                variant: "text-md/bold",
                                lineClamp: 1,
                                children: J.name,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: E.descriptionContainer,
                            children: [
                                null != Q &&
                                    (0, l.jsx)("img", {
                                        src: Q.toString(),
                                        alt: V,
                                        className: E.iconAsset,
                                    }),
                                (0, l.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, _.T4)(
                                        null != (D = null == (P = J.price) ? void 0 : P.amount) ? D : 0,
                                        null != (H = null == (M = J.price) ? void 0 : M.currency) ? H : A.pK.USD,
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: E.buttonHover,
                    children: (0, l.jsxs)(g.hE2, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(g.zxk, {
                                variant: "primary",
                                onClick: (e) => {
                                    e.stopPropagation(), (0, O.P)(J, { isGift: !1 });
                                },
                                text: N.intl.format(N.t.Xp5WTn, {
                                    price: (0, _.T4)(
                                        null != (F = null == (w = J.price) ? void 0 : w.amount) ? F : 0,
                                        null != (U = null == (T = J.price) ? void 0 : T.currency) ? U : A.pK.USD,
                                    ),
                                }),
                                fullWidth: !0,
                            }),
                            (0, l.jsx)(L.Z, {
                                onGift: (e) => {
                                    e.stopPropagation(), (0, O.P)(J, { isGift: !0 });
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
