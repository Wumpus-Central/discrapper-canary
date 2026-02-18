l.d(t, { m: () => x });
var a = l(627968),
    n = l(64700),
    r = l(793574),
    i = l(688810),
    s = l(95337),
    o = l(412314),
    u = l(456459),
    c = l(473702),
    d = l(916974),
    p = l(347378),
    m = l(606423),
    h = l(652215);
let x = (e) => {
        let {
                transitionState: t,
                onClose: l,
                premiumSubscription: s,
                premiumType: o,
                churnDiscount: u,
                planId: c,
                renewalInvoice: p,
                renewalInvoiceDetails: m,
                errorOnCancel: x,
                errorOnRedeem: g,
                setActiveStep: y,
                activeStep: E,
            } = e,
            { analyticsLocations: f } = (0, i.Ay)(r.A.USER_SETTINGS),
            [v, S] = n.useState(b(E));
        return (
            (0, n.useEffect)(() => {
                S(b(E));
            }, [E]),
            (0, a.jsx)(d.CancellationContext.Provider, {
                value: {
                    setStep: y,
                    premiumType: o,
                    onClose: l,
                    transitionState: t,
                    premiumSubscription: s,
                    analyticsLocations: f,
                    analyticsLocation: h.ThZ.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: u,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: c,
                    paymentsBlocked: !1,
                    renewalInvoice: p,
                    renewalInvoiceDetails: m,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                x ? t() : e();
                            }, 1e3);
                        }),
                    applyOffer: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                g ? t() : e();
                            }, 1e3);
                        }),
                    pauseDuration: null,
                    setPauseDuration: () => {},
                },
                children: v,
            })
        );
    },
    b = (e) => {
        switch (e) {
            case c.g.DISCOUNT_APPLIED:
                return (0, a.jsx)(u.V, {});
            case c.g.CONFIRM_DISCOUNT:
                return (0, a.jsx)(o.M, {});
            case c.g.CONFIRM:
                return (0, a.jsx)(s.r, {});
            case c.g.PREVIEW:
                return (0, a.jsx)(p.E, {});
            case c.g.WHAT_YOU_LOSE:
            default:
                return (0, a.jsx)(m.Z, {});
        }
    };
