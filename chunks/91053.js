t.d(n, { Z: () => x });
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(937008),
    o = t(156312),
    u = t(166532),
    d = t(970077),
    c = t(615310),
    p = t(166403),
    m = t(810498),
    E = t(683433),
    _ = t(344159),
    S = t(985018);
function x(e) {
    let {
            onStepChange: n,
            selectedPlanId: t,
            paymentSources: r,
            onBackClick: u,
            showBackButton: c,
            planOptions: p,
            shouldRenderUpdatedPaymentModal: m = !1,
            isTrial: _,
            isNextDisabled: x = !1,
        } = e,
        { paymentSources: I } = (0, o.P5)(),
        P = (0, d.A)(),
        { isGift: h, claimableRewards: A } = (0, a.Pv)();
    r = r ?? I;
    let {
            variant: g,
            text: f,
            onClick: j,
            disabled: R,
        } = T({
            onStepChange: n,
            selectedPlanId: (t = t ?? P?.id),
            isGift: h,
            claimableRewards: A,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: m,
            isTrial: _,
            isNextDisabled: x,
        }),
        M = l.useMemo(
            () =>
                null != t && p.includes(t)
                    ? [{ variant: g, text: f, onClick: j, disabled: R }]
                    : [{ variant: "primary", text: S.intl.string(S.t.XqMe3N), disabled: !0 }],
            [g, f, j, R, t, p],
        );
    return (0, i.jsx)(s.H7u, { leading: c && null != u ? (0, i.jsx)(E.A, { onClick: u }) : void 0, actions: M });
}
let T = (e) => {
    let {
            onStepChange: n,
            selectedPlanId: t,
            isGift: i,
            claimableRewards: l,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: o,
            isNextDisabled: E = !1,
        } = e,
        x = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        T = (0, d.A)(),
        I = (0, c.bB)(),
        { hasEntitlements: P } = (0, _.X)(t, i),
        h = (null != x && null != x.paymentSourceId) || Object.keys(s).length > 0 || (P && !o);
    var A = a ? S.intl.string(S.t.PDTjLN) : S.intl.string(S.t.XqMe3N),
        g = u.pn.ADD_PAYMENT_STEPS;
    return (
        h && (g = u.pn.REVIEW),
        (0, m.px)(T, i, l) && I !== u.pn.SELECT_FREE_SKU && (g = u.pn.SELECT_FREE_SKU),
        { variant: "primary", text: A, onClick: () => n(g), disabled: E }
    );
};
