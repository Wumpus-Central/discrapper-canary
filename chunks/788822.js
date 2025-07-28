r.d(t, { q: () => _ });
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(180650),
    s = r(622535),
    c = r(481060),
    u = r(626135),
    d = r(381585),
    p = r(597688),
    f = r(297651),
    g = r(794324),
    h = r(981631),
    b = r(388032),
    m = r(806734);
let _ = (e) => {
    var t, r, i, _;
    let O,
        { category: C, subblock: v, badgeText: E, handleTransition: S } = e;
    null != v && (O = null == (t = p.Z.getCategoryByStoreListingId(null == v ? void 0 : v.categoryStoreListingId)) ? void 0 : t.skuId);
    let y = null != (r = null != O ? O : null == C ? void 0 : C.skuId) ? r : '',
        { handleCardVisibilityChange: x } = (0, f.E)(y, 'home', 'marketing featured block'),
        { featuredBlockBanner: j } = (0, g.YG)(C, v),
        T = l.useRef(null),
        P = y === a.T.NAMEPLATES_V3,
        L = P ? 'NAMEPLATES VOL.3' : null,
        k = null == v ? void 0 : v.bodyText,
        I = (0, d.sp)();
    return (0, n.jsx)(s.$, {
        innerRef: T,
        onChange: x,
        threshold: 0,
        children: (0, n.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: T,
            style: { backgroundImage: 'url('.concat(j, ')') },
            onClick: () => {
                (S('shop marketing tile', y),
                    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        sku_id: y,
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
                    (0, n.jsx)(c.IGR, {
                        disableColor: !0,
                        text: E,
                        className: m.featuredBlockBadge
                    }),
                (0, n.jsxs)('div', {
                    className: m.featuredBlockTextContainer,
                    children: [
                        null != L &&
                            (0, n.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: o()(m.featuredBlockTitleText, { [m.featuredBlockTitleTextNameplate]: P }),
                                style: { color: null != (i = null == v ? void 0 : v.bannerTextColor) ? i : 'white' },
                                variant: 'heading-xl/semibold',
                                children: L
                            }),
                        null != k &&
                            (0, n.jsx)(c.X6q, {
                                lineClamp: null != L ? 2 : 4,
                                className: m.featuredBlockBodyText,
                                style: { color: null != (_ = null == v ? void 0 : v.bannerTextColor) ? _ : 'white' },
                                variant: 'heading-md/medium',
                                children: k
                            })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: m.featuredBlockButtonContainer,
                    children: (0, n.jsx)(c.zxk, {
                        variant: 'overlay-primary',
                        text: b.intl.string(b.t.jVcuVV),
                        onClick: (e) => {
                            (S('shop marketing take me there button', y),
                                e.stopPropagation(),
                                u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                    sku_id: y,
                                    page_type: 'home',
                                    page_section: null == I ? void 0 : I.pageSection,
                                    page_category: null == I ? void 0 : I.pageCategory,
                                    tile_type: 'FEATURED_BLOCK',
                                    tile_position: String(null == I ? void 0 : I.tilePosition),
                                    cta_name: 'Take me there button'
                                }));
                        }
                    })
                })
            ]
        })
    });
};
