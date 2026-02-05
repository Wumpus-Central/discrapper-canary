t.d(n, { Z: () => _ });
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    s = t(937008),
    a = t(156312),
    o = t(166532),
    u = t(166403),
    d = t(45938),
    c = t(810498),
    p = t(683433),
    m = t(344159),
    E = t(985018),
    g = t(357269);
function _(e) {
    let {
            onStepChange: n,
            selectedPlanId: t,
            paymentSources: l,
            onBackClick: o,
            showBackButton: u,
            planOptions: c,
            shouldRenderUpdatedPaymentModal: m = !1,
            isTrial: _,
            isNextDisabled: T = !1,
        } = e,
        { paymentSources: h, selectedPlan: P } = (0, a.P5)(),
        { isGift: A, giftRecipient: S, claimableRewards: I } = (0, s.Pv)(),
        j = (0, d.Ik)(S);
    return (
        (l = l ?? h),
        (t = t ?? P?.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && c.includes(t)
                    ? (0, i.jsx)(x, {
                          paymentSources: l,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: A,
                          claimableRewards: I,
                          shouldRenderUpdatedPaymentModal: m,
                          isTrial: _,
                          isNextDisabled: T,
                      })
                    : (0, i.jsx)(r.Button, { variant: "primary", text: E.intl.string(E.t.XqMe3N), disabled: !0 }),
                u ? (0, i.jsx)(p.A, { className: A && j ? g.R : void 0, onClick: o }) : null,
            ],
        })
    );
}
function x(e) {
    let n = ((e) => {
        let {
                onStepChange: n,
                selectedPlanId: t,
                isGift: i,
                claimableRewards: r,
                paymentSources: s,
                shouldRenderUpdatedPaymentModal: d,
                isTrial: p,
                isNextDisabled: g = !1,
            } = e,
            _ = (0, l.bG)([u.A], () => u.A.getPremiumTypeSubscription()),
            { step: x, selectedPlan: T } = (0, a.P5)(),
            { hasEntitlements: h } = (0, m.X)(t, i),
            P = (null != _ && null != _.paymentSourceId) || Object.keys(s).length > 0 || (h && !p);
        var A = d ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
            S = o.pn.ADD_PAYMENT_STEPS;
        return (
            P && (S = o.pn.REVIEW),
            (0, c.px)(T, i, r) && x !== o.pn.SELECT_FREE_SKU && (S = o.pn.SELECT_FREE_SKU),
            { variant: "primary", text: A, onClick: () => n(S), disabled: g }
        );
    })(e);
    return (0, i.jsx)(r.Button, { ...n });
}
