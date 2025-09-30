n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var l = n(873546),
    i = n(399606),
    a = n(481060),
    s = n(100527),
    o = n(594174),
    c = n(74538),
    u = n(381585),
    d = n(994587),
    g = n(884697),
    p = n(724994),
    f = n(680942),
    h = n(786040),
    _ = n(445794),
    C = n(956472),
    m = n(215023),
    b = n(388032);
let E = (e) => {
    let { product: t, selectedVariantIndex: n, cardRef: E } = e,
        S = (0, d.Nd)(),
        v = null == S ? void 0 : S.tab,
        x = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        O = c.ZP.canUseCollectibles(x),
        T = (0, u.sp)(),
        { isPurchased: y, isPartiallyOwnedBundle: L } = (0, p.L)(t),
        j = (0, g.rN)(t),
        k = (0, g.G1)(t),
        I = (0, g.ne)({
            product: t,
            isPartiallyOwnedBundle: L,
            isPurchased: y,
        }),
        P = (0, _.Iw)(t),
        { isOrbExclusive: N } = (0, C.Ip)({
            product: t,
            isPremiumUser: O,
            tab: v,
            hasDiscountOffer: null != P,
        }),
        B = (0, h.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
    return k || l.tq || N || !I || v === m.AW.ORBS
        ? null
        : j
          ? (0, r.jsx)(a.hU, {
                variant: "primary",
                "aria-label": b.intl.string(b.t.SKNnqq),
                icon: a.tEF,
                onClick: (e) => {
                    e.stopPropagation(), B(e);
                },
            })
          : (0, r.jsx)(u.k0, {
                newValue: { pageCategory: v === m.AW.HOME || null == T ? void 0 : T.pageCategory },
                children: (0, r.jsx)(f.Z, {
                    primary: !0,
                    product: t,
                    selectedVariantIndex: n,
                    returnRef: E,
                    tooltipDelay: 250,
                }),
            });
};
