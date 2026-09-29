n.d(t, { U: () => Y });
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
    T = n(174459),
    N = n(45938),
    b = n(107351),
    j = n(708791),
    R = n(17928),
    M = n(10716),
    O = n(20015),
    L = n(202475),
    k = n(31823),
    w = n(263532),
    U = n(649975),
    D = n(375708);
class G {
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
                    ? D.intl.string(D.t.YScQSF)
                    : D.intl.string(U.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? D.intl.string(D.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? D.intl.string(U.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : D.intl.string(U.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: D.intl.string(D.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: D.intl.string(D.t.cjA5tj),
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
                    tooltipText: D.intl.string(D.t.XdvBLS),
                    disabled: !0,
                    onClick: y.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var F = n(558620),
    B = n(427675),
    H = n(169797);
function W(e) {
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
                { hasPaymentSources: o } = (0, L.j)(),
                {
                    hasAcceptedTerms: u,
                    paymentSourceId: c,
                    setCheckoutReviewButtonLabel: d,
                    purchaseType: p,
                    checkoutPaymentSources: m,
                    invoiceError: h,
                } = (0, w.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                C = null != c && m.some((e) => e.id === c && null != e.relocationCountry),
                { application: f } = (0, k.V)(),
                E = (0, R.bG)([M.A], () => M.A.getFetchState()),
                S = (0, O.n)(f, y.gfo.EMBEDDED) && E === M.$.LOADING,
                I = l ?? !1,
                g = (null != h || r) ?? !1,
                A = i.useMemo(
                    () =>
                        new G(
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
    return (0, l.jsx)(H.lo, { onBackClick: r ? d : void 0, primaryButtonProps: p, stripeExpressCheckoutComponent: t });
}
function Y(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: C,
            planGroup: f = [],
            analyticsLocation: E,
            openInvoiceId: S,
            metadata: I,
            backButtonEligible: R,
            disablePurchase: M,
            onPaymentSourceAdd: O,
            handleStepChange: k,
            postPurchaseStep: U = A.pn.CONFIRM,
            resolveTenantReviewButtonProps: D,
        } = e,
        {
            activeSubscription: G,
            selectedSkuId: H,
            invoicePreview: Y,
            setHasAcceptedTerms: V,
            setPurchaseState: K,
            contextMetadata: Z,
            paymentSourceId: q,
            setPurchaseError: z,
            priceOptions: Q,
            purchaseType: $,
            referralCode: J,
            quantity: X,
            setEntitlementsGranted: ee,
            setAppliedUserDiscounts: et,
            setUpdatedSubscription: en,
            shouldUseStripeExpressCheckout: el,
            order: ei,
            isOrderLocked: er,
            setIsOrderSigning: ea,
            applyWalletBalance: es,
        } = (0, w.t4)((e) => ({
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
        eo = (0, w.Q9)(),
        { paymentSources: eu } = (0, L.j)(),
        ec = (0, F.A)(),
        ed = (0, B.gU)(),
        {
            isGift: ep,
            selectedGiftStyle: em,
            customGiftMessage: eh,
            emojiConfetti: eC,
            soundEffect: ef,
            giftRecipient: eE,
            selectedGiftingPromotionRewards: eS,
        } = (0, h.Pv)(),
        ey = (0, _.Mq)(ec),
        eI = (0, N.lo)(eE),
        eg = {};
    ((eg.gift_style = em),
        (eg.reward_sku_ids = ey ? eS : []),
        eI === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eE, "Gift recipient must be set at purchase review step for these gift options."),
            (eg.recipient_id = eE.id),
            (eg.custom_message = eh),
            (eg.emoji_id = eC?.id),
            (eg.emoji_name = eC?.id == null ? eC?.surrogates : void 0),
            (eg.sound_id = ef?.soundId)));
    let eA = ec?.id,
        { analyticsLocations: eP } = (0, u.Ay)(),
        ev = (0, v.W)(eu, q),
        { giftCardBalance: e_, giftCardCurrency: ex } = (0, d.h)(),
        [eT, eN] = i.useState(!1),
        [eb, ej] = i.useState(!1),
        eR = i.useRef(!0),
        eM = i.useRef(!1);
    i.useEffect(
        () => () => {
            eR.current = !1;
        },
        [],
    );
    let { hasEntitlements: eO } = (0, x.X)(eA, ep),
        eL = null;
    $ === y.VVm.ONE_TIME &&
        (a()(null != H, "SKU must be selected for one-time purchases"),
        (eL = ed[H] ?? null),
        a()(null != eL, "SKU must exist and be fetched."));
    let ek = i.useCallback(() => {
            (K(P.h.PURCHASING),
                V(!0),
                eN(!0),
                s.h.wait(o.ET),
                z(null),
                T.default.track(y.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: Y?.subtotal,
                    tax: Y?.tax,
                    expected_amount: Y?.total,
                    expected_currency: Y?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: e_,
                    gift_card_currency: ex,
                }));
        }, [K, V, z, n, r, Y, e_, ex]),
        ew = i.useCallback(
            (e) => {
                (K(P.h.FAIL),
                    z(e),
                    T.default.track(y.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: ev?.id,
                        payment_source_type: ev?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: e_,
                        gift_card_currency: ex,
                    }));
            },
            [K, z, n, r, ev, e_, ex],
        ),
        { signOrder: eU, reportError: eD } = (0, m.f)({
            order: ei,
            errorSource: "checkout_sign_order",
            onError: (e) => ew(e),
        }),
        eG = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), K(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (ej(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (K(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [K],
        ),
        eF = i.useCallback(() => {
            eb || eN(!1);
        }, [eb]),
        eB = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (en(l),
                    null != t && ee(t),
                    null != n && et(n),
                    k(U, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [k, U, en, ee, et],
        );
    async function eH() {
        (ek(), ea(!0));
        try {
            await eW();
        } finally {
            (ea(!1), eF());
        }
    }
    async function eW() {
        let e = await eU({ loadId: Z.loadId, purchaseToken: (0, b.r)() });
        if ("signed" === e.type)
            try {
                let t = await (0, p.Vw)(e.order.id);
                if (!eR.current) return;
                if (0 === t.length) throw new p.j2();
                (K(P.h.COMPLETED), eB(null, t));
            } catch (t) {
                eD(t, { orderId: e.order.id, loadId: Z.loadId });
            }
    }
    async function eY(e) {
        if (null != ei) {
            if (eM.current) return;
            eM.current = !0;
            try {
                if (
                    (await (!eo.getState().get("isOrderLocked")
                        ? Promise.resolve()
                        : new Promise((e) => {
                              let t = eo.subscribe(() => {
                                  eo.getState().get("isOrderLocked") || (t(), e());
                              });
                          })),
                    !eR.current)
                )
                    return;
                await eH();
            } finally {
                eM.current = !1;
            }
            return;
        }
        let t = e ?? ev;
        await g({
            onPurchaseAttempt: ek,
            onPurchaseError: ew,
            onPurchaseComplete: eG,
            onPurchaseFinalize: eF,
            hasRedirectURL: eb,
            isGift: ep,
            analyticsLocation: E,
            analyticsLocations: eP,
            subscriptionPlan: ec,
            planGroup: f,
            trialId: C,
            priceOptions: Q,
            paymentSource: t,
            openInvoiceId: S,
            premiumSubscription: G ?? null,
            onNext: eB,
            metadata: I,
            sku: eL,
            purchaseType: $,
            referralCode: J,
            loadId: Z.loadId,
            giftInfoOptions: eg,
            invoicePreview: Y,
            quantity: X,
            applyWalletBalance: es,
        });
    }
    let eV = null != S || ($ === y.VVm.ONE_TIME && !ep),
        eK = el ? (0, l.jsx)(j.E, { makePurchase: eY, isSubmitting: eT, setIsSubmitting: eN }) : null;
    return (0, l.jsx)(W, {
        stripeExpressCheckoutComponent: eK,
        resolveTenantReviewButtonProps: D,
        showBackButton: R && !eV,
        onBackClick: t,
        disablePurchase: M || er,
        isSubmitting: eT,
        makePurchase: eY,
        needsPaymentSource: null == ev && !eO,
        onPaymentSourceAdd: O,
    });
}
