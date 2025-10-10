n.d(t, { q: () => C });
var r = n(951288),
    l = n(647438),
    a = n(622535),
    s = n(481060),
    i = n(626135),
    o = n(381585),
    c = n(597688),
    u = n(297651),
    d = n(794324),
    g = n(981631),
    p = n(388032),
    f = n(310582);
let C = (e) => {
    var t, n, C;
    let h,
        { category: _, subblock: m, badgeText: b, handleTransition: E } = e;
    null != m &&
        (h =
            null == (t = c.Z.getCategoryByStoreListingId(null == m ? void 0 : m.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let S = null != (n = null != h ? h : null == _ ? void 0 : _.skuId) ? n : "",
        { handleCardVisibilityChange: v } = (0, u.E)(S, "home", "marketing featured block"),
        x = (0, d.YG)(_, m),
        O = l.useRef(null),
        y = null == m ? void 0 : m.bodyText,
        T = (0, o.sp)();
    return (0, r.jsx)(a.$, {
        innerRef: O,
        onChange: v,
        threshold: 0,
        children: (0, r.jsxs)(s.P3F, {
            className: f.featuredBlock,
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
                E("shop marketing tile", S),
                    i.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                        sku_id: S,
                        page_type: "home",
                        page_section: null == T ? void 0 : T.pageSection,
                        page_category: null == T ? void 0 : T.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == T ? void 0 : T.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != b &&
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: b,
                        className: f.featuredBlockBadge,
                    }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockTextContainer,
                    children:
                        null != y &&
                        (0, r.jsx)(s.X6q, {
                            lineClamp: 4,
                            className: f.featuredBlockBodyText,
                            style: { color: null != (C = null == m ? void 0 : m.bannerTextColor) ? C : "white" },
                            variant: "heading-md/medium",
                            children: y,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockButtonContainer,
                    children: (0, r.jsx)(s.zxk, {
                        variant: "overlay-primary",
                        text: p.intl.string(p.t.jVcuVV),
                        onClick: (e) => {
                            E("shop marketing take me there button", S),
                                e.stopPropagation(),
                                i.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                                    sku_id: S,
                                    page_type: "home",
                                    page_section: null == T ? void 0 : T.pageSection,
                                    page_category: null == T ? void 0 : T.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == T ? void 0 : T.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
