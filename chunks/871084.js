n.d(t, { A: () => W });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(17928),
    c = n(364840),
    d = n(688810),
    p = n(742810),
    m = n(558620),
    h = n(427675),
    A = n(169797),
    C = n(94420),
    _ = n(810498),
    E = n(155984),
    y = n(683433),
    f = n(344159),
    P = n(367921),
    S = n(79387),
    T = n(45938),
    x = n(927578),
    N = n(123633),
    g = n(937008),
    I = n(156312),
    v = n(228366),
    b = n(391048),
    M = n(158032),
    L = n(830382),
    R = n(323082),
    j = n(243217),
    O = n(954571),
    D = n(566980),
    w = n(652215),
    U = n(788868);
async function k(e) {
    let {
        setPurchaseState: t,
        setHasAcceptedTerms: n,
        setIsSubmitting: l,
        setPurchaseError: a,
        hasRedirectURL: i,
        setHasRedirectURL: r,
        isGift: s,
        baseAnalyticsData: u,
        analyticsLocation: c,
        analyticsLocations: d,
        flowStartTime: p,
        subscriptionPlan: m,
        planGroup: h,
        trialId: A,
        priceOptions: C,
        paymentSource: _,
        isPrepaidPaymentPastDue: E,
        openInvoiceId: y,
        premiumSubscription: f,
        onNext: P,
        metadata: S,
        sku: T,
        skuPricePreview: N,
        purchaseType: g,
        referralCode: I,
        loadId: k,
        giftInfoOptions: Y,
        invoicePreview: F,
        orderId: G,
    } = e;
    t(D.h.PURCHASING), n(!0), l(!0), v.h.wait(b.ET), a(null);
    try {
        let e, n, l, a;
        if (
            (O.default.track(w.HAw.PAYMENT_FLOW_COMPLETED, {
                ...u,
                subtotal: F?.subtotal,
                tax: F?.tax,
                expected_amount: F?.total,
                expected_currency: F?.currency,
                duration_ms: Date.now() - p,
            }),
            i)
        )
            return;
        if (g === w.VVm.ONE_TIME)
            o()(null != T, "SKU must exist and be fetched."),
                o()(null != N, "SKUPricePreview must exist."),
                (e = await (0, L.XU)(T.applicationId, T.id, {
                    expectedAmount: N.amount,
                    expectedCurrency: N.currency,
                    isGift: s,
                    paymentSource: _,
                    loadId: k,
                    giftInfoOptions: Y,
                    orderId: G,
                }));
        else {
            o()(null != m, "Missing subscriptionPlan"), o()(null != F, "Missing invoicePreview");
            let t = { amount: F.total, currency: F.currency },
                n = (0, x.l6)(C, F.checkoutContext?.available_plans),
                l = (0, x.$Q)((0, x.y8)(m.id, !1, !1, n));
            if (null != f) {
                let e = C.currency ?? F.currency,
                    t = (0, x.Pg)(f, m.id, 1, new Set(h));
                (t = (0, x.qn)(t)), (l = (0, x.UC)(t, e.toLowerCase(), C.paymentSourceId));
            }
            if (s) {
                let t = F.total,
                    n = F.currency;
                e = await (0, L.XU)(U.tv, m.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: _,
                    subscriptionPlanId: m.id,
                    isGift: !0,
                    loadId: k,
                    giftInfoOptions: Y,
                    orderId: G,
                });
            } else if (E && null != y && null != _ && null != f) {
                let n = C.currency ?? F.currency;
                e = w.AD1.has(_.type)
                    ? await (0, R.LD)(f, y, _, n, k)
                    : await (0, R.nV)(f, { paymentSource: _, currency: n }, t, l, d, c, k);
            } else if (null != f) {
                let n = (0, x.Pg)(f, m.id, 1, new Set(h)),
                    a = { paymentSource: _, currency: C.currency ?? F.currency };
                f.status === w.Dmq.PAUSED && (a.status = w.Dmq.ACTIVE),
                    f.isPausedAllowsResumeButNotUpdates || (a.items = n),
                    (e = await (0, R.nV)(f, a, t, l, d, c, k));
            } else
                e = await (0, M.B1)({
                    planId: m.id,
                    currency: C.currency ?? F.currency,
                    paymentSource: _,
                    trialId: A,
                    metadata: S,
                    referralCode: I,
                    loadId: k,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        if (e.redirectConfirmation) return void r(null != e.redirectURL);
        t(D.h.COMPLETED),
            "subscription" in e
                ? (n = null != e.subscription ? j.A.createFromServer(e.subscription) : null)
                : "entitlements" in e && (l = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (a =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            P(n, l, a);
    } catch (e) {
        t(D.h.FAIL),
            a(e),
            O.default.track(w.HAw.PAYMENT_FLOW_FAILED, {
                ...u,
                payment_error_code: e?.code,
                payment_source_id: _?.id,
                payment_source_type: _?.type,
                duration_ms: Date.now() - p,
            });
    } finally {
        i || l(!1);
    }
}
var Y = n(216641),
    F = n(999784),
    G = n(650098);
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
            hasPaymentSources: _,
        } = (0, P.Ke)({ premiumSubscription: i, isGift: r, planGroup: s, isPrepaid: o }),
        E = a.useMemo(
            () =>
                (0, P.X1)(e, {
                    buttonLabel: u,
                    analyticsLocations: c,
                    application: d,
                    hasAcceptedTerms: p,
                    paymentSourceId: m,
                    activeSubscription: h,
                    devShelfFetchState: C,
                    hasPaymentSources: _,
                }),
            [e, u, c, d, p, m, h, C, _],
        );
    return (0, l.jsx)(A.lo, { onBackClick: t ? n : void 0, primaryButtonProps: E });
};
function W(e) {
    let {
            premiumSubscription: t,
            setPurchaseState: n,
            onBack: i,
            onNext: s,
            legalTermsNodeRef: A,
            flashLegalTerms: v,
            invoiceError: b,
            planError: M,
            baseAnalyticsData: L,
            flowStartTime: R,
            trialId: j,
            planGroup: O,
            analyticsLocation: D,
            openInvoiceId: U,
            metadata: W,
            backButtonEligible: H,
            disablePurchase: V,
            isTrial: K = !1,
            onPaymentSourceAdd: Z,
        } = e,
        { selectedSkuId: q, invoicePreview: z } = (0, C.t4)((e) => {
            let { selectedSkuId: t, checkoutInvoicePreview: n } = e;
            return { selectedSkuId: t, invoicePreview: n };
        }),
        {
            priceOptions: $,
            setHasAcceptedTerms: X,
            setPurchaseError: J,
            purchaseType: Q,
            paymentSourceId: ee,
            paymentSources: et,
            referralCode: en,
            contextMetadata: el,
        } = (0, I.P5)(),
        ea = (0, m.A)(),
        ei = (0, h.gU)(),
        er = (0, h.RR)(),
        {
            isGift: es,
            selectedGiftStyle: eo,
            customGiftMessage: eu,
            emojiConfetti: ec,
            soundEffect: ed,
            giftRecipient: ep,
            selectedGiftingPromotionReward: em,
        } = (0, g.Pv)(),
        eh = (0, _.Mq)(ea),
        eA = (0, T.lo)(ep),
        eC = {};
    (eC.gift_style = eo),
        (eC.reward_sku_ids = eh && null != em ? [em] : []),
        eA === T.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (o()(null != ep, "Gift recipient must be set at purchase review step for these gift options."),
            (eC.recipient_id = ep.id),
            (eC.custom_message = eu),
            (eC.emoji_id = ec?.id),
            (eC.emoji_name = ec?.id == null ? ec?.surrogates : void 0),
            (eC.sound_id = ed?.soundId));
    let e_ = ea?.id,
        { analyticsLocations: eE } = (0, d.Ay)(),
        ey = (0, Y.W)(et, ee),
        [ef, eP] = a.useState(!1),
        [eS, eT] = a.useState(!1),
        { hasEntitlements: ex } = (0, f.X)(e_, es),
        eN = (0, x.J$)($.paymentSourceId),
        eg = (0, E.l)(),
        eI = (0, u.bG)([N.A], () => N.A.currentOrderId),
        ev = null,
        eb = null;
    if (Q === w.VVm.ONE_TIME) {
        o()(null != q, "SKU must be selected for one-time purchases"),
            (ev = ei[q] ?? null),
            o()(null != ev, "SKU must exist and be fetched.");
        let e = er[q],
            t = ee ?? S.B;
        eb = null != e ? (e[t] ?? e[S.B]) : null;
    }
    let eM = async () => {
            await k({
                setPurchaseState: n,
                setHasAcceptedTerms: X,
                setIsSubmitting: eP,
                setPurchaseError: J,
                hasRedirectURL: eS,
                setHasRedirectURL: eT,
                isGift: es,
                baseAnalyticsData: L,
                analyticsLocation: D,
                analyticsLocations: eE,
                flowStartTime: R,
                subscriptionPlan: ea,
                planGroup: O,
                trialId: j,
                priceOptions: $,
                paymentSource: ey,
                isPrepaidPaymentPastDue: eg,
                openInvoiceId: U,
                premiumSubscription: t,
                onNext: s,
                metadata: W,
                sku: ev,
                skuPricePreview: eb,
                purchaseType: Q,
                referralCode: en,
                loadId: el.loadId,
                giftInfoOptions: eC,
                invoicePreview: z,
                orderId: eI,
            });
        },
        eL = (0, p.D7)({ location: "PaymentModalReviewStepFooter" }),
        eR = null != U || (Q === w.VVm.ONE_TIME && !es),
        ej = H && !eR,
        eO = {
            legalTermsNodeRef: A,
            invoiceError: b,
            planError: M,
            disablePurchase: V,
            flashLegalTerms: v,
            isSubmitting: ef,
            premiumSubscription: t,
            isGift: es,
            planGroup: O,
            isPrepaid: eN,
            isTrial: K,
            makePurchase: eM,
            needsPaymentSource: null == ey && !ex,
            onNext: s,
            onPaymentSourceAdd: Z,
        };
    return eL
        ? (0, l.jsx)(B, { ...eO, selectedSkuId: q, showBackButton: ej, onBackClick: i })
        : (0, l.jsx)(c.j, {
              children: (0, l.jsxs)("div", {
                  className: r()(G.eT, { [G.U3]: ej }),
                  children: [
                      ej ? (0, l.jsx)("div", { className: G.aX, children: (0, l.jsx)(y.A, { onClick: i }) }) : null,
                      (0, l.jsx)(F.A, {}),
                      (0, l.jsx)(P.Ay, { ...eO }),
                  ],
              }),
          });
}
