n.d(t, { Z: () => S });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(622535),
    o = n(481060),
    c = n(100527),
    u = n(994587),
    d = n(297651),
    g = n(993222),
    p = n(932083),
    f = n(719075),
    C = n(558261),
    _ = n(819882),
    h = n(786040),
    m = n(29121),
    b = n(215023),
    E = n(217726);
let S = (e) => {
    let { product: t, variantSwitcher: n, selectedVariantIndex: a } = e,
        S = (0, u.Nd)(),
        v = null == S ? void 0 : S.tab,
        x = (0, m.zQ)(t),
        O = l.useRef(null),
        { handleCardVisibilityChange: T } = (0, d.E)(t.skuId, v === b.AW.CATALOG ? "full" : v),
        y = (0, h.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD);
    return (0, r.jsx)(i.$, {
        innerRef: O,
        onChange: T,
        threshold: 0,
        children: (0, r.jsx)("div", {
            className: E.baseProductCardHoverContainer,
            children: (0, r.jsx)(o.kL8, {
                ref: O,
                onClick: y,
                "aria-label": x,
                className: E.baseProductCardContainer,
                children: (0, r.jsxs)("div", {
                    className: E.baseProductCardContentContainer,
                    children: [
                        (0, r.jsx)(g.Z, { product: t }),
                        (0, r.jsxs)("div", {
                            className: E.innerContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: s()(E.baseProductCardDetailsContainer, {
                                        [E.hasVariantSwitcher]: null != n,
                                    }),
                                    children: [
                                        (0, r.jsx)(p.Z, { product: t }),
                                        null != n &&
                                            (0, r.jsx)("div", {
                                                className: E.hoveredVariantSwitcher,
                                                children: n,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: E.baseProductCardFooter,
                                    children: [(0, r.jsx)(f.Z, { product: t }), n],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: E.innerHover,
                            children: (0, r.jsxs)(o.hE2, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(C.Z, {
                                        product: t,
                                        cardRef: O,
                                        selectedVariantIndex: a,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        product: t,
                                        cardRef: O,
                                        selectedVariantIndex: a,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
};
