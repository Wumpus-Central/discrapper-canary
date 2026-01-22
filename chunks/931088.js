n.d(t, { m: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(793574),
    s = n(688810),
    o = n(95337),
    l = n(412314),
    c = n(456459),
    u = n(473702),
    d = n(916974),
    f = n(347378),
    p = n(606423),
    _ = n(652215);
let h = (e) => {
        let {
                transitionState: t,
                onClose: n,
                premiumSubscription: o,
                premiumType: l,
                churnDiscount: c,
                planId: u,
                renewalInvoice: f,
                renewalInvoiceDetails: p,
                errorOnCancel: h,
                errorOnRedeem: g,
                setActiveStep: E,
                activeStep: b,
            } = e,
            { analyticsLocations: y } = (0, s.Ay)(a.A.USER_SETTINGS),
            [O, A] = i.useState(m(b));
        return (
            (0, i.useEffect)(() => {
                A(m(b));
            }, [b]),
            (0, r.jsx)(d.CancellationContext.Provider, {
                value: {
                    setStep: E,
                    premiumType: l,
                    onClose: n,
                    transitionState: t,
                    premiumSubscription: o,
                    analyticsLocations: y,
                    analyticsLocation: _.ThZ.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: c,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: u,
                    paymentsBlocked: !1,
                    renewalInvoice: f,
                    renewalInvoiceDetails: p,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                h ? t() : e();
                            }, 1000);
                        }),
                    applyOffer: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                g ? t() : e();
                            }, 1000);
                        }),
                    pauseDuration: null,
                    setPauseDuration: () => {},
                },
                children: O,
            })
        );
    },
    m = (e) => {
        switch (e) {
            case u.g.DISCOUNT_APPLIED:
                return (0, r.jsx)(c.V, {});
            case u.g.CONFIRM_DISCOUNT:
                return (0, r.jsx)(l.M, {});
            case u.g.CONFIRM:
                return (0, r.jsx)(o.r, {});
            case u.g.PREVIEW:
                return (0, r.jsx)(f.E, {});
            case u.g.WHAT_YOU_LOSE:
            default:
                return (0, r.jsx)(p.Z, {});
        }
    };
