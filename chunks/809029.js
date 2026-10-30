n.d(t, { E: () => A });
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
    f = n(912195),
    E = n(652215),
    S = n(758476),
    g = n(105292);
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
        if (this.isGift) return g.intl.string(g.t.ouo4FK);
        if (null != this.selectedPlan && (0, d.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? g.intl.string(S.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? g.intl.string(g.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? g.intl.string(g.t.zpi5pg)
                        : (0, m.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? g.intl.string(g.t.IJI7yk)
                          : g.intl.string(g.t.VPuTc5)
                    : (0, d.ff)(null, this.selectedPlan);
        return g.intl.string(g.t.YScQSF);
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
function A(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: r } = (0, h.i)(),
        {
            activeSubscription: m,
            isPremium: E,
            isGift: S,
            checkoutPriceOptions: g,
            isInOneStepSubscriptionCheckout: A,
            shouldDisallowPlanSelection: y,
            verifiedTrialId: x,
            effectivePlanGroup: P,
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
        v = (0, C.A)(),
        _ = null != e.openInvoiceId,
        T = null == e.initialPlanId && null == e.subscriptionTier,
        N = i.useMemo(() => !y && (A ? T && E : E), [A, T, E, y]),
        { claimableRewards: b } = (0, a.Pv)(),
        j = (0, u.px)(v, S, b),
        R = e.handleStepChange,
        O = i.useCallback(
            () =>
                A
                    ? void R(s.pn.SKU_SELECT)
                    : n
                      ? void R(s.pn.ADD_PAYMENT_STEPS)
                      : j
                        ? void R(s.pn.SELECT_FREE_SKU)
                        : R(s.pn.PLAN_SELECT),
            [R, A, j, n],
        ),
        M = (0, d.J$)(g.paymentSourceId),
        L = (0, h.R)({ hasOpenInvoice: _ ?? !1 }),
        k = i.useMemo(
            () =>
                new I({
                    isTrial: t,
                    isGift: S,
                    selectedPlan: v,
                    premiumSubscription: m,
                    planGroup: P,
                    isPrepaidPaymentSource: M,
                    isInPastDueCheckout: L,
                }),
            [S, v, m, P, M, t, L],
        ),
        w = null != m && !S,
        D = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return w
                    ? (0, l.jsx)(c.A, {
                          handlePaymentSourceAdd: n,
                          planGroup: P,
                          hasOpenInvoice: _,
                          isInPastDueCheckout: L,
                      })
                    : (0, l.jsx)(o._, {
                          handlePaymentSourceAdd: n,
                          handleStepChange: R,
                          planGroup: P,
                          verifiedTrialId: x,
                          reviewWarningMessage: e.reviewWarningMessage,
                      });
            },
            [w, P, x, e.reviewWarningMessage, _, L, R],
        ),
        U = null != r ? r.id : void 0,
        G = i.useMemo(() => ({ user_trial_offer_id: U }), [U]),
        F = i.useMemo(() => ({ trialId: x, planGroup: P }), [x, P]);
    return (0, l.jsx)(p.Y, {
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
