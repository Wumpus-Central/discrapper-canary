n.d(t, { q: () => g });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(180650),
    s = n(622535),
    c = n(481060),
    u = n(597688),
    d = n(297651),
    f = n(794324),
    b = n(388032),
    p = n(806734);
let g = (e) => {
    var t, n, i;
    let g,
        { category: h, subblock: m, badgeText: _, handleTransition: C } = e;
    null != m && (g = null == (t = u.Z.getCategoryByStoreListingId(null == m ? void 0 : m.categoryStoreListingId)) ? void 0 : t.skuId);
    let v = null != (n = null != g ? g : null == h ? void 0 : h.skuId) ? n : '',
        { handleCardVisibilityChange: O } = (0, d.E)(v, 'home', 'marketing featured block'),
        { featuredBlockBanner: x } = (0, f.YG)(h, m),
        S = l.useRef(null),
        j = v === o.T.NAMEPLATE,
        y = j ? b.intl.string(b.t['/Rk1dn']) : null == m ? void 0 : m.bodyText;
    return (0, r.jsx)(s.$, {
        innerRef: S,
        onChange: O,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: p.featuredBlock,
            innerRef: S,
            style: { backgroundImage: 'url('.concat(x, ')') },
            onClick: () => C('shop marketing tile', v),
            children: [
                null != _ &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: _,
                        className: p.featuredBlockBadge
                    }),
                null != y &&
                    (0, r.jsx)(c.X6q, {
                        lineClamp: 4,
                        className: a()(p.featuredBlockBodyText, { [p.featuredBlockNameplate]: j }),
                        style: { color: null != (i = null == m ? void 0 : m.bannerTextColor) ? i : 'white' },
                        variant: 'heading-lg/semibold',
                        children: y
                    }),
                (0, r.jsx)(c.zxk, {
                    className: p.featuredBlockButton,
                    color: c.Ttl.WHITE,
                    onClick: () => {},
                    children: b.intl.string(b.t.jVcuVV)
                })
            ]
        })
    });
};
