n.d(t, { q: () => m });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(622535),
    s = n(481060),
    c = n(626135),
    u = n(381585),
    d = n(597688),
    p = n(297651),
    f = n(794324),
    b = n(981631),
    g = n(388032),
    h = n(806734);
let m = (e) => {
    var t, n, a, i;
    let m,
        { category: _, subblock: C, badgeText: v, handleTransition: O } = e;
    null != C && (m = null == (t = d.Z.getCategoryByStoreListingId(null == C ? void 0 : C.categoryStoreListingId)) ? void 0 : t.skuId);
    let x = null != (n = null != m ? m : null == _ ? void 0 : _.skuId) ? n : '',
        { handleCardVisibilityChange: S } = (0, p.E)(x, 'home', 'marketing featured block'),
        { featuredBlockBanner: E } = (0, f.YG)(_, C),
        y = l.useRef(null),
        j = null == C ? void 0 : C.bodyText,
        P = (0, u.sp)();
    return (0, r.jsx)(o.$, {
        innerRef: y,
        onChange: S,
        threshold: 0,
        children: (0, r.jsxs)(s.P3F, {
            className: h.featuredBlock,
            innerRef: y,
            style: { backgroundImage: 'url('.concat(E, ')') },
            onClick: () => {
                O('shop marketing tile', x),
                    c.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                        sku_id: x,
                        page_type: 'home',
                        page_section: null == P ? void 0 : P.pageSection,
                        page_category: null == P ? void 0 : P.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == P ? void 0 : P.tilePosition),
                        cta_name: null
                    });
            },
            children: [
                null != v &&
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: v,
                        className: h.featuredBlockBadge
                    }),
                (0, r.jsxs)('div', {
                    className: h.featuredBlockTextContainer,
                    children: [
                        false,
                        null != j &&
                            (0, r.jsx)(s.X6q, {
                                lineClamp: 4,
                                className: h.featuredBlockBodyText,
                                style: { color: null != (i = null == C ? void 0 : C.bannerTextColor) ? i : 'white' },
                                variant: 'heading-md/medium',
                                children: j
                            })
                    ]
                }),
                (0, r.jsx)(s.zxk, {
                    className: h.featuredBlockButton,
                    color: s.Ttl.WHITE,
                    onClick: (e) => {
                        O('shop marketing take me there button', x),
                            e.stopPropagation(),
                            c.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                                sku_id: x,
                                page_type: 'home',
                                page_section: null == P ? void 0 : P.pageSection,
                                page_category: null == P ? void 0 : P.pageCategory,
                                tile_type: 'FEATURED_BLOCK',
                                tile_position: String(null == P ? void 0 : P.tilePosition),
                                cta_name: 'Take me there button'
                            });
                    },
                    children: g.intl.string(g.t.jVcuVV)
                })
            ]
        })
    });
};
