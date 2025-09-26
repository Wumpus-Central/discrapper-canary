n.d(t, { q: () => j });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(140465),
    s = n(47280),
    d = n(639119),
    C = n(973007),
    c = n(74538),
    u = n(987209),
    p = n(563132),
    _ = n(409813),
    f = n(614223),
    h = n(48175),
    m = n(474936),
    x = n(388032),
    g = n(360026);
function j(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: a,
            activeSubscription: o,
            startedPaymentFlowWithPaymentSourcesRef: C,
            setSelectedPlanId: x,
            priceOptions: g,
            defaultPlanId: j,
        } = (0, p.JL)(),
        { isGift: L, claimableRewards: y } = (0, u.wD)(),
        v = L && null != y && y.length > 0,
        S = (0, d.N)(i),
        O = (0, l.Nx)(),
        E = (0, s.ZP)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(b, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: r,
                    handleStepChange: i,
                    isGift: a,
                    userTrialOffer: o,
                    setSelectedPlanId: l,
                    startedPaymentFlowWithPaymentSources: s,
                    defaultPlanId: d,
                } = e;
                r(n);
                let C = _.h8.PLAN_SELECT,
                    u = (0, c.k5)(t);
                (u !== m.Si.TIER_1 && u !== m.Si.TIER_2) || n !== m.Si.TIER_0 || a || (C = _.h8.WHAT_YOU_LOSE);
                let p = (0, h.T)({
                        userTrialOffer: o,
                        isGift: a,
                        skuId: n,
                    }),
                    x = (0, f.Kp)({
                        isTrial: p,
                        isGift: a,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                C !== _.h8.WHAT_YOU_LOSE && x && ((C = _.h8.REVIEW), l((0, f.nA)(n, t, d))),
                    i(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: o,
                newSkuId: e,
                setSelectedSkuId: a,
                handleStepChange: t,
                isGift: L,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: C.current,
                setSelectedPlanId: x,
                defaultPlanId: j,
            }),
        onClose: n,
        isGift: L,
        inOfferExperience: O,
        priceOptions: g,
        showPromotionalGiftBanner: v,
        enablePremiumBrandRefresh: E,
    });
}
function b(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: i,
            inOfferExperience: l,
            priceOptions: s,
            showPromotionalGiftBanner: d,
            enablePremiumBrandRefresh: u,
        } = e,
        p = u
            ? (0, r.jsx)(o.X6q, {
                  variant: "heading-lg/bold",
                  children: x.intl.string(x.t["r+SebW"]),
              })
            : (0, r.jsx)(o.vwX, {
                  tag: o.RB0.H4,
                  children: x.intl.string(x.t["r+SebW"]),
              });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                className: a()(g.skuSelectModalHeader, { [g.premiumBrandRefreshHeader]: u }),
                separator: !1,
                children: [
                    p,
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: g.close,
                        innerClassName: g.closeInner,
                        onClick: n,
                    }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                "data-migration-pending": !0,
                className: a()(g.skuSelectModalContent, {
                    [g.modalSize]: !u,
                    [g.modalPadding]: l && !u,
                    [g.premiumBrandRefreshContent]: u,
                }),
                children: (0, r.jsx)(C.Z, {
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
