n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var l = n(873546),
    i = n(399606),
    o = n(481060),
    s = n(100527),
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
let S = (e) => {
        let { product: t, selectedVariantIndex: n, cardRef: h, onClick: S, icon: v, prioritizedCurrency: O } = e,
            x = (0, d.Nd)(),
            y = null == x ? void 0 : x.tab,
            T = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
            j = c.ZP.canUseCollectibles(T),
            L = (0, u.sp)(),
            { isPurchased: k, isPartiallyOwnedBundle: I } = (0, f.L)(t),
            B = (0, g.rN)(t),
            N = (0, g.G1)(t),
            A = (0, g.ne)({
                product: t,
                isPartiallyOwnedBundle: I,
                isPurchased: k,
            }),
            P = (0, _.Iw)(t),
            { isOrbExclusive: R } = (0, m.Ip)({
                product: t,
                isPremiumUser: j,
                prioritizedCurrency: O,
                hasDiscountOffer: null != P,
            }),
            Z = (0, C.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
        return N || l.tq || R || !A || y === b.AW.ORBS
            ? null
            : B || null != S || null != v
              ? (0, r.jsx)(o.hU, {
                    variant: "primary",
                    "aria-label": E.intl.string(E.t.SKNnqq),
                    icon: null != v ? v : o.tEF,
                    onClick: (e) => {
                        e.stopPropagation(), null != S ? S(t.skuId) : Z(e);
                    },
                })
              : (0, r.jsx)(u.k0, {
                    newValue: { pageCategory: y === b.AW.HOME || null == L ? void 0 : L.pageCategory },
                    children: (0, r.jsx)(p.Z, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: h,
                        tooltipDelay: 250,
                    }),
                });
    },
    v = (e) => {
        let { skuId: t, cardRef: n, selectedVariantIndex: l, onClick: i, icon: o, prioritizedCurrency: s } = e,
            a = (0, C.LJ)(t);
        if (null == a) return null;
        let c = (0, h.W)(a, l);
        return (0, r.jsx)(S, {
            product: c,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: i,
            icon: o,
            prioritizedCurrency: s,
        });
    };
