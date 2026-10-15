n.d(t, { U: () => et });
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
    B = n(583741),
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
function J(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
async function X(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, Q[Math.min(l, Q.length - 1)])), !n() || null != $(e.getState(), t)))
            return;
        let i = await (0, p.r$)(t.id);
        null != i && n() && J(e, i);
    }
}
function ee(e) {
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
function et(e) {
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
            invoicePreview: Q,
            setHasAcceptedTerms: et,
            setPurchaseState: en,
            contextMetadata: el,
            paymentSourceId: ei,
            setPurchaseError: er,
            priceOptions: ea,
            purchaseType: es,
            referralCode: eo,
            quantity: eu,
            setEntitlementsGranted: ec,
            setAppliedUserDiscounts: ed,
            setUpdatedSubscription: ep,
            isExpressCheckoutEnabledForFooter: em,
            order: eh,
            isOrderLocked: eC,
            isOrderAwaitingSettlement: ef,
            setIsOrderSigning: eS,
            applyWalletBalance: eE,
            handleBillingErrorForPurchaseTokenAuth: eI,
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
            order: e.order,
            isOrderLocked: e.get("isOrderLocked"),
            isOrderAwaitingSettlement: e.get("isOrderAwaitingSettlement"),
            setIsOrderSigning: e.setIsOrderSigning,
            applyWalletBalance: e.applyWalletBalance,
            handleBillingErrorForPurchaseTokenAuth: e.handleBillingErrorForPurchaseTokenAuth,
        })),
        eg = (0, F.Q9)(),
        { paymentSources: ey } = (0, U.j)(),
        eA = (0, V.A)(),
        eP = (0, Y.gU)(),
        {
            isGift: ev,
            isRecurringGift: ex,
            selectedGiftStyle: e_,
            customGiftMessage: eT,
            emojiConfetti: eN,
            soundEffect: eb,
            giftRecipient: ej,
            selectedGiftingPromotionRewards: eR,
        } = (0, h.Pv)(),
        eO = (0, _.Mq)(eA),
        eM = (0, R.lo)(ej),
        eL = {};
    (ex && null != eA && (0, x.dI)(eA.id) && (eL.is_recurring = !0),
        (eL.gift_style = e_),
        (eL.reward_sku_ids = eO ? eR : []),
        eM === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != ej, "Gift recipient must be set at purchase review step for these gift options."),
            (eL.recipient_id = ej.id),
            (eL.custom_message = eT),
            (eL.emoji_id = eN?.id),
            (eL.emoji_name = eN?.id == null ? eN?.surrogates : void 0),
            (eL.sound_id = eb?.soundId)));
    let ek = eA?.id,
        { analyticsLocations: ew } = (0, u.Ay)(),
        eD = (0, v.W)(ey, ei),
        { giftCardBalance: eU, giftCardCurrency: eG } = (0, d.h)(),
        { balance: eF } = (0, N.W0)(),
        [eB, eH] = i.useState(!1),
        [eW, eV] = i.useState(!1),
        eY = i.useRef(!0),
        eK = i.useRef(!1);
    i.useEffect(
        () => () => {
            eY.current = !1;
        },
        [],
    );
    let { hasEntitlements: eZ } = (0, T.X)(ek, ev),
        eq = null;
    es === I.VVm.ONE_TIME &&
        (a()(null != K, "SKU must be selected for one-time purchases"),
        (eq = eP[K] ?? null),
        a()(null != eq, "SKU must exist and be fetched."));
    let ez = i.useCallback(() => {
            (en(P.h.PURCHASING),
                et(!0),
                eH(!0),
                (0, s.ET)(),
                er(null),
                b.default.track(I.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: Q?.subtotal,
                    tax: Q?.tax,
                    expected_amount: Q?.total,
                    expected_currency: Q?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eU,
                    gift_card_currency: eG,
                    virtual_currency_balance: eF,
                }));
        }, [en, et, er, n, r, Q, eU, eG, eF]),
        e$ = i.useCallback(
            (e) => {
                (en(P.h.FAIL),
                    er(e),
                    b.default.track(I.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eD?.id,
                        payment_source_type: eD?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eU,
                        gift_card_currency: eG,
                        virtual_currency_balance: eF,
                    }));
            },
            [en, er, n, r, eD, eU, eG, eF],
        ),
        { signOrder: eQ, reportError: eJ } = (0, m.f)({
            order: eh,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (e$(e), eI(e));
            },
        }),
        eX = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), en(P.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eV(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (en(P.h.COMPLETED), { shouldReturnEarly: !1 }),
            [en],
        ),
        e0 = i.useCallback(() => {
            eW || eH(!1);
        }, [eW]),
        e2 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (ep(l),
                    null != t && ec(t),
                    null != n && ed(n),
                    D(G, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [D, G, ep, ec, ed],
        );
    async function e1() {
        (ez(), eS(!0));
        try {
            await e4();
        } finally {
            (eS(!1), e0());
        }
    }
    async function e3(e) {
        (J(eg, e), X(eg, e, () => eY.current));
        let t = await Z(eg, (t) => $(t, e));
        return t.status !== z.Re.SIGNED ? (e$(new o.Ay(H.intl.string(H.t.khEaRI))), null) : t;
    }
    async function e4() {
        let e = await (0, j.ob)(
                (function () {
                    let { order: e } = eg.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, v.W)(ey, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await eQ({ loadId: el.loadId, purchaseToken: (0, O.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await e3(t.order);
        if (null != n)
            try {
                let e = await (0, p.Vw)(n.id);
                if (!eY.current) return;
                if (0 === e.length) throw new p.j2();
                (en(P.h.COMPLETED), e2(null, e));
            } catch (e) {
                eJ(e, { orderId: n.id, loadId: el.loadId });
            }
    }
    async function e7(e) {
        if (null != eh) {
            if (eK.current) return;
            eK.current = !0;
            try {
                if ((await q(eg), !eY.current)) return;
                await e1();
            } finally {
                eK.current = !1;
            }
            return;
        }
        let t = e ?? eD;
        await y({
            onPurchaseAttempt: ez,
            onPurchaseError: e$,
            onPurchaseComplete: eX,
            onPurchaseFinalize: e0,
            hasRedirectURL: eW,
            isGift: ev,
            analyticsLocation: S,
            analyticsLocations: ew,
            subscriptionPlan: eA,
            planGroup: f,
            trialId: C,
            priceOptions: ea,
            paymentSource: t,
            openInvoiceId: E,
            premiumSubscription: W ?? null,
            onNext: e2,
            metadata: g,
            sku: eq,
            purchaseType: es,
            referralCode: eo,
            loadId: el.loadId,
            giftInfoOptions: eL,
            invoicePreview: Q,
            quantity: eu,
            applyWalletBalance: eE,
        });
    }
    let e5 = null != E || (es === I.VVm.ONE_TIME && !ev),
        e6 =
            em && null == C
                ? (0, l.jsx)(M.E, {
                      type: "purchase_if_possible",
                      makePurchase: e7,
                      isSubmitting: eB,
                      setIsSubmitting: eH,
                  })
                : null;
    return ef
        ? null
        : (0, l.jsx)(ee, {
              stripeExpressCheckoutComponent: e6,
              resolveTenantReviewButtonProps: B,
              showBackButton: L && !e5,
              onBackClick: t,
              disablePurchase: k || eC,
              isSubmitting: eB,
              makePurchase: e7,
              needsPaymentSource: null == eD && !eZ,
              onPaymentSourceAdd: w,
          });
}
