"use strict";
n.d(t, { UB: () => c, lp: () => l, vT: () => u, xT: () => d });
var r = n(927578),
    i = n(413748),
    s = n(937008),
    a = n(156312),
    o = n(788868);
function l(e) {
    let t = (0, i.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: n } = (0, a.P5)(),
        { isGift: r } = (0, s.Pv)();
    return u({ isTrial: e ?? !1, isGift: r, selectedSkuId: t, startedPaymentFlowWithPaymentSources: n.current });
}
function u(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: i } = e;
    return !t && !n && null != r && o.oz.includes(r) && i;
}
function c(e, t, n) {
    let r = !1;
    return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (r = !0), r;
}
function d(e, t, n) {
    let i = null != t ? (0, r.EL)(t) : null,
        s = o.zE[e],
        a = n ?? s;
    return (
        null != i
            ? a === i.planId && a === o.En[e]
                ? (a = o.zE[e])
                : a === i.planId && a === o.zE[e]
                  ? (a = o.En[e])
                  : (i.planId === o.gD.PREMIUM_YEAR_TIER_0 || i.planId === o.gD.PREMIUM_YEAR_TIER_1) &&
                    a === o.gD.PREMIUM_MONTH_TIER_2 &&
                    (a = o.gD.PREMIUM_YEAR_TIER_2)
            : a === o.gD.PREMIUM_YEAR_TIER_1 && (a = o.gD.PREMIUM_MONTH_TIER_1),
        a
    );
}
