n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var l = n(873546),
    a = n(399606),
    i = n(481060),
    s = n(100527),
    o = n(594174),
    c = n(74538),
    u = n(381585),
    d = n(994587),
    g = n(884697),
    p = n(724994),
    f = n(680942),
    C = n(786040),
    _ = n(445794),
    h = n(956472),
    m = n(215023),
    b = n(388032);
let E = (e) => {
    let { product: t, selectedVariantIndex: n, cardRef: E } = e,
        v = (0, d.Nd)(),
        S = null == v ? void 0 : v.tab,
        x = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
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
        { isOrbExclusive: N } = (0, h.Ip)({
            product: t,
            isPremiumUser: O,
            tab: S,
            hasDiscountOffer: null != P,
        }),
        A = (0, C.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
    return k || l.tq || N || !I || S === m.AW.ORBS
        ? null
        : j
          ? (0, r.jsx)(i.hU, {
                variant: "primary",
                "aria-label": b.intl.string(b.t.SKNnqq),
                icon: i.tEF,
                onClick: (e) => {
                    e.stopPropagation(), A(e);
                },
            })
          : (0, r.jsx)(u.k0, {
                newValue: { pageCategory: S === m.AW.HOME || null == T ? void 0 : T.pageCategory },
                children: (0, r.jsx)(f.Z, {
                    primary: !0,
                    product: t,
                    selectedVariantIndex: n,
                    returnRef: E,
                    tooltipDelay: 250,
                }),
            });
};
