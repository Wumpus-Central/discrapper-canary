n.d(t, { U: () => W });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(277984),
    d = n(11939),
    m = n(158317),
    p = n(313125),
    C = n(951305),
    h = n(158032),
    f = n(830382),
    E = n(243217),
    S = n(158045),
    y = n(652215),
    I = n(202541);
async function A(e) {
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
        paymentSource: A,
        openInvoiceId: g,
        premiumSubscription: P,
        onNext: v,
        metadata: _,
        sku: x,
        purchaseType: T,
        referralCode: N,
        loadId: b,
        giftInfoOptions: j,
        invoicePreview: R,
        quantity: M,
    } = e;
    try {
        let e, n, i, O;
        if ((t(), r)) return;
        if (T === y.VVm.ONE_TIME)
            a()(null != x, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(x.applicationId, x.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: A,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                }));
        else {
            a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview");
            let t = { amount: R.total, currency: R.currency },
                n = (0, S.l6)(C, R.checkoutContext?.available_plans),
                l = (0, S.$Q)((0, S.y8)(d.id, !1, !1, n));
            if (null != P) {
                let e = C.currency ?? R.currency,
                    t = (0, S.Pg)(P, d.id, 1, new Set(m));
                (t = (0, S.qn)(t)), (l = (0, S.UC)(t, e.toLowerCase(), C.paymentSourceId));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, f.XU)(I.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: A,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                });
            } else if (null != A && null != P && P.status === y.Dmq.PAST_DUE && null != g) {
                let n = C.currency ?? R.currency;
                e = y.AD1.has(A.type)
                    ? await (0, c.LD)(P, g, A, n, b)
                    : await (0, c.nV)(P, { paymentSource: A, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, S.Pg)(P, d.id, 1, new Set(m)),
                    i = { paymentSource: A, currency: C.currency ?? R.currency };
                P.status === y.Dmq.PAUSED && (i.status = y.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(P, i, t, l, u, o, b));
            } else
                e = await (0, h.B1)({
                    planId: d.id,
                    currency: C.currency ?? R.currency,
                    paymentSource: A,
                    trialId: p,
                    metadata: _,
                    referralCode: N,
                    loadId: b,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: L } = l(e);
        if (L) return;
        "subscription" in e
            ? (n = null != e.subscription ? E.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (O =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            v(n, i, O);
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var g = n(166532),
    P = n(566980),
    v = n(216641),
    _ = n(580194),
    x = n(344159),
    T = n(174459),
    N = n(45938),
    b = n(708791),
    j = n(17928),
    R = n(10716),
    M = n(20015),
    O = n(202475),
    L = n(31823),
    k = n(721836),
    w = n(583741),
    U = n(375708);
class D {
    init;
    resolveTenantReviewButtonProps;
    constructor(e, t) {
        (this.init = e), (this.resolveTenantReviewButtonProps = t ?? this.defaultResolveTenantReviewButtonProps);
    }
    defaultResolveTenantReviewButtonProps(e) {
        return {
            variant: "active",
            text:
                this.init.purchaseType === y.VVm.SUBSCRIPTION
                    ? U.intl.string(U.t.YScQSF)
                    : U.intl.string(w.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? U.intl.string(U.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? U.intl.string(w.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : U.intl.string(w.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: U.intl.string(U.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: U.intl.string(U.t.cjA5tj),
            variant: "active",
            text: e,
            type: "submit",
            dataTestId: "submitButton",
            disabled: !0,
        };
    }
    resolveReviewButtonProps = (e) => {
        let { needsPaymentSource: t, hasAcceptedTerms: n, onReviewButtonClick: l } = this.init,
            i = { ...e, hasAcceptedTerms: n, onReviewButtonClick: l },
            r = this.resolveTenantReviewButtonProps(i),
            a = this.resolveButtonLabel(r),
            { disabled: s, isApplicationDevShelfLoading: o } = e;
        if (t) {
            let t = this.resolvePaymentSourceRequiredProps(a),
                n = null != r ? r.variant : void 0;
            return { ...t, loading: e.loading, variant: n ?? t.variant };
        }
        if (o) return this.resolveApplicationDevShelfLoadingProps(a);
        let u = { ...r, text: a };
        return s
            ? { ...u, disabled: !0, onClick: void 0 }
            : n
              ? u
              : {
                    ...u,
                    tooltipText: U.intl.string(U.t.XdvBLS),
                    disabled: !0,
                    onClick: y.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var G = n(558620),
    F = n(427675),
    B = n(169797);
function H(e) {
    let {
            stripeExpressCheckoutComponent: t,
            resolveTenantReviewButtonProps: n,
            showBackButton: r,
            makePurchase: a,
            onPaymentSourceAdd: s,
            disablePurchase: o,
            isSubmitting: u,
            needsPaymentSource: c,
            onBackClick: d,
        } = e,
        m = (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disablePurchase: r,
                    onPaymentSourceAdd: a,
                    resolveTenantReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, O.j)(),
                {
                    hasAcceptedTerms: u,
                    paymentSourceId: c,
                    setCheckoutReviewButtonLabel: d,
                    purchaseType: m,
                    checkoutPaymentSources: p,
                    invoiceError: C,
                } = (0, k.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                h = null != c && p.some((e) => e.id === c && null != e.relocationCountry),
                { application: f } = (0, L.V)(),
                E = (0, j.bG)([R.A], () => R.A.getFetchState()),
                S = (0, M.n)(f, y.gfo.EMBEDDED) && E === R.$.LOADING,
                I = l ?? !1,
                A = (null != C || r) ?? !1,
                g = i.useMemo(
                    () =>
                        new D(
                            {
                                purchaseType: m,
                                needsPaymentSource: n,
                                onPaymentSourceAdd: a,
                                onReviewButtonClick: t,
                                hasPaymentSources: o,
                                willRelocateStoreCountry: h,
                                paymentSourceId: c,
                                hasAcceptedTerms: u,
                            },
                            s,
                        ),
                    [m, n, a, t, o, h, c, u, s],
                ),
                P = i.useMemo(
                    () => g.resolveReviewButtonProps({ loading: I, disabled: A, isApplicationDevShelfLoading: S }),
                    [I, A, S, g],
                );
            return (
                i.useEffect(() => {
                    d(P.text);
                }, [P.text, d]),
                P
            );
        })({
            onReviewButtonClick: () => a(),
            isSubmitting: u,
            disablePurchase: o,
            onPaymentSourceAdd: s,
            resolveTenantReviewButtonProps: n,
            needsPaymentSource: c,
        });
    return (0, l.jsx)(B.lo, { onBackClick: r ? d : void 0, primaryButtonProps: m, stripeExpressCheckoutComponent: t });
}
function W(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: h,
            planGroup: f = [],
            analyticsLocation: E,
            openInvoiceId: S,
            metadata: I,
            backButtonEligible: j,
            disablePurchase: R,
            onPaymentSourceAdd: M,
            handleStepChange: L,
            postPurchaseStep: w = g.pn.CONFIRM,
            resolveTenantReviewButtonProps: U,
        } = e,
        {
            activeSubscription: D,
            selectedSkuId: B,
            invoicePreview: W,
            setHasAcceptedTerms: Y,
            setPurchaseState: V,
            contextMetadata: K,
            paymentSourceId: Z,
            setPurchaseError: q,
            priceOptions: z,
            purchaseType: Q,
            referralCode: $,
            quantity: J,
            setEntitlementsGranted: X,
            setAppliedUserDiscounts: ee,
            setUpdatedSubscription: et,
            shouldUseStripeExpressCheckout: en,
            order: el,
            isOrderLocked: ei,
            setIsOrderSigning: er,
        } = (0, k.t4)((e) => ({
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
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
            order: e.order,
            isOrderLocked: e.get("isOrderLocked"),
            setIsOrderSigning: e.setIsOrderSigning,
        })),
        ea = (0, k.Q9)(),
        { paymentSources: es } = (0, O.j)(),
        eo = (0, G.A)(),
        eu = (0, F.gU)(),
        {
            isGift: ec,
            selectedGiftStyle: ed,
            customGiftMessage: em,
            emojiConfetti: ep,
            soundEffect: eC,
            giftRecipient: eh,
            selectedGiftingPromotionRewards: ef,
        } = (0, C.Pv)(),
        eE = (0, _.Mq)(eo),
        eS = (0, N.lo)(eh),
        ey = {};
    (ey.gift_style = ed),
        (ey.reward_sku_ids = eE ? ef : []),
        eS === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eh, "Gift recipient must be set at purchase review step for these gift options."),
            (ey.recipient_id = eh.id),
            (ey.custom_message = em),
            (ey.emoji_id = ep?.id),
            (ey.emoji_name = ep?.id == null ? ep?.surrogates : void 0),
            (ey.sound_id = eC?.soundId));
    let eI = eo?.id,
        { analyticsLocations: eA } = (0, u.Ay)(),
        eg = (0, v.W)(es, Z),
        { giftCardBalance: eP, giftCardCurrency: ev } = (0, d.h)(),
        [e_, ex] = i.useState(!1),
        [eT, eN] = i.useState(!1),
        eb = i.useRef(!0),
        ej = i.useRef(!1);
    i.useEffect(
        () => () => {
            eb.current = !1;
        },
        [],
    );
    let { hasEntitlements: eR } = (0, x.X)(eI, ec),
        eM = null;
    Q === y.VVm.ONE_TIME &&
        (a()(null != B, "SKU must be selected for one-time purchases"),
        (eM = eu[B] ?? null),
        a()(null != eM, "SKU must exist and be fetched."));
    let eO = i.useCallback(() => {
            V(P.h.PURCHASING),
                Y(!0),
                ex(!0),
                s.h.wait(o.ET),
                q(null),
                T.default.track(y.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: W?.subtotal,
                    tax: W?.tax,
                    expected_amount: W?.total,
                    expected_currency: W?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eP,
                    gift_card_currency: ev,
                });
        }, [V, Y, q, n, r, W, eP, ev]),
        eL = i.useCallback(
            (e) => {
                V(P.h.FAIL),
                    q(e),
                    T.default.track(y.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eg?.id,
                        payment_source_type: eg?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eP,
                        gift_card_currency: ev,
                    });
            },
            [V, q, n, r, eg, eP, ev],
        ),
        { signOrder: ek, reportError: ew } = (0, p.f)({
            order: el,
            errorSource: "checkout_sign_order",
            onError: (e) => eL(e),
        }),
        eU = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), V(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eN(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (V(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [V],
        ),
        eD = i.useCallback(() => {
            eT || ex(!1);
        }, [eT]),
        eG = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                et(l),
                    null != t && X(t),
                    null != n && ee(n),
                    L(w, { fulfillment: { subscription: l, entitlements: t } });
            },
            [L, w, et, X, ee],
        );
    async function eF() {
        eO(), er(!0);
        try {
            await eB();
        } finally {
            er(!1), eD();
        }
    }
    async function eB() {
        let e = await ek({ loadId: K.loadId });
        if ("signed" === e.type)
            try {
                let t = await (0, m.Vw)(e.order.id);
                if (!eb.current) return;
                if (0 === t.length) throw new m.j2();
                V(P.h.COMPLETED), eG(null, t);
            } catch (t) {
                ew(t, { orderId: e.order.id, loadId: K.loadId });
            }
    }
    async function eH(e) {
        if (null != el) {
            if (ej.current) return;
            ej.current = !0;
            try {
                if (
                    (await (!ea.getState().get("isOrderLocked")
                        ? Promise.resolve()
                        : new Promise((e) => {
                              let t = ea.subscribe(() => {
                                  ea.getState().get("isOrderLocked") || (t(), e());
                              });
                          })),
                    !eb.current)
                )
                    return;
                await eF();
            } finally {
                ej.current = !1;
            }
            return;
        }
        let t = e ?? eg;
        await A({
            onPurchaseAttempt: eO,
            onPurchaseError: eL,
            onPurchaseComplete: eU,
            onPurchaseFinalize: eD,
            hasRedirectURL: eT,
            isGift: ec,
            analyticsLocation: E,
            analyticsLocations: eA,
            subscriptionPlan: eo,
            planGroup: f,
            trialId: h,
            priceOptions: z,
            paymentSource: t,
            openInvoiceId: S,
            premiumSubscription: D ?? null,
            onNext: eG,
            metadata: I,
            sku: eM,
            purchaseType: Q,
            referralCode: $,
            loadId: K.loadId,
            giftInfoOptions: ey,
            invoicePreview: W,
            quantity: J,
        });
    }
    let eW = null != S || (Q === y.VVm.ONE_TIME && !ec),
        eY = en ? (0, l.jsx)(b.E, { makePurchase: eH, isSubmitting: e_, setIsSubmitting: ex }) : null;
    return (0, l.jsx)(H, {
        stripeExpressCheckoutComponent: eY,
        resolveTenantReviewButtonProps: U,
        showBackButton: j && !eW,
        onBackClick: t,
        disablePurchase: R || ei,
        isSubmitting: e_,
        makePurchase: eH,
        needsPaymentSource: null == eg && !eR,
        onPaymentSourceAdd: M,
    });
}
