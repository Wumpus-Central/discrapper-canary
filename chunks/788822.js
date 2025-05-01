n.d(t, { q: () => g });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
    s = n(622535),
    c = n(481060),
    u = n(597688),
    d = n(297651),
    b = n(794324),
    p = n(388032),
    f = n(806734);
let g = (e) => {
    var t, n, a;
    let g,
        { category: h, subblock: m, badgeText: _, handleTransition: C } = e;
    null != m && (g = null == (t = u.Z.getCategoryByStoreListingId(null == m ? void 0 : m.categoryStoreListingId)) ? void 0 : t.skuId);
    let v = null != (n = null != g ? g : null == h ? void 0 : h.skuId) ? n : '',
        { handleCardVisibilityChange: x } = (0, d.E)(v, 'home', 'marketing featured block'),
        { featuredBlockBanner: O } = (0, b.YG)(h, m),
        j = l.useRef(null),
        y = v === o.T.NAMEPLATE,
        S = y ? p.intl.string(p.t['/Rk1dn']) : null == m ? void 0 : m.bodyText;
    return (0, r.jsx)(s.$, {
        innerRef: j,
        onChange: x,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: f.featuredBlock,
            innerRef: j,
            style: { backgroundImage: 'url('.concat(O, ')') },
            onClick: () => C('shop marketing tile', v),
            children: [
                null != _ &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: _,
                        className: f.featuredBlockBadge
                    }),
                null != S &&
                    (0, r.jsx)(c.X6q, {
                        lineClamp: 4,
                        className: i()(f.featuredBlockBodyText, { [f.featuredBlockNameplate]: y }),
                        style: { color: null != (a = null == m ? void 0 : m.bannerTextColor) ? a : 'white' },
                        variant: 'heading-lg/semibold',
                        children: S
                    }),
                (0, r.jsx)(c.zxk, {
                    className: f.featuredBlockButton,
                    color: c.Ttl.WHITE,
                    onClick: () => {},
                    children: p.intl.string(p.t.jVcuVV)
                })
            ]
        })
    });
};
