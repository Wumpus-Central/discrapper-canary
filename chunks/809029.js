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
    C = n(463376),
    h = n(558620),
    f = n(281044),
    E = n(758476),
    S = n(105292);
function g(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: g } = (0, C.i)(),
        {
            activeSubscription: I,
            isPremium: A,
            isGift: y,
            checkoutPriceOptions: x,
            isInOneStepSubscriptionCheckout: P,
            shouldDisallowPlanSelection: v,
            verifiedTrialId: _,
            effectivePlanGroup: T,
        } = (0, f.t4)((n) => ({
            activeSubscription: n.activeSubscription,
            isPremium: n.get("isPremiumPurchase"),
            isGift: n.isGift,
            checkoutPriceOptions: n.checkoutPriceOptions,
            isInOneStepSubscriptionCheckout: n.getIsInOneStepSubscriptionCheckout({ isTrial: t }),
            shouldDisallowPlanSelection: n.getShouldDisallowPlanSelection(),
            verifiedTrialId: n.getVerifiedTrialId({ trialId: e.trialId }),
            effectivePlanGroup: n.getEffectivePlanGroup({ planGroup: e.planGroup }),
        })),
        N = (0, h.A)(),
        b = e.handlePaymentSourceAdd,
        j = null != e.openInvoiceId,
        R = null == e.initialPlanId && null == e.subscriptionTier,
        O = i.useMemo(() => !v && (P ? R && A : A), [P, R, A, v]),
        M = e.handleStepChange,
        L = (0, d.J$)(x.paymentSourceId),
        k = (0, C.R)({ hasOpenInvoice: j ?? !1 }),
        w = null != I && !y,
        D = i.useCallback(
            () =>
                w
                    ? (0, l.jsx)(c.A, {
                          handlePaymentSourceAdd: b,
                          planGroup: T,
                          hasOpenInvoice: j,
                          isInPastDueCheckout: k,
                      })
                    : (0, l.jsx)(o._, {
                          handlePaymentSourceAdd: b,
                          handleStepChange: M,
                          planGroup: T,
                          verifiedTrialId: _,
                          reviewWarningMessage: e.reviewWarningMessage,
                      }),
            [b, w, T, _, e.reviewWarningMessage, j, k, M],
        ),
        U = null != g ? g.id : void 0,
        G = i.useMemo(() => ({ user_trial_offer_id: U }), [U]),
        F = i.useMemo(
            () =>
                (function (e) {
                    let {
                        isGift: t,
                        selectedPlan: n,
                        premiumSubscription: l,
                        planGroup: i,
                        isPrepaidPaymentSource: r,
                        isInPastDueCheckout: a,
                    } = e;
                    if (t) return S.intl.string(S.t.ouo4FK);
                    if (null != n && (0, d.ys)(n.id))
                        return a
                            ? S.intl.string(E.default.LvcUx4)
                            : r
                              ? S.intl.string(S.t.cRCCJ3)
                              : null != l
                                ? l.isPausedAllowsResumeButNotUpdates
                                    ? S.intl.string(S.t.zpi5pg)
                                    : (0, m.Ge)(l, n.id, i)
                                      ? S.intl.string(S.t.IJI7yk)
                                      : S.intl.string(S.t.VPuTc5)
                                : (0, d.ff)(null, n);
                    return S.intl.string(S.t.YScQSF);
                })({
                    isGift: y,
                    selectedPlan: N,
                    premiumSubscription: I,
                    planGroup: T,
                    isPrepaidPaymentSource: L,
                    isInPastDueCheckout: k,
                }),
            [y, N, I, L, k, T],
        ),
        B = i.useMemo(
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
                })({ isTrial: t, buttonLabel: F }),
            [t, F],
        ),
        { claimableRewards: H } = (0, a.Pv)(),
        W = (0, u.px)(N, y, H),
        V = i.useCallback(
            () =>
                P
                    ? void M(s.pn.SKU_SELECT)
                    : n
                      ? void M(s.pn.ADD_PAYMENT_STEPS)
                      : W
                        ? void M(s.pn.SELECT_FREE_SKU)
                        : M(s.pn.PLAN_SELECT),
            [M, P, W, n],
        ),
        Y = i.useMemo(
            () => ({
                onBack: V,
                tenantProvidedReviewButtonProps: B,
                metadata: G,
                backButtonEligible: O,
                trialId: _,
                planGroup: T,
            }),
            [V, B, G, O, _, T],
        );
    return (0, l.jsx)(p.Y, { ...e, renderStepBody: D, tenantCheckoutFooterProps: Y, isTrial: t });
}
