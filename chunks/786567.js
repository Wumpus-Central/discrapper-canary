n.d(t, { U: () => J });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(228366),
    o = n(391048),
    u = n(136857),
    c = n(688810),
    d = n(277984),
    p = n(11939),
    m = n(158317),
    h = n(540173),
    C = n(951305),
    f = n(158032),
    S = n(830382),
    E = n(243217),
    y = n(158045),
    A = n(652215),
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
        subscriptionPlan: c,
        planGroup: p,
        trialId: m,
        priceOptions: h,
        paymentSource: C,
        openInvoiceId: g,
        premiumSubscription: P,
        onNext: v,
        metadata: x,
        sku: _,
        purchaseType: T,
        referralCode: N,
        loadId: b,
        giftInfoOptions: j,
        invoicePreview: R,
        quantity: O,
        applyWalletBalance: M,
    } = e;
    try {
        let e, n, i, L;
        if ((t(), r)) return;
        if (T === A.VVm.ONE_TIME)
            (a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, S.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: C,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                })));
        else {
            (a()(null != c, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let t = { amount: R.total, currency: R.currency },
                n = (0, y.l6)(h, R.checkoutContext?.available_plans),
                l = (0, y.$Q)((0, y.y8)(c.id, !1, !1, n));
            if (null != P) {
                let e = h.currency ?? R.currency,
                    t = (0, y.Pg)(P, c.id, 1, new Set(p));
                ((t = (0, y.qn)(t)), (l = (0, y.UC)(t, e.toLowerCase(), h.paymentSourceId)));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, S.XU)(I.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: C,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                });
            } else if (null != C && null != P && P.status === A.Dmq.PAST_DUE && null != g) {
                let n = h.currency ?? R.currency;
                e = A.AD1.has(C.type)
                    ? await (0, d.LD)(P, g, C, n, b)
                    : await (0, d.nV)(P, { paymentSource: C, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, y.Pg)(P, c.id, 1, new Set(p)),
                    i = { paymentSource: C, currency: h.currency ?? R.currency };
                (P.status === A.Dmq.PAUSED && (i.status = A.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, d.nV)(P, i, t, l, u, o, b)));
            } else
                e = await (0, f.B1)({
                    planId: c.id,
                    currency: h.currency ?? R.currency,
                    paymentSource: C,
                    trialId: m,
                    metadata: x,
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
var P = n(166532),
    v = n(566980),
    x = n(216641),
    _ = n(810498),
    T = n(436102),
    N = n(478996),
    b = n(174459),
    j = n(45938),
    R = n(107351),
    O = n(708791),
    M = n(17928),
    L = n(10716),
    k = n(20015),
    w = n(202475),
    D = n(31823),
    U = n(263532),
    G = n(649975),
    F = n(375708);
class B {
    init;
    resolveTenantReviewButtonProps;
    constructor(e, t) {
        ((this.init = e), (this.resolveTenantReviewButtonProps = t ?? this.defaultResolveTenantReviewButtonProps));
    }
    defaultResolveTenantReviewButtonProps(e) {
        return {
            variant: "active",
            text:
                this.init.purchaseType === A.VVm.SUBSCRIPTION
                    ? F.intl.string(F.t.YScQSF)
                    : F.intl.string(G.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? F.intl.string(F.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? F.intl.string(G.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : F.intl.string(G.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: F.intl.string(F.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: F.intl.string(F.t.cjA5tj),
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
                    tooltipText: F.intl.string(F.t.XdvBLS),
                    disabled: !0,
                    onClick: A.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var H = n(558620),
    W = n(427675),
    Y = n(169797);
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
async function K(e) {
    await V(e, (e) => !e.get("isOrderLocked") || null);
}
var q = n(26279);
function Z(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === q.Re.SIGNING_IN_PROGRESS ? null : n;
}
let z = [1e3, 2e3, 4e3, 8e3, 1e4];
async function $(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, z[Math.min(l, z.length - 1)])), !n() || null != Z(e.getState(), t)))
            return;
        let i = await (0, m.r$)(t.id);
        null != i &&
            n() &&
            (function (e, t) {
                let { order: n, setOrder: l } = e.getState();
                null != n && n.id === t.id && t.revision > n.revision && l(t);
            })(e, i);
    }
}
function Q(e) {
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
                { hasPaymentSources: o } = (0, w.j)(),
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
                { application: f } = (0, D.V)(),
                S = (0, M.bG)([L.A], () => L.A.getFetchState()),
                E = (0, k.n)(f, A.gfo.EMBEDDED) && S === L.$.LOADING,
                y = l ?? !1,
                I = (null != h || r) ?? !1,
                g = i.useMemo(
                    () =>
                        new B(
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
                    () => g.resolveReviewButtonProps({ loading: y, disabled: I, isApplicationDevShelfLoading: E }),
                    [y, I, E, g],
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
    return (0, l.jsx)(Y.lo, { onBackClick: r ? d : void 0, primaryButtonProps: p, stripeExpressCheckoutComponent: t });
}
function J(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: f,
            planGroup: S = [],
            analyticsLocation: E,
            openInvoiceId: y,
            metadata: I,
            backButtonEligible: M,
            disablePurchase: L,
            onPaymentSourceAdd: k,
            handleStepChange: D,
            postPurchaseStep: G = P.pn.CONFIRM,
            resolveTenantReviewButtonProps: B,
        } = e,
        {
            activeSubscription: Y,
            selectedSkuId: z,
            invoicePreview: J,
            setHasAcceptedTerms: X,
            setPurchaseState: ee,
            contextMetadata: et,
            paymentSourceId: en,
            setPurchaseError: el,
            priceOptions: ei,
            purchaseType: er,
            referralCode: ea,
            quantity: es,
            setEntitlementsGranted: eo,
            setAppliedUserDiscounts: eu,
            setUpdatedSubscription: ec,
            shouldUseStripeExpressCheckout: ed,
            order: ep,
            isOrderLocked: em,
            setIsOrderSigning: eh,
            applyWalletBalance: eC,
            handleBillingErrorForPurchaseTokenAuth: ef,
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
            handleBillingErrorForPurchaseTokenAuth: e.handleBillingErrorForPurchaseTokenAuth,
        })),
        eS = (0, U.Q9)(),
        { paymentSources: eE } = (0, w.j)(),
        ey = (0, H.A)(),
        eA = (0, W.gU)(),
        {
            isGift: eI,
            selectedGiftStyle: eg,
            customGiftMessage: eP,
            emojiConfetti: ev,
            soundEffect: ex,
            giftRecipient: e_,
            selectedGiftingPromotionRewards: eT,
        } = (0, C.Pv)(),
        eN = (0, _.Mq)(ey),
        eb = (0, j.lo)(e_),
        ej = {};
    ((ej.gift_style = eg),
        (ej.reward_sku_ids = eN ? eT : []),
        eb === j.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != e_, "Gift recipient must be set at purchase review step for these gift options."),
            (ej.recipient_id = e_.id),
            (ej.custom_message = eP),
            (ej.emoji_id = ev?.id),
            (ej.emoji_name = ev?.id == null ? ev?.surrogates : void 0),
            (ej.sound_id = ex?.soundId)));
    let eR = ey?.id,
        { analyticsLocations: eO } = (0, c.Ay)(),
        eM = (0, x.W)(eE, en),
        { giftCardBalance: eL, giftCardCurrency: ek } = (0, p.h)(),
        { balance: ew } = (0, N.W0)(),
        [eD, eU] = i.useState(!1),
        [eG, eF] = i.useState(!1),
        eB = i.useRef(!0),
        eH = i.useRef(!1);
    i.useEffect(
        () => () => {
            eB.current = !1;
        },
        [],
    );
    let { hasEntitlements: eW } = (0, T.X)(eR, eI),
        eY = null;
    er === A.VVm.ONE_TIME &&
        (a()(null != z, "SKU must be selected for one-time purchases"),
        (eY = eA[z] ?? null),
        a()(null != eY, "SKU must exist and be fetched."));
    let eV = i.useCallback(() => {
            (ee(v.h.PURCHASING),
                X(!0),
                eU(!0),
                s.h.wait(o.ET),
                el(null),
                b.default.track(A.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: J?.subtotal,
                    tax: J?.tax,
                    expected_amount: J?.total,
                    expected_currency: J?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eL,
                    gift_card_currency: ek,
                    virtual_currency_balance: ew,
                }));
        }, [ee, X, el, n, r, J, eL, ek, ew]),
        eK = i.useCallback(
            (e) => {
                (ee(v.h.FAIL),
                    el(e),
                    b.default.track(A.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eM?.id,
                        payment_source_type: eM?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eL,
                        gift_card_currency: ek,
                        virtual_currency_balance: ew,
                    }));
            },
            [ee, el, n, r, eM, eL, ek, ew],
        ),
        { signOrder: eq, reportError: eZ } = (0, h.f)({
            order: ep,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eK(e), ef(e));
            },
        }),
        ez = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, d.fE)(), ee(v.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eF(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (ee(v.h.COMPLETED), { shouldReturnEarly: !1 }),
            [ee],
        ),
        e$ = i.useCallback(() => {
            eG || eU(!1);
        }, [eG]),
        eQ = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (ec(l),
                    null != t && eo(t),
                    null != n && eu(n),
                    D(G, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [D, G, ec, eo, eu],
        );
    async function eJ() {
        (eV(), eh(!0));
        try {
            await e0();
        } finally {
            (eh(!1), e$());
        }
    }
    async function eX(e) {
        $(eS, e, () => eB.current);
        let t = await V(eS, (t) => Z(t, e));
        return t.status !== q.Re.SIGNED ? (eK(new u.Ay(F.intl.string(F.t.khEaRI))), null) : t;
    }
    async function e0() {
        let e = await eq({ loadId: et.loadId, purchaseToken: (0, R.r)() });
        if ("failed" === e.type) return;
        let t = "signed" === e.type ? e.order : await eX(e.order);
        if (null != t)
            try {
                let e = await (0, m.Vw)(t.id);
                if (!eB.current) return;
                if (0 === e.length) throw new m.j2();
                (ee(v.h.COMPLETED), eQ(null, e));
            } catch (e) {
                eZ(e, { orderId: t.id, loadId: et.loadId });
            }
    }
    async function e2(e) {
        if (null != ep) {
            if (eH.current) return;
            eH.current = !0;
            try {
                if ((await K(eS), !eB.current)) return;
                await eJ();
            } finally {
                eH.current = !1;
            }
            return;
        }
        let t = e ?? eM;
        await g({
            onPurchaseAttempt: eV,
            onPurchaseError: eK,
            onPurchaseComplete: ez,
            onPurchaseFinalize: e$,
            hasRedirectURL: eG,
            isGift: eI,
            analyticsLocation: E,
            analyticsLocations: eO,
            subscriptionPlan: ey,
            planGroup: S,
            trialId: f,
            priceOptions: ei,
            paymentSource: t,
            openInvoiceId: y,
            premiumSubscription: Y ?? null,
            onNext: eQ,
            metadata: I,
            sku: eY,
            purchaseType: er,
            referralCode: ea,
            loadId: et.loadId,
            giftInfoOptions: ej,
            invoicePreview: J,
            quantity: es,
            applyWalletBalance: eC,
        });
    }
    let e1 = null != y || (er === A.VVm.ONE_TIME && !eI),
        e3 = ed ? (0, l.jsx)(O.E, { makePurchase: e2, isSubmitting: eD, setIsSubmitting: eU }) : null;
    return (0, l.jsx)(Q, {
        stripeExpressCheckoutComponent: e3,
        resolveTenantReviewButtonProps: B,
        showBackButton: M && !e1,
        onBackClick: t,
        disablePurchase: L || em,
        isSubmitting: eD,
        makePurchase: e2,
        needsPaymentSource: null == eM && !eW,
        onPaymentSourceAdd: k,
    });
}
