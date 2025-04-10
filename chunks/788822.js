n.d(t, { q: () => b });
var r = n(200651),
    l = n(192379),
    a = n(622535),
    o = n(481060),
    i = n(597688),
    s = n(297651),
    c = n(794324),
    u = n(388032),
    d = n(806734);
let b = (e) => {
    var t, n, b;
    let p,
        { category: f, subblock: g, badgeText: h, handleTransition: m } = e;
    null != g && (p = null == (t = i.Z.getCategoryByStoreListingId(null == g ? void 0 : g.categoryStoreListingId)) ? void 0 : t.skuId);
    let _ = null != (n = null != p ? p : null == f ? void 0 : f.skuId) ? n : '',
        { handleCardVisibilityChange: v } = (0, s.E)(_, 'home', 'marketing featured block'),
        { featuredBlockBanner: C } = (0, c.YG)(f, g),
        x = l.useRef(null);
    return (0, r.jsx)(a.$, {
        innerRef: x,
        onChange: v,
        threshold: 0,
        children: (0, r.jsxs)(o.P3F, {
            className: d.featuredBlock,
            innerRef: x,
            style: { backgroundImage: 'url('.concat(C, ')') },
            onClick: () => m('shop marketing tile', _),
            children: [
                null != h &&
                    (0, r.jsx)(o.IGR, {
                        disableColor: !0,
                        text: h,
                        className: d.featuredBlockBadge
                    }),
                (null == g ? void 0 : g.bodyText) != null &&
                    (0, r.jsx)(o.X6q, {
                        lineClamp: 4,
                        className: d.featuredBlockBodyText,
                        style: { color: null != (b = g.bannerTextColor) ? b : 'white' },
                        variant: 'heading-lg/semibold',
                        children: g.bodyText
                    }),
                (0, r.jsx)(o.zxk, {
                    className: d.featuredBlockButton,
                    color: o.Ttl.WHITE,
                    onClick: () => {},
                    children: u.NW.string(u.t.jVcuVV)
                })
            ]
        })
    });
};
