n.d(t, { E: () => T });
var l = n(477900),
    i = n(582128),
    r = n(403581),
    a = n(160946),
    s = n(951305),
    o = n(166532),
    u = n(696730),
    c = n(380619),
    d = n(427858),
    p = n(158045),
    m = n(615396),
    C = n(465657),
    h = n(71804),
    f = n(463376),
    E = n(558620),
    S = n(87725),
    A = n(652215),
    y = n(202541),
    P = n(327105),
    I = n(375708);
function g(e) {
    let {
            effectivePlanGroup: t,
            handlePaymentSourceAdd: n,
            reviewWarningMessage: r,
            verifiedTrialId: s,
            hasOpenInvoice: o,
            isInPastDueCheckout: c,
        } = e,
        p = (0, E.A)(),
        {
            selectedPlanId: m,
            selectedSkuId: C,
            purchaseState: f,
            unifiedCheckoutFlow: A,
            activeSubscription: y,
            isGift: P,
            skuIds: I,
        } = (0, S.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
            skuIds: e.skuIds,
        })),
        g = (0, a.Y)(I);
    if (null == p)
        throw new h.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: A,
                selectedPlanId: m,
                selectedSkuId: C,
                hasFetchedSubscriptionPlans: g,
            },
        });
    let v = i.useMemo(
        () => ({ handlePaymentSourceAdd: n, planGroup: t, verifiedPlanId: p.id, selectedPlan: p }),
        [n, t, p],
    );
    return null == y || P
        ? (0, l.jsx)(u._, { ...v, verifiedTrialId: s, reviewWarningMessage: r })
        : (0, l.jsx)(d.A, { ...v, purchaseState: f, hasOpenInvoice: o, isInPastDueCheckout: c });
}
class v {
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
                  onClick: a ? t : A.tEg,
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
function T(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: r } = (0, f.i)(),
        {
            selectedSkuId: a,
            activeSubscription: u,
            isPremium: d,
            isGift: m,
            referralTrialOfferId: h,
            checkoutPriceOptions: A,
            isInOneStepSubscriptionCheckout: P,
            shouldDisallowPlanSelection: I,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            activeSubscription: e.activeSubscription,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            checkoutPriceOptions: e.checkoutPriceOptions,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: t }),
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        { verifiedTrialId: T } = i.useMemo(
            () =>
                (function (e) {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        r = t ?? n ?? null;
                    return { verifiedTrialId: null != r && (!l || y.TP[r].skus.includes(i)) ? r : null };
                })({ trialId: e.trialId, referralTrialOfferId: h, isPremium: d, selectedSkuId: a }),
            [e.trialId, h, d, a],
        ),
        _ = (0, E.A)(),
        x = i.useMemo(() => {
            if (null != e.planGroup && (null == _ || e.planGroup.includes(_.id))) return e.planGroup;
            if (null != _) {
                if ((0, p.xq)(_.id)) return y.LE;
                if ((0, p.z4)(_.id)) return y.DA;
            }
            return [];
        }, [_, e.planGroup]),
        N = null != e.openInvoiceId,
        b = null == e.initialPlanId && null == e.subscriptionTier,
        R = i.useMemo(() => !I && (P ? b && d : d), [P, b, d, I]),
        { claimableRewards: j } = (0, s.Pv)(),
        M = (0, c.px)(_, m, j),
        O = e.handleStepChange,
        L = i.useCallback(
            () =>
                P
                    ? void O(o.pn.SKU_SELECT)
                    : n
                      ? void O(o.pn.ADD_PAYMENT_STEPS)
                      : M
                        ? void O(o.pn.SELECT_FREE_SKU)
                        : O(o.pn.PLAN_SELECT),
            [O, P, M, n],
        ),
        k = (0, p.J$)(A.paymentSourceId),
        w = (0, f.R)({ hasOpenInvoice: N ?? !1 }),
        U = i.useMemo(
            () =>
                new v({
                    isTrial: t,
                    isGift: m,
                    selectedPlan: _,
                    premiumSubscription: u,
                    planGroup: x,
                    isPrepaidPaymentSource: k,
                    isInPastDueCheckout: w,
                }),
            [m, _, u, x, k, t, w],
        ),
        D = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(g, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: x,
                    verifiedTrialId: T,
                    hasOpenInvoice: N,
                    isInPastDueCheckout: w,
                    reviewWarningMessage: e.reviewWarningMessage,
                });
            },
            [x, T, e.reviewWarningMessage, N, w],
        ),
        G = null != r ? r.id : void 0,
        F = i.useMemo(() => ({ user_trial_offer_id: G }), [G]),
        H = i.useMemo(() => ({ trialId: T, planGroup: x }), [T, x]);
    return (0, l.jsx)(C.Y, {
        ...e,
        isBackButtonEligible: R,
        onFooterBackClick: L,
        subscriptionMetadata: F,
        customFooterProps: H,
        renderStepBody: D,
        resolveInternalState: U.resolveInternalState,
        resolveTenantReviewButtonProps: U.resolveTenantReviewButtonProps,
    });
}
