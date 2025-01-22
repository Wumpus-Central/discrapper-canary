n.d(t, {
    q: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(622535),
    a = n(481060),
    o = n(597688),
    c = n(884697),
    d = n(297651),
    u = n(215023),
    C = n(388032),
    h = n(218142);
let p = (e) => {
    var t, n, i, p;
    let f,
        { category: m, subblock: g, badgeText: b, handleTransition: x } = e;
    null != g && (f = null === (t = o.Z.getCategoryByStoreListingId(null == g ? void 0 : g.categoryStoreListingId)) || void 0 === t ? void 0 : t.skuId);
    let v = null !== (n = null != f ? f : null == m ? void 0 : m.skuId) && void 0 !== n ? n : '',
        { handleCardVisibilityChange: _ } = (0, d.E)(v, 'home', 'marketing'),
        k =
            null !== (p = null == g ? void 0 : g.bannerUrl) && void 0 !== p
                ? p
                : (0, c.uV)(null !== (i = null == m ? void 0 : m.featuredBlock) && void 0 !== i ? i : '', {
                      size: u.J0,
                      format: 'png'
                  });
    return (0, r.jsx)(s.$, {
        onChange: _,
        threshold: 0,
        children: (0, r.jsxs)(a.Clickable, {
            className: l()(h.featuredBlock),
            style: { backgroundImage: 'url('.concat(k, ')') },
            onClick: () => x('shop marketing tile', v),
            children: [
                null != b &&
                    (0, r.jsx)(a.TextBadge, {
                        disableColor: !0,
                        text: b,
                        className: h.featuredBlockBadge
                    }),
                (0, r.jsx)(a.Button, {
                    className: h.featuredBlockButton,
                    color: a.ButtonColors.WHITE,
                    onClick: () => {},
                    children: C.intl.string(C.t.jVcuVV)
                })
            ]
        })
    });
};
