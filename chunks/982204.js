n.d(t, {
    B: () => m,
    E: () => p
}),
    n(953529);
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    o = n(228624),
    s = n(811334),
    l = n(215148),
    c = n(937615),
    u = n(981631),
    d = n(388032),
    f = n(718578);
function _(e) {
    let { sku: t, value: n } = e,
        i = (0, o.ed)('SKUInvoicePreview');
    return t.productLine === u.POd.COLLECTIBLES && i
        ? (0, r.jsx)(l.C, {
              sku: t,
              value: n,
              className: f.invoiceRow
          })
        : (0, r.jsx)(s.B1, {
              label: t.name,
              value: n,
              className: f.invoiceRow
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
    },
    h = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    };
function m(e) {
    let { sku: t, skuPricePreview: n } = e;
    a()(null != n.amount, 'SKU must have a price set.'), a()(null != n.invoice_items && 1 === n.invoice_items.length, 'SKU preview must have single line item');
    let i = n.invoice_items[0],
        o = null != i.unit_price ? i.unit_price.amount : n.subtotal,
        l = !n.tax_inclusive && n.tax > 0,
        u = h(i),
        p = o !== n.amount;
    return (0, r.jsxs)(s.aO, {
        className: f.invoice,
        children: [
            (0, r.jsx)(_, {
                sku: t,
                value: (0, c.T4)(o, n.currency)
            }),
            null != u &&
                (0, r.jsx)(s.B1, {
                    label: u.description,
                    value: (0, c.T4)(-1 * u.amount, n.currency),
                    className: f.invoiceDiscountRow
                }),
            l &&
                (0, r.jsx)(s.B1, {
                    label: d.intl.string(d.t['/I8zmJ']),
                    value: (0, c.T4)(n.tax, n.currency),
                    className: f.invoiceRow
                }),
            p &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.UN, {}),
                        (0, r.jsx)(s.az, {
                            label: d.intl.format(d.t['+B5KfH'], {}),
                            value: (0, c.T4)(n.amount, n.currency),
                            className: f.invoiceRow
                        })
                    ]
                })
        ]
    });
}
