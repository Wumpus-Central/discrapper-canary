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
        let { product: t, selectedVariantIndex: n, cardRef: h, onClick: v, icon: S, prioritizedCurrency: O } = e,
            x = (0, d.Nd)(),
            y = null == x ? void 0 : x.tab,
            j = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
            T = c.ZP.canUseCollectibles(j),
            L = (0, u.sp)(),
            { isPurchased: k, isPartiallyOwnedBundle: I } = (0, f.L)(t),
            B = (0, g.rN)(t),
            N = (0, g.G1)(t),
            P = (0, g.ne)({
                product: t,
                isPartiallyOwnedBundle: I,
                isPurchased: k,
            }),
            A = (0, _.Iw)(t),
            { isOrbExclusive: R } = (0, m.Ip)({
                product: t,
                isPremiumUser: T,
                prioritizedCurrency: O,
                hasDiscountOffer: null != A,
            }),
            Z = (0, C.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
        return N || l.tq || R || !P || y === b.AW.ORBS
            ? null
            : B || null != v || null != S
              ? (0, r.jsx)(s.hU, {
                    variant: "primary",
                    "aria-label": E.intl.string(E.t.SKNnqq),
                    icon: null != S ? S : s.tEF,
                    onClick: (e) => {
                        e.stopPropagation(), null != v ? v(t.skuId) : Z(e);
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
    S = (e) => {
        let { skuId: t, cardRef: n, selectedVariantIndex: l, onClick: i, icon: s, prioritizedCurrency: o } = e,
            a = (0, C.LJ)(t);
        if (null == a) return null;
        let c = (0, h.W)(a, l);
        return (0, r.jsx)(v, {
            product: c,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: i,
            icon: s,
            prioritizedCurrency: o,
        });
    };
