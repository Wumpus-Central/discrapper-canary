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
    b = n(277941),
    v = n(220082),
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
    S = n(981631),
    A = n(231338),
    E = n(388032),
    N = n(450433);
let Z = [
    [0, 30],
    [0, 30],
    [0, 20],
];
var P = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.LARGE = 2)] = "LARGE"), a);
function M(e) {
    var t, n, a, i, d, s, P, M, w, T, G, R, D, H, U, F;
    let { applicationId: W, skuId: Y, variant: B = 0, guildId: z } = e,
        K = r.useRef(null),
        $ = (0, p.e7)([_.Z], () => _.Z.get(Y)),
        q = (0, p.e7)([x.Z], () => (0, g.wjy)(x.Z.theme)),
        J = (0, p.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: X } = (0, I.Z)(K),
        { primaryIconAsset: Q, primaryIconLabel: V } = r.useMemo(() => (0, k.FE)($, W), [$, W]),
        ee = (0, p.e7)([O.Z], () => {
            var e, t;
            return null != z && null != (t = null == (e = O.Z.getStorefrontState(z)) ? void 0 : e.activePage) ? t : 0;
        }),
        et = r.useMemo(() => {
            var e, t;
            if (
                (null == $ || null == (t = $.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                a = u()($.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return a <= 1 ? E.intl.string(E.t.Bc13HB) : E.intl.format(E.t.Io7ozs, { days: a });
        }, [null == $ || null == (n = $.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        en =
            (null == $ || null == (i = $.tenantMetadata) || null == (a = i.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (G = C.Z.toURLSafe(
                    (0, y._W)(
                        W,
                        null == $ ? void 0 : $.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? G
                : void 0,
        [ea, el] = (0, v.Cf)(null == en ? void 0 : en.toString(), "#000000"),
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
    if (null == $) return null;
    let ei =
        (null == (s = $.tenantMetadata) || null == (d = s.socialLayer) ? void 0 : d.cardImageAssetId) != null &&
        null != (R = C.Z.toURLSafe((0, y._W)(W, $.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? R
            : void 0;
    return (0, l.jsx)(g.tEY, {
        children: (0, l.jsxs)(f.kL8, {
            onClick: () => {
                null != z && (0, h.uL)(S.Z5c.CHANNELS_GAME_SHOP(z, ee, Y, $.slug));
            },
            className: c()(N.card, {
                [N.cardAnimation]: !J,
                [N.cardDark]: q,
                [q ? N.cardDarkHighlighted : N.cardHighlighted]: X,
                [N.cardLarge]: 2 === B,
                [N.cardMedium]: 1 === B,
            }),
            ref: K,
            "aria-label": $.name,
            children: [
                null != et &&
                    (0, l.jsx)(f.IGR, {
                        text: et,
                        disableColor: !0,
                        className: N.badge,
                    }),
                null != ei || null != en
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: N.cardBackgroundImage,
                                  style: { backgroundImage: null != en ? "url(".concat(en.toString(), ")") : void 0 },
                              }),
                              null != ei &&
                                  (0, l.jsx)("img", {
                                      draggable: "false",
                                      src: ei.toString(),
                                      alt: $.name,
                                      className: N.cardImage,
                                  }),
                          ],
                      })
                    : (0, l.jsx)("div", {
                          className: N.ticketIconContainer,
                          children: (0, l.jsx)(g.Prq, {
                              color: "white",
                              size: "custom",
                              height: 80,
                              width: 80,
                              className: N.ticketIcon,
                          }),
                      }),
                (0, l.jsx)("div", {
                    className: c()(N.bottomGradient, { [N.bottomGradientLarge]: 2 === B }),
                    style: { background: er },
                }),
                (0, l.jsxs)("div", {
                    className: N.details,
                    children: [
                        (0, l.jsx)("div", {
                            className: N.titleContainer,
                            children: (0, l.jsx)(f.Text, {
                                color: "always-white",
                                variant: "text-md/bold",
                                lineClamp: 1,
                                children: $.name,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: N.descriptionContainer,
                            children: [
                                null != Q &&
                                    (0, l.jsx)("img", {
                                        src: Q.toString(),
                                        alt: V,
                                        className: N.iconAsset,
                                    }),
                                (0, l.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, j.T4)(
                                        null != (D = null == (P = $.price) ? void 0 : P.amount) ? D : 0,
                                        null != (H = null == (M = $.price) ? void 0 : M.currency) ? H : A.pK.USD,
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: N.buttonHover,
                    children: (0, l.jsxs)(g.hE2, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(g.zxk, {
                                variant: "primary",
                                onClick: (e) => {
                                    e.stopPropagation(), (0, L.P)($, { isGift: !1 });
                                },
                                text: E.intl.format(E.t.Xp5WTk, {
                                    price: (0, j.T4)(
                                        null != (U = null == (w = $.price) ? void 0 : w.amount) ? U : 0,
                                        null != (F = null == (T = $.price) ? void 0 : T.currency) ? F : A.pK.USD,
                                    ),
                                }),
                                fullWidth: !0,
                            }),
                            (0, l.jsx)(b.Z, {
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
