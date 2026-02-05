"use strict";
n.d(t, { _: () => _, b: () => d });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(927578),
    s = n(916974),
    o = n(652215),
    l = n(985018),
    u = n(803758),
    c = n(67423),
    d = (function (e) {
        return (e.NONE = "none"), (e.CONFIRMING = "confirming"), (e.APPLIED = "applied"), e;
    })({});
let _ = (e) => {
        let { userDiscountOffer: t, offerState: n = "none" } = e,
            { discountedPrice: a, premiumSubscription: d } = (0, s.X)();
        return (0, r.jsxs)("div", {
            className: u.j2,
            children: [
                (0, r.jsx)("img", { alt: "", src: c, className: u.oU }),
                (0, r.jsxs)("div", {
                    className: u.br,
                    children: [
                        (0, r.jsx)(i.EYj, {
                            variant: "text-md/semibold",
                            children:
                                d.status === o.Dmq.CANCELED
                                    ? l.intl.format(l.t["DC+nPC"], {
                                          numMonths: t.discount.user_usage_limit,
                                          discountedPrice: a,
                                      })
                                    : l.intl.format(l.t.tQvNll, { numMonths: t.discount.user_usage_limit }),
                        }),
                        (0, r.jsx)(f, { userDiscountOffer: t, offerState: n }),
                    ],
                }),
            ],
        });
    },
    f = (e) => {
        let { userDiscountOffer: t, offerState: n } = e,
            { discountedPrice: u, fullPrice: c, premiumSubscription: d } = (0, s.X)();
        switch (n) {
            case "applied":
                if (d.status === o.Dmq.CANCELED)
                    return (0, r.jsx)(i.EYj, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: l.intl.formatToPlainString(l.t.h2g1Ia, {
                            billingPeriod: (0, a.Ke)(t.discount.user_usage_limit_interval),
                            numMonths: t.discount.user_usage_limit,
                            fullPrice: c,
                        }),
                    });
                return (0, r.jsx)(i.EYj, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: l.intl.formatToPlainString(l.t.gPzMHa, {
                        numMonths: t.discount.user_usage_limit,
                        discountedPrice: u,
                        regularPrice: c,
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
                            fullPrice: c,
                        }),
                    });
                return (0, r.jsx)(i.EYj, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: l.intl.formatToPlainString(l.t.Eq1RHL, {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit,
                        price: c,
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
