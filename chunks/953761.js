n.d(t, { _: () => q }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(403581),
    a = n(262427),
    s = n(854354),
    o = n(274971),
    u = n(463376),
    c = n(266060),
    d = n(214891),
    p = n(669510),
    m = n(211159),
    h = n(683071),
    A = n(834730),
    E = n(212739);
n(25827);
var C = n(788868),
    y = n(594387),
    _ = n(375708),
    S = n(234419),
    P = n(361597),
    I = n(815545),
    f = n(17928),
    T = n(546605),
    N = n(531260),
    g = n(364995),
    v = n(31823),
    x = n(426398),
    R = n(473617),
    M = n(937008),
    b = n(800471),
    L = n(216641),
    O = n(67480),
    j = n(45938),
    w = n(428262),
    D = n(881489),
    U = n(344159),
    k = n(299301),
    G = n(222707),
    F = n(376843);
let Y = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: i,
            disabled: a,
            hasEntitlements: s,
            eligiblePaymentGateways: o,
            label: u = _.intl.string(_.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: c,
            paymentSourceDropdownClassName: d,
            paymentSourceDropdownPrependOption: p,
            location: m = "PremiumSubscriptionReview",
        } = e,
        h = r.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? _.intl.string(_.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: o,
                shouldUseUnifiedCheckoutUI: c,
                className: d,
                prependOption: p,
            }),
            [s, n, o, c, d, p],
        );
    return (0, l.jsx)(F.N, {
        label: u,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: h,
        location: m,
        hideCurrencySelect: i,
    });
};
var B = n(340034),
    W = n(755880),
    H = n(134638),
    V = n(888751),
    K = n(906234),
    Z = n(327105);
let q = (e) => {
    let {
            referralTrialOfferId: t,
            reviewWarningMessage: n,
            selectedPlanId: F,
            handlePaymentSourceAdd: q,
            isTrial: z,
            planGroup: $,
            isDiscount: X,
            metadata: J,
        } = e,
        Q = ((e) => {
            let { selectedPlanId: t, paymentSources: n, trialId: l, metadata: i, isTrial: a = !1 } = e,
                {
                    selectedSkuId: s,
                    priceOptions: o,
                    activeSubscription: c,
                    defaultPlanId: d,
                    startedPaymentFlowWithPaymentSources: p,
                } = (0, m.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                    defaultPlanId: e.defaultPlanId,
                    startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
                })),
                { hasPaymentSources: h } = (0, x.jm)(),
                { isEmbeddedIAP: A } = (0, v.V)(),
                { isPremium: E, isPremiumGroupPurchase: y, isEligibleForDiscount: S } = (0, u.i)(),
                { checkoutPaymentSources: P } = (0, g.t)(),
                { isGift: I, giftRecipient: k, selectedGiftStyle: G } = (0, M.Pv)(),
                F = (0, D.ds)() && !I,
                Y = s ?? "",
                B = (0, f.bG)([O.A], () => O.A.get(Y), [Y]),
                W = B?.eligiblePaymentGateways,
                H = (0, b.vT)({ isTrial: a, isGift: I, selectedSkuId: s, startedPaymentFlowWithPaymentSources: p }),
                {
                    subscriptionPlan: V,
                    purchaseDisabled: K,
                    checkoutInvoicePreview: Z,
                    invoiceSummaryTypeWithPreview: q,
                    proratedInvoicePreview: z,
                    renewalInvoicePreview: $,
                    subscriptionPeriodEnd: X,
                } = (0, R.V)({ selectedPlanId: t, priceOptions: o, trialId: l, metadata: i, isTrial: a }),
                J = I && (0, j.Ik)(k),
                Q = o.paymentSourceId,
                ee = (0, L.g)(n, Q),
                et = (0, T.vg)("PremiumSubscriptionReview")
                    ? (P?.find((e) => e.id === Q)?.relocationCountry ?? null)
                    : null,
                { hasEntitlements: en, entitlements: el } = (0, U.X)(V.id, I),
                er = (0, w.J$)(o.paymentSourceId),
                ei = (0, N.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
                ea = !H && (ei.isFractionalPremiumActive || F) && C.JM.has(t),
                es = r.useMemo(() => (0, w.Tm)({ skuId: s, isPremium: E, defaultPlanId: d }), [s, d, E]),
                eo = r.useMemo(
                    () => (en && null == Q ? _.intl.format(_.t["2wPRSF"], { months: el.length }) : null),
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
                isGift: I,
                isEmbeddedIAP: A,
                paymentSourceType: ee,
                giftRecipient: k,
                selectedGiftStyle: G,
                isInOneStepSubscriptionCheckout: H,
                shouldAllowPlanSelect: H && !y,
                hasPaymentSources: h,
                paymentSourceId: Q,
                eligiblePaymentGateways: W,
                inReverseTrial: F,
                fractionalPremiumInfo: ei,
                showFractionalPremiumBannerInInvoiceSummary: ea,
                isPrepaid: er,
                isCustomGift: J,
                isPremium: E,
                isPremiumGroupPurchase: y,
                isEligibleForDiscount: S,
                hasEntitlements: en,
                entitlements: el,
                paymentSourceOptionalWarningCopy: eo,
                selectedSourceRelocationCountry: et,
            };
        })(e),
        ee = (0, c.K)(),
        { isEligibleForTrial: et, discountOffer: en, premiumGroupDiscountOffer: el } = (0, u.i)(),
        er = el ?? en,
        { checkoutPriceOptions: ei, checkoutInvoiceError: ea } = (0, m.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        es = J?.guild_id ?? void 0,
        {
            isGift: eo,
            giftRecipient: eu,
            invoiceSummaryTypeWithPreview: ec,
            subscriptionPeriodEnd: ed,
            proratedInvoicePreview: ep,
            plan: em,
            isPrepaid: eh,
            premiumPlanOptions: eA,
            shouldAllowPlanSelect: eE,
            isCustomGift: eC,
            hasEntitlements: ey,
            paymentSourceType: e_,
            eligiblePaymentGateways: eS,
            activeSubscription: eP,
            fractionalPremiumInfo: eI,
            disabled: ef,
            isPremiumGroupPurchase: eT,
            paymentSourceOptionalWarningCopy: eN,
        } = Q,
        eg = (0, l.jsx)(Y, {
            label: _.intl.string(_.t["u+Cw58"]),
            handlePaymentSourceAdd: q,
            isTrial: z,
            isDiscount: X,
            disabled: ef,
            hasEntitlements: ey,
            eligiblePaymentGateways: eS,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ev = (0, S.V)(t),
        { copy: ex, daysCount: eR, userTrialOffer: eM } = (0, P.O8)(),
        eb = (0, G.pt)({
            fractionalPremiumInfo: eI,
            selectedPlanId: F,
            planGroup: $,
            premiumSubscription: eP,
            isGift: eo,
        }),
        eL = r.useMemo(
            () => null != er && null != er.discount && null != ep && (0, I.Ro)(ep, er.discount.id),
            [er, ep],
        ),
        { setHeaderBadgeText: eO, unsetHeaderBadgeText: ej } = (0, d.v)(),
        ew = eo && em.interval === C.WT.YEAR && (0, w.xq)(em.id),
        eD = (0, w.L_)({ planId: em.id, isGift: !0, priceOptions: ei, subscriptionPlan: em });
    r.useEffect(
        () => (
            null != eD && ew && eO(_.intl.formatToPlainString(Z.default["Mi5BH/"], { percentOff: eD })),
            () => {
                ej();
            }
        ),
        [eD, eO, ej, ew],
    );
    let eU = r.useMemo(() => {
            if (null != ec && ec.type === k.N$.PREMIUM_WITH_TRIAL && null != eM)
                return (0, l.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: _.intl.format(Z.default.IAsfR5, { daysCount: eR }),
                });
            if (null != er && eL) {
                let e = er.discount,
                    t = er.getFullIntervalCount();
                if (e.userUsageLimitInterval === C.Ff.MONTH)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: _.intl.format(Z.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === C.Ff.YEAR)
                    return (0, l.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        text: _.intl.format(Z.default["tUzT/U"], { percentOff: e.amount }),
                    });
            }
            return ew && null != eD
                ? (0, l.jsx)(a.J, {
                      gradientColor: "nitro-pink",
                      Icon: i.t,
                      text: _.intl.format(Z.default["7sYIBL"], { savingsPercent: eD }),
                  })
                : null;
        }, [eM, eL, er, eR, ec, eD, ew]),
        ek = (0, K.G)(em.id),
        eG = r.useMemo(() => (ek ? (0, l.jsx)(W.a, {}) : null), [ek]),
        eF = (function (e) {
            let { skuId: t, isGift: n } = e,
                i = (0, E.O)();
            return r.useMemo(
                () =>
                    n || t !== C.pe.TIER_2 || !1 === i
                        ? null
                        : (0, l.jsx)(h.w, {
                              type: "info",
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  children: _.intl.format(y.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, i],
            );
        })({ skuId: em.skuId, isGift: eo }),
        eY = r.useMemo(() => (null != eU ? eU : null != eG ? eG : null), [eU, eG]),
        eB = r.useMemo(() => {
            let e = [];
            return (
                null != n && "" !== n && e.push({ type: "warning", message: n, key: "review-warning" }),
                null != eN && e.push({ type: "info", message: eN, key: "payment-source-optional-warning" }),
                eb
                    ? e.push({
                          directContent: (0, l.jsx)(B.l$, {
                              fractionalPremiumInfo: eI,
                              isEligibleForTrial: et,
                              trialPeriodCopy: ex,
                              subscriptionPeriodEnd: ed,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : eT && e.push({ type: "info", message: (0, G.Nn)(), key: "premium-group-purchase-notice" }),
                null != eF && e.push({ directContent: eF, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [n, eN, eb, eI, et, ex, ed, eT, eF]),
        eW = null != ec ? ec.invoicePreview : null,
        { priceOptions: eH, planPricesLoading: eV } = (0, w.Pr)(ei, eW, ea),
        eK = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eB,
            planSelectContent: eE
                ? (0, l.jsx)(B.XH, {
                      disabled: Q.disabled,
                      selectedPlanId: F,
                      priceOptions: eH,
                      planOptions: eA,
                      subscriptionPeriodEnd: ed,
                      planPricesLoading: eV,
                  })
                : void 0,
            paymentMethodContent: eg,
            promotionalNoticeContent: eY,
        };
    if (null == ec && null != ea) return (0, l.jsx)(o.T, { ...eK, legalContent: null });
    if (null == ec || ec.type === k.N$.LOADING) return (0, l.jsx)(o.E, {});
    let eZ = null != ev ? ev.subscription_trial : void 0,
        eq =
            ec.type === k.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(B.W9, {
                      invoiceSummaryTypeWithPreview: ec,
                      subscriptionPlan: em,
                      isPrepaidPaymentSource: eh,
                      subscriptionTrial: eZ,
                      isCustomGift: eC,
                  }),
        ez = null;
    if (
        !eh &&
        (k.IJ.has(ec.type) || ec.type === k.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ec &&
        null != ec.renewalInvoicePreview
    ) {
        let e = (0, V.Gj)(ec.invoicePreview, ec.renewalInvoicePreview, eZ, {
            discountOffer: er,
            isSubscriptionUpdate: null != eP,
            fractionalPremiumInfo: eI,
        });
        ez = (0, l.jsx)(p._, { ...e });
    }
    let e$ = eE
            ? void 0
            : (0, l.jsx)(H._, {
                  type: ec.type,
                  invoicePreview: ec.invoicePreview,
                  storeListing: ee,
                  subscriptionPlan: em,
                  isPrepaidPaymentSource: eh,
                  giftRecipient: eu,
                  isPremiumGroupPurchase: eT,
                  guildId: es,
              }),
        eX = (0, l.jsx)(B.PI, {
            planGroup: $,
            activeSubscription: eP,
            isTrial: z,
            plan: em,
            isGift: eo,
            paymentSourceType: e_,
            isPrepaidPaymentSource: eh,
            invoiceSummaryTypeWithPreview: ec,
            fractionalPremiumInfo: eI,
        }),
        eJ =
            ec.type === k.N$.PREMIUM_WITH_TRIAL
                ? (0, V.ib)(ec.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: ec.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eK,
        purchaseItemContent: e$,
        subscriptionDetailsContent: ez,
        invoiceSummaryContent: eq,
        legalContent: eX,
        invoiceTotalDueValue: eJ,
        invoiceTotalDueLabel: eo ? _.intl.string(Z.default.Zxav97) : _.intl.string(Z.default.R0cZsM),
    });
};
