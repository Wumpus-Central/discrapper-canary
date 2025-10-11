n.d(t, { q: () => y });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(140465),
    s = n(47280),
    d = n(998030),
    C = n(639119),
    c = n(973007),
    u = n(701464),
    p = n(74538),
    _ = n(987209),
    f = n(563132),
    h = n(409813),
    m = n(614223),
    x = n(48175),
    g = n(474936),
    b = n(388032),
    j = n(360026);
function y(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: a,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: c,
            priceOptions: u,
            defaultPlanId: b,
        } = (0, f.JL)(),
        { isGift: j, claimableRewards: y } = (0, _.wD)(),
        L = j && null != y && y.length > 0,
        S = (0, C.N)(i),
        w = (0, o.Nx)(),
        O = (0, s.ZP)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(v, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: r,
                    handleStepChange: i,
                    isGift: a,
                    userTrialOffer: l,
                    setSelectedPlanId: o,
                    startedPaymentFlowWithPaymentSources: s,
                    defaultPlanId: d,
                } = e;
                r(n);
                let C = h.h8.PLAN_SELECT,
                    c = (0, p.k5)(t);
                (c !== g.Si.TIER_1 && c !== g.Si.TIER_2) || n !== g.Si.TIER_0 || a || (C = h.h8.WHAT_YOU_LOSE);
                let u = (0, x.T)({
                        userTrialOffer: l,
                        isGift: a,
                        skuId: n,
                    }),
                    _ = (0, m.Kp)({
                        isTrial: u,
                        isGift: a,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                C !== h.h8.WHAT_YOU_LOSE && _ && ((C = h.h8.REVIEW), o((0, m.nA)(n, t, d))),
                    i(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: l,
                newSkuId: e,
                setSelectedSkuId: a,
                handleStepChange: t,
                isGift: j,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: c,
                defaultPlanId: b,
            }),
        onClose: n,
        isGift: j,
        inOfferExperience: w,
        priceOptions: u,
        showPromotionalGiftBanner: L,
        enablePremiumBrandRefresh: O,
    });
}
function v(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: i,
            inOfferExperience: o,
            priceOptions: s,
            showPromotionalGiftBanner: C,
            enablePremiumBrandRefresh: f,
        } = e,
        h = f
            ? (0, r.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  children: b.intl.string(b.t["r+SebW"]),
              })
            : (0, r.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  children: b.intl.string(b.t["r+SebW"]),
              }),
        { giftRecipient: m } = (0, _.wD)(),
        x = (0, d.y)({ location: "PremiumPaymentSelect" }) && i && null != m;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.xBx, {
                "data-migration-pending": !0,
                className: a()(j.skuSelectModalHeader, { [j.premiumBrandRefreshHeader]: f }),
                separator: !1,
                children: (0, r.jsxs)(l.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        h,
                        (0, r.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: j.close,
                            innerClassName: j.closeInner,
                            onClick: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(l.hzk, {
                "data-migration-pending": !0,
                className: a()(j.skuSelectModalContent, {
                    [j.modalSize]: !f,
                    [j.modalPadding]: o && !f,
                    [j.premiumBrandRefreshContent]: f,
                    [j.wishlistModalSize]: x,
                }),
                children: x
                    ? (0, r.jsx)(u.Z, {
                          onSelectSku: (e) => t((0, p.Wz)(e)),
                          isGift: i,
                          priceOptions: s,
                          showPromotionalGiftBanner: C,
                          giftRecipient: m,
                      })
                    : (0, r.jsx)(c.ZP, {
                          onSelectSku: (e) => t((0, p.Wz)(e)),
                          isGift: i,
                          priceOptions: s,
                          showPromotionalGiftBanner: C,
                          enablePremiumBrandRefresh: f,
                      }),
            }),
        ],
    });
}
