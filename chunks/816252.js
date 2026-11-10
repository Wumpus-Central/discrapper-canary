var i,
    r = e(477900);
e(582128);
var l = e(834730),
    a = e(448645),
    s = e(916974),
    o = e(652215),
    u = e(792996),
    c = e(130428),
    d = e(67423),
    m = (((i = {}).NONE = "none"), (i.CONFIRMING = "confirming"), (i.APPLIED = "applied"), i);
function f(t) {
    let { userDiscountOffer: n, offerState: e } = t,
        { discountedPrice: i, fullPrice: c, premiumSubscription: d } = (0, s.X)();
    switch (e) {
        case "applied":
            if (d.status === o.Dmq.CANCELED)
                return (0, r.jsx)(l.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: u.intl.formatToPlainString(u.t.h2g1Ia, {
                        billingPeriod: (0, a.Ke)(n.discount.intervalType),
                        numMonths: n.discount.intervalCount,
                        fullPrice: c,
                    }),
                });
            return (0, r.jsx)(l.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(u.t.gPzMHa, {
                    numMonths: n.discount.intervalCount,
                    discountedPrice: i,
                    regularPrice: c,
                }),
            });
        case "confirming":
            if (d.status === o.Dmq.CANCELED)
                return (0, r.jsx)(l.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: u.intl.formatToPlainString(u.t.iDFk3v, {
                        billingPeriod: (0, a.Ke)(n.discount.intervalType),
                        numMonths: n.discount.intervalCount,
                        fullPrice: c,
                    }),
                });
            return (0, r.jsx)(l.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(u.t.Eq1RHL, {
                    percent: n.discount.amount,
                    numMonths: n.discount.intervalCount,
                    price: c,
                }),
            });
        default:
            return (0, r.jsx)(l.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(u.t["2gem05"], {
                    percent: n.discount.amount,
                    numMonths: n.discount.intervalCount,
                }),
            });
    }
}
e.d(
    n,
    {},
    {
        _: function (t) {
            let { userDiscountOffer: n, offerState: e = "none" } = t,
                { discountedPrice: i, premiumSubscription: a } = (0, s.X)();
            return (0, r.jsxs)("div", {
                className: c.j2,
                children: [
                    (0, r.jsx)("img", { alt: "", src: d, className: c.oU }),
                    (0, r.jsxs)("div", {
                        className: c.br,
                        children: [
                            (0, r.jsx)(l.E, {
                                variant: "body-md/semibold",
                                children:
                                    a.status === o.Dmq.CANCELED
                                        ? u.intl.format(u.t["DC+nPC"], {
                                              numMonths: n.discount.intervalCount,
                                              discountedPrice: i,
                                          })
                                        : u.intl.format(u.t.tQvNll, { numMonths: n.discount.intervalCount }),
                            }),
                            (0, r.jsx)(f, { userDiscountOffer: n, offerState: e }),
                        ],
                    }),
                ],
            });
        },
        b: m,
    },
);
