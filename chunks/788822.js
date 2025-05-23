n.d(t, { q: () => _ });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
    s = n(622535),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    p = n(597688),
    g = n(297651),
    b = n(794324),
    f = n(981631),
    h = n(388032),
    m = n(806734);
let _ = (e) => {
    var t, n, a;
    let _,
        { category: C, subblock: v, badgeText: O, handleTransition: S } = e;
    null != v && (_ = null == (t = p.Z.getCategoryByStoreListingId(null == v ? void 0 : v.categoryStoreListingId)) ? void 0 : t.skuId);
    let x = null != (n = null != _ ? _ : null == C ? void 0 : C.skuId) ? n : '',
        { handleCardVisibilityChange: E } = (0, g.E)(x, 'home', 'marketing featured block'),
        { featuredBlockBanner: j } = (0, b.YG)(C, v),
        y = l.useRef(null),
        P = x === o.T.NAMEPLATE,
        k = P ? h.intl.string(h.t['/Rk1dn']) : null == v ? void 0 : v.bodyText,
        T = (0, d.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: y,
        onChange: E,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: y,
            style: { backgroundImage: 'url('.concat(j, ')') },
            onClick: () => {
                S('shop marketing tile', x),
                    u.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                        sku_id: x,
                        page_type: 'home',
                        page_section: null == T ? void 0 : T.pageSection,
                        page_category: null == T ? void 0 : T.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == T ? void 0 : T.tilePosition),
                        cta_name: null
                    });
            },
            children: [
                null != O &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: O,
                        className: m.featuredBlockBadge
                    }),
                null != k &&
                    (0, r.jsx)(c.X6q, {
                        lineClamp: 4,
                        className: i()(m.featuredBlockBodyText, { [m.featuredBlockNameplate]: P }),
                        style: { color: null != (a = null == v ? void 0 : v.bannerTextColor) ? a : 'white' },
                        variant: 'heading-lg/semibold',
                        children: k
                    }),
                (0, r.jsx)(c.zxk, {
                    className: m.featuredBlockButton,
                    color: c.Ttl.WHITE,
                    onClick: (e) => {
                        S('shop marketing take me there button', x),
                            e.stopPropagation(),
                            u.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                sku_id: x,
                                page_type: 'home',
                                page_section: null == T ? void 0 : T.pageSection,
                                page_category: null == T ? void 0 : T.pageCategory,
                                tile_type: 'FEATURED_BLOCK',
                                tile_position: String(null == T ? void 0 : T.tilePosition),
                                cta_name: 'Take me there button'
                            });
                    },
                    children: h.intl.string(h.t.jVcuVV)
                })
            ]
        })
    });
};
