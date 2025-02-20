r.d(t, { q: () => h });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    a = r(622535),
    o = r(481060),
    s = r(597688),
    c = r(884697),
    d = r(297651),
    u = r(215023),
    p = r(388032),
    f = r(974492);
let h = (e) => {
    var t, r, l, h, C;
    let m,
        { category: b, subblock: g, badgeText: v, handleTransition: x } = e;
    null != g && (m = null === (t = s.Z.getCategoryByStoreListingId(null == g ? void 0 : g.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let _ = null !== (r = null != m ? m : null == b ? void 0 : b.skuId) && void 0 !== r ? r : '',
        { handleCardVisibilityChange: j } = (0, d.E)(_, 'home', 'marketing featured block'),
        y =
            null !== (h = null == g ? void 0 : g.bannerUrl) && void 0 !== h
                ? h
                : (0, c.uV)(null !== (l = null == b ? void 0 : b.featuredBlock) && void 0 !== l ? l : '', {
                      size: u.J0,
                      format: 'png'
                  });
    return (0, n.jsx)(a.$, {
        onChange: j,
        threshold: 0,
        children: (0, n.jsxs)(o.P3F, {
            className: i()(f.featuredBlock),
            style: { backgroundImage: 'url('.concat(y, ')') },
            onClick: () => x('shop marketing tile', _),
            children: [
                null != v &&
                    (0, n.jsx)(o.IGR, {
                        disableColor: !0,
                        text: v,
                        className: f.featuredBlockBadge
                    }),
                (null == g ? void 0 : g.bodyText) != null &&
                    (0, n.jsx)(o.X6q, {
                        lineClamp: 4,
                        className: f.featuredBlockBodyText,
                        style: { color: null !== (C = g.bannerTextColor) && void 0 !== C ? C : 'white' },
                        variant: 'heading-lg/semibold',
                        children: g.bodyText
                    }),
                (0, n.jsx)(o.zxk, {
                    className: f.featuredBlockButton,
                    color: o.Ttl.WHITE,
                    onClick: () => {},
                    children: p.NW.string(p.t.jVcuVV)
                })
            ]
        })
    });
};
