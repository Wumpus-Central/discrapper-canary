n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    o = n(399606),
    s = n(481060),
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
            { isPurchased: E, isPartiallyOwnedBundle: S } = (0, g.L)(t),
            v = (0, o.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)),
            O = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
            x = c.ZP.canUseCollectibles(O),
            y = (0, p.Iw)(t),
            { isOrbExclusive: T } = (0, C.Ip)({
                product: t,
                isPremiumUser: x,
                prioritizedCurrency: b,
                hasDiscountOffer: null != y,
            }),
            j = (0, d.Yq)(t.skuId),
            L = (null == v ? void 0 : v.skuId) === h.bu && (0, d.WW)(t.skuId);
        if (n === f.Zh.NONE) return null;
        let k = null;
        return (n === f.Zh.NEW
            ? (k = _.intl.string(_.t.y2b7CA))
            : n === f.Zh.ORBS_EXCLUSIVE
              ? (k = _.intl.string(_.t["0TmQRE"]))
              : n === f.Zh.NEW_COLOR_VARIANT && (k = _.intl.string(_.t.S6kE9v)),
        null == k &&
            (S || E || !j
                ? T
                    ? (k = _.intl.string(_.t["0TmQRE"]))
                    : L && (k = _.intl.string(_.t.S6kE9v))
                : (k = _.intl.string(_.t.y2b7CA))),
        null == k)
            ? null
            : (0, r.jsx)(s.IGR, {
                  text: k,
                  disableColor: !0,
                  className: i()(l, m.productCardBadge),
              });
    },
    E = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i } = e,
            o = (0, f.LJ)(t);
        return null == o
            ? null
            : (0, r.jsx)(b, {
                  product: o,
                  badgeOverride: n,
                  className: l,
                  prioritizedCurrency: i,
              });
    };
