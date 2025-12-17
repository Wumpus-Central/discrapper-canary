n.d(t, { q: () => p });
var r = n(54381),
    l = n(473749),
    a = n(622535),
    s = n(481060),
    o = n(626135),
    i = n(381585),
    c = n(597688),
    u = n(297651),
    d = n(794324),
    f = n(981631),
    g = n(388032),
    b = n(222194);
let p = (e) => {
    var t, n, p;
    let m,
        { category: h, subblock: C, badgeText: E, handleTransition: v } = e;
    null != C &&
        (m =
            null == (t = c.Z.getCategoryByStoreListingId(null == C ? void 0 : C.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let S = null != (n = null != m ? m : null == h ? void 0 : h.skuId) ? n : "",
        { handleCardVisibilityChange: _ } = (0, u.E)(S, "home", "marketing featured block"),
        x = (0, d.YG)(h, C),
        O = l.useRef(null),
        y = null == C ? void 0 : C.bodyText,
        k = (0, i.sp)();
    return (0, r.jsx)(a.$, {
        innerRef: O,
        onChange: _,
        threshold: 0,
        children: (0, r.jsxs)(s.P3F, {
            className: b.featuredBlock,
            innerRef: O,
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
            })({}, null != x && { backgroundImage: "url(".concat(x, ")") }),
            onClick: () => {
                v({
                    sourceButton: "shop marketing tile",
                    categorySkuId: S,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: null == h ? void 0 : h.isOrbsExclusive,
                }),
                    o.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                        sku_id: S,
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
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: E,
                        className: b.featuredBlockBadge,
                    }),
                (0, r.jsx)("div", {
                    className: b.featuredBlockTextContainer,
                    children:
                        null != y &&
                        (0, r.jsx)(s.Heading, {
                            lineClamp: 4,
                            className: b.featuredBlockBodyText,
                            style: { color: null != (p = null == C ? void 0 : C.bannerTextColor) ? p : "white" },
                            variant: "heading-md/medium",
                            children: y,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: b.featuredBlockButtonContainer,
                    children: (0, r.jsx)(s.Button, {
                        variant: "overlay-primary",
                        text: g.intl.string(g.t.jVcuVY),
                        onClick: (e) => {
                            v({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: S,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: null == h ? void 0 : h.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                o.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                    sku_id: S,
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
