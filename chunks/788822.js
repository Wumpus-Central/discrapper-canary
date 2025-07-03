n.d(t, { q: () => _ });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(180650),
    s = n(622535),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    p = n(597688),
    g = n(297651),
    f = n(794324),
    h = n(981631),
    b = n(388032),
    m = n(806734);
let _ = (e) => {
    var t, n, i, _;
    let C,
        { category: O, subblock: v, badgeText: E, handleTransition: S } = e;
    null != v && (C = null == (t = p.Z.getCategoryByStoreListingId(null == v ? void 0 : v.categoryStoreListingId)) ? void 0 : t.skuId);
    let x = null != (n = null != C ? C : null == O ? void 0 : O.skuId) ? n : '',
        { handleCardVisibilityChange: y } = (0, g.E)(x, 'home', 'marketing featured block'),
        { featuredBlockBanner: T } = (0, f.YG)(O, v),
        j = l.useRef(null),
        L = x === o.T.NAMEPLATES_V3,
        P = L ? 'NAMEPLATES VOL.3' : null,
        k = null == v ? void 0 : v.bodyText,
        I = (0, d.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: j,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: j,
            style: { backgroundImage: 'url('.concat(T, ')') },
            onClick: () => {
                (S('shop marketing tile', x),
                    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        sku_id: x,
                        page_type: 'home',
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: null == I ? void 0 : I.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == I ? void 0 : I.tilePosition),
                        cta_name: null
                    }));
            },
            children: [
                null != E &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: E,
                        className: m.featuredBlockBadge
                    }),
                (0, r.jsxs)('div', {
                    className: m.featuredBlockTextContainer,
                    children: [
                        null != P &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: a()(m.featuredBlockTitleText, { [m.featuredBlockTitleTextNameplate]: L }),
                                style: { color: null != (i = null == v ? void 0 : v.bannerTextColor) ? i : 'white' },
                                variant: 'heading-xl/semibold',
                                children: P
                            }),
                        null != k &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: null != P ? 2 : 4,
                                className: m.featuredBlockBodyText,
                                style: { color: null != (_ = null == v ? void 0 : v.bannerTextColor) ? _ : 'white' },
                                variant: 'heading-md/medium',
                                children: k
                            })
                    ]
                }),
                (0, r.jsx)(c.zxk, {
                    className: m.featuredBlockButton,
                    color: c.Ttl.WHITE,
                    onClick: (e) => {
                        (S('shop marketing take me there button', x),
                            e.stopPropagation(),
                            u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                sku_id: x,
                                page_type: 'home',
                                page_section: null == I ? void 0 : I.pageSection,
                                page_category: null == I ? void 0 : I.pageCategory,
                                tile_type: 'FEATURED_BLOCK',
                                tile_position: String(null == I ? void 0 : I.tilePosition),
                                cta_name: 'Take me there button'
                            }));
                    },
                    children: b.intl.string(b.t.jVcuVV)
                })
            ]
        })
    });
};
