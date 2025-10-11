n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    s = n(399606),
    o = n(481060),
    a = n(594174),
    c = n(74538),
    u = n(597688),
    d = n(994587),
    g = n(884697),
    f = n(724994),
    p = n(786040),
    C = n(445794),
    h = n(956472),
    _ = n(215023),
    m = n(388032),
    b = n(944525);
let E = (e) => {
        let { product: t, badgeOverride: n, className: l } = e,
            E = (0, d.Nd)(),
            v = null == E ? void 0 : E.tab,
            { isPurchased: S, isPartiallyOwnedBundle: O } = (0, f.L)(t),
            x = (0, s.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)),
            y = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
            T = c.ZP.canUseCollectibles(y),
            j = (0, C.Iw)(t),
            { isOrbExclusive: L } = (0, h.Ip)({
                product: t,
                isPremiumUser: T,
                tab: v,
                hasDiscountOffer: null != j,
            }),
            k = (0, g.Yq)(t.skuId),
            I = (null == x ? void 0 : x.skuId) === _.bu && (0, g.WW)(t.skuId);
        if (n === p.Zh.NONE) return null;
        let B = null;
        return (n === p.Zh.NEW
            ? (B = m.intl.string(m.t.y2b7CA))
            : n === p.Zh.ORBS_EXCLUSIVE
              ? (B = m.intl.string(m.t["0TmQRE"]))
              : n === p.Zh.NEW_COLOR_VARIANT && (B = m.intl.string(m.t.S6kE9v)),
        null == B &&
            (O || S || !k
                ? L
                    ? (B = m.intl.string(m.t["0TmQRE"]))
                    : I && (B = m.intl.string(m.t.S6kE9v))
                : (B = m.intl.string(m.t.y2b7CA))),
        null == B)
            ? null
            : (0, r.jsx)(o.IGR, {
                  text: B,
                  disableColor: !0,
                  className: i()(l, b.productCardBadge),
              });
    },
    v = (e) => {
        let { skuId: t, badgeOverride: n, className: l } = e,
            i = (0, p.LJ)(t);
        return null == i
            ? null
            : (0, r.jsx)(E, {
                  product: i,
                  badgeOverride: n,
                  className: l,
              });
    };
