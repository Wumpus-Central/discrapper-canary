n.d(t, { E: () => g });
var l = n(477900),
    i = n(582128),
    r = n(403581),
    a = n(951305),
    s = n(166532),
    o = n(397832),
    u = n(580194),
    c = n(970904),
    d = n(158045),
    m = n(615396),
    p = n(465657),
    C = n(463376),
    h = n(558620),
    f = n(206441),
    E = n(652215),
    S = n(583741),
    y = n(375708);
class I {
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
        (this.isTrial = e),
            (this.isGift = t),
            (this.selectedPlan = n),
            (this.premiumSubscription = l),
            (this.planGroup = i),
            (this.isPrepaidPaymentSource = r),
            (this.isInPastDueCheckout = a);
    }
    resolveDisabledPurchase(e, t) {
        let { paymentSource: n, invoicePreview: l } = t;
        return !(!e.disablePurchase && null != l && (this.isGift || !this.isTrial || null == n || n.canRedeemTrial()));
    }
    resolveReviewButtonLabel() {
        if (this.isGift) return y.intl.string(y.t.ouo4FK);
        if (null != this.selectedPlan && (0, d.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? y.intl.string(S.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? y.intl.string(y.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? y.intl.string(y.t.zpi5pg)
                        : (0, m.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? y.intl.string(y.t.IJI7yk)
                          : y.intl.string(y.t.VPuTc5)
                    : (0, d.ff)(null, this.selectedPlan);
        return y.intl.string(y.t.YScQSF);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: i, hasAcceptedTerms: a } = e,
            s = this.resolveReviewButtonLabel();
        return this.isTrial
            ? {
                  variant: "expressive",
                  text: s,
                  onClick: a ? t : E.tEg,
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
function g(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: r } = (0, C.i)(),
        {
            activeSubscription: m,
            isPremium: E,
            isGift: S,
            checkoutPriceOptions: y,
            isInOneStepSubscriptionCheckout: g,
            shouldDisallowPlanSelection: A,
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
        _ = (0, h.A)(),
        x = null != e.openInvoiceId,
        T = null == e.initialPlanId && null == e.subscriptionTier,
        N = i.useMemo(() => !A && (g ? T && E : E), [g, T, E, A]),
        { claimableRewards: b } = (0, a.Pv)(),
        j = (0, u.px)(_, S, b),
        R = e.handleStepChange,
        M = i.useCallback(
            () =>
                g
                    ? void R(s.pn.SKU_SELECT)
                    : n
                      ? void R(s.pn.ADD_PAYMENT_STEPS)
                      : j
                        ? void R(s.pn.SELECT_FREE_SKU)
                        : R(s.pn.PLAN_SELECT),
            [R, g, j, n],
        ),
        O = (0, d.J$)(y.paymentSourceId),
        L = (0, C.R)({ hasOpenInvoice: x ?? !1 }),
        k = i.useMemo(
            () =>
                new I({
                    isTrial: t,
                    isGift: S,
                    selectedPlan: _,
                    premiumSubscription: m,
                    planGroup: v,
                    isPrepaidPaymentSource: O,
                    isInPastDueCheckout: L,
                }),
            [S, _, m, v, O, t, L],
        ),
        w = null != m && !S,
        U = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return w
                    ? (0, l.jsx)(c.A, {
                          handlePaymentSourceAdd: n,
                          planGroup: v,
                          hasOpenInvoice: x,
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
            [w, v, P, e.reviewWarningMessage, x, L, R],
        ),
        D = null != r ? r.id : void 0,
        G = i.useMemo(() => ({ user_trial_offer_id: D }), [D]),
        F = i.useMemo(() => ({ trialId: P, planGroup: v }), [P, v]);
    return (0, l.jsx)(p.Y, {
        ...e,
        isBackButtonEligible: N,
        onFooterBackClick: M,
        subscriptionMetadata: G,
        customFooterProps: F,
        renderStepBody: U,
        resolveInternalState: k.resolveInternalState,
        resolveTenantReviewButtonProps: k.resolveTenantReviewButtonProps,
    });
}
