n.d(t, { A: () => j });
var l = n(627968),
    r = n(64700),
    a = n(284009),
    i = n.n(a),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(11939),
    d = n(426398),
    p = n(558620),
    m = n(427675),
    A = n(480642),
    h = n(211159),
    E = n(380619),
    C = n(155984),
    y = n(344159),
    _ = n(367921),
    P = n(174459),
    S = n(45938),
    I = n(428262),
    T = n(937008),
    f = n(158032),
    N = n(830382),
    v = n(753390),
    g = n(243217),
    x = n(652215),
    R = n(788868);
async function M(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: l,
        onPurchaseFinalize: r,
        hasRedirectURL: a,
        isGift: s,
        analyticsLocation: o,
        analyticsLocations: u,
        subscriptionPlan: c,
        planGroup: d,
        trialId: p,
        priceOptions: m,
        paymentSource: A,
        isPrepaidPaymentPastDue: h,
        openInvoiceId: E,
        premiumSubscription: C,
        onNext: y,
        metadata: _,
        sku: P,
        purchaseType: S,
        referralCode: T,
        loadId: M,
        giftInfoOptions: b,
        invoicePreview: L,
        order: O,
    } = e;
    try {
        let e, n, r, j;
        if ((t(), a)) return;
        if (S === x.VVm.ONE_TIME)
            i()(null != P, "SKU must exist and be fetched."),
                i()(null != L, "invoicePreview must exist."),
                (e = await (0, N.XU)(P.applicationId, P.id, {
                    expectedAmount: L.total,
                    expectedCurrency: L.currency,
                    isGift: s,
                    paymentSource: A,
                    loadId: M,
                    giftInfoOptions: b,
                    orderId: O?.id,
                }));
        else {
            i()(null != c, "Missing subscriptionPlan"), i()(null != L, "Missing invoicePreview");
            let t = { amount: L.total, currency: L.currency },
                n = (0, I.l6)(m, L.checkoutContext?.available_plans),
                l = (0, I.$Q)((0, I.y8)(c.id, !1, !1, n));
            if (null != C) {
                let e = m.currency ?? L.currency,
                    t = (0, I.Pg)(C, c.id, 1, new Set(d));
                (t = (0, I.qn)(t)), (l = (0, I.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (s) {
                let t = L.total,
                    n = L.currency;
                e = await (0, N.XU)(R.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: A,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: M,
                    giftInfoOptions: b,
                    orderId: O?.id,
                });
            } else if (h && null != E && null != A && null != C) {
                let n = m.currency ?? L.currency;
                e = x.AD1.has(A.type)
                    ? await (0, v.LD)(C, E, A, n, M)
                    : await (0, v.nV)(C, { paymentSource: A, currency: n }, t, l, u, o, M);
            } else if (null != C) {
                let n = (0, I.Pg)(C, c.id, 1, new Set(d)),
                    r = { paymentSource: A, currency: m.currency ?? L.currency };
                C.status === x.Dmq.PAUSED && (r.status = x.Dmq.ACTIVE),
                    C.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, v.nV)(C, r, t, l, u, o, M));
            } else
                e = await (0, f.B1)({
                    planId: c.id,
                    currency: m.currency ?? L.currency,
                    paymentSource: A,
                    trialId: p,
                    metadata: _,
                    referralCode: T,
                    loadId: M,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: w } = l(e);
        if (w) return;
        "subscription" in e
            ? (n = null != e.subscription ? g.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (j =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            y(n, r, j);
    } catch (e) {
        n(e);
    } finally {
        r();
    }
}
var b = n(566980),
    L = n(216641);
let O = (e) => {
    let { showBackButton: t, onBackClick: n } = e,
        { premiumSubscription: a, isGift: i, planGroup: s, isPrepaid: o } = e,
        {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: p,
            paymentSourceId: m,
            activeSubscription: h,
            devShelfFetchState: E,
            hasPaymentSources: C,
        } = (0, _.Ke)({ premiumSubscription: a, isGift: i, planGroup: s, isPrepaid: o }),
        y = r.useMemo(
            () =>
                (0, _.X1)(e, {
                    buttonLabel: u,
                    analyticsLocations: c,
                    application: d,
                    hasAcceptedTerms: p,
                    paymentSourceId: m,
                    activeSubscription: h,
                    devShelfFetchState: E,
                    hasPaymentSources: C,
                }),
            [e, u, c, d, p, m, h, E, C],
        );
    return (0, l.jsx)(A.lo, { onBackClick: t ? n : void 0, primaryButtonProps: y });
};
function j(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: a,
            legalTermsNodeRef: A,
            flashLegalTerms: _,
            invoiceError: f,
            planError: N,
            baseAnalyticsData: v,
            flowStartTime: g,
            trialId: R,
            planGroup: j = [],
            analyticsLocation: w,
            openInvoiceId: D,
            metadata: U,
            backButtonEligible: k,
            disablePurchase: G,
            isTrial: F = !1,
            onPaymentSourceAdd: Y,
        } = e,
        {
            selectedSkuId: B,
            invoicePreview: W,
            setHasAcceptedTerms: H,
            setPurchaseState: V,
            contextMetadata: K,
            paymentSourceId: Z,
            setPurchaseError: q,
            order: z,
            priceOptions: J,
            purchaseType: $,
            referralCode: X,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            contextMetadata: e.contextMetadata,
            order: e.order,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            purchaseType: e.purchaseType,
            referralCode: e.referralCode,
        })),
        { paymentSources: Q } = (0, d.jm)(),
        ee = (0, p.A)(),
        et = (0, m.gU)(),
        {
            isGift: en,
            selectedGiftStyle: el,
            customGiftMessage: er,
            emojiConfetti: ea,
            soundEffect: ei,
            giftRecipient: es,
            selectedGiftingPromotionReward: eo,
        } = (0, T.Pv)(),
        eu = (0, E.Mq)(ee),
        ec = (0, S.lo)(es),
        ed = {};
    (ed.gift_style = el),
        (ed.reward_sku_ids = eu && null != eo ? [eo] : []),
        ec === S.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (i()(null != es, "Gift recipient must be set at purchase review step for these gift options."),
            (ed.recipient_id = es.id),
            (ed.custom_message = er),
            (ed.emoji_id = ea?.id),
            (ed.emoji_name = ea?.id == null ? ea?.surrogates : void 0),
            (ed.sound_id = ei?.soundId));
    let ep = ee?.id,
        { analyticsLocations: em } = (0, u.Ay)(),
        eA = (0, L.W)(Q, Z),
        { giftCardBalance: eh, giftCardCurrency: eE } = (0, c.h)(),
        [eC, ey] = r.useState(!1),
        [e_, eP] = r.useState(!1),
        { hasEntitlements: eS } = (0, y.X)(ep, en),
        eI = (0, I.J$)(J.paymentSourceId),
        eT = (0, C.l)(),
        ef = null;
    $ === x.VVm.ONE_TIME &&
        (i()(null != B, "SKU must be selected for one-time purchases"),
        (ef = et[B] ?? null),
        i()(null != ef, "SKU must exist and be fetched."));
    let eN = r.useCallback(() => {
            V(b.h.PURCHASING),
                H(!0),
                ey(!0),
                s.h.wait(o.ET),
                q(null),
                P.default.track(x.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...v,
                    subtotal: W?.subtotal,
                    tax: W?.tax,
                    expected_amount: W?.total,
                    expected_currency: W?.currency,
                    duration_ms: Date.now() - g,
                    gift_card_balance: eh,
                    gift_card_currency: eE,
                });
        }, [V, H, q, v, g, W, eh, eE]),
        ev = r.useCallback(
            (e) => {
                V(b.h.FAIL),
                    q(e),
                    P.default.track(x.HAw.PAYMENT_FLOW_FAILED, {
                        ...v,
                        payment_error_code: e?.code,
                        payment_source_id: eA?.id,
                        payment_source_type: eA?.type,
                        duration_ms: Date.now() - g,
                        gift_card_balance: eh,
                        gift_card_currency: eE,
                    });
            },
            [V, q, v, g, eA, eh, eE],
        ),
        eg = r.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eP(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (V(b.h.COMPLETED), { shouldReturnEarly: !1 }),
            [V],
        ),
        ex = r.useCallback(() => {
            e_ || ey(!1);
        }, [e_]),
        eR = async () => {
            await M({
                onPurchaseAttempt: eN,
                onPurchaseError: ev,
                onPurchaseComplete: eg,
                onPurchaseFinalize: ex,
                hasRedirectURL: e_,
                isGift: en,
                analyticsLocation: w,
                analyticsLocations: em,
                subscriptionPlan: ee,
                planGroup: j,
                trialId: R,
                priceOptions: J,
                paymentSource: eA,
                isPrepaidPaymentPastDue: eT,
                openInvoiceId: D,
                premiumSubscription: t,
                onNext: a,
                metadata: U,
                sku: ef,
                purchaseType: $,
                referralCode: X,
                loadId: K.loadId,
                giftInfoOptions: ed,
                invoicePreview: W,
                order: z,
            });
        },
        eM = null != D || ($ === x.VVm.ONE_TIME && !en);
    return (0, l.jsx)(O, {
        legalTermsNodeRef: A,
        invoiceError: f,
        planError: N,
        disablePurchase: G,
        flashLegalTerms: _,
        isSubmitting: eC,
        premiumSubscription: t,
        isGift: en,
        planGroup: j,
        isPrepaid: eI,
        isTrial: F,
        makePurchase: eR,
        needsPaymentSource: null == eA && !eS,
        onNext: a,
        onPaymentSourceAdd: Y,
        selectedSkuId: B,
        showBackButton: k && !eM,
        onBackClick: n,
    });
}
