t.d(n, { Z: () => G });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(877624),
    o = t(417597),
    u = t(397927),
    d = t(428644),
    c = t(235986),
    p = t(666468),
    m = t(543767),
    E = t(810498),
    g = t(364876),
    _ = t(412260),
    x = t(91053),
    T = t(446929),
    h = t(287809),
    P = t(97352),
    A = t(45938),
    S = t(975571),
    I = t(927578),
    j = t(937008),
    f = t(156312),
    R = t(166532),
    C = t(69494),
    M = t(534479),
    N = t(482132),
    y = t(216641),
    O = t(50956),
    b = t(921925),
    v = t(592362),
    k = t(104745),
    w = t(652215),
    U = t(788868),
    D = t(985018),
    L = t(495989);
function G(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: G, trialId: H, handleClose: F } = e,
        {
            activeSubscription: B,
            hasFetchedSubscriptions: W,
            paymentSourceId: K,
            paymentSources: V,
            selectedSkuId: Y,
            selectedPlan: z,
            step: q,
            defaultPlanId: Z,
            priceOptions: Q,
            isPremium: X,
            premiumBrandRefreshBackgroundClassName: J,
            isEligibleForTrial: $,
            isEligibleForDiscount: ee,
            referralTrialOfferId: en,
        } = (0, f.P5)(),
        { isGift: et, giftRecipient: ei, giftMessage: el, claimableRewards: er } = (0, j.Pv)(),
        es = (0, E.Mq)(z),
        ea = (0, o.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        eo = et && es && null != er && er.length > 0 && ea,
        eu = (0, y.W)(V, K),
        { newPlans: ed } = p.Ay.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ec = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        ep =
            !et &&
            null != Y &&
            Y === U.pe.TIER_2 &&
            null != ec &&
            ec.hasHadPremium() &&
            W &&
            null == B &&
            (0, p.j2)(eu),
        em = ($ || ee) ?? !1,
        eE = l.useMemo(
            () =>
                (0, I.Tm)({
                    skuId: Y,
                    isPremium: X,
                    multiMonthPlans: ep ? ed : [],
                    currentSubscription: B,
                    defaultPlanId: Z,
                }),
            [Y, X, ed, B, ep, Z],
        ),
        eg = ee && eE.includes(U.gD.PREMIUM_MONTH_TIER_2) ? U.gD.PREMIUM_MONTH_TIER_2 : eE[0],
        e_ = (0, o.bG)([P.A], () => P.A.get(eg)),
        ex = [{ planId: e_?.id, quantity: 1 }],
        [eT, eh] = l.useState(em),
        [eP, eA] = (0, m.Kq)({
            items: ex,
            renewal: !1,
            preventFetch: !em,
            applyEntitlements: !0,
            trialId: H,
            paymentSourceId: Q.paymentSourceId,
            currency: Q.currency,
        });
    l.useEffect(() => {
        em && eh(eP?.subscriptionPeriodEnd == null);
    }, [eP, em]),
        (0, d.A)(
            "Payment Modal Plan Select Step",
            eT,
            5,
            { proratedInvoicePreview: eP, proratedInvoiceError: eA, isEligibleForOffer: em },
            { tags: { app_context: "billing" } },
        );
    let eS = eA?.message ?? D.intl.string(D.t.R0RpRX),
        eI = em && null == eA,
        ej = em && null != eA;
    return eI && null == B && em && eP?.subscriptionPeriodEnd == null
        ? (0, i.jsx)(M.A, {})
        : (s()(null != q, "Step should be set"),
          s()(eE.length > 0, "Premium plan options should be set"),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O.Z, { giftMessage: el }),
                  !(et && (0, A.Ik)(ei)) && (0, i.jsx)(C.A, { isEligibleForTrial: $ }),
                  (0, i.jsxs)(N.dZ, {
                      children: [
                          eI && (0, i.jsx)("hr", { className: L.T }),
                          (0, i.jsx)(k.P, { planSkuId: e_?.skuId, referralTrialOfferId: en }),
                          (0, i.jsx)(v.A, {}),
                          (0, i.jsx)(b.A, {}),
                          ej
                              ? (0, i.jsx)(u.wx6, { type: "critical", children: eS })
                              : (0, i.jsx)(T.$p, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: ep,
                                    selectedPlanId: z?.id,
                                    planGroup: r,
                                    subscriptionPeriodEnd: eP?.subscriptionPeriodEnd,
                                    discountInvoiceItems: ee ? eP?.invoiceItems : void 0,
                                    useCompactGiftComponents: eo,
                                    handleClose: F,
                                }),
                          eI &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)("hr", { className: L.I }),
                                      (0, i.jsx)(u.Text, {
                                          variant: "text-xs/normal",
                                          children: D.intl.format(D.t.BHtnqA, {
                                              link: S.A.getArticleURL(w.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsxs)(N.UX, {
                      children: [
                          eo && (0, i.jsx)(g._, {}),
                          (0, i.jsx)(u.jlY, {
                              "data-migration-pending": !0,
                              justify: c.A.Justify.BETWEEN,
                              align: c.A.Align.CENTER,
                              className: J,
                              children: (0, i.jsx)(x.Z, {
                                  onStepChange: n,
                                  onBackClick: () => n(R.pn.SKU_SELECT),
                                  showBackButton: null == t && null == G,
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eI,
                                  isTrial: $,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
