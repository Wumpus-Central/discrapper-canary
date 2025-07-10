n.d(t, { a: () => p });
var r = n(255367),
    i = n(481060),
    a = n(688465),
    l = n(794231),
    o = n(558060),
    s = n(539598),
    c = n(755007),
    u = n(231338),
    d = n(388032),
    m = n(651726);
function f(e) {
    var t;
    let { orbPrice: n, isProductDisabled: o, hasSufficientOrbs: s } = e,
        { showBetaTag: u } = l.Z.useExperiment({ location: 'shop_orb_full_price_line' }),
        f = o ? d.intl.string(d.t.wu4gyc) : d.intl.string(d.t.eFNRzc),
        p = o || !s;
    return (0, r.jsxs)('div', {
        className: m.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: m.orbText,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: p ? m.disabled : void 0,
                        children: f
                    }),
                    u && (0, r.jsx)(a.Z, {})
                ]
            }),
            (0, r.jsx)(c.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: p ? m.disabled : void 0
            })
        ]
    });
}
function p(e) {
    var t;
    let { prices: n, isPremiumUser: i, discount: a, product: l, hasSufficientOrbs: d, isProductDisabled: p } = e;
    return 0 === n.length
        ? null
        : n[0].currency === u.pK.DISCORD_ORB
          ? (0, r.jsx)(f, {
                orbPrice: n[0],
                isProductDisabled: p,
                hasSufficientOrbs: d
            })
          : (0, r.jsxs)('div', {
                className: m.priceLine,
                children: [
                    (0, r.jsxs)('div', {
                        className: m.priceTagContainer,
                        children: [
                            (0, r.jsx)(o.Z, {
                                product: l,
                                discount: a,
                                isPremiumUser: i,
                                hideStrikethroughPrice: !i,
                                nitroIconType: 'tooltip',
                                nitroIconSize: 'xs'
                            }),
                            i ? null : (0, r.jsx)(s.Z, { product: l })
                        ]
                    }),
                    n.length > 1 &&
                        n[1].currency === u.pK.DISCORD_ORB &&
                        (0, r.jsx)(c.Z, {
                            orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
                            className: p || !d ? m.disabled : void 0
                        })
                ]
            });
}
