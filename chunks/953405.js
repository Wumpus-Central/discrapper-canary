n.d(t, { a: () => p });
var r = n(255367),
    i = n(481060),
    l = n(688465),
    a = n(794231),
    s = n(558060),
    o = n(755007),
    c = n(231338),
    u = n(388032),
    d = n(651726);
function m(e) {
    var t;
    let { orbPrice: n, isProductDisabled: s, hasSufficientOrbs: c } = e,
        { showBetaTag: m } = a.Z.useExperiment({ location: 'shop_orb_full_price_line' }),
        p = s ? u.intl.string(u.t.wu4gyc) : u.intl.string(u.t.eFNRzc),
        h = s || !c;
    return (0, r.jsxs)('div', {
        className: d.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: d.orbText,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: h ? d.disabled : void 0,
                        children: p
                    }),
                    m && (0, r.jsx)(l.Z, {})
                ]
            }),
            (0, r.jsx)(o.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: h ? d.disabled : void 0
            })
        ]
    });
}
function p(e) {
    var t;
    let { prices: n, isPremiumUser: i, discount: l, product: a, hasSufficientOrbs: u, isProductDisabled: p } = e;
    if (0 === n.length) return null;
    if (n[0].currency === c.pK.DISCORD_ORB)
        return (0, r.jsx)(m, {
            orbPrice: n[0],
            isProductDisabled: p,
            hasSufficientOrbs: u
        });
    let h = !i;
    return (0, r.jsxs)('div', {
        className: d.priceLine,
        children: [
            (0, r.jsx)(s.Z, {
                product: a,
                discount: l,
                isPremiumUser: i,
                nitroUpsell: h,
                className: h ? d.nitroUpsell : void 0
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
