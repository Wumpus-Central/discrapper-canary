n.d(t, { A: () => G });
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
    h = n(558620),
    C = n(427675),
    A = n(480642),
    E = n(94420),
    y = n(380619),
    P = n(155984),
    S = n(683433),
    _ = n(344159),
    T = n(367921),
    f = n(174459),
    N = n(45938),
    I = n(428262),
    x = n(937008),
    g = n(834252),
    v = n(158032),
    M = n(830382),
    b = n(753390),
    R = n(243217),
    j = n(652215),
    L = n(788868);
async function O(e) {
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
        purchaseType: _,
        referralCode: T,
        loadId: f,
        giftInfoOptions: N,
        invoicePreview: x,
        order: g,
    } = e;
    try {
        let e, n, a, O;
        if ((t(), i)) return;
        if (_ === j.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != x, "invoicePreview must exist."),
                (e = await (0, M.XU)(S.applicationId, S.id, {
                    expectedAmount: x.total,
                    expectedCurrency: x.currency,
                    isGift: r,
                    paymentSource: h,
                    loadId: f,
                    giftInfoOptions: N,
                    orderId: g?.id,
                }));
        else {
            o()(null != c, "Missing subscriptionPlan"), o()(null != x, "Missing invoicePreview");
            let t = { amount: x.total, currency: x.currency },
                n = (0, I.l6)(m, x.checkoutContext?.available_plans),
                l = (0, I.$Q)((0, I.y8)(c.id, !1, !1, n));
            if (null != E) {
                let e = m.currency ?? x.currency,
                    t = (0, I.Pg)(E, c.id, 1, new Set(d));
                (t = (0, I.qn)(t)), (l = (0, I.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (r) {
                let t = x.total,
                    n = x.currency;
                e = await (0, M.XU)(L.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: f,
                    giftInfoOptions: N,
                    orderId: g?.id,
                });
            } else if (C && null != A && null != h && null != E) {
                let n = m.currency ?? x.currency;
                e = j.AD1.has(h.type)
                    ? await (0, b.LD)(E, A, h, n, f)
                    : await (0, b.nV)(E, { paymentSource: h, currency: n }, t, l, u, s, f);
            } else if (null != E) {
                let n = (0, I.Pg)(E, c.id, 1, new Set(d)),
                    a = { paymentSource: h, currency: m.currency ?? x.currency };
                E.status === j.Dmq.PAUSED && (a.status = j.Dmq.ACTIVE),
                    E.isPausedAllowsResumeButNotUpdates || (a.items = n),
                    (e = await (0, b.nV)(E, a, t, l, u, s, f));
            } else
                e = await (0, v.B1)({
                    planId: c.id,
                    currency: m.currency ?? x.currency,
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
                (O =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            y(n, a, O);
    } catch (e) {
        n(e);
    } finally {
        a();
    }
}
var D = n(566980),
    w = n(216641),
    U = n(999784),
    k = n(650098);
let Y = (e) => {
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
            hasPaymentSources: E,
        } = (0, T.Ke)({ premiumSubscription: i, isGift: r, planGroup: s, isPrepaid: o }),
        y = a.useMemo(
            () =>
                (0, T.X1)(e, {
                    buttonLabel: u,
                    analyticsLocations: c,
                    application: d,
                    hasAcceptedTerms: p,
                    paymentSourceId: m,
                    activeSubscription: h,
                    devShelfFetchState: C,
                    hasPaymentSources: E,
                }),
            [e, u, c, d, p, m, h, C, E],
        );
    return (0, l.jsx)(A.lo, { onBackClick: t ? n : void 0, primaryButtonProps: y });
};
function G(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: i,
            legalTermsNodeRef: s,
            flashLegalTerms: A,
            invoiceError: v,
            planError: M,
            baseAnalyticsData: b,
            flowStartTime: R,
            trialId: L,
            planGroup: G = [],
            analyticsLocation: F,
            openInvoiceId: B,
            metadata: W,
            backButtonEligible: V,
            disablePurchase: H,
            isTrial: K = !1,
            onPaymentSourceAdd: Z,
        } = e,
        {
            selectedSkuId: q,
            invoicePreview: z,
            setHasAcceptedTerms: $,
            setPurchaseState: J,
            contextMetadata: X,
            order: Q,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            order: e.order,
        })),
        {
            priceOptions: ee,
            setPurchaseError: et,
            purchaseType: en,
            paymentSourceId: el,
            paymentSources: ea,
            referralCode: ei,
        } = (0, g.P5)(),
        er = (0, h.A)(),
        es = (0, C.gU)(),
        {
            isGift: eo,
            selectedGiftStyle: eu,
            customGiftMessage: ec,
            emojiConfetti: ed,
            soundEffect: ep,
            giftRecipient: em,
            selectedGiftingPromotionReward: eh,
        } = (0, x.Pv)(),
        eC = (0, y.Mq)(er),
        eA = (0, N.lo)(em),
        eE = {};
    (eE.gift_style = eu),
        (eE.reward_sku_ids = eC && null != eh ? [eh] : []),
        eA === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != em, "Gift recipient must be set at purchase review step for these gift options."),
            (eE.recipient_id = em.id),
            (eE.custom_message = ec),
            (eE.emoji_id = ed?.id),
            (eE.emoji_name = ed?.id == null ? ed?.surrogates : void 0),
            (eE.sound_id = ep?.soundId));
    let ey = er?.id,
        { analyticsLocations: eP } = (0, p.Ay)(),
        eS = (0, w.W)(ea, el),
        [e_, eT] = a.useState(!1),
        [ef, eN] = a.useState(!1),
        { hasEntitlements: eI } = (0, _.X)(ey, eo),
        ex = (0, I.J$)(ee.paymentSourceId),
        eg = (0, P.l)(),
        ev = null;
    en === j.VVm.ONE_TIME &&
        (o()(null != q, "SKU must be selected for one-time purchases"),
        (ev = es[q] ?? null),
        o()(null != ev, "SKU must exist and be fetched."));
    let eM = a.useCallback(() => {
            J(D.h.PURCHASING),
                $(!0),
                eT(!0),
                c.h.wait(d.ET),
                et(null),
                f.default.track(j.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...b,
                    subtotal: z?.subtotal,
                    tax: z?.tax,
                    expected_amount: z?.total,
                    expected_currency: z?.currency,
                    duration_ms: Date.now() - R,
                });
        }, [J, $, et, b, R, z]),
        eb = a.useCallback(
            (e) => {
                J(D.h.FAIL),
                    et(e),
                    f.default.track(j.HAw.PAYMENT_FLOW_FAILED, {
                        ...b,
                        payment_error_code: e?.code,
                        payment_source_id: eS?.id,
                        payment_source_type: eS?.type,
                        duration_ms: Date.now() - R,
                    });
            },
            [J, et, b, R, eS],
        ),
        eR = a.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eN(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (J(D.h.COMPLETED), { shouldReturnEarly: !1 }),
            [J],
        ),
        ej = a.useCallback(() => {
            ef || eT(!1);
        }, [ef]),
        eL = async () => {
            await O({
                onPurchaseAttempt: eM,
                onPurchaseError: eb,
                onPurchaseComplete: eR,
                onPurchaseFinalize: ej,
                hasRedirectURL: ef,
                isGift: eo,
                analyticsLocation: F,
                analyticsLocations: eP,
                subscriptionPlan: er,
                planGroup: G,
                trialId: L,
                priceOptions: ee,
                paymentSource: eS,
                isPrepaidPaymentPastDue: eg,
                openInvoiceId: B,
                premiumSubscription: t,
                onNext: i,
                metadata: W,
                sku: ev,
                purchaseType: en,
                referralCode: ei,
                loadId: X.loadId,
                giftInfoOptions: eE,
                invoicePreview: z,
                order: Q,
            });
        },
        eO = (0, m.D7)({ location: "PaymentModalReviewStepFooter" }),
        eD = null != B || (en === j.VVm.ONE_TIME && !eo),
        ew = V && !eD,
        eU = {
            legalTermsNodeRef: s,
            invoiceError: v,
            planError: M,
            disablePurchase: H,
            flashLegalTerms: A,
            isSubmitting: e_,
            premiumSubscription: t,
            isGift: eo,
            planGroup: G,
            isPrepaid: ex,
            isTrial: K,
            makePurchase: eL,
            needsPaymentSource: null == eS && !eI,
            onNext: i,
            onPaymentSourceAdd: Z,
        };
    return eO
        ? (0, l.jsx)(Y, { ...eU, selectedSkuId: q, showBackButton: ew, onBackClick: n })
        : (0, l.jsx)(u.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(k.eT, { [k.U3]: ew }),
                  children: [
                      ew ? (0, l.jsx)("div", { className: k.aX, children: (0, l.jsx)(S.A, { onClick: n }) }) : null,
                      (0, l.jsx)(U.A, {}),
                      (0, l.jsx)(T.Ay, { ...eU }),
                  ],
              }),
          });
}
