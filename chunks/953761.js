"use strict";
n.d(t, { _: () => $ }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(854354),
    a = n(38785),
    o = n(463376),
    l = n(266060),
    u = n(214891),
    c = n(669510),
    d = n(211159),
    _ = n(683071),
    h = n(834730),
    f = n(212739);
n(25827);
var p = n(788868),
    E = n(594387),
    m = n(375708),
    g = n(234419),
    A = n(361597),
    I = n(815545),
    T = n(17928),
    S = n(531260),
    y = n(364995),
    C = n(31823),
    N = n(426398),
    v = n(473617),
    R = n(937008),
    O = n(800471),
    b = n(216641),
    D = n(67480),
    L = n(45938),
    w = n(428262),
    M = n(881489),
    P = n(344159),
    x = n(299301),
    k = n(222707),
    U = n(559778),
    G = n(376843);
let F = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: s,
            disabled: a,
            hasEntitlements: o,
            eligiblePaymentGateways: l,
            label: u = m.intl.string(m.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: c,
            paymentSourceDropdownClassName: d,
            paymentSourceDropdownPrependOption: _,
            location: h = "PremiumSubscriptionReview",
        } = e,
        f = r.useMemo(
            () => ({
                newPaymentMethodOptionLabel: o && !n ? m.intl.string(m.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: l,
                shouldUseUnifiedCheckoutUI: c,
                className: d,
                prependOption: _,
            }),
            [o, n, l, c, d, _],
        );
    return (0, i.jsx)(G.N, {
        label: u,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: f,
        location: h,
        hideCurrencySelect: s,
    });
};
var V = n(340034),
    B = n(622631),
    j = n(755880),
    H = n(134638),
    Y = n(888751),
    W = n(906234),
    K = n(327105);
let $ = (e) => {
    let {
            reviewWarningMessage: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: G,
            isTrial: $,
            planGroup: z,
            isDiscount: q,
            metadata: Z,
        } = e,
        X = ((e) => {
            let { selectedPlanId: t, paymentSources: n, trialId: i, metadata: s, isTrial: a = !1 } = e,
                {
                    selectedSkuId: l,
                    priceOptions: u,
                    activeSubscription: c,
                    defaultPlanId: _,
                    startedPaymentFlowWithPaymentSources: h,
                } = (0, d.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                    defaultPlanId: e.defaultPlanId,
                    startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
                })),
                { hasPaymentSources: f } = (0, N.jm)(),
                { isEmbeddedIAP: E } = (0, C.V)(),
                { isPremium: g, isPremiumGroupPurchase: A, isEligibleForDiscount: I } = (0, o.i)(),
                { checkoutPaymentSources: x } = (0, y.t)(),
                { isGift: k, giftRecipient: U, selectedGiftStyle: G } = (0, R.Pv)(),
                F = (0, M.ds)() && !k,
                V = l ?? "",
                B = (0, T.bG)([D.A], () => D.A.get(V), [V]),
                j = B?.eligiblePaymentGateways,
                H = (0, O.vT)({ isTrial: a, isGift: k, selectedSkuId: l, startedPaymentFlowWithPaymentSources: h }),
                {
                    subscriptionPlan: Y,
                    purchaseDisabled: W,
                    checkoutInvoicePreview: K,
                    invoiceSummaryTypeWithPreview: $,
                    proratedInvoicePreview: z,
                    renewalInvoicePreview: q,
                    subscriptionPeriodEnd: Z,
                } = (0, v.V)({ selectedPlanId: t, priceOptions: u, trialId: i, metadata: s, isTrial: a }),
                X = k && (0, L.Ik)(U),
                Q = u.paymentSourceId,
                J = (0, b.g)(n, Q),
                ee = x?.find((e) => e.id === Q)?.relocationCountry ?? null,
                { hasEntitlements: et, entitlements: en } = (0, P.X)(Y.id, k),
                ei = (0, w.J$)(u.paymentSourceId),
                er = (0, S.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
                es = !H && (er.isFractionalPremiumActive || F) && p.JM.has(t),
                ea = r.useMemo(() => (0, w.Tm)({ skuId: l, isPremium: g, defaultPlanId: _ }), [l, _, g]),
                eo = r.useMemo(
                    () => (et && null == Q ? m.intl.format(m.t["2wPRSF"], { months: en.length }) : null),
                    [et, Q, en],
                );
            return {
                disabled: W,
                activeSubscription: c,
                subscriptionPeriodEnd: Z,
                plan: Y,
                premiumPlanOptions: ea,
                checkoutInvoicePreview: K,
                invoiceSummaryTypeWithPreview: $,
                renewalInvoicePreview: q,
                proratedInvoicePreview: z,
                isGift: k,
                isEmbeddedIAP: E,
                paymentSourceType: J,
                giftRecipient: U,
                selectedGiftStyle: G,
                isInOneStepSubscriptionCheckout: H,
                shouldAllowPlanSelect: H && !A,
                hasPaymentSources: f,
                paymentSourceId: Q,
                eligiblePaymentGateways: j,
                inReverseTrial: F,
                fractionalPremiumInfo: er,
                showFractionalPremiumBannerInInvoiceSummary: es,
                isPrepaid: ei,
                isCustomGift: X,
                isPremium: g,
                isPremiumGroupPurchase: A,
                isEligibleForDiscount: I,
                hasEntitlements: et,
                entitlements: en,
                paymentSourceOptionalWarningCopy: eo,
                selectedSourceRelocationCountry: ee,
            };
        })(e),
        Q = (0, l.K)(),
        { isEligibleForTrial: J, discountOffer: ee, premiumGroupDiscountOffer: et } = (0, o.i)(),
        en = et ?? ee,
        {
            checkoutPriceOptions: ei,
            checkoutInvoiceError: er,
            referralTrialOfferId: es,
        } = (0, d.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        ea = Z?.guild_id ?? void 0,
        {
            isGift: eo,
            giftRecipient: el,
            invoiceSummaryTypeWithPreview: eu,
            subscriptionPeriodEnd: ec,
            proratedInvoicePreview: ed,
            plan: e_,
            isPrepaid: eh,
            premiumPlanOptions: ef,
            shouldAllowPlanSelect: ep,
            isCustomGift: eE,
            hasEntitlements: em,
            paymentSourceType: eg,
            eligiblePaymentGateways: eA,
            activeSubscription: eI,
            fractionalPremiumInfo: eT,
            disabled: eS,
            isPremiumGroupPurchase: ey,
            paymentSourceOptionalWarningCopy: eC,
        } = X,
        eN = (0, i.jsx)(F, {
            label: m.intl.string(m.t["u+Cw58"]),
            handlePaymentSourceAdd: G,
            isTrial: $,
            isDiscount: q,
            disabled: eS,
            hasEntitlements: em,
            eligiblePaymentGateways: eA,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ev = (0, g.V)(es),
        { copy: eR, daysCount: eO, userTrialOffer: eb } = (0, A.O8)(),
        eD = (0, k.pt)({
            fractionalPremiumInfo: eT,
            selectedPlanId: n,
            planGroup: z,
            premiumSubscription: eI,
            isGift: eo,
        }),
        eL = r.useMemo(
            () => null != en && null != en.discount && null != ed && (0, I.Ro)(ed, en.discount.id),
            [en, ed],
        ),
        { setHeaderBadgeText: ew, unsetHeaderBadgeText: eM } = (0, u.v)(),
        eP = eo && e_.interval === p.WT.YEAR && (0, w.xq)(e_.id),
        ex = (0, w.L_)({ planId: e_.id, isGift: !0, priceOptions: ei, subscriptionPlan: e_ });
    r.useEffect(
        () => (
            null != ex && eP && ew(m.intl.formatToPlainString(K.default["Mi5BH/"], { percentOff: ex })),
            () => {
                eM();
            }
        ),
        [ex, ew, eM, eP],
    );
    let ek = r.useMemo(() => {
            if (null != eu && eu.type === x.N$.PREMIUM_WITH_TRIAL && null != eb)
                return (0, i.jsx)(U.Y, { text: m.intl.format(K.default.IAsfR5, { daysCount: eO }) });
            if (null != en && eL) {
                let e = en.discount,
                    t = en.getFullIntervalCount();
                if (e.userUsageLimitInterval === p.Ff.MONTH)
                    return (0, i.jsx)(U.Y, {
                        text: m.intl.format(K.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === p.Ff.YEAR)
                    return (0, i.jsx)(U.Y, { text: m.intl.format(K.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eP && null != ex
                ? (0, i.jsx)(U.Y, { text: m.intl.format(K.default["7sYIBL"], { savingsPercent: ex }) })
                : null;
        }, [eb, eL, en, eO, eu, ex, eP]),
        eU = (0, W.G)(e_.id),
        eG = r.useMemo(() => (eU ? (0, i.jsx)(j.a, {}) : null), [eU]),
        eF = (function (e) {
            let { skuId: t, isGift: n } = e,
                s = (0, f.O)();
            return r.useMemo(
                () =>
                    n || t !== p.pe.TIER_2 || !1 === s
                        ? null
                        : (0, i.jsx)(_.w, {
                              type: "info",
                              children: (0, i.jsx)(h.E, {
                                  variant: "text-sm/medium",
                                  children: m.intl.format(E.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, s],
            );
        })({ skuId: e_.skuId, isGift: eo }),
        eV = r.useMemo(() => (null != ek ? ek : null != eG ? eG : null), [ek, eG]),
        eB = r.useMemo(() => {
            let e = [];
            return (
                null != t && "" !== t && e.push({ type: "warning", message: t, key: "review-warning" }),
                null != eC && e.push({ type: "info", message: eC, key: "payment-source-optional-warning" }),
                eD
                    ? e.push({
                          directContent: (0, i.jsx)(V.l$, {
                              fractionalPremiumInfo: eT,
                              isEligibleForTrial: J,
                              trialPeriodCopy: eR,
                              subscriptionPeriodEnd: ec,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ey && e.push({ type: "info", message: (0, k.Nn)(), key: "premium-group-purchase-notice" }),
                null != eF && e.push({ directContent: eF, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [t, eC, eD, eT, J, eR, ec, ey, eF]),
        ej = null != eu ? eu.invoicePreview : null,
        { priceOptions: eH, planPricesLoading: eY } = (0, w.Pr)(ei, ej, er),
        eW = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eB,
            planSelectContent: ep
                ? (0, i.jsx)(B.X, {
                      disabled: X.disabled,
                      selectedPlanId: n,
                      priceOptions: eH,
                      planOptions: ef,
                      subscriptionPeriodEnd: ec,
                      planPricesLoading: eY,
                  })
                : void 0,
            paymentMethodContent: eN,
            promotionalNoticeContent: eV,
        };
    if (null == eu && null != er) return (0, i.jsx)(a.T, { ...eW, legalContent: null });
    if (null == eu || eu.type === x.N$.LOADING) return (0, i.jsx)(a.E, {});
    let eK = null != ev ? ev.subscription_trial : void 0,
        e$ =
            eu.type === x.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, i.jsx)(V.W9, {
                      invoiceSummaryTypeWithPreview: eu,
                      subscriptionPlan: e_,
                      isPrepaidPaymentSource: eh,
                      subscriptionTrial: eK,
                      isCustomGift: eE,
                  }),
        ez = null;
    if (
        !eh &&
        (x.IJ.has(eu.type) || eu.type === x.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eu &&
        null != eu.renewalInvoicePreview
    ) {
        let e = (0, Y.Gj)(eu.invoicePreview, eu.renewalInvoicePreview, eK, {
            discountOffer: en,
            isSubscriptionUpdate: null != eI,
            fractionalPremiumInfo: eT,
        });
        ez = (0, i.jsx)(c._, { ...e });
    }
    let eq = ep
            ? void 0
            : (0, i.jsx)(H._, {
                  type: eu.type,
                  invoicePreview: eu.invoicePreview,
                  storeListing: Q,
                  subscriptionPlan: e_,
                  isPrepaidPaymentSource: eh,
                  giftRecipient: el,
                  isPremiumGroupPurchase: ey,
                  guildId: ea,
              }),
        eZ = (0, i.jsx)(V.PI, {
            planGroup: z,
            activeSubscription: eI,
            isTrial: $,
            plan: e_,
            isGift: eo,
            paymentSourceType: eg,
            isPrepaidPaymentSource: eh,
            invoiceSummaryTypeWithPreview: eu,
            fractionalPremiumInfo: eT,
        }),
        eX =
            eu.type === x.N$.PREMIUM_WITH_TRIAL
                ? (0, Y.ib)(eu.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: eu.invoicePreview });
    return (0, i.jsx)(a.T, {
        ...eW,
        purchaseItemContent: eq,
        subscriptionDetailsContent: ez,
        invoiceSummaryContent: e$,
        legalContent: eZ,
        invoiceTotalDueValue: eX,
        invoiceTotalDueLabel: eo ? m.intl.string(K.default.Zxav97) : m.intl.string(K.default.R0cZsM),
    });
};
