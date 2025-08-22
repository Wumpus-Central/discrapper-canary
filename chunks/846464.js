n.d(t, { q: () => L });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(140465),
    o = n(47280),
    C = n(639119),
    d = n(973007),
    c = n(74538),
    p = n(987209),
    u = n(563132),
    x = n(409813),
    h = n(614223),
    _ = n(48175),
    f = n(474936),
    j = n(388032),
    m = n(360026);
function L(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: l,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: j,
            priceOptions: m,
            defaultPlanId: L,
        } = (0, u.JL)(),
        { isGift: b, claimableRewards: y } = (0, p.wD)(),
        S = b && null != y && y.length > 0,
        E = (0, C.N)(i),
        O = (0, a.Nx)(),
        P = (0, o.ZP)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(g, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: r,
                    handleStepChange: i,
                    isGift: l,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: C,
                } = e;
                r(n);
                let d = x.h8.PLAN_SELECT,
                    p = (0, c.k5)(t);
                (p !== f.Si.TIER_1 && p !== f.Si.TIER_2) || n !== f.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
                let u = (0, _.T)({
                        userTrialOffer: s,
                        isGift: l,
                        skuId: n,
                    }),
                    j = (0, h.Kp)({
                        isTrial: u,
                        isGift: l,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                d !== x.h8.WHAT_YOU_LOSE && j && ((d = x.h8.REVIEW), a((0, h.nA)(n, t, C))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: l,
                handleStepChange: t,
                isGift: b,
                userTrialOffer: E,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: j,
                defaultPlanId: L,
            }),
        onClose: n,
        isGift: b,
        inOfferExperience: O,
        priceOptions: m,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: P,
    });
}
function g(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: i,
            inOfferExperience: a,
            priceOptions: o,
            showPromotionalGiftBanner: C,
            enablePremiumBrandRefresh: p,
        } = e,
        u = p
            ? (0, r.jsx)(s.X6q, {
                  variant: "heading-lg/bold",
                  children: j.intl.string(j.t["r+SebW"]),
              })
            : (0, r.jsx)(s.vwX, {
                  tag: s.RB0.H4,
                  children: j.intl.string(j.t["r+SebW"]),
              });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                className: l()(m.skuSelectModalHeader, { [m.premiumBrandRefreshHeader]: p }),
                separator: !1,
                children: [
                    u,
                    (0, r.jsx)(s.olH, {
                        className: m.close,
                        innerClassName: m.closeInner,
                        onClick: n,
                    }),
                ],
            }),
            (0, r.jsx)(s.hzk, {
                "data-migration-pending": !0,
                className: l()(m.skuSelectModalContent, {
                    [m.modalSize]: !p,
                    [m.modalPadding]: a && !p,
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
