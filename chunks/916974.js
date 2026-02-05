"use strict";
n.d(t, { CancellationContext: () => s, X: () => o });
var r = n(64700),
    i = n(158954),
    a = n(788868);
let s = r.createContext({
        setStep: () => {},
        premiumType: a.PremiumTypes.TIER_0,
        onClose: () => {},
        transitionState: i.ip4.ENTERING,
        premiumSubscription: {},
        analyticsLocations: [],
        analyticsLocation: void 0,
        confettiCanvas: null,
        churnUserDiscountOffer: null,
        isFetchingChurnDiscountOffer: !1,
        paymentsBlocked: !1,
        renewalInvoice: null,
        renewalInvoiceDetails: null,
        handleCancellation: async () => {},
        applyOffer: async () => {},
        pauseDuration: null,
        setPauseDuration: () => {},
    }),
    o = () => r.useContext(s);
