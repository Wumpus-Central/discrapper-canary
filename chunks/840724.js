t.d(n, { Z: () => C }), t(388685);
var a = t(951288),
    l = t(647438),
    r = t(120356),
    i = t.n(r),
    d = t(913527),
    o = t.n(d),
    c = t(793030),
    s = t(442837),
    u = t(481060),
    g = t(727637),
    f = t(607070),
    m = t(277941),
    p = t(466679),
    _ = t(210887),
    v = t(55563),
    I = t(551428),
    x = t(937615),
    h = t(73346),
    b = t(591759),
    S = t(231338),
    j = t(388032),
    A = t(450433);
function C(e) {
    var n, t, r, d, C, L, O, y, k, E, T, N, R, Z, W, P, D, F;
    let { applicationId: H, skuId: w, isWide: M = !1 } = e,
        U = l.useRef(null),
        Y = (0, s.e7)([I.Z], () => I.Z.getForSKU(w), [w]),
        G = (0, s.e7)([v.Z], () => v.Z.get(w)),
        B = (0, s.e7)([_.Z], () => (0, c.wjy)(_.Z.theme)),
        K = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        q = (0, g.Z)(U),
        z = (0, p.m)(U),
        X = l.useMemo(() => {
            var e, n;
            if (
                (null == G || null == (n = G.tenantMetadata) || null == (e = n.socialLayer)
                    ? void 0
                    : e.carouselItems) == null
            )
                return null;
            let t = {};
            for (let e of G.tenantMetadata.socialLayer.carouselItems) {
                if (null == e.labelIconAssetId) continue;
                let n = b.Z.toURLSafe((0, h._W)(H, e.labelIconAssetId, 512, "png"));
                null != n && (t[n.toString()] = e.label);
            }
            return t;
        }, [null == G || null == (t = G.tenantMetadata) || null == (n = t.socialLayer) ? void 0 : n.carouselItems, H]),
        $ = l.useMemo(() => {
            var e, n;
            if (
                (null == G || null == (n = G.tenantMetadata) || null == (e = n.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let t = o()(),
                a = o()(G.tenantMetadata.socialLayer.expiresAt).diff(t, "days");
            return a <= 1 ? j.intl.string(j.t.Bc13HB) : j.intl.format(j.t.Io7ozs, { days: a });
        }, [null == G || null == (d = G.tenantMetadata) || null == (r = d.socialLayer) ? void 0 : r.expiresAt]);
    if (null == Y || null == G) return null;
    let J =
            (null == (L = G.tenantMetadata) || null == (C = L.socialLayer) ? void 0 : C.cardImageAssetId) != null &&
            null != (R = b.Z.toURLSafe((0, h._W)(H, G.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
                ? R
                : void 0,
        Q =
            (null == (y = G.tenantMetadata) || null == (O = y.socialLayer) ? void 0 : O.cardBackgroundImageAssetId) !=
                null &&
            null !=
                (Z = b.Z.toURLSafe((0, h._W)(H, G.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png")))
                ? Z
                : void 0;
    return (0, a.jsx)(c.tEY, {
        children: (0, a.jsxs)(u.kL8, {
            onClick: () => {},
            className: i()(A.card, {
                [A.cardAnimation]: !K,
                [A.cardDark]: B,
                [B ? A.cardDarkHighlighted : A.cardHighlighted]: q || z,
                [A.cardWide]: M,
            }),
            ref: U,
            "aria-label": G.name,
            children: [
                null != $ &&
                    (0, a.jsx)(u.IGR, {
                        text: $,
                        disableColor: !0,
                        className: A.badge,
                    }),
                (0, a.jsxs)("div", {
                    className: i()(A.cardHeaderImg, { [A.cardHeaderImgWide]: M }),
                    style:
                        null != Q ? { backgroundImage: null != Q ? "url(".concat(Q.toString(), ")") : void 0 } : void 0,
                    children: [
                        null != J
                            ? (0, a.jsx)("div", {
                                  className: A.cardImgContainer,
                                  children: (0, a.jsx)("img", {
                                      draggable: "false",
                                      src: J.toString(),
                                      alt: G.name,
                                      className: i()(A.cardImg, { [A.cardImgWide]: M }),
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
                                className: A.iconAssets,
                                children: Object.entries(X).map((e, n) => {
                                    let [t, l] = e;
                                    return (0, a.jsx)(
                                        "img",
                                        {
                                            src: t,
                                            alt: l,
                                            className: A.iconAsset,
                                        },
                                        n,
                                    );
                                }),
                            }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: A.details,
                    children: [
                        (0, a.jsx)(u.Text, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: G.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: A.detailsWrapper,
                            children: [
                                (0, a.jsx)("div", {
                                    className: A.innerBlur,
                                    children: (0, a.jsx)(u.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        children: (0, x.T4)(
                                            null != (W = null == (k = G.price) ? void 0 : k.amount) ? W : 0,
                                            null != (P = null == (E = G.price) ? void 0 : E.currency) ? P : S.pK.USD,
                                        ),
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: A.innerHover,
                                    children: (0, a.jsxs)(c.hE2, {
                                        wrap: !1,
                                        fullWidth: !0,
                                        children: [
                                            (0, a.jsx)(c.zxk, {
                                                variant: "primary",
                                                onClick: () => {},
                                                text: j.intl.format(j.t.Xp5WTk, {
                                                    price: (0, x.T4)(
                                                        null != (D = null == (T = G.price) ? void 0 : T.amount) ? D : 0,
                                                        null != (F = null == (N = G.price) ? void 0 : N.currency)
                                                            ? F
                                                            : S.pK.USD,
                                                    ),
                                                }),
                                                fullWidth: !0,
                                            }),
                                            (0, a.jsx)(m.Z, {
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
