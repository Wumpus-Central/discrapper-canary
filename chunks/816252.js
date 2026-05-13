i.d(e, { _: () => f, b: () => m });
var n,
    r = i(627968);
i(64700);
var l = i(834730),
    a = i(927578),
    s = i(916974),
    o = i(652215),
    u = i(375708),
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
                                a.status === o.Dmq.CANCELED
                                    ? u.intl.format(u.t["DC+nPC"], {
                                          numMonths: e.discount.userUsageLimit,
                                          discountedPrice: n,
                                      })
                                    : u.intl.format(u.t.tQvNll, { numMonths: e.discount.userUsageLimit }),
                        }),
                        (0, r.jsx)(g, { userDiscountOffer: e, offerState: i }),
                    ],
                }),
            ],
        });
    },
    g = (t) => {
        let { userDiscountOffer: e, offerState: i } = t,
            { discountedPrice: n, fullPrice: c, premiumSubscription: d } = (0, s.X)();
        switch (i) {
            case "applied":
                if (d.status === o.Dmq.CANCELED)
                    return (0, r.jsx)(l.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u.intl.formatToPlainString(u.t.h2g1Ia, {
                            billingPeriod: (0, a.Ke)(e.discount.userUsageLimitInterval),
                            numMonths: e.discount.userUsageLimit,
                            fullPrice: c,
                        }),
                    });
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: u.intl.formatToPlainString(u.t.gPzMHa, {
                        numMonths: e.discount.userUsageLimit,
                        discountedPrice: n,
                        regularPrice: c,
                    }),
                });
            case "confirming":
                if (d.status === o.Dmq.CANCELED)
                    return (0, r.jsx)(l.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u.intl.formatToPlainString(u.t.iDFk3v, {
                            billingPeriod: (0, a.Ke)(e.discount.userUsageLimitInterval),
                            numMonths: e.discount.userUsageLimit,
                            fullPrice: c,
                        }),
                    });
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: u.intl.formatToPlainString(u.t.Eq1RHL, {
                        percent: e.discount.amount,
                        numMonths: e.discount.userUsageLimit,
                        price: c,
                    }),
                });
            default:
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: u.intl.formatToPlainString(u.t["2gem05"], {
                        percent: e.discount.amount,
                        numMonths: e.discount.userUsageLimit,
                    }),
                });
        }
    };
