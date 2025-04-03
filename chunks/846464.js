n.d(t, { q: () => L });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(140465),
    a = n(639119),
    C = n(55610),
    d = n(973007),
    c = n(74538),
    u = n(987209),
    p = n(563132),
    _ = n(409813),
    x = n(614223),
    f = n(48175),
    h = n(474936),
    m = n(388032),
    j = n(677163);
function L(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        { setSelectedSkuId: l, activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: C, setSelectedPlanId: d, priceOptions: m } = (0, p.JL)(),
        { isGift: j, claimableRewards: L } = (0, u.wD)(),
        S = j && null != L && L.length > 0,
        y = (0, a.N)(i),
        E = (0, o.Nx)();
    return (0, r.jsx)(g, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: t, newSkuId: n, setSelectedSkuId: r, handleStepChange: i, isGift: l, userTrialOffer: s, setSelectedPlanId: o, startedPaymentFlowWithPaymentSources: a } = e;
                r(n);
                let C = _.h8.PLAN_SELECT,
                    d = (0, c.k5)(t);
                (d !== h.Si.TIER_1 && d !== h.Si.TIER_2) || n !== h.Si.TIER_0 || l || (C = _.h8.WHAT_YOU_LOSE);
                let u = (0, f.T)({
                        userTrialOffer: s,
                        isGift: l,
                        skuId: n
                    }),
                    p = (0, x.Kp)({
                        isTrial: u,
                        isGift: l,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: a
                    });
                C !== _.h8.WHAT_YOU_LOSE && p && ((C = _.h8.REVIEW), o((0, x.nA)(n, t))), i(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: l,
                handleStepChange: t,
                isGift: j,
                userTrialOffer: y,
                startedPaymentFlowWithPaymentSources: C.current,
                setSelectedPlanId: d
            }),
        onClose: n,
        isGift: j,
        inOfferExperience: E,
        priceOptions: m,
        showPromotionalGiftBanner: S
    });
}
function g(e) {
    let { selectSku: t, onClose: n, isGift: i, inOfferExperience: o, priceOptions: a, showPromotionalGiftBanner: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                className: j.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(s.vwX, {
                        tag: s.RB0.H4,
                        children: m.NW.string(m.t['r+SebW'])
                    }),
                    (0, r.jsx)(s.olH, {
                        className: j.close,
                        innerClassName: j.closeInner,
                        onClick: n
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                className: l()(j.skuSelectModalContent, j.modalSize, { [j.modalPadding]: o }),
                children: [
                    (0, r.jsx)(C.Z, {
                        fromBoostCancelModal: !1,
                        className: j.legacyPricingNotice
                    }),
                    (0, r.jsx)(d.Z, {
                        onSelectSku: (e) => t((0, c.Wz)(e)),
                        isGift: i,
                        priceOptions: a,
                        showPromotionalGiftBanner: u
                    })
                ]
            })
        ]
    });
}
