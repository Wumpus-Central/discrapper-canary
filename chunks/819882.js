n.d(t, { Z: () => S });
var r = n(951288);
n(647438);
var l = n(873546),
    s = n(399606),
    i = n(481060),
    a = n(100527),
    o = n(594174),
    c = n(74538),
    u = n(381585),
    d = n(994587),
    g = n(884697),
    f = n(724994),
    p = n(680942),
    C = n(786040),
    h = n(58201),
    _ = n(445794),
    m = n(956472),
    b = n(215023),
    E = n(388032);
let v = (e) => {
        let { product: t, selectedVariantIndex: n, cardRef: h, onClick: v, icon: S } = e,
            x = (0, d.Nd)(),
            O = null == x ? void 0 : x.tab,
            y = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
            T = c.ZP.canUseCollectibles(y),
            j = (0, u.sp)(),
            { isPurchased: k, isPartiallyOwnedBundle: L } = (0, f.L)(t),
            I = (0, g.rN)(t),
            P = (0, g.G1)(t),
            N = (0, g.ne)({
                product: t,
                isPartiallyOwnedBundle: L,
                isPurchased: k,
            }),
            B = (0, _.Iw)(t),
            { isOrbExclusive: A } = (0, m.Ip)({
                product: t,
                isPremiumUser: T,
                tab: O,
                hasDiscountOffer: null != B,
            }),
            R = (0, C.J7)(t, a.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
        return P || l.tq || A || !N || O === b.AW.ORBS
            ? null
            : I || null != v || null != S
              ? (0, r.jsx)(i.hU, {
                    variant: "primary",
                    "aria-label": E.intl.string(E.t.SKNnqq),
                    icon: null != S ? S : i.tEF,
                    onClick: (e) => {
                        e.stopPropagation(), null != v ? v(t.skuId) : R(e);
                    },
                })
              : (0, r.jsx)(u.k0, {
                    newValue: { pageCategory: O === b.AW.HOME || null == j ? void 0 : j.pageCategory },
                    children: (0, r.jsx)(p.Z, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: h,
                        tooltipDelay: 250,
                    }),
                });
    },
    S = (e) => {
        let { skuId: t, cardRef: n, selectedVariantIndex: l, onClick: s, icon: i } = e,
            a = (0, C.LJ)(t);
        if (null == a) return null;
        let o = (0, h.W)(a, l);
        return (0, r.jsx)(v, {
            product: o,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: s,
            icon: i,
        });
    };
