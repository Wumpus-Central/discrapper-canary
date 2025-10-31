n.d(t, { q: () => L });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(140465),
    s = n(283066),
    d = n(639119),
    C = n(973007),
    c = n(701464),
    u = n(602733),
    p = n(74538),
    _ = n(987209),
    h = n(563132),
    m = n(409813),
    f = n(614223),
    x = n(48175),
    g = n(474936),
    b = n(388032),
    j = n(360026);
function L(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: a,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: C,
            setSelectedPlanId: c,
            priceOptions: u,
            defaultPlanId: b,
        } = (0, h.JL)(),
        { isGift: j, claimableRewards: L } = (0, _.wD)(),
        y = j && null != L && L.length > 0,
        S = (0, d.N)(i),
        I = (0, o.Nx)(),
        w = (0, s.Z)({ location: "PremiumPaymentSelect" });
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
                let C = m.h8.PLAN_SELECT,
                    c = (0, p.k5)(t);
                (c !== g.Si.TIER_1 && c !== g.Si.TIER_2) || n !== g.Si.TIER_0 || a || (C = m.h8.WHAT_YOU_LOSE);
                let u = (0, x.T)({
                        userTrialOffer: l,
                        isGift: a,
                        skuId: n,
                    }),
                    _ = (0, f.Kp)({
                        isTrial: u,
                        isGift: a,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: s,
                    });
                C !== m.h8.WHAT_YOU_LOSE && _ && ((C = m.h8.REVIEW), o((0, f.nA)(n, t, d))),
                    i(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: l,
                newSkuId: e,
                setSelectedSkuId: a,
                handleStepChange: t,
                isGift: j,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: C.current,
                setSelectedPlanId: c,
                defaultPlanId: b,
            }),
        onClose: n,
        isGift: j,
        inOfferExperience: I,
        priceOptions: u,
        showPromotionalGiftBanner: y,
        enablePremiumBrandRefresh: w,
    });
}
function v(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: i,
            inOfferExperience: o,
            priceOptions: s,
            showPromotionalGiftBanner: d,
            enablePremiumBrandRefresh: h,
        } = e,
        { giftRecipient: m } = (0, _.wD)(),
        f = (0, u.ao)({
            location: "PremiumPaymentSelect",
            giftRecipient: m,
            isGift: i,
        }),
        x = f
            ? (0, r.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  children: b.intl.string(b.t["wg/30i"]),
              })
            : h
              ? (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/bold",
                    children: b.intl.string(b.t["r+SebU"]),
                })
              : (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    children: b.intl.string(b.t["r+SebU"]),
                });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.xBx, {
                "data-migration-pending": !0,
                className: a()(j.skuSelectModalHeader, { [j.premiumBrandRefreshHeader]: h }),
                separator: !1,
                children: (0, r.jsxs)(l.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        x,
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
                    [j.modalSize]: !h,
                    [j.modalPadding]: o && !h,
                    [j.premiumBrandRefreshContent]: h,
                    [j.wishlistModalSize]: f,
                }),
                children:
                    null != m && f
                        ? (0, r.jsx)(c.Z, {
                              onSelectSku: (e) => t((0, p.Wz)(e)),
                              isGift: i,
                              priceOptions: s,
                              showPromotionalGiftBanner: d,
                              giftRecipient: m,
                              onWishlistItemClick: n,
                          })
                        : (0, r.jsx)(C.ZP, {
                              onSelectSku: (e) => t((0, p.Wz)(e)),
                              isGift: i,
                              priceOptions: s,
                              showPromotionalGiftBanner: d,
                              enablePremiumBrandRefresh: h,
                          }),
            }),
        ],
    });
}
