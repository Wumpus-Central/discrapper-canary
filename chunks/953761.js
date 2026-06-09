n.d(t, { _: () => q }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(403581),
    i = n(262427),
    s = n(854354),
    o = n(274971),
    u = n(463376),
    c = n(266060),
    d = n(214891),
    p = n(669510),
    m = n(211159),
    A = n(683071),
    h = n(834730),
    E = n(212739);
n(25827);
var C = n(788868),
    y = n(594387),
    _ = n(375708),
    P = n(234419),
    S = n(361597),
    I = n(815545),
    T = n(17928),
    f = n(546605),
    N = n(531260),
    v = n(364995),
    g = n(31823),
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
            isDiscount: a,
            disabled: i,
            hasEntitlements: s,
            eligiblePaymentGateways: o,
            label: u = _.intl.string(_.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: c,
            paymentSourceDropdownClassName: d,
            paymentSourceDropdownPrependOption: p,
            location: m = "PremiumSubscriptionReview",
        } = e,
        A = r.useMemo(
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
        disabled: i,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: A,
        location: m,
        hideCurrencySelect: a,
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
            planGroup: J,
            isDiscount: $,
            metadata: X,
        } = e,
        Q = ((e) => {
            let { selectedPlanId: t, paymentSources: n, trialId: l, metadata: a, isTrial: i = !1 } = e,
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
                { hasPaymentSources: A } = (0, x.jm)(),
                { isEmbeddedIAP: h } = (0, g.V)(),
                { isPremium: E, isPremiumGroupPurchase: y, isEligibleForDiscount: P } = (0, u.i)(),
                { checkoutPaymentSources: S } = (0, v.t)(),
                { isGift: I, giftRecipient: k, selectedGiftStyle: G } = (0, M.Pv)(),
                F = (0, D.ds)() && !I,
                Y = s ?? "",
                B = (0, T.bG)([O.A], () => O.A.get(Y), [Y]),
                W = B?.eligiblePaymentGateways,
                H = (0, b.vT)({ isTrial: i, isGift: I, selectedSkuId: s, startedPaymentFlowWithPaymentSources: p }),
                {
                    subscriptionPlan: V,
                    purchaseDisabled: K,
                    checkoutInvoicePreview: Z,
                    invoiceSummaryTypeWithPreview: q,
                    proratedInvoicePreview: z,
                    renewalInvoicePreview: J,
                    subscriptionPeriodEnd: $,
                } = (0, R.V)({ selectedPlanId: t, priceOptions: o, trialId: l, metadata: a, isTrial: i }),
                X = I && (0, j.Ik)(k),
                Q = o.paymentSourceId,
                ee = (0, L.g)(n, Q),
                et = (0, f.vg)("PremiumSubscriptionReview")
                    ? (S?.find((e) => e.id === Q)?.relocationCountry ?? null)
                    : null,
                { hasEntitlements: en, entitlements: el } = (0, U.X)(V.id, I),
                er = (0, w.J$)(o.paymentSourceId),
                ea = (0, N.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
                ei = !H && (ea.isFractionalPremiumActive || F) && C.JM.has(t),
                es = r.useMemo(() => (0, w.Tm)({ skuId: s, isPremium: E, defaultPlanId: d }), [s, d, E]),
                eo = r.useMemo(
                    () => (en && null == Q ? _.intl.format(_.t["2wPRSF"], { months: el.length }) : null),
                    [en, Q, el],
                );
            return {
                disabled: K,
                activeSubscription: c,
                subscriptionPeriodEnd: $,
                plan: V,
                premiumPlanOptions: es,
                checkoutInvoicePreview: Z,
                invoiceSummaryTypeWithPreview: q,
                renewalInvoicePreview: J,
                proratedInvoicePreview: z,
                isGift: I,
                isEmbeddedIAP: h,
                paymentSourceType: ee,
                giftRecipient: k,
                selectedGiftStyle: G,
                isInOneStepSubscriptionCheckout: H,
                shouldAllowPlanSelect: H && !y,
                hasPaymentSources: A,
                paymentSourceId: Q,
                eligiblePaymentGateways: W,
                inReverseTrial: F,
                fractionalPremiumInfo: ea,
                showFractionalPremiumBannerInInvoiceSummary: ei,
                isPrepaid: er,
                isCustomGift: X,
                isPremium: E,
                isPremiumGroupPurchase: y,
                isEligibleForDiscount: P,
                hasEntitlements: en,
                entitlements: el,
                paymentSourceOptionalWarningCopy: eo,
                selectedSourceRelocationCountry: et,
            };
        })(e),
        ee = (0, c.K)(),
        { isEligibleForTrial: et, discountOffer: en, premiumGroupDiscountOffer: el } = (0, u.i)(),
        er = el ?? en,
        { checkoutPriceOptions: ea, checkoutInvoiceError: ei } = (0, m.t4)((e) => ({
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
        })),
        es = X?.guild_id ?? void 0,
        {
            isGift: eo,
            giftRecipient: eu,
            invoiceSummaryTypeWithPreview: ec,
            subscriptionPeriodEnd: ed,
            proratedInvoicePreview: ep,
            plan: em,
            isPrepaid: eA,
            premiumPlanOptions: eh,
            shouldAllowPlanSelect: eE,
            isCustomGift: eC,
            hasEntitlements: ey,
            paymentSourceType: e_,
            eligiblePaymentGateways: eP,
            activeSubscription: eS,
            fractionalPremiumInfo: eI,
            disabled: eT,
            isPremiumGroupPurchase: ef,
            paymentSourceOptionalWarningCopy: eN,
        } = Q,
        ev = (0, l.jsx)(Y, {
            label: _.intl.string(_.t["u+Cw58"]),
            handlePaymentSourceAdd: q,
            isTrial: z,
            isDiscount: $,
            disabled: eT,
            hasEntitlements: ey,
            eligiblePaymentGateways: eP,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eg = (0, P.V)(t),
        { copy: ex, daysCount: eR, userTrialOffer: eM } = (0, S.O8)(),
        eb = (0, G.pt)({
            fractionalPremiumInfo: eI,
            selectedPlanId: F,
            planGroup: J,
            premiumSubscription: eS,
            isGift: eo,
        }),
        eL = r.useMemo(
            () => null != er && null != er.discount && null != ep && (0, I.Ro)(ep, er.discount.id),
            [er, ep],
        ),
        { setHeaderBadgeText: eO, unsetHeaderBadgeText: ej } = (0, d.v)(),
        ew = eo && em.interval === C.WT.YEAR && (0, w.xq)(em.id),
        eD = (0, w.L_)({ planId: em.id, isGift: !0, priceOptions: ea, subscriptionPlan: em });
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
                return (0, l.jsx)(i.J, {
                    gradientColor: "nitro-pink",
                    Icon: a.t,
                    text: _.intl.format(Z.default.IAsfR5, { daysCount: eR }),
                });
            if (null != er && eL) {
                let e = er.discount,
                    t = er.getFullIntervalCount();
                if (e.userUsageLimitInterval === C.Ff.MONTH)
                    return (0, l.jsx)(i.J, {
                        gradientColor: "nitro-pink",
                        Icon: a.t,
                        text: _.intl.format(Z.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === C.Ff.YEAR)
                    return (0, l.jsx)(i.J, {
                        gradientColor: "nitro-pink",
                        text: _.intl.format(Z.default["tUzT/U"], { percentOff: e.amount }),
                    });
            }
            return ew && null != eD
                ? (0, l.jsx)(i.J, {
                      gradientColor: "nitro-pink",
                      Icon: a.t,
                      text: _.intl.format(Z.default["7sYIBL"], { savingsPercent: eD }),
                  })
                : null;
        }, [eM, eL, er, eR, ec, eD, ew]),
        ek = (0, K.G)(em.id),
        eG = r.useMemo(() => (ek ? (0, l.jsx)(W.a, {}) : null), [ek]),
        eF = (function (e) {
            let { skuId: t, isGift: n } = e,
                a = (0, E.O)();
            return r.useMemo(
                () =>
                    n || t !== C.pe.TIER_2 || !1 === a
                        ? null
                        : (0, l.jsx)(A.w, {
                              type: "info",
                              children: (0, l.jsx)(h.E, {
                                  variant: "text-sm/medium",
                                  children: _.intl.format(y.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, a],
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
                    : ef && e.push({ type: "info", message: (0, G.Nn)(), key: "premium-group-purchase-notice" }),
                null != eF && e.push({ directContent: eF, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [n, eN, eb, eI, et, ex, ed, ef, eF]),
        eW = null != ec ? ec.invoicePreview : null,
        { priceOptions: eH, planPricesLoading: eV } = (0, w.Pr)(ea, eW, ei),
        eK = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eB,
            planSelectContent: eE
                ? (0, l.jsx)(B.XH, {
                      disabled: Q.disabled,
                      selectedPlanId: F,
                      priceOptions: eH,
                      planOptions: eh,
                      subscriptionPeriodEnd: ed,
                      planPricesLoading: eV,
                  })
                : void 0,
            paymentMethodContent: ev,
            promotionalNoticeContent: eY,
        };
    if (null == ec && null != ei) return (0, l.jsx)(o.T, { ...eK, legalContent: null });
    if (null == ec || ec.type === k.N$.LOADING) return (0, l.jsx)(o.E, {});
    let eZ = null != eg ? eg.subscription_trial : void 0,
        eq =
            ec.type === k.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(B.W9, {
                      invoiceSummaryTypeWithPreview: ec,
                      subscriptionPlan: em,
                      isPrepaidPaymentSource: eA,
                      subscriptionTrial: eZ,
                      isCustomGift: eC,
                  }),
        ez = null;
    if (
        !eA &&
        (k.IJ.has(ec.type) || ec.type === k.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ec &&
        null != ec.renewalInvoicePreview
    ) {
        let e = (0, V.Gj)(ec.invoicePreview, ec.renewalInvoicePreview, eZ, {
            discountOffer: er,
            isSubscriptionUpdate: null != eS,
            fractionalPremiumInfo: eI,
        });
        ez = (0, l.jsx)(p._, { ...e });
    }
    let eJ = eE
            ? void 0
            : (0, l.jsx)(H._, {
                  type: ec.type,
                  invoicePreview: ec.invoicePreview,
                  storeListing: ee,
                  subscriptionPlan: em,
                  isPrepaidPaymentSource: eA,
                  giftRecipient: eu,
                  isPremiumGroupPurchase: ef,
                  guildId: es,
              }),
        e$ = (0, l.jsx)(B.PI, {
            planGroup: J,
            activeSubscription: eS,
            isTrial: z,
            plan: em,
            isGift: eo,
            paymentSourceType: e_,
            isPrepaidPaymentSource: eA,
            invoiceSummaryTypeWithPreview: ec,
            fractionalPremiumInfo: eI,
        }),
        eX =
            ec.type === k.N$.PREMIUM_WITH_TRIAL
                ? (0, V.ib)(ec.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: ec.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eK,
        purchaseItemContent: eJ,
        subscriptionDetailsContent: ez,
        invoiceSummaryContent: eq,
        legalContent: e$,
        invoiceTotalDueValue: eX,
        invoiceTotalDueLabel: eo ? _.intl.string(Z.default.Zxav97) : _.intl.string(Z.default.R0cZsM),
    });
};
