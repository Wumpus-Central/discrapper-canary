i.d(e, { CancellationContext: () => a, X: () => s });
var n = i(64700),
    r = i(815390),
    l = i(788868);
let a = n.createContext({
        setStep: () => {},
        premiumType: l.PremiumTypes.TIER_0,
        onClose: () => {},
        transitionState: r.i.ENTERING,
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
    s = () => n.useContext(a);
