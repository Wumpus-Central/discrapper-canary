r.d(t, { q: () => f });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    o = r(622535),
    a = r(481060),
    s = r(597688),
    c = r(297651),
    u = r(794324),
    d = r(388032),
    p = r(39532);
let f = (e) => {
    var t, r, l;
    let f,
        { category: b, subblock: h, badgeText: m, handleTransition: C } = e;
    null != h && (f = null === (t = s.Z.getCategoryByStoreListingId(null == h ? void 0 : h.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let g = null !== (r = null != f ? f : null == b ? void 0 : b.skuId) && void 0 !== r ? r : '',
        { handleCardVisibilityChange: v } = (0, c.E)(g, 'home', 'marketing featured block'),
        { featuredBlockBanner: x } = (0, u.Y)(b, h);
    return (0, n.jsx)(o.$, {
        onChange: v,
        threshold: 0,
        children: (0, n.jsxs)(a.P3F, {
            className: i()(p.featuredBlock),
            style: { backgroundImage: 'url('.concat(x, ')') },
            onClick: () => C('shop marketing tile', g),
            children: [
                null != m &&
                    (0, n.jsx)(a.IGR, {
                        disableColor: !0,
                        text: m,
                        className: p.featuredBlockBadge
                    }),
                (null == h ? void 0 : h.bodyText) != null &&
                    (0, n.jsx)(a.X6q, {
                        lineClamp: 4,
                        className: p.featuredBlockBodyText,
                        style: { color: null !== (l = h.bannerTextColor) && void 0 !== l ? l : 'white' },
                        variant: 'heading-lg/semibold',
                        children: h.bodyText
                    }),
                (0, n.jsx)(a.zxk, {
                    className: p.featuredBlockButton,
                    color: a.Ttl.WHITE,
                    onClick: () => {},
                    children: d.NW.string(d.t.jVcuVV)
                })
            ]
        })
    });
};
