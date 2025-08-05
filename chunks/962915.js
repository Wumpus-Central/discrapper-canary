(n.d(t, { x: () => h }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(100527),
    a = n(906732),
    l = n(562218),
    o = n(284829),
    c = n(586920),
    d = n(45474),
    u = n(594135),
    m = n(881493),
    p = n(407965),
    g = n(981631);
let h = (e) => {
        let { transitionState: t, onClose: n, premiumSubscription: l, premiumType: o, churnDiscount: c, planId: d, renewalInvoice: m, renewalInvoiceDetails: p, errorOnCancel: h, errorOnRedeem: b, setActiveStep: x, activeStep: _ } = e,
            { analyticsLocations: j } = (0, a.ZP)(s.Z.USER_SETTINGS),
            [C, E] = r.useState(f(_));
        return (
            (0, r.useEffect)(() => {
                E(f(_));
            }, [_]),
            (0, i.jsx)(u.D.Provider, {
                value: {
                    setStep: x,
                    premiumType: o,
                    onClose: n,
                    transitionState: t,
                    premiumSubscription: l,
                    analyticsLocations: j,
                    analyticsLocation: g.Sbl.USER_SETTINGS,
                    confettiCanvas: null,
                    discountPrimary: !1,
                    churnUserDiscountOffer: c,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: '$9.99',
                    discountedPrice: '$4.99',
                    planId: d,
                    paymentsBlocked: !1,
                    renewalInvoice: m,
                    renewalInvoiceDetails: p,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                if (h) return void t();
                                e();
                            }, 1000);
                        }),
                    applyOffer: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                if (b) return void t();
                                e();
                            }, 1000);
                        })
                },
                children: C
            })
        );
    },
    f = (e) => {
        switch (e) {
            case d.R.DISCOUNT_APPLIED:
                return (0, i.jsx)(c.i, {});
            case d.R.CONFIRM_DISCOUNT:
                return (0, i.jsx)(o.U, {});
            case d.R.CONFIRM:
                return (0, i.jsx)(l.G, {});
            case d.R.PREVIEW:
                return (0, i.jsx)(m.w, {});
            case d.R.WHAT_YOU_LOSE:
            default:
                return (0, i.jsx)(p.n, {});
        }
    };
