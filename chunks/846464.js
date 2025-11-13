n.d(t, { q: () => j });
var r = n(951288),
    l = n(120356),
    a = n.n(l),
    i = n(481060),
    o = n(140465),
    s = n(283066),
    d = n(639119),
    c = n(973007),
    u = n(74538),
    p = n(987209),
    m = n(563132),
    h = n(409813),
    f = n(614223),
    b = n(48175),
    g = n(474936),
    v = n(388032),
    x = n(360026);
function j(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: l } = e,
        {
            setSelectedSkuId: a,
            activeSubscription: i,
            startedPaymentFlowWithPaymentSourcesRef: c,
            setSelectedPlanId: v,
            priceOptions: x,
            defaultPlanId: j,
        } = (0, m.JL)(),
        { isGift: P, claimableRewards: S } = (0, p.wD)(),
        _ = P && null != S && S.length > 0,
        O = (0, d.N)(l),
        C = (0, o.Nx)(),
        w = (0, s.Z)({ location: "PremiumPaymentSelect" });
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
                    defaultPlanId: d,
                } = e;
                r(n);
                let c = h.h8.PLAN_SELECT,
                    p = (0, u.k5)(t);
                (p !== g.Si.TIER_1 && p !== g.Si.TIER_2) || n !== g.Si.TIER_0 || a || (c = h.h8.WHAT_YOU_LOSE);
                let m = (0, b.T)({
                        userTrialOffer: i,
                        isGift: a,
                        skuId: n,
                    }),
                    v = (0, f.Kp)({
                        isTrial: m,
                        isGift: a,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                c !== h.h8.WHAT_YOU_LOSE && v && ((c = h.h8.REVIEW), o((0, f.nA)(n, t, d))),
                    l(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: i,
                newSkuId: e,
                setSelectedSkuId: a,
                handleStepChange: t,
                isGift: P,
                userTrialOffer: O,
                startedPaymentFlowWithPaymentSources: c.current,
                setSelectedPlanId: v,
                defaultPlanId: j,
            }),
        onClose: n,
        isGift: P,
        inOfferExperience: C,
        priceOptions: x,
        showPromotionalGiftBanner: _,
        enablePremiumBrandRefresh: w,
    });
}
function y(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: l,
            inOfferExperience: o,
            priceOptions: s,
            showPromotionalGiftBanner: d,
            enablePremiumBrandRefresh: p,
        } = e,
        m = p
            ? (0, r.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  children: v.intl.string(v.t["r+SebU"]),
              })
            : (0, r.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  children: v.intl.string(v.t["r+SebU"]),
              });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.xBx, {
                "data-migration-pending": !0,
                className: a()(x.skuSelectModalHeader, { [x.premiumBrandRefreshHeader]: p }),
                separator: !1,
                children: (0, r.jsxs)(i.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        m,
                        (0, r.jsx)(i.olH, {
                            "data-migration-pending": !0,
                            className: x.close,
                            innerClassName: x.closeInner,
                            onClick: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(i.hzk, {
                "data-migration-pending": !0,
                className: a()(x.skuSelectModalContent, {
                    [x.modalSize]: !p,
                    [x.modalPadding]: o && !p,
                    [x.premiumBrandRefreshContent]: p,
                }),
                children: (0, r.jsx)(c.ZP, {
                    onSelectSku: (e) => t((0, u.Wz)(e)),
                    isGift: l,
                    priceOptions: s,
                    showPromotionalGiftBanner: d,
                    enablePremiumBrandRefresh: p,
                }),
            }),
        ],
    });
}
