n.d(t, { Z: () => C });
var l = n(627968),
    r = n(64700),
    i = n(17928),
    a = n(696208),
    s = n(426398),
    o = n(558620),
    u = n(937008),
    c = n(166532),
    d = n(615310),
    p = n(166403),
    m = n(380619),
    h = n(683433),
    A = n(344159),
    E = n(375708);
function C(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: c,
            showBackButton: d,
            planOptions: p,
            shouldRenderUpdatedPaymentModal: m = !1,
            isTrial: A,
            isNextDisabled: C = !1,
        } = e,
        { paymentSources: _ } = (0, s.jm)(),
        P = (0, o.A)(),
        { isGift: S, claimableRewards: I } = (0, u.Pv)();
    i = i ?? _;
    let {
            variant: T,
            text: f,
            onClick: N,
            disabled: v,
        } = y({
            onStepChange: t,
            selectedPlanId: (n = n ?? P?.id),
            isGift: S,
            claimableRewards: I,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: m,
            isTrial: A,
            isNextDisabled: C,
        }),
        g = r.useMemo(
            () =>
                null != n && p.includes(n)
                    ? [{ variant: T, text: f, onClick: N, disabled: v }]
                    : [{ variant: "primary", text: E.intl.string(E.t.XqMe3N), disabled: !0 }],
            [T, f, N, v, n, p],
        );
    return (0, l.jsx)(a.H, { leading: d && null != c ? (0, l.jsx)(h.A, { onClick: c }) : void 0, actions: g });
}
let y = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: r,
            paymentSources: a,
            shouldRenderUpdatedPaymentModal: s,
            isTrial: u,
            isNextDisabled: h = !1,
        } = e,
        C = (0, i.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        y = (0, o.A)(),
        _ = (0, d.bB)(),
        { hasEntitlements: P } = (0, A.X)(n, l),
        S = (null != C && null != C.paymentSourceId) || Object.keys(a).length > 0 || (P && !u);
    var I = s ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
        T = c.pn.ADD_PAYMENT_STEPS;
    return (
        S && (T = c.pn.REVIEW),
        (0, m.px)(y, l, r) && _ !== c.pn.SELECT_FREE_SKU && (T = c.pn.SELECT_FREE_SKU),
        { variant: "primary", text: I, onClick: () => t(T), disabled: h }
    );
};
