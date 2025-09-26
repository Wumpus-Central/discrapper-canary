n.d(t, { a: () => m });
var r = n(951288),
    i = n(481060),
    l = n(558060),
    a = n(539598),
    o = n(755007),
    s = n(231338),
    c = n(388032),
    u = n(551909);
function d(e) {
    var t;
    let { orbPrice: n, isProductDisabled: l, hasSufficientOrbs: a } = e,
        s = l ? c.intl.string(c.t.wu4gyc) : c.intl.string(c.t.eFNRzc),
        d = l || !a;
    return (0, r.jsxs)("div", {
        className: u.priceLine,
        children: [
            (0, r.jsx)("div", {
                className: u.orbText,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    className: d ? u.disabled : void 0,
                    children: s,
                }),
            }),
            (0, r.jsx)(o.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: d ? u.disabled : void 0,
            }),
        ],
    });
}
function m(e) {
    var t;
    let {
            prices: n,
            isPremiumUser: i,
            discount: c,
            product: m,
            hasSufficientOrbs: p,
            isProductDisabled: v,
            discountOfferAmount: f,
        } = e,
        h = null != f;
    return 0 === n.length
        ? null
        : n[0].currency === s.pK.DISCORD_ORB
          ? (0, r.jsx)(d, {
                orbPrice: n[0],
                isProductDisabled: v,
                hasSufficientOrbs: p,
            })
          : (0, r.jsxs)("div", {
                className: u.priceLine,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.priceTagContainer,
                        children: [
                            (0, r.jsx)(l.Z, {
                                product: m,
                                discount: c,
                                isPremiumUser: i,
                                hideStrikethroughPrice: !i || h,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: f,
                            }),
                            i || h ? null : (0, r.jsx)(a.Z, { product: m }),
                        ],
                    }),
                    n.length > 1 &&
                        n[1].currency === s.pK.DISCORD_ORB &&
                        (0, r.jsx)(o.Z, {
                            orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
                            className: v || !p ? u.disabled : void 0,
                        }),
                ],
            });
}
