r.d(t, { q: () => m });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    o = r(622535),
    a = r(481060),
    s = r(597688),
    c = r(884697),
    d = r(297651),
    u = r(619899),
    p = r(281598),
    f = r(215023),
    b = r(388032),
    h = r(39532);
let m = (e) => {
    var t, r, l, m, C, g, v;
    let x,
        { category: j, subblock: _, badgeText: y, handleTransition: O } = e;
    null != _ && (x = null === (r = s.Z.getCategoryByStoreListingId(null == _ ? void 0 : _.categoryStoreListingId)) || void 0 === r ? void 0 : r.skuId);
    let k = null !== (l = null != x ? x : null == j ? void 0 : j.skuId) && void 0 !== l ? l : '',
        { handleCardVisibilityChange: P } = (0, d.E)(k, 'home', 'marketing featured block'),
        { getPreviewableAssetSrc: S } = (0, u.N)(),
        w =
            null !== (g = null !== (m = null === (t = S(p.Fr.FEATURED_BLOCK)) || void 0 === t ? void 0 : t.src) && void 0 !== m ? m : null == _ ? void 0 : _.bannerUrl) && void 0 !== g
                ? g
                : (0, c.uV)(null !== (C = null == j ? void 0 : j.featuredBlock) && void 0 !== C ? C : '', {
                      size: f.J0,
                      format: 'png'
                  });
    return (0, n.jsx)(o.$, {
        onChange: P,
        threshold: 0,
        children: (0, n.jsxs)(a.P3F, {
            className: i()(h.featuredBlock),
            style: { backgroundImage: 'url('.concat(w, ')') },
            onClick: () => O('shop marketing tile', k),
            children: [
                null != y &&
                    (0, n.jsx)(a.IGR, {
                        disableColor: !0,
                        text: y,
                        className: h.featuredBlockBadge
                    }),
                (null == _ ? void 0 : _.bodyText) != null &&
                    (0, n.jsx)(a.X6q, {
                        lineClamp: 4,
                        className: h.featuredBlockBodyText,
                        style: { color: null !== (v = _.bannerTextColor) && void 0 !== v ? v : 'white' },
                        variant: 'heading-lg/semibold',
                        children: _.bodyText
                    }),
                (0, n.jsx)(a.zxk, {
                    className: h.featuredBlockButton,
                    color: a.Ttl.WHITE,
                    onClick: () => {},
                    children: b.NW.string(b.t.jVcuVV)
                })
            ]
        })
    });
};
