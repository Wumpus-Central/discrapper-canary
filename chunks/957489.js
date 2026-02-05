t.d(n, { F: () => h });
var i = t(627968),
    l = t(503698),
    r = t.n(l),
    s = t(397927),
    a = t(234419),
    o = t(612669),
    u = t(672525),
    d = t(927578),
    c = t(937008),
    p = t(156312),
    m = t(166532),
    E = t(800471),
    g = t(169801),
    _ = t(788868),
    x = t(985018),
    T = t(113437);
function h(e) {
    let { handleStepChange: n, handleClose: t, referralTrialOfferId: l } = e,
        {
            setSelectedSkuId: r,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSourcesRef: o,
            setSelectedPlanId: u,
            priceOptions: x,
            defaultPlanId: T,
            hasPaymentSources: h,
        } = (0, p.P5)(),
        { isGift: A, claimableRewards: S } = (0, c.Pv)(),
        I = A && null != S && S.length > 0,
        j = (0, a.V)(l);
    return (0, i.jsx)(P, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: n,
                    newSkuId: t,
                    setSelectedSkuId: i,
                    handleStepChange: l,
                    isGift: r,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: u,
                } = e;
                i(t);
                let c = m.pn.PLAN_SELECT,
                    p = (0, d.aZ)(n);
                (p !== _.pe.TIER_1 && p !== _.pe.TIER_2) || t !== _.pe.TIER_0 || r || (c = m.pn.WHAT_YOU_LOSE);
                let x = (0, g.t)({ userTrialOffer: s, isGift: r, skuId: t }),
                    T = (0, E.vT)({ isTrial: x, isGift: r, selectedSkuId: t, startedPaymentFlowWithPaymentSources: o });
                c !== m.pn.WHAT_YOU_LOSE && T && ((c = m.pn.REVIEW), a((0, E.xT)(t, n, u))),
                    l(c, { analyticsDataOverride: { sku_id: t } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: r,
                handleStepChange: n,
                isGift: A,
                userTrialOffer: j,
                startedPaymentFlowWithPaymentSources: o.current,
                setSelectedPlanId: u,
                defaultPlanId: T,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: n, handleStepChange: t, hasPaymentSources: i, setSelectedSkuId: l } = e;
                l((0, d.mH)(_.pe.TIER_2)),
                    n(_.gD.PREMIUM_GROUP_MONTH),
                    t(i ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: _.pe.TIER_2 } });
            })({ setSelectedPlanId: u, handleStepChange: n, hasPaymentSources: h, setSelectedSkuId: r }),
        onClose: t,
        isGift: A,
        priceOptions: x,
        showPromotionalGiftBanner: I,
    });
}
function P(e) {
    let {
            selectSku: n,
            onClose: t,
            isGift: l,
            priceOptions: a,
            showPromotionalGiftBanner: c,
            onSelectPremiumGroup: p,
        } = e,
        m = (0, o.PA)() && !l;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.rQ0, {
                "data-migration-pending": !0,
                className: r()(T.wC, T.LG),
                separator: !1,
                children: (0, i.jsxs)(s.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, i.jsx)(s.Heading, { variant: "heading-lg/bold", children: x.intl.string(x.t["r+SebU"]) }),
                        (0, i.jsx)(s.s_y, {
                            "data-migration-pending": !0,
                            className: T.VN,
                            innerClassName: T.to,
                            onClick: t,
                        }),
                    ],
                }),
            }),
            m
                ? (0, i.jsx)(s.$mQ, {
                      "data-migration-pending": !0,
                      className: T.eE,
                      children: (0, i.jsx)(u.yS, {
                          onSelectSku: (e) => n((0, d.mH)(e)),
                          onSelectPremiumGroup: p,
                          priceOptions: a,
                          showPromotionalGiftBanner: c,
                      }),
                  })
                : (0, i.jsx)(s.$mQ, {
                      "data-migration-pending": !0,
                      className: r()(T.a2, T.dt),
                      children: (0, i.jsx)(u.Ay, {
                          onSelectSku: (e) => n((0, d.mH)(e)),
                          isGift: l,
                          priceOptions: a,
                          showPromotionalGiftBanner: c,
                      }),
                  }),
        ],
    });
}
