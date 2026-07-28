n.d(t, { E: () => g });
var l = n(477900),
    i = n(582128),
    r = n(403581),
    a = n(160946),
    s = n(951305),
    o = n(166532),
    u = n(696730),
    c = n(380619),
    d = n(427858),
    p = n(428262),
    m = n(615396),
    C = n(465657),
    h = n(71804),
    E = n(463376),
    f = n(558620),
    A = n(316915),
    S = n(652215),
    y = n(202541),
    P = n(327105),
    I = n(375708);
function _(e) {
    let {
            effectivePlanGroup: t,
            handlePaymentSourceAdd: n,
            reviewWarningMessage: r,
            verifiedTrialId: s,
            hasOpenInvoice: o,
            isInPastDueCheckout: c,
        } = e,
        p = (0, f.A)(),
        {
            selectedPlanId: m,
            selectedSkuId: C,
            purchaseState: E,
            unifiedCheckoutFlow: S,
            activeSubscription: y,
            isGift: P,
            skuIds: I,
        } = (0, A.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
            skuIds: e.skuIds,
        })),
        _ = (0, a.Y)(I);
    if (null == p)
        throw new h.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: S,
                selectedPlanId: m,
                selectedSkuId: C,
                hasFetchedSubscriptionPlans: _,
            },
        });
    let T = i.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: p.id, selectedPlan: p }),
        [n, t, p],
    );
    return null == y || P
        ? (0, l.jsx)(u._, { ...T, verifiedTrialId: s, reviewWarningMessage: r })
        : (0, l.jsx)(d.A, { ...T, purchaseState: E, hasOpenInvoice: o, isInPastDueCheckout: c });
}
class T {
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
        if (this.isGift) return I.intl.string(I.t.ouo4FK);
        if (null != this.selectedPlan && (0, p.ys)(this.selectedPlan.id))
            return this.isInPastDueCheckout
                ? I.intl.string(P.default.LvcUx4)
                : this.isPrepaidPaymentSource
                  ? I.intl.string(I.t.cRCCJ3)
                  : null != this.premiumSubscription
                    ? this.premiumSubscription.isPausedAllowsResumeButNotUpdates
                        ? I.intl.string(I.t.zpi5pg)
                        : (0, m.Ge)(this.premiumSubscription, this.selectedPlan.id, this.planGroup)
                          ? I.intl.string(I.t.IJI7yk)
                          : I.intl.string(I.t.VPuTc5)
                    : (0, p.ff)(null, this.selectedPlan);
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
function g(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: r } = (0, E.i)(),
        {
            selectedSkuId: a,
            activeSubscription: u,
            isPremium: d,
            isGift: m,
            referralTrialOfferId: h,
            checkoutPriceOptions: S,
            isInOneStepSubscriptionCheckout: P,
            shouldDisallowPlanSelection: I,
        } = (0, A.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: t }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { verifiedTrialId: g } = i.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        r = t ?? n ?? null;
                    return { verifiedTrialId: null != r && (!l || y.TP[r].skus.includes(i)) ? r : null };
                })({ trialId: e.trialId, referralTrialOfferId: h, isPremium: d, selectedSkuId: a }),
            [e.trialId, h, d, a],
        ),
        v = (0, f.A)(),
        x = i.useMemo(() => {
            if (null != e.planGroup && (null == v || e.planGroup.includes(v.id))) return e.planGroup;
            if (null != v) {
                if ((0, p.xq)(v.id)) return y.LE;
                if ((0, p.z4)(v.id)) return y.DA;
            }
            return [];
        }, [v, e.planGroup]),
        N = null != e.openInvoiceId,
        R = null == e.initialPlanId && null == e.subscriptionTier,
        b = i.useMemo(() => !I && (P ? R && d : d), [P, R, d, I]),
        { claimableRewards: M } = (0, s.Pv)(),
        j = (0, c.px)(v, m, M),
        O = e.handleStepChange,
        L = i.useCallback(
            () =>
                P
                    ? void O(o.pn.SKU_SELECT)
                    : n
                      ? void O(o.pn.ADD_PAYMENT_STEPS)
                      : j
                        ? void O(o.pn.SELECT_FREE_SKU)
                        : O(o.pn.PLAN_SELECT),
            [O, P, j, n],
        ),
        w = (0, p.J$)(S.paymentSourceId),
        k = (0, E.R)({ hasOpenInvoice: N ?? !1 }),
        U = i.useMemo(
            () =>
                new T({
                    isTrial: t,
                    isGift: m,
                    selectedPlan: v,
                    premiumSubscription: u,
                    planGroup: x,
                    isPrepaidPaymentSource: w,
                    isInPastDueCheckout: k,
                }),
            [m, v, u, x, w, t, k],
        ),
        D = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(_, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: x,
                    verifiedTrialId: g,
                    hasOpenInvoice: N,
                    isInPastDueCheckout: k,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [x, g, e.reviewWarningMessage, N, k],
        ),
        G = null != r ? r.id : void 0,
        F = i.useMemo(() => ({ user_trial_offer_id: G }), [G]),
        H = i.useMemo(() => ({ trialId: g, planGroup: x }), [g, x]);
    return (0, l.jsx)(C.Y, {
        ...e,
        isBackButtonEligible: b,
        onFooterBackClick: L,
        subscriptionMetadata: F,
        customFooterProps: H,
        renderStepBody: D,
        resolveInternalState: U.resolveInternalState,
        resolveTenantReviewButtonProps: U.resolveTenantReviewButtonProps,
    });
}
