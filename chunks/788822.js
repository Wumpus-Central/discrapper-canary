r.d(t, { q: () => _ });
var n = r(951288),
    l = r(647438),
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
    m = r(981631),
    b = r(388032),
    h = r(310582);
let _ = (e) => {
    var t, r, a, _;
    let v,
        { category: O, subblock: C, badgeText: E, handleTransition: y } = e;
    null != C &&
        (v =
            null == (t = p.Z.getCategoryByStoreListingId(null == C ? void 0 : C.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let S = null != (r = null != v ? v : null == O ? void 0 : O.skuId) ? r : "",
        { handleCardVisibilityChange: x } = (0, g.E)(S, "home", "marketing featured block"),
        j = (0, f.YG)(O, C),
        P = l.useRef(null),
        T = S === o.T.NAMEPLATES_V3,
        L = T ? "NAMEPLATES VOL.3" : null,
        k = null == C ? void 0 : C.bodyText,
        I = (0, d.sp)();
    return (0, n.jsx)(s.$, {
        innerRef: P,
        onChange: x,
        threshold: 0,
        children: (0, n.jsxs)(c.P3F, {
            className: h.featuredBlock,
            innerRef: P,
            style: { backgroundImage: "url(".concat(j, ")") },
            onClick: () => {
                y("shop marketing tile", S),
                    u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        sku_id: S,
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
                    (0, n.jsx)(c.IGR, {
                        disableColor: !0,
                        text: E,
                        className: h.featuredBlockBadge,
                    }),
                (0, n.jsxs)("div", {
                    className: h.featuredBlockTextContainer,
                    children: [
                        null != L &&
                            (0, n.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: i()(h.featuredBlockTitleText, { [h.featuredBlockTitleTextNameplate]: T }),
                                style: { color: null != (a = null == C ? void 0 : C.bannerTextColor) ? a : "white" },
                                variant: "heading-xl/semibold",
                                children: L,
                            }),
                        null != k &&
                            (0, n.jsx)(c.X6q, {
                                lineClamp: null != L ? 2 : 4,
                                className: h.featuredBlockBodyText,
                                style: { color: null != (_ = null == C ? void 0 : C.bannerTextColor) ? _ : "white" },
                                variant: "heading-md/medium",
                                children: k,
                            }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: h.featuredBlockButtonContainer,
                    children: (0, n.jsx)(c.zxk, {
                        variant: "overlay-primary",
                        text: b.intl.string(b.t.jVcuVV),
                        onClick: (e) => {
                            y("shop marketing take me there button", S),
                                e.stopPropagation(),
                                u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                    sku_id: S,
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
