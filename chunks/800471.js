"use strict";
n.d(t, { UB: () => u, lp: () => o, vT: () => l, xT: () => c });
var r = n(927578),
    i = n(937008),
    a = n(156312),
    s = n(788868);
function o(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, a.P5)(),
        { isGift: r } = (0, i.Pv)();
    return l({ isTrial: e ?? !1, isGift: r, selectedSkuId: n, startedPaymentFlowWithPaymentSources: t.current });
}
function l(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: i, inReverseTrial: a } = e;
    return !t && !n && !a && null != r && s.oz.includes(r) && i;
}
function u(e, t, n) {
    let r = !1;
    return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (r = !0), r;
}
function c(e, t, n) {
    let i = null != t ? (0, r.EL)(t) : null,
        a = s.zE[e],
        o = n ?? a;
    return (
        null != i
            ? o === i.planId && o === s.En[e]
                ? (o = s.zE[e])
                : o === i.planId && o === s.zE[e]
                  ? (o = s.En[e])
                  : (i.planId === s.gD.PREMIUM_YEAR_TIER_0 || i.planId === s.gD.PREMIUM_YEAR_TIER_1) &&
                    o === s.gD.PREMIUM_MONTH_TIER_2 &&
                    (o = s.gD.PREMIUM_YEAR_TIER_2)
            : o === s.gD.PREMIUM_YEAR_TIER_1 && (o = s.gD.PREMIUM_MONTH_TIER_1),
        o
    );
}
