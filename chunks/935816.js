n.d(t, {
    m: () => i,
});
var r = n(832946);

function i(e) {
    return null == e
        ? {}
        : Object.keys(e).reduce((t, n) => {
              if (null == e) return t;
              let i = e[n];
              return (
                  (t[n] = {
                      countryPrices: {
                          countryCode: i.country_prices.country_code,
                          prices: i.country_prices.prices.map((e) => (0, r.n_)(e, !0)),
                      },
                      paymentSourcePrices: {},
                  }),
                  t
              );
          }, {});
}
