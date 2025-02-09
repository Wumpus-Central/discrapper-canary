n.d(t, { q: () => p });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(622535),
    s = n(481060),
    o = n(597688),
    d = n(884697),
    c = n(297651),
    u = n(215023),
    C = n(388032),
    h = n(957726);
let p = (e) => {
    var t, n, l, p, m;
    let g,
        { category: f, subblock: x, badgeText: _, handleTransition: b } = e;
    null != x && (g = null === (t = o.Z.getCategoryByStoreListingId(null == x ? void 0 : x.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let v = null !== (n = null != g ? g : null == f ? void 0 : f.skuId) && void 0 !== n ? n : '',
        { handleCardVisibilityChange: k } = (0, c.E)(v, 'home', 'marketing featured block'),
        j =
            null !== (p = null == x ? void 0 : x.bannerUrl) && void 0 !== p
                ? p
                : (0, d.uV)(null !== (l = null == f ? void 0 : f.featuredBlock) && void 0 !== l ? l : '', {
                      size: u.J0,
                      format: 'png'
                  });
    return (0, r.jsx)(a.$, {
        onChange: k,
        threshold: 0,
        children: (0, r.jsxs)(s.P3F, {
            className: i()(h.featuredBlock),
            style: { backgroundImage: 'url('.concat(j, ')') },
            onClick: () => b('shop marketing tile', v),
            children: [
                null != _ &&
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: _,
                        className: h.featuredBlockBadge
                    }),
                (null == x ? void 0 : x.bodyText) != null &&
                    (0, r.jsx)(s.X6q, {
                        lineClamp: 4,
                        className: h.featuredBlockBodyText,
                        style: { color: null !== (m = x.bannerTextColor) && void 0 !== m ? m : 'white' },
                        variant: 'heading-lg/semibold',
                        children: x.bodyText
                    }),
                (0, r.jsx)(s.zxk, {
                    className: h.featuredBlockButton,
                    color: s.Ttl.WHITE,
                    onClick: () => {},
                    children: C.intl.string(C.t.jVcuVV)
                })
            ]
        })
    });
};
