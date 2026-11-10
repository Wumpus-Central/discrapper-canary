var l = n(477900),
    i = n(582128),
    r = n(403581),
    a = n(418200),
    s = n(166532),
    o = n(367210),
    u = n(810498),
    c = n(335056),
    d = n(448645),
    m = n(615396),
    p = n(120700),
    C = n(660505),
    h = n(463376),
    f = n(558620),
    E = n(516106),
    S = n(379912),
    g = n(792996);
n.d(
    t,
    {},
    {
        E: function (e) {
            let { isEligibleForTrial: t, isPremiumGroupPurchase: n, userTrialOffer: I } = (0, h.i)(),
                {
                    activeSubscription: y,
                    isPremium: A,
                    isGift: P,
                    checkoutPriceOptions: v,
                    isInOneStepSubscriptionCheckout: x,
                    shouldDisallowPlanSelection: _,
                    verifiedTrialId: T,
                    effectivePlanGroup: b,
                    isRecurringGiftCheckout: N,
                    premiumTenantParams: j,
                    openInvoiceId: R,
                    reviewWarningMessage: O,
                    initialPlanId: M,
                } = (0, E.t4)((e) => ({
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
                    premiumTenantParams: e.getTenantParams(p.C.PREMIUM_CHECKOUT) ?? {},
                })),
                { subscriptionTier: L } = j,
                k = (0, f.A)(),
                w = e.handlePaymentSourceAdd,
                D = null != R,
                U = null == M && null == L,
                G = i.useMemo(() => !_ && (x ? U && A : A), [x, U, A, _]),
                F = e.handleStepChange,
                B = (0, d.J$)(v.paymentSourceId),
                H = (0, h.R)({ hasOpenInvoice: D ?? !1 }),
                W = null != y && !P,
                V = i.useCallback(
                    () =>
                        W
                            ? (0, l.jsx)(c.A, {
                                  handlePaymentSourceAdd: w,
                                  planGroup: b,
                                  hasOpenInvoice: D,
                                  isInPastDueCheckout: H,
                              })
                            : (0, l.jsx)(o.M, {
                                  handlePaymentSourceAdd: w,
                                  handleStepChange: F,
                                  planGroup: b,
                                  verifiedTrialId: T,
                                  reviewWarningMessage: O,
                              }),
                    [w, W, b, T, O, D, H, F],
                ),
                Y = null != I ? I.id : void 0,
                K = i.useMemo(() => ({ user_trial_offer_id: Y }), [Y]),
                Z = i.useMemo(
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
                            if (n) return g.intl.string(g.t.YScQSF);
                            if (t) return g.intl.string(g.t.ouo4FK);
                            if (null != l && (0, d.ys)(l.id))
                                return s
                                    ? g.intl.string(S.default.LvcUx4)
                                    : a
                                      ? g.intl.string(g.t.cRCCJ3)
                                      : null != i
                                        ? i.isPausedAllowsResumeButNotUpdates
                                            ? g.intl.string(g.t.zpi5pg)
                                            : (0, m.Ge)(i, l.id, r)
                                              ? g.intl.string(g.t.IJI7yk)
                                              : g.intl.string(g.t.VPuTc5)
                                        : (0, d.ff)(null, l);
                            return g.intl.string(g.t.YScQSF);
                        })({
                            isGift: P,
                            isRecurringGiftCheckout: N,
                            selectedPlan: k,
                            premiumSubscription: y,
                            planGroup: b,
                            isPrepaidPaymentSource: B,
                            isInPastDueCheckout: H,
                        }),
                    [P, N, k, y, B, H, b],
                ),
                q = i.useMemo(
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
                        })({ isPremiumTrial: t, buttonLabel: Z }),
                    [t, Z],
                ),
                { claimableRewards: z } = (0, a.Pv)(),
                $ = (0, u.px)(k, P && !N, z),
                Q = i.useCallback(
                    () =>
                        x
                            ? void F(s.pn.SKU_SELECT)
                            : n
                              ? void F(s.pn.ADD_PAYMENT_STEPS)
                              : $
                                ? void F(s.pn.SELECT_FREE_SKU)
                                : F(s.pn.PLAN_SELECT),
                    [F, x, $, n],
                ),
                J = i.useMemo(
                    () => ({
                        onBack: Q,
                        tenantProvidedReviewButtonProps: q,
                        metadata: K,
                        backButtonEligible: G,
                        trialId: T,
                        planGroup: b,
                    }),
                    [Q, q, K, G, T, b],
                );
            return (0, l.jsx)(C.Y, { ...e, renderStepBody: V, tenantCheckoutFooterProps: J, isTrial: t });
        },
    },
);
