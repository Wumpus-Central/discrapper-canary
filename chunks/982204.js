(n.d(t, {
    B: () => P,
    E: () => R
}),
    n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(979554),
    c = n(442837),
    u = n(481060),
    d = n(597688),
    _ = n(228624),
    f = n(473608),
    p = n(811334),
    h = n(706454),
    m = n(930153),
    g = n(937615),
    E = n(981631),
    b = n(388032),
    y = n(63477);
let O = (e, t, n) => (null != n && e.productLine === E.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE && t ? 'THREE_COLUMN' : 'TWO_COLUMN'),
    v = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    I = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: a()(y.invoiceRow, n),
            children: t
        });
    },
    T = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: a()(y.invoiceTagColumn, n),
            children: t
        });
    },
    S = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: a()(y.invoiceDescriptionColumn, n),
            children: t
        });
    },
    A = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: n,
            children: t
        });
    },
    N = (e) => {
        let { sku: t } = e,
            n = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id));
        if (null != n && t.productLine === E.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE)
            return (0, r.jsx)(f.O, {
                sku: t,
                fallbackLabel: null
            });
    },
    C = (e) => {
        let { discount: t } = e,
            n = (0, c.e7)([h.default], () => h.default.locale),
            i = null != t && null != t.percentage_amount ? (0, m.T3)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)('div', {
            className: y.invoiceDiscountTag,
            children: (0, r.jsx)(u.Text, {
                variant: 'text-sm/semibold',
                color: 'always-white',
                children: i
            })
        });
    },
    R = (e) => {
        let { sku: t, value: n } = e,
            i = (0, _.ed)('SKUInvoicePreview'),
            a = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
            o = O(t, i, a);
        return (0, r.jsx)(p.aO, {
            className: y.invoiceTable,
            children: (0, r.jsxs)(I, {
                children: [
                    'THREE_COLUMN' === o && (0, r.jsx)(T, { children: (0, r.jsx)(N, { sku: t }) }),
                    (0, r.jsx)(S, {
                        className: y.invoiceRegularText,
                        children: t.name
                    }),
                    (0, r.jsx)(A, {
                        className: y.invoiceRegularText,
                        children: n
                    })
                ]
            })
        });
    };
function P(e) {
    let { sku: t, skuPricePreview: n } = e;
    (s()(null != n.amount, 'SKU must have a price set.'), s()(null != n.invoice_items && 1 === n.invoice_items.length, 'SKU preview must have single line item'));
    let i = (0, _.ed)('SKUInvoicePreview'),
        a = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
        o = O(t, i, a),
        l = n.invoice_items[0],
        u = l.unit_price.amount,
        f = !n.tax_inclusive && n.tax > 0,
        h = v(l),
        m = u !== n.amount;
    return (0, r.jsxs)(p.aO, {
        className: y.invoiceTable,
        children: [
            (0, r.jsxs)(I, {
                children: [
                    'THREE_COLUMN' === o && (0, r.jsx)(T, { children: (0, r.jsx)(N, { sku: t }) }),
                    (0, r.jsx)(S, {
                        className: y.invoiceRegularText,
                        children: t.name
                    }),
                    (0, r.jsx)(A, {
                        className: y.invoiceRegularText,
                        children: (0, g.T4)(u, n.currency)
                    })
                ]
            }),
            null != h &&
                (0, r.jsxs)(I, {
                    children: [
                        'THREE_COLUMN' === o && (0, r.jsx)(T, { children: (0, r.jsx)(C, { discount: h }) }),
                        (0, r.jsx)(S, {
                            className: y.invoiceDiscountText,
                            children: h.description
                        }),
                        (0, r.jsx)(A, {
                            className: y.invoiceDiscountText,
                            children: (0, g.T4)(-1 * h.amount, n.currency)
                        })
                    ]
                }),
            f &&
                (0, r.jsxs)(I, {
                    children: [
                        'THREE_COLUMN' === o && (0, r.jsx)(T, {}),
                        (0, r.jsx)(S, {
                            className: y.invoiceRegularText,
                            children: b.intl.string(b.t['/I8zmJ'])
                        }),
                        (0, r.jsx)(A, {
                            className: y.invoiceRegularText,
                            children: (0, g.T4)(n.tax, n.currency)
                        })
                    ]
                }),
            m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.UN, {}),
                        (0, r.jsxs)(I, {
                            className: y.totalRow,
                            children: [
                                (0, r.jsx)(T, {
                                    className: y.invoiceRegularText,
                                    children: b.intl.format(b.t['+B5KfH'], {})
                                }),
                                'THREE_COLUMN' === o && (0, r.jsx)(S, {}),
                                (0, r.jsx)(A, {
                                    className: y.invoiceRegularText,
                                    children: (0, g.T4)(n.amount, n.currency)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
}
