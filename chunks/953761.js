n.d(t, { _: () => Z }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(854354),
    a = n(274971),
    s = n(463376),
    o = n(266060),
    u = n(214891),
    c = n(669510),
    d = n(211159),
    p = n(683071),
    m = n(834730),
    h = n(212739);
n(25827);
var A = n(788868),
    E = n(594387),
    C = n(375708),
    y = n(234419),
    _ = n(361597),
    S = n(815545),
    P = n(17928),
    I = n(546605),
    f = n(531260),
    T = n(364995),
    N = n(31823),
    v = n(426398),
    g = n(473617),
    x = n(937008),
    R = n(800471),
    M = n(216641),
    b = n(67480),
    L = n(45938),
    O = n(428262),
    j = n(881489),
    w = n(344159),
    D = n(299301),
    U = n(222707),
    k = n(559778),
    G = n(376843);
let F = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: i,
            disabled: a,
            hasEntitlements: s,
            eligiblePaymentGateways: o,
            label: u = C.intl.string(C.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: c,
            paymentSourceDropdownClassName: d,
            paymentSourceDropdownPrependOption: p,
            location: m = "PremiumSubscriptionReview",
        } = e,
        h = r.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? C.intl.string(C.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: o,
                shouldUseUnifiedCheckoutUI: c,
                className: d,
                prependOption: p,
            }),
            [s, n, o, c, d, p],
        );
    return (0, l.jsx)(G.N, {
        label: u,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: h,
        location: m,
        hideCurrencySelect: i,
    });
};
var Y = n(340034),
    B = n(755880),
    W = n(134638),
    H = n(888751),
    V = n(906234),
    K = n(327105);
let Z = (e) => {
    let {
            reviewWarningMessage: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: G,
            isTrial: Z,
            planGroup: q,
            isDiscount: z,
            metadata: $,
        } = e,
        X = ((e) => {
            let { selectedPlanId: t, paymentSources: n, trialId: l, metadata: i, isTrial: a = !1 } = e,
                {
                    selectedSkuId: o,
                    priceOptions: u,
                    activeSubscription: c,
                    defaultPlanId: p,
                    startedPaymentFlowWithPaymentSources: m,
                } = (0, d.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                    defaultPlanId: e.defaultPlanId,
                    startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
                })),
                { hasPaymentSources: h } = (0, v.jm)(),
                { isEmbeddedIAP: E } = (0, N.V)(),
                { isPremium: y, isPremiumGroupPurchase: _, isEligibleForDiscount: S } = (0, s.i)(),
                { checkoutPaymentSources: D } = (0, T.t)(),
                { isGift: U, giftRecipient: k, selectedGiftStyle: G } = (0, x.Pv)(),
                F = (0, j.ds)() && !U,
                Y = o ?? "",
                B = (0, P.bG)([b.A], () => b.A.get(Y), [Y]),
                W = B?.eligiblePaymentGateways,
                H = (0, R.vT)({ isTrial: a, isGift: U, selectedSkuId: o, startedPaymentFlowWithPaymentSources: m }),
                {
                    subscriptionPlan: V,
                    purchaseDisabled: K,
                    checkoutInvoicePreview: Z,
                    invoiceSummaryTypeWithPreview: q,
                    proratedInvoicePreview: z,
                    renewalInvoicePreview: $,
                    subscriptionPeriodEnd: X,
                } = (0, g.V)({ selectedPlanId: t, priceOptions: u, trialId: l, metadata: i, isTrial: a }),
                J = U && (0, L.Ik)(k),
                Q = u.paymentSourceId,
                ee = (0, M.g)(n, Q),
                et = (0, I.vg)("PremiumSubscriptionReview")
                    ? (D?.find((e) => e.id === Q)?.relocationCountry ?? null)
                    : null,
                { hasEntitlements: en, entitlements: el } = (0, w.X)(V.id, U),
                er = (0, O.J$)(u.paymentSourceId),
                ei = (0, f.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
                ea = !H && (ei.isFractionalPremiumActive || F) && A.JM.has(t),
                es = r.useMemo(() => (0, O.Tm)({ skuId: o, isPremium: y, defaultPlanId: p }), [o, p, y]),
                eo = r.useMemo(
                    () => (en && null == Q ? C.intl.format(C.t["2wPRSF"], { months: el.length }) : null),
                    [en, Q, el],
                );
            return {
                disabled: K,
                activeSubscription: c,
                subscriptionPeriodEnd: X,
                plan: V,
                premiumPlanOptions: es,
                checkoutInvoicePreview: Z,
                invoiceSummaryTypeWithPreview: q,
                renewalInvoicePreview: $,
                proratedInvoicePreview: z,
                isGift: U,
                isEmbeddedIAP: E,
                paymentSourceType: ee,
                giftRecipient: k,
                selectedGiftStyle: G,
                isInOneStepSubscriptionCheckout: H,
                shouldAllowPlanSelect: H && !_,
                hasPaymentSources: h,
                paymentSourceId: Q,
                eligiblePaymentGateways: W,
                inReverseTrial: F,
                fractionalPremiumInfo: ei,
                showFractionalPremiumBannerInInvoiceSummary: ea,
                isPrepaid: er,
                isCustomGift: J,
                isPremium: y,
                isPremiumGroupPurchase: _,
                isEligibleForDiscount: S,
                hasEntitlements: en,
                entitlements: el,
                paymentSourceOptionalWarningCopy: eo,
                selectedSourceRelocationCountry: et,
            };
        })(e),
        J = (0, o.K)(),
        { isEligibleForTrial: Q, discountOffer: ee, premiumGroupDiscountOffer: et } = (0, s.i)(),
        en = et ?? ee,
        {
            checkoutPriceOptions: el,
            checkoutInvoiceError: er,
            referralTrialOfferId: ei,
        } = (0, d.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        ea = $?.guild_id ?? void 0,
        {
            isGift: es,
            giftRecipient: eo,
            invoiceSummaryTypeWithPreview: eu,
            subscriptionPeriodEnd: ec,
            proratedInvoicePreview: ed,
            plan: ep,
            isPrepaid: em,
            premiumPlanOptions: eh,
            shouldAllowPlanSelect: eA,
            isCustomGift: eE,
            hasEntitlements: eC,
            paymentSourceType: ey,
            eligiblePaymentGateways: e_,
            activeSubscription: eS,
            fractionalPremiumInfo: eP,
            disabled: eI,
            isPremiumGroupPurchase: ef,
            paymentSourceOptionalWarningCopy: eT,
        } = X,
        eN = (0, l.jsx)(F, {
            label: C.intl.string(C.t["u+Cw58"]),
            handlePaymentSourceAdd: G,
            isTrial: Z,
            isDiscount: z,
            disabled: eI,
            hasEntitlements: eC,
            eligiblePaymentGateways: e_,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ev = (0, y.V)(ei),
        { copy: eg, daysCount: ex, userTrialOffer: eR } = (0, _.O8)(),
        eM = (0, U.pt)({
            fractionalPremiumInfo: eP,
            selectedPlanId: n,
            planGroup: q,
            premiumSubscription: eS,
            isGift: es,
        }),
        eb = r.useMemo(
            () => null != en && null != en.discount && null != ed && (0, S.Ro)(ed, en.discount.id),
            [en, ed],
        ),
        { setHeaderBadgeText: eL, unsetHeaderBadgeText: eO } = (0, u.v)(),
        ej = es && ep.interval === A.WT.YEAR && (0, O.xq)(ep.id),
        ew = (0, O.L_)({ planId: ep.id, isGift: !0, priceOptions: el, subscriptionPlan: ep });
    r.useEffect(
        () => (
            null != ew && ej && eL(C.intl.formatToPlainString(K.default["Mi5BH/"], { percentOff: ew })),
            () => {
                eO();
            }
        ),
        [ew, eL, eO, ej],
    );
    let eD = r.useMemo(() => {
            if (null != eu && eu.type === D.N$.PREMIUM_WITH_TRIAL && null != eR)
                return (0, l.jsx)(k.Y, { text: C.intl.format(K.default.IAsfR5, { daysCount: ex }) });
            if (null != en && eb) {
                let e = en.discount,
                    t = en.getFullIntervalCount();
                if (e.userUsageLimitInterval === A.Ff.MONTH)
                    return (0, l.jsx)(k.Y, {
                        text: C.intl.format(K.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === A.Ff.YEAR)
                    return (0, l.jsx)(k.Y, { text: C.intl.format(K.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return ej && null != ew
                ? (0, l.jsx)(k.Y, { text: C.intl.format(K.default["7sYIBL"], { savingsPercent: ew }) })
                : null;
        }, [eR, eb, en, ex, eu, ew, ej]),
        eU = (0, V.G)(ep.id),
        ek = r.useMemo(() => (eU ? (0, l.jsx)(B.a, {}) : null), [eU]),
        eG = (function (e) {
            let { skuId: t, isGift: n } = e,
                i = (0, h.O)();
            return r.useMemo(
                () =>
                    n || t !== A.pe.TIER_2 || !1 === i
                        ? null
                        : (0, l.jsx)(p.w, {
                              type: "info",
                              children: (0, l.jsx)(m.E, {
                                  variant: "text-sm/medium",
                                  children: C.intl.format(E.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, i],
            );
        })({ skuId: ep.skuId, isGift: es }),
        eF = r.useMemo(() => (null != eD ? eD : null != ek ? ek : null), [eD, ek]),
        eY = r.useMemo(() => {
            let e = [];
            return (
                null != t && "" !== t && e.push({ type: "warning", message: t, key: "review-warning" }),
                null != eT && e.push({ type: "info", message: eT, key: "payment-source-optional-warning" }),
                eM
                    ? e.push({
                          directContent: (0, l.jsx)(Y.l$, {
                              fractionalPremiumInfo: eP,
                              isEligibleForTrial: Q,
                              trialPeriodCopy: eg,
                              subscriptionPeriodEnd: ec,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ef && e.push({ type: "info", message: (0, U.Nn)(), key: "premium-group-purchase-notice" }),
                null != eG && e.push({ directContent: eG, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [t, eT, eM, eP, Q, eg, ec, ef, eG]),
        eB = null != eu ? eu.invoicePreview : null,
        { priceOptions: eW, planPricesLoading: eH } = (0, O.Pr)(el, eB, er),
        eV = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eY,
            planSelectContent: eA
                ? (0, l.jsx)(Y.XH, {
                      disabled: X.disabled,
                      selectedPlanId: n,
                      priceOptions: eW,
                      planOptions: eh,
                      subscriptionPeriodEnd: ec,
                      planPricesLoading: eH,
                  })
                : void 0,
            paymentMethodContent: eN,
            promotionalNoticeContent: eF,
        };
    if (null == eu && null != er) return (0, l.jsx)(a.T, { ...eV, legalContent: null });
    if (null == eu || eu.type === D.N$.LOADING) return (0, l.jsx)(a.E, {});
    let eK = null != ev ? ev.subscription_trial : void 0,
        eZ =
            eu.type === D.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(Y.W9, {
                      invoiceSummaryTypeWithPreview: eu,
                      subscriptionPlan: ep,
                      isPrepaidPaymentSource: em,
                      subscriptionTrial: eK,
                      isCustomGift: eE,
                  }),
        eq = null;
    if (
        !em &&
        (D.IJ.has(eu.type) || eu.type === D.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eu &&
        null != eu.renewalInvoicePreview
    ) {
        let e = (0, H.Gj)(eu.invoicePreview, eu.renewalInvoicePreview, eK, {
            discountOffer: en,
            isSubscriptionUpdate: null != eS,
            fractionalPremiumInfo: eP,
        });
        eq = (0, l.jsx)(c._, { ...e });
    }
    let ez = eA
            ? void 0
            : (0, l.jsx)(W._, {
                  type: eu.type,
                  invoicePreview: eu.invoicePreview,
                  storeListing: J,
                  subscriptionPlan: ep,
                  isPrepaidPaymentSource: em,
                  giftRecipient: eo,
                  isPremiumGroupPurchase: ef,
                  guildId: ea,
              }),
        e$ = (0, l.jsx)(Y.PI, {
            planGroup: q,
            activeSubscription: eS,
            isTrial: Z,
            plan: ep,
            isGift: es,
            paymentSourceType: ey,
            isPrepaidPaymentSource: em,
            invoiceSummaryTypeWithPreview: eu,
            fractionalPremiumInfo: eP,
        }),
        eX =
            eu.type === D.N$.PREMIUM_WITH_TRIAL
                ? (0, H.ib)(eu.invoicePreview.currency)
                : (0, i.kw)({ subscriptionInvoiceRecord: eu.invoicePreview });
    return (0, l.jsx)(a.T, {
        ...eV,
        purchaseItemContent: ez,
        subscriptionDetailsContent: eq,
        invoiceSummaryContent: eZ,
        legalContent: e$,
        invoiceTotalDueValue: eX,
        invoiceTotalDueLabel: es ? C.intl.string(K.default.Zxav97) : C.intl.string(K.default.R0cZsM),
    });
};
