i.d(e, { _: () => f, b: () => m });
var n,
    r = i(627968);
i(64700);
var l = i(834730),
    a = i(927578),
    s = i(916974),
    u = i(652215),
    o = i(985018),
    c = i(575083),
    d = i(67423),
    m = (((n = {}).NONE = "none"), (n.CONFIRMING = "confirming"), (n.APPLIED = "applied"), n);
let f = (t) => {
        let { userDiscountOffer: e, offerState: i = "none" } = t,
            { discountedPrice: n, premiumSubscription: a } = (0, s.X)();
        return (0, r.jsxs)("div", {
            className: c.j2,
            children: [
                (0, r.jsx)("img", { alt: "", src: d, className: c.oU }),
                (0, r.jsxs)("div", {
                    className: c.br,
                    children: [
                        (0, r.jsx)(l.E, {
                            variant: "text-md/semibold",
                            children:
                                a.status === u.Dmq.CANCELED
                                    ? o.intl.format(o.t["DC+nPC"], {
                                          numMonths: e.discount.user_usage_limit,
                                          discountedPrice: n,
                                      })
                                    : o.intl.format(o.t.tQvNll, { numMonths: e.discount.user_usage_limit }),
                        }),
                        (0, r.jsx)(p, { userDiscountOffer: e, offerState: i }),
                    ],
                }),
            ],
        });
    },
    p = (t) => {
        let { userDiscountOffer: e, offerState: i } = t,
            { discountedPrice: n, fullPrice: c, premiumSubscription: d } = (0, s.X)();
        switch (i) {
            case "applied":
                if (d.status === u.Dmq.CANCELED)
                    return (0, r.jsx)(l.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: o.intl.formatToPlainString(o.t.h2g1Ia, {
                            billingPeriod: (0, a.Ke)(e.discount.user_usage_limit_interval),
                            numMonths: e.discount.user_usage_limit,
                            fullPrice: c,
                        }),
                    });
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: o.intl.formatToPlainString(o.t.gPzMHa, {
                        numMonths: e.discount.user_usage_limit,
                        discountedPrice: n,
                        regularPrice: c,
                    }),
                });
            case "confirming":
                if (d.status === u.Dmq.CANCELED)
                    return (0, r.jsx)(l.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: o.intl.formatToPlainString(o.t.iDFk3v, {
                            billingPeriod: (0, a.Ke)(e.discount.user_usage_limit_interval),
                            numMonths: e.discount.user_usage_limit,
                            fullPrice: c,
                        }),
                    });
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: o.intl.formatToPlainString(o.t.Eq1RHL, {
                        percent: e.discount.amount,
                        numMonths: e.discount.user_usage_limit,
                        price: c,
                    }),
                });
            default:
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: o.intl.formatToPlainString(o.t["2gem05"], {
                        percent: e.discount.amount,
                        numMonths: e.discount.user_usage_limit,
                    }),
                });
        }
    };
