n.d(t, { Nc: () => d, YR: () => c, kw: () => p, lp: () => u }), n(321073);
var a = n(252424),
    r = n(927578),
    l = n(580630),
    i = n(788868),
    s = n(327105),
    o = n(985018);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case i.WT.MONTH:
            if (1 !== t)
                return o.intl.formatToPlainString(n ? s.default.AcRCMp : s.default.OBVcgO, { intervalCount: t });
            return o.intl.string(n ? s.default["8gVLB3"] : s.default.FVzt1W);
        case i.WT.YEAR:
            return o.intl.string(n ? s.default.M2mY1J : s.default.NEHhLR);
        default:
            throw Error("Unexpected interval");
    }
}
let d = (e) => {
        let {
            subscriptionPlan: t,
            userLocale: n,
            discountOffer: r,
            yearlyPercentSavings: l,
            shouldHideYearlySavingsBadge: c,
        } = e;
        if (null != l && t.interval === i.WT.YEAR && !c)
            return o.intl.formatToPlainString(s.default.nsG1jw, { savingsText: (0, a.l9)(n, l / 100) });
        let d = null != r ? r.discount.amount : null;
        return null != r && r.discount.plan_ids.includes(t.id) && null != d
            ? o.intl.formatToPlainString(s.default.MSB4E4, { amountOrPercentOffText: (0, a.l9)(n, parseInt(d) / 100) })
            : null;
    },
    u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeTaxLineItem: !0 },
            { manualLineItems: n, includeTaxLineItem: a } = t,
            l = [];
        return (
            (l =
                null != n
                    ? [...n]
                    : e.invoiceItems.map((e) => ({
                          id: e.id,
                          label: (0, r.Mn)(e.subscriptionPlanId),
                          amount: e.amount * e.quantity,
                      }))),
            !1 !== a && l.push({ id: "tax", label: o.intl.string(o.t.jiRvC7), amount: e.tax }),
            l
        );
    },
    p = (e) => {
        let { subscriptionInvoiceRecord: t } = e;
        return (0, l.$g)(t.total, t.currency);
    };
