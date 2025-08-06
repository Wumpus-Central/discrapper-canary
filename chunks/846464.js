t.d(r, { q: () => L });
var n = t(255367);
t(73800);
var i = t(120356),
    o = t.n(i),
    l = t(481060),
    a = t(140465),
    s = t(47280),
    d = t(639119),
    C = t(973007),
    c = t(74538),
    u = t(987209),
    p = t(563132),
    _ = t(409813),
    f = t(614223),
    m = t(48175),
    x = t(474936),
    h = t(388032),
    j = t(677163);
function L(e) {
    let { handleStepChange: r, handleClose: t, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: o,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: C,
            setSelectedPlanId: h,
            priceOptions: j,
            defaultPlanId: L,
        } = (0, p.JL)(),
        { isGift: g, claimableRewards: y } = (0, u.wD)(),
        S = g && null != y && y.length > 0,
        E = (0, d.N)(i),
        v = (0, a.Nx)(),
        I = (0, s.Z)({ location: "PremiumPaymentSelect" });
    return (0, n.jsx)(b, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: r,
                    newSkuId: t,
                    setSelectedSkuId: n,
                    handleStepChange: i,
                    isGift: o,
                    userTrialOffer: l,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: s,
                    defaultPlanId: d,
                } = e;
                n(t);
                let C = _.h8.PLAN_SELECT,
                    u = (0, c.k5)(r);
                (u !== x.Si.TIER_1 && u !== x.Si.TIER_2) || t !== x.Si.TIER_0 || o || (C = _.h8.WHAT_YOU_LOSE);
                let p = (0, m.T)({
                        userTrialOffer: l,
                        isGift: o,
                        skuId: t,
                    }),
                    h = (0, f.Kp)({
                        isTrial: p,
                        isGift: o,
                        selectedSkuId: t,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                C !== _.h8.WHAT_YOU_LOSE && h && ((C = _.h8.REVIEW), a((0, f.nA)(t, r, d))),
                    i(C, { analyticsDataOverride: { sku_id: t } });
            })({
                activeSubscription: l,
                newSkuId: e,
                setSelectedSkuId: o,
                handleStepChange: r,
                isGift: g,
                userTrialOffer: E,
                startedPaymentFlowWithPaymentSources: C.current,
                setSelectedPlanId: h,
                defaultPlanId: L,
            }),
        onClose: t,
        isGift: g,
        inOfferExperience: v,
        priceOptions: j,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: I,
    });
}
function b(e) {
    let {
            selectSku: r,
            onClose: t,
            isGift: i,
            inOfferExperience: a,
            priceOptions: s,
            showPromotionalGiftBanner: d,
            enablePremiumBrandRefresh: u,
        } = e,
        p = u
            ? (0, n.jsx)(l.X6q, {
                  variant: "heading-lg/bold",
                  children: h.intl.string(h.t["r+SebW"]),
              })
            : (0, n.jsx)(l.vwX, {
                  tag: l.RB0.H4,
                  children: h.intl.string(h.t["r+SebW"]),
              });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                className: o()(j.skuSelectModalHeader, { [j.premiumBrandRefreshHeader]: u }),
                separator: !1,
                children: [
                    p,
                    (0, n.jsx)(l.olH, {
                        className: j.close,
                        innerClassName: j.closeInner,
                        onClick: t,
                    }),
                ],
            }),
            (0, n.jsx)(l.hzk, {
                "data-migration-pending": !0,
                className: o()(j.skuSelectModalContent, {
                    [j.modalSize]: !u,
                    [j.modalPadding]: a && !u,
                    [j.premiumBrandRefreshContent]: u,
                }),
                children: (0, n.jsx)(C.Z, {
                    onSelectSku: (e) => r((0, c.Wz)(e)),
                    isGift: i,
                    priceOptions: s,
                    showPromotionalGiftBanner: d,
                    enablePremiumBrandRefresh: u,
                }),
            }),
        ],
    });
}
