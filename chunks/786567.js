n.d(t, { U: () => X });
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
    g = n(652215),
    y = n(202541);
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
        renewalInvoicePreview: O,
        giftSubscriptionPlanId: M,
        quantity: L,
        applyWalletBalance: k,
    } = e;
    try {
        let e, n, i, w;
        if ((t(), r)) return;
        if (T === g.VVm.ONE_TIME)
            (a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: I,
                    loadId: N,
                    giftInfoOptions: j,
                    quantity: L,
                    applyWalletBalance: k,
                })));
        else {
            let t;
            (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let n = { amount: R.total, currency: R.currency };
            if (null != M)
                (a()(null != O, "Missing renewalInvoicePreview"), (t = { amount: O.subtotal, currency: O.currency }));
            else {
                let e = (0, S.l6)(C, R.checkoutContext?.available_plans);
                if (((t = (0, S.$Q)((0, S.y8)(d.id, !1, !1, e))), null != P)) {
                    let e = C.currency ?? R.currency,
                        n = (0, S.Pg)(P, d.id, 1, new Set(m));
                    ((n = (0, S.qn)(n)), (t = (0, S.UC)(n, e.toLowerCase(), C.paymentSourceId)));
                }
            }
            if (null != M)
                e = await (0, h.B1)({
                    planId: M,
                    currency: C.currency ?? R.currency,
                    paymentSource: I,
                    loadId: N,
                    giftInfoOptions: j,
                    expectedInvoicePrice: n,
                    expectedRenewalPrice: t,
                });
            else if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, f.XU)(y.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: I,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: N,
                    giftInfoOptions: j,
                    quantity: L,
                    applyWalletBalance: k,
                });
            } else if (null != I && null != P && P.status === g.Dmq.PAST_DUE && null != A) {
                let l = C.currency ?? R.currency;
                e = g.AD1.has(I.type)
                    ? await (0, c.LD)(P, A, I, l, N)
                    : await (0, c.nV)(P, { paymentSource: I, currency: l }, n, t, u, o, N);
            } else if (null != P) {
                let l = (0, S.Pg)(P, d.id, 1, new Set(m)),
                    i = { paymentSource: I, currency: C.currency ?? R.currency };
                (P.status === g.Dmq.PAUSED && (i.status = g.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = l),
                    (e = await (0, c.nV)(P, i, n, t, u, o, N)));
            } else
                e = await (0, h.B1)({
                    planId: d.id,
                    currency: C.currency ?? R.currency,
                    paymentSource: I,
                    trialId: p,
                    metadata: x,
                    referralCode: b,
                    loadId: N,
                    expectedInvoicePrice: n,
                    expectedRenewalPrice: t,
                });
        }
        let { shouldReturnEarly: D } = l(e);
        if (D) return;
        ("subscription" in e
            ? (n = null != e.subscription ? E.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (w =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            v(n, i, w));
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var A = n(166532),
    P = n(566980),
    v = n(216641),
    x = n(810498),
    _ = n(436102),
    T = n(478996),
    b = n(174459),
    N = n(739508),
    j = n(45938),
    R = n(107351),
    O = n(708791),
    M = n(991690),
    L = n(17928),
    k = n(10716),
    w = n(878014),
    D = n(202475),
    U = n(31823),
    G = n(298208),
    F = n(558620),
    B = n(427675),
    H = n(169797),
    W = n(705822);
function V(e, t) {
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
async function Y(e) {
    await V(e, (e) => !e.get("isOrderLocked") || null);
}
var K = n(26279);
function Z(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === K.Re.SIGNING_IN_PROGRESS ? null : n;
}
let q = [1e3, 2e3, 4e3, 8e3, 1e4];
function z(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
async function $(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, q[Math.min(l, q.length - 1)])), !n() || null != Z(e.getState(), t)))
            return;
        let i = await (0, m.r$)(t.id);
        null != i && n() && z(e, i);
    }
}
var Q = n(105292);
function J(e) {
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
                { hasPaymentSources: o } = (0, D.j)(),
                { setCheckoutReviewButtonLabel: u } = (0, G.t4)((e) => ({
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                })),
                { application: c } = (0, U.V)(),
                d = (0, L.bG)([k.A], () => k.A.getFetchState()),
                m = (0, w.W)(c, M.U.MAIN) && d === k.$.LOADING,
                p = l ?? !1,
                C = r ?? !1,
                h = (0, G.t4)((e) =>
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
function X(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            trialId: r,
            planGroup: h = [],
            analyticsLocation: f,
            openInvoiceId: E,
            metadata: S,
            backButtonEligible: y,
            disableSubmit: M,
            onPaymentSourceAdd: L,
            handleStepChange: k,
            postPurchaseStep: w = A.pn.CONFIRM,
            tenantProvidedReviewButtonProps: U,
        } = e,
        {
            activeSubscription: q,
            selectedSkuId: X,
            invoicePreview: ee,
            renewalInvoicePreview: et,
            isRecurringGiftCheckout: en,
            giftSubscriptionPlanId: el,
            setHasAcceptedTerms: ei,
            setPurchaseState: er,
            contextMetadata: ea,
            paymentSourceId: es,
            setPurchaseError: eo,
            priceOptions: eu,
            purchaseType: ec,
            referralCode: ed,
            quantity: em,
            setEntitlementsGranted: ep,
            setAppliedUserDiscounts: eC,
            setUpdatedSubscription: eh,
            isExpressCheckoutEnabledForFooter: ef,
            setExpressCheckoutStatus: eE,
            order: eS,
            isOrderAwaitingSettlement: eg,
            setIsOrderSigning: ey,
            applyWalletBalance: eI,
            handleBillingErrorForPurchaseTokenAuth: eA,
        } = (0, G.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
            giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
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
        eP = ea.startTime,
        ev = (0, G.Q9)(),
        { paymentSources: ex } = (0, D.j)(),
        e_ = (0, F.A)(),
        eT = (0, B.gU)(),
        {
            isGift: eb,
            selectedGiftStyle: eN,
            customGiftMessage: ej,
            emojiConfetti: eR,
            soundEffect: eO,
            giftRecipient: eM,
            selectedGiftingPromotionRewards: eL,
        } = (0, C.Pv)(),
        ek = (0, x.Mq)(e_),
        ew = (0, j.lo)(eM),
        eD = {};
    (en && (eD.is_recurring = !0),
        (eD.gift_style = eN),
        (eD.reward_sku_ids = ek && !en ? eL : []),
        ew === j.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eM, "Gift recipient must be set at purchase review step for these gift options."),
            (eD.recipient_id = eM.id),
            (eD.custom_message = ej),
            (eD.emoji_id = eR?.id),
            (eD.emoji_name = eR?.id == null ? eR?.surrogates : void 0),
            (eD.sound_id = eO?.soundId)));
    let eU = e_?.id,
        { analyticsLocations: eG } = (0, u.Ay)(),
        eF = (0, v.W)(ex, es),
        { giftCardBalance: eB, giftCardCurrency: eH } = (0, d.h)(),
        { balance: eW } = (0, T.W0)(),
        [eV, eY] = i.useState(!1),
        [eK, eZ] = i.useState(!1),
        eq = i.useRef(!0),
        ez = i.useRef(!1);
    i.useEffect(
        () => () => {
            eq.current = !1;
        },
        [],
    );
    let { hasEntitlements: e$ } = (0, _.X)(eU, eb),
        eQ = null;
    ec === g.VVm.ONE_TIME &&
        (a()(null != X, "SKU must be selected for one-time purchases"),
        (eQ = eT[X] ?? null),
        a()(null != eQ, "SKU must exist and be fetched."));
    let eJ = i.useCallback(() => {
            (er(P.h.PURCHASING),
                ei(!0),
                eY(!0),
                (0, s.ET)(),
                eo(null),
                b.default.track(g.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: ee?.subtotal,
                    tax: ee?.tax,
                    expected_amount: ee?.total,
                    expected_currency: ee?.currency,
                    duration_ms: Date.now() - eP,
                    gift_card_balance: eB,
                    gift_card_currency: eH,
                    is_split_with_gift_card: ee?.isSplitWithGiftCard,
                    virtual_currency_balance: eW,
                }));
        }, [er, ei, eo, n, eP, ee, eB, eH, eW]),
        eX = i.useCallback(
            (e) => {
                (er(P.h.FAIL),
                    eo(e),
                    b.default.track(g.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eF?.id,
                        payment_source_type: eF?.type,
                        duration_ms: Date.now() - eP,
                        gift_card_balance: eB,
                        gift_card_currency: eH,
                        is_split_with_gift_card: ee?.isSplitWithGiftCard,
                        virtual_currency_balance: eW,
                    }));
            },
            [er, eo, n, eP, eF, eB, eH, ee, eW],
        ),
        { signOrder: e0, reportError: e2 } = (0, p.f)({
            order: eS,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eX(e), eA(e));
            },
        }),
        e1 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), er(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eZ(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (er(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [er],
        ),
        e3 = i.useCallback(() => {
            eK || eY(!1);
        }, [eK]),
        e4 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (eh(l),
                    null != t && ep(t),
                    null != n && eC(n),
                    k(w, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [k, w, eh, ep, eC],
        );
    async function e7() {
        (eJ(), ey(!0));
        try {
            await e5();
        } finally {
            (ey(!1), e3());
        }
    }
    async function e8(e) {
        (z(ev, e), $(ev, e, () => eq.current));
        let t = await V(ev, (t) => Z(t, e));
        return t.status !== K.Re.SIGNED ? (eX(new o.Ay(Q.intl.string(Q.t.khEaRI))), null) : t;
    }
    async function e5() {
        let e = await (0, N.ob)(
                (function () {
                    let { order: e } = ev.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, v.W)(ex, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await e0({ loadId: ea.loadId, purchaseToken: (0, R.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await e8(t.order);
        if (null != n)
            try {
                let e = await (0, m.Vw)(n.id);
                if (!eq.current) return;
                if (0 === e.length) throw new m.j2();
                (er(P.h.COMPLETED), e4(null, e));
            } catch (e) {
                e2(e, { orderId: n.id, loadId: ea.loadId });
            }
    }
    async function e6(e) {
        if (null != eS) {
            if (ez.current) return;
            ez.current = !0;
            try {
                if ((await Y(ev), !eq.current)) return;
                await e7();
            } finally {
                ez.current = !1;
            }
            return;
        }
        let t = e ?? eF;
        await I({
            onPurchaseAttempt: eJ,
            onPurchaseError: eX,
            onPurchaseComplete: e1,
            onPurchaseFinalize: e3,
            hasRedirectURL: eK,
            isGift: eb,
            analyticsLocation: f,
            analyticsLocations: eG,
            subscriptionPlan: e_,
            planGroup: h,
            trialId: r,
            priceOptions: eu,
            paymentSource: t,
            openInvoiceId: E,
            premiumSubscription: q ?? null,
            onNext: e4,
            metadata: S,
            sku: eQ,
            purchaseType: ec,
            referralCode: ed,
            loadId: ea.loadId,
            giftInfoOptions: eD,
            invoicePreview: ee,
            renewalInvoicePreview: et,
            giftSubscriptionPlanId: el,
            quantity: em,
            applyWalletBalance: eI ?? ee?.applyWalletBalance,
        });
    }
    let e9 = null != E || (ec === g.VVm.ONE_TIME && !eb),
        te = y && !e9;
    i.useLayoutEffect(() => {
        ef && null != r && eE(W.i.UNAVAILABLE);
    }, [ef, r, eE]);
    let tt =
        ef && null == r
            ? (0, l.jsx)(O.E1, {
                  type: "purchase_if_possible",
                  disablePurchase: M,
                  makePurchase: e6,
                  isSubmitting: eV,
                  setIsSubmitting: eY,
              })
            : null;
    return eg
        ? null
        : (0, l.jsx)(J, {
              renderFooter: function (e) {
                  return (0, l.jsx)(H.lo, {
                      onBackClick: te ? t : void 0,
                      primaryButtonProps: e,
                      stripeExpressCheckoutComponent: tt,
                  });
              },
              tenantProvidedReviewButtonProps: U,
              disableSubmit: M,
              isSubmitting: eV,
              onReviewButtonClick: function () {
                  return e6();
              },
              needsPaymentSource: null == eF && !e$,
              onPaymentSourceAdd: L,
          });
}
