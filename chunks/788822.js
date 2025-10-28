n.d(t, { q: () => C });
var r = n(951288),
    l = n(647438),
    i = n(622535),
    o = n(481060),
    s = n(626135),
    a = n(381585),
    c = n(597688),
    u = n(297651),
    d = n(794324),
    g = n(981631),
    p = n(388032),
    f = n(310582);
let C = (e) => {
    var t, n, C;
    let h,
        { category: _, subblock: m, badgeText: b, handleTransition: v } = e;
    null != m &&
        (h =
            null == (t = c.Z.getCategoryByStoreListingId(null == m ? void 0 : m.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let E = null != (n = null != h ? h : null == _ ? void 0 : _.skuId) ? n : "",
        { handleCardVisibilityChange: x } = (0, u.E)(E, "home", "marketing featured block"),
        O = (0, d.YG)(_, m),
        S = l.useRef(null),
        y = null == m ? void 0 : m.bodyText,
        j = (0, a.sp)();
    return (0, r.jsx)(i.$, {
        innerRef: S,
        onChange: x,
        threshold: 0,
        children: (0, r.jsxs)(o.P3F, {
            className: f.featuredBlock,
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
                v("shop marketing tile", E, void 0, !0),
                    s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: E,
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
                    (0, r.jsx)(o.IGR, {
                        disableColor: !0,
                        text: b,
                        className: f.featuredBlockBadge,
                    }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockTextContainer,
                    children:
                        null != y &&
                        (0, r.jsx)(o.Heading, {
                            lineClamp: 4,
                            className: f.featuredBlockBodyText,
                            style: { color: null != (C = null == m ? void 0 : m.bannerTextColor) ? C : "white" },
                            variant: "heading-md/medium",
                            children: y,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockButtonContainer,
                    children: (0, r.jsx)(o.Button, {
                        variant: "overlay-primary",
                        text: p.intl.string(p.t.jVcuVY),
                        onClick: (e) => {
                            v("shop marketing take me there button", E, void 0, !0),
                                e.stopPropagation(),
                                s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                                    sku_id: E,
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
