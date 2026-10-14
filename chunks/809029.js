n.d(t, { E: () => y });
var l = n(477900),
    i = n(582128),
    r = n(403581),
    a = n(951305),
    s = n(166532),
    o = n(303025),
    u = n(810498),
    c = n(918786),
    d = n(158045),
    p = n(615396),
    m = n(465657),
    h = n(463376),
    C = n(558620),
    f = n(504560),
    S = n(652215),
    E = n(583741),
    I = n(660183);
class A {
    isTrial;
    isGift;
    selectedPlan;
    premiumSubscription;
    planGroup;
    isPrepaidPaymentSource;
    isInPastDueCheckout;
    constructor({
        isTrial: e,
        isGift: t,
        selectedPlan: n,
        premiumSubscription: l,
        planGroup: i,
        isPrepaidPaymentSource: r,
        isInPastDueCheckout: a,
    }) {
        ((this.isTrial = e),
            (this.isGift = t),
            (this.selectedPlan = n),
            (this.premiumSubscription = l),
            (this.planGroup = i),
            (this.isPrepaidPaymentSource = r),
            (this.isInPastDueCheckout = a));
    }
    resolveDisabledPurchase(e, t) {
        let { paymentSource: n, invoicePreview: l } = t;
        return !(!e.disablePurchase && null != l && (this.isGift || !this.isTrial || null == n || n.canRedeemTrial()));
    }
    resolveReviewButtonLabel() {
        if (this.isGift) return I.intl.string(I.t.ouo4FK);
        if (null != this.selectedPlan && (0, d.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? I.intl.string(E.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? I.intl.string(I.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? I.intl.string(I.t.zpi5pg)
                        : (0, p.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? I.intl.string(I.t.IJI7yk)
                          : I.intl.string(I.t.VPuTc5)
                    : (0, d.ff)(null, this.selectedPlan);
        return I.intl.string(I.t.YScQSF);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: i, hasAcceptedTerms: a } = e,
            s = this.resolveReviewButtonLabel();
        return this.isTrial
            ? {
                  variant: "expressive",
                  text: s,
                  onClick: a ? t : S.tEg,
                  loading: n,
                  disabled: i,
                  iconPosition: "start",
                  icon: () => (0, l.jsx)(r.t, { color: "currentColor" }),
                  dataTestId: a ? "purchase" : "submitButton",
              }
            : {
                  variant: "active",
                  text: this.resolveReviewButtonLabel(),
                  dataTestId: "purchase",
                  onClick: t,
                  loading: n,
                  disabled: i,
              };
    };
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
}
function y(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: r } = (0, h.i)(),
        {
            activeSubscription: p,
            isPremium: S,
            isGift: E,
            checkoutPriceOptions: I,
            isInOneStepSubscriptionCheckout: y,
            shouldDisallowPlanSelection: g,
            verifiedTrialId: P,
            effectivePlanGroup: v,
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
        x = (0, C.A)(),
        _ = null != e.openInvoiceId,
        T = null == e.initialPlanId && null == e.subscriptionTier,
        N = i.useMemo(() => !g && (y ? T && S : S), [y, T, S, g]),
        { claimableRewards: b } = (0, a.Pv)(),
        j = (0, u.px)(x, E, b),
        R = e.handleStepChange,
        O = i.useCallback(
            () =>
                y
                    ? void R(s.pn.SKU_SELECT)
                    : n
                      ? void R(s.pn.ADD_PAYMENT_STEPS)
                      : j
                        ? void R(s.pn.SELECT_FREE_SKU)
                        : R(s.pn.PLAN_SELECT),
            [R, y, j, n],
        ),
        M = (0, d.J$)(I.paymentSourceId),
        L = (0, h.R)({ hasOpenInvoice: _ ?? !1 }),
        k = i.useMemo(
            () =>
                new A({
                    isTrial: t,
                    isGift: E,
                    selectedPlan: x,
                    premiumSubscription: p,
                    planGroup: v,
                    isPrepaidPaymentSource: M,
                    isInPastDueCheckout: L,
                }),
            [E, x, p, v, M, t, L],
        ),
        w = null != p && !E,
        D = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return w
                    ? (0, l.jsx)(c.A, {
                          handlePaymentSourceAdd: n,
                          planGroup: v,
                          hasOpenInvoice: _,
                          isInPastDueCheckout: L,
                      })
                    : (0, l.jsx)(o._, {
                          handlePaymentSourceAdd: n,
                          handleStepChange: R,
                          planGroup: v,
                          verifiedTrialId: P,
                          reviewWarningMessage: e.reviewWarningMessage,
                      });
            },
            [w, v, P, e.reviewWarningMessage, _, L, R],
        ),
        U = null != r ? r.id : void 0,
        G = i.useMemo(() => ({ user_trial_offer_id: U }), [U]),
        F = i.useMemo(() => ({ trialId: P, planGroup: v }), [P, v]);
    return (0, l.jsx)(m.Y, {
        ...e,
        isBackButtonEligible: N,
        onFooterBackClick: O,
        subscriptionMetadata: G,
        customFooterProps: F,
        renderStepBody: D,
        resolveInternalState: k.resolveInternalState,
        resolveTenantReviewButtonProps: k.resolveTenantReviewButtonProps,
    });
}
