n.d(t, { q: () => g });
var r = n(200651),
    l = n(192379),
    a = n(622535),
    o = n(481060),
    s = n(597688),
    i = n(297651),
    c = n(794324),
    d = n(388032),
    u = n(39532);
let g = (e) => {
    var t, n, g;
    let f,
        { category: h, subblock: m, badgeText: p, handleTransition: b } = e;
    null != m && (f = null === (t = s.Z.getCategoryByStoreListingId(null == m ? void 0 : m.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let C = null !== (n = null != f ? f : null == h ? void 0 : h.skuId) && void 0 !== n ? n : '',
        { handleCardVisibilityChange: _ } = (0, i.E)(C, 'home', 'marketing featured block'),
        { featuredBlockBanner: v } = (0, c.YG)(h, m),
        k = l.useRef(null);
    return (0, r.jsx)(a.$, {
        innerRef: k,
        onChange: _,
        threshold: 0,
        children: (0, r.jsxs)(o.P3F, {
            className: u.featuredBlock,
            innerRef: k,
            style: { backgroundImage: 'url('.concat(v, ')') },
            onClick: () => b('shop marketing tile', C),
            children: [
                null != p &&
                    (0, r.jsx)(o.IGR, {
                        disableColor: !0,
                        text: p,
                        className: u.featuredBlockBadge
                    }),
                (null == m ? void 0 : m.bodyText) != null &&
                    (0, r.jsx)(o.X6q, {
                        lineClamp: 4,
                        className: u.featuredBlockBodyText,
                        style: { color: null !== (g = m.bannerTextColor) && void 0 !== g ? g : 'white' },
                        variant: 'heading-lg/semibold',
                        children: m.bodyText
                    }),
                (0, r.jsx)(o.zxk, {
                    className: u.featuredBlockButton,
                    color: o.Ttl.WHITE,
                    onClick: () => {},
                    children: d.NW.string(d.t.jVcuVV)
                })
            ]
        })
    });
};
