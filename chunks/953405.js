n.d(t, { a: () => _ });
var r = n(255367),
    a = n(481060),
    i = n(688465),
    o = n(794231),
    c = n(558060),
    s = n(539598),
    l = n(755007),
    u = n(231338),
    d = n(388032),
    p = n(651726);
function m(e) {
    var t;
    let { orbPrice: n, isProductDisabled: c, hasSufficientOrbs: s } = e,
        { showBetaTag: u } = o.Z.useExperiment({ location: 'shop_orb_full_price_line' }),
        m = c ? d.intl.string(d.t.wu4gyc) : d.intl.string(d.t.eFNRzc),
        _ = c || !s;
    return (0, r.jsxs)('div', {
        className: p.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: p.orbText,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        className: _ ? p.disabled : void 0,
                        children: m
                    }),
                    u && (0, r.jsx)(i.Z, {})
                ]
            }),
            (0, r.jsx)(l.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: _ ? p.disabled : void 0
            })
        ]
    });
}
function _(e) {
    var t;
    let { prices: n, isPremiumUser: a, discount: i, product: o, hasSufficientOrbs: d, isProductDisabled: _, discountOfferAmount: f } = e,
        g = null != f;
    return 0 === n.length
        ? null
        : n[0].currency === u.pK.DISCORD_ORB
          ? (0, r.jsx)(m, {
                orbPrice: n[0],
                isProductDisabled: _,
                hasSufficientOrbs: d
            })
          : (0, r.jsxs)('div', {
                className: p.priceLine,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.priceTagContainer,
                        children: [
                            (0, r.jsx)(c.Z, {
                                product: o,
                                discount: i,
                                isPremiumUser: a,
                                hideStrikethroughPrice: !a || g,
                                nitroIconType: 'tooltip',
                                nitroIconSize: 'xs',
                                discountOfferAmount: f
                            }),
                            a || g ? null : (0, r.jsx)(s.Z, { product: o })
                        ]
                    }),
                    n.length > 1 &&
                        n[1].currency === u.pK.DISCORD_ORB &&
                        (0, r.jsx)(l.Z, {
                            orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
                            className: _ || !d ? p.disabled : void 0
                        })
                ]
            });
}
