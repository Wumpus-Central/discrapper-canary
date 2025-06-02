n.d(t, { q: () => L });
var i = n(255367);
n(73800);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    a = n(140465),
    o = n(988001),
    C = n(639119),
    d = n(55610),
    c = n(973007),
    u = n(74538),
    p = n(987209),
    x = n(563132),
    h = n(409813),
    f = n(614223),
    j = n(48175),
    m = n(474936),
    _ = n(388032),
    g = n(677163);
function L(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: l } = e,
        { setSelectedSkuId: s, activeSubscription: r, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: c, priceOptions: _ } = (0, x.JL)(),
        { isGift: g, claimableRewards: L } = (0, p.wD)(),
        y = g && null != L && L.length > 0,
        S = (0, C.N)(l),
        P = (0, a.Nx)(),
        v = (0, o.Z)({ location: 'PremiumPaymentSelect' });
    return (0, i.jsx)(E, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: t, newSkuId: n, setSelectedSkuId: i, handleStepChange: l, isGift: s, userTrialOffer: r, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: o } = e;
                i(n);
                let C = h.h8.PLAN_SELECT,
                    d = (0, u.k5)(t);
                (d !== m.Si.TIER_1 && d !== m.Si.TIER_2) || n !== m.Si.TIER_0 || s || (C = h.h8.WHAT_YOU_LOSE);
                let c = (0, j.T)({
                        userTrialOffer: r,
                        isGift: s,
                        skuId: n
                    }),
                    p = (0, f.Kp)({
                        isTrial: c,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o
                    });
                C !== h.h8.WHAT_YOU_LOSE && p && ((C = h.h8.REVIEW), a((0, f.nA)(n, t))), l(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: r,
                newSkuId: e,
                setSelectedSkuId: s,
                handleStepChange: t,
                isGift: g,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: c
            }),
        onClose: n,
        isGift: g,
        inOfferExperience: P,
        priceOptions: _,
        showPromotionalGiftBanner: y,
        enablePremiumRebrandDesign: v
    });
}
function E(e) {
    let { selectSku: t, onClose: n, isGift: l, inOfferExperience: a, priceOptions: o, showPromotionalGiftBanner: C, enablePremiumRebrandDesign: p } = e,
        x = p
            ? (0, i.jsx)(r.X6q, {
                  variant: 'heading-lg/bold',
                  children: _.intl.string(_.t['r+SebW'])
              })
            : (0, i.jsx)(r.vwX, {
                  tag: r.RB0.H4,
                  children: _.intl.string(_.t['r+SebW'])
              });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.xBx, {
                className: s()(g.skuSelectModalHeader, { [g.premiumRebrandHeader]: p }),
                separator: !1,
                children: [
                    x,
                    (0, i.jsx)(r.olH, {
                        className: g.close,
                        innerClassName: g.closeInner,
                        onClick: n
                    })
                ]
            }),
            (0, i.jsxs)(r.hzk, {
                className: s()(g.skuSelectModalContent, {
                    [g.modalSize]: !p,
                    [g.modalPadding]: a && !p,
                    [g.premiumRebrandContent]: p
                }),
                children: [
                    (0, i.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: g.legacyPricingNotice
                    }),
                    (0, i.jsx)(c.Z, {
                        onSelectSku: (e) => t((0, u.Wz)(e)),
                        isGift: l,
                        priceOptions: o,
                        showPromotionalGiftBanner: C,
                        enablePremiumRebrandDesign: p
                    })
                ]
            })
        ]
    });
}
