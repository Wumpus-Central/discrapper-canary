n.d(t, { A: () => F });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(364840),
    c = n(228366),
    d = n(391048),
    p = n(688810),
    m = n(11939),
    h = n(742810),
    A = n(426398),
    C = n(558620),
    E = n(427675),
    y = n(480642),
    P = n(571878),
    S = n(380619),
    _ = n(155984),
    f = n(683433),
    I = n(344159),
    T = n(367921),
    N = n(174459),
    v = n(45938),
    g = n(428262),
    x = n(937008),
    R = n(158032),
    M = n(830382),
    b = n(753390),
    L = n(243217),
    j = n(652215),
    O = n(788868);
async function w(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: l,
        onPurchaseFinalize: r,
        hasRedirectURL: i,
        isGift: a,
        analyticsLocation: s,
        analyticsLocations: u,
        subscriptionPlan: c,
        planGroup: d,
        trialId: p,
        priceOptions: m,
        paymentSource: h,
        isPrepaidPaymentPastDue: A,
        openInvoiceId: C,
        premiumSubscription: E,
        onNext: y,
        metadata: P,
        sku: S,
        purchaseType: _,
        referralCode: f,
        loadId: I,
        giftInfoOptions: T,
        invoicePreview: N,
        order: v,
    } = e;
    try {
        let e, n, r, x;
        if ((t(), i)) return;
        if (_ === j.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != N, "invoicePreview must exist."),
                (e = await (0, M.XU)(S.applicationId, S.id, {
                    expectedAmount: N.total,
                    expectedCurrency: N.currency,
                    isGift: a,
                    paymentSource: h,
                    loadId: I,
                    giftInfoOptions: T,
                    orderId: v?.id,
                }));
        else {
            o()(null != c, "Missing subscriptionPlan"), o()(null != N, "Missing invoicePreview");
            let t = { amount: N.total, currency: N.currency },
                n = (0, g.l6)(m, N.checkoutContext?.available_plans),
                l = (0, g.$Q)((0, g.y8)(c.id, !1, !1, n));
            if (null != E) {
                let e = m.currency ?? N.currency,
                    t = (0, g.Pg)(E, c.id, 1, new Set(d));
                (t = (0, g.qn)(t)), (l = (0, g.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (a) {
                let t = N.total,
                    n = N.currency;
                e = await (0, M.XU)(O.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: I,
                    giftInfoOptions: T,
                    orderId: v?.id,
                });
            } else if (A && null != C && null != h && null != E) {
                let n = m.currency ?? N.currency;
                e = j.AD1.has(h.type)
                    ? await (0, b.LD)(E, C, h, n, I)
                    : await (0, b.nV)(E, { paymentSource: h, currency: n }, t, l, u, s, I);
            } else if (null != E) {
                let n = (0, g.Pg)(E, c.id, 1, new Set(d)),
                    r = { paymentSource: h, currency: m.currency ?? N.currency };
                E.status === j.Dmq.PAUSED && (r.status = j.Dmq.ACTIVE),
                    E.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, b.nV)(E, r, t, l, u, s, I));
            } else
                e = await (0, R.B1)({
                    planId: c.id,
                    currency: m.currency ?? N.currency,
                    paymentSource: h,
                    trialId: p,
                    metadata: P,
                    referralCode: f,
                    loadId: I,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: w } = l(e);
        if (w) return;
        "subscription" in e
            ? (n = null != e.subscription ? L.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (x =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            y(n, r, x);
    } catch (e) {
        n(e);
    } finally {
        r();
    }
}
var D = n(566980),
    U = n(216641),
    k = n(999784),
    G = n(650098);
let Y = (e) => {
    let { showBackButton: t, onBackClick: n } = e,
        { premiumSubscription: i, isGift: a, planGroup: s, isPrepaid: o } = e,
        {
            buttonLabel: u,
            analyticsLocations: c,
            application: d,
            hasAcceptedTerms: p,
            paymentSourceId: m,
            activeSubscription: h,
            devShelfFetchState: A,
            hasPaymentSources: C,
        } = (0, T.Ke)({ premiumSubscription: i, isGift: a, planGroup: s, isPrepaid: o }),
        E = r.useMemo(
            () =>
                (0, T.X1)(e, {
                    buttonLabel: u,
                    analyticsLocations: c,
                    application: d,
                    hasAcceptedTerms: p,
                    paymentSourceId: m,
                    activeSubscription: h,
                    devShelfFetchState: A,
                    hasPaymentSources: C,
                }),
            [e, u, c, d, p, m, h, A, C],
        );
    return (0, l.jsx)(y.lo, { onBackClick: t ? n : void 0, primaryButtonProps: E });
};
function F(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: i,
            legalTermsNodeRef: s,
            flashLegalTerms: y,
            invoiceError: R,
            planError: M,
            baseAnalyticsData: b,
            flowStartTime: L,
            trialId: O,
            planGroup: F = [],
            analyticsLocation: B,
            openInvoiceId: W,
            metadata: H,
            backButtonEligible: V,
            disablePurchase: K,
            isTrial: Z = !1,
            onPaymentSourceAdd: q,
        } = e,
        {
            selectedSkuId: z,
            invoicePreview: $,
            setHasAcceptedTerms: J,
            setPurchaseState: X,
            contextMetadata: Q,
            paymentSourceId: ee,
            setPurchaseError: et,
            order: en,
            priceOptions: el,
            purchaseType: er,
            referralCode: ei,
        } = (0, P.t4)((e) => ({
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
        { paymentSources: ea } = (0, A.jm)(),
        es = (0, C.A)(),
        eo = (0, E.gU)(),
        {
            isGift: eu,
            selectedGiftStyle: ec,
            customGiftMessage: ed,
            emojiConfetti: ep,
            soundEffect: em,
            giftRecipient: eh,
            selectedGiftingPromotionReward: eA,
        } = (0, x.Pv)(),
        eC = (0, S.Mq)(es),
        eE = (0, v.lo)(eh),
        ey = {};
    (ey.gift_style = ec),
        (ey.reward_sku_ids = eC && null != eA ? [eA] : []),
        eE === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != eh, "Gift recipient must be set at purchase review step for these gift options."),
            (ey.recipient_id = eh.id),
            (ey.custom_message = ed),
            (ey.emoji_id = ep?.id),
            (ey.emoji_name = ep?.id == null ? ep?.surrogates : void 0),
            (ey.sound_id = em?.soundId));
    let eP = es?.id,
        { analyticsLocations: eS } = (0, p.Ay)(),
        e_ = (0, U.W)(ea, ee),
        { giftCardBalance: ef, giftCardCurrency: eI } = (0, m.h)(),
        [eT, eN] = r.useState(!1),
        [ev, eg] = r.useState(!1),
        { hasEntitlements: ex } = (0, I.X)(eP, eu),
        eR = (0, g.J$)(el.paymentSourceId),
        eM = (0, _.l)(),
        eb = null;
    er === j.VVm.ONE_TIME &&
        (o()(null != z, "SKU must be selected for one-time purchases"),
        (eb = eo[z] ?? null),
        o()(null != eb, "SKU must exist and be fetched."));
    let eL = r.useCallback(() => {
            X(D.h.PURCHASING),
                J(!0),
                eN(!0),
                c.h.wait(d.ET),
                et(null),
                N.default.track(j.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...b,
                    subtotal: $?.subtotal,
                    tax: $?.tax,
                    expected_amount: $?.total,
                    expected_currency: $?.currency,
                    duration_ms: Date.now() - L,
                    gift_card_balance: ef,
                    gift_card_currency: eI,
                });
        }, [X, J, et, b, L, $, ef, eI]),
        ej = r.useCallback(
            (e) => {
                X(D.h.FAIL),
                    et(e),
                    N.default.track(j.HAw.PAYMENT_FLOW_FAILED, {
                        ...b,
                        payment_error_code: e?.code,
                        payment_source_id: e_?.id,
                        payment_source_type: e_?.type,
                        duration_ms: Date.now() - L,
                        gift_card_balance: ef,
                        gift_card_currency: eI,
                    });
            },
            [X, et, b, L, e_, ef, eI],
        ),
        eO = r.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eg(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (X(D.h.COMPLETED), { shouldReturnEarly: !1 }),
            [X],
        ),
        ew = r.useCallback(() => {
            ev || eN(!1);
        }, [ev]),
        eD = async () => {
            await w({
                onPurchaseAttempt: eL,
                onPurchaseError: ej,
                onPurchaseComplete: eO,
                onPurchaseFinalize: ew,
                hasRedirectURL: ev,
                isGift: eu,
                analyticsLocation: B,
                analyticsLocations: eS,
                subscriptionPlan: es,
                planGroup: F,
                trialId: O,
                priceOptions: el,
                paymentSource: e_,
                isPrepaidPaymentPastDue: eM,
                openInvoiceId: W,
                premiumSubscription: t,
                onNext: i,
                metadata: H,
                sku: eb,
                purchaseType: er,
                referralCode: ei,
                loadId: Q.loadId,
                giftInfoOptions: ey,
                invoicePreview: $,
                order: en,
            });
        },
        eU = (0, h.D7)({ location: "PaymentModalReviewStepFooter" }),
        ek = null != W || (er === j.VVm.ONE_TIME && !eu),
        eG = V && !ek,
        eY = {
            legalTermsNodeRef: s,
            invoiceError: R,
            planError: M,
            disablePurchase: K,
            flashLegalTerms: y,
            isSubmitting: eT,
            premiumSubscription: t,
            isGift: eu,
            planGroup: F,
            isPrepaid: eR,
            isTrial: Z,
            makePurchase: eD,
            needsPaymentSource: null == e_ && !ex,
            onNext: i,
            onPaymentSourceAdd: q,
        };
    return eU
        ? (0, l.jsx)(Y, { ...eY, selectedSkuId: z, showBackButton: eG, onBackClick: n })
        : (0, l.jsx)(u.j, {
              children: (0, l.jsxs)("div", {
                  className: a()(G.eT, { [G.U3]: eG }),
                  children: [
                      eG ? (0, l.jsx)("div", { className: G.aX, children: (0, l.jsx)(f.A, { onClick: n }) }) : null,
                      (0, l.jsx)(k.A, {}),
                      (0, l.jsx)(T.Ay, { ...eY }),
                  ],
              }),
          });
}
