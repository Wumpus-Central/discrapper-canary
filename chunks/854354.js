"use strict";
n.d(t, { Cq: () => u, YR: () => l, lp: () => c }), n(321073);
var r = n(252424),
    i = n(927578),
    a = n(788868),
    s = n(756366),
    o = n(985018);
function l(e, t) {
    switch (e) {
        case a.WT.MONTH:
            if (1 !== t) return o.intl.formatToPlainString(s.default.OBVcgO, { intervalCount: t });
            return o.intl.string(s.default.FVzt1W);
        case a.WT.YEAR:
            return o.intl.string(s.default.NEHhLR);
        default:
            throw Error("Unexpected interval");
    }
}
let u = (e) => {
        let { subscriptionPlan: t, userLocale: n, discountOffer: i, yearlyPercentSavings: l } = e;
        if (null != l && t.interval === a.WT.YEAR)
            return o.intl.formatToPlainString(s.default.nsG1jw, { savingsText: (0, r.l9)(n, l / 100) });
        let u = null != i ? i.discount.amount : null;
        return null != i && i.discount.plan_ids.includes(t.id) && null != u
            ? o.intl.formatToPlainString(s.default.MSB4E4, { amountOrPercentOffText: (0, r.l9)(n, parseInt(u) / 100) })
            : null;
    },
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { addTaxLineItem: !0 },
            { manualLineItems: n, addTaxLineItem: r } = t,
            a = [];
        return (
            (a =
                null != n
                    ? [...n]
                    : e.invoiceItems.map((e) => ({
                          id: e.id,
                          label: (0, i.Mn)(e.subscriptionPlanId),
                          amount: e.amount * e.quantity,
                      }))),
            !1 !== r && a.push({ id: "tax", label: o.intl.string(o.t.jiRvC7), amount: e.tax }),
            a
        );
    };
