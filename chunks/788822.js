n.d(t, { q: () => m });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(622535),
    s = n(481060),
    o = n(597688),
    d = n(884697),
    c = n(297651),
    u = n(215023),
    C = n(388032),
    h = n(472739);
let m = (e) => {
    var t, n, r, m, p;
    let g,
        { category: f, subblock: x, badgeText: b, handleTransition: v } = e;
    null != x && (g = null === (t = o.Z.getCategoryByStoreListingId(null == x ? void 0 : x.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let _ = null !== (n = null != g ? g : null == f ? void 0 : f.skuId) && void 0 !== n ? n : '',
        { handleCardVisibilityChange: j } = (0, c.E)(_, 'home', 'marketing featured block'),
        k =
            null !== (m = null == x ? void 0 : x.bannerUrl) && void 0 !== m
                ? m
                : (0, d.uV)(null !== (r = null == f ? void 0 : f.featuredBlock) && void 0 !== r ? r : '', {
                      size: u.J0,
                      format: 'png'
                  });
    return (0, l.jsx)(a.$, {
        onChange: j,
        threshold: 0,
        children: (0, l.jsxs)(s.P3F, {
            className: i()(h.featuredBlock),
            style: { backgroundImage: 'url('.concat(k, ')') },
            onClick: () => v('shop marketing tile', _),
            children: [
                null != b &&
                    (0, l.jsx)(s.IGR, {
                        disableColor: !0,
                        text: b,
                        className: h.featuredBlockBadge
                    }),
                (null == x ? void 0 : x.bodyText) != null &&
                    (0, l.jsx)(s.X6q, {
                        lineClamp: 4,
                        className: h.featuredBlockBodyText,
                        style: { color: null !== (p = x.bannerTextColor) && void 0 !== p ? p : 'white' },
                        variant: 'heading-lg/semibold',
                        children: x.bodyText
                    }),
                (0, l.jsx)(s.zxk, {
                    className: h.featuredBlockButton,
                    color: s.Ttl.WHITE,
                    onClick: () => {},
                    children: C.intl.string(C.t.jVcuVV)
                })
            ]
        })
    });
};
