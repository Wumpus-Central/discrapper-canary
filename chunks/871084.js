n.d(t, { A: () => W });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(702841),
    c = n(364840),
    d = n(228366),
    p = n(391048),
    m = n(688810),
    h = n(176095),
    C = n(742810),
    A = n(426398),
    y = n(558620),
    E = n(427675),
    P = n(480642),
    S = n(671744),
    _ = n(380619),
    f = n(155984),
    T = n(683433),
    I = n(344159),
    x = n(367921),
    N = n(174459),
    g = n(45938),
    v = n(428262),
    M = n(937008),
    b = n(834252),
    j = n(158032),
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
        premiumSubscription: y,
        onNext: E,
        metadata: P,
        sku: S,
        purchaseType: _,
        referralCode: f,
        loadId: T,
        giftInfoOptions: I,
        invoicePreview: x,
        order: N,
    } = e;
    try {
        let e, n, a, g;
        if ((t(), i)) return;
        if (_ === D.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != x, "invoicePreview must exist."),
                (e = await (0, R.XU)(S.applicationId, S.id, {
                    expectedAmount: x.total,
                    expectedCurrency: x.currency,
                    isGift: r,
                    paymentSource: h,
                    loadId: T,
                    giftInfoOptions: I,
                    orderId: N?.id,
                }));
        else {
            o()(null != c, "Missing subscriptionPlan"), o()(null != x, "Missing invoicePreview");
            let t = { amount: x.total, currency: x.currency },
                n = (0, v.l6)(m, x.checkoutContext?.available_plans),
                l = (0, v.$Q)((0, v.y8)(c.id, !1, !1, n));
            if (null != y) {
                let e = m.currency ?? x.currency,
                    t = (0, v.Pg)(y, c.id, 1, new Set(d));
                (t = (0, v.qn)(t)), (l = (0, v.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (r) {
                let t = x.total,
                    n = x.currency;
                e = await (0, R.XU)(w.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: T,
                    giftInfoOptions: I,
                    orderId: N?.id,
                });
            } else if (C && null != A && null != h && null != y) {
                let n = m.currency ?? x.currency;
                e = D.AD1.has(h.type)
                    ? await (0, L.LD)(y, A, h, n, T)
                    : await (0, L.nV)(y, { paymentSource: h, currency: n }, t, l, u, s, T);
            } else if (null != y) {
                let n = (0, v.Pg)(y, c.id, 1, new Set(d)),
                    a = { paymentSource: h, currency: m.currency ?? x.currency };
                y.status === D.Dmq.PAUSED && (a.status = D.Dmq.ACTIVE),
                    y.isPausedAllowsResumeButNotUpdates || (a.items = n),
                    (e = await (0, L.nV)(y, a, t, l, u, s, T));
            } else
                e = await (0, j.B1)({
                    planId: c.id,
                    currency: m.currency ?? x.currency,
                    paymentSource: h,
                    trialId: p,
                    metadata: P,
                    referralCode: f,
                    loadId: T,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: M } = l(e);
        if (M) return;
        "subscription" in e
            ? (n = null != e.subscription ? O.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (a = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (g =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            E(n, a, g);
    } catch (e) {
        n(e);
    } finally {
        a();
    }
}
var k = n(566980),
    Y = n(216641),
    G = n(999784),
    F = n(52402);
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
        } = (0, x.Ke)({ premiumSubscription: i, isGift: r, planGroup: s, isPrepaid: o }),
        y = a.useMemo(
            () =>
                (0, x.X1)(e, {
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
    return (0, l.jsx)(P.lo, { onBackClick: t ? n : void 0, primaryButtonProps: y });
};
function W(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: i,
            legalTermsNodeRef: s,
            flashLegalTerms: P,
            invoiceError: j,
            planError: R,
            baseAnalyticsData: L,
            flowStartTime: O,
            trialId: w,
            planGroup: W = [],
            analyticsLocation: V,
            openInvoiceId: H,
            metadata: K,
            backButtonEligible: Z,
            disablePurchase: q,
            isTrial: z = !1,
            onPaymentSourceAdd: J,
        } = e,
        {
            selectedSkuId: $,
            invoicePreview: X,
            setHasAcceptedTerms: Q,
            setPurchaseState: ee,
            contextMetadata: et,
            paymentSourceId: en,
            setPurchaseError: el,
            order: ea,
            priceOptions: ei,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            contextMetadata: e.contextMetadata,
            order: e.order,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { paymentSources: er } = (0, A.jm)(),
        { purchaseType: es, referralCode: eo } = (0, b.P5)(),
        eu = (0, y.A)(),
        ec = (0, E.gU)(),
        {
            isGift: ed,
            selectedGiftStyle: ep,
            customGiftMessage: em,
            emojiConfetti: eh,
            soundEffect: eC,
            giftRecipient: eA,
            selectedGiftingPromotionReward: ey,
        } = (0, M.Pv)(),
        eE = (0, _.Mq)(eu),
        eP = (0, g.lo)(eA),
        eS = {};
    (eS.gift_style = ep),
        (eS.reward_sku_ids = eE && null != ey ? [ey] : []),
        eP === g.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != eA, "Gift recipient must be set at purchase review step for these gift options."),
            (eS.recipient_id = eA.id),
            (eS.custom_message = em),
            (eS.emoji_id = eh?.id),
            (eS.emoji_name = eh?.id == null ? eh?.surrogates : void 0),
            (eS.sound_id = eC?.soundId));
    let e_ = eu?.id,
        { analyticsLocations: ef } = (0, m.Ay)(),
        eT = (0, Y.W)(er, en),
        eI = (0, u.bG)([h.A], () => h.A.getBalance(en ?? ""), [en]),
        ex = null != eI ? eI.amount : null,
        eN = null != eI ? eI.currency : null,
        [eg, ev] = a.useState(!1),
        [eM, eb] = a.useState(!1),
        { hasEntitlements: ej } = (0, I.X)(e_, ed),
        eR = (0, v.J$)(ei.paymentSourceId),
        eL = (0, f.l)(),
        eO = null;
    es === D.VVm.ONE_TIME &&
        (o()(null != $, "SKU must be selected for one-time purchases"),
        (eO = ec[$] ?? null),
        o()(null != eO, "SKU must exist and be fetched."));
    let eD = a.useCallback(() => {
            ee(k.h.PURCHASING),
                Q(!0),
                ev(!0),
                d.h.wait(p.ET),
                el(null),
                N.default.track(D.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...L,
                    subtotal: X?.subtotal,
                    tax: X?.tax,
                    expected_amount: X?.total,
                    expected_currency: X?.currency,
                    duration_ms: Date.now() - O,
                    gift_card_balance: ex,
                    gift_card_currency: eN,
                });
        }, [ee, Q, el, L, O, X, ex, eN]),
        ew = a.useCallback(
            (e) => {
                ee(k.h.FAIL),
                    el(e),
                    N.default.track(D.HAw.PAYMENT_FLOW_FAILED, {
                        ...L,
                        payment_error_code: e?.code,
                        payment_source_id: eT?.id,
                        payment_source_type: eT?.type,
                        duration_ms: Date.now() - O,
                        gift_card_balance: ex,
                        gift_card_currency: eN,
                    });
            },
            [ee, el, L, O, eT, ex, eN],
        ),
        eU = a.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eb(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (ee(k.h.COMPLETED), { shouldReturnEarly: !1 }),
            [ee],
        ),
        ek = a.useCallback(() => {
            eM || ev(!1);
        }, [eM]),
        eY = async () => {
            await U({
                onPurchaseAttempt: eD,
                onPurchaseError: ew,
                onPurchaseComplete: eU,
                onPurchaseFinalize: ek,
                hasRedirectURL: eM,
                isGift: ed,
                analyticsLocation: V,
                analyticsLocations: ef,
                subscriptionPlan: eu,
                planGroup: W,
                trialId: w,
                priceOptions: ei,
                paymentSource: eT,
                isPrepaidPaymentPastDue: eL,
                openInvoiceId: H,
                premiumSubscription: t,
                onNext: i,
                metadata: K,
                sku: eO,
                purchaseType: es,
                referralCode: eo,
                loadId: et.loadId,
                giftInfoOptions: eS,
                invoicePreview: X,
                order: ea,
            });
        },
        eG = (0, C.D7)({ location: "PaymentModalReviewStepFooter" }),
        eF = null != H || (es === D.VVm.ONE_TIME && !ed),
        eB = Z && !eF,
        eW = {
            legalTermsNodeRef: s,
            invoiceError: j,
            planError: R,
            disablePurchase: q,
            flashLegalTerms: P,
            isSubmitting: eg,
            premiumSubscription: t,
            isGift: ed,
            planGroup: W,
            isPrepaid: eR,
            isTrial: z,
            makePurchase: eY,
            needsPaymentSource: null == eT && !ej,
            onNext: i,
            onPaymentSourceAdd: J,
        };
    return eG
        ? (0, l.jsx)(B, { ...eW, selectedSkuId: $, showBackButton: eB, onBackClick: n })
        : (0, l.jsx)(c.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(F.eT, { [F.U3]: eB }),
                  children: [
                      eB ? (0, l.jsx)("div", { className: F.aX, children: (0, l.jsx)(T.A, { onClick: n }) }) : null,
                      (0, l.jsx)(G.A, {}),
                      (0, l.jsx)(x.Ay, { ...eW }),
                  ],
              }),
          });
}
