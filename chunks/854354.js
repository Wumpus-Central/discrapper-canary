"use strict";
n.d(t, { Nc: () => d, YR: () => c, kw: () => p, lp: () => _, xk: () => f }), n(321073);
var r = n(252424),
    i = n(927578),
    s = n(580630),
    a = n(427262),
    o = n(788868),
    l = n(523376),
    u = n(985018);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case o.WT.MONTH:
            if (1 !== t)
                return u.intl.formatToPlainString(n ? l.default.AcRCMp : l.default.OBVcgO, { intervalCount: t });
            return u.intl.string(n ? l.default["8gVLB3"] : l.default.FVzt1W);
        case o.WT.YEAR:
            return u.intl.string(n ? l.default.M2mY1J : l.default.NEHhLR);
        default:
            throw Error("Unexpected interval");
    }
}
let d = (e) => {
        let { subscriptionPlan: t, userLocale: n, discountOffer: i, yearlyPercentSavings: s } = e;
        if (null != s && t.interval === o.WT.YEAR)
            return u.intl.formatToPlainString(l.default.nsG1jw, { savingsText: (0, r.l9)(n, s / 100) });
        let a = null != i ? i.discount.amount : null;
        return null != i && i.discount.plan_ids.includes(t.id) && null != a
            ? u.intl.formatToPlainString(l.default.MSB4E4, { amountOrPercentOffText: (0, r.l9)(n, parseInt(a) / 100) })
            : null;
    },
    _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeTaxLineItem: !0 },
            { manualLineItems: n, includeTaxLineItem: r } = t,
            s = [];
        return (
            (s =
                null != n
                    ? [...n]
                    : e.invoiceItems.map((e) => ({
                          id: e.id,
                          label: (0, i.Mn)(e.subscriptionPlanId),
                          amount: e.amount * e.quantity,
                      }))),
            !1 !== r && s.push({ id: "tax", label: u.intl.string(u.t.jiRvC7), amount: e.tax }),
            s
        );
    },
    f = (e) => ({ username: a.Ay.getUserTag(e), avatarUrl: e.getAvatarURL(void 0, 16), nickname: a.Ay.getName(e) }),
    p = (e) => {
        let { subscriptionInvoiceRecord: t } = e;
        return (0, s.$g)(t.total, t.currency);
    };
