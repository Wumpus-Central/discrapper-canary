(n.d(t, { Dn: () => m, Nc: () => c, YR: () => u, kw: () => p, lp: () => d }), n(321073));
var l = n(118751),
    i = n(927578),
    r = n(580630),
    a = n(202541),
    s = n(583741),
    o = n(105292);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case a.WT.MONTH:
            if (1 !== t)
                return o.intl.formatToPlainString(n ? s.default.AcRCMp : s.default.OBVcgO, { intervalCount: t });
            return o.intl.string(n ? s.default["8gVLB3"] : s.default.FVzt1W);
        case a.WT.YEAR:
            return o.intl.string(n ? s.default.M2mY1J : s.default.NEHhLR);
        default:
            throw Error("Unexpected interval");
    }
}
function c(e) {
    let { subscriptionPlan: t, userLocale: n, discountOffer: i, savingsPercent: r, shouldHideSavingsBadge: u } = e,
        c = t.interval === a.WT.MONTH && t.intervalCount > 1;
    if (null != r && !u && (t.interval === a.WT.YEAR || c))
        return o.intl.formatToPlainString(s.default.nsG1jw, { savingsText: (0, l.l9)(n, r / 100) });
    let d = null != i ? i.discount.amount : null;
    return null != i && i.discount.planIds.includes(t.id) && null != d
        ? o.intl.formatToPlainString(s.default.MSB4E4, { amountOrPercentOffText: (0, l.l9)(n, parseInt(d) / 100) })
        : null;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeTaxLineItem: !0 },
        { manualLineItems: n, includeTaxLineItem: l } = t,
        r = [];
    return (
        (r =
            null != n
                ? [...n]
                : e.invoiceItems.map((e) => ({
                      id: e.id,
                      label: (0, i.Mn)(e.subscriptionPlanId),
                      amount: e.amount * e.quantity,
                  }))),
        !1 !== l && r.push({ id: "tax", label: o.intl.string(o.t.jiRvC7), amount: e.tax }),
        r
    );
}
function m(e) {
    let t = e.getWalletAmount();
    return t <= 0
        ? null
        : {
              id: "gift-card-adjustment",
              label: o.intl.string(s.default.bdF0KJ),
              amount: -t,
              lineItemType: "adjustment",
          };
}
function p(e) {
    let { subscriptionInvoiceRecord: t } = e;
    return (0, r.$g)(t.getAmountDue(), t.currency);
}
