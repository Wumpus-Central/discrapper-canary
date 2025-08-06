r.d(t, { q: () => m });
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(180650),
    s = r(622535),
    c = r(481060),
    u = r(626135),
    d = r(381585),
    p = r(597688),
    g = r(297651),
    f = r(794324),
    h = r(981631),
    b = r(388032),
    _ = r(806734);
let m = (e) => {
    var t, r, a, m;
    let v,
        { category: O, subblock: C, badgeText: E, handleTransition: S } = e;
    null != C &&
        (v =
            null == (t = p.Z.getCategoryByStoreListingId(null == C ? void 0 : C.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let y = null != (r = null != v ? v : null == O ? void 0 : O.skuId) ? r : "",
        { handleCardVisibilityChange: x } = (0, g.E)(y, "home", "marketing featured block"),
        { featuredBlockBanner: j } = (0, f.YG)(O, C),
        P = l.useRef(null),
        T = y === o.T.NAMEPLATES_V3,
        L = T ? "NAMEPLATES VOL.3" : null,
        I = null == C ? void 0 : C.bodyText,
        k = (0, d.sp)();
    return (0, n.jsx)(s.$, {
        innerRef: P,
        onChange: x,
        threshold: 0,
        children: (0, n.jsxs)(c.P3F, {
            className: _.featuredBlock,
            innerRef: P,
            style: { backgroundImage: "url(".concat(j, ")") },
            onClick: () => {
                S("shop marketing tile", y),
                    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                        sku_id: y,
                        page_type: "home",
                        page_section: null == k ? void 0 : k.pageSection,
                        page_category: null == k ? void 0 : k.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == k ? void 0 : k.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != E &&
                    (0, n.jsx)(c.IGR, {
                        disableColor: !0,
                        text: E,
                        className: _.featuredBlockBadge,
                    }),
                (0, n.jsxs)("div", {
                    className: _.featuredBlockTextContainer,
                    children: [
                        null != L &&
                            (0, n.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: i()(_.featuredBlockTitleText, { [_.featuredBlockTitleTextNameplate]: T }),
                                style: { color: null != (a = null == C ? void 0 : C.bannerTextColor) ? a : "white" },
                                variant: "heading-xl/semibold",
                                children: L,
                            }),
                        null != I &&
                            (0, n.jsx)(c.X6q, {
                                lineClamp: null != L ? 2 : 4,
                                className: _.featuredBlockBodyText,
                                style: { color: null != (m = null == C ? void 0 : C.bannerTextColor) ? m : "white" },
                                variant: "heading-md/medium",
                                children: I,
                            }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: _.featuredBlockButtonContainer,
                    children: (0, n.jsx)(c.zxk, {
                        variant: "overlay-primary",
                        text: b.intl.string(b.t.jVcuVV),
                        onClick: (e) => {
                            S("shop marketing take me there button", y),
                                e.stopPropagation(),
                                u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                    sku_id: y,
                                    page_type: "home",
                                    page_section: null == k ? void 0 : k.pageSection,
                                    page_category: null == k ? void 0 : k.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == k ? void 0 : k.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
