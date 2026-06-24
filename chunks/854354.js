"use strict";
n.d(t, { Nc: () => c, YR: () => u, kw: () => _, lp: () => d }), n(321073);
var i = n(252424),
    r = n(428262),
    s = n(580630),
    a = n(788868),
    o = n(327105),
    l = n(375708);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case a.WT.MONTH:
            if (1 !== t)
                return l.intl.formatToPlainString(n ? o.default.AcRCMp : o.default.OBVcgO, { intervalCount: t });
            return l.intl.string(n ? o.default["8gVLB3"] : o.default.FVzt1W);
        case a.WT.YEAR:
            return l.intl.string(n ? o.default.M2mY1J : o.default.NEHhLR);
        default:
            throw Error("Unexpected interval");
    }
}
function c(e) {
    let {
        subscriptionPlan: t,
        userLocale: n,
        discountOffer: r,
        yearlyPercentSavings: s,
        shouldHideYearlySavingsBadge: u,
    } = e;
    if (null != s && t.interval === a.WT.YEAR && !u)
        return l.intl.formatToPlainString(o.default.nsG1jw, { savingsText: (0, i.l9)(n, s / 100) });
    let c = null != r ? r.discount.amount : null;
    return null != r && r.discount.planIds.includes(t.id) && null != c
        ? l.intl.formatToPlainString(o.default.MSB4E4, { amountOrPercentOffText: (0, i.l9)(n, parseInt(c) / 100) })
        : null;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeTaxLineItem: !0 },
        { manualLineItems: n, includeTaxLineItem: i } = t,
        s = [];
    return (
        (s =
            null != n
                ? [...n]
                : e.invoiceItems.map((e) => ({
                      id: e.id,
                      label: (0, r.Mn)(e.subscriptionPlanId),
                      amount: e.amount * e.quantity,
                  }))),
        !1 !== i && s.push({ id: "tax", label: l.intl.string(l.t.jiRvC7), amount: e.tax }),
        s
    );
}
function _(e) {
    let { subscriptionInvoiceRecord: t } = e;
    return (0, s.$g)(t.total, t.currency);
}
