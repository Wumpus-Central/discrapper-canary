t.d(n, { q: () => L });
var i = t(255367);
t(73800);
var r = t(120356),
    l = t.n(r),
    s = t(481060),
    a = t(140465),
    o = t(47280),
    C = t(639119),
    d = t(973007),
    c = t(74538),
    u = t(987209),
    p = t(563132),
    x = t(409813),
    h = t(614223),
    j = t(48175),
    f = t(474936),
    m = t(388032),
    _ = t(677163);
function L(e) {
    let { handleStepChange: n, handleClose: t, referralTrialOfferId: r } = e,
        { setSelectedSkuId: l, activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: m, priceOptions: _, defaultPlanId: L } = (0, p.JL)(),
        { isGift: y, claimableRewards: E } = (0, u.wD)(),
        S = y && null != E && E.length > 0,
        v = (0, C.N)(r),
        b = (0, a.Nx)(),
        P = (0, o.Z)({ location: 'PremiumPaymentSelect' });
    return (0, i.jsx)(g, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: n, newSkuId: t, setSelectedSkuId: i, handleStepChange: r, isGift: l, userTrialOffer: s, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: o, defaultPlanId: C } = e;
                i(t);
                let d = x.h8.PLAN_SELECT,
                    u = (0, c.k5)(n);
                (u !== f.Si.TIER_1 && u !== f.Si.TIER_2) || t !== f.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
                let p = (0, j.T)({
                        userTrialOffer: s,
                        isGift: l,
                        skuId: t
                    }),
                    m = (0, h.Kp)({
                        isTrial: p,
                        isGift: l,
                        selectedSkuId: t,
                        startedPaymentFlowWithPaymentSources: o
                    });
                (d !== x.h8.WHAT_YOU_LOSE && m && ((d = x.h8.REVIEW), a((0, h.nA)(t, n, C))), r(d, { analyticsDataOverride: { sku_id: t } }));
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: l,
                handleStepChange: n,
                isGift: y,
                userTrialOffer: v,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: m,
                defaultPlanId: L
            }),
        onClose: t,
        isGift: y,
        inOfferExperience: b,
        priceOptions: _,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: P
    });
}
function g(e) {
    let { selectSku: n, onClose: t, isGift: r, inOfferExperience: a, priceOptions: o, showPromotionalGiftBanner: C, enablePremiumBrandRefresh: u } = e,
        p = u
            ? (0, i.jsx)(s.X6q, {
                  variant: 'heading-lg/bold',
                  children: m.intl.string(m.t['r+SebW'])
              })
            : (0, i.jsx)(s.vwX, {
                  tag: s.RB0.H4,
                  children: m.intl.string(m.t['r+SebW'])
              });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.xBx, {
                className: l()(_.skuSelectModalHeader, { [_.premiumBrandRefreshHeader]: u }),
                separator: !1,
                children: [
                    p,
                    (0, i.jsx)(s.olH, {
                        className: _.close,
                        innerClassName: _.closeInner,
                        onClick: t
                    })
                ]
            }),
            (0, i.jsx)(s.hzk, {
                className: l()(_.skuSelectModalContent, {
                    [_.modalSize]: !u,
                    [_.modalPadding]: a && !u,
                    [_.premiumBrandRefreshContent]: u
                }),
                children: (0, i.jsx)(d.Z, {
                    onSelectSku: (e) => n((0, c.Wz)(e)),
                    isGift: r,
                    priceOptions: o,
                    showPromotionalGiftBanner: C,
                    enablePremiumBrandRefresh: u
                })
            })
        ]
    });
}
