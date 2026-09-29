n.d(t, { U: () => V });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(228366),
    o = n(391048),
    u = n(688810),
    c = n(277984),
    d = n(11939),
    p = n(158317),
    m = n(313125),
    h = n(951305),
    C = n(158032),
    f = n(830382),
    E = n(243217),
    S = n(158045),
    y = n(652215),
    I = n(202541);
async function g(e) {
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
        planGroup: p,
        trialId: m,
        priceOptions: h,
        paymentSource: g,
        openInvoiceId: A,
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
        applyWalletBalance: O,
    } = e;
    try {
        let e, n, i, L;
        if ((t(), r)) return;
        if (T === y.VVm.ONE_TIME)
            (a()(null != x, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(x.applicationId, x.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: g,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                    applyWalletBalance: O,
                })));
        else {
            (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let t = { amount: R.total, currency: R.currency },
                n = (0, S.l6)(h, R.checkoutContext?.available_plans),
                l = (0, S.$Q)((0, S.y8)(d.id, !1, !1, n));
            if (null != P) {
                let e = h.currency ?? R.currency,
                    t = (0, S.Pg)(P, d.id, 1, new Set(p));
                ((t = (0, S.qn)(t)), (l = (0, S.UC)(t, e.toLowerCase(), h.paymentSourceId)));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, f.XU)(I.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: g,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                });
            } else if (null != g && null != P && P.status === y.Dmq.PAST_DUE && null != A) {
                let n = h.currency ?? R.currency;
                e = y.AD1.has(g.type)
                    ? await (0, c.LD)(P, A, g, n, b)
                    : await (0, c.nV)(P, { paymentSource: g, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, S.Pg)(P, d.id, 1, new Set(p)),
                    i = { paymentSource: g, currency: h.currency ?? R.currency };
                (P.status === y.Dmq.PAUSED && (i.status = y.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(P, i, t, l, u, o, b)));
            } else
                e = await (0, C.B1)({
                    planId: d.id,
                    currency: h.currency ?? R.currency,
                    paymentSource: g,
                    trialId: m,
                    metadata: _,
                    referralCode: N,
                    loadId: b,
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
    _ = n(810498),
    x = n(344159),
    T = n(761705),
    N = n(174459),
    b = n(45938),
    j = n(107351),
    R = n(708791),
    M = n(17928),
    O = n(10716),
    L = n(20015),
    k = n(202475),
    w = n(31823),
    U = n(263532),
    D = n(649975),
    G = n(375708);
class F {
    init;
    resolveTenantReviewButtonProps;
    constructor(e, t) {
        ((this.init = e), (this.resolveTenantReviewButtonProps = t ?? this.defaultResolveTenantReviewButtonProps));
    }
    defaultResolveTenantReviewButtonProps(e) {
        return {
            variant: "active",
            text:
                this.init.purchaseType === y.VVm.SUBSCRIPTION
                    ? G.intl.string(G.t.YScQSF)
                    : G.intl.string(D.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? G.intl.string(G.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? G.intl.string(D.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : G.intl.string(D.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: G.intl.string(G.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: G.intl.string(G.t.cjA5tj),
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
                    tooltipText: G.intl.string(G.t.XdvBLS),
                    disabled: !0,
                    onClick: y.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var B = n(558620),
    H = n(427675),
    W = n(169797);
function Y(e) {
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
        p = (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disablePurchase: r,
                    onPaymentSourceAdd: a,
                    resolveTenantReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, k.j)(),
                {
                    hasAcceptedTerms: u,
                    paymentSourceId: c,
                    setCheckoutReviewButtonLabel: d,
                    purchaseType: p,
                    checkoutPaymentSources: m,
                    invoiceError: h,
                } = (0, U.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                C = null != c && m.some((e) => e.id === c && null != e.relocationCountry),
                { application: f } = (0, w.V)(),
                E = (0, M.bG)([O.A], () => O.A.getFetchState()),
                S = (0, L.n)(f, y.gfo.EMBEDDED) && E === O.$.LOADING,
                I = l ?? !1,
                g = (null != h || r) ?? !1,
                A = i.useMemo(
                    () =>
                        new F(
                            {
                                purchaseType: p,
                                needsPaymentSource: n,
                                onPaymentSourceAdd: a,
                                onReviewButtonClick: t,
                                hasPaymentSources: o,
                                willRelocateStoreCountry: C,
                                paymentSourceId: c,
                                hasAcceptedTerms: u,
                            },
                            s,
                        ),
                    [p, n, a, t, o, C, c, u, s],
                ),
                P = i.useMemo(
                    () => A.resolveReviewButtonProps({ loading: I, disabled: g, isApplicationDevShelfLoading: S }),
                    [I, g, S, A],
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
    return (0, l.jsx)(W.lo, { onBackClick: r ? d : void 0, primaryButtonProps: p, stripeExpressCheckoutComponent: t });
}
function V(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: C,
            planGroup: f = [],
            analyticsLocation: E,
            openInvoiceId: S,
            metadata: I,
            backButtonEligible: M,
            disablePurchase: O,
            onPaymentSourceAdd: L,
            handleStepChange: w,
            postPurchaseStep: D = A.pn.CONFIRM,
            resolveTenantReviewButtonProps: G,
        } = e,
        {
            activeSubscription: F,
            selectedSkuId: W,
            invoicePreview: V,
            setHasAcceptedTerms: K,
            setPurchaseState: Z,
            contextMetadata: q,
            paymentSourceId: z,
            setPurchaseError: Q,
            priceOptions: $,
            purchaseType: J,
            referralCode: X,
            quantity: ee,
            setEntitlementsGranted: et,
            setAppliedUserDiscounts: en,
            setUpdatedSubscription: el,
            shouldUseStripeExpressCheckout: ei,
            order: er,
            isOrderLocked: ea,
            setIsOrderSigning: es,
            applyWalletBalance: eo,
        } = (0, U.t4)((e) => ({
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
            applyWalletBalance: e.applyWalletBalance,
        })),
        eu = (0, U.Q9)(),
        { paymentSources: ec } = (0, k.j)(),
        ed = (0, B.A)(),
        ep = (0, H.gU)(),
        {
            isGift: em,
            selectedGiftStyle: eh,
            customGiftMessage: eC,
            emojiConfetti: ef,
            soundEffect: eE,
            giftRecipient: eS,
            selectedGiftingPromotionRewards: ey,
        } = (0, h.Pv)(),
        eI = (0, _.Mq)(ed),
        eg = (0, b.lo)(eS),
        eA = {};
    ((eA.gift_style = eh),
        (eA.reward_sku_ids = eI ? ey : []),
        eg === b.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eS, "Gift recipient must be set at purchase review step for these gift options."),
            (eA.recipient_id = eS.id),
            (eA.custom_message = eC),
            (eA.emoji_id = ef?.id),
            (eA.emoji_name = ef?.id == null ? ef?.surrogates : void 0),
            (eA.sound_id = eE?.soundId)));
    let eP = ed?.id,
        { analyticsLocations: ev } = (0, u.Ay)(),
        e_ = (0, v.W)(ec, z),
        { giftCardBalance: ex, giftCardCurrency: eT } = (0, d.h)(),
        { balance: eN } = (0, T.W)(),
        [eb, ej] = i.useState(!1),
        [eR, eM] = i.useState(!1),
        eO = i.useRef(!0),
        eL = i.useRef(!1);
    i.useEffect(
        () => () => {
            eO.current = !1;
        },
        [],
    );
    let { hasEntitlements: ek } = (0, x.X)(eP, em),
        ew = null;
    J === y.VVm.ONE_TIME &&
        (a()(null != W, "SKU must be selected for one-time purchases"),
        (ew = ep[W] ?? null),
        a()(null != ew, "SKU must exist and be fetched."));
    let eU = i.useCallback(() => {
            (Z(P.h.PURCHASING),
                K(!0),
                ej(!0),
                s.h.wait(o.ET),
                Q(null),
                N.default.track(y.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: V?.subtotal,
                    tax: V?.tax,
                    expected_amount: V?.total,
                    expected_currency: V?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: ex,
                    gift_card_currency: eT,
                    virtual_currency_balance: eN,
                }));
        }, [Z, K, Q, n, r, V, ex, eT, eN]),
        eD = i.useCallback(
            (e) => {
                (Z(P.h.FAIL),
                    Q(e),
                    N.default.track(y.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: e_?.id,
                        payment_source_type: e_?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: ex,
                        gift_card_currency: eT,
                        virtual_currency_balance: eN,
                    }));
            },
            [Z, Q, n, r, e_, ex, eT, eN],
        ),
        { signOrder: eG, reportError: eF } = (0, m.f)({
            order: er,
            errorSource: "checkout_sign_order",
            onError: (e) => eD(e),
        }),
        eB = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), Z(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eM(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (Z(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [Z],
        ),
        eH = i.useCallback(() => {
            eR || ej(!1);
        }, [eR]),
        eW = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (el(l),
                    null != t && et(t),
                    null != n && en(n),
                    w(D, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [w, D, el, et, en],
        );
    async function eY() {
        (eU(), es(!0));
        try {
            await eV();
        } finally {
            (es(!1), eH());
        }
    }
    async function eV() {
        let e = await eG({ loadId: q.loadId, purchaseToken: (0, j.r)() });
        if ("signed" === e.type)
            try {
                let t = await (0, p.Vw)(e.order.id);
                if (!eO.current) return;
                if (0 === t.length) throw new p.j2();
                (Z(P.h.COMPLETED), eW(null, t));
            } catch (t) {
                eF(t, { orderId: e.order.id, loadId: q.loadId });
            }
    }
    async function eK(e) {
        if (null != er) {
            if (eL.current) return;
            eL.current = !0;
            try {
                if (
                    (await (!eu.getState().get("isOrderLocked")
                        ? Promise.resolve()
                        : new Promise((e) => {
                              let t = eu.subscribe(() => {
                                  eu.getState().get("isOrderLocked") || (t(), e());
                              });
                          })),
                    !eO.current)
                )
                    return;
                await eY();
            } finally {
                eL.current = !1;
            }
            return;
        }
        let t = e ?? e_;
        await g({
            onPurchaseAttempt: eU,
            onPurchaseError: eD,
            onPurchaseComplete: eB,
            onPurchaseFinalize: eH,
            hasRedirectURL: eR,
            isGift: em,
            analyticsLocation: E,
            analyticsLocations: ev,
            subscriptionPlan: ed,
            planGroup: f,
            trialId: C,
            priceOptions: $,
            paymentSource: t,
            openInvoiceId: S,
            premiumSubscription: F ?? null,
            onNext: eW,
            metadata: I,
            sku: ew,
            purchaseType: J,
            referralCode: X,
            loadId: q.loadId,
            giftInfoOptions: eA,
            invoicePreview: V,
            quantity: ee,
            applyWalletBalance: eo,
        });
    }
    let eZ = null != S || (J === y.VVm.ONE_TIME && !em),
        eq = ei ? (0, l.jsx)(R.E, { makePurchase: eK, isSubmitting: eb, setIsSubmitting: ej }) : null;
    return (0, l.jsx)(Y, {
        stripeExpressCheckoutComponent: eq,
        resolveTenantReviewButtonProps: G,
        showBackButton: M && !eZ,
        onBackClick: t,
        disablePurchase: O || ea,
        isSubmitting: eb,
        makePurchase: eK,
        needsPaymentSource: null == e_ && !ek,
        onPaymentSourceAdd: L,
    });
}
