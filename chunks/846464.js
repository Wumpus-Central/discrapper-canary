n.d(t, { q: () => g });
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(140465),
    o = n(283066),
    C = n(639119),
    d = n(973007),
    c = n(74538),
    u = n(987209),
    p = n(563132),
    x = n(409813),
    h = n(614223),
    f = n(48175),
    _ = n(474936),
    m = n(388032),
    j = n(360026);
function g(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: l,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: m,
            priceOptions: j,
            defaultPlanId: g,
        } = (0, p.JL)(),
        { isGift: y, claimableRewards: L } = (0, u.wD)(),
        v = y && null != L && L.length > 0,
        S = (0, C.N)(i),
        O = (0, s.Nx)(),
        E = (0, o.Z)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(b, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: r,
                    handleStepChange: i,
                    isGift: l,
                    userTrialOffer: a,
                    setSelectedPlanId: s,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: C,
                } = e;
                r(n);
                let d = x.h8.PLAN_SELECT,
                    u = (0, c.k5)(t);
                (u !== _.Si.TIER_1 && u !== _.Si.TIER_2) || n !== _.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
                let p = (0, f.T)({
                        userTrialOffer: a,
                        isGift: l,
                        skuId: n,
                    }),
                    m = (0, h.Kp)({
                        isTrial: p,
                        isGift: l,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                d !== x.h8.WHAT_YOU_LOSE && m && ((d = x.h8.REVIEW), s((0, h.nA)(n, t, C))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: l,
                handleStepChange: t,
                isGift: y,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: m,
                defaultPlanId: g,
            }),
        onClose: n,
        isGift: y,
        inOfferExperience: O,
        priceOptions: j,
        showPromotionalGiftBanner: v,
        enablePremiumBrandRefresh: E,
    });
}
function b(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: i,
            inOfferExperience: s,
            priceOptions: o,
            showPromotionalGiftBanner: C,
            enablePremiumBrandRefresh: u,
        } = e,
        p = u
            ? (0, r.jsx)(a.Heading, {
                  variant: "heading-lg/bold",
                  children: m.intl.string(m.t["r+SebU"]),
              })
            : (0, r.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: m.intl.string(m.t["r+SebU"]),
              });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.xBx, {
                "data-migration-pending": !0,
                className: l()(j.skuSelectModalHeader, { [j.premiumBrandRefreshHeader]: u }),
                separator: !1,
                children: (0, r.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        p,
                        (0, r.jsx)(a.olH, {
                            "data-migration-pending": !0,
                            className: j.close,
                            innerClassName: j.closeInner,
                            onClick: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(a.hzk, {
                "data-migration-pending": !0,
                className: l()(j.skuSelectModalContent, {
                    [j.modalSize]: !u,
                    [j.modalPadding]: s && !u,
                    [j.premiumBrandRefreshContent]: u,
                }),
                children: (0, r.jsx)(d.ZP, {
                    onSelectSku: (e) => t((0, c.Wz)(e)),
                    isGift: i,
                    priceOptions: o,
                    showPromotionalGiftBanner: C,
                    enablePremiumBrandRefresh: u,
                }),
            }),
        ],
    });
}
