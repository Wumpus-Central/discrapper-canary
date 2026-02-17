t.d(n, { Z: () => L });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(877624),
    o = t(417597),
    u = t(397927),
    d = t(428644),
    c = t(666468),
    p = t(543767),
    m = t(810498),
    E = t(364876),
    _ = t(412260),
    P = t(91053),
    T = t(446929),
    h = t(287809),
    x = t(97352),
    g = t(45938),
    I = t(975571),
    S = t(927578),
    A = t(937008),
    f = t(156312),
    j = t(166532),
    M = t(69494),
    R = t(534479),
    C = t(482132),
    y = t(216641),
    N = t(50956),
    O = t(921925),
    v = t(592362),
    b = t(104745),
    k = t(652215),
    U = t(788868),
    w = t(985018),
    D = t(495989);
function L(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: L, trialId: G, handleClose: F } = e,
        {
            activeSubscription: H,
            hasFetchedSubscriptions: B,
            paymentSourceId: W,
            paymentSources: K,
            selectedSkuId: V,
            selectedPlan: q,
            step: z,
            defaultPlanId: Z,
            priceOptions: Y,
            isPremium: X,
            isEligibleForTrial: Q,
            isEligibleForDiscount: J,
            referralTrialOfferId: $,
        } = (0, f.P5)(),
        { isGift: ee, giftRecipient: en, giftMessage: et, claimableRewards: ei } = (0, A.Pv)(),
        el = (0, m.Mq)(q),
        er = (0, o.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        es = ee && el && null != ei && ei.length > 0 && er,
        ea = (0, y.W)(K, W),
        { newPlans: eo } = c.Ay.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        eu = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        ed =
            !ee &&
            null != V &&
            V === U.pe.TIER_2 &&
            null != eu &&
            eu.hasHadPremium() &&
            B &&
            null == H &&
            (0, c.j2)(ea),
        ec = (Q || J) ?? !1,
        ep = l.useMemo(
            () =>
                (0, S.Tm)({
                    skuId: V,
                    isPremium: X,
                    multiMonthPlans: ed ? eo : [],
                    currentSubscription: H,
                    defaultPlanId: Z,
                }),
            [V, X, eo, H, ed, Z],
        ),
        em = J && ep.includes(U.gD.PREMIUM_MONTH_TIER_2) ? U.gD.PREMIUM_MONTH_TIER_2 : ep[0],
        eE = (0, o.bG)([x.A], () => x.A.get(em)),
        e_ = [{ planId: eE?.id, quantity: 1 }],
        [eP, eT] = l.useState(ec),
        [eh, ex] = (0, p.Kq)({
            items: e_,
            renewal: !1,
            preventFetch: !ec,
            applyEntitlements: !0,
            trialId: G,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
        });
    l.useEffect(() => {
        ec && eT(eh?.subscriptionPeriodEnd == null);
    }, [eh, ec]),
        (0, d.A)(
            "Payment Modal Plan Select Step",
            eP,
            5,
            { proratedInvoicePreview: eh, proratedInvoiceError: ex, isEligibleForOffer: ec },
            { tags: { app_context: "billing" } },
        );
    let eg = ex?.message ?? w.intl.string(w.t.R0RpRX),
        eI = ec && null == ex,
        eS = ec && null != ex;
    return eI && null == H && ec && eh?.subscriptionPeriodEnd == null
        ? (0, i.jsx)(R.A, {})
        : (s()(null != z, "Step should be set"),
          s()(ep.length > 0, "Premium plan options should be set"),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(N.Z, { giftMessage: et }),
                  !(ee && (0, g.Ik)(en)) && (0, i.jsx)(M.A, { isEligibleForTrial: Q }),
                  (0, i.jsxs)(C.dZ, {
                      children: [
                          eI && (0, i.jsx)("hr", { className: D.T4 }),
                          (0, i.jsx)(b.P, { className: D.ZB, planSkuId: eE?.skuId, referralTrialOfferId: $ }),
                          (0, i.jsx)(v.A, {}),
                          (0, i.jsx)(O.A, {}),
                          eS
                              ? (0, i.jsx)(u.wx6, { type: "critical", children: eg })
                              : (0, i.jsx)(T.$p, {
                                    planOptions: ep,
                                    eligibleForMultiMonthPlans: ed,
                                    selectedPlanId: q?.id,
                                    planGroup: r,
                                    subscriptionPeriodEnd: eh?.subscriptionPeriodEnd,
                                    discountInvoiceItems: J ? eh?.invoiceItems : void 0,
                                    useCompactGiftComponents: es,
                                    handleClose: F,
                                }),
                          eI &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)("hr", { className: D.IM }),
                                      (0, i.jsx)(u.Text, {
                                          variant: "text-xs/normal",
                                          children: w.intl.format(w.t.BHtnqA, {
                                              link: I.A.getArticleURL(k.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsxs)(C.UX, {
                      children: [
                          es && (0, i.jsx)(E._, {}),
                          (0, i.jsx)(P.Z, {
                              onStepChange: n,
                              onBackClick: () => n(j.pn.SKU_SELECT),
                              showBackButton: null == t && null == L,
                              planOptions: ep,
                              shouldRenderUpdatedPaymentModal: eI,
                              isTrial: Q,
                          }),
                      ],
                  }),
              ],
          }));
}
