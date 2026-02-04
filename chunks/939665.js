t.d(n, {
    Z: () => G,
}),
    t(896048);
var r = t(627968),
    l = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(877624),
    o = t(417597),
    u = t(397927),
    c = t(428644),
    d = t(235986),
    p = t(666468),
    m = t(543767),
    E = t(810498),
    g = t(364876),
    f = t(412260),
    P = t(91053),
    j = t(446929),
    h = t(287809),
    _ = t(97352),
    x = t(45938),
    T = t(975571),
    S = t(927578),
    b = t(937008),
    O = t(156312),
    y = t(166532),
    A = t(69494),
    I = t(534479),
    v = t(482132),
    R = t(216641),
    C = t(50956),
    M = t(921925),
    N = t(592362),
    k = t(104745),
    w = t(652215),
    D = t(788868),
    U = t(985018),
    L = t(495989);

function G(e) {
    var n, t;
    let { handleStepChange: i, initialPlanId: G, planGroup: H, subscriptionTier: F, trialId: B, handleClose: W } = e,
        {
            activeSubscription: K,
            hasFetchedSubscriptions: V,
            paymentSourceId: Y,
            paymentSources: z,
            selectedSkuId: q,
            selectedPlan: Z,
            step: Q,
            defaultPlanId: X,
            priceOptions: J,
            isPremium: $,
            premiumBrandRefreshBackgroundClassName: ee,
            isEligibleForTrial: en,
            isEligibleForDiscount: et,
            referralTrialOfferId: er,
        } = (0, O.P5)(),
        { isGift: el, giftRecipient: ei, giftMessage: es, claimableRewards: ea } = (0, b.Pv)(),
        eo = (0, E.Mq)(Z),
        eu = (0, o.bG)([f.A], () => {
            let e = f.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ec = el && eo && null != ea && ea.length > 0 && eu,
        ed = (0, R.W)(z, Y),
        { newPlans: ep } = p.Ay.useExperiment(
            {
                location: "d17fd6_3",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        em = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        eE =
            !el &&
            null != q &&
            q === D.pe.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            V &&
            null == K &&
            (0, p.j2)(ed),
        eg = null != (n = en || et) && n,
        ef = l.useMemo(
            () =>
                (0, S.Tm)({
                    skuId: q,
                    isPremium: $,
                    multiMonthPlans: eE ? ep : [],
                    currentSubscription: K,
                    defaultPlanId: X,
                }),
            [q, $, ep, K, eE, X],
        ),
        eP = et && ef.includes(D.gD.PREMIUM_MONTH_TIER_2) ? D.gD.PREMIUM_MONTH_TIER_2 : ef[0],
        ej = (0, o.bG)([_.A], () => _.A.get(eP)),
        eh = [
            {
                planId: null == ej ? void 0 : ej.id,
                quantity: 1,
            },
        ],
        [e_, ex] = l.useState(eg),
        [eT, eS] = (0, m.Kq)({
            items: eh,
            renewal: !1,
            preventFetch: !eg,
            applyEntitlements: !0,
            trialId: B,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
        });
    l.useEffect(() => {
        eg && ex((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [eT, eg]),
        (0, c.A)(
            "Payment Modal Plan Select Step",
            e_,
            5,
            {
                proratedInvoicePreview: eT,
                proratedInvoiceError: eS,
                isEligibleForOffer: eg,
            },
            {
                tags: {
                    app_context: "billing",
                },
            },
        );
    let eb = null != (t = null == eS ? void 0 : eS.message) ? t : U.intl.string(U.t.R0RpRX),
        eO = eg && null == eS,
        ey = eg && null != eS;
    return eO && null == K && eg && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null
        ? (0, r.jsx)(I.A, {})
        : (s()(null != Q, "Step should be set"),
          s()(ef.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(C.Z, {
                      giftMessage: es,
                  }),
                  !(el && (0, x.Ik)(ei)) &&
                      (0, r.jsx)(A.A, {
                          isEligibleForTrial: en,
                      }),
                  (0, r.jsxs)(v.dZ, {
                      children: [
                          eO &&
                              (0, r.jsx)("hr", {
                                  className: L.T,
                              }),
                          (0, r.jsx)(k.P, {
                              planSkuId: null == ej ? void 0 : ej.skuId,
                              referralTrialOfferId: er,
                          }),
                          (0, r.jsx)(N.A, {}),
                          (0, r.jsx)(M.A, {}),
                          ey
                              ? (0, r.jsx)(u.wx6, {
                                    type: "critical",
                                    children: eb,
                                })
                              : (0, r.jsx)(j.$p, {
                                    planOptions: ef,
                                    eligibleForMultiMonthPlans: eE,
                                    selectedPlanId: null == Z ? void 0 : Z.id,
                                    planGroup: H,
                                    subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                                    discountInvoiceItems: et ? (null == eT ? void 0 : eT.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: W,
                                }),
                          eO &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", {
                                          className: L.I,
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-xs/normal",
                                          children: U.intl.format(U.t.BHtnqA, {
                                              link: T.A.getArticleURL(w.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(v.UX, {
                      children: [
                          ec && (0, r.jsx)(g._, {}),
                          (0, r.jsx)(u.jlY, {
                              "data-migration-pending": !0,
                              justify: d.A.Justify.BETWEEN,
                              align: d.A.Align.CENTER,
                              className: ee,
                              children: (0, r.jsx)(P.Z, {
                                  onStepChange: i,
                                  onBackClick: () => i(y.pn.SKU_SELECT),
                                  showBackButton: null == G && null == F,
                                  planOptions: ef,
                                  shouldRenderUpdatedPaymentModal: eO,
                                  isTrial: en,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
