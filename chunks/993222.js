n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var l = n(180650),
    i = n(399606),
    a = n(481060),
    s = n(594174),
    o = n(74538),
    c = n(597688),
    u = n(994587),
    d = n(884697),
    g = n(724994),
    p = n(445794),
    f = n(956472),
    h = n(388032),
    C = n(944525);
let _ = (e) => {
    let { product: t } = e,
        n = (0, u.Nd)(),
        _ = null == n ? void 0 : n.tab,
        { isPurchased: m, isPartiallyOwnedBundle: b } = (0, g.L)(t),
        E = (0, i.e7)([c.Z], () => c.Z.getCategoryForProduct(t.skuId)),
        S = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        v = o.ZP.canUseCollectibles(S),
        x = (0, p.Iw)(t),
        { isOrbExclusive: O } = (0, f.Ip)({
            product: t,
            isPremiumUser: v,
            tab: _,
            hasDiscountOffer: null != x,
        }),
        T = (0, d.Yq)(t.skuId),
        y = (null == E ? void 0 : E.skuId) === l.T.ANIME_V3 && (0, d.WW)(t.skuId);
    return b || m || !T
        ? O
            ? (0, r.jsx)(a.IGR, {
                  text: h.intl.string(h.t["0TmQRE"]),
                  disableColor: !0,
                  className: C.productCardBadge,
              })
            : y
              ? (0, r.jsx)(a.IGR, {
                    text: h.intl.string(h.t.S6kE9v),
                    disableColor: !0,
                    className: C.productCardBadge,
                })
              : null
        : (0, r.jsx)(a.IGR, {
              text: h.intl.string(h.t.y2b7CA),
              disableColor: !0,
              className: C.productCardBadge,
          });
};
