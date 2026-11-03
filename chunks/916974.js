e.d(n, { CancellationContext: () => a, X: () => s });
var i = e(582128),
    r = e(815390),
    l = e(202541);
let a = i.createContext({
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
});
function s() {
    return i.useContext(a);
}
