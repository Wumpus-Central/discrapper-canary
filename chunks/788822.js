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
    f = n(297651),
    g = n(794324),
    h = n(981631),
    b = n(388032),
    m = n(806734);
let _ = (e) => {
    var t, n, a, _;
    let C,
        { category: v, subblock: O, badgeText: S, handleTransition: x } = e;
    null != O && (C = null == (t = p.Z.getCategoryByStoreListingId(null == O ? void 0 : O.categoryStoreListingId)) ? void 0 : t.skuId);
    let E = null != (n = null != C ? C : null == v ? void 0 : v.skuId) ? n : '',
        { handleCardVisibilityChange: y } = (0, f.E)(E, 'home', 'marketing featured block'),
        { featuredBlockBanner: j } = (0, g.YG)(v, O),
        P = l.useRef(null),
        k = E === o.T.NAMEPLATES_V3,
        T = k ? 'NAMEPLATES VOL.3' : null,
        L = null == O ? void 0 : O.bodyText,
        I = (0, d.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: P,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: P,
            style: { backgroundImage: 'url('.concat(j, ')') },
            onClick: () => {
                (x('shop marketing tile', E),
                    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        sku_id: E,
                        page_type: 'home',
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: null == I ? void 0 : I.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == I ? void 0 : I.tilePosition),
                        cta_name: null
                    }));
            },
            children: [
                null != S &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: S,
                        className: m.featuredBlockBadge
                    }),
                (0, r.jsxs)('div', {
                    className: m.featuredBlockTextContainer,
                    children: [
                        null != T &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: i()(m.featuredBlockTitleText, { [m.featuredBlockTitleTextNameplate]: k }),
                                style: { color: null != (a = null == O ? void 0 : O.bannerTextColor) ? a : 'white' },
                                variant: 'heading-xl/semibold',
                                children: T
                            }),
                        null != L &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: null != T ? 2 : 4,
                                className: m.featuredBlockBodyText,
                                style: { color: null != (_ = null == O ? void 0 : O.bannerTextColor) ? _ : 'white' },
                                variant: 'heading-md/medium',
                                children: L
                            })
                    ]
                }),
                (0, r.jsx)(c.zxk, {
                    className: m.featuredBlockButton,
                    color: c.Ttl.WHITE,
                    onClick: (e) => {
                        (x('shop marketing take me there button', E),
                            e.stopPropagation(),
                            u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                sku_id: E,
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
