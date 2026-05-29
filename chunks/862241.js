n.d(t, { _M: () => H });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(331322),
    o = n(304072),
    u = n(606267),
    c = n(937008),
    d = n(768050),
    p = n(166532),
    m = n(69494),
    h = n(871084),
    A = n(482132),
    C = n(615310),
    E = n(50956),
    y = n(921925),
    P = n(506120),
    S = n(800471),
    _ = n(216641),
    I = n(380619),
    f = n(45938),
    T = n(742810),
    N = n(364995),
    v = n(426398),
    g = n(463376),
    x = n(666646),
    R = n(558620),
    M = n(722847),
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
            handleClose: Y,
        } = e,
        F = (0, T.D7)({ location: "payment_modal_review_step" }),
        {
            selectedSkuId: B,
            setEntitlementsGranted: W,
            setAppliedUserDiscounts: H,
            contextMetadata: V,
            setUpdatedSubscription: K,
            purchaseError: Z,
            setCheckoutCurrency: q,
        } = (0, M.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setUpdatedSubscription: e.setUpdatedSubscription,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        {
            activeSubscription: z,
            purchaseType: $,
            startedPaymentFlowWithPaymentSourcesRef: J,
            disablePurchasesForStorybook: X,
        } = (0, d.P5)(),
        { isPremium: Q, isPremiumGroupPurchase: ee, isEligibleForTrial: et, userTrialOffer: en } = (0, g.i)(),
        el = (0, R.A)(),
        er = (0, C.bB)(),
        { isGift: ei, giftMessage: ea, giftRecipient: es, claimableRewards: eo } = (0, c.Pv)();
    a()(null != er, "Step should be set");
    let eu = r.useRef(null),
        [ec, ed] = (0, o.A)(!1, 500),
        { disablePurchase: ep } = (function () {
            let { paymentSourceId: e, purchasePreviewError: t } = (0, M.t4)((e) => ({
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                })),
                { paymentSources: n } = (0, v.jm)(),
                { purchaseType: l } = (0, d.P5)(),
                { isEligibleForTrial: i } = (0, g.i)(),
                { checkoutPaymentSources: a, hasInvoiceOrderContextLoaded: s } = (0, N.t)(),
                o = (0, x.sw)(),
                { isGift: p } = (0, c.Pv)(),
                m = (0, _.W)(n, e),
                h = r.useMemo(() => {
                    if (null == e) return !1;
                    if (!s) return !0;
                    let t = a.find((t) => t.id === e);
                    return null != t && !t.enabled;
                }, [a, s, e]),
                A = (0, u.iB)({ checkoutPaymentSources: a, paymentSourceId: e, location: "PaymentModalReviewStep" }),
                C = r.useMemo(
                    () =>
                        !!A ||
                        (l === b.VV.ONE_TIME
                            ? null == e || h || null == o || null != t
                            : null == o || (!p && null != m && l === b.VV.SUBSCRIPTION && i && !m.canRedeemTrial())),
                    [A, l, o, e, t, p, m, i, h],
                );
            return { paymentSource: m, disablePurchase: C };
        })(),
        em = null != en ? en.id : void 0,
        eh = r.useMemo(() => ({ user_trial_offer_id: em }), [em]);
    r.useEffect(() => {
        null != Z && null != eu.current && eu.current.scrollIntoView({ behavior: "smooth" });
    }, [Z]);
    let eA = r.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                K(l),
                    null != t && W(t),
                    null != n && H(n),
                    i(p.pn.CONFIRM, { fulfillment: { subscription: l, entitlements: t } });
            },
            [i, K, W, H],
        ),
        eC = r.useRef(null),
        eE = (0, x.mx)(),
        ey = ei && (0, f.Ik)(es),
        eP = null == k && null == G && $ === b.VV.SUBSCRIPTION,
        eS = (0, S.vT)({ isTrial: et, isGift: ei, selectedSkuId: B, startedPaymentFlowWithPaymentSources: J.current }),
        e_ = ei && $ === b.VV.ONE_TIME,
        eI = e_ || (eS ? eP && Q : Q),
        ef = (0, I.px)(el, ei, eo),
        eT = r.useCallback(
            () =>
                (q(void 0), eS)
                    ? void i(p.pn.SKU_SELECT)
                    : ee
                      ? void i(p.pn.ADD_PAYMENT_STEPS)
                      : ef
                        ? void i(p.pn.SELECT_FREE_SKU)
                        : e_
                          ? i(p.pn.GIFT_CUSTOMIZATION)
                          : i(p.pn.PLAN_SELECT),
            [q, i, eS, e_, ef, ee],
        ),
        eN = ep;
    X && (eN = !0);
    let ev = r.useCallback(() => {
            i(p.pn.ADD_PAYMENT_STEPS);
        }, [i]),
        eg = r.useMemo(() => ({ hasLegalTermsFlash: ec, legalTermsNodeRef: eC }), [ec, eC]),
        ex = r.useMemo(
            () => ({
                handleClose: Y,
                openInvoiceId: O,
                trialFooterMessageOverride: L,
                reviewWarningMessage: j,
                referralTrialOfferId: U,
            }),
            [Y, O, L, j, U],
        ),
        eR = r.useMemo(
            () => t(ex, { isUnifiedCheckoutUIEnabled: F, handlePaymentSourceAdd: ev }, eg),
            [t, ex, ev, F, eg],
        ),
        eM = (0, l.jsx)(h.A, {
            premiumSubscription: z ?? null,
            invoiceError: eE,
            onBack: eT,
            onNext: eA,
            legalTermsNodeRef: eC,
            flashLegalTerms: () => ed(!0),
            analyticsLocation: D,
            baseAnalyticsData: w,
            openInvoiceId: O,
            flowStartTime: V.startTime,
            isTrial: et,
            backButtonEligible: eI,
            metadata: eh,
            disablePurchase: eN,
            onPaymentSourceAdd: ev,
            ...n,
        }),
        eb = r.useMemo(
            () =>
                F
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.Z, { giftMessage: ea }),
                              !ey && (0, l.jsx)(m.A, { isEligibleForTrial: et }),
                          ],
                      }),
            [ea, ey, et, F],
        ),
        eL = r.useMemo(
            () =>
                F
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(y.A, {}), (0, l.jsx)(P.A, {})],
                      }),
            [F],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eb, (0, l.jsxs)(A.dZ, { children: [eL, eR] }), (0, l.jsx)(A.UX, { children: eM })],
    });
}
var j = n(655857),
    O = n(271849),
    w = n(427858),
    D = n(428262),
    U = n(367160),
    k = n(194256),
    G = n(788868);
let Y = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            handleClose: i,
            effectivePlanGroup: s,
            hasLegalTermsFlash: o,
            legalTermsNodeRef: u,
            handlePaymentSourceAdd: p,
            trialFooterMessageOverride: m,
            reviewWarningMessage: h,
            referralTrialOfferId: A,
            verifiedTrialId: C,
            originalTrialId: E,
        } = e,
        y = (0, R.A)(),
        {
            selectedPlanId: P,
            selectedSkuId: S,
            purchaseState: _,
            setHasAcceptedTerms: I,
        } = (0, M.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: f } = (0, c.Pv)(),
        { paymentSources: T } = (0, v.jm)(),
        { unifiedCheckoutFlow: N, activeSubscription: x } = (0, d.P5)(),
        { discountOffer: b, isEligibleForDiscount: L, isEligibleForTrial: D } = (0, g.i)(),
        { dropdownCurrencies: k, hasFetchedRelatedSubscriptionPlans: G, setCheckoutCurrency: Y } = (0, j.Jn)(),
        F = r.useCallback((e) => Y(e), [Y]);
    a()(null != y, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", N, P, G, S);
    let B = r.useMemo(() => {
            let e = b?.discount?.planIds;
            return L && null != b && null != e && null != y && e.includes(y.id);
        }, [L, b, y]),
        W = r.useMemo(() => D || (null != E && null != m), [D, E, m]),
        H = {
            paymentSources: T,
            handlePaymentSourceAdd: p,
            planGroup: s,
            setHasAcceptedTerms: I,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        V = y.id;
    if (null == x || f) {
        let e = {
            ...H,
            selectedPlanId: V,
            trialId: C,
            trialFooterMessageOverride: m,
            reviewWarningMessage: h,
            referralTrialOfferId: A,
            isTrial: W,
            isDiscount: B,
        };
        return t ? (0, l.jsx)(U._, { ...e }) : (0, l.jsx)(O.A, { ...e });
    }
    {
        let e = {
            ...H,
            currencies: k,
            onCurrencyChange: F,
            purchaseState: _,
            premiumSubscription: x,
            planId: V,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(w.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function F(e) {
    let { selectedSkuId: t, isPremium: n } = (0, M.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
        })),
        { verifiedTrialId: i, originalTrialId: a } = r.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: r } = e,
                        i = t ?? n ?? null;
                    return {
                        verifiedTrialId: null != i && (!l || G.TP[i].skus.includes(r)) ? i : null,
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
        s = (0, R.A)(),
        o = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != s) {
                if ((0, D.xq)(s.id)) return G.LE;
                if ((0, D.z4)(s.id)) return G.DA;
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
let B = (e, t, n) => {
    let { handlePaymentSourceAdd: r } = t;
    return (0, l.jsx)(k.Ay, { handlePaymentSourceAdd: r, ...n });
};
function W(e) {
    return (0, l.jsx)(L, { renderStepBody: B, ...e });
}
function H(e) {
    let { purchaseType: t } = (0, d.P5)();
    return t === b.VV.SUBSCRIPTION ? (0, l.jsx)(F, { ...e }) : (0, l.jsx)(W, { ...e });
}
