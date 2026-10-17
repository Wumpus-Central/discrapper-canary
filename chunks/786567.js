n.d(t, { U: () => en });
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
    m = n(497782),
    h = n(951305),
    C = n(158032),
    f = n(830382),
    S = n(243217),
    E = n(158045),
    I = n(652215),
    g = n(202541);
async function y(e) {
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
        paymentSource: y,
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
        quantity: O,
        applyWalletBalance: M,
    } = e;
    try {
        let e, n, i, L;
        if ((t(), r)) return;
        if (T === I.VVm.ONE_TIME)
            (a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: y,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                })));
        else {
            (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let t = { amount: R.total, currency: R.currency },
                n = (0, E.l6)(h, R.checkoutContext?.available_plans),
                l = (0, E.$Q)((0, E.y8)(d.id, !1, !1, n));
            if (null != P) {
                let e = h.currency ?? R.currency,
                    t = (0, E.Pg)(P, d.id, 1, new Set(p));
                ((t = (0, E.qn)(t)), (l = (0, E.UC)(t, e.toLowerCase(), h.paymentSourceId)));
            }
            if (s) {
                let t = R.total,
                    n = R.currency;
                e = await (0, f.XU)(g.tv, d.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: y,
                    subscriptionPlanId: d.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                });
            } else if (null != y && null != P && P.status === I.Dmq.PAST_DUE && null != A) {
                let n = h.currency ?? R.currency;
                e = I.AD1.has(y.type)
                    ? await (0, c.LD)(P, A, y, n, b)
                    : await (0, c.nV)(P, { paymentSource: y, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, E.Pg)(P, d.id, 1, new Set(p)),
                    i = { paymentSource: y, currency: h.currency ?? R.currency };
                (P.status === I.Dmq.PAUSED && (i.status = I.Dmq.ACTIVE),
                    P.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(P, i, t, l, u, o, b)));
            } else
                e = await (0, C.B1)({
                    planId: d.id,
                    currency: h.currency ?? R.currency,
                    paymentSource: y,
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
var A = n(166532),
    P = n(566980),
    v = n(216641),
    x = n(371710),
    _ = n(810498),
    T = n(436102),
    N = n(478996),
    b = n(174459),
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
    F = n(123816),
    B = n(649975),
    H = n(105292);
class W {
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
                    ? H.intl.string(H.t.YScQSF)
                    : H.intl.string(B.default.BPzQj4),
            dataTestId: "purchase",
            onClick: this.init.onReviewButtonClick,
            loading: e.loading,
            disabled: e.disabled,
        };
    }
    resolveButtonLabel(e) {
        return null === this.init.paymentSourceId && this.init.hasPaymentSources
            ? H.intl.string(H.t.CpOiEO)
            : this.init.willRelocateStoreCountry
              ? H.intl.string(B.default["7r4HPu"])
              : null != e && null != e.text
                ? e.text
                : H.intl.string(B.default.BPzQj4);
    }
    resolvePaymentSourceRequiredProps(e) {
        let t = { text: e, tooltipText: H.intl.string(H.t.L7jbQV), type: "submit", dataTestId: "submitButton" };
        return this.init.hasPaymentSources
            ? { ...t, variant: "primary", onClick: this.init.onPaymentSourceAdd }
            : { ...t, variant: "active", disabled: !0 };
    }
    resolveApplicationDevShelfLoadingProps(e) {
        return {
            tooltipText: H.intl.string(H.t.cjA5tj),
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
                    tooltipText: H.intl.string(H.t.XdvBLS),
                    disabled: !0,
                    onClick: I.tEg,
                    dataTestId: "submitButton",
                };
    };
}
var V = n(558620),
    Y = n(427675),
    K = n(169797),
    Z = n(705822);
function q(e, t) {
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
async function z(e) {
    await q(e, (e) => !e.get("isOrderLocked") || null);
}
var $ = n(26279);
function Q(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === $.Re.SIGNING_IN_PROGRESS ? null : n;
}
let J = [1e3, 2e3, 4e3, 8e3, 1e4];
function X(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
async function ee(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, J[Math.min(l, J.length - 1)])), !n() || null != Q(e.getState(), t)))
            return;
        let i = await (0, p.r$)(t.id);
        null != i && n() && X(e, i);
    }
}
function et(e) {
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
                { hasPaymentSources: o } = (0, U.j)(),
                {
                    hasAcceptedTerms: u,
                    paymentSourceId: c,
                    setCheckoutReviewButtonLabel: d,
                    purchaseType: p,
                    checkoutPaymentSources: m,
                    invoiceError: h,
                } = (0, F.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                C = null != c && m.some((e) => e.id === c && null != e.relocationCountry),
                { application: f } = (0, G.V)(),
                S = (0, k.bG)([w.A], () => w.A.getFetchState()),
                E = (0, D.W)(f, L.U.MAIN) && S === w.$.LOADING,
                I = l ?? !1,
                g = (null != h || r) ?? !1,
                y = i.useMemo(
                    () =>
                        new W(
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
                A = i.useMemo(
                    () => y.resolveReviewButtonProps({ loading: I, disabled: g, isApplicationDevShelfLoading: E }),
                    [I, g, E, y],
                );
            return (
                i.useEffect(() => {
                    d(A.text);
                }, [A.text, d]),
                A
            );
        })({
            onReviewButtonClick: () => a(),
            isSubmitting: u,
            disablePurchase: o,
            onPaymentSourceAdd: s,
            resolveTenantReviewButtonProps: n,
            needsPaymentSource: c,
        });
    return (0, l.jsx)(K.lo, { onBackClick: r ? d : void 0, primaryButtonProps: p, stripeExpressCheckoutComponent: t });
}
function en(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: C,
            planGroup: f = [],
            analyticsLocation: S,
            openInvoiceId: E,
            metadata: g,
            backButtonEligible: L,
            disablePurchase: k,
            onPaymentSourceAdd: w,
            handleStepChange: D,
            postPurchaseStep: G = A.pn.CONFIRM,
            resolveTenantReviewButtonProps: B,
        } = e,
        {
            activeSubscription: W,
            selectedSkuId: K,
            invoicePreview: J,
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
            setAppliedUserDiscounts: ep,
            setUpdatedSubscription: em,
            isExpressCheckoutEnabledForFooter: eh,
            setExpressCheckoutStatus: eC,
            order: ef,
            isOrderLocked: eS,
            isOrderAwaitingSettlement: eE,
            setIsOrderSigning: eI,
            applyWalletBalance: eg,
            handleBillingErrorForPurchaseTokenAuth: ey,
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
            isOrderLocked: e.get("isOrderLocked"),
            isOrderAwaitingSettlement: e.get("isOrderAwaitingSettlement"),
            setIsOrderSigning: e.setIsOrderSigning,
            applyWalletBalance: e.applyWalletBalance,
            handleBillingErrorForPurchaseTokenAuth: e.handleBillingErrorForPurchaseTokenAuth,
        })),
        eA = (0, F.Q9)(),
        { paymentSources: eP } = (0, U.j)(),
        ev = (0, V.A)(),
        ex = (0, Y.gU)(),
        {
            isGift: e_,
            isRecurringGift: eT,
            selectedGiftStyle: eN,
            customGiftMessage: eb,
            emojiConfetti: ej,
            soundEffect: eR,
            giftRecipient: eO,
            selectedGiftingPromotionRewards: eM,
        } = (0, h.Pv)(),
        eL = (0, _.Mq)(ev),
        ek = (0, R.lo)(eO),
        ew = {};
    (eT && null != ev && (0, x.dI)(ev.id) && (ew.is_recurring = !0),
        (ew.gift_style = eN),
        (ew.reward_sku_ids = eL ? eM : []),
        ek === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eO, "Gift recipient must be set at purchase review step for these gift options."),
            (ew.recipient_id = eO.id),
            (ew.custom_message = eb),
            (ew.emoji_id = ej?.id),
            (ew.emoji_name = ej?.id == null ? ej?.surrogates : void 0),
            (ew.sound_id = eR?.soundId)));
    let eD = ev?.id,
        { analyticsLocations: eU } = (0, u.Ay)(),
        eG = (0, v.W)(eP, er),
        { giftCardBalance: eF, giftCardCurrency: eB } = (0, d.h)(),
        { balance: eH } = (0, N.W0)(),
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
    eo === I.VVm.ONE_TIME &&
        (a()(null != K, "SKU must be selected for one-time purchases"),
        (e$ = ex[K] ?? null),
        a()(null != e$, "SKU must exist and be fetched."));
    let eQ = i.useCallback(() => {
            (el(P.h.PURCHASING),
                en(!0),
                eV(!0),
                (0, s.ET)(),
                ea(null),
                b.default.track(I.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: J?.subtotal,
                    tax: J?.tax,
                    expected_amount: J?.total,
                    expected_currency: J?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eF,
                    gift_card_currency: eB,
                    virtual_currency_balance: eH,
                }));
        }, [el, en, ea, n, r, J, eF, eB, eH]),
        eJ = i.useCallback(
            (e) => {
                (el(P.h.FAIL),
                    ea(e),
                    b.default.track(I.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eG?.id,
                        payment_source_type: eG?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eF,
                        gift_card_currency: eB,
                        virtual_currency_balance: eH,
                    }));
            },
            [el, ea, n, r, eG, eF, eB, eH],
        ),
        { signOrder: eX, reportError: e0 } = (0, m.f)({
            order: ef,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eJ(e), ey(e));
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
                (em(l),
                    null != t && ed(t),
                    null != n && ep(n),
                    D(G, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [D, G, em, ed, ep],
        );
    async function e4() {
        (eQ(), eI(!0));
        try {
            await e5();
        } finally {
            (eI(!1), e1());
        }
    }
    async function e7(e) {
        (X(eA, e), ee(eA, e, () => eZ.current));
        let t = await q(eA, (t) => Q(t, e));
        return t.status !== $.Re.SIGNED ? (eJ(new o.Ay(H.intl.string(H.t.khEaRI))), null) : t;
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
                let e = await (0, p.Vw)(n.id);
                if (!eZ.current) return;
                if (0 === e.length) throw new p.j2();
                (el(P.h.COMPLETED), e3(null, e));
            } catch (e) {
                e0(e, { orderId: n.id, loadId: ei.loadId });
            }
    }
    async function e6(e) {
        if (null != ef) {
            if (eq.current) return;
            eq.current = !0;
            try {
                if ((await z(eA), !eZ.current)) return;
                await e4();
            } finally {
                eq.current = !1;
            }
            return;
        }
        let t = e ?? eG;
        await y({
            onPurchaseAttempt: eQ,
            onPurchaseError: eJ,
            onPurchaseComplete: e2,
            onPurchaseFinalize: e1,
            hasRedirectURL: eY,
            isGift: e_,
            analyticsLocation: S,
            analyticsLocations: eU,
            subscriptionPlan: ev,
            planGroup: f,
            trialId: C,
            priceOptions: es,
            paymentSource: t,
            openInvoiceId: E,
            premiumSubscription: W ?? null,
            onNext: e3,
            metadata: g,
            sku: e$,
            purchaseType: eo,
            referralCode: eu,
            loadId: ei.loadId,
            giftInfoOptions: ew,
            invoicePreview: J,
            quantity: ec,
            applyWalletBalance: eg,
        });
    }
    let e8 = null != E || (eo === I.VVm.ONE_TIME && !e_);
    i.useLayoutEffect(() => {
        eh && null != C && eC(Z.i.UNAVAILABLE);
    }, [eh, C, eC]);
    let e9 =
        eh && null == C
            ? (0, l.jsx)(M.E, { type: "purchase_if_possible", makePurchase: e6, isSubmitting: eW, setIsSubmitting: eV })
            : null;
    return eE
        ? null
        : (0, l.jsx)(et, {
              stripeExpressCheckoutComponent: e9,
              resolveTenantReviewButtonProps: B,
              showBackButton: L && !e8,
              onBackClick: t,
              disablePurchase: k || eS,
              isSubmitting: eW,
              makePurchase: e6,
              needsPaymentSource: null == eG && !ez,
              onPaymentSourceAdd: w,
          });
}
