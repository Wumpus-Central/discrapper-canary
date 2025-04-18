n.d(t, {
    B: () => h,
    E: () => p
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
    f = n(808241);
function _(e) {
    let { sku: t, value: n } = e,
        i = (0, a.ed)('SKUInvoicePreview');
    return t.productLine === u.POd.COLLECTIBLES && i
        ? (0, r.jsx)(l.C, {
              sku: t,
              value: n,
              className: f.subscriptionCostRow
          })
        : (0, r.jsx)(s.B1, {
              label: t.name,
              value: n,
              className: f.subscriptionCostRow
          });
}
let p = (e) => {
    let { sku: t, value: n } = e;
    return (0, r.jsx)(s.aO, {
        className: f.invoice,
        children: (0, r.jsx)(_, {
            sku: t,
            value: n
        })
    });
};
function h(e) {
    let { sku: t, skuPricePreview: n } = e;
    o()(null != n.amount, 'SKU must have a price set.'), o()(null != n.invoice_items && 1 === n.invoice_items.length, 'SKU preview must have single line item');
    let i = n.invoice_items[0],
        a = null != i.unit_price ? i.unit_price.amount : n.subtotal,
        l = !n.tax_inclusive && n.tax > 0,
        u = a !== n.amount;
    return (0, r.jsxs)(s.aO, {
        className: f.invoice,
        children: [
            (0, r.jsx)(_, {
                sku: t,
                value: (0, c.T4)(a, n.currency)
            }),
            l &&
                (0, r.jsx)(s.B1, {
                    label: d.NW.string(d.t['/I8zmJ']),
                    value: (0, c.T4)(n.tax, n.currency),
                    className: f.subscriptionCostRow
                }),
            u &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.UN, {}),
                        (0, r.jsx)(s.az, {
                            label: d.NW.format(d.t['+B5KfH'], {}),
                            value: (0, c.T4)(n.amount, n.currency),
                            className: f.subscriptionCostRow
                        })
                    ]
                })
        ]
    });
}
