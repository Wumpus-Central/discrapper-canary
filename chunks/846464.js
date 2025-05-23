n.d(t, { q: () => g });
var i = n(255367);
n(73800);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    a = n(140465),
    C = n(988001),
    o = n(639119),
    d = n(55610),
    c = n(973007),
    u = n(74538),
    p = n(987209),
    x = n(563132),
    h = n(409813),
    f = n(614223),
    j = n(48175),
    m = n(474936),
    L = n(388032),
    _ = n(677163);
function g(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: l } = e,
        { setSelectedSkuId: s, activeSubscription: r, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: c, priceOptions: L } = (0, x.JL)(),
        { isGift: _, claimableRewards: g } = (0, p.wD)(),
        y = _ && null != g && g.length > 0,
        S = (0, o.N)(l),
        M = (0, a.Nx)(),
        Z = (0, C.Z)({ location: 'PremiumPaymentSelect' });
    return (0, i.jsx)(E, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: t, newSkuId: n, setSelectedSkuId: i, handleStepChange: l, isGift: s, userTrialOffer: r, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: C } = e;
                i(n);
                let o = h.h8.PLAN_SELECT,
                    d = (0, u.k5)(t);
                (d !== m.Si.TIER_1 && d !== m.Si.TIER_2) || n !== m.Si.TIER_0 || s || (o = h.h8.WHAT_YOU_LOSE);
                let c = (0, j.T)({
                        userTrialOffer: r,
                        isGift: s,
                        skuId: n
                    }),
                    p = (0, f.Kp)({
                        isTrial: c,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: C
                    });
                o !== h.h8.WHAT_YOU_LOSE && p && ((o = h.h8.REVIEW), a((0, f.nA)(n, t))), l(o, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: r,
                newSkuId: e,
                setSelectedSkuId: s,
                handleStepChange: t,
                isGift: _,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: c
            }),
        onClose: n,
        isGift: _,
        inOfferExperience: M,
        priceOptions: L,
        showPromotionalGiftBanner: y,
        enablePremiumRebrandDesign: Z
    });
}
function E(e) {
    let { selectSku: t, onClose: n, isGift: l, inOfferExperience: a, priceOptions: C, showPromotionalGiftBanner: o, enablePremiumRebrandDesign: p } = e,
        x = p
            ? (0, i.jsx)(r.X6q, {
                  variant: 'heading-lg/bold',
                  children: L.intl.string(L.t['r+SebW'])
              })
            : (0, i.jsx)(r.vwX, {
                  tag: r.RB0.H4,
                  children: L.intl.string(L.t['r+SebW'])
              });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                className: s()(_.skuSelectModalHeader, { [_.premiumRebrandHeader]: p }),
                separator: !1,
                children: [
                    x,
                    (0, i.jsx)(r.olH, {
                        className: _.close,
                        innerClassName: _.closeInner,
                        onClick: n
                    })
                ]
            }),
            (0, i.jsxs)(r.hzk, {
                className: s()(_.skuSelectModalContent, {
                    [_.modalSize]: !p,
                    [_.modalPadding]: a && !p,
                    [_.premiumRebrandContent]: p
                }),
                children: [
                    (0, i.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: _.legacyPricingNotice
                    }),
                    (0, i.jsx)(c.Z, {
                        onSelectSku: (e) => t((0, u.Wz)(e)),
                        isGift: l,
                        priceOptions: C,
                        showPromotionalGiftBanner: o,
                        enablePremiumRebrandDesign: p
                    })
                ]
            })
        ]
    });
}
