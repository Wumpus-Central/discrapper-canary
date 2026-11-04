var i = n(652215),
    r = n(818348);
function a(e, t) {
    let n =
        null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
            ? e.prices[t].countryPrices
            : null != e.prices[i.lid.DEFAULT] && e.prices[i.lid.DEFAULT].countryPrices.prices.length > 0
              ? e.prices[i.lid.DEFAULT].countryPrices
              : null;
    return null != n ? n.prices[0] : null != e.price ? e.price : null;
}
n.d(
    t,
    {},
    {
        Ri: function (e) {
            let t = a(e, i.lid.DEFAULT) ?? { amount: 0, currency: r.Yr.USD },
                n = a(e, i.lid.GIFT) ?? { amount: 0, currency: r.Yr.USD };
            return t.currency !== n.currency || t.amount !== n.amount;
        },
        mC: function (e) {
            return null != e.price || null != e.prices[i.lid.DEFAULT];
        },
        y8: a,
    },
);
