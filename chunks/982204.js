n.d(t, {
    B: () => R,
    E: () => C,
}),
    n(953529);
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
    f = n(473608),
    _ = n(811334),
    p = n(706454),
    h = n(930153),
    m = n(937615),
    g = n(981631),
    E = n(388032),
    b = n(221152);
let y = (e, t) =>
        null != t && e.productLine === g.POd.COLLECTIBLES && t.type !== l.Z.BUNDLE ? "THREE_COLUMN" : "TWO_COLUMN",
    O = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    v = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(b.invoiceRow, n),
            children: t,
        });
    },
    I = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(b.invoiceTagColumn, n),
            children: t,
        });
    },
    T = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(b.invoiceDescriptionColumn, n),
            children: t,
        });
    },
    S = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: n,
            children: t,
        });
    },
    A = (e) => {
        let { sku: t } = e,
            n = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id));
        if (null != n && t.productLine === g.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE)
            return (0, r.jsx)(f.O, {
                sku: t,
                fallbackLabel: null,
            });
    },
    N = (e) => {
        let { discount: t } = e,
            n = (0, c.e7)([p.default], () => p.default.locale),
            i = null != t && null != t.percentage_amount ? (0, h.T3)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: b.invoiceDiscountTag,
            children: (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: i,
            }),
        });
    },
    C = (e) => {
        let { sku: t, value: n } = e,
            i = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
            a = y(t, i);
        return (0, r.jsx)(_.aO, {
            className: b.invoiceTable,
            children: (0, r.jsxs)(v, {
                children: [
                    "THREE_COLUMN" === a && (0, r.jsx)(I, { children: (0, r.jsx)(A, { sku: t }) }),
                    (0, r.jsx)(T, {
                        className: b.invoiceRegularText,
                        children: t.name,
                    }),
                    (0, r.jsx)(S, {
                        className: b.invoiceRegularText,
                        children: n,
                    }),
                ],
            }),
        });
    };
function R(e) {
    let { sku: t, skuPricePreview: n } = e;
    s()(null != n.amount, "SKU must have a price set."),
        s()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
    let i = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
        a = y(t, i),
        o = n.invoice_items[0],
        l = o.unit_price.amount,
        u = !n.tax_inclusive && n.tax > 0,
        f = O(o),
        p = l !== n.amount;
    return (0, r.jsxs)(_.aO, {
        className: b.invoiceTable,
        children: [
            (0, r.jsxs)(v, {
                children: [
                    "THREE_COLUMN" === a && (0, r.jsx)(I, { children: (0, r.jsx)(A, { sku: t }) }),
                    (0, r.jsx)(T, {
                        className: b.invoiceRegularText,
                        children: t.name,
                    }),
                    (0, r.jsx)(S, {
                        className: b.invoiceRegularText,
                        children: (0, m.T4)(l, n.currency),
                    }),
                ],
            }),
            null != f &&
                (0, r.jsxs)(v, {
                    children: [
                        "THREE_COLUMN" === a && (0, r.jsx)(I, { children: (0, r.jsx)(N, { discount: f }) }),
                        (0, r.jsx)(T, {
                            className: b.invoiceDiscountText,
                            children: f.description,
                        }),
                        (0, r.jsx)(S, {
                            className: b.invoiceDiscountText,
                            children: (0, m.T4)(-1 * f.amount, n.currency),
                        }),
                    ],
                }),
            u &&
                (0, r.jsxs)(v, {
                    children: [
                        "THREE_COLUMN" === a && (0, r.jsx)(I, {}),
                        (0, r.jsx)(T, {
                            className: b.invoiceRegularText,
                            children: E.intl.string(E.t["/I8zmJ"]),
                        }),
                        (0, r.jsx)(S, {
                            className: b.invoiceRegularText,
                            children: (0, m.T4)(n.tax, n.currency),
                        }),
                    ],
                }),
            p &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.UN, {}),
                        (0, r.jsxs)(v, {
                            className: b.totalRow,
                            children: [
                                (0, r.jsx)(I, {
                                    className: b.invoiceRegularText,
                                    children: E.intl.format(E.t["+B5KfH"], {}),
                                }),
                                "THREE_COLUMN" === a && (0, r.jsx)(T, {}),
                                (0, r.jsx)(S, {
                                    className: b.invoiceRegularText,
                                    children: (0, m.T4)(n.amount, n.currency),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
