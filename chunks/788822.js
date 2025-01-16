n.d(t, {
    q: function () {
        return g;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(622535),
    s = n(481060),
    o = n(597688),
    c = n(884697),
    d = n(297651),
    u = n(215023),
    m = n(388032),
    h = n(218142);
let g = (e) => {
    var t, n, a, g;
    let p,
        { category: f, subblock: C, badgeText: b, handleTransition: v } = e;
    null != C && (p = null === (t = o.Z.getCategoryByStoreListingId(null == C ? void 0 : C.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let x = null !== (n = null != p ? p : null == f ? void 0 : f.skuId) && void 0 !== n ? n : '',
        { handleCardVisibilityChange: _ } = (0, d.E)(x, 'home', 'marketing'),
        k =
            null !== (g = null == C ? void 0 : C.bannerUrl) && void 0 !== g
                ? g
                : (0, c.uV)(null !== (a = null == f ? void 0 : f.featuredBlock) && void 0 !== a ? a : '', {
                      size: u.J0,
                      format: 'png'
                  });
    return (0, r.jsx)(l.$, {
        onChange: _,
        threshold: 0,
        children: (0, r.jsxs)(s.Clickable, {
            className: i()(h.featuredBlock),
            style: { backgroundImage: 'url('.concat(k, ')') },
            onClick: () => v('shop marketing tile', x),
            children: [
                null != b &&
                    (0, r.jsx)(s.TextBadge, {
                        disableColor: !0,
                        text: b,
                        className: h.featuredBlockBadge
                    }),
                (0, r.jsx)(s.Button, {
                    className: h.featuredBlockButton,
                    color: s.ButtonColors.WHITE,
                    onClick: () => {},
                    children: m.intl.string(m.t.jVcuVV)
                })
            ]
        })
    });
};
