n.d(t, { q: () => _ });
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(180650),
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
    var t, n, o, _;
    let C,
        { category: O, subblock: E, badgeText: v, handleTransition: S } = e;
    null != E && (C = null == (t = p.Z.getCategoryByStoreListingId(null == E ? void 0 : E.categoryStoreListingId)) ? void 0 : t.skuId);
    let x = null != (n = null != C ? C : null == O ? void 0 : O.skuId) ? n : '',
        { handleCardVisibilityChange: y } = (0, g.E)(x, 'home', 'marketing featured block'),
        { featuredBlockBanner: j } = (0, f.YG)(O, E),
        T = l.useRef(null),
        P = x === a.T.NAMEPLATES_V3,
        L = P ? 'NAMEPLATES VOL.3' : null,
        I = null == E ? void 0 : E.bodyText,
        k = (0, d.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: T,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: T,
            style: { backgroundImage: 'url('.concat(j, ')') },
            onClick: () => {
                (S('shop marketing tile', x),
                    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                        sku_id: x,
                        page_type: 'home',
                        page_section: null == k ? void 0 : k.pageSection,
                        page_category: null == k ? void 0 : k.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == k ? void 0 : k.tilePosition),
                        cta_name: null
                    }));
            },
            children: [
                null != v &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: v,
                        className: m.featuredBlockBadge
                    }),
                (0, r.jsxs)('div', {
                    className: m.featuredBlockTextContainer,
                    children: [
                        null != L &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: i()(m.featuredBlockTitleText, { [m.featuredBlockTitleTextNameplate]: P }),
                                style: { color: null != (o = null == E ? void 0 : E.bannerTextColor) ? o : 'white' },
                                variant: 'heading-xl/semibold',
                                children: L
                            }),
                        null != I &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: null != L ? 2 : 4,
                                className: m.featuredBlockBodyText,
                                style: { color: null != (_ = null == E ? void 0 : E.bannerTextColor) ? _ : 'white' },
                                variant: 'heading-md/medium',
                                children: I
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
                                collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                sku_id: x,
                                page_type: 'home',
                                page_section: null == k ? void 0 : k.pageSection,
                                page_category: null == k ? void 0 : k.pageCategory,
                                tile_type: 'FEATURED_BLOCK',
                                tile_position: String(null == k ? void 0 : k.tilePosition),
                                cta_name: 'Take me there button'
                            }));
                    },
                    children: b.intl.string(b.t.jVcuVV)
                })
            ]
        })
    });
};
