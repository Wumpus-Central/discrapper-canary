n.d(t, { _M: () => V });
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(331322),
    o = n(304072),
    u = n(606267),
    c = n(937008),
    d = n(834252),
    p = n(166532),
    m = n(69494),
    h = n(871084),
    C = n(482132),
    A = n(615310),
    y = n(50956),
    E = n(921925),
    P = n(506120),
    S = n(800471),
    _ = n(216641),
    f = n(380619),
    T = n(45938),
    I = n(742810),
    x = n(364995),
    N = n(426398),
    g = n(463376),
    v = n(666646),
    M = n(558620),
    b = n(722847),
    j = n(818348);
function R(e) {
    let {
            renderStepBody: t,
            customFooterProps: n,
            handleStepChange: a,
            trialFooterMessageOverride: R,
            reviewWarningMessage: L,
            openInvoiceId: O,
            analyticsData: D,
            analyticsLocation: w,
            referralTrialOfferId: U,
            initialPlanId: k,
            subscriptionTier: G,
            handleClose: Y,
        } = e,
        F = (0, I.D7)({ location: "payment_modal_review_step" }),
        {
            selectedSkuId: B,
            setEntitlementsGranted: W,
            setAppliedUserDiscounts: V,
            contextMetadata: H,
            setUpdatedSubscription: K,
            purchaseError: Z,
            setCheckoutCurrency: q,
        } = (0, b.t4)((e) => ({
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
            purchaseType: J,
            startedPaymentFlowWithPaymentSourcesRef: $,
            disablePurchasesForStorybook: X,
        } = (0, d.P5)(),
        { isPremium: Q, isPremiumGroupPurchase: ee, isEligibleForTrial: et, userTrialOffer: en } = (0, g.i)(),
        el = (0, M.A)(),
        ei = (0, A.bB)(),
        { isGift: ea, giftMessage: er, giftRecipient: es, claimableRewards: eo } = (0, c.Pv)();
    r()(null != ei, "Step should be set");
    let eu = i.useRef(null),
        [ec, ed] = (0, o.A)(!1, 500),
        { disablePurchase: ep } = (function () {
            let { paymentSourceId: e } = (0, b.t4)((e) => ({ paymentSourceId: e.paymentSourceId })),
                { paymentSources: t } = (0, N.jm)(),
                { purchasePreviewError: n, purchaseType: l } = (0, d.P5)(),
                { isEligibleForTrial: a } = (0, g.i)(),
                { checkoutPaymentSources: r, hasInvoiceOrderContextLoaded: s } = (0, x.t)(),
                o = (0, v.sw)(),
                { isGift: p } = (0, c.Pv)(),
                m = (0, _.W)(t, e),
                h = i.useMemo(() => {
                    if (null == e) return !1;
                    if (!s) return !0;
                    let t = r.find((t) => t.id === e);
                    return null != t && !t.enabled;
                }, [r, s, e]),
                C = (0, u.iB)({ checkoutPaymentSources: r, paymentSourceId: e, location: "PaymentModalReviewStep" }),
                A = i.useMemo(
                    () =>
                        !!C ||
                        (l === j.VV.ONE_TIME
                            ? null == e || h || null == o || null != n
                            : null == o || (!p && null != m && l === j.VV.SUBSCRIPTION && a && !m.canRedeemTrial())),
                    [C, l, o, e, n, p, m, a, h],
                );
            return { paymentSource: m, disablePurchase: A };
        })(),
        em = null != en ? en.id : void 0,
        eh = i.useMemo(() => ({ user_trial_offer_id: em }), [em]);
    i.useEffect(() => {
        null != Z && null != eu.current && eu.current.scrollIntoView({ behavior: "smooth" });
    }, [Z]);
    let eC = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                K(l),
                    null != t && W(t),
                    null != n && V(n),
                    a(p.pn.CONFIRM, { fulfillment: { subscription: l, entitlements: t } });
            },
            [a, K, W, V],
        ),
        eA = i.useRef(null),
        ey = (0, v.mx)(),
        eE = ea && (0, T.Ik)(es),
        eP = null == k && null == G && J === j.VV.SUBSCRIPTION,
        eS = (0, S.vT)({ isTrial: et, isGift: ea, selectedSkuId: B, startedPaymentFlowWithPaymentSources: $.current }),
        e_ = ea && J === j.VV.ONE_TIME,
        ef = e_ || (eS ? eP && Q : Q),
        eT = (0, f.px)(el, ea, eo),
        eI = i.useCallback(
            () =>
                (q(void 0), eS)
                    ? void a(p.pn.SKU_SELECT)
                    : ee
                      ? void a(p.pn.ADD_PAYMENT_STEPS)
                      : eT
                        ? void a(p.pn.SELECT_FREE_SKU)
                        : e_
                          ? a(p.pn.GIFT_CUSTOMIZATION)
                          : a(p.pn.PLAN_SELECT),
            [q, a, eS, e_, eT, ee],
        ),
        ex = ep;
    X && (ex = !0);
    let eN = i.useCallback(() => {
            a(p.pn.ADD_PAYMENT_STEPS);
        }, [a]),
        eg = i.useMemo(() => ({ hasLegalTermsFlash: ec, legalTermsNodeRef: eA }), [ec, eA]),
        ev = i.useMemo(
            () => ({
                handleClose: Y,
                openInvoiceId: O,
                trialFooterMessageOverride: R,
                reviewWarningMessage: L,
                referralTrialOfferId: U,
            }),
            [Y, O, R, L, U],
        ),
        eM = i.useMemo(
            () => t(ev, { isUnifiedCheckoutUIEnabled: F, handlePaymentSourceAdd: eN }, eg),
            [t, ev, eN, F, eg],
        ),
        eb = (0, l.jsx)(h.A, {
            premiumSubscription: z ?? null,
            invoiceError: ey,
            onBack: eI,
            onNext: eC,
            legalTermsNodeRef: eA,
            flashLegalTerms: () => ed(!0),
            analyticsLocation: w,
            baseAnalyticsData: D,
            openInvoiceId: O,
            flowStartTime: H.startTime,
            isTrial: et,
            backButtonEligible: ef,
            metadata: eh,
            disablePurchase: ex,
            onPaymentSourceAdd: eN,
            ...n,
        }),
        ej = i.useMemo(
            () =>
                F
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(y.Z, { giftMessage: er }),
                              !eE && (0, l.jsx)(m.A, { isEligibleForTrial: et }),
                          ],
                      }),
            [er, eE, et, F],
        ),
        eR = i.useMemo(
            () =>
                F
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(E.A, {}), (0, l.jsx)(P.A, {})],
                      }),
            [F],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [ej, (0, l.jsxs)(C.dZ, { children: [eR, eM] }), (0, l.jsx)(C.UX, { children: eb })],
    });
}
var L = n(655857),
    O = n(209030),
    D = n(427858),
    w = n(428262),
    U = n(367160),
    k = n(194256),
    G = n(788868);
let Y = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            handleClose: a,
            effectivePlanGroup: s,
            hasLegalTermsFlash: o,
            legalTermsNodeRef: u,
            handlePaymentSourceAdd: p,
            trialFooterMessageOverride: m,
            reviewWarningMessage: h,
            referralTrialOfferId: C,
            verifiedTrialId: A,
            originalTrialId: y,
        } = e,
        E = (0, M.A)(),
        {
            selectedPlanId: P,
            selectedSkuId: S,
            purchaseState: _,
            setHasAcceptedTerms: f,
        } = (0, b.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: T } = (0, c.Pv)(),
        { paymentSources: I } = (0, N.jm)(),
        { unifiedCheckoutFlow: x, activeSubscription: v } = (0, d.P5)(),
        { discountOffer: j, isEligibleForDiscount: R, isEligibleForTrial: w } = (0, g.i)(),
        { dropdownCurrencies: k, hasFetchedRelatedSubscriptionPlans: G, setCheckoutCurrency: Y } = (0, L.Jn)(),
        F = i.useCallback((e) => Y(e), [Y]);
    r()(null != E, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", x, P, G, S);
    let B = i.useMemo(() => {
            let e = j?.discount?.planIds;
            return R && null != j && null != e && null != E && e.includes(E.id);
        }, [R, j, E]),
        W = i.useMemo(() => w || (null != y && null != m), [w, y, m]),
        V = {
            paymentSources: I,
            handlePaymentSourceAdd: p,
            planGroup: s,
            setHasAcceptedTerms: f,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: a,
        },
        H = E.id;
    if (null == v || T) {
        let e = {
            ...V,
            selectedPlanId: H,
            trialId: A,
            trialFooterMessageOverride: m,
            reviewWarningMessage: h,
            referralTrialOfferId: C,
            isTrial: W,
            isDiscount: B,
        };
        return t ? (0, l.jsx)(U._, { ...e }) : (0, l.jsx)(O.A, { ...e });
    }
    {
        let e = {
            ...V,
            currencies: k,
            onCurrencyChange: F,
            purchaseState: _,
            premiumSubscription: v,
            planId: H,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(D.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function F(e) {
    let { selectedSkuId: t, isPremium: n } = (0, b.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.getSelectedPlanAttributes().isPremium,
        })),
        { verifiedTrialId: a, originalTrialId: r } = i.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                        a = t ?? n ?? null;
                    return {
                        verifiedTrialId: null != a && (!l || G.TP[a].skus.includes(i)) ? a : null,
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
        s = (0, M.A)(),
        o = i.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != s) {
                if ((0, w.xq)(s.id)) return G.LE;
                if ((0, w.z4)(s.id)) return G.DA;
            }
            return [];
        }, [s, e.planGroup]),
        u = i.useMemo(() => ({ effectivePlanGroup: o, verifiedTrialId: a, originalTrialId: r }), [o, a, r]),
        c = i.useMemo(() => ({ trialId: a, planGroup: o }), [a, o]),
        d = i.useCallback(
            (e, t, n) =>
                ((e, t, n, i) => {
                    let { isUnifiedCheckoutUIEnabled: a, handlePaymentSourceAdd: r } = t,
                        {
                            handleClose: s,
                            openInvoiceId: o,
                            trialFooterMessageOverride: u,
                            reviewWarningMessage: c,
                            referralTrialOfferId: d,
                        } = e,
                        { effectivePlanGroup: p, verifiedTrialId: m, originalTrialId: h } = i;
                    return (0, l.jsx)(Y, {
                        isUnifiedCheckoutUIEnabled: a,
                        handlePaymentSourceAdd: r,
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
    return (0, l.jsx)(R, { renderStepBody: d, customFooterProps: c, ...e });
}
let B = (e, t, n) => {
    let { handlePaymentSourceAdd: i } = t;
    return (0, l.jsx)(k.Ay, { handlePaymentSourceAdd: i, ...n });
};
function W(e) {
    return (0, l.jsx)(R, { renderStepBody: B, ...e });
}
function V(e) {
    let { purchaseType: t } = (0, d.P5)();
    return t === j.VV.SUBSCRIPTION ? (0, l.jsx)(F, { ...e }) : (0, l.jsx)(W, { ...e });
}
