n.d(t, { _M: () => V });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(331322),
    o = n(304072),
    u = n(606267),
    c = n(937008),
    d = n(166532),
    p = n(69494),
    m = n(871084),
    h = n(482132),
    A = n(615310),
    E = n(50956),
    C = n(921925),
    y = n(506120),
    P = n(800471),
    S = n(216641),
    _ = n(380619),
    I = n(45938),
    f = n(742810),
    T = n(364995),
    N = n(426398),
    v = n(463376),
    g = n(666646),
    x = n(558620),
    R = n(571878),
    M = n(26279),
    b = n(818348);
function L(e) {
    let {
            renderStepBody: t,
            customFooterProps: n,
            handleStepChange: i,
            trialFooterMessageOverride: L,
            reviewWarningMessage: j,
            openInvoiceId: O,
            analyticsData: w,
            analyticsLocation: D,
            referralTrialOfferId: U,
            initialPlanId: k,
            subscriptionTier: G,
            handleClose: F,
        } = e,
        Y = (0, f.D7)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: B,
            purchaseType: W,
            customCheckoutFlow: H,
            selectedSkuId: V,
            setEntitlementsGranted: K,
            setAppliedUserDiscounts: Z,
            contextMetadata: q,
            setUpdatedSubscription: z,
            purchaseError: $,
            setCheckoutCurrency: J,
            startedPaymentFlowWithPaymentSources: X,
        } = (0, R.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            purchaseType: e.purchaseType,
            customCheckoutFlow: e.customCheckoutFlow,
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setUpdatedSubscription: e.setUpdatedSubscription,
            setCheckoutCurrency: e.setCheckoutCurrency,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isPremium: Q, isPremiumGroupPurchase: ee, isEligibleForTrial: et, userTrialOffer: en } = (0, v.i)(),
        el = (0, x.A)(),
        er = (0, A.bB)(),
        { isGift: ei, giftMessage: ea, giftRecipient: es, claimableRewards: eo } = (0, c.Pv)();
    a()(null != er, "Step should be set");
    let eu = r.useRef(null),
        [ec, ed] = (0, o.A)(!1, 500),
        { disablePurchase: ep } = (function () {
            let {
                    paymentSourceId: e,
                    purchasePreviewError: t,
                    purchaseType: n,
                } = (0, R.t4)((e) => ({
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { paymentSources: l } = (0, N.jm)(),
                { isEligibleForTrial: i } = (0, v.i)(),
                { checkoutPaymentSources: a, hasInvoiceOrderContextLoaded: s } = (0, T.t)(),
                o = (0, g.sw)(),
                { isGift: d } = (0, c.Pv)(),
                p = (0, S.W)(l, e),
                m = r.useMemo(() => {
                    if (null == e) return !1;
                    if (!s) return !0;
                    let t = a.find((t) => t.id === e);
                    return null != t && !t.enabled;
                }, [a, s, e]),
                h = (0, u.iB)({ checkoutPaymentSources: a, paymentSourceId: e, location: "PaymentModalReviewStep" }),
                A = r.useMemo(
                    () =>
                        !!h ||
                        (n === b.VV.ONE_TIME
                            ? null == e || m || null == o || null != t
                            : null == o || (!d && null != p && i && !p.canRedeemTrial())),
                    [h, n, o, e, t, d, p, i, m],
                );
            return { paymentSource: p, disablePurchase: A };
        })(),
        em = null != en ? en.id : void 0,
        eh = r.useMemo(() => ({ user_trial_offer_id: em }), [em]);
    r.useEffect(() => {
        null != $ && null != eu.current && eu.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let eA = r.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                z(l),
                    null != t && K(t),
                    null != n && Z(n),
                    i(d.pn.CONFIRM, { fulfillment: { subscription: l, entitlements: t } });
            },
            [i, z, K, Z],
        ),
        eE = r.useRef(null),
        eC = (0, g.mx)(),
        ey = ei && (0, I.Ik)(es),
        eP = null == k && null == G && W === b.VV.SUBSCRIPTION,
        eS = (0, P.vT)({ isTrial: et, isGift: ei, selectedSkuId: V, startedPaymentFlowWithPaymentSources: X }),
        e_ = ei && W === b.VV.ONE_TIME,
        eI = e_ || (eS ? eP && Q : Q),
        ef = (0, _.px)(el, ei, eo),
        eT = r.useCallback(
            () =>
                (J(void 0), eS)
                    ? void i(d.pn.SKU_SELECT)
                    : ee
                      ? void i(d.pn.ADD_PAYMENT_STEPS)
                      : ef
                        ? void i(d.pn.SELECT_FREE_SKU)
                        : e_
                          ? i(d.pn.GIFT_CUSTOMIZATION)
                          : i(d.pn.PLAN_SELECT),
            [J, i, eS, e_, ef, ee],
        ),
        eN = ep;
    H === M.uH.DEV_STORYBOOK_CHECKOUT && (eN = !0);
    let ev = r.useCallback(() => {
            i(d.pn.ADD_PAYMENT_STEPS);
        }, [i]),
        eg = r.useMemo(() => ({ hasLegalTermsFlash: ec, legalTermsNodeRef: eE }), [ec, eE]),
        ex = r.useMemo(
            () => ({
                handleClose: F,
                openInvoiceId: O,
                trialFooterMessageOverride: L,
                reviewWarningMessage: j,
                referralTrialOfferId: U,
            }),
            [F, O, L, j, U],
        ),
        eR = r.useMemo(
            () => t(ex, { isUnifiedCheckoutUIEnabled: Y, handlePaymentSourceAdd: ev }, eg),
            [t, ex, ev, Y, eg],
        ),
        eM = (0, l.jsx)(m.A, {
            premiumSubscription: B ?? null,
            invoiceError: eC,
            onBack: eT,
            onNext: eA,
            legalTermsNodeRef: eE,
            flashLegalTerms: () => ed(!0),
            analyticsLocation: D,
            baseAnalyticsData: w,
            openInvoiceId: O,
            flowStartTime: q.startTime,
            isTrial: et,
            backButtonEligible: eI,
            metadata: eh,
            disablePurchase: eN,
            onPaymentSourceAdd: ev,
            ...n,
        }),
        eb = r.useMemo(
            () =>
                Y
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.Z, { giftMessage: ea }),
                              !ey && (0, l.jsx)(p.A, { isEligibleForTrial: et }),
                          ],
                      }),
            [ea, ey, et, Y],
        ),
        eL = r.useMemo(
            () =>
                Y
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(C.A, {}), (0, l.jsx)(y.A, {})],
                      }),
            [Y],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eb, (0, l.jsxs)(h.dZ, { children: [eL, eR] }), (0, l.jsx)(h.UX, { children: eM })],
    });
}
var j = n(71804),
    O = n(655857),
    w = n(271849),
    D = n(427858),
    U = n(428262),
    k = n(367160),
    G = n(194256),
    F = n(788868);
let Y = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            handleClose: i,
            effectivePlanGroup: a,
            hasLegalTermsFlash: s,
            legalTermsNodeRef: o,
            handlePaymentSourceAdd: u,
            trialFooterMessageOverride: d,
            reviewWarningMessage: p,
            referralTrialOfferId: m,
            verifiedTrialId: h,
            originalTrialId: A,
        } = e,
        E = (0, x.A)(),
        {
            selectedPlanId: C,
            selectedSkuId: y,
            purchaseState: P,
            setHasAcceptedTerms: S,
            unifiedCheckoutFlow: _,
            activeSubscription: I,
        } = (0, R.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
        })),
        { isGift: f } = (0, c.Pv)(),
        { paymentSources: T } = (0, N.jm)(),
        { discountOffer: g, isEligibleForDiscount: M, isEligibleForTrial: b } = (0, v.i)(),
        { dropdownCurrencies: L, hasFetchedRelatedSubscriptionPlans: U, setCheckoutCurrency: G } = (0, O.Jn)(),
        F = r.useCallback((e) => G(e), [G]);
    if (null == E)
        throw new j.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: _,
                selectedPlanId: C,
                hasFetchedSubscriptionPlans: U,
                selectedSkuId: y,
            },
        });
    let Y = r.useMemo(() => {
            let e = g?.discount?.planIds;
            return M && null != g && null != e && null != E && e.includes(E.id);
        }, [M, g, E]),
        B = r.useMemo(() => b || (null != A && null != d), [b, A, d]),
        W = {
            paymentSources: T,
            handlePaymentSourceAdd: u,
            planGroup: a,
            setHasAcceptedTerms: S,
            legalTermsNodeRef: o,
            hasLegalTermsFlash: s,
            handleClose: i,
        },
        H = E.id;
    if (null == I || f) {
        let e = {
            ...W,
            selectedPlanId: H,
            trialId: h,
            trialFooterMessageOverride: d,
            reviewWarningMessage: p,
            referralTrialOfferId: m,
            isTrial: B,
            isDiscount: Y,
        };
        return t ? (0, l.jsx)(k._, { ...e }) : (0, l.jsx)(w.A, { ...e });
    }
    {
        let e = {
            ...W,
            currencies: L,
            onCurrencyChange: F,
            purchaseState: P,
            premiumSubscription: I,
            planId: H,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(D.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function B(e) {
    let { selectedSkuId: t, isPremium: n } = (0, R.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
        })),
        { verifiedTrialId: i, originalTrialId: a } = r.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: r } = e,
                        i = t ?? n ?? null;
                    return {
                        verifiedTrialId: null != i && (!l || F.TP[i].skus.includes(r)) ? i : null,
                        originalTrialId: t,
                    };
                })({
                    trialId: e.trialId,
                    referralTrialOfferId: e.referralTrialOfferId,
                    isPremium: n,
                    selectedSkuId: t,
                }),
            [e.trialId, e.referralTrialOfferId, n, t],
        ),
        s = (0, x.A)(),
        o = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != s) {
                if ((0, U.xq)(s.id)) return F.LE;
                if ((0, U.z4)(s.id)) return F.DA;
            }
            return [];
        }, [s, e.planGroup]),
        u = r.useMemo(() => ({ effectivePlanGroup: o, verifiedTrialId: i, originalTrialId: a }), [o, i, a]),
        c = r.useMemo(() => ({ trialId: i, planGroup: o }), [i, o]),
        d = r.useCallback(
            (e, t, n) =>
                ((e, t, n, r) => {
                    let { isUnifiedCheckoutUIEnabled: i, handlePaymentSourceAdd: a } = t,
                        {
                            handleClose: s,
                            openInvoiceId: o,
                            trialFooterMessageOverride: u,
                            reviewWarningMessage: c,
                            referralTrialOfferId: d,
                        } = e,
                        { effectivePlanGroup: p, verifiedTrialId: m, originalTrialId: h } = r;
                    return (0, l.jsx)(Y, {
                        isUnifiedCheckoutUIEnabled: i,
                        handlePaymentSourceAdd: a,
                        effectivePlanGroup: p,
                        verifiedTrialId: m,
                        originalTrialId: h,
                        ...n,
                        handleClose: s,
                        openInvoiceId: o,
                        trialFooterMessageOverride: u,
                        reviewWarningMessage: c,
                        referralTrialOfferId: d,
                    });
                })(e, t, n, u),
            [u],
        );
    return (0, l.jsx)(L, { renderStepBody: d, customFooterProps: c, ...e });
}
let W = (e, t, n) => {
    let { handlePaymentSourceAdd: r } = t;
    return (0, l.jsx)(G.Ay, { handlePaymentSourceAdd: r, ...n });
};
function H(e) {
    return (0, l.jsx)(L, { renderStepBody: W, ...e });
}
function V(e) {
    return (0, R.t4)((e) => e.purchaseType) === b.VV.SUBSCRIPTION ? (0, l.jsx)(B, { ...e }) : (0, l.jsx)(H, { ...e });
}
