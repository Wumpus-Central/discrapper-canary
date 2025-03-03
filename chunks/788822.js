r.d(t, { q: () => d });
var n = r(200651);
r(192379);
var l = r(622535),
    i = r(481060),
    o = r(597688),
    a = r(297651),
    s = r(794324),
    c = r(388032),
    u = r(39532);
let d = (e) => {
    var t, r, d;
    let p,
        { category: f, subblock: b, badgeText: h, handleTransition: m } = e;
    null != b && (p = null === (t = o.Z.getCategoryByStoreListingId(null == b ? void 0 : b.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let C = null !== (r = null != p ? p : null == f ? void 0 : f.skuId) && void 0 !== r ? r : '',
        { handleCardVisibilityChange: g } = (0, a.E)(C, 'home', 'marketing featured block'),
        { featuredBlockBanner: v } = (0, s.Y)(f, b);
    return (0, n.jsx)(l.$, {
        onChange: g,
        threshold: 0,
        children: (0, n.jsxs)(i.P3F, {
            className: u.featuredBlock,
            style: { backgroundImage: 'url('.concat(v, ')') },
            onClick: () => m('shop marketing tile', C),
            children: [
                null != h &&
                    (0, n.jsx)(i.IGR, {
                        disableColor: !0,
                        text: h,
                        className: u.featuredBlockBadge
                    }),
                (null == b ? void 0 : b.bodyText) != null &&
                    (0, n.jsx)(i.X6q, {
                        lineClamp: 4,
                        className: u.featuredBlockBodyText,
                        style: { color: null !== (d = b.bannerTextColor) && void 0 !== d ? d : 'white' },
                        variant: 'heading-lg/semibold',
                        children: b.bodyText
                    }),
                (0, n.jsx)(i.zxk, {
                    className: u.featuredBlockButton,
                    color: i.Ttl.WHITE,
                    onClick: () => {},
                    children: c.NW.string(c.t.jVcuVV)
                })
            ]
        })
    });
};
