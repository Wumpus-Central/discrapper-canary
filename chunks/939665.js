n.d(t, { Z: () => L }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(417597),
    o = n(397927),
    u = n(428644),
    c = n(235986),
    d = n(666468),
    p = n(543767),
    m = n(552736),
    f = n(810498),
    g = n(364876),
    j = n(446929),
    y = n(287809),
    h = n(97352),
    v = n(45938),
    b = n(975571),
    O = n(927578),
    x = n(937008),
    P = n(156312),
    S = n(166532),
    E = n(69494),
    T = n(534479),
    I = n(482132),
    A = n(216641),
    k = n(50956),
    w = n(921925),
    _ = n(592362),
    C = n(104745),
    M = n(652215),
    N = n(788868),
    R = n(985018),
    D = n(495989);
function L(e) {
    var t, n, i;
    let { handleStepChange: L, initialPlanId: U, planGroup: G, subscriptionTier: H, trialId: B, handleClose: F } = e,
        {
            activeSubscription: W,
            hasFetchedSubscriptions: z,
            paymentSourceId: V,
            paymentSources: K,
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
        } = (0, P.P5)(),
        { isGift: el, giftRecipient: er, giftMessage: ei, claimableRewards: es } = (0, x.Pv)(),
        ea = (0, f.Mq)(Z),
        eo = (null == (i = (0, m.A)()) ? void 0 : i.planSelectionBanner) != null,
        eu = el && ea && null != es && es.length > 0 && eo,
        ec = (0, A.W)(K, V),
        { newPlans: ed } = d.Ay.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ep = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        em =
            !el &&
            null != Y &&
            Y === N.pe.TIER_2 &&
            null != ep &&
            ep.hasHadPremium() &&
            z &&
            null == W &&
            (0, d.j2)(ec),
        ef = null != (t = ee || et) && t,
        eg = r.useMemo(
            () =>
                (0, O.Tm)({
                    skuId: Y,
                    isPremium: X,
                    multiMonthPlans: em ? ed : [],
                    currentSubscription: W,
                    defaultPlanId: q,
                }),
            [Y, X, ed, W, em, q],
        ),
        ej = et && eg.includes(N.gD.PREMIUM_MONTH_TIER_2) ? N.gD.PREMIUM_MONTH_TIER_2 : eg[0],
        ey = (0, a.bG)([h.A], () => h.A.get(ej)),
        eh = [
            {
                planId: null == ey ? void 0 : ey.id,
                quantity: 1,
            },
        ],
        [ev, eb] = r.useState(ef),
        [eO, ex] = (0, p.Kq)({
            items: eh,
            renewal: !1,
            preventFetch: !ef,
            applyEntitlements: !0,
            trialId: B,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
        });
    r.useEffect(() => {
        ef && eb((null == eO ? void 0 : eO.subscriptionPeriodEnd) == null);
    }, [eO, ef]),
        (0, u.A)(
            "Payment Modal Plan Select Step",
            ev,
            5,
            {
                proratedInvoicePreview: eO,
                proratedInvoiceError: ex,
                isEligibleForOffer: ef,
            },
            { tags: { app_context: "billing" } },
        );
    let eP = null != (n = null == ex ? void 0 : ex.message) ? n : R.intl.string(R.t.R0RpRX),
        eS = ef && null == ex,
        eE = ef && null != ex;
    return eS && null == W && ef && (null == eO ? void 0 : eO.subscriptionPeriodEnd) == null
        ? (0, l.jsx)(T.A, {})
        : (s()(null != Q, "Step should be set"),
          s()(eg.length > 0, "Premium plan options should be set"),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(k.Z, { giftMessage: ei }),
                  !(el && (0, v.Ik)(er)) && (0, l.jsx)(E.A, { isEligibleForTrial: ee }),
                  (0, l.jsxs)(I.dZ, {
                      children: [
                          eS && (0, l.jsx)("hr", { className: D.T }),
                          (0, l.jsx)(C.P, {
                              planSkuId: null == ey ? void 0 : ey.skuId,
                              referralTrialOfferId: en,
                          }),
                          (0, l.jsx)(_.A, {}),
                          (0, l.jsx)(w.A, {}),
                          eE
                              ? (0, l.jsx)(o.wx6, {
                                    type: "critical",
                                    children: eP,
                                })
                              : (0, l.jsx)(j.$, {
                                    planOptions: eg,
                                    eligibleForMultiMonthPlans: em,
                                    selectedPlanId: null == Z ? void 0 : Z.id,
                                    planGroup: G,
                                    subscriptionPeriodEnd: null == eO ? void 0 : eO.subscriptionPeriodEnd,
                                    discountInvoiceItems: et ? (null == eO ? void 0 : eO.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: F,
                                }),
                          eS &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)("hr", { className: D.I }),
                                      (0, l.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: R.intl.format(R.t.BHtnqA, {
                                              link: b.A.getArticleURL(M.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, l.jsxs)(I.UX, {
                      children: [
                          eu && (0, l.jsx)(g._, {}),
                          (0, l.jsx)(o.jlY, {
                              "data-migration-pending": !0,
                              justify: c.A.Justify.BETWEEN,
                              align: c.A.Align.CENTER,
                              className: $,
                              children: (0, l.jsx)(j.Z, {
                                  onStepChange: L,
                                  onBackClick: () => L(S.pn.SKU_SELECT),
                                  showBackButton: null == U && null == H,
                                  planOptions: eg,
                                  shouldRenderUpdatedPaymentModal: eS,
                                  isTrial: ee,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
