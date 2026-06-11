n.d(t, { _M: () => U });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(304072),
    o = n(606267),
    u = n(166532),
    c = n(871084),
    d = n(482132),
    p = n(615310),
    m = n(216641),
    h = n(364995),
    A = n(426398),
    E = n(666646),
    C = n(211159),
    y = n(26279);
function _(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: i,
            subscriptionMetadata: _,
            renderStepBody: S,
            resolveInternalState: P,
            handleStepChange: I,
            openInvoiceId: f,
            analyticsData: T,
            analyticsLocation: N,
        } = e,
        {
            activeSubscription: g,
            paymentSourceId: v,
            purchasePreviewError: x,
            customCheckoutFlow: R,
            contextMetadata: M,
            purchaseError: b,
            setCheckoutCurrency: L,
        } = (0, C.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        O = (0, p.bB)();
    a()(null != O, "Step should be set");
    let j = r.useRef(null),
        [w, D] = (0, s.A)(!1, 500),
        { paymentSources: U } = (0, A.jm)(),
        { checkoutPaymentSources: k, hasInvoiceOrderContextLoaded: G } = (0, h.t)(),
        F = (0, E.sw)(),
        B = (0, m.W)(U, v),
        Y = r.useMemo(() => {
            if (null == v) return !1;
            if (!G) return !0;
            let e = k.find((e) => e.id === v);
            return null != e && !e.enabled;
        }, [k, G, v]),
        W = (0, o.iB)({ checkoutPaymentSources: k, paymentSourceId: v, location: "PaymentModalReviewStep" }),
        { disablePurchase: H } = r.useMemo(() => {
            let e = { disablePurchase: W || R === y.uH.DEV_STORYBOOK_CHECKOUT };
            return null != P
                ? P(e, {
                      paymentSource: B,
                      paymentSourceId: v,
                      isSelectedPaymentSourceDisabled: Y,
                      invoicePreview: F,
                      purchasePreviewError: x,
                  })
                : e;
        }, [P, B, v, Y, F, x, W, R]);
    r.useEffect(() => {
        null != b && null != j.current && j.current.scrollIntoView({ behavior: "smooth" });
    }, [b]);
    let V = r.useRef(null),
        K = (0, E.mx)(),
        Z = r.useCallback(() => {
            L(void 0), n();
        }, [L, n]),
        q = r.useCallback(() => {
            I(u.pn.ADD_PAYMENT_STEPS);
        }, [I]),
        z = r.useMemo(() => ({ hasLegalTermsFlash: w, legalTermsNodeRef: V }), [w, V]),
        $ = r.useMemo(() => S({ handlePaymentSourceAdd: q }, z), [S, q, z]),
        X = (0, l.jsx)(c.A, {
            premiumSubscription: g ?? null,
            invoiceError: K,
            onBack: Z,
            legalTermsNodeRef: V,
            flashLegalTerms: () => D(!0),
            flowStartTime: M.startTime,
            onPaymentSourceAdd: q,
            disablePurchase: H,
            analyticsLocation: N,
            baseAnalyticsData: T,
            openInvoiceId: f,
            handleStepChange: I,
            postPurchaseStep: u.pn.CONFIRM,
            backButtonEligible: i,
            metadata: _,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.dZ, { children: $ }), (0, l.jsx)(d.UX, { children: X })],
    });
}
var S = n(71804),
    P = n(463376),
    I = n(655857),
    f = n(558620),
    T = n(380619),
    N = n(427858),
    g = n(428262),
    v = n(937008),
    x = n(800471),
    R = n(953761),
    M = n(194256),
    b = n(788868),
    L = n(818348);
let O = (e) => {
    let {
            openInvoiceId: t,
            effectivePlanGroup: n,
            handlePaymentSourceAdd: i,
            reviewWarningMessage: a,
            referralTrialOfferId: s,
            verifiedTrialId: o,
        } = e,
        u = (0, f.A)(),
        {
            selectedPlanId: c,
            selectedSkuId: d,
            purchaseState: p,
            unifiedCheckoutFlow: m,
            activeSubscription: h,
            isGift: E,
        } = (0, C.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
            isGift: e.isGift,
        })),
        { paymentSources: y } = (0, A.jm)(),
        { discountOffer: _, isEligibleForDiscount: T, isEligibleForTrial: g } = (0, P.i)(),
        { dropdownCurrencies: v, hasFetchedRelatedSubscriptionPlans: x, setCheckoutCurrency: M } = (0, I.Jn)(),
        b = r.useCallback((e) => M(e), [M]);
    if (null == u)
        throw new S.v({
            message: "Expected plan to be selected",
            extraSentryInformation: {
                unifiedCheckoutFlow: m,
                selectedPlanId: c,
                hasFetchedSubscriptionPlans: x,
                selectedSkuId: d,
            },
        });
    let L = r.useMemo(() => {
            let e = _?.discount?.planIds;
            return T && null != _ && null != e && null != u && e.includes(u.id);
        }, [T, _, u]),
        O = r.useMemo(() => g || null != o, [g, o]),
        j = { paymentSources: y, handlePaymentSourceAdd: i, planGroup: n },
        w = u.id;
    if (null == h || E) {
        let e = {
            ...j,
            selectedPlanId: w,
            trialId: o,
            reviewWarningMessage: a,
            referralTrialOfferId: s,
            isTrial: O,
            isDiscount: L,
        };
        return (0, l.jsx)(R._, { ...e });
    }
    {
        let e = {
            ...j,
            currencies: v,
            onCurrencyChange: b,
            purchaseState: p,
            premiumSubscription: h,
            planId: w,
            hasOpenInvoice: null != t,
        };
        return (0, l.jsx)(N.A, { ...e });
    }
};
function j(e) {
    let {
            selectedSkuId: t,
            isPremium: n,
            isGift: i,
            startedPaymentFlowWithPaymentSources: a,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isPremium: e.get("isPremiumPurchase"),
            isGift: e.isGift,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isEligibleForTrial: s, isPremiumGroupPurchase: o, userTrialOffer: c } = (0, P.i)(),
        { verifiedTrialId: d } = r.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: r } = e,
                        i = t ?? n ?? null;
                    return { verifiedTrialId: null != i && (!l || b.TP[i].skus.includes(r)) ? i : null };
                })({
                    trialId: e.trialId,
                    referralTrialOfferId: e.referralTrialOfferId,
                    isPremium: n,
                    selectedSkuId: t,
                }),
            [e.trialId, e.referralTrialOfferId, n, t],
        ),
        p = (0, f.A)(),
        m = r.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != p) {
                if ((0, g.xq)(p.id)) return b.LE;
                if ((0, g.z4)(p.id)) return b.DA;
            }
            return [];
        }, [p, e.planGroup]),
        h = r.useCallback(
            (t) => {
                let { handlePaymentSourceAdd: n } = t;
                return (0, l.jsx)(O, {
                    handlePaymentSourceAdd: n,
                    effectivePlanGroup: m,
                    verifiedTrialId: d,
                    openInvoiceId: e.openInvoiceId,
                    reviewWarningMessage: e.reviewWarningMessage,
                    referralTrialOfferId: e.referralTrialOfferId,
                });
            },
            [m, d, e.openInvoiceId, e.reviewWarningMessage, e.referralTrialOfferId],
        ),
        A = null == e.initialPlanId && null == e.subscriptionTier,
        E = (0, x.vT)({ isTrial: s, isGift: i, selectedSkuId: t, startedPaymentFlowWithPaymentSources: a }),
        y = E ? A && n : n,
        { claimableRewards: S } = (0, v.Pv)(),
        I = (0, T.px)(p, i, S),
        N = e.handleStepChange,
        R = r.useCallback(
            () =>
                E
                    ? void N(u.pn.SKU_SELECT)
                    : o
                      ? void N(u.pn.ADD_PAYMENT_STEPS)
                      : I
                        ? void N(u.pn.SELECT_FREE_SKU)
                        : N(u.pn.PLAN_SELECT),
            [N, E, I, o],
        ),
        M = r.useCallback(
            (e, t) => {
                let { paymentSource: n, invoicePreview: l } = t,
                    r = e.disablePurchase || null == l || (!i && null != n && s && !n.canRedeemTrial());
                return { ...e, disablePurchase: r };
            },
            [s, i],
        ),
        L = null != c ? c.id : void 0,
        j = r.useMemo(() => ({ user_trial_offer_id: L }), [L]),
        w = r.useMemo(() => ({ isTrial: s, trialId: d, planGroup: m }), [d, m, s]);
    return (0, l.jsx)(_, {
        ...e,
        isBackButtonEligible: y,
        onFooterBackClick: R,
        subscriptionMetadata: j,
        customFooterProps: w,
        renderStepBody: h,
        resolveInternalState: M,
    });
}
let w = (e, t) => {
    let { handlePaymentSourceAdd: n } = e;
    return (0, l.jsx)(M.Ay, { handlePaymentSourceAdd: n, ...t });
};
function D(e) {
    let { isGift: t } = (0, C.t4)((e) => ({ isGift: e.isGift })),
        n = e.handleStepChange,
        i = r.useCallback(() => {
            if (t) return void n(u.pn.GIFT_CUSTOMIZATION);
        }, [n, t]),
        a = r.useCallback((e, t) => {
            let {
                    paymentSourceId: n,
                    isSelectedPaymentSourceDisabled: l,
                    purchasePreviewError: r,
                    invoicePreview: i,
                } = t,
                a = e.disablePurchase || null == n || l || null == i || null != r;
            return { ...e, disablePurchase: a };
        }, []);
    return (0, l.jsx)(_, {
        ...e,
        isBackButtonEligible: t,
        onFooterBackClick: i,
        renderStepBody: w,
        resolveInternalState: a,
    });
}
function U(e) {
    return (0, C.t4)((e) => e.purchaseType) === L.VV.SUBSCRIPTION ? (0, l.jsx)(j, { ...e }) : (0, l.jsx)(D, { ...e });
}
