n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var l = n(180650),
    a = n(399606),
    i = n(481060),
    s = n(594174),
    o = n(74538),
    c = n(597688),
    u = n(884697),
    d = n(724994),
    g = n(445794),
    p = n(956472),
    f = n(388032),
    h = n(944525);
let C = (e) => {
    let { product: t, config: n } = e,
        { isPurchased: C, isPartiallyOwnedBundle: _ } = (0, d.L)(t),
        m = (0, a.e7)([c.Z], () => c.Z.getCategoryForProduct(t.skuId)),
        b = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
        E = o.ZP.canUseCollectibles(b),
        S = (0, g.Iw)(t),
        { isOrbExclusive: x } = (0, p.Ip)({
            product: t,
            isPremiumUser: E,
            tab: n.tab,
            hasDiscountOffer: null != S,
        }),
        v = (0, u.Yq)(t.skuId),
        O = (null == m ? void 0 : m.skuId) === l.T.ANIME_V3 && (0, u.WW)(t.skuId);
    return _ || C || !v
        ? x
            ? (0, r.jsx)(i.IGR, {
                  text: f.intl.string(f.t["0TmQRE"]),
                  disableColor: !0,
                  className: h.productCardBadge,
              })
            : O
              ? (0, r.jsx)(i.IGR, {
                    text: f.intl.string(f.t.S6kE9v),
                    disableColor: !0,
                    className: h.productCardBadge,
                })
              : null
        : (0, r.jsx)(i.IGR, {
              text: f.intl.string(f.t.y2b7CA),
              disableColor: !0,
              className: h.productCardBadge,
          });
};
