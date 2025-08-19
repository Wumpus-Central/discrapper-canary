n.d(t, { a: () => g });
var r = n(951288),
    a = n(481060),
    i = n(688465),
    o = n(794231),
    l = n(558060),
    c = n(539598),
    s = n(755007),
    u = n(231338),
    d = n(388032),
    p = n(551909);
function m(e) {
    var t;
    let { orbPrice: n, isProductDisabled: l, hasSufficientOrbs: c } = e,
        { showBetaTag: u } = o.Z.useExperiment({ location: "shop_orb_full_price_line" }),
        m = l ? d.intl.string(d.t.wu4gyc) : d.intl.string(d.t.eFNRzc),
        g = l || !c;
    return (0, r.jsxs)("div", {
        className: p.priceLine,
        children: [
            (0, r.jsxs)("div", {
                className: p.orbText,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        className: g ? p.disabled : void 0,
                        children: m,
                    }),
                    u && (0, r.jsx)(i.Z, {}),
                ],
            }),
            (0, r.jsx)(s.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: g ? p.disabled : void 0,
            }),
        ],
    });
}
function g(e) {
    var t;
    let {
            prices: n,
            isPremiumUser: a,
            discount: i,
            product: o,
            hasSufficientOrbs: d,
            isProductDisabled: g,
            discountOfferAmount: f,
        } = e,
        _ = null != f;
    return 0 === n.length
        ? null
        : n[0].currency === u.pK.DISCORD_ORB
          ? (0, r.jsx)(m, {
                orbPrice: n[0],
                isProductDisabled: g,
                hasSufficientOrbs: d,
            })
          : (0, r.jsxs)("div", {
                className: p.priceLine,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.priceTagContainer,
                        children: [
                            (0, r.jsx)(l.Z, {
                                product: o,
                                discount: i,
                                isPremiumUser: a,
                                hideStrikethroughPrice: !a || _,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: f,
                            }),
                            a || _ ? null : (0, r.jsx)(c.Z, { product: o }),
                        ],
                    }),
                    n.length > 1 &&
                        n[1].currency === u.pK.DISCORD_ORB &&
                        (0, r.jsx)(s.Z, {
                            orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
                            className: g || !d ? p.disabled : void 0,
                        }),
                ],
            });
}
