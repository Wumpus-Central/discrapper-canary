n.d(t, { q: () => p });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(622535),
    a = n(481060),
    o = n(597688),
    d = n(884697),
    c = n(297651),
    u = n(215023),
    C = n(388032),
    h = n(218142);
let p = (e) => {
    var t, n, l, p;
    let m,
        { category: g, subblock: f, badgeText: x, handleTransition: _ } = e;
    null != f && (m = null === (t = o.Z.getCategoryByStoreListingId(null == f ? void 0 : f.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let v = null !== (n = null != m ? m : null == g ? void 0 : g.skuId) && void 0 !== n ? n : '',
        { handleCardVisibilityChange: b } = (0, c.E)(v, 'home', 'marketing'),
        k =
            null !== (p = null == f ? void 0 : f.bannerUrl) && void 0 !== p
                ? p
                : (0, d.uV)(null !== (l = null == g ? void 0 : g.featuredBlock) && void 0 !== l ? l : '', {
                      size: u.J0,
                      format: 'png'
                  });
    return (0, r.jsx)(s.$, {
        onChange: b,
        threshold: 0,
        children: (0, r.jsxs)(a.P3F, {
            className: i()(h.featuredBlock),
            style: { backgroundImage: 'url('.concat(k, ')') },
            onClick: () => _('shop marketing tile', v),
            children: [
                null != x &&
                    (0, r.jsx)(a.IGR, {
                        disableColor: !0,
                        text: x,
                        className: h.featuredBlockBadge
                    }),
                (0, r.jsx)(a.zxk, {
                    className: h.featuredBlockButton,
                    color: a.Ttl.WHITE,
                    onClick: () => {},
                    children: C.intl.string(C.t.jVcuVV)
                })
            ]
        })
    });
};
