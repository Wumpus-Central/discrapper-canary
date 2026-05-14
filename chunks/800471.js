t.d(n, { UB: () => d, lp: () => c, vT: () => u, xT: () => L });
var s = t(94420),
    r = t(428262),
    i = t(937008),
    l = t(834252),
    a = t(788868);
function c(e) {
    let n = (0, s.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: t } = (0, l.P5)(),
        { isGift: r } = (0, i.Pv)();
    return u({ isTrial: e ?? !1, isGift: r, selectedSkuId: n, startedPaymentFlowWithPaymentSources: t.current });
}
function u(e) {
    let { isTrial: n, isGift: t, selectedSkuId: s, startedPaymentFlowWithPaymentSources: r } = e;
    return !n && !t && null != s && a.oz.includes(s) && r;
}
function d(e, n, t) {
    let s = !1;
    return e && null != n && null == n.findInvoiceItemByPlanId(t.id) && (s = !0), s;
}
function L(e, n, t) {
    let s = null != n ? (0, r.EL)(n) : null,
        i = a.zE[e],
        l = t ?? i;
    return (
        null != s
            ? l === s.planId && l === a.En[e]
                ? (l = a.zE[e])
                : l === s.planId && l === a.zE[e]
                  ? (l = a.En[e])
                  : (s.planId === a.gD.PREMIUM_YEAR_TIER_0 || s.planId === a.gD.PREMIUM_YEAR_TIER_1) &&
                    l === a.gD.PREMIUM_MONTH_TIER_2 &&
                    (l = a.gD.PREMIUM_YEAR_TIER_2)
            : l === a.gD.PREMIUM_YEAR_TIER_1 && (l = a.gD.PREMIUM_MONTH_TIER_1),
        l
    );
}
