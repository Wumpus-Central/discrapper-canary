n.d(t, { q: () => m });
var r = n(54381),
    l = n(473749),
    i = n(622535),
    a = n(481060),
    o = n(626135),
    s = n(381585),
    c = n(597688),
    u = n(297651),
    d = n(794324),
    f = n(981631),
    g = n(388032),
    p = n(310582);
let m = (e) => {
    var t, n, m;
    let h,
        { category: C, subblock: _, badgeText: b, handleTransition: v } = e;
    null != _ &&
        (h =
            null == (t = c.Z.getCategoryByStoreListingId(null == _ ? void 0 : _.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let x = null != (n = null != h ? h : null == C ? void 0 : C.skuId) ? n : "",
        { handleCardVisibilityChange: E } = (0, u.E)(x, "home", "marketing featured block"),
        O = (0, d.YG)(C, _),
        S = l.useRef(null),
        y = null == _ ? void 0 : _.bodyText,
        j = (0, s.sp)();
    return (0, r.jsx)(i.$, {
        innerRef: S,
        onChange: E,
        threshold: 0,
        children: (0, r.jsxs)(a.P3F, {
            className: p.featuredBlock,
            innerRef: S,
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, null != O && { backgroundImage: "url(".concat(O, ")") }),
            onClick: () => {
                v({
                    sourceButton: "shop marketing tile",
                    categorySkuId: x,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: null == C ? void 0 : C.isOrbsExclusive,
                }),
                    o.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: x,
                        page_type: "home",
                        page_section: null == j ? void 0 : j.pageSection,
                        page_category: null == j ? void 0 : j.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == j ? void 0 : j.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != b &&
                    (0, r.jsx)(a.IGR, {
                        disableColor: !0,
                        text: b,
                        className: p.featuredBlockBadge,
                    }),
                (0, r.jsx)("div", {
                    className: p.featuredBlockTextContainer,
                    children:
                        null != y &&
                        (0, r.jsx)(a.Heading, {
                            lineClamp: 4,
                            className: p.featuredBlockBodyText,
                            style: { color: null != (m = null == _ ? void 0 : _.bannerTextColor) ? m : "white" },
                            variant: "heading-md/medium",
                            children: y,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: p.featuredBlockButtonContainer,
                    children: (0, r.jsx)(a.Button, {
                        variant: "overlay-primary",
                        text: g.intl.string(g.t.jVcuVY),
                        onClick: (e) => {
                            v({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: x,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: null == C ? void 0 : C.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                o.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                                    sku_id: x,
                                    page_type: "home",
                                    page_section: null == j ? void 0 : j.pageSection,
                                    page_category: null == j ? void 0 : j.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == j ? void 0 : j.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
