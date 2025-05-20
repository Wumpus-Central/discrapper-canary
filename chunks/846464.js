n.d(t, { q: () => m });
var l = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    r = n(481060),
    a = n(140465),
    o = n(639119),
    C = n(55610),
    d = n(973007),
    c = n(74538),
    u = n(987209),
    p = n(563132),
    x = n(409813),
    h = n(614223),
    f = n(48175),
    j = n(474936),
    _ = n(388032),
    L = n(677163);
function m(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        { setSelectedSkuId: s, activeSubscription: r, startedPaymentFlowWithPaymentSourcesRef: C, setSelectedPlanId: d, priceOptions: _ } = (0, p.JL)(),
        { isGift: L, claimableRewards: m } = (0, u.wD)(),
        E = L && null != m && m.length > 0,
        y = (0, o.N)(i),
        S = (0, a.Nx)();
    return (0, l.jsx)(g, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: t, newSkuId: n, setSelectedSkuId: l, handleStepChange: i, isGift: s, userTrialOffer: r, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: o } = e;
                l(n);
                let C = x.h8.PLAN_SELECT,
                    d = (0, c.k5)(t);
                (d !== j.Si.TIER_1 && d !== j.Si.TIER_2) || n !== j.Si.TIER_0 || s || (C = x.h8.WHAT_YOU_LOSE);
                let u = (0, f.T)({
                        userTrialOffer: r,
                        isGift: s,
                        skuId: n
                    }),
                    p = (0, h.Kp)({
                        isTrial: u,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o
                    });
                C !== x.h8.WHAT_YOU_LOSE && p && ((C = x.h8.REVIEW), a((0, h.nA)(n, t))), i(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: r,
                newSkuId: e,
                setSelectedSkuId: s,
                handleStepChange: t,
                isGift: L,
                userTrialOffer: y,
                startedPaymentFlowWithPaymentSources: C.current,
                setSelectedPlanId: d
            }),
        onClose: n,
        isGift: L,
        inOfferExperience: S,
        priceOptions: _,
        showPromotionalGiftBanner: E
    });
}
function g(e) {
    let { selectSku: t, onClose: n, isGift: i, inOfferExperience: a, priceOptions: o, showPromotionalGiftBanner: u } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.xBx, {
                className: L.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, l.jsx)(r.vwX, {
                        tag: r.RB0.H4,
                        children: _.intl.string(_.t['r+SebW'])
                    }),
                    (0, l.jsx)(r.olH, {
                        className: L.close,
                        innerClassName: L.closeInner,
                        onClick: n
                    })
                ]
            }),
            (0, l.jsxs)(r.hzk, {
                className: s()(L.skuSelectModalContent, L.modalSize, { [L.modalPadding]: a }),
                children: [
                    (0, l.jsx)(C.Z, {
                        fromBoostCancelModal: !1,
                        className: L.legacyPricingNotice
                    }),
                    (0, l.jsx)(d.Z, {
                        onSelectSku: (e) => t((0, c.Wz)(e)),
                        isGift: i,
                        priceOptions: o,
                        showPromotionalGiftBanner: u
                    })
                ]
            })
        ]
    });
}
