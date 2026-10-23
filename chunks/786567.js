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
    m = n(158317),
    p = n(497782),
    h = n(951305),
    C = n(158032),
    f = n(830382),
    E = n(243217),
    S = n(927578),
    g = n(652215),
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
        priceOptions: h,
        paymentSource: A,
        openInvoiceId: y,
        premiumSubscription: x,
        onNext: P,
        metadata: v,
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
        if (T === g.VVm.ONE_TIME)
            (a()(null != _, "SKU must exist and be fetched."),
                a()(null != R, "invoicePreview must exist."),
                (e = await (0, f.XU)(_.applicationId, _.id, {
                    expectedAmount: R.total,
                    expectedCurrency: R.currency,
                    isGift: s,
                    paymentSource: A,
                    loadId: b,
                    giftInfoOptions: j,
                    quantity: O,
                    applyWalletBalance: M,
                })));
        else {
            (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
            let t = { amount: R.total, currency: R.currency },
                n = (0, S.l6)(h, R.checkoutContext?.available_plans),
                l = (0, S.$Q)((0, S.y8)(d.id, !1, !1, n));
            if (null != x) {
                let e = h.currency ?? R.currency,
                    t = (0, S.Pg)(x, d.id, 1, new Set(m));
                ((t = (0, S.qn)(t)), (l = (0, S.UC)(t, e.toLowerCase(), h.paymentSourceId)));
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
                    quantity: O,
                    applyWalletBalance: M,
                });
            } else if (null != A && null != x && x.status === g.Dmq.PAST_DUE && null != y) {
                let n = h.currency ?? R.currency;
                e = g.AD1.has(A.type)
                    ? await (0, c.LD)(x, y, A, n, b)
                    : await (0, c.nV)(x, { paymentSource: A, currency: n }, t, l, u, o, b);
            } else if (null != x) {
                let n = (0, S.Pg)(x, d.id, 1, new Set(m)),
                    i = { paymentSource: A, currency: h.currency ?? R.currency };
                (x.status === g.Dmq.PAUSED && (i.status = g.Dmq.ACTIVE),
                    x.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(x, i, t, l, u, o, b)));
            } else
                e = await (0, C.B1)({
                    planId: d.id,
                    currency: h.currency ?? R.currency,
                    paymentSource: A,
                    trialId: p,
                    metadata: v,
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
            P(n, i, L));
    } catch (e) {
        n(e);
    } finally {
        i();
    }
}
var y = n(166532),
    x = n(566980),
    P = n(216641),
    v = n(371710),
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
                this.init.purchaseType === g.VVm.SUBSCRIPTION
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
                    onClick: g.tEg,
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
        let i = await (0, m.r$)(t.id);
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
        m = (function (e) {
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
                    purchaseType: m,
                    checkoutPaymentSources: p,
                    invoiceError: h,
                } = (0, F.t4)((e) => ({
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    paymentSourceId: e.paymentSourceId,
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    purchaseType: e.purchaseType,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                C = null != c && p.some((e) => e.id === c && null != e.relocationCountry),
                { application: f } = (0, G.V)(),
                E = (0, k.bG)([w.A], () => w.A.getFetchState()),
                S = (0, D.W)(f, L.U.MAIN) && E === w.$.LOADING,
                g = l ?? !1,
                I = (null != h || r) ?? !1,
                A = i.useMemo(
                    () =>
                        new W(
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
                y = i.useMemo(
                    () => A.resolveReviewButtonProps({ loading: g, disabled: I, isApplicationDevShelfLoading: S }),
                    [g, I, S, A],
                );
            return (
                i.useEffect(() => {
                    d(y.text);
                }, [y.text, d]),
                y
            );
        })({
            onReviewButtonClick: () => a(),
            isSubmitting: u,
            disablePurchase: o,
            onPaymentSourceAdd: s,
            resolveTenantReviewButtonProps: n,
            needsPaymentSource: c,
        });
    return (0, l.jsx)(K.lo, { onBackClick: r ? d : void 0, primaryButtonProps: m, stripeExpressCheckoutComponent: t });
}
function en(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: C,
            planGroup: f = [],
            analyticsLocation: E,
            openInvoiceId: S,
            metadata: I,
            backButtonEligible: L,
            disablePurchase: k,
            onPaymentSourceAdd: w,
            handleStepChange: D,
            postPurchaseStep: G = y.pn.CONFIRM,
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
            setAppliedUserDiscounts: em,
            setUpdatedSubscription: ep,
            isExpressCheckoutEnabledForFooter: eh,
            setExpressCheckoutStatus: eC,
            order: ef,
            isOrderLocked: eE,
            isOrderAwaitingSettlement: eS,
            setIsOrderSigning: eg,
            applyWalletBalance: eI,
            handleBillingErrorForPurchaseTokenAuth: eA,
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
        ey = (0, F.Q9)(),
        { paymentSources: ex } = (0, U.j)(),
        eP = (0, V.A)(),
        ev = (0, Y.gU)(),
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
        eL = (0, _.Mq)(eP),
        ek = (0, R.lo)(eO),
        ew = {};
    (eT && null != eP && (0, v.dI)(eP.id) && (ew.is_recurring = !0),
        (ew.gift_style = eN),
        (ew.reward_sku_ids = eL ? eM : []),
        ek === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eO, "Gift recipient must be set at purchase review step for these gift options."),
            (ew.recipient_id = eO.id),
            (ew.custom_message = eb),
            (ew.emoji_id = ej?.id),
            (ew.emoji_name = ej?.id == null ? ej?.surrogates : void 0),
            (ew.sound_id = eR?.soundId)));
    let eD = eP?.id,
        { analyticsLocations: eU } = (0, u.Ay)(),
        eG = (0, P.W)(ex, er),
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
    eo === g.VVm.ONE_TIME &&
        (a()(null != K, "SKU must be selected for one-time purchases"),
        (e$ = ev[K] ?? null),
        a()(null != e$, "SKU must exist and be fetched."));
    let eQ = i.useCallback(() => {
            (el(x.h.PURCHASING),
                en(!0),
                eV(!0),
                (0, s.ET)(),
                ea(null),
                b.default.track(g.HAw.PAYMENT_FLOW_COMPLETED, {
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
                (el(x.h.FAIL),
                    ea(e),
                    b.default.track(g.HAw.PAYMENT_FLOW_FAILED, {
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
        { signOrder: eX, reportError: e0 } = (0, p.f)({
            order: ef,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eJ(e), eA(e));
            },
        }),
        e2 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), el(x.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eK(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (el(x.h.COMPLETED), { shouldReturnEarly: !1 }),
            [el],
        ),
        e1 = i.useCallback(() => {
            eY || eV(!1);
        }, [eY]),
        e3 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (ep(l),
                    null != t && ed(t),
                    null != n && em(n),
                    D(G, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [D, G, ep, ed, em],
        );
    async function e4() {
        (eQ(), eg(!0));
        try {
            await e5();
        } finally {
            (eg(!1), e1());
        }
    }
    async function e7(e) {
        (X(ey, e), ee(ey, e, () => eZ.current));
        let t = await q(ey, (t) => Q(t, e));
        return t.status !== $.Re.SIGNED ? (eJ(new o.Ay(H.intl.string(H.t.khEaRI))), null) : t;
    }
    async function e5() {
        let e = await (0, j.ob)(
                (function () {
                    let { order: e } = ey.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, P.W)(ex, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await eX({ loadId: ei.loadId, purchaseToken: (0, O.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await e7(t.order);
        if (null != n)
            try {
                let e = await (0, m.Vw)(n.id);
                if (!eZ.current) return;
                if (0 === e.length) throw new m.j2();
                (el(x.h.COMPLETED), e3(null, e));
            } catch (e) {
                e0(e, { orderId: n.id, loadId: ei.loadId });
            }
    }
    async function e6(e) {
        if (null != ef) {
            if (eq.current) return;
            eq.current = !0;
            try {
                if ((await z(ey), !eZ.current)) return;
                await e4();
            } finally {
                eq.current = !1;
            }
            return;
        }
        let t = e ?? eG;
        await A({
            onPurchaseAttempt: eQ,
            onPurchaseError: eJ,
            onPurchaseComplete: e2,
            onPurchaseFinalize: e1,
            hasRedirectURL: eY,
            isGift: e_,
            analyticsLocation: E,
            analyticsLocations: eU,
            subscriptionPlan: eP,
            planGroup: f,
            trialId: C,
            priceOptions: es,
            paymentSource: t,
            openInvoiceId: S,
            premiumSubscription: W ?? null,
            onNext: e3,
            metadata: I,
            sku: e$,
            purchaseType: eo,
            referralCode: eu,
            loadId: ei.loadId,
            giftInfoOptions: ew,
            invoicePreview: J,
            quantity: ec,
            applyWalletBalance: eI ?? J?.applyWalletBalance,
        });
    }
    let e8 = null != S || (eo === g.VVm.ONE_TIME && !e_);
    i.useLayoutEffect(() => {
        eh && null != C && eC(Z.i.UNAVAILABLE);
    }, [eh, C, eC]);
    let e9 =
        eh && null == C
            ? (0, l.jsx)(M.E, { type: "purchase_if_possible", makePurchase: e6, isSubmitting: eW, setIsSubmitting: eV })
            : null;
    return eS
        ? null
        : (0, l.jsx)(et, {
              stripeExpressCheckoutComponent: e9,
              resolveTenantReviewButtonProps: B,
              showBackButton: L && !e8,
              onBackClick: t,
              disablePurchase: k || eE,
              isSubmitting: eW,
              makePurchase: e6,
              needsPaymentSource: null == eG && !ez,
              onPaymentSourceAdd: w,
          });
}
