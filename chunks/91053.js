"use strict";
n.d(t, { Z: () => m });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(696208),
    o = n(426398),
    l = n(558620),
    u = n(937008),
    c = n(166532),
    d = n(615310),
    _ = n(166403),
    h = n(380619),
    f = n(683433),
    p = n(344159),
    E = n(375708);
function m(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: s,
            onBackClick: c,
            showBackButton: d,
            planOptions: _,
            shouldRenderUpdatedPaymentModal: h = !1,
            isTrial: p,
            isNextDisabled: m = !1,
        } = e,
        { paymentSources: A } = (0, o.jm)(),
        I = (0, l.A)(),
        { isGift: T, claimableRewards: S } = (0, u.Pv)();
    s = s ?? A;
    let {
            variant: y,
            text: C,
            onClick: N,
            disabled: v,
        } = g({
            onStepChange: t,
            selectedPlanId: (n = n ?? I?.id),
            isGift: T,
            claimableRewards: S,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: h,
            isTrial: p,
            isNextDisabled: m,
        }),
        R = r.useMemo(
            () =>
                null != n && _.includes(n)
                    ? [{ variant: y, text: C, onClick: N, disabled: v }]
                    : [{ variant: "primary", text: E.intl.string(E.t.XqMe3N), disabled: !0 }],
            [y, C, N, v, n, _],
        );
    return (0, i.jsx)(a.H, { leading: d && null != c ? (0, i.jsx)(f.A, { onClick: c }) : void 0, actions: R });
}
let g = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: r,
            paymentSources: a,
            shouldRenderUpdatedPaymentModal: o,
            isTrial: u,
            isNextDisabled: f = !1,
        } = e,
        m = (0, s.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        g = (0, l.A)(),
        A = (0, d.bB)(),
        { hasEntitlements: I } = (0, p.X)(n, i),
        T = (null != m && null != m.paymentSourceId) || Object.keys(a).length > 0 || (I && !u);
    var S = o ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
        y = c.pn.ADD_PAYMENT_STEPS;
    return (
        T && (y = c.pn.REVIEW),
        (0, h.px)(g, i, r) && A !== c.pn.SELECT_FREE_SKU && (y = c.pn.SELECT_FREE_SKU),
        { variant: "primary", text: S, onClick: () => t(y), disabled: f }
    );
};
