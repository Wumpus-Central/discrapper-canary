n.d(t, { a: () => m });
var r = n(200651),
    i = n(481060),
    a = n(688465),
    l = n(558060),
    o = n(755007),
    s = n(231338),
    c = n(388032),
    u = n(598409);
function d(e) {
    var t;
    let { orbPrice: n } = e;
    return (0, r.jsxs)('div', {
        className: u.priceLine,
        children: [
            (0, r.jsxs)('div', {
                className: u.orbText,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        children: c.NW.string(c.t.eFNRzc)
                    }),
                    (0, r.jsx)(a.Z, {})
                ]
            }),
            (0, r.jsx)(o.Z, { orbAmount: null !== (t = null == n ? void 0 : n.amount) && void 0 !== t ? t : 1 / 0 })
        ]
    });
}
function m(e) {
    var t;
    let { prices: n, isPremiumUser: i, discount: a, product: c } = e;
    if (0 === n.length) return null;
    if (n[0].currency === s.pK.DISCORD_ORB) return (0, r.jsx)(d, { orbPrice: n[0] });
    let m = !i;
    return (0, r.jsxs)('div', {
        className: u.priceLine,
        children: [
            (0, r.jsx)(l.Z, {
                product: c,
                discount: a,
                isPremiumUser: i,
                nitroUpsell: m,
                className: m ? u.nitroUpsell : void 0
            }),
            n.length > 1 && n[1].currency === s.pK.DISCORD_ORB && (0, r.jsx)(o.Z, { orbAmount: null !== (t = n[1].amount) && void 0 !== t ? t : 1 / 0 })
        ]
    });
}
