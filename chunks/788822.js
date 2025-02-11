n.d(t, { q: () => p });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    s = n(622535),
    a = n(481060),
    o = n(597688),
    d = n(884697),
    c = n(297651),
    u = n(215023),
    C = n(388032),
    h = n(957726);
let p = (e) => {
    var t, n, r, p, m;
    let f,
        { category: g, subblock: x, badgeText: b, handleTransition: _ } = e;
    null != x && (f = null === (t = o.Z.getCategoryByStoreListingId(null == x ? void 0 : x.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let v = null !== (n = null != f ? f : null == g ? void 0 : g.skuId) && void 0 !== n ? n : '',
        { handleCardVisibilityChange: j } = (0, c.E)(v, 'home', 'marketing featured block'),
        k =
            null !== (p = null == x ? void 0 : x.bannerUrl) && void 0 !== p
                ? p
                : (0, d.uV)(null !== (r = null == g ? void 0 : g.featuredBlock) && void 0 !== r ? r : '', {
                      size: u.J0,
                      format: 'png'
                  });
    return (0, l.jsx)(s.$, {
        onChange: j,
        threshold: 0,
        children: (0, l.jsxs)(a.P3F, {
            className: i()(h.featuredBlock),
            style: { backgroundImage: 'url('.concat(k, ')') },
            onClick: () => _('shop marketing tile', v),
            children: [
                null != b &&
                    (0, l.jsx)(a.IGR, {
                        disableColor: !0,
                        text: b,
                        className: h.featuredBlockBadge
                    }),
                (null == x ? void 0 : x.bodyText) != null &&
                    (0, l.jsx)(a.X6q, {
                        lineClamp: 4,
                        className: h.featuredBlockBodyText,
                        style: { color: null !== (m = x.bannerTextColor) && void 0 !== m ? m : 'white' },
                        variant: 'heading-lg/semibold',
                        children: x.bodyText
                    }),
                (0, l.jsx)(a.zxk, {
                    className: h.featuredBlockButton,
                    color: a.Ttl.WHITE,
                    onClick: () => {},
                    children: C.intl.string(C.t.jVcuVV)
                })
            ]
        })
    });
};
