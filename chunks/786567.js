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
    p = n(158317),
    m = n(423686),
    C = n(951305),
    h = n(158032),
    f = n(830382),
    S = n(243217),
    E = n(158045),
    y = n(652215),
    A = n(202541);
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
        planGroup: p,
        trialId: m,
        priceOptions: C,
        paymentSource: I,
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
        if (T === y.VVm.ONE_TIME)
            (a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: I,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                })));
        else {
            (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let t = { amount: R.total, currency: R.currency },
                n = (0, E.l6)(C, R.checkoutContext?.available_plans),
                l = (0, E.$Q)((0, E.y8)(d.id, !1, !1, n));
            if (null != P) {
                let e = C.currency ?? R.currency,
                    t = (0, E.Pg)(P, d.id, 1, new Set(p));
                ((t = (0, E.qn)(t)), (l = (0, E.UC)(t, e.toLowerCase(), C.paymentSourceId)));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, f.XU)(A.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: I,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                });
            } else if (null != I && null != P && P.status === y.Dmq.PAST_DUE && null != g) {
                let n = C.currency ?? R.currency;
                e = y.AD1.has(I.type)
                    ? await (0, c.LD)(P, g, I, n, b)
                    : await (0, c.nV)(P, { paymentSource: I, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, E.Pg)(P, d.id, 1, new Set(p)),
                    i = { paymentSource: I, currency: C.currency ?? R.currency };
                (P.status === y.Dmq.PAUSED && (i.status = y.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(P, i, t, l, u, o, b)));
            } else
                e = await (0, h.B1)({
                    planId: d.id,
                    currency: C.currency ?? R.currency,
                    paymentSource: I,
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
            ? (n = null != e.subscription ? S.A.createFromServer(e.subscription) : null)
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
var g = n(166532),
    P = n(566980),
    v = n(216641),
    x = n(810498),
    _ = n(436102),
    T = n(478996),
    N = n(174459),
    b = n(739508),
    j = n(45938),
    R = n(107351),
    O = n(708791),
    M = n(991690),
    L = n(17928),
    k = n(10716),
    w = n(878014),
    D = n(202475),
    U = n(31823),
    G = n(504560),
    F = n(583741),
    B = n(660183);
class H {
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
                    ? B.intl.string(B.t.YScQSF)
                    : B.intl.string(F.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? B.intl.string(B.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? B.intl.string(F.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : B.intl.string(F.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: B.intl.string(B.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: B.intl.string(B.t.cjA5tj),
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
                    tooltipText: B.intl.string(B.t.XdvBLS),
                    disabled: !0,
                    onClick: y.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var W = n(558620),
    V = n(427675),
    Y = n(169797);
function K(e, t) {
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
async function Z(e) {
    await K(e, (e) => !e.get("isOrderLocked") || null);
}
var q = n(26279);
function z(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === q.Re.SIGNING_IN_PROGRESS ? null : n;
}
let $ = [1e3, 2e3, 4e3, 8e3, 1e4];
async function Q(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, $[Math.min(l, $.length - 1)])), !n() || null != z(e.getState(), t)))
            return;
        let i = await (0, p.r$)(t.id);
        null != i &&
            n() &&
            (function (e, t) {
                let { order: n, setOrder: l } = e.getState();
                null != n && n.id === t.id && t.revision > n.revision && l(t);
            })(e, i);
    }
}
function J(e) {
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
                { hasPaymentSources: o } = (0, D.j)(),
                {
                    hasAcceptedTerms: u,
                    paymentSourceId: c,
                    setCheckoutReviewButtonLabel: d,
                    purchaseType: p,
                    checkoutPaymentSources: m,
                    invoiceError: C,
                } = (0, G.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                h = null != c && m.some((e) => e.id === c && null != e.relocationCountry),
                { application: f } = (0, U.V)(),
                S = (0, L.bG)([k.A], () => k.A.getFetchState()),
                E = (0, w.W)(f, M.U.MAIN) && S === k.$.LOADING,
                y = l ?? !1,
                A = (null != C || r) ?? !1,
                I = i.useMemo(
                    () =>
                        new H(
                            {
                                purchaseType: p,
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
                    [p, n, a, t, o, h, c, u, s],
                ),
                g = i.useMemo(
                    () => I.resolveReviewButtonProps({ loading: y, disabled: A, isApplicationDevShelfLoading: E }),
                    [y, A, E, I],
                );
            return (
                i.useEffect(() => {
                    d(g.text);
                }, [g.text, d]),
                g
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
function X(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: h,
            planGroup: f = [],
            analyticsLocation: S,
            openInvoiceId: E,
            metadata: A,
            backButtonEligible: M,
            disablePurchase: L,
            onPaymentSourceAdd: k,
            handleStepChange: w,
            postPurchaseStep: U = g.pn.CONFIRM,
            resolveTenantReviewButtonProps: F,
        } = e,
        {
            activeSubscription: H,
            selectedSkuId: Y,
            invoicePreview: $,
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
            setIsOrderSigning: eC,
            applyWalletBalance: eh,
            handleBillingErrorForPurchaseTokenAuth: ef,
        } = (0, G.t4)((e) => ({
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
        eS = (0, G.Q9)(),
        { paymentSources: eE } = (0, D.j)(),
        ey = (0, W.A)(),
        eA = (0, V.gU)(),
        {
            isGift: eI,
            selectedGiftStyle: eg,
            customGiftMessage: eP,
            emojiConfetti: ev,
            soundEffect: ex,
            giftRecipient: e_,
            selectedGiftingPromotionRewards: eT,
        } = (0, C.Pv)(),
        eN = (0, x.Mq)(ey),
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
        { analyticsLocations: eO } = (0, u.Ay)(),
        eM = (0, v.W)(eE, en),
        { giftCardBalance: eL, giftCardCurrency: ek } = (0, d.h)(),
        { balance: ew } = (0, T.W0)(),
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
    let { hasEntitlements: eW } = (0, _.X)(eR, eI),
        eV = null;
    er === y.VVm.ONE_TIME &&
        (a()(null != Y, "SKU must be selected for one-time purchases"),
        (eV = eA[Y] ?? null),
        a()(null != eV, "SKU must exist and be fetched."));
    let eY = i.useCallback(() => {
            (ee(P.h.PURCHASING),
                X(!0),
                eU(!0),
                (0, s.ET)(),
                el(null),
                N.default.track(y.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: $?.subtotal,
                    tax: $?.tax,
                    expected_amount: $?.total,
                    expected_currency: $?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eL,
                    gift_card_currency: ek,
                    virtual_currency_balance: ew,
                }));
        }, [ee, X, el, n, r, $, eL, ek, ew]),
        eK = i.useCallback(
            (e) => {
                (ee(P.h.FAIL),
                    el(e),
                    N.default.track(y.HAw.PAYMENT_FLOW_FAILED, {
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
        { signOrder: eZ, reportError: eq } = (0, m.f)({
            order: ep,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eK(e), ef(e));
            },
        }),
        ez = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), ee(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eF(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (ee(P.h.COMPLETED), { shouldReturnEarly: !1 }),
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
                    w(U, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [w, U, ec, eo, eu],
        );
    async function eJ() {
        (eY(), eC(!0));
        try {
            await e0();
        } finally {
            (eC(!1), e$());
        }
    }
    async function eX(e) {
        Q(eS, e, () => eB.current);
        let t = await K(eS, (t) => z(t, e));
        return t.status !== q.Re.SIGNED ? (eK(new o.Ay(B.intl.string(B.t.khEaRI))), null) : t;
    }
    async function e0() {
        let e = await (0, b.ob)(
                (function () {
                    let { order: e } = eS.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, v.W)(eE, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await eZ({ loadId: et.loadId, purchaseToken: (0, R.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await eX(t.order);
        if (null != n)
            try {
                let e = await (0, p.Vw)(n.id);
                if (!eB.current) return;
                if (0 === e.length) throw new p.j2();
                (ee(P.h.COMPLETED), eQ(null, e));
            } catch (e) {
                eq(e, { orderId: n.id, loadId: et.loadId });
            }
    }
    async function e2(e) {
        if (null != ep) {
            if (eH.current) return;
            eH.current = !0;
            try {
                if ((await Z(eS), !eB.current)) return;
                await eJ();
            } finally {
                eH.current = !1;
            }
            return;
        }
        let t = e ?? eM;
        await I({
            onPurchaseAttempt: eY,
            onPurchaseError: eK,
            onPurchaseComplete: ez,
            onPurchaseFinalize: e$,
            hasRedirectURL: eG,
            isGift: eI,
            analyticsLocation: S,
            analyticsLocations: eO,
            subscriptionPlan: ey,
            planGroup: f,
            trialId: h,
            priceOptions: ei,
            paymentSource: t,
            openInvoiceId: E,
            premiumSubscription: H ?? null,
            onNext: eQ,
            metadata: A,
            sku: eV,
            purchaseType: er,
            referralCode: ea,
            loadId: et.loadId,
            giftInfoOptions: ej,
            invoicePreview: $,
            quantity: es,
            applyWalletBalance: eh,
        });
    }
    let e1 = null != E || (er === y.VVm.ONE_TIME && !eI),
        e3 = ed ? (0, l.jsx)(O.E, { makePurchase: e2, isSubmitting: eD, setIsSubmitting: eU }) : null;
    return (0, l.jsx)(J, {
        stripeExpressCheckoutComponent: e3,
        resolveTenantReviewButtonProps: F,
        showBackButton: M && !e1,
        onBackClick: t,
        disablePurchase: L || em,
        isSubmitting: eD,
        makePurchase: e2,
        needsPaymentSource: null == eM && !eW,
        onPaymentSourceAdd: k,
    });
}
