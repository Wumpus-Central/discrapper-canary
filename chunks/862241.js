n.d(t, { _M: () => F });
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(331322),
    o = n(304072),
    u = n(606267),
    c = n(937008),
    d = n(49960),
    p = n(166532),
    m = n(69494),
    h = n(871084),
    C = n(482132),
    A = n(615310),
    E = n(50956),
    y = n(921925),
    P = n(506120),
    S = n(800471),
    _ = n(216641),
    T = n(380619),
    f = n(45938),
    x = n(742810),
    N = n(364995),
    I = n(666646),
    g = n(558620),
    v = n(94420),
    M = n(818348);
function j(e) {
    let {
            renderStepBody: t,
            customFooterProps: n,
            handleStepChange: i,
            trialFooterMessageOverride: j,
            reviewWarningMessage: b,
            openInvoiceId: R,
            analyticsData: L,
            analyticsLocation: O,
            referralTrialOfferId: D,
            initialPlanId: w,
            subscriptionTier: U,
            handleClose: k,
        } = e,
        Y = (0, x.D7)({ location: "payment_modal_review_step" }),
        {
            selectedSkuId: G,
            setEntitlementsGranted: F,
            setAppliedUserDiscounts: B,
            contextMetadata: W,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            contextMetadata: e.contextMetadata,
        })),
        {
            activeSubscription: V,
            setUpdatedSubscription: H,
            purchaseError: K,
            setCurrency: Z,
            isPremium: q,
            purchaseType: z,
            startedPaymentFlowWithPaymentSourcesRef: $,
            disablePurchasesForStorybook: J,
            isPremiumGroupPurchase: X,
            isEligibleForTrial: Q,
            userTrialOffer: ee,
        } = (0, d.P5)(),
        et = (0, g.A)(),
        en = (0, A.bB)(),
        { isGift: el, giftMessage: ea, giftRecipient: ei, claimableRewards: er } = (0, c.Pv)();
    r()(null != en, "Step should be set");
    let es = a.useRef(null),
        [eo, eu] = (0, o.A)(!1, 500),
        { disablePurchase: ec } = (function () {
            let {
                    paymentSourceId: e,
                    paymentSources: t,
                    purchasePreviewError: n,
                    purchaseType: l,
                    isEligibleForTrial: i,
                } = (0, d.P5)(),
                { checkoutPaymentSources: r, hasInvoiceOrderContextLoaded: s } = (0, N.t)(),
                o = (0, I.sw)(),
                { isGift: p } = (0, c.Pv)(),
                m = (0, _.W)(t, e),
                h = a.useMemo(() => {
                    if (null == e) return !1;
                    if (!s) return !0;
                    let t = r.find((t) => t.id === e);
                    return null != t && !t.enabled;
                }, [r, s, e]),
                C = (0, u.iB)({ checkoutPaymentSources: r, paymentSourceId: e, location: "PaymentModalReviewStep" }),
                A = a.useMemo(
                    () =>
                        !!C ||
                        (l === M.VV.ONE_TIME
                            ? null == e || h || null == o || null != n
                            : null == o || (!p && null != m && l === M.VV.SUBSCRIPTION && i && !m.canRedeemTrial())),
                    [C, l, o, e, n, p, m, i, h],
                );
            return { paymentSource: m, disablePurchase: A };
        })(),
        ed = null != ee ? ee.id : void 0,
        ep = a.useMemo(() => ({ user_trial_offer_id: ed }), [ed]);
    a.useEffect(() => {
        null != K && null != es.current && es.current.scrollIntoView({ behavior: "smooth" });
    }, [K]);
    let em = a.useCallback(
            (e, t, n) => {
                H(e),
                    null != t && F(t),
                    null != n && B(n),
                    i(p.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [i, H, F, B],
        ),
        eh = a.useRef(null),
        eC = (0, I.mx)(),
        eA = el && (0, f.Ik)(ei),
        eE = null == w && null == U && z === M.VV.SUBSCRIPTION,
        ey = (0, S.vT)({ isTrial: Q, isGift: el, selectedSkuId: G, startedPaymentFlowWithPaymentSources: $.current }),
        eP = el && z === M.VV.ONE_TIME,
        eS = eP || (ey ? eE && q : q),
        e_ = (0, T.px)(et, el, er),
        eT = a.useCallback(
            () =>
                (Z(void 0), ey)
                    ? void i(p.pn.SKU_SELECT)
                    : X
                      ? void i(p.pn.ADD_PAYMENT_STEPS)
                      : e_
                        ? void i(p.pn.SELECT_FREE_SKU)
                        : eP
                          ? i(p.pn.GIFT_CUSTOMIZATION)
                          : i(p.pn.PLAN_SELECT),
            [Z, i, ey, eP, e_, X],
        ),
        ef = ec;
    J && (ef = !0);
    let ex = a.useCallback(() => {
            i(p.pn.ADD_PAYMENT_STEPS);
        }, [i]),
        eN = a.useMemo(() => ({ hasLegalTermsFlash: eo, legalTermsNodeRef: eh }), [eo, eh]),
        eI = a.useMemo(
            () => ({
                handleClose: k,
                openInvoiceId: R,
                trialFooterMessageOverride: j,
                reviewWarningMessage: b,
                referralTrialOfferId: D,
            }),
            [k, R, j, b, D],
        ),
        eg = a.useMemo(
            () => t(eI, { isUnifiedCheckoutUIEnabled: Y, handlePaymentSourceAdd: ex }, eN),
            [t, eI, ex, Y, eN],
        ),
        ev = (0, l.jsx)(h.A, {
            premiumSubscription: V ?? null,
            invoiceError: eC,
            onBack: eT,
            onNext: em,
            legalTermsNodeRef: eh,
            flashLegalTerms: () => eu(!0),
            analyticsLocation: O,
            baseAnalyticsData: L,
            openInvoiceId: R,
            flowStartTime: W.startTime,
            isTrial: Q,
            backButtonEligible: eS,
            metadata: ep,
            disablePurchase: ef,
            onPaymentSourceAdd: ex,
            ...n,
        }),
        eM = a.useMemo(
            () =>
                Y
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.Z, { giftMessage: ea }),
                              !eA && (0, l.jsx)(m.A, { isEligibleForTrial: Q }),
                          ],
                      }),
            [ea, eA, Q, Y],
        ),
        ej = a.useMemo(
            () =>
                Y
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(y.A, {}), (0, l.jsx)(P.A, {})],
                      }),
            [Y],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eM, (0, l.jsxs)(C.dZ, { children: [ej, eg] }), (0, l.jsx)(C.UX, { children: ev })],
    });
}
var b = n(209030),
    R = n(427858),
    L = n(927578),
    O = n(367160),
    D = n(194256),
    w = n(788868);
let U = (e) => {
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
        y = (0, g.A)(),
        {
            selectedPlanId: P,
            selectedSkuId: S,
            purchaseState: _,
            setHasAcceptedTerms: T,
        } = (0, v.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: f } = (0, c.Pv)(),
        {
            hasFetchedSubscriptionPlans: x,
            unifiedCheckoutFlow: N,
            activeSubscription: I,
            currencies: M,
            paymentSources: j,
            priceOptions: L,
            discountOffer: D,
            isEligibleForDiscount: w,
            isEligibleForTrial: U,
            setCurrency: k,
        } = (0, d.P5)(),
        Y = a.useCallback((e) => k(e), [k]);
    r()(null != y, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", N, P, x, S);
    let G = a.useMemo(() => {
            let e = D?.discount?.plan_ids;
            return w && null != D && null != e && null != y && e.includes(y.id);
        }, [w, D, y]),
        F = a.useMemo(() => U || (null != E && null != m), [U, E, m]),
        B = {
            paymentSources: j,
            handlePaymentSourceAdd: p,
            priceOptions: L,
            planGroup: s,
            currencies: M,
            onCurrencyChange: Y,
            setHasAcceptedTerms: T,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        W = y.id;
    if (null == I || f) {
        let e = {
            ...B,
            selectedPlanId: W,
            trialId: A,
            trialFooterMessageOverride: m,
            reviewWarningMessage: h,
            referralTrialOfferId: C,
            isTrial: F,
            isDiscount: G,
        };
        return t ? (0, l.jsx)(O._, { ...e }) : (0, l.jsx)(b.A, { ...e });
    }
    {
        let e = { ...B, purchaseState: _, premiumSubscription: I, planId: W, hasOpenInvoice: null != n };
        return (0, l.jsx)(R.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function k(e) {
    let { selectedSkuId: t } = (0, v.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        { isPremium: n } = (0, d.P5)(),
        { verifiedTrialId: i, originalTrialId: r } = a.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                        i = t ?? n ?? null;
                    return {
                        verifiedTrialId: null != i && (!l || w.TP[i].skus.includes(a)) ? i : null,
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
        s = (0, g.A)(),
        o = a.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != s) {
                if ((0, L.xq)(s.id)) return w.LE;
                if ((0, L.z4)(s.id)) return w.DA;
            }
            return [];
        }, [s, e.planGroup]),
        u = a.useMemo(() => ({ effectivePlanGroup: o, verifiedTrialId: i, originalTrialId: r }), [o, i, r]),
        c = a.useMemo(() => ({ trialId: i, planGroup: o }), [i, o]),
        p = a.useCallback(
            (e, t, n) =>
                ((e, t, n, a) => {
                    let { isUnifiedCheckoutUIEnabled: i, handlePaymentSourceAdd: r } = t,
                        {
                            handleClose: s,
                            openInvoiceId: o,
                            trialFooterMessageOverride: u,
                            reviewWarningMessage: c,
                            referralTrialOfferId: d,
                        } = e,
                        { effectivePlanGroup: p, verifiedTrialId: m, originalTrialId: h } = a;
                    return (0, l.jsx)(U, {
                        isUnifiedCheckoutUIEnabled: i,
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
    return (0, l.jsx)(j, { renderStepBody: p, customFooterProps: c, ...e });
}
let Y = (e, t, n) => {
    let { handlePaymentSourceAdd: a } = t;
    return (0, l.jsx)(D.Ay, { handlePaymentSourceAdd: a, ...n });
};
function G(e) {
    return (0, l.jsx)(j, { renderStepBody: Y, ...e });
}
function F(e) {
    let { purchaseType: t } = (0, d.P5)();
    return t === M.VV.SUBSCRIPTION ? (0, l.jsx)(k, { ...e }) : (0, l.jsx)(G, { ...e });
}
