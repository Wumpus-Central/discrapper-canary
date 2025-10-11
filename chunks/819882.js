n.d(t, { Z: () => S });
var r = n(951288);
n(647438);
var l = n(873546),
    i = n(399606),
    s = n(481060),
    o = n(100527),
    a = n(594174),
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
            O = (0, d.Nd)(),
            x = null == O ? void 0 : O.tab,
            y = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
            T = c.ZP.canUseCollectibles(y),
            j = (0, u.sp)(),
            { isPurchased: L, isPartiallyOwnedBundle: k } = (0, f.L)(t),
            I = (0, g.rN)(t),
            B = (0, g.G1)(t),
            N = (0, g.ne)({
                product: t,
                isPartiallyOwnedBundle: k,
                isPurchased: L,
            }),
            P = (0, _.Iw)(t),
            { isOrbExclusive: A } = (0, m.Ip)({
                product: t,
                isPremiumUser: T,
                tab: x,
                hasDiscountOffer: null != P,
            }),
            R = (0, C.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
        return B || l.tq || A || !N || x === b.AW.ORBS
            ? null
            : I || null != v || null != S
              ? (0, r.jsx)(s.hU, {
                    variant: "primary",
                    "aria-label": E.intl.string(E.t.SKNnqq),
                    icon: null != S ? S : s.tEF,
                    onClick: (e) => {
                        e.stopPropagation(), null != v ? v(t.skuId) : R(e);
                    },
                })
              : (0, r.jsx)(u.k0, {
                    newValue: { pageCategory: x === b.AW.HOME || null == j ? void 0 : j.pageCategory },
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
        let { skuId: t, cardRef: n, selectedVariantIndex: l, onClick: i, icon: s } = e,
            o = (0, C.LJ)(t);
        if (null == o) return null;
        let a = (0, h.W)(o, l);
        return (0, r.jsx)(v, {
            product: a,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: i,
            icon: s,
        });
    };
