"use strict";
n.d(t, { _: () => z }), n(321073);
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
    k = n(71867),
    U = n(222707),
    G = n(559778),
    F = n(376843);
let V = (e) => {
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
    return (0, i.jsx)(F.N, {
        label: u,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: f,
        location: h,
        hideCurrencySelect: s,
    });
};
var B = n(340034),
    j = n(622631),
    H = n(755880),
    Y = n(134638),
    W = n(888751),
    K = n(906234),
    $ = n(327105);
let z = (e) => {
    let {
            reviewWarningMessage: t,
            selectedPlanId: n,
            handlePaymentSourceAdd: F,
            isTrial: z,
            planGroup: q,
            isDiscount: Z,
            metadata: X,
        } = e,
        Q = ((e) => {
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
        J = (0, l.K)(),
        { isEligibleForTrial: ee, discountOffer: et, premiumGroupDiscountOffer: en } = (0, o.i)(),
        ei = en ?? et,
        {
            checkoutPriceOptions: er,
            checkoutInvoiceError: es,
            referralTrialOfferId: ea,
        } = (0, d.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        eo = X?.guild_id ?? void 0,
        {
            isGift: el,
            giftRecipient: eu,
            invoiceSummaryTypeWithPreview: ec,
            subscriptionPeriodEnd: ed,
            proratedInvoicePreview: e_,
            plan: eh,
            isPrepaid: ef,
            premiumPlanOptions: ep,
            shouldAllowPlanSelect: eE,
            isCustomGift: em,
            hasEntitlements: eg,
            paymentSourceType: eA,
            eligiblePaymentGateways: eI,
            activeSubscription: eT,
            fractionalPremiumInfo: eS,
            disabled: ey,
            isPremiumGroupPurchase: eC,
            paymentSourceOptionalWarningCopy: eN,
        } = Q,
        ev = (0, i.jsx)(V, {
            label: m.intl.string(m.t["u+Cw58"]),
            handlePaymentSourceAdd: F,
            isTrial: z,
            isDiscount: Z,
            disabled: ey,
            hasEntitlements: eg,
            eligiblePaymentGateways: eI,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eR = (0, g.V)(ea),
        { copy: eO, daysCount: eb, userTrialOffer: eD } = (0, A.O8)(),
        eL = (0, U.pt)({
            fractionalPremiumInfo: eS,
            selectedPlanId: n,
            planGroup: q,
            premiumSubscription: eT,
            isGift: el,
        }),
        ew = r.useMemo(
            () => null != ei && null != ei.discount && null != e_ && (0, I.Ro)(e_, ei.discount.id),
            [ei, e_],
        ),
        { setHeaderBadgeText: eM, unsetHeaderBadgeText: eP } = (0, u.v)(),
        ex = el && eh.interval === p.WT.YEAR && (0, w.xq)(eh.id),
        ek = (0, w.L_)({ planId: eh.id, isGift: !0, priceOptions: er, subscriptionPlan: eh });
    r.useEffect(
        () => (
            null != ek && ex && eM(m.intl.formatToPlainString($.default["Mi5BH/"], { percentOff: ek })),
            () => {
                eP();
            }
        ),
        [ek, eM, eP, ex],
    );
    let eU = r.useMemo(() => {
            if (null != ec && ec.type === x.N$.PREMIUM_WITH_TRIAL && null != eD)
                return (0, i.jsx)(G.Y, { text: m.intl.format($.default.IAsfR5, { daysCount: eb }) });
            if (null != ei && ew) {
                let e = ei.discount,
                    t = ei.getFullIntervalCount();
                if (e.userUsageLimitInterval === p.Ff.MONTH)
                    return (0, i.jsx)(G.Y, {
                        text: m.intl.format($.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === p.Ff.YEAR)
                    return (0, i.jsx)(G.Y, { text: m.intl.format($.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return ex && null != ek
                ? (0, i.jsx)(G.Y, { text: m.intl.format($.default["7sYIBL"], { savingsPercent: ek }) })
                : null;
        }, [eD, ew, ei, eb, ec, ek, ex]),
        eG = (0, K.G)(eh.id),
        eF = r.useMemo(() => (eG ? (0, i.jsx)(H.a, {}) : null), [eG]),
        eV = (function (e) {
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
        })({ skuId: eh.skuId, isGift: el }),
        eB = (0, k.i)({ planSkuId: eh.skuId }),
        ej = r.useMemo(() => (null != eU ? eU : null != eB ? eB : null != eF ? eF : null), [eU, eB, eF]),
        eH = r.useMemo(() => {
            let e = [];
            return (
                null != t && "" !== t && e.push({ type: "warning", message: t, key: "review-warning" }),
                null != eN && e.push({ type: "info", message: eN, key: "payment-source-optional-warning" }),
                eL
                    ? e.push({
                          directContent: (0, i.jsx)(B.l$, {
                              fractionalPremiumInfo: eS,
                              isEligibleForTrial: ee,
                              trialPeriodCopy: eO,
                              subscriptionPeriodEnd: ed,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : eC && e.push({ type: "info", message: (0, U.Nn)(), key: "premium-group-purchase-notice" }),
                null != eV && e.push({ directContent: eV, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [t, eN, eL, eS, ee, eO, ed, eC, eV]),
        eY = null != ec ? ec.invoicePreview : null,
        { priceOptions: eW, planPricesLoading: eK } = (0, w.Pr)(er, eY, es),
        e$ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eH,
            planSelectContent: eE
                ? (0, i.jsx)(j.X, {
                      disabled: Q.disabled,
                      selectedPlanId: n,
                      priceOptions: eW,
                      planOptions: ep,
                      subscriptionPeriodEnd: ed,
                      planPricesLoading: eK,
                  })
                : void 0,
            paymentMethodContent: ev,
            promotionalNoticeContent: ej,
        };
    if (null == ec && null != es) return (0, i.jsx)(a.T, { ...e$, legalContent: null });
    if (null == ec || ec.type === x.N$.LOADING) return (0, i.jsx)(a.E, {});
    let ez = null != eR ? eR.subscription_trial : void 0,
        eq =
            ec.type === x.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, i.jsx)(B.W9, {
                      invoiceSummaryTypeWithPreview: ec,
                      subscriptionPlan: eh,
                      isPrepaidPaymentSource: ef,
                      subscriptionTrial: ez,
                      isCustomGift: em,
                  }),
        eZ = null;
    if (
        !ef &&
        (x.IJ.has(ec.type) || ec.type === x.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ec &&
        null != ec.renewalInvoicePreview
    ) {
        let e = (0, W.Gj)(ec.invoicePreview, ec.renewalInvoicePreview, ez, {
            discountOffer: ei,
            isSubscriptionUpdate: null != eT,
            fractionalPremiumInfo: eS,
        });
        eZ = (0, i.jsx)(c._, { ...e });
    }
    let eX = eE
            ? void 0
            : (0, i.jsx)(Y._, {
                  type: ec.type,
                  invoicePreview: ec.invoicePreview,
                  storeListing: J,
                  subscriptionPlan: eh,
                  isPrepaidPaymentSource: ef,
                  giftRecipient: eu,
                  isPremiumGroupPurchase: eC,
                  guildId: eo,
              }),
        eQ = (0, i.jsx)(B.PI, {
            planGroup: q,
            activeSubscription: eT,
            isTrial: z,
            plan: eh,
            isGift: el,
            paymentSourceType: eA,
            isPrepaidPaymentSource: ef,
            invoiceSummaryTypeWithPreview: ec,
            fractionalPremiumInfo: eS,
        }),
        eJ =
            ec.type === x.N$.PREMIUM_WITH_TRIAL
                ? (0, W.ib)(ec.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: ec.invoicePreview });
    return (0, i.jsx)(a.T, {
        ...e$,
        purchaseItemContent: eX,
        subscriptionDetailsContent: eZ,
        invoiceSummaryContent: eq,
        legalContent: eQ,
        invoiceTotalDueValue: eJ,
        invoiceTotalDueLabel: el ? m.intl.string($.default.Zxav97) : m.intl.string($.default.R0cZsM),
    });
};
