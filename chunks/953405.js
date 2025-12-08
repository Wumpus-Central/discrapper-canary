n.d(t, { a: () => m });
var r = n(54381),
    i = n(481060),
    l = n(558060),
    a = n(539598),
    o = n(409116),
    s = n(231338),
    c = n(388032),
    u = n(551909);
function d(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: l } = e,
        a = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU),
        s = n || !l;
    return (0, r.jsxs)("div", {
        className: u.priceLine,
        children: [
            (0, r.jsx)("div", {
                className: u.orbText,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    className: s ? u.disabled : void 0,
                    children: a,
                }),
            }),
            (0, r.jsx)(o.F, {
                price: t,
                className: s ? u.disabled : void 0,
            }),
        ],
    });
}
function m(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: i,
            product: c,
            hasSufficientOrbs: m,
            isProductDisabled: p,
            discountOfferAmount: f,
        } = e,
        v = null != f;
    return 0 === t.length
        ? null
        : t[0].currency === s.pK.DISCORD_ORB
          ? (0, r.jsx)(d, {
                orbPrice: t[0],
                isProductDisabled: p,
                hasSufficientOrbs: m,
            })
          : (0, r.jsxs)("div", {
                className: u.priceLine,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.priceTagContainer,
                        children: [
                            (0, r.jsx)(l.Z, {
                                product: c,
                                discount: i,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || v,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: f,
                            }),
                            n || v ? null : (0, r.jsx)(a.Z, { product: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === s.pK.DISCORD_ORB &&
                        (0, r.jsx)(o.F, {
                            price: t[1],
                            className: p || !m ? u.disabled : void 0,
                        }),
                ],
            });
}
