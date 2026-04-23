n.d(t, { UB: () => u, lp: () => s, vT: () => d, xT: () => c });
var r = n(94420),
    a = n(927578),
    i = n(937008),
    o = n(156312),
    l = n(788868);
function s(e) {
    let t = (0, r.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: n } = (0, o.P5)(),
        { isGift: a } = (0, i.Pv)();
    return d({ isTrial: e ?? !1, isGift: a, selectedSkuId: t, startedPaymentFlowWithPaymentSources: n.current });
}
function d(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: a } = e;
    return !t && !n && null != r && l.oz.includes(r) && a;
}
function u(e, t, n) {
    let r = !1;
    return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (r = !0), r;
}
function c(e, t, n) {
    let r = null != t ? (0, a.EL)(t) : null,
        i = l.zE[e],
        o = n ?? i;
    return (
        null != r
            ? o === r.planId && o === l.En[e]
                ? (o = l.zE[e])
                : o === r.planId && o === l.zE[e]
                  ? (o = l.En[e])
                  : (r.planId === l.gD.PREMIUM_YEAR_TIER_0 || r.planId === l.gD.PREMIUM_YEAR_TIER_1) &&
                    o === l.gD.PREMIUM_MONTH_TIER_2 &&
                    (o = l.gD.PREMIUM_YEAR_TIER_2)
            : o === l.gD.PREMIUM_YEAR_TIER_1 && (o = l.gD.PREMIUM_MONTH_TIER_1),
        o
    );
}
