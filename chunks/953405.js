n.d(t, { a: () => f });
var r = n(255367),
    i = n(481060),
    l = n(688465),
    a = n(794231),
    o = n(558060),
    s = n(539598),
    c = n(755007),
    u = n(231338),
    d = n(388032),
    m = n(651726);
function p(e) {
    var t;
    let { orbPrice: n, isProductDisabled: o, hasSufficientOrbs: s } = e,
        { showBetaTag: u } = a.Z.useExperiment({ location: 'shop_orb_full_price_line' }),
        p = o ? d.intl.string(d.t.wu4gyc) : d.intl.string(d.t.eFNRzc),
        f = o || !s;
    return (0, r.jsxs)('div', {
        className: m.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: m.orbText,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: f ? m.disabled : void 0,
                        children: p
                    }),
                    u && (0, r.jsx)(l.Z, {})
                ]
            }),
            (0, r.jsx)(c.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: f ? m.disabled : void 0
            })
        ]
    });
}
function f(e) {
    var t;
    let { prices: n, isPremiumUser: i, discount: l, product: a, hasSufficientOrbs: d, isProductDisabled: f } = e;
    return 0 === n.length
        ? null
        : n[0].currency === u.pK.DISCORD_ORB
          ? (0, r.jsx)(p, {
                orbPrice: n[0],
                isProductDisabled: f,
                hasSufficientOrbs: d
            })
          : (0, r.jsxs)('div', {
                className: m.priceLine,
                children: [
                    (0, r.jsxs)('div', {
                        className: m.priceTagContainer,
                        children: [
                            (0, r.jsx)(o.Z, {
                                product: a,
                                discount: l,
                                isPremiumUser: i,
                                hideStrikethroughPrice: !i,
                                nitroIconType: 'tooltip',
                                nitroIconSize: 'xs'
                            }),
                            i ? null : (0, r.jsx)(s.Z, { product: a })
                        ]
                    }),
                    n.length > 1 &&
                        n[1].currency === u.pK.DISCORD_ORB &&
                        (0, r.jsx)(c.Z, {
                            orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
                            className: f || !d ? m.disabled : void 0
                        })
                ]
            });
}
