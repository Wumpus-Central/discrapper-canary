n.d(t, { q: () => g });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
    s = n(622535),
    c = n(481060),
    u = n(597688),
    d = n(297651),
    p = n(794324),
    b = n(388032),
    f = n(806734);
let g = (e) => {
    var t, n, a;
    let g,
        { category: h, subblock: m, badgeText: _, handleTransition: C } = e;
    null != m && (g = null == (t = u.Z.getCategoryByStoreListingId(null == m ? void 0 : m.categoryStoreListingId)) ? void 0 : t.skuId);
    let v = null != (n = null != g ? g : null == h ? void 0 : h.skuId) ? n : '',
        { handleCardVisibilityChange: O } = (0, d.E)(v, 'home', 'marketing featured block'),
        { featuredBlockBanner: x } = (0, p.YG)(h, m),
        S = l.useRef(null),
        E = v === o.T.NAMEPLATE,
        j = E ? b.intl.string(b.t['/Rk1dn']) : null == m ? void 0 : m.bodyText;
    return (0, r.jsx)(s.$, {
        innerRef: S,
        onChange: O,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: f.featuredBlock,
            innerRef: S,
            style: { backgroundImage: 'url('.concat(x, ')') },
            onClick: () => C('shop marketing tile', v),
            children: [
                null != _ &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: _,
                        className: f.featuredBlockBadge
                    }),
                null != j &&
                    (0, r.jsx)(c.X6q, {
                        lineClamp: 4,
                        className: i()(f.featuredBlockBodyText, { [f.featuredBlockNameplate]: E }),
                        style: { color: null != (a = null == m ? void 0 : m.bannerTextColor) ? a : 'white' },
                        variant: 'heading-lg/semibold',
                        children: j
                    }),
                (0, r.jsx)(c.zxk, {
                    className: f.featuredBlockButton,
                    color: c.Ttl.WHITE,
                    onClick: () => {},
                    children: b.intl.string(b.t.jVcuVV)
                })
            ]
        })
    });
};
