t.d(n, { q: () => m });
var r = t(951288);
t(647438);
var i = t(120356),
    l = t.n(i),
    s = t(481060),
    a = t(140465),
    o = t(47280),
    C = t(639119),
    d = t(973007),
    p = t(74538),
    c = t(987209),
    u = t(563132),
    x = t(409813),
    _ = t(614223),
    f = t(48175),
    h = t(474936),
    j = t(388032),
    L = t(360026);
function m(e) {
    let { handleStepChange: n, handleClose: t, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: l,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: j,
            priceOptions: L,
            defaultPlanId: m,
        } = (0, u.JL)(),
        { isGift: S, claimableRewards: y } = (0, c.wD)(),
        E = S && null != y && y.length > 0,
        b = (0, C.N)(i),
        P = (0, a.Nx)(),
        O = (0, o.ZP)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(g, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: n,
                    newSkuId: t,
                    setSelectedSkuId: r,
                    handleStepChange: i,
                    isGift: l,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: C,
                } = e;
                r(t);
                let d = x.h8.PLAN_SELECT,
                    c = (0, p.k5)(n);
                (c !== h.Si.TIER_1 && c !== h.Si.TIER_2) || t !== h.Si.TIER_0 || l || (d = x.h8.WHAT_YOU_LOSE);
                let u = (0, f.T)({
                        userTrialOffer: s,
                        isGift: l,
                        skuId: t,
                    }),
                    j = (0, _.Kp)({
                        isTrial: u,
                        isGift: l,
                        selectedSkuId: t,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                d !== x.h8.WHAT_YOU_LOSE && j && ((d = x.h8.REVIEW), a((0, _.nA)(t, n, C))),
                    i(d, { analyticsDataOverride: { sku_id: t } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: l,
                handleStepChange: n,
                isGift: S,
                userTrialOffer: b,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: j,
                defaultPlanId: m,
            }),
        onClose: t,
        isGift: S,
        inOfferExperience: P,
        priceOptions: L,
        showPromotionalGiftBanner: E,
        enablePremiumBrandRefresh: O,
    });
}
function g(e) {
    let {
            selectSku: n,
            onClose: t,
            isGift: i,
            inOfferExperience: a,
            priceOptions: o,
            showPromotionalGiftBanner: C,
            enablePremiumBrandRefresh: c,
        } = e,
        u = c
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
                className: l()(L.skuSelectModalHeader, { [L.premiumBrandRefreshHeader]: c }),
                separator: !1,
                children: [
                    u,
                    (0, r.jsx)(s.olH, {
                        className: L.close,
                        innerClassName: L.closeInner,
                        onClick: t,
                    }),
                ],
            }),
            (0, r.jsx)(s.hzk, {
                "data-migration-pending": !0,
                className: l()(L.skuSelectModalContent, {
                    [L.modalSize]: !c,
                    [L.modalPadding]: a && !c,
                    [L.premiumBrandRefreshContent]: c,
                }),
                children: (0, r.jsx)(d.Z, {
                    onSelectSku: (e) => n((0, p.Wz)(e)),
                    isGift: i,
                    priceOptions: o,
                    showPromotionalGiftBanner: C,
                    enablePremiumBrandRefresh: c,
                }),
            }),
        ],
    });
}
