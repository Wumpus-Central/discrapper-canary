"use strict";
n.d(t, { f: () => u });
var r = n(627968),
    i = n(93159),
    s = n(367921),
    a = n(937008),
    o = n(908419),
    l = n(652215);
function u(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, a.Pv)(),
        { immediateDelivery: u } = (0, o.U)(),
        c = (0, s.Ro)({
            purchaseType: l.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, r.jsx)(i._P, {
        variant: n ? { type: i.I0.GiftShop, purchaseButtonText: c } : { type: i.I0.Shop, purchaseButtonText: c },
        paymentSourceType: t,
        immediateDelivery: u,
    });
}
