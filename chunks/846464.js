t.d(n, { q: () => g });
var i = t(255367);
t(73800);
var l = t(120356),
    r = t.n(l),
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
    m = t(474936),
    _ = t(388032),
    L = t(677163);
function g(e) {
    let { handleStepChange: n, handleClose: t, referralTrialOfferId: l } = e,
        { setSelectedSkuId: r, activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: c, priceOptions: _, defaultPlanId: L } = (0, x.JL)(),
        { isGift: g, claimableRewards: E } = (0, p.wD)(),
        S = g && null != E && E.length > 0,
        v = (0, C.N)(l),
        Z = (0, a.Nx)(),
        P = (0, o.Z)({ location: 'PremiumPaymentSelect' });
    return (0, i.jsx)(y, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: n, newSkuId: t, setSelectedSkuId: i, handleStepChange: l, isGift: r, userTrialOffer: s, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: o, defaultPlanId: C } = e;
                i(t);
                let d = h.h8.PLAN_SELECT,
                    c = (0, u.k5)(n);
                (c !== m.Si.TIER_1 && c !== m.Si.TIER_2) || t !== m.Si.TIER_0 || r || (d = h.h8.WHAT_YOU_LOSE);
                let p = (0, j.T)({
                        userTrialOffer: s,
                        isGift: r,
                        skuId: t
                    }),
                    x = (0, f.Kp)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: t,
                        startedPaymentFlowWithPaymentSources: o
                    });
                (d !== h.h8.WHAT_YOU_LOSE && x && ((d = h.h8.REVIEW), a((0, f.nA)(t, n, C))), l(d, { analyticsDataOverride: { sku_id: t } }));
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: r,
                handleStepChange: n,
                isGift: g,
                userTrialOffer: v,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: c,
                defaultPlanId: L
            }),
        onClose: t,
        isGift: g,
        inOfferExperience: Z,
        priceOptions: _,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: P
    });
}
function y(e) {
    let { selectSku: n, onClose: t, isGift: l, inOfferExperience: a, priceOptions: o, showPromotionalGiftBanner: C, enablePremiumBrandRefresh: p } = e,
        x = p
            ? (0, i.jsx)(s.X6q, {
                  variant: 'heading-lg/bold',
                  children: _.intl.string(_.t['r+SebW'])
              })
            : (0, i.jsx)(s.vwX, {
                  tag: s.RB0.H4,
                  children: _.intl.string(_.t['r+SebW'])
              });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.xBx, {
                className: r()(L.skuSelectModalHeader, { [L.premiumBrandRefreshHeader]: p }),
                separator: !1,
                children: [
                    x,
                    (0, i.jsx)(s.olH, {
                        className: L.close,
                        innerClassName: L.closeInner,
                        onClick: t
                    })
                ]
            }),
            (0, i.jsxs)(s.hzk, {
                className: r()(L.skuSelectModalContent, {
                    [L.modalSize]: !p,
                    [L.modalPadding]: a && !p,
                    [L.premiumBrandRefreshContent]: p
                }),
                children: [
                    (0, i.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: L.legacyPricingNotice
                    }),
                    (0, i.jsx)(c.Z, {
                        onSelectSku: (e) => n((0, u.Wz)(e)),
                        isGift: l,
                        priceOptions: o,
                        showPromotionalGiftBanner: C,
                        enablePremiumBrandRefresh: p
                    })
                ]
            })
        ]
    });
}
