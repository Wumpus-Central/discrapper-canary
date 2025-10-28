n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    o = n(399606),
    s = n(481060),
    a = n(594174),
    c = n(74538),
    u = n(884697),
    d = n(724994),
    g = n(786040),
    p = n(445794),
    f = n(956472),
    C = n(388032),
    h = n(944525);
let _ = (e) => {
        let { product: t, badgeOverride: n, className: l, prioritizedCurrency: _ } = e,
            { isPurchased: m, isPartiallyOwnedBundle: b } = (0, d.L)(t),
            v = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
            E = c.ZP.canUseCollectibles(v),
            x = (0, p.Iw)(t),
            { isOrbExclusive: O } = (0, f.Ip)({
                product: t,
                isPremiumUser: E,
                prioritizedCurrency: _,
                hasDiscountOffer: null != x,
            });
        if (n === g.Zh.NONE) return null;
        let S = null;
        return (n === g.Zh.NEW
            ? (S = C.intl.string(C.t.y2b7CA))
            : n === g.Zh.ORBS_EXCLUSIVE
              ? (S = C.intl.string(C.t["0TmQRG"]))
              : n === g.Zh.NEW_COLOR_VARIANT && (S = C.intl.string(C.t.S6kE9h)),
        null == S &&
            (!b && !m && (0, u.Yq)(t.skuId)
                ? (S = C.intl.string(C.t.y2b7CA))
                : O && (S = C.intl.string(C.t["0TmQRG"]))),
        null == S)
            ? null
            : (0, r.jsx)(s.IGR, {
                  text: S,
                  disableColor: !0,
                  className: i()(l, h.productCardBadge),
              });
    },
    m = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i } = e,
            o = (0, g.LJ)(t);
        return null == o
            ? null
            : (0, r.jsx)(_, {
                  product: o,
                  badgeOverride: n,
                  className: l,
                  prioritizedCurrency: i,
              });
    };
