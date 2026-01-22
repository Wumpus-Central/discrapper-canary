n.d(t, {
    _: () => f,
    b: () => d,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(927578),
    s = n(916974),
    o = n(652215),
    l = n(985018),
    c = n(803758),
    u = n(67423),
    d = (function (e) {
        return (e.NONE = "none"), (e.CONFIRMING = "confirming"), (e.APPLIED = "applied"), e;
    })({});
let f = (e) => {
        let { userDiscountOffer: t, offerState: n = "none" } = e,
            { discountedPrice: a, premiumSubscription: d } = (0, s.X)();
        return (0, r.jsxs)("div", {
            className: c.j2,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    src: u,
                    className: c.oU,
                }),
                (0, r.jsxs)("div", {
                    className: c.br,
                    children: [
                        (0, r.jsx)(i.EYj, {
                            variant: "text-md/semibold",
                            children:
                                d.status === o.Dmq.CANCELED
                                    ? l.intl.format(l.t["DC+nPC"], {
                                          numMonths: t.discount.user_usage_limit,
                                          discountedPrice: a,
                                      })
                                    : l.intl.format(l.t.tQvNll, {
                                          numMonths: t.discount.user_usage_limit,
                                      }),
                        }),
                        (0, r.jsx)(p, {
                            userDiscountOffer: t,
                            offerState: n,
                        }),
                    ],
                }),
            ],
        });
    },
    p = (e) => {
        let { userDiscountOffer: t, offerState: n } = e,
            { discountedPrice: c, fullPrice: u, premiumSubscription: d } = (0, s.X)();
        switch (n) {
            case "applied":
                if (d.status === o.Dmq.CANCELED)
                    return (0, r.jsx)(i.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: l.intl.formatToPlainString(l.t.h2g1Ia, {
                            billingPeriod: (0, a.Ke)(t.discount.user_usage_limit_interval),
                            numMonths: t.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(i.EYj, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: l.intl.formatToPlainString(l.t.gPzMHa, {
                        numMonths: t.discount.user_usage_limit,
                        discountedPrice: c,
                        regularPrice: u,
                    }),
                });
            case "confirming":
                if (d.status === o.Dmq.CANCELED)
                    return (0, r.jsx)(i.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: l.intl.formatToPlainString(l.t.iDFk3v, {
                            billingPeriod: (0, a.Ke)(t.discount.user_usage_limit_interval),
                            numMonths: t.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(i.EYj, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: l.intl.formatToPlainString(l.t.Eq1RHL, {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit,
                        price: u,
                    }),
                });
            default:
                return (0, r.jsx)(i.EYj, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: l.intl.formatToPlainString(l.t["2gem05"], {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit,
                    }),
                });
        }
    };
