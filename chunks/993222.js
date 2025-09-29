n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var l = n(399606),
    i = n(481060),
    a = n(594174),
    s = n(74538),
    o = n(597688),
    c = n(994587),
    u = n(884697),
    d = n(724994),
    g = n(445794),
    p = n(956472),
    f = n(215023),
    h = n(388032),
    _ = n(809854);
let C = (e) => {
    let { product: t } = e,
        n = (0, c.Nd)(),
        C = null == n ? void 0 : n.tab,
        { isPurchased: m, isPartiallyOwnedBundle: b } = (0, d.L)(t),
        E = (0, l.e7)([o.Z], () => o.Z.getCategoryForProduct(t.skuId)),
        S = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        v = s.ZP.canUseCollectibles(S),
        x = (0, g.Iw)(t),
        { isOrbExclusive: O } = (0, p.Ip)({
            product: t,
            isPremiumUser: v,
            tab: C,
            hasDiscountOffer: null != x,
        }),
        T = (0, u.Yq)(t.skuId),
        y = (null == E ? void 0 : E.skuId) === f.bu && (0, u.WW)(t.skuId);
    return b || m || !T
        ? O
            ? (0, r.jsx)(i.IGR, {
                  text: h.intl.string(h.t["0TmQRE"]),
                  disableColor: !0,
                  className: _.productCardBadge,
              })
            : y
              ? (0, r.jsx)(i.IGR, {
                    text: h.intl.string(h.t.S6kE9v),
                    disableColor: !0,
                    className: _.productCardBadge,
                })
              : null
        : (0, r.jsx)(i.IGR, {
              text: h.intl.string(h.t.y2b7CA),
              disableColor: !0,
              className: _.productCardBadge,
          });
};
