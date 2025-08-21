n.d(t, { q: () => L });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(140465),
    o = n(47280),
    C = n(639119),
    d = n(973007),
    c = n(74538),
    p = n(987209),
    u = n(563132),
    x = n(409813),
    f = n(614223),
    h = n(48175),
    _ = n(474936),
    j = n(388032),
    m = n(360026);
function L(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: l,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: j,
            priceOptions: m,
            defaultPlanId: L,
        } = (0, u.JL)(),
        { isGift: g, claimableRewards: y } = (0, p.wD)(),
        S = g && null != y && y.length > 0,
        v = (0, C.N)(i),
        E = (0, s.Nx)(),
        O = (0, o.ZP)({ location: "PremiumPaymentSelect" });
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
                    p = (0, c.k5)(t);
                (p !== _.Si.TIER_1 && p !== _.Si.TIER_2) || n !== _.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
                let u = (0, h.T)({
                        userTrialOffer: a,
                        isGift: l,
                        skuId: n,
                    }),
                    j = (0, f.Kp)({
                        isTrial: u,
                        isGift: l,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                d !== x.h8.WHAT_YOU_LOSE && j && ((d = x.h8.REVIEW), s((0, f.nA)(n, t, C))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: l,
                handleStepChange: t,
                isGift: g,
                userTrialOffer: v,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: j,
                defaultPlanId: L,
            }),
        onClose: n,
        isGift: g,
        inOfferExperience: E,
        priceOptions: m,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: O,
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
            enablePremiumBrandRefresh: p,
        } = e,
        u = p
            ? (0, r.jsx)(a.X6q, {
                  variant: "heading-lg/bold",
                  children: j.intl.string(j.t["r+SebW"]),
              })
            : (0, r.jsx)(a.vwX, {
                  tag: a.RB0.H4,
                  children: j.intl.string(j.t["r+SebW"]),
              });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                className: l()(m.skuSelectModalHeader, { [m.premiumBrandRefreshHeader]: p }),
                separator: !1,
                children: [
                    u,
                    (0, r.jsx)(a.olH, {
                        className: m.close,
                        innerClassName: m.closeInner,
                        onClick: n,
                    }),
                ],
            }),
            (0, r.jsx)(a.hzk, {
                "data-migration-pending": !0,
                className: l()(m.skuSelectModalContent, {
                    [m.modalSize]: !p,
                    [m.modalPadding]: s && !p,
                    [m.premiumBrandRefreshContent]: p,
                }),
                children: (0, r.jsx)(d.Z, {
                    onSelectSku: (e) => t((0, c.Wz)(e)),
                    isGift: i,
                    priceOptions: o,
                    showPromotionalGiftBanner: C,
                    enablePremiumBrandRefresh: p,
                }),
            }),
        ],
    });
}
