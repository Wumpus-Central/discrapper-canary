n.d(t, {
    EA: () => R,
    Gj: () => h,
    IY: () => p,
    Ig: () => C,
    Re: () => L,
    Rs: () => g,
    fk: () => m,
    iK: () => O,
    ib: () => S,
}),
    n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(403581),
    s = n(854354),
    _ = n(692440),
    l = n(815545),
    o = n(958720),
    E = n(299301),
    d = n(97352),
    c = n(927578),
    u = n(580630),
    I = n(788868),
    A = n(985018),
    T = n(327105);
let S = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? A.intl.format(T.default.U2CmMW, {
                  priceAmount: (0, u.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, u.$g)(0, e);
    },
    N = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    O = (e) => {
        let { interval: t } = e,
            n = (0, c.m6)(e.id);
        switch (t) {
            case I.WT.MONTH:
                let i = A.intl.string(T.default.ZnoRKt);
                return n === I.PremiumTypes.TIER_0
                    ? A.intl.formatToPlainString(T.default.Z9mu9q, { timeInterval: i })
                    : A.intl.formatToPlainString(T.default["8Jt4Dw"], { timeInterval: i });
            case I.WT.YEAR:
                let r = A.intl.string(T.default.Xrg8aC);
                return n === I.PremiumTypes.TIER_0
                    ? A.intl.formatToPlainString(T.default.Z9mu9q, { timeInterval: r })
                    : A.intl.formatToPlainString(T.default["8Jt4Dw"], { timeInterval: r });
            case I.WT.DAY:
                let a = A.intl.string(T.default.WmjxYl);
                return n === I.PremiumTypes.TIER_0
                    ? A.intl.formatToPlainString(T.default.Z9mu9q, { timeInterval: a })
                    : A.intl.formatToPlainString(T.default["8Jt4Dw"], { timeInterval: a });
        }
    },
    R = (e) => {
        let { id: t, label: n, amount: i, subscriptionDiscount: r, entitlementDiscount: a, currency: s } = e,
            _ = [{ id: t, label: n, amount: i }];
        return (
            null != r && _.push(N(r, "subscription-discount", A.intl.string(T.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != a, lineItems: _, currency: s }
        );
    },
    f = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: i,
                invoiceAdjustmentDisplayItems: r,
                currency: a,
                subscriptionPlan: s,
                subscriptionTrial: _,
                excludeDiscountsAndAdjustments: o,
            } = t,
            {
                label: E,
                amount: d,
                amountWithoutDiscount: c,
                subscriptionDiscount: u,
                entitlementDiscount: I,
            } = (0, l.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: s,
                subscriptionTrial: _,
                isPrepaidPaymentSource: i,
                currency: a,
            }),
            S = null != u || null != I,
            O = { id: e.id, label: E, amount: S ? c : d, lineItemType: "main" },
            R = [
                O,
                ...r.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                    lineItemType: "adjustment",
                })),
            ];
        return (
            null == u || o || R.push(N(u, "subscription-discount", A.intl.string(T.default["9yHcmL"]))),
            { lineItems: R, primaryLineItem: O, entitlementDiscount: I }
        );
    },
    C = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: i,
                isPrepaidPaymentSource: r = !1,
                includeTaxLineItem: a = !0,
                excludeDiscountsAndAdjustments: s,
            } = t,
            {
                basePlanInvoiceItem: _,
                guildSubscriptionInvoiceItem: o,
                guildSubscriptionPlan: E,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: c,
            } = (0, l.wt)(e, { isPrepaidPaymentSource: r });
        if (null == _) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: u,
            primaryLineItem: I,
            entitlementDiscount: T,
        } = f(_, {
            subscriptionPlan: i,
            subscriptionTrial: n,
            isPrepaidPaymentSource: r,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: s,
        });
        return (
            0 !== d && null != o && null != E && null != c && u.push({ id: o.id, label: c, amount: d }),
            a && u.push({ id: "tax", label: A.intl.string(A.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: u, primaryLineItem: I, entitlementDiscount: T }
        );
    },
    p = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: i, subscriptionPlan: r, subscriptionTrial: a } = t,
            { newPlanInvoiceItem: s, basePlanFullAmount: _, invoiceAdjustmentDisplayItems: o } = (0, l.SA)(e, r),
            {
                lineItems: d,
                primaryLineItem: c,
                entitlementDiscount: u,
            } = f(s, {
                overrideAmount: E.IJ.has(i) ? _ : void 0,
                subscriptionPlan: r,
                subscriptionTrial: a,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: o,
            });
        return { lineItems: d, primaryLineItem: c, entitlementDiscount: u, hasAdjustmentLineItem: o.length > 0 };
    },
    m = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: i = !1, subscriptionPlan: r } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, _.Lw)(r, { isCustomGift: n, isPrepaidPaymentSource: i }),
                amount: e.total - e.tax,
            },
        ];
    },
    L = (e, t) => {
        let n = (0, l.NL)(e),
            i = (function (e, t) {
                if (null == e || null == t || e !== t.discount_id) return null;
                let { discount: n } = t,
                    i = new Date(t.applied_at ?? Date.now()),
                    r = "";
                switch (n.user_usage_limit_interval) {
                    case I.Ff.DAY:
                        i.setDate(i.getDate() + n.user_usage_limit_interval_count),
                            (r = A.intl.formatToPlainString(T.default.WzJTZI, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case I.Ff.WEEK:
                        i.setDate(i.getDate() + 7 * n.user_usage_limit_interval_count),
                            (r = A.intl.formatToPlainString(T.default.LHWoqL, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case I.Ff.MONTH:
                        i.setMonth(i.getMonth() + n.user_usage_limit_interval_count),
                            (r = A.intl.formatToPlainString(T.default.ZQLDzk, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case I.Ff.YEAR:
                        i.setFullYear(i.getFullYear() + n.user_usage_limit_interval_count),
                            (r = A.intl.formatToPlainString(T.default.KpnRtO, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    default:
                        return null;
                }
                return {
                    discountEndDate: i,
                    discountAppliedLabel: r,
                    intervalCount: n.user_usage_limit_interval_count,
                };
            })(null != n ? n.discount_id : null, t),
            r = null != i && 1 === i.intervalCount,
            { subscriptionPlanPrice: a, subscriptionPlanId: s, amount: _ } = e;
        return (0, c.xq)(s)
            ? { amount: r ? a * e.quantity : _, matchedDiscountInfo: i }
            : { amount: _, matchedDiscountInfo: i };
    },
    D = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: i,
                isPremiumBasePlanInvoiceItem: r,
                intervalType: s,
                intervalCount: _,
                discountOffer: o,
                currency: E,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: I,
                subscriptionDiscount: S,
                originalAmount: N,
            } = (0, l.Ae)(e, { subscriptionTrial: t, currency: E }),
            O = d ? A.intl.format(A.t.UDop9c, {}) : void 0,
            R =
                r || null == S
                    ? null
                    : {
                          subText: (0, u.CE)((0, u.$g)(N, E), s, _),
                          subTextHasStrikethrough: !0,
                          valueIcon: i && (0, c.z4)(e.subscriptionPlanId) ? a.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: f, matchedDiscountInfo: C } = L(e, o),
            p = null != C && C.intervalCount > 1,
            m =
                r && p
                    ? {
                          subText: A.intl.format(T.default.Chj1Ke, { discountEndDate: C.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: C, lineItem: { id: e.id, label: I, amount: f, tooltip: O, ...m, ...R } };
    },
    h = function (e, t, n) {
        let {
                overrideRenewalDate: i,
                isSubscriptionUpdate: r,
                discountOffer: a,
                fractionalPremiumInfo: s,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      overrideRenewalDate: void 0,
                      isSubscriptionUpdate: !1,
                      discountOffer: null,
                      fractionalPremiumInfo: null,
                  },
            o = (0, l.Q8)(t, e, { isSubscriptionUpdate: r }),
            { intervalType: E, intervalCount: d } = (0, c.Ge)(t),
            u = t.currency,
            S = [],
            N = o.some((e) => (0, c.xq)(e.subscriptionPlanId));
        for (let e of o) {
            let { subscriptionPlanId: t } = e,
                { lineItem: i } = D(e, n, {
                    invoiceIncludesPremiumBasePlan: N,
                    isPremiumBasePlanInvoiceItem: (0, c.xq)(t),
                    intervalType: E,
                    intervalCount: d,
                    discountOffer: a,
                    currency: u,
                });
            S.push(i);
        }
        let O = (0, _.de)({
            overrideRenewalDate: i,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: r,
            fractionalPremiumInfo: s,
        });
        return {
            lineItems: S,
            intervalType: E,
            intervalCount: d,
            currency: u,
            label: A.intl.string(T.default.GGn3pp),
            totalLineItemValueSubText: A.intl.string(T.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case I.WT.MONTH:
                            return A.intl.string(T.default.WrFWOV);
                        case I.WT.YEAR:
                            return A.intl.string(T.default.SxKq52);
                    }
                return A.intl.string(T.default.jxUJkZ);
            })(E, d),
            totalLineItemLabelSubText: A.intl.format(T.default.MR4VnX, { renewalDate: O }),
        };
    },
    g = (e, t) => {
        let n,
            {
                planId: i,
                disabled: a,
                userLocale: _,
                discountOffer: l,
                isEligibleForDiscount: E,
                discountAmountOff: S,
                isMonthlyDiscountOffer: N,
                priceOptions: O,
                shouldUseCalculatedDiscount: R,
                isCurrentPlan: f,
                isGift: C,
                isEligibleForTrial: p,
                isEligibleForBOGOPromotion: m,
                showPlanStatusSubText: L,
                isInPlanSelectStep: D,
            } = t,
            h = d.A.get(i);
        r()(null != h, "Missing subscriptionPlan");
        let g = (0, c.L_)({
                planId: i,
                shouldUseCalculatedDiscount: R,
                isGift: C,
                priceOptions: O,
                subscriptionPlan: h,
            }),
            b = null != g && null == l,
            U = (0, c.y8)(i, !1, C, O),
            P = (0, o.gS)(e, h, {
                userLocale: _,
                isEligibleForBOGOPromotion: m,
                shouldShowSavingsPercent: b,
                isGift: C,
                planId: i,
                savingsPercent: g,
            }),
            M = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? A.intl.formatToPlainString(A.t.hXcaLT, {
                          price: (0, u.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, u.$g)(e.amount, e.currency);
            })(U, { isEligibleForTrial: p }),
            y = M;
        if (N && null != l && !p) {
            if (h.interval === I.WT.YEAR) n = A.intl.format(T.default.ODKoJd, { percent: g ?? "" });
            else if (h.interval === I.WT.MONTH) {
                if (E && null != S) {
                    let e = (0, u.$g)(U.amount - S, U.currency);
                    y = A.intl.format(A.t.hXcaLT, { price: e });
                }
                n = A.intl.format(T.default.JsSin7, {
                    priceRate: (0, u.CE)(M, h.interval, h.intervalCount),
                    intervalCount: l.discount.user_usage_limit_interval_count,
                });
            }
        }
        L && (D && p ? (n = (0, o.O7)(h, U)) : f ? (n = A.intl.string(A.t.ymSxhy)) : "string" == typeof P && (n = P));
        let G = null != P && "object" == typeof P && "badge" === P.type ? P.text : null,
            v =
                null != G
                    ? G
                    : (0, s.Nc)({
                          subscriptionPlan: h,
                          userLocale: _,
                          discountOffer: l,
                          yearlyPercentSavings: g,
                          shouldHideYearlySavingsBadge: null != e || null != l,
                      });
        return {
            id: i,
            planName: (0, s.YR)(h.interval, h.intervalCount, !0),
            priceText: y,
            secondarySubText: n,
            promoText: v,
            isDisabled: a,
            savingsPercent: g,
        };
    };
