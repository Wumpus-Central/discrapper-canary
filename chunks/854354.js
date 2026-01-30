n.d(t, {
    Cq: () => c,
    YR: () => l,
    lp: () => u,
}),
    n(65821),
    n(896048),
    n(321073);
var r = n(252424),
    i = n(927578),
    a = n(788868),
    o = n(756366),
    s = n(985018);

function l(e, t) {
    switch (e) {
        case a.WT.MONTH:
            if (1 !== t)
                return s.intl.formatToPlainString(o.default.OBVcgO, {
                    intervalCount: t,
                });
            return s.intl.string(o.default.FVzt1W);
        case a.WT.YEAR:
            return s.intl.string(o.default.NEHhLR);
        default:
            throw Error("Unexpected interval");
    }
}
let c = (e) => {
        let { subscriptionPlan: t, userLocale: n, discountOffer: i, yearlyPercentSavings: l } = e;
        if (null != l && t.interval === a.WT.YEAR)
            return s.intl.formatToPlainString(o.default.nsG1jw, {
                savingsText: (0, r.l9)(n, l / 100),
            });
        let c = null != i ? i.discount.amount : null;
        return null != i && i.discount.plan_ids.includes(t.id) && null != c
            ? s.intl.formatToPlainString(o.default.MSB4E4, {
                  amountOrPercentOffText: (0, r.l9)(n, parseInt(c) / 100),
              })
            : null;
    },
    u = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          addTaxLineItem: !0,
                      },
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
            !1 !== r &&
                a.push({
                    id: "tax",
                    label: s.intl.string(s.t.jiRvC7),
                    amount: e.tax,
                }),
            a
        );
    };
