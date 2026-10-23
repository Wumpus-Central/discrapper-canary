n.d(e, { _: () => f, b: () => m });
var i,
    r = n(477900);
n(582128);
var l = n(834730),
    a = n(927578),
    s = n(916974),
    o = n(652215),
    u = n(105292),
    c = n(130428),
    d = n(67423),
    m = (((i = {}).NONE = "none"), (i.CONFIRMING = "confirming"), (i.APPLIED = "applied"), i);
function f(t) {
    let { userDiscountOffer: e, offerState: n = "none" } = t,
        { discountedPrice: i, premiumSubscription: a } = (0, s.X)();
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
                                      numMonths: e.discount.intervalCount,
                                      discountedPrice: i,
                                  })
                                : u.intl.format(u.t.tQvNll, { numMonths: e.discount.intervalCount }),
                    }),
                    (0, r.jsx)(p, { userDiscountOffer: e, offerState: n }),
                ],
            }),
        ],
    });
}
function p(t) {
    let { userDiscountOffer: e, offerState: n } = t,
        { discountedPrice: i, fullPrice: c, premiumSubscription: d } = (0, s.X)();
    switch (n) {
        case "applied":
            if (d.status === o.Dmq.CANCELED)
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: u.intl.formatToPlainString(u.t.h2g1Ia, {
                        billingPeriod: (0, a.Ke)(e.discount.intervalType),
                        numMonths: e.discount.intervalCount,
                        fullPrice: c,
                    }),
                });
            return (0, r.jsx)(l.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(u.t.gPzMHa, {
                    numMonths: e.discount.intervalCount,
                    discountedPrice: i,
                    regularPrice: c,
                }),
            });
        case "confirming":
            if (d.status === o.Dmq.CANCELED)
                return (0, r.jsx)(l.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: u.intl.formatToPlainString(u.t.iDFk3v, {
                        billingPeriod: (0, a.Ke)(e.discount.intervalType),
                        numMonths: e.discount.intervalCount,
                        fullPrice: c,
                    }),
                });
            return (0, r.jsx)(l.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(u.t.Eq1RHL, {
                    percent: e.discount.amount,
                    numMonths: e.discount.intervalCount,
                    price: c,
                }),
            });
        default:
            return (0, r.jsx)(l.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(u.t["2gem05"], {
                    percent: e.discount.amount,
                    numMonths: e.discount.intervalCount,
                }),
            });
    }
}
