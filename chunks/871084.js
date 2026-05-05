n.d(t, { A: () => B });
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
    N = n(174459),
    x = n(45938),
    I = n(927578),
    g = n(123633),
    v = n(937008),
    M = n(278521),
    j = n(158032),
    b = n(830382),
    R = n(753390),
    L = n(243217),
    O = n(652215),
    D = n(788868);
async function w(e) {
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
        orderId: g,
    } = e;
    try {
        let e, n, a, v;
        if ((t(), i)) return;
        if (_ === O.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != x, "invoicePreview must exist."),
                (e = await (0, b.XU)(S.applicationId, S.id, {
                    expectedAmount: x.total,
                    expectedCurrency: x.currency,
                    isGift: r,
                    paymentSource: h,
                    loadId: f,
                    giftInfoOptions: N,
                    orderId: g,
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
                e = await (0, b.XU)(D.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: h,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: f,
                    giftInfoOptions: N,
                    orderId: g,
                });
            } else if (C && null != A && null != h && null != E) {
                let n = m.currency ?? x.currency;
                e = O.AD1.has(h.type)
                    ? await (0, R.LD)(E, A, h, n, f)
                    : await (0, R.nV)(E, { paymentSource: h, currency: n }, t, l, u, s, f);
            } else if (null != E) {
                let n = (0, I.Pg)(E, c.id, 1, new Set(d)),
                    a = { paymentSource: h, currency: m.currency ?? x.currency };
                E.status === O.Dmq.PAUSED && (a.status = O.Dmq.ACTIVE),
                    E.isPausedAllowsResumeButNotUpdates || (a.items = n),
                    (e = await (0, R.nV)(E, a, t, l, u, s, f));
            } else
                e = await (0, j.B1)({
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
        let { shouldReturnEarly: M } = l(e);
        if (M) return;
        "subscription" in e
            ? (n = null != e.subscription ? L.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (a = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (v =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            y(n, a, v);
    } catch (e) {
        n(e);
    } finally {
        a();
    }
}
var U = n(566980),
    k = n(216641),
    Y = n(999784),
    G = n(650098);
let F = (e) => {
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
function B(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: i,
            legalTermsNodeRef: s,
            flashLegalTerms: E,
            invoiceError: j,
            planError: b,
            baseAnalyticsData: R,
            flowStartTime: L,
            trialId: D,
            planGroup: B,
            analyticsLocation: W,
            openInvoiceId: V,
            metadata: H,
            backButtonEligible: K,
            disablePurchase: Z,
            isTrial: q = !1,
            onPaymentSourceAdd: z,
        } = e,
        {
            selectedSkuId: $,
            invoicePreview: J,
            setHasAcceptedTerms: X,
            setPurchaseState: Q,
        } = (0, y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
        })),
        {
            priceOptions: ee,
            setPurchaseError: et,
            purchaseType: en,
            paymentSourceId: el,
            paymentSources: ea,
            referralCode: ei,
            contextMetadata: er,
        } = (0, M.P5)(),
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
        } = (0, v.Pv)(),
        eA = (0, P.Mq)(es),
        eE = (0, x.lo)(eh),
        ey = {};
    (ey.gift_style = ec),
        (ey.reward_sku_ids = eA && null != eC ? [eC] : []),
        eE === x.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != eh, "Gift recipient must be set at purchase review step for these gift options."),
            (ey.recipient_id = eh.id),
            (ey.custom_message = ed),
            (ey.emoji_id = ep?.id),
            (ey.emoji_name = ep?.id == null ? ep?.surrogates : void 0),
            (ey.sound_id = em?.soundId));
    let eP = es?.id,
        { analyticsLocations: eS } = (0, m.Ay)(),
        e_ = (0, k.W)(ea, el),
        [eT, ef] = a.useState(!1),
        [eN, ex] = a.useState(!1),
        { hasEntitlements: eI } = (0, T.X)(eP, eu),
        eg = (0, I.J$)(ee.paymentSourceId),
        ev = (0, S.l)(),
        eM = (0, u.bG)([g.A], () => g.A.currentOrderId),
        ej = null;
    en === O.VVm.ONE_TIME &&
        (o()(null != $, "SKU must be selected for one-time purchases"),
        (ej = eo[$] ?? null),
        o()(null != ej, "SKU must exist and be fetched."));
    let eb = a.useCallback(() => {
            Q(U.h.PURCHASING),
                X(!0),
                ef(!0),
                d.h.wait(p.ET),
                et(null),
                N.default.track(O.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...R,
                    subtotal: J?.subtotal,
                    tax: J?.tax,
                    expected_amount: J?.total,
                    expected_currency: J?.currency,
                    duration_ms: Date.now() - L,
                });
        }, [Q, X, et, R, L, J]),
        eR = a.useCallback(
            (e) => {
                Q(U.h.FAIL),
                    et(e),
                    N.default.track(O.HAw.PAYMENT_FLOW_FAILED, {
                        ...R,
                        payment_error_code: e?.code,
                        payment_source_id: e_?.id,
                        payment_source_type: e_?.type,
                        duration_ms: Date.now() - L,
                    });
            },
            [Q, et, R, L, e_],
        ),
        eL = a.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (ex(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (Q(U.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Q],
        ),
        eO = a.useCallback(() => {
            eN || ef(!1);
        }, [eN]),
        eD = async () => {
            await w({
                onPurchaseAttempt: eb,
                onPurchaseError: eR,
                onPurchaseComplete: eL,
                onPurchaseFinalize: eO,
                hasRedirectURL: eN,
                isGift: eu,
                analyticsLocation: W,
                analyticsLocations: eS,
                subscriptionPlan: es,
                planGroup: B,
                trialId: D,
                priceOptions: ee,
                paymentSource: e_,
                isPrepaidPaymentPastDue: ev,
                openInvoiceId: V,
                premiumSubscription: t,
                onNext: i,
                metadata: H,
                sku: ej,
                purchaseType: en,
                referralCode: ei,
                loadId: er.loadId,
                giftInfoOptions: ey,
                invoicePreview: J,
                orderId: eM,
            });
        },
        ew = (0, h.D7)({ location: "PaymentModalReviewStepFooter" }),
        eU = null != V || (en === O.VVm.ONE_TIME && !eu),
        ek = K && !eU,
        eY = {
            legalTermsNodeRef: s,
            invoiceError: j,
            planError: b,
            disablePurchase: Z,
            flashLegalTerms: E,
            isSubmitting: eT,
            premiumSubscription: t,
            isGift: eu,
            planGroup: B,
            isPrepaid: eg,
            isTrial: q,
            makePurchase: eD,
            needsPaymentSource: null == e_ && !eI,
            onNext: i,
            onPaymentSourceAdd: z,
        };
    return ew
        ? (0, l.jsx)(F, { ...eY, selectedSkuId: $, showBackButton: ek, onBackClick: n })
        : (0, l.jsx)(c.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(G.eT, { [G.U3]: ek }),
                  children: [
                      ek ? (0, l.jsx)("div", { className: G.aX, children: (0, l.jsx)(_.A, { onClick: n }) }) : null,
                      (0, l.jsx)(Y.A, {}),
                      (0, l.jsx)(f.Ay, { ...eY }),
                  ],
              }),
          });
}
