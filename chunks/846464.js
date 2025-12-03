n.d(t, { q: () => S });
var r = n(54381),
    l = n(120356),
    a = n.n(l),
    i = n(481060),
    o = n(241986),
    s = n(639119),
    u = n(973007),
    c = n(74538),
    d = n(987209),
    p = n(563132),
    m = n(409813),
    h = n(614223),
    f = n(48175),
    b = n(474936),
    g = n(388032),
    v = n(360026);
function S(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: l } = e,
        {
            setSelectedSkuId: a,
            activeSubscription: i,
            startedPaymentFlowWithPaymentSourcesRef: o,
            setSelectedPlanId: u,
            priceOptions: g,
            defaultPlanId: v,
            hasPaymentSources: S,
        } = (0, p.JL)(),
        { isGift: x, claimableRewards: P } = (0, d.wD)(),
        j = x && null != P && P.length > 0,
        _ = (0, s.N)(l);
    return (0, r.jsx)(y, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: r,
                    handleStepChange: l,
                    isGift: a,
                    userTrialOffer: i,
                    setSelectedPlanId: o,
                    startedPaymentFlowWithPaymentSources: s,
                    defaultPlanId: u,
                } = e;
                r(n);
                let d = m.h8.PLAN_SELECT,
                    p = (0, c.k5)(t);
                (p !== b.Si.TIER_1 && p !== b.Si.TIER_2) || n !== b.Si.TIER_0 || a || (d = m.h8.WHAT_YOU_LOSE);
                let g = (0, f.T)({
                        userTrialOffer: i,
                        isGift: a,
                        skuId: n,
                    }),
                    v = (0, h.Kp)({
                        isTrial: g,
                        isGift: a,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                d !== m.h8.WHAT_YOU_LOSE && v && ((d = m.h8.REVIEW), o((0, h.nA)(n, t, u))),
                    l(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: i,
                newSkuId: e,
                setSelectedSkuId: a,
                handleStepChange: t,
                isGift: x,
                userTrialOffer: _,
                startedPaymentFlowWithPaymentSources: o.current,
                setSelectedPlanId: u,
                defaultPlanId: v,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: r, setSelectedSkuId: l } = e;
                l((0, c.Wz)(b.Si.TIER_2)),
                    t(b.Xh.PREMIUM_GROUP_MONTH),
                    n(r ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: b.Si.TIER_2 } });
            })({
                setSelectedPlanId: u,
                handleStepChange: t,
                hasPaymentSources: S,
                setSelectedSkuId: a,
            }),
        onClose: n,
        isGift: x,
        priceOptions: g,
        showPromotionalGiftBanner: j,
    });
}
function y(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: l,
            priceOptions: s,
            showPromotionalGiftBanner: d,
            onSelectPremiumGroup: p,
        } = e,
        m = (0, o.Z)({ location: "PremiumPaymentSKUSelectStep" }) && !l;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.xBx, {
                "data-migration-pending": !0,
                className: a()(v.skuSelectModalHeader, v.premiumBrandRefreshHeader),
                separator: !1,
                children: (0, r.jsxs)(i.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, r.jsx)(i.Heading, {
                            variant: "heading-lg/bold",
                            children: g.intl.string(g.t["r+SebU"]),
                        }),
                        (0, r.jsx)(i.olH, {
                            "data-migration-pending": !0,
                            className: v.close,
                            innerClassName: v.closeInner,
                            onClick: n,
                        }),
                    ],
                }),
            }),
            m
                ? (0, r.jsx)(i.hzk, {
                      "data-migration-pending": !0,
                      className: v.skuSelectWithPremiumGroupModalContent,
                      children: (0, r.jsx)(u.wz, {
                          onSelectSku: (e) => t((0, c.Wz)(e)),
                          onSelectPremiumGroup: p,
                          priceOptions: s,
                          showPromotionalGiftBanner: d,
                      }),
                  })
                : (0, r.jsx)(i.hzk, {
                      "data-migration-pending": !0,
                      className: a()(v.skuSelectModalContent, v.premiumBrandRefreshContent),
                      children: (0, r.jsx)(u.ZP, {
                          onSelectSku: (e) => t((0, c.Wz)(e)),
                          isGift: l,
                          priceOptions: s,
                          showPromotionalGiftBanner: d,
                      }),
                  }),
        ],
    });
}
