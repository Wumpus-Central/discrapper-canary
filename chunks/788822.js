r.d(t, { q: () => O });
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(180650),
    s = r(622535),
    c = r(755721),
    u = r(481060),
    d = r(626135),
    p = r(381585),
    f = r(597688),
    g = r(297651),
    h = r(794324),
    b = r(981631),
    m = r(388032),
    _ = r(806734);
let O = (e) => {
    var t, r, i, O;
    let C,
        { category: v, subblock: E, badgeText: S, handleTransition: y } = e;
    null != E && (C = null == (t = f.Z.getCategoryByStoreListingId(null == E ? void 0 : E.categoryStoreListingId)) ? void 0 : t.skuId);
    let x = null != (r = null != C ? C : null == v ? void 0 : v.skuId) ? r : '',
        { handleCardVisibilityChange: j } = (0, g.E)(x, 'home', 'marketing featured block'),
        { featuredBlockBanner: T } = (0, h.YG)(v, E),
        P = l.useRef(null),
        L = x === a.T.NAMEPLATES_V3,
        I = L ? 'NAMEPLATES VOL.3' : null,
        k = null == E ? void 0 : E.bodyText,
        B = (0, p.sp)();
    return (0, n.jsx)(s.$, {
        innerRef: P,
        onChange: j,
        threshold: 0,
        children: (0, n.jsxs)(u.P3F, {
            className: _.featuredBlock,
            innerRef: P,
            style: { backgroundImage: 'url('.concat(T, ')') },
            onClick: () => {
                (y('shop marketing tile', x),
                    d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                        sku_id: x,
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
                    (0, n.jsx)(u.IGR, {
                        disableColor: !0,
                        text: S,
                        className: _.featuredBlockBadge
                    }),
                (0, n.jsxs)('div', {
                    className: _.featuredBlockTextContainer,
                    children: [
                        null != I &&
                            (0, n.jsx)(u.X6q, {
                                lineClamp: 2,
                                className: o()(_.featuredBlockTitleText, { [_.featuredBlockTitleTextNameplate]: L }),
                                style: { color: null != (i = null == E ? void 0 : E.bannerTextColor) ? i : 'white' },
                                variant: 'heading-xl/semibold',
                                children: I
                            }),
                        null != k &&
                            (0, n.jsx)(u.X6q, {
                                lineClamp: null != I ? 2 : 4,
                                className: _.featuredBlockBodyText,
                                style: { color: null != (O = null == E ? void 0 : E.bannerTextColor) ? O : 'white' },
                                variant: 'heading-md/medium',
                                children: k
                            })
                    ]
                }),
                (0, n.jsx)(c.zx, {
                    className: _.featuredBlockButton,
                    color: c.Tt.WHITE,
                    onClick: (e) => {
                        (y('shop marketing take me there button', x),
                            e.stopPropagation(),
                            d.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                                sku_id: x,
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
