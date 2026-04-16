n.d(t, { F: () => P });
var l = n(627968),
    i = n(158954),
    r = n(94420),
    s = n(234419),
    a = n(612669),
    o = n(672525),
    u = n(927578),
    d = n(937008),
    c = n(156312),
    p = n(166532),
    m = n(800471),
    E = n(169801),
    S = n(788868),
    _ = n(985018),
    I = n(634378);
function P(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        { setSelectedSkuId: i, setSelectedPlanId: a } = (0, r.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: o,
            startedPaymentFlowWithPaymentSourcesRef: _,
            priceOptions: I,
            defaultPlanId: P,
            hasPaymentSources: T,
        } = (0, c.P5)(),
        { isGift: A, claimableRewards: h } = (0, d.Pv)(),
        g = A && null != h && h.length > 0,
        f = (0, s.V)(n);
    return (0, l.jsx)(x, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: i,
                    isGift: r,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: d,
                } = e;
                l(n);
                let c = p.pn.PLAN_SELECT,
                    _ = (0, u.aZ)(t);
                (_ !== S.pe.TIER_1 && _ !== S.pe.TIER_2) || n !== S.pe.TIER_0 || r || (c = p.pn.WHAT_YOU_LOSE);
                let I = (0, E.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    P = (0, m.vT)({ isTrial: I, isGift: r, selectedSkuId: n, startedPaymentFlowWithPaymentSources: o });
                c !== p.pn.WHAT_YOU_LOSE && P && ((c = p.pn.REVIEW), a((0, m.xT)(n, t, d))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: o,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: A,
                userTrialOffer: f,
                startedPaymentFlowWithPaymentSources: _.current,
                setSelectedPlanId: a,
                defaultPlanId: P,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, u.mH)(S.pe.TIER_2)),
                    t(S.gD.PREMIUM_GROUP_MONTH),
                    n(l ? p.pn.REVIEW : p.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: S.pe.TIER_2 } });
            })({ setSelectedPlanId: a, handleStepChange: t, hasPaymentSources: T, setSelectedSkuId: i }),
        isGift: A,
        priceOptions: I,
        showPromotionalGiftBanner: g,
    });
}
function x(e) {
    let { selectSku: t, isGift: n, priceOptions: r, showPromotionalGiftBanner: s, onSelectPremiumGroup: d } = e,
        c = (0, a.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.rQ0, { titleTextVariant: "heading-lg/semibold", title: _.intl.string(_.t["r+SebU"]) }),
            c
                ? (0, l.jsx)(i.cwr, {
                      children: (0, l.jsx)("div", {
                          className: I.eE,
                          children: (0, l.jsx)(o.yS, {
                              onSelectSku: (e) => t((0, u.mH)(e)),
                              onSelectPremiumGroup: d,
                              priceOptions: r,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, l.jsx)(i.cwr, {
                      children: (0, l.jsx)("div", {
                          className: I.a2,
                          children: (0, l.jsx)(o.Ay, {
                              onSelectSku: (e) => t((0, u.mH)(e)),
                              isGift: n,
                              priceOptions: r,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
