r.d(t, { Z: () => o });
var n = r(200651);
r(192379);
var l = r(481060),
    i = r(937615),
    a = r(465261);
function o(e) {
    let { price: t, isPremiumUser: r } = e;
    return (0, n.jsxs)(l.X6q, {
        variant: 'heading-md/semibold',
        className: a.priceTag,
        children: [r && (0, n.jsx)(l.SrA, {}), (0, i.T4)(t.amount, t.currency)]
    });
}
