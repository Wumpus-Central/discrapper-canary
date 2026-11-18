var l = n(477900),
    i = n(582128),
    r = n(403581),
    a = n(166532),
    s = n(367210),
    o = n(335056),
    u = n(448645),
    c = n(615396),
    d = n(120700),
    m = n(660505),
    p = n(558620),
    C = n(682689),
    h = n(602787),
    f = n(379912),
    E = n(792996);
n.d(
    t,
    {},
    {
        E: function (e) {
            let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: S } = (0, h.i)(),
                {
                    activeSubscription: I,
                    isPremium: g,
                    isGift: y,
                    checkoutPriceOptions: A,
                    isInOneStepSubscriptionCheckout: P,
                    shouldDisallowPlanSelection: v,
                    verifiedTrialId: x,
                    effectivePlanGroup: _,
                    isRecurringGiftCheckout: T,
                    premiumTenantParams: b,
                    openInvoiceId: N,
                    reviewWarningMessage: j,
                    initialPlanId: R,
                    shouldShowFreeSkuSelectStep: O,
                } = (0, C.t4)((e) => ({
                    initialPlanId: e.getInitialPlanId(),
                    activeSubscription: e.activeSubscription,
                    isPremium: e.get("isPremiumPurchase"),
                    isGift: e.isGift,
                    checkoutPriceOptions: e.checkoutPriceOptions,
                    isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: t }),
                    shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
                    verifiedTrialId: e.getVerifiedTrialId(),
                    effectivePlanGroup: e.getEffectivePlanGroup(),
                    openInvoiceId: e.getSharedCheckoutParams().openInvoiceId,
                    reviewWarningMessage: e.getSharedCheckoutParams().reviewWarningMessage,
                    isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
                    premiumTenantParams: e.getTenantParams(d.C.PREMIUM_CHECKOUT) ?? {},
                    shouldShowFreeSkuSelectStep: e.getShouldShowSelectFreeSkuStep(),
                })),
                { subscriptionTier: L } = b,
                M = (0, p.A)(),
                k = e.handlePaymentSourceAdd,
                w = null != N,
                D = null == R && null == L,
                U = i.useMemo(() => !v && (P ? D && g : g), [P, D, g, v]),
                G = e.handleStepChange,
                F = (0, u.J$)(A.paymentSourceId),
                B = (0, h.R)({ hasOpenInvoice: w ?? !1 }),
                H = null != I && !y,
                W = i.useCallback(
                    () =>
                        H
                            ? (0, l.jsx)(o.A, {
                                  handlePaymentSourceAdd: k,
                                  planGroup: _,
                                  hasOpenInvoice: w,
                                  isInPastDueCheckout: B,
                              })
                            : (0, l.jsx)(s.M, {
                                  handlePaymentSourceAdd: k,
                                  handleStepChange: G,
                                  planGroup: _,
                                  verifiedTrialId: x,
                                  reviewWarningMessage: j,
                              }),
                    [k, H, _, x, j, w, B, G],
                ),
                V = null != S ? S.id : void 0,
                Y = i.useMemo(() => ({ user_trial_offer_id: V }), [V]),
                K = i.useMemo(
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
                            if (n) return E.intl.string(E.t.YScQSF);
                            if (t) return E.intl.string(E.t.ouo4FK);
                            if (null != l && (0, u.ys)(l.id))
                                return s
                                    ? E.intl.string(f.default.LvcUx4)
                                    : a
                                      ? E.intl.string(E.t.cRCCJ3)
                                      : null != i
                                        ? i.isPausedAllowsResumeButNotUpdates
                                            ? E.intl.string(E.t.zpi5pg)
                                            : (0, c.Ge)(i, l.id, r)
                                              ? E.intl.string(E.t.IJI7yk)
                                              : E.intl.string(E.t.VPuTc5)
                                        : (0, u.ff)(null, l);
                            return E.intl.string(E.t.YScQSF);
                        })({
                            isGift: y,
                            isRecurringGiftCheckout: T,
                            selectedPlan: M,
                            premiumSubscription: I,
                            planGroup: _,
                            isPrepaidPaymentSource: F,
                            isInPastDueCheckout: B,
                        }),
                    [y, T, M, I, F, B, _],
                ),
                Z = i.useMemo(
                    () =>
                        (function (e) {
                            let { isPremiumTrial: t, buttonLabel: n } = e;
                            return t
                                ? {
                                      variant: "expressive",
                                      text: n,
                                      iconPosition: "start",
                                      icon: () => (0, l.jsx)(r.NitroWheelIcon, { color: "currentColor" }),
                                  }
                                : { variant: "active", text: n, dataTestId: "purchase" };
                        })({ isPremiumTrial: t, buttonLabel: K }),
                    [t, K],
                ),
                q = i.useCallback(
                    () =>
                        P
                            ? void G(a.pn.SKU_SELECT)
                            : n
                              ? void G(a.pn.ADD_PAYMENT_STEPS)
                              : O
                                ? void G(a.pn.SELECT_FREE_SKU)
                                : G(a.pn.PLAN_SELECT),
                    [G, P, O, n],
                ),
                z = i.useMemo(
                    () => ({
                        onBack: q,
                        tenantProvidedReviewButtonProps: Z,
                        metadata: Y,
                        backButtonEligible: U,
                        trialId: x,
                        planGroup: _,
                    }),
                    [q, Z, Y, U, x, _],
                );
            return (0, l.jsx)(m.Y, { ...e, renderStepBody: W, tenantCheckoutFooterProps: z, isTrial: t });
        },
    },
);
