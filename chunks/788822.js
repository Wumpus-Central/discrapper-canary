n.d(t, { q: () => C });
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(180650),
    s = n(622535),
    c = n(755721),
    u = n(481060),
    d = n(626135),
    p = n(381585),
    g = n(597688),
    f = n(297651),
    h = n(794324),
    b = n(981631),
    m = n(388032),
    _ = n(806734);
let C = (e) => {
    var t, n, o, C;
    let O,
        { category: v, subblock: E, badgeText: S, handleTransition: x } = e;
    null != E && (O = null == (t = g.Z.getCategoryByStoreListingId(null == E ? void 0 : E.categoryStoreListingId)) ? void 0 : t.skuId);
    let y = null != (n = null != O ? O : null == v ? void 0 : v.skuId) ? n : '',
        { handleCardVisibilityChange: j } = (0, f.E)(y, 'home', 'marketing featured block'),
        { featuredBlockBanner: T } = (0, h.YG)(v, E),
        P = l.useRef(null),
        L = y === a.T.NAMEPLATES_V3,
        k = L ? 'NAMEPLATES VOL.3' : null,
        I = null == E ? void 0 : E.bodyText,
        B = (0, p.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: P,
        onChange: j,
        threshold: 0,
        children: (0, r.jsxs)(u.P3F, {
            className: _.featuredBlock,
            innerRef: P,
            style: { backgroundImage: 'url('.concat(T, ')') },
            onClick: () => {
                (x('shop marketing tile', y),
                    d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                        sku_id: y,
                        page_type: 'home',
                        page_section: null == B ? void 0 : B.pageSection,
                        page_category: null == B ? void 0 : B.pageCategory,
                        tile_type: 'FEATURED_BLOCK',
                        tile_position: String(null == B ? void 0 : B.tilePosition),
                        cta_name: null
                    }));
            },
            children: [
                null != S &&
                    (0, r.jsx)(u.IGR, {
                        disableColor: !0,
                        text: S,
                        className: _.featuredBlockBadge
                    }),
                (0, r.jsxs)('div', {
                    className: _.featuredBlockTextContainer,
                    children: [
                        null != k &&
                            (0, r.jsx)(u.X6q, {
                                lineClamp: 2,
                                className: i()(_.featuredBlockTitleText, { [_.featuredBlockTitleTextNameplate]: L }),
                                style: { color: null != (o = null == E ? void 0 : E.bannerTextColor) ? o : 'white' },
                                variant: 'heading-xl/semibold',
                                children: k
                            }),
                        null != I &&
                            (0, r.jsx)(u.X6q, {
                                lineClamp: null != k ? 2 : 4,
                                className: _.featuredBlockBodyText,
                                style: { color: null != (C = null == E ? void 0 : E.bannerTextColor) ? C : 'white' },
                                variant: 'heading-md/medium',
                                children: I
                            })
                    ]
                }),
                (0, r.jsx)(c.zx, {
                    className: _.featuredBlockButton,
                    color: c.Tt.WHITE,
                    onClick: (e) => {
                        (x('shop marketing take me there button', y),
                            e.stopPropagation(),
                            d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                                sku_id: y,
                                page_type: 'home',
                                page_section: null == B ? void 0 : B.pageSection,
                                page_category: null == B ? void 0 : B.pageCategory,
                                tile_type: 'FEATURED_BLOCK',
                                tile_position: String(null == B ? void 0 : B.tilePosition),
                                cta_name: 'Take me there button'
                            }));
                    },
                    children: m.intl.string(m.t.jVcuVV)
                })
            ]
        })
    });
};
