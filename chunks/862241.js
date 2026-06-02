n.d(t, { _M: () => V });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(331322),
    o = n(304072),
    u = n(606267),
    c = n(259160),
    d = n(424297),
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
    f = n(380619),
    I = n(45938),
    T = n(742810),
    N = n(364995),
    v = n(426398),
    g = n(463376),
    x = n(666646),
    R = n(558620),
    M = n(722847),
    b = n(26279),
    L = n(818348);
function j(e) {
    let {
            renderStepBody: t,
            customFooterProps: n,
            handleStepChange: i,
            trialFooterMessageOverride: j,
            reviewWarningMessage: O,
            openInvoiceId: w,
            analyticsData: D,
            analyticsLocation: U,
            referralTrialOfferId: k,
            initialPlanId: G,
            subscriptionTier: Y,
            handleClose: F,
        } = e,
        B = (0, T.D7)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: W,
            purchaseType: H,
            customCheckoutFlow: V,
            selectedSkuId: K,
            setEntitlementsGranted: Z,
            setAppliedUserDiscounts: q,
            contextMetadata: z,
            setUpdatedSubscription: $,
            purchaseError: J,
            setCheckoutCurrency: X,
        } = (0, M.t4)((e) => ({
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
        })),
        { startedPaymentFlowWithPaymentSourcesRef: Q } = (0, d.P5)(),
        { isPremium: ee, isPremiumGroupPurchase: et, isEligibleForTrial: en, userTrialOffer: el } = (0, g.i)(),
        er = (0, R.A)(),
        ei = (0, C.bB)(),
        { isGift: ea, giftMessage: es, giftRecipient: eo, claimableRewards: eu } = (0, c.Pv)();
    a()(null != ei, "Step should be set");
    let ec = r.useRef(null),
        [ed, ep] = (0, o.A)(!1, 500),
        { disablePurchase: em } = (function () {
            let {
                    paymentSourceId: e,
                    purchasePreviewError: t,
                    purchaseType: n,
                } = (0, M.t4)((e) => ({
                    paymentSourceId: e.paymentSourceId,
                    purchasePreviewError: e.purchasePreviewError,
                    purchaseType: e.purchaseType,
                })),
                { paymentSources: l } = (0, v.jm)(),
                { isEligibleForTrial: i } = (0, g.i)(),
                { checkoutPaymentSources: a, hasInvoiceOrderContextLoaded: s } = (0, N.t)(),
                o = (0, x.sw)(),
                { isGift: d } = (0, c.Pv)(),
                p = (0, _.W)(l, e),
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
                        (n === L.VV.ONE_TIME
                            ? null == e || m || null == o || null != t
                            : null == o || (!d && null != p && n === L.VV.SUBSCRIPTION && i && !p.canRedeemTrial())),
                    [h, n, o, e, t, d, p, i, m],
                );
            return { paymentSource: p, disablePurchase: A };
        })(),
        eh = null != el ? el.id : void 0,
        eA = r.useMemo(() => ({ user_trial_offer_id: eh }), [eh]);
    r.useEffect(() => {
        null != J && null != ec.current && ec.current.scrollIntoView({ behavior: "smooth" });
    }, [J]);
    let eC = r.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                $(l),
                    null != t && Z(t),
                    null != n && q(n),
                    i(p.pn.CONFIRM, { fulfillment: { subscription: l, entitlements: t } });
            },
            [i, $, Z, q],
        ),
        eE = r.useRef(null),
        ey = (0, x.mx)(),
        eP = ea && (0, I.Ik)(eo),
        eS = null == G && null == Y && H === L.VV.SUBSCRIPTION,
        e_ = (0, S.vT)({ isTrial: en, isGift: ea, selectedSkuId: K, startedPaymentFlowWithPaymentSources: Q.current }),
        ef = ea && H === L.VV.ONE_TIME,
        eI = ef || (e_ ? eS && ee : ee),
        eT = (0, f.px)(er, ea, eu),
        eN = r.useCallback(
            () =>
                (X(void 0), e_)
                    ? void i(p.pn.SKU_SELECT)
                    : et
                      ? void i(p.pn.ADD_PAYMENT_STEPS)
                      : eT
                        ? void i(p.pn.SELECT_FREE_SKU)
                        : ef
                          ? i(p.pn.GIFT_CUSTOMIZATION)
                          : i(p.pn.PLAN_SELECT),
            [X, i, e_, ef, eT, et],
        ),
        ev = em;
    V === b.uH.DEV_STORYBOOK_CHECKOUT && (ev = !0);
    let eg = r.useCallback(() => {
            i(p.pn.ADD_PAYMENT_STEPS);
        }, [i]),
        ex = r.useMemo(() => ({ hasLegalTermsFlash: ed, legalTermsNodeRef: eE }), [ed, eE]),
        eR = r.useMemo(
            () => ({
                handleClose: F,
                openInvoiceId: w,
                trialFooterMessageOverride: j,
                reviewWarningMessage: O,
                referralTrialOfferId: k,
            }),
            [F, w, j, O, k],
        ),
        eM = r.useMemo(
            () => t(eR, { isUnifiedCheckoutUIEnabled: B, handlePaymentSourceAdd: eg }, ex),
            [t, eR, eg, B, ex],
        ),
        eb = (0, l.jsx)(h.A, {
            premiumSubscription: W ?? null,
            invoiceError: ey,
            onBack: eN,
            onNext: eC,
            legalTermsNodeRef: eE,
            flashLegalTerms: () => ep(!0),
            analyticsLocation: U,
            baseAnalyticsData: D,
            openInvoiceId: w,
            flowStartTime: z.startTime,
            isTrial: en,
            backButtonEligible: eI,
            metadata: eA,
            disablePurchase: ev,
            onPaymentSourceAdd: eg,
            ...n,
        }),
        eL = r.useMemo(
            () =>
                B
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(E.Z, { giftMessage: es }),
                              !eP && (0, l.jsx)(m.A, { isEligibleForTrial: en }),
                          ],
                      }),
            [es, eP, en, B],
        ),
        ej = r.useMemo(
            () =>
                B
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(y.A, {}), (0, l.jsx)(P.A, {})],
                      }),
            [B],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eL, (0, l.jsxs)(A.dZ, { children: [ej, eM] }), (0, l.jsx)(A.UX, { children: eb })],
    });
}
var O = n(655857),
    w = n(271849),
    D = n(427858),
    U = n(428262),
    k = n(367160),
    G = n(194256),
    Y = n(788868);
let F = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            handleClose: i,
            effectivePlanGroup: s,
            hasLegalTermsFlash: o,
            legalTermsNodeRef: u,
            handlePaymentSourceAdd: d,
            trialFooterMessageOverride: p,
            reviewWarningMessage: m,
            referralTrialOfferId: h,
            verifiedTrialId: A,
            originalTrialId: C,
        } = e,
        E = (0, R.A)(),
        {
            selectedPlanId: y,
            selectedSkuId: P,
            purchaseState: S,
            setHasAcceptedTerms: _,
            unifiedCheckoutFlow: f,
            activeSubscription: I,
        } = (0, M.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            activeSubscription: e.activeSubscription,
        })),
        { isGift: T } = (0, c.Pv)(),
        { paymentSources: N } = (0, v.jm)(),
        { discountOffer: x, isEligibleForDiscount: b, isEligibleForTrial: L } = (0, g.i)(),
        { dropdownCurrencies: j, hasFetchedRelatedSubscriptionPlans: U, setCheckoutCurrency: G } = (0, O.Jn)(),
        Y = r.useCallback((e) => G(e), [G]);
    a()(null != E, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", f, y, U, P);
    let F = r.useMemo(() => {
            let e = x?.discount?.planIds;
            return b && null != x && null != e && null != E && e.includes(E.id);
        }, [b, x, E]),
        B = r.useMemo(() => L || (null != C && null != p), [L, C, p]),
        W = {
            paymentSources: N,
            handlePaymentSourceAdd: d,
            planGroup: s,
            setHasAcceptedTerms: _,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        H = E.id;
    if (null == I || T) {
        let e = {
            ...W,
            selectedPlanId: H,
            trialId: A,
            trialFooterMessageOverride: p,
            reviewWarningMessage: m,
            referralTrialOfferId: h,
            isTrial: B,
            isDiscount: F,
        };
        return t ? (0, l.jsx)(k._, { ...e }) : (0, l.jsx)(w.A, { ...e });
    }
    {
        let e = {
            ...W,
            currencies: j,
            onCurrencyChange: Y,
            purchaseState: S,
            premiumSubscription: I,
            planId: H,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(D.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function B(e) {
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
                        verifiedTrialId: null != i && (!l || Y.TP[i].skus.includes(r)) ? i : null,
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
                if ((0, U.xq)(s.id)) return Y.LE;
                if ((0, U.z4)(s.id)) return Y.DA;
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
                    return (0, l.jsx)(F, {
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
let W = (e, t, n) => {
    let { handlePaymentSourceAdd: r } = t;
    return (0, l.jsx)(G.Ay, { handlePaymentSourceAdd: r, ...n });
};
function H(e) {
    return (0, l.jsx)(j, { renderStepBody: W, ...e });
}
function V(e) {
    return (0, M.t4)((e) => e.purchaseType) === L.VV.SUBSCRIPTION ? (0, l.jsx)(B, { ...e }) : (0, l.jsx)(H, { ...e });
}
