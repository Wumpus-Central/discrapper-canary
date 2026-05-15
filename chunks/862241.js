n.d(t, { _M: () => B });
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
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
    T = n(380619),
    f = n(45938),
    I = n(742810),
    N = n(364995),
    x = n(426398),
    g = n(666646),
    v = n(558620),
    M = n(94420),
    b = n(818348);
function j(e) {
    let {
            renderStepBody: t,
            customFooterProps: n,
            handleStepChange: i,
            trialFooterMessageOverride: j,
            reviewWarningMessage: R,
            openInvoiceId: L,
            analyticsData: O,
            analyticsLocation: D,
            referralTrialOfferId: w,
            initialPlanId: U,
            subscriptionTier: k,
            handleClose: Y,
        } = e,
        G = (0, I.D7)({ location: "payment_modal_review_step" }),
        {
            selectedSkuId: F,
            setEntitlementsGranted: B,
            setAppliedUserDiscounts: W,
            contextMetadata: V,
            setUpdatedSubscription: H,
            purchaseError: K,
        } = (0, M.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setUpdatedSubscription: e.setUpdatedSubscription,
        })),
        {
            activeSubscription: Z,
            setCurrency: q,
            isPremium: z,
            purchaseType: $,
            startedPaymentFlowWithPaymentSourcesRef: J,
            disablePurchasesForStorybook: X,
            isPremiumGroupPurchase: Q,
            isEligibleForTrial: ee,
            userTrialOffer: et,
        } = (0, d.P5)(),
        en = (0, v.A)(),
        el = (0, A.bB)(),
        { isGift: ea, giftMessage: ei, giftRecipient: er, claimableRewards: es } = (0, c.Pv)();
    r()(null != el, "Step should be set");
    let eo = a.useRef(null),
        [eu, ec] = (0, o.A)(!1, 500),
        { disablePurchase: ed } = (function () {
            let { paymentSourceId: e } = (0, M.t4)((e) => ({ paymentSourceId: e.paymentSourceId })),
                { paymentSources: t } = (0, x.jm)(),
                { purchasePreviewError: n, purchaseType: l, isEligibleForTrial: i } = (0, d.P5)(),
                { checkoutPaymentSources: r, hasInvoiceOrderContextLoaded: s } = (0, N.t)(),
                o = (0, g.sw)(),
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
                        (l === b.VV.ONE_TIME
                            ? null == e || h || null == o || null != n
                            : null == o || (!p && null != m && l === b.VV.SUBSCRIPTION && i && !m.canRedeemTrial())),
                    [C, l, o, e, n, p, m, i, h],
                );
            return { paymentSource: m, disablePurchase: A };
        })(),
        ep = null != et ? et.id : void 0,
        em = a.useMemo(() => ({ user_trial_offer_id: ep }), [ep]);
    a.useEffect(() => {
        null != K && null != eo.current && eo.current.scrollIntoView({ behavior: "smooth" });
    }, [K]);
    let eh = a.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                H(l),
                    null != t && B(t),
                    null != n && W(n),
                    i(p.pn.CONFIRM, { fulfillment: { subscription: l, entitlements: t } });
            },
            [i, H, B, W],
        ),
        eC = a.useRef(null),
        eA = (0, g.mx)(),
        ey = ea && (0, f.Ik)(er),
        eE = null == U && null == k && $ === b.VV.SUBSCRIPTION,
        eP = (0, S.vT)({ isTrial: ee, isGift: ea, selectedSkuId: F, startedPaymentFlowWithPaymentSources: J.current }),
        eS = ea && $ === b.VV.ONE_TIME,
        e_ = eS || (eP ? eE && z : z),
        eT = (0, T.px)(en, ea, es),
        ef = a.useCallback(
            () =>
                (q(void 0), eP)
                    ? void i(p.pn.SKU_SELECT)
                    : Q
                      ? void i(p.pn.ADD_PAYMENT_STEPS)
                      : eT
                        ? void i(p.pn.SELECT_FREE_SKU)
                        : eS
                          ? i(p.pn.GIFT_CUSTOMIZATION)
                          : i(p.pn.PLAN_SELECT),
            [q, i, eP, eS, eT, Q],
        ),
        eI = ed;
    X && (eI = !0);
    let eN = a.useCallback(() => {
            i(p.pn.ADD_PAYMENT_STEPS);
        }, [i]),
        ex = a.useMemo(() => ({ hasLegalTermsFlash: eu, legalTermsNodeRef: eC }), [eu, eC]),
        eg = a.useMemo(
            () => ({
                handleClose: Y,
                openInvoiceId: L,
                trialFooterMessageOverride: j,
                reviewWarningMessage: R,
                referralTrialOfferId: w,
            }),
            [Y, L, j, R, w],
        ),
        ev = a.useMemo(
            () => t(eg, { isUnifiedCheckoutUIEnabled: G, handlePaymentSourceAdd: eN }, ex),
            [t, eg, eN, G, ex],
        ),
        eM = (0, l.jsx)(h.A, {
            premiumSubscription: Z ?? null,
            invoiceError: eA,
            onBack: ef,
            onNext: eh,
            legalTermsNodeRef: eC,
            flashLegalTerms: () => ec(!0),
            analyticsLocation: D,
            baseAnalyticsData: O,
            openInvoiceId: L,
            flowStartTime: V.startTime,
            isTrial: ee,
            backButtonEligible: e_,
            metadata: em,
            disablePurchase: eI,
            onPaymentSourceAdd: eN,
            ...n,
        }),
        eb = a.useMemo(
            () =>
                G
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(y.Z, { giftMessage: ei }),
                              !ey && (0, l.jsx)(m.A, { isEligibleForTrial: ee }),
                          ],
                      }),
            [ei, ey, ee, G],
        ),
        ej = a.useMemo(
            () =>
                G
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(E.A, {}), (0, l.jsx)(P.A, {})],
                      }),
            [G],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eb, (0, l.jsxs)(C.dZ, { children: [ej, ev] }), (0, l.jsx)(C.UX, { children: eM })],
    });
}
var R = n(209030),
    L = n(427858),
    O = n(428262),
    D = n(367160),
    w = n(194256),
    U = n(788868);
let k = (e) => {
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
            originalTrialId: y,
        } = e,
        E = (0, v.A)(),
        {
            selectedPlanId: P,
            selectedSkuId: S,
            purchaseState: _,
            setHasAcceptedTerms: T,
        } = (0, M.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: f } = (0, c.Pv)(),
        { paymentSources: I } = (0, x.jm)(),
        {
            hasFetchedSubscriptionPlans: N,
            unifiedCheckoutFlow: g,
            activeSubscription: b,
            currencies: j,
            priceOptions: O,
            discountOffer: w,
            isEligibleForDiscount: U,
            isEligibleForTrial: k,
            setCurrency: Y,
        } = (0, d.P5)(),
        G = a.useCallback((e) => Y(e), [Y]);
    r()(null != E, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", g, P, N, S);
    let F = a.useMemo(() => {
            let e = w?.discount?.planIds;
            return U && null != w && null != e && null != E && e.includes(E.id);
        }, [U, w, E]),
        B = a.useMemo(() => k || (null != y && null != m), [k, y, m]),
        W = {
            paymentSources: I,
            handlePaymentSourceAdd: p,
            priceOptions: O,
            planGroup: s,
            setHasAcceptedTerms: T,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        V = E.id;
    if (null == b || f) {
        let e = {
            ...W,
            selectedPlanId: V,
            trialId: A,
            trialFooterMessageOverride: m,
            reviewWarningMessage: h,
            referralTrialOfferId: C,
            isTrial: B,
            isDiscount: F,
        };
        return t ? (0, l.jsx)(D._, { ...e }) : (0, l.jsx)(R.A, { ...e });
    }
    {
        let e = {
            ...W,
            currencies: j,
            onCurrencyChange: G,
            purchaseState: _,
            premiumSubscription: b,
            planId: V,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(L.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function Y(e) {
    let { selectedSkuId: t } = (0, M.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        { isPremium: n } = (0, d.P5)(),
        { verifiedTrialId: i, originalTrialId: r } = a.useMemo(
            () =>
                ((e) => {
                    let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                        i = t ?? n ?? null;
                    return {
                        verifiedTrialId: null != i && (!l || U.TP[i].skus.includes(a)) ? i : null,
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
        s = (0, v.A)(),
        o = a.useMemo(() => {
            if (null != e.planGroup) return e.planGroup;
            if (null != s) {
                if ((0, O.xq)(s.id)) return U.LE;
                if ((0, O.z4)(s.id)) return U.DA;
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
                    return (0, l.jsx)(k, {
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
let G = (e, t, n) => {
    let { handlePaymentSourceAdd: a } = t;
    return (0, l.jsx)(w.Ay, { handlePaymentSourceAdd: a, ...n });
};
function F(e) {
    return (0, l.jsx)(j, { renderStepBody: G, ...e });
}
function B(e) {
    let { purchaseType: t } = (0, d.P5)();
    return t === b.VV.SUBSCRIPTION ? (0, l.jsx)(Y, { ...e }) : (0, l.jsx)(F, { ...e });
}
