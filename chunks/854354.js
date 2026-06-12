n.d(t, { Nc: () => c, YR: () => o, kw: () => m, lp: () => d }), n(321073);
var a = n(252424),
    r = n(428262),
    l = n(580630),
    i = n(788868),
    s = n(327105),
    u = n(375708);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case i.WT.MONTH:
            if (1 !== t)
                return u.intl.formatToPlainString(n ? s.default.AcRCMp : s.default.OBVcgO, { intervalCount: t });
            return u.intl.string(n ? s.default["8gVLB3"] : s.default.FVzt1W);
        case i.WT.YEAR:
            return u.intl.string(n ? s.default.M2mY1J : s.default.NEHhLR);
        default:
            throw Error("Unexpected interval");
    }
}
let c = (e) => {
        let {
            subscriptionPlan: t,
            userLocale: n,
            discountOffer: r,
            yearlyPercentSavings: l,
            shouldHideYearlySavingsBadge: o,
        } = e;
        if (null != l && t.interval === i.WT.YEAR && !o)
            return u.intl.formatToPlainString(s.default.nsG1jw, { savingsText: (0, a.l9)(n, l / 100) });
        let c = null != r ? r.discount.amount : null;
        return null != r && r.discount.planIds.includes(t.id) && null != c
            ? u.intl.formatToPlainString(s.default.MSB4E4, { amountOrPercentOffText: (0, a.l9)(n, parseInt(c) / 100) })
            : null;
    },
    d = function (e) {
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
            !1 !== a && l.push({ id: "tax", label: u.intl.string(u.t.jiRvC7), amount: e.tax }),
            l
        );
    },
    m = (e) => {
        let { subscriptionInvoiceRecord: t } = e;
        return (0, l.$g)(t.total, t.currency);
    };
