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
        { category: v, subblock: O, badgeText: S, handleTransition: x } = e;
    null != O && (C = null == (t = p.Z.getCategoryByStoreListingId(null == O ? void 0 : O.categoryStoreListingId)) ? void 0 : t.skuId);
    let E = null != (n = null != C ? C : null == v ? void 0 : v.skuId) ? n : '',
        { handleCardVisibilityChange: j } = (0, g.E)(E, 'home', 'marketing featured block'),
        { featuredBlockBanner: y } = (0, f.YG)(v, O),
        T = l.useRef(null),
        P = E === o.T.NAMEPLATES_V3,
        k = P ? 'NAMEPLATES VOL.3' : null,
        I = null == O ? void 0 : O.bodyText,
        L = (0, d.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: T,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: T,
            style: { backgroundImage: 'url('.concat(y, ')') },
            onClick: () => {
                (x('shop marketing tile', E),
                    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                        sku_id: E,
                        page_type: 'home',
                        page_section: null == L ? void 0 : L.pageSection,
                        page_category: null == L ? void 0 : L.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == L ? void 0 : L.tilePosition),
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
                        null != k &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: a()(m.featuredBlockTitleText, { [m.featuredBlockTitleTextNameplate]: P }),
                                style: { color: null != (i = null == O ? void 0 : O.bannerTextColor) ? i : 'white' },
                                variant: 'heading-xl/semibold',
                                children: k
                            }),
                        null != I &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: null != k ? 2 : 4,
                                className: m.featuredBlockBodyText,
                                style: { color: null != (_ = null == O ? void 0 : O.bannerTextColor) ? _ : 'white' },
                                variant: 'heading-md/medium',
                                children: I
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
                                collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                                sku_id: E,
                                page_type: 'home',
                                page_section: null == L ? void 0 : L.pageSection,
                                page_category: null == L ? void 0 : L.pageCategory,
                                tile_type: 'FEATURED_BLOCK',
                                tile_position: String(null == L ? void 0 : L.tilePosition),
                                cta_name: 'Take me there button'
                            }));
                    },
                    children: b.intl.string(b.t.jVcuVV)
                })
            ]
        })
    });
};
