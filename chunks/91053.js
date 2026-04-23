n.d(t, { Z: () => I });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(696208),
    a = n(558620),
    o = n(937008),
    u = n(156312),
    d = n(166532),
    c = n(615310),
    p = n(166403),
    m = n(810498),
    E = n(683433),
    S = n(344159),
    _ = n(985018);
function I(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: d,
            showBackButton: c,
            planOptions: p,
            shouldRenderUpdatedPaymentModal: m = !1,
            isTrial: S,
            isNextDisabled: I = !1,
        } = e,
        { paymentSources: A } = (0, u.P5)(),
        x = (0, a.A)(),
        { isGift: h, claimableRewards: T } = (0, o.Pv)();
    r = r ?? A;
    let {
            variant: g,
            text: f,
            onClick: j,
            disabled: R,
        } = P({
            onStepChange: t,
            selectedPlanId: (n = n ?? x?.id),
            isGift: h,
            claimableRewards: T,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: m,
            isTrial: S,
            isNextDisabled: I,
        }),
        M = i.useMemo(
            () =>
                null != n && p.includes(n)
                    ? [{ variant: g, text: f, onClick: j, disabled: R }]
                    : [{ variant: "primary", text: _.intl.string(_.t.XqMe3N), disabled: !0 }],
            [g, f, j, R, n, p],
        );
    return (0, l.jsx)(s.H, { leading: c && null != d ? (0, l.jsx)(E.A, { onClick: d }) : void 0, actions: M });
}
let P = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: i,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: o,
            isTrial: u,
            isNextDisabled: E = !1,
        } = e,
        I = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        P = (0, a.A)(),
        A = (0, c.bB)(),
        { hasEntitlements: x } = (0, S.X)(n, l),
        h = (null != I && null != I.paymentSourceId) || Object.keys(s).length > 0 || (x && !u);
    var T = o ? _.intl.string(_.t.PDTjLN) : _.intl.string(_.t.XqMe3N),
        g = d.pn.ADD_PAYMENT_STEPS;
    return (
        h && (g = d.pn.REVIEW),
        (0, m.px)(P, l, i) && A !== d.pn.SELECT_FREE_SKU && (g = d.pn.SELECT_FREE_SKU),
        { variant: "primary", text: T, onClick: () => t(g), disabled: E }
    );
};
