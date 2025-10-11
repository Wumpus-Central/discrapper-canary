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
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: h,
                onClick: v,
                icon: S,
                prioritizedCurrency: O,
                onClickAnalytics: x,
            } = e,
            y = (0, d.Nd)(),
            j = null == y ? void 0 : y.tab,
            k = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
            T = c.ZP.canUseCollectibles(k),
            L = (0, u.sp)(),
            { isPurchased: I, isPartiallyOwnedBundle: B } = (0, f.L)(t),
            A = (0, g.rN)(t),
            N = (0, g.G1)(t),
            P = (0, g.ne)({
                product: t,
                isPartiallyOwnedBundle: B,
                isPurchased: I,
            }),
            R = (0, _.Iw)(t),
            { isOrbExclusive: Z } = (0, m.Ip)({
                product: t,
                isPremiumUser: T,
                prioritizedCurrency: O,
                hasDiscountOffer: null != R,
            }),
            w = (0, C.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, x);
        return N || l.tq || Z || !P || j === b.AW.ORBS
            ? null
            : A || null != v || null != S
              ? (0, r.jsx)(s.hU, {
                    variant: "primary",
                    "aria-label": E.intl.string(E.t.SKNnqq),
                    icon: null != S ? S : s.tEF,
                    onClick: (e) => {
                        e.stopPropagation(), null != v ? v(t.skuId) : w(e);
                    },
                })
              : (0, r.jsx)(u.k0, {
                    newValue: { pageCategory: j === b.AW.HOME || null == L ? void 0 : L.pageCategory },
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
        let {
                skuId: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: i,
                icon: s,
                prioritizedCurrency: o,
                onClickAnalytics: a,
            } = e,
            c = (0, C.LJ)(t);
        if (null == c) return null;
        let u = (0, h.W)(c, l);
        return (0, r.jsx)(v, {
            product: u,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: i,
            icon: s,
            prioritizedCurrency: o,
            onClickAnalytics: a,
        });
    };
