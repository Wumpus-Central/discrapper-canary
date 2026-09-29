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
    m = n(158317),
    p = n(313125),
    h = n(951305),
    C = n(158032),
    f = n(830382),
    E = n(243217),
    S = n(158045),
    I = n(652215),
    y = n(202541);
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
        planGroup: m,
        trialId: p,
        priceOptions: h,
        paymentSource: g,
        openInvoiceId: A,
        premiumSubscription: P,
        onNext: v,
        metadata: x,
        sku: _,
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
        if (T === I.VVm.ONE_TIME)
            (a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: g,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                })));
        else {
            (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let t = { amount: R.total, currency: R.currency },
                n = (0, S.l6)(h, R.checkoutContext?.available_plans),
                l = (0, S.$Q)((0, S.y8)(d.id, !1, !1, n));
            if (null != P) {
                let e = h.currency ?? R.currency,
                    t = (0, S.Pg)(P, d.id, 1, new Set(m));
                ((t = (0, S.qn)(t)), (l = (0, S.UC)(t, e.toLowerCase(), h.paymentSourceId)));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, f.XU)(y.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: g,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: M,
                });
            } else if (null != g && null != P && P.status === I.Dmq.PAST_DUE && null != A) {
                let n = h.currency ?? R.currency;
                e = I.AD1.has(g.type)
                    ? await (0, c.LD)(P, A, g, n, b)
                    : await (0, c.nV)(P, { paymentSource: g, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, S.Pg)(P, d.id, 1, new Set(m)),
                    i = { paymentSource: g, currency: h.currency ?? R.currency };
                (P.status === I.Dmq.PAUSED && (i.status = I.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(P, i, t, l, u, o, b)));
            } else
                e = await (0, C.B1)({
                    planId: d.id,
                    currency: h.currency ?? R.currency,
                    paymentSource: g,
                    trialId: p,
                    metadata: x,
                    referralCode: N,
                    loadId: b,
                    expectedInvoicePrice: t,
                    expectedRenewalPrice: l,
                });
        }
        let { shouldReturnEarly: L } = l(e);
        if (L) return;
        ("subscription" in e
            ? (n = null != e.subscription ? E.A.createFromServer(e.subscription) : null)
            : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
            "appliedUserDiscounts" in e &&
                (O =
                    null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                        ? e.appliedUserDiscounts
                        : void 0),
            v(n, i, O));
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
    _ = n(344159),
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
                this.init.purchaseType === I.VVm.SUBSCRIPTION
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
                    onClick: I.tEg,
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
        m = (function (e) {
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
                    purchaseType: m,
                    checkoutPaymentSources: p,
                    invoiceError: h,
                } = (0, w.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                C = null != c && p.some((e) => e.id === c && null != e.relocationCountry),
                { application: f } = (0, k.V)(),
                E = (0, R.bG)([M.A], () => M.A.getFetchState()),
                S = (0, O.n)(f, I.gfo.EMBEDDED) && E === M.$.LOADING,
                y = l ?? !1,
                g = (null != h || r) ?? !1,
                A = i.useMemo(
                    () =>
                        new G(
                            {
                                purchaseType: m,
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
                    [m, n, a, t, o, C, c, u, s],
                ),
                P = i.useMemo(
                    () => A.resolveReviewButtonProps({ loading: y, disabled: g, isApplicationDevShelfLoading: S }),
                    [y, g, S, A],
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
    return (0, l.jsx)(H.lo, { onBackClick: r ? d : void 0, primaryButtonProps: m, stripeExpressCheckoutComponent: t });
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
            metadata: y,
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
        })),
        es = (0, w.Q9)(),
        { paymentSources: eo } = (0, L.j)(),
        eu = (0, F.A)(),
        ec = (0, B.gU)(),
        {
            isGift: ed,
            selectedGiftStyle: em,
            customGiftMessage: ep,
            emojiConfetti: eh,
            soundEffect: eC,
            giftRecipient: ef,
            selectedGiftingPromotionRewards: eE,
        } = (0, h.Pv)(),
        eS = (0, x.Mq)(eu),
        eI = (0, N.lo)(ef),
        ey = {};
    ((ey.gift_style = em),
        (ey.reward_sku_ids = eS ? eE : []),
        eI === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != ef, "Gift recipient must be set at purchase review step for these gift options."),
            (ey.recipient_id = ef.id),
            (ey.custom_message = ep),
            (ey.emoji_id = eh?.id),
            (ey.emoji_name = eh?.id == null ? eh?.surrogates : void 0),
            (ey.sound_id = eC?.soundId)));
    let eg = eu?.id,
        { analyticsLocations: eA } = (0, u.Ay)(),
        eP = (0, v.W)(eo, q),
        { giftCardBalance: ev, giftCardCurrency: ex } = (0, d.h)(),
        [e_, eT] = i.useState(!1),
        [eN, eb] = i.useState(!1),
        ej = i.useRef(!0),
        eR = i.useRef(!1);
    i.useEffect(
        () => () => {
            ej.current = !1;
        },
        [],
    );
    let { hasEntitlements: eM } = (0, _.X)(eg, ed),
        eO = null;
    $ === I.VVm.ONE_TIME &&
        (a()(null != H, "SKU must be selected for one-time purchases"),
        (eO = ec[H] ?? null),
        a()(null != eO, "SKU must exist and be fetched."));
    let eL = i.useCallback(() => {
            (K(P.h.PURCHASING),
                V(!0),
                eT(!0),
                s.h.wait(o.ET),
                z(null),
                T.default.track(I.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: Y?.subtotal,
                    tax: Y?.tax,
                    expected_amount: Y?.total,
                    expected_currency: Y?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: ev,
                    gift_card_currency: ex,
                }));
        }, [K, V, z, n, r, Y, ev, ex]),
        ek = i.useCallback(
            (e) => {
                (K(P.h.FAIL),
                    z(e),
                    T.default.track(I.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eP?.id,
                        payment_source_type: eP?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: ev,
                        gift_card_currency: ex,
                    }));
            },
            [K, z, n, r, eP, ev, ex],
        ),
        { signOrder: ew, reportError: eU } = (0, p.f)({
            order: ei,
            errorSource: "checkout_sign_order",
            onError: (e) => ek(e),
        }),
        eD = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), K(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eb(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (K(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [K],
        ),
        eG = i.useCallback(() => {
            eN || eT(!1);
        }, [eN]),
        eF = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (en(l),
                    null != t && ee(t),
                    null != n && et(n),
                    k(U, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [k, U, en, ee, et],
        );
    async function eB() {
        (eL(), ea(!0));
        try {
            await eH();
        } finally {
            (ea(!1), eG());
        }
    }
    async function eH() {
        let e = await ew({ loadId: Z.loadId, purchaseToken: (0, b.r)() });
        if ("signed" === e.type)
            try {
                let t = await (0, m.Vw)(e.order.id);
                if (!ej.current) return;
                if (0 === t.length) throw new m.j2();
                (K(P.h.COMPLETED), eF(null, t));
            } catch (t) {
                eU(t, { orderId: e.order.id, loadId: Z.loadId });
            }
    }
    async function eW(e) {
        if (null != ei) {
            if (eR.current) return;
            eR.current = !0;
            try {
                if (
                    (await (!es.getState().get("isOrderLocked")
                        ? Promise.resolve()
                        : new Promise((e) => {
                              let t = es.subscribe(() => {
                                  es.getState().get("isOrderLocked") || (t(), e());
                              });
                          })),
                    !ej.current)
                )
                    return;
                await eB();
            } finally {
                eR.current = !1;
            }
            return;
        }
        let t = e ?? eP;
        await g({
            onPurchaseAttempt: eL,
            onPurchaseError: ek,
            onPurchaseComplete: eD,
            onPurchaseFinalize: eG,
            hasRedirectURL: eN,
            isGift: ed,
            analyticsLocation: E,
            analyticsLocations: eA,
            subscriptionPlan: eu,
            planGroup: f,
            trialId: C,
            priceOptions: Q,
            paymentSource: t,
            openInvoiceId: S,
            premiumSubscription: G ?? null,
            onNext: eF,
            metadata: y,
            sku: eO,
            purchaseType: $,
            referralCode: J,
            loadId: Z.loadId,
            giftInfoOptions: ey,
            invoicePreview: Y,
            quantity: X,
        });
    }
    let eY = null != S || ($ === I.VVm.ONE_TIME && !ed),
        eV = el ? (0, l.jsx)(j.E, { makePurchase: eW, isSubmitting: e_, setIsSubmitting: eT }) : null;
    return (0, l.jsx)(W, {
        stripeExpressCheckoutComponent: eV,
        resolveTenantReviewButtonProps: D,
        showBackButton: R && !eY,
        onBackClick: t,
        disablePurchase: M || er,
        isSubmitting: e_,
        makePurchase: eW,
        needsPaymentSource: null == eP && !eM,
        onPaymentSourceAdd: O,
    });
}
