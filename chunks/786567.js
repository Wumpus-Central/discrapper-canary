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
    p = n(158317),
    m = n(423686),
    h = n(951305),
    C = n(158032),
    f = n(830382),
    S = n(243217),
    E = n(158045),
    I = n(652215),
    A = n(202541);
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
                e = await (0, f.XU)(A.tv, d.skuId, {
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
            } else if (null != y && null != P && P.status === I.Dmq.PAST_DUE && null != g) {
                let n = h.currency ?? R.currency;
                e = I.AD1.has(y.type)
                    ? await (0, c.LD)(P, g, y, n, b)
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
var g = n(166532),
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
    F = n(504560),
    B = n(583741),
    H = n(660183);
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
var Y = n(558620),
    V = n(427675),
    K = n(169797);
function Z(e, t) {
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
async function q(e) {
    await Z(e, (e) => !e.get("isOrderLocked") || null);
}
var z = n(26279);
function $(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === z.Re.SIGNING_IN_PROGRESS ? null : n;
}
let Q = [1e3, 2e3, 4e3, 8e3, 1e4];
async function J(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, Q[Math.min(l, Q.length - 1)])), !n() || null != $(e.getState(), t)))
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
function X(e) {
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
                A = (null != h || r) ?? !1,
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
                g = i.useMemo(
                    () => y.resolveReviewButtonProps({ loading: I, disabled: A, isApplicationDevShelfLoading: E }),
                    [I, A, E, y],
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
    return (0, l.jsx)(K.lo, { onBackClick: r ? d : void 0, primaryButtonProps: p, stripeExpressCheckoutComponent: t });
}
function ee(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: C,
            planGroup: f = [],
            analyticsLocation: S,
            openInvoiceId: E,
            metadata: A,
            backButtonEligible: L,
            disablePurchase: k,
            onPaymentSourceAdd: w,
            handleStepChange: D,
            postPurchaseStep: G = g.pn.CONFIRM,
            resolveTenantReviewButtonProps: B,
        } = e,
        {
            activeSubscription: W,
            selectedSkuId: K,
            invoicePreview: Q,
            setHasAcceptedTerms: ee,
            setPurchaseState: et,
            contextMetadata: en,
            paymentSourceId: el,
            setPurchaseError: ei,
            priceOptions: er,
            purchaseType: ea,
            referralCode: es,
            quantity: eo,
            setEntitlementsGranted: eu,
            setAppliedUserDiscounts: ec,
            setUpdatedSubscription: ed,
            shouldUseStripeExpressCheckout: ep,
            order: em,
            isOrderLocked: eh,
            setIsOrderSigning: eC,
            applyWalletBalance: ef,
            handleBillingErrorForPurchaseTokenAuth: eS,
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
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
            order: e.order,
            isOrderLocked: e.get("isOrderLocked"),
            setIsOrderSigning: e.setIsOrderSigning,
            applyWalletBalance: e.applyWalletBalance,
            handleBillingErrorForPurchaseTokenAuth: e.handleBillingErrorForPurchaseTokenAuth,
        })),
        eE = (0, F.Q9)(),
        { paymentSources: eI } = (0, U.j)(),
        eA = (0, Y.A)(),
        ey = (0, V.gU)(),
        {
            isGift: eg,
            isRecurringGift: eP,
            selectedGiftStyle: ev,
            customGiftMessage: ex,
            emojiConfetti: e_,
            soundEffect: eT,
            giftRecipient: eN,
            selectedGiftingPromotionRewards: eb,
        } = (0, h.Pv)(),
        ej = (0, _.Mq)(eA),
        eR = (0, R.lo)(eN),
        eO = {};
    (eP && null != eA && (0, x.dI)(eA.id) && (eO.is_recurring = !0),
        (eO.gift_style = ev),
        (eO.reward_sku_ids = ej ? eb : []),
        eR === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eN, "Gift recipient must be set at purchase review step for these gift options."),
            (eO.recipient_id = eN.id),
            (eO.custom_message = ex),
            (eO.emoji_id = e_?.id),
            (eO.emoji_name = e_?.id == null ? e_?.surrogates : void 0),
            (eO.sound_id = eT?.soundId)));
    let eM = eA?.id,
        { analyticsLocations: eL } = (0, u.Ay)(),
        ek = (0, v.W)(eI, el),
        { giftCardBalance: ew, giftCardCurrency: eD } = (0, d.h)(),
        { balance: eU } = (0, N.W0)(),
        [eG, eF] = i.useState(!1),
        [eB, eH] = i.useState(!1),
        eW = i.useRef(!0),
        eY = i.useRef(!1);
    i.useEffect(
        () => () => {
            eW.current = !1;
        },
        [],
    );
    let { hasEntitlements: eV } = (0, T.X)(eM, eg),
        eK = null;
    ea === I.VVm.ONE_TIME &&
        (a()(null != K, "SKU must be selected for one-time purchases"),
        (eK = ey[K] ?? null),
        a()(null != eK, "SKU must exist and be fetched."));
    let eZ = i.useCallback(() => {
            (et(P.h.PURCHASING),
                ee(!0),
                eF(!0),
                (0, s.ET)(),
                ei(null),
                b.default.track(I.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: Q?.subtotal,
                    tax: Q?.tax,
                    expected_amount: Q?.total,
                    expected_currency: Q?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: ew,
                    gift_card_currency: eD,
                    virtual_currency_balance: eU,
                }));
        }, [et, ee, ei, n, r, Q, ew, eD, eU]),
        eq = i.useCallback(
            (e) => {
                (et(P.h.FAIL),
                    ei(e),
                    b.default.track(I.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: ek?.id,
                        payment_source_type: ek?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: ew,
                        gift_card_currency: eD,
                        virtual_currency_balance: eU,
                    }));
            },
            [et, ei, n, r, ek, ew, eD, eU],
        ),
        { signOrder: ez, reportError: e$ } = (0, m.f)({
            order: em,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eq(e), eS(e));
            },
        }),
        eQ = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), et(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eH(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (et(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [et],
        ),
        eJ = i.useCallback(() => {
            eB || eF(!1);
        }, [eB]),
        eX = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (ed(l),
                    null != t && eu(t),
                    null != n && ec(n),
                    D(G, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [D, G, ed, eu, ec],
        );
    async function e0() {
        (eZ(), eC(!0));
        try {
            await e1();
        } finally {
            (eC(!1), eJ());
        }
    }
    async function e2(e) {
        J(eE, e, () => eW.current);
        let t = await Z(eE, (t) => $(t, e));
        return t.status !== z.Re.SIGNED ? (eq(new o.Ay(H.intl.string(H.t.khEaRI))), null) : t;
    }
    async function e1() {
        let e = await (0, j.ob)(
                (function () {
                    let { order: e } = eE.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, v.W)(eI, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await ez({ loadId: en.loadId, purchaseToken: (0, O.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await e2(t.order);
        if (null != n)
            try {
                let e = await (0, p.Vw)(n.id);
                if (!eW.current) return;
                if (0 === e.length) throw new p.j2();
                (et(P.h.COMPLETED), eX(null, e));
            } catch (e) {
                e$(e, { orderId: n.id, loadId: en.loadId });
            }
    }
    async function e3(e) {
        if (null != em) {
            if (eY.current) return;
            eY.current = !0;
            try {
                if ((await q(eE), !eW.current)) return;
                await e0();
            } finally {
                eY.current = !1;
            }
            return;
        }
        let t = e ?? ek;
        await y({
            onPurchaseAttempt: eZ,
            onPurchaseError: eq,
            onPurchaseComplete: eQ,
            onPurchaseFinalize: eJ,
            hasRedirectURL: eB,
            isGift: eg,
            analyticsLocation: S,
            analyticsLocations: eL,
            subscriptionPlan: eA,
            planGroup: f,
            trialId: C,
            priceOptions: er,
            paymentSource: t,
            openInvoiceId: E,
            premiumSubscription: W ?? null,
            onNext: eX,
            metadata: A,
            sku: eK,
            purchaseType: ea,
            referralCode: es,
            loadId: en.loadId,
            giftInfoOptions: eO,
            invoicePreview: Q,
            quantity: eo,
            applyWalletBalance: ef,
        });
    }
    let e4 = null != E || (ea === I.VVm.ONE_TIME && !eg),
        e7 = ep ? (0, l.jsx)(M.E, { makePurchase: e3, isSubmitting: eG, setIsSubmitting: eF }) : null;
    return (0, l.jsx)(X, {
        stripeExpressCheckoutComponent: e7,
        resolveTenantReviewButtonProps: B,
        showBackButton: L && !e4,
        onBackClick: t,
        disablePurchase: k || eh,
        isSubmitting: eG,
        makePurchase: e3,
        needsPaymentSource: null == ek && !eV,
        onPaymentSourceAdd: w,
    });
}
