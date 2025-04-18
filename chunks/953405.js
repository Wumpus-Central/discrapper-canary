n.d(t, { a: () => m });
var r = n(200651),
    i = n(481060),
    a = n(688465),
    l = n(558060),
    s = n(755007),
    o = n(231338),
    c = n(388032),
    u = n(651726);
function d(e) {
    var t;
    let { orbPrice: n, isProductDisabled: l, hasSufficientOrbs: o } = e,
        d = l ? c.NW.string(c.t.wu4gyc) : c.NW.string(c.t.eFNRzc),
        m = l || !o;
    return (0, r.jsxs)('div', {
        className: u.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: u.orbText,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: m ? u.disabled : void 0,
                        children: d
                    }),
                    (0, r.jsx)(a.Z, {})
                ]
            }),
            (0, r.jsx)(s.Z, {
                orbAmount: null != (t = null == n ? void 0 : n.amount) ? t : 1 / 0,
                className: m ? u.disabled : void 0
            })
        ]
    });
}
function m(e) {
    var t;
    let { prices: n, isPremiumUser: i, discount: a, product: c, hasSufficientOrbs: m, isProductDisabled: p } = e;
    if (0 === n.length) return null;
    if (n[0].currency === o.pK.DISCORD_ORB)
        return (0, r.jsx)(d, {
            orbPrice: n[0],
            isProductDisabled: p,
            hasSufficientOrbs: m
        });
    let f = !i;
    return (0, r.jsxs)('div', {
        className: u.priceLine,
        children: [
            (0, r.jsx)(l.Z, {
                product: c,
                discount: a,
                isPremiumUser: i,
                nitroUpsell: f,
                className: f ? u.nitroUpsell : void 0
            }),
            n.length > 1 &&
                n[1].currency === o.pK.DISCORD_ORB &&
                (0, r.jsx)(s.Z, {
                    orbAmount: null != (t = n[1].amount) ? t : 1 / 0,
                    className: p || !m ? u.disabled : void 0
                })
        ]
    });
}
