n.d(t, { K: () => _ });
var l = n(627968);
n(64700);
var i = n(284009),
    r = n.n(i),
    s = n(825484),
    a = n(821609),
    o = n(94420),
    u = n(96304),
    d = n(927578),
    c = n(937008),
    p = n(156312),
    m = n(166532),
    E = n(800471),
    S = n(985018);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedSkuId: i, setSelectedPlanId: _ } = (0, o.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: I, startedPaymentFlowWithPaymentSourcesRef: P } = (0, p.P5)(),
        { isGift: A } = (0, c.Pv)(),
        x = null != I ? (0, d.EL)(I) : null,
        h = null != x ? (0, d.RH)(x.planId) : null,
        T = null != x ? (0, d.m6)(x.planId) : null,
        g = (0, E.vT)({ isTrial: !1, isGift: A, selectedSkuId: i, startedPaymentFlowWithPaymentSources: P.current });
    return (
        r()(null != T, "Expected premium type"),
        (0, l.jsx)(u.A, {
            premiumType: T,
            titleText: S.intl.string(S.t["7VcWW0"]),
            subtitleText: S.intl.format(S.t.Qk34Ik, { subscriptionName: h }),
            footer: (0, l.jsxs)(s.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(a.$, {
                        variant: "primary",
                        text: S.intl.string(S.t["3PatSz"]),
                        onClick: () => {
                            g ? (_((0, E.xT)(i, I)), t(m.pn.REVIEW)) : t(m.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(a.$, { variant: "secondary", onClick: n, text: S.intl.string(S.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
