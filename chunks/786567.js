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
    m = n(158317),
    p = n(497782),
    C = n(951305),
    h = n(158032),
    f = n(830382),
    E = n(243217),
    S = n(24482),
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
        priceOptions: C,
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
                n = (0, S.l6)(C, R.checkoutContext?.available_plans),
                l = (0, S.$Q)((0, S.y8)(d.id, !1, !1, n));
            if (null != x) {
                let e = C.currency ?? R.currency,
                    t = (0, S.Pg)(x, d.id, 1, new Set(m));
                ((t = (0, S.qn)(t)), (l = (0, S.UC)(t, e.toLowerCase(), C.paymentSourceId)));
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
                let n = C.currency ?? R.currency;
                e = g.AD1.has(A.type)
                    ? await (0, c.LD)(x, y, A, n, b)
                    : await (0, c.nV)(x, { paymentSource: A, currency: n }, t, l, u, o, b);
            } else if (null != x) {
                let n = (0, S.Pg)(x, d.id, 1, new Set(m)),
                    i = { paymentSource: A, currency: C.currency ?? R.currency };
                (x.status === g.Dmq.PAUSED && (i.status = g.Dmq.ACTIVE),
                    x.isPausedAllowsResumeButNotUpdates || (i.items = n),
                    (e = await (0, c.nV)(x, i, t, l, u, o, b)));
            } else
                e = await (0, h.B1)({
                    planId: d.id,
                    currency: C.currency ?? R.currency,
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
    F = n(281044),
    B = n(558620),
    H = n(427675),
    W = n(169797),
    V = n(705822);
function Y(e, t) {
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
    await Y(e, (e) => !e.get("isOrderLocked") || null);
}
var Z = n(26279);
function q(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === Z.Re.SIGNING_IN_PROGRESS ? null : n;
}
let z = [1e3, 2e3, 4e3, 8e3, 1e4];
function $(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
async function Q(e, t, n) {
    for (let l = 0; ; l++) {
        if ((await new Promise((e) => setTimeout(e, z[Math.min(l, z.length - 1)])), !n() || null != q(e.getState(), t)))
            return;
        let i = await (0, m.r$)(t.id);
        null != i && n() && $(e, i);
    }
}
var J = n(105292);
function X(e) {
    let {
        renderFooter: t,
        tenantProvidedReviewButtonProps: n,
        makePurchase: l,
        onPaymentSourceAdd: r,
        disablePurchase: a,
        isSubmitting: s,
        needsPaymentSource: o,
    } = e;
    return t(
        (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disablePurchase: r,
                    onPaymentSourceAdd: a,
                    tenantProvidedReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, U.j)(),
                { setCheckoutReviewButtonLabel: u, invoiceError: c } = (0, F.t4)((e) => ({
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                    invoiceError: e.get("primaryInvoicesError"),
                })),
                { application: d } = (0, G.V)(),
                m = (0, k.bG)([w.A], () => w.A.getFetchState()),
                p = (0, D.W)(d, L.U.MAIN) && m === w.$.LOADING,
                C = l ?? !1,
                h = (null != c || r) ?? !1,
                f = (0, F.t4)((e) =>
                    e.getCheckoutReviewButtonProps({
                        tenantProvidedReviewButtonProps: s,
                        isReviewButtonDisabled: h,
                        isReviewButtonLoading: C,
                        needsPaymentSource: n,
                        hasPaymentSources: o,
                        isApplicationDevShelfLoading: p,
                        handlePaymentSourceAdd: a,
                        onReviewButtonClick: t,
                    }),
                );
            return (
                i.useEffect(() => {
                    u(f.text);
                }, [f.text, u]),
                f
            );
        })({
            onReviewButtonClick: () => l(),
            isSubmitting: s,
            disablePurchase: a,
            onPaymentSourceAdd: r,
            tenantProvidedReviewButtonProps: n,
            needsPaymentSource: o,
        }),
    );
}
function ee(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            flowStartTime: r,
            trialId: h,
            planGroup: f = [],
            analyticsLocation: E,
            openInvoiceId: S,
            metadata: I,
            backButtonEligible: L,
            disablePurchase: k,
            onPaymentSourceAdd: w,
            handleStepChange: D,
            postPurchaseStep: G = y.pn.CONFIRM,
            tenantProvidedReviewButtonProps: z,
        } = e,
        {
            activeSubscription: ee,
            selectedSkuId: et,
            invoicePreview: en,
            setHasAcceptedTerms: el,
            setPurchaseState: ei,
            contextMetadata: er,
            paymentSourceId: ea,
            setPurchaseError: es,
            priceOptions: eo,
            purchaseType: eu,
            referralCode: ec,
            quantity: ed,
            setEntitlementsGranted: em,
            setAppliedUserDiscounts: ep,
            setUpdatedSubscription: eC,
            isExpressCheckoutEnabledForFooter: eh,
            setExpressCheckoutStatus: ef,
            order: eE,
            isOrderLocked: eS,
            isOrderAwaitingSettlement: eg,
            setIsOrderSigning: eI,
            applyWalletBalance: eA,
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
        ex = (0, F.Q9)(),
        { paymentSources: eP } = (0, U.j)(),
        ev = (0, B.A)(),
        e_ = (0, H.gU)(),
        {
            isGift: eT,
            isRecurringGift: eN,
            selectedGiftStyle: eb,
            customGiftMessage: ej,
            emojiConfetti: eR,
            soundEffect: eO,
            giftRecipient: eM,
            selectedGiftingPromotionRewards: eL,
        } = (0, C.Pv)(),
        ek = (0, _.Mq)(ev),
        ew = (0, R.lo)(eM),
        eD = {};
    (eN && null != ev && (0, v.dI)(ev.id) && (eD.is_recurring = !0),
        (eD.gift_style = eb),
        (eD.reward_sku_ids = ek ? eL : []),
        ew === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eM, "Gift recipient must be set at purchase review step for these gift options."),
            (eD.recipient_id = eM.id),
            (eD.custom_message = ej),
            (eD.emoji_id = eR?.id),
            (eD.emoji_name = eR?.id == null ? eR?.surrogates : void 0),
            (eD.sound_id = eO?.soundId)));
    let eU = ev?.id,
        { analyticsLocations: eG } = (0, u.Ay)(),
        eF = (0, P.W)(eP, ea),
        { giftCardBalance: eB, giftCardCurrency: eH } = (0, d.h)(),
        { balance: eW } = (0, N.W0)(),
        [eV, eY] = i.useState(!1),
        [eK, eZ] = i.useState(!1),
        eq = i.useRef(!0),
        ez = i.useRef(!1);
    i.useEffect(
        () => () => {
            eq.current = !1;
        },
        [],
    );
    let { hasEntitlements: e$ } = (0, T.X)(eU, eT),
        eQ = null;
    eu === g.VVm.ONE_TIME &&
        (a()(null != et, "SKU must be selected for one-time purchases"),
        (eQ = e_[et] ?? null),
        a()(null != eQ, "SKU must exist and be fetched."));
    let eJ = i.useCallback(() => {
            (ei(x.h.PURCHASING),
                el(!0),
                eY(!0),
                (0, s.ET)(),
                es(null),
                b.default.track(g.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: en?.subtotal,
                    tax: en?.tax,
                    expected_amount: en?.total,
                    expected_currency: en?.currency,
                    duration_ms: Date.now() - r,
                    gift_card_balance: eB,
                    gift_card_currency: eH,
                    virtual_currency_balance: eW,
                }));
        }, [ei, el, es, n, r, en, eB, eH, eW]),
        eX = i.useCallback(
            (e) => {
                (ei(x.h.FAIL),
                    es(e),
                    b.default.track(g.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eF?.id,
                        payment_source_type: eF?.type,
                        duration_ms: Date.now() - r,
                        gift_card_balance: eB,
                        gift_card_currency: eH,
                        virtual_currency_balance: eW,
                    }));
            },
            [ei, es, n, r, eF, eB, eH, eW],
        ),
        { signOrder: e0, reportError: e2 } = (0, p.f)({
            order: eE,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (eX(e), ey(e));
            },
        }),
        e1 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), ei(x.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eZ(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (ei(x.h.COMPLETED), { shouldReturnEarly: !1 }),
            [ei],
        ),
        e4 = i.useCallback(() => {
            eK || eY(!1);
        }, [eK]),
        e3 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (eC(l),
                    null != t && em(t),
                    null != n && ep(n),
                    D(G, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [D, G, eC, em, ep],
        );
    async function e7() {
        (eJ(), eI(!0));
        try {
            await e8();
        } finally {
            (eI(!1), e4());
        }
    }
    async function e5(e) {
        ($(ex, e), Q(ex, e, () => eq.current));
        let t = await Y(ex, (t) => q(t, e));
        return t.status !== Z.Re.SIGNED ? (eX(new o.Ay(J.intl.string(J.t.khEaRI))), null) : t;
    }
    async function e8() {
        let e = await (0, j.ob)(
                (function () {
                    let { order: e } = ex.getState(),
                        t = null != e ? e.billing_facet : null;
                    return (0, P.W)(eP, null != t ? t.payment_source_id : null);
                })(),
            ).catch(() => null),
            t = await e0({ loadId: er.loadId, purchaseToken: (0, O.r)(), gatewayCheckoutContext: e });
        if ("failed" === t.type) return;
        let n = "signed" === t.type ? t.order : await e5(t.order);
        if (null != n)
            try {
                let e = await (0, m.Vw)(n.id);
                if (!eq.current) return;
                if (0 === e.length) throw new m.j2();
                (ei(x.h.COMPLETED), e3(null, e));
            } catch (e) {
                e2(e, { orderId: n.id, loadId: er.loadId });
            }
    }
    async function e6(e) {
        if (null != eE) {
            if (ez.current) return;
            ez.current = !0;
            try {
                if ((await K(ex), !eq.current)) return;
                await e7();
            } finally {
                ez.current = !1;
            }
            return;
        }
        let t = e ?? eF;
        await A({
            onPurchaseAttempt: eJ,
            onPurchaseError: eX,
            onPurchaseComplete: e1,
            onPurchaseFinalize: e4,
            hasRedirectURL: eK,
            isGift: eT,
            analyticsLocation: E,
            analyticsLocations: eG,
            subscriptionPlan: ev,
            planGroup: f,
            trialId: h,
            priceOptions: eo,
            paymentSource: t,
            openInvoiceId: S,
            premiumSubscription: ee ?? null,
            onNext: e3,
            metadata: I,
            sku: eQ,
            purchaseType: eu,
            referralCode: ec,
            loadId: er.loadId,
            giftInfoOptions: eD,
            invoicePreview: en,
            quantity: ed,
            applyWalletBalance: eA ?? en?.applyWalletBalance,
        });
    }
    let e9 = null != S || (eu === g.VVm.ONE_TIME && !eT),
        te = L && !e9;
    i.useLayoutEffect(() => {
        eh && null != h && ef(V.i.UNAVAILABLE);
    }, [eh, h, ef]);
    let tt =
        eh && null == h
            ? (0, l.jsx)(M.E1, {
                  type: "purchase_if_possible",
                  disablePurchase: k,
                  makePurchase: e6,
                  isSubmitting: eV,
                  setIsSubmitting: eY,
              })
            : null;
    return eg
        ? null
        : (0, l.jsx)(X, {
              renderFooter: function (e) {
                  return (0, l.jsx)(W.lo, {
                      onBackClick: te ? t : void 0,
                      primaryButtonProps: e,
                      stripeExpressCheckoutComponent: tt,
                  });
              },
              tenantProvidedReviewButtonProps: z,
              disablePurchase: k || eS,
              isSubmitting: eV,
              makePurchase: e6,
              needsPaymentSource: null == eF && !e$,
              onPaymentSourceAdd: w,
          });
}
