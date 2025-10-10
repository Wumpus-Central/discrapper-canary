n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var l = n(399606),
    s = n(481060),
    a = n(594174),
    i = n(74538),
    o = n(597688),
    c = n(994587),
    u = n(884697),
    d = n(724994),
    g = n(786040),
    p = n(445794),
    f = n(956472),
    C = n(215023),
    h = n(388032),
    _ = n(944525);
let m = (e) => {
        let { product: t } = e,
            n = (0, c.Nd)(),
            g = null == n ? void 0 : n.tab,
            { isPurchased: m, isPartiallyOwnedBundle: b } = (0, d.L)(t),
            E = (0, l.e7)([o.Z], () => o.Z.getCategoryForProduct(t.skuId)),
            S = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
            v = i.ZP.canUseCollectibles(S),
            x = (0, p.Iw)(t),
            { isOrbExclusive: O } = (0, f.Ip)({
                product: t,
                isPremiumUser: v,
                tab: g,
                hasDiscountOffer: null != x,
            }),
            y = (0, u.Yq)(t.skuId),
            T = (null == E ? void 0 : E.skuId) === C.bu && (0, u.WW)(t.skuId);
        return b || m || !y
            ? O
                ? (0, r.jsx)(s.IGR, {
                      text: h.intl.string(h.t["0TmQRE"]),
                      disableColor: !0,
                      className: _.productCardBadge,
                  })
                : T
                  ? (0, r.jsx)(s.IGR, {
                        text: h.intl.string(h.t.S6kE9v),
                        disableColor: !0,
                        className: _.productCardBadge,
                    })
                  : null
            : (0, r.jsx)(s.IGR, {
                  text: h.intl.string(h.t.y2b7CA),
                  disableColor: !0,
                  className: _.productCardBadge,
              });
    },
    b = (e) => {
        let { skuId: t } = e,
            n = (0, g.LJ)(t);
        return null == n ? null : (0, r.jsx)(m, { product: n });
    };
