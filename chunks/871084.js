n.d(t, { A: () => B });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(702841),
    c = n(364840),
    d = n(228366),
    p = n(391048),
    m = n(688810),
    h = n(176095),
    A = n(742810),
    C = n(426398),
    E = n(558620),
    y = n(427675),
    P = n(480642),
    S = n(722847),
    _ = n(380619),
    f = n(155984),
    I = n(683433),
    T = n(344159),
    N = n(367921),
    v = n(174459),
    g = n(45938),
    x = n(428262),
    R = n(259160),
    M = n(158032),
    b = n(830382),
    L = n(753390),
    j = n(243217),
    O = n(652215),
    w = n(788868);
async function D(e) {
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
        let e, n, r, g;
        if ((t(), i)) return;
        if (_ === O.VVm.ONE_TIME)
            o()(null != S, "SKU must exist and be fetched."),
                o()(null != N, "invoicePreview must exist."),
                (e = await (0, b.XU)(S.applicationId, S.id, {
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
                n = (0, x.l6)(m, N.checkoutContext?.available_plans),
                l = (0, x.$Q)((0, x.y8)(c.id, !1, !1, n));
            if (null != E) {
                let e = m.currency ?? N.currency,
                    t = (0, x.Pg)(E, c.id, 1, new Set(d));
                (t = (0, x.qn)(t)), (l = (0, x.UC)(t, e.toLowerCase(), m.paymentSourceId));
            }
            if (a) {
                let t = N.total,
                    n = N.currency;
                e = await (0, b.XU)(w.tv, c.skuId, {
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
                e = O.AD1.has(h.type)
                    ? await (0, L.LD)(E, C, h, n, I)
                    : await (0, L.nV)(E, { paymentSource: h, currency: n }, t, l, u, s, I);
            } else if (null != E) {
                let n = (0, x.Pg)(E, c.id, 1, new Set(d)),
                    r = { paymentSource: h, currency: m.currency ?? N.currency };
                E.status === O.Dmq.PAUSED && (r.status = O.Dmq.ACTIVE),
                    E.isPausedAllowsResumeButNotUpdates || (r.items = n),
                    (e = await (0, L.nV)(E, r, t, l, u, s, I));
            } else
                e = await (0, M.B1)({
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
        let { shouldReturnEarly: R } = l(e);
        if (R) return;
        "subscription" in e
            ? (n = null != e.subscription ? j.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (g =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            y(n, r, g);
    } catch (e) {
        n(e);
    } finally {
        r();
    }
}
var U = n(566980),
    k = n(216641),
    G = n(999784),
    Y = n(650098);
let F = (e) => {
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
        } = (0, N.Ke)({ premiumSubscription: i, isGift: a, planGroup: s, isPrepaid: o }),
        E = r.useMemo(
            () =>
                (0, N.X1)(e, {
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
    return (0, l.jsx)(P.lo, { onBackClick: t ? n : void 0, primaryButtonProps: E });
};
function B(e) {
    let {
            premiumSubscription: t,
            onBack: n,
            onNext: i,
            legalTermsNodeRef: s,
            flashLegalTerms: P,
            invoiceError: M,
            planError: b,
            baseAnalyticsData: L,
            flowStartTime: j,
            trialId: w,
            planGroup: B = [],
            analyticsLocation: W,
            openInvoiceId: H,
            metadata: V,
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
            contextMetadata: ee,
            paymentSourceId: et,
            setPurchaseError: en,
            order: el,
            priceOptions: er,
            purchaseType: ei,
            referralCode: ea,
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
            purchaseType: e.purchaseType,
            referralCode: e.referralCode,
        })),
        { paymentSources: es } = (0, C.jm)(),
        eo = (0, E.A)(),
        eu = (0, y.gU)(),
        {
            isGift: ec,
            selectedGiftStyle: ed,
            customGiftMessage: ep,
            emojiConfetti: em,
            soundEffect: eh,
            giftRecipient: eA,
            selectedGiftingPromotionReward: eC,
        } = (0, R.Pv)(),
        eE = (0, _.Mq)(eo),
        ey = (0, g.lo)(eA),
        eP = {};
    (eP.gift_style = ed),
        (eP.reward_sku_ids = eE && null != eC ? [eC] : []),
        ey === g.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != eA, "Gift recipient must be set at purchase review step for these gift options."),
            (eP.recipient_id = eA.id),
            (eP.custom_message = ep),
            (eP.emoji_id = em?.id),
            (eP.emoji_name = em?.id == null ? em?.surrogates : void 0),
            (eP.sound_id = eh?.soundId));
    let eS = eo?.id,
        { analyticsLocations: e_ } = (0, m.Ay)(),
        ef = (0, k.W)(es, et),
        eI = (0, u.bG)([h.A], () => h.A.getBalance(et ?? ""), [et]),
        eT = null != eI ? eI.amount : null,
        eN = null != eI ? eI.currency : null,
        [ev, eg] = r.useState(!1),
        [ex, eR] = r.useState(!1),
        { hasEntitlements: eM } = (0, T.X)(eS, ec),
        eb = (0, x.J$)(er.paymentSourceId),
        eL = (0, f.l)(),
        ej = null;
    ei === O.VVm.ONE_TIME &&
        (o()(null != $, "SKU must be selected for one-time purchases"),
        (ej = eu[$] ?? null),
        o()(null != ej, "SKU must exist and be fetched."));
    let eO = r.useCallback(() => {
            Q(U.h.PURCHASING),
                X(!0),
                eg(!0),
                d.h.wait(p.ET),
                en(null),
                v.default.track(O.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...L,
                    subtotal: J?.subtotal,
                    tax: J?.tax,
                    expected_amount: J?.total,
                    expected_currency: J?.currency,
                    duration_ms: Date.now() - j,
                    gift_card_balance: eT,
                    gift_card_currency: eN,
                });
        }, [Q, X, en, L, j, J, eT, eN]),
        ew = r.useCallback(
            (e) => {
                Q(U.h.FAIL),
                    en(e),
                    v.default.track(O.HAw.PAYMENT_FLOW_FAILED, {
                        ...L,
                        payment_error_code: e?.code,
                        payment_source_id: ef?.id,
                        payment_source_type: ef?.type,
                        duration_ms: Date.now() - j,
                        gift_card_balance: eT,
                        gift_card_currency: eN,
                    });
            },
            [Q, en, L, j, ef, eT, eN],
        ),
        eD = r.useCallback(
            (e) =>
                e.redirectConfirmation
                    ? (eR(null != e.redirectURL), { shouldReturnEarly: !0 })
                    : (Q(U.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Q],
        ),
        eU = r.useCallback(() => {
            ex || eg(!1);
        }, [ex]),
        ek = async () => {
            await D({
                onPurchaseAttempt: eO,
                onPurchaseError: ew,
                onPurchaseComplete: eD,
                onPurchaseFinalize: eU,
                hasRedirectURL: ex,
                isGift: ec,
                analyticsLocation: W,
                analyticsLocations: e_,
                subscriptionPlan: eo,
                planGroup: B,
                trialId: w,
                priceOptions: er,
                paymentSource: ef,
                isPrepaidPaymentPastDue: eL,
                openInvoiceId: H,
                premiumSubscription: t,
                onNext: i,
                metadata: V,
                sku: ej,
                purchaseType: ei,
                referralCode: ea,
                loadId: ee.loadId,
                giftInfoOptions: eP,
                invoicePreview: J,
                order: el,
            });
        },
        eG = (0, A.D7)({ location: "PaymentModalReviewStepFooter" }),
        eY = null != H || (ei === O.VVm.ONE_TIME && !ec),
        eF = K && !eY,
        eB = {
            legalTermsNodeRef: s,
            invoiceError: M,
            planError: b,
            disablePurchase: Z,
            flashLegalTerms: P,
            isSubmitting: ev,
            premiumSubscription: t,
            isGift: ec,
            planGroup: B,
            isPrepaid: eb,
            isTrial: q,
            makePurchase: ek,
            needsPaymentSource: null == ef && !eM,
            onNext: i,
            onPaymentSourceAdd: z,
        };
    return eG
        ? (0, l.jsx)(F, { ...eB, selectedSkuId: $, showBackButton: eF, onBackClick: n })
        : (0, l.jsx)(c.j, {
              children: (0, l.jsxs)("div", {
                  className: a()(Y.eT, { [Y.U3]: eF }),
                  children: [
                      eF ? (0, l.jsx)("div", { className: Y.aX, children: (0, l.jsx)(I.A, { onClick: n }) }) : null,
                      (0, l.jsx)(G.A, {}),
                      (0, l.jsx)(N.Ay, { ...eB }),
                  ],
              }),
          });
}
