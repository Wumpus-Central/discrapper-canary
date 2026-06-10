n.d(t, { K: () => A });
var l = n(627968);
n(64700);
var r = n(284009),
    i = n.n(r),
    a = n(825484),
    s = n(821609),
    o = n(211159),
    u = n(137728),
    c = n(428262),
    d = n(937008),
    p = n(166532),
    m = n(800471),
    h = n(375708);
function A(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: r,
            setSelectedPlanId: A,
            activeSubscription: E,
            startedPaymentFlowWithPaymentSources: C,
        } = (0, o.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: y } = (0, d.Pv)(),
        _ = null != E ? (0, c.EL)(E) : null,
        P = null != _ ? (0, c.RH)(_.planId) : null,
        S = null != _ ? (0, c.m6)(_.planId) : null,
        I = (0, m.vT)({ isTrial: !1, isGift: y, selectedSkuId: r, startedPaymentFlowWithPaymentSources: C });
    return (
        i()(null != S, "Expected premium type"),
        (0, l.jsx)(u.A, {
            premiumType: S,
            titleText: h.intl.string(h.t["7VcWW0"]),
            subtitleText: h.intl.format(h.t.Qk34Ik, { subscriptionName: P }),
            footer: (0, l.jsxs)(a.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(s.$, {
                        variant: "primary",
                        text: h.intl.string(h.t["3PatSz"]),
                        onClick: () => {
                            I ? (A((0, m.xT)(r, E)), t(p.pn.REVIEW)) : t(p.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(s.$, { variant: "secondary", onClick: n, text: h.intl.string(h.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
