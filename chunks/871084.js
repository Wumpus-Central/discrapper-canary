n.d(t, { A: () => W });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(17928),
    c = n(364840),
    d = n(228366),
    p = n(391048),
    m = n(688810),
    h = n(742810),
    C = n(558620),
    A = n(427675),
    E = n(169797),
    y = n(94420),
    P = n(380619),
    S = n(155984),
    _ = n(683433),
    T = n(344159),
    f = n(367921),
    N = n(79387),
    x = n(174459),
    I = n(45938),
    g = n(927578),
    v = n(123633),
    M = n(937008),
    j = n(902958),
    b = n(158032),
    R = n(830382),
    L = n(753390),
    O = n(243217),
    D = n(652215),
    w = n(788868);
async function U(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: l,
        onPurchaseFinalize: a,
        hasRedirectURL: i,
        isGift: r,
        analyticsLocation: s,
        analyticsLocations: u,
        subscriptionPlan: c,
        planGroup: d,
        trialId: p,
        priceOptions: m,
        paymentSource: h,
        isPrepaidPaymentPastDue: C,
        openInvoiceId: A,
        premiumSubscription: E,
        onNext: y,
        metadata: P,
        sku: S,
        skuPricePreview: _,
        purchaseType: T,
        referralCode: f,
        loadId: N,
        giftInfoOptions: x,
        invoicePreview: I,
        orderId: v,
    } = e;
    try {
        let e, n, a, M;
        if ((t(), i)) return;
        if (T === D.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != _, "SKUPricePreview must exist."),
                (e = await (0, R.XU)(S.applicationId, S.id, {
                    expectedAmount: _.amount,
                    expectedCurrency: _.currency,
                    isGift: r,
                    paymentSource: h,
                    loadId: N,
                    giftInfoOptions: x,
                    orderId: v,
                }));
        else {
            o()(null != c, "Missing subscriptionPlan"), o()(null != I, "Missing invoicePreview");
            let t = { amount: I.total, currency: I.currency },
                n = (0, g.l6)(m, I.checkoutContext?.available_plans),
                l = (0, g.$Q)((0, g.y8)(c.id, !1, !1, n));
            if (null != E) {
                let e = m.currency ?? I.currency,
                    t = (0, g.Pg)(E, c.id, 1, new Set(d));
                (t = (0, g.qn)(t)), (l = (0, g.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (r) {
                let t = I.total,
                    n = I.currency;
                e = await (0, R.XU)(w.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: N,
                    giftInfoOptions: x,
                    orderId: v,
                });
            } else if (C && null != A && null != h && null != E) {
                let n = m.currency ?? I.currency;
                e = D.AD1.has(h.type)
                    ? await (0, L.LD)(E, A, h, n, N)
                    : await (0, L.nV)(E, { paymentSource: h, currency: n }, t, l, u, s, N);
            } else if (null != E) {
                let n = (0, g.Pg)(E, c.id, 1, new Set(d)),
                    a = { paymentSource: h, currency: m.currency ?? I.currency };
                E.status === D.Dmq.PAUSED && (a.status = D.Dmq.ACTIVE),
                    E.isPausedAllowsResumeButNotUpdates || (a.items = n),
                    (e = await (0, L.nV)(E, a, t, l, u, s, N));
            } else
                e = await (0, b.B1)({
                    planId: c.id,
                    currency: m.currency ?? I.currency,
                    paymentSource: h,
                    trialId: p,
                    metadata: P,
                    referralCode: f,
                    loadId: N,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: j } = l(e);
        if (j) return;
        "subscription" in e
            ? (n = null != e.subscription ? O.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (a = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (M =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            y(n, a, M);
    } catch (e) {
        n(e);
    } finally {
        a();
    }
}
var k = n(566980),
    Y = n(216641),
    G = n(999784),
    F = n(650098);
let B = (e) => {
    let { showBackButton: t, onBackClick: n } = e,
        { premiumSubscription: i, isGift: r, planGroup: s, isPrepaid: o } = e,
        {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: p,
            paymentSourceId: m,
            activeSubscription: h,
            devShelfFetchState: C,
            hasPaymentSources: A,
        } = (0, f.Ke)({ premiumSubscription: i, isGift: r, planGroup: s, isPrepaid: o }),
        y = a.useMemo(
            () =>
                (0, f.X1)(e, {
                    buttonLabel: u,
                    analyticsLocations: c,
                    application: d,
                    hasAcceptedTerms: p,
                    paymentSourceId: m,
                    activeSubscription: h,
                    devShelfFetchState: C,
                    hasPaymentSources: A,
                }),
            [e, u, c, d, p, m, h, C, A],
        );
    return (0, l.jsx)(E.lo, { onBackClick: t ? n : void 0, primaryButtonProps: y });
};
function W(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: i,
            legalTermsNodeRef: s,
            flashLegalTerms: E,
            invoiceError: b,
            planError: R,
            baseAnalyticsData: L,
            flowStartTime: O,
            trialId: w,
            planGroup: W,
            analyticsLocation: H,
            openInvoiceId: V,
            metadata: K,
            backButtonEligible: Z,
            disablePurchase: q,
            isTrial: z = !1,
            onPaymentSourceAdd: $,
        } = e,
        {
            selectedSkuId: J,
            invoicePreview: X,
            setHasAcceptedTerms: Q,
            setPurchaseState: ee,
        } = (0, y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
        })),
        {
            priceOptions: et,
            setPurchaseError: en,
            purchaseType: el,
            paymentSourceId: ea,
            paymentSources: ei,
            referralCode: er,
            contextMetadata: es,
        } = (0, j.P5)(),
        eo = (0, C.A)(),
        eu = (0, A.gU)(),
        ec = (0, A.RR)(),
        {
            isGift: ed,
            selectedGiftStyle: ep,
            customGiftMessage: em,
            emojiConfetti: eh,
            soundEffect: eC,
            giftRecipient: eA,
            selectedGiftingPromotionReward: eE,
        } = (0, M.Pv)(),
        ey = (0, P.Mq)(eo),
        eP = (0, I.lo)(eA),
        eS = {};
    (eS.gift_style = ep),
        (eS.reward_sku_ids = ey && null != eE ? [eE] : []),
        eP === I.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != eA, "Gift recipient must be set at purchase review step for these gift options."),
            (eS.recipient_id = eA.id),
            (eS.custom_message = em),
            (eS.emoji_id = eh?.id),
            (eS.emoji_name = eh?.id == null ? eh?.surrogates : void 0),
            (eS.sound_id = eC?.soundId));
    let e_ = eo?.id,
        { analyticsLocations: eT } = (0, m.Ay)(),
        ef = (0, Y.W)(ei, ea),
        [eN, ex] = a.useState(!1),
        [eI, eg] = a.useState(!1),
        { hasEntitlements: ev } = (0, T.X)(e_, ed),
        eM = (0, g.J$)(et.paymentSourceId),
        ej = (0, S.l)(),
        eb = (0, u.bG)([v.A], () => v.A.currentOrderId),
        eR = null,
        eL = null;
    if (el === D.VVm.ONE_TIME) {
        o()(null != J, "SKU must be selected for one-time purchases"),
            (eR = eu[J] ?? null),
            o()(null != eR, "SKU must exist and be fetched.");
        let e = ec[J],
            t = ea ?? N.B;
        eL = null != e ? (e[t] ?? e[N.B]) : null;
    }
    let eO = a.useCallback(() => {
            ee(k.h.PURCHASING),
                Q(!0),
                ex(!0),
                d.h.wait(p.ET),
                en(null),
                x.default.track(D.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...L,
                    subtotal: X?.subtotal,
                    tax: X?.tax,
                    expected_amount: X?.total,
                    expected_currency: X?.currency,
                    duration_ms: Date.now() - O,
                });
        }, [ee, Q, en, L, O, X]),
        eD = a.useCallback(
            (e) => {
                ee(k.h.FAIL),
                    en(e),
                    x.default.track(D.HAw.PAYMENT_FLOW_FAILED, {
                        ...L,
                        payment_error_code: e?.code,
                        payment_source_id: ef?.id,
                        payment_source_type: ef?.type,
                        duration_ms: Date.now() - O,
                    });
            },
            [ee, en, L, O, ef],
        ),
        ew = a.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eg(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (ee(k.h.COMPLETED), { shouldReturnEarly: !1 }),
            [ee],
        ),
        eU = a.useCallback(() => {
            eI || ex(!1);
        }, [eI]),
        ek = async () => {
            await U({
                onPurchaseAttempt: eO,
                onPurchaseError: eD,
                onPurchaseComplete: ew,
                onPurchaseFinalize: eU,
                hasRedirectURL: eI,
                isGift: ed,
                analyticsLocation: H,
                analyticsLocations: eT,
                subscriptionPlan: eo,
                planGroup: W,
                trialId: w,
                priceOptions: et,
                paymentSource: ef,
                isPrepaidPaymentPastDue: ej,
                openInvoiceId: V,
                premiumSubscription: t,
                onNext: i,
                metadata: K,
                sku: eR,
                skuPricePreview: eL,
                purchaseType: el,
                referralCode: er,
                loadId: es.loadId,
                giftInfoOptions: eS,
                invoicePreview: X,
                orderId: eb,
            });
        },
        eY = (0, h.D7)({ location: "PaymentModalReviewStepFooter" }),
        eG = null != V || (el === D.VVm.ONE_TIME && !ed),
        eF = Z && !eG,
        eB = {
            legalTermsNodeRef: s,
            invoiceError: b,
            planError: R,
            disablePurchase: q,
            flashLegalTerms: E,
            isSubmitting: eN,
            premiumSubscription: t,
            isGift: ed,
            planGroup: W,
            isPrepaid: eM,
            isTrial: z,
            makePurchase: ek,
            needsPaymentSource: null == ef && !ev,
            onNext: i,
            onPaymentSourceAdd: $,
        };
    return eY
        ? (0, l.jsx)(B, { ...eB, selectedSkuId: J, showBackButton: eF, onBackClick: n })
        : (0, l.jsx)(c.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(F.eT, { [F.U3]: eF }),
                  children: [
                      eF ? (0, l.jsx)("div", { className: F.aX, children: (0, l.jsx)(_.A, { onClick: n }) }) : null,
                      (0, l.jsx)(G.A, {}),
                      (0, l.jsx)(f.Ay, { ...eB }),
                  ],
              }),
          });
}
