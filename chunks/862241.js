n.d(t, { _M: () => V });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(331322),
    o = n(304072),
    u = n(606267),
    c = n(937008),
    d = n(536302),
    p = n(166532),
    m = n(69494),
    h = n(871084),
    C = n(482132),
    A = n(615310),
    E = n(50956),
    y = n(921925),
    P = n(506120),
    S = n(800471),
    f = n(216641),
    _ = n(380619),
    T = n(45938),
    I = n(742810),
    N = n(364995),
    x = n(426398),
    g = n(463376),
    v = n(666646),
    M = n(558620),
    R = n(722847),
    b = n(818348);
function j(e) {
    let {
            renderStepBody: t,
            customFooterProps: n,
            handleStepChange: i,
            trialFooterMessageOverride: j,
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
        } = (0, R.t4)((e) => ({
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
        el = (0, M.A)(),
        er = (0, A.bB)(),
        { isGift: ei, giftMessage: ea, giftRecipient: es, claimableRewards: eo } = (0, c.Pv)();
    a()(null != er, "Step should be set");
    let eu = r.useRef(null),
        [ec, ed] = (0, o.A)(!1, 500),
        { disablePurchase: ep } = (function () {
            let { paymentSourceId: e } = (0, R.t4)((e) => ({ paymentSourceId: e.paymentSourceId })),
                { paymentSources: t } = (0, x.jm)(),
                { purchasePreviewError: n, purchaseType: l } = (0, d.P5)(),
                { isEligibleForTrial: i } = (0, g.i)(),
                { checkoutPaymentSources: a, hasInvoiceOrderContextLoaded: s } = (0, N.t)(),
                o = (0, v.sw)(),
                { isGift: p } = (0, c.Pv)(),
                m = (0, f.W)(t, e),
                h = r.useMemo(() => {
                    if (null == e) return !1;
                    if (!s) return !0;
                    let t = a.find((t) => t.id === e);
                    return null != t && !t.enabled;
                }, [a, s, e]),
                C = (0, u.iB)({ checkoutPaymentSources: a, paymentSourceId: e, location: "PaymentModalReviewStep" }),
                A = r.useMemo(
                    () =>
                        !!C ||
                        (l === b.VV.ONE_TIME
                            ? null == e || h || null == o || null != n
                            : null == o || (!p && null != m && l === b.VV.SUBSCRIPTION && i && !m.canRedeemTrial())),
                    [C, l, o, e, n, p, m, i, h],
                );
            return { paymentSource: m, disablePurchase: A };
        })(),
        em = null != en ? en.id : void 0,
        eh = r.useMemo(() => ({ user_trial_offer_id: em }), [em]);
    r.useEffect(() => {
        null != Z && null != eu.current && eu.current.scrollIntoView({ behavior: "smooth" });
    }, [Z]);
    let eC = r.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                K(l),
                    null != t && W(t),
                    null != n && V(n),
                    i(p.pn.CONFIRM, { fulfillment: { subscription: l, entitlements: t } });
            },
            [i, K, W, V],
        ),
        eA = r.useRef(null),
        eE = (0, v.mx)(),
        ey = ei && (0, T.Ik)(es),
        eP = null == k && null == G && $ === b.VV.SUBSCRIPTION,
        eS = (0, S.vT)({ isTrial: et, isGift: ei, selectedSkuId: B, startedPaymentFlowWithPaymentSources: J.current }),
        ef = ei && $ === b.VV.ONE_TIME,
        e_ = ef || (eS ? eP && Q : Q),
        eT = (0, _.px)(el, ei, eo),
        eI = r.useCallback(
            () =>
                (q(void 0), eS)
                    ? void i(p.pn.SKU_SELECT)
                    : ee
                      ? void i(p.pn.ADD_PAYMENT_STEPS)
                      : eT
                        ? void i(p.pn.SELECT_FREE_SKU)
                        : ef
                          ? i(p.pn.GIFT_CUSTOMIZATION)
                          : i(p.pn.PLAN_SELECT),
            [q, i, eS, ef, eT, ee],
        ),
        eN = ep;
    X && (eN = !0);
    let ex = r.useCallback(() => {
            i(p.pn.ADD_PAYMENT_STEPS);
        }, [i]),
        eg = r.useMemo(() => ({ hasLegalTermsFlash: ec, legalTermsNodeRef: eA }), [ec, eA]),
        ev = r.useMemo(
            () => ({
                handleClose: Y,
                openInvoiceId: O,
                trialFooterMessageOverride: j,
                reviewWarningMessage: L,
                referralTrialOfferId: U,
            }),
            [Y, O, j, L, U],
        ),
        eM = r.useMemo(
            () => t(ev, { isUnifiedCheckoutUIEnabled: F, handlePaymentSourceAdd: ex }, eg),
            [t, ev, ex, F, eg],
        ),
        eR = (0, l.jsx)(h.A, {
            premiumSubscription: z ?? null,
            invoiceError: eE,
            onBack: eI,
            onNext: eC,
            legalTermsNodeRef: eA,
            flashLegalTerms: () => ed(!0),
            analyticsLocation: w,
            baseAnalyticsData: D,
            openInvoiceId: O,
            flowStartTime: H.startTime,
            isTrial: et,
            backButtonEligible: e_,
            metadata: eh,
            disablePurchase: eN,
            onPaymentSourceAdd: ex,
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
        ej = r.useMemo(
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
        children: [eb, (0, l.jsxs)(C.dZ, { children: [ej, eM] }), (0, l.jsx)(C.UX, { children: eR })],
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
            handleClose: i,
            effectivePlanGroup: s,
            hasLegalTermsFlash: o,
            legalTermsNodeRef: u,
            handlePaymentSourceAdd: p,
            trialFooterMessageOverride: m,
            reviewWarningMessage: h,
            referralTrialOfferId: C,
            verifiedTrialId: A,
            originalTrialId: E,
        } = e,
        y = (0, M.A)(),
        {
            selectedPlanId: P,
            selectedSkuId: S,
            purchaseState: f,
            setHasAcceptedTerms: _,
        } = (0, R.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: T } = (0, c.Pv)(),
        { paymentSources: I } = (0, x.jm)(),
        { unifiedCheckoutFlow: N, activeSubscription: v } = (0, d.P5)(),
        { discountOffer: b, isEligibleForDiscount: j, isEligibleForTrial: w } = (0, g.i)(),
        { dropdownCurrencies: k, hasFetchedRelatedSubscriptionPlans: G, setCheckoutCurrency: Y } = (0, L.Jn)(),
        F = r.useCallback((e) => Y(e), [Y]);
    a()(null != y, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", N, P, G, S);
    let B = r.useMemo(() => {
            let e = b?.discount?.planIds;
            return j && null != b && null != e && null != y && e.includes(y.id);
        }, [j, b, y]),
        W = r.useMemo(() => w || (null != E && null != m), [w, E, m]),
        V = {
            paymentSources: I,
            handlePaymentSourceAdd: p,
            planGroup: s,
            setHasAcceptedTerms: _,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        H = y.id;
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
            purchaseState: f,
            premiumSubscription: v,
            planId: H,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(D.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function F(e) {
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
        s = (0, M.A)(),
        o = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != s) {
                if ((0, w.xq)(s.id)) return G.LE;
                if ((0, w.z4)(s.id)) return G.DA;
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
    return (0, l.jsx)(j, { renderStepBody: d, customFooterProps: c, ...e });
}
let B = (e, t, n) => {
    let { handlePaymentSourceAdd: r } = t;
    return (0, l.jsx)(k.Ay, { handlePaymentSourceAdd: r, ...n });
};
function W(e) {
    return (0, l.jsx)(j, { renderStepBody: B, ...e });
}
function V(e) {
    let { purchaseType: t } = (0, d.P5)();
    return t === b.VV.SUBSCRIPTION ? (0, l.jsx)(F, { ...e }) : (0, l.jsx)(W, { ...e });
}
