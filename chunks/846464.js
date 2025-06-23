t.d(n, { q: () => g });
var l = t(255367);
t(73800);
var i = t(120356),
    r = t.n(i),
    s = t(481060),
    a = t(140465),
    o = t(988001),
    C = t(639119),
    d = t(55610),
    c = t(973007),
    u = t(74538),
    p = t(987209),
    x = t(563132),
    h = t(409813),
    f = t(614223),
    j = t(48175),
    _ = t(474936),
    m = t(388032),
    L = t(677163);
function g(e) {
    let { handleStepChange: n, handleClose: t, referralTrialOfferId: i } = e,
        { setSelectedSkuId: r, activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: c, priceOptions: m } = (0, x.JL)(),
        { isGift: L, claimableRewards: g } = (0, p.wD)(),
        S = L && null != g && g.length > 0,
        E = (0, C.N)(i),
        v = (0, a.Nx)(),
        P = (0, o.Z)({ location: 'PremiumPaymentSelect' });
    return (0, l.jsx)(y, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: n, newSkuId: t, setSelectedSkuId: l, handleStepChange: i, isGift: r, userTrialOffer: s, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: o } = e;
                l(t);
                let C = h.h8.PLAN_SELECT,
                    d = (0, u.k5)(n);
                (d !== _.Si.TIER_1 && d !== _.Si.TIER_2) || t !== _.Si.TIER_0 || r || (C = h.h8.WHAT_YOU_LOSE);
                let c = (0, j.T)({
                        userTrialOffer: s,
                        isGift: r,
                        skuId: t
                    }),
                    p = (0, f.Kp)({
                        isTrial: c,
                        isGift: r,
                        selectedSkuId: t,
                        startedPaymentFlowWithPaymentSources: o
                    });
                C !== h.h8.WHAT_YOU_LOSE && p && ((C = h.h8.REVIEW), a((0, f.nA)(t, n))), i(C, { analyticsDataOverride: { sku_id: t } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: r,
                handleStepChange: n,
                isGift: L,
                userTrialOffer: E,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: c
            }),
        onClose: t,
        isGift: L,
        inOfferExperience: v,
        priceOptions: m,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: P
    });
}
function y(e) {
    let { selectSku: n, onClose: t, isGift: i, inOfferExperience: a, priceOptions: o, showPromotionalGiftBanner: C, enablePremiumBrandRefresh: p } = e,
        x = p
            ? (0, l.jsx)(s.X6q, {
                  variant: 'heading-lg/bold',
                  children: m.intl.string(m.t['r+SebW'])
              })
            : (0, l.jsx)(s.vwX, {
                  tag: s.RB0.H4,
                  children: m.intl.string(m.t['r+SebW'])
              });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.xBx, {
                className: r()(L.skuSelectModalHeader, { [L.premiumBrandRefreshHeader]: p }),
                separator: !1,
                children: [
                    x,
                    (0, l.jsx)(s.olH, {
                        className: L.close,
                        innerClassName: L.closeInner,
                        onClick: t
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                className: r()(L.skuSelectModalContent, {
                    [L.modalSize]: !p,
                    [L.modalPadding]: a && !p,
                    [L.premiumBrandRefreshContent]: p
                }),
                children: [
                    (0, l.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: L.legacyPricingNotice
                    }),
                    (0, l.jsx)(c.Z, {
                        onSelectSku: (e) => n((0, u.Wz)(e)),
                        isGift: i,
                        priceOptions: o,
                        showPromotionalGiftBanner: C,
                        enablePremiumBrandRefresh: p
                    })
                ]
            })
        ]
    });
}
