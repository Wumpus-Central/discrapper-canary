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
    E = n(671744),
    P = n(380619),
    S = n(155984),
    f = n(683433),
    _ = n(344159),
    T = n(367921),
    I = n(174459),
    x = n(45938),
    N = n(428262),
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
        purchaseType: f,
        referralCode: _,
        loadId: T,
        giftInfoOptions: I,
        invoicePreview: x,
        order: g,
    } = e;
    try {
        let e, n, a, v;
        if ((t(), i)) return;
        if (f === L.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != x, "invoicePreview must exist."),
                (e = await (0, b.XU)(S.applicationId, S.id, {
                    expectedAmount: x.total,
                    expectedCurrency: x.currency,
                    isGift: r,
                    paymentSource: h,
                    loadId: T,
                    giftInfoOptions: I,
                    orderId: g?.id,
                }));
        else {
            o()(null != c, "Missing subscriptionPlan"), o()(null != x, "Missing invoicePreview");
            let t = { amount: x.total, currency: x.currency },
                n = (0, N.l6)(m, x.checkoutContext?.available_plans),
                l = (0, N.$Q)((0, N.y8)(c.id, !1, !1, n));
            if (null != y) {
                let e = m.currency ?? x.currency,
                    t = (0, N.Pg)(y, c.id, 1, new Set(d));
                (t = (0, N.qn)(t)), (l = (0, N.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (r) {
                let t = x.total,
                    n = x.currency;
                e = await (0, b.XU)(O.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: T,
                    giftInfoOptions: I,
                    orderId: g?.id,
                });
            } else if (C && null != A && null != h && null != y) {
                let n = m.currency ?? x.currency;
                e = L.AD1.has(h.type)
                    ? await (0, j.LD)(y, A, h, n, T)
                    : await (0, j.nV)(y, { paymentSource: h, currency: n }, t, l, u, s, T);
            } else if (null != y) {
                let n = (0, N.Pg)(y, c.id, 1, new Set(d)),
                    a = { paymentSource: h, currency: m.currency ?? x.currency };
                y.status === L.Dmq.PAUSED && (a.status = L.Dmq.ACTIVE),
                    y.isPausedAllowsResumeButNotUpdates || (a.items = n),
                    (e = await (0, j.nV)(y, a, t, l, u, s, T));
            } else
                e = await (0, M.B1)({
                    planId: c.id,
                    currency: m.currency ?? x.currency,
                    paymentSource: h,
                    trialId: p,
                    metadata: P,
                    referralCode: _,
                    loadId: T,
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
        } = (0, T.Ke)({ premiumSubscription: i, isGift: r, planGroup: s, isPrepaid: o }),
        E = a.useMemo(
            () =>
                (0, T.X1)(e, {
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
            invoicePreview: J,
            setHasAcceptedTerms: $,
            setPurchaseState: X,
            contextMetadata: Q,
            paymentSourceId: ee,
            setPurchaseError: et,
            order: en,
            priceOptions: el,
        } = (0, E.t4)((e) => ({
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
        { paymentSources: ea } = (0, h.jm)(),
        { purchaseType: ei, referralCode: er } = (0, v.P5)(),
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
        ey = (0, x.lo)(eh),
        eE = {};
    (eE.gift_style = ec),
        (eE.reward_sku_ids = eA && null != eC ? [eC] : []),
        ey === x.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != eh, "Gift recipient must be set at purchase review step for these gift options."),
            (eE.recipient_id = eh.id),
            (eE.custom_message = ed),
            (eE.emoji_id = ep?.id),
            (eE.emoji_name = ep?.id == null ? ep?.surrogates : void 0),
            (eE.sound_id = em?.soundId));
    let eP = es?.id,
        { analyticsLocations: eS } = (0, p.Ay)(),
        ef = (0, U.W)(ea, ee),
        [e_, eT] = a.useState(!1),
        [eI, ex] = a.useState(!1),
        { hasEntitlements: eN } = (0, _.X)(eP, eu),
        eg = (0, N.J$)(el.paymentSourceId),
        ev = (0, S.l)(),
        eM = null;
    ei === L.VVm.ONE_TIME &&
        (o()(null != z, "SKU must be selected for one-time purchases"),
        (eM = eo[z] ?? null),
        o()(null != eM, "SKU must exist and be fetched."));
    let eb = a.useCallback(() => {
            X(w.h.PURCHASING),
                $(!0),
                eT(!0),
                c.h.wait(d.ET),
                et(null),
                I.default.track(L.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...j,
                    subtotal: J?.subtotal,
                    tax: J?.tax,
                    expected_amount: J?.total,
                    expected_currency: J?.currency,
                    duration_ms: Date.now() - R,
                });
        }, [X, $, et, j, R, J]),
        ej = a.useCallback(
            (e) => {
                X(w.h.FAIL),
                    et(e),
                    I.default.track(L.HAw.PAYMENT_FLOW_FAILED, {
                        ...j,
                        payment_error_code: e?.code,
                        payment_source_id: ef?.id,
                        payment_source_type: ef?.type,
                        duration_ms: Date.now() - R,
                    });
            },
            [X, et, j, R, ef],
        ),
        eR = a.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (ex(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (X(w.h.COMPLETED), { shouldReturnEarly: !1 }),
            [X],
        ),
        eL = a.useCallback(() => {
            eI || eT(!1);
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
                priceOptions: el,
                paymentSource: ef,
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
                invoicePreview: J,
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
            isSubmitting: e_,
            premiumSubscription: t,
            isGift: eu,
            planGroup: F,
            isPrepaid: eg,
            isTrial: Z,
            makePurchase: eO,
            needsPaymentSource: null == ef && !eN,
            onNext: i,
            onPaymentSourceAdd: q,
        };
    return eD
        ? (0, l.jsx)(G, { ...ek, selectedSkuId: z, showBackButton: eU, onBackClick: n })
        : (0, l.jsx)(u.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(Y.eT, { [Y.U3]: eU }),
                  children: [
                      eU ? (0, l.jsx)("div", { className: Y.aX, children: (0, l.jsx)(f.A, { onClick: n }) }) : null,
                      (0, l.jsx)(k.A, {}),
                      (0, l.jsx)(T.Ay, { ...ek }),
                  ],
              }),
          });
}
