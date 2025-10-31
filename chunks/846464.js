n.d(t, { q: () => L });
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(140465),
    o = n(283066),
    d = n(639119),
    c = n(973007),
    C = n(701464),
    u = n(602733),
    p = n(74538),
    h = n(987209),
    m = n(563132),
    _ = n(409813),
    f = n(614223),
    x = n(48175),
    j = n(474936),
    g = n(388032),
    b = n(360026);
function L(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: i } = e,
        {
            setSelectedSkuId: l,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSourcesRef: c,
            setSelectedPlanId: C,
            priceOptions: u,
            defaultPlanId: g,
        } = (0, m.JL)(),
        { isGift: b, claimableRewards: L } = (0, h.wD)(),
        y = b && null != L && L.length > 0,
        S = (0, d.N)(i),
        I = (0, s.Nx)(),
        w = (0, o.Z)({ location: "PremiumPaymentSelect" });
    return (0, r.jsx)(v, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: r,
                    handleStepChange: i,
                    isGift: l,
                    userTrialOffer: a,
                    setSelectedPlanId: s,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: d,
                } = e;
                r(n);
                let c = _.h8.PLAN_SELECT,
                    C = (0, p.k5)(t);
                (C !== j.Si.TIER_1 && C !== j.Si.TIER_2) || n !== j.Si.TIER_0 || l || (c = _.h8.WHAT_YOU_LOSE);
                let u = (0, x.T)({
                        userTrialOffer: a,
                        isGift: l,
                        skuId: n,
                    }),
                    h = (0, f.Kp)({
                        isTrial: u,
                        isGift: l,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                c !== _.h8.WHAT_YOU_LOSE && h && ((c = _.h8.REVIEW), s((0, f.nA)(n, t, d))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: l,
                handleStepChange: t,
                isGift: b,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: c.current,
                setSelectedPlanId: C,
                defaultPlanId: g,
            }),
        onClose: n,
        isGift: b,
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
            inOfferExperience: s,
            priceOptions: o,
            showPromotionalGiftBanner: d,
            enablePremiumBrandRefresh: m,
        } = e,
        { giftRecipient: _ } = (0, h.wD)(),
        f = (0, u.ao)({
            location: "PremiumPaymentSelect",
            giftRecipient: _,
            isGift: i,
        }),
        x = f
            ? (0, r.jsx)(a.Heading, {
                  variant: "heading-lg/bold",
                  children: g.intl.string(g.t["wg/30i"]),
              })
            : m
              ? (0, r.jsx)(a.Heading, {
                    variant: "heading-lg/bold",
                    children: g.intl.string(g.t["r+SebU"]),
                })
              : (0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    children: g.intl.string(g.t["r+SebU"]),
                });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.xBx, {
                "data-migration-pending": !0,
                className: l()(b.skuSelectModalHeader, { [b.premiumBrandRefreshHeader]: m }),
                separator: !1,
                children: (0, r.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        x,
                        (0, r.jsx)(a.olH, {
                            "data-migration-pending": !0,
                            className: b.close,
                            innerClassName: b.closeInner,
                            onClick: n,
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(a.hzk, {
                "data-migration-pending": !0,
                className: l()(b.skuSelectModalContent, {
                    [b.modalSize]: !m,
                    [b.modalPadding]: s && !m,
                    [b.premiumBrandRefreshContent]: m,
                    [b.wishlistModalSize]: f,
                }),
                children:
                    null != _ && f
                        ? (0, r.jsx)(C.Z, {
                              onSelectSku: (e) => t((0, p.Wz)(e)),
                              isGift: i,
                              priceOptions: o,
                              showPromotionalGiftBanner: d,
                              giftRecipient: _,
                              onWishlistItemClick: n,
                          })
                        : (0, r.jsx)(c.ZP, {
                              onSelectSku: (e) => t((0, p.Wz)(e)),
                              isGift: i,
                              priceOptions: o,
                              showPromotionalGiftBanner: d,
                              enablePremiumBrandRefresh: m,
                          }),
            }),
        ],
    });
}
