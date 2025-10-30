n.d(t, {
    C: () => T,
    Z: () => w,
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
    v = n(143941),
    I = n(104505),
    h = n(703656),
    x = n(210887),
    _ = n(55563),
    j = n(937615),
    y = n(73346),
    C = n(591759),
    k = n(164670),
    O = n(210218),
    L = n(594914),
    S = n(433386),
    A = n(981631),
    N = n(231338),
    E = n(388032),
    Z = n(450433);
let P = [
    [0, 30],
    [0, 30],
    [0, 20],
];
var w = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.LARGE = 2)] = "LARGE"), a);
function M(e) {
    let { sku: t, isCardHovered: n } = e;
    return (0, l.jsx)("div", {
        className: Z.wishlistButtonContainer,
        children: (0, l.jsx)(v.s, {
            skuId: t.id,
            isCardHovered: n,
        }),
    });
}
function T(e) {
    var t, n, a, i, d, s, v, w, T, G, R, D, H, F, U, B;
    let { applicationId: W, skuId: Y, variant: z = 0, guildId: K } = e,
        J = r.useRef(null),
        $ = (0, p.e7)([_.Z], () => _.Z.get(Y)),
        q = (0, p.e7)([x.Z], () => (0, g.wjy)(x.Z.theme)),
        X = (0, p.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: Q } = (0, I.Z)(J),
        { primaryIconAsset: V, primaryIconLabel: ee } = r.useMemo(() => (0, k.FE)($, W), [$, W]),
        et = (0, p.e7)([O.Z], () => {
            var e, t;
            return null != K && null != (t = null == (e = O.Z.getStorefrontState(K)) ? void 0 : e.activePage) ? t : 0;
        }),
        en = r.useMemo(() => {
            var e, t;
            if (
                (null == $ || null == (t = $.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                a = u()($.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return a <= 1 ? E.intl.string(E.t.Bc13HF) : E.intl.format(E.t.Io7ozn, { days: a });
        }, [null == $ || null == (n = $.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        ea =
            (null == $ || null == (i = $.tenantMetadata) || null == (a = i.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (R = C.Z.toURLSafe(
                    (0, y._W)(
                        W,
                        null == $ ? void 0 : $.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? R
                : void 0,
        [el, er] = (0, b.Cf)(null == ea ? void 0 : ea.toString(), "#000000"),
        ei = r.useMemo(() => {
            let e = o()(el).darken(1.5).alpha(0.9).hex(),
                t = o()(el).alpha(0).hex(),
                [n, a] = P[z];
            return "linear-gradient(to top, "
                .concat(e, " ")
                .concat(30 + n, "%, ")
                .concat(t, " ")
                .concat(30 + a, "%)");
        }, [el, z]);
    if (null == $) return null;
    let eo =
        (null == (s = $.tenantMetadata) || null == (d = s.socialLayer) ? void 0 : d.cardImageAssetId) != null &&
        null != (D = C.Z.toURLSafe((0, y._W)(W, $.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? D
            : void 0;
    return (0, l.jsx)(g.tEY, {
        children: (0, l.jsxs)(f.kL8, {
            onClick: () => {
                null != K && (0, h.uL)(A.Z5c.CHANNELS_GAME_SHOP(K, et, Y, $.slug));
            },
            className: c()(Z.card, {
                [Z.cardAnimation]: !X,
                [Z.cardDark]: q,
                [q ? Z.cardDarkHighlighted : Z.cardHighlighted]: Q,
                [Z.cardLarge]: 2 === z,
                [Z.cardMedium]: 1 === z,
            }),
            ref: J,
            "aria-label": $.name,
            children: [
                null != en &&
                    (0, l.jsx)(f.IGR, {
                        text: en,
                        disableColor: !0,
                        className: Z.badge,
                    }),
                (0, l.jsx)(M, {
                    sku: $,
                    isCardHovered: Q,
                }),
                null != eo || null != ea
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: Z.cardBackgroundImage,
                                  style: { backgroundImage: null != ea ? "url(".concat(ea.toString(), ")") : void 0 },
                              }),
                              null != eo &&
                                  (0, l.jsx)("img", {
                                      draggable: "false",
                                      src: eo.toString(),
                                      alt: $.name,
                                      className: Z.cardImage,
                                  }),
                          ],
                      })
                    : (0, l.jsx)("div", {
                          className: Z.ticketIconContainer,
                          children: (0, l.jsx)(g.Prq, {
                              color: "white",
                              size: "custom",
                              height: 80,
                              width: 80,
                              className: Z.ticketIcon,
                          }),
                      }),
                (0, l.jsx)("div", {
                    className: c()(Z.bottomGradient, { [Z.bottomGradientLarge]: 2 === z }),
                    style: { background: ei },
                }),
                (0, l.jsxs)("div", {
                    className: Z.details,
                    children: [
                        (0, l.jsx)("div", {
                            className: Z.titleContainer,
                            children: (0, l.jsx)(f.Text, {
                                color: "always-white",
                                variant: "text-md/bold",
                                lineClamp: 1,
                                children: $.name,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: Z.descriptionContainer,
                            children: [
                                null != V &&
                                    (0, l.jsx)("img", {
                                        src: V.toString(),
                                        alt: ee,
                                        className: Z.iconAsset,
                                    }),
                                (0, l.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, j.T4)(
                                        null != (H = null == (v = $.price) ? void 0 : v.amount) ? H : 0,
                                        null != (F = null == (w = $.price) ? void 0 : w.currency) ? F : N.pK.USD,
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: Z.buttonHover,
                    children: (0, l.jsxs)(g.hE2, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(g.zxk, {
                                variant: "primary",
                                onClick: (e) => {
                                    e.stopPropagation(), (0, L.P)($, { isGift: !1 });
                                },
                                text: E.intl.format(E.t.Xp5WTn, {
                                    price: (0, j.T4)(
                                        null != (U = null == (T = $.price) ? void 0 : T.amount) ? U : 0,
                                        null != (B = null == (G = $.price) ? void 0 : G.currency) ? B : N.pK.USD,
                                    ),
                                }),
                                fullWidth: !0,
                            }),
                            (0, l.jsx)(S.Z, {
                                onGift: (e) => {
                                    e.stopPropagation(), (0, L.P)($, { isGift: !0 });
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
