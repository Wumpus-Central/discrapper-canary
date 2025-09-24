n.d(t, { Z: () => b });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(622535),
    o = n(481060),
    c = n(100527),
    u = n(297651),
    d = n(993222),
    g = n(932083),
    p = n(719075),
    f = n(558261),
    h = n(819882),
    C = n(786040),
    _ = n(215023),
    m = n(217726);
let b = (e) => {
    let { product: t, variantSwitcher: n, selectedVariantIndex: a, config: b } = e,
        E = l.useRef(null),
        S = l.useMemo(
            () => ({
                tab: b.tab,
                shopBlockType: b.shopBlockType,
            }),
            [b.tab, b.shopBlockType],
        ),
        { handleCardVisibilityChange: x } = (0, u.E)(t.skuId, S.tab === _.AW.CATALOG ? "full" : S.tab),
        v = (0, C.J7)(t, S, c.Z.COLLECTIBLES_SHOP_CARD);
    return (0, r.jsx)(s.$, {
        innerRef: E,
        onChange: x,
        threshold: 0,
        children: (0, r.jsx)(o.tEY, {
            children: (0, r.jsx)(o.kL8, {
                ref: E,
                onClick: v,
                "aria-label": t.name,
                children: (0, r.jsxs)("div", {
                    className: m.baseProductCardContainer,
                    children: [
                        (0, r.jsx)(d.Z, {
                            product: t,
                            config: S,
                        }),
                        (0, r.jsxs)("div", {
                            className: m.innerContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i()(m.baseProductCardDetailsContainer, {
                                        [m.hasVariantSwitcher]: null != n,
                                    }),
                                    children: [
                                        (0, r.jsx)(g.Z, { product: t }),
                                        null != n &&
                                            (0, r.jsx)("div", {
                                                className: m.hoveredVariantSwitcher,
                                                children: n,
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: m.baseProductCardFooter,
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            product: t,
                                            config: S,
                                        }),
                                        n,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: m.innerHover,
                            children: (0, r.jsxs)(o.hE2, {
                                wrap: !1,
                                fullWidth: !0,
                                children: [
                                    (0, r.jsx)(f.Z, {
                                        product: t,
                                        cardRef: E,
                                        config: S,
                                        selectedVariantIndex: a,
                                    }),
                                    (0, r.jsx)(h.Z, {
                                        product: t,
                                        cardRef: E,
                                        config: S,
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
