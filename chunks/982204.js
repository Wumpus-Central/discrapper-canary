n.d(t, {
    B: () => p,
    E: () => _
});
var r = n(200651);
n(192379);
var i = n(512722),
    o = n.n(i),
    a = n(228624),
    s = n(811334),
    l = n(215148),
    c = n(937615),
    u = n(981631),
    d = n(388032),
    f = n(718578);
let _ = (e) => {
    let { sku: t, shouldShowProductPreview: n, value: i } = e;
    return (0, r.jsx)(s.aO, {
        className: f.invoice,
        children: n
            ? (0, r.jsx)(l.C, {
                  sku: t,
                  value: i,
                  className: f.subscriptionCostRow
              })
            : (0, r.jsx)(s.B1, {
                  label: t.name,
                  value: i,
                  className: f.subscriptionCostRow
              })
    });
};
function p(e) {
    let { sku: t, skuPricePreview: n } = e;
    o()(null != n.amount, 'SKU must have a price set.');
    let i = n.amount - n.tax,
        p = (0, a.ed)('SKUInvoicePreview'),
        h = t.productLine === u.POd.COLLECTIBLES && p;
    return !n.tax_inclusive && n.tax > 0
        ? (0, r.jsxs)(s.aO, {
              className: f.invoice,
              children: [
                  h
                      ? (0, r.jsx)(l.C, {
                            sku: t,
                            value: (0, c.T4)(i, n.currency),
                            className: f.subscriptionCostRow
                        })
                      : (0, r.jsx)(s.B1, {
                            label: t.name,
                            value: (0, c.T4)(i, n.currency),
                            className: f.subscriptionCostRow
                        }),
                  (0, r.jsx)(s.B1, {
                      label: d.NW.string(d.t['/I8zmJ']),
                      value: (0, c.T4)(n.tax, n.currency),
                      className: f.subscriptionCostRow
                  }),
                  (0, r.jsx)(s.UN, {}),
                  (0, r.jsx)(s.az, {
                      label: d.NW.format(d.t['+B5KfH'], {}),
                      value: (0, c.T4)(n.amount, n.currency),
                      className: f.subscriptionCostRow
                  })
              ]
          })
        : (0, r.jsx)(_, {
              sku: t,
              value: (0, c.T4)(n.amount, n.currency),
              shouldShowProductPreview: h
          });
}
