n.d(e, { CancellationContext: () => a, X: () => s });
var i = n(64700),
    r = n(815390),
    l = n(788868);
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
