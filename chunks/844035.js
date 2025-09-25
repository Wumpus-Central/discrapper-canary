n.d(t, { Z: () => E });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(622535),
    o = n(481060),
    c = n(100527),
    u = n(994587),
    d = n(297651),
    g = n(993222),
    p = n(932083),
    f = n(719075),
    h = n(558261),
    C = n(819882),
    _ = n(786040),
    m = n(215023),
    b = n(217726);
let E = (e) => {
    let { product: t, variantSwitcher: n, selectedVariantIndex: i } = e,
        E = (0, u.Nd)(),
        S = null == E ? void 0 : E.tab,
        v = l.useRef(null),
        { handleCardVisibilityChange: x } = (0, d.E)(t.skuId, S === m.AW.CATALOG ? "full" : S),
        O = (0, _.J7)(t, c.Z.COLLECTIBLES_SHOP_CARD);
    return (0, r.jsx)(s.$, {
        innerRef: v,
        onChange: x,
        threshold: 0,
        children: (0, r.jsx)(o.tEY, {
            children: (0, r.jsx)(o.kL8, {
                ref: v,
                onClick: O,
                "aria-label": t.name,
                children: (0, r.jsxs)("div", {
                    className: b.baseProductCardContainer,
                    children: [
                        (0, r.jsx)(g.Z, { product: t }),
                        (0, r.jsxs)("div", {
                            className: b.innerContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: a()(b.baseProductCardDetailsContainer, {
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
                                    (0, r.jsx)(h.Z, {
                                        product: t,
                                        cardRef: v,
                                        selectedVariantIndex: i,
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        product: t,
                                        cardRef: v,
                                        selectedVariantIndex: i,
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
