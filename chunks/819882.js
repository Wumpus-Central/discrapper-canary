n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var l = n(873546),
    s = n(399606),
    a = n(481060),
    i = n(100527),
    o = n(594174),
    c = n(74538),
    u = n(381585),
    d = n(994587),
    g = n(884697),
    p = n(724994),
    f = n(680942),
    C = n(786040),
    h = n(58201),
    _ = n(445794),
    m = n(956472),
    b = n(215023),
    E = n(388032);
let S = (e) => {
        let { product: t, selectedVariantIndex: n, cardRef: h } = e,
            S = (0, d.Nd)(),
            v = null == S ? void 0 : S.tab,
            x = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
            O = c.ZP.canUseCollectibles(x),
            y = (0, u.sp)(),
            { isPurchased: T, isPartiallyOwnedBundle: L } = (0, p.L)(t),
            j = (0, g.rN)(t),
            k = (0, g.G1)(t),
            I = (0, g.ne)({
                product: t,
                isPartiallyOwnedBundle: L,
                isPurchased: T,
            }),
            P = (0, _.Iw)(t),
            { isOrbExclusive: N } = (0, m.Ip)({
                product: t,
                isPremiumUser: O,
                tab: v,
                hasDiscountOffer: null != P,
            }),
            B = (0, C.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
        return k || l.tq || N || !I || v === b.AW.ORBS
            ? null
            : j
              ? (0, r.jsx)(a.hU, {
                    variant: "primary",
                    "aria-label": E.intl.string(E.t.SKNnqq),
                    icon: a.tEF,
                    onClick: (e) => {
                        e.stopPropagation(), B(e);
                    },
                })
              : (0, r.jsx)(u.k0, {
                    newValue: { pageCategory: v === b.AW.HOME || null == y ? void 0 : y.pageCategory },
                    children: (0, r.jsx)(f.Z, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: h,
                        tooltipDelay: 250,
                    }),
                });
    },
    v = (e) => {
        let { skuId: t, cardRef: n, selectedVariantIndex: l } = e,
            s = (0, C.LJ)(t);
        if (null == s) return null;
        let a = (0, h.W)(s, l);
        return (0, r.jsx)(S, {
            product: a,
            cardRef: n,
            selectedVariantIndex: l,
        });
    };
