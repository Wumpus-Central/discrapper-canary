n.d(t, { _M: () => U });
var l = n(627968),
    r = n(64700),
    a = n(284009),
    i = n.n(a),
    s = n(304072),
    o = n(606267),
    u = n(937008),
    c = n(166532),
    d = n(871084),
    p = n(482132),
    m = n(615310),
    A = n(800471),
    h = n(216641),
    E = n(380619),
    C = n(364995),
    y = n(426398),
    _ = n(463376),
    P = n(666646),
    S = n(558620),
    I = n(211159),
    T = n(26279),
    f = n(818348);
function N(e) {
    let {
            renderStepBody: t,
            customFooterProps: n,
            handleStepChange: a,
            reviewWarningMessage: N,
            openInvoiceId: v,
            analyticsData: g,
            analyticsLocation: x,
            referralTrialOfferId: R,
            initialPlanId: M,
            subscriptionTier: b,
            handleClose: L,
        } = e,
        {
            activeSubscription: O,
            purchaseType: j,
            customCheckoutFlow: w,
            selectedSkuId: D,
            setEntitlementsGranted: U,
            setAppliedUserDiscounts: k,
            contextMetadata: G,
            setUpdatedSubscription: F,
            purchaseError: Y,
            setCheckoutCurrency: B,
            startedPaymentFlowWithPaymentSources: W,
        } = (0, I.t4)((e) => ({
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
        { isPremium: H, isPremiumGroupPurchase: V, isEligibleForTrial: K, userTrialOffer: Z } = (0, _.i)(),
        q = (0, S.A)(),
        z = (0, m.bB)(),
        { isGift: J, claimableRewards: $ } = (0, u.Pv)();
    i()(null != z, "Step should be set");
    let X = r.useRef(null),
        [Q, ee] = (0, s.A)(!1, 500),
        { disablePurchase: et } = (function () {
            let {
                    paymentSourceId: e,
                    purchasePreviewError: t,
                    purchaseType: n,
                } = (0, I.t4)((e) => ({
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { paymentSources: l } = (0, y.jm)(),
                { isEligibleForTrial: a } = (0, _.i)(),
                { checkoutPaymentSources: i, hasInvoiceOrderContextLoaded: s } = (0, C.t)(),
                c = (0, P.sw)(),
                { isGift: d } = (0, u.Pv)(),
                p = (0, h.W)(l, e),
                m = r.useMemo(() => {
                    if (null == e) return !1;
                    if (!s) return !0;
                    let t = i.find((t) => t.id === e);
                    return null != t && !t.enabled;
                }, [i, s, e]),
                A = (0, o.iB)({ checkoutPaymentSources: i, paymentSourceId: e, location: "PaymentModalReviewStep" }),
                E = r.useMemo(
                    () =>
                        !!A ||
                        (n === f.VV.ONE_TIME
                            ? null == e || m || null == c || null != t
                            : null == c || (!d && null != p && a && !p.canRedeemTrial())),
                    [A, n, c, e, t, d, p, a, m],
                );
            return { paymentSource: p, disablePurchase: E };
        })(),
        en = null != Z ? Z.id : void 0,
        el = r.useMemo(() => ({ user_trial_offer_id: en }), [en]);
    r.useEffect(() => {
        null != Y && null != X.current && X.current.scrollIntoView({ behavior: "smooth" });
    }, [Y]);
    let er = r.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                F(l),
                    null != t && U(t),
                    null != n && k(n),
                    a(c.pn.CONFIRM, { fulfillment: { subscription: l, entitlements: t } });
            },
            [a, F, U, k],
        ),
        ea = r.useRef(null),
        ei = (0, P.mx)(),
        es = null == M && null == b && j === f.VV.SUBSCRIPTION,
        eo = (0, A.vT)({ isTrial: K, isGift: J, selectedSkuId: D, startedPaymentFlowWithPaymentSources: W }),
        eu = J && j === f.VV.ONE_TIME,
        ec = eu || (eo ? es && H : H),
        ed = (0, E.px)(q, J, $),
        ep = r.useCallback(
            () =>
                (B(void 0), eo)
                    ? void a(c.pn.SKU_SELECT)
                    : V
                      ? void a(c.pn.ADD_PAYMENT_STEPS)
                      : ed
                        ? void a(c.pn.SELECT_FREE_SKU)
                        : eu
                          ? a(c.pn.GIFT_CUSTOMIZATION)
                          : a(c.pn.PLAN_SELECT),
            [B, a, eo, eu, ed, V],
        ),
        em = et;
    w === T.uH.DEV_STORYBOOK_CHECKOUT && (em = !0);
    let eA = r.useCallback(() => {
            a(c.pn.ADD_PAYMENT_STEPS);
        }, [a]),
        eh = r.useMemo(() => ({ hasLegalTermsFlash: Q, legalTermsNodeRef: ea }), [Q, ea]),
        eE = r.useMemo(
            () => ({ handleClose: L, openInvoiceId: v, reviewWarningMessage: N, referralTrialOfferId: R }),
            [L, v, N, R],
        ),
        eC = r.useMemo(() => t(eE, { handlePaymentSourceAdd: eA }, eh), [t, eE, eA, eh]),
        ey = (0, l.jsx)(d.A, {
            premiumSubscription: O ?? null,
            invoiceError: ei,
            onBack: ep,
            onNext: er,
            legalTermsNodeRef: ea,
            flashLegalTerms: () => ee(!0),
            analyticsLocation: x,
            baseAnalyticsData: g,
            openInvoiceId: v,
            flowStartTime: G.startTime,
            isTrial: K,
            backButtonEligible: ec,
            metadata: el,
            disablePurchase: em,
            onPaymentSourceAdd: eA,
            ...n,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.dZ, { children: eC }), (0, l.jsx)(p.UX, { children: ey })],
    });
}
var v = n(71804),
    g = n(655857),
    x = n(427858),
    R = n(428262),
    M = n(953761),
    b = n(194256),
    L = n(788868);
let O = (e) => {
    let {
            openInvoiceId: t,
            effectivePlanGroup: n,
            handlePaymentSourceAdd: a,
            reviewWarningMessage: i,
            referralTrialOfferId: s,
            verifiedTrialId: o,
        } = e,
        c = (0, S.A)(),
        {
            selectedPlanId: d,
            selectedSkuId: p,
            purchaseState: m,
            unifiedCheckoutFlow: A,
            activeSubscription: h,
        } = (0, I.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
        })),
        { isGift: E } = (0, u.Pv)(),
        { paymentSources: C } = (0, y.jm)(),
        { discountOffer: P, isEligibleForDiscount: T, isEligibleForTrial: f } = (0, _.i)(),
        { dropdownCurrencies: N, hasFetchedRelatedSubscriptionPlans: R, setCheckoutCurrency: b } = (0, g.Jn)(),
        L = r.useCallback((e) => b(e), [b]);
    if (null == c)
        throw new v.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: A,
                selectedPlanId: d,
                hasFetchedSubscriptionPlans: R,
                selectedSkuId: p,
            },
        });
    let O = r.useMemo(() => {
            let e = P?.discount?.planIds;
            return T && null != P && null != e && null != c && e.includes(c.id);
        }, [T, P, c]),
        j = r.useMemo(() => f || null != o, [f, o]),
        w = { paymentSources: C, handlePaymentSourceAdd: a, planGroup: n },
        D = c.id;
    if (null == h || E) {
        let e = {
            ...w,
            selectedPlanId: D,
            trialId: o,
            reviewWarningMessage: i,
            referralTrialOfferId: s,
            isTrial: j,
            isDiscount: O,
        };
        return (0, l.jsx)(M._, { ...e });
    }
    {
        let e = {
            ...w,
            currencies: N,
            onCurrencyChange: L,
            purchaseState: m,
            premiumSubscription: h,
            planId: D,
            hasOpenInvoice: null != t,
        };
        return (0, l.jsx)(x.A, { ...e });
    }
};
function j(e) {
    let { selectedSkuId: t, isPremium: n } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
        })),
        { verifiedTrialId: a } = r.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: r } = e,
                        a = t ?? n ?? null;
                    return { verifiedTrialId: null != a && (!l || L.TP[a].skus.includes(r)) ? a : null };
                })({
                    trialId: e.trialId,
                    referralTrialOfferId: e.referralTrialOfferId,
                    isPremium: n,
                    selectedSkuId: t,
                }),
            [e.trialId, e.referralTrialOfferId, n, t],
        ),
        i = (0, S.A)(),
        s = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != i) {
                if ((0, R.xq)(i.id)) return L.LE;
                if ((0, R.z4)(i.id)) return L.DA;
            }
            return [];
        }, [i, e.planGroup]),
        o = r.useMemo(() => ({ effectivePlanGroup: s, verifiedTrialId: a }), [s, a]),
        u = r.useMemo(() => ({ trialId: a, planGroup: s }), [a, s]),
        c = r.useCallback(
            (e, t) =>
                ((e, t, n) => {
                    let { handlePaymentSourceAdd: r } = t,
                        { openInvoiceId: a, reviewWarningMessage: i, referralTrialOfferId: s } = e,
                        { effectivePlanGroup: o, verifiedTrialId: u } = n;
                    return (0, l.jsx)(O, {
                        handlePaymentSourceAdd: r,
                        effectivePlanGroup: o,
                        verifiedTrialId: u,
                        openInvoiceId: a,
                        reviewWarningMessage: i,
                        referralTrialOfferId: s,
                    });
                })(e, t, o),
            [o],
        );
    return (0, l.jsx)(N, { renderStepBody: c, customFooterProps: u, ...e });
}
let w = (e, t, n) => {
    let { handlePaymentSourceAdd: r } = t;
    return (0, l.jsx)(b.Ay, { handlePaymentSourceAdd: r, ...n });
};
function D(e) {
    return (0, l.jsx)(N, { renderStepBody: w, ...e });
}
function U(e) {
    return (0, I.t4)((e) => e.purchaseType) === f.VV.SUBSCRIPTION ? (0, l.jsx)(j, { ...e }) : (0, l.jsx)(D, { ...e });
}
