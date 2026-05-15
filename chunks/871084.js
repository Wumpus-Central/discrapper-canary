n.d(t, { A: () => F });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(364840),
    c = n(228366),
    d = n(391048),
    p = n(688810),
    m = n(742810),
    h = n(426398),
    C = n(558620),
    A = n(427675),
    y = n(480642),
    E = n(94420),
    P = n(380619),
    S = n(155984),
    _ = n(683433),
    T = n(344159),
    f = n(367921),
    I = n(174459),
    N = n(45938),
    x = n(428262),
    g = n(937008),
    v = n(834252),
    M = n(158032),
    b = n(830382),
    j = n(753390),
    R = n(243217),
    L = n(652215),
    O = n(788868);
async function D(e) {
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
        referralCode: T,
        loadId: f,
        giftInfoOptions: I,
        invoicePreview: N,
        order: g,
    } = e;
    try {
        let e, n, a, v;
        if ((t(), i)) return;
        if (_ === L.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != N, "invoicePreview must exist."),
                (e = await (0, b.XU)(S.applicationId, S.id, {
                    expectedAmount: N.total,
                    expectedCurrency: N.currency,
                    isGift: r,
                    paymentSource: h,
                    loadId: f,
                    giftInfoOptions: I,
                    orderId: g?.id,
                }));
        else {
            o()(null != c, "Missing subscriptionPlan"), o()(null != N, "Missing invoicePreview");
            let t = { amount: N.total, currency: N.currency },
                n = (0, x.l6)(m, N.checkoutContext?.available_plans),
                l = (0, x.$Q)((0, x.y8)(c.id, !1, !1, n));
            if (null != y) {
                let e = m.currency ?? N.currency,
                    t = (0, x.Pg)(y, c.id, 1, new Set(d));
                (t = (0, x.qn)(t)), (l = (0, x.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (r) {
                let t = N.total,
                    n = N.currency;
                e = await (0, b.XU)(O.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: f,
                    giftInfoOptions: I,
                    orderId: g?.id,
                });
            } else if (C && null != A && null != h && null != y) {
                let n = m.currency ?? N.currency;
                e = L.AD1.has(h.type)
                    ? await (0, j.LD)(y, A, h, n, f)
                    : await (0, j.nV)(y, { paymentSource: h, currency: n }, t, l, u, s, f);
            } else if (null != y) {
                let n = (0, x.Pg)(y, c.id, 1, new Set(d)),
                    a = { paymentSource: h, currency: m.currency ?? N.currency };
                y.status === L.Dmq.PAUSED && (a.status = L.Dmq.ACTIVE),
                    y.isPausedAllowsResumeButNotUpdates || (a.items = n),
                    (e = await (0, j.nV)(y, a, t, l, u, s, f));
            } else
                e = await (0, M.B1)({
                    planId: c.id,
                    currency: m.currency ?? N.currency,
                    paymentSource: h,
                    trialId: p,
                    metadata: P,
                    referralCode: T,
                    loadId: f,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: D } = l(e);
        if (D) return;
        "subscription" in e
            ? (n = null != e.subscription ? R.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (a = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (v =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            E(n, a, v);
    } catch (e) {
        n(e);
    } finally {
        a();
    }
}
var w = n(566980),
    U = n(216641),
    k = n(999784),
    Y = n(650098);
let G = (e) => {
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
        E = a.useMemo(
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
    return (0, l.jsx)(y.lo, { onBackClick: t ? n : void 0, primaryButtonProps: E });
};
function F(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: i,
            legalTermsNodeRef: s,
            flashLegalTerms: y,
            invoiceError: M,
            planError: b,
            baseAnalyticsData: j,
            flowStartTime: R,
            trialId: O,
            planGroup: F = [],
            analyticsLocation: B,
            openInvoiceId: W,
            metadata: V,
            backButtonEligible: H,
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
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            contextMetadata: e.contextMetadata,
            order: e.order,
            paymentSourceId: e.paymentSourceId,
        })),
        { paymentSources: el } = (0, h.jm)(),
        { priceOptions: ea, purchaseType: ei, referralCode: er } = (0, v.P5)(),
        es = (0, C.A)(),
        eo = (0, A.gU)(),
        {
            isGift: eu,
            selectedGiftStyle: ec,
            customGiftMessage: ed,
            emojiConfetti: ep,
            soundEffect: em,
            giftRecipient: eh,
            selectedGiftingPromotionReward: eC,
        } = (0, g.Pv)(),
        eA = (0, P.Mq)(es),
        ey = (0, N.lo)(eh),
        eE = {};
    (eE.gift_style = ec),
        (eE.reward_sku_ids = eA && null != eC ? [eC] : []),
        ey === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != eh, "Gift recipient must be set at purchase review step for these gift options."),
            (eE.recipient_id = eh.id),
            (eE.custom_message = ed),
            (eE.emoji_id = ep?.id),
            (eE.emoji_name = ep?.id == null ? ep?.surrogates : void 0),
            (eE.sound_id = em?.soundId));
    let eP = es?.id,
        { analyticsLocations: eS } = (0, p.Ay)(),
        e_ = (0, U.W)(el, ee),
        [eT, ef] = a.useState(!1),
        [eI, eN] = a.useState(!1),
        { hasEntitlements: ex } = (0, T.X)(eP, eu),
        eg = (0, x.J$)(ea.paymentSourceId),
        ev = (0, S.l)(),
        eM = null;
    ei === L.VVm.ONE_TIME &&
        (o()(null != z, "SKU must be selected for one-time purchases"),
        (eM = eo[z] ?? null),
        o()(null != eM, "SKU must exist and be fetched."));
    let eb = a.useCallback(() => {
            X(w.h.PURCHASING),
                J(!0),
                ef(!0),
                c.h.wait(d.ET),
                et(null),
                I.default.track(L.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...j,
                    subtotal: $?.subtotal,
                    tax: $?.tax,
                    expected_amount: $?.total,
                    expected_currency: $?.currency,
                    duration_ms: Date.now() - R,
                });
        }, [X, J, et, j, R, $]),
        ej = a.useCallback(
            (e) => {
                X(w.h.FAIL),
                    et(e),
                    I.default.track(L.HAw.PAYMENT_FLOW_FAILED, {
                        ...j,
                        payment_error_code: e?.code,
                        payment_source_id: e_?.id,
                        payment_source_type: e_?.type,
                        duration_ms: Date.now() - R,
                    });
            },
            [X, et, j, R, e_],
        ),
        eR = a.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eN(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (X(w.h.COMPLETED), { shouldReturnEarly: !1 }),
            [X],
        ),
        eL = a.useCallback(() => {
            eI || ef(!1);
        }, [eI]),
        eO = async () => {
            await D({
                onPurchaseAttempt: eb,
                onPurchaseError: ej,
                onPurchaseComplete: eR,
                onPurchaseFinalize: eL,
                hasRedirectURL: eI,
                isGift: eu,
                analyticsLocation: B,
                analyticsLocations: eS,
                subscriptionPlan: es,
                planGroup: F,
                trialId: O,
                priceOptions: ea,
                paymentSource: e_,
                isPrepaidPaymentPastDue: ev,
                openInvoiceId: W,
                premiumSubscription: t,
                onNext: i,
                metadata: V,
                sku: eM,
                purchaseType: ei,
                referralCode: er,
                loadId: Q.loadId,
                giftInfoOptions: eE,
                invoicePreview: $,
                order: en,
            });
        },
        eD = (0, m.D7)({ location: "PaymentModalReviewStepFooter" }),
        ew = null != W || (ei === L.VVm.ONE_TIME && !eu),
        eU = H && !ew,
        ek = {
            legalTermsNodeRef: s,
            invoiceError: M,
            planError: b,
            disablePurchase: K,
            flashLegalTerms: y,
            isSubmitting: eT,
            premiumSubscription: t,
            isGift: eu,
            planGroup: F,
            isPrepaid: eg,
            isTrial: Z,
            makePurchase: eO,
            needsPaymentSource: null == e_ && !ex,
            onNext: i,
            onPaymentSourceAdd: q,
        };
    return eD
        ? (0, l.jsx)(G, { ...ek, selectedSkuId: z, showBackButton: eU, onBackClick: n })
        : (0, l.jsx)(u.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(Y.eT, { [Y.U3]: eU }),
                  children: [
                      eU ? (0, l.jsx)("div", { className: Y.aX, children: (0, l.jsx)(_.A, { onClick: n }) }) : null,
                      (0, l.jsx)(k.A, {}),
                      (0, l.jsx)(f.Ay, { ...ek }),
                  ],
              }),
          });
}
