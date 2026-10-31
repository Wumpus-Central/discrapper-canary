n.d(t, { E: () => I });
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
class g {
    isTrial;
    isGift;
    constructor({ isTrial: e, isGift: t }) {
        ((this.isTrial = e), (this.isGift = t));
    }
    resolveDisabledPurchase(e, t) {
        let { paymentSource: n, invoicePreview: l } = t;
        return !(!e.disablePurchase && null != l && (this.isGift || !this.isTrial || null == n || n.canRedeemTrial()));
    }
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
}
function I(e) {
    let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: I } = (0, C.i)(),
        {
            activeSubscription: A,
            isPremium: y,
            isGift: x,
            checkoutPriceOptions: P,
            isInOneStepSubscriptionCheckout: v,
            shouldDisallowPlanSelection: _,
            verifiedTrialId: T,
            effectivePlanGroup: N,
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
        b = (0, h.A)(),
        j = null != e.openInvoiceId,
        R = null == e.initialPlanId && null == e.subscriptionTier,
        O = i.useMemo(() => !_ && (v ? R && y : y), [v, R, y, _]),
        { claimableRewards: M } = (0, a.Pv)(),
        L = (0, u.px)(b, x, M),
        k = e.handleStepChange,
        w = i.useCallback(
            () =>
                v
                    ? void k(s.pn.SKU_SELECT)
                    : n
                      ? void k(s.pn.ADD_PAYMENT_STEPS)
                      : L
                        ? void k(s.pn.SELECT_FREE_SKU)
                        : k(s.pn.PLAN_SELECT),
            [k, v, L, n],
        ),
        D = (0, d.J$)(P.paymentSourceId),
        U = (0, C.R)({ hasOpenInvoice: j ?? !1 }),
        G = i.useMemo(() => new g({ isTrial: t, isGift: x }), [x, t]),
        F = null != A && !x,
        B = i.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return F
                    ? (0, l.jsx)(c.A, {
                          handlePaymentSourceAdd: n,
                          planGroup: N,
                          hasOpenInvoice: j,
                          isInPastDueCheckout: U,
                      })
                    : (0, l.jsx)(o._, {
                          handlePaymentSourceAdd: n,
                          handleStepChange: k,
                          planGroup: N,
                          verifiedTrialId: T,
                          reviewWarningMessage: e.reviewWarningMessage,
                      });
            },
            [F, N, T, e.reviewWarningMessage, j, U, k],
        ),
        H = null != I ? I.id : void 0,
        W = i.useMemo(() => ({ user_trial_offer_id: H }), [H]),
        V = i.useMemo(() => ({ trialId: T, planGroup: N }), [T, N]),
        Y = i.useMemo(
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
                    isGift: x,
                    selectedPlan: b,
                    premiumSubscription: A,
                    planGroup: N,
                    isPrepaidPaymentSource: D,
                    isInPastDueCheckout: U,
                }),
            [x, b, A, D, U, N],
        ),
        K = i.useMemo(
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
                })({ isTrial: t, buttonLabel: Y }),
            [t, Y],
        );
    return (0, l.jsx)(p.Y, {
        ...e,
        isBackButtonEligible: O,
        onFooterBackClick: w,
        subscriptionMetadata: W,
        customFooterProps: V,
        renderStepBody: B,
        resolveInternalState: G.resolveInternalState,
        tenantProvidedReviewButtonProps: K,
    });
}
