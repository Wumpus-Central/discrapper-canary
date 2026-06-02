t.d(n, { UB: () => d, lp: () => a, vT: () => c, xT: () => u });
var s = t(571878),
    i = t(428262),
    r = t(937008),
    l = t(788868);
function a(e) {
    let { selectedSkuId: n, startedPaymentFlowWithPaymentSources: t } = (0, s.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: i } = (0, r.Pv)();
    return c({ isTrial: e ?? !1, isGift: i, selectedSkuId: n, startedPaymentFlowWithPaymentSources: t });
}
function c(e) {
    let { isTrial: n, isGift: t, selectedSkuId: s, startedPaymentFlowWithPaymentSources: i } = e;
    return !n && !t && null != s && l.oz.includes(s) && i;
}
function d(e, n) {
    return null != e && null == e.findInvoiceItemByPlanId(n.id);
}
function u(e, n, t) {
    let s = null != n ? (0, i.EL)(n) : null,
        r = l.zE[e],
        a = t ?? r;
    return (
        null != s
            ? a === s.planId && a === l.En[e]
                ? (a = l.zE[e])
                : a === s.planId && a === l.zE[e]
                  ? (a = l.En[e])
                  : (s.planId === l.gD.PREMIUM_YEAR_TIER_0 || s.planId === l.gD.PREMIUM_YEAR_TIER_1) &&
                    a === l.gD.PREMIUM_MONTH_TIER_2 &&
                    (a = l.gD.PREMIUM_YEAR_TIER_2)
            : a === l.gD.PREMIUM_YEAR_TIER_1 && (a = l.gD.PREMIUM_MONTH_TIER_1),
        a
    );
}
