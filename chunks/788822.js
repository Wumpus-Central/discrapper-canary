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
    f = n(794324),
    b = n(981631),
    h = n(388032),
    m = n(806734);
let _ = (e) => {
    var t, n, a, _;
    let v,
        { category: C, subblock: O, badgeText: E, handleTransition: S } = e;
    null != O &&
        (v =
            null == (t = p.Z.getCategoryByStoreListingId(null == O ? void 0 : O.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let y = null != (n = null != v ? v : null == C ? void 0 : C.skuId) ? n : "",
        { handleCardVisibilityChange: x } = (0, g.E)(y, "home", "marketing featured block"),
        { featuredBlockBanner: j } = (0, f.YG)(C, O),
        T = l.useRef(null),
        P = y === o.T.NAMEPLATES_V3,
        L = P ? "NAMEPLATES VOL.3" : null,
        k = null == O ? void 0 : O.bodyText,
        I = (0, d.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: T,
        onChange: x,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: m.featuredBlock,
            innerRef: T,
            style: { backgroundImage: "url(".concat(j, ")") },
            onClick: () => {
                S("shop marketing tile", y),
                    u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        sku_id: y,
                        page_type: "home",
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: null == I ? void 0 : I.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == I ? void 0 : I.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != E &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: E,
                        className: m.featuredBlockBadge,
                    }),
                (0, r.jsxs)("div", {
                    className: m.featuredBlockTextContainer,
                    children: [
                        null != L &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: i()(m.featuredBlockTitleText, { [m.featuredBlockTitleTextNameplate]: P }),
                                style: { color: null != (a = null == O ? void 0 : O.bannerTextColor) ? a : "white" },
                                variant: "heading-xl/semibold",
                                children: L,
                            }),
                        null != k &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: null != L ? 2 : 4,
                                className: m.featuredBlockBodyText,
                                style: { color: null != (_ = null == O ? void 0 : O.bannerTextColor) ? _ : "white" },
                                variant: "heading-md/medium",
                                children: k,
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: m.featuredBlockButtonContainer,
                    children: (0, r.jsx)(c.zxk, {
                        variant: "overlay-primary",
                        text: h.intl.string(h.t.jVcuVV),
                        onClick: (e) => {
                            S("shop marketing take me there button", y),
                                e.stopPropagation(),
                                u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                    sku_id: y,
                                    page_type: "home",
                                    page_section: null == I ? void 0 : I.pageSection,
                                    page_category: null == I ? void 0 : I.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == I ? void 0 : I.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
