n.d(t, { U: () => ee });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(73153),
    o = n(391048),
    u = n(136857),
    c = n(688810),
    d = n(277984),
    p = n(11939),
    m = n(158317),
    h = n(423686),
    C = n(951305),
    f = n(158032),
    S = n(830382),
    E = n(243217),
    y = n(158045),
    I = n(652215),
    A = n(202541);
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
        if (T === I.VVm.ONE_TIME)
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
                e = await (0, S.XU)(A.tv, c.skuId, {
                    expectedAmount: t,
                    expectedCurrency: n,
                    paymentSource: C,
                    subscriptionPlanId: c.id,
                    isGift: !0,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                });
            } else if (null != C && null != P && P.status === I.Dmq.PAST_DUE && null != g) {
                let n = h.currency ?? R.currency;
                e = I.AD1.has(C.type)
                    ? await (0, d.LD)(P, g, C, n, b)
                    : await (0, d.nV)(P, { paymentSource: C, currency: n }, t, l, u, o, b);
            } else if (null != P) {
                let n = (0, y.Pg)(P, c.id, 1, new Set(p)),
                    i = { paymentSource: C, currency: h.currency ?? R.currency };
                (P.status === I.Dmq.PAUSED && (i.status = I.Dmq.ACTIVE),
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
    F = n(642639),
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
async function J(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, Q[Math.min(l, Q.length - 1)])), !n() || null != $(e.getState(), t)))
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
                y = l ?? !1,
                I = (null != h || r) ?? !1,
                A = i.useMemo(
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
                    () => A.resolveReviewButtonProps({ loading: y, disabled: I, isApplicationDevShelfLoading: E }),
                    [y, I, E, A],
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
            trialId: f,
            planGroup: S = [],
            analyticsLocation: E,
            openInvoiceId: y,
            metadata: A,
            backButtonEligible: L,
            disablePurchase: k,
            onPaymentSourceAdd: w,
            handleStepChange: D,
            postPurchaseStep: G = P.pn.CONFIRM,
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
        { paymentSources: ey } = (0, U.j)(),
        eI = (0, V.A)(),
        eA = (0, Y.gU)(),
        {
            isGift: eg,
            selectedGiftStyle: eP,
            customGiftMessage: ev,
            emojiConfetti: ex,
            soundEffect: e_,
            giftRecipient: eT,
            selectedGiftingPromotionRewards: eN,
        } = (0, C.Pv)(),
        eb = (0, _.Mq)(eI),
        ej = (0, R.lo)(eT),
        eR = {};
    ((eR.gift_style = eP),
        (eR.reward_sku_ids = eb ? eN : []),
        ej === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eT, "Gift recipient must be set at purchase review step for these gift options."),
            (eR.recipient_id = eT.id),
            (eR.custom_message = ev),
            (eR.emoji_id = ex?.id),
            (eR.emoji_name = ex?.id == null ? ex?.surrogates : void 0),
            (eR.sound_id = e_?.soundId)));
    let eO = eI?.id,
        { analyticsLocations: eM } = (0, c.Ay)(),
        eL = (0, x.W)(ey, el),
        { giftCardBalance: ek, giftCardCurrency: ew } = (0, p.h)(),
        { balance: eD } = (0, N.W0)(),
        [eU, eG] = i.useState(!1),
        [eF, eB] = i.useState(!1),
        eH = i.useRef(!0),
        eW = i.useRef(!1);
    i.useEffect(
        () => () => {
            eH.current = !1;
        },
        [],
    );
    let { hasEntitlements: eV } = (0, T.X)(eO, eg),
        eY = null;
    ea === I.VVm.ONE_TIME &&
        (a()(null != K, "SKU must be selected for one-time purchases"),
        (eY = eA[K] ?? null),
        a()(null != eY, "SKU must exist and be fetched."));
    let eK = i.useCallback(() => {
            (et(v.h.PURCHASING),
                ee(!0),
                eG(!0),
                s.h.wait(o.ET),
                ei(null),
                b.default.track(I.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: Q?.subtotal,
                    tax: Q?.tax,
                    expected_amount: Q?.total,
                    expected_currency: Q?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: ek,
                    gift_card_currency: ew,
                    virtual_currency_balance: eD,
                }));
        }, [et, ee, ei, n, r, Q, ek, ew, eD]),
        eZ = i.useCallback(
            (e) => {
                (et(v.h.FAIL),
                    ei(e),
                    b.default.track(I.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eL?.id,
                        payment_source_type: eL?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: ek,
                        gift_card_currency: ew,
                        virtual_currency_balance: eD,
                    }));
            },
            [et, ei, n, r, eL, ek, ew, eD],
        ),
        { signOrder: eq, reportError: ez } = (0, h.f)({
            order: em,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eZ(e), eS(e));
            },
        }),
        e$ = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, d.fE)(), et(v.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eB(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (et(v.h.COMPLETED), { shouldReturnEarly: !1 }),
            [et],
        ),
        eQ = i.useCallback(() => {
            eF || eG(!1);
        }, [eF]),
        eJ = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (ed(l),
                    null != t && eu(t),
                    null != n && ec(n),
                    D(G, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [D, G, ed, eu, ec],
        );
    async function eX() {
        (eK(), eC(!0));
        try {
            await e2();
        } finally {
            (eC(!1), eQ());
        }
    }
    async function e0(e) {
        J(eE, e, () => eH.current);
        let t = await Z(eE, (t) => $(t, e));
        return t.status !== z.Re.SIGNED ? (eZ(new u.Ay(H.intl.string(H.t.khEaRI))), null) : t;
    }
    async function e2() {
        let e = await (0, j.ob)(
                (function () {
                    let { order: e } = eE.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, x.W)(ey, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await eq({ loadId: en.loadId, purchaseToken: (0, O.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await e0(t.order);
        if (null != n)
            try {
                let e = await (0, m.Vw)(n.id);
                if (!eH.current) return;
                if (0 === e.length) throw new m.j2();
                (et(v.h.COMPLETED), eJ(null, e));
            } catch (e) {
                ez(e, { orderId: n.id, loadId: en.loadId });
            }
    }
    async function e1(e) {
        if (null != em) {
            if (eW.current) return;
            eW.current = !0;
            try {
                if ((await q(eE), !eH.current)) return;
                await eX();
            } finally {
                eW.current = !1;
            }
            return;
        }
        let t = e ?? eL;
        await g({
            onPurchaseAttempt: eK,
            onPurchaseError: eZ,
            onPurchaseComplete: e$,
            onPurchaseFinalize: eQ,
            hasRedirectURL: eF,
            isGift: eg,
            analyticsLocation: E,
            analyticsLocations: eM,
            subscriptionPlan: eI,
            planGroup: S,
            trialId: f,
            priceOptions: er,
            paymentSource: t,
            openInvoiceId: y,
            premiumSubscription: W ?? null,
            onNext: eJ,
            metadata: A,
            sku: eY,
            purchaseType: ea,
            referralCode: es,
            loadId: en.loadId,
            giftInfoOptions: eR,
            invoicePreview: Q,
            quantity: eo,
            applyWalletBalance: ef,
        });
    }
    let e3 = null != y || (ea === I.VVm.ONE_TIME && !eg),
        e4 = ep ? (0, l.jsx)(M.E, { makePurchase: e1, isSubmitting: eU, setIsSubmitting: eG }) : null;
    return (0, l.jsx)(X, {
        stripeExpressCheckoutComponent: e4,
        resolveTenantReviewButtonProps: B,
        showBackButton: L && !e3,
        onBackClick: t,
        disablePurchase: k || eh,
        isSubmitting: eU,
        makePurchase: e1,
        needsPaymentSource: null == eL && !eV,
        onPaymentSourceAdd: w,
    });
}
