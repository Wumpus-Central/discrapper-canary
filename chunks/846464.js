r.d(t, { q: () => L });
var n = r(255367);
r(73800);
var i = r(120356),
    o = r.n(i),
    a = r(481060),
    l = r(140465),
    s = r(47280),
    d = r(639119),
    C = r(973007),
    c = r(74538),
    u = r(987209),
    p = r(563132),
    _ = r(409813),
    f = r(614223),
    m = r(48175),
    x = r(474936),
    h = r(388032),
    j = r(677163);
function L(e) {
    let { handleStepChange: t, handleClose: r, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: o,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSourcesRef: C,
            setSelectedPlanId: h,
            priceOptions: j,
            defaultPlanId: L,
        } = (0, p.JL)(),
        { isGift: g, claimableRewards: y } = (0, u.wD)(),
        S = g && null != y && y.length > 0,
        E = (0, d.N)(i),
        v = (0, l.Nx)(),
        I = (0, s.Z)({ location: "PremiumPaymentSelect" });
    return (0, n.jsx)(b, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: r,
                    setSelectedSkuId: n,
                    handleStepChange: i,
                    isGift: o,
                    userTrialOffer: a,
                    setSelectedPlanId: l,
                    startedPaymentFlowWithPaymentSources: s,
                    defaultPlanId: d,
                } = e;
                n(r);
                let C = _.h8.PLAN_SELECT,
                    u = (0, c.k5)(t);
                (u !== x.Si.TIER_1 && u !== x.Si.TIER_2) || r !== x.Si.TIER_0 || o || (C = _.h8.WHAT_YOU_LOSE);
                let p = (0, m.T)({
                        userTrialOffer: a,
                        isGift: o,
                        skuId: r,
                    }),
                    h = (0, f.Kp)({
                        isTrial: p,
                        isGift: o,
                        selectedSkuId: r,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                C !== _.h8.WHAT_YOU_LOSE && h && ((C = _.h8.REVIEW), l((0, f.nA)(r, t, d))),
                    i(C, { analyticsDataOverride: { sku_id: r } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: o,
                handleStepChange: t,
                isGift: g,
                userTrialOffer: E,
                startedPaymentFlowWithPaymentSources: C.current,
                setSelectedPlanId: h,
                defaultPlanId: L,
            }),
        onClose: r,
        isGift: g,
        inOfferExperience: v,
        priceOptions: j,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: I,
    });
}
function b(e) {
    let {
            selectSku: t,
            onClose: r,
            isGift: i,
            inOfferExperience: l,
            priceOptions: s,
            showPromotionalGiftBanner: d,
            enablePremiumBrandRefresh: u,
        } = e,
        p = u
            ? (0, n.jsx)(a.X6q, {
                  variant: "heading-lg/bold",
                  children: h.intl.string(h.t["r+SebW"]),
              })
            : (0, n.jsx)(a.vwX, {
                  tag: a.RB0.H4,
                  children: h.intl.string(h.t["r+SebW"]),
              });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                className: o()(j.skuSelectModalHeader, { [j.premiumBrandRefreshHeader]: u }),
                separator: !1,
                children: [
                    p,
                    (0, n.jsx)(a.olH, {
                        className: j.close,
                        innerClassName: j.closeInner,
                        onClick: r,
                    }),
                ],
            }),
            (0, n.jsx)(a.hzk, {
                "data-migration-pending": !0,
                className: o()(j.skuSelectModalContent, {
                    [j.modalSize]: !u,
                    [j.modalPadding]: l && !u,
                    [j.premiumBrandRefreshContent]: u,
                }),
                children: (0, n.jsx)(C.Z, {
                    onSelectSku: (e) => t((0, c.Wz)(e)),
                    isGift: i,
                    priceOptions: s,
                    showPromotionalGiftBanner: d,
                    enablePremiumBrandRefresh: u,
                }),
            }),
        ],
    });
}
