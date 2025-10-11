n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    s = n(399606),
    o = n(481060),
    a = n(594174),
    c = n(74538),
    u = n(597688),
    d = n(884697),
    g = n(724994),
    f = n(786040),
    p = n(445794),
    C = n(956472),
    h = n(215023),
    _ = n(388032),
    m = n(944525);
let b = (e) => {
        let { product: t, badgeOverride: n, className: l, prioritizedCurrency: b } = e,
            { isPurchased: E, isPartiallyOwnedBundle: v } = (0, g.L)(t),
            S = (0, s.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)),
            O = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
            x = c.ZP.canUseCollectibles(O),
            y = (0, p.Iw)(t),
            { isOrbExclusive: j } = (0, C.Ip)({
                product: t,
                isPremiumUser: x,
                prioritizedCurrency: b,
                hasDiscountOffer: null != y,
            }),
            T = (0, d.Yq)(t.skuId),
            L = (null == S ? void 0 : S.skuId) === h.bu && (0, d.WW)(t.skuId);
        if (n === f.Zh.NONE) return null;
        let k = null;
        return (n === f.Zh.NEW
            ? (k = _.intl.string(_.t.y2b7CA))
            : n === f.Zh.ORBS_EXCLUSIVE
              ? (k = _.intl.string(_.t["0TmQRE"]))
              : n === f.Zh.NEW_COLOR_VARIANT && (k = _.intl.string(_.t.S6kE9v)),
        null == k &&
            (v || E || !T
                ? j
                    ? (k = _.intl.string(_.t["0TmQRE"]))
                    : L && (k = _.intl.string(_.t.S6kE9v))
                : (k = _.intl.string(_.t.y2b7CA))),
        null == k)
            ? null
            : (0, r.jsx)(o.IGR, {
                  text: k,
                  disableColor: !0,
                  className: i()(l, m.productCardBadge),
              });
    },
    E = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i } = e,
            s = (0, f.LJ)(t);
        return null == s
            ? null
            : (0, r.jsx)(b, {
                  product: s,
                  badgeOverride: n,
                  className: l,
                  prioritizedCurrency: i,
              });
    };
