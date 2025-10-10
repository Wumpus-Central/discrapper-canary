n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var l = n(120356),
    s = n.n(l),
    i = n(399606),
    a = n(481060),
    o = n(594174),
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
            { isPurchased: S, isPartiallyOwnedBundle: x } = (0, f.L)(t),
            O = (0, i.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)),
            y = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            T = c.ZP.canUseCollectibles(y),
            j = (0, C.Iw)(t),
            { isOrbExclusive: k } = (0, h.Ip)({
                product: t,
                isPremiumUser: T,
                tab: v,
                hasDiscountOffer: null != j,
            }),
            L = (0, g.Yq)(t.skuId),
            I = (null == O ? void 0 : O.skuId) === _.bu && (0, g.WW)(t.skuId);
        if (n === p.Zh.NONE) return null;
        let P = null;
        return (n === p.Zh.NEW
            ? (P = m.intl.string(m.t.y2b7CA))
            : n === p.Zh.ORBS_EXCLUSIVE
              ? (P = m.intl.string(m.t["0TmQRE"]))
              : n === p.Zh.NEW_COLOR_VARIANT && (P = m.intl.string(m.t.S6kE9v)),
        null == P &&
            (x || S || !L
                ? k
                    ? (P = m.intl.string(m.t["0TmQRE"]))
                    : I && (P = m.intl.string(m.t.S6kE9v))
                : (P = m.intl.string(m.t.y2b7CA))),
        null == P)
            ? null
            : (0, r.jsx)(a.IGR, {
                  text: P,
                  disableColor: !0,
                  className: s()(l, b.productCardBadge),
              });
    },
    v = (e) => {
        let { skuId: t, badgeOverride: n, className: l } = e,
            s = (0, p.LJ)(t);
        return null == s
            ? null
            : (0, r.jsx)(E, {
                  product: s,
                  badgeOverride: n,
                  className: l,
              });
    };
