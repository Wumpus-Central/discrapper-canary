n.d(t, { F: () => v });
var l = n(627968),
    r = n(503698),
    i = n.n(r),
    s = n(397927),
    a = n(234419),
    o = n(612669),
    u = n(672525),
    c = n(927578),
    d = n(937008),
    p = n(156312),
    m = n(166532),
    f = n(800471),
    g = n(169801),
    j = n(788868),
    y = n(985018),
    h = n(113437);
function v(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: r } = e,
        {
            setSelectedSkuId: i,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSourcesRef: o,
            setSelectedPlanId: u,
            priceOptions: y,
            defaultPlanId: h,
            hasPaymentSources: v,
        } = (0, p.P5)(),
        { isGift: O, claimableRewards: x } = (0, d.Pv)(),
        P = O && null != x && x.length > 0,
        S = (0, a.V)(r);
    return (0, l.jsx)(b, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: r,
                    isGift: i,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: u,
                } = e;
                l(n);
                let d = m.pn.PLAN_SELECT,
                    p = (0, c.aZ)(t);
                (p !== j.pe.TIER_1 && p !== j.pe.TIER_2) || n !== j.pe.TIER_0 || i || (d = m.pn.WHAT_YOU_LOSE);
                let y = (0, g.t)({
                        userTrialOffer: s,
                        isGift: i,
                        skuId: n,
                    }),
                    h = (0, f.vT)({
                        isTrial: y,
                        isGift: i,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                d !== m.pn.WHAT_YOU_LOSE && h && ((d = m.pn.REVIEW), a((0, f.xT)(n, t, u))),
                    r(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: O,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: o.current,
                setSelectedPlanId: u,
                defaultPlanId: h,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: r } = e;
                r((0, c.mH)(j.pe.TIER_2)),
                    t(j.gD.PREMIUM_GROUP_MONTH),
                    n(l ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: j.pe.TIER_2 } });
            })({
                setSelectedPlanId: u,
                handleStepChange: t,
                hasPaymentSources: v,
                setSelectedSkuId: i,
            }),
        onClose: n,
        isGift: O,
        priceOptions: y,
        showPromotionalGiftBanner: P,
    });
}
function b(e) {
    let {
            selectSku: t,
            onClose: n,
            isGift: r,
            priceOptions: a,
            showPromotionalGiftBanner: d,
            onSelectPremiumGroup: p,
        } = e,
        m = (0, o.PA)() && !r;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.rQ0, {
                "data-migration-pending": !0,
                className: i()(h.wC, h.LG),
                separator: !1,
                children: (0, l.jsxs)(s.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, l.jsx)(s.Heading, {
                            variant: "heading-lg/bold",
                            children: y.intl.string(y.t["r+SebU"]),
                        }),
                        (0, l.jsx)(s.s_y, {
                            "data-migration-pending": !0,
                            className: h.VN,
                            innerClassName: h.to,
                            onClick: n,
                        }),
                    ],
                }),
            }),
            m
                ? (0, l.jsx)(s.$mQ, {
                      "data-migration-pending": !0,
                      className: h.eE,
                      children: (0, l.jsx)(u.yS, {
                          onSelectSku: (e) => t((0, c.mH)(e)),
                          onSelectPremiumGroup: p,
                          priceOptions: a,
                          showPromotionalGiftBanner: d,
                      }),
                  })
                : (0, l.jsx)(s.$mQ, {
                      "data-migration-pending": !0,
                      className: i()(h.a2, h.dt),
                      children: (0, l.jsx)(u.Ay, {
                          onSelectSku: (e) => t((0, c.mH)(e)),
                          isGift: r,
                          priceOptions: a,
                          showPromotionalGiftBanner: d,
                      }),
                  }),
        ],
    });
}
