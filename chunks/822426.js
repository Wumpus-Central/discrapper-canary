n.d(t, {
    K: () => f,
});
var l = n(627968);
n(64700);
var r = n(284009),
    i = n.n(r),
    s = n(397927),
    a = n(96304),
    o = n(927578),
    u = n(937008),
    c = n(156312),
    d = n(166532),
    p = n(800471),
    m = n(985018);

function f(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            activeSubscription: r,
            selectedSkuId: f,
            setSelectedPlanId: g,
            startedPaymentFlowWithPaymentSourcesRef: j,
        } = (0, c.P5)(),
        { isGift: y } = (0, u.Pv)(),
        h = null != r ? (0, o.EL)(r) : null,
        v = null != h ? (0, o.RH)(h.planId) : null,
        b = null != h ? (0, o.m6)(h.planId) : null,
        O = (0, p.vT)({
            isTrial: !1,
            isGift: y,
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSources: j.current,
        });
    return (
        i()(null != b, "Expected premium type"),
        (0, l.jsx)(a.A, {
            premiumType: b,
            titleText: m.intl.string(m.t["7VcWW0"]),
            subtitleText: m.intl.format(m.t.Qk34Ik, {
                subscriptionName: v,
            }),
            footer: (0, l.jsxs)(s.ButtonGroup, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(s.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t["3PatSz"]),
                        onClick: () => {
                            O ? (g((0, p.xT)(f, r)), t(d.pn.REVIEW)) : t(d.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(s.Button, {
                        variant: "secondary",
                        onClick: n,
                        text: m.intl.string(m.t.h9tkAK),
                    }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
