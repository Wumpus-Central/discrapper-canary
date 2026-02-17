t.d(n, { Z: () => _ });
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(937008),
    o = t(156312),
    u = t(166532),
    d = t(166403),
    c = t(810498),
    p = t(683433),
    m = t(344159),
    E = t(985018);
function _(e) {
    let {
            onStepChange: n,
            selectedPlanId: t,
            paymentSources: r,
            onBackClick: u,
            showBackButton: d,
            planOptions: c,
            shouldRenderUpdatedPaymentModal: m = !1,
            isTrial: _,
            isNextDisabled: T = !1,
        } = e,
        { paymentSources: h, selectedPlan: x } = (0, o.P5)(),
        { isGift: g, claimableRewards: I } = (0, a.Pv)();
    r = r ?? h;
    let {
            variant: S,
            text: A,
            onClick: f,
            disabled: j,
        } = P({
            onStepChange: n,
            selectedPlanId: (t = t ?? x?.id),
            isGift: g,
            claimableRewards: I,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: m,
            isTrial: _,
            isNextDisabled: T,
        }),
        M = l.useMemo(
            () =>
                null != t && c.includes(t)
                    ? [{ variant: S, text: A, onClick: f, disabled: j }]
                    : [{ variant: "primary", text: E.intl.string(E.t.XqMe3N), disabled: !0 }],
            [S, A, f, j, t, c],
        );
    return (0, i.jsx)(s.H7u, { leading: d && null != u ? (0, i.jsx)(p.A, { onClick: u }) : void 0, actions: M });
}
let P = (e) => {
    let {
            onStepChange: n,
            selectedPlanId: t,
            isGift: i,
            claimableRewards: l,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: p,
            isNextDisabled: _ = !1,
        } = e,
        P = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
        { step: T, selectedPlan: h } = (0, o.P5)(),
        { hasEntitlements: x } = (0, m.X)(t, i),
        g = (null != P && null != P.paymentSourceId) || Object.keys(s).length > 0 || (x && !p);
    var I = a ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
        S = u.pn.ADD_PAYMENT_STEPS;
    return (
        g && (S = u.pn.REVIEW),
        (0, c.px)(h, i, l) && T !== u.pn.SELECT_FREE_SKU && (S = u.pn.SELECT_FREE_SKU),
        { variant: "primary", text: I, onClick: () => n(S), disabled: _ }
    );
};
