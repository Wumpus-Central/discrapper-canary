t.d(n, { Z: () => S });
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(937008),
    o = t(156312),
    u = t(166532),
    d = t(615310),
    c = t(166403),
    p = t(810498),
    m = t(683433),
    E = t(344159),
    _ = t(985018);
function S(e) {
    let {
            onStepChange: n,
            selectedPlanId: t,
            paymentSources: r,
            onBackClick: u,
            showBackButton: d,
            planOptions: c,
            shouldRenderUpdatedPaymentModal: p = !1,
            isTrial: E,
            isNextDisabled: S = !1,
        } = e,
        { paymentSources: P, selectedPlan: T } = (0, o.P5)(),
        { isGift: I, claimableRewards: h } = (0, a.Pv)();
    r = r ?? P;
    let {
            variant: g,
            text: A,
            onClick: f,
            disabled: j,
        } = x({
            onStepChange: n,
            selectedPlanId: (t = t ?? T?.id),
            isGift: I,
            claimableRewards: h,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: p,
            isTrial: E,
            isNextDisabled: S,
        }),
        R = l.useMemo(
            () =>
                null != t && c.includes(t)
                    ? [{ variant: g, text: A, onClick: f, disabled: j }]
                    : [{ variant: "primary", text: _.intl.string(_.t.XqMe3N), disabled: !0 }],
            [g, A, f, j, t, c],
        );
    return (0, i.jsx)(s.H7u, { leading: d && null != u ? (0, i.jsx)(m.A, { onClick: u }) : void 0, actions: R });
}
let x = (e) => {
    let {
            onStepChange: n,
            selectedPlanId: t,
            isGift: i,
            claimableRewards: l,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: m,
            isNextDisabled: S = !1,
        } = e,
        x = (0, r.bG)([c.A], () => c.A.getPremiumTypeSubscription()),
        { selectedPlan: P } = (0, o.P5)(),
        T = (0, d.bB)(),
        { hasEntitlements: I } = (0, E.X)(t, i),
        h = (null != x && null != x.paymentSourceId) || Object.keys(s).length > 0 || (I && !m);
    var g = a ? _.intl.string(_.t.PDTjLN) : _.intl.string(_.t.XqMe3N),
        A = u.pn.ADD_PAYMENT_STEPS;
    return (
        h && (A = u.pn.REVIEW),
        (0, p.px)(P, i, l) && T !== u.pn.SELECT_FREE_SKU && (A = u.pn.SELECT_FREE_SKU),
        { variant: "primary", text: g, onClick: () => n(A), disabled: S }
    );
};
