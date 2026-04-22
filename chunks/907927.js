n.d(t, { f: () => u });
var l = n(627968),
    i = n(93159),
    a = n(367921),
    r = n(937008),
    s = n(908419),
    o = n(652215);
function u(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, r.Pv)(),
        { immediateDelivery: u } = (0, s.U)(),
        c = (0, a.Ro)({
            purchaseType: o.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(i._P, {
        variant: n ? { type: i.I0.GiftShop, purchaseButtonText: c } : { type: i.I0.Shop, purchaseButtonText: c },
        paymentSourceType: t,
        immediateDelivery: u,
    });
}
