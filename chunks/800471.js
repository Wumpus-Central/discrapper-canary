s.d(n, { UB: () => d, lp: () => c, vT: () => u, xT: () => o });
var t = s(94420),
    r = s(927578),
    i = s(937008),
    l = s(156312),
    a = s(788868);
function c(e) {
    let n = (0, t.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: s } = (0, l.P5)(),
        { isGift: r } = (0, i.Pv)();
    return u({ isTrial: e ?? !1, isGift: r, selectedSkuId: n, startedPaymentFlowWithPaymentSources: s.current });
}
function u(e) {
    let { isTrial: n, isGift: s, selectedSkuId: t, startedPaymentFlowWithPaymentSources: r } = e;
    return !n && !s && null != t && a.oz.includes(t) && r;
}
function d(e, n, s) {
    let t = !1;
    return e && null != n && null == n.findInvoiceItemByPlanId(s.id) && (t = !0), t;
}
function o(e, n, s) {
    let t = null != n ? (0, r.EL)(n) : null,
        i = a.zE[e],
        l = s ?? i;
    return (
        null != t
            ? l === t.planId && l === a.En[e]
                ? (l = a.zE[e])
                : l === t.planId && l === a.zE[e]
                  ? (l = a.En[e])
                  : (t.planId === a.gD.PREMIUM_YEAR_TIER_0 || t.planId === a.gD.PREMIUM_YEAR_TIER_1) &&
                    l === a.gD.PREMIUM_MONTH_TIER_2 &&
                    (l = a.gD.PREMIUM_YEAR_TIER_2)
            : l === a.gD.PREMIUM_YEAR_TIER_1 && (l = a.gD.PREMIUM_MONTH_TIER_1),
        l
    );
}
