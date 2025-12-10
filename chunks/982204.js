n.d(t, {
    B: () => D,
    E: () => R,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(979554),
    c = n(442837),
    u = n(481060),
    d = n(597688),
    f = n(473608),
    p = n(811334),
    _ = n(703400),
    m = n(848118),
    h = n(706454),
    g = n(930153),
    E = n(937615),
    b = n(981631),
    y = n(388032),
    O = n(221152);
let v = (e, t) => {
        let n = null != t && e.productLine === b.POd.COLLECTIBLES && t.type !== l.Z.BUNDLE,
            r = e.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    S = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    I = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(O.invoiceRow, n),
            children: t,
        });
    },
    T = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(O.invoiceTagColumn, n),
            children: t,
        });
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(O.invoiceDescriptionColumn, n),
            children: t,
        });
    },
    A = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: n,
            children: t,
        });
    },
    N = (e) => {
        let { sku: t } = e,
            n = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id));
        return null != n && t.productLine === b.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE
            ? (0, r.jsx)(f.O, {
                  sku: t,
                  fallbackLabel: null,
              })
            : t.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(m.A, {
                    containerClassName: O.slayerStorefrontProductPreview,
                    sku: t,
                    shape: "square",
                })
              : null;
    },
    P = (e) => {
        let { discount: t } = e,
            n = (0, c.e7)([h.default], () => h.default.locale),
            i = null != t && null != t.percentage_amount ? (0, g.T3)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: O.invoiceDiscountTag,
            children: (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: i,
            }),
        });
    },
    R = (e) => {
        let { sku: t, value: n } = e,
            i = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
            a = v(t, i);
        return (0, r.jsx)(p.aO, {
            className: O.invoiceTable,
            children: (0, r.jsxs)(I, {
                children: [
                    "THREE_COLUMN" === a && (0, r.jsx)(T, { children: (0, r.jsx)(N, { sku: t }) }),
                    (0, r.jsx)(C, {
                        className: O.invoiceRegularText,
                        children: t.name,
                    }),
                    (0, r.jsx)(A, {
                        className: O.invoiceRegularText,
                        children: n,
                    }),
                ],
            }),
        });
    };
function D(e) {
    let { sku: t, skuPricePreview: n, application: i } = e;
    s()(null != n.amount, "SKU must have a price set."),
        s()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
    let a = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
        o = v(t, a),
        l = n.invoice_items[0],
        f = l.unit_price.amount,
        m = !n.tax_inclusive && n.tax > 0,
        h = S(l),
        g = f !== n.amount,
        R = t.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM;
    return (0, r.jsxs)(p.aO, {
        className: O.invoiceTable,
        children: [
            (0, r.jsxs)(I, {
                children: [
                    "THREE_COLUMN" === o && (0, r.jsx)(T, { children: (0, r.jsx)(N, { sku: t }) }),
                    (0, r.jsxs)(C, {
                        className: O.invoiceRegularText,
                        children: [
                            R && (0, r.jsx)(_.e, { application: i }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/semibold",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(A, {
                        className: O.invoiceRegularText,
                        children: (0, E.T4)(f, n.currency),
                    }),
                ],
            }),
            null != h &&
                (0, r.jsxs)(I, {
                    children: [
                        "THREE_COLUMN" === o && (0, r.jsx)(T, { children: (0, r.jsx)(P, { discount: h }) }),
                        (0, r.jsx)(C, {
                            className: O.invoiceDiscountText,
                            children: h.description,
                        }),
                        (0, r.jsx)(A, {
                            className: O.invoiceDiscountText,
                            children: (0, E.T4)(-1 * h.amount, n.currency),
                        }),
                    ],
                }),
            m &&
                (0, r.jsxs)(I, {
                    children: [
                        "THREE_COLUMN" === o && (0, r.jsx)(T, {}),
                        (0, r.jsx)(C, {
                            className: O.invoiceRegularText,
                            children: y.intl.string(y.t["/I8zmP"]),
                        }),
                        (0, r.jsx)(A, {
                            className: O.invoiceRegularText,
                            children: (0, E.T4)(n.tax, n.currency),
                        }),
                    ],
                }),
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.UN, {}),
                        (0, r.jsxs)(I, {
                            className: O.totalRow,
                            children: [
                                (0, r.jsx)(T, {
                                    className: O.invoiceRegularText,
                                    children: y.intl.format(y.t["+B5KfG"], {}),
                                }),
                                "THREE_COLUMN" === o && (0, r.jsx)(C, {}),
                                (0, r.jsx)(A, {
                                    className: O.invoiceRegularText,
                                    children: (0, E.T4)(n.amount, n.currency),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
