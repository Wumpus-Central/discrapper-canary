n.d(t, { Z: () => E });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(622535),
    o = n(481060),
    c = n(100527),
    u = n(994587),
    d = n(297651),
    g = n(993222),
    p = n(932083),
    f = n(719075),
    C = n(558261),
    _ = n(311583),
    h = n(396445),
    m = n(215023),
    b = n(751677);
let E = (e) => {
    let { product: t, variantSwitcher: n, selectedVariantIndex: a } = e,
        E = (0, u.Nd)(),
        v = null == E ? void 0 : E.tab,
        S = l.useRef(null),
        { handleCardVisibilityChange: x } = (0, d.E)(t.skuId, v === m.AW.CATALOG ? "full" : v),
        O = (0, h.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD);
    return (0, r.jsx)(s.$, {
        innerRef: S,
        onChange: x,
        threshold: 0,
        children: (0, r.jsx)("div", {
            className: b.baseProductCardHoverContainer,
            children: (0, r.jsx)(o.kL8, {
                ref: S,
                onClick: O,
                "aria-label": (0, h.NT)(t),
                className: b.baseProductCardContainer,
                children: (0, r.jsxs)("div", {
                    className: b.baseProductCardContentContainer,
                    children: [
                        (0, r.jsx)(g.Z, { product: t }),
                        (0, r.jsxs)("div", {
                            className: b.innerContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i()(b.baseProductCardDetailsContainer, {
                                        [b.hasVariantSwitcher]: null != n,
                                    }),
                                    children: [
                                        (0, r.jsx)(p.Z, { product: t }),
                                        null != n &&
                                            (0, r.jsx)("div", {
                                                className: b.hoveredVariantSwitcher,
                                                children: n,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: b.baseProductCardFooter,
                                    children: [(0, r.jsx)(f.Z, { product: t }), n],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: b.innerHover,
                            children: (0, r.jsxs)(o.hE2, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(C.Z, {
                                        product: t,
                                        cardRef: S,
                                        selectedVariantIndex: a,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        product: t,
                                        cardRef: S,
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
