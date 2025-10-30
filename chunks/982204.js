n.d(t, {
    B: () => w,
    E: () => P,
}),
    n(953529);
var r = n(951288);
n(647438);
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
    p = n(703400),
    h = n(848118),
    m = n(706454),
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
    I = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    S = (e) => {
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
    A = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(O.invoiceDescriptionColumn, n),
            children: t,
        });
    },
    C = (e) => {
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
              ? (0, r.jsx)(h.A, {
                    className: O.slayerStorefrontProductPreview,
                    sku: t,
                    shape: "square",
                })
              : null;
    },
    R = (e) => {
        let { discount: t } = e,
            n = (0, c.e7)([m.default], () => m.default.locale),
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
    P = (e) => {
        let { sku: t, value: n } = e,
            i = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
            a = v(t, i);
        return (0, r.jsx)(_.aO, {
            className: O.invoiceTable,
            children: (0, r.jsxs)(S, {
                children: [
                    "THREE_COLUMN" === a && (0, r.jsx)(T, { children: (0, r.jsx)(N, { sku: t }) }),
                    (0, r.jsx)(A, {
                        className: O.invoiceRegularText,
                        children: t.name,
                    }),
                    (0, r.jsx)(C, {
                        className: O.invoiceRegularText,
                        children: n,
                    }),
                ],
            }),
        });
    };
function w(e) {
    let { sku: t, skuPricePreview: n, application: i } = e;
    s()(null != n.amount, "SKU must have a price set."),
        s()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
    let a = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
        o = v(t, a),
        l = n.invoice_items[0],
        u = l.unit_price.amount,
        f = !n.tax_inclusive && n.tax > 0,
        h = I(l),
        m = u !== n.amount,
        g = t.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM;
    return (0, r.jsxs)(_.aO, {
        className: O.invoiceTable,
        children: [
            (0, r.jsxs)(S, {
                children: [
                    "THREE_COLUMN" === o && (0, r.jsx)(T, { children: (0, r.jsx)(N, { sku: t }) }),
                    (0, r.jsxs)(A, {
                        className: O.invoiceRegularText,
                        children: [g && (0, r.jsx)(p.e, { application: i }), t.name],
                    }),
                    (0, r.jsx)(C, {
                        className: O.invoiceRegularText,
                        children: (0, E.T4)(u, n.currency),
                    }),
                ],
            }),
            null != h &&
                (0, r.jsxs)(S, {
                    children: [
                        "THREE_COLUMN" === o && (0, r.jsx)(T, { children: (0, r.jsx)(R, { discount: h }) }),
                        (0, r.jsx)(A, {
                            className: O.invoiceDiscountText,
                            children: h.description,
                        }),
                        (0, r.jsx)(C, {
                            className: O.invoiceDiscountText,
                            children: (0, E.T4)(-1 * h.amount, n.currency),
                        }),
                    ],
                }),
            f &&
                (0, r.jsxs)(S, {
                    children: [
                        "THREE_COLUMN" === o && (0, r.jsx)(T, {}),
                        (0, r.jsx)(A, {
                            className: O.invoiceRegularText,
                            children: y.intl.string(y.t["/I8zmP"]),
                        }),
                        (0, r.jsx)(C, {
                            className: O.invoiceRegularText,
                            children: (0, E.T4)(n.tax, n.currency),
                        }),
                    ],
                }),
            m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.UN, {}),
                        (0, r.jsxs)(S, {
                            className: O.totalRow,
                            children: [
                                (0, r.jsx)(T, {
                                    className: O.invoiceRegularText,
                                    children: y.intl.format(y.t["+B5KfG"], {}),
                                }),
                                "THREE_COLUMN" === o && (0, r.jsx)(A, {}),
                                (0, r.jsx)(C, {
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
