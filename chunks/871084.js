"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    d = n(17928),
    _ = n(364840),
    u = n(688810),
    c = n(742810),
    E = n(558620),
    h = n(427675),
    m = n(169797),
    f = n(94420),
    g = n(810498),
    p = n(155984),
    A = n(683433),
    I = n(344159),
    T = n(367921),
    S = n(79387),
    N = n(45938),
    C = n(927578),
    R = n(123633),
    O = n(937008),
    y = n(156312),
    v = n(228366),
    D = n(391048),
    L = n(158032),
    b = n(830382),
    w = n(323082),
    P = n(243217),
    k = n(954571),
    M = n(566980),
    U = n(652215),
    x = n(788868);
async function G(e) {
    let {
        setPurchaseState: t,
        setHasAcceptedTerms: n,
        setIsSubmitting: i,
        setPurchaseError: r,
        hasRedirectURL: s,
        setHasRedirectURL: a,
        isGift: o,
        baseAnalyticsData: d,
        analyticsLocation: _,
        analyticsLocations: u,
        flowStartTime: c,
        subscriptionPlan: E,
        planGroup: h,
        trialId: m,
        priceOptions: f,
        paymentSource: g,
        isPrepaidPaymentPastDue: p,
        openInvoiceId: A,
        premiumSubscription: I,
        onNext: T,
        metadata: S,
        sku: N,
        skuPricePreview: R,
        purchaseType: O,
        referralCode: y,
        loadId: G,
        giftInfoOptions: V,
        invoicePreview: F,
        orderId: B,
    } = e;
    t(M.h.PURCHASING), n(!0), i(!0), v.h.wait(D.ET), r(null);
    try {
        let e, n, i, r;
        if (
            (k.default.track(U.HAw.PAYMENT_FLOW_COMPLETED, {
                ...d,
                subtotal: F?.subtotal,
                tax: F?.tax,
                expected_amount: F?.total,
                expected_currency: F?.currency,
                duration_ms: Date.now() - c,
            }),
            s)
        )
            return;
        if (O === U.VVm.ONE_TIME)
            l()(null != N, "SKU must exist and be fetched."),
                l()(null != R, "SKUPricePreview must exist."),
                (e = await (0, b.XU)(N.applicationId, N.id, {
                    expectedAmount: R.amount,
                    expectedCurrency: R.currency,
                    isGift: o,
                    paymentSource: g,
                    loadId: G,
                    giftInfoOptions: V,
                    orderId: B,
                }));
        else {
            l()(null != E, "Missing subscriptionPlan"), l()(null != F, "Missing invoicePreview");
            let t = { amount: F.total, currency: F.currency },
                n = (0, C.l6)(f, F.checkoutContext?.available_plans),
                i = (0, C.$Q)((0, C.y8)(E.id, !1, !1, n));
            if (null != I) {
                let e = f.currency ?? F.currency,
                    t = (0, C.Pg)(I, E.id, 1, new Set(h));
                (t = (0, C.qn)(t)), (i = (0, C.UC)(t, e.toLowerCase(), f.paymentSourceId));
            }
            if (o) {
                let t = F.total,
                    n = F.currency;
                e = await (0, b.XU)(x.tv, E.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: g,
                    subscriptionPlanId: E.id,
                    isGift: !0,
                    loadId: G,
                    giftInfoOptions: V,
                    orderId: B,
                });
            } else if (p && null != A && null != g && null != I) {
                let n = f.currency ?? F.currency;
                e = U.AD1.has(g.type)
                    ? await (0, w.LD)(I, A, g, n, G)
                    : await (0, w.nV)(I, { paymentSource: g, currency: n }, t, i, u, _, G);
            } else if (null != I) {
                let n = (0, C.Pg)(I, E.id, 1, new Set(h)),
                    r = { paymentSource: g, currency: f.currency ?? F.currency };
                I.status === U.Dmq.PAUSED && (r.status = U.Dmq.ACTIVE),
                    I.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, w.nV)(I, r, t, i, u, _, G));
            } else
                e = await (0, L.B1)({
                    planId: E.id,
                    currency: f.currency ?? F.currency,
                    paymentSource: g,
                    trialId: m,
                    metadata: S,
                    referralCode: y,
                    loadId: G,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: i,
                });
        }
        if (e.redirectConfirmation) return void a(null != e.redirectURL);
        t(M.h.COMPLETED),
            "subscription" in e
                ? (n = null != e.subscription ? P.A.createFromServer(e.subscription) : null)
                : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (r =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            T(n, i, r);
    } catch (e) {
        t(M.h.FAIL),
            r(e),
            k.default.track(U.HAw.PAYMENT_FLOW_FAILED, {
                ...d,
                payment_error_code: e?.code,
                payment_source_id: g?.id,
                payment_source_type: g?.type,
                duration_ms: Date.now() - c,
            });
    } finally {
        s || i(!1);
    }
}
var V = n(216641),
    F = n(999784),
    B = n(650098);
let H = (e) => {
    let { showBackButton: t, onBackClick: n } = e,
        { premiumSubscription: s, isGift: a, planGroup: o, isPrepaid: l } = e,
        {
            buttonLabel: d,
            analyticsLocations: _,
            application: u,
            hasAcceptedTerms: c,
            paymentSourceId: E,
            activeSubscription: h,
            devShelfFetchState: f,
            hasPaymentSources: g,
        } = (0, T.Ke)({ premiumSubscription: s, isGift: a, planGroup: o, isPrepaid: l }),
        p = r.useMemo(
            () =>
                (0, T.X1)(e, {
                    buttonLabel: d,
                    analyticsLocations: _,
                    application: u,
                    hasAcceptedTerms: c,
                    paymentSourceId: E,
                    activeSubscription: h,
                    devShelfFetchState: f,
                    hasPaymentSources: g,
                }),
            [e, d, _, u, c, E, h, f, g],
        );
    return (0, i.jsx)(m.lo, { onBackClick: t ? n : void 0, primaryButtonProps: p });
};
function j(e) {
    let {
            premiumSubscription: t,
            setPurchaseState: n,
            onBack: s,
            onNext: o,
            legalTermsNodeRef: m,
            flashLegalTerms: v,
            invoiceError: D,
            planError: L,
            baseAnalyticsData: b,
            flowStartTime: w,
            trialId: P,
            planGroup: k,
            analyticsLocation: M,
            openInvoiceId: x,
            metadata: j,
            backButtonEligible: W,
            disablePurchase: Y,
            isTrial: K = !1,
            onPaymentSourceAdd: z,
        } = e,
        { selectedSkuId: $, invoicePreview: q } = (0, f.t4)((e) => {
            let { selectedSkuId: t, checkoutInvoicePreview: n } = e;
            return { selectedSkuId: t, invoicePreview: n };
        }),
        {
            priceOptions: X,
            setHasAcceptedTerms: Z,
            setPurchaseError: Q,
            purchaseType: J,
            paymentSourceId: ee,
            paymentSources: et,
            referralCode: en,
            contextMetadata: ei,
        } = (0, y.P5)(),
        er = (0, E.A)(),
        es = (0, h.gU)(),
        ea = (0, h.RR)(),
        {
            isGift: eo,
            selectedGiftStyle: el,
            customGiftMessage: ed,
            emojiConfetti: e_,
            soundEffect: eu,
            giftRecipient: ec,
            selectedGiftingPromotionReward: eE,
        } = (0, O.Pv)(),
        eh = (0, g.Mq)(er),
        em = (0, N.lo)(ec),
        ef = {};
    (ef.gift_style = el),
        (ef.reward_sku_ids = eh && null != eE ? [eE] : []),
        em === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (l()(null != ec, "Gift recipient must be set at purchase review step for these gift options."),
            (ef.recipient_id = ec.id),
            (ef.custom_message = ed),
            (ef.emoji_id = e_?.id),
            (ef.emoji_name = e_?.id == null ? e_?.surrogates : void 0),
            (ef.sound_id = eu?.soundId));
    let eg = er?.id,
        { analyticsLocations: ep } = (0, u.Ay)(),
        eA = (0, V.W)(et, ee),
        [eI, eT] = r.useState(!1),
        [eS, eN] = r.useState(!1),
        { hasEntitlements: eC } = (0, I.X)(eg, eo),
        eR = (0, C.J$)(X.paymentSourceId),
        eO = (0, p.l)(),
        ey = (0, d.bG)([R.A], () => R.A.currentOrderId),
        ev = null,
        eD = null;
    if (J === U.VVm.ONE_TIME) {
        l()(null != $, "SKU must be selected for one-time purchases"),
            (ev = es[$] ?? null),
            l()(null != ev, "SKU must exist and be fetched.");
        let e = ea[$],
            t = ee ?? S.B;
        eD = null != e ? (e[t] ?? e[S.B]) : null;
    }
    let eL = async () => {
            await G({
                setPurchaseState: n,
                setHasAcceptedTerms: Z,
                setIsSubmitting: eT,
                setPurchaseError: Q,
                hasRedirectURL: eS,
                setHasRedirectURL: eN,
                isGift: eo,
                baseAnalyticsData: b,
                analyticsLocation: M,
                analyticsLocations: ep,
                flowStartTime: w,
                subscriptionPlan: er,
                planGroup: k,
                trialId: P,
                priceOptions: X,
                paymentSource: eA,
                isPrepaidPaymentPastDue: eO,
                openInvoiceId: x,
                premiumSubscription: t,
                onNext: o,
                metadata: j,
                sku: ev,
                skuPricePreview: eD,
                purchaseType: J,
                referralCode: en,
                loadId: ei.loadId,
                giftInfoOptions: ef,
                invoicePreview: q,
                orderId: ey,
            });
        },
        eb = (0, c.D7)({ location: "PaymentModalReviewStepFooter" }),
        ew = null != x || (J === U.VVm.ONE_TIME && !eo),
        eP = W && !ew,
        ek = {
            legalTermsNodeRef: m,
            invoiceError: D,
            planError: L,
            disablePurchase: Y,
            flashLegalTerms: v,
            isSubmitting: eI,
            premiumSubscription: t,
            isGift: eo,
            planGroup: k,
            isPrepaid: eR,
            isTrial: K,
            makePurchase: eL,
            needsPaymentSource: null == eA && !eC,
            onNext: o,
            onPaymentSourceAdd: z,
        };
    return eb
        ? (0, i.jsx)(H, { ...ek, selectedSkuId: $, showBackButton: eP, onBackClick: s })
        : (0, i.jsx)(_.j, {
              children: (0, i.jsxs)("div", {
                  className: a()(B.eT, { [B.U3]: eP }),
                  children: [
                      eP ? (0, i.jsx)("div", { className: B.aX, children: (0, i.jsx)(A.A, { onClick: s }) }) : null,
                      (0, i.jsx)(F.A, {}),
                      (0, i.jsx)(T.Ay, { ...ek }),
                  ],
              }),
          });
}
