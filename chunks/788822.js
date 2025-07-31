r.d(t, { q: () => _ });
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(180650),
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
        { category: v, subblock: C, badgeText: E, handleTransition: S } = e;
    null != C && (O = null == (t = p.Z.getCategoryByStoreListingId(null == C ? void 0 : C.categoryStoreListingId)) ? void 0 : t.skuId);
    let y = null != (r = null != O ? O : null == v ? void 0 : v.skuId) ? r : '',
        { handleCardVisibilityChange: x } = (0, f.E)(y, 'home', 'marketing featured block'),
        { featuredBlockBanner: j } = (0, g.YG)(v, C),
        P = l.useRef(null),
        T = y === o.T.NAMEPLATES_V3,
        L = T ? 'NAMEPLATES VOL.3' : null,
        I = null == C ? void 0 : C.bodyText,
        k = (0, d.sp)();
    return (0, n.jsx)(s.$, {
        innerRef: P,
        onChange: x,
        threshold: 0,
        children: (0, n.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: P,
            style: { backgroundImage: 'url('.concat(j, ')') },
            onClick: () => {
                (S('shop marketing tile', y),
                    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                        sku_id: y,
                        page_type: 'home',
                        page_section: null == k ? void 0 : k.pageSection,
                        page_category: null == k ? void 0 : k.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == k ? void 0 : k.tilePosition),
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
                                className: a()(m.featuredBlockTitleText, { [m.featuredBlockTitleTextNameplate]: T }),
                                style: { color: null != (i = null == C ? void 0 : C.bannerTextColor) ? i : 'white' },
                                variant: 'heading-xl/semibold',
                                children: L
                            }),
                        null != I &&
                            (0, n.jsx)(c.X6q, {
                                lineClamp: null != L ? 2 : 4,
                                className: m.featuredBlockBodyText,
                                style: { color: null != (_ = null == C ? void 0 : C.bannerTextColor) ? _ : 'white' },
                                variant: 'heading-md/medium',
                                children: I
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
                                    collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                    sku_id: y,
                                    page_type: 'home',
                                    page_section: null == k ? void 0 : k.pageSection,
                                    page_category: null == k ? void 0 : k.pageCategory,
                                    tile_type: 'FEATURED_BLOCK',
                                    tile_position: String(null == k ? void 0 : k.tilePosition),
                                    cta_name: 'Take me there button'
                                }));
                        }
                    })
                })
            ]
        })
    });
};
