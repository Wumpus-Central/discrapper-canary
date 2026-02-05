t.d(n, { K: () => E });
var i = t(627968);
t(64700);
var l = t(284009),
    r = t.n(l),
    s = t(397927),
    a = t(96304),
    o = t(927578),
    u = t(937008),
    d = t(156312),
    c = t(166532),
    p = t(800471),
    m = t(985018);
function E(e) {
    let { handleStepChange: n, handleClose: t } = e,
        {
            activeSubscription: l,
            selectedSkuId: E,
            setSelectedPlanId: g,
            startedPaymentFlowWithPaymentSourcesRef: _,
        } = (0, d.P5)(),
        { isGift: x } = (0, u.Pv)(),
        T = null != l ? (0, o.EL)(l) : null,
        h = null != T ? (0, o.RH)(T.planId) : null,
        P = null != T ? (0, o.m6)(T.planId) : null,
        A = (0, p.vT)({ isTrial: !1, isGift: x, selectedSkuId: E, startedPaymentFlowWithPaymentSources: _.current });
    return (
        r()(null != P, "Expected premium type"),
        (0, i.jsx)(a.A, {
            premiumType: P,
            titleText: m.intl.string(m.t["7VcWW0"]),
            subtitleText: m.intl.format(m.t.Qk34Ik, { subscriptionName: h }),
            footer: (0, i.jsxs)(s.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, i.jsx)(s.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t["3PatSz"]),
                        onClick: () => {
                            A ? (g((0, p.xT)(E, l)), n(c.pn.REVIEW)) : n(c.pn.PLAN_SELECT);
                        },
                    }),
                    (0, i.jsx)(s.Button, { variant: "secondary", onClick: t, text: m.intl.string(m.t.h9tkAK) }),
                ],
            }),
            onClose: t,
            isDowngrade: !0,
        })
    );
}
