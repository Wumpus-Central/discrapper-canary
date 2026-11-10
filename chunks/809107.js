var l = n(477900);
n(582128);
var i = n(998312),
    r = n(987666),
    a = n(677959),
    s = n(316363),
    o = n(602787);
function u(e) {
    let { isGift: t, isTrial: n, unifiedCheckoutFlow: l } = e;
    return l === i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT
        ? a.I0.SubscriptionApplication
        : t
          ? a.I0.GiftNitro
          : n
            ? a.I0.SubscriptionTrial
            : a.I0.Subscription;
}
n.d(
    t,
    {},
    {
        P: function (e) {
            let { isGift: t, isTrial: n, isInvoiceBilledImmediately: i = !0, subscriptionTrial: a, ...c } = e,
                { unifiedCheckoutFlow: d } = (0, s.t4)((e) => ({ unifiedCheckoutFlow: e.unifiedCheckoutFlow })),
                m = u({ isGift: t, isTrial: n, unifiedCheckoutFlow: d }),
                { discountOffer: p } = (0, o.i)();
            return (0, l.jsx)(r.$, {
                ...c,
                isInvoiceBilledImmediately: i,
                subscriptionTrial: a,
                discountOffer: p,
                unifiedLegalType: m,
            });
        },
        X: u,
    },
);
