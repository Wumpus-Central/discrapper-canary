n.d(t, { q: () => b });
var r = n(200651),
    l = n(192379),
    a = n(622535),
    i = n(481060),
    o = n(597688),
    s = n(297651),
    c = n(794324),
    u = n(388032),
    d = n(379890);
let b = (e) => {
    var t, n, b;
    let p,
        { category: f, subblock: g, badgeText: h, handleTransition: m } = e;
    null != g && (p = null == (t = o.Z.getCategoryByStoreListingId(null == g ? void 0 : g.categoryStoreListingId)) ? void 0 : t.skuId);
    let _ = null != (n = null != p ? p : null == f ? void 0 : f.skuId) ? n : '',
        { handleCardVisibilityChange: C } = (0, s.E)(_, 'home', 'marketing featured block'),
        { featuredBlockBanner: v } = (0, c.YG)(f, g),
        x = l.useRef(null);
    return (0, r.jsx)(a.$, {
        innerRef: x,
        onChange: C,
        threshold: 0,
        children: (0, r.jsxs)(i.P3F, {
            className: d.featuredBlock,
            innerRef: x,
            style: { backgroundImage: 'url('.concat(v, ')') },
            onClick: () => m('shop marketing tile', _),
            children: [
                null != h &&
                    (0, r.jsx)(i.IGR, {
                        disableColor: !0,
                        text: h,
                        className: d.featuredBlockBadge
                    }),
                (null == g ? void 0 : g.bodyText) != null &&
                    (0, r.jsx)(i.X6q, {
                        lineClamp: 4,
                        className: d.featuredBlockBodyText,
                        style: { color: null != (b = g.bannerTextColor) ? b : 'white' },
                        variant: 'heading-lg/semibold',
                        children: g.bodyText
                    }),
                (0, r.jsx)(i.zxk, {
                    className: d.featuredBlockButton,
                    color: i.Ttl.WHITE,
                    onClick: () => {},
                    children: u.NW.string(u.t.jVcuVV)
                })
            ]
        })
    });
};
