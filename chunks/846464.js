n.d(t, { q: () => v });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    l = n(481060),
    s = n(140465),
    o = n(283066),
    d = n(639119),
    c = n(973007),
    C = n(701464),
    u = n(602733),
    p = n(74538),
    h = n(987209),
    _ = n(563132),
    m = n(409813),
    f = n(614223),
    x = n(48175),
    g = n(474936),
    j = n(388032),
    b = n(360026);
function v(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: a,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: c,
            setSelectedPlanId: C,
            priceOptions: u,
            defaultPlanId: j,
        } = (0, _.JL)(),
        { isGift: b, claimableRewards: v } = (0, h.wD)(),
        L = b && null != v && v.length > 0,
        y = (0, d.N)(i),
        I = (0, s.Nx)(),
        w = (0, o.Z)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(S, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: r,
                    handleStepChange: i,
                    isGift: a,
                    userTrialOffer: l,
                    setSelectedPlanId: s,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: d,
                } = e;
                r(n);
                let c = m.h8.PLAN_SELECT,
                    C = (0, p.k5)(t);
                (C !== g.Si.TIER_1 && C !== g.Si.TIER_2) || n !== g.Si.TIER_0 || a || (c = m.h8.WHAT_YOU_LOSE);
                let u = (0, x.T)({
                        userTrialOffer: l,
                        isGift: a,
                        skuId: n,
                    }),
                    h = (0, f.Kp)({
                        isTrial: u,
                        isGift: a,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                c !== m.h8.WHAT_YOU_LOSE && h && ((c = m.h8.REVIEW), s((0, f.nA)(n, t, d))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: l,
                newSkuId: e,
                setSelectedSkuId: a,
                handleStepChange: t,
                isGift: b,
                userTrialOffer: y,
                startedPaymentFlowWithPaymentSources: c.current,
                setSelectedPlanId: C,
                defaultPlanId: j,
            }),
        onClose: n,
        isGift: b,
        inOfferExperience: I,
        priceOptions: u,
        showPromotionalGiftBanner: L,
        enablePremiumBrandRefresh: w,
    });
}
function S(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: i,
            inOfferExperience: s,
            priceOptions: o,
            showPromotionalGiftBanner: d,
            enablePremiumBrandRefresh: _,
        } = e,
        { giftRecipient: m } = (0, h.wD)(),
        f = (0, u.ao)({
            location: "PremiumPaymentSelect",
            giftRecipient: m,
            isGift: i,
        }),
        x = f
            ? (0, r.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  children: j.intl.string(j.t["wg/30t"]),
              })
            : _
              ? (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/bold",
                    children: j.intl.string(j.t["r+SebW"]),
                })
              : (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    children: j.intl.string(j.t["r+SebW"]),
                });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.xBx, {
                "data-migration-pending": !0,
                className: a()(b.skuSelectModalHeader, { [b.premiumBrandRefreshHeader]: _ }),
                separator: !1,
                children: (0, r.jsxs)(l.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        x,
                        (0, r.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: b.close,
                            innerClassName: b.closeInner,
                            onClick: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(l.hzk, {
                "data-migration-pending": !0,
                className: a()(b.skuSelectModalContent, {
                    [b.modalSize]: !_,
                    [b.modalPadding]: s && !_,
                    [b.premiumBrandRefreshContent]: _,
                    [b.wishlistModalSize]: f,
                }),
                children:
                    null != m && f
                        ? (0, r.jsx)(C.Z, {
                              onSelectSku: (e) => t((0, p.Wz)(e)),
                              isGift: i,
                              priceOptions: o,
                              showPromotionalGiftBanner: d,
                              giftRecipient: m,
                          })
                        : (0, r.jsx)(c.ZP, {
                              onSelectSku: (e) => t((0, p.Wz)(e)),
                              isGift: i,
                              priceOptions: o,
                              showPromotionalGiftBanner: d,
                              enablePremiumBrandRefresh: _,
                          }),
            }),
        ],
    });
}
