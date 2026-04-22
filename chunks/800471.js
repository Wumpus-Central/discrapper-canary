n.d(t, { UB: () => c, lp: () => o, vT: () => u, xT: () => d });
var a = n(94420),
    r = n(927578),
    l = n(937008),
    i = n(156312),
    s = n(788868);
function o(e) {
    let t = (0, a.t4)((e) => e.selectedSkuId),
        { startedPaymentFlowWithPaymentSourcesRef: n } = (0, i.P5)(),
        { isGift: r } = (0, l.Pv)();
    return u({ isTrial: e ?? !1, isGift: r, selectedSkuId: t, startedPaymentFlowWithPaymentSources: n.current });
}
function u(e) {
    let { isTrial: t, isGift: n, selectedSkuId: a, startedPaymentFlowWithPaymentSources: r } = e;
    return !t && !n && null != a && s.oz.includes(a) && r;
}
function c(e, t, n) {
    let a = !1;
    return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (a = !0), a;
}
function d(e, t, n) {
    let a = null != t ? (0, r.EL)(t) : null,
        l = s.zE[e],
        i = n ?? l;
    return (
        null != a
            ? i === a.planId && i === s.En[e]
                ? (i = s.zE[e])
                : i === a.planId && i === s.zE[e]
                  ? (i = s.En[e])
                  : (a.planId === s.gD.PREMIUM_YEAR_TIER_0 || a.planId === s.gD.PREMIUM_YEAR_TIER_1) &&
                    i === s.gD.PREMIUM_MONTH_TIER_2 &&
                    (i = s.gD.PREMIUM_YEAR_TIER_2)
            : i === s.gD.PREMIUM_YEAR_TIER_1 && (i = s.gD.PREMIUM_MONTH_TIER_1),
        i
    );
}
