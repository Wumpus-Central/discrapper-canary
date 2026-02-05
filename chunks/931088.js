"use strict";
n.d(t, { m: () => h });
var r = n(627968),
    i = n(64700),
    a = n(793574),
    s = n(688810),
    o = n(95337),
    l = n(412314),
    u = n(456459),
    c = n(473702),
    d = n(916974),
    _ = n(347378),
    f = n(606423),
    p = n(652215);
let h = (e) => {
        let {
                transitionState: t,
                onClose: n,
                premiumSubscription: o,
                premiumType: l,
                churnDiscount: u,
                planId: c,
                renewalInvoice: _,
                renewalInvoiceDetails: f,
                errorOnCancel: h,
                errorOnRedeem: g,
                setActiveStep: E,
                activeStep: A,
            } = e,
            { analyticsLocations: I } = (0, s.Ay)(a.A.USER_SETTINGS),
            [T, y] = i.useState(m(A));
        return (
            (0, i.useEffect)(() => {
                y(m(A));
            }, [A]),
            (0, r.jsx)(d.CancellationContext.Provider, {
                value: {
                    setStep: E,
                    premiumType: l,
                    onClose: n,
                    transitionState: t,
                    premiumSubscription: o,
                    analyticsLocations: I,
                    analyticsLocation: p.ThZ.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: u,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: c,
                    paymentsBlocked: !1,
                    renewalInvoice: _,
                    renewalInvoiceDetails: f,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                h ? t() : e();
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
                children: T,
            })
        );
    },
    m = (e) => {
        switch (e) {
            case c.g.DISCOUNT_APPLIED:
                return (0, r.jsx)(u.V, {});
            case c.g.CONFIRM_DISCOUNT:
                return (0, r.jsx)(l.M, {});
            case c.g.CONFIRM:
                return (0, r.jsx)(o.r, {});
            case c.g.PREVIEW:
                return (0, r.jsx)(_.E, {});
            case c.g.WHAT_YOU_LOSE:
            default:
                return (0, r.jsx)(f.Z, {});
        }
    };
