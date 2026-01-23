n.d(t, {
    Z: () => G,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(877624),
    o = n(417597),
    u = n(397927),
    c = n(428644),
    d = n(235986),
    p = n(666468),
    m = n(543767),
    g = n(810498),
    f = n(364876),
    y = n(412260),
    j = n(446929),
    b = n(287809),
    h = n(97352),
    v = n(45938),
    O = n(975571),
    P = n(927578),
    E = n(937008),
    x = n(156312),
    S = n(166532),
    T = n(69494),
    I = n(534479),
    A = n(482132),
    k = n(216641),
    C = n(50956),
    w = n(921925),
    _ = n(592362),
    M = n(104745),
    N = n(652215),
    R = n(788868),
    D = n(985018),
    L = n(495989);

function G(e) {
    var t, n;
    let { handleStepChange: i, initialPlanId: G, planGroup: U, subscriptionTier: H, trialId: B, handleClose: F } = e,
        {
            activeSubscription: W,
            hasFetchedSubscriptions: K,
            paymentSourceId: V,
            paymentSources: z,
            selectedSkuId: Y,
            selectedPlan: Z,
            step: Q,
            defaultPlanId: q,
            priceOptions: J,
            isPremium: X,
            premiumBrandRefreshBackgroundClassName: $,
            isEligibleForTrial: ee,
            isEligibleForDiscount: et,
            referralTrialOfferId: en,
        } = (0, x.P5)(),
        { isGift: er, giftRecipient: el, giftMessage: ei, claimableRewards: es } = (0, E.Pv)(),
        ea = (0, g.Mq)(Z),
        eo = (0, o.bG)([y.A], () => {
            let e = y.A.getMarketingComponentByType(a.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        eu = er && ea && null != es && es.length > 0 && eo,
        ec = (0, k.W)(z, V),
        { newPlans: ed } = p.Ay.useExperiment(
            {
                location: "d17fd6_3",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        ep = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        em =
            !er &&
            null != Y &&
            Y === R.pe.TIER_2 &&
            null != ep &&
            ep.hasHadPremium() &&
            K &&
            null == W &&
            (0, p.j2)(ec),
        eg = null != (t = ee || et) && t,
        ef = l.useMemo(
            () =>
                (0, P.Tm)({
                    skuId: Y,
                    isPremium: X,
                    multiMonthPlans: em ? ed : [],
                    currentSubscription: W,
                    defaultPlanId: q,
                }),
            [Y, X, ed, W, em, q],
        ),
        ey = et && ef.includes(R.gD.PREMIUM_MONTH_TIER_2) ? R.gD.PREMIUM_MONTH_TIER_2 : ef[0],
        ej = (0, o.bG)([h.A], () => h.A.get(ey)),
        eb = [
            {
                planId: null == ej ? void 0 : ej.id,
                quantity: 1,
            },
        ],
        [eh, ev] = l.useState(eg),
        [eO, eP] = (0, m.Kq)({
            items: eb,
            renewal: !1,
            preventFetch: !eg,
            applyEntitlements: !0,
            trialId: B,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
        });
    l.useEffect(() => {
        eg && ev((null == eO ? void 0 : eO.subscriptionPeriodEnd) == null);
    }, [eO, eg]),
        (0, c.A)(
            "Payment Modal Plan Select Step",
            eh,
            5,
            {
                proratedInvoicePreview: eO,
                proratedInvoiceError: eP,
                isEligibleForOffer: eg,
            },
            {
                tags: {
                    app_context: "billing",
                },
            },
        );
    let eE = null != (n = null == eP ? void 0 : eP.message) ? n : D.intl.string(D.t.R0RpRX),
        ex = eg && null == eP,
        eS = eg && null != eP;
    return ex && null == W && eg && (null == eO ? void 0 : eO.subscriptionPeriodEnd) == null
        ? (0, r.jsx)(I.A, {})
        : (s()(null != Q, "Step should be set"),
          s()(ef.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(C.Z, {
                      giftMessage: ei,
                  }),
                  !(er && (0, v.Ik)(el)) &&
                      (0, r.jsx)(T.A, {
                          isEligibleForTrial: ee,
                      }),
                  (0, r.jsxs)(A.dZ, {
                      children: [
                          ex &&
                              (0, r.jsx)("hr", {
                                  className: L.T,
                              }),
                          (0, r.jsx)(M.P, {
                              planSkuId: null == ej ? void 0 : ej.skuId,
                              referralTrialOfferId: en,
                          }),
                          (0, r.jsx)(_.A, {}),
                          (0, r.jsx)(w.A, {}),
                          eS
                              ? (0, r.jsx)(u.wx6, {
                                    type: "critical",
                                    children: eE,
                                })
                              : (0, r.jsx)(j.$p, {
                                    planOptions: ef,
                                    eligibleForMultiMonthPlans: em,
                                    selectedPlanId: null == Z ? void 0 : Z.id,
                                    planGroup: U,
                                    subscriptionPeriodEnd: null == eO ? void 0 : eO.subscriptionPeriodEnd,
                                    discountInvoiceItems: et ? (null == eO ? void 0 : eO.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: F,
                                }),
                          ex &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", {
                                          className: L.I,
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-xs/normal",
                                          children: D.intl.format(D.t.BHtnqA, {
                                              link: O.A.getArticleURL(N.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(A.UX, {
                      children: [
                          eu && (0, r.jsx)(f._, {}),
                          (0, r.jsx)(u.jlY, {
                              "data-migration-pending": !0,
                              justify: d.A.Justify.BETWEEN,
                              align: d.A.Align.CENTER,
                              className: $,
                              children: (0, r.jsx)(j.Z3, {
                                  onStepChange: i,
                                  onBackClick: () => i(S.pn.SKU_SELECT),
                                  showBackButton: null == G && null == H,
                                  planOptions: ef,
                                  shouldRenderUpdatedPaymentModal: ex,
                                  isTrial: ee,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
