"use strict";
n.d(t, { UB: () => u, lp: () => o, vT: () => l, xT: () => c });
var r = n(927578),
    i = n(937008),
    s = n(156312),
    a = n(788868);
function o(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, s.P5)(),
        { isGift: r } = (0, i.Pv)();
    return l({ isTrial: e ?? !1, isGift: r, selectedSkuId: n, startedPaymentFlowWithPaymentSources: t.current });
}
function l(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: i } = e;
    return !t && !n && null != r && a.oz.includes(r) && i;
}
function u(e, t, n) {
    let r = !1;
    return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (r = !0), r;
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
