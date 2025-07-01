n.d(t, { a: () => p });
var r = n(255367),
    i = n(481060),
    a = n(688465),
    l = n(794231),
    s = n(558060),
    o = n(755007),
    c = n(231338),
    u = n(388032),
    d = n(651726);
function m(e) {
    var t;
    let { orbPrice: n, isProductDisabled: s, hasSufficientOrbs: c } = e,
        { showBetaTag: m } = l.Z.useExperiment({ location: 'shop_orb_full_price_line' }),
        p = s ? u.intl.string(u.t.wu4gyc) : u.intl.string(u.t.eFNRzc),
        f = s || !c;
    return (0, r.jsxs)('div', {
        className: d.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: d.orbText,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: f ? d.disabled : void 0,
                        children: p
                    }),
                    m && (0, r.jsx)(a.Z, {})
                ]
            }),
            (0, r.jsx)(o.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: f ? d.disabled : void 0
            })
        ]
    });
}
function p(e) {
    var t;
    let { prices: n, isPremiumUser: i, discount: a, product: l, hasSufficientOrbs: u, isProductDisabled: p } = e;
    if (0 === n.length) return null;
    if (n[0].currency === c.pK.DISCORD_ORB)
        return (0, r.jsx)(m, {
            orbPrice: n[0],
            isProductDisabled: p,
            hasSufficientOrbs: u
        });
    let f = !i;
    return (0, r.jsxs)('div', {
        className: d.priceLine,
        children: [
            (0, r.jsx)(s.Z, {
                product: l,
                discount: a,
                isPremiumUser: i,
                nitroUpsell: f,
                className: f ? d.nitroUpsell : void 0
            }),
            n.length > 1 &&
                n[1].currency === c.pK.DISCORD_ORB &&
                (0, r.jsx)(o.Z, {
                    orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
                    className: p || !u ? d.disabled : void 0
                })
        ]
    });
}
