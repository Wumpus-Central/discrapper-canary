n.d(t, { q: () => v });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(140465),
    s = n(47280),
    d = n(998030),
    c = n(639119),
    C = n(973007),
    u = n(701464),
    p = n(74538),
    _ = n(987209),
    h = n(563132),
    f = n(409813),
    m = n(614223),
    x = n(48175),
    g = n(474936),
    j = n(388032),
    b = n(360026);
function v(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: a,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: C,
            priceOptions: u,
            defaultPlanId: j,
        } = (0, h.JL)(),
        { isGift: b, claimableRewards: v } = (0, _.wD)(),
        S = b && null != v && v.length > 0,
        L = (0, c.N)(i),
        I = (0, o.Nx)(),
        w = (0, s.ZP)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(y, {
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
                let c = f.h8.PLAN_SELECT,
                    C = (0, p.k5)(t);
                (C !== g.Si.TIER_1 && C !== g.Si.TIER_2) || n !== g.Si.TIER_0 || a || (c = f.h8.WHAT_YOU_LOSE);
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
                c !== f.h8.WHAT_YOU_LOSE && _ && ((c = f.h8.REVIEW), o((0, m.nA)(n, t, d))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: l,
                newSkuId: e,
                setSelectedSkuId: a,
                handleStepChange: t,
                isGift: b,
                userTrialOffer: L,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: C,
                defaultPlanId: j,
            }),
        onClose: n,
        isGift: b,
        inOfferExperience: I,
        priceOptions: u,
        showPromotionalGiftBanner: S,
        enablePremiumBrandRefresh: w,
    });
}
function y(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: i,
            inOfferExperience: o,
            priceOptions: s,
            showPromotionalGiftBanner: c,
            enablePremiumBrandRefresh: h,
        } = e,
        f = h
            ? (0, r.jsx)(l.X6q, {
                  variant: "heading-lg/bold",
                  children: j.intl.string(j.t["r+SebW"]),
              })
            : (0, r.jsx)(l.vwX, {
                  tag: l.RB0.H4,
                  children: j.intl.string(j.t["r+SebW"]),
              }),
        { giftRecipient: m } = (0, _.wD)(),
        x = (0, d.y)({ location: "PremiumPaymentSelect" }) && i && null != m;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                className: a()(b.skuSelectModalHeader, { [b.premiumBrandRefreshHeader]: h }),
                separator: !1,
                children: [
                    f,
                    (0, r.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: b.close,
                        innerClassName: b.closeInner,
                        onClick: n,
                    }),
                ],
            }),
            (0, r.jsx)(l.hzk, {
                "data-migration-pending": !0,
                className: a()(b.skuSelectModalContent, {
                    [b.modalSize]: !h,
                    [b.modalPadding]: o && !h,
                    [b.premiumBrandRefreshContent]: h,
                    [b.wishlistModalSize]: x,
                }),
                children: x
                    ? (0, r.jsx)(u.Z, {
                          onSelectSku: (e) => t((0, p.Wz)(e)),
                          isGift: i,
                          priceOptions: s,
                          showPromotionalGiftBanner: c,
                      })
                    : (0, r.jsx)(C.ZP, {
                          onSelectSku: (e) => t((0, p.Wz)(e)),
                          isGift: i,
                          priceOptions: s,
                          showPromotionalGiftBanner: c,
                          enablePremiumBrandRefresh: h,
                      }),
            }),
        ],
    });
}
