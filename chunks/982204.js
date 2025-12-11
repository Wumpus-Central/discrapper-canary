n.d(t, {
    B: () => D,
    E: () => w,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(979554),
    u = n(442837),
    d = n(481060),
    f = n(597688),
    p = n(473608),
    _ = n(811334),
    m = n(703400),
    h = n(848118),
    g = n(706454),
    E = n(930153),
    b = n(937615),
    y = n(981631),
    O = n(388032),
    v = n(316365);
let S = (e, t) => {
        let n = null != t && e.productLine === y.POd.COLLECTIBLES && t.type !== c.Z.BUNDLE,
            r = e.productLine === y.POd.SOCIAL_LAYER_GAME_ITEM;
        return n || r ? "THREE_COLUMN" : "TWO_COLUMN";
    },
    I = (e) => {
        if (null == e.discounts || 0 === e.discounts.length) return null;
        let t = e.discounts[0];
        return 0 === t.amount ? null : t;
    },
    T = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: o()(v.invoiceRow, n),
            children: t,
        });
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: o()(v.invoiceTagColumn, n),
            children: t,
        });
    },
    A = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: o()(v.invoiceDescriptionColumn, n),
            children: t,
        });
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: n,
            children: t,
        });
    },
    P = (e) => {
        let { sku: t } = e,
            n = (0, u.e7)([f.Z], () => f.Z.getProduct(t.id));
        return null != n && t.productLine === y.POd.COLLECTIBLES && n.type !== c.Z.BUNDLE
            ? (0, r.jsx)(p.O, {
                  sku: t,
                  fallbackLabel: null,
              })
            : t.productLine === y.POd.SOCIAL_LAYER_GAME_ITEM
              ? (0, r.jsx)(h.A, {
                    containerClassName: v.slayerStorefrontProductPreview,
                    sku: t,
                    shape: "square",
                })
              : null;
    },
    R = (e) => {
        let { discount: t } = e,
            n = (0, u.e7)([g.default], () => g.default.locale),
            i = null != t && null != t.percentage_amount ? (0, E.T3)(n, -((t.percentage_amount / 100) * 1)) : null;
        return (0, r.jsx)("div", {
            className: v.invoiceDiscountTag,
            children: (0, r.jsx)(d.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: i,
            }),
        });
    },
    w = (e) => {
        let { sku: t, value: n, rentalDuration: a } = e,
            o = (0, u.e7)([f.Z], () => f.Z.getProduct(t.id)),
            s = (0, u.e7)([g.default], () => g.default.locale),
            l = S(t, o),
            c = i.useMemo(() => {
                if (null == a) return null;
                let e = new Date();
                return (
                    e.setDate(e.getDate() + a),
                    e.toLocaleDateString(s, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })
                );
            }, [a, s]);
        return (0, r.jsx)(_.aO, {
            className: v.invoiceTable,
            children: (0, r.jsxs)(T, {
                children: [
                    "THREE_COLUMN" === l && (0, r.jsx)(C, { children: (0, r.jsx)(P, { sku: t }) }),
                    (0, r.jsxs)(A, {
                        className: v.invoiceRegularText,
                        children: [
                            t.name,
                            null != c &&
                                (0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: v.rentalDescription,
                                    children: O.intl.format(O.t["es/G6j"], { date: c }),
                                }),
                        ],
                    }),
                    (0, r.jsx)(N, {
                        className: v.invoiceRegularText,
                        children: n,
                    }),
                ],
            }),
        });
    };
function D(e) {
    let { sku: t, skuPricePreview: n, application: i } = e;
    l()(null != n.amount, "SKU must have a price set."),
        l()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
    let a = (0, u.e7)([f.Z], () => f.Z.getProduct(t.id)),
        o = S(t, a),
        s = n.invoice_items[0],
        c = s.unit_price.amount,
        p = !n.tax_inclusive && n.tax > 0,
        h = I(s),
        g = c !== n.amount,
        E = t.productLine === y.POd.SOCIAL_LAYER_GAME_ITEM;
    return (0, r.jsxs)(_.aO, {
        className: v.invoiceTable,
        children: [
            (0, r.jsxs)(T, {
                children: [
                    "THREE_COLUMN" === o && (0, r.jsx)(C, { children: (0, r.jsx)(P, { sku: t }) }),
                    (0, r.jsxs)(A, {
                        className: v.invoiceRegularText,
                        children: [
                            E && (0, r.jsx)(m.e, { application: i }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)(N, {
                        className: v.invoiceRegularText,
                        children: (0, b.T4)(c, n.currency),
                    }),
                ],
            }),
            null != h &&
                (0, r.jsxs)(T, {
                    children: [
                        "THREE_COLUMN" === o && (0, r.jsx)(C, { children: (0, r.jsx)(R, { discount: h }) }),
                        (0, r.jsx)(A, {
                            className: v.invoiceDiscountText,
                            children: h.description,
                        }),
                        (0, r.jsx)(N, {
                            className: v.invoiceDiscountText,
                            children: (0, b.T4)(-1 * h.amount, n.currency),
                        }),
                    ],
                }),
            p &&
                (0, r.jsxs)(T, {
                    children: [
                        "THREE_COLUMN" === o && (0, r.jsx)(C, {}),
                        (0, r.jsx)(A, {
                            className: v.invoiceRegularText,
                            children: O.intl.string(O.t["/I8zmP"]),
                        }),
                        (0, r.jsx)(N, {
                            className: v.invoiceRegularText,
                            children: (0, b.T4)(n.tax, n.currency),
                        }),
                    ],
                }),
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.UN, {}),
                        (0, r.jsxs)(T, {
                            className: v.totalRow,
                            children: [
                                (0, r.jsx)(C, {
                                    className: v.invoiceRegularText,
                                    children: O.intl.format(O.t["+B5KfG"], {}),
                                }),
                                "THREE_COLUMN" === o && (0, r.jsx)(A, {}),
                                (0, r.jsx)(N, {
                                    className: v.invoiceRegularText,
                                    children: (0, b.T4)(n.amount, n.currency),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
