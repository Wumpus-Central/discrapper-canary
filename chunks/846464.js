n.d(r, { q: () => L });
var t = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    l = n(140465),
    s = n(47280),
    C = n(639119),
    d = n(973007),
    c = n(74538),
    p = n(987209),
    u = n(563132),
    _ = n(409813),
    x = n(614223),
    f = n(48175),
    m = n(474936),
    h = n(388032),
    j = n(360026);
function L(e) {
    let { handleStepChange: r, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: o,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: h,
            priceOptions: j,
            defaultPlanId: L,
        } = (0, u.JL)(),
        { isGift: b, claimableRewards: y } = (0, p.wD)(),
        S = b && null != y && y.length > 0,
        v = (0, C.N)(i),
        E = (0, l.Nx)(),
        I = (0, s.ZP)({ location: "PremiumPaymentSelect" });
    return (0, t.jsx)(g, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: r,
                    newSkuId: n,
                    setSelectedSkuId: t,
                    handleStepChange: i,
                    isGift: o,
                    userTrialOffer: a,
                    setSelectedPlanId: l,
                    startedPaymentFlowWithPaymentSources: s,
                    defaultPlanId: C,
                } = e;
                t(n);
                let d = _.h8.PLAN_SELECT,
                    p = (0, c.k5)(r);
                (p !== m.Si.TIER_1 && p !== m.Si.TIER_2) || n !== m.Si.TIER_0 || o || (d = _.h8.WHAT_YOU_LOSE);
                let u = (0, f.T)({
                        userTrialOffer: a,
                        isGift: o,
                        skuId: n,
                    }),
                    h = (0, x.Kp)({
                        isTrial: u,
                        isGift: o,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                d !== _.h8.WHAT_YOU_LOSE && h && ((d = _.h8.REVIEW), l((0, x.nA)(n, r, C))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: o,
                handleStepChange: r,
                isGift: b,
                userTrialOffer: v,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: h,
                defaultPlanId: L,
            }),
        onClose: n,
        isGift: b,
        inOfferExperience: E,
        priceOptions: j,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: I,
    });
}
function g(e) {
    let {
            selectSku: r,
            onClose: n,
            isGift: i,
            inOfferExperience: l,
            priceOptions: s,
            showPromotionalGiftBanner: C,
            enablePremiumBrandRefresh: p,
        } = e,
        u = p
            ? (0, t.jsx)(a.X6q, {
                  variant: "heading-lg/bold",
                  children: h.intl.string(h.t["r+SebW"]),
              })
            : (0, t.jsx)(a.vwX, {
                  tag: a.RB0.H4,
                  children: h.intl.string(h.t["r+SebW"]),
              });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                className: o()(j.skuSelectModalHeader, { [j.premiumBrandRefreshHeader]: p }),
                separator: !1,
                children: [
                    u,
                    (0, t.jsx)(a.olH, {
                        className: j.close,
                        innerClassName: j.closeInner,
                        onClick: n,
                    }),
                ],
            }),
            (0, t.jsx)(a.hzk, {
                "data-migration-pending": !0,
                className: o()(j.skuSelectModalContent, {
                    [j.modalSize]: !p,
                    [j.modalPadding]: l && !p,
                    [j.premiumBrandRefreshContent]: p,
                }),
                children: (0, t.jsx)(d.Z, {
                    onSelectSku: (e) => r((0, c.Wz)(e)),
                    isGift: i,
                    priceOptions: s,
                    showPromotionalGiftBanner: C,
                    enablePremiumBrandRefresh: p,
                }),
            }),
        ],
    });
}
