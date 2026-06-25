"use strict";
n.d(t, { UB: () => u, lp: () => o, vT: () => l, xT: () => c });
var i = n(46332),
    r = n(428262),
    s = n(937008),
    a = n(788868);
function o(e) {
    let { selectedSkuId: t, startedPaymentFlowWithPaymentSources: n } = (0, i.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: r } = (0, s.Pv)();
    return l({ isTrial: e ?? !1, isGift: r, selectedSkuId: t, startedPaymentFlowWithPaymentSources: n });
}
function l(e) {
    let { isTrial: t, isGift: n, selectedSkuId: i, startedPaymentFlowWithPaymentSources: r } = e;
    return !t && !n && null != i && a.oz.includes(i) && r;
}
function u(e, t) {
    return null != e && null == e.findInvoiceItemByPlanId(t.id);
}
function c(e, t, n) {
    let i = null != t ? (0, r.EL)(t) : null,
        s = a.zE[e],
        o = n ?? s;
    return (
        null != i
            ? o === i.planId && o === a.En[e]
                ? (o = a.zE[e])
                : o === i.planId && o === a.zE[e]
                  ? (o = a.En[e])
                  : (i.planId === a.gD.PREMIUM_YEAR_TIER_0 || i.planId === a.gD.PREMIUM_YEAR_TIER_1) &&
                    o === a.gD.PREMIUM_MONTH_TIER_2 &&
                    (o = a.gD.PREMIUM_YEAR_TIER_2)
            : o === a.gD.PREMIUM_YEAR_TIER_1 && (o = a.gD.PREMIUM_MONTH_TIER_1),
        o
    );
}
