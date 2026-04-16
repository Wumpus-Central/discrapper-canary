n.d(t, { K: () => S });
var l = n(627968);
n(64700);
var i = n(284009),
    r = n.n(i),
    s = n(397927),
    a = n(94420),
    o = n(96304),
    u = n(927578),
    d = n(937008),
    c = n(156312),
    p = n(166532),
    m = n(800471),
    E = n(985018);
function S(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedSkuId: i, setSelectedPlanId: S } = (0, a.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: _, startedPaymentFlowWithPaymentSourcesRef: I } = (0, c.P5)(),
        { isGift: P } = (0, d.Pv)(),
        x = null != _ ? (0, u.EL)(_) : null,
        T = null != x ? (0, u.RH)(x.planId) : null,
        A = null != x ? (0, u.m6)(x.planId) : null,
        h = (0, m.vT)({ isTrial: !1, isGift: P, selectedSkuId: i, startedPaymentFlowWithPaymentSources: I.current });
    return (
        r()(null != A, "Expected premium type"),
        (0, l.jsx)(o.A, {
            premiumType: A,
            titleText: E.intl.string(E.t["7VcWW0"]),
            subtitleText: E.intl.format(E.t.Qk34Ik, { subscriptionName: T }),
            footer: (0, l.jsxs)(s.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(s.Button, {
                        variant: "primary",
                        text: E.intl.string(E.t["3PatSz"]),
                        onClick: () => {
                            h ? (S((0, m.xT)(i, _)), t(p.pn.REVIEW)) : t(p.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(s.Button, { variant: "secondary", onClick: n, text: E.intl.string(E.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
