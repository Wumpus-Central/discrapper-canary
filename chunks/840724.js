n.d(t, { Z: () => S }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    d = n(913527),
    o = n.n(d),
    c = n(793030),
    s = n(442837),
    u = n(481060),
    g = n(727637),
    f = n(607070),
    p = n(277941),
    m = n(466679),
    I = n(210887),
    b = n(55563),
    v = n(937615),
    _ = n(73346),
    h = n(591759),
    x = n(436585),
    O = n(231338),
    j = n(388032),
    y = n(402920);
function S(e) {
    var t, n, l, d, S, A, C, L, E, k, T, R, N, Z, P, w, W, D;
    let { applicationId: F, skuId: H, isWide: M = !1, guildId: Y } = e,
        U = r.useRef(null),
        G = (0, s.e7)([b.Z], () => b.Z.get(H)),
        K = (0, s.e7)([I.Z], () => (0, c.wjy)(I.Z.theme)),
        B = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        q = (0, g.Z)(U),
        z = (0, m.m)(U),
        X = r.useMemo(() => {
            var e, t;
            if (
                (null == G || null == (t = G.tenantMetadata) || null == (e = t.socialLayer)
                    ? void 0
                    : e.carouselItems) == null
            )
                return null;
            let n = {};
            for (let e of G.tenantMetadata.socialLayer.carouselItems) {
                if (null == e.labelIconAssetId) continue;
                let t = h.Z.toURLSafe((0, _._W)(F, e.labelIconAssetId, 512, "png"));
                null != t && (n[t.toString()] = e.label);
            }
            return n;
        }, [null == G || null == (n = G.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.carouselItems, F]),
        $ = r.useMemo(() => {
            var e, t;
            if (
                (null == G || null == (t = G.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = o()(),
                a = o()(G.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
            return a <= 1 ? j.intl.string(j.t.Bc13HB) : j.intl.format(j.t.Io7ozs, { days: a });
        }, [null == G || null == (d = G.tenantMetadata) || null == (l = d.socialLayer) ? void 0 : l.expiresAt]);
    if (null == G) return null;
    let J =
            (null == (A = G.tenantMetadata) || null == (S = A.socialLayer) ? void 0 : S.cardImageAssetId) != null &&
            null != (N = h.Z.toURLSafe((0, _._W)(F, G.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
                ? N
                : void 0,
        Q =
            (null == (L = G.tenantMetadata) || null == (C = L.socialLayer) ? void 0 : C.cardBackgroundImageAssetId) !=
                null &&
            null !=
                (Z = h.Z.toURLSafe((0, _._W)(F, G.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png")))
                ? Z
                : void 0;
    return (0, a.jsx)(c.tEY, {
        children: (0, a.jsxs)(u.kL8, {
            onClick: () => {
                (0, x.g)({
                    skuId: H,
                    applicationId: F,
                    guildId: Y,
                });
            },
            className: i()(y.card, {
                [y.cardAnimation]: !B,
                [y.cardDark]: K,
                [K ? y.cardDarkHighlighted : y.cardHighlighted]: q || z,
                [y.cardWide]: M,
            }),
            ref: U,
            "aria-label": G.name,
            children: [
                null != $ &&
                    (0, a.jsx)(u.IGR, {
                        text: $,
                        disableColor: !0,
                        className: y.badge,
                    }),
                (0, a.jsxs)("div", {
                    className: i()(y.cardHeaderImg, { [y.cardHeaderImgWide]: M }),
                    style:
                        null != Q ? { backgroundImage: null != Q ? "url(".concat(Q.toString(), ")") : void 0 } : void 0,
                    children: [
                        null != J
                            ? (0, a.jsx)("div", {
                                  className: y.cardImgContainer,
                                  children: (0, a.jsx)("img", {
                                      draggable: "false",
                                      src: J.toString(),
                                      alt: G.name,
                                      className: i()(y.cardImg, { [y.cardImgWide]: M }),
                                  }),
                              })
                            : (0, a.jsx)(c.Prq, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                              }),
                        null != X &&
                            (0, a.jsx)("div", {
                                className: y.iconAssets,
                                children: Object.entries(X).map((e, t) => {
                                    let [n, r] = e;
                                    return (0, a.jsx)(
                                        "img",
                                        {
                                            src: n,
                                            alt: r,
                                            className: y.iconAsset,
                                        },
                                        t,
                                    );
                                }),
                            }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.details,
                    children: [
                        (0, a.jsx)(u.Text, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: G.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: y.detailsWrapper,
                            children: [
                                (0, a.jsx)("div", {
                                    className: y.innerBlur,
                                    children: (0, a.jsx)(u.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        children: (0, v.T4)(
                                            null != (P = null == (E = G.price) ? void 0 : E.amount) ? P : 0,
                                            null != (w = null == (k = G.price) ? void 0 : k.currency) ? w : O.pK.USD,
                                        ),
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: y.innerHover,
                                    children: (0, a.jsxs)(c.hE2, {
                                        wrap: !1,
                                        fullWidth: !0,
                                        children: [
                                            (0, a.jsx)(c.zxk, {
                                                variant: "primary",
                                                onClick: () => {},
                                                text: j.intl.format(j.t.Xp5WTk, {
                                                    price: (0, v.T4)(
                                                        null != (W = null == (T = G.price) ? void 0 : T.amount) ? W : 0,
                                                        null != (D = null == (R = G.price) ? void 0 : R.currency)
                                                            ? D
                                                            : O.pK.USD,
                                                    ),
                                                }),
                                                fullWidth: !0,
                                            }),
                                            (0, a.jsx)(p.Z, {
                                                onGift: () => {},
                                                tooltipDelay: 250,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
