n.d(t, { U: () => ee });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(391048),
    o = n(136857),
    u = n(688810),
    c = n(277984),
    d = n(11939),
    m = n(158317),
    p = n(497782),
    C = n(951305),
    h = n(158032),
    f = n(830382),
    E = n(243217),
    S = n(24482),
    y = n(652215),
    g = n(202541);
async function I(e) {
    let {
        onPurchaseAttempt: t,
        onPurchaseError: n,
        onPurchaseComplete: l,
        onPurchaseFinalize: i,
        hasRedirectURL: r,
        isGift: s,
        analyticsLocation: o,
        analyticsLocations: u,
        subscriptionPlan: d,
        planGroup: m,
        trialId: p,
        priceOptions: C,
        paymentSource: I,
        openInvoiceId: A,
        premiumSubscription: P,
        onNext: v,
        metadata: x,
        sku: _,
        purchaseType: T,
        referralCode: b,
        loadId: N,
        giftInfoOptions: j,
        invoicePreview: R,
        quantity: O,
        applyWalletBalance: M,
    } = e;
    try {
        let e, n, i, L;
        if ((t(), r)) return;
        if (T === y.VVm.ONE_TIME)
            (a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: I,
                    loadId: N,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                })));
        else {
            (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let t = { amount: R.total, currency: R.currency },
                n = (0, S.l6)(C, R.checkoutContext?.available_plans),
                l = (0, S.$Q)((0, S.y8)(d.id, !1, !1, n));
            if (null != P) {
                let e = C.currency ?? R.currency,
                    t = (0, S.Pg)(P, d.id, 1, new Set(m));
                ((t = (0, S.qn)(t)), (l = (0, S.UC)(t, e.toLowerCase(), C.paymentSourceId)));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, f.XU)(g.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: I,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: N,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                });
            } else if (null != I && null != P && P.status === y.Dmq.PAST_DUE && null != A) {
                let n = C.currency ?? R.currency;
                e = y.AD1.has(I.type)
                    ? await (0, c.LD)(P, A, I, n, N)
                    : await (0, c.nV)(P, { paymentSource: I, currency: n }, t, l, u, o, N);
            } else if (null != P) {
                let n = (0, S.Pg)(P, d.id, 1, new Set(m)),
                    i = { paymentSource: I, currency: C.currency ?? R.currency };
                (P.status === y.Dmq.PAUSED && (i.status = y.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(P, i, t, l, u, o, N)));
            } else
                e = await (0, h.B1)({
                    planId: d.id,
                    currency: C.currency ?? R.currency,
                    paymentSource: I,
                    trialId: p,
                    metadata: x,
                    referralCode: b,
                    loadId: N,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: k } = l(e);
        if (k) return;
        ("subscription" in e
            ? (n = null != e.subscription ? E.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (L =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            v(n, i, L));
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var A = n(166532),
    P = n(566980),
    v = n(216641),
    x = n(371710),
    _ = n(810498),
    T = n(436102),
    b = n(478996),
    N = n(174459),
    j = n(739508),
    R = n(45938),
    O = n(107351),
    M = n(708791),
    L = n(991690),
    k = n(17928),
    w = n(10716),
    D = n(878014),
    U = n(202475),
    G = n(31823),
    F = n(281044),
    B = n(558620),
    H = n(427675),
    W = n(169797),
    V = n(705822);
function Y(e, t) {
    let n = t(e.getState());
    return null != n
        ? Promise.resolve(n)
        : new Promise((n) => {
              let l = e.subscribe(() => {
                  let i = t(e.getState());
                  null != i && (l(), n(i));
              });
          });
}
async function K(e) {
    await Y(e, (e) => !e.get("isOrderLocked") || null);
}
var Z = n(26279);
function q(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === Z.Re.SIGNING_IN_PROGRESS ? null : n;
}
let z = [1e3, 2e3, 4e3, 8e3, 1e4];
function $(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
async function Q(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, z[Math.min(l, z.length - 1)])), !n() || null != q(e.getState(), t)))
            return;
        let i = await (0, m.r$)(t.id);
        null != i && n() && $(e, i);
    }
}
var J = n(105292);
function X(e) {
    let {
        renderFooter: t,
        tenantProvidedReviewButtonProps: n,
        onReviewButtonClick: l,
        onPaymentSourceAdd: r,
        disableSubmit: a,
        isSubmitting: s,
        needsPaymentSource: o,
    } = e;
    return t(
        (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disableSubmit: r,
                    onPaymentSourceAdd: a,
                    tenantProvidedReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, U.j)(),
                { setCheckoutReviewButtonLabel: u } = (0, F.t4)((e) => ({
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                })),
                { application: c } = (0, G.V)(),
                d = (0, k.bG)([w.A], () => w.A.getFetchState()),
                m = (0, D.W)(c, L.U.MAIN) && d === w.$.LOADING,
                p = l ?? !1,
                C = r ?? !1,
                h = (0, F.t4)((e) =>
                    e.getCheckoutReviewButtonProps({
                        tenantProvidedReviewButtonProps: s,
                        isReviewButtonDisabled: C,
                        isReviewButtonLoading: p,
                        needsPaymentSource: n,
                        hasPaymentSources: o,
                        isApplicationDevShelfLoading: m,
                        handlePaymentSourceAdd: a,
                        onReviewButtonClick: t,
                    }),
                );
            return (
                i.useEffect(() => {
                    u(h.text);
                }, [h.text, u]),
                h
            );
        })({
            onReviewButtonClick: l,
            isSubmitting: s,
            disableSubmit: a,
            onPaymentSourceAdd: r,
            tenantProvidedReviewButtonProps: n,
            needsPaymentSource: o,
        }),
    );
}
function ee(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            trialId: r,
            planGroup: h = [],
            analyticsLocation: f,
            openInvoiceId: E,
            metadata: S,
            backButtonEligible: g,
            disableSubmit: L,
            onPaymentSourceAdd: k,
            handleStepChange: w,
            postPurchaseStep: D = A.pn.CONFIRM,
            tenantProvidedReviewButtonProps: G,
        } = e,
        {
            activeSubscription: z,
            selectedSkuId: ee,
            invoicePreview: et,
            setHasAcceptedTerms: en,
            setPurchaseState: el,
            contextMetadata: ei,
            paymentSourceId: er,
            setPurchaseError: ea,
            priceOptions: es,
            purchaseType: eo,
            referralCode: eu,
            quantity: ec,
            setEntitlementsGranted: ed,
            setAppliedUserDiscounts: em,
            setUpdatedSubscription: ep,
            isExpressCheckoutEnabledForFooter: eC,
            setExpressCheckoutStatus: eh,
            order: ef,
            isOrderAwaitingSettlement: eE,
            setIsOrderSigning: eS,
            applyWalletBalance: ey,
            handleBillingErrorForPurchaseTokenAuth: eg,
        } = (0, F.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            purchaseType: e.purchaseType,
            referralCode: e.referralCode,
            quantity: e.quantity,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            setUpdatedSubscription: e.setUpdatedSubscription,
            activeSubscription: e.activeSubscription,
            isExpressCheckoutEnabledForFooter: e.getExpressCheckoutVisibilityState().isExpressCheckoutEnabledForFooter,
            setExpressCheckoutStatus: e.setExpressCheckoutStatus,
            order: e.order,
            isOrderAwaitingSettlement: e.get("isOrderAwaitingSettlement"),
            setIsOrderSigning: e.setIsOrderSigning,
            applyWalletBalance: e.applyWalletBalance,
            handleBillingErrorForPurchaseTokenAuth: e.handleBillingErrorForPurchaseTokenAuth,
        })),
        eI = ei.startTime,
        eA = (0, F.Q9)(),
        { paymentSources: eP } = (0, U.j)(),
        ev = (0, B.A)(),
        ex = (0, H.gU)(),
        {
            isGift: e_,
            isRecurringGift: eT,
            selectedGiftStyle: eb,
            customGiftMessage: eN,
            emojiConfetti: ej,
            soundEffect: eR,
            giftRecipient: eO,
            selectedGiftingPromotionRewards: eM,
        } = (0, C.Pv)(),
        eL = (0, _.Mq)(ev),
        ek = (0, R.lo)(eO),
        ew = {};
    (eT && null != ev && (0, x.dI)(ev.id) && (ew.is_recurring = !0),
        (ew.gift_style = eb),
        (ew.reward_sku_ids = eL ? eM : []),
        ek === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eO, "Gift recipient must be set at purchase review step for these gift options."),
            (ew.recipient_id = eO.id),
            (ew.custom_message = eN),
            (ew.emoji_id = ej?.id),
            (ew.emoji_name = ej?.id == null ? ej?.surrogates : void 0),
            (ew.sound_id = eR?.soundId)));
    let eD = ev?.id,
        { analyticsLocations: eU } = (0, u.Ay)(),
        eG = (0, v.W)(eP, er),
        { giftCardBalance: eF, giftCardCurrency: eB } = (0, d.h)(),
        { balance: eH } = (0, b.W0)(),
        [eW, eV] = i.useState(!1),
        [eY, eK] = i.useState(!1),
        eZ = i.useRef(!0),
        eq = i.useRef(!1);
    i.useEffect(
        () => () => {
            eZ.current = !1;
        },
        [],
    );
    let { hasEntitlements: ez } = (0, T.X)(eD, e_),
        e$ = null;
    eo === y.VVm.ONE_TIME &&
        (a()(null != ee, "SKU must be selected for one-time purchases"),
        (e$ = ex[ee] ?? null),
        a()(null != e$, "SKU must exist and be fetched."));
    let eQ = i.useCallback(() => {
            (el(P.h.PURCHASING),
                en(!0),
                eV(!0),
                (0, s.ET)(),
                ea(null),
                N.default.track(y.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: et?.subtotal,
                    tax: et?.tax,
                    expected_amount: et?.total,
                    expected_currency: et?.currency,
                    duration_ms: Date.now() - eI,
                    gift_card_balance: eF,
                    gift_card_currency: eB,
                    is_split_with_gift_card: et?.isSplitWithGiftCard,
                    virtual_currency_balance: eH,
                }));
        }, [el, en, ea, n, eI, et, eF, eB, eH]),
        eJ = i.useCallback(
            (e) => {
                (el(P.h.FAIL),
                    ea(e),
                    N.default.track(y.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eG?.id,
                        payment_source_type: eG?.type,
                        duration_ms: Date.now() - eI,
                        gift_card_balance: eF,
                        gift_card_currency: eB,
                        is_split_with_gift_card: et?.isSplitWithGiftCard,
                        virtual_currency_balance: eH,
                    }));
            },
            [el, ea, n, eI, eG, eF, eB, et, eH],
        ),
        { signOrder: eX, reportError: e0 } = (0, p.f)({
            order: ef,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eJ(e), eg(e));
            },
        }),
        e2 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), el(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eK(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (el(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [el],
        ),
        e1 = i.useCallback(() => {
            eY || eV(!1);
        }, [eY]),
        e3 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (ep(l),
                    null != t && ed(t),
                    null != n && em(n),
                    w(D, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [w, D, ep, ed, em],
        );
    async function e4() {
        (eQ(), eS(!0));
        try {
            await e5();
        } finally {
            (eS(!1), e1());
        }
    }
    async function e7(e) {
        ($(eA, e), Q(eA, e, () => eZ.current));
        let t = await Y(eA, (t) => q(t, e));
        return t.status !== Z.Re.SIGNED ? (eJ(new o.Ay(J.intl.string(J.t.khEaRI))), null) : t;
    }
    async function e5() {
        let e = await (0, j.ob)(
                (function () {
                    let { order: e } = eA.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, v.W)(eP, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await eX({ loadId: ei.loadId, purchaseToken: (0, O.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await e7(t.order);
        if (null != n)
            try {
                let e = await (0, m.Vw)(n.id);
                if (!eZ.current) return;
                if (0 === e.length) throw new m.j2();
                (el(P.h.COMPLETED), e3(null, e));
            } catch (e) {
                e0(e, { orderId: n.id, loadId: ei.loadId });
            }
    }
    async function e8(e) {
        if (null != ef) {
            if (eq.current) return;
            eq.current = !0;
            try {
                if ((await K(eA), !eZ.current)) return;
                await e4();
            } finally {
                eq.current = !1;
            }
            return;
        }
        let t = e ?? eG;
        await I({
            onPurchaseAttempt: eQ,
            onPurchaseError: eJ,
            onPurchaseComplete: e2,
            onPurchaseFinalize: e1,
            hasRedirectURL: eY,
            isGift: e_,
            analyticsLocation: f,
            analyticsLocations: eU,
            subscriptionPlan: ev,
            planGroup: h,
            trialId: r,
            priceOptions: es,
            paymentSource: t,
            openInvoiceId: E,
            premiumSubscription: z ?? null,
            onNext: e3,
            metadata: S,
            sku: e$,
            purchaseType: eo,
            referralCode: eu,
            loadId: ei.loadId,
            giftInfoOptions: ew,
            invoicePreview: et,
            quantity: ec,
            applyWalletBalance: ey ?? et?.applyWalletBalance,
        });
    }
    let e6 = null != E || (eo === y.VVm.ONE_TIME && !e_),
        e9 = g && !e6;
    i.useLayoutEffect(() => {
        eC && null != r && eh(V.i.UNAVAILABLE);
    }, [eC, r, eh]);
    let te =
        eC && null == r
            ? (0, l.jsx)(M.E1, {
                  type: "purchase_if_possible",
                  disablePurchase: L,
                  makePurchase: e8,
                  isSubmitting: eW,
                  setIsSubmitting: eV,
              })
            : null;
    return eE
        ? null
        : (0, l.jsx)(X, {
              renderFooter: function (e) {
                  return (0, l.jsx)(W.lo, {
                      onBackClick: e9 ? t : void 0,
                      primaryButtonProps: e,
                      stripeExpressCheckoutComponent: te,
                  });
              },
              tenantProvidedReviewButtonProps: G,
              disableSubmit: L,
              isSubmitting: eW,
              onReviewButtonClick: function () {
                  return e8();
              },
              needsPaymentSource: null == eG && !ez,
              onPaymentSourceAdd: k,
          });
}
