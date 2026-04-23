n.d(t, { F: () => A });
var l = n(627968),
    i = n(20742),
    r = n(430993),
    s = n(94420),
    a = n(234419),
    o = n(612669),
    u = n(672525),
    d = n(927578),
    c = n(937008),
    p = n(156312),
    m = n(166532),
    E = n(800471),
    S = n(169801),
    _ = n(788868),
    I = n(985018),
    P = n(634378);
function A(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        { setSelectedSkuId: i, setSelectedPlanId: r } = (0, s.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: o,
            startedPaymentFlowWithPaymentSourcesRef: u,
            priceOptions: I,
            defaultPlanId: P,
            hasPaymentSources: A,
        } = (0, p.P5)(),
        { isGift: h, claimableRewards: T } = (0, c.Pv)(),
        g = h && null != T && T.length > 0,
        f = (0, a.V)(n);
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
                    defaultPlanId: u,
                } = e;
                l(n);
                let c = m.pn.PLAN_SELECT,
                    p = (0, d.aZ)(t);
                (p !== _.pe.TIER_1 && p !== _.pe.TIER_2) || n !== _.pe.TIER_0 || r || (c = m.pn.WHAT_YOU_LOSE);
                let I = (0, S.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    P = (0, E.vT)({ isTrial: I, isGift: r, selectedSkuId: n, startedPaymentFlowWithPaymentSources: o });
                c !== m.pn.WHAT_YOU_LOSE && P && ((c = m.pn.REVIEW), a((0, E.xT)(n, t, u))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: o,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: h,
                userTrialOffer: f,
                startedPaymentFlowWithPaymentSources: u.current,
                setSelectedPlanId: r,
                defaultPlanId: P,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, d.mH)(_.pe.TIER_2)),
                    t(_.gD.PREMIUM_GROUP_MONTH),
                    n(l ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: _.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: A, setSelectedSkuId: i }),
        isGift: h,
        priceOptions: I,
        showPromotionalGiftBanner: g,
    });
}
function x(e) {
    let { selectSku: t, isGift: n, priceOptions: s, showPromotionalGiftBanner: a, onSelectPremiumGroup: c } = e,
        p = (0, o.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.rQ, { titleTextVariant: "heading-lg/semibold", title: I.intl.string(I.t["r+SebU"]) }),
            p
                ? (0, l.jsx)(r.c, {
                      children: (0, l.jsx)("div", {
                          className: P.eE,
                          children: (0, l.jsx)(u.yS, {
                              onSelectSku: (e) => t((0, d.mH)(e)),
                              onSelectPremiumGroup: c,
                              priceOptions: s,
                              showPromotionalGiftBanner: a,
                          }),
                      }),
                  })
                : (0, l.jsx)(r.c, {
                      children: (0, l.jsx)("div", {
                          className: P.a2,
                          children: (0, l.jsx)(u.Ay, {
                              onSelectSku: (e) => t((0, d.mH)(e)),
                              isGift: n,
                              priceOptions: s,
                              showPromotionalGiftBanner: a,
                          }),
                      }),
                  }),
        ],
    });
}
