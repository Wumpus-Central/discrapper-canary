n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var l = n(873546),
    a = n(399606),
    i = n(481060),
    s = n(100527),
    o = n(594174),
    c = n(74538),
    u = n(381585),
    d = n(884697),
    g = n(724994),
    p = n(680942),
    f = n(786040),
    h = n(445794),
    C = n(956472),
    _ = n(215023),
    m = n(388032);
let b = (e) => {
    let { product: t, selectedVariantIndex: n, config: b, cardRef: E } = e,
        S = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        x = c.ZP.canUseCollectibles(S),
        v = (0, u.sp)(),
        { isPurchased: O, isPartiallyOwnedBundle: T } = (0, g.L)(t),
        y = (0, d.rN)(t),
        L = (0, d.G1)(t),
        j = (0, d.ne)({
            product: t,
            isPartiallyOwnedBundle: T,
            isPurchased: O,
        }),
        k = (0, h.Iw)(t),
        { isOrbExclusive: I } = (0, C.Ip)({
            product: t,
            isPremiumUser: x,
            tab: b.tab,
            hasDiscountOffer: null != k,
        }),
        P = (0, f.J7)(t, b, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
    return L || l.tq || I || !j || b.tab === _.AW.ORBS
        ? null
        : y
          ? (0, r.jsx)(i.hU, {
                variant: "primary",
                "aria-label": m.intl.string(m.t.SKNnqq),
                icon: i.tEF,
                onClick: (e) => {
                    e.stopPropagation(), P(e);
                },
            })
          : (0, r.jsx)(u.k0, {
                newValue: { pageCategory: b.tab === _.AW.HOME || null == v ? void 0 : v.pageCategory },
                children: (0, r.jsx)(p.Z, {
                    primary: !0,
                    product: t,
                    selectedVariantIndex: n,
                    returnRef: E,
                    tooltipDelay: 250,
                }),
            });
};
