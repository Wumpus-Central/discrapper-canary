n.d(t, { E: () => g });
var l = n(477900),
    i = n(582128),
    r = n(403581),
    a = n(951305),
    s = n(166532),
    o = n(303025),
    u = n(810498),
    c = n(918786),
    d = n(24482),
    m = n(615396),
    p = n(448910),
    h = n(463376),
    C = n(558620),
    f = n(298208),
    E = n(758476),
    S = n(105292);
function g(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: g } = (0, h.i)(),
        {
            activeSubscription: y,
            isPremium: I,
            isGift: A,
            checkoutPriceOptions: P,
            isInOneStepSubscriptionCheckout: v,
            shouldDisallowPlanSelection: x,
            verifiedTrialId: _,
            effectivePlanGroup: T,
            isRecurringGiftCheckout: b,
        } = (0, f.t4)((n) => ({
            activeSubscription: n.activeSubscription,
            isPremium: n.get("isPremiumPurchase"),
            isGift: n.isGift,
            checkoutPriceOptions: n.checkoutPriceOptions,
            isInOneStepSubscriptionCheckout: n.getIsInOneStepSubscriptionCheckout({ isTrial: t }),
            shouldDisallowPlanSelection: n.getShouldDisallowPlanSelection(),
            verifiedTrialId: n.getVerifiedTrialId({ trialId: e.trialId }),
            effectivePlanGroup: n.getEffectivePlanGroup({ planGroup: e.planGroup }),
            isRecurringGiftCheckout: n.getIsRecurringGiftCheckout(),
        })),
        N = (0, C.A)(),
        j = e.handlePaymentSourceAdd,
        R = null != e.openInvoiceId,
        O = null == e.initialPlanId && null == e.subscriptionTier,
        M = i.useMemo(() => !x && (v ? O && I : I), [v, O, I, x]),
        L = e.handleStepChange,
        k = (0, d.J$)(P.paymentSourceId),
        w = (0, h.R)({ hasOpenInvoice: R ?? !1 }),
        D = null != y && !A,
        U = i.useCallback(
            () =>
                D
                    ? (0, l.jsx)(c.A, {
                          handlePaymentSourceAdd: j,
                          planGroup: T,
                          hasOpenInvoice: R,
                          isInPastDueCheckout: w,
                      })
                    : (0, l.jsx)(o._, {
                          handlePaymentSourceAdd: j,
                          handleStepChange: L,
                          planGroup: T,
                          verifiedTrialId: _,
                          reviewWarningMessage: e.reviewWarningMessage,
                      }),
            [j, D, T, _, e.reviewWarningMessage, R, w, L],
        ),
        G = null != g ? g.id : void 0,
        F = i.useMemo(() => ({ user_trial_offer_id: G }), [G]),
        B = i.useMemo(
            () =>
                (function (e) {
                    let {
                        isGift: t,
                        isRecurringGiftCheckout: n,
                        selectedPlan: l,
                        premiumSubscription: i,
                        planGroup: r,
                        isPrepaidPaymentSource: a,
                        isInPastDueCheckout: s,
                    } = e;
                    if (n) return S.intl.string(S.t.YScQSF);
                    if (t) return S.intl.string(S.t.ouo4FK);
                    if (null != l && (0, d.ys)(l.id))
                        return s
                            ? S.intl.string(E.default.LvcUx4)
                            : a
                              ? S.intl.string(S.t.cRCCJ3)
                              : null != i
                                ? i.isPausedAllowsResumeButNotUpdates
                                    ? S.intl.string(S.t.zpi5pg)
                                    : (0, m.Ge)(i, l.id, r)
                                      ? S.intl.string(S.t.IJI7yk)
                                      : S.intl.string(S.t.VPuTc5)
                                : (0, d.ff)(null, l);
                    return S.intl.string(S.t.YScQSF);
                })({
                    isGift: A,
                    isRecurringGiftCheckout: b,
                    selectedPlan: N,
                    premiumSubscription: y,
                    planGroup: T,
                    isPrepaidPaymentSource: k,
                    isInPastDueCheckout: w,
                }),
            [A, b, N, y, k, w, T],
        ),
        H = i.useMemo(
            () =>
                (function (e) {
                    let { isTrial: t, buttonLabel: n } = e;
                    return t
                        ? {
                              variant: "expressive",
                              text: n,
                              iconPosition: "start",
                              icon: () => (0, l.jsx)(r.t, { color: "currentColor" }),
                          }
                        : { variant: "active", text: n, dataTestId: "purchase" };
                })({ isTrial: t, buttonLabel: B }),
            [t, B],
        ),
        { claimableRewards: W } = (0, a.Pv)(),
        V = (0, u.px)(N, A && !b, W),
        Y = i.useCallback(
            () =>
                v
                    ? void L(s.pn.SKU_SELECT)
                    : n
                      ? void L(s.pn.ADD_PAYMENT_STEPS)
                      : V
                        ? void L(s.pn.SELECT_FREE_SKU)
                        : L(s.pn.PLAN_SELECT),
            [L, v, V, n],
        ),
        K = i.useMemo(
            () => ({
                onBack: Y,
                tenantProvidedReviewButtonProps: H,
                metadata: F,
                backButtonEligible: M,
                trialId: _,
                planGroup: T,
            }),
            [Y, H, F, M, _, T],
        );
    return (0, l.jsx)(p.Y, { ...e, renderStepBody: U, tenantCheckoutFooterProps: K, isTrial: t });
}
